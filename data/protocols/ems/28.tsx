import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const STROKE: IEMSComplaint = {
  protocol: 28,
  name: "Stroke (CVA) / Transient Ischemic Attack (TIA)",
  shortName: "Stroke",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 167,
  defaultCode: "28C12",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "28A01",
          text: "Breathing Normally (< 35)",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "28C00",
          text: "ALS Override (Charlie)",
          recResponse: 91,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 91,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 91,
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
              recResponse: 91,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 91,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 91,
            },
          ],
        },
        {
          code: "28C01",
          text: "Not Alert",
          recResponse: 91,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 91,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 91,
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
              recResponse: 91,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 91,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 91,
            },
          ],
        },
        {
          code: "28C02",
          text: "Abnormal Breathing",
          recResponse: 91,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 91,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 91,
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
              recResponse: 91,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 91,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 91,
            },
          ],
        },
        {
          code: "28C03",
          text: "Sudden Speech Problems",
          recResponse: 91,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 91,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 91,
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
              recResponse: 91,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 91,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 91,
            },
          ],
        },
        {
          code: "28C04",
          text: "Sudden Weakness or Numbness",
          recResponse: 91,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 91,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 91,
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
              recResponse: 91,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 91,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 91,
            },
          ],
        },
        {
          code: "28C05",
          text: "Sudden Paralysis or Facial Droop (One Side)",
          recResponse: 91,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 91,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 91,
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
              recResponse: 91,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 91,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 91,
            },
          ],
        },
        {
          code: "28C06",
          text: "Sudden Loss of Balance or Coordination",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
        {
          code: "28C07",
          text: "Sudden Vision Problems",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
        {
          code: "28C08",
          text: "Sudden Onset of Severe Headache",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
        {
          code: "28C09",
          text: "Stroke Hx",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
        {
          code: "28C10",
          text: "TIA (Mini-Stroke) Hx",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
        {
          code: "28C11",
          text: "Breathing Normally (>= 35)",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
        {
          code: "28C12",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
      ],
    },
  ],
};
