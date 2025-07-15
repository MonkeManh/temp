import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const DROWNING: IEMSComplaint = {
  protocol: 14,
  name: "Drowning (Near) / Diving / SCUBA Accident",
  shortName: "Drowning",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: 0 },
  ],
  defaultPriority: "A",
  defaultPlan: 65,
  defaultCode: "14B03",
  preSend: true,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "14A01",
          text: "Alert & Breathing Normally (No Injs & Out of Water)",
          recResponse: 65,
          subCodes: [
            {
              suffix: "S",
              text: "SCUBA Accident (Not Underwater)",
              recResponse: 65,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "14B00",
          text: "BLS Override (Bravo)",
          recResponse: 65,
          subCodes: [
            {
              suffix: "S",
              text: "SCUBA Accident (Not Underwater)",
              recResponse: 65,
            },
          ],
        },
        {
          code: "14B01",
          text: "Alert & Breathing Normally (Injs or In Water)",
          recResponse: 65,
          subCodes: [
            {
              suffix: "D",
              text: "Diving Inj (Not Underwater)",
              recResponse: 65,
            },
            {
              suffix: "F",
              text: "Floodwater Rescue",
              recResponse: 66,
            },
            {
              suffix: "I",
              text: "Ice Rescue",
              recResponse: 67,
            },
            {
              suffix: "S",
              text: "SCUBA Accident (Not Underwater)",
              recResponse: 65,
            },
            {
              suffix: "W",
              text: "Swift Water Rescue",
              recResponse: 66,
            },
          ],
        },
        {
          code: "14B02",
          text: "Obvious Death (Submersion >= 6hrs)",
          recResponse: 68,
        },
        {
          code: "14B03",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 65,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "14C00",
          text: "ALS Override (Charlie)",
          recResponse: 68,
          subCodes: [
            {
              suffix: "D",
              text: "Diving Inj (Not Underwater)",
              recResponse: 68,
            },
            {
              suffix: "F",
              text: "Floodwater Rescue",
              recResponse: 66,
            },
            {
              suffix: "I",
              text: "Ice Rescue",
              recResponse: 67,
            },
            {
              suffix: "S",
              text: "SCUBA Accident (Not Underwater)",
              recResponse: 68,
            },
            {
              suffix: "W",
              text: "Swift Water Rescue",
              recResponse: 66,
            },
          ],
        },
        {
          code: "14C01",
          text: "Alert w/ Abnormal Breathing",
          recResponse: 68,
          subCodes: [
            {
              suffix: "D",
              text: "Diving Inj (Not Underwater)",
              recResponse: 68,
            },
            {
              suffix: "F",
              text: "Floodwater Rescue",
              recResponse: 66,
            },
            {
              suffix: "I",
              text: "Ice Rescue",
              recResponse: 67,
            },
            {
              suffix: "S",
              text: "SCUBA Accident (Not Underwater)",
              recResponse: 68,
            },
            {
              suffix: "W",
              text: "Swift Water Rescue",
              recResponse: 66,
            },
          ],
        },
        {
          code: "14C02",
          text: "Decompression Sickness (The Bends)",
          recResponse: 68,
          subCodes: [
            {
              suffix: "D",
              text: "Diving Inj (Not Underwater)",
              recResponse: 68,
            },
            {
              suffix: "S",
              text: "SCUBA Accident (Not Underwater)",
              recResponse: 68,
            },
          ],
        }
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "14D00",
          text: "ALS Override (Delta)",
          recResponse: 68,
          subCodes: [
            {
              suffix: "D",
              text: "Diving Inj (Not Underwater)",
              recResponse: 68,
            },
            {
              suffix: "F",
              text: "Floodwater Rescue",
              recResponse: 66,
            },
            {
              suffix: "I",
              text: "Ice Rescue",
              recResponse: 67,
            },
            {
              suffix: "S",
              text: "SCUBA Accident (Not Underwater)",
              recResponse: 68,
            },
            {
              suffix: "W",
              text: "Swift Water Rescue",
              recResponse: 66,
            },
          ],
        },
        {
          code: "14D01",
          text: "Unconscious",
          recResponse: 69,
          notConscious: true,
          subCodes: [
            {
              suffix: "D",
              text: "Diving Inj (Not Underwater)",
              recResponse: 69,
            },
            {
              suffix: "F",
              text: "Floodwater Rescue",
              recResponse: 66,
            },
            {
              suffix: "I",
              text: "Ice Rescue",
              recResponse: 67,
            },
            {
              suffix: "S",
              text: "SCUBA Accident (Not Underwater)",
              recResponse: 69,
            },
            {
              suffix: "W",
              text: "Swift Water Rescue",
              recResponse: 66,
            },
          ],
        },
        {
          code: "14D02",
          text: "Underwater (Specialized Rescue)",
          recResponse: 66,
        },
        {
          code: "14D03",
          text: "Standed (Specialized Rescue)",
          recResponse: 66,
          subCodes: [
            {
              suffix: "D",
              text: "Diving Inj (Not Underwater)",
              recResponse: 66,
            },
            {
              suffix: "F",
              text: "Floodwater Rescue",
              recResponse: 66,
            },
            {
              suffix: "I",
              text: "Ice Rescue",
              recResponse: 67,
            },
            {
              suffix: "S",
              text: "SCUBA Accident (Not Underwater)",
              recResponse: 66,
            },
            {
              suffix: "W",
              text: "Swift Water Rescue",
              recResponse: 66,
            },
          ],
        },
        {
          code: "14D04",
          text: "Just Resuscitated &/or Defibrillated (External)",
          recResponse: 69,
          subCodes: [
            {
              suffix: "D",
              text: "Diving Inj (Not Underwater)",
              recResponse: 69,
            },
            {
              suffix: "F",
              text: "Floodwater Rescue",
              recResponse: 66,
            },
            {
              suffix: "I",
              text: "Ice Rescue",
              recResponse: 67,
            },
            {
              suffix: "S",
              text: "SCUBA Accident (Not Underwater)",
              recResponse: 69,
            },
            {
              suffix: "W",
              text: "Swift Water Rescue",
              recResponse: 66,
            },
          ],
        },
        {
          code: "14D05",
          text: "Not Alert",
          recResponse: 68,
          subCodes: [
            {
              suffix: "D",
              text: "Diving Inj (Not Underwater)",
              recResponse: 68,
            },
            {
              suffix: "F",
              text: "Floodwater Rescue",
              recResponse: 66,
            },
            {
              suffix: "I",
              text: "Ice Rescue",
              recResponse: 67,
            },
            {
              suffix: "S",
              text: "SCUBA Accident (Not Underwater)",
              recResponse: 68,
            },
            {
              suffix: "W",
              text: "Swift Water Rescue",
              recResponse: 66,
            },
          ],
        },
        {
          code: "14D06",
          text: "Suspected Neck Inj",
          recResponse: 68,
          subCodes: [
            {
              suffix: "D",
              text: "Diving Inj (Not Underwater)",
              recResponse: 68,
            },
            {
              suffix: "F",
              text: "Floodwater Rescue",
              recResponse: 66,
            },
            {
              suffix: "I",
              text: "Ice Rescue",
              recResponse: 67,
            },
            {
              suffix: "S",
              text: "SCUBA Accident (Not Underwater)",
              recResponse: 68,
            },
            {
              suffix: "W",
              text: "Swift Water Rescue",
              recResponse: 66,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "14E00",
          text: "ALS Override (Echo)",
          recResponse: 70,
          subCodes: [
            {
              suffix: "D",
              text: "Diving Inj (Not Underwater)",
              recResponse: 70,
            },
            {
              suffix: "F",
              text: "Floodwater Rescue",
              recResponse: 66,
            },
            {
              suffix: "I",
              text: "Ice Rescue",
              recResponse: 70,
            },
            {
              suffix: "S",
              text: "SCUBA Accident (Not Underwater)",
              recResponse: 70,
            },
            {
              suffix: "W",
              text: "Swift Water Rescue",
              recResponse: 66,
            },
          ],
        },
        {
          code: "14E01",
          text: "Arrest (Out of Water)",
          recResponse: 70,
          notBreathing: true,
          subCodes: [
            {
              suffix: "D",
              text: "Diving Inj (Not Underwater)",
              recResponse: 70,
            },
            {
              suffix: "F",
              text: "Floodwater Rescue",
              recResponse: 66,
            },
            {
              suffix: "I",
              text: "Ice Rescue",
              recResponse: 70,
            },
            {
              suffix: "S",
              text: "SCUBA Accident (Not Underwater)",
              recResponse: 70,
            },
            {
              suffix: "W",
              text: "Swift Water Rescue",
              recResponse: 66,
            },
          ],
        },
        {
          code: "14E02",
          text: "Underwater (Non-Specialized Rescue)",
          recResponse: 70,
        },
      ],
    },
  ],
};
