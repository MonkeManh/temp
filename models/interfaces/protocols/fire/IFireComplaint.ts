import { ReactNode } from "react";
import { IServices } from "../IServices";
import { IFireQuestions } from "./IFireQuestions";
import { IFireDeterminants } from "./IFireDeterminants";

export interface IFireComplaint {
  protocol: number;
  name: string;
  shortName: string;
  description: ReactNode;
  services: IServices[];
  defaultPriority: "O" | "A" | "B" | "C" | "D" | "E";
  defaultPlan: number;
  defaultCode: string;
  preSend?: boolean;
  questions: IFireQuestions[];
  determinants: IFireDeterminants[];
}
