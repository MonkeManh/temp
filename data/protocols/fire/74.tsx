import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const SUSPICIOUS_PACKAGE: IFireComplaint = {
  protocol: 74,
  name: "Suspicious Package (Letter, Item, Substance) / Explosives",
  shortName: "Suspicious Package/Explosives",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: true },
  ],
  defaultPriority: "B",
  defaultPlan: 468,
  defaultCode: "74B03",
  questions: [],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "74B01",
          text: "Military Ordnance",
          recResponse: 467,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 467,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 467,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 467,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 467,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 467,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 467,
            },
          ],
        },
        {
          code: "74B02",
          text: "Explosives",
          recResponse: 468,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 468,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 468,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 468,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 468,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 468,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 468,
            },
          ],
        },
        {
          code: "74B03",
          text: "Unkn Situation (Investigation)",
          recResponse: 468,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 468,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 468,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 468,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 468,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 468,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 468,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "74C00",
          text: "Override (Charlie)",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74C01",
          text: "Suspicious Package w/ Leakage/Residue",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74C02",
          text: "Suspicious Package",
          recResponse: 468,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 468,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 468,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 468,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 468,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 468,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 468,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "74D00",
          text: "Override (Delta)",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74D01",
          text: "Suspicious Package w/ Leakage/Residue & Single Sick/Injured Person",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74D02",
          text: "Suspicious Package w/ Leakage/Residue & Mult Sick/Injured Person",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74D03",
          text: "Suspicious Package w/ Single Sick/Injured Person",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74D04",
          text: "Suspicious Package w/ Mult Sick/Injured Person",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74D05",
          text: "Military Ordinance/Explosives w/ Single Sick/Injured Person",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74D06",
          text: "Military Ordinance/Explosives w/ Mult Sick/Injured Person",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
      ],
    },
  ],
};
