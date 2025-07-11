import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const UNCO_FAINTING: IEMSComplaint = {
  protocol: 31,
  name: "Unconsciousness / Fainting (Near)",
  shortName: "Unco/Fainting",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: 0 },
  ],
  defaultPriority: "A",
  defaultPlan: 194,
  defaultCode: "31A01",
  preSend: true,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "31A01",
          text: "Fainting Episode(s) & Alert >= 35 (w/o Cardiac Hx)",
          recResponse: 194,
        },
        {
          code: "31A02",
          text: "Fainting Episode(s) & Alert < 35 (w/ Cardiac Hx)",
          recResponse: 194,
        },
        {
          code: "31A03",
          text: "Fainting Episode(s) & Alert < 35 (w/o Cardiac Hx)",
          recResponse: 194,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "31C00",
          text: "ALS Override (Charlie)",
          recResponse: 195,
        },
        {
          code: "31C01",
          text: "Alert & Abnormal Breathing",
          recResponse: 195,
        },
        {
          code: "31C02",
          text: "Fainting Episode(s) & Alert >= 35 (w/ Cardiac Hx)",
          recResponse: 195,
        },
        {
          code: "31C03",
          text: "Females 12-50 w/ Abdominal Pain",
          recResponse: 195,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "31D00",
          text: "ALS Override (Delta)",
          recResponse: 196,
        },
        {
          code: "31D01",
          text: "Unconscious - Agonal/Ineffective Breathing",
          recResponse: 197,
        },
        {
          code: "31D02",
          text: "Unconscious - Abnormal Breathing",
          recResponse: 196,
        },
        {
          code: "31D03",
          text: "Unconscious - Effective Breathing Verified",
          recResponse: 195,
        },
        {
          code: "31D04",
          text: "Not Alert",
          recResponse: 150,
        },
        {
          code: "31D05",
          text: "Changing Color",
          recResponse: 195,
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "31E00",
          text: "ALS Override (Echo)",
          recResponse: 198,
        },
        {
          code: "31E01",
          text: "Not Breathing/Obvious Arrest",
          notBreathing: true,
          recResponse: 198,
        },
      ],
    },
  ],
};
