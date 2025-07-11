import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const PREGNANCY: IEMSComplaint = {
  protocol: 24,
  name: "Pregnancy / Childbirth / Miscarriage",
  shortName: "Pregnancy",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined }
  ],
  defaultPriority: "O",
  defaultPlan: 139,
  defaultCode: "24B02",
  questions: [],
  determinants: [
      {
        priority: "O",
        codes: [
          {
            code: "24O01",
            text: "Waters Broken (No Contractions or Presenting Parts)",
            recResponse: 139,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 139,
              },
            ],
          },
        ],
      },
      {
        priority: "A",
        codes: [
          {
            code: "24A00",
            text: "BLS Override (Alpha)",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
          {
            code: "24A01",
            text: "1st Trimester Hemorrhage or Miscarriage",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
          {
            code: "24A02",
            text: "Stillbirth (> 24 weeks w/ Complications)",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        codes: [
          {
            code: "24B00",
            text: "BLS Override (Bravo)",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
          {
            code: "24B01",
            text: "Labor (Delivery Not Imminent, >= 6 months/24 weeks)",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
          {
            code: "24B02",
            text: "Unkn Status / Other Codes Not Applicable",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        codes: [
          {
            code: "24C00",
            text: "ALS Override (Charlie)",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24C01",
            text: "2nd Trimester Hemorrhage or Miscarriage",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24C02",
            text: "1st Trimester Serious Hemorrhage",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
          {
            code: "24C03",
            text: "Abdominal Pain/Cramping (< 6 months/24 weeks & No Fetus or Tissue)",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
          {
            code: "24C04",
            text: "Baby Born (No Complications)",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        codes: [
          {
            code: "24D00",
            text: "ALS Override (Delta)",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D01",
            text: "Breech or Cord",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D02",
            text: "Head Visible/Out",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D03",
            text: "Imminent Delivery (>= 6 months/24 weeks)",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D04",
            text: "3rd Trimester Hemorrhage",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D05",
            text: "High Risk Complications",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D06",
            text: "Baby Born (Complications w/ Baby)",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D07",
            text: "Baby Born (Complications w/ Mother)",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D08",
            text: "Psbl Misscarriage w/ Signs of Life",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
        ],
      },
    ]
};
