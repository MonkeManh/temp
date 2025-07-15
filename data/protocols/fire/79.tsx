import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const LOST_PERSON: IFireComplaint = {
  protocol: 79,
  name: "Lost Person",
  shortName: "Lost Person",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: true },
  ],
  defaultPriority: "C",
  defaultPlan: 548,
  defaultCode: "79C01",
  questions: [],
  determinants: [
    {
      priority: "C",
      codes: [
        {
          code: "79C01",
          text: "Lost Person",
          recResponse: 548,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 548,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 548,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 548,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "79D00",
          text: "Override (Delta)",
          recResponse: 549,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 549,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 549,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 549,
            },
          ],
        },
        {
          code: "79D01",
          text: "Complex Terrain w/ Mult Sick/Injured Persons",
          recResponse: 549,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 549,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 549,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 549,
            },
          ],
        },
        {
          code: "79D02",
          text: "Complex Terrain w/ Single Sick/Injured Person",
          recResponse: 549,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 549,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 549,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 549,
            },
          ],
        },
        {
          code: "79D03",
          text: "Mult Sick/Injured Persons",
          recResponse: 549,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 549,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 549,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 549,
            },
          ],
        },
        {
          code: "79D04",
          text: "Single Sick/Injured Person",
          recResponse: 549,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 549,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 549,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 549,
            },
          ],
        },
        {
          code: "79D05",
          text: "Complex Terrain",
          recResponse: 549,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 549,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 549,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 549,
            },
          ],
        },
      ],
    },
  ],
};
