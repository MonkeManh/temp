import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const FALLS: IEMSComplaint = {
  protocol: 17,
  name: "Falls",
  shortName: "Falls",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 79,
  defaultCode: "17B04",
  preSend: true,
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "17A01",
          text: "Not Dangerous Body Area w/ Deformity",
          recResponse: 79,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
        {
          code: "17A02",
          text: "Not Dangerous Body Area",
          recResponse: 79,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
        {
          code: "17A03",
          text: "Non-Recent (>= 6hrs) Injs (w/o priority symptoms)",
          recResponse: 81,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
        {
          code: "17A04",
          text: "Public Assist (No Injs & No Priority Symptoms)",
          recResponse: 82,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 82,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 82,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 82,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 82,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 82,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "17B00",
          text: "BLS Override (Bravo)",
          recResponse: 79,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
        {
          code: "17B01",
          text: "Possibly Dangerous Body Area",
          recResponse: 79,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
        {
          code: "17B02",
          text: "Serious Hemorrhage",
          recResponse: 79,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
        {
          code: "17B03",
          text: "Down Stairs",
          recResponse: 79,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
        {
          code: "17B04",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 79,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "17D00",
          text: "ALS Override (Delta)",
          recResponse: 83,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 83,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 83,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 83,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 84,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 83,
            },
          ],
        },
        {
          code: "17D01",
          text: "Extreme Fall (>= 30ft/10m)",
          recResponse: 85,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 85,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 85,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 85,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 86,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 85,
            },
          ],
        },
        {
          code: "17D02",
          text: "Arrest",
          recResponse: 87,
          notBreathing: true,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 87,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 87,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 87,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 87,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 87,
            },
          ],
        },
        {
          code: "17D03",
          text: "Unconscious",
          recResponse: 85,
          notConscious: true,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 85,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 85,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 85,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 86,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 85,
            },
          ],
        },
        {
          code: "17D04",
          text: "Not Alert",
          recResponse: 83,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 83,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 83,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 83,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 84,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 83,
            },
          ],
        },
        {
          code: "17D05",
          text: "Chest/Neck/Head Inj (w/ Diff Breathing)",
          recResponse: 83,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 83,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 83,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 83,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 84,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 83,
            },
          ],
        },
        {
          code: "17D06",
          text: "Long Fall",
          recResponse: 83,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 83,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 83,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 83,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 84,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 83,
            },
          ],
        },
      ],
    },
  ],
};
