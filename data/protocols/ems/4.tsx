import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const ASSAULT: IEMSComplaint = {
  protocol: 4,
  name: "Assault / Sexual Assault",
  shortName: "Assault",
  description: (
    <>
      <p>
        Assault cases require a dual lens: one for{" "}
        <span className="text-red-500 font-semibold">medical urgency</span>, and
        another for{" "}
        <span className="text-yellow-400 font-semibold">
          scene safety and victim sensitivity
        </span>
        . Evaluate the mechanism of injury, the region affected, and whether the
        patient is{" "}
        <span className="text-red-500 font-semibold">conscious and alert</span>.
        Head, neck, and chest injuries raise immediate concern due to possible
        airway involvement or internal trauma.
      </p>

      <p className="mt-2">This protocol includes:</p>
      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
        <li>
          <span className="font-medium">Assault</span>
        </li>
        <li>
          <span className="font-medium">Sexual Assault</span>
        </li>
        <li>
          <span className="font-medium">Stun Gun Deployment</span>
        </li>
      </ul>

      <p className="mt-2">
        For{" "}
        <span className="text-pink-400 font-semibold">
          sexual assault victims
        </span>
        , ensure care is trauma-informed. Avoid unnecessary questioning. Focus
        on safety, preserve any potential evidence, and prioritize{" "}
        <span className="text-yellow-400 font-semibold">
          law enforcement notification
        </span>{" "}
        where appropriate.
      </p>

      <p className="mt-2">
        Be alert for the following{" "}
        <span className="text-red-500 font-semibold">escalation triggers</span>:
      </p>

      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
        <li>
          <span className="text-red-500 font-semibold">Serious bleeding</span>{" "}
          or signs of internal trauma
        </li>
        <li>
          <span className="text-red-500 font-semibold">Airway compromise</span>{" "}
          (e.g., difficulty breathing/speaking)
        </li>
        <li>
          <span className="text-red-500 font-semibold">
            Altered consciousness
          </span>{" "}
          or unconsciousness
        </li>
        <li>
          <span className="text-yellow-400 font-semibold">
            Assailant still on scene
          </span>{" "}
          → Confirm scene safety
        </li>
        <li>
          <span className="text-red-500 font-semibold">
            Injury to chest, neck, or head
          </span>{" "}
          → Consider Delta upgrade
        </li>
      </ul>

      <p className="mt-2">
        <span className="font-medium">REMEMBER:</span> Even when injuries appear
        minor, if the event is recent or involves psychological trauma, an EMS
        response is still warranted. Be patient-forward, respectful, and
        supportive.
      </p>
    </>
  ),
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: true },
  ],
  defaultPriority: "A",
  defaultPlan: 14,
  defaultCode: "04B03",
  preSend: true,
  questions: [
    {
      text: (
        <p>
          <b className="font-bold">When</b> did this{" "}
          <b className="font-bold">occur</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Now (less than 6hrs ago)",
          display: "Happened now (< 6 hours ago)",
          questionDisplay: "Incident happened now (< 6 hours ago)",
          continue: true,
        },
        {
          answer: "Earlier (more than 6hrs ago)",
          display: "Happened earlier (> 6 hours ago)",
          questionDisplay: "Incident happened earlier (> 6 hours ago)",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk when incident happened",
          questionDisplay: "Unk when incident happened",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-400">
          <span className="text-blue-400">(If applicable)</span>{" "}
          <b className="font-bold">Where</b> is the{" "}
          <b className="font-bold">assailant</b> now?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Location:",
          display: "Assailant is {input}",
          questionDisplay: "Assailant is {input}",
          setSceneSecure: false,
          input: true,
          continue: true,
        },
        {
          answer: "Gone",
          display: "Assailant is gone",
          questionDisplay: "The assailant is no longer present",
          setSceneSecure: false,
          continue: true,
        },
        {
          answer: "No assailant",
          display: "No assailant",
          questionDisplay: "There is no assailant",
          continue: true,
        },
        {
          answer: "Not applicable",
          display: "No assailant",
          questionDisplay: "There is no assailant (not applicable)",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk where assailant is",
          questionDisplay: "Unk where the assailant is now",
          continue: true,
        },
      ],
    },

    {
      text: <p className="text-red-400">Were <b className="font-bold">any weapons</b> involved?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No wpns",
          questionDisplay: "No weapons were involved",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Wpns involved or mentioned",
          questionDisplay: "Weapons were involved or mentioned",
          setSceneSecure: false,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if wpns involved",
          questionDisplay: "Unk if any weapons were involved",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">What <b className="font-bold">type</b> of <b className="font-bold">weapon</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const weaponsAnswer = answers.find((a) => a.question === "Were any weapons involved?")?.answer;
        return weaponsAnswer === "Yes";
      },
      preRenderLogic: "Weapons were involved or mentioned",
      preRenderDependencies: ["answers"],
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
    },

    {
      text: (
        <p className="text-blue-400">
          What type of incident is this?
        </p>
      ),
      questionType: "select",
      additionalInstructions: <></>,
      answers: [
        {
          answer: "Assault",
          display: "Assault incident ID'd",
          questionDisplay: "**pronoun** was assaulted",
          updateSuffix: "A",
          continue: true,
        },
        {
          answer: "Sexual Assault",
          display: "Sexual Assault incident ID'd",
          questionDisplay: "**pronoun** was sexually assaulted",
          updateSuffix: "S",
          continue: true,
        },
        {
          answer: "Stun Gun",
          display: "Stun Gun incident ID'd",
          questionDisplay: "**pronoun** was hit with a stun gun/tased",
          updateSuffix: "T",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk type of incident",
          questionDisplay: "Unk type of incident",
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
          updateCode: "04D03",
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
          updateCode: "04B02",
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
          <b className="font-bold">What</b> part of the body is{" "}
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
          answer: "Unknown",
          display: "Unk body area injured",
          questionDisplay: "Unk what body area **pronoun** has injuries to",
          updateCode: "04B03",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** having any{" "}
          <b className="font-bold">difficulty breathing</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Do you have any <b className="font-bold">difficulty breathing</b>?
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
          continue: true,
        },
        {
          answer: "Yes",
          display: "Diff breathing",
          questionDisplay: "**pronoun** has difficulty breathing",
          updateCode: "04D04",
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
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Arm, upper*",
          display: "NOT DANG: Arm, upper",
          questionDisplay: "**pronoun** has injuries to the upper arm",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Collar bone (clavicle)",
          display: "NOT DANG: Collar bone (clavicle)",
          questionDisplay: "**pronoun** has injuries to the collar bone",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Elbow*",
          display: "NOT DANG: Elbow",
          questionDisplay: "**pronoun** has injuries to the elbow",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Finger",
          display: "NOT DANG: Finger",
          questionDisplay: "**pronoun** has injuries to the finger",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Foot",
          display: "NOT DANG: Foot",
          questionDisplay: "**pronoun** has injuries to the foot",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Forearm",
          display: "NOT DANG: Forearm",
          questionDisplay: "**pronoun** has injuries to the forearm",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Genitalia",
          display: "NOT DANG: Genitalia",
          questionDisplay: "**pronoun** has injuries to the genitalia",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Groin",
          display: "NOT DANG: Groin",
          questionDisplay: "**pronoun** has injuries to the groin",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Hand",
          display: "NOT DANG: Hand",
          questionDisplay: "**pronoun** has injuries to the hand",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Hip/Pelvis",
          display: "NOT DANG: Hip/Pelvis",
          questionDisplay: "**pronoun** has injuries to the hip or pelvis",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Knee*",
          display: "NOT DANG: Knee",
          questionDisplay: "**pronoun** has injuries to the knee",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Leg, lower",
          display: "NOT DANG: Leg, lower",
          questionDisplay: "**pronoun** has injuries to the lower leg",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Leg, upper (without deformity)",
          display: "NOT DANG: Leg, upper",
          questionDisplay: "**pronoun** has injuries to the upper leg",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Shoulder",
          display: "NOT DANG: Shoulder",
          questionDisplay: "**pronoun** has injuries to the shoulder",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Tailbone (coccyx)",
          display: "NOT DANG: Tailbone",
          questionDisplay: "**pronoun** has injuries to the tailbone",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Toe",
          display: "NOT DANG: Toe",
          questionDisplay: "**pronoun** has injuries to the toe",
          updateCode: "04A02",
          continue: true,
        },
        {
          answer: "Wrist",
          display: "NOT DANG: Wrist",
          questionDisplay: "**pronoun** has injuries to the wrist",
          updateCode: "04A02",
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
        return targetAnswer === "NOT DANGEROUS body area";
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
              return { code: "04B01" };
            }
            return { code: "04A01" };
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
        const lastAnswer = answers[answers.length - 1]?.answer;
        return (
          lastAnswer === "POSSIBLY DANGEROUS body area" ||
          lastAnswer === "None of these" ||
          lastAnswer === "No"
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
        },
      ],
    },
  ],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "04A01",
          text: "Not Dangerous Body Area w/ Deformity",
          recResponse: 14,
          subCodes: [
            {
              suffix: "A",
              text: "Assault",
              recResponse: 14,
            },
            {
              suffix: "S",
              text: "Sexual Assault",
              recResponse: 14,
            },
            {
              suffix: "T",
              text: "Stun Gun",
              recResponse: 14,
            },
          ],
        },
        {
          code: "04A02",
          text: "Not Dangerous Body Area",
          recResponse: 14,
          subCodes: [
            {
              suffix: "A",
              text: "Assault",
              recResponse: 14,
            },
            {
              suffix: "S",
              text: "Sexual Assault",
              recResponse: 14,
            },
            {
              suffix: "T",
              text: "Stun Gun",
              recResponse: 14,
            },
          ],
        },
        {
          code: "04A03",
          text: "Non-Recent (>= 6hrs) Injs (w/o priority symptoms)",
          recResponse: 15,
          subCodes: [
            {
              suffix: "A",
              text: "Assault",
              recResponse: 15,
            },
            {
              suffix: "S",
              text: "Sexual Assault",
              recResponse: 15,
            },
            {
              suffix: "T",
              text: "Stun Gun",
              recResponse: 15,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "04B00",
          text: "BLS Override (Bravo)",
          recResponse: 14,
          subCodes: [
            {
              suffix: "A",
              text: "Assault",
              recResponse: 14,
            },
            {
              suffix: "S",
              text: "Sexual Assault",
              recResponse: 14,
            },
            {
              suffix: "T",
              text: "Stun Gun",
              recResponse: 14,
            },
          ],
        },
        {
          code: "04B01",
          text: "Possibly Dangerous Body Area",
          recResponse: 14,
          subCodes: [
            {
              suffix: "A",
              text: "Assault",
              recResponse: 14,
            },
            {
              suffix: "S",
              text: "Sexual Assault",
              recResponse: 14,
            },
            {
              suffix: "T",
              text: "Stun Gun",
              recResponse: 14,
            },
          ],
        },
        {
          code: "04B02",
          text: "Serious Hemorrhage",
          recResponse: 14,
          subCodes: [
            {
              suffix: "A",
              text: "Assault",
              recResponse: 14,
            },
            {
              suffix: "S",
              text: "Sexual Assault",
              recResponse: 14,
            },
            {
              suffix: "T",
              text: "Stun Gun",
              recResponse: 14,
            },
          ],
        },
        {
          code: "04B03",
          text: "Unkn Status / Other Codes not Applicable",
          recResponse: 14,
          subCodes: [
            {
              suffix: "A",
              text: "Assault",
              recResponse: 14,
            },
            {
              suffix: "S",
              text: "Sexual Assault",
              recResponse: 14,
            },
            {
              suffix: "T",
              text: "Stun Gun",
              recResponse: 14,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "04D00",
          text: "ALS Override (Delta)",
          recResponse: 16,
          subCodes: [
            {
              suffix: "A",
              text: "Assault",
              recResponse: 16,
            },
            {
              suffix: "S",
              text: "Sexual Assault",
              recResponse: 16,
            },
            {
              suffix: "T",
              text: "Stun Gun",
              recResponse: 16,
            },
          ],
        },
        {
          code: "04D01",
          text: "Arrest",
          recResponse: 17,
          notBreathing: true,
          subCodes: [
            {
              suffix: "A",
              text: "Assault",
              recResponse: 17,
            },
            {
              suffix: "S",
              text: "Sexual Assault",
              recResponse: 17,
            },
            {
              suffix: "T",
              text: "Stun Gun",
              recResponse: 17,
            },
          ],
        },
        {
          code: "04D02",
          text: "Unconscious",
          recResponse: 18,
          notConscious: true,
          subCodes: [
            {
              suffix: "A",
              text: "Assault",
              recResponse: 18,
            },
            {
              suffix: "S",
              text: "Sexual Assault",
              recResponse: 18,
            },
            {
              suffix: "T",
              text: "Stun Gun",
              recResponse: 18,
            },
          ],
        },
        {
          code: "04D03",
          text: "Not Alert",
          recResponse: 16,
          subCodes: [
            {
              suffix: "A",
              text: "Assault",
              recResponse: 16,
            },
            {
              suffix: "S",
              text: "Sexual Assault",
              recResponse: 16,
            },
            {
              suffix: "T",
              text: "Stun Gun",
              recResponse: 16,
            },
          ],
        },
        {
          code: "04D04",
          text: "Chest/Neck/Head Inj (w/ Diff Breathing)",
          recResponse: 16,
          subCodes: [
            {
              suffix: "A",
              text: "Assault",
              recResponse: 16,
            },
            {
              suffix: "S",
              text: "Sexual Assault",
              recResponse: 16,
            },
            {
              suffix: "T",
              text: "Stun Gun",
              recResponse: 16,
            },
          ],
        },
        {
          code: "04D05",
          text: "Multiple Victims",
          recResponse: 19,
          multPatient: true,
          subCodes: [
            {
              suffix: "A",
              text: "Assault",
              recResponse: 19,
            },
            {
              suffix: "S",
              text: "Sexual Assault",
              recResponse: 19,
            },
            {
              suffix: "T",
              text: "Stun Gun",
              recResponse: 19,
            },
          ],
        },
      ],
    },
  ],
};
