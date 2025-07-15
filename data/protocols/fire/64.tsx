import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const MARINE_BOAT_FIRES: IFireComplaint = {
  protocol: 64,
  name: "Marine / Boat Fire",
  shortName: "Marine/Boat Fire",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultPlan: 227,
  defaultCode: "64B02",
  questions: [],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "64B01",
          text: "Extinguished Fire",
          recResponse: 227,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 227,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 227,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 227,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 228,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 229,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 228,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 229,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 228,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 229,
            },
          ],
        },
        {
          code: "64B02",
          text: "Unkn Situation (Investigation)",
          recResponse: 209,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 209,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 209,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 209,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 210,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 211,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 210,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 211,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 210,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 211,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "64D00",
          text: "Override (Delta)",
          recResponse: 230,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 230,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 230,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 230,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 232,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 232,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 232,
            },
          ],
        },
        {
          code: "64D01",
          text: "Threatened Building/Structure or Other Boats",
          recResponse: 233,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 233,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 233,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 233,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 233,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 233,
            },
          ],
        },
        {
          code: "64D02",
          text: "Docked in Costal Water",
          recResponse: 233,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 233,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 230,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 230,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 232,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 232,
            },
          ],
        },
        {
          code: "64D03",
          text: "Docked in Inland Water",
          recResponse: 233,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 233,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 230,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 230,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 232,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 232,
            },
          ],
        },
        {
          code: "64D04",
          text: "Beached in Costal Water",
          recResponse: 233,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 233,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 230,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 230,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 232,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 232,
            },
          ],
        },
        {
          code: "64D05",
          text: "Beached in Inland Water",
          recResponse: 233,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 233,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 230,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 230,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 232,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 232,
            },
          ],
        },
        {
          code: "64D06",
          text: "Costal Water",
          recResponse: 234,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 234,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 234,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 234,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 234,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 234,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 234,
            },
          ],
        },
        {
          code: "64D07",
          text: "Oceanic Water",
          recResponse: 234,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 234,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 234,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 234,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 234,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 234,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 234,
            },
          ],
        },
        {
          code: "64D08",
          text: "Inland Water",
          recResponse: 234,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 234,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 234,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 234,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 234,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 234,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 234,
            },
          ],
        },
        {
          code: "64D09",
          text: "Dry Dock/On Land",
          recResponse: 233,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 233,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 230,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 230,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 232,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 232,
            },
          ],
        },
      ],
    },
  ],
};
