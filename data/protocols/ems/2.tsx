import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const ALLERGIES: IEMSComplaint = {
  protocol: 2,
  name: "Allergies (Reactions) / Envenomations (Stings, Bites)",
  shortName: "Allergies",
  description: (
    <>
      <p>
        Allergic Reactions and Envenomations require immediate assessment of
        airway status, especially signs of ineffective or agonal breathing—these
        indicate a life-threatening condition and mandate an Echo-level
        response. Consciousness and the ability to speak between breaths are
        also early critical factors for triage escalation.
      </p>

      <p className="mt-2">
        If the patient is having{" "}
        <span className="font-medium">difficulty breathing or swallowing</span>,
        particularly with a known allergy history, you should assume a rapidly
        progressing airway compromise until proven otherwise. Past reactions,
        even if mild, increase risk for future severe responses. Injection use
        (e.g., EpiPen) or medications may be noted but <i>do not</i> guarantee
        symptom relief—severity must still be evaluated based on current
        presentation.
      </p>

      <p className="mt-2">
        Understanding the{" "}
        <span className="font-medium">cause of the reaction</span> is vital.
        Swarming insect attacks (multiple stings) are higher-risk due to
        cumulative venom exposure. Bites from snakes or spiders require
        consideration for systemic toxicity. Always ask about time of onset,
        previous allergic history, and any interventions already taken (like
        injections or medications) to ensure accurate coding and proper resource
        dispatch.
      </p>

      <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
        <li>
          <span className="font-medium">Ineffective or Agonal Breathing</span> →
          Echo-level emergency
        </li>
        <li>
          <span className="font-medium">
            Difficulty Speaking Between Breaths
          </span>{" "}
          → Delta concern
        </li>
        <li>
          <span className="font-medium">Swarming Attack / Snakebite</span> →
          High-priority Delta determinant
        </li>
        <li>
          <span className="font-medium">Prior Allergy Hx</span> → Escalates
          concern, especially with breathing issues
        </li>
        <li>
          <span className="font-medium">Injection or Medication Taken</span> →
          May trigger sub-code but doesn’t reduce urgency
        </li>
      </ul>
    </>
  ),
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: false },
  ],
  defaultPriority: "A",
  defaultPlan: 4,
  defaultCode: "02A03",
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
            "**pronoun** is completely alert and responding appropriately",
          continue: true,
        },
        {
          answer: "No",
          display: "NOT responding nlly",
          questionDisplay:
            "**pronoun** is not completely alert and not responding appropriately",
          continue: true,
          updateCode: "02D01",
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if responding nlly",
          questionDisplay:
            "Unk if **pronoun** is completely alert and responding appropriately",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** having difficulty{" "}
          <b className="font-bold">breathing</b> or{" "}
          <b className="font-bold">swallowing</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Are you having difficulty <b className="font-bold">breathing</b> or{" "}
          <b className="font-bold">swallowing</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Not diff breathing or swallowing",
          questionDisplay:
            "**pronoun** is not having difficulty breathing or swallowing",
          continue: true,
          updateCode: "02A01",
        },
        {
          answer: "Yes",
          display: "Diff breathing or swallowing",
          questionDisplay:
            "**pronoun** is having difficulty breathing or swallowing",
          continue: true,
          updateCode: "02C01",
          send: true,
        },
        {
          answer: "INEFFECTIVE/AGONAL BREATHING",
          display: "Ineffective or agonal breathing",
          questionDisplay:
            "**pronoun** is having ineffective or agonal breathing",
          continue: true,
          updateCode: "02E01",
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if diff breathing or swallowing",
          questionDisplay:
            "Unk if **pronoun** is having difficulty breathing or swallowing",
          continue: true,
          updateCode: "02B01",
        },
      ],
    },

    {
      text: <p>Is **pronoun** having difficulty speaking between breaths?</p>,
      firstPersonText: (
        <p>
          <span className="text-blue-400">(If not obvious)</span> Are you having
          difficulty speaking between breaths?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].answer;
        return lastAnswer === "Yes";
      },
      preRenderDependencies: ["answers"],
      preRenderLogic: "person has difficulty breathing or swallowing",
      defaultTab: "ai",
      additionalInstructions: <AI.DiffSpeakingBtwnBreaths />,
      answers: [
        {
          answer: "No",
          display: "Not diff speaking between breaths",
          questionDisplay:
            "**pronoun** is not having difficulty speaking between breaths",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Diff speaking between breaths",
          questionDisplay:
            "**pronoun** is having difficulty speaking between breaths",
          updateCode: "02D02",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if diff speaking between breaths",
          questionDisplay:
            "Unk if **pronoun** is having difficulty speaking between breaths",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have any other <b className="font-bold">symptoms</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Do you have any other <b>symptoms</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions(_patient, answers) {
        const lastAnswer = answers.find(
          (a) =>
            a.question === "Are you having difficulty breathing or swallowing?"
        )?.answer;
        return lastAnswer === "No";
      },
      preRenderLogic: "Person does not have difficulty breathing or swallowing",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No symptoms rptd",
          questionDisplay: "**pronoun** does not have any other symptoms",
          continue: true,
          updateCode: "02A03",
        },
        {
          answer: "Swelling",
          display: "Swelling rptd",
          questionDisplay: "**pronoun** is having swelling",
          continue: true,
        },
        {
          answer: "Hives",
          display: "Hives rptd",
          questionDisplay: "**pronoun** is having hives",
          continue: true,
        },
        {
          answer: "Rash",
          display: "Rash rptd",
          questionDisplay: "**pronoun** is having a rash",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Other symptoms: {input}",
          questionDisplay: "**pronoun** is having other sx: {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if other symptoms",
          questionDisplay: "Unk if **pronoun** has any other symptoms",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">caused</b> or{" "}
          <b className="font-bold">led up to</b> the reaction?
        </p>
      ),
      questionType: "select",
      additionalInstructions: <AI.AllergyCauses />,
      defaultTab: "ai",
      answers: [
        {
          answer: "Food:",
          display: "Rx caused by food: {input}",
          questionDisplay: "The reaction is/was caused by food: {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Insect Sting/Bite:",
          display: "Rx caused by insect sting/bite: {input}",
          questionDisplay:
            "The reaction is/was caused by insect sting/bite: {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Spider Bite",
          display: "Rx caused by spider bite",
          questionDisplay: "The reaction is/was caused by spider bite",
          continue: true,
          updateCode: "02A02",
        },
        {
          answer: "SWARMING ATTACK",
          display: "Rx caused by SWARMING ATTACK",
          questionDisplay: "The reaction is/was caused by a swarming attack",
          continue: true,
          updateCode: "02D03",
          send: true,
        },
        {
          answer: "SNAKEBITE",
          display: "Rx caused by snakebite",
          questionDisplay: "The reaction is/was caused by a snakebite",
          continue: true,
          updateCode: "02D04",
          send: true,
        },
        {
          answer: "Other:",
          display: "Rx caused by {input}",
          questionDisplay: "The reaction is/was caused by {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk cause of rx",
          questionDisplay: "Unk what caused the reaction",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <b className="font-bold">When</b> did the reaction start?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Time of rx:",
          display: "Rx started {input}",
          questionDisplay: "The reaction started {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk when rx started",
          questionDisplay: "Unk when the reaction started",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have a{" "}
          <b className="font-bold">history of allergic reactions</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Do you have a{" "}
          <b className="font-bold">history of allergic reactions</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No hx of allergic rx",
          questionDisplay:
            "**pronoun** does not have a history of allergic reactions",
          continue: true,
        },
        {
          answer: "Yes - Mild",
          display: "Hx of mild allergic rx",
          questionDisplay: "**pronoun** has a history of allergic reactions",
          continue: true,
        },
        {
          answer: "Yes - SEVERE",
          display: "Hx of severe allergic rx",
          questionDisplay:
            "**pronoun** has a history of severe allergic reactions",
          continue: true,
          updateCode: "02C02",
        },
        {
          answer: "Unknown",
          display: "Unk hx of allergic rx",
          questionDisplay:
            "Unk if **pronoun** has a history of allergic reactions",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** take any <b className="font-bold">medications</b> or
          have <b className="fond-bold">an injection</b> for this type of
          reaction?
        </p>
      ),
      firstPersonText: (
        <p>
          Do you take any <b className="font-bold">medications</b> or have an{" "}
          <b className="fond-bold">injection</b> for this type of reaction?
        </p>
      ),
      questionType: "select",
      additionalInstructions: <AI.MedsInjecAlergies />,
      answers: [
        {
          answer: "No",
          display: "No meds or injection for rx",
          questionDisplay:
            "**pronoun** does not take any medications or have an injection for this type of reaction",
          continue: true,
        },
        {
          answer: "Yes - Injection",
          display: "Injection for rx",
          questionDisplay:
            "**pronoun** takes an injection for this type of reaction",
          continue: true,
        },
        {
          answer: "Yes - Medication",
          display: "Medication for rx",
          questionDisplay:
            "**pronoun** takes medication for this type of reaction",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if meds or injection for rx",
          questionDisplay:
            "Unk if **pronoun** takes any medications or has an injection for this type of reaction",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Are you <span className="text-blue-400">(or the patient)</span> able
          to <b className="font-bold">use</b> the injection/medication?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].answer;
        return (
          lastAnswer === "Yes - Injection" || lastAnswer === "Yes - Medication"
        );
      },
      preRenderDependencies: ["answers"],
      preRenderLogic: "Injection or Medication was taken",
      answers: [
        {
          answer: "Yes:",
          display: "Able to use injection/medication: {input}",
          questionDisplay:
            "**pronoun** is able to use the injection or medication: {input}",
          dependency(_patient, answers, currentCode) {
            if (currentCode.includes("02A")) return;
            const lastAnswer = answers[answers.length - 1].answer;
            if (lastAnswer === "Yes - Injection") {
              return { subCode: "I" };
            } else if (lastAnswer === "Yes - Medication") {
              return { subCode: "M" };
            }
          },
          input: true,
          continue: true,
        },
        {
          answer: "No",
          display: "Not able to use injection/medication",
          questionDisplay:
            "**pronoun** is not able to use the injection or medication",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if able to use injection/medication",
          questionDisplay:
            "Unk if **pronoun** is able to use the injection or medication",
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
          code: "02A01",
          text: "No Diff Breathing or Swallowing",
          recResponse: 4,
        },
        {
          code: "02A02",
          text: "Spider Bite",
          recResponse: 5,
        },
        {
          code: "02A03",
          text: "Asymptomatic Allergic Rx",
          recResponse: 5,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "02B00",
          text: "BLS Override (Bravo)",
          recResponse: 4,
          subCodes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 4,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 4,
            },
          ],
        },
        {
          code: "02B01",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 4,
          subCodes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 4,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 4,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "02C00",
          text: "ALS Override (Charlie)",
          recResponse: 6,
          subCodes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
            },
          ],
        },
        {
          code: "02C01",
          text: "Diff Breathing or Swallowing",
          recResponse: 6,
          subCodes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
            },
          ],
        },
        {
          code: "02C02",
          text: "Hx of Severe Allergic Rx",
          recResponse: 6,
          subCodes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "02D00",
          text: "ALS Override (Delta)",
          recResponse: 7,
          subCodes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 7,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 7,
            },
          ],
        },
        {
          code: "02D01",
          text: "Not Alert",
          recResponse: 6,
          subCodes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
            },
          ],
        },
        {
          code: "02D02",
          text: "Diff Speaking Between Breaths",
          recResponse: 6,
          subCodes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
            },
          ],
        },
        {
          code: "02D03",
          text: "Swarming Attack (Bees, Wasps, Hornets)",
          recResponse: 6,
          subCodes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
            },
          ],
        },
        {
          code: "02D04",
          text: "Snakebite",
          recResponse: 6,
          subCodes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "02E00",
          text: "ALS Override (Echo)",
          recResponse: 8,
          subCodes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 8,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 8,
            },
          ],
        },
        {
          code: "02E01",
          text: "INEFFECTIVE BREATHING",
          recResponse: 8,
          notBreathing: true,
          subCodes: [
            {
              suffix: "I",
              text: "Injection Administered or Advised",
              recResponse: 6,
            },
            {
              suffix: "M",
              text: "Medication Administered or Advised",
              recResponse: 6,
            },
          ],
        },
      ],
    },
  ],
};
