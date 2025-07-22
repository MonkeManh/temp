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
  defaultPriority: "B",
  defaultPlan: 569,
  defaultCode: "82B01",
  questions: [
    {
      text: <p><span className="text-blue-400">(Not stated)</span> What <b className="font-bold">exactly</b> is on <b className="font-bold text-red-400">fire</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Brush",
          display: "Brush on fire",
          questionDisplay: "There is brush on fire",
          continue: true
        },
        {
          answer: "Grass",
          display: "Grass on fire",
          questionDisplay: "There is grass on fire",
          continue: true
        },
        {
          answer: "Vegetation",
          display: "Vegetation on fire",
          questionDisplay: "There is vegetation on fire",
          continue: true
        },
        {
          answer: "Wildland",
          display: "Wildland on fire",
          questionDisplay: "There is wildland on fire",
          continue: true
        },
        {
          answer: "Structure",
          display: "Structure on fire",
          questionDisplay: "There is a structure on fire",
          gotoProtocol: 69,
          continue: false,
        },
        {
          answer: "PERSON",
          display: "PERSON on fire",
          questionDisplay: "There is a PERSON on fire",
          updateCode: "82E01",
          updateSuffix: "P",
          continue: true,
          send: true
        },
        {
          answer: "Other:",
          display: "{input} on fire",
          questionDisplay: "There is {input} on fire",
          updateCode: "82A01",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk what is on fire",
          questionDisplay: "It is unk what is on fire",
          updateCode: "82B01",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Is anyone <b className="font-bold">trapped</b> or <b className="font-bold">threatened</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No one rptd trapped/threatened",
          questionDisplay: "No one is rptd trapped or threatened",
          continue: true,
        },
        {
          answer: "Trapped",
          display: "Someone rptd trapped",
          questionDisplay: "Someone is rptd trapped",
          updateCode: "82E01",
          updateSuffix: "T",
          continue: true,
        },
        {
          answer: "Threatened",
          display: "Someone rptd threatened",
          questionDisplay: "Someone is rptd threatened",
          updateCode: "82E01",
          updateSuffix: "P",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if anyone trapped/threatened",
          questionDisplay: "It is unk if anyone is trapped or threatened",
          continue: true,
        }
      ]
    },

    {
      text: <p>What is the <b className="font-bold">size</b> of the fire?</p>,
      questionType: "select",
      answers: [
        {
          answer: "< 1 acre",
          display: "< 1 acre in size",
          questionDisplay: "The fire is less than 1 acre in size",
          dependency: (answers) => {
            const contentAnswer = answers?.find((a) => a.question === "(Not stated) What exactly is on fire?")?.answer;
            if(contentAnswer === "Brush" || contentAnswer === "Grass" || contentAnswer === "Vegetation") {
              return { code: "82C03" };
            } else if(contentAnswer === "Wildland") {
              return { code: "82C01" };
            } else {
              return { code: "82B01" };
            }
          },
          continue: true,
        },
        {
          answer: "> 1 acre",
          display: "> 1 acre in size",
          questionDisplay: "The fire is greater than 1 acre in size",
          dependency: (answers) => {
            const contentAnswer = answers?.find((a) => a.question === "(Not stated) What exactly is on fire?")?.answer;
            if(contentAnswer === "Brush" || contentAnswer === "Grass" || contentAnswer === "Vegetation") {
              return { code: "82D08" };
            } else if(contentAnswer === "Wildland") {
              return { code: "82D03" };
            } else {
              return { code: "82B01" };
            }
          },
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk size of fire",
          questionDisplay: "It is unk the size of the fire",
          updateCode: "82B01",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Are any <b className="font-bold">buildings</b> or <b className="font-bold">structures</b> threatened?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No bldgs/structs threatened",
          questionDisplay: "No buildings or structures are threatened",
          continue: true,
          send: true
        },
        {
          answer: "Threatened",
          display: "Bldgs/structs rptd threatened",
          questionDisplay: "Buildings or structures are rptd threatened",
          dependency: (answers) => {
            const contentAnswer = answers?.find((a) => a.question === "(Not stated) What exactly is on fire?")?.answer;
            const sizeAnswer = answers?.find((a) => a.question === "What is the size of the fire?")?.answer;
            if(contentAnswer === "Brush" || contentAnswer === "Grass" || contentAnswer === "Vegetation") {
              if(sizeAnswer === "< 1 acre") {
                return { code: "82C02", send: true };
              } else {
                return { code: "82D07", send: true };
              }
            } else if(contentAnswer === "Wildland") {
              if(sizeAnswer === "< 1 acre") {
                return { code: "82D05", send: true };
              } else {
                return { code: "82D02", send: true };
              }
            }
          },
          continue: true
        },
        {
          answer: "Involved",
          display: "Bldgs/structs rptd involved",
          questionDisplay: "Buildings or structures are rptd involved",
          dependency: (answers) => {
            const contentAnswer = answers?.find((a) => a.question === "(Not stated) What exactly is on fire?")?.answer;
            const sizeAnswer = answers?.find((a) => a.question === "What is the size of the fire?")?.answer;
            if(contentAnswer === "Brush" || contentAnswer === "Grass" || contentAnswer === "Vegetation") {
              if(sizeAnswer === "< 1 acre") {
                return { code: "82D09", send: true };
              } else {
                return { code: "82D06", send: true };
              }
            } else if(contentAnswer === "Wildland") {
              if(sizeAnswer === "< 1 acre") {
                return { code: "82D04", send: true };
              } else {
                return { code: "82D01", send: true };
              }
            }
          }
        },
        {
          answer: "Unknown",
          display: "Unk if bldgs/structs threatened",
          questionDisplay: "It is unk if any buildings or structures are threatened",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>Is anything else <b className="font-bold">threatened</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No other threats",
          questionDisplay: "No other threats",
          continue: true,
        },
        {
          answer: "Animals",
          display: "Animals threatened",
          questionDisplay: "Animals are threatened",
          updateSuffix: "A",
          continue: true,
        },
        {
          answer: "Vehicle",
          display: "Vehicle threatened",
          questionDisplay: "A vehicle is threatened",
          updateSuffix: "V",
          continue: true,
        },
        {
          answer: "Other:",
          display: "{input} threatened",
          questionDisplay: "{input} is threatened",
          updateSuffix: "O",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk if other threats",
          questionDisplay: "It is unk if there are other threats",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is anyone <b className="font-bold">sick</b> or <b className="font-bold">injured</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No one rptd sick/injured",
          questionDisplay: "No one is rptd sick or injured",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Someone rptd sick/injured",
          questionDisplay: "Someone is rptd sick or injured",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if anyone sick/injured",
          questionDisplay: "It is unk if anyone is sick or injured",
          continue: true,
        }
      ]
    },

    {
      text: <p>How <b className="font-bold">many</b> people are <b className="font-bold">sick</b> or <b className="font-bold">injured</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const sickAnswer = answers?.find((a) => a.question === "Is anyone sick or injured?")?.answer;
        return sickAnswer === "Yes";
      },
      preRenderLogic: "there is someone sick or injured",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single person sick/injured",
          questionDisplay: "There is a single person sick or injured",
          updateSuffix: "X",
          continue: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} people sick/injured",
          questionDisplay: "There are {input} people sick or injured",
          updateSuffix: "Y",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk how many sick/injured",
          questionDisplay: "It is unk how many people are sick or injured",
          continue: true,
        }
      ]
    },
  ],
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
