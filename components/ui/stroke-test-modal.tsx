import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";

interface StrokeTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selectedValue: string) => void;
  title: string;
  instruction: string;
  patientGender: string;
}

type StrokeTestType = 'facial' | 'arm' | 'speech';

interface StrokeTestData {
  type: StrokeTestType;
  instruction: string;
  waitInstruction: string;
  options: { value: string; label: string; score: number; }[];
}

export function StrokeTestModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  instruction,
  patientGender,
}: StrokeTestModalProps) {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [currentTestIndex, setCurrentTestIndex] = useState<number>(0);
  const [testResults, setTestResults] = useState<{answer: string, score: number}[]>([]);

  useEffect(() => {
    if (isOpen) {
      setSelectedValue("");
      setCurrentTestIndex(0);
      setTestResults([]);
    }
  }, [isOpen]);

  const getPossessivePronoun = (gender: string): string => {
    switch (gender) {
      case "male":
        return "him";
      case "female":
        return "her";
      default:
        return "their";
    }
  };

  const getPossessivePronoun2 = (gender: string): string => {
    switch (gender) {
      case "male":
        return "his";
      case "female":
        return "her";
      default:
        return "their";
    }
  };

  const getPronoun = (gender: string): string => {
    switch (gender) {
      case "male":
        return "he";
      case "female":
        return "she";
      default:
        return "they";
    }
  };

  const strokeTests: StrokeTestData[] = [
    {
      type: 'facial',
      instruction: `Ask **posPronoun** to <b>smile</b>`,
      waitInstruction: `Was the smile <b>equal</b> on <b>both sides</b> of **posPronoun2** mouth?`,
      options: [
        { value: "Normal smile", label: "Normal smile", score: 0 },
        { value: "Slight difference in smile (possible difference)", label: "Slight difference in smile (possible difference)", score: 1 },
        { value: "Only one side of mouth of face shows a smile (obvious difference)", label: "Only one side of mouth of face shows a smile (obvious difference)", score: 2 },
        { value: "Cannot complete request at all", label: "Cannot complete request at all", score: 2 }
      ]
    },
    {
      type: 'arm',
      instruction: `Ask **posPronoun** to <b>raise both arms above</b> **posPronoun2** <b>head</b>`,
      waitInstruction: `What was **pronoun** <b>able</b> to <b>do</b>?`,
      options: [
        { value: "Both arms raised equally", label: "Both arms raised equally", score: 0 },
        { value: "One arm higher than other (both raised, but unequally)", label: "One arm higher than other (both raised, but unequally)", score: 1 },
        { value: "Only one arm raised", label: "Only one arm raised", score: 2 },
        { value: "Cannot complete request at all", label: "Cannot complete request at all", score: 2 }
      ]
    },
    {
      type: 'speech',
      instruction: `Ask **posPronoun** to <b>say</b>, "The early bird catches the worm"`,
      waitInstruction: `Was **pronoun** able to <b>repeat</b> it <b>correctly</b>?<br/><span className="text-blue-400">(Clarify)</span> Was it <b>slurred</b>, <b>garbled</b>, or <b>not understandable</b>?`,
      options: [
        { value: "Said correctly", label: "Said correctly", score: 0 },
        { value: "Slurred speech", label: "Slurred speech", score: 1 },
        { value: "Garbled or not understandable speech", label: "Garbled or not understandable speech", score: 2 },
        { value: "Cannot complete request at all", label: "Cannot complete request at all", score: 2 }
      ]
    }
  ];

  const currentTest = strokeTests[currentTestIndex];

  const processText = (text: string): string => {
    return text
      .replace(/\*\*posPronoun\*\*/g, getPossessivePronoun(patientGender))
      .replace(/\*\*posPronoun2\*\*/g, getPossessivePronoun2(patientGender))
      .replace(/\*\*pronoun\*\*/g, getPronoun(patientGender));
  };

  const handleNext = () => {
    if (selectedValue) {
      // Find the selected option to get its score
      const selectedOption = currentTest.options.find(option => option.value === selectedValue);
      const score = selectedOption?.score || 0;
      
      const newResults = [...testResults, { answer: selectedValue, score }];
      setTestResults(newResults);
      
      if (currentTestIndex < strokeTests.length - 1) {
        // Move to next test
        setCurrentTestIndex(currentTestIndex + 1);
        setSelectedValue("");
      } else {
        // Move to overview slide
        setCurrentTestIndex(strokeTests.length);
        setSelectedValue("");
      }
    }
  };

  const handleBack = () => {
    if (currentTestIndex > 0) {
      if (currentTestIndex === strokeTests.length) {
        // Going back from overview to last test
        setCurrentTestIndex(strokeTests.length - 1);
        setSelectedValue(testResults[strokeTests.length - 1]?.answer || "");
        setTestResults(testResults.slice(0, -1));
      } else {
        // Going back between tests
        setCurrentTestIndex(currentTestIndex - 1);
        setSelectedValue(testResults[currentTestIndex - 1]?.answer || "");
        setTestResults(testResults.slice(0, -1));
      }
    }
  };

  const handleConfirm = () => {
    // Calculate total score and confirm
    const totalScore = testResults.reduce((sum, result) => sum + result.score, 0);
    onConfirm(totalScore.toString());
    onClose();
  };

  const getTestTitle = (type: StrokeTestType): string => {
    switch (type) {
      case 'facial':
        return 'Facial Droop Test';
      case 'arm':
        return 'Arm Weakness Test';
      case 'speech':
        return 'Speech Test';
      default:
        return 'Stroke Test';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {currentTestIndex < strokeTests.length 
              ? `Stroke Test (${currentTestIndex + 1}/${strokeTests.length})`
              : `Test Overview (4/4)`
            }
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex space-x-2">
            {strokeTests.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded ${
                  index < currentTestIndex
                    ? "bg-green-500"
                    : index === currentTestIndex && currentTestIndex < strokeTests.length
                    ? "bg-blue-500"
                    : "bg-gray-200"
                }`}
              />
            ))}
            {/* Overview slide indicator */}
            <div
              className={`h-2 flex-1 rounded ${
                currentTestIndex === strokeTests.length
                  ? "bg-blue-500"
                  : testResults.length === strokeTests.length
                  ? "bg-green-500"
                  : "bg-gray-200"
              }`}
            />
          </div>

          {/* Conditional Content */}
          {currentTestIndex < strokeTests.length ? (
            <>
              {/* Current Test Instruction */}
              <div className="space-y-3">
                <div 
                  className="p-4 bg-muted rounded-md"
                  dangerouslySetInnerHTML={{ __html: processText(currentTest.instruction) }}
                />
                <div className="text-center">
                  <span className="text-blue-400">(Wait)</span>{" "}
                  <span dangerouslySetInnerHTML={{ __html: processText(currentTest.waitInstruction) }} />
                </div>
              </div>

              {/* Answer Options */}
              <div className="space-y-3">
                <h4 className="font-medium">Answers:</h4>
                <div className="space-y-2">
                  {currentTest.options.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-start space-x-3 cursor-pointer p-3 rounded-md border hover:bg-muted/50 transition-colors"
                    >
                      <input
                        type="radio"
                        name="strokeTest"
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={(e) => setSelectedValue(e.target.value)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <span className="text-sm">{option.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Overview/Results Summary */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-center">Stroke Test Complete</h3>
                
                <div className="p-4 bg-muted rounded-md">
                  <h4 className="font-medium mb-3">Test Results:</h4>
                  <div className="space-y-2">
                    {testResults.map((result, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">{getTestTitle(strokeTests[index].type)}:</span>
                          <div className="text-sm text-muted-foreground">{result.answer}</div>
                        </div>
                        <span className="font-medium">Score: {result.score}</span>
                      </div>
                    ))}
                    <div className="mt-4 pt-3 border-t flex justify-between items-center">
                      <span className="text-lg font-bold">Total Score:</span>
                      <span className="text-2xl font-bold text-blue-600">
                        {testResults.reduce((sum, result) => sum + result.score, 0)}/6
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-900/10 border border-blue-200/10 rounded-md">
                  <div className="text-sm">
                    <strong>Score Interpretation:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• 0-1: Minimal stroke evidence</li>
                      <li>• 2-3: Moderate stroke evidence</li>
                      <li>• 4-6: Strong stroke evidence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between pt-4 border-t">
            <div>
              {currentTestIndex > 0 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                >
                  Back
                </Button>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
              {currentTestIndex < strokeTests.length ? (
                <Button
                  onClick={handleNext}
                  disabled={!selectedValue}
                >
                  {currentTestIndex < strokeTests.length - 1 ? "Next" : "Review"}
                </Button>
              ) : (
                <Button
                  onClick={handleConfirm}
                  className="bg-green-600 hover:bg-green-700 text-primary"
                >
                  Confirm Results
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
