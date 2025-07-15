import { ReactNode } from "react";
import { IFireAnswers } from "./IFireAnswers";
import { IFireCaseEntry } from "../../IFireCaseEntry";

export interface IFireQuestions {
  text: ReactNode;
  preRenderInstructions?: (
    answers: IAnswerData[],
    fireCase: IFireCaseEntry,
    currentCode: string
  ) => boolean;
  questionType: "select";
  preRenderDependencies?: string[];
  preRenderLogic?: string;
  additionalInstructions?: ReactNode;
  defaultTab?: string;
  omit?: boolean;
  answers: IFireAnswers[];
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
