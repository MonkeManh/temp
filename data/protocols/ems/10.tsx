import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const CHEST_PAIN: IEMSComplaint = {
  protocol: 10,
  name: "Chest Pain (Non-Traumatic)",
  shortName: "Chest Pain",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 49,
  defaultCode: "10A01",
  questions: [
    {
      text: (
        <p>
          Is **pronoun** <b>completely alert</b>{" "}
          <span className="text-red-400">(responding appropriately)</span>?
        </p>
      ),
      questionType: "select",
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
          display: "NOT responding nlly",
          questionDisplay:
            "**pronoun** is NOT completely alert (not responding appropriately)",
          updateCode: "10D01",
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
          Is **pronoun** <b className="font-bold">breathing</b> normally?
        </p>
      ),
      firstPersonText: (
        <p>
          <span className="text-blue-400">(If not obvious)</span> Are you
          breathing normally?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing normally",
          preRenderInstructions: (patient) => {
            const { patientAge: age, ageUnit: unit } = patient;
            return age >= 35 && unit === "year";
          },
          updateCode: "10C03",
          continue: true,
          send: true,
        },
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing normally",
          preRenderInstructions: (patient) => {
            const { patientAge: age } = patient;
            return age < 35;
          },
          continue: true,
        },
        {
          answer: "No",
          display: "NOT breathing nlly",
          questionDisplay: "**pronoun** is NOT breathing normally",
          updateCode: "10C01",
          continue: true,
          send: true,
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
          Is **pronoun** having difficulty{" "}
          <b className="font-bold">speaking between breaths</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          <span className="text-blue-400">(If not obvious)</span> Are you having
          difficulty speaking between breaths?
        </p>
      ),
      questionType: "select",
      defaultTab: "ai",
      additionalInstructions: <AI.DiffSpeakingBtwnBreaths />,
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].answer;
        return lastAnswer === "No"
      },
      preRenderLogic: "the patient is not breathing normally",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No diff speaking btwn breaths",
          questionDisplay:
            "**pronoun** is NOT having difficulty speaking between breaths",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Diff speaking btwn breaths",
          questionDisplay:
            "**pronoun** IS having difficulty speaking between breaths",
          updateCode: "10D02",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if diff speaking btwn breaths",
          questionDisplay:
            "Unk if **pronoun** is having difficulty speaking between breaths",
          continue: true,
        }
      ],
    },

    {
      text: <p>Is **pronoun** <b className="font-bold">changing color</b>?</p>,
      firstPersonText: (
        <p>Has your skin color <b className="font-bold">changed</b> recently? <span className="text-blue-400">(&lt; 6 hours)</span></p>
      ),
      questionType: "select",
      defaultTab: "ai",
      additionalInstructions: <AI.ChangingColor />,
      answers: [
        {
          answer: "No",
          display: "Not changing color",
          questionDisplay: "**pronoun** has NO change in skin color",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Changing color (< 6 hrs)",
          questionDisplay: "**pronoun** IS changing skin color (< 6 hrs)",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if changing color",
          questionDisplay: "Unk if **pronoun** is changing skin color",
          continue: true,
        }
      ]
    },

    {
      text: <p><b className="font-bold">Describe</b> the color change</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].answer;
        return lastAnswer === "Yes"
      },
      preRenderLogic: "the patient is changing color",
      preRenderDependencies: ["answers"],
      defaultTab: "ai",
      additionalInstructions: <AI.ChangingColor />,
      answers: [
        {
          answer: "Ashen",
          display: "Ashen color rptd",
          questionDisplay: "**pronoun** has ashen color",
          updateCode: "10D03",
          continue: true,
          send: true,
        },
        {
          answer: "Gray",
          display: "Gray color rptd",
          questionDisplay: "**pronoun** has gray color",
          updateCode: "10D03",
          continue: true,
          send: true,
        },
        {
          answer: "Blue",
          display: "Blue color rptd",
          questionDisplay: "**pronoun** has blue color",
          updateCode: "10D03",
          continue: true,
          send: true,
        },
        {
          answer: "Cyanotic",
          display: "Cyanotic color rptd",
          questionDisplay: "**pronoun** has cyanotic color",
          updateCode: "10D03",
          continue: true,
          send: true,
        },
        {
          answer: "Purple",
          display: "Purple color rptd",
          questionDisplay: "**pronoun** has purple color",
          updateCode: "10D03",
          continue: true,
          send: true,
        },
        {
          answer: "Mottled",
          display: "Mottled color rptd",
          questionDisplay: "**pronoun** has mottled color",
          updateCode: "10D03",
          continue: true,
          send: true,
        },
        {
          answer: "Pale",
          display: "Pale color rptd",
          questionDisplay: "**pronoun** has pale color",
          continue: true,
        },
        {
          answer: "Pink",
          display: "Pink color rptd",
          questionDisplay: "**pronoun** has pink color",
          continue: true,
        },
        {
          answer: "Red",
          display: "Red color rptd",
          questionDisplay: "**pronoun** has red color",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Color is {input}",
          questionDisplay: "**pronoun** has color of {input}",
          input: true,
          continue: true,
        },
      ],
    },

    {
      text: <p>Is **pronoun** <b className="font-bold">clammy</b> or having <b className="font-bold">cold sweats</b>?</p>,
      firstPersonText: (
        <p>Are you <b className="font-bold">clammy</b> or having <b className="font-bold">cold sweats</b>?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Not clammy",
          questionDisplay: "**pronoun** is NOT clammy and has NO cold sweats",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Clammy",
          questionDisplay: "**pronoun** IS clammy or has cold sweats",
          updateCode: "10D04",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if clammy",
          questionDisplay: "Unk if **pronoun** is clammy or has cold sweats",
          continue: true,
        }
      ]
    },

    {
      text: <p>Does **pronoun** have a <b className="font-bold">cardiac history</b>?</p>,
      firstPersonText: (
        <p>Do you have a <b className="font-bold">cardiac history</b>?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No cardiac hx",
          questionDisplay: "**pronoun** has NO cardiac history",
          continue: true,
        },
        {
          answer: "Yes - Heart Attack",
          display: "Cardiac hx: Heart Attack",
          questionDisplay: "**pronoun** has cardiac history of Heart Attack",
          updateCode: "10D05",
          continue: true,
          send: true,
        },
        {
          answer: "Yes - Angina",
          display: "Cardiac hx: Angina",
          questionDisplay: "**pronoun** has cardiac history of Angina",
          updateCode: "10D05",
          continue: true,
          send: true,
        },
        {
          answer: "Yes - Other:",
          display: "Cardiac hx: {input}",
          questionDisplay: "**pronoun** has cardiac history of {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if cardiac hx",
          questionDisplay: "Unk if **pronoun** has cardiac history",
          continue: true,
        },
      ]
    },

    {
      text: <p>Has **pronoun** taken any <b className="font-bold">drugs</b> or <b className="font-bold">medications</b> in the last <b className="font-bold">12 hours</b>?</p>,
      firstPersonText: (
        <p>Have you taken any <b className="font-bold">drugs</b> or <b className="font-bold">medications</b> in the last <b className="font-bold">12 hours</b>?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No drugs/meds (< 12 hrs)",
          questionDisplay: "**pronoun** has NOT taken drugs or medications in the last 12 hours",
          continue: true,
        },
        {
          answer: "Yes - Cocaine",
          display: "Cocaine (< 12 hrs)",
          questionDisplay: "**pronoun** has taken cocaine in the last 12 hours",
          updateCode: "10C02",
          continue: true,
          send: true,
        },
        {
          answer: "Yes - Prescription:",
          display: "Prescription drugs/meds: {input} (< 12 hrs)",
          questionDisplay: "**pronoun** has taken prescription {input} in the last 12 hours",
          input: true,
          continue: true,
        },
        {
          answer: "Yes - Other:",
          display: "Other drugs/meds: {input} (< 12 hrs)",
          questionDisplay: "**pronoun** has taken {input} in the last 12 hours",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if drugs/meds (< 12 hrs)",
          questionDisplay: "Unk if **pronoun** has taken drugs or medications in the last 12 hours",
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
          code: "10A01",
          text: "Breathing Normally (< 35)",
          recResponse: 49,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "10C00",
          text: "ALS Override (Charlie)",
          recResponse: 50,
        },
        {
          code: "10C01",
          text: "Abnormal Breathing",
          recResponse: 50,
        },
        {
          code: "10C02",
          text: "Cocaine",
          recResponse: 51,
        },
        {
          code: "10C03",
          text: "Breathing Normally (>= 35)",
          recResponse: 50,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "10D00",
          text: "ALS Override (Delta)",
          recResponse: 52,
        },
        {
          code: "10D01",
          text: "Not Alert",
          recResponse: 50,
        },
        {
          code: "10D02",
          text: "Diff Speaking Between Breaths",
          recResponse: 50,
        },
        {
          code: "10D03",
          text: "Changing Color",
          recResponse: 50,
        },
        {
          code: "10D04",
          text: "Clammy or Cold Sweats",
          recResponse: 50,
        },
        {
          code: "10D05",
          text: "Heart Attack or Angina Hx",
          recResponse: 50,
        },
      ],
    },
  ],
};
