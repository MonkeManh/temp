import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const HEMORRHAGE_LACERATION: IEMSComplaint = {
  protocol: 21,
  name: "Hemorrhage / Laceration",
  shortName: "Hemorrhage/Laceration",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 107,
  defaultCode: "21A02",
  preSend: true,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "21A01",
          text: "Not Dangerous Hemorrhage",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
        {
          code: "21A02",
          text: "Minor Hemorrhage",
          recResponse: 110,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 111,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 112,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "21B00",
          text: "ALS Override (Bravo)",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
        {
          code: "21B01",
          text: "Possibly Dangerous Hemorrhage",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
        {
          code: "21B02",
          text: "Serious Hemorrhage",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
        {
          code: "21B03",
          text: "Bleeding Disorder",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
        {
          code: "21B04",
          text: "Blood Thinners",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "21C00",
          text: "ALS Override (Charlie)",
          recResponse: 113,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 114,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 115,
            },
          ],
        },
        {
          code: "21C01",
          text: "Hemorrhage Through Tubes",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
        {
          code: "21C02",
          text: "Hemorrhage of Dialysis AV Fistula",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
        {
          code: "21C03",
          text: "Hemorrhage from Varicose Veins",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "21D00",
          text: "ALS Override (Delta)",
          recResponse: 113,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 114,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 115,
            },
          ],
        },
        {
          code: "21D01",
          text: "Arrest",
          recResponse: 116,
          notBreathing: true,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 117,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 118,
            },
          ],
        },
        {
          code: "21D02",
          text: "Unconscious",
          recResponse: 119,
          notConscious: true,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 120,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 121,
            },
          ],
        },
        {
          code: "21D03",
          text: "Not Alert",
          recResponse: 113,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 114,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 115,
            },
          ],
        },
        {
          code: "21D04",
          text: "Dangerous Hemorrhage",
          recResponse: 113,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 114,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 115,
            },
          ],
        },
        {
          code: "21D05",
          text: "Abnormal Breathing",
          recResponse: 113,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 114,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 115,
            },
          ],
        },
      ],
    },
  ],
};
