import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const DIABETIC_PROBLEM: IEMSComplaint = {
  protocol: 13,
  name: "Diabetic Problems",
  shortName: "Diabetic Problem",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 62,
  defaultCode: "13A01",
  preSend: true,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "13A01",
          text: "Alert & Behaving Normally",
          recResponse: 62,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "13C00",
          text: "ALS Override (Charlie)",
          recResponse: 63,
          subCodes: [
            {
              suffix: "C",
              text: "Combative or Aggressive",
              recResponse: 64,
            },
          ],
        },
        {
          code: "13C01",
          text: "Not Alert",
          recResponse: 63,
          subCodes: [
            {
              suffix: "C",
              text: "Combative or Aggressive",
              recResponse: 64,
            },
          ],
        },
        {
          code: "13C02",
          text: "Abnormal Behavior",
          recResponse: 63,
          subCodes: [
            {
              suffix: "C",
              text: "Combative or Aggressive",
              recResponse: 64,
            },
          ],
        },
        {
          code: "13C03",
          text: "Abnormal Breathing",
          recResponse: 63,
          subCodes: [
            {
              suffix: "C",
              text: "Combative or Aggressive",
              recResponse: 64,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "13D00",
          text: "ALS Override (Delta)",
          recResponse: 63,
          subCodes: [
            {
              suffix: "C",
              text: "Combative or Aggressive",
              recResponse: 64,
            },
          ],
        },
        {
          code: "13D01",
          text: "Unconscious",
          notConscious: true,
          recResponse: 63,
          subCodes: [
            {
              suffix: "C",
              text: "Combative or Aggressive",
              recResponse: 64,
            },
          ],
        },
      ],
    },
  ],
};
