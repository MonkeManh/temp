import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const STAB_SHOT_TRAUMA: IEMSComplaint = {
  protocol: 27,
  name: "Stab / Gunshot / Penetrating Trauma",
  shortName: "Stab/Shot/Trauma",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: true },
  ],
  defaultPriority: "A",
  defaultPlan: 152,
  defaultCode: "27B04",
  preSend: true,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "27A01",
          text: "Non-Recent (>= 6hrs) Peripheral Wounds (w/o Pririty Symptoms)",
          recResponse: 153,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 152,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 153,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 153,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 154,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 152,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 154,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "27B00",
          text: "BLS Override (Bravo)",
          recResponse: 153,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 152,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 153,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 153,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 154,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 152,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 154,
            },
          ],
        },
        {
          code: "27B01",
          text: "Non-Recent (>= 6hrs) Single Central Wound",
          recResponse: 153,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 152,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 153,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 153,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 154,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 152,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 154,
            },
          ],
        },
        {
          code: "27B02",
          text: "Known Single Peripheral Wound",
          recResponse: 153,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 152,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 153,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 153,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 154,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 152,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 154,
            },
          ],
        },
        {
          code: "27B03",
          text: "Serious Hemorrhage",
          recResponse: 153,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 152,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 153,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 153,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 154,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 152,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 154,
            },
          ],
        },
        {
          code: "27B04",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 153,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 152,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 153,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 153,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 154,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 152,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 154,
            },
          ],
        },
        {
          code: "27B05",
          text: "Obvious Death",
          recResponse: 156,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 155,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 156,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 156,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 157,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 155,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 157,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "27D00",
          text: "ALS Override (Delta)",
          recResponse: 156,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 155,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 156,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 156,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 157,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 155,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 157,
            },
          ],
        },
        {
          code: "27D01",
          text: "Arrest",
          recResponse: 158,
          notBreathing: true,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 159,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 158,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 158,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 160,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 159,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 160,
            },
          ],
        },
        {
          code: "27D02",
          text: "Unconscious",
          recResponse: 162,
          notConscious: true,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 161,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 162,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 162,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 163,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 161,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 163,
            },
          ],
        },
        {
          code: "27D03",
          text: "Not Alert",
          recResponse: 162,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 161,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 162,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 162,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 163,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 161,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 163,
            },
          ],
        },
        {
          code: "27D04",
          text: "Central Wounds",
          recResponse: 156,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 155,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 156,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 156,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 157,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 155,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 157,
            },
          ],
        },
        {
          code: "27D05",
          text: "Mult Wounds",
          recResponse: 156,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 155,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 156,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 156,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 157,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 155,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 157,
            },
          ],
        },
        {
          code: "27D06",
          text: "Mult Victims",
          recResponse: 165,
          multPatient: true,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 164,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 165,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 165,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 166,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 164,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 166,
            },
          ],
        },
      ],
    },
  ],
};
