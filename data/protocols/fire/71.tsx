import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const VEHICLE_FIRE: IFireComplaint = {
  protocol: 71,
  name: "Vehicle Fire",
  shortName: "Vehicle Fire",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 338,
  defaultCode: "71A01",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "71A01",
          text: "Vehicle Fire (Extinguished)",
          recResponse: 338,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 339,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 340,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 341,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 342,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 343,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 344,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 345,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 346,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 348,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 349,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "71B00",
          text: "Override (Bravo)",
          recResponse: 338,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 339,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 340,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 341,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 342,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 343,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 344,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 345,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 346,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 348,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 349,
            },
          ],
        },
        {
          code: "71B01",
          text: "Vehicle Fire",
          recResponse: 338,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 339,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 340,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 341,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 342,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 343,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 344,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 345,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 346,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 348,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 349,
            },
          ],
        },
        {
          code: "71B02",
          text: "Motorcycle/Scooter/ATV",
          recResponse: 350,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 351,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 352,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 353,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 354,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 355,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 356,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 357,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 358,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 359,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 360,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 361,
            },
          ],
        },
        {
          code: "71B03",
          text: "Comm Vehicle (Extinguished)",
          recResponse: 338,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 339,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 340,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 341,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 342,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 343,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 344,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 345,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 346,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 348,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 349,
            },
          ],
        },
        {
          code: "71B04",
          text: "Large Fuel/Fire Load Vehicle (Extinguished)",
          recResponse: 338,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 339,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 340,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 341,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 342,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 343,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 344,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 345,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 346,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 348,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 349,
            },
          ],
        },
        {
          code: "71B05",
          text: "Agricultural/Farm/Excavation/Construction Machinery (Extinguished)",
          recResponse: 338,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 339,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 340,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 341,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 342,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 343,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 344,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 345,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 346,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 348,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 349,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "71C00",
          text: "Override (Charlie)",
          recResponse: 362,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 363,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 364,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 365,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 366,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 367,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 368,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 369,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 370,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 371,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 372,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 373,
            },
          ],
        },
        {
          code: "71C01",
          text: "Vehicle Fire Threatening Non-Structure Object(s)",
          recResponse: 362,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 363,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 364,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 365,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 366,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 367,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 368,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 369,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 370,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 371,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 372,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 373,
            },
          ],
        },
        {
          code: "71C02",
          text: "Electrical Vehicle",
          recResponse: 340,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 341,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 340,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 341,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 374,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 375,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 345,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 374,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 375,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 345,
            },
          ],
        },
        {
          code: "71C03",
          text: "Delivery Vehicle",
          recResponse: 376,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 377,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 378,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 379,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 380,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 381,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 382,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 383,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 384,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 385,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 386,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 397,
            },
          ],
        },
        {
          code: "71C04",
          text: "Vehicle Fire Threatening Vegitation/Wildland/Brush/Gass",
          recResponse: 362,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 363,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 364,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 365,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 366,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 367,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 368,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 369,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 370,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 371,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 372,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 373,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "71D00",
          text: "Override (Delta)",
          recResponse: 388,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 389,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 390,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 391,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 392,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 393,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 394,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 395,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 396,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 397,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 398,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 399,
            },
          ],
        },
        {
          code: "71D01",
          text: "Vehicle Fire (Occupants Trapped)",
          recResponse: 388,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 389,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 390,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 391,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 392,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 393,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 394,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 395,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 396,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 397,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 398,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 399,
            },
          ],
        },
        {
          code: "71D02",
          text: "Mult Vehicles on Fire",
          recResponse: 400,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 401,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 402,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 403,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 404,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 405,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 406,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 407,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 408,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 409,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 410,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 411,
            },
          ],
        },
        {
          code: "71D03",
          text: "Vehicle Fire w/ Threatened Building/Structure",
          recResponse: 233,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 278,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 278,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 278,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 283,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 284,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 283,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 284,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 283,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 284,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 268,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 269,
            },
          ],
        },
        {
          code: "71D04",
          text: "Comm Vehicle",
          recResponse: 376,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 377,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 378,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 379,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 380,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 381,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 382,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 383,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 384,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 385,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 386,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 397,
            },
          ],
        },
        {
          code: "71D05",
          text: "Large Fuel/Fire Load Vehicle",
          recResponse: 376,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 377,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 378,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 379,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 380,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 381,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 382,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 383,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 384,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 385,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 386,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 397,
            },
          ],
        },
        {
          code: "71D06",
          text: "Agricultural/Farm/Excavation/Construction Machinery",
          recResponse: 376,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 377,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 378,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 379,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 380,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 381,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 382,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 383,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 384,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 385,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 386,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 397,
            },
          ],
        },
        {
          code: "71D07",
          text: "Vehicle Fire in Tunnel",
          recResponse: 412,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 413,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 414,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 415,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 416,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 417,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 418,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 419,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 420,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 421,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 422,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 423,
            },
          ],
        },
        {
          code: "71D08",
          text: "Mult Vehicles on Fire in Tunnel",
          recResponse: 412,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 413,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 414,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 415,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 416,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 417,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 418,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 419,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 420,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 421,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 422,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 423,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "71E00",
          text: "Override (Echo)",
          recResponse: 388,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 389,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 390,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 391,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 392,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 393,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 394,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 395,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 396,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 397,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 398,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 399,
            },
          ],
        },
        {
          code: "71E01",
          text: "Vehicle Fire (Occupants Trapped)",
          recResponse: 388,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 389,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 390,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 391,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 392,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 393,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 394,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 395,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 396,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 397,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 398,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 399,
            },
          ],
        },
      ],
    },
  ],
};
