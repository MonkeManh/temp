import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const FUEL_SPILL_ODOR: IFireComplaint = {
  protocol: 59,
  name: "Fuel Spill / Fuel Odor",
  shortName: "Fuel Spill/Odor",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultPlan: 190,
  defaultCode: "59C03",
  questions: [
    {
      text: <p>Can you <b className="font-bold">see</b> any fuel?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Fuel spill visible",
          questionDisplay: "This is a fuel spill",
          continue: true,
        },
        {
          answer: "No",
          display: "No fuel spill visible",
          questionDisplay: "There is no visible fuel spill",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if fuel is visible",
          questionDisplay: "It is unk if there is a visible fuel spill",
          continue: true,
        }
      ]
    },

    {
      text: <p>Can you <b className="font-bold">smell</b> fuel?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const visibleFuel = answers.find(
          (a) => a.question === "Can you see any fuel?"
        )?.answer;
        return visibleFuel === "No" || visibleFuel === "Unknown";
      },
      preRenderLogic: "there is no visible fuel spill",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Fuel odor present",
          questionDisplay: "There is a fuel odor",
          updateCode: "59B03",
          continue: true,
        },
        {
          answer: "No",
          display: "No fuel odor",
          questionDisplay: "There is no fuel odor",
          updateCode: "59C03"
        },
        {
          answer: "Unknown",
          display: "Unk if fuel odor present",
          questionDisplay: "It is unk if there is a fuel odor",
          updateCode: "59C03"
        }
      ]
    },

    {
      text: <p><b className="font-bold">Where</b> is the spill <b className="font-bold">exactly</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const visibleFuel = answers.find(
          (a) => a.question === "Can you see any fuel?"
        )?.answer;
        return visibleFuel === "Yes";
      },
      preRenderLogic: "there is a visible fuel spill",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Inside",
          display: "Spill is inside",
          questionDisplay: "The fuel spill is inside",
          updateSuffix: "I",
          continue: true,
        },
        {
          answer: "Outside",
          display: "Spill is outside",
          questionDisplay: "The fuel spill is outside",
          updateSuffix: "O",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk where spill is",
          questionDisplay: "It is unk where the fuel spill is",
          updateSuffix: "U",
          continue: true,
        }
      ]
    },

    {
      text: <p><b className="font-bold">Where</b> is the odor <b className="font-bold">exactly</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const visibleFuel = answers.find(
          (a) => a.question === "Can you see any fuel?"
        )?.answer;
        return visibleFuel === "No" || visibleFuel === "Unknown";
      },
      preRenderLogic: "there is no visible fuel spill",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Inside",
          display: "Odor is inside",
          questionDisplay: "The fuel odor is inside",
          updateSuffix: "I",
          continue: true,
        },
        {
          answer: "Outside",
          display: "Odor is outside",
          questionDisplay: "The fuel odor is outside",
          updateSuffix: "O",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk where odor is",
          questionDisplay: "It is unk where the fuel odor is",
          updateSuffix: "U",
          continue: true,
        }
      ]
    },

    {
      text: <p>What is the <b className="font-bold">size</b> of the <b className="font-bold">spill</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const visibleFuel = answers.find(
          (a) => a.question === "Can you see any fuel?"
        )?.answer;
        return visibleFuel === "Yes";
      },
      preRenderLogic: "there is a visible fuel spill",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Less than 1 gallon",
          display: "Spill < 1 gallon",
          questionDisplay: "The fuel spill is less than 1 gallon",
          updateCode: "59O01",
          continue: true,
        },
        {
          answer: "Between 1 and 25 gallons",
          display: "Spill (1-25 gallons)",
          questionDisplay: "The fuel spill is between 1 and 25 gallons",
          continue: true,
        },
        {
          answer: "More than 25 gallons",
          display: "Spill > 25 gallons",
          questionDisplay: "The fuel spill is more than 25 gallons",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk size of spill",
          questionDisplay: "It is unk the size of the fuel spill",
          updateCode: "59C03",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is the spill <b className="font-bold">contained</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const visibleFuel = answers.find(
          (a) => a.question === "Can you see any fuel?"
        )?.answer;
        return visibleFuel === "Yes";
      },
      preRenderLogic: "there is a visible fuel spill",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Spill is contained",
          questionDisplay: "The fuel spill is contained",
          updateCode: "59B02",
          preRenderInstructions: (answers) => {
            const sizeOfSpill = answers.find(
              (a) => a.question === "What is the size of the spill?"
            )?.answer;
            return sizeOfSpill === "Between 1 and 25 gallons";
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "Spill is contained",
          questionDisplay: "The fuel spill is contained",
          updateCode: "59C02",
          preRenderInstructions: (answers) => {
            const sizeOfSpill = answers.find(
              (a) => a.question === "What is the size of the spill?"
            )?.answer;
            return sizeOfSpill === "More than 25 gallons";
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "Spill is contained",
          questionDisplay: "The fuel spill is contained",
          preRenderInstructions: (answers) => {
            const sizeOfSpill = answers.find(
              (a) => a.question === "What is the size of the spill?"
            )?.answer;
            return sizeOfSpill !== "Between 1 and 25 gallons" && sizeOfSpill !== "More than 25 gallons";
          },
          continue: true,
        },
        {
          answer: "No",
          display: "Spill is uncontained",
          questionDisplay: "The fuel spill is uncontained",
          updateCode: "59B01",
          preRenderInstructions: (answers) => {
            const sizeOfSpill = answers.find(
              (a) => a.question === "What is the size of the spill?"
            )?.answer;
            return sizeOfSpill === "Between 1 and 25 gallons";
          },
          continue: true,
        },
        {
          answer: "No",
          display: "Spill is uncontained",
          questionDisplay: "The fuel spill is uncontained",
          updateCode: "59C01",
          preRenderInstructions: (answers) => {
            const sizeOfSpill = answers.find(
              (a) => a.question === "What is the size of the spill?"
            )?.answer;
            return sizeOfSpill === "More than 25 gallons";
          },
          continue: true,
        },
        {
          answer: "No",
          display: "Spill is uncontained",
          questionDisplay: "The fuel spill is uncontained",
          preRenderInstructions: (answers) => {
            const sizeOfSpill = answers.find(
              (a) => a.question === "What is the size of the spill?"
            )?.answer;
            return sizeOfSpill !== "Between 1 and 25 gallons" && sizeOfSpill !== "More than 25 gallons";
          },
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if spill is contained",
          questionDisplay: "It is unk if the fuel spill is contained",
          updateCode: "59C03",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is the spill <b className="font-bold">threatening</b> a <b className="font-bold">waterway</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const visibleFuel = answers.find(
          (a) => a.question === "Can you see any fuel?"
        )?.answer;
        return visibleFuel === "Yes";
      },
      preRenderLogic: "there is a visible fuel spill",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Not threatening waterway",
          questionDisplay: "The fuel spill is not threatening a waterway",
          continue: true,
          send: true,
        },
        {
          answer: "Yes",
          display: "Threatening waterway",
          questionDisplay: "The fuel spill is threatening a waterway",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if threatening waterway",
          questionDisplay: "It is unk if the fuel spill is threatening a waterway",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of waterway is <b className="font-bold">threatened</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const visibleFuel = answers.find(
          (a) => a.question === "Can you see any fuel?"
        )?.answer;
        const threateningWaterway = answers.find(
          (a) => a.question === "Is the spill threatening a waterway?"
        )?.answer;
        return visibleFuel === "Yes" && threateningWaterway === "Yes";
      },
      preRenderLogic: "there is a visible fuel spill that is threatening a waterway",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Coastal water",
          display: "Costal water threatened",
          questionDisplay: "The fuel spill is threatening costal water",
          updateCode: "59D01",
          continue: true,
          send: true
        },
        {
          answer: "Inland water",
          display: "Inland water threatened",
          questionDisplay: "The fuel spill is threatening inland water",
          updateCode: "59D02",
          continue: true,
          send: true
        },
        {
          answer: "Oceanic water",
          display: "Oceanic water threatened",
          questionDisplay: "The fuel spill is threatening oceanic water",
          updateCode: "59D03",
          continue: true,
          send: true
        },
        {
          answer: "Sewer/drain",
          display: "Sewer/drain threatened",
          questionDisplay: "The fuel spill is threatening a sewer/drain",
          updateCode: "59D04",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk type of waterway",
          questionDisplay: "It is unk the type of waterway the fuel spill is threatening",
          updateCode: "59C03",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>Is anyone <b className="font-bold">sick</b> or <b className="font-bold">experiencing symptoms</b> <span className="text-blue-400">(nausea, vomiting, light headedness)</span>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No sick persons rptd",
          questionDisplay: "There are no sick persons reported",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Sick persons rptd",
          questionDisplay: "There are sick persons reported",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if sick persons",
          questionDisplay: "It is unk if there are sick persons reported",
          continue: true,
        }
      ]
    },

    {
      text: <p>How <b className="font-bold">many</b> people are <b className="font-bold">sick</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const sickPersons = answers.find(
          (a) => a.question === "Is anyone sick or experiencing symptoms (nausea, vomiting, light headedness)?"
        )?.answer;
        return sickPersons === "Yes";
      },
      preRenderLogic: "there are sick persons reported",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single sick person",
          questionDisplay: "There is a single sick person",
          updateSuffix: "V",
          preRenderInstructions: (answers) => {
            const location = answers.find(
              (a) => a.question === "Where is the spill exactly?"
            )?.answer;
            const odorLocation = answers.find(
              (a) => a.question === "Where is the odor exactly?"
            )?.answer;
            return location === "Inside" || odorLocation === "Inside";
          },
          continue: true,
        },
        {
          answer: "Single person",
          display: "Single sick person",
          questionDisplay: "There is a single sick person",
          updateSuffix: "X",
          preRenderInstructions: (answers) => {
            const location = answers.find(
              (a) => a.question === "Where is the spill exactly?"
            )?.answer;
            const odorLocation = answers.find(
              (a) => a.question === "Where is the odor exactly?"
            )?.answer;
            return location === "Outside" || odorLocation === "Outside";
          },
        },
        {
          answer: "Single person",
          display: "Single sick person",
          questionDisplay: "There is a single sick person",
          preRenderInstructions: (answers) => {
            const location = answers.find(
              (a) => a.question === "Where is the spill exactly?"
            )?.answer;
            const odorLocation = answers.find(
              (a) => a.question === "Where is the odor exactly?"
            )?.answer;
            return location !== "Outside" && location !== "Inside" && odorLocation !== "Outside" && odorLocation !== "Inside";
          },
        },
        {
          answer: "Multiple people (input number):",
          display: "{input} sick persons",
          questionDisplay: "There are multiple sick persons",
          updateSuffix: "W",
          preRenderInstructions: (answers) => {
            const location = answers.find(
              (a) => a.question === "Where is the spill exactly?"
            )?.answer;
            const odorLocation = answers.find(
              (a) => a.question === "Where is the odor exactly?"
            )?.answer;
            return location === "Inside" || odorLocation === "Inside";
          },
          continue: true,
          input: true
        },
        {
          answer: "Multiple people (input number):",
          display: "{input} sick persons",
          questionDisplay: "There are multiple sick persons",
          updateSuffix: "Y",
          preRenderInstructions: (answers) => {
            const location = answers.find(
              (a) => a.question === "Where is the spill exactly?"
            )?.answer;
            const odorLocation = answers.find(
              (a) => a.question === "Where is the odor exactly?"
            )?.answer;
            return location === "Outside" || odorLocation === "Outside";
          },
          continue: true,
          input: true
        },
        {
          answer: "Multiple people (input number):",
          display: "{input} sick persons",
          questionDisplay: "There are multiple sick persons",
          preRenderInstructions: (answers) => {
            const location = answers.find(
              (a) => a.question === "Where is the spill exactly?"
            )?.answer;
            const odorLocation = answers.find(
              (a) => a.question === "Where is the odor exactly?"
            )?.answer;
            return location !== "Outside" && location !== "Inside" && odorLocation !== "Outside" && odorLocation !== "Inside";
          },
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk num of sick persons",
          questionDisplay: "It is unk the number of sick persons",
          continue: true,
        }
      ]
    }
  ],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "59O01",
          text: "Minor Spill",
          recResponse: 193,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 193,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 193,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 193,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "59B00",
          text: "Override (Bravo)",
          recResponse: 190,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 190,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 190,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 190,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
          ],
        },
        {
          code: "59B01",
          text: "Uncontained Small Spill",
          recResponse: 190,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 190,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 190,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 190,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
          ],
        },
        {
          code: "59B02",
          text: "Contained Small Spill",
          recResponse: 193,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 193,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 193,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 193,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
          ],
        },
        {
          code: "59B03",
          text: "Fuel Odor",
          recResponse: 194,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 194,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 195,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 194,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 191,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 191,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "59C00",
          text: "Override (Charlie)",
          recResponse: 198,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 190,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
        {
          code: "59C01",
          text: "Uncontained Large Spill",
          recResponse: 198,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 190,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
        {
          code: "59C02",
          text: "Contained Large Spill",
          recResponse: 198,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 190,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
        {
          code: "59C03",
          text: "Unkn Situation (Investigation)",
          recResponse: 198,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 190,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "59D00",
          text: "Override (Delta)",
          recResponse: 199,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 199,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
        {
          code: "59D01",
          text: "Costal Water",
          recResponse: 199,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 199,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
        {
          code: "59D02",
          text: "Inland Water",
          recResponse: 199,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 199,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
        {
          code: "59D03",
          text: "Oceanic Water",
          recResponse: 199,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 199,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
        {
          code: "59D04",
          text: "Sewer/Drain",
          recResponse: 199,
          subCodes: [
            {
              suffix: "I",
              text: "Inside",
              recResponse: 199,
            },
            {
              suffix: "O",
              text: "Outside",
              recResponse: 199,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 199,
            },
            {
              suffix: "V",
              text: "Inside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "W",
              text: "Inside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
            {
              suffix: "X",
              text: "Outside & Single Sick/Injured Person",
              recResponse: 198,
            },
            {
              suffix: "Y",
              text: "Outside & Mult Sick/Injured Persons",
              recResponse: 198,
            },
          ],
        },
      ],
    },
  ],
};
