import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const CHEST_PAIN: IEMSComplaint = {
  protocol: 10,
  name: "Chest Pain (Non-Traumatic)",
  shortName: "Chest Pain",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 49,
  defaultCode: "10C00",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "10A01",
          text: "Breathing Normally (< 35)",
          recResponse: 49,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "10C00",
          text: "ALS Override (Charlie)",
          recResponse: 50,
        },
        {
          code: "10C01",
          text: "Abnormal Breathing",
          recResponse: 50,
        },
        {
          code: "10C02",
          text: "Cocaine",
          recResponse: 51,
        },
        {
          code: "10C03",
          text: "Breathing Normally (>= 35)",
          recResponse: 50,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "10D00",
          text: "ALS Override (Delta)",
          recResponse: 52,
        },
        {
          code: "10D01",
          text: "Not Alert",
          recResponse: 50,
        },
        {
          code: "10D02",
          text: "Diff Speaking Between Breaths",
          recResponse: 50,
        },
        {
          code: "10D03",
          text: "Changing Color",
          recResponse: 50,
        },
        {
          code: "10D04",
          text: "Clammy or Cold Sweats",
          recResponse: 50,
        },
        {
          code: "10D05",
          text: "Heart Attack or Angina Hx",
          recResponse: 50,
        },
      ],
    },
  ],
};
