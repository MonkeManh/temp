import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const PANDEMIC: IEMSComplaint = {
  protocol: 36,
  name: "Pandemic Flu",
  shortName: "Pandemic",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 203,
  defaultCode: "36A01",
  preSend: true,
  questions: [],
  determinants: [],
};
