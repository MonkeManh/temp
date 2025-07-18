import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const STRANGE_ODOR: IFireComplaint = {
  protocol: 66,
  name: "Odor (Strange / Unknown)",
  shortName: "Unknown Odors",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: 3 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 243,
  defaultCode: "66A03",
  questions: [
    {
      text: <p>Where <b className="font-bold">exactly</b> is the odor <b className="font-bold">located</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Inside:",
          display: "Odor is inside: {input}",
          questionDisplay: "The odor is inside: {input}.",
          updateCode: "66A01",
          continue: true,
          input: true,
        },
        {
          answer: "Outside:",
          display: "Odor is outside: {input}",
          questionDisplay: "The odor is outside: {input}.",
          updateCode: "66A02",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk odor location",
          questionDisplay: "The odor location is unknown.",
          updateCode: "66A03",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Are there any <b className="font-bold">hazardous materials</b> or <b className="font-bold">chemicals</b> involved?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No hazmat/chems rptd",
          questionDisplay: "No hazardous materials or chemicals reported.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Hazmat/chems rptd: {input}",
          questionDisplay: "Hazardous materials or chemicals reported: {input}.",
          updateSuffix: "H",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if hazmat/chems",
          questionDisplay: "It is unknown if there are any hazardous materials or chemicals involved.",
          continue: true,
        }
      ]
    },

     {
      text: <p>Can you <b className="font-bold">describe</b> the <b className="font-bold">odor</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Fuel",
          display: "Odor of fuel",
          questionDisplay: "The odor is described as fuel.",
          gotoProtocol: 59
        },
        {
          answer: "Natural Gas/Propane",
          display: "Odor of natural gas/propane",
          questionDisplay: "The odor is described as natural gas or propane.",
          gotoProtocol: 60
        },
        {
          answer: "Other:",
          display: "Odor described as: {input}",
          questionDisplay: "The odor is described as: {input}.",
          continue: true,
          input: true,
        },
        {
          answer: "Unable",
          display: "Unable to describe odor",
          questionDisplay: "The odor cannot be described.",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is anyone <b className="font-bold">sick</b> or <b className="font-bold">experiencing symptoms</b> <span className="text-blue-400">(Nausea, vomiting, headache)</span>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No sick persons rptd",
          questionDisplay: "No sick persons reported.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Sick persons rptd",
          questionDisplay: "Sick persons reported.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if sick persons",
          questionDisplay: "It is unknown if there are any sick persons.",
          continue: true,
        }
      ]
    },

    {
      text: <p>How <b className="font-bold">many</b> people are <b className="font-bold">sick</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const sickAnswer = answers?.find((a) => a.question === "Is anyone sick or experiencing symptoms (Nausea, vomiting, headache)?")?.answer;
        return sickAnswer === "Yes";
      },
      preRenderLogic: "there are sick persons rptd",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single sick person",
          questionDisplay: "There is a single sick person.",
          updateCode: "66C01",
          preRenderInstructions: (answers) => {
            const odorLocation = answers?.find((a) => a.question === "Where exactly is the odor located?")?.answer;
            return odorLocation === "Inside:"
          },
          preRenderLogic: "the odor is inside",
          preRenderDependencies: ["answers"],
          continue: true,
          send: true,
        },
        {
          answer: "Single person",
          display: "Single sick person",
          questionDisplay: "There is a single sick person.",
          updateCode: "66C03",
          preRenderInstructions: (answers) => {
            const odorLocation = answers?.find((a) => a.question === "Where exactly is the odor located?")?.answer;
            return odorLocation === "Outside:"
          },
          preRenderLogic: "the odor is outside",
          preRenderDependencies: ["answers"],
          continue: true,
          send: true,
        },
        {
          answer: "Single person",
          display: "Single sick person",
          questionDisplay: "There is a single sick person.",
          updateCode: "66B01",
          preRenderInstructions: (answers) => {
            const odorLocation = answers?.find((a) => a.question === "Where exactly is the odor located?")?.answer;
            return odorLocation === "Unknown"
          },
          preRenderLogic: "the odor location is unknown",
          preRenderDependencies: ["answers"],
          continue: true,
          send: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} sick persons",
          questionDisplay: "There are {input} sick persons.",
          updateCode: "66C02",
          preRenderInstructions: (answers) => {
            const odorLocation = answers?.find((a) => a.question === "Where exactly is the odor located?")?.answer;
            return odorLocation === "Inside:"
          },
          preRenderLogic: "the odor is inside",
          preRenderDependencies: ["answers"],
          continue: true,
          input: true,
          send: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} sick persons",
          questionDisplay: "There are {input} sick persons.",
          updateCode: "66C04",
          preRenderInstructions: (answers) => {
            const odorLocation = answers?.find((a) => a.question === "Where exactly is the odor located?")?.answer;
            return odorLocation === "Outside:"
          },
          preRenderLogic: "the odor is outside",
          preRenderDependencies: ["answers"],
          continue: true,
          input: true,
          send: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} sick persons",
          questionDisplay: "There are {input} sick persons.",
          updateCode: "66B01",
          preRenderInstructions: (answers) => {
            const odorLocation = answers?.find((a) => a.question === "Where exactly is the odor located?")?.answer;
            return odorLocation === "Unknown"
          },
          preRenderLogic: "the odor location is unknown",
          preRenderDependencies: ["answers"],
          continue: true,
          input: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk number of sick persons",
          questionDisplay: "The number of sick persons is unknown.",
          updateCode: "66B01",
          continue: true,
          send: true,
        }
      ]
    }
  ],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "66A01",
          text: "Odor Inside",
          recResponse: 243,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 244,
            },
          ],
        },
        {
          code: "66A02",
          text: "Odor Outside",
          recResponse: 243,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 244,
            },
          ],
        },
        {
          code: "66A03",
          text: "Unkn Situation (Investigation)",
          recResponse: 243,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 244,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "66B00",
          text: "Override (Bravo)",
          recResponse: 245,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 19,
            },
          ],
        },
        {
          code: "66B01",
          text: "Unkn Situation (Investigation) w/ Sick Person(s)",
          recResponse: 245,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 19,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "66C00",
          text: "Override (Charlie)",
          recResponse: 245,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 19,
            },
          ],
        },
        {
          code: "66C01",
          text: "Odor Inside w/ Single Sick Person",
          recResponse: 245,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 19,
            },
          ],
        },
        {
          code: "66C02",
          text: "Odor Inside w/ Multiple Sick Persons",
          recResponse: 246,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 19,
            },
          ],
        },
        {
          code: "66C03",
          text: "Odor Outside w/ Single Sick Person",
          recResponse: 245,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 19,
            },
          ],
        },
        {
          code: "66C04",
          text: "Odor Outside w/ Multiple Sick Persons",
          recResponse: 246,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 19,
            },
          ],
        },
      ],
    },
  ],
};
