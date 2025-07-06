import { Button } from "@/components/ui/button";
import { InputModal } from "@/components/ui/input-modal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  evaluatePreRenderInstructions,
  getPriorityColor,
  getPronoun,
  processQuestionText,
  replacePronounInNode,
  evaluateDependencies,
  higherCode,
} from "@/lib/utils/emsHelpers";
import { IEMSCaseEntry } from "@/models/interfaces/IEMSCaseEntry";
import { ISettings } from "@/models/interfaces/ISettings";
import { IEMSAnswers } from "@/models/interfaces/protocols/ems/IEMSAnswers";
import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import { IAnswerData } from "@/models/interfaces/protocols/ems/IEMSQuestions";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface IEMSKeyQuestionsProps {
  emsCase: IEMSCaseEntry;
  protocol: IEMSComplaint;
  answers: IAnswerData[];
  codeHasBeenSent: boolean;
  settings: ISettings;
  currentCode: string;
  handleUpdateCode: (code: string) => void;
  handleUpdateSuffix: (suffix: string) => void;
  handleCodeSend: (code: string, override?: boolean, hideSend?: boolean) => void;
  handleUpdateAnswers: (answer: IAnswerData) => void;
  handleProtocolChange: (protocolNum: number) => void;
  handleQuestionComplete: () => void;
  handleSceneSecurityChange: (newVal: boolean) => void;
}

export default function EMSKeyQuestions({
  emsCase,
  protocol,
  answers,
  codeHasBeenSent,
  settings,
  currentCode,
  handleUpdateCode,
  handleUpdateSuffix,
  handleCodeSend,
  handleUpdateAnswers,
  handleProtocolChange,
  handleQuestionComplete,
  handleSceneSecurityChange,
}: IEMSKeyQuestionsProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [displayQuestionNumber, setDisplayQuestionNumber] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>("qa");
  const [operatorCallsign, setOperatorCallsign] = useState<string>("");
  const [isInputModalOpen, setIsInputModalOpen] = useState<boolean>(false);
  const [pendingAnswer, setPendingAnswer] = useState<IEMSAnswers | null>(null);
  const selectRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const storedOperator = localStorage.getItem("CALLSIGN");
    if (storedOperator) {
      setOperatorCallsign(storedOperator);
    }
  }, []);

  // Helper function to calculate display number for a given question index
  const calculateDisplayNumber = (questionIndex: number): number => {
    let displayNumber = 1;

    for (let i = 0; i < questionIndex; i++) {
      const question = protocol.questions[i];
      const shouldRender = question?.preRenderInstructions
        ? evaluatePreRenderInstructions(
            question.preRenderInstructions,
            emsCase,
            answers,
            currentCode
          )
        : true;

      if (shouldRender) {
        displayNumber++;
      }
    }

    return displayNumber;
  };

  // Initialize component - runs when protocol or emsCase changes
  useEffect(() => {
    const initializeComponent = () => {
      if (answers.length > 0) {
        // Find the next question that hasn't been answered yet
        let displayNumber = 1;
        let foundNextQuestion = false;

        for (let i = 0; i < protocol.questions.length; i++) {
          const question = protocol.questions[i];

          // Check if this question should be rendered
          const shouldRender = question?.preRenderInstructions
            ? evaluatePreRenderInstructions(
                question.preRenderInstructions,
                emsCase,
                answers,
                currentCode
              )
            : true;

          if (shouldRender) {
            // Check if this question has been answered by matching the actual question index
            const hasBeenAnswered = answers.some(
              (answer) => answer.questionIndex === i // Match against the actual question index
            );

            if (!hasBeenAnswered) {
              // This is the next unanswered question
              setCurrentQuestionIndex(i);
              setDisplayQuestionNumber(displayNumber);
              foundNextQuestion = true;
              break;
            }

            displayNumber++;
          }
        }

        if (!foundNextQuestion) {
          // All questions have been answered
          handleQuestionComplete();
          return;
        }
      } else {
        // No previous answers, start from the beginning - find first valid question
        let foundFirstQuestion = false;
        for (let i = 0; i < protocol.questions.length; i++) {
          const question = protocol.questions[i];
          const shouldRender = question?.preRenderInstructions
            ? evaluatePreRenderInstructions(
                question.preRenderInstructions,
                emsCase,
                answers,
                currentCode
              )
            : true;

          if (shouldRender) {
            setCurrentQuestionIndex(i);
            setDisplayQuestionNumber(1);
            foundFirstQuestion = true;
            break;
          }
        }

        if (!foundFirstQuestion) {
          // No valid questions found
          console.warn("No valid questions found in protocol");
          handleQuestionComplete();
          return;
        }
      }
    };

    // Initialize when we have protocol and emsCase
    if (protocol && emsCase) {
      initializeComponent();
    }
  }, [protocol?.protocol, emsCase?.chiefComplaint, currentCode]);

  // Helper function to find the next valid question index
  const findNextValidQuestionIndex = (
    startIndex: number,
    newAnswer?: IAnswerData
  ): number => {
    // Create a temporary answers array that includes the new answer if provided
    const answersToCheck = newAnswer ? [...answers, newAnswer] : answers;

    // Now find the next valid question starting from startIndex
    for (let i = startIndex; i < protocol.questions.length; i++) {
      const question = protocol.questions[i];
      const shouldRender = question?.preRenderInstructions
        ? evaluatePreRenderInstructions(
            question.preRenderInstructions,
            emsCase,
            answersToCheck, // Use the updated answers array
            currentCode
          )
        : true;

      if (shouldRender) {
        // Check if this question has already been answered
        const hasBeenAnswered = answersToCheck.some(
          (answer) => answer.questionIndex === i
        );

        if (!hasBeenAnswered) {
          // Calculate and set the correct display number
          const displayNumber = calculateDisplayNumber(i) + 1;
          setDisplayQuestionNumber(displayNumber);
          return i;
        }
      }
    }
    // No more valid questions found - all questions are complete
    return -1;
  };

  const currentQuestion = protocol.questions[currentQuestionIndex];

  // Check pre-render instructions for the current question
  const shouldRenderCurrentQuestion = currentQuestion?.preRenderInstructions
    ? evaluatePreRenderInstructions(
        currentQuestion.preRenderInstructions,
        emsCase,
        answers,
        currentCode
      )
    : true;

  // Skip questions that shouldn't be rendered
  useEffect(() => {
    if (currentQuestion && !shouldRenderCurrentQuestion) {
      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < protocol.questions.length) {
        const nextValidIndex = findNextValidQuestionIndex(nextIndex); // No new answer here
        if (nextValidIndex === -1) {
          // All questions have been answered
          handleQuestionComplete();
        } else {
          setCurrentQuestionIndex(nextValidIndex);
        }
      } else {
        // All questions have been answered
        handleQuestionComplete();
      }
    }
  }, [currentQuestion, shouldRenderCurrentQuestion]);

  function handleSelectChange(value: string) {
    // Parse the value format: "answer-{index}-{customID}"
    const parts = value.split("-");
    const answerIndex = parseInt(parts[1], 10); // Get the answer index

    // Get the original answer object directly from the current question
    const answerObj = currentQuestion.answers[answerIndex];

    // If this answer requires input, show the input modal
    if (answerObj.input) {
      setPendingAnswer(answerObj);
      setIsInputModalOpen(true);
      return;
    }

    // Process the answer normally
    processAnswer(answerObj);
  }

  function processAnswer(answerObj: IEMSAnswers, inputValue?: string) {
    selectRef?.current?.blur();

    // Evaluate dependencies first if they exist
    if (answerObj.dependency) {
      const dependencyResult = evaluateDependencies(
        answerObj.dependency,
        emsCase,
        answers,
        currentCode
      );

      if (dependencyResult) {
        // Handle dependency results
        if (dependencyResult.code) {
          if (dependencyResult.send && settings.quickSend && !codeHasBeenSent) {
            handleCodeSend(dependencyResult.code);
          } else {
            handleUpdateCode(dependencyResult.code);
          }
        }
        if (dependencyResult.subCode) {
          handleUpdateSuffix(dependencyResult.subCode);
        }
      }
    }

    const answer = answerObj.answer;
    let display = answerObj.display;
    let questionDisplay = answerObj.questionDisplay;

    // Replace {input} placeholders with the provided input value
    if (inputValue) {
      display = display.replace(/\{input\}/g, inputValue);
      questionDisplay = questionDisplay.replace(/\{input\}/g, inputValue);
    }

    const answerToSave: IAnswerData = {
      question: processQuestionText(
        replacePronounInNode(
          currentQuestion.text,
          getPronoun(emsCase.patientGender)
        )
      ),
      answer,
      display: display.replace(
        /\*\*pronoun\*\*/,
        getPronoun(emsCase.patientGender)
      ),
      questionDisplay: questionDisplay.replace(
        /\*\*pronoun\*\*/,
        getPronoun(emsCase.patientGender)
      ),
      questionIndex: currentQuestionIndex, // Store the actual question index
      omit: currentQuestion.omit || false,
      timeStamp: new Date().toISOString(),
    };

    handleUpdateAnswers(answerToSave);

    if (answerObj.gotoProtocol) {
      return handleProtocolChange(answerObj.gotoProtocol);
    }

    if (answerObj.setSceneSecure !== undefined) {
      handleSceneSecurityChange(answerObj.setSceneSecure);
    }

    if (answerObj.updateSuffix) {
      handleUpdateSuffix(answerObj.updateSuffix);
    }

    console.log("EMS CASE", emsCase);
    console.log("Code has been sent", codeHasBeenSent);

    if (
      (answerObj.send &&
        settings.quickSend &&
        answerObj.updateCode &&
        !codeHasBeenSent) ||
      (answerObj.updateCode && answerObj.overrideSend && settings.quickSend)
    ) {
      return handleCodeSend(answerObj.updateCode);
    } else if (answerObj.updateCode) {
      handleUpdateCode(answerObj.updateCode);
    }

    // Check if this answer should end the questioning
    if (answerObj.end) {
      handleQuestionComplete();
      return;
    }

    // Move to the next question
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < protocol.questions.length) {
      // Pass the current answer to findNextValidQuestionIndex so it can be used for preRenderInstructions
      const nextValidIndex = findNextValidQuestionIndex(
        nextIndex,
        answerToSave
      );
      if (nextValidIndex === -1) {
        handleQuestionComplete();
      } else {
        setCurrentQuestionIndex(nextValidIndex);
      }
    } else {
      handleQuestionComplete();
    }
  }

  useEffect(() => {
    if (currentQuestion.defaultTab !== activeTab) {
      setActiveTab(currentQuestion.defaultTab || "qa");
      setTimeout(() => {
        selectRef?.current?.click();
      }, 50);
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (
      emsCase.patientBreathing === "no" ||
      emsCase.patientBreathing === "agonal/ineffective"
    ) {
      // Find the code in the protocol that has the property notBreathing
      const notBreathingCode = protocol.determinants
        .flatMap((det) => det.codes)
        .find((code) => code.notBreathing);
      if (
        notBreathingCode &&
        higherCode(notBreathingCode.code, currentCode) === notBreathingCode.code
      ) {
        handleCodeSend(notBreathingCode.code, true, true);
      }
    } else if (emsCase.patientConsciousness === "no") {
      // Find the code in the protocol that has the property notConscious
      const notConsciousCode = protocol.determinants
        .flatMap((det) => det.codes)
        .find((code) => code.notConscious);
      if (
        notConsciousCode &&
        higherCode(notConsciousCode.code, currentCode) === notConsciousCode.code
      ) {
        handleCodeSend(notConsciousCode.code, true, true);
      }
    } else if (emsCase.numPatients > 1) {
      // Find the code in the protocol that has the property multiplePatients
      const multiplePatientsCode = protocol.determinants
        .flatMap((det) => det.codes)
        .find((code) => code.multPatient);
      if (
        multiplePatientsCode &&
        higherCode(multiplePatientsCode.code, currentCode) ===
          multiplePatientsCode.code
      ) {
        handleCodeSend(multiplePatientsCode.code, true, true);
      }
    }
  }, [currentQuestionIndex]);

  const handleInputModalClose = () => {
    setIsInputModalOpen(false);
    setPendingAnswer(null);
  };

  const handleInputModalConfirm = (inputValue: string) => {
    if (pendingAnswer) {
      processAnswer(pendingAnswer, inputValue);
      setIsInputModalOpen(false);
      setPendingAnswer(null);
    }
  };

  // If no current question, there might be no valid questions
  if (!currentQuestion) {
    return (
      <div className="p-6 space-y-6">
        <div className="text-center">
          <p>No valid questions found for this protocol.</p>
        </div>
      </div>
    );
  }

  // If current question shouldn't be rendered, return null
  if (!shouldRenderCurrentQuestion) return null;

  return (
    <div className="space-y-12">
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-4 gap-4 items-start">
          <label className="col-span-2 font-medium flex items-center gap-2">
            <p className="mr-2">{displayQuestionNumber}.</p>
            <div className="text-lg font-semibold">
              {replacePronounInNode(
                currentQuestion.text,
                getPronoun(emsCase.patientGender)
              )}
            </div>
          </label>
          {currentQuestion.questionType === "select" ? (
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger
                ref={selectRef}
                className="w-full col-span-2 p-4 py-4"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currentQuestion.answers
                  .filter((answer: IEMSAnswers) => {
                    // Check if answer should be rendered based on preRenderInstructions
                    if (answer.preRenderInstructions) {
                      return evaluatePreRenderInstructions(
                        answer.preRenderInstructions,
                        emsCase,
                        answers,
                        currentCode
                      );
                    }
                    return true; // Show answer if no preRenderInstructions
                  })
                  .map((answer: IEMSAnswers) => {
                    // Find the original index in the unfiltered array
                    const originalIndex = currentQuestion.answers.findIndex(
                      (a) => a === answer
                    );
                    const customID = Math.random()
                      .toString(36)
                      .substring(2, 15);

                    return (
                      <SelectItem
                        key={`${originalIndex}-${customID}`}
                        value={`answer-${originalIndex}-${customID}`}
                      >
                        {answer.answer}
                      </SelectItem>
                    );
                  })}
              </SelectContent>
            </Select>
          ) : (
            <p>Other!</p>
          )}
        </div>
      </div>

      {/* Tabs section unchanged */}
      <div className="container">
        <Tabs
          defaultValue="qa"
          value={activeTab}
          onValueChange={setActiveTab}
          className="h-full flex flex-col"
        >
          <div className="flex-1 border rounded-lg">
            <TabsList className="grid w-full grid-cols-6 bg-transparent">
              <div className="flex items-center justify-between col-span-2">
                <TabsTrigger value="qa">Question Answers</TabsTrigger>
                <TabsTrigger value="ai">Additional Information</TabsTrigger>
                <TabsTrigger value="det/suf">Determinants/Suffixes</TabsTrigger>
                <TabsTrigger value="dcodes">Det. Codes</TabsTrigger>
              </div>
            </TabsList>

            <div className="p-6 h-full">
              <TabsContent value="qa" className="h-full space-y-1">
                {answers.map((answer) => {
                  const questionText =
                    answer.questionDisplay.charAt(0).toUpperCase() +
                    answer.questionDisplay.slice(1);

                  // Calculate the display number for this answered question
                  const displayNumber =
                    calculateDisplayNumber(answer.questionIndex) + 1;

                  return (
                    <div
                      key={answer.questionIndex}
                      className="font-semibold cursor-default flex items-center gap-2 p-1 rounded-md"
                    >
                      <span>{displayNumber}.</span>
                      <span>{questionText}</span>
                    </div>
                  );
                })}
              </TabsContent>
              <TabsContent value="ai" className="h-full">
                {currentQuestion.additionalInstructions}
              </TabsContent>
              <TabsContent value="det/suf" className="h-full">
                <div className="flex flex-col">
                  <h2 className="font-semibold text-lg mb-2">Determinants:</h2>
                  {protocol.determinants.map((prio, prioIndex) =>
                    prio.codes.map((code, codeIndex) => (
                      <div
                        className="pl-4 flex items-start space-x-4 p-1 hover:bg-muted-foreground/10 rounded-md cursor-default"
                        key={`${prioIndex}-${code.code}`}
                      >
                        <div className="w-6">
                          {codeIndex === 0 && (
                            <p
                              className={`${getPriorityColor(
                                prio.priority
                              )} font-bold text-md`}
                            >
                              {prio.priority}
                            </p>
                          )}
                        </div>
                        <p className="text-md flex items-center gap-4">
                          <span>{code.code.slice(-2)}</span>
                          {code.text}
                        </p>
                      </div>
                    ))
                  )}
                  <h2 className="font-semibold text-lg mt-4 mb-2">Suffixes:</h2>
                  <ul className="list-inside space-y-1 list-none ml-4">
                    {[
                      ...new Map(
                        protocol.determinants
                          .flatMap((prio) => prio.codes)
                          .flatMap((code) => code.subCodes || [])
                          .map((sub) => [sub.suffix, sub.text])
                      ).entries(),
                    ].map(([suffix, text], i) => (
                      <li
                        key={`${suffix}-${i}`}
                        className="hover:bg-muted-foreground/10 rounded-md p-1"
                      >
                        <span className="font-mono font-semibold m-4">
                          {suffix}
                        </span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="dls" className="h-full">
                <div className="flex items-center justify-center h-full">
                  <h2 className="text-2xl font-semibold text-muted-foreground">
                    Det Codes
                  </h2>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>

      {/* <div className="grid grid-cols-5 gap-4 items-start mb-10">
        <Button
          variant="outline"
          onClick={() => {
            // Go to the previous question, if there is none, run handleBackToEntry
            if (currentQuestionIndex > 0) {
              const prevIndex = currentQuestionIndex - 1;
              setCurrentQuestionIndex(prevIndex);
              setActiveTab("qa");
              // Reset select state for navigation
              setSelectValue(undefined);
              setSelectOpen(false);
            } else {
              handleBackToEntry();
            }
          }}
        >
          <ArrowLeft className="w-4 h-4 text-destructive" />
        </Button>
        {currentQuestionIndex > 0 &&
          currentQuestionIndex < visibleQuestions.length - 1 && (
            <Button
              variant="outline"
              className="col-5"
              onClick={() => {
                const nextIndex = currentQuestionIndex + 1;
                if (nextIndex < visibleQuestions.length) {
                  setCurrentQuestionIndex(nextIndex);
                  setActiveTab("qa");
                  // Reset select state for navigation
                  setSelectValue(undefined);
                  setSelectOpen(false);
                }
              }}
            >
              <ArrowRight className="w-4 h-4 text-green-500" />
            </Button>
          )}
      </div> */}
      <div className="p-4 rounded-lg border grid grid-cols-5 gap-4">
        <div className="col-span-2 flex items-center gap-2 border-r ">
          <p className="font-bold text-md">Operator:</p>
          <p className="text-md text-muted-foreground">{operatorCallsign}</p>
        </div>
        {emsCase?.chiefComplaint && (
          <div className="col-span-3 flex gap-2">
            <p>
              {emsCase.patientAge}-{emsCase.ageUnit}-old,{" "}
              {emsCase.patientGender.charAt(0).toUpperCase() +
                emsCase.patientGender.slice(1)}
              ,{" "}
              {emsCase.patientConsciousness === "yes"
                ? "Conscious"
                : emsCase.patientConsciousness === "no"
                ? "Unconscious"
                : "Unk Consciousness"}
              ,{" "}
              {emsCase.patientBreathing === "yes"
                ? "Breathing."
                : emsCase.patientBreathing === "no"
                ? "Not Breathing."
                : emsCase.patientBreathing === "agonal/ineffective"
                ? "Agonal/Ineffective."
                : "Unk Consciousness."}
            </p>
            {emsCase.currentCode !== "DEFAULT_CODE" && (
              <>
                <p className="text-green-500">
                  Code:{" "}
                  {emsCase?.currentCode &&
                    emsCase.currentCode !== "DEFAULT_CODE" &&
                    `${parseInt(
                      emsCase.currentCode.slice(0, 2),
                      10
                    )}-${emsCase.currentCode.charAt(2)}-${parseInt(
                      emsCase.currentCode.slice(3),
                      10
                    )}`}
                  :
                </p>
                <p className="text-blue-400">
                  {
                    protocol.determinants
                      .flatMap((d) => d.codes)
                      .find((c) => c.code === emsCase.currentCode)?.text
                  }
                </p>
              </>
            )}
          </div>
        )}
      </div>

      <InputModal
        isOpen={isInputModalOpen}
        onClose={handleInputModalClose}
        onConfirm={handleInputModalConfirm}
        title={
          pendingAnswer
            ? `Enter value for: ${pendingAnswer.answer}`
            : "Enter Value"
        }
        placeholder="Enter your input..."
      />
    </div>
  );
}
