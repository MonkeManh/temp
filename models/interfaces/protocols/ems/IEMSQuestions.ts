import { ReactNode } from "react";
import { IEMSAnswers } from "./IEMSAnswers";
import { IEMSCaseEntry } from "../../IEMSCaseEntry";

export interface IEMSQuestions {
  text: ReactNode;
  firstPersonText?: ReactNode;
  preRenderInstructions?: (
    patient: IEMSCaseEntry,
    answers: IAnswerData[],
    currentCode: string
  ) => boolean;
  questionType: "select" | "input" | "multi-select";
  preRenderDependencies?: string[];
  preRenderLogic?: string;
  additionalInstructions?: ReactNode;
  defaultTab?: string;
  omit?: boolean;
  answers: IEMSAnswers[];
}

export interface IAnswerData {
  question: string;
  answer: string;
  display: string;
  questionDisplay: string;
  questionIndex: number;
  omit: boolean;
  timeStamp: string;
}
