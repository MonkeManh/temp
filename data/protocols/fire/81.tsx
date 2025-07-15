import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const SINKING_VEHICLE: IFireComplaint = {
  protocol: 81,
  name: "Sinking Vehicle / Vehicle in Floodwater",
  shortName: "Sinking Vehicle",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: 1 },
  ],
  defaultPriority: "C",
  defaultPlan: 562,
  defaultCode: "81C01",
  questions: [],
  determinants: [
    {
      priority: "C",
      codes: [
        {
          code: "81C01",
          text: "Mult Vehicles in Floodwater (Non-Threatened)",
          recResponse: 82,
          subCodes: [
            {
              suffix: "M",
              text: "Mult Person Rescue",
              recResponse: 82,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 82,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Person",
              recResponse: 82,
            },
          ],
        },
        {
          code: "81C02",
          text: "Vehicle in Floodwater (Non-Threatened)",
          recResponse: 82,
          subCodes: [
            {
              suffix: "M",
              text: "Mult Person Rescue",
              recResponse: 82,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 82,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Person",
              recResponse: 82,
            },
          ],
        },
        {
          code: "81C03",
          text: "Sinking Vehicle (No People Rptd Inside)",
          recResponse: 82,
          subCodes: [
            {
              suffix: "M",
              text: "Mult Person Rescue",
              recResponse: 82,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 82,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Person",
              recResponse: 82,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "81D00",
          text: "Override (Delta)",
          recResponse: 562,
          subCodes: [
            {
              suffix: "M",
              text: "Mult Person Rescue",
              recResponse: 562,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 562,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Person",
              recResponse: 562,
            },
          ],
        },
        {
          code: "81D01",
          text: "Sinking Vehicle - Costal Water Rescue (People in Water)",
          recResponse: 562,
          subCodes: [
            {
              suffix: "M",
              text: "Mult Person Rescue",
              recResponse: 562,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 562,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Person",
              recResponse: 562,
            },
          ],
        },
        {
          code: "81D02",
          text: "Sinking Vehicle - Inland Water Rescue (People in Water)",
          recResponse: 562,
          subCodes: [
            {
              suffix: "M",
              text: "Mult Person Rescue",
              recResponse: 562,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 562,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Person",
              recResponse: 562,
            },
          ],
        },
        {
          code: "81D03",
          text: "Sinking Vehicle - Ocean Water Rescue (People in Water)",
          recResponse: 562,
          subCodes: [
            {
              suffix: "M",
              text: "Mult Person Rescue",
              recResponse: 562,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 562,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Person",
              recResponse: 562,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "81E00",
          text: "Override (Echo)",
          recResponse: 563,
          subCodes: [
            {
              suffix: "M",
              text: "Mult Person Rescue",
              recResponse: 563,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 563,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Person",
              recResponse: 563,
            },
          ],
        },
        {
          code: "81E01",
          text: "Sinking Vehicle (People Inside)",
          recResponse: 563,
          subCodes: [
            {
              suffix: "M",
              text: "Mult Person Rescue",
              recResponse: 563,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 563,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Person",
              recResponse: 563,
            },
          ],
        },
        {
          code: "81E02",
          text: "Vehicle in Floodwater (Threatened)",
          recResponse: 564,
          subCodes: [
            {
              suffix: "M",
              text: "Mult Person Rescue",
              recResponse: 564,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 564,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Person",
              recResponse: 564,
            },
          ],
        },
      ],
    },
  ],
};
