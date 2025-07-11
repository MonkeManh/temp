import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const TRANSFER: IEMSComplaint = {
  protocol: 33,
  name: "Transfer / Interfacility / Palliative Care",
  shortName: "Transport",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: false },
    { name: "Police", priority: false },
  ],
  defaultPriority: "A",
  defaultPlan: 201,
  defaultCode: "33A01",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "33A01",
          text: "Acuity Level I",
          recResponse: 201,
        },
        {
          code: "33A02",
          text: "Acuity Level II",
          recResponse: 201,
        },
        {
          code: "33A03",
          text: "Acuity Level III",
          recResponse: 201,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "33C00",
          text: "ALS Override (Charlie)",
          recResponse: 202,
        },
        {
          code: "33C01",
          text: "Not Alert (Acute Change)",
          recResponse: 202,
        },
        {
          code: "33C02",
          text: "Abnormal Breathing (Acute Onset)",
          recResponse: 202,
        },
        {
          code: "23C03",
          text: "Significant Hemorrhage or Shock",
          recResponse: 202,
        },
        {
          code: "33C04",
          text: "Possibly Acute Heart Problems or MI",
          recResponse: 202,
        },
        {
          code: "33C05",
          text: "Acute Severe Pain",
          recResponse: 202,
        },
        {
          code: "33C06",
          text: "Emergency Response Requested",
          recResponse: 202,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "33D00",
          text: "ALS Override (Delta)",
          recResponse: 203,
        },
        {
          code: "33D01",
          text: "Suspected Cardiac or Respiratory Arrest",
          recResponse: 203,
        },
        {
          code: "33D02",
          text: "Just Resuscitated and/or Defibrillated",
          recResponse: 203,
        },
      ],
    },
  ],
};
