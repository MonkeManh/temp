import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const UNKN_PROBLEM: IEMSComplaint = {
  protocol: 32,
  name: "Unknown Problem (Person Down)",
  shortName: "Unkn Problem",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: undefined },
    { name: "Police", priority: 1 },
  ],
  defaultPriority: "B",
  defaultPlan: 199,
  defaultCode: "32B03",
  questions: [],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "32B01",
          text: "Standing, Sitting, Moving, or Talking",
          recResponse: 199,
        },
        {
          code: "32B02",
          text: "Medical Alarm (Alert) Notifications (No Patient Info)",
          recResponse: 200,
        },
        {
          code: "32B03",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 199,
        },
        {
          code: "32B04",
          text: "Caller's Language Not Understood",
          recResponse: 199,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "32D00",
          text: "ALS Override (Delta)",
          recResponse: 199,
        },
        {
          code: "32D01",
          text: "Life Status Questionable",
          recResponse: 199,
        },
      ],
    },
  ],
};
