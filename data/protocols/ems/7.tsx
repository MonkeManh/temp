import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const BURNS_EXPLOSION: IEMSComplaint = {
  protocol: 7,
  name: "Burns (Scalds) / Explosion (Blast)",
  shortName: "Burns/Explosion",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: 3 },
  ],
  defaultPriority: "A",
  defaultPlan: 26,
  defaultCode: "07B02",
  preSend: true,
  questions: [
    {
      text: (
        <p>
          <b className="font-bold">When</b> did this{" "}
          <b className="font-bold">happen</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Less than 6 hours ago",
          display: "Happened now (< 6 hrs ago)",
          questionDisplay: "Happened now (< 6 hrs ago)",
          continue: true,
        },
        {
          answer: "More than 6 hours ago",
          display: "Happened earlier (> 6 hrs ago)",
          questionDisplay: "Happened earlier (> 6 hrs ago)",
          updateCode: "07A05",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk when happened",
          questionDisplay: "Unk when this happened",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(If not obvious)</span> Is{" "}
          <b className="font-bold">anything</b> still{" "}
          <b className="font-bold text-red-400">burning</b> (smoldering) or{" "}
          <b className="font-bold text-red-400">on fire</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Nothing burning or on fire",
          questionDisplay: "Nothing is rptd to be still burning or on fire",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Something burning or on fire",
          questionDisplay: "Something is rptd to be still burning or on fire",
          updateSuffix: "F",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if anything burning or on fire",
          questionDisplay:
            "Unk if anything is rptd to be still burning or on fire",
          continue: true,
          updateCode: "07B02",
        },
      ],
    },

    {
      text: (
        <p>
          <b className="font-bold">What</b> is still{" "}
          <b className="font-bold text-red-400">burning or on fire</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.answer;
        return lastAnswer === "Yes";
      },
      preRenderLogic: "Something is burning or on fire",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Object (non-structure):",
          display: "{input} is burning or on fire",
          questionDisplay: "{input} is burning or on fire",
          input: true,
          continue: true,
        },
        {
          answer: "PERSON",
          display: "A PERSON is burning or on fire",
          questionDisplay: "A PERSON is burning or on fire",
          updateCode: "07E01",
          continue: true,
          send: true,
        },
        {
          answer: "Structure:",
          display: "{input} is burning or on fire",
          questionDisplay: "{input} is burning or on fire",
          input: true,
          continue: true,
        },
        {
          answer: "Other:",
          display: "{input} is burning or on fire",
          questionDisplay: "{input} is burning or on fire",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk what is burning or on fire",
          questionDisplay: "Unk what is still burning or on fire",
          updateCode: "07B02",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is there anyone <b className="font-bold">inside</b> the{" "}
          <b className="font-bold">structure</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.answer;
        return lastAnswer === "Structure:";
      },
      preRenderLogic: "A structure is burning or on fire",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No one rptd inside structure",
          questionDisplay: "No one is rptd to be inside the structure",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Person(s) rptd inside",
          questionDisplay: "Person(s) rptd inside structure",
          continue: true,
          updateCode: "07C01",
        },
        {
          answer: "Unknown",
          display: "Unk if anyone inside structure",
          questionDisplay: "Unk if anyone is rptd to be inside the structure",
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
        return patient.patientConsciousness !== "no";
      },
      preRenderLogic: "Patient is not unconscious",
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
          updateCode: "07D04",
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
          Is **pronoun** <b className="font-bold">breathing normally</b>?
        </p>
      ),
      firstPersonText: (
        <p><span className="text-blue-400">(If not obvious)</span> Are you breathing normally?</p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        return (
          patient.patientBreathing !== "no" &&
          patient.patientBreathing !== "agonal/ineffective"
        );
      },
      preRenderLogic: "Patient is not apneic or agonal",
      preRenderDependencies: ["patient"],
      answers: [
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing nlly",
          continue: true,
        },
        {
          answer: "No",
          display: "Not breathing nlly",
          questionDisplay: "**pronoun** is NOT breathing nlly",
          updateCode: "07C02",
          send: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if breathing nlly",
          questionDisplay: "Unk if **pronoun** is breathing nlly",
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
          <span className="text-blue-400">(If not obvious)</span> Are you having difficulty <b className="font-bold">speaking between breaths</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.answer;
        return lastAnswer === "No";
      },
      preRenderLogic: "Patient is having difficulty breathing",
      preRenderDependencies: ["answers"],
      defaultTab: "ai",
      additionalInstructions: <AI.DiffSpeakingBtwnBreaths />,
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
            "**pronoun** is having difficulty speaking between breaths",
          updateCode: "07D05",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if diff speaking btwn breaths",
          questionDisplay:
            "Unk if **pronoun** is having difficulty speaking between breaths",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(If not already stated)</span>{" "}
          <b className="font-bold">What</b> caused the{" "}
          <b className="font-bold">injuries</b> or{" "}
          <b className="font-bold">burns</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Explosion",
          display: "Injs caused by explosion",
          questionDisplay: "Injuries caused by explosion",
          updateSuffix: "E",
          updateCode: "07B01",
        },
        {
          answer: "Sunburn",
          display: "Injs caused by sunburn",
          questionDisplay: "Injuries caused by sunburn",
          updateCode: "07A04",
        },
        {
          answer: "Fireworks",
          display: "Injs caused by fireworks",
          questionDisplay: "Injuries caused by fireworks",
          updateSuffix: "W",
        },
        {
          answer: "Other:",
          display: "Injs caused by {input}",
          questionDisplay: "Injuries caused by {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk what caused injs or burns",
          questionDisplay: "Unk what caused injuries or burns",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">caused</b> the{" "}
          <b className="font-bold text-red-400">explosion</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.answer;
        return lastAnswer === "Explosion";
      },
      preRenderLogic: "Injuries caused by explosion",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Fireworks",
          display: "Explosion caused by fireworks",
          questionDisplay: "Explosion caused by fireworks",
          updateSuffix: "W",
        },
        {
          answer: "Other:",
          display: "Explosion caused by {input}",
          questionDisplay: "Explosion caused by {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk what caused explosion",
          questionDisplay: "Unk what caused explosion",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">part(s)</b> of the body are{" "}
          <b className="font-bold">injured or burned</b>?
        </p>
      ),
      questionType: "select",
      omit: true,
      defaultTab: "ai",
      additionalInstructions: <AI.RuleOfNines />,
      answers: [
        {
          answer: "Body areas:",
          display: "Injs to {input}",
          questionDisplay: "Injuries to {input}",
          multiSelect: true,
          continue: true,
        },
        {
          answer: "Face/Scalp",
          display: "Face/Scalp",
          questionDisplay: "Face/Scalp",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Back of head",
          display: "Back of head",
          questionDisplay: "Back of head",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Anterior (front) chest",
          display: "Anterior (front) chest",
          questionDisplay: "Anterior (front) chest",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Posterior (back) thorax",
          display: "Posterior (back) thorax",
          questionDisplay: "Posterior (back) thorax",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Abdomen",
          display: "Abdomen",
          questionDisplay: "Abdomen",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Buttocks",
          display: "Buttocks",
          questionDisplay: "Buttocks",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Genitalia",
          display: "Genitalia",
          questionDisplay: "Genitalia",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Anterior (front) RLE",
          display: "Anterior (front) RLE",
          questionDisplay: "Anterior (front) RLE",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Anterior (front) LLE",
          display: "Anterior (front) LLE",
          questionDisplay: "Anterior (front) LLE",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Posterior (back) RLE",
          display: "Posterior (back) RLE",
          questionDisplay: "Posterior (back) RLE",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Posterior (back) LLE",
          display: "Posterior (back) LLE",
          questionDisplay: "Posterior (back) LLE",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Anterior (front) RUE",
          display: "Anterior (front) RUE",
          questionDisplay: "Anterior (front) RUE",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Anterior (front) LUE",
          display: "Anterior (front) LUE",
          questionDisplay: "Anterior (front) LUE",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Posterior (back) RUE",
          display: "Posterior (back) RUE",
          questionDisplay: "Posterior (back) RUE",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Posterior (back) LUE",
          display: "Posterior (back) LUE",
          questionDisplay: "Posterior (back) LUE",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Unknown",
          display: "Unk what part(s) of body are injured or burned",
          questionDisplay: "Unk what part(s) of the body are injured or burned",
          continue: true,
          updateCode: "07B02",
        },
      ],
    },

    // >= 18%
    {
      text: <p>Calculate burn score</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.display;

        if (!lastAnswer || lastAnswer === "Unknown") return false;

        // Step 1: Remove "Injs to"
        const cleaned = lastAnswer.replace(/^Injs to\s*/i, "");

        // Step 2: Split, trim, and deduplicate
        const uniqueBodyAreas = [
          ...new Set(cleaned.split(",").map((part) => part.trim())),
        ];

        // Step 3: Define the Rule of Nines mapping
        const ruleOfNines: Record<string, number> = {
          "Face/Scalp": 4.5,
          "Back of head": 4.5,
          "Anterior (front) chest": 9,
          "Posterior (back) thorax": 9,
          Abdomen: 9,
          Buttocks: 9,
          Genitalia: 1,
          "Anterior (front) RLE": 9,
          "Anterior (front) LLE": 9,
          "Posterior (back) RLE": 9,
          "Posterior (back) LLE": 9,
          "Anterior (front) RUE": 4.5,
          "Anterior (front) LUE": 4.5,
          "Posterior (back) RUE": 4.5,
          "Posterior (back) LUE": 4.5,
        };

        const score = uniqueBodyAreas.reduce((sum, area) => {
          return sum + (ruleOfNines[area] ?? 0);
        }, 0);

        return score >= 18;
      },
      answers: [
        {
          answer: "Calculate",
          display: ">= 18% body area",
          questionDisplay: "Burns to >= 18% body area",
          updateCode: "07C03",
          end: true,
        },
      ],
    },

    // Facial burns
    {
      text: <p>Calculate burn score</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.display;

        if (!lastAnswer || lastAnswer === ">= 18% body area" || lastAnswer === "Unknown") return false;

        // Step 1: Remove "Injs to"
        const cleaned = lastAnswer.replace(/^Injs to\s*/i, "");

        // Step 2: Split, trim, and deduplicate
        const uniqueBodyAreas = [
          ...new Set(cleaned.split(",").map((part) => part.trim())),
        ];
        return uniqueBodyAreas.includes("Face/Scalp") && uniqueBodyAreas.includes("Back of head");
      },
      answers: [
        {
          answer: "Calculate",
          display: ">= 9% body area (significant facial burns)",
          questionDisplay: "Burns to Face/Scalp and Back of head",
          end: true,
          updateCode: "07C04",
        }
      ]
    },

    // > 9% < 18%
    {
      text: <p>Calculate burn score</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.display;

        if (!lastAnswer || lastAnswer === ">= 9% body area (significant facial burns)" || lastAnswer === "Unknown") return false;

        // Step 1: Remove "Injs to"
        const cleaned = lastAnswer.replace(/^Injs to\s*/i, "");

        // Step 2: Split, trim, and deduplicate
        const uniqueBodyAreas = [
          ...new Set(cleaned.split(",").map((part) => part.trim())),
        ];

        // Step 3: Define the Rule of Nines mapping
        const ruleOfNines: Record<string, number> = {
          "Face/Scalp": 4.5,
          "Back of head": 4.5,
          "Anterior (front) chest": 9,
          "Posterior (back) thorax": 9,
          Abdomen: 9,
          Buttocks: 9,
          Genitalia: 1,
          "Anterior (front) RLE": 9,
          "Anterior (front) LLE": 9,
          "Posterior (back) RLE": 9,
          "Posterior (back) LLE": 9,
          "Anterior (front) RUE": 4.5,
          "Anterior (front) LUE": 4.5,
          "Posterior (back) RUE": 4.5,
          "Posterior (back) LUE": 4.5,
        };

        const score = uniqueBodyAreas.reduce((sum, area) => {
          return sum + (ruleOfNines[area] ?? 0);
        }, 0);

        return score > 9 && score < 18;
      },
      answers: [
        {
          answer: "Calculate",
          display: "> 9% but < 18% body area",
          questionDisplay: "Burns to > 9% but < 18% body area",
          end: true,
          updateCode: "07A01",
        },
      ],
    },

    // Now < 9%
    {
      text: <p>Calculate burn score</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.display;

        if (!lastAnswer || lastAnswer === "> 9% but < 18% body area" || lastAnswer === "Unknown") return false;

        // Step 1: Remove "Injs to"
        const cleaned = lastAnswer.replace(/^Injs to\s*/i, "");

        // Step 2: Split, trim, and deduplicate
        const uniqueBodyAreas = [
          ...new Set(cleaned.split(",").map((part) => part.trim())),
        ];

        // Step 3: Define the Rule of Nines mapping
        const ruleOfNines: Record<string, number> = {
          "Face/Scalp": 4.5,
          "Back of head": 4.5,
          "Anterior (front) chest": 9,
          "Posterior (back) thorax": 9,
          Abdomen: 9,
          Buttocks: 9,
          Genitalia: 1,
          "Anterior (front) RLE": 9,
          "Anterior (front) LLE": 9,
          "Posterior (back) RLE": 9,
          "Posterior (back) LLE": 9,
          "Anterior (front) RUE": 4.5,
          "Anterior (front) LUE": 4.5,
          "Posterior (back) RUE": 4.5,
          "Posterior (back) LUE": 4.5,
        };

        const score = uniqueBodyAreas.reduce((sum, area) => {
          return sum + (ruleOfNines[area] ?? 0);
        }, 0);

        return score < 9;
      },
      answers: [
        {
          answer: "Calculate",
          display: "< 9% body area",
          questionDisplay: "Burns to < 9% body area",
          end: true,
          updateCode: "07A03",
        },
      ],
    },
  ],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "07A01",
          text: "Burns < 18% Body Area",
          recResponse: 26,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 27,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 27,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 27,
            },
          ],
        },
        {
          code: "07A02",
          text: "Fire Alarm (Unkn Situation)",
          recResponse: 28,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 28,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 27,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 28,
            },
          ],
        },
        {
          code: "07A03",
          text: "Minor Burns",
          recResponse: 29,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 27,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 27,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 27,
            },
          ],
        },
        {
          code: "07A04",
          text: "Sunburn",
          recResponse: 29,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 27,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 27,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 27,
            },
          ],
        },
        {
          code: "07A05",
          text: "Non-Recent (>= 6hrs) Burns/Injs (w/o priority symptoms)",
          recResponse: 29,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 27,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 27,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 27,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "07B00",
          text: "BLS Override (Bravo)",
          recResponse: 26,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 27,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 27,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 27,
            },
          ],
        },
        {
          code: "07B01",
          text: "Blast Injs (w/o priority symptoms)",
          recResponse: 26,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 27,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 27,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 27,
            },
          ],
        },
        {
          code: "07B02",
          text: "Unkn Status/Other Cods Not Applicable",
          recResponse: 26,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 27,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 27,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 27,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "07C00",
          text: "ALS Override (Charlie)",
          recResponse: 30,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 31,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 32,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 31,
            },
          ],
        },
        {
          code: "07C01",
          text: "Fire w/ Persons Rptd Inside",
          recResponse: 30,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 31,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 32,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 31,
            },
          ],
        },
        {
          code: "07C02",
          text: "Diff Breathing",
          recResponse: 30,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 30,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 33,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 30,
            },
          ],
        },
        {
          code: "07C03",
          text: "Burns >= 18% Body Area",
          recResponse: 30,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 30,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 33,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 30,
            },
          ],
        },
        {
          code: "07C04",
          text: "Significant Facial Burns",
          recResponse: 30,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 30,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 33,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 30,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "07D00",
          text: "ALS Override (Delta)",
          recResponse: 34,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 34,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 34,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 34,
            },
          ],
        },
        {
          code: "07D01",
          text: "Mult Victims",
          recResponse: 35,
          multPatient: true,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 35,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 35,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 35,
            },
          ],
        },
        {
          code: "07D02",
          text: "Arrest",
          notBreathing: true,
          recResponse: 36,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 36,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 36,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 36,
            },
          ],
        },
        {
          code: "07D03",
          text: "Unconscious",
          notConscious: true,
          recResponse: 34,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 37,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 34,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 37,
            },
          ],
        },
        {
          code: "07D04",
          text: "Not Alert",
          recResponse: 38,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 30,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 33,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 30,
            },
          ],
        },
        {
          code: "07D05",
          text: "Diff Speaking Between Breaths",
          recResponse: 30,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 30,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 33,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 30,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "07E00",
          text: "ALS Override (Echo)",
          recResponse: 34,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 37,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 34,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 37,
            },
          ],
        },
        {
          code: "07E01",
          text: "Person on Fire",
          recResponse: 39,
          subCodes: [
            {
              suffix: "E",
              text: "Explosion",
              recResponse: 39,
            },
            {
              suffix: "F",
              text: "Fire Present",
              recResponse: 39,
            },
            {
              suffix: "W",
              text: "Fireworks",
              recResponse: 39,
            },
          ],
        },
      ],
    },
  ],
};
