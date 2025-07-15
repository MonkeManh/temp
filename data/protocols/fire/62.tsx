import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const HIGH_ANGLE_RESCUE: IFireComplaint = {
  protocol: 62,
  name: "High Angle Rescue",
  shortName: "High Angle Rescue",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultPlan: 210,
  defaultCode: "62B01",
  questions: [],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "62B01",
          text: "Unkn Situation (Investigation)",
          recResponse: 210,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "62C00",
          text: "Override (Charlie)",
          recResponse: 85,
        },
        {
          code: "62C01",
          text: "Unkn Situation (Suicidal w/ Injs)",
          recResponse: 85,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "62D00",
          text: "Override (Delta)",
          recResponse: 85,
        },
        {
          code: "62D01",
          text: "High Angle Rescue",
          recResponse: 85,
          subCodes: [
            {
              suffix: "A",
              text: "Above Grade",
              recResponse: 85,
            },
            {
              suffix: "B",
              text: "Below Grade",
              recResponse: 85,
            },
            {
              suffix: "W",
              text: "Above Water",
              recResponse: 85,
            },
          ],
        },
        {
          code: "62D02",
          text: "High Angle Rescue (Suicidal Person)",
          recResponse: 85,
          subCodes: [
            {
              suffix: "A",
              text: "Above Grade",
              recResponse: 85,
            },
            {
              suffix: "B",
              text: "Below Grade",
              recResponse: 85,
            },
            {
              suffix: "W",
              text: "Above Water",
              recResponse: 85,
            },
          ],
        },
        {
          code: "62D03",
          text: "High Angle Rescue w/ Single Injured Person",
          recResponse: 85,
          subCodes: [
            {
              suffix: "A",
              text: "Above Grade",
              recResponse: 85,
            },
            {
              suffix: "B",
              text: "Below Grade",
              recResponse: 85,
            },
            {
              suffix: "W",
              text: "Above Water",
              recResponse: 85,
            },
          ],
        },
        {
          code: "62D04",
          text: "High Angle Rescue w/ Mult Injured Persons",
          recResponse: 85,
          subCodes: [
            {
              suffix: "A",
              text: "Above Grade",
              recResponse: 85,
            },
            {
              suffix: "B",
              text: "Below Grade",
              recResponse: 85,
            },
            {
              suffix: "W",
              text: "Above Water",
              recResponse: 85,
            },
          ],
        },
        {
          code: "62D05",
          text: "High Angle Rescue w/ Unkn Number of Injs",
          recResponse: 85,
          subCodes: [
            {
              suffix: "A",
              text: "Above Grade",
              recResponse: 85,
            },
            {
              suffix: "B",
              text: "Below Grade",
              recResponse: 85,
            },
            {
              suffix: "W",
              text: "Above Water",
              recResponse: 85,
            },
          ],
        },
      ],
    },
  ],
};
