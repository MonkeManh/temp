import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const BRUSH_FIRE: IFireComplaint = {
  protocol: 82,
  name: "Vegitation / Wildland / Brush / Grass Fire",
  shortName: "Brush Fire",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: 4 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "O",
  defaultPlan: 569,
  defaultCode: "82B01",
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "82O01",
          text: "Controlled Burn",
          recResponse: 565,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 566,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 565,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 567,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 567,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 565,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 566,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 567,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 568,
            },
          ],
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "82A00",
          text: "Override (Alpha)",
          recResponse: 569,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 247,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 569,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 248,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 570,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 569,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 247,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 248,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 249,
            },
          ],
        },
        {
          code: "82A01",
          text: "Outside Fire",
          recResponse: 569,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 247,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 569,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 248,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 570,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 569,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 247,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 248,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 249,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "82B00",
          text: "Override (Bravo)",
          recResponse: 571,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 571,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 571,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 572,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 572,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 571,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 571,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 572,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 573,
            },
          ],
        },
        {
          code: "82B01",
          text: "Unkn Situation (Investigation)",
          recResponse: 209,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 209,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 209,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 210,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 210,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 209,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 209,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 210,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 211,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "82C00",
          text: "Override (Charlie)",
          recResponse: 571,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 571,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 571,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 572,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 572,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 571,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 571,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 572,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 573,
            },
          ],
        },
        {
          code: "82C01",
          text: "Small Wildland Fire",
          recResponse: 571,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 571,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 571,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 572,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 572,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 571,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 571,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 572,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 573,
            },
          ],
        },
        {
          code: "82C02",
          text: "Small Brush/Grass Fire, Structures Threatened",
          recResponse: 571,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 571,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 571,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 572,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 572,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 571,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 571,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 572,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 573,
            },
          ],
        },
        {
          code: "82C03",
          text: "Small Brush/Grass Fire",
          recResponse: 571,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 571,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 571,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 572,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 572,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 571,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 571,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 572,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 573,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "82D00",
          text: "Override (Delta)",
          recResponse: 574,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 574,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 574,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 575,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 576,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 574,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 574,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 575,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 577,
            },
          ],
        },
        {
          code: "82D01",
          text: "Large Wildland Fire, Structures Involved",
          recResponse: 233,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 233,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 233,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 268,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 267,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 233,
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
          code: "82D02",
          text: "Large Wildland Fire, Structures Threatened",
          recResponse: 574,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 574,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 574,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 575,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 576,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 574,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 574,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 575,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 577,
            },
          ],
        },
        {
          code: "82D03",
          text: "Large Wildland Fire",
          recResponse: 574,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 574,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 574,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 575,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 576,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 574,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 574,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 575,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 577,
            },
          ],
        },
        {
          code: "82D04",
          text: "Small Wildland Fire, Structures Involved",
          recResponse: 233,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 233,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 233,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 268,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 267,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 233,
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
          code: "82D05",
          text: "Small Wildland Fire, Structures Threatened",
          recResponse: 571,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 571,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 571,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 572,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 572,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 571,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 571,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 572,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 573,
            },
          ],
        },
        {
          code: "82D06",
          text: "Large Brush/Grass Fire, Structures Involved",
          recResponse: 233,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 233,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 233,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 268,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 267,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 233,
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
          code: "82D07",
          text: "Large Brush/Grass Fire, Structures Threatened",
          recResponse: 574,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 574,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 574,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 575,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 576,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 574,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 574,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 575,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 577,
            },
          ],
        },
        {
          code: "82D08",
          text: "Large Brush/Grass Fire",
          recResponse: 574,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 574,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 574,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 575,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 576,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 574,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 574,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 575,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 577,
            },
          ],
        },
        {
          code: "82D09",
          text: "Small Brush/Grass Fire, Structures Involved",
          recResponse: 233,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 233,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 233,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 268,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 267,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 233,
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
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "82E00",
          text: "Override (Echo)",
          recResponse: 576,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 576,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 576,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 576,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 576,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 576,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 576,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 576,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 576,
            },
          ],
        },
        {
          code: "82E01",
          text: "Threatened/Trapped by Wildland Fire",
          recResponse: 576,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 576,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 576,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 576,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 576,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 576,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 576,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 576,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 576,
            },
          ],
        },
      ],
    },
  ],
};
