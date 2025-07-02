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
  getPriorityColor,
  getPronoun,
  processQuestionText,
  replacePronounInNode,
} from "@/lib/utils/emsHelpers";
import { IEMSCaseEntry } from "@/models/interfaces/IEMSCaseEntry";
import { IEMSAnswers } from "@/models/interfaces/protocols/ems/IEMSAnswers";
import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import { IAnswerData } from "@/models/interfaces/protocols/ems/IEMSQuestions";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

interface IEMSKeyQuestionsProps {
  emsCase: IEMSCaseEntry;
  protocol: IEMSComplaint;
  answers: IAnswerData[];
  codeHasBeenSent: boolean;
  handleUpdateCode: (code: string) => void;
  handleUpdateSuffix: (suffix: string) => void;
  handleCodeSend: (code: string) => void;
  handleUpdateAnswers: (answer: IAnswerData) => void;
  handleProtocolChange: (protocolNum: number) => void;
}

export default function EMSKeyQuestions({
  emsCase,
  protocol,
  answers,
  codeHasBeenSent,
  handleUpdateCode,
  handleUpdateSuffix,
  handleCodeSend,
  handleUpdateAnswers,
  handleProtocolChange
}: IEMSKeyQuestionsProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>("qa");
  const [operatorCallsign, setOperatorCallsign] = useState<string>("");

  useEffect(() => {
    const storedOperator = localStorage.getItem("CALLSIGN");
    if (storedOperator) {
      setOperatorCallsign(storedOperator);
    }
  }, []);

  const currentQuestion = protocol.questions[currentQuestionIndex];

  function handleSelectChange(value: string) {
    const answerObjRaw = value.split("-")[0];

    const answerObj = JSON.parse(answerObjRaw) as IEMSAnswers;

    const answer = answerObj.answer;
    const display = answerObj.display
    const questionDisplay = answerObj.questionDisplay

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
      questionIndex: currentQuestionIndex,
      omit: currentQuestion.omit || false,
      timeStamp: new Date().toISOString(),
    };
    handleUpdateAnswers(answerToSave);

    if(answerObj.gotoProtocol) {
      return handleProtocolChange(answerObj.gotoProtocol);
    }

    if(answerObj.send && answerObj.updateCode && !codeHasBeenSent) {
      handleCodeSend(answerObj.updateCode);
    } else if(answerObj.updateCode) {
      handleUpdateCode(answerObj.updateCode);
    } 

    if(answerObj.updateSuffix) {
      handleUpdateSuffix(answerObj.updateSuffix);
    }


    setCurrentQuestionIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < protocol.questions.length) {
        return nextIndex;
      } else {
        return 0;
      }
    });
  }

  useEffect(() => {
    if(currentQuestion.defaultTab !== activeTab) {
      setActiveTab(currentQuestion.defaultTab || "qa");
    }
  }, [currentQuestion]);

  if (!currentQuestion) return null;

  return (
    <div className="space-y-12">
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-4 gap-4 items-start">
          <label className="col-span-2 font-medium flex items-center gap-2">
            <p className="mr-2">{currentQuestionIndex + 1}.</p>
            <span className="text-lg font-semibold">
              {/* Render out the question text */}
              {replacePronounInNode(
                currentQuestion.text,
                getPronoun(emsCase.patientGender)
              )}
            </span>
          </label>
          {currentQuestion.questionType === "select" ? (
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-full col-span-2 p-4 py-4">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currentQuestion.answers.map((answer: IEMSAnswers, index) => {
                  const customID = Math.random().toString(36).substring(2, 15);

                  return (
                    <SelectItem
                      key={index}
                      value={`${JSON.stringify(answer)}-${customID}`}
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
                {answers.map((answer, index) => {

                  const questionText = answer.questionDisplay.charAt(0).toUpperCase() +
                    answer.questionDisplay.slice(1);

                  return (
                    <div
                      key={index}
                      className="font-semibold cursor-default flex items-center gap-2 p-1 rounded-md"
                      onClick={() => {
                        console.log("Clicked on answer:", answer.questionIndex);
                      }}
                    >
                      {answer.questionIndex + 1}.<p>{questionText}</p>
                    </div>
                  );
                })}
                {/* {answeredQuestions.length > 0 &&
                  answeredQuestions.map((answer, index) => {
                    return (
                      <div
                        key={index}
                        className="font-semibold cursor-pointer"
                        // When the person clicks on the answer, go back to the question
                        onClick={() => {
                          const questionIndex = visibleQuestions.findIndex(
                            (q) =>
                              processQuestionText(q.text) === answer.question
                          );
                          if (questionIndex >= 0) {
                            setCurrentQuestionIndex(questionIndex);
                            setActiveTab("qa");
                            // Reset select state when jumping to previous question
                            setSelectValue(undefined);
                            setSelectOpen(false);
                          }
                        }}
                      >
                        {index + 1}.{" "}
                        {answer.questionDisplay.charAt(0).toUpperCase() +
                          answer.questionDisplay.slice(1)}{" "}
                      </div>
                    );
                  })} */}
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
                        key={i}
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
            console.log(
              "Going back to previous question",
              currentQuestionIndex
            );
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
          <div className="col-span-3">
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
                ? "Breathing"
                : emsCase.patientBreathing === "no"
                ? "Not Breathing"
                : emsCase.patientBreathing === "agonal/ineffective"
                ? "Agonal/Ineffective"
                : "Unk Consciousness"}
            </p>
          </div>
        )}
      </div>
      {/* 
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
      /> */}
    </div>
  );
}
