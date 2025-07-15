import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const SEIZURES: IEMSComplaint = {
  protocol: 12,
  name: "Convulsions / Seizures",
  shortName: "Seizures",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 57,
  defaultCode: "12B00",
  preSend: true,
  questions: [
    {
      text: (
        <p>
          Has **pronoun** had <b className="font-bold">more than one</b> seizure
          in a row?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No multiple seizures",
          questionDisplay: "**pronoun** has not had multiple seizures",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Multiple seizures",
          questionDisplay: "**pronoun** has had multiple seizures",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if multiple seizures",
          questionDisplay:
            "It is unknown if **pronoun** has had multiple seizures",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Was **pronoun** <b className="font-bold">alert between</b> the{" "}
          <b className="font-bold">seizures</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const firstAnswer = answers[0]?.answer;
        return firstAnswer === "Yes";
      },
      preRenderLogic: "pt is having multiple seizures",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Alert between seizures",
          questionDisplay: "**pronoun** was alert between the seizures",
          continue: true,
          updateCode: "12C07",
        },
        {
          answer: "No",
          display: "Not alert between seizures",
          questionDisplay: "**pronoun** was not alert between the seizures",
          updateCode: "12D02",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if alert between seizures",
          questionDisplay:
            "It is unknown if **pronoun** was alert between the seizures",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is she <b className="font-bold">pregnant</b> or has she been{" "}
          <b className="font-bold">pregnant</b> in the{" "}
          <b className="font-bold">past 4 weeks</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Are you <b className="font-bold">pregnant</b> or have you been{" "}
          <b className="font-bold">pregnant</b> in the{" "}
          <b className="font-bold">past 4 weeks</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const {
          patientConsciousness: con,
          patientGender: gender,
          patientAge: age,
          ageUnit: unit,
          patientProximity: prox,
        } = patient;
        if (prox === "first" && con === "no") return false;
        if (gender !== "female") return false;
        if (unit === "years" && age >= 12 && age <= 50) return true;
        return false;
      },
      preRenderLogic:
        "pt is a female between 12 and 50. If pt is caller, they must be conscious",
      preRenderDependencies: ["patient", "proximity"],
      answers: [
        {
          answer: "No",
          display: "Not pregnant or postpartum (<= 4 weeks)",
          questionDisplay: "**pronoun** is not pregnant or postpartum",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Pregnant or postpartum (<= 4 weeks)",
          questionDisplay: "**pronoun** is pregnant or postpartum",
          updateCode: "12C02",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if pregnant or postpartum",
          questionDisplay:
            "It is unknown if **pronoun** is pregnant or postpartum",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** <b className="font-bold">diabetic</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Are you <b className="font-bold">diabetic</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientConsciousness: con, patientProximity: prox } = patient;
        if (prox === "first" && con === "no") return false;
        return true;
      },
      preRenderLogic: "pt is not unconscious if they are the caller",
      preRenderDependencies: ["patient", "proximity"],
      answers: [
        {
          answer: "No",
          display: "Not diabetic",
          questionDisplay: "**pronoun** is not diabetic",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Diabetic",
          questionDisplay: "**pronoun** is diabetic",
          updateCode: "12C03",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if diabetic",
          questionDisplay: "It is unknown if **pronoun** is diabetic",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** an <b className="font-bold">epileptic</b> (
          <b className="font-bold">diagnosed</b> with a seizure disorder)?
        </p>
      ),
      firstPersonText: (
        <p>
          Are you an <b className="font-bold">epileptic</b> (
          <b className="font-bold">diagnosed</b> with a seizure disorder)?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientConsciousness: con, patientProximity: prox } = patient;
        if (prox === "first" && con === "no") return false;
        return true;
      },
      preRenderLogic: "pt is not unconscious if they are the caller",
      preRenderDependencies: ["patient", "proximity"],
      answers: [
        {
          answer: "No",
          display: "Not epileptic",
          questionDisplay: "**pronoun** is not epileptic",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Epileptic or seizure disorder",
          questionDisplay: "**pronoun** is epileptic or has a seizure disorder",
          continue: true,
          updateCode: "E",
        },
        {
          answer: "Unknown",
          display: "Unk if epileptic or seizure disorder",
          questionDisplay:
            "It is unknown if **pronoun** is epileptic or has a seizure disorder",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have a <b className="font-bold">history</b> of{" "}
          <b className="font-bold">STROKE</b> or{" "}
          <b className="font-bold">brain tumor</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Do you have a <b className="font-bold">history</b> of{" "}
          <b className="font-bold">STROKE</b> or{" "}
          <b className="font-bold">brain tumor</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientConsciousness: con, patientProximity: prox } = patient;
        if (prox === "first" && con === "no") return false;
        return true;
      },
      preRenderLogic: "pt is not unconscious if they are the caller",
      preRenderDependencies: ["patient", "proximity"],
      answers: [
        {
          answer: "No",
          display: "No stroke or brain tumor hx",
          questionDisplay:
            "**pronoun** does not have a history of stroke or brain tumor",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Has stroke or brain tumor hx",
          questionDisplay: "**pronoun** has a history of stroke or brain tumor",
          updateCode: "12C05",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if stroke or brain tumor hx",
          questionDisplay:
            "It is unknown if **pronoun** has a history of stroke or brain tumor",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Has the jerking (twitching) <b className="font-bold">stopped</b> yet?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Seizure activity still happening",
          questionDisplay: "**pronoun** is still having seizure activity",
          updateCode: "12D02",
          continue: true,
          send: true,
        },
        {
          answer: "Yes",
          display: "Seizure activity has stopped",
          questionDisplay: "**pronoun**'s seizure activity has stopped",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if seizure activity has stopped",
          questionDisplay:
            "It is unknown if **pronoun**'s seizure activity has stopped",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Okay, is **pronoun** <b className="font-bold">breathing right now</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient, answers) => {
        const { patientProximity: prox } = patient;
        if (prox === "first") return false;
        const lastAnswer = answers[answers.length - 1]?.answer;
        return lastAnswer === "Yes";
      },
      preRenderLogic: "pt is not the caller and pt is no longer seizing",
      preRenderDependencies: ["patient", "proximity", "answers"],
      answers: [
        {
          answer: "Yes",
          display: "Breathing is confirmed",
          questionDisplay: "**pronoun** is breathing",
          updateCode: "12C04",
          continue: true,
          send: true,
          preRenderInstructions: (patient, answers) => {
            const seizureDisorderAnswer = answers.find(
              (a) =>
                a.questionDisplay ===
                "**pronoun** is epileptic or has a seizure disorder"
            )?.answer;
            return (
              seizureDisorderAnswer === "No" &&
              patient.patientAge > 6 &&
              patient.ageUnit === "years"
            );
          },
        },
        {
          answer: "Yes",
          display: "Breathing is confirmed",
          questionDisplay: "**pronoun** is breathing",
          updateCode: "12A01",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const seizureDisorderAnswer = answers.find(
              (a) =>
                a.questionDisplay ===
                "**pronoun** is epileptic or has a seizure disorder"
            )?.answer;
            return seizureDisorderAnswer === "Yes";
          },
        },
        {
          answer: "Yes",
          display: "Breathing is confirmed",
          questionDisplay: "**pronoun** is breathing",
          updateCode: "12A02",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const seizureDisorderAnswer = answers.find(
              (a) =>
                a.questionDisplay ===
                "**pronoun** is epileptic or has a seizure disorder"
            )?.answer;
            return seizureDisorderAnswer === "Unknown";
          },
        },
        {
          answer: "Yes",
          display: "Breathing is confirmed",
          questionDisplay: "**pronoun** is breathing",
          updateCode: "12A03",
          continue: true,
          preRenderInstructions: (patient, answers) => {
            const seizureDisorderAnswer = answers.find(
              (a) =>
                a.questionDisplay ===
                "**pronoun** is epileptic or has a seizure disorder"
            )?.answer;
            return (
              seizureDisorderAnswer === "No" &&
              ((patient.patientAge < 6 && patient.ageUnit === "years") ||
                patient.ageUnit === "months" ||
                patient.ageUnit === "days")
            );
          },
        },
        {
          answer: "No",
          display: "Not breathing",
          questionDisplay: "**pronoun** is not breathing",
          updateCode: "12D01",
          continue: true,
          send: true,
        },
        {
          answer: "Agonal/Ineffective",
          display: "Agonal/Ineffective breathing",
          questionDisplay:
            "**pronoun** is having agonal or ineffective breathing",
          updateCode: "12D03",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if breathing",
          questionDisplay: "It is unknown if **pronoun** is breathing",
          updateCode: "12D04",
          continue: true,
          send: true,
          preRenderInstructions: (patient) => {
            const { patientAge, ageUnit } = patient;
            if (ageUnit === "years" && patientAge >= 35) return true;
            return false;
          },
        },
        {
          answer: "Unknown",
          display: "Unk if breathing",
          questionDisplay: "It is unknown if **pronoun** is breathing",
          updateCode: "12B01",
          continue: true,
          preRenderInstructions: (patient) => {
            const { patientAge } = patient;
            if (patientAge < 35) return true;
            return false;
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
      preRenderInstructions: (_patient, answers) => {
        const isSeizureStillHappening = answers.find((a) => a.question === "Has the jerking (twitching) stopped yet?")?.answer === "Yes";
        return isSeizureStillHappening;
      },
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Responding nlly",
          questionDisplay:
            "**pronoun** is completely alert (responding appropriately)",
          updateCode: "12A04",
          continue: true,
        },
        {
          answer: "No",
          display: "NOT responding nlly",
          questionDisplay:
            "**pronoun** is NOT completely alert (not responding appropriately)",
          updateCode: "12C01",
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
  ],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "12A01",
          text: "Not Seizing Now & Effective Breathing Verified (Known Seizure Disorder)",
          recResponse: 57,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 57,
            },
          ],
        },
        {
          code: "12A02",
          text: "Not Seizing Now & Effective Breathing Verified (Seizure Disorder Unkn)",
          recResponse: 57,
        },
        {
          code: "12A03",
          text: "Not Seizing Now & Effective Breathing Verified (<= 6, Confirmed No Seizure Disorder)",
          recResponse: 57,
        },
        {
          code: "12A04",
          text: "Focal/Absence Seizure (Alert)",
          recResponse: 57,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 57,
            },
          ],
        },
        {
          code: "12A05",
          text: "Impending Seizure (Aura)",
          recResponse: 57,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 57,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "12B00",
          text: "BLS Override (Bravo)",
          recResponse: 57,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 57,
            },
          ],
        },
        {
          code: "12B01",
          text: "Effective Breathing Not Verified (< 35)",
          recResponse: 57,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 57,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "12C00",
          text: "ALS Override (Charlie)",
          recResponse: 58,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 58,
            },
          ],
        },
        {
          code: "12C01",
          text: "Focal/Absence Seizure (Not Alert)",
          recResponse: 58,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 58,
            },
          ],
        },
        {
          code: "12C02",
          text: "Pregnancy/POSTPARTUM eclampsia",
          recResponse: 58,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 58,
            },
          ],
        },
        {
          code: "12C03",
          text: "Diabetic",
          recResponse: 58,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 58,
            },
          ],
        },
        {
          code: "12C04",
          text: "Not Seizing Now & Effective Breathing Verified (> 6, Confirmed No Seizure Disorder)",
          recResponse: 57,
        },
        {
          code: "12C05",
          text: "Hx of Stroke or Brain Tumor",
          recResponse: 57,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 57,
            },
          ],
        },
        {
          code: "12C06",
          text: "Overdose/Poisoning (Ingestion)",
          recResponse: 59,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 59,
            },
          ],
        },
        {
          code: "12C07",
          text: "Aytpical Seizure",
          recResponse: 58,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 58,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "12D00",
          text: "ALS Override (Delta)",
          recResponse: 60,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 60,
            },
          ],
        },
        {
          code: "12D01",
          text: "Not Breathing (After Key Questioning)",
          recResponse: 61,
          notBreathing: true,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 61,
            },
          ],
        },
        {
          code: "12D02",
          text: "Continuous or Multiple Seizures",
          recResponse: 58,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 58,
            },
          ],
        },
        {
          code: "12D03",
          text: "Agonal/Ineffective Breathing",
          recResponse: 60,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 60,
            },
          ],
        },
        {
          code: "12D04",
          text: "Effective Breathing Not Verified (>= 35)",
          recResponse: 58,
          uncertainBreathing: true,
          subCodes: [
            {
              suffix: "E",
              text: "Epileptic or Previous Seizure Diagnosis",
              recResponse: 58,
            },
          ],
        },
      ],
    },
  ],
};
