import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const HEADACHE: IEMSComplaint = {
  protocol: 18,
  name: "Headache",
  shortName: "Headache",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 88,
  defaultCode: "18B01",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "18A01",
          text: "Breathing Normally",
          recResponse: 88,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "18B00",
          text: "BLS Override (Bravo)",
          recResponse: 89,
        },
        {
          code: "18B01",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 89,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "18C00",
          text: "ALS Override (Charlie)",
          recResponse: 90,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 90,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 90,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 90,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 90,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 90,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 90,
            },
          ],
        },
        {
          code: "18C01",
          text: "Not Alert",
          recResponse: 92,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 92,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 92,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 92,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 92,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 92,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 92,
            },
          ],
        },
        {
          code: "18C02",
          text: "Abnormal Breathing",
          recResponse: 93,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 93,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 93,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 93,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 93,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 93,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 93,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 93,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 93,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 93,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 93,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 93,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 93,
            },
          ],
        },
        {
          code: "18C03",
          text: "Speech Problems",
          recResponse: 89,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 89,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 89,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 89,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 89,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 89,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 89,
            },
          ],
        },
        {
          code: "18C04",
          text: "Sudden Onset of Severe Pain",
          recResponse: 89,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 89,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 89,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 89,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 89,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 89,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 89,
            },
          ],
        },
        {
          code: "18C05",
          text: "Numbness",
          recResponse: 89,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 89,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 89,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 89,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 89,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 89,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 89,
            },
          ],
        },
        {
          code: "18C06",
          text: "Paralysis",
          recResponse: 90,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 90,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 90,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 90,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 90,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 90,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 90,
            },
          ],
        },
        {
          code: "18C07",
          text: "Change in Behavior (<= 3hrs)",
          recResponse: 92,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 92,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 92,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 92,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 92,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 92,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 92,
            },
          ],
        },
      ],
    },
  ],
};
