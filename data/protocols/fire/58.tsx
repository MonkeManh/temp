import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const EXTRICATION_ENTRAPMENT: IFireComplaint = {
  protocol: 58,
  name: "Extrication / Entrapment",
  shortName: "Extrication/Entrapment",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "O",
  defaultPlan: 183,
  defaultCode: "58B02",
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "58O01",
          text: "No Longer Trapped (No/Unkn Injs)",
          recResponse: 183,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 184,
            },
          ],
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "58A00",
          text: "Override (Alpha)",
          recResponse: 183,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 184,
            },
          ],
        },
        {
          code: "58A01",
          text: "Entrapment/Trapped (Finger, Toe, Hair)",
          recResponse: 189,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "58B00",
          text: "Override (Bravo)",
          recResponse: 185,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
        {
          code: "58B01",
          text: "Entrapment/Trapped (Peripheral Only)",
          recResponse: 185,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
        {
          code: "58B02",
          text: "Unkn Situation (Investigation)",
          recResponse: 34,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
        {
          code: "58B03",
          text: "Entrapment/Trapped (Non-Threatened)",
          recResponse: 20,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
        {
          code: "58B04",
          text: "Entrapment/Trapped",
          recResponse: 185,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "58C00",
          text: "Override (Charlie)",
          recResponse: 185,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
        {
          code: "58C01",
          text: "Entrapment/Trapped (Unkn Body Area)",
          recResponse: 185,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
        {
          code: "58C02",
          text: "Entrapment/Trapped (Possibly Dangerous Body Area)",
          recResponse: 185,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "58D00",
          text: "Override (Delta)",
          recResponse: 187,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 188,
            },
          ],
        },
        {
          code: "58D01",
          text: "Entrapment/Trapped (Dangerous Body Area or Full Body)",
          recResponse: 187,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 188,
            },
          ],
        },
      ],
    },
  ],
};
