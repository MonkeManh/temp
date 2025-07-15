import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const TRAUMATIC_INJS: IEMSComplaint = {
  protocol: 30,
  name: "Traumatic Injuries (Specific)",
  shortName: "Traumatic Injuries",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 190,
  defaultCode: "30A02",
  preSend: true,
  questions: [
    {
      text: (
        <p>
          <span className="text-blue-400">(Not obvious)</span>{" "}
          <b className="font-bold">When</b> did this{" "}
          <b className="font-bold">happen</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Less than 6 hours ago",
          display: "Happened now (< 6hrs)",
          questionDisplay: "The problem happened less than 6 hours ago",
          continue: true,
        },
        {
          answer: "6 hours or more ago",
          display: "Happened earlier (>= 6hrs)",
          questionDisplay: "The problem happened 6 hours or more ago",
          updateCode: "30A03",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk when it happened",
          questionDisplay: "It is unknown when the problem happened",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is there any <b className="font-bold text-red-400">SERIOUS</b>{" "}
          <b className="font-bold">bleeding</b> (spurting or pouring)?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No SERIOUS bleeding",
          questionDisplay: "There is no serious bleeding",
          continue: true,
        },
        {
          answer: "Yes",
          display: "SERIOUS bleeding",
          questionDisplay: "There is serious bleeding",
          updateCode: "30B02",
          continue: true,
        },
        {
          answer: "Not bleeding now",
          display: "Not bleeding now",
          questionDisplay: "There is not bleeding now",
          continue: true,
        },
        {
          answer: "No bleeding at all",
          display: "No bleeding at all",
          questionDisplay: "There is no bleeding at all",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if bleeding",
          questionDisplay: "It is unknown if there is bleeding",
          continue: true,
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
          What <b className="font-bold">part</b> of the body is{" "}
          <b className="font-bold">injured</b>?
        </p>
      ),
      questionType: "select",
      defaultTab: "ai",
      additionalInstructions: <AI.BodyAreas />,
      answers: [
        {
          answer: "Chest",
          display: "Chest inj",
          questionDisplay: "**pronoun** has chest injury",
          continue: true,
        },
        {
          answer: "Head",
          display: "Head inj",
          questionDisplay: "**pronoun** has head injury",
          continue: true,
        },
        {
          answer: "Neck",
          display: "Neck inj",
          questionDisplay: "**pronoun** has neck injury",
          continue: true,
        },
        {
          answer: "POSSIBLY DANGEROUS body area",
          display: "Inj to POSSIBLY DANGEROUS body area",
          questionDisplay:
            "**pronoun** has POSSIBLY DANGEROUS body area injury",
          continue: true,
        },
        {
          answer: "NOT DANGEROUS body area",
          display: "Inj to NOT DANGEROUS body area",
          questionDisplay: "**pronoun** has NOT DANGEROUS body area injury",
          continue: true,
        },
        {
          answer: "HIGH VELOCITY impact or MASS injury",
          display: "High Velocity Impact/Mass Injury",
          questionDisplay:
            "**pronoun** has HIGH VELOCITY impact or MASS injury",
          updateCode: "30D05",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk injured body area",
          questionDisplay: "Unk what body area is injured",
          updateCode: "30B03",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** breathing <b className="font-bold">normally</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Are you having any <b className="font-bold">difficulty breathing</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient, answers) => {
        const bodyInj = answers.find(
          (a) => a.question === "What part of the body is injured?"
        )?.answer;
        return (
          (bodyInj === "Chest" || bodyInj === "Head" || bodyInj === "Neck") &&
          patient.patientBreathing !== "no" &&
          patient.patientBreathing !== "agonal/ineffective"
        );
      },
      preRenderLogic:
        "If chest, head, or neck injury AND breathing not no/agonal",
      preRenderDependencies: ["patient", "answers"],
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
          display: "NOT breathing nlly",
          questionDisplay: "**pronoun** is NOT breathing normally",
          updateCode: "30D04",
          continue: true,
          send: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity !== "first";
          },
        },
        {
          answer: "No",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing normally",
          continue: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity === "first";
          },
        },
        {
          answer: "Yes",
          display: "NOT breathing nlly",
          questionDisplay: "**pronoun** is NOT breathing normally",
          updateCode: "30D04",
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
          What <b className="font-bold">NOT DANGEROUS</b> body area is injured?
        </p>
      ),
      questionType: "select",
      additionalInstructions: <AI.BodyAreas />,
      defaultTab: "ai",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.answer;
        return lastAnswer === "NOT DANGEROUS body area";
      },
      preRenderDependencies: ["answers"],
      preRenderLogic: "NOT DANGEROUS body area was selected",
      answers: [
        {
          answer: "Ankle",
          display: "NOT DANG: Ankle",
          questionDisplay: "**pronoun** has injuries to the ankle",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Arm, upper*",
          display: "NOT DANG: Arm, upper",
          questionDisplay: "**pronoun** has injuries to the upper arm",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Collar bone (clavicle)",
          display: "NOT DANG: Collar bone (clavicle)",
          questionDisplay: "**pronoun** has injuries to the collar bone",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Elbow*",
          display: "NOT DANG: Elbow",
          questionDisplay: "**pronoun** has injuries to the elbow",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Finger",
          display: "NOT DANG: Finger",
          questionDisplay: "**pronoun** has injuries to the finger",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Foot",
          display: "NOT DANG: Foot",
          questionDisplay: "**pronoun** has injuries to the foot",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Forearm",
          display: "NOT DANG: Forearm",
          questionDisplay: "**pronoun** has injuries to the forearm",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Genitalia",
          display: "NOT DANG: Genitalia",
          questionDisplay: "**pronoun** has injuries to the genitalia",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Groin",
          display: "NOT DANG: Groin",
          questionDisplay: "**pronoun** has injuries to the groin",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Hand",
          display: "NOT DANG: Hand",
          questionDisplay: "**pronoun** has injuries to the hand",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Hip/Pelvis",
          display: "NOT DANG: Hip/Pelvis",
          questionDisplay: "**pronoun** has injuries to the hip or pelvis",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Knee*",
          display: "NOT DANG: Knee",
          questionDisplay: "**pronoun** has injuries to the knee",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Leg, lower",
          display: "NOT DANG: Leg, lower",
          questionDisplay: "**pronoun** has injuries to the lower leg",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Leg, upper (without deformity)",
          display: "NOT DANG: Leg, upper",
          questionDisplay: "**pronoun** has injuries to the upper leg",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Shoulder",
          display: "NOT DANG: Shoulder",
          questionDisplay: "**pronoun** has injuries to the shoulder",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Tailbone (coccyx)",
          display: "NOT DANG: Tailbone",
          questionDisplay: "**pronoun** has injuries to the tailbone",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Toe",
          display: "NOT DANG: Toe",
          questionDisplay: "**pronoun** has injuries to the toe",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "Wrist",
          display: "NOT DANG: Wrist",
          questionDisplay: "**pronoun** has injuries to the wrist",
          updateCode: "30A02",
          continue: true,
        },
        {
          answer: "None of these",
          display: "No NOT DANG body area ID'd",
          questionDisplay: "**pronoun** has no NOT DANG body area identified",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is there any <b className="font-bold">obvious deformity</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const targetAnswer = answers?.find(
          (a) => a.question === "What part of the body is injured?"
        )?.answer;
        const lastAnswer = answers[answers.length - 1]?.answer;
        return (
          targetAnswer === "NOT DANGEROUS body area" &&
          lastAnswer !== "None of these"
        );
      },
      preRenderLogic: "NOT DANGEROUS body area was selected",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No deformity",
          questionDisplay: "**pronoun** has no obvious deformity",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Obvious deformity",
          questionDisplay: "**pronoun** has an obvious deformity",
          dependency(_patient, answers) {
            const lastAnswer = answers[answers.length - 1]?.answer;
            if (lastAnswer === "Leg, upper") {
              return { code: "30B01" };
            }
            return { code: "30A01" };
          },
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if obvious deformity",
          questionDisplay: "Unk if **pronoun** has an obvious deformity",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">POSSIBLY DANGEROUS</b> body area is
          injured?
        </p>
      ),
      questionType: "select",
      additionalInstructions: <AI.BodyAreas />,
      defaultTab: "ai",
      preRenderInstructions: (_patient, answers) => {
        const bodyArea = answers.find(
          (a) => a.question === "What part of the body is injured?"
        )?.answer;
        const diffBreathing = answers.find(
          (a) => a.question === "Is **pronoun** breathing normally?"
        )?.answer;
        const lastAnswer = answers[answers.length - 1]?.answer;
        return (
          bodyArea === "POSSIBLY DANGEROUS body area" ||
          lastAnswer === "None of these" ||
          diffBreathing === "No"
        );
      },
      preRenderLogic: "POSSIBLY DANGEROUS body area was selected",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Abdomen",
          display: "POSSIBLY DANG: Abdomen",
          questionDisplay: "**pronoun** has injuries to the abdomen",
          updateCode: "30B01",
          continue: true,
        },
        {
          answer: "Amputation (excluding fingers/toes)",
          display: "POSSIBLY DANG: Amputation",
          questionDisplay:
            "**pronoun** has an amputation (excluding fingers/toes)",
          updateCode: "30B01",
          continue: true,
        },
        {
          answer: "Back",
          display: "POSSIBLY DANG: Back",
          questionDisplay: "**pronoun** has injuries to the back",
          updateCode: "30B01",
          continue: true,
        },
        {
          answer: "Chest (breathing nlly)",
          display: "POSSIBLY DANG: Chest",
          questionDisplay:
            "**pronoun** has injuries to the chest (breathing normally)",
          updateCode: "30B01",
        },
        {
          answer: "Head (alert)",
          display: "POSSIBLY DANG: Head",
          questionDisplay: "**pronoun** has injuries to the head (alert)",
          updateCode: "30B01",
          continue: true,
        },
        {
          answer: "Leg, upper (obvious deformity)",
          display: "POSSIBLY DANG: Leg, upper*",
          questionDisplay:
            "**pronoun** has injuries to the leg (upper, obvious deformity)",
          updateCode: "30B01",
          continue: true,
        },
        {
          answer: "Neck (breathing nlly)",
          display: "POSSIBLY DANG: Neck",
          questionDisplay:
            "**pronoun** has injuries to the neck (breathing normally)",
          updateCode: "30B01",
          continue: true,
        },
        {
          answer: "None of these",
          display: "No POSSIBLY DANG body area ID'd",
          questionDisplay:
            "**pronoun** has no POSSIBLY DANG body area identified",
          continue: true,
          updateCode: "30B03",
        },
      ],
    },

    {
      text: <p><span className="text-blue-400">(Amputation)</span> Have the <b className="font-bold">parts</b> been <b className="font-bold">found</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No amputation",
          display: "No special concerns",
          questionDisplay: "**pronoun** has no special concerns",
          continue: true,
        },
        {
          answer: "No parts found",
          display: "Parts NOT found",
          questionDisplay: "The amputated parts have NOT been found",
          continue: true,
        },
        {
          answer: "Yes, parts found",
          display: "Parts found",
          questionDisplay: "The amputated parts have been found",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if parts found",
          questionDisplay: "It is unknown if the amputated parts have been found",
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
          code: "30A01",
          text: "Not Dangerous Body Area w/ Deformity",
          recResponse: 190,
        },
        {
          code: "30A02",
          text: "Not Dangerous Body Area",
          recResponse: 190,
        },
        {
          code: "30A03",
          text: "Non-Recent (>= 6hrs) Injs (w/o Priority Symptoms)",
          recResponse: 191,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "30B00",
          text: "BLS Override (Bravo)",
          recResponse: 190,
        },
        {
          code: "30B01",
          text: "Possibly Dangerous Body Area",
          recResponse: 190,
        },
        {
          code: "30B02",
          text: "Serious Hemorrhage",
          recResponse: 190,
        },
        {
          code: "30B03",
          text: "Unkn Body Area (Remote Patient Location)",
          recResponse: 190,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "30D00",
          text: "ALS Override (Delta)",
          recResponse: 192,
        },
        {
          code: "30D01",
          text: "Arrest",
          recResponse: 158,
          notBreathing: true,
        },
        {
          code: "30D02",
          text: "Unconscious",
          recResponse: 193,
          notConscious: true,
        },
        {
          code: "30D03",
          text: "Not Alert",
          recResponse: 192,
        },
        {
          code: "30D04",
          text: "Chec/Neck/Head Inj (w/ Diff Breathing)",
          recResponse: 192,
        },
        {
          code: "30D05",
          text: "High Velocity Impact/Mass Inj",
          recResponse: 192,
        },
      ],
    },
  ],
};
