import { IAnswerData } from "./protocols/ems/IEMSQuestions";

export interface IFireCaseEntry {
    callLocation: string;
    callerNumber: string;
    callerStatement: string;
    location: string;
    displayCIDS: string;
    boxType: string;
    chiefComplaint: string;
    currentCode: string;
    currentSuffix: string;
    answers: IAnswerData[];
    hasBeenSent: boolean;
    questionsCompleted: boolean;
    hasCompletedDisconnect: boolean;
    gotoPDI?: number;
    secureScene: boolean;
    selectableCodes: string[];
    reconfiguredFrom?: string;
}