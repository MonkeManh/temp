import { IFireCaseEntry } from "../../IFireCaseEntry";
import { IAnswerData } from "./IFireQuestions";

export interface IFireAnswers {
  answer: string;
  display: string;
  questionDisplay: string;
  preRenderInstructions?: (
    answers: IAnswerData[],
    fireCase: IFireCaseEntry,
    currentCode: string
  ) => boolean;
  preRenderDependencies?: string[];
  preRenderLogic?: string;
  input?: boolean;
  multiSelect?: boolean;
  continue?: boolean;
  end?: boolean;
  send?: boolean;
  isMultiSelectOption?: boolean;
  gotoInstruction?: number;
  gotoProtocol?: number;
  gotoProtocolAfter?: number;
  gotoQuestion?: number;
  setSceneSecure?: boolean;
  updateCode?: string;
  updateSuffix?: string;
  overrideCode?: boolean;
  overrideSend?: boolean;
  dependency?: (
    answers: IAnswerData[],
    fireCase: IFireCaseEntry,
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
  gotoProtocol?: number;
};
