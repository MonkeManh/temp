import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const TRAIN_RAIL_FIRE: IFireComplaint = {
  protocol: 75,
  name: "Train & Rail Fire",
  shortName: "Train/Rail Fire",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: true },
  ],
  defaultPriority: "O",
  defaultPlan: 470,
  defaultCode: "75C01",
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "75O01",
          text: "Moving Train",
          recResponse: 470,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 470,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 470,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 470,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 470,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 470,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 470,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 470,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 470,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "75C00",
          text: "Override (Charlie)",
          recResponse: 334,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
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
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 334,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 334,
            },
          ],
        },
        {
          code: "75C01",
          text: "Unkn Situation (Investigation)",
          recResponse: 334,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
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
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 334,
            },
            {
              suffix: "U",
              text: "Unknown",
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
          code: "75D00",
          text: "Override (Delta)",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D01",
          text: "Train Fire Involving Building/Structure",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D02",
          text: "Train Fire Involving Vehicles",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D03",
          text: "Train Fire Below Ground Level",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D04",
          text: "Train Fire Above Ground Level",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D05",
          text: "Train Fire At Ground Level",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D06",
          text: "Train Fire In Tunnel",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D07",
          text: "Train Fire on Bridge/Trestle",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D08",
          text: "Train Fire in/over Water",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
      ],
    },
  ],
};
