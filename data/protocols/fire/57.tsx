import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const EXPLOSION: IFireComplaint = {
  protocol: 57,
  name: "Explosion",
  shortName: "Explosion",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: true },
  ],
  defaultPriority: "B",
  defaultPlan: 162,
  defaultCode: "57B02",
  questions: [],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "57B01",
          text: "Other Explosion",
          recResponse: 162,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 162,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 162,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 163,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 162,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 163,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 162,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 163,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 163,
            },
          ],
        },
        {
          code: "57B02",
          text: "Unkn Situation (Investigation)",
          recResponse: 162,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 162,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 162,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 163,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 162,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 163,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 162,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 163,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 163,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "57C00",
          text: "Override (Charlie)",
          recResponse: 163,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 163,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 163,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 163,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 163,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 163,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 163,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 163,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 163,
            },
          ],
        },
        {
          code: "57C01",
          text: "Other Vehicle Explosion",
          recResponse: 164,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 165,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 166,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 167,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 168,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 169,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 169,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 169,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 169,
            },
          ],
        },
        {
          code: "57C02",
          text: "Open Area",
          recResponse: 170,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 171,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 172,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 173,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 174,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 175,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 175,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 175,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 175,
            },
          ],
        },
        {
          code: "57C03",
          text: "Manhole (Cover/Underground Vault)",
          recResponse: 162,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 162,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 176,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 177,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 176,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 177,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 177,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 177,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 177,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "57D00",
          text: "Override (Delta)",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 178,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 178,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 178,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 178,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 178,
            },
          ],
        },
        {
          code: "57D01",
          text: "High Life Hazard",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
        {
          code: "57D02",
          text: "High Rise",
          recResponse: 180,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 180,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 180,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 180,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
        {
          code: "57D03",
          text: "Government Building",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
        {
          code: "57D04",
          text: "Comm/Ind Building",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
        {
          code: "57D05",
          text: "Residential (Mult)",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
        {
          code: "57D06",
          text: "Residential (Single)",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
        {
          code: "57D07",
          text: "Large Non-Dwelling Structure",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
        {
          code: "57D08",
          text: "Small Non-Dwelling Structure",
          recResponse: 181,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 181,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 181,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 181,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 181,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 181,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 181,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 181,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 181,
            },
          ],
        },
        {
          code: "57D09",
          text: "Comm Vehicle",
          recResponse: 182,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 182,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 182,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 182,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 182,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 182,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 182,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 182,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 182,
            },
          ],
        },
        {
          code: "57D10",
          text: "Large Fuel/Fire Load Vehicle",
          recResponse: 182,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 182,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 182,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 182,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 182,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 182,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 182,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 182,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 182,
            },
          ],
        },
        {
          code: "57D11",
          text: "Mobile Home, House Trailer, Portable Office",
          recResponse: 181,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 181,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 181,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 181,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 181,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 181,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 181,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 181,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 181,
            },
          ],
        },
        {
          code: "57D12",
          text: "Unkn Type Building/Structure",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
      ],
    },
  ],
};
