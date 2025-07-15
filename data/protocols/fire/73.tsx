import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const WATERCRAFT_COLLISION: IFireComplaint = {
  protocol: 73,
  name: "Watercraft in Distress / Collision",
  shortName: "Boat Crash/Distress",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: 3 },
    { name: "Police", priority: true },
  ],
  defaultPriority: "A",
  defaultPlan: 461,
  defaultCode: "73D05",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "73A01",
          text: "Watercraft Welfare Check",
          recResponse: 461,
          subCodes: [
            {
              suffix: "C",
              text: "Costal",
              recResponse: 461,
            },
            {
              suffix: "I",
              text: "Inland",
              recResponse: 462,
            },
            {
              suffix: "O",
              text: "Oceanic",
              recResponse: 463,
            },
            {
              suffix: "T",
              text: "Costal w/ Single Sick/Injured Person",
              recResponse: 464,
            },
            {
              suffix: "U",
              text: "Costal w/ Mult Sick/Injured Persons",
              recResponse: 444,
            },
            {
              suffix: "V",
              text: "Inland w/ Single Sick/Injured Person",
              recResponse: 465,
            },
            {
              suffix: "W",
              text: "Inland w/ Mult Sick/Injured Persons",
              recResponse: 447,
            },
            {
              suffix: "X",
              text: "Oceanic w/ Single Sick/Injured Person",
              recResponse: 466,
            },
            {
              suffix: "Y",
              text: "Oceanic w/ Mult Sick/Injured Persons",
              recResponse: 450,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "73B00",
          text: "Override (Bravo)",
          recResponse: 443,
          subCodes: [
            {
              suffix: "C",
              text: "Costal",
              recResponse: 443,
            },
            {
              suffix: "I",
              text: "Inland",
              recResponse: 446,
            },
            {
              suffix: "O",
              text: "Oceanic",
              recResponse: 449,
            },
            {
              suffix: "T",
              text: "Costal w/ Single Sick/Injured Person",
              recResponse: 464,
            },
            {
              suffix: "U",
              text: "Costal w/ Mult Sick/Injured Persons",
              recResponse: 444,
            },
            {
              suffix: "V",
              text: "Inland w/ Single Sick/Injured Person",
              recResponse: 465,
            },
            {
              suffix: "W",
              text: "Inland w/ Mult Sick/Injured Persons",
              recResponse: 447,
            },
            {
              suffix: "X",
              text: "Oceanic w/ Single Sick/Injured Person",
              recResponse: 466,
            },
            {
              suffix: "Y",
              text: "Oceanic w/ Mult Sick/Injured Persons",
              recResponse: 450,
            },
          ],
        },
        {
          code: "73B01",
          text: "Watercraft Disabled (Out of Fuel, Broken Sail, Lost Oars, Engine Problems)",
          recResponse: 461,
          subCodes: [
            {
              suffix: "C",
              text: "Costal",
              recResponse: 461,
            },
            {
              suffix: "I",
              text: "Inland",
              recResponse: 462,
            },
            {
              suffix: "O",
              text: "Oceanic",
              recResponse: 463,
            },
            {
              suffix: "T",
              text: "Costal w/ Single Sick/Injured Person",
              recResponse: 464,
            },
            {
              suffix: "U",
              text: "Costal w/ Mult Sick/Injured Persons",
              recResponse: 444,
            },
            {
              suffix: "V",
              text: "Inland w/ Single Sick/Injured Person",
              recResponse: 465,
            },
            {
              suffix: "W",
              text: "Inland w/ Mult Sick/Injured Persons",
              recResponse: 447,
            },
            {
              suffix: "X",
              text: "Oceanic w/ Single Sick/Injured Person",
              recResponse: 466,
            },
            {
              suffix: "Y",
              text: "Oceanic w/ Mult Sick/Injured Persons",
              recResponse: 450,
            },
          ],
        },
        {
          code: "73B02",
          text: "Medical Emergency on Board",
          recResponse: 443,
          subCodes: [
            {
              suffix: "C",
              text: "Costal",
              recResponse: 443,
            },
            {
              suffix: "I",
              text: "Inland",
              recResponse: 446,
            },
            {
              suffix: "O",
              text: "Oceanic",
              recResponse: 449,
            },
            {
              suffix: "T",
              text: "Costal w/ Single Sick/Injured Person",
              recResponse: 464,
            },
            {
              suffix: "U",
              text: "Costal w/ Mult Sick/Injured Persons",
              recResponse: 444,
            },
            {
              suffix: "V",
              text: "Inland w/ Single Sick/Injured Person",
              recResponse: 465,
            },
            {
              suffix: "W",
              text: "Inland w/ Mult Sick/Injured Persons",
              recResponse: 447,
            },
            {
              suffix: "X",
              text: "Oceanic w/ Single Sick/Injured Person",
              recResponse: 466,
            },
            {
              suffix: "Y",
              text: "Oceanic w/ Mult Sick/Injured Persons",
              recResponse: 450,
            },
          ],
        },
        {
          code: "73B03",
          text: "Engine Will not Start",
          recResponse: 461,
          subCodes: [
            {
              suffix: "C",
              text: "Costal",
              recResponse: 461,
            },
            {
              suffix: "I",
              text: "Inland",
              recResponse: 462,
            },
            {
              suffix: "O",
              text: "Oceanic",
              recResponse: 463,
            },
            {
              suffix: "T",
              text: "Costal w/ Single Sick/Injured Person",
              recResponse: 464,
            },
            {
              suffix: "U",
              text: "Costal w/ Mult Sick/Injured Persons",
              recResponse: 444,
            },
            {
              suffix: "V",
              text: "Inland w/ Single Sick/Injured Person",
              recResponse: 465,
            },
            {
              suffix: "W",
              text: "Inland w/ Mult Sick/Injured Persons",
              recResponse: 447,
            },
            {
              suffix: "X",
              text: "Oceanic w/ Single Sick/Injured Person",
              recResponse: 466,
            },
            {
              suffix: "Y",
              text: "Oceanic w/ Mult Sick/Injured Persons",
              recResponse: 450,
            },
          ],
        },
        {
          code: "73B04",
          text: "Run Aground",
          recResponse: 443,
          subCodes: [
            {
              suffix: "C",
              text: "Costal",
              recResponse: 443,
            },
            {
              suffix: "I",
              text: "Inland",
              recResponse: 446,
            },
            {
              suffix: "O",
              text: "Oceanic",
              recResponse: 449,
            },
            {
              suffix: "T",
              text: "Costal w/ Single Sick/Injured Person",
              recResponse: 464,
            },
            {
              suffix: "U",
              text: "Costal w/ Mult Sick/Injured Persons",
              recResponse: 444,
            },
            {
              suffix: "V",
              text: "Inland w/ Single Sick/Injured Person",
              recResponse: 465,
            },
            {
              suffix: "W",
              text: "Inland w/ Mult Sick/Injured Persons",
              recResponse: 447,
            },
            {
              suffix: "X",
              text: "Oceanic w/ Single Sick/Injured Person",
              recResponse: 466,
            },
            {
              suffix: "Y",
              text: "Oceanic w/ Mult Sick/Injured Persons",
              recResponse: 450,
            },
          ],
        },
        {
          code: "73B05",
          text: "Flare Sighting (Other than Orange or Red)",
          recResponse: 443,
          subCodes: [
            {
              suffix: "C",
              text: "Costal",
              recResponse: 443,
            },
            {
              suffix: "I",
              text: "Inland",
              recResponse: 446,
            },
            {
              suffix: "O",
              text: "Oceanic",
              recResponse: 449,
            },
            {
              suffix: "T",
              text: "Costal w/ Single Sick/Injured Person",
              recResponse: 464,
            },
            {
              suffix: "U",
              text: "Costal w/ Mult Sick/Injured Persons",
              recResponse: 444,
            },
            {
              suffix: "V",
              text: "Inland w/ Single Sick/Injured Person",
              recResponse: 465,
            },
            {
              suffix: "W",
              text: "Inland w/ Mult Sick/Injured Persons",
              recResponse: 447,
            },
            {
              suffix: "X",
              text: "Oceanic w/ Single Sick/Injured Person",
              recResponse: 466,
            },
            {
              suffix: "Y",
              text: "Oceanic w/ Mult Sick/Injured Persons",
              recResponse: 450,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "73D00",
          text: "Override (Delta)",
          recResponse: 443,
          subCodes: [
            {
              suffix: "C",
              text: "Costal",
              recResponse: 443,
            },
            {
              suffix: "I",
              text: "Inland",
              recResponse: 446,
            },
            {
              suffix: "O",
              text: "Oceanic",
              recResponse: 449,
            },
            {
              suffix: "T",
              text: "Costal w/ Single Sick/Injured Person",
              recResponse: 445,
            },
            {
              suffix: "U",
              text: "Costal w/ Mult Sick/Injured Persons",
              recResponse: 444,
            },
            {
              suffix: "V",
              text: "Inland w/ Single Sick/Injured Person",
              recResponse: 448,
            },
            {
              suffix: "W",
              text: "Inland w/ Mult Sick/Injured Persons",
              recResponse: 447,
            },
            {
              suffix: "X",
              text: "Oceanic w/ Single Sick/Injured Person",
              recResponse: 451,
            },
            {
              suffix: "Y",
              text: "Oceanic w/ Mult Sick/Injured Persons",
              recResponse: 450,
            },
          ],
        },
        {
          code: "73D01",
          text: "People in Water",
          recResponse: 443,
          subCodes: [
            {
              suffix: "C",
              text: "Costal",
              recResponse: 443,
            },
            {
              suffix: "I",
              text: "Inland",
              recResponse: 446,
            },
            {
              suffix: "O",
              text: "Oceanic",
              recResponse: 449,
            },
            {
              suffix: "T",
              text: "Costal w/ Single Sick/Injured Person",
              recResponse: 445,
            },
            {
              suffix: "U",
              text: "Costal w/ Mult Sick/Injured Persons",
              recResponse: 444,
            },
            {
              suffix: "V",
              text: "Inland w/ Single Sick/Injured Person",
              recResponse: 448,
            },
            {
              suffix: "W",
              text: "Inland w/ Mult Sick/Injured Persons",
              recResponse: 447,
            },
            {
              suffix: "X",
              text: "Oceanic w/ Single Sick/Injured Person",
              recResponse: 451,
            },
            {
              suffix: "Y",
              text: "Oceanic w/ Mult Sick/Injured Persons",
              recResponse: 450,
            },
          ],
        },
        {
          code: "73D02",
          text: "Taking on Water",
          recResponse: 443,
          subCodes: [
            {
              suffix: "C",
              text: "Costal",
              recResponse: 443,
            },
            {
              suffix: "I",
              text: "Inland",
              recResponse: 446,
            },
            {
              suffix: "O",
              text: "Oceanic",
              recResponse: 449,
            },
            {
              suffix: "T",
              text: "Costal w/ Single Sick/Injured Person",
              recResponse: 445,
            },
            {
              suffix: "U",
              text: "Costal w/ Mult Sick/Injured Persons",
              recResponse: 444,
            },
            {
              suffix: "V",
              text: "Inland w/ Single Sick/Injured Person",
              recResponse: 448,
            },
            {
              suffix: "W",
              text: "Inland w/ Mult Sick/Injured Persons",
              recResponse: 447,
            },
            {
              suffix: "X",
              text: "Oceanic w/ Single Sick/Injured Person",
              recResponse: 451,
            },
            {
              suffix: "Y",
              text: "Oceanic w/ Mult Sick/Injured Persons",
              recResponse: 450,
            },
          ],
        },
        {
          code: "73D03",
          text: "Flare/Smoke Sighting (Orange or Red)",
          recResponse: 443,
          subCodes: [
            {
              suffix: "C",
              text: "Costal",
              recResponse: 443,
            },
            {
              suffix: "I",
              text: "Inland",
              recResponse: 446,
            },
            {
              suffix: "O",
              text: "Oceanic",
              recResponse: 449,
            },
            {
              suffix: "T",
              text: "Costal w/ Single Sick/Injured Person",
              recResponse: 445,
            },
            {
              suffix: "U",
              text: "Costal w/ Mult Sick/Injured Persons",
              recResponse: 444,
            },
            {
              suffix: "V",
              text: "Inland w/ Single Sick/Injured Person",
              recResponse: 448,
            },
            {
              suffix: "W",
              text: "Inland w/ Mult Sick/Injured Persons",
              recResponse: 447,
            },
            {
              suffix: "X",
              text: "Oceanic w/ Single Sick/Injured Person",
              recResponse: 451,
            },
            {
              suffix: "Y",
              text: "Oceanic w/ Mult Sick/Injured Persons",
              recResponse: 450,
            },
          ],
        },
        {
          code: "73D04",
          text: "Collision",
          recResponse: 443,
          subCodes: [
            {
              suffix: "C",
              text: "Costal",
              recResponse: 443,
            },
            {
              suffix: "I",
              text: "Inland",
              recResponse: 446,
            },
            {
              suffix: "O",
              text: "Oceanic",
              recResponse: 449,
            },
            {
              suffix: "T",
              text: "Costal w/ Single Sick/Injured Person",
              recResponse: 445,
            },
            {
              suffix: "U",
              text: "Costal w/ Mult Sick/Injured Persons",
              recResponse: 444,
            },
            {
              suffix: "V",
              text: "Inland w/ Single Sick/Injured Person",
              recResponse: 448,
            },
            {
              suffix: "W",
              text: "Inland w/ Mult Sick/Injured Persons",
              recResponse: 447,
            },
            {
              suffix: "X",
              text: "Oceanic w/ Single Sick/Injured Person",
              recResponse: 451,
            },
            {
              suffix: "Y",
              text: "Oceanic w/ Mult Sick/Injured Persons",
              recResponse: 450,
            },
          ],
        },
        {
          code: "73D05",
          text: "Unkn Situation (Investigation)",
          recResponse: 443,
          subCodes: [
            {
              suffix: "C",
              text: "Costal",
              recResponse: 443,
            },
            {
              suffix: "I",
              text: "Inland",
              recResponse: 446,
            },
            {
              suffix: "O",
              text: "Oceanic",
              recResponse: 449,
            },
            {
              suffix: "T",
              text: "Costal w/ Single Sick/Injured Person",
              recResponse: 445,
            },
            {
              suffix: "U",
              text: "Costal w/ Mult Sick/Injured Persons",
              recResponse: 444,
            },
            {
              suffix: "V",
              text: "Inland w/ Single Sick/Injured Person",
              recResponse: 448,
            },
            {
              suffix: "W",
              text: "Inland w/ Mult Sick/Injured Persons",
              recResponse: 447,
            },
            {
              suffix: "X",
              text: "Oceanic w/ Single Sick/Injured Person",
              recResponse: 451,
            },
            {
              suffix: "Y",
              text: "Oceanic w/ Mult Sick/Injured Persons",
              recResponse: 450,
            },
          ],
        },
      ],
    },
  ],
};
