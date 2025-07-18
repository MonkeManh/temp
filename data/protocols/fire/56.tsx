import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const ELEVATOR_ESCALATOR_INCIDENT: IFireComplaint = {
  protocol: 56,
  name: "Elevator / Escalator Incident",
  shortName: "Elevator/Escalator Incident",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: 3 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "O",
  defaultPlan: 156,
  defaultCode: "56B03",
  questions: [
    {
      text: (
        <p className="text-blue-400">
          Who is <b className="font-bold">reporting</b> the{" "}
          <b className="font-bold">incident</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "1st Party",
          display: "Caller is on scene (1st Party)",
          questionDisplay: "Caller is on scene (1st Party)",
          continue: true,
        },
        {
          answer: "2nd Party",
          display: "Caller is on scene (2nd Party)",
          questionDisplay: "Caller is on scene (2nd Party)",
          continue: true,
        },
        {
          answer: "On Scene (3rd Party)",
          display: "Caller is on scene (3rd Party)",
          questionDisplay: "Caller is on scene (3rd Party)",
          continue: true,
        },
        {
          answer: "Not on scene (3rd Party)",
          display: "Caller is NOT on scene (3rd Party)",
          questionDisplay: "Caller is NOT on scene (3rd Party)",
          continue: true,
        },
        {
          answer: "On scene (4th Party)",
          display: "Caller is on scene (4th Party)",
          questionDisplay: "Caller is on scene (4th Party)",
          continue: true,
        },
        {
          answer: "Not on scene (4th Party)",
          display: "Caller is NOT on scene (4th Party)",
          questionDisplay: "Caller is NOT on scene (4th Party)",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk type of caller",
          questionDisplay: "Unk type of caller",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-blue-400">
          Is this an <b className="font-bold">escalator</b> or{" "}
          <b className="font-bold">elevator</b> incident?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Elevator",
          display: "Elevator incident",
          questionDisplay: "This is an elevator incident",
          continue: true,
        },
        {
          answer: "Escalator",
          display: "Escalator incident",
          questionDisplay: "This is an escalator incident",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk type of incident",
          questionDisplay: "This is an unk type of incident",
          updateCode: "56B03",
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is anyone <b className="font-bold">trapped</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find(
          (a) => a.question === "Is this an escalator or elevator incident?"
        )?.answer;
        return incidentType === "Escalator";
      },
      preRenderLogic: "this is an escalator incident",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No one is trapped",
          questionDisplay: "No one is trapped",
          updateCode: "56O02",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Entrapment rptd",
          questionDisplay: "Entrapment reported",
          updateCode: "56B02",
          continue: true,
          preRenderInstructions: (answers) => {
            const callerType = answers?.find(
              (a) => a.question === "Who is reporting the incident?"
            )?.answer;
            return (
              callerType === "1st Party" ||
              callerType === "2nd Party" ||
              callerType === "On Scene (4th Party)"
            );
          },
        },
        {
          answer: "Yes",
          display: "Entrapment rptd",
          questionDisplay: "Entrapment reported",
          continue: true,
          preRenderInstructions: (answers) => {
            const callerType = answers?.find(
              (a) => a.question === "Who is reporting the incident?"
            )?.answer;
            return (
              callerType !== "1st Party" &&
              callerType !== "2nd Party" &&
              callerType !== "On Scene (4th Party)"
            );
          },
        },
        {
          answer: "Unknown",
          display: "Unk if anyone is trapped",
          questionDisplay: "Unk if anyone is trapped",
          updateCode: "56B03",
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: (
        <p>
          <b className="font-bold">How</b> can you{" "}
          <b className="font-bold">tell</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const callerType = answers?.find(
          (a) => a.question === "Who is reporting the incident?"
        )?.answer;
        const incidentType = answers?.find(
          (a) => a.question === "Is this an escalator or elevator incident?"
        )?.answer;
        const entrapment = answers?.find(
          (a) => a.question === "Is anyone trapped?"
        )?.answer;
        return (
          callerType !== "1st Party" &&
          callerType !== "2nd Party" &&
          callerType !== "On Scene (4th Party)" &&
          incidentType === "Escalator" &&
          entrapment === "Yes"
        );
      },
      preRenderLogic:
        "caller is not 1st, 2nd, or on scene 4th party AND this is an escalator incident AND entrapment reported",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Visual:",
          display: "Visual confirmation: {input}",
          questionDisplay: "Visual confirmation: {input}",
          updateCode: "56B02",
          continue: true,
          input: true,
        },
        {
          answer: "Audible:",
          display: "Audible confirmation: {input}",
          questionDisplay: "Audible confirmation: {input}",
          updateCode: "56B02",
          continue: true,
          input: true,
        },
        {
          answer: "Other:",
          display: "Other confirmation: {input}",
          questionDisplay: "Other confirmation: {input}",
          updateCode: "56B02",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk how they can tell",
          questionDisplay: "Unk how they can tell",
          updateCode: "56B03",
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: (
        <p className="text-blue-400">
          What type of <b className="font-bold">elevator incident</b> is this?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find(
          (a) => a.question === "Is this an escalator or elevator incident?"
        )?.answer;
        return incidentType === "Elevator";
      },
      preRenderLogic: "this is an elevator incident",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Malfunction",
          display: "Elevator malfunction",
          questionDisplay: "Elevator malfunction",
          continue: true,
        },
        {
          answer: "Alarm",
          display: "Elevator alarm",
          questionDisplay: "Elevator alarm",
          updateCode: "56A02",
          continue: true,
        },
        {
          answer: "ACCIDENT",
          display: "Elevator accident",
          questionDisplay: "Elevator accident",
          updateCode: "56D02",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk type of elevator incident",
          questionDisplay: "Unk type of elevator incident",
          updateCode: "56B03",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is/are there occupants <b className="font-bold">inside</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find(
          (a) => a.question === "Is this an escalator or elevator incident?"
        )?.answer;
        const elevatorIssue = answers?.find(
          (a) => a.question === "What type of elevator incident is this?"
        )?.answer;
        return incidentType === "Elevator" && elevatorIssue === "Malfunction";
      },
      preRenderLogic: "this is an elevator incident AND elevator malfunction",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No occupants rptd",
          questionDisplay: "No occupants reported",
          updateCode: "56O01",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Occupants rptd",
          questionDisplay: "Occupants reported",
          updateCode: "56A01",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if occupants inside",
          questionDisplay: "Unk if occupants inside",
          updateCode: "56B03",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is anyone <b className="font-bold">sick</b> or{" "}
          <b className="font-bold">injured</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find(
          (a) => a.question === "Is this an escalator or elevator incident?"
        )?.answer;
        const elevatorIssue = answers?.find(
          (a) => a.question === "What type of elevator incident is this?"
        )?.answer;
        const occupantsInside = answers?.find(
          (a) => a.question === "Is/are there occupants inside?"
        )?.answer;
        return (
          incidentType === "Elevator" &&
          elevatorIssue === "Malfunction" &&
          occupantsInside === "Yes"
        );
      },
      preRenderLogic:
        "this is an elevator incident AND elevator malfunction AND occupants reported",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No medical condition rptd",
          questionDisplay: "No medical condition reported",
          continue: true,
        },
        {
          answer: "Yes:",
          display: "Medical condition rptd: {input}",
          questionDisplay: "Medical condition reported: {input}",
          updateCode: "56B01",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk if medical condition",
          questionDisplay: "Unk if medical condition",
          updateCode: "56B01",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Are there any <b className="font-bold">obvious</b> injuries?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find(
          (a) => a.question === "Is this an escalator or elevator incident?"
        )?.answer;
        return incidentType === "Escalator";
      },
      preRenderLogic: "this is an escalator incident AND is trapped",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No obvious injuries",
          questionDisplay: "No obvious injuries",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Obvious injuries rptd",
          questionDisplay: "Obvious injuries reported",
          updateCode: "56D01",
          preRenderInstructions: (answers) => {
            const isTrapped = answers?.find(
              (a) => a.question === "Is anyone trapped?"
            )?.answer;
            return isTrapped === "Yes";
          },
          continue: true,
          send: true,
        },
        {
          answer: "Yes",
          display: "Obvious injuries rptd",
          questionDisplay: "Obvious injuries reported",
          preRenderInstructions: (answers) => {
            const isTrapped = answers?.find(
              (a) => a.question === "Is anyone trapped?"
            )?.answer;
            return isTrapped !== "Yes";
          },
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if obvious injuries",
          questionDisplay: "Unk if obvious injuries",
          updateCode: "56B03",
          continue: true,
        },
      ],
    },
  ],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "56O01",
          text: "Elevator Malfunction - No Occupants Inside",
          recResponse: 156,
        },
        {
          code: "56O02",
          text: "Escalator (Not Trapped) w/ or w/o Injs",
          recResponse: 156,
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "56A00",
          text: "Override (Alpha)",
          recResponse: 156,
        },
        {
          code: "56A01",
          text: "Elevator Malfunction - Occupants Inside",
          recResponse: 157,
        },
        {
          code: "56A02",
          text: "Elevator Alarm",
          recResponse: 158,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "56B00",
          text: "Override (Bravo)",
          recResponse: 159,
        },
        {
          code: "56B01",
          text: "Elevator Malfunction - Occupants Inside (Medical Condition Present)",
          recResponse: 159,
        },
        {
          code: "56B02",
          text: "Escalator Entrapment/Trapped w/o Injs",
          recResponse: 156,
        },
        {
          code: "56B03",
          text: "Unkn Situation (Investigation)",
          recResponse: 156,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "56D00",
          text: "Override (Delta)",
          recResponse: 160,
        },
        {
          code: "56D01",
          text: "Escalator Entrapment/Trapped w/ Injs",
          recResponse: 161,
        },
        {
          code: "56D02",
          text: "Elevator Accident",
          recResponse: 85,
        },
      ],
    },
  ],
};
