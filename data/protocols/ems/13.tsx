import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const DIABETIC_PROBLEM: IEMSComplaint = {
  protocol: 13,
  name: "Diabetic Problems",
  shortName: "Diabetic Problem",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 62,
  defaultCode: "13A01",
  preSend: true,
  questions: [
    {
      text: (
        <p>
          Is **pronoun** <b className="font-bold">breathing normally</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Are you having any <b className="font-bold">difficulty breathing</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing normally",
          continue: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity !== "first";
          },
        },
        {
          answer: "No",
          display: "Not breathing nlly",
          questionDisplay: "**pronoun** is not breathing normally",
          updateCode: "13C03",
          continue: true,
          send: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity !== "first";
          },
        },
        {
          answer: "No",
          display: "No diff breathing",
          questionDisplay: "**pronoun** is not having difficulty breathing",
          continue: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity === "first";
          },
        },
        {
          answer: "Yes",
          display: "Diff breathing",
          questionDisplay: "**pronoun** is having difficulty breathing",
          updateCode: "13C03",
          continue: true,
          send: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity === "first";
          },
        },
        {
          answer: "Unknown",
          display: "Unk if breathing nlly",
          questionDisplay: "Unk if **pronoun** is breathing normally",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** <b>completely alert</b>{" "}
          <span className="text-red-400">(responding appropriately)</span>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        return patient.patientConsciousness !== "no";
      },
      preRenderLogic: "patient is not unconscious",
      preRenderDependencies: ["patient"],
      answers: [
        {
          answer: "Yes",
          display: "Responding nlly",
          questionDisplay:
            "**pronoun** is completely alert (responding appropriately)",
          continue: true,
        },
        {
          answer: "No",
          display: "Not responding nlly",
          questionDisplay:
            "**pronoun** is not completely alert (not responding appropriately)",
          updateCode: "13C01",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if responding nlly",
          questionDisplay:
            "Unk if **pronoun** is completely alert (responding appropriately)",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** <b className="font-bold">behaving normally</b>?
        </p>
      ),
      firstPersonText: (
        <p className="text-blue-400">
          Is the caller <b className="font-bold">behaving normally</b>
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        return (
          patient.patientConsciousness !== "no"
        );
      },
      preRenderLogic: "patient is not unconscious and not the caller",
      preRenderDependencies: ["patient", "proximity"],
      answers: [
        {
          answer: "Yes",
          display: "Behaving nlly",
          questionDisplay: "**pronoun** is behaving normally",
          preRenderInstructions: (_patient, answers) => {
            const lastAnswer = answers[answers.length - 1]?.answer;
            return lastAnswer !== "Yes";
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "Behaving nlly",
          questionDisplay: "**pronoun** is behaving normally",
          preRenderInstructions: (_patient, answers) => {
            const lastAnswer = answers[answers.length - 1]?.answer;
            return lastAnswer === "Yes";
          },
          updateCode: "13A01",
          continue: true,
        },
        {
          answer: "No",
          display: "Not behaving nlly",
          questionDisplay: "**pronoun** is not behaving normally",
          updateCode: "13C02",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if behaving nlly",
          questionDisplay: "Unk if **pronoun** is behaving normally",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-400">
          Is **pronoun** acting <b className="font-bold">aggressively</b> or{" "}
          <b className="font-bold">combative</b>?
        </p>
      ),
      firstPersonText: (
        <p className="text-blue-400">
          Is the caller acting{" "}
          <b className="font-bold text-red-400">aggressively</b> or{" "}
          <b className="font-bold text-red-400">is combative</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        return patient.patientConsciousness !== "no";
      },
      preRenderLogic: "patient is not unconscious",
      preRenderDependencies: ["patient"],
      answers: [
        {
          answer: "No",
          display: "Not aggressive/combative",
          questionDisplay: "**pronoun** is not aggressive or combative",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Aggressive/combative",
          questionDisplay: "**pronoun** is aggressive or combative",
          updateSuffix: "C",
          continue: true,
          setSceneSecure: false,
        },
        {
          answer: "Unknown",
          display: "Unk if aggressive/combative",
          questionDisplay: "Unk if **pronoun** is aggressive or combative",
          continue: true,
        },
      ],
    },

    {
      text: <p className="text-red-400">Does **pronoun** have or have access to <b className="font-bold">weapons</b>?</p>,
      firstPersonText: (
        <p className="text-red-400">Do you have any <b className="font-bold">weapons</b>?</p>
      ),
      questionType: "select",
      preRenderInstructions: (patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.answer;
        return patient.patientConsciousness !== "no" && lastAnswer === "Yes";
      },
      preRenderLogic: "patient is not unconscious and is aggressive/combative",
      preRenderDependencies: ["patient", "answers"],
      answers: [
        {
          answer: "No",
          display: "No wpns rptd or mentioned",
          questionDisplay: "**pronoun** does not have or have access to weapons",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Has/has access to wpns",
          questionDisplay: "**pronoun** has or has access to weapons",
          updateSuffix: "C",
          continue: true,
          setSceneSecure: false,
        },
        {
          answer: "Unknown",
          display: "Unk if has/has access to wpns",
          questionDisplay: "Unk if **pronoun** has or has access to weapons",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">What <b className="font-bold">type</b> of <b className="font-bold">weapon</b>?</p>,
      firstPersonText: (
        <p className="text-red-400">What <b className="font-bold">type</b> of <b className="font-bold">weapon</b>?</p>
      ),
      questionType: "select",
      preRenderInstructions: (patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.answer;
        return patient.patientConsciousness !== "no" && lastAnswer === "Yes";
      },
      preRenderLogic: "patient is not unconscious and has/has access to weapons",
      preRenderDependencies: ["patient", "answers"],
      answers: [
        {
          answer: "Firearm:",
          display: "Firearm: {input}",
          questionDisplay: "**pronoun** has or has access to a firearm: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Knife:",
          display: "Knife: {input}",
          questionDisplay: "**pronoun** has or has access to a knife: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Club:",
          display: "Club: {input}",
          questionDisplay: "**pronoun** has or has access to a club: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Explosive:",
          display: "Explosive: {input}",
          questionDisplay: "**pronoun** has or has access to an explosive: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Other:",
          display: "Other: {input}",
          questionDisplay: "**pronoun** has or has access to another type of weapon: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk type of wpn",
          questionDisplay: "Unk type of weapon **pronoun** has or has access to",
          continue: true,
        }
      ]
    }
  ],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "13A01",
          text: "Alert & Behaving Normally",
          recResponse: 62,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "13C00",
          text: "ALS Override (Charlie)",
          recResponse: 63,
          subCodes: [
            {
              suffix: "C",
              text: "Combative or Aggressive",
              recResponse: 64,
            },
          ],
        },
        {
          code: "13C01",
          text: "Not Alert",
          recResponse: 63,
          subCodes: [
            {
              suffix: "C",
              text: "Combative or Aggressive",
              recResponse: 64,
            },
          ],
        },
        {
          code: "13C02",
          text: "Abnormal Behavior",
          recResponse: 63,
          subCodes: [
            {
              suffix: "C",
              text: "Combative or Aggressive",
              recResponse: 64,
            },
          ],
        },
        {
          code: "13C03",
          text: "Abnormal Breathing",
          recResponse: 63,
          subCodes: [
            {
              suffix: "C",
              text: "Combative or Aggressive",
              recResponse: 64,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "13D00",
          text: "ALS Override (Delta)",
          recResponse: 63,
          subCodes: [
            {
              suffix: "C",
              text: "Combative or Aggressive",
              recResponse: 64,
            },
          ],
        },
        {
          code: "13D01",
          text: "Unconscious",
          notConscious: true,
          recResponse: 63,
          subCodes: [
            {
              suffix: "C",
              text: "Combative or Aggressive",
              recResponse: 64,
            },
          ],
        },
      ],
    },
  ],
};
