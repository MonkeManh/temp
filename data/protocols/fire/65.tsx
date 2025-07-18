import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const MUTUAL_AID: IFireComplaint = {
  protocol: 65,
  name: "Mutual Aid / Assist Outside Agency",
  shortName: "Mutual Aid",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 235,
  defaultCode: "65A01",
  questions: [
    {
      text: <p className="text-blue-400">What type of call is this?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Mutual aid to incident",
          display: "Aid to incident assignment",
          questionDisplay: "This is a mutual aid to incident call",
          continue: true,
        },
        {
          answer: "Assist outside agency",
          display: "Assist outside agency assignment",
          questionDisplay: "This is an assist outside agency call",
          continue: true,
        },
        {
          answer: "Mutual aid move-up/cover",
          display: "Move-up/cover assignment",
          questionDisplay: "This is a mutual aid move-up/cover call",
          updateCode: "65A05",
          continue: true,
        },
        {
          answer: "Mutual aid to staging area",
          display: "Staging area assignment",
          questionDisplay: "This is a mutual aid to staging area call",
          updateCode: "65A06",
          continue: true,
        },
        {
          answer: "Other (specify):",
          display: "Other mutual aid request: {input}",
          questionDisplay: "This is a mutual aid call: {input}",
          continue: true,
          input: true,
        },
      ],
    },

    // MA to incident
    {
      text: (
        <p>
          What is the <b className="font-bold">nature</b> of the{" "}
          <b className="font-bold">incident</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find(
          (a) => a.question === "What type of call is this?"
        )?.answer;
        return incidentType === "Mutual aid to incident";
      },
      preRenderLogic: "the call type is mutual aid to incident",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Reason (input):",
          display: "Incident nature: {input}",
          questionDisplay: "The nature of the incident is: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown/Not specified",
          display: "Unk nature of incident",
          questionDisplay: "No nature of incident was specified",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          How <b className="font-bold">many</b> units are needed?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find(
          (a) => a.question === "What type of call is this?"
        )?.answer;
        return incidentType === "Mutual aid to incident";
      },
      preRenderLogic: "the call type is mutual aid to incident",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single unit",
          display: "Single unit requested",
          questionDisplay: "A single unit is requested",
          continue: true,
        },
        {
          answer: "Multiple units (input number):",
          display: "Multiple units requested: {input}",
          questionDisplay: "Multiple units are requested: {input}",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Are they neeeded <b className="font-bold">hot</b> or{" "}
          <b className="font-bold">cold</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find(
          (a) => a.question === "What type of call is this?"
        )?.answer;
        return incidentType === "Mutual aid to incident";
      },
      preRenderLogic: "the call type is mutual aid to incident",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Cold",
          display: "Cold response",
          questionDisplay: "The units are needed cold",
          updateCode: "65A03",
          preRenderInstructions: (answers) => {
            const numUnits = answers?.find(
              (a) => a.question === "How many units are needed?"
            )?.answer;
            return numUnits === "Single unit";
          },
          preRenderLogic: "the number of units is single unit",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Cold",
          display: "Cold response",
          questionDisplay: "The units are needed cold",
          updateCode: "65A01",
          preRenderInstructions: (answers) => {
            const numUnits = answers?.find(
              (a) => a.question === "How many units are needed?"
            )?.answer;
            return numUnits === "Multiple units (input number):";
          },
          preRenderLogic: "the number of units is multiple units",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Hot",
          display: "Hot response",
          questionDisplay: "The units are needed hot",
          updateCode: "65B01",
          preRenderInstructions: (answers) => {
            const numUnits = answers?.find(
              (a) => a.question === "How many units are needed?"
            )?.answer;
            return numUnits === "Single unit";
          },
          preRenderLogic: "the number of units is single unit",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Hot",
          display: "Hot response",
          questionDisplay: "The units are needed hot",
          updateCode: "65D01",
          preRenderInstructions: (answers) => {
            const numUnits = answers?.find(
              (a) => a.question === "How many units are needed?"
            )?.answer;
            return numUnits === "Multiple units (input number):";
          },
          preRenderLogic: "the number of units is multiple units",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Unknown/Not specified",
          display: "No response type specified",
          questionDisplay: "No response type was specified",
          continue: true,
        },
      ],
    },

    // Assist outside agency
    {
      text: (
        <p>
          What is the <b className="font-bold">nature</b> of the{" "}
          <b className="font-bold">assist</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find(
          (a) => a.question === "What type of call is this?"
        )?.answer;
        return incidentType === "Assist outside agency";
      },
      preRenderLogic: "the call type is assist outside agency",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Reason (input):",
          display: "Assist nature: {input}",
          questionDisplay: "The nature of the assist is: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown/Not specified",
          display: "Unk nature of assist",
          questionDisplay: "No nature of assist was specified",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          How <b className="font-bold">many</b> units are needed?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find(
          (a) => a.question === "What type of call is this?"
        )?.answer;
        return incidentType === "Assist outside agency";
      },
      preRenderLogic: "the call type is assist outside agency",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single unit",
          display: "Single unit requested",
          questionDisplay: "A single unit is requested",
          continue: true,
        },
        {
          answer: "Multiple units (input number):",
          display: "Multiple units requested: {input}",
          questionDisplay: "Multiple units are requested: {input}",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Are they neeeded <b className="font-bold">hot</b> or{" "}
          <b className="font-bold">cold</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find(
          (a) => a.question === "What type of call is this?"
        )?.answer;
        return incidentType === "Assist outside agency";
      },
      preRenderLogic: "the call type is assist outside agency",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Cold",
          display: "Cold response",
          questionDisplay: "The units are needed cold",
          updateCode: "65A04",
          preRenderInstructions: (answers) => {
            const numUnits = answers?.find(
              (a) => a.question === "How many units are needed?"
            )?.answer;
            return numUnits === "Single unit";
          },
          preRenderLogic: "the number of units is single unit",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Cold",
          display: "Cold response",
          questionDisplay: "The units are needed cold",
          updateCode: "65A02",
          preRenderInstructions: (answers) => {
            const numUnits = answers?.find(
              (a) => a.question === "How many units are needed?"
            )?.answer;
            return numUnits === "Multiple units (input number):";
          },
          preRenderLogic: "the number of units is multiple units",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Hot",
          display: "Hot response",
          questionDisplay: "The units are needed hot",
          updateCode: "65B02",
          preRenderInstructions: (answers) => {
            const numUnits = answers?.find(
              (a) => a.question === "How many units are needed?"
            )?.answer;
            return numUnits === "Single unit";
          },
          preRenderLogic: "the number of units is single unit",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Hot",
          display: "Hot response",
          questionDisplay: "The units are needed hot",
          updateCode: "65D02",
          preRenderInstructions: (answers) => {
            const numUnits = answers?.find(
              (a) => a.question === "How many units are needed?"
            )?.answer;
            return numUnits === "Multiple units (input number):";
          },
          preRenderLogic: "the number of units is multiple units",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Unknown/Not specified",
          display: "No response type specified",
          questionDisplay: "No response type was specified",
          continue: true,
        }
      ],
    },

    {
      text: <p><b className="font-bold">Who</b> is <b className="font-bold">requesting</b> the response?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Los Santos county",
          display: "Los Santos county request",
          questionDisplay: "The request is from Los Santos county",
          continue: true,
        },
        {
          answer: "Blaine county",
          display: "Blaine county request",
          questionDisplay: "The request is from Blaine county",
          continue: true,
        },
        {
          answer: "Roxwood county",
          display: "Roxwood county request",
          questionDisplay: "The request is from Roxwood county",
          continue: true,
        },
        {
          answer: "San Andreas",
          display: "San Andreas request",
          questionDisplay: "The request is from San Andreas",
          continue: true,
        },
        {
          answer: "Other (input):",
          display: "Other requesting pty: {input}",
          questionDisplay: "The request is from: {input}",
          continue: true,
          input: true,
        },
      ]
    }
  ],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "65A00",
          text: "Override (Alpha)",
          recResponse: 235,
        },
        {
          code: "65A01",
          text: "Mutual Aid to Incident (Mult Units-Cold)",
          recResponse: 236,
        },
        {
          code: "65A02",
          text: "Assist Outside Agency (Mult Units-Cold)",
          recResponse: 236,
        },
        {
          code: "65A03",
          text: "Mutual Aid to Incident (Single Unit-Cold)",
          recResponse: 237,
        },
        {
          code: "65A04",
          text: "Assist Outside Agency (Single Unit-Cold)",
          recResponse: 237,
        },
        {
          code: "65A05",
          text: "Mutual Aid Move-Up/Cover (Station Assignment)",
          recResponse: 238,
        },
        {
          code: "65A06",
          text: "Mutual Aid to Staging Area",
          recResponse: 239,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "65B00",
          text: "Override (Bravo)",
          recResponse: 240,
        },
        {
          code: "65B01",
          text: "Mutual Aid to Incident (Single Unit-Hot)",
          recResponse: 241,
        },
        {
          code: "65B02",
          text: "Assist Outside Agency (Single Unit-Hot)",
          recResponse: 241,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "65D00",
          text: "Override (Delta)",
          recResponse: 242,
        },
        {
          code: "65D01",
          text: "Mutual Aid to Incident (Mult Units-Hot)",
          recResponse: 240,
        },
        {
          code: "65D02",
          text: "Assist Outside Agency (Mult Units-Hot)",
          recResponse: 240,
        },
      ],
    },
  ],
};
