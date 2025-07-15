import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const ELEC_HAZARD: IFireComplaint = {
  protocol: 55,
  name: "Electrical Hazard",
  shortName: "Electrical Hazard",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 91,
  defaultCode: "55B05",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "55A01",
          text: "Transformer Outside (Wire or Pole)",
          recResponse: 91,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 91,
            },
            {
              suffix: "B",
              text: "Building (Non-Residential) Threatened",
              recResponse: 91,
            },
            {
              suffix: "C",
              text: "Brush/Grass Threatened",
              recResponse: 92,
            },
            {
              suffix: "D",
              text: "Wildland Threatened",
              recResponse: 92,
            },
            {
              suffix: "N",
              text: "Person in Contact w/ Electrical Hazard",
              recResponse: 93,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 91,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 92,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 92,
            },
            {
              suffix: "S",
              text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
              recResponse: 94,
            },
            {
              suffix: "T",
              text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
              recResponse: 95,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 91,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 92,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 93,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 95,
            },
          ],
        },
        {
          code: "55A02",
          text: "Appliance w/o Odor Present",
          recResponse: 96,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 96,
            },
            {
              suffix: "B",
              text: "Building (Non-Residential) Threatened",
              recResponse: 96,
            },
            {
              suffix: "C",
              text: "Brush/Grass Threatened",
              recResponse: 97,
            },
            {
              suffix: "D",
              text: "Wildland Threatened",
              recResponse: 97,
            },
            {
              suffix: "N",
              text: "Person in Contact w/ Electrical Hazard",
              recResponse: 98,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 96,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 97,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 97,
            },
            {
              suffix: "S",
              text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
              recResponse: 99,
            },
            {
              suffix: "T",
              text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
              recResponse: 100,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 96,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 97,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 98,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
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
          code: "55B00",
          text: "Override (Bravo)",
          recResponse: 101,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 101,
            },
            {
              suffix: "B",
              text: "Building (Non-Residential) Threatened",
              recResponse: 101,
            },
            {
              suffix: "C",
              text: "Brush/Grass Threatened",
              recResponse: 102,
            },
            {
              suffix: "D",
              text: "Wildland Threatened",
              recResponse: 102,
            },
            {
              suffix: "N",
              text: "Person in Contact w/ Electrical Hazard",
              recResponse: 103,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 101,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 102,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 102,
            },
            {
              suffix: "S",
              text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
              recResponse: 104,
            },
            {
              suffix: "T",
              text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
              recResponse: 105,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 101,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 102,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 103,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 105,
            },
          ],
        },
        {
          code: "55B01",
          text: "Electrical Arcing",
          recResponse: 106,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 106,
            },
            {
              suffix: "B",
              text: "Building (Non-Residential) Threatened",
              recResponse: 106,
            },
            {
              suffix: "C",
              text: "Brush/Grass Threatened",
              recResponse: 107,
            },
            {
              suffix: "D",
              text: "Wildland Threatened",
              recResponse: 107,
            },
            {
              suffix: "N",
              text: "Person in Contact w/ Electrical Hazard",
              recResponse: 108,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 106,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 107,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 107,
            },
            {
              suffix: "S",
              text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
              recResponse: 109,
            },
            {
              suffix: "T",
              text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
              recResponse: 110,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 106,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 107,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 108,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 110,
            },
          ],
        },
        {
          code: "55B02",
          text: "Wires Down w/o Smoke or Arcing",
          recResponse: 111,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 111,
            },
            {
              suffix: "B",
              text: "Building (Non-Residential) Threatened",
              recResponse: 111,
            },
            {
              suffix: "C",
              text: "Brush/Grass Threatened",
              recResponse: 112,
            },
            {
              suffix: "D",
              text: "Wildland Threatened",
              recResponse: 112,
            },
            {
              suffix: "N",
              text: "Person in Contact w/ Electrical Hazard",
              recResponse: 113,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 111,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 112,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 112,
            },
            {
              suffix: "S",
              text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
              recResponse: 114,
            },
            {
              suffix: "T",
              text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
              recResponse: 115,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 111,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 112,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 113,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 115,
            },
          ],
        },
        {
          code: "55B03",
          text: "Appliance w/ Odor Present",
          recResponse: 116,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 116,
            },
            {
              suffix: "B",
              text: "Building (Non-Residential) Threatened",
              recResponse: 116,
            },
            {
              suffix: "C",
              text: "Brush/Grass Threatened",
              recResponse: 117,
            },
            {
              suffix: "D",
              text: "Wildland Threatened",
              recResponse: 117,
            },
            {
              suffix: "N",
              text: "Person in Contact w/ Electrical Hazard",
              recResponse: 118,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 116,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 117,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 117,
            },
            {
              suffix: "S",
              text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
              recResponse: 119,
            },
            {
              suffix: "T",
              text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
              recResponse: 120,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 116,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 117,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 118,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 120,
            },
          ],
        },
        {
          code: "55B04",
          text: "Electrical Odor",
          recResponse: 121,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 121,
            },
            {
              suffix: "B",
              text: "Building (Non-Residential) Threatened",
              recResponse: 121,
            },
            {
              suffix: "C",
              text: "Brush/Grass Threatened",
              recResponse: 122,
            },
            {
              suffix: "D",
              text: "Wildland Threatened",
              recResponse: 122,
            },
            {
              suffix: "N",
              text: "Person in Contact w/ Electrical Hazard",
              recResponse: 123,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 121,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 122,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 122,
            },
            {
              suffix: "S",
              text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
              recResponse: 124,
            },
            {
              suffix: "T",
              text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
              recResponse: 125,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 121,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 122,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 123,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 125,
            },
          ],
        },
        {
          code: "55B05",
          text: "Unkn Situation (Investigation)",
          recResponse: 126,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 126,
            },
            {
              suffix: "B",
              text: "Building (Non-Residential) Threatened",
              recResponse: 126,
            },
            {
              suffix: "C",
              text: "Brush/Grass Threatened",
              recResponse: 127,
            },
            {
              suffix: "D",
              text: "Wildland Threatened",
              recResponse: 127,
            },
            {
              suffix: "N",
              text: "Person in Contact w/ Electrical Hazard",
              recResponse: 128,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 126,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 127,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 127,
            },
            {
              suffix: "S",
              text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
              recResponse: 129,
            },
            {
              suffix: "T",
              text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
              recResponse: 130,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 126,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 127,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 128,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 130,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "55C00",
          text: "Override (Charlie)",
          recResponse: 101,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 101,
            },
            {
              suffix: "B",
              text: "Building (Non-Residential) Threatened",
              recResponse: 101,
            },
            {
              suffix: "C",
              text: "Brush/Grass Threatened",
              recResponse: 102,
            },
            {
              suffix: "D",
              text: "Wildland Threatened",
              recResponse: 102,
            },
            {
              suffix: "N",
              text: "Person in Contact w/ Electrical Hazard",
              recResponse: 103,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 101,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 102,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 102,
            },
            {
              suffix: "S",
              text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
              recResponse: 104,
            },
            {
              suffix: "T",
              text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
              recResponse: 105,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 101,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 102,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 103,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 105,
            },
          ],
        },
        {
          code: "55C01",
          text: "Electrical Hazard w/ or Near Water",
          recResponse: 131,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 131,
            },
            {
              suffix: "B",
              text: "Building (Non-Residential) Threatened",
              recResponse: 131,
            },
            {
              suffix: "C",
              text: "Brush/Grass Threatened",
              recResponse: 132,
            },
            {
              suffix: "D",
              text: "Wildland Threatened",
              recResponse: 132,
            },
            {
              suffix: "N",
              text: "Person in Contact w/ Electrical Hazard",
              recResponse: 133,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 131,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 132,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 132,
            },
            {
              suffix: "S",
              text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
              recResponse: 134,
            },
            {
              suffix: "T",
              text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
              recResponse: 135,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 131,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 132,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 133,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 135,
            },
          ],
        },
        {
          code: "55C02",
          text: "Wires Down w/ Smoke or Arcing",
          recResponse: 136,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 136,
            },
            {
              suffix: "B",
              text: "Building (Non-Residential) Threatened",
              recResponse: 136,
            },
            {
              suffix: "C",
              text: "Brush/Grass Threatened",
              recResponse: 137,
            },
            {
              suffix: "D",
              text: "Wildland Threatened",
              recResponse: 137,
            },
            {
              suffix: "N",
              text: "Person in Contact w/ Electrical Hazard",
              recResponse: 138,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 136,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 137,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 137,
            },
            {
              suffix: "S",
              text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
              recResponse: 139,
            },
            {
              suffix: "T",
              text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
              recResponse: 140,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 136,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 137,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 138,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 140,
            },
          ],
        },
        {
          code: "55C03",
          text: "Substation/Distribution Station",
          recResponse: 141,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 141,
            },
            {
              suffix: "B",
              text: "Building (Non-Residential) Threatened",
              recResponse: 141,
            },
            {
              suffix: "C",
              text: "Brush/Grass Threatened",
              recResponse: 142,
            },
            {
              suffix: "D",
              text: "Wildland Threatened",
              recResponse: 142,
            },
            {
              suffix: "N",
              text: "Person in Contact w/ Electrical Hazard",
              recResponse: 143,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 141,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 142,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 142,
            },
            {
              suffix: "S",
              text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
              recResponse: 144,
            },
            {
              suffix: "T",
              text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
              recResponse: 145,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 141,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 142,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 143,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "55C04",
          text: "Underground Electrical Problem (Vault/Manhole)",
          recResponse: 146,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 146,
            },
            {
              suffix: "B",
              text: "Building (Non-Residential) Threatened",
              recResponse: 146,
            },
            {
              suffix: "C",
              text: "Brush/Grass Threatened",
              recResponse: 147,
            },
            {
              suffix: "D",
              text: "Wildland Threatened",
              recResponse: 147,
            },
            {
              suffix: "N",
              text: "Person in Contact w/ Electrical Hazard",
              recResponse: 148,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 146,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 147,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 147,
            },
            {
              suffix: "S",
              text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
              recResponse: 149,
            },
            {
              suffix: "T",
              text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
              recResponse: 150,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 146,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 147,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 148,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 150,
            },
          ],
        },
        {
          code: "55C05",
          text: "Solar Farm",
          recResponse: 151,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 151,
            },
            {
              suffix: "B",
              text: "Building (Non-Residential) Threatened",
              recResponse: 151,
            },
            {
              suffix: "C",
              text: "Brush/Grass Threatened",
              recResponse: 152,
            },
            {
              suffix: "D",
              text: "Wildland Threatened",
              recResponse: 152,
            },
            {
              suffix: "N",
              text: "Person in Contact w/ Electrical Hazard",
              recResponse: 153,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 151,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 152,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 152,
            },
            {
              suffix: "S",
              text: "Person in Contact w/ Electrical Hazard & Single Injured Person",
              recResponse: 154,
            },
            {
              suffix: "T",
              text: "Person in Contact w/ Electrical Hazard & Mult Injured Persons",
              recResponse: 155,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 151,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 152,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 153,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 155,
            },
          ],
        },
      ],
    },
  ],
};
