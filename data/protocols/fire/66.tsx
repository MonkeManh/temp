import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const STRANGE_ODOR: IFireComplaint = {
  protocol: 66,
  name: "Odor (Strange / Unknown)",
  shortName: "Unknown Odors",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: 3 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 243,
  defaultCode: "66A03",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "66A01",
          text: "Odor Inside",
          recResponse: 243,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 244,
            },
          ],
        },
        {
          code: "66A02",
          text: "Odor Outside",
          recResponse: 243,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 244,
            },
          ],
        },
        {
          code: "66A03",
          text: "Unkn Situation (Investigation)",
          recResponse: 243,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 244,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "66B00",
          text: "Override (Bravo)",
          recResponse: 245,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 19,
            },
          ],
        },
        {
          code: "66B01",
          text: "Unkn Situation (Investigation) w/ Sick Person(s)",
          recResponse: 245,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 19,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "66C00",
          text: "Override (Charlie)",
          recResponse: 245,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 19,
            },
          ],
        },
        {
          code: "66C01",
          text: "Odor Inside w/ Single Sick Person",
          recResponse: 245,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 19,
            },
          ],
        },
        {
          code: "66C02",
          text: "Odor Inside w/ Multiple Sick Persons",
          recResponse: 246,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 19,
            },
          ],
        },
        {
          code: "66C03",
          text: "Odor Outside w/ Single Sick Person",
          recResponse: 245,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 19,
            },
          ],
        },
        {
          code: "66C04",
          text: "Odor Outside w/ Multiple Sick Persons",
          recResponse: 246,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 19,
            },
          ],
        },
      ],
    },
  ],
};
