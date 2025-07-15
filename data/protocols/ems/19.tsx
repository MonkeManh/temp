import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const HEART_PROBLEMS: IEMSComplaint = {
  protocol: 19,
  name: "Heart Problems / A.I.C.D.",
  shortName: "Heart Prob/AICD",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 94,
  defaultCode: "19C07",
  questions: [
    {
      text: (
        <p>
          Is **pronoun** <b className="font-bold">completely alert</b>{" "}
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
          updateCode: "19D01",
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
      text: <p>Is **pronoun** breathing <b className="font-bold">normally</b>?</p>,
      firstPersonText: (
        <p>Are you having difficulty <b className="font-bold">breathing</b>?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing normally",
          continue: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity !== "first"
          }
        },
        {
          answer: "No",
          display: "NOT breathing nlly",
          questionDisplay: "**pronoun** is NOT breathing normally",
          updateCode: "19C02",
          continue: true,
          send: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity !== "first"
          }
        },
        {
          answer: "No",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing normally",
          continue: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity === "first"
          }
        },
        {
          answer: "Yes",
          display: "NOT breathing nlly",
          questionDisplay: "**pronoun** is NOT breathing normally",
          updateCode: "19C02",
          continue: true,
          send: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity === "first"
          }
        },
        {
          answer: "Unknown",
          display: "Unk if breathing nlly",
          questionDisplay: "Unk if **pronoun** is breathing normally",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is **pronoun** having difficulty speaking <b className="font-bold">between breaths</b>?</p>,
      firstPersonText: (
        <p><span className="text-blue-400">(If not obvious)</span> Are you having difficulty speaking <b className="font-bold">between breaths</b>?</p>
      ),
      questionType: "select",
      defaultTab: "ai",
      additionalInstructions: <AI.DiffSpeakingBtwnBreaths />,
      preRenderInstructions: (patient, answers) => {
        const lastAnswer = answers[answers.length - 1].answer;
        return (patient.patientProximity !== "first" && lastAnswer === "No") || (patient.patientProximity === "first" && lastAnswer === "Yes");
      },
      answers: [
        {
          answer: "No",
          display: "No diff speaking btwn breaths",
          questionDisplay: "**pronoun** has no difficulty speaking between breaths",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Diff speaking btwn breaths",
          questionDisplay: "**pronoun** has difficulty speaking between breaths",
          updateCode: "19D02",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if diff speaking btwn breaths",
          questionDisplay: "Unk if **pronoun** has difficulty speaking between breaths",
          continue: true,
        }
      ]
    },
    
    {
      text: <p>Is **pronoun** <b className="font-bold">changing color</b>?</p>,
      firstPersonText: (
        <p>Have you had a <b className="font-bold">recent</b> change in <b className="font-bold">skin color</b><span className="text-blue-400">(&lt; 6hrs)</span></p>
      ),
      questionType: "select",
      defaultTab: "ai",
      additionalInstructions: <AI.ChangingColor />,
      answers: [
        {
          answer: "No",
          display: "Not changing color",
          questionDisplay: "**pronoun** is not changing color",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Changing color",
          questionDisplay: "**pronoun** is changing color",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if changing color",
          questionDisplay: "Unk if **pronoun** is changing color",
          continue: true,
        }
      ]
    },

    {
      text: <p><b className="font-bold">Describe</b> the change</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].answer;
        return lastAnswer === "Yes";
      },
      preRenderLogic: "patient is changing color",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Ashen",
          display: "Ashen color rptd",
          questionDisplay: "**pronoun** has ashen color",
          updateCode: "19D03",
          continue: true,
          send: true,
        },
        {
          answer: "Gray",
          display: "Gray color rptd",
          questionDisplay: "**pronoun** has gray color",
          updateCode: "19D03",
          continue: true,
          send: true,
        },
        {
          answer: "Blue",
          display: "Blue color rptd",
          questionDisplay: "**pronoun** has blue color",
          updateCode: "19D03",
          continue: true,
          send: true,
        },
        {
          answer: "Cyanotic",
          display: "Cyanotic color rptd",
          questionDisplay: "**pronoun** has cyanotic color",
          updateCode: "19D03",
          continue: true,
          send: true,
        },
        {
          answer: "Purple",
          display: "Purple color rptd",
          questionDisplay: "**pronoun** has purple color",
          updateCode: "19D03",
          continue: true,
          send: true,
        },
        {
          answer: "Mottled",
          display: "Mottled color rptd",
          questionDisplay: "**pronoun** has mottled color",
          updateCode: "19D03",
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
      text: <p>Is **pronoun** <b className="font-bold">clammy</b> <span className="text-red-400">(cold sweats)</span>?</p>,
      firstPersonText: (
        <p>Are you <b className="font-bold">clammy</b> or having cold sweats?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Not clammy",
          questionDisplay: "**pronoun** is not clammy (no cold sweats)",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Clammy",
          questionDisplay: "**pronoun** is clammy (cold sweats)",
          updateCode: "19D04",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if clammy",
          questionDisplay: "Unk if **pronoun** is clammy (cold sweats)",
          continue: true,
        }
      ]
    },

    {
      text: <p>Does **pronoun** have any <b className="font-bold">chest pain</b>?</p>,
      firstPersonText: (
        <p>Do you have any <b className="font-bold">chest pain</b>?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No chest pain",
          questionDisplay: "**pronoun** does not have chest pain",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Has chest pain",
          questionDisplay: "**pronoun** has chest pain",
          continue: true,
          dependency(patient, answers) {
            const breathingNlly = answers.find((a) => a.question === "Is **pronoun** breathing normally?")?.answer;
            const isBreathingNlly = (breathingNlly === "Yes" && patient.patientProximity !== "first") || (breathingNlly === "No" && patient.patientProximity === "first");
            if(isBreathingNlly && patient.patientAge >= 35 && patient.ageUnit === "year") {
              return { code: "19C03", send: true }
            } else if(isBreathingNlly && ((patient.patientAge < 35 && patient.ageUnit === "year") || patient.ageUnit !== "year")) {
              return { code: "19A02" }
            }
          },
        },
        {
          answer: "Unknown",
          display: "Unk if chest pain",
          questionDisplay: "Unk if **pronoun** has chest pain",
          continue: true,
        }
      ]
    },

    {
      text: <p>Does **pronoun** have a <b className="font-bold">cardiac</b> history?</p>,
      firstPersonText: (
        <p>Do you have a <b className="font-bold">cardiac</b> history?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No cardiac hx",
          questionDisplay: "**pronoun** does not have a cardiac history",
          continue: true,
        },
        {
          answer: "Yes - AICD",
          display: "Cardiac hx - AICD",
          questionDisplay: "**pronoun** has a cardiac history - A.I.C.D.",
          updateCode: "19C04",
          continue: true,
          send: true,
        },
        {
          answer: "Yes - Other:",
          display: "Cardiac hx - {input}",
          questionDisplay: "**pronoun** has a cardiac history - {input}",
          updateCode: "19C04",  
          input: true,
          continue: true,
          send: true,
        }
      ]
    },

    {
      text: <p>Has the AICD fired (gone off) in the <b className="font-bold">last 30 minutes</b>?</p>,
      firstPersonText: (
        <p>Has your AICD fired (gone off) in the <b className="font-bold">last 30 minutes</b>?</p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].answer;
        return lastAnswer === "Yes - AICD";
      },
      preRenderLogic: "patient has cardiac hx - AICD",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "AICD not fired",
          questionDisplay: "**pronoun**'s AICD has not fired (not gone off) in the last 30 minutes",
          continue: true,
        },
        {
          answer: "Yes",
          display: "AICD fired",
          questionDisplay: "**pronoun**'s AICD has fired (gone off) in the last 30 minutes",
          updateCode: "19C01",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if AICD fired",
          questionDisplay: "Unk if **pronoun**'s AICD has fired (gone off) in the last 30 minutes",
          continue: true,
        }
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
          updateCode: "19C05",
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
    },

    {
      text: <p>Are you <b className="font-bold">able</b> to check <b className="font-bold">their pulse</b>?</p>,
      firstPersonText: (
        <p>Are you <b className="font-bold">able</b> to check <b className="font-bold">your pulse</b>?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "< 50bpm",
          display: "Pulse < 50bpm",
          questionDisplay: "**pronoun**'s pulse is less than 50 beats per minute",
          updateCode: "19C06",
        },
        {
          answer: "50-130bpm",
          display: "Pulse 50-130bpm",
          questionDisplay: "**pronoun**'s pulse is between 50 and 130 beats per minute",
          continue: true,
          updateCode: "19A01",
        },
        {
          answer: "> 130bpm",
          display: "Pulse > 130bpm",
          questionDisplay: "**pronoun**'s pulse is greater than 130 beats per minute",
          updateCode: "19C06",
        },
        {
          answer: "Unable",
          display: "Unable to check pulse",
          questionDisplay: "Unable to check **pronoun**'s pulse",
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
          code: "19A01",
          text: "Heart Reate >= 50bpm & < 130bpm (w/o Priority Symptoms)",
          recResponse: 94,
        },
        {
          code: "19A02",
          text: "Chest Pain/Discomfort (< 35) (w/o Priority Symptoms)",
          recResponse: 95,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "19C00",
          text: "ALS Override (Charlie)",
          recResponse: 96,
        },
        {
          code: "19C01",
          text: "Firing of A.I.C.D.",
          recResponse: 96,
        },
        {
          code: "19C02",
          text: "Abnormal Breathing",
          recResponse: 96,
        },
        {
          code: "19C03",
          text: "Chest Pain/Discomfort (>= 35)",
          recResponse: 97,
        },
        {
          code: "19C04",
          text: "Cardiac Hx",
          recResponse: 96,
        },
        {
          code: "19C05",
          text: "Cocaine",
          recResponse: 51,
        },
        {
          code: "19C06",
          text: "Heart Rate < 50bpm or >= 130bpm (w/o Priority Symptoms)",
          recResponse: 96,
        },
        {
          code: "19C07",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 96,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "19D00",
          text: "ALS Override (Delta)",
          recResponse: 98,
        },
        {
          code: "19D01",
          text: "Not Alert",
          recResponse: 96,
        },
        {
          code: "19D02",
          text: "Diff Speaking Between Breaths",
          recResponse: 96,
        },
        {
          code: "19D03",
          text: "Changing Color",
          recResponse: 96,
        },
        {
          code: "19D04",
          text: "Clammy or Cold Sweats",
          recResponse: 96,
        },
        {
          code: "19D05",
          text: "Just Resuscitated &/or Defibrillated (External)",
          recResponse: 98,
        },
      ],
    },
  ],
};
