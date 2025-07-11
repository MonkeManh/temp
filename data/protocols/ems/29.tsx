import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const TRAFFIC_TRANSPORTATION_INCIDENTS: IEMSComplaint = {
  protocol: 29,
  name: "Traffic / Transportation Incidents",
  shortName: "Traffic/Transportation Incidents",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 3 },
    { name: "Police", priority: true },
  ],
  defaultPriority: "A",
  defaultPlan: 168,
  defaultCode: "29B05",
  preSend: true,
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "29O01",
          text: "No Injs (Confirmed for All Persons Up to 4)",
          recResponse: 169,
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "29A00",
          text: "BLS Override (Alpha)",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
        {
          code: "29A01",
          text: "1st Party Caller w/ Inj to Not Dangerous Body Area",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
        {
          code: "29A02",
          text: "No Injs Rptd (Unconfirmed or >= 5 Persons Involed)",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "29B00",
          text: "BLS Override (Bravo)",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
        {
          code: "29B01",
          text: "Injs",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
        {
          code: "29B02",
          text: "Serious Hemorrhage",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
        {
          code: "29B03",
          text: "Other Hazards",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
        {
          code: "29B04",
          text: "Low Mechanism (1st or 2nd Party Caller)",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
        {
          code: "29B05",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "29D00",
          text: "ALS Override (Delta)",
          recResponse: 173,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 173,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 174,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 173,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 174,
            },
          ],
        },
        {
          code: "29D01",
          text: "Major Incident",
          recResponse: 173,
          subCodes: [
            {
              suffix: "a",
              text: "Aircraft",
              recResponse: 175,
            },
            {
              suffix: "B",
              text: "Bus",
              recResponse: 172,
            },
            {
              suffix: "C",
              text: "Subway/Metro",
              recResponse: 176,
            },
            {
              suffix: "d",
              text: "Train",
              recResponse: 176,
            },
            {
              suffix: "E",
              text: "Watercraft",
              recResponse: 177,
            },
            {
              suffix: "f",
              text: "Multi-Vehicle (>= 10) Pile-Up",
              recResponse: 172,
            },
            {
              suffix: "g",
              text: "Street Car/Tram/Light Rail",
              recResponse: 176,
            },
            {
              suffix: "h",
              text: "Vehicle vs. Building",
              recResponse: 178,
            },
          ],
        },
        {
          code: "29D02",
          text: "High Mechanism",
          recResponse: 173,
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
          code: "29D03",
          text: "High Velocity Impact",
          recResponse: 180,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 180,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 180,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 180,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 180,
            },
          ],
        },
        {
          code: "29D04",
          text: "Hazmat",
          recResponse: 187,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 187,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 187,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 187,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 187,
            },
          ],
        },
        {
          code: "29D05",
          text: "Trapped or Pinned Victim",
          recResponse: 188,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 187,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 189,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 187,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 189,
            },
          ],
        },
        {
          code: "29D06",
          text: "Arrest",
          recResponse: 173,
          notBreathing: true,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 173,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 174,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 173,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 174,
            },
          ],
        },
        {
          code: "29D07",
          text: "Unconscious",
          recResponse: 171,
          notConscious: true,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 171,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 172,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 171,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 172,
            },
          ],
        },
        {
          code: "29D08",
          text: "Alert w/ Noisy Breathing (Abnormal)",
          recResponse: 173,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 173,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 174,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 173,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 174,
            },
          ],
        },
        {
          code: "29D09",
          text: "Not Alert w/ Normal Breathing",
          recResponse: 171,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 171,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 172,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 171,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 172,
            },
          ],
        },
      ],
    },
  ],
};
