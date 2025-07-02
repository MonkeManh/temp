"use client";

import EMSCaseEntry from "@/components/create-call/ems/case-entry";
import EMSKeyQuestions from "@/components/create-call/ems/key-questions";
import SendEMSCase from "@/components/create-call/ems/send-case";
import Footer from "@/components/footer";
import LoadingState from "@/components/loading-state";
import Navbar from "@/components/navbar";
import TimerDisplay from "@/components/TimerDisplay";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { getPostal } from "@/data/locations/postals";
import { emsPlans } from "@/data/plans/emsPlans";
import { emsProtocols } from "@/data/protocols/emsProtocols";
import getSettings, { DEFAULT_SETTINGS } from "@/lib/utils";
import {
  capitalize,
  formatAgeUnit,
  formatProximity,
  getBreathingStatus,
  getConsciousnessStatus,
  higherCode,
  isSamePriority,
  safelyParseStoredEMSCase,
} from "@/lib/utils/emsHelpers";
import { IEMSCaseEntry } from "@/models/interfaces/IEMSCaseEntry";
import { INewCallData } from "@/models/interfaces/INewCallData";
import { ISettings } from "@/models/interfaces/ISettings";
import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import { IAnswerData } from "@/models/interfaces/protocols/ems/IEMSQuestions";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";

function getProtocolByName(str: string): IEMSComplaint | undefined {
  const protocolNum = str.split(" - ")[0].trim();
  const number = parseInt(protocolNum, 10);
  if (isNaN(number)) return undefined;
  return emsProtocols.find((protocol) => protocol.protocol === number);
}

export default function CreateCallEMS() {
  const [settings, setSettings] = useState<ISettings>(DEFAULT_SETTINGS);
  const [callDetails, setCallDetails] = useState<INewCallData | undefined>(
    undefined
  );
  const [emsCase, setEmsCase] = useState<IEMSCaseEntry | undefined>(undefined);
  const [protocol, setProtocol] = useState<IEMSComplaint | undefined>(
    undefined
  );
  const [answers, setAnswers] = useState<IAnswerData[]>([]);
  const [activeTab, setActiveTab] = useState<string>("entry");
  const [currentCode, setCurrentCode] = useState<string>("DEFAULT_CODE");
  const [codeHasBeenSent, setCodeHasBeenSent] = useState<boolean>(false);
  const [currentSuffix, setCurrentSuffix] = useState<string>("DEFAULT_SUFFIX");
  const [recommendedCode, setRecommendedCode] = useState<string>("");
  const [selectableCodes, setSelectableCodes] = useState<string[]>([]);
  const [hasReconfigured, setHasReconfigured] = useState<string>("");

  // Load the state from localStorage
  useEffect(() => {
    // Load the call details
    const storedCallDetails = localStorage.getItem("NEW_CALL");
    if (storedCallDetails) {
      const parsedCallDetails: INewCallData = JSON.parse(storedCallDetails);
      setCallDetails(parsedCallDetails);
    }

    // Load the EMS case
    const storedEMSCase = localStorage.getItem("EMS_CASE");
    if (storedEMSCase) {
      const parsedEMSCase: IEMSCaseEntry = JSON.parse(storedEMSCase);
      setEmsCase(parsedEMSCase);
      setAnswers(parsedEMSCase.answers || []);
    }

    // Load the settings
    setSettings(getSettings());
  }, [setCallDetails, setEmsCase, setSettings]);

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

  // When case entry has been completed
  const handleCaseEntryCompletion = useCallback(
    (caseData: IEMSCaseEntry) => {
      if (!caseData) {
        return console.error(
          "No case data provided during case entry completion."
        );
      }
      setEmsCase(caseData);
      setProtocol(getProtocolByName(caseData.chiefComplaint));
      setActiveTab("kq");
      localStorage.setItem("EMS_CASE", JSON.stringify(caseData));

      if (settings.soundEffects) {
        const audio = new Audio("/audio/kqstart.mp3");
        audio.volume = 0.5;
        audio.play();
      }
    },
    [settings]
  );

  const updateAnswers = useCallback((answer: IAnswerData) => {
    console.log("Updating answer:", answer);
    setAnswers((prevAnswer) => {
      const existingIndex = prevAnswer.findIndex(
        (a) => a.question === answer.question
      );
      if (existingIndex !== -1) {
        // Update existing answer
        const updatedAnswers = [...prevAnswer];
        updatedAnswers[existingIndex] = answer;
        return updatedAnswers;
      } else {
        // Add new answer
        return [...prevAnswer, answer];
      }
    });

    // Save the updated answers to localStorage
    localStorage.setItem("EMS_CASE", JSON.stringify({
      ...emsCase,
      answers: [...answers, answer],
    }));
  }, [answers, setAnswers, emsCase]);

  // When code is being updated from key questions but not sent
  const updateCode = useCallback((code: string) => {
    if (code === currentCode) return;

    if (higherCode(code, currentCode) === currentCode) {
      // Current code is higher or same priority
      if (
        isSamePriority(code, currentCode) &&
        !selectableCodes.includes(code)
      ) {
        // Same priority as current code
        selectableCodes.push(code);
      }
    } else {
      // New code is higher priority than current code
      setCurrentCode(code);
      if (!selectableCodes.includes(code)) {
        selectableCodes.push(currentCode);
      }
    }
  }, [currentCode, selectableCodes]);

  // When suffix is being updated from key questions
  const updateSuffix = useCallback((suffix: string) => {
    setCurrentSuffix(suffix);
  }, [setCurrentSuffix]);

  // When code is sent from key questions
  const handleSendCodeFromKQ = useCallback((code: string, override?: boolean) => {
    if(codeHasBeenSent && !override) return;
    if(code === currentCode) return;

    if(higherCode(code, currentCode) === currentCode) {
      if (isSamePriority(code, currentCode)) {
        selectableCodes.push(code);
      }
      return setCodeHasBeenSent(true);
    }

    setRecommendedCode(code);
    setActiveTab("send");
    setCodeHasBeenSent(true);
  }, [codeHasBeenSent, currentCode, selectableCodes]);

  const switchProtocol = useCallback((protocolNum: number) => {
    if(!protocol) return;
    
    const newProtocol = emsProtocols.find((p) => p.protocol === protocolNum);
    
    if(!newProtocol) return;
    setHasReconfigured(protocol?.shortName);
    setProtocol(newProtocol);
    setActiveTab("kq");
    setCurrentCode("DEFAULT_CODE");
    setCurrentSuffix("DEFAULT_SUFFIX");
  }, [emsProtocols]);



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
                emsCase?.currentCode
                  ? "p-2 rounded-lg bg-muted/10 text-red-500"
                  : ""
              }`}
            >
              {emsCase?.currentCode &&
                `${parseInt(
                  emsCase.currentCode.slice(0, 2),
                  10
                )}-${emsCase.currentCode.charAt(2)}-${parseInt(
                  emsCase.currentCode.slice(3),
                  10
                )}`}
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
              <TabsList className="grid w-full grid-cols-5 rounded-b-none border-b">
                <TabsTrigger value="entry">Entry</TabsTrigger>
                <TabsTrigger value="kq">KQ</TabsTrigger>
                <TabsTrigger value="pdi-cei">PDI/CEI</TabsTrigger>
                <TabsTrigger value="dls">DLS</TabsTrigger>
                <TabsTrigger value="summary">Summary</TabsTrigger>
              </TabsList>

              <div className="p-6 h-full">
                <TabsContent value="entry" className="h-full">
                  {callDetails ? (
                    <EMSCaseEntry
                      callDetails={callDetails}
                      onComplete={handleCaseEntryCompletion}
                      initialData={emsCase}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <LoadingState />
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="kq" className="h-full">
                  {emsCase && protocol ? (
                    <EMSKeyQuestions
                      emsCase={emsCase}
                      protocol={protocol}
                      answers={answers}
                      codeHasBeenSent={codeHasBeenSent}
                      handleUpdateCode={updateCode}
                      handleUpdateSuffix={updateSuffix}
                      handleCodeSend={handleSendCodeFromKQ}
                      handleUpdateAnswers={updateAnswers}
                      handleProtocolChange={switchProtocol}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <LoadingState />
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="send" className="h-full">
                  {emsCase && protocol && (
                    <p>Hello 2!</p>
                    // <SendEMSCase
                    //   recommendedCode={recommendedCode}
                    //   emsCase={emsCase}
                    //   protocol={protocol}
                    //   updateCode={handleCodeIsSent}
                    //   onDelaySendContinue={handleDelaySendContinue}
                    //   onBackToQuestions={handleBackToQuestions}
                    // />
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
                  <div className="flex items-center justify-center h-full">
                    <h2 className="text-2xl font-semibold text-muted-foreground">
                      DLS
                    </h2>
                  </div>
                </TabsContent>

                <TabsContent value="summary" className="h-full space-y-4">
                  Hello Summary!
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
