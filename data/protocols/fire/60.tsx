import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const GAS_LEAK_ODOR: IFireComplaint = {
  protocol: 60,
  name: "Gas Leak / Gas Odor (Natural & LP Gases)",
  shortName: "Gas Leak/Odor",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultPlan: 200,
  defaultCode: "60B04",
  questions: [],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "60B01",
          text: "Outside Residential Line",
          recResponse: 200,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 201,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 202,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 203,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 204,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 205,
            },
          ],
        },
        {
          code: "60B02",
          text: "Outside Tank <= 5 Gallons/20 Liters",
          recResponse: 206,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 201,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 202,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 203,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 207,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 208,
            },
          ],
        },
        {
          code: "60B03",
          text: "Outside Odor (Other/Unkn Source)",
          recResponse: 201,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 201,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 202,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 203,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 202,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 203,
            },
          ],
        },
        {
          code: "60B04",
          text: "Unkn Situation (Investigation)",
          recResponse: 209,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 209,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 210,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 211,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 210,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 211,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "60C00",
          text: "Override (Charlie)",
          recResponse: 206,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 206,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 207,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 208,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 207,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 208,
            },
          ],
        },
        {
          code: "60C01",
          text: "Residential (Single)",
          recResponse: 212,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 212,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 214,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 214,
            },
          ],
        },
        {
          code: "60C02",
          text: "Outside Comm Line",
          recResponse: 200,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 200,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 204,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 205,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 204,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 205,
            },
          ],
        },
        {
          code: "60C03",
          text: "Outside Tank > 5 Gallons/20 Liters",
          recResponse: 212,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 212,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 214,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 214,
            },
          ],
        },
        {
          code: "60C04",
          text: "Transmission/Distribution (Main/Service) Pipeline",
          recResponse: 215,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 215,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 215,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 215,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 215,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 215,
            },
          ],
        },
        {
          code: "60C05",
          text: "High-Pressure Line",
          recResponse: 215,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 215,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 215,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 215,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 215,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 215,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "60D00",
          text: "Override (Delta)",
          recResponse: 215,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 215,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 215,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 215,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 215,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 215,
            },
          ],
        },
        {
          code: "60D01",
          text: "High Life Hazard",
          recResponse: 212,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 212,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 214,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 214,
            },
          ],
        },
        {
          code: "60D02",
          text: "High Rise",
          recResponse: 212,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 212,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 214,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 214,
            },
          ],
        },
        {
          code: "60D03",
          text: "Comm/Ind Building",
          recResponse: 212,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 212,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 214,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 214,
            },
          ],
        },
        {
          code: "60D04",
          text: "Residential (Mult)",
          recResponse: 212,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 212,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 214,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 214,
            },
          ],
        },
      ],
    },
  ],
};
