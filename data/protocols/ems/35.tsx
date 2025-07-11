import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const HEALTH_REFERRAL: IEMSComplaint = {
  protocol: 35,
  name: "Health Care Professional Admission",
  shortName: "Health Referral",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 202,
  defaultCode: "35A01",
  questions: [],
  determinants: []
};
