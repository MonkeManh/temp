import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const SICK_PERSON: IEMSComplaint = {
  protocol: 26,
  name: "Sick Person (Specific Diagnosis)",
  shortName: "Sick Person",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 147,
  defaultCode: "26A01",
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "26O01",
          text: "Code Not in Use",
          recResponse: 147,
        },
        {
          code: "26O02",
          text: "Boils",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O03",
          text: "Bumps (Non-Traumatic)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O04",
          text: "Can't Sleep",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O05",
          text: "Can't Urinate (w/o Abdominal Pain)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O06",
          text: "Catheter (Urinary-In/Out w/o Hemorrhaging)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O07",
          text: "Constipation",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O08",
          text: "Cramps/Spasms/Joint Pain (In Extremities & Non-Traumatic)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O09",
          text: "Cut-Off Ring Request",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O10",
          text: "Deafness",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O11",
          text: "Defecation/Diarrhea",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O12",
          text: "Earache",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O13",
          text: "Enema",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O14",
          text: "Gout",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O15",
          text: "Hemorrhoids/Piles",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O16",
          text: "Hepatitis",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O17",
          text: "Hiccups",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O18",
          text: "Itching",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O19",
          text: "Nervous",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O20",
          text: "Object Stuck (Nose, Ear, Vagina, Rectum, etc.)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O21",
          text: "Object Swallowed (w/o Choking or Diff Breathing, Can Talk)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O22",
          text: "Painful Urination",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O23",
          text: "Penis Problems/Pain",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O24",
          text: "Rash/Skin Disorder (w/o Diff Breathing or Swallowing)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O25",
          text: "Sexually Transmitted Disease (STD)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O26",
          text: "Sore Throat (w/o Diff Breathing or Swallowing)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O27",
          text: "Toothache (w/o Jaw Pain)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O28",
          text: "Wound Infected (Focal or Surface)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "26A00",
          text: "BLS Override (Alpha)",
          recResponse: 148,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 148,
            },
          ],
        },
        {
          code: "26A01",
          text: "No Priority Symptoms",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A02",
          text: "Blood Pressure Abnormality (Asymptomatic)",
          recResponse: 148,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 148,
            },
          ],
        },
        {
          code: "26A03",
          text: "Dizziness/Vertigo",
          recResponse: 148,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 148,
            },
          ],
        },
        {
          code: "26A04",
          text: "Fever/Chills",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A05",
          text: "General Weakness",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A06",
          text: "Nausea",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A07",
          text: "New Onset of Immobility (Not-Sudden)",
          recResponse: 148,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 148,
            },
          ],
        },
        {
          code: "26A08",
          text: "Other Pain (Non-Omega-Level)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A09",
          text: "Transportation Only",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A10",
          text: "Unwell/Ill",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A11",
          text: "Vomiting",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A12",
          text: "Possible Contagious Disease",
          recResponse: 148,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 148,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "26B00",
          text: "BLS Override (Bravo)",
          recResponse: 148,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 148,
            },
          ],
        },
        {
          code: "26B01",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 148,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 148,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "26C00",
          text: "ALS Override (Charlie)",
          recResponse: 149,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 149,
            },
          ],
        },
        {
          code: "26C01",
          text: "Altered Level of Consciousness",
          recResponse: 150,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 150,
            },
          ],
        },
        {
          code: "26C02",
          text: "Abnormal Breathing",
          recResponse: 151,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 151,
            },
          ],
        },
        {
          code: "26C03",
          text: "Sickle Cell Crisis/Thalassemia",
          recResponse: 151,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 151,
            },
          ],
        },
        {
          code: "26C04",
          text: "Autonomic Dysreflexia/Hyperreflexia",
          recResponse: 151,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 151,
            },
          ],
        },
        {
          code: "26C05",
          text: "Acute Adrenal Insufficiency/Crisis or Addison's Disease",
          recResponse: 151,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 151,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "26D00",
          text: "ALS Override (Delta)",
          recResponse: 149,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 149,
            },
          ],
        },
        {
          code: "26D01",
          text: "Not Alert",
          recResponse: 150,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 150,
            },
          ],
        },
      ],
    },
  ],
};
