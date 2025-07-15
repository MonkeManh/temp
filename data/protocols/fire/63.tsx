import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const LIGHTNING_STRIKE: IFireComplaint = {
  protocol: 63,
  name: "Lightning Strike (Investigation)",
  shortName: "Lightning Strike",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: false },
  ],
  defaultPriority: "B",
  defaultPlan: 222,
  defaultCode: "63B07",
  questions: [],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "63B01",
          text: "Residential (Single)",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63B02",
          text: "Large Non-Dwelling Building/Structure",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63B03",
          text: "Small Non-Dwelling Building/Structure",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63B04",
          text: "Mobile Home, House Trailer, Portable Office",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63B05",
          text: "Outside Lighting Strike",
          recResponse: 20,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 225,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63B06",
          text: "Vehicle",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63B07",
          text: "Unkn Situation (Investigation)/Unkn Building Type",
          recResponse: 20,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "63C00",
          text: "Override (Charlie)",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63C01",
          text: "High Life Hazard",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63C02",
          text: "High Rise",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63C03",
          text: "Comm/Ind Building",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63C04",
          text: "Residential (Mult)",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63C05",
          text: "Outdoor Venue (Sporting Event/Concert/Campground)",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
      ],
    },
  ],
};
