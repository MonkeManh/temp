import { IAnswerData } from "./protocols/ems/IEMSQuestions";

export interface IEMSCaseEntry {
    callLocation: string;
    callerNumber: string;
    callerStatement: string;
    patientProximity: string;
    numPatients: number;
    patientAge: number;
    ageUnit: string;
    patientGender: string;
    patientConsciousness: string;
    patientBreathing: string;
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
    unitsToSend: string[];
}