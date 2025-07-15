import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const BACKCOUNTRY_RESCUE: IFireComplaint = {
  protocol: 78,
  name: "Backcountry Rescue",
  shortName: "Backcountry Rescue",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultPlan: 527,
  defaultCode: "78B01",
  questions: [],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "78B01",
          text: "Unkn Situation (Investigation)",
          recResponse: 527,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 527,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 527,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 527,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 527,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 527,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "78C00",
          text: "Override (Charlie)",
          recResponse: 527,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 527,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 527,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 527,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 527,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 527,
            },
          ],
        },
        {
          code: "78C01",
          text: "Avalanche (Unkn Number of Trapped Persons)",
          recResponse: 527,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 527,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 527,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 527,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 527,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 527,
            },
          ],
        },
        {
          code: "78C02",
          text: "Injured in Accessible Area",
          recResponse: 527,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 527,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 527,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 527,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 527,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 527,
            },
          ],
        },
        {
          code: "78C03",
          text: "Not Injured in Inaccessible Area",
          recResponse: 527,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 527,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 527,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 527,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 527,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 527,
            },
          ],
        },
        {
          code: "78C04",
          text: "Not Injured in High Angle Terrain",
          recResponse: 527,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 527,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 527,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 527,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 527,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 527,
            },
          ],
        },
        {
          code: "78C05",
          text: "Backcountry Rescue",
          recResponse: 85,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 85,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 85,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 85,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 85,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 85,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "78D00",
          text: "Override (Delta)",
          recResponse: 527,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 528,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 529,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 530,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 531,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 532,
            },
          ],
        },
        {
          code: "78D01",
          text: "Avalanche (Mult Trapped Persons)",
          recResponse: 533,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 534,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 535,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 535,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 533,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 534,
            },
          ],
        },
        {
          code: "78D02",
          text: "Avalanche (Single Trapped Person)",
          recResponse: 536,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 534,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 535,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 537,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 533,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 538,
            },
          ],
        },
        {
          code: "78D03",
          text: "Trapped/Injured in Crevasse",
          recResponse: 539,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 539,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 539,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 539,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 539,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 539,
            },
          ],
        },
        {
          code: "78D04",
          text: "Trapped/Injured in Inaccessible Area",
          recResponse: 540,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 540,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 540,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 540,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 540,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 540,
            },
          ],
        },
        {
          code: "78D05",
          text: "Trapped/Injured in High Angle Terrain",
          recResponse: 541,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 541,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 541,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 541,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 541,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 541,
            },
          ],
        },
        {
          code: "78D06",
          text: "Cave/Abandoned Mine",
          recResponse: 542,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 543,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 544,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 545,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 546,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 547,
            },
          ],
        },
        {
          code: "78D07",
          text: "Backcountry Rescue",
          recResponse: 85,
          subCodes: [
            {
              suffix: "B",
              text: "Both Inclement Weather & Mult People Involved",
              recResponse: 85,
            },
            {
              suffix: "C",
              text: "Both Rising Water & Mult Sick/Injured Persons",
              recResponse: 85,
            },
            {
              suffix: "H",
              text: "Rising Water",
              recResponse: 85,
            },
            {
              suffix: "M",
              text: "Mult People Involved",
              recResponse: 85,
            },
            {
              suffix: "W",
              text: "Inclement Weather",
              recResponse: 85,
            },
          ],
        },
      ],
    },
  ],
};
