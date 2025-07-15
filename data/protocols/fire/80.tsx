import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const OUTSIDE_TANK_FIRE: IFireComplaint = {
  protocol: 80,
  name: "Outside Tank Fire",
  shortName: "Outside Tank Fire",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultPlan: 550,
  defaultCode: "80C05",
  questions: [],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "80B01",
          text: "Single Natrual/LP Gas Storage Tank (<= 5 Gallons/20 Liters)",
          recResponse: 550,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 551,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 553,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 553,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 550,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 551,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 553,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 551,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 550,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 550,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 551,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 552,
            },
          ],
        },
        {
          code: "80B02",
          text: "Extinguished Fire - Small Tank (1st/2nd Pty)",
          recResponse: 554,
          subCodes: [
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 555,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 555,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 556,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "80C00",
          text: "Override (Charlie)",
          recResponse: 553,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 553,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 553,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 553,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 551,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 551,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 553,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 551,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 551,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 553,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 551,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 552,
            },
          ],
        },
        {
          code: "80C01",
          text: "Small Natural/LP Gas Storage Tank",
          recResponse: 557,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 557,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 557,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 557,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 557,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 557,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 557,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 557,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 557,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 557,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 557,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 557,
            },
          ],
        },
        {
          code: "80C02",
          text: "Small Chemical Storage Tank",
          recResponse: 557,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 557,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 557,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 557,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 557,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 557,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 557,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 557,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 557,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 557,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 557,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 557,
            },
          ],
        },
        {
          code: "80C03",
          text: "Small Fuel Storage Tank",
          recResponse: 557,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 557,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 557,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 557,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 557,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 557,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 557,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 557,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 557,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 557,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 557,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 557,
            },
          ],
        },
        {
          code: "80C04",
          text: "Extinguished Fire - Large Tank (1st/2nd Pty)",
          recResponse: 558,
          subCodes: [
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 559,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 559,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 560,
            },
          ],
        },
        {
          code: "80C05",
          text: "Unkn Situation (Investigation)",
          recResponse: 209,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 209,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 209,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 209,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 209,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 210,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 209,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 210,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 209,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 209,
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
      priority: "D",
      codes: [
        {
          code: "80D00",
          text: "Override (Delta)",
          recResponse: 561,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 561,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 561,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 561,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 561,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 561,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 561,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 561,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 561,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 561,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 561,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 561,
            },
          ],
        },
        {
          code: "80D01",
          text: "Large Natrual/LP Gas Storage Tank",
          recResponse: 561,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 561,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 561,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 561,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 561,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 561,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 561,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 561,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 561,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 561,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 561,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 561,
            },
          ],
        },
        {
          code: "80D02",
          text: "Large Chemical Storage Tank",
          recResponse: 561,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 561,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 561,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 561,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 561,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 561,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 561,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 561,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 561,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 561,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 561,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 561,
            },
          ],
        },
        {
          code: "80D03",
          text: "Large Fuel Storage Tank",
          recResponse: 561,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 561,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 561,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 561,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 561,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 561,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 561,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 561,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 561,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 561,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 561,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 561,
            },
          ],
        },
        {
          code: "80D04",
          text: "Refinery/Tank Farm Fire",
          recResponse: 561,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 561,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 561,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 561,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 561,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 561,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 561,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 561,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 561,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 561,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 561,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 561,
            },
          ],
        },
      ],
    },
  ],
};
