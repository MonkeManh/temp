import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const FALLS: IEMSComplaint = {
  protocol: 17,
  name: "Falls",
  shortName: "Falls",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 79,
  defaultCode: "17B04",
  preSend: true,
  questions: [
    {
      text: (
        <p>
          <b className="font-bold">When</b> did **pronoun** fall?
        </p>
      ),
      firstPersonText: (
        <p>
          <b className="font-bold">When</b> did you fall?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Now (less than 6 hours ago)",
          display: "Fell now (< 6 hrs)",
          questionDisplay: "**pronoun** fell now (< 6 hrs ago)",
          continue: true,
        },
        {
          answer: "More than 6 hours ago",
          display: "Fell earlier (>= 6 hrs)",
          questionDisplay: "**pronoun** fell earlier (>= 6 hrs ago)",
          updateCode: "17A03",
        },
        {
          answer: "Unknown",
          display: "Unk when fell",
          questionDisplay: "Unk when **pronoun** fell",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          How <b className="font-bold">far</b> did **pronoun**{" "}
          <b className="font-bold">fall</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          How <b className="font-bold">far</b> did you{" "}
          <b className="font-bold">fall</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Ground level",
          display: "Fell at ground level",
          questionDisplay: "**pronoun** fell at ground level",
          continue: true,
        },
        {
          answer: "< 10ft/3m (1 story)",
          display: "Fell < 10ft/3m (1 story)",
          questionDisplay: "**pronoun** fell < 10ft/3m (1 story)",
          continue: true,
        },
        {
          answer: "Fell down (not on) stairs",
          display: "Fell down (not on) stairs",
          questionDisplay: "**pronoun** fell down (not on) stairs",
          continue: true,
          updateCode: "17B03",
        },
        {
          answer: "Fell on (not down) stairs",
          display: "Fell on (not down) stairs",
          questionDisplay: "**pronoun** fell on (not down) stairs",
          continue: true,
        },
        {
          answer: "LONG FALL - 10-29ft (3-9m)",
          display: "Fell 10-29ft (3-9m)",
          questionDisplay: "**pronoun** fell 10-29ft (3-9m)",
          updateCode: "17D06",
          continue: true,
          send: true,
        },
        {
          answer: "EXTREME FALL - >= 30ft (>= 10m)",
          display: "Fell >= 30ft (>= 10m)",
          questionDisplay: "**pronoun** fell >= 30ft (>= 10m)",
          updateCode: "17D01",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk how far fell",
          questionDisplay: "Unk how far **pronoun** fell",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is there any <b className="font-bold text-red-400">SERIOUS</b>{" "}
          bleeding?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No SERIOUS bleeding",
          questionDisplay: "**pronoun** has NO SERIOUS bleeding",
          continue: true,
        },
        {
          answer: "Yes",
          display: "SERIOUS bleeding",
          questionDisplay: "**pronoun** has SERIOUS bleeding",
          updateCode: "17B02",
          continue: true,
        },
        {
          answer: "No bleeding",
          display: "No bleeding",
          questionDisplay: "**pronoun** is NOT bleeding",
          continue: true,
        },
        {
          answer: "Not bleeding now",
          display: "Not bleeding now",
          questionDisplay: "**pronoun** is NOT bleeding now",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if SERIOUS bleeding",
          questionDisplay: "Unk if **pronoun** is bleeding",
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
          updateCode: "17D04",
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
          answer: "No injury",
          display: "No injury rptd",
          questionDisplay: "**pronoun** has NO injury",
          updateCode: "17A04",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk injured body area",
          questionDisplay: "Unk what body area is injured",
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
          updateCode: "17D05",
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
          updateCode: "17D05",
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
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Arm, upper*",
          display: "NOT DANG: Arm, upper",
          questionDisplay: "**pronoun** has injuries to the upper arm",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Collar bone (clavicle)",
          display: "NOT DANG: Collar bone (clavicle)",
          questionDisplay: "**pronoun** has injuries to the collar bone",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Elbow*",
          display: "NOT DANG: Elbow",
          questionDisplay: "**pronoun** has injuries to the elbow",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Finger",
          display: "NOT DANG: Finger",
          questionDisplay: "**pronoun** has injuries to the finger",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Foot",
          display: "NOT DANG: Foot",
          questionDisplay: "**pronoun** has injuries to the foot",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Forearm",
          display: "NOT DANG: Forearm",
          questionDisplay: "**pronoun** has injuries to the forearm",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Genitalia",
          display: "NOT DANG: Genitalia",
          questionDisplay: "**pronoun** has injuries to the genitalia",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Groin",
          display: "NOT DANG: Groin",
          questionDisplay: "**pronoun** has injuries to the groin",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Hand",
          display: "NOT DANG: Hand",
          questionDisplay: "**pronoun** has injuries to the hand",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Hip/Pelvis",
          display: "NOT DANG: Hip/Pelvis",
          questionDisplay: "**pronoun** has injuries to the hip or pelvis",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Knee*",
          display: "NOT DANG: Knee",
          questionDisplay: "**pronoun** has injuries to the knee",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Leg, lower",
          display: "NOT DANG: Leg, lower",
          questionDisplay: "**pronoun** has injuries to the lower leg",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Leg, upper (without deformity)",
          display: "NOT DANG: Leg, upper",
          questionDisplay: "**pronoun** has injuries to the upper leg",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Shoulder",
          display: "NOT DANG: Shoulder",
          questionDisplay: "**pronoun** has injuries to the shoulder",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Tailbone (coccyx)",
          display: "NOT DANG: Tailbone",
          questionDisplay: "**pronoun** has injuries to the tailbone",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Toe",
          display: "NOT DANG: Toe",
          questionDisplay: "**pronoun** has injuries to the toe",
          updateCode: "17A02",
          continue: true,
        },
        {
          answer: "Wrist",
          display: "NOT DANG: Wrist",
          questionDisplay: "**pronoun** has injuries to the wrist",
          updateCode: "17A02",
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
              return { code: "17B01" };
            }
            return { code: "17A01" };
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
        const bodyArea = answers.find((a) => a.question === "What part of the body is injured?")?.answer;
        const diffBreathing = answers.find((a) => a.question === "Is **pronoun** breathing normally?")?.answer;
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
          updateCode: "04B01",
          continue: true,
        },
        {
          answer: "Amputation (excluding fingers/toes)",
          display: "POSSIBLY DANG: Amputation",
          questionDisplay:
            "**pronoun** has an amputation (excluding fingers/toes)",
          updateCode: "04B01",
          continue: true,
        },
        {
          answer: "Back",
          display: "POSSIBLY DANG: Back",
          questionDisplay: "**pronoun** has injuries to the back",
          updateCode: "04B01",
          continue: true,
        },
        {
          answer: "Chest (breathing nlly)",
          display: "POSSIBLY DANG: Chest",
          questionDisplay:
            "**pronoun** has injuries to the chest (breathing normally)",
          updateCode: "04B01",
        },
        {
          answer: "Head (alert)",
          display: "POSSIBLY DANG: Head",
          questionDisplay: "**pronoun** has injuries to the head (alert)",
          updateCode: "04B01",
          continue: true,
        },
        {
          answer: "Leg, upper (obvious deformity)",
          display: "POSSIBLY DANG: Leg, upper*",
          questionDisplay:
            "**pronoun** has injuries to the leg (upper, obvious deformity)",
          updateCode: "04B01",
          continue: true,
        },
        {
          answer: "Neck (breathing nlly)",
          display: "POSSIBLY DANG: Neck",
          questionDisplay:
            "**pronoun** has injuries to the neck (breathing normally)",
          updateCode: "04B01",
          continue: true,
        },
        {
          answer: "None of these",
          display: "No POSSIBLY DANG body area ID'd",
          questionDisplay:
            "**pronoun** has no POSSIBLY DANG body area identified",
          continue: true,
          updateCode: "17B04"
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">caused</b> the fall?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Accidental",
          display: "Fall was accidental",
          questionDisplay: "**pronoun** fell accidentally",
          continue: true,
        },
        {
          answer: "Dizziness",
          display: "Fall caused by dizziness",
          questionDisplay: "**pronoun**'s fall was caused by dizziness",
          dependency: (_patient, answers) => {
            const bodyInj = answers.find(
              (a) => a.question === "What part of the body is injured?"
            )?.answer;
            if (bodyInj === "No injury") return { gotoProtocol: 31 };
          },
        },
        {
          answer: "Fainting",
          display: "Fall caused by fainting",
          questionDisplay: "**pronoun**'s fall was caused by fainting",
          dependency: (_patient, answers) => {
            const bodyInj = answers.find(
              (a) => a.question === "What part of the body is injured?"
            )?.answer;
            if (bodyInj === "No injury") return { gotoProtocol: 31 };
          },
        },
        {
          answer: "Electrocution",
          display: "Fall caused by electrocution",
          questionDisplay: "**pronoun**'s fall was caused by electrocution",
          gotoProtocol: 15,
        },
        {
          answer: "Jumped/Intentional",
          display: "Fall was intentional",
          questionDisplay: "**pronoun** fell intentionally",
          updateSuffix: "J",
          continue: true,
          setSceneSecure: false
        },
        {
          answer: "Other:",
          display: "Other cause: {input}",
          questionDisplay: "**pronoun**'s fall was caused by: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk cause",
          questionDisplay: "Unk how **pronoun**'s fall occurred",
          continue: true,
        },
      ],
    },

    {
      text: <p>Is **pronoun** still on the <b className="font-bold">ground</b> or <b className="font-bold">floor</b>?</p>,
      firstPersonText: (
        <p>Are you still on the <b className="font-bold">ground</b> or <b className="font-bold">floor</b>?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No longer on grd/floor",
          questionDisplay: "**pronoun** is NO longer on the ground or floor",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Still on grd/floor",
          questionDisplay: "**pronoun** is STILL on the ground or floor",
          updateSuffix: "G",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if on grd/floor",
          questionDisplay: "Unk if **pronoun** is on the ground or floor",
          continue: true,
        }
      ]
    },

    {
      text: <p>Will we be able to <b className="font-bold">easily access</b> the patient?</p>,
      firstPersonText: (
        <p>Will you be able to <b className="font-bold">easily access</b> you?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "No special concerns",
          questionDisplay: "No special access concerns",
          continue: true,
        },
        {
          answer: "No",
          display: "Accessibility concerns/difficulty",
          questionDisplay: "There are accessibility concerns/difficulty",
          updateSuffix: "A",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if access concerns",
          questionDisplay: "Unk if there are accessibility concerns",
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
          code: "17A01",
          text: "Not Dangerous Body Area w/ Deformity",
          recResponse: 79,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
        {
          code: "17A02",
          text: "Not Dangerous Body Area",
          recResponse: 79,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
        {
          code: "17A03",
          text: "Non-Recent (>= 6hrs) Injs (w/o priority symptoms)",
          recResponse: 81,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
        {
          code: "17A04",
          text: "Public Assist (No Injs & No Priority Symptoms)",
          recResponse: 82,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 82,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 82,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 82,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 82,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 82,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "17B00",
          text: "BLS Override (Bravo)",
          recResponse: 79,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
        {
          code: "17B01",
          text: "Possibly Dangerous Body Area",
          recResponse: 79,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
        {
          code: "17B02",
          text: "Serious Hemorrhage",
          recResponse: 79,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
        {
          code: "17B03",
          text: "Down Stairs",
          recResponse: 79,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
        {
          code: "17B04",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 79,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 79,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 79,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 79,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 80,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 79,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "17D00",
          text: "ALS Override (Delta)",
          recResponse: 83,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 83,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 83,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 83,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 84,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 83,
            },
          ],
        },
        {
          code: "17D01",
          text: "Extreme Fall (>= 30ft/10m)",
          recResponse: 85,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 85,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 85,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 85,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 86,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 85,
            },
          ],
        },
        {
          code: "17D02",
          text: "Arrest",
          recResponse: 87,
          notBreathing: true,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 87,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 87,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 87,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 87,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 87,
            },
          ],
        },
        {
          code: "17D03",
          text: "Unconscious",
          recResponse: 85,
          notConscious: true,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 85,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 85,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 85,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 86,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 85,
            },
          ],
        },
        {
          code: "17D04",
          text: "Not Alert",
          recResponse: 83,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 83,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 83,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 83,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 84,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 83,
            },
          ],
        },
        {
          code: "17D05",
          text: "Chest/Neck/Head Inj (w/ Diff Breathing)",
          recResponse: 83,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 83,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 83,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 83,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 84,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 83,
            },
          ],
        },
        {
          code: "17D06",
          text: "Long Fall",
          recResponse: 83,
          subCodes: [
            {
              suffix: "A",
              text: "Accessibility Concerns/Difficulty",
              recResponse: 83,
            },
            {
              suffix: "E",
              text: "Environmental Problems (Rain, Heat, Cold)",
              recResponse: 83,
            },
            {
              suffix: "G",
              text: "On the Ground or Floor",
              recResponse: 83,
            },
            {
              suffix: "J",
              text: "Jumper (Suicide Attempt)",
              recResponse: 84,
            },
            {
              suffix: "P",
              text: "Public Place (Street, Parking Garage, Market)",
              recResponse: 83,
            },
          ],
        },
      ],
    },
  ],
};
