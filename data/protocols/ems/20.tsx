import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const HEAT_COLD_EXPOSURE: IEMSComplaint = {
  protocol: 20,
  name: "Heat / Cold Exposure",
  shortName: "Heat/Cold Exposure",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 99,
  defaultCode: "20A01",
  preSend: true,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "20A01",
          text: "Alert",
          recResponse: 99,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 99,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 100,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "20B00",
          text: "ALS Override (Bravo)",
          recResponse: 101,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 101,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 102,
            },
          ],
        },
        {
          code: "20B01",
          text: "Change in Skin Color",
          recResponse: 101,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 101,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 102,
            },
          ],
        },
        {
          code: "20B02",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 101,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 101,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 102,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "20C00",
          text: "ALS Override (Charlie)",
          recResponse: 103,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 103,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 104,
            },
          ],
        },
        {
          code: "20C01",
          text: "Heart Attack or Angina Hx",
          recResponse: 101,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 101,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 102,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "20D00",
          text: "ALS Override (Delta)",
          recResponse: 103,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 103,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 104,
            },
          ],
        },
        {
          code: "20D01",
          text: "Not Alert",
          recResponse: 103,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 103,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 104,
            },
          ],
        },
        {
          code: "20D02",
          text: "Mult Victims (w/ Priority Symptoms)",
          recResponse: 105,
          multPatient: true,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 105,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 106,
            },
          ],
        },
      ],
    },
  ],
};
