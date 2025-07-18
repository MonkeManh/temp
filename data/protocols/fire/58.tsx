import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const EXTRICATION_ENTRAPMENT: IFireComplaint = {
  protocol: 58,
  name: "Extrication / Entrapment",
  shortName: "Extrication/Entrapment",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "O",
  defaultPlan: 183,
  defaultCode: "58B02",
  questions: [
    {
      text: (
        <p className="text-red-400">
          Does this incident involve the <b className="font-bold">release</b> of
          any <b className="font-bold">hazardous materials</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No chems/hazmat involved",
          questionDisplay:
            "There are no hazardous materials involved in this incident",
          continue: true,
        },
        {
          answer: "Yes",
          display: "chems/hazmat involved",
          questionDisplay:
            "There are hazardous materials involved in this incident",
          updateSuffix: "H",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if chems/hazmat involved",
          questionDisplay:
            "Unknown if there are hazardous materials involved in this incident",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-400">
          Do you <b className="font-bold">see</b> any{" "}
          <b className="font-bold">placards</b> or{" "}
          <b className="font-bold">labels</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const hasHazmat = answers.find(
          (a) =>
            a.question ===
            "Does this incident involve the release of any hazardous materials?"
        )?.answer;
        return hasHazmat === "Yes";
      },
      preRenderLogic: "hazmat is involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No placards/labels seen",
          questionDisplay: "No placards or labels are seen",
          continue: true,
        },
        {
          answer: "Yes (input):",
          display: "Chem/hazmat: {input}",
          questionDisplay: "The placards or labels seen are: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk if placards/labels",
          questionDisplay: "It is unknown if any placards or labels are seen",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(Not obvious)</span> Is there still
          someone <b className="font-bold">trapped</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Still trapped",
          questionDisplay: "There is still someone trapped",
          continue: true,
        },
        {
          answer: "No",
          display: "No longer trapped",
          questionDisplay: "There is no longer someone trapped",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if still trapped",
          questionDisplay: "It is unknown if there is still someone trapped",
          updateCode: "58B02",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Are there any <b className="font-bold">obvious</b> injuries?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const stillTrapped = answers.find(
          (a) => a.question === "(Not obvious) Is there still someone trapped?"
        )?.answer;
        return stillTrapped === "No";
      },
      preRenderLogic: "no one is still trapped",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No obvious injs",
          questionDisplay: "There are no obvious injuries",
          updateCode: "58O01",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Obvious injs",
          questionDisplay: "There are obvious injuries",
          updateCode: "58B02",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if obvious injs",
          questionDisplay: "It is unknown if there are any obvious injuries",
          updateCode: "58O01",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(Not obvious)</span> How{" "}
          <b className="font-bold">many</b> people are{" "}
          <b className="font-bold">trapped</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const stillTrapped = answers.find(
          (a) => a.question === "(Not obvious) Is there still someone trapped?"
        )?.answer;
        return stillTrapped === "Yes";
      },
      preRenderLogic: "there is still someone trapped",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single person trapped",
          questionDisplay: "A single person is trapped",
          continue: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} people trapped",
          questionDisplay: "{input} people are trapped",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk how many trapped",
          questionDisplay: "It is unknown how many people are trapped",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">part</b> of the{" "}
          <b className="font-bold">body</b> is trapped?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const stillTrapped = answers.find(
          (a) => a.question === "(Not obvious) Is there still someone trapped?"
        )?.answer;
        return stillTrapped === "Yes";
      },
      preRenderLogic: "there is still someone trapped",
      preRenderDependencies: ["answers"],
      defaultTab: "ai",
      additionalInstructions: <AI.BodyAreas />,
      answers: [
        {
          answer: "Finger, Toe, Hair",
          display: "Finger, toe, or hair trapped",
          questionDisplay: "A finger, toe, or hair is trapped",
          updateCode: "58A01",
          continue: true,
        },
        {
          answer: "Peripheral (hand, foot, arm, leg):",
          display: "Peripheral body part trapped: {input}",
          questionDisplay: "A peripheral body part is trapped: {input}",
          updateCode: "58B01",
          continue: true,
          input: true,
        },
        {
          answer: "POSSIBLY DANGEROUS body area",
          display: "POSSIBLY DANGEROUS body area trapped",
          questionDisplay: "A POSSIBLY DANGEROUS body area is trapped",
          continue: true,
        },
        {
          answer: "DANGEROUS body area",
          display: "DANGEROUS body area trapped",
          questionDisplay: "A DANGEROUS body area is trapped",
          continue: true,
        },
        {
          answer: "FULL BODY",
          display: "Full body trapped",
          questionDisplay: "The full body is trapped",
          updateCode: "58D01",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk what part of body trapped",
          questionDisplay: "It is unknown what part of the body is trapped",
          updateCode: "58C01",
          continue: true,
          send: true,
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
      preRenderInstructions: (answers) => {
        const partTrapped = answers.find(
          (a) => a.question === "What part of the body is trapped?"
        )?.answer;
        return partTrapped === "POSSIBLY DANGEROUS body area";
      },
      preRenderLogic: "POSSIBLY DANGEROUS body area was selected",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Abdomen",
          display: "POSSIBLY DANG: Abdomen",
          questionDisplay: "**pronoun** has injuries to the abdomen",
          updateCode: "58C02",
          continue: true,
        },
        {
          answer: "Amputation (excluding fingers/toes)",
          display: "POSSIBLY DANG: Amputation",
          questionDisplay:
            "**pronoun** has an amputation (excluding fingers/toes)",
          updateCode: "58C02",
          continue: true,
        },
        {
          answer: "Back",
          display: "POSSIBLY DANG: Back",
          questionDisplay: "**pronoun** has injuries to the back",
          updateCode: "58C02",
          continue: true,
        },
        {
          answer: "Chest (breathing nlly)",
          display: "POSSIBLY DANG: Chest",
          questionDisplay:
            "**pronoun** has injuries to the chest (breathing normally)",
          updateCode: "58C02",
        },
        {
          answer: "Head (alert)",
          display: "POSSIBLY DANG: Head",
          questionDisplay: "**pronoun** has injuries to the head (alert)",
          updateCode: "58C02",
          continue: true,
        },
        {
          answer: "Leg, upper (obvious deformity)",
          display: "POSSIBLY DANG: Leg, upper*",
          questionDisplay:
            "**pronoun** has injuries to the leg (upper, obvious deformity)",
          updateCode: "58C02",
          continue: true,
        },
        {
          answer: "Neck (breathing nlly)",
          display: "POSSIBLY DANG: Neck",
          questionDisplay:
            "**pronoun** has injuries to the neck (breathing normally)",
          updateCode: "58C02",
          continue: true,
        },
        {
          answer: "None of these",
          display: "No POSSIBLY DANG body area ID'd",
          questionDisplay:
            "**pronoun** has no POSSIBLY DANG body area identified",
          continue: true,
          updateCode: "58C01",
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">DANGEROUS</b> body area is
          injured?
        </p>
      ),
      questionType: "select",
      additionalInstructions: <AI.BodyAreas />,
      defaultTab: "ai",
      preRenderInstructions: (answers) => {
        const partTrapped = answers.find(
          (a) => a.question === "What part of the body is trapped?"
        )?.answer;
        const lastAnswer = answers[answers.length - 1].answer;
        return partTrapped === "DANGEROUS body area" || lastAnswer === "None of these";
      },
      preRenderLogic: "DANGEROUS body area was selected or None of these was selected for POSSIBLY DANGEROUS",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Neck (unconscious or difficulty breathing)",
          display: "DANG: Neck",
          questionDisplay: "**pronoun** has injuries to the neck",
          updateCode: "58D01",
          continue: true,
          send: true,
        },
        {
          answer: "Chest (not breathing or severe difficulty)",
          display: "DANG: Chest",
          questionDisplay: "**pronoun** has injuries to the chest",
          updateCode: "58D01",
          continue: true,
          send: true,
        },
        {
          answer: "Head (unconscious or unresponsive)",
          display: "DANG: Head",
          questionDisplay: "**pronoun** has injuries to the head",
          updateCode: "58D01",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk what DANG body area",
          questionDisplay: "It is unknown what DANGEROUS body area is injured",
          updateCode: "58C01",
          continue: true,
          send: true,
        }
      ]
    }
  ],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "58O01",
          text: "No Longer Trapped (No/Unkn Injs)",
          recResponse: 183,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 184,
            },
          ],
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "58A00",
          text: "Override (Alpha)",
          recResponse: 183,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 184,
            },
          ],
        },
        {
          code: "58A01",
          text: "Entrapment/Trapped (Finger, Toe, Hair)",
          recResponse: 189,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "58B00",
          text: "Override (Bravo)",
          recResponse: 185,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
        {
          code: "58B01",
          text: "Entrapment/Trapped (Peripheral Only)",
          recResponse: 185,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
        {
          code: "58B02",
          text: "Unkn Situation (Investigation)",
          recResponse: 34,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
        {
          code: "58B03",
          text: "Entrapment/Trapped (Non-Threatened)",
          recResponse: 20,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
        {
          code: "58B04",
          text: "Entrapment/Trapped",
          recResponse: 185,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "58C00",
          text: "Override (Charlie)",
          recResponse: 185,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
        {
          code: "58C01",
          text: "Entrapment/Trapped (Unkn Body Area)",
          recResponse: 185,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
        {
          code: "58C02",
          text: "Entrapment/Trapped (Possibly Dangerous Body Area)",
          recResponse: 185,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 186,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "58D00",
          text: "Override (Delta)",
          recResponse: 187,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 188,
            },
          ],
        },
        {
          code: "58D01",
          text: "Entrapment/Trapped (Dangerous Body Area or Full Body)",
          recResponse: 187,
          subCodes: [
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 188,
            },
          ],
        },
      ],
    },
  ],
};
