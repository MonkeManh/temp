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
    reconfigured?: string;
    currentCode?: string;
    currentSuffix?: string;
    answers?: IAnswerData[];
    hasBeenSent: boolean;
}