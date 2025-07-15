"use client";

import FireCaseEntry from "@/components/create-call/fire/case-entry";
import FireCaseSummary from "@/components/create-call/fire/case-summary";
import FireKeyQuestions from "@/components/create-call/fire/key-questions";
import SendFireCase from "@/components/create-call/fire/send-case";
import Footer from "@/components/footer";
import LoadingState from "@/components/loading-state";
import Navbar from "@/components/navbar";
import TimerDisplay from "@/components/TimerDisplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fireProtocols } from "@/data/protocols/fireProtocols";
import getSettings, { DEFAULT_SETTINGS, PRIORITY_ORDER } from "@/lib/utils";
import { getPriorityFromCode, higherCode, isSamePriority } from "@/lib/utils/fireHelpers";
import { IFireCaseEntry } from "@/models/interfaces/IFireCaseEntry";
import { INewCallData } from "@/models/interfaces/INewCallData";
import { ISettings } from "@/models/interfaces/ISettings";
import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import { IAnswerData } from "@/models/interfaces/protocols/fire/IFireQuestions";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

function getProtocolByName(str: string): IFireComplaint | undefined {
  const protocolNum = str.split(" - ")[0].trim();
  const number = parseInt(protocolNum, 10);
  if (isNaN(number)) return undefined;
  return fireProtocols.find((protocol) => protocol.protocol === number);
}

export default function CreateCallFire() {
  const [settings, setSettings] = useState<ISettings>(DEFAULT_SETTINGS);
  const [callDetails, setCallDetails] = useState<INewCallData | undefined>(
    undefined
  );
  const [fireCase, setFireCase] = useState<IFireCaseEntry | undefined>(
    undefined
  );
  const [protocol, setProtocol] = useState<IFireComplaint | undefined>(
    undefined
  );
  const [answers, setAnswers] = useState<IAnswerData[]>([]);
  const [activeTab, setActiveTab] = useState<string>("entry");
  const [recommendedCode, setRecommendedCode] = useState<string>("");
  const [callbackOnSummary, setCallbackOnSummary] = useState<boolean>(false);
  const router = useRouter();

  // Load the state from localStorage
  useEffect(() => {
    const storedCallDetails = localStorage.getItem("NEW_CALL");
    if (storedCallDetails) {
      const parsedCallDetails: INewCallData = JSON.parse(storedCallDetails);
      setCallDetails(parsedCallDetails);
    }

    const storedFireCase = localStorage.getItem("FIRE_CASE");
    if (storedFireCase) {
      const parsedFireCase: IFireCaseEntry = JSON.parse(storedFireCase);
      setFireCase(parsedFireCase);
      setAnswers(parsedFireCase.answers || []);

      const complaintNumAsString = parsedFireCase.chiefComplaint
        .split(" - ")[0]
        .trim();
      const complaintNum = parseInt(complaintNumAsString, 10);
      const fireProtocol = fireProtocols.find(
        (p) => p.protocol === complaintNum
      );
      setProtocol(fireProtocol);
    }

    // Load the settings
    setSettings(getSettings());
  }, []);

  // Window event listeners
  useEffect(() => {
    const handleSettingsChange = (event: Event) => {
      const customEvent = event as CustomEvent<ISettings>;
      const newSettings = customEvent.detail;
      setSettings(newSettings);
    };

    window.addEventListener("settings-change", handleSettingsChange);

    return () => {
      window.removeEventListener("settings-change", handleSettingsChange);
    };
  }, []);

  // Helper function to filter selectable codes by priority of the current code
  const filterSelectableCodesByPriority = useCallback(
    (
      existingCodes: string[],
      currentCode: string,
      protocol: IFireComplaint | undefined
    ): string[] => {
      if (!protocol) return existingCodes;

      const codePriority = getPriorityFromCode(currentCode);
      const codePriorityIndex = PRIORITY_ORDER.indexOf(codePriority);

      // Filter out codes of lower priority
      const filteredCodes = existingCodes.filter((code) => {
        const codePrePriority = getPriorityFromCode(code);
        const codePrePriorityIndex = PRIORITY_ORDER.indexOf(codePrePriority);
        return codePrePriorityIndex >= codePriorityIndex;
      });

      // Add override codes (ending with "00") from current or higher priorities if not already present
      protocol.determinants.forEach((determinant) => {
        const determinantPriorityIndex = PRIORITY_ORDER.indexOf(
          determinant.priority
        );
        if (determinantPriorityIndex >= codePriorityIndex) {
          determinant.codes.forEach((codeObj) => {
            if (
              codeObj.code.endsWith("00") &&
              !filteredCodes.includes(codeObj.code)
            ) {
              filteredCodes.push(codeObj.code);
            }
          });
        }
      });

      return filteredCodes;
    },
    []
  );

  //   When case entry has been completed
  const handleCaseEntryCompletion = useCallback(
    (caseData: IFireCaseEntry) => {
      if (!caseData) {
        return console.error(
          "No case data provided during case entry completion."
        );
      }

      const newProtocol = getProtocolByName(caseData.chiefComplaint);
      const initialSelectableCodes: string[] = []; // Start with empty array

      setFireCase((prevCase) => {
        const updatedCase = {
          ...prevCase,
          ...caseData,
          hasBeenSent: false,
          currentCode: "DEFAULT_CODE",
          currentSuffix: "DEFAULT_SUFFIX",
          answers: [],
          selectableCodes: initialSelectableCodes,
        };
        localStorage.setItem("FIRE_CASE", JSON.stringify(updatedCase));
        return updatedCase;
      });
      setProtocol(newProtocol);
      setActiveTab("kq");
      localStorage.setItem("FIRE_CASE", JSON.stringify(caseData));

      if (settings.soundEffects) {
        const audio = new Audio("/audio/kqstart.mp3");
        audio.volume = 0.5;
        audio.play();
      }
    },
    [settings]
  );

  //   When a question is answered in key questions
  const updateAnswers = useCallback((answer: IAnswerData) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      const index = updatedAnswers.findIndex(
        (a) => a.questionIndex === answer.questionIndex
      );

      if (index !== -1) {
        updatedAnswers[index] = answer;
      } else {
        updatedAnswers.push(answer);
      }

      // Also update fireCase with new answers - preserve currentSuffix
      setFireCase((prevCase) => {
        if (!prevCase) return prevCase;
        const updatedCase = { ...prevCase, answers: updatedAnswers };
        localStorage.setItem("FIRE_CASE", JSON.stringify(updatedCase));
        return updatedCase;
      });

      return updatedAnswers;
    });
  }, []);

  // When case entry has been completed
  const updateCode = useCallback(
    (code: string) => {
      if (code === fireCase?.currentCode) return;
      if (!fireCase) return;

      const currentPriority = getPriorityFromCode(
        fireCase?.currentCode || "DEFAULT_CODE"
      );
      const newPriority = getPriorityFromCode(code);

      const isHigherOrEqualPriority =
        PRIORITY_ORDER.indexOf(newPriority) >=
        PRIORITY_ORDER.indexOf(currentPriority);

      if (!isHigherOrEqualPriority) return; // Ignore codes with lower priority

      // If a code has already been sent, just add new codes to selectableCodes
      if (fireCase.hasBeenSent) {
        if (!fireCase.selectableCodes.includes(code)) {
          const updatedSelectableCodes = [...fireCase.selectableCodes, code];
          const filteredSelectableCodes = filterSelectableCodesByPriority(
            updatedSelectableCodes,
            fireCase.currentCode,
            protocol
          );
          setFireCase((prevCase) => {
            if (!prevCase) return prevCase;
            const updatedCase = {
              ...prevCase,
              selectableCodes: filteredSelectableCodes,
            };
            localStorage.setItem("FIRE_CASE", JSON.stringify(updatedCase));
            return updatedCase;
          });
        }
        return;
      }

      if (
        higherCode(fireCase?.currentCode || "DEFAULT_CODE", code) ===
        fireCase?.currentCode
      ) {
        // Current code is higher or same priority
        if (
          isSamePriority(code, fireCase?.currentCode || "DEFAULT_CODE") &&
          !fireCase.selectableCodes.includes(code)
        ) {
          // Add the code to selectableCodes and filter by priority
          const updatedSelectableCodes = [...fireCase.selectableCodes, code];
          const filteredSelectableCodes = filterSelectableCodesByPriority(
            updatedSelectableCodes,
            fireCase.currentCode,
            protocol
          );
          setFireCase((prevCase) => {
            if (!prevCase) return prevCase;
            const updatedCase = {
              ...prevCase,
              selectableCodes: filteredSelectableCodes,
            };
            localStorage.setItem("FIRE_CASE", JSON.stringify(updatedCase));
            return updatedCase;
          });
        }
      } else {
        // New code is higher priority than current code
        // Add the previous code to selectableCodes and filter by new priority
        const updatedSelectableCodes = [
          ...fireCase.selectableCodes,
          fireCase.currentCode,
        ];
        const filteredSelectableCodes = filterSelectableCodesByPriority(
          updatedSelectableCodes,
          code,
          protocol
        );
        setFireCase((prevCase) => {
          if (!prevCase) return prevCase;

          const updatedCase = {
            ...prevCase,
            currentCode: code,
            selectableCodes: filteredSelectableCodes,
          };

          localStorage.setItem("FIRE_CASE", JSON.stringify(updatedCase));

          return updatedCase;
        });
      }
    },
    [
      fireCase?.currentCode,
      fireCase?.selectableCodes,
      fireCase?.hasBeenSent,
      protocol,
      filterSelectableCodesByPriority,
    ]
  );

  // When suffix is being updated from key questions
  const updateSuffix = useCallback((suffix: string) => {
    setFireCase((prevCase) => {
      if (!prevCase) return prevCase;

      const updatedCase = {
        ...prevCase,
        currentSuffix: suffix,
      };
      localStorage.setItem("FIRE_CASE", JSON.stringify(updatedCase));
      return updatedCase;
    });
  }, []);

  //   When scene safety is being updated from key questions
  const updateSceneSecurity = useCallback((newVal: boolean) => {
    setFireCase((prevCase) => {
      if (!prevCase) return prevCase;
      const updatedCase = {
        ...prevCase,
        secureScene: newVal,
      };
      localStorage.setItem("FIRE_CASE", JSON.stringify(updatedCase));
      return updatedCase;
    });
  }, []);

  // When code is sent from key questions
  const handleSendCodeFromKQ = useCallback(
    (code: string, override?: boolean, hideSend = true) => {
      if (fireCase?.hasBeenSent && !override) return;
      if (code === fireCase?.currentCode) return;

      const currentPriority = getPriorityFromCode(
        fireCase?.currentCode || "DEFAULT_CODE"
      );
      const newPriority = getPriorityFromCode(code);

      const isHigherOrEqualPriority =
        PRIORITY_ORDER.indexOf(newPriority) >=
        PRIORITY_ORDER.indexOf(currentPriority);

      if (!isHigherOrEqualPriority) return; // Filter out lower priority codes

      if (
        higherCode(fireCase?.currentCode || "DEFAULT_CODE", code) ===
        fireCase?.currentCode
      ) {
        if (isSamePriority(code, fireCase?.currentCode || "DEFAULT_CODE")) {
          // Add the code to selectableCodes and filter by priority
          const updatedSelectableCodes = fireCase.selectableCodes.includes(code)
            ? fireCase.selectableCodes
            : [...fireCase.selectableCodes, code];
          const filteredSelectableCodes = filterSelectableCodesByPriority(
            updatedSelectableCodes,
            fireCase.currentCode,
            protocol
          );
          setFireCase((prevCase) => {
            if (!prevCase) return prevCase;
            const updatedCase = {
              ...prevCase,
              hasBeenSent: hideSend,
              selectableCodes: filteredSelectableCodes,
            };
            localStorage.setItem("FIRE_CASE", JSON.stringify(updatedCase));
            return updatedCase;
          });
        } else {
          setFireCase((prevCase) => {
            if (!prevCase) return prevCase;
            const updatedCase = {
              ...prevCase,
              hasBeenSent: hideSend,
            };
            localStorage.setItem("FIRE_CASE", JSON.stringify(updatedCase));
            return updatedCase;
          });
        }
        return;
      }

      // New code is higher priority - add previous code to selectableCodes and update current code
      const currentSelectableCodes = fireCase?.selectableCodes || [];
      const currentCode = fireCase?.currentCode || "DEFAULT_CODE";
      const updatedSelectableCodes = currentSelectableCodes.includes(
        currentCode
      )
        ? currentSelectableCodes
        : [...currentSelectableCodes, currentCode];
      const filteredSelectableCodes = filterSelectableCodesByPriority(
        updatedSelectableCodes,
        code,
        protocol
      );
      setFireCase((prevCase) => {
        if (!prevCase) return prevCase;
        const updatedCase = {
          ...prevCase,
          hasBeenSent: hideSend,
          selectableCodes: filteredSelectableCodes,
        };
        localStorage.setItem("FIRE_CASE", JSON.stringify(updatedCase));
        return updatedCase;
      });
      setCallbackOnSummary(true);
      setRecommendedCode(code);
      setActiveTab("send");
      if (settings.soundEffects) {
        const audio = new Audio("/audio/code-selected.mp3");
        audio.volume = 0.5;
        audio.play();
      }
    },
    [
      fireCase?.hasBeenSent,
      fireCase?.currentCode,
      fireCase?.selectableCodes,
      protocol,
      filterSelectableCodesByPriority,
    ]
  );

  // When all key questions have been answered
  const handleAllQuestionsAnswered = useCallback(() => {
    if (!protocol) return;

    const defaultCode = protocol.defaultCode;
    const activeCode =
      fireCase?.currentCode !== "DEFAULT_CODE"
        ? fireCase?.currentCode
        : defaultCode;

    if (!activeCode) return;

    // Set questionsCompleted to true
    setFireCase((prevCase) => {
      if (!prevCase) return prevCase;
      const updatedCase = {
        ...prevCase,
        questionsCompleted: true,
      };
      localStorage.setItem("FIRE_CASE", JSON.stringify(updatedCase));
      return updatedCase;
    });

    // Always go to send tab with the current code as recommended code
    setRecommendedCode(activeCode);
    setActiveTab("send");
  }, [protocol, fireCase?.currentCode]);

  // When a code is sent from the send tab
  const handleCodeSendFromSend = useCallback(
    (code: string, doNotSetHasSent: boolean = true) => {
      setCallbackOnSummary(doNotSetHasSent);
      setFireCase((prevCase) => {
        if (!prevCase) return prevCase;
        const updatedCase = {
          ...prevCase,
          currentCode: code,
          hasBeenSent: doNotSetHasSent,
        };
        localStorage.setItem("FIRE_CASE", JSON.stringify(updatedCase));
        return updatedCase;
      });
      setRecommendedCode("");
      setActiveTab("summary");
    },
    []
  );

  const handleDelaySendContinue = useCallback((code: string) => {
    setRecommendedCode("");
    setFireCase((prevCase) => {
      if (!prevCase) return prevCase;
      const updatedCase = {
        ...prevCase,
        currentCode: code,
        hasBeenSent: false,
      };
      localStorage.setItem("FIRE_CASE", JSON.stringify(updatedCase));
      return updatedCase;
    });
    setActiveTab("kq");
  }, []);

  const handleBackToQuestionsFromSend = useCallback(() => {
    setActiveTab("kq");
    setRecommendedCode("");
  }, []);

  // When the protocol is changed from key questions
  const switchProtocol = useCallback(
    (protocolNum: number) => {
      if (!protocol) return;

      const newProtocol = fireProtocols.find((p) => p.protocol === protocolNum);

      if (!newProtocol) return;
      setFireCase((prevCase) => {
        if (!prevCase) return prevCase;
        const updatedCase = {
          ...prevCase,
          chiefComplaint: newProtocol.protocol + " - " + newProtocol.name,
          hasBeenSent: false,
          currentCode: "DEFAULT_CODE",
          currentSuffix: "DEFAULT_SUFFIX",
          answers: [],
          selectableCodes: [],
          reconfiguredFrom: protocol.shortName,
        };
        localStorage.setItem("FIRE_CASE", JSON.stringify(updatedCase));
        return updatedCase;
      });
      setProtocol(newProtocol);
      setActiveTab("kq");
    },
    [fireProtocols]
  );

  const handleSummaryClick = useCallback(
    (text: string, navigateTo?: string) => {
      navigator.clipboard.writeText(text);
      if (fireCase?.questionsCompleted) {
        toast.success("Summary copied, send case to units now!");
        if (settings.soundEffects) {
          const audio = new Audio("/audio/dispatch.mp3");
          audio.volume = 0.5;
          audio.play();
        }
      }

      if (callbackOnSummary) {
        toast.success("Case summary copied to clipboard");
        setActiveTab("kq");
        setCallbackOnSummary(false);
      } else if (navigateTo === "police") {
        alert("This feature is not yet implemented.");
      } else {
        if (navigateTo === "pdi-cei" && settings.giveInstructions === false) {
          handleCompleteCase();
        } else {
          setActiveTab(navigateTo || "kq");
        }
      }
    },
    [callbackOnSummary]
  );

  const handleCompleteCase = useCallback(() => {
    toast.success("Case completed, returning to dashboard.");
    const RUN_NUMBER = localStorage.getItem("RUN_NUMBER");
    const CALL_NUMBER = localStorage.getItem("CALL_NUMBER");
    const yearSuffix = (new Date().getFullYear() % 100).toString();

    if (RUN_NUMBER && CALL_NUMBER) {
      const nextCallNumber = parseInt(CALL_NUMBER, 10) + 1;
      localStorage.setItem("CALL_NUMBER", nextCallNumber.toString());

      const padded = nextCallNumber.toString().padStart(5, "0");
      const newRunNumber = `${yearSuffix}-${padded}`;

      localStorage.setItem("RUN_NUMBER", newRunNumber);
    } else {
      localStorage.setItem("CALL_NUMBER", "1");
      localStorage.setItem("RUN_NUMBER", `${yearSuffix}-00001`);
    }
    localStorage.removeItem("NEW_CALL");
    localStorage.removeItem("FIRE_PROQA_DATA");
    localStorage.removeItem("FIRE_CASE");
    localStorage.removeItem("CASE_TIME");
    router.push("/dispatch");
  }, []);

  const handleRestartCase = useCallback(() => {
    setFireCase({
      callLocation: `${callDetails?.postal || ""} ${callDetails?.street || ""}`,
      callerNumber: callDetails?.callerNumber || "",
      callerStatement: callDetails?.callerStatement || "",
      location: callDetails?.buildingInfo || "",
      boxType: "",
      chiefComplaint: "",
      currentCode: "DEFAULT_CODE",
      currentSuffix: "DEFAULT_SUFFIX",
      selectableCodes: [],
      answers: [],
      hasBeenSent: false,
      questionsCompleted: false,
      hasCompletedDisconnect: false,
      secureScene: true,
    });
    setProtocol(undefined);
    setAnswers([]);
    setActiveTab("entry");
    setRecommendedCode("");
    setCallbackOnSummary(false);
    localStorage.setItem("CASE_TIME", "0");
    localStorage.removeItem("FIRE_CASE");
    window.dispatchEvent(new CustomEvent("timer-reset"));
    toast.success("Re-started Fire case successfully!");
  }, []);

  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="grid grid-cols-6 gap-4 items-center mb-8">
          <div className="text-center flex items-center justify-start col-span-1">
            <TimerDisplay />
          </div>
          <h1
            className={`flex col-span-4 items-center justify-center text-center text-md text-blue-400 font-bold ${
              protocol ? "p-3 rounded-md bg-blue-500/10" : ""
            }`}
          >
            {protocol ? (
              <span>
                <span className="mr-2">{protocol.protocol}: </span>
                <span>{protocol.name}</span>
              </span>
            ) : (
              ``
            )}
          </h1>
          <div className="text-center flex items-center justify-center col-span-1">
            <p
              className={`text-lg font-bold ${
                fireCase?.currentCode && fireCase.currentCode !== "DEFAULT_CODE"
                  ? "p-2 rounded-lg bg-muted/10 text-red-500"
                  : ""
              }`}
            >
              {fireCase?.currentCode &&
                fireCase.currentCode !== "DEFAULT_CODE" &&
                `${parseInt(
                  fireCase.currentCode.slice(0, 2),
                  10
                )}-${fireCase.currentCode.charAt(2)}-${parseInt(
                  fireCase.currentCode.slice(3),
                  10
                )}${
                  fireCase.callLocation &&
                  fireCase.currentSuffix !== "DEFAULT_SUFFIX"
                    ? `${fireCase.currentSuffix}`
                    : ""
                }`}
            </p>
          </div>
        </div>
        <div className="h-auto max-w-8xl mx-auto">
          <Tabs
            defaultValue="entry"
            value={activeTab}
            onValueChange={setActiveTab}
            className="h-full flex flex-col"
          >
            <div className="flex-1 border rounded-lg">
              <TabsList
                className={`grid w-full ${
                  !settings.giveInstructions ? "grid-cols-3" : "grid-cols-5"
                } rounded-b-none border-b`}
              >
                <TabsTrigger value="entry">Entry</TabsTrigger>
                <TabsTrigger value="kq">KQ</TabsTrigger>
                {!settings.giveInstructions ? null : (
                  <>
                    <TabsTrigger value="pdi-cei">PDI/CEI</TabsTrigger>
                    <TabsTrigger value="dls">DLS</TabsTrigger>
                  </>
                )}
                <TabsTrigger value="summary">Summary</TabsTrigger>
              </TabsList>

              <div className="p-6 h-full">
                <TabsContent value="entry" className="h-full">
                  {callDetails ? (
                    <FireCaseEntry
                      callDetails={callDetails}
                      initialData={fireCase}
                      settings={settings}
                      onComplete={handleCaseEntryCompletion}
                      handleCaseRestart={handleRestartCase}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <LoadingState />
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="kq" className="h-full">
                  {fireCase && protocol ? (
                    <>
                      <FireKeyQuestions
                        fireCase={fireCase}
                        protocol={protocol}
                        answers={answers}
                        codeHasBeenSent={fireCase.hasBeenSent}
                        settings={settings}
                        handleUpdateCode={updateCode}
                        handleUpdateSuffix={updateSuffix}
                        handleCodeSend={handleSendCodeFromKQ}
                        handleUpdateAnswers={updateAnswers}
                        handleProtocolChange={switchProtocol}
                        handleSceneSecurityChange={updateSceneSecurity}
                        handleQuestionComplete={handleAllQuestionsAnswered}
                      />
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <LoadingState />
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="send" className="h-full">
                  {fireCase && protocol && (
                    <SendFireCase
                      recommendedCode={recommendedCode}
                      protocol={protocol}
                      fireCase={fireCase}
                      hasCallback={callbackOnSummary}
                      handleSend={handleCodeSendFromSend}
                      handleDelaySendContinue={handleDelaySendContinue}
                      handleBack={handleBackToQuestionsFromSend}
                    />
                  )}
                </TabsContent>

                <TabsContent value="pdi-cei" className="h-full">
                  <div className="flex items-center justify-center h-full">
                    <h2 className="text-2xl font-semibold text-muted-foreground">
                      PDI/CEI
                    </h2>
                  </div>
                </TabsContent>

                <TabsContent value="dls" className="h-full">
                  {/* {emsCase && emsCase.questionsCompleted && (
                    <EMSDLS emsCase={emsCase} />
                  )} */}
                </TabsContent>

                <TabsContent value="summary" className="h-full space-y-4">
                  {callDetails && fireCase && protocol ? (
                    <FireCaseSummary
                      callDetails={callDetails}
                      fireCase={fireCase}
                      protocol={protocol}
                      settings={settings}
                      handleClick={handleSummaryClick}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <LoadingState />
                    </div>
                  )}
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
      <Footer />
    </main>
  );
}
