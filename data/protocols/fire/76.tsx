import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const BOMB_THREAT: IFireComplaint = {
  protocol: 76,
  name: "Bomb Threat",
  shortName: "Bomb Threat",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: true },
  ],
  defaultPriority: "B",
  defaultPlan: 472,
  defaultCode: "76B02",
  questions: [],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "76B01",
          text: "Bomb Threat (Not 1st Pty)",
          recResponse: 472,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 472,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 472,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 472,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 472,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 472,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 472,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "76C00",
          text: "Override (Charlie)",
          recResponse: 472,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 472,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 472,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 472,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 472,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 472,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 472,
            },
          ],
        },
        {
          code: "76C01",
          text: "Bomb Threat (Suspect Caller)",
          recResponse: 472,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 472,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 472,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 472,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 472,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 472,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 472,
            },
          ],
        },
      ],
    },
  ],
};
