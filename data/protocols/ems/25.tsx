import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const PSYCH: IEMSComplaint = {
  protocol: 25,
  name: "Psychiatric / Mental Health Conditions / Suicide Attempt / Abnormal Behavior",
  shortName: "Psych/Abn Beh",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "O",
  defaultPlan: 142,
  defaultCode: "25B06",
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "25O01",
          text: "Non-Suicidal & Alert (w/ 1st Pty Verification)",
          recResponse: 142,
          subCodes: [
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 142,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 142,
            },
          ],
        },
        {
          code: "25O02",
          text: "Suicide Ideation & Alert (w/ 1st Pty Verification)",
          recResponse: 142,
          subCodes: [
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 142,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 142,
            },
          ],
        },
        {
          code: "25O03",
          text: "Non-Suicidal & Alert (w/ 1st Pty Verification & HX of Mental Health Conditions)",
          recResponse: 142,
          subCodes: [
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 142,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 142,
            },
          ],
        },
        {
          code: "25O04",
          text: "Suicide Ideation & Alert (w/ 1st Pty Verification & HX of Mental Health Conditions)",
          recResponse: 142,
          subCodes: [
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 142,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 142,
            },
          ],
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "25A01",
          text: "Non-Suicidal & Alert (w/o 1st Pty Verification)",
          recResponse: 142,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
        {
          code: "25A02",
          text: "Suicide Ideation & Alert (w/o 1st Pty Verification)",
          recResponse: 142,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "25B00",
          text: "BLS Override (Bravo)",
          recResponse: 142,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
        {
          code: "25B01",
          text: "Serious Hemorrhage",
          recResponse: 142,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
        {
          code: "25B02",
          text: "Non-Serious or Minor Hemorrhage",
          recResponse: 142,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
        {
          code: "25B03",
          text: "Intending Suicide",
          recResponse: 142,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
        {
          code: "25B04",
          text: "Jumper (Threatening)",
          recResponse: 80,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 80,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 80,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 80,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 80,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 80,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 80,
            },
          ],
        },
        {
          code: "25B05",
          text: "Near Hanging, Strangulation, or Suffocation (Alert w/o Diff Breathing)",
          recResponse: 143,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
        {
          code: "25B06",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 142,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "25C00",
          text: "ALS Override (Charlie)",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25C01",
          text: "Altered LOC (Hx of Mental Health Conditions)",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25C02",
          text: "Altered LOC (No or Unk HX of Mental Health Conditions)",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25C03",
          text: "Altered LOC (Ingestion of Medications/Substances)",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25C04",
          text: "Altered LOC (Sudden Change in Behavior/Personality)",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "25D00",
          text: "ALS Override (Delta)",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25D01",
          text: "Arrest",
          recResponse: 146,
          notBreathing: true,
        },
        {
          code: "25D02",
          text: "Unconscious",
          recResponse: 144,
          notConscious: true,
        },
        {
          code: "25D03",
          text: "Not Alert",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25D04",
          text: "Dangerous Hemorrhage",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25D05",
          text: "Near Hanging, Strangulation, or Suffocation (Alert w/ Diff Breathing)",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25D06",
          text: "Jumped Now",
          recResponse: 84,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 84,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 84,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 84,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 84,
            },
          ],
        },
      ],
    },
  ],
};
