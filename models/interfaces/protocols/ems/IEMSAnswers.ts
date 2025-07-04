import { IEMSCaseEntry } from "../../IEMSCaseEntry";
import { IAnswerData } from "./IEMSQuestions";
import { IPatientData } from "./IPatientData";

export interface IEMSAnswers {
  answer: string;
  display: string;
  questionDisplay: string;
  preRenderInstructions?: (
    patient: IEMSCaseEntry,
    answers: IAnswerData[],
    currentCode: string
  ) => boolean;
  preRenderDependencies?: string[];
  preRenderLogic?: string;
  input?: boolean;
  continue?: boolean;
  end?: boolean;
  send?: boolean;
  gotoInstruction?: number;
  gotoProtocol?: number;
  gotoProtocolAfter?: number;
  gotoQuestion?: number;
  updateCode?: string;
  updateSuffix?: string;
  overrideCode?: boolean;
  overrideSend?: boolean;
  dependency?: (
    patient: IEMSCaseEntry,
    answers: IAnswerData[],
    currentCode: string
  ) => DependencyResult | undefined;
  dependencyDependencies?: string[];
  dependencyLogic?: string;
}

export type DependencyResult = {
  code?: string;
  subCode?: string;
  plan?: number;
  override?: boolean;
  send?: boolean;
};

