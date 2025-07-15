import { ReactNode } from "react";
import { IServices } from "../IServices";
import { IEMSQuestions } from "./IEMSQuestions";
import { IEMSDeterminants } from "./IEMSDeterminants";

export interface IEMSComplaint {
  protocol: number;
  name: string;
  shortName: string;
  description: ReactNode;
  services: IServices[];
  defaultPriority: "O" | "A" | "B" | "C" | "D" | "E";
  defaultPlan: number;
  defaultCode: string;
  preSend?: boolean;
  questions: IEMSQuestions[];
  determinants: IEMSDeterminants[];
}
