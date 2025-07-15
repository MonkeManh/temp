import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const SERVICE_CALL: IFireComplaint = {
  protocol: 53,
  name: "Service Call",
  shortName: "Service Call",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "O",
  defaultPlan: 20,
  defaultCode: "53A00",
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "53O01",
          text: "Locked Out of Vehicle (Unoccupied)",
          recResponse: 20,
        },
        {
          code: "53O02",
          text: "Downed Trees & Objects",
          recResponse: 20,
        },
        {
          code: "53O03",
          text: "Hydrant Problem",
          recResponse: 20,
        },
        {
          code: "53O04",
          text: "Sewer Problem",
          recResponse: 20,
        },
        {
          code: "53O05",
          text: "Water Main Break",
          recResponse: 20,
        },
        {
          code: "53O06",
          text: "Flooded/Water in Roadway",
          recResponse: 20,
        },
        {
          code: "53O07",
          text: "Other",
          recResponse: 20,
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "53A00",
          text: "Override (Alpha)",
          recResponse: 20,
        },
        {
          code: "53A01",
          text: "Locked In/Out of Building",
          recResponse: 21,
        },
        {
          code: "53A02",
          text: "Lift Assist",
          recResponse: 22,
        },
        {
          code: "53A03",
          text: "Animal Rescue",
          recResponse: 23,
        },
        {
          code: "53A04",
          text: "Water Problem",
          recResponse: 24,
        },
        {
          code: "53A05",
          text: "Other",
          recResponse: 20,
          subCodes: [
            {
              suffix: "R",
              text: "Helicopter Landing Site",
              recResponse: 25,
            },
            {
              suffix: "S",
              text: "OFI Follow-Up",
              recResponse: 26,
            },
            {
              suffix: "T",
              text: "OFI Code Enforcement",
              recResponse: 27,
            },
            {
              suffix: "U",
              text: "OFI Investigation",
              recResponse: 28,
            },
            {
              suffix: "V",
              text: "OFI Other",
              recResponse: 29,
            },
            {
              suffix: "W",
              text: "Event Standby",
              recResponse: 30,
            },
            {
              suffix: "X",
              text: "Small Mercury Spill",
              recResponse: 31,
            },
            {
              suffix: "Y",
              text: "Illegal BBQ",
              recResponse: 32,
            },
            {
              suffix: "Z",
              text: "Malfunctioning Smoke Detector",
              recResponse: 33,
            },
          ],
        },
        {
          code: "53A06",
          text: "Unkn/Other Situation (Investigation)",
          recResponse: 34,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "53B00",
          text: "Override (Bravo)",
          recResponse: 34,
          subCodes: [
            {
              suffix: "R",
              text: "Helicopter Landing Site",
              recResponse: 25,
            },
            {
              suffix: "S",
              text: "OFI Follow-Up",
              recResponse: 26,
            },
            {
              suffix: "T",
              text: "OFI Code Enforcement",
              recResponse: 27,
            },
            {
              suffix: "U",
              text: "OFI Investigation",
              recResponse: 28,
            },
            {
              suffix: "V",
              text: "OFI Other",
              recResponse: 29,
            },
            {
              suffix: "W",
              text: "Event Standby",
              recResponse: 30,
            },
            {
              suffix: "X",
              text: "Small Mercury Spill",
              recResponse: 31,
            },
            {
              suffix: "Y",
              text: "Illegal BBQ",
              recResponse: 32,
            },
            {
              suffix: "Z",
              text: "Malfunctioning Smoke Detector",
              recResponse: 33,
            },
          ],
        },
        {
          code: "53B01",
          text: "Locked in Vehicle",
          recResponse: 35,
        },
        {
          code: "53B02",
          text: "Welfare Check",
          recResponse: 36,
        },
        {
          code: "53B03",
          text: "Service Call w/ Medical Assistance",
          recResponse: 37,
          subCodes: [
            {
              suffix: "A",
              text: "Safe Situation",
              recResponse: 38,
            },
            {
              suffix: "B",
              text: "LSIA Alert II (Stage)",
              recResponse: 39,
            },
            {
              suffix: "C",
              text: "Security Sweep",
              recResponse: 40,
            },
            {
              suffix: "D",
              text: "Barricade",
              recResponse: 41,
            },
            {
              suffix: "E",
              text: "Special Ops",
              recResponse: 42,
            },
            {
              suffix: "F",
              text: "Tac Medic",
              recResponse: 43,
            },
            {
              suffix: "G",
              text: "Locout w/ Food on the Stove",
              recResponse: 44,
            },
            {
              suffix: "H",
              text: "Mental Health Evaluation",
              recResponse: 45,
            },
            {
              suffix: "I",
              text: "Community Medicine",
              recResponse: 46,
            },
            {
              suffix: "J",
              text: "Override",
              recResponse: 37,
            },
            {
              suffix: "R",
              text: "Helicopter Landing Site",
              recResponse: 25,
            },
            {
              suffix: "S",
              text: "OFI Follow-Up",
              recResponse: 47,
            },
            {
              suffix: "T",
              text: "OFI Code Enforcement",
              recResponse: 48,
            },
            {
              suffix: "U",
              text: "OFI Investigation",
              recResponse: 49,
            },
            {
              suffix: "V",
              text: "OFI Other",
              recResponse: 50,
            },
            {
              suffix: "W",
              text: "Event Standby",
              recResponse: 51,
            },
            {
              suffix: "X",
              text: "Small Mercury Spill",
              recResponse: 52,
            },
            {
              suffix: "Y",
              text: "Illegal BBQ",
              recResponse: 53,
            },
            {
              suffix: "Z",
              text: "Malfunctioning Smoke Detector",
              recResponse: 54,
            },
          ],
        },
        {
          code: "53B04",
          text: "Urgent Service Call",
          recResponse: 55,
          subCodes: [
            {
              suffix: "A",
              text: "Safe Situation",
              recResponse: 38,
            },
            {
              suffix: "B",
              text: "LSIA Alert II (Stage)",
              recResponse: 39,
            },
            {
              suffix: "C",
              text: "Security Sweep",
              recResponse: 40,
            },
            {
              suffix: "D",
              text: "Barricade",
              recResponse: 41,
            },
            {
              suffix: "E",
              text: "Special Ops",
              recResponse: 42,
            },
            {
              suffix: "F",
              text: "Tac Medic",
              recResponse: 43,
            },
            {
              suffix: "G",
              text: "Locout w/ Food on the Stove",
              recResponse: 44,
            },
            {
              suffix: "H",
              text: "Mental Health Evaluation",
              recResponse: 45,
            },
            {
              suffix: "I",
              text: "Community Medicine",
              recResponse: 46,
            },
            {
              suffix: "J",
              text: "Override",
              recResponse: 37,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "53C00",
          text: "Override (Charlie)",
          recResponse: 64,
          subCodes: [
            {
              suffix: "A",
              text: "Safe Situation",
              recResponse: 65,
            },
            {
              suffix: "B",
              text: "LSIA Alert II (Stage)",
              recResponse: 66,
            },
            {
              suffix: "C",
              text: "Security Sweep",
              recResponse: 67,
            },
            {
              suffix: "D",
              text: "Barricade",
              recResponse: 68,
            },
            {
              suffix: "E",
              text: "Special Ops",
              recResponse: 69,
            },
            {
              suffix: "F",
              text: "Tac Medic",
              recResponse: 70,
            },
            {
              suffix: "G",
              text: "Locout w/ Food on the Stove",
              recResponse: 71,
            },
            {
              suffix: "H",
              text: "Mental Health Evaluation",
              recResponse: 72,
            },
            {
              suffix: "I",
              text: "Community Medicine",
              recResponse: 73,
            },
            {
              suffix: "J",
              text: "Override",
              recResponse: 64,
            },
            {
              suffix: "R",
              text: "Helicopter Landing Site",
              recResponse: 25,
            },
            {
              suffix: "S",
              text: "OFI Follow-Up",
              recResponse: 74,
            },
            {
              suffix: "T",
              text: "OFI Code Enforcement",
              recResponse: 75,
            },
            {
              suffix: "U",
              text: "OFI Investigation",
              recResponse: 76,
            },
            {
              suffix: "V",
              text: "OFI Other",
              recResponse: 77,
            },
            {
              suffix: "W",
              text: "Event Standby",
              recResponse: 78,
            },
            {
              suffix: "X",
              text: "Small Mercury Spill",
              recResponse: 79,
            },
            {
              suffix: "Y",
              text: "Illegal BBQ",
              recResponse: 80,
            },
            {
              suffix: "Z",
              text: "Malfunctioning Smoke Detector",
              recResponse: 81,
            },
          ],
        },
        {
          code: "53C01",
          text: "Water Problem w/ Electrical Hazard",
          recResponse: 82,
        },
      ],
    },
  ],
};
