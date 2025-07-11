import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const SEIZURES: IEMSComplaint = {
  protocol: 12,
  name: "Convulsions / Seizures",
  shortName: "Seizures",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 57,
  defaultCode: "12B00",
  preSend: true,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "12A01",
          text: "Not Seizing Now & Effective Breathing Verified (Known Seizure Disorder)",
          recResponse: 57,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 57,
            },
          ],
        },
        {
          code: "12A02",
          text: "Not Seizing Now & Effective Breathing Verified (Seizure Disorder Unkn)",
          recResponse: 57,
        },
        {
          code: "12A03",
          text: "Not Seizing Now & Effective Breathing Verified (<= 6, Confirmed No Seizure Disorder)",
          recResponse: 57,
        },
        {
          code: "12A04",
          text: "Focal/Absence Seizure (Alert)",
          recResponse: 57,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 57,
            },
          ],
        },
        {
          code: "12A05",
          text: "Impending Seizure (Aura)",
          recResponse: 57,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 57,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "12B00",
          text: "BLS Override (Bravo)",
          recResponse: 57,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 57,
            },
          ],
        },
        {
          code: "12B01",
          text: "Effective Breathing Not Verified (< 35)",
          recResponse: 57,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 57,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "12C00",
          text: "ALS Override (Charlie)",
          recResponse: 58,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 58,
            },
          ],
        },
        {
          code: "12C01",
          text: "Focal/Absence Seizure (Not Alert)",
          recResponse: 58,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 58,
            },
          ],
        },
        {
          code: "12C02",
          text: "Pregnancy",
          recResponse: 58,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 58,
            },
          ],
        },
        {
          code: "12C03",
          text: "Diabetic",
          recResponse: 58,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 58,
            },
          ],
        },
        {
          code: "12C04",
          text: "Not Seizing Now & Effective Breathing Verified (> 6, Confirmed No Seizure Disorder)",
          recResponse: 57,
        },
        {
          code: "12C05",
          text: "Hx of Stroke or Brain Tumor",
          recResponse: 57,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 57,
            },
          ],
        },
        {
          code: "12C06",
          text: "Overdose/Poisoning (Ingestion)",
          recResponse: 59,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 59,
            },
          ],
        },
        {
          code: "12C07",
          text: "Aytpical Seizure",
          recResponse: 58,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 58,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "12D00",
          text: "ALS Override (Delta)",
          recResponse: 60,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 60,
            },
          ],
        },
        {
          code: "12D01",
          text: "Not Breathing (After Key Questioning)",
          recResponse: 61,
          notBreathing: true,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 61,
            },
          ],
        },
        {
          code: "12D02",
          text: "Continuous or Multiple Seizures",
          recResponse: 58,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 58,
            },
          ],
        },
        {
          code: "12D03",
          text: "Agonal/Ineffective Breathing",
          recResponse: 60,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 60,
            },
          ],
        },
        {
          code: "12D04",
          text: "Effective Breathing Not Verified (>= 35)",
          recResponse: 58,
          uncertainBreathing: true,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 58,
            },
          ],
        },
      ],
    },
  ],
};
