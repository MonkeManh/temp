import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const HEART_PROBLEMS: IEMSComplaint = {
  protocol: 19,
  name: "Heart Problems / A.I.C.D.",
  shortName: "Heart Prob/AICD",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 94,
  defaultCode: "19C07",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "19A01",
          text: "Heart Reate >= 50bpm & < 130bpm (w/o Priority Symptoms)",
          recResponse: 94,
        },
        {
          code: "19A02",
          text: "Chest Pain/Discomfort (< 35) (w/o Priority Symptoms)",
          recResponse: 95,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "19C00",
          text: "ALS Override (Charlie)",
          recResponse: 96,
        },
        {
          code: "19C01",
          text: "Firing of A.I.C.D.",
          recResponse: 96,
        },
        {
          code: "19C02",
          text: "Abnormal Breathing",
          recResponse: 96,
        },
        {
          code: "19C03",
          text: "Chest Pain/Discomfort (>= 35)",
          recResponse: 97,
        },
        {
          code: "19C04",
          text: "Cardiac Hx",
          recResponse: 96,
        },
        {
          code: "19C05",
          text: "Cocaine",
          recResponse: 51,
        },
        {
          code: "19C06",
          text: "Heart Rate < 50bpm or >= 130bpm (w/o Priority Symptoms)",
          recResponse: 96,
        },
        {
          code: "19C07",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 96,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "19D00",
          text: "ALS Override (Delta)",
          recResponse: 98,
        },
        {
          code: "19D01",
          text: "Not Alert",
          recResponse: 96,
        },
        {
          code: "19D02",
          text: "Diff Speaking Between Breaths",
          recResponse: 96,
        },
        {
          code: "19D03",
          text: "Changing Color",
          recResponse: 96,
        },
        {
          code: "19D04",
          text: "Clammy or Cold Sweats",
          recResponse: 96,
        },
        {
          code: "19D05",
          text: "Just Resuscitated &/or Defibrillated (External)",
          recResponse: 98,
        },
      ],
    },
  ],
};
