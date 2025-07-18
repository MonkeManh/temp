import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const GAS_LEAK_ODOR: IFireComplaint = {
  protocol: 60,
  name: "Gas Leak / Gas Odor (Natural & LP Gases)",
  shortName: "Gas Leak/Odor",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultPlan: 200,
  defaultCode: "60B04",
  questions: [
    {
      text: (
        <p>
          <span className="text-blue-400">(Not obvious)</span> Do you know <b className="font-bold">where</b> the leak is?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Leak known",
          questionDisplay: "The leak is known",
          continue: true,
        },
        {
          answer: "No",
          display: "No known leak",
          questionDisplay: "The leak is not known",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if leak",
          questionDisplay: "It is unk if there is a leak",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(If not already stated)</span> Is there an <b className="font-bold">odor</b> of gas?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const whereLeakIs = answers?.find(
          (a) => a.question === "(Not obvious) Do you know where the leak is?"
        )?.answer;
        return whereLeakIs !== "Yes";
      },
      preRenderLogic: "there is no confirmed leak",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No odor",
          questionDisplay: "There is no odor of gas",
          updateCode: "60B04",
          continue: true,
        },
        {
          answer: "No other:",
          display: "Odor present: {input}",
          questionDisplay: "There is an odor of gas: {input}",
          gotoProtocol: 66,
        },
        {
          answer: "Yes",
          display: "Odor present",
          questionDisplay: "There is an odor of gas",
          updateSuffix: "O",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if odor",
          questionDisplay: "It is unk if there is an odor of gas",
          updateCode: "60B04",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <b className="font-bold">Where</b> is the odor (leak){" "}
          <b className="font-bold">coming from</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Outside",
          display: "Odor is outside",
          questionDisplay: "The odor is outside",
          continue: true,
        },
        {
          answer: "Inside",
          display: "Odor is inside",
          questionDisplay: "The odor is inside",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk where odor",
          questionDisplay: "It is unk where the odor is coming from",
          updateCode: "60B03",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Where <b className="font-bold">specifically</b>?
        </p>
      ),
      questionType: "select",
      preRenderLogic:
        "there is no confirmed leak, there is an odor of gas, and the odor is outside",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Gas line",
          display: "Coming frm gas line",
          questionDisplay: "The odor is coming from a gas line",
          continue: true,
          preRenderInstructions: (answers) => {
            const whereOdorComingFrom = answers?.find(
              (a) => a.question === "Where is the odor (leak) coming from?"
            )?.answer;
            return whereOdorComingFrom === "Outside";
          },
          preRenderLogic: "the odor is coming from outside",
          preRenderDependencies: ["answers"],
        },
        {
          answer: "Tank",
          display: "Coming frm tank",
          questionDisplay: "The odor is coming from a tank",
          continue: true,
          preRenderInstructions: (answers) => {
            const whereOdorComingFrom = answers?.find(
              (a) => a.question === "Where is the odor (leak) coming from?"
            )?.answer;
            return whereOdorComingFrom === "Outside";
          },
          preRenderLogic: "the odor is coming from outside",
          preRenderDependencies: ["answers"],
        },
        {
          answer: "Structure",
          display: "Coming frm structure",
          questionDisplay: "The odor is coming from a structure",
          continue: true,
          preRenderInstructions: (answers) => {
            const whereOdorComingFrom = answers?.find(
              (a) => a.question === "Where is the odor (leak) coming from?"
            )?.answer;
            return (
              whereOdorComingFrom === "Inside" ||
              whereOdorComingFrom === "Outside"
            );
          },
          preRenderLogic: "the odor is coming from inside or outside",
          preRenderDependencies: ["answers"],
        },
        {
          answer: "Other:",
          display: "Coming frm other: {input}",
          questionDisplay: "The odor is coming from other: {input}",
          updateCode: "60B03",
          continue: true,
          input: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk where odor coming frm",
          questionDisplay: "It is unk where the odor is coming from",
          updateCode: "60B03",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is it a <b className="font-bold">high-pressure</b> or{" "}
          <b className="font-bold">transmission/distribution pipeline</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const whereSpecific = answers?.find(
          (a) => a.question === "Where specifically?"
        )?.answer;
        return whereSpecific === "Gas line";
      },
      preRenderLogic: "the odor is coming from a gas line",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "High-pressure line",
          display: "High-pressure line",
          questionDisplay: "The odor is coming from a high-pressure line",
          updateCode: "60C05",
          continue: true,
          send: true,
        },
        {
          answer: "Transmission/distribution pipeline",
          display: "Transmission/distribution pipeline",
          questionDisplay:
            "The odor is coming from a transmission/distribution pipeline",
          updateCode: "60C04",
          continue: true,
          send: true,
        },
        {
          answer: "No",
          display: "Not high-pressure or pipeline",
          questionDisplay:
            "The odor is not coming from a high-pressure line or transmission/distribution pipeline",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if high-pressure or pipeline",
          questionDisplay:
            "It is unk if the odor is coming from a high-pressure line or transmission/distribution pipeline",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is it a <b className="font-bold">commercial</b> or{" "}
          <b className="font-bold">residential</b> line?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const whereSpecific = answers?.find(
          (a) => a.question === "Where specifically?"
        )?.answer;
        const highPressureOrPipeline = answers?.find(
          (a) =>
            a.question ===
            "Is it a high-pressure or transmission/distribution pipeline?"
        )?.answer;
        return (
          whereSpecific === "Gas line" &&
          (highPressureOrPipeline === "No" ||
            highPressureOrPipeline === "Unknown")
        );
      },
      preRenderLogic:
        "the odor is coming from a gas line that is not a high-pressure line or transmission/distribution pipeline",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Commercial line",
          display: "Commercial line",
          questionDisplay: "The odor is coming from a commercial line",
          updateCode: "60C02",
          continue: true,
          send: true,
        },
        {
          answer: "Residential line",
          display: "Residential line",
          questionDisplay: "The odor is coming from a residential line",
          updateCode: "60B01",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if commercial or residential line",
          questionDisplay:
            "It is unk if the odor is coming from a commercial or residential line",
          updateCode: "60B03",
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: (
        <p>
          What is the <b className="font-bold">size</b> of the{" "}
          <b className="font-bold">tank</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const whereSpecific = answers?.find(
          (a) => a.question === "Where specifically?"
        )?.answer;
        return whereSpecific === "Tank";
      },
      preRenderLogic: "the odor is coming from a tank",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Less than or equal to 5 gallons/20 liters:",
          display: "Tank <= 5 gal/20L: {input}",
          questionDisplay:
            "The tank is less than or equal to 5 gallons/20 liters",
          updateCode: "60B02",
          continue: true,
          send: true,
        },
        {
          answer: "Greater than 5 gallons/20 liters:",
          display: "Tank > 5 gal/20L: {input}",
          questionDisplay: "The tank is greater than 5 gallons/20 liters",
          updateCode: "60C03",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk tank size",
          questionDisplay: "It is unk what the size of the tank is",
          updateCode: "60B04",
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">type</b> of{" "}
          <b className="font-bold">structure</b> is involved?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const whereSpecific = answers?.find(
          (a) => a.question === "Where specifically?"
        )?.answer;
        return whereSpecific === "Structure";
      },
      preRenderLogic: "the odor is coming from a structure",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "HIGH LIFE RISK",
          display: "HIGH LIFE RISK bldg",
          questionDisplay: "The structure is a HIGH LIFE RISK building",
          updateCode: "60D01",
          continue: true,
          send: true,
        },
        {
          answer: "HIGH RISE",
          display: "HIGH RISE bldg",
          questionDisplay: "The structure is a HIGH RISE building",
          updateCode: "60D02",
          continue: true,
          send: true,
        },
        {
          answer: "Commercial/industrial building",
          display: "Commercial/industrial bldg",
          questionDisplay: "The structure is a commercial/industrial building",
          updateCode: "60D03",
          continue: true,
          send: true,
        },
        {
          answer: "Residential (multiple)",
          display: "Residential (multiple) bldg",
          questionDisplay: "The structure is a residential (multiple) building",
          updateCode: "60D04",
          continue: true,
          send: true,
        },
        {
          answer: "Residential (single)",
          display: "Residential (single) bldg",
          questionDisplay: "The structure is a residential (single) building",
          updateCode: "60C01",
          continue: true,
          send: true,
        },
        {
          answer: "Other:",
          display: "Other bldg: {input}",
          questionDisplay: "The structure is other: {input}",
          updateCode: "60B03",
          continue: true,
          input: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk bldg type",
          questionDisplay: "It is unk what type of structure is involved",
          updateCode: "60B04",
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: <p>Is anyone <b className="font-bold">sick</b> or <b className="font-bold">experiencing symptoms</b>? <span className="text-blue-400">(Nausea, dizziness, vomiting, etc.)</span></p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No sick persons rptd",
          questionDisplay: "No sick persons reported",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Sick persons rptd",
          questionDisplay: "Sick persons reported",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if sick persons",
          questionDisplay: "It is unk if there are sick persons",
          continue: true,
        }
      ]
    },

    {
      text: <p>How <b className="font-bold">many</b> people are <b className="font-bold">sick</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const sickOrExperiencingSymptoms = answers?.find(
          (a) => a.question === "Is anyone sick or experiencing symptoms? (Nausea, dizziness, vomiting, etc.)"
        )?.answer;
        return sickOrExperiencingSymptoms === "Yes";
      },
      preRenderLogic: "there are sick persons",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single sick person",
          questionDisplay: "There is a single sick person",
          updateSuffix: "V",
          continue: true,
          preRenderInstructions: (answers) => {
            const isOdorOfGas = answers?.find(
              (a) => a.question === "Is there an odor of gas?"
            )?.answer;
            return isOdorOfGas === "Yes";
          },
          preRenderLogic: "there is an odor of gas",
          preRenderDependencies: ["answers"],
        },
        {
          answer: "Single person",
          display: "Single sick person",
          questionDisplay: "There is a single sick person",
          updateSuffix: "X",
          continue: true,
          preRenderInstructions: (answers) => {
            const isOdorOfGas = answers?.find(
              (a) => a.question === "Is there an odor of gas?"
            )?.answer;
            return isOdorOfGas !== "Yes";
          },
          preRenderLogic: "there is no odor of gas",
          preRenderDependencies: ["answers"],
        },
        {
          answer: "Multiple people:",
          display: "{input} sick persons",
          questionDisplay: "There are multiple sick persons: {input}",
          updateSuffix: "W",
          continue: true,
          input: true,
          preRenderInstructions: (answers) => {
            const isOdorOfGas = answers?.find(
              (a) => a.question === "Is there an odor of gas?"
            )?.answer;
            return isOdorOfGas === "Yes";
          },
        },
        {
          answer: "Multiple people:",
          display: "{input} sick persons",
          questionDisplay: "There are multiple sick persons: {input}",
          updateSuffix: "Y",
          continue: true,
          input: true,
          preRenderInstructions: (answers) => {
            const isOdorOfGas = answers?.find(
              (a) => a.question === "Is there an odor of gas?"
            )?.answer;
            return isOdorOfGas !== "Yes";
          },
        },
        {
          answer: "Unknown",
          display: "Unk if single or mult sick persons",
          questionDisplay: "It is unk if there are single or multiple sick persons",
          updateCode: "60B04",
          continue: true,
        }
      ]
    }
  ],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "60B01",
          text: "Outside Residential Line",
          recResponse: 200,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 201,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 202,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 203,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 204,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 205,
            },
          ],
        },
        {
          code: "60B02",
          text: "Outside Tank <= 5 Gallons/20 Liters",
          recResponse: 206,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 201,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 202,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 203,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 207,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 208,
            },
          ],
        },
        {
          code: "60B03",
          text: "Outside Odor (Other/Unkn Source)",
          recResponse: 201,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 201,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 202,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 203,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 202,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 203,
            },
          ],
        },
        {
          code: "60B04",
          text: "Unkn Situation (Investigation)",
          recResponse: 209,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 209,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 210,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 211,
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
          code: "60C00",
          text: "Override (Charlie)",
          recResponse: 206,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 206,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 207,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 208,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 207,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 208,
            },
          ],
        },
        {
          code: "60C01",
          text: "Residential (Single)",
          recResponse: 212,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 212,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 214,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 214,
            },
          ],
        },
        {
          code: "60C02",
          text: "Outside Comm Line",
          recResponse: 200,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 200,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 204,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 205,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 204,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 205,
            },
          ],
        },
        {
          code: "60C03",
          text: "Outside Tank > 5 Gallons/20 Liters",
          recResponse: 212,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 212,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 214,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 214,
            },
          ],
        },
        {
          code: "60C04",
          text: "Transmission/Distribution (Main/Service) Pipeline",
          recResponse: 215,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 215,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 215,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 215,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 215,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 215,
            },
          ],
        },
        {
          code: "60C05",
          text: "High-Pressure Line",
          recResponse: 215,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 215,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 215,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 215,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 215,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 215,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "60D00",
          text: "Override (Delta)",
          recResponse: 215,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 215,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 215,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 215,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 215,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 215,
            },
          ],
        },
        {
          code: "60D01",
          text: "High Life Hazard",
          recResponse: 212,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 212,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 214,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 214,
            },
          ],
        },
        {
          code: "60D02",
          text: "High Rise",
          recResponse: 212,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 212,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 214,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 214,
            },
          ],
        },
        {
          code: "60D03",
          text: "Comm/Ind Building",
          recResponse: 212,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 212,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 214,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 214,
            },
          ],
        },
        {
          code: "60D04",
          text: "Residential (Mult)",
          recResponse: 212,
          subCodes: [
            {
              suffix: "O",
              text: "Odor Only",
              recResponse: 212,
            },
            {
              suffix: "V",
              text: "Odor w/ Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "W",
              text: "Odor w/ Mult Sick/Injured Persons",
              recResponse: 214,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 213,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 214,
            },
          ],
        },
      ],
    },
  ],
};
