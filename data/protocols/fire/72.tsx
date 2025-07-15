import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const WATER_ICE_MUD_RESCUE: IFireComplaint = {
  protocol: 72,
  name: "Water / Ice / Mud Rescue",
  shortName: "Water/Ice/Mud Rescue",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 424,
  defaultCode: "72B02",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "72A01",
          text: "Animal Rescue",
          recResponse: 424,
          subCodes: [],
        },
        {
          code: "72A02",
          text: "Body Recovery",
          recResponse: 425,
          subCodes: [],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "72B00",
          text: "Override (Bravo)",
          recResponse: 426,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 427,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 428,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 427,
            },
          ],
        },
        {
          code: "72B01",
          text: "Stranded Person (Non-Threatened)",
          recResponse: 429,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 427,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 428,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 427,
            },
          ],
        },
        {
          code: "72B02",
          text: "Unkn Situation (Investigation)",
          recResponse: 426,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 427,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 428,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 427,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "72C00",
          text: "Override (Charlie)",
          recResponse: 430,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 431,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 432,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 431,
            },
          ],
        },
        {
          code: "72C01",
          text: "Stranded in Building/Structure Due to Flood",
          recResponse: 433,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 434,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 435,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 434,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "72D00",
          text: "Override (Delta)",
          recResponse: 430,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 431,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 432,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 431,
            },
          ],
        },
        {
          code: "72D01",
          text: "Ice Rescue",
          recResponse: 436,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 436,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 438,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 436,
            },
          ],
        },
        {
          code: "72D02",
          text: "Swift Water Rescue",
          recResponse: 430,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 431,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 432,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 431,
            },
          ],
        },
        {
          code: "72D03",
          text: "Scuba Dive Accident",
          recResponse: 439,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 427,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 428,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 427,
            },
          ],
        },
        {
          code: "72D04",
          text: "Swimming Pool Rescue",
          recResponse: 440,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 441,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 442,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 441,
            },
          ],
        },
        {
          code: "72D05",
          text: "Costal Water Rescue",
          recResponse: 443,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 444,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 445,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 444,
            },
          ],
        },
        {
          code: "72D06",
          text: "Inland Water Rescue",
          recResponse: 446,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 447,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 448,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 447,
            },
          ],
        },
        {
          code: "72D07",
          text: "Oceanic Water Rescue",
          recResponse: 449,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 450,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 451,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 450,
            },
          ],
        },
        {
          code: "72D08",
          text: "Surf Rescue",
          recResponse: 452,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 453,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 454,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 453,
            },
          ],
        },
        {
          code: "72D09",
          text: "Large Flood Water Rescue",
          recResponse: 433,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 434,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 435,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 434,
            },
          ],
        },
        {
          code: "72D10",
          text: "Small Flood Water Rescue",
          recResponse: 455,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 456,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 457,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 456,
            },
          ],
        },
        {
          code: "72D11",
          text: "Quicksand/Marsh/Mud Resuce",
          recResponse: 458,
          subCodes: [
            {
              suffix: "M",
              text: "Mult-Person Rescue",
              recResponse: 459,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 460,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 459,
            },
          ],
        },
      ],
    },
  ],
};
