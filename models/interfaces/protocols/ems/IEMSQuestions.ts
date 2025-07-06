import { ReactNode } from "react";
import { IEMSAnswers } from "./IEMSAnswers";
import { IEMSCaseEntry } from "../../IEMSCaseEntry";

export interface IEMSQuestions {
  text: ReactNode;
  preRenderInstructions?: (
    patient: IEMSCaseEntry,
    answers: IAnswerData[],
    currentCode: string
  ) => boolean;
  questionType: "select" | "input";
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
