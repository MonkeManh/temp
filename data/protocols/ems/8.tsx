import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const CARB_MONO_HAZ: IEMSComplaint = {
    protocol: 8,
    name: "Carbon Monoxide/Inhalation/Hazmat/CBRN",
    shortName: "Carb Mono/Hazmat",
    description: <></>,
    services: [
        { name: "EMS", priority: true },
        { name: "Fire", priority: 2 },
        { name: "Police", priority: 3 },
    ],
    defaultPriority: "O",
    defaultPlan: 40,
    defaultCode: "08D06",
    questions: [],
    determinants: [
      {
        priority: "O",
        codes: [
          {
            code: "08O01",
            text: "Carbon Monoxide Detector Alarm (Scene Contact w/o priority symptoms)",
            recResponse: 46,
          },
          {
            code: "08O02",
            text: "Carbon Monoxide Detector Alarm (No Scene Contact)",
            recResponse: 46,
          },
        ],
      },
      {
        priority: "B",
        codes: [
          {
            code: "08B00",
            text: "BLS Override (Bravo)",
            recResponse: 40,
            subCodes: [
              {
                suffix: "B",
                text: "Biological",
                recResponse: 40,
              },
              {
                suffix: "C",
                text: "Chemical",
                recResponse: 40,
              },
              {
                suffix: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 40,
              },
              {
                suffix: "M",
                text: "Carbon Monoxide",
                recResponse: 40,
              },
              {
                suffix: "N",
                text: "Nuclear",
                recResponse: 40,
              },
              {
                suffix: "R",
                text: "Radiological",
                recResponse: 40,
              },
              {
                suffix: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 40,
              },
              {
                suffix: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 40,
              },
              {
                suffix: "U",
                text: "Unkn",
                recResponse: 40,
              },
            ],
          },
          {
            code: "08B01",
            text: "Alert w/o Diff Breathing",
            recResponse: 41,
            subCodes: [
              {
                suffix: "B",
                text: "Biological",
                recResponse: 41,
              },
              {
                suffix: "C",
                text: "Chemical",
                recResponse: 41,
              },
              {
                suffix: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 41,
              },
              {
                suffix: "M",
                text: "Carbon Monoxide",
                recResponse: 41,
              },
              {
                suffix: "N",
                text: "Nuclear",
                recResponse: 41,
              },
              {
                suffix: "R",
                text: "Radiological",
                recResponse: 41,
              },
              {
                suffix: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 41,
              },
              {
                suffix: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 41,
              },
              {
                suffix: "U",
                text: "Unkn",
                recResponse: 41,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        codes: [
          {
            code: "08C00",
            text: "ALS Override (Charlie)",
            recResponse: 42,
            subCodes: [
              {
                suffix: "B",
                text: "Biological",
                recResponse: 42,
              },
              {
                suffix: "C",
                text: "Chemical",
                recResponse: 42,
              },
              {
                suffix: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42,
              },
              {
                suffix: "M",
                text: "Carbon Monoxide",
                recResponse: 42,
              },
              {
                suffix: "N",
                text: "Nuclear",
                recResponse: 42,
              },
              {
                suffix: "R",
                text: "Radiological",
                recResponse: 42,
              },
              {
                suffix: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42,
              },
              {
                suffix: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42,
              },
              {
                suffix: "U",
                text: "Unkn",
                recResponse: 42,
              },
            ],
          },
          {
            code: "08C01",
            text: "Alert w/ Diff Breathing",
            recResponse: 42,
            subCodes: [
              {
                suffix: "B",
                text: "Biological",
                recResponse: 42,
              },
              {
                suffix: "C",
                text: "Chemical",
                recResponse: 42,
              },
              {
                suffix: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42,
              },
              {
                suffix: "M",
                text: "Carbon Monoxide",
                recResponse: 42,
              },
              {
                suffix: "N",
                text: "Nuclear",
                recResponse: 42,
              },
              {
                suffix: "R",
                text: "Radiological",
                recResponse: 42,
              },
              {
                suffix: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42,
              },
              {
                suffix: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42,
              },
              {
                suffix: "U",
                text: "Unkn",
                recResponse: 42,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        codes: [
          {
            code: "08D00",
            text: "ALS Override (Delta)",
            recResponse: 43,
            subCodes: [
              {
                suffix: "B",
                text: "Biological",
                recResponse: 43,
              },
              {
                suffix: "C",
                text: "Chemical",
                recResponse: 43,
              },
              {
                suffix: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 43,
              },
              {
                suffix: "M",
                text: "Carbon Monoxide",
                recResponse: 43,
              },
              {
                suffix: "N",
                text: "Nuclear",
                recResponse: 43,
              },
              {
                suffix: "R",
                text: "Radiological",
                recResponse: 43,
              },
              {
                suffix: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 43,
              },
              {
                suffix: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 43,
              },
              {
                suffix: "U",
                text: "Unkn",
                recResponse: 43,
              },
            ],
          },
          {
            code: "08D01",
            text: "Arrest",
            notBreathing: true,
            recResponse: 44,
            subCodes: [
              {
                suffix: "B",
                text: "Biological",
                recResponse: 44,
              },
              {
                suffix: "C",
                text: "Chemical",
                recResponse: 44,
              },
              {
                suffix: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 44,
              },
              {
                suffix: "M",
                text: "Carbon Monoxide",
                recResponse: 44,
              },
              {
                suffix: "N",
                text: "Nuclear",
                recResponse: 44,
              },
              {
                suffix: "R",
                text: "Radiological",
                recResponse: 44,
              },
              {
                suffix: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 44,
              },
              {
                suffix: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 44,
              },
              {
                suffix: "U",
                text: "Unkn",
                recResponse: 44,
              },
            ],
          },
          {
            code: "08D02",
            text: "Unconscious",
            notConscious: true,
            recResponse: 43,
            subCodes: [
              {
                suffix: "B",
                text: "Biological",
                recResponse: 43,
              },
              {
                suffix: "C",
                text: "Chemical",
                recResponse: 43,
              },
              {
                suffix: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 43,
              },
              {
                suffix: "M",
                text: "Carbon Monoxide",
                recResponse: 43,
              },
              {
                suffix: "N",
                text: "Nuclear",
                recResponse: 43,
              },
              {
                suffix: "R",
                text: "Radiological",
                recResponse: 43,
              },
              {
                suffix: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 43,
              },
              {
                suffix: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 43,
              },
              {
                suffix: "U",
                text: "Unkn",
                recResponse: 43,
              },
            ],
          },
          {
            code: "08D03",
            text: "Not Alert",
            recResponse: 42,
            subCodes: [
              {
                suffix: "B",
                text: "Biological",
                recResponse: 42,
              },
              {
                suffix: "C",
                text: "Chemical",
                recResponse: 42,
              },
              {
                suffix: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42,
              },
              {
                suffix: "M",
                text: "Carbon Monoxide",
                recResponse: 42,
              },
              {
                suffix: "N",
                text: "Nuclear",
                recResponse: 42,
              },
              {
                suffix: "R",
                text: "Radiological",
                recResponse: 42,
              },
              {
                suffix: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42,
              },
              {
                suffix: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42,
              },
              {
                suffix: "U",
                text: "Unkn",
                recResponse: 42,
              },
            ],
          },
          {
            code: "08D04",
            text: "Diff Speaking Between Breaths",
            recResponse: 42,
            subCodes: [
              {
                suffix: "B",
                text: "Biological",
                recResponse: 42,
              },
              {
                suffix: "C",
                text: "Chemical",
                recResponse: 42,
              },
              {
                suffix: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42,
              },
              {
                suffix: "M",
                text: "Carbon Monoxide",
                recResponse: 42,
              },
              {
                suffix: "N",
                text: "Nuclear",
                recResponse: 42,
              },
              {
                suffix: "R",
                text: "Radiological",
                recResponse: 42,
              },
              {
                suffix: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42,
              },
              {
                suffix: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42,
              },
              {
                suffix: "U",
                text: "Unkn",
                recResponse: 42,
              },
            ],
          },
          {
            code: "08D05",
            text: "Mult Victims",
            multPatient: true,
            recResponse: 45,
            subCodes: [
              {
                suffix: "B",
                text: "Biological",
                recResponse: 45,
              },
              {
                suffix: "C",
                text: "Chemical",
                recResponse: 45,
              },
              {
                suffix: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 45,
              },
              {
                suffix: "M",
                text: "Carbon Monoxide",
                recResponse: 45,
              },
              {
                suffix: "N",
                text: "Nuclear",
                recResponse: 45,
              },
              {
                suffix: "R",
                text: "Radiological",
                recResponse: 45,
              },
              {
                suffix: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 45,
              },
              {
                suffix: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 45,
              },
              {
                suffix: "U",
                text: "Unkn",
                recResponse: 45,
              },
            ],
          },
          {
            code: "08D06",
            text: "Unkn Status/Other Codes Not Applicable",
            recResponse: 42,
            subCodes: [
              {
                suffix: "B",
                text: "Biological",
                recResponse: 42,
              },
              {
                suffix: "C",
                text: "Chemical",
                recResponse: 42,
              },
              {
                suffix: "G",
                text: "Smell of Gas/Fumes",
                recResponse: 42,
              },
              {
                suffix: "M",
                text: "Carbon Monoxide",
                recResponse: 42,
              },
              {
                suffix: "N",
                text: "Nuclear",
                recResponse: 42,
              },
              {
                suffix: "R",
                text: "Radiological",
                recResponse: 42,
              },
              {
                suffix: "S",
                text: "Suicide Attempt (Only Carbon Monoxide)",
                recResponse: 42,
              },
              {
                suffix: "T",
                text: "Suicide Attempt (Other Toxic Substances)",
                recResponse: 42,
              },
              {
                suffix: "U",
                text: "Unkn",
                recResponse: 42,
              },
            ],
          },
        ],
      },
    ]
}