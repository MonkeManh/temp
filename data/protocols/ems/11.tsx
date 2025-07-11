import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const CHOKING: IEMSComplaint = {
  protocol: 11,
  name: "Choking",
  shortName: "Choking",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: 0 },
  ],
  defaultPriority: "A",
  defaultPlan: 53,
  defaultCode: "11D00",
  preSend: true,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "11A01",
          text: "Not Choking Now (Can talk or cry, is alert & breathing nlly)",
          recResponse: 53,
          subCodes: [
            {
              suffix: "C",
              text: "Candy",
              recResponse: 53,
            },
            {
              suffix: "F",
              text: "Food",
              recResponse: 54,
            },
            {
              suffix: "M",
              text: "Milk/Liquid (Non-Toxic)",
              recResponse: 53,
            },
            {
              suffix: "O",
              text: "Object/Toy",
              recResponse: 53,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 53,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "11D00",
          text: "ALS Override (Delta)",
          recResponse: 54,
          subCodes: [
            {
              suffix: "C",
              text: "Candy",
              recResponse: 54,
            },
            {
              suffix: "F",
              text: "Food",
              recResponse: 54,
            },
            {
              suffix: "M",
              text: "Milk/Liquid (Non-Toxic)",
              recResponse: 54,
            },
            {
              suffix: "O",
              text: "Object/Toy",
              recResponse: 54,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 54,
            },
          ],
        },
        {
          code: "11D01",
          text: "Abnormal Breathing (Partial Obstruction)",
          recResponse: 54,
          subCodes: [
            {
              suffix: "C",
              text: "Candy",
              recResponse: 54,
            },
            {
              suffix: "F",
              text: "Food",
              recResponse: 54,
            },
            {
              suffix: "M",
              text: "Milk/Liquid (Non-Toxic)",
              recResponse: 54,
            },
            {
              suffix: "O",
              text: "Object/Toy",
              recResponse: 54,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 54,
            },
          ],
        },
        {
          code: "11D02",
          text: "Not Alert",
          recResponse: 55,
          subCodes: [
            {
              suffix: "C",
              text: "Candy",
              recResponse: 55,
            },
            {
              suffix: "F",
              text: "Food",
              recResponse: 55,
            },
            {
              suffix: "M",
              text: "Milk/Liquid (Non-Toxic)",
              recResponse: 55,
            },
            {
              suffix: "O",
              text: "Object/Toy",
              recResponse: 55,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 55,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "11E00",
          text: "ALS Override (Echo)",
          recResponse: 55,
          subCodes: [
            {
              suffix: "C",
              text: "Candy",
              recResponse: 55,
            },
            {
              suffix: "F",
              text: "Food",
              recResponse: 55,
            },
            {
              suffix: "M",
              text: "Milk/Liquid (Non-Toxic)",
              recResponse: 55,
            },
            {
              suffix: "O",
              text: "Object/Toy",
              recResponse: 55,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 55,
            },
          ],
        },
        {
          code: "11E01",
          text: "Complete Obstruction/Not Breathing/Ineffective Breathing",
          recResponse: 56,
          notBreathing: true,
          subCodes: [
            {
              suffix: "C",
              text: "Candy",
              recResponse: 56,
            },
            {
              suffix: "F",
              text: "Food",
              recResponse: 56,
            },
            {
              suffix: "M",
              text: "Milk/Liquid (Non-Toxic)",
              recResponse: 56,
            },
            {
              suffix: "O",
              text: "Object/Toy",
              recResponse: 56,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 56,
            },
          ],
        },
      ],
    },
  ],
};
