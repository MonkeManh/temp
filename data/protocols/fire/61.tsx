import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const HAZMAT: IFireComplaint = {
  protocol: 61,
  name: "Hazmat",
  shortName: "Hazmat",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: 3 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 184,
  defaultCode: "61C00",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "61A01",
          text: "Abandoned Waste",
          recResponse: 184,
          subCodes: [
            {
              suffix: "V",
              text: "Single Sick/Injured Person",
              recResponse: 184,
            },
            {
              suffix: "W",
              text: "Mult Sick/Injured Persons",
              recResponse: 19,
            },
            {
              suffix: "X",
              text: "MCI Level I",
              recResponse: 19,
            },
            {
              suffix: "Y",
              text: "MCI Level II",
              recResponse: 19,
            },
            {
              suffix: "Z",
              text: "MCI Level III",
              recResponse: 19,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "61B00",
          text: "Override (Bravo)",
          recResponse: 184,
          subCodes: [
            {
              suffix: "V",
              text: "Single Sick/Injured Person",
              recResponse: 19,
            },
            {
              suffix: "W",
              text: "Mult Sick/Injured Persons",
              recResponse: 19,
            },
            {
              suffix: "X",
              text: "MCI Level I",
              recResponse: 19,
            },
            {
              suffix: "Y",
              text: "MCI Level II",
              recResponse: 19,
            },
            {
              suffix: "Z",
              text: "MCI Level III",
              recResponse: 19,
            },
          ],
        },
        {
          code: "61B01",
          text: "Small Spill (<= 5 Gallons/20 Liters)",
          recResponse: 216,
          subCodes: [
            {
              suffix: "D",
              text: "Drug Lab",
              recResponse: 216,
            },
            {
              suffix: "S",
              text: "Chemical Suicide",
              recResponse: 216,
            },
            {
              suffix: "V",
              text: "Single Sick/Injured Person",
              recResponse: 217,
            },
            {
              suffix: "W",
              text: "Mult Sick/Injured Persons",
              recResponse: 217,
            },
            {
              suffix: "X",
              text: "MCI Level I",
              recResponse: 217,
            },
            {
              suffix: "Y",
              text: "MCI Level II",
              recResponse: 217,
            },
            {
              suffix: "Z",
              text: "MCI Level III",
              recResponse: 217,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "61C00",
          text: "Override (Charlie)",
          recResponse: 217,
          subCodes: [
            {
              suffix: "D",
              text: "Drug Lab",
              recResponse: 217,
            },
            {
              suffix: "S",
              text: "Chemical Suicide",
              recResponse: 217,
            },
            {
              suffix: "V",
              text: "Single Sick/Injured Person",
              recResponse: 217,
            },
            {
              suffix: "W",
              text: "Mult Sick/Injured Persons",
              recResponse: 217,
            },
            {
              suffix: "X",
              text: "MCI Level I",
              recResponse: 217,
            },
            {
              suffix: "Y",
              text: "MCI Level II",
              recResponse: 217,
            },
            {
              suffix: "Z",
              text: "MCI Level III",
              recResponse: 217,
            },
          ],
        },
        {
          code: "61C01",
          text: "Contained Hazmat",
          recResponse: 218,
          subCodes: [
            {
              suffix: "D",
              text: "Drug Lab",
              recResponse: 218,
            },
            {
              suffix: "S",
              text: "Chemical Suicide",
              recResponse: 218,
            },
            {
              suffix: "V",
              text: "Single Sick/Injured Person",
              recResponse: 218,
            },
            {
              suffix: "W",
              text: "Mult Sick/Injured Persons",
              recResponse: 219,
            },
            {
              suffix: "X",
              text: "MCI Level I",
              recResponse: 219,
            },
            {
              suffix: "Y",
              text: "MCI Level II",
              recResponse: 219,
            },
            {
              suffix: "Z",
              text: "MCI Level III",
              recResponse: 219,
            },
          ],
        },
        {
          code: "61C02",
          text: "Contained In/Near Other Waterway",
          recResponse: 218,
          subCodes: [
            {
              suffix: "D",
              text: "Drug Lab",
              recResponse: 218,
            },
            {
              suffix: "S",
              text: "Chemical Suicide",
              recResponse: 218,
            },
            {
              suffix: "V",
              text: "Single Sick/Injured Person",
              recResponse: 218,
            },
            {
              suffix: "W",
              text: "Mult Sick/Injured Persons",
              recResponse: 219,
            },
            {
              suffix: "X",
              text: "MCI Level I",
              recResponse: 219,
            },
            {
              suffix: "Y",
              text: "MCI Level II",
              recResponse: 219,
            },
            {
              suffix: "Z",
              text: "MCI Level III",
              recResponse: 219,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "61D00",
          text: "Override (Delta)",
          recResponse: 220,
          subCodes: [
            {
              suffix: "D",
              text: "Drug Lab",
              recResponse: 220,
            },
            {
              suffix: "S",
              text: "Chemical Suicide",
              recResponse: 220,
            },
            {
              suffix: "V",
              text: "Single Sick/Injured Person",
              recResponse: 220,
            },
            {
              suffix: "W",
              text: "Mult Sick/Injured Persons",
              recResponse: 221,
            },
            {
              suffix: "X",
              text: "MCI Level I",
              recResponse: 221,
            },
            {
              suffix: "Y",
              text: "MCI Level II",
              recResponse: 221,
            },
            {
              suffix: "Z",
              text: "MCI Level III",
              recResponse: 221,
            },
          ],
        },
        {
          code: "61D01",
          text: "Uncontained In/Near Other Waterway",
          recResponse: 220,
          subCodes: [
            {
              suffix: "D",
              text: "Drug Lab",
              recResponse: 220,
            },
            {
              suffix: "S",
              text: "Chemical Suicide",
              recResponse: 220,
            },
            {
              suffix: "V",
              text: "Single Sick/Injured Person",
              recResponse: 220,
            },
            {
              suffix: "W",
              text: "Mult Sick/Injured Persons",
              recResponse: 221,
            },
            {
              suffix: "X",
              text: "MCI Level I",
              recResponse: 221,
            },
            {
              suffix: "Y",
              text: "MCI Level II",
              recResponse: 221,
            },
            {
              suffix: "Z",
              text: "MCI Level III",
              recResponse: 221,
            },
          ],
        },
        {
          code: "61D02",
          text: "Uncontained Hazmat",
          recResponse: 220,
          subCodes: [
            {
              suffix: "D",
              text: "Drug Lab",
              recResponse: 220,
            },
            {
              suffix: "S",
              text: "Chemical Suicide",
              recResponse: 220,
            },
            {
              suffix: "V",
              text: "Single Sick/Injured Person",
              recResponse: 220,
            },
            {
              suffix: "W",
              text: "Mult Sick/Injured Persons",
              recResponse: 221,
            },
            {
              suffix: "X",
              text: "MCI Level I",
              recResponse: 221,
            },
            {
              suffix: "Y",
              text: "MCI Level II",
              recResponse: 221,
            },
            {
              suffix: "Z",
              text: "MCI Level III",
              recResponse: 221,
            },
          ],
        },
        {
          code: "61D03",
          text: "In/Near Costal Water",
          recResponse: 220,
          subCodes: [
            {
              suffix: "D",
              text: "Drug Lab",
              recResponse: 220,
            },
            {
              suffix: "S",
              text: "Chemical Suicide",
              recResponse: 220,
            },
            {
              suffix: "V",
              text: "Single Sick/Injured Person",
              recResponse: 220,
            },
            {
              suffix: "W",
              text: "Mult Sick/Injured Persons",
              recResponse: 221,
            },
            {
              suffix: "X",
              text: "MCI Level I",
              recResponse: 221,
            },
            {
              suffix: "Y",
              text: "MCI Level II",
              recResponse: 221,
            },
            {
              suffix: "Z",
              text: "MCI Level III",
              recResponse: 221,
            },
          ],
        },
        {
          code: "61D04",
          text: "In/Near Inland Water",
          recResponse: 220,
          subCodes: [
            {
              suffix: "D",
              text: "Drug Lab",
              recResponse: 220,
            },
            {
              suffix: "S",
              text: "Chemical Suicide",
              recResponse: 220,
            },
            {
              suffix: "V",
              text: "Single Sick/Injured Person",
              recResponse: 220,
            },
            {
              suffix: "W",
              text: "Mult Sick/Injured Persons",
              recResponse: 221,
            },
            {
              suffix: "X",
              text: "MCI Level I",
              recResponse: 221,
            },
            {
              suffix: "Y",
              text: "MCI Level II",
              recResponse: 221,
            },
            {
              suffix: "Z",
              text: "MCI Level III",
              recResponse: 221,
            },
          ],
        },
        {
          code: "61D05",
          text: "In/Near Oceanic Water",
          recResponse: 220,
          subCodes: [
            {
              suffix: "D",
              text: "Drug Lab",
              recResponse: 220,
            },
            {
              suffix: "S",
              text: "Chemical Suicide",
              recResponse: 220,
            },
            {
              suffix: "V",
              text: "Single Sick/Injured Person",
              recResponse: 220,
            },
            {
              suffix: "W",
              text: "Mult Sick/Injured Persons",
              recResponse: 221,
            },
            {
              suffix: "X",
              text: "MCI Level I",
              recResponse: 221,
            },
            {
              suffix: "Y",
              text: "MCI Level II",
              recResponse: 221,
            },
            {
              suffix: "Z",
              text: "MCI Level III",
              recResponse: 221,
            },
          ],
        },
        {
          code: "61D06",
          text: "In/Near Sewer Drain",
          recResponse: 220,
          subCodes: [
            {
              suffix: "D",
              text: "Drug Lab",
              recResponse: 220,
            },
            {
              suffix: "S",
              text: "Chemical Suicide",
              recResponse: 220,
            },
            {
              suffix: "V",
              text: "Single Sick/Injured Person",
              recResponse: 220,
            },
            {
              suffix: "W",
              text: "Mult Sick/Injured Persons",
              recResponse: 221,
            },
            {
              suffix: "X",
              text: "MCI Level I",
              recResponse: 221,
            },
            {
              suffix: "Y",
              text: "MCI Level II",
              recResponse: 221,
            },
            {
              suffix: "Z",
              text: "MCI Level III",
              recResponse: 221,
            },
          ],
        },
      ],
    },
  ],
};
