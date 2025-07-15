import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const OUTSIDE_OTHER_FIRES: IFireComplaint = {
  protocol: 67,
  name: "Outside / Other Fires",
  shortName: "Outside/Other Fires",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 247,
  defaultCode: "67B03",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "67A01",
          text: "Extinguished Fire (1st/2nd Party)",
          recResponse: 247,
          subCodes: [
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 247,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 247,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 248,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 249,
            },
          ],
        },
        {
          code: "67A02",
          text: "Illegal Burning",
          recResponse: 34,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 247,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 250,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 247,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 247,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 250,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 247,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 247,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 247,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 248,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 249,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "67B00",
          text: "Override (Bravo)",
          recResponse: 247,
          subCodes: [
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 247,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 247,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 248,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 249,
            },
          ],
        },
        {
          code: "67B01",
          text: "Small Outside Fire",
          recResponse: 247,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 247,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 250,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 250,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 247,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 250,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 247,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 247,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 247,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 248,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 249,
            },
          ],
        },
        {
          code: "67B02",
          text: "Small Outside Fire w/ Hazardous Materials",
          recResponse: 251,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 251,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 251,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 251,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 251,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 251,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 251,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 251,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 251,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 251,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 251,
            },
          ],
        },
        {
          code: "67B03",
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
              suffix: "O",
              text: "Other Threatened",
              recResponse: 209,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 209,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 209,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 209,
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
      priority: "C",
      codes: [
        {
          code: "67C00",
          text: "Override (Charlie)",
          recResponse: 250,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 250,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 250,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 250,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 250,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 250,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 250,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 250,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 250,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 252,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 249,
            },
          ],
        },
        {
          code: "67C01",
          text: "Small Elevated Structures",
          recResponse: 253,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 253,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 253,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 253,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 253,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 253,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 254,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 253,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 253,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 254,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 255,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "67D00",
          text: "Override (Delta)",
          recResponse: 256,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 256,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 256,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 256,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 256,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 256,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 256,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 256,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 256,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 256,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 256,
            },
          ],
        },
        {
          code: "67D01",
          text: "Large Elevated Structures",
          recResponse: 256,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 256,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 256,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 256,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 256,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 256,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 256,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 256,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 256,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 256,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 256,
            },
          ],
        },
        {
          code: "67D02",
          text: "Large Outside Fire",
          recResponse: 250,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 250,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 250,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 250,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 250,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 250,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 252,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 250,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 250,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 252,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 249,
            },
          ],
        },
        {
          code: "67D03",
          text: "Large Outside Fire w/ Hazardous Materials",
          recResponse: 251,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 251,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 251,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 251,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 251,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 251,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 251,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 251,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 251,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 251,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 251,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "67E00",
          text: "Override (Echo)",
          recResponse: 257,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 257,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 257,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 257,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 257,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 257,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 257,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 257,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 257,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 257,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 257,
            },
          ],
        },
        {
          code: "67E01",
          text: "Person on Fire (Outside)",
          recResponse: 258,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 258,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 258,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 258,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 258,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 258,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 258,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 258,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 258,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 258,
            },
          ],
        },
      ],
    },
  ],
};
