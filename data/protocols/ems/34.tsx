import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const ACN: IEMSComplaint = {
  protocol: 34,
  name: "Automatic Crash Notification (ACN)",
  shortName: "Crash Notification",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 3 },
    { name: "Police", priority: 0 },
  ],
  defaultPriority: "B",
  defaultPlan: 168,
  defaultCode: "34B01",
  preSend: true,
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "34O01",
          text: "No Injuries",
          recResponse: 169,
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "34A00",
          text: "BLS Override (Alpha)",
          recResponse: 168,
        },
        {
          code: "34A01",
          text: "Not Dangerous Injs (1st party)",
          recResponse: 168,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "34B00",
          text: "BLS Override (Bravo)",
          recResponse: 168,
        },
        {
          code: "34B01",
          text: "Injuries",
          recResponse: 168,
        },
        {
          code: "34B02",
          text: "Mult Victims (One Unit)",
          recResponse: 168,
        },
        {
          code: "34B03",
          text: "Mulitple Victims",
          recResponse: 170,
        },
        {
          code: "34B04",
          text: "Air Bag/Other Automatic Sensor",
          recResponse: 168,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "34D00",
          text: "ALS Override (Delta)",
          recResponse: 171,
        },
        {
          code: "34D01",
          text: "Arrest",
          recResponse: 173,
          notBreathing: true,
        },
        {
          code: "34D02",
          text: "Unconscious",
          recResponse: 173,
          notConscious: true,
        },
        {
          code: "34D03",
          text: "High Mechanism",
          recResponse: 180,
          subCodes: [
            {
              suffix: "i",
              text: "Auto vs. Bicycle",
              recResponse: 179,
            },
            {
              suffix: "k",
              text: "All-Terrain/Snowmobile",
              recResponse: 180,
            },
            {
              suffix: "l",
              text: "Auto vs. Motorcycle",
              recResponse: 179,
            },
            {
              suffix: "m",
              text: "Auto vs. Pedestrain",
              recResponse: 181,
            },
            {
              suffix: "n",
              text: "Ejection",
              recResponse: 182,
            },
            {
              suffix: "o",
              text: "Personal Watercraft",
              recResponse: 177,
            },
            {
              suffix: "p",
              text: "Rollovers",
              recResponse: 183,
            },
            {
              suffix: "q",
              text: "Vehicle Off Bridge/Height",
              recResponse: 184,
            },
            {
              suffix: "r",
              text: "Possible Death at Scene",
              recResponse: 173,
            },
            {
              suffix: "s",
              text: "Sinking Vehicle/Vehicle in Floodwater",
              recResponse: 185,
            },
            {
              suffix: "t",
              text: "Train/Light Rail vs. Pedestrian",
              recResponse: 186,
            },
          ],
        },
        {
          code: "34D04",
          text: "Life Status Questionable",
          recResponse: 173,
        },
      ],
    },
  ],
};
