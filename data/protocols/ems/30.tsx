import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const TRAUMATIC_INJS: IEMSComplaint = {
  protocol: 30,
  name: "Traumatic Injuries (Specific)",
  shortName: "Traumatic Injuries",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 190,
  defaultCode: "30A02",
  preSend: true,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "30A01",
          text: "Not Dangerous Body Area w/ Deformity",
          recResponse: 190,
        },
        {
          code: "30A02",
          text: "Not Dangerous Body Area",
          recResponse: 190,
        },
        {
          code: "30A03",
          text: "Non-Recent (>= 6hrs) Injs (w/o Priority Symptoms)",
          recResponse: 191,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "30B00",
          text: "BLS Override (Bravo)",
          recResponse: 190,
        },
        {
          code: "30B01",
          text: "Possibly Dangerous Body Area",
          recResponse: 190,
        },
        {
          code: "30B02",
          text: "Serious Hemorrhage",
          recResponse: 190,
        },
        {
          code: "30B03",
          text: "Unkn Body Area (Remote Patient Location)",
          recResponse: 190,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "30D00",
          text: "ALS Override (Delta)",
          recResponse: 192,
        },
        {
          code: "30D01",
          text: "Arrest",
          recResponse: 158,
          notBreathing: true,
        },
        {
          code: "30D02",
          text: "Unconscious",
          recResponse: 193,
          notConscious: true,
        },
        {
          code: "30D03",
          text: "Not Alert",
          recResponse: 192,
        },
        {
          code: "30D04",
          text: "Chec/Neck/Head Inj (w/ Diff Breathing)",
          recResponse: 192,
        },
        {
          code: "30D05",
          text: "High Velocity Impact/Mass Inj",
          recResponse: 192,
        },
      ],
    },
  ],
};
