import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const FUEL_SPILL_ODOR: IFireComplaint = {
  protocol: 59,
  name: "Fuel Spill / Fuel Odor",
  shortName: "Fuel Spill/Odor",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultPlan: 190,
  defaultCode: "59C03",
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "59O01",
          text: "Minor Spill",
          recResponse: 193,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 193,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 193,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 193,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "59B00",
          text: "Override (Bravo)",
          recResponse: 190,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 190,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 190,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 190,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
          ],
        },
        {
          code: "59B01",
          text: "Uncontained Small Spill",
          recResponse: 190,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 190,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 190,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 190,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
          ],
        },
        {
          code: "59B02",
          text: "Contained Small Spill",
          recResponse: 193,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 193,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 193,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 193,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
          ],
        },
        {
          code: "59B03",
          text: "Fuel Odor",
          recResponse: 194,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 194,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 195,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 194,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "59C00",
          text: "Override (Charlie)",
          recResponse: 198,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 190,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
        {
          code: "59C01",
          text: "Uncontained Large Spill",
          recResponse: 198,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 190,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
        {
          code: "59C02",
          text: "Contained Large Spill",
          recResponse: 198,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 190,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
        {
          code: "59C03",
          text: "Unkn Situation (Investigation)",
          recResponse: 198,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 190,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "59D00",
          text: "Override (Delta)",
          recResponse: 199,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 199,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
        {
          code: "59D01",
          text: "Costal Water",
          recResponse: 199,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 199,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
        {
          code: "59D02",
          text: "Inland Water",
          recResponse: 199,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 199,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
        {
          code: "59D03",
          text: "Oceanic Water",
          recResponse: 199,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 199,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
        {
          code: "59D04",
          text: "Sewer/Drain",
          recResponse: 199,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 199,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
      ],
    },
  ],
};
