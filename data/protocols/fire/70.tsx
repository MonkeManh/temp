import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const TRAIN_RAIL_COLLISION: IFireComplaint = {
  protocol: 70,
  name: "Train & Rail Collision / Derailment",
  shortName: "Train Collision/Derailment",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: true },
  ],
  defaultPriority: "C",
  defaultPlan: 334,
  defaultCode: "70C05",
  questions: [],
  determinants: [
    {
      priority: "C",
      codes: [
        {
          code: "70C01",
          text: "Large Fuel/Fire Load Vehicle on Tracks",
          recResponse: 334,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 334,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 334,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 334,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 334,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 334,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 334,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 334,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 334,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 334,
            },
          ],
        },
        {
          code: "70C02",
          text: "Comm Vehicle on Tracks",
          recResponse: 334,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 334,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 334,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 334,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 334,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 334,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 334,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 334,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 334,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 334,
            },
          ],
        },
        {
          code: "70C03",
          text: "Other Vehicle on Tracks",
          recResponse: 334,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 334,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 334,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 334,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 334,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 334,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 334,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 334,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 334,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 334,
            },
          ],
        },
        {
          code: "70C04",
          text: "Stranded on Train",
          recResponse: 334,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 334,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 334,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 334,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 334,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 334,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 334,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 334,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 334,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 334,
            },
          ],
        },
        {
          code: "70C05",
          text: "Unkn Situation (Investigation)",
          recResponse: 334,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 334,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 334,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 334,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 334,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 334,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 334,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 334,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 334,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 334,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "70D00",
          text: "Override (Delta)",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D01",
          text: "Person Trapped/Struck by Train (No Collision/Derailment)",
          recResponse: 337,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 337,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 337,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 337,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 337,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 337,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 337,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 337,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 337,
            },
          ],
        },
        {
          code: "70D02",
          text: "Collision/Derailment Involving Buildings/Structures",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D03",
          text: "Collision/Derailment Involving Vehicles",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D04",
          text: "Collision/Derailment Below Ground Level",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D05",
          text: "Collision/Derailment Above Ground Level",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D06",
          text: "Collision/Derailment at Ground Level",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D07",
          text: "Collision/Derailment in Tunnel",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D08",
          text: "Collision/Derailment on Bridge/Trestle",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D09",
          text: "Collision/Derailment into/over Water",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 336,
            },
          ],
        },
      ],
    },
  ],
};
