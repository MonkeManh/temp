import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const ANIMAL_BITE: IEMSComplaint = {
  protocol: 3,
  name: "Animal Bites/Attacks",
  shortName: "Animal Bite",
  description: (
    <>
      <p>
        Animal bites can range from minor punctures to life-threatening trauma—
        it’s essential to identify{" "}
        <span className="text-red-500 font-semibold">attack severity</span> and
        <span className="text-red-500 font-semibold"> scene safety</span> early.
        Immediate danger (e.g., attack still in progress) must prompt a
        high-level response and consideration for{" "}
        <span className="text-yellow-400 font-semibold">law enforcement</span>{" "}
        dispatch.
      </p>

      <p className="mt-2">
        Focus on the <span className="font-medium">type of animal</span> and the
        <span className="font-medium"> area of the body affected</span>.
        Injuries to the
        <span className="text-red-400 font-semibold">
          {" "}
          head, neck, or chest
        </span>{" "}
        carry heightened risk of airway compromise, bleeding, or neurological
        involvement. Large or exotic animals also present a greater likelihood
        of deep trauma or envenomation.
      </p>

      <p className="mt-2">Look for these **red flags** during questioning:</p>

      <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
        <li>
          <span className="text-red-500 font-semibold">Ongoing attack</span> or
          unknown animal location → scene may still be unsafe
        </li>
        <li>
          <span className="text-red-500 font-semibold">
            Bites to the airway
          </span>{" "}
          or face/chest → high risk of compromised breathing
        </li>
        <li>
          <span className="text-red-500 font-semibold">
            Multiple animals or mauling
          </span>{" "}
          → assume high trauma burden
        </li>
        <li>
          <span className="text-red-500 font-semibold">
            Unconscious or not alert
          </span>{" "}
          → immediate ALS-level concern
        </li>
        <li>
          <span className="text-red-500 font-semibold">Serious bleeding</span> →
          treat as time-sensitive hemorrhage
        </li>
      </ul>

      <p className="mt-2">
        Document the <span className="font-medium">time of incident</span> and
        <span className="font-medium"> whether the wound is recent</span>. Bites
        older than 6 hours without complications may be less urgent but still
        need evaluation for
        <span className="text-yellow-400 font-semibold">
          {" "}
          rabies exposure
        </span>{" "}
        or infection.
      </p>
    </>
  ),
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: 3 },
  ],
  defaultPriority: "A",
  defaultPlan: 9,
  defaultCode: "03A03",
  preSend: true,
  questions: [
    {
      text: (
        <p>
          <span className="text-blue-400">(If not obvious)</span> Is the{" "}
          <b className="font-bold">
            attack <span className="text-red-400">currently happening</span>
          </b>
          ?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Attack not in prog",
          questionDisplay: "**pronoun** is not currently being attacked",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Attack in prog",
          questionDisplay: "**pronoun** is currently being attacked",
          updateCode: "03D09",
          send: true,
          continue: true,
          setSceneSecure: false,
        },
        {
          answer: "Unknown",
          display: "Unk if attack in prog",
          questionDisplay: "Unk if **pronoun** is currently being attacked",
          continue: true,
          updateCode: "03B03",
        },
      ],
    },

    {
      text: (
        <p>
          <b className="font-bold">When</b> did the{" "}
          <b className="font-bold">attack/incident</b> occur?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const firstAnswer = answers[0]?.answer;
        return firstAnswer !== "Yes";
      },
      preRenderLogic: "Attack not in progress",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Less than 6 hours ago",
          display: "Happened now (< 6 hours ago)",
          questionDisplay: "**pronoun** was attacked now (< 6 hours ago)",
          continue: true,
        },
        {
          answer: "More than 6 hours ago",
          display: "Happened earlier (> 6 hours ago)",
          questionDisplay: "**pronoun** was attacked earlier (> 6 hours ago)",
          continue: true,
          updateCode: "03A02",
        },
        {
          answer: "Unknown",
          display: "Unk when attack happened",
          questionDisplay: "Unk when **pronoun** was attacked",
          continue: true,
          updateCode: "03B03",
        },
      ],
    },

    {
      text: (
        <p>
          <b className="font-bold">Were</b> there{" "}
          <b className="font-bold">multiple animals</b> involved?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Single animal involved",
          questionDisplay: "**pronoun** was attacked by a single animal",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Multiple animals involved",
          questionDisplay: "**pronoun** was attacked by multiple animals",
          updateCode: "03D08",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if multiple animals involved",
          questionDisplay:
            "Unk if **pronoun** was attacked by multiple animals",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">type</b> of{" "}
          <b className="font-bold">animal</b> was involved?
        </p>
      ),
      questionType: "select",
      additionalInstructions: <AI.AnimalTypes />,
      defaultTab: "ai",
      answers: [
        {
          answer: "Dog",
          display: "Dog involved",
          questionDisplay: "**pronoun** was attacked by a dog",
          continue: true,
        },
        {
          answer: "Insect:",
          display: "Attack by insect: {input}",
          questionDisplay: "**pronoun** was attacked by an insect: {input}",
          input: true,
          continue: true,
        },
        {
          answer: "LARGE Animal:",
          display: "Attack by large animal: {input}",
          questionDisplay:
            "**pronoun** was attacked by a large animal: {input}",
          updateCode: "03D06",
          input: true,
          continue: true,
          send: true,
        },
        {
          answer: "EXOTIC Animal:",
          display: "Attack by exotic animal: {input}",
          questionDisplay:
            "**pronoun** was attacked by an exotic animal: {input}",
          updateCode: "03D07",
          input: true,
          continue: true,
          send: true,
        },
        {
          answer: "MAULING",
          display: "MAULING attack",
          questionDisplay: "**pronoun** was involved in a MAULING attack",
          updateCode: "03D08",
          continue: true,
          send: true,
        },
        {
          answer: "Other:",
          display: "Attack by other animal: {input}",
          questionDisplay:
            "**pronoun** was attacked by another animal: {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk type of animal",
          questionDisplay: "Unk what type of animal attacked **pronoun**",
          continue: true,
          updateCode: "03B03",
        },
      ],
    },

    {
      text: (
        <p>
          <b className="font-bold">Where</b> is the{" "}
          <b className="font-bold">animal now</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Location:",
          display: "Animal location: {input}",
          questionDisplay: "The animal location is: {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Gone",
          display: "Animal is gone",
          questionDisplay: "The animal is no longer present",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk where animal is",
          questionDisplay: "Unk where the animal is now",
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
        const { patientConsciousness } = patient;
        return patientConsciousness !== "no";
      },
      preRenderLogic: "Patient is conscious",
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
          display: "NOT responding nlly",
          questionDisplay:
            "**pronoun** is NOT completely alert (not responding appropriately)",
          updateCode: "03D03",
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
          Is there any{" "}
          <b className="font-bold text-red-400">SERIOUS bleeding</b>?
        </p>
      ),
      questionType: "select",
      additionalInstructions: <AI.SeriousBleeding />,
      defaultTab: "ai",
      answers: [
        {
          answer: "No serious bleeding",
          display: "No SERIOUS bleeding",
          questionDisplay: "**pronoun** has no SERIOUS bleeding",
          continue: true,
        },
        {
          answer: "Yes",
          display: "SERIOUS bleeding",
          questionDisplay: "**pronoun** has SERIOUS bleeding",
          updateCode: "03B02",
          continue: true,
        },
        {
          answer: "Not bleeding now",
          display: "Not bleeding now",
          questionDisplay: "**pronoun** is not bleeding now",
          continue: true,
        },
        {
          answer: "No bleeding at all",
          display: "No bleeding",
          questionDisplay: "**pronoun** has no bleeding at all",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if SERIOUS bleeding",
          questionDisplay: "Unk if **pronoun** has any SERIOUS bleeding",
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
      additionalInstructions: <AI.BodyAreas />,
      defaultTab: "ai",
      answers: [
        {
          answer: "NOT DANGEROUS body area",
          display: "NOT DANGEROUS body area",
          questionDisplay: "**pronoun** has injs to a NOT DANGEROUS body area",
          continue: true,
        },
        {
          answer: "POSSIBLY DANGEROUS body area",
          display: "POSSIBLY DANGEROUS body area",
          questionDisplay:
            "**pronoun** has injs to a POSSIBLY DANGEROUS body area",
          continue: true,
        },
        {
          answer: "Chest",
          display: "Inj(s) to chest",
          questionDisplay: "**pronoun** has injuries to the chest",
          continue: true,
        },
        {
          answer: "Neck",
          display: "Inj(s) to neck",
          questionDisplay: "**pronoun** has injuries to the neck",
          continue: true,
        },
        {
          answer: "Head",
          display: "Inj(s) to head",
          questionDisplay: "**pronoun** has injuries to the head",
          continue: true,
        },
        {
          answer: "DANGEROUS body area",
          display: "DANGEROUS body area",
          questionDisplay: "**pronoun** has injs to aDANGEROUS body area",
        },
        {
          answer: "Other area:",
          display: "Inj(s) to other area: {input}",
          questionDisplay: "**pronoun** has injuries to another area: {input}",
          input: true,
          continue: true,
        },
        {
          answer: "No injuries",
          display: "Superficial injs rptd",
          questionDisplay: "**pronoun** has no injuries reported",
          continue: true,
          updateCode: "03A03",
        },
        {
          answer: "Unknown",
          display: "Unk body area injured",
          questionDisplay: "Unk what body area **pronoun** has injuries to",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have any{" "}
          <b className="font-bold">difficulty breathing</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Are you having any <b className="font-bold">difficulty breathing</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient, answers) => {
        const { patientBreathing } = patient;
        const lastAnswer = answers[answers.length - 1]?.answer;
        return (
          patientBreathing !== "no" &&
          (lastAnswer === "Chest" ||
            lastAnswer === "Neck" ||
            lastAnswer === "Head")
        );
      },
      preRenderLogic:
        "Patient is breathing and has injuries to chest, neck, or head",
      preRenderDependencies: ["patient", "answers"],
      answers: [
        {
          answer: "No",
          display: "No diff breathing",
          questionDisplay: "**pronoun** does not have difficulty breathing",
          updateCode: "03B01",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Diff breathing",
          questionDisplay: "**pronoun** has difficulty breathing",
          updateCode: "03D04",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if diff breathing",
          questionDisplay: "Unk if **pronoun** has difficulty breathing",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What is the <b className="font-bold">NOT DANGEROUS</b> body area?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.answer;
        return lastAnswer === "NOT DANGEROUS body area";
      },
      additionalInstructions: <AI.BodyAreas />,
      defaultTab: "ai",
      preRenderDependencies: ["answers"],
      preRenderLogic: "NOT DANGEROUS body area was selected",
      answers: [
        {
          answer: "Ankle",
          display: "NOT DANG: Ankle",
          questionDisplay: "**pronoun** has injuries to the ankle",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Arm, upper*",
          display: "NOT DANG: Arm, upper",
          questionDisplay: "**pronoun** has injuries to the upper arm",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Collar bone (clavicle)",
          display: "NOT DANG: Collar bone (clavicle)",
          questionDisplay: "**pronoun** has injuries to the collar bone",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Elbow*",
          display: "NOT DANG: Elbow",
          questionDisplay: "**pronoun** has injuries to the elbow",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Finger",
          display: "NOT DANG: Finger",
          questionDisplay: "**pronoun** has injuries to the finger",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Foot",
          display: "NOT DANG: Foot",
          questionDisplay: "**pronoun** has injuries to the foot",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Forearm",
          display: "NOT DANG: Forearm",
          questionDisplay: "**pronoun** has injuries to the forearm",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Genitalia",
          display: "NOT DANG: Genitalia",
          questionDisplay: "**pronoun** has injuries to the genitalia",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Groin",
          display: "NOT DANG: Groin",
          questionDisplay: "**pronoun** has injuries to the groin",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Hand",
          display: "NOT DANG: Hand",
          questionDisplay: "**pronoun** has injuries to the hand",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Hip/Pelvis",
          display: "NOT DANG: Hip/Pelvis",
          questionDisplay: "**pronoun** has injuries to the hip or pelvis",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Knee*",
          display: "NOT DANG: Knee",
          questionDisplay: "**pronoun** has injuries to the knee",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Leg, lower",
          display: "NOT DANG: Leg, lower",
          questionDisplay: "**pronoun** has injuries to the lower leg",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Leg, upper (without deformity)",
          display: "NOT DANG: Leg, upper",
          questionDisplay: "**pronoun** has injuries to the upper leg",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Shoulder",
          display: "NOT DANG: Shoulder",
          questionDisplay: "**pronoun** has injuries to the shoulder",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Tailbone (coccyx)",
          display: "NOT DANG: Tailbone",
          questionDisplay: "**pronoun** has injuries to the tailbone",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Toe",
          display: "NOT DANG: Toe",
          questionDisplay: "**pronoun** has injuries to the toe",
          updateCode: "03A01",
          continue: true,
        },
        {
          answer: "Wrist",
          display: "NOT DANG: Wrist",
          questionDisplay: "**pronoun** has injuries to the wrist",
          updateCode: "03A01",
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
          What is the <b className="font-bold">POSSIBLY DANGEROUS</b> body area?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.answer;
        return (
          lastAnswer === "POSSIBLY DANGEROUS body area" ||
          lastAnswer === "None of these"
        );
      },
      additionalInstructions: <AI.BodyAreas />,
      defaultTab: "ai",
      preRenderDependencies: ["answers"],
      preRenderLogic: "POSSIBLY DANGEROUS body area was selected",
      answers: [
        {
          answer: "Abdomen",
          display: "POSSIBLY DANG: Abdomen",
          questionDisplay: "**pronoun** has injuries to the abdomen",
          updateCode: "03B01",
          continue: true,
        },
        {
          answer: "Amputation (excluding fingers/toes)",
          display: "POSSIBLY DANG: Amputation",
          questionDisplay:
            "**pronoun** has an amputation (excluding fingers/toes)",
          updateCode: "03B01",
        },
        {
          answer: "Back",
          display: "POSSIBLY DANG: Back",
          questionDisplay: "**pronoun** has injuries to the back",
          updateCode: "03B01",
          continue: true,
        },
        {
          answer: "Chest (breathing nlly)",
          display: "POSSIBLY DANG: Chest",
          questionDisplay:
            "**pronoun** has injuries to the chest (breathing normally)",
          updateCode: "03B01",
        },
        {
          answer: "Head (alert)",
          display: "POSSIBLY DANG: Head",
          questionDisplay: "**pronoun** has injuries to the head (alert)",
          updateCode: "03B01",
          continue: true,
        },
        {
          answer: "Leg, upper (obvious deformity)",
          display: "POSSIBLY DANG: Leg, upper*",
          questionDisplay:
            "**pronoun** has injuries to the leg (upper, obvious deformity)",
          updateCode: "03B01",
          continue: true,
        },
        {
          answer: "Neck (breathing nlly)",
          display: "POSSIBLY DANG: Neck",
          questionDisplay:
            "**pronoun** has injuries to the neck (breathing normally)",
          updateCode: "03B01",
          continue: true,
        },
        {
          answer: "None of these",
          display: "No POSSIBLY DANG body area ID'd",
          questionDisplay:
            "**pronoun** has no POSSIBLY DANG body area identified",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What is the <b className="font-bold">DANGEROUS</b> body area?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.answer;
        return (
          lastAnswer === "DANGEROUS body area" ||
          lastAnswer === "None of these" ||
          lastAnswer === "No"
        );
      },
      preRenderDependencies: ["answers"],
      preRenderLogic: "DANGEROUS body area was selected",
      answers: [
        {
          answer: "Body area:",
          display: "DANGEROUS: {input}",
          questionDisplay:
            "**pronoun** has injuries to a DANGEROUS body area: {input}",
          updateCode: "03D05",
          input: true,
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
          code: "03A01",
          text: "Not Dangerous Body Area",
          recResponse: 9,
        },
        {
          code: "03A02",
          text: "Non-Recent (>= 6hrs) Injs (w/o priority symptoms)",
          recResponse: 10,
        },
        {
          code: "03A03",
          text: "Superficial Injs",
          recResponse: 10,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "03B00",
          text: "BLS Override (Bravo)",
          recResponse: 9,
        },
        {
          code: "03B01",
          text: "Possibly Dangerous Body Area",
          recResponse: 9,
        },
        {
          code: "03B02",
          text: "Serious Hemorrhage",
          recResponse: 9,
        },
        {
          code: "03B03",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 9,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "03D00",
          text: "ALS Override (Delta)",
          recResponse: 11,
        },
        {
          code: "03D01",
          text: "Arrest",
          recResponse: 12,
          notBreathing: true,
        },
        {
          code: "03D02",
          text: "Unconscious",
          recResponse: 13,
          notConscious: true,
        },
        {
          code: "03D03",
          text: "Not Alert",
          recResponse: 11,
        },
        {
          code: "03D04",
          text: "Chest/Neck/Head Injs (w/ Diff Breathing)",
          recResponse: 11,
        },
        {
          code: "03D05",
          text: "Dangerous Body Area",
          recResponse: 11,
        },
        {
          code: "03D06",
          text: "Large Animal",
          recResponse: 11,
        },
        {
          code: "03D07",
          text: "Exotic Animal",
          recResponse: 11,
        },
        {
          code: "03D08",
          text: "Mauling or Mult Animals",
          recResponse: 11,
        },
        {
          code: "03D09",
          text: "Attack In Progress",
          recResponse: 11,
        },
      ],
    },
  ],
};
