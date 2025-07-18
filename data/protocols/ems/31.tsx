import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const UNCO_FAINTING: IEMSComplaint = {
  protocol: 31,
  name: "Unconscious / Fainting (Near)",
  shortName: "Unco/Fainting",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: 0 },
  ],
  defaultPriority: "A",
  defaultPlan: 194,
  defaultCode: "31A01",
  preSend: true,
  questions: [
    {
      text: (
        <p>
          Is **pronoun** breathing{" "}
          <b className="font-bold">completely normally</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Effective breathing confirmed",
          questionDisplay: "**pronoun** is breathing completely normally",
          continue: true,
        },
        {
          answer: "No",
          display: "Abnormal breathing",
          questionDisplay: "**pronoun** is NOT breathing completely normally",
          updateCode: "31D02",
          continue: true,
        },
        {
          answer: "Not Breathing/Obvious Arrest",
          display: "Not breathing/Obvious arrest",
          questionDisplay: "**pronoun** is NOT breathing or in obvious arrest",
          updateCode: "31E01",
          send: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk breathing status",
          questionDisplay: "Unk if **pronoun** is breathing normally",
          updateCode: "31D02",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** still <b className="font-bold">unconscious</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Still unconscious",
          questionDisplay: "**pronoun** is still unconscious",
          dependency: (patient, answers) => {
            if (
              patient.patientConsciousness === "no" &&
              (patient.patientBreathing === "no" ||
                patient.patientBreathing === "agonal/ineffective")
            )
              return { code: "31E01", send: true };
            const lastAnswer = answers[answers.length - 1].answer;
            if (lastAnswer === "Not Breathing/Obvious Arrest")
              return { code: "31E01", send: true };
            if (lastAnswer === "No") return { code: "31D02" };
            if (lastAnswer === "Yes") return { code: "31D03" };
            return { code: "31D02" };
          },
        },
        {
          answer: "No",
          display: "Now conscious",
          questionDisplay: "**pronoun** is now conscious",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk consciousness status",
          questionDisplay: "Unk if **pronoun** is conscious",
          continue: true,
          dependency: (patient, answers) => {
            if (
              patient.patientConsciousness === "no" &&
              (patient.patientBreathing === "no" ||
                patient.patientBreathing === "agonal/ineffective")
            )
              return { code: "31E01", send: true };
            const lastAnswer = answers[answers.length - 1].answer;
            if (lastAnswer === "Not Breathing/Obvious Arrest")
              return { code: "31E01", send: true };
            if (lastAnswer === "No") return { code: "31D02" };
            if (lastAnswer === "Yes") return { code: "31D03" };
            return { code: "31D02" };
          },
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** <b className="font-bold">completely alert</b>{" "}
          <span className="text-red-400">(responding appropriately)</span>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const isStillUnconscious = answers.find(
          (a) => a.questionDisplay === "**pronoun** is still unconscious"
        )?.answer;
        return isStillUnconscious !== "Yes";
      },
      preRenderLogic: "pt is now conscious",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Responding nlly",
          questionDisplay:
            "**pronoun** is completely alert (responding appropriately)",
          continue: true,
          dependency: (_patient, answers) => {
            const breathingAnswer = answers.find(
              (a) =>
                a.questionDisplay ===
                "**pronoun** is breathing completely normally"
            )?.answer;
            if(breathingAnswer === "No") {
              return { code: "31C01" }
            }
          }
        },
        {
          answer: "No",
          display: "NOT responding nlly",
          questionDisplay:
            "**pronoun** is NOT completely alert (not responding appropriately)",
          updateCode: "30D03",
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
          Is **pronoun** <b className="font-bold">changing color</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient, answers) => {
        const isStillUnconscious = answers.find(
          (a) => a.questionDisplay === "**pronoun** is still unconscious"
        )?.answer;
        return (
          isStillUnconscious !== "Yes" && patient.patientProximity !== "first"
        );
      },
      preRenderLogic: "Pt is now conscious and not caller",
      preRenderDependencies: ["answers", "proximity"],
      additionalInstructions: <AI.ChangingColor />,
      defaultTab: "ai",
      answers: [
        {
          answer: "Ashen",
          display: "Ashen color rptd",
          questionDisplay: "**pronoun** has ashen color",
          updateCode: "31D05",
          continue: true,
          send: true,
        },
        {
          answer: "Gray",
          display: "Gray color rptd",
          questionDisplay: "**pronoun** has gray color",
          updateCode: "31D05",
          continue: true,
          send: true,
        },
        {
          answer: "Blue",
          display: "Blue color rptd",
          questionDisplay: "**pronoun** has blue color",
          updateCode: "31D05",
          continue: true,
          send: true,
        },
        {
          answer: "Cyanotic",
          display: "Cyanotic color rptd",
          questionDisplay: "**pronoun** has cyanotic color",
          updateCode: "31D05",
          continue: true,
          send: true,
        },
        {
          answer: "Purple",
          display: "Purple color rptd",
          questionDisplay: "**pronoun** has purple color",
          updateCode: "31D05",
          continue: true,
          send: true,
        },
        {
          answer: "Mottled",
          display: "Mottled color rptd",
          questionDisplay: "**pronoun** has mottled color",
          updateCode: "31D05",
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
      text: <p>Does **pronoun** have a <b className="font-bold">history</b> of <b className="font-bold">heart problems</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const isStillUnconscious = answers.find(
          (a) => a.questionDisplay === "**pronoun** is still unconscious"
        )?.answer;
        return isStillUnconscious !== "Yes";
      },
      preRenderLogic: "pt is now conscious",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No cardiac hx",
          questionDisplay: "**pronoun** has no history of heart problems",
          continue: true,
          dependency: (patient, answers) => {
            const alertStatus = answers.find(
              (a) =>
                a.questionDisplay ===
                "**pronoun** is completely alert (responding appropriately)"
            )?.answer;
            if(alertStatus === "Yes" && patient.patientAge >= 35 && patient.ageUnit === "year") {
              return { code: "31A01" }
            } else if(alertStatus === "Yes" && (patient.patientAge < 35)) {
              return { code: "31A03" }
            }
          }
        },
        {
          answer: "Yes:",
          display: "Cardiac hx: {input}",
          questionDisplay: "**pronoun** has history of heart problems: {input}",
          continue: true,
          input: true,
          dependency: (patient, answers) => {
            const alertStatus = answers.find(
              (a) =>
                a.questionDisplay ===
                "**pronoun** is completely alert (responding appropriately)"
            )?.answer;
            if(alertStatus === "Yes" && patient.patientAge >= 35 && patient.ageUnit === "year") {
              return { code: "31C02" }
            } else if(alertStatus === "Yes" && (patient.patientAge < 35)) {
              return { code: "31A02" }
            }
          }
        },
        {
          answer: "Unknown",
          display: "Unk cardiac hx",
          questionDisplay: "Unk if **pronoun** has history of heart problems",
          continue: true,
        }
      ]
    },

    {
      text: <p>Does she have <b className="font-bold">abdominal</b> pain?</p>,
      questionType: "select",
      preRenderInstructions: (patient, answers) => {
        const isStillUnconscious = answers.find(
          (a) => a.questionDisplay === "**pronoun** is still unconscious"
        )?.answer;
        return isStillUnconscious !== "Yes" && patient.patientGender === "female" && patient.ageUnit === "year" && patient.patientAge >= 12 && patient.patientAge <= 50;
      },
      preRenderLogic: "pt is now conscious, is a female, and is 12-50 yrs old",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No abdo pn",
          questionDisplay: "**pronoun** has no abdominal pain",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Abdo pn",
          questionDisplay: "**pronoun** has abdominal pain",
          updateCode: "31C03",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk abdo pn",
          questionDisplay: "Unk if **pronoun** has abdominal pain",
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
          code: "31A01",
          text: "Fainting Episode(s) & Alert >= 35 (w/o Cardiac Hx)",
          recResponse: 194,
        },
        {
          code: "31A02",
          text: "Fainting Episode(s) & Alert < 35 (w/ Cardiac Hx)",
          recResponse: 194,
        },
        {
          code: "31A03",
          text: "Fainting Episode(s) & Alert < 35 (w/o Cardiac Hx)",
          recResponse: 194,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "31C00",
          text: "ALS Override (Charlie)",
          recResponse: 195,
        },
        {
          code: "31C01",
          text: "Alert & Abnormal Breathing",
          recResponse: 195,
        },
        {
          code: "31C02",
          text: "Fainting Episode(s) & Alert >= 35 (w/ Cardiac Hx)",
          recResponse: 195,
        },
        {
          code: "31C03",
          text: "Females 12-50 w/ Abdominal Pain",
          recResponse: 195,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "31D00",
          text: "ALS Override (Delta)",
          recResponse: 196,
        },
        {
          code: "31D01",
          text: "Unconscious - Agonal/Ineffective Breathing",
          recResponse: 197,
        },
        {
          code: "31D02",
          text: "Unconscious - Abnormal Breathing",
          recResponse: 196,
          uncertainBreathing: true,
        },
        {
          code: "31D03",
          text: "Unconscious - Effective Breathing Verified",
          recResponse: 195,
          notConscious: true,
        },
        {
          code: "31D04",
          text: "Not Alert",
          recResponse: 150,
        },
        {
          code: "31D05",
          text: "Changing Color",
          recResponse: 195,
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "31E00",
          text: "ALS Override (Echo)",
          recResponse: 198,
        },
        {
          code: "31E01",
          text: "Not Breathing/Obvious Arrest",
          notBreathing: true,
          recResponse: 198,
        },
      ],
    },
  ],
};
