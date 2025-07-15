import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const CARB_MONO_HAZ: IEMSComplaint = {
  protocol: 8,
  name: "Carbon Monoxide/Inhalation/Hazmat/CBRN",
  shortName: "Carb Mono/Hazmat",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: 3 },
  ],
  defaultPriority: "D",
  defaultPlan: 40,
  defaultCode: "08D06",
  preSend: true,
  questions: [
    {
      text: (
        <p className="text-red-400">
          Is everyone <b className="font-bold">safe</b> and{" "}
          <b className="font-bold">out of danger</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Everyone out of danger",
          questionDisplay: "Everyone is out of danger",
          continue: true,
        },
        {
          answer: "No",
          display: "Person(s) still in danger",
          questionDisplay: "There are people still in danger",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if everyone is out of danger",
          questionDisplay: "Unk if everyone is out of danger",
          updateCode: "08D06",
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-400">
          What kind of <b className="font-bold">chemicals/fumes</b> or{" "}
          <b className="font-bold">hazardous materials</b> are involved?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Biological:",
          display: "Biological chems/hazmat: {input}",
          questionDisplay: "Biological chems/hazmat: {input}",
          updateSuffix: "B",
          continue: true,
          input: true,
        },
        {
          answer: "Chemical:",
          display: "Chemical hazmat: {input}",
          questionDisplay: "Chemical chems/hazmat: {input}",
          updateSuffix: "C",
          continue: true,
          input: true,
        },
        {
          answer: "Smell of Gas/Fumes:",
          display: "Smell of gas/fumes: {input}",
          questionDisplay: "Smell of Gas/Fumes involved: {input}",
          updateSuffix: "G",
          continue: true,
          input: true,
        },
        {
          answer: "Carbon monoxide",
          display: "Carbon monoxide involved",
          questionDisplay: "Carbon monoxide involved",
          updateSuffix: "M",
          continue: true,
        },
        {
          answer: "Nuclear:",
          display: "Nuclear hazmat: {input}",
          questionDisplay: "Nuclear hazmat: {input}",
          updateSuffix: "N",
          continue: true,
          input: true,
        },
        {
          answer: "Radiological",
          display: "Radiological hazmat: {input}",
          questionDisplay: "Radiological hazmat: {input}",
          updateSuffix: "R",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk chems/hazmat",
          questionDisplay: "Unknown chemicals/hazmat",
          updateSuffix: "U",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-400">
          What are the warning <b className="font-bold">placard numbers</b>{" "}
          (chemical id)?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].answer;
        return lastAnswer !== "Unknown";
      },
      preRenderLogic: "last answer is not unknown",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Known (Input Numbers):",
          display: "Chem/hazmat placard numbers: {input}",
          questionDisplay: "Chem/hazmat placard numbers: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Doesn't Know",
          display: "Doesn't know chem/hazmat placard numbers",
          questionDisplay: "Doesn't know chem/hazmat placard numbers",
          continue: true,
        },
        {
          answer: "None",
          display: "No chem/hazmat placard numbers",
          questionDisplay: "No chem/hazmat placard numbers",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk chem/hazmat placard numbers",
          questionDisplay: "Unk chem/hazmat placard numbers",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-400">
          <span className="text-blue-400">(Appropriate)</span> Is this a suicide
          (attempt)?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Not a suicide attempt",
          questionDisplay: "Not a suicide attempt",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Suicide attempt",
          questionDisplay: "Suicide attempt",
          continue: true,
          dependency: (_patient, answers) => {
            const targetQuestion = answers.find(
              (a) =>
                a.question ===
                "What kind of chemicals/fumes or hazardous materials are involved?"
            )?.answer;
            if (targetQuestion === "Carbon monoxide") {
              return { subCode: "S" };
            } else {
              return { subCode: "T" };
            }
          },
        },
        {
          answer: "Unknown",
          display: "Unk if suicide attempt",
          questionDisplay: "Unk if suicide attempt",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-400">
          What is the chemical's <b className="font-bold">name</b> or{" "}
          <b className="font-bold">type</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const targetQuestionAnswer = answers.find(
          (a) => a.question === "(Appropriate) Is this a suicide (attempt)?"
        )?.answer;
        const chemTypeAnswer = answers.find(
          (a) =>
            a.question === "What are the warning placard numbers (chemical id)?"
        )?.answer;
        return (
          targetQuestionAnswer === "Yes" && chemTypeAnswer !== "Carbon monoxide"
        );
      },
      preRenderLogic: "this is a suicide attempt and doesn't involve co",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Known (input numbers):",
          display: "Chem/hazmat name/type: {input}",
          questionDisplay: "Chem/hazmat name/type: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Doesn't know",
          display: "Chem/hazmat name/type unknown",
          questionDisplay: "Chem/hazmat name/type unknown",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-400">
          <b className="font-bold">Where</b> are the{" "}
          <b className="font-bold">chemicals/fumes</b> coming from?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Location:",
          display: "Chems/fumes coming from: {input}",
          questionDisplay: "Chems/fumes coming from: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk where chems/fumes coming from",
          questionDisplay: "Unk where chems/fumes coming from",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-400">
          Has **pronoun** had <b className="font-bold">any contact</b> (been
          contaminated) with <b className="font-bold">chemicals</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Have you had <b className="font-bold">any contact</b> (been
          contaminated) with <b className="font-bold">chemicals</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Is contaminated",
          questionDisplay: "**pronoun** is contaminated",
          continue: true,
        },
        {
          answer: "No",
          display: "Not contaminated",
          questionDisplay: "**pronoun** is not contaminated",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if contaminated",
          questionDisplay: "Unk if **pronoun** is contaminated",
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
      preRenderInstructions: (patient) => {
        return patient.patientConsciousness !== "no"
      },
      preRenderLogic: "patient is conscious",
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
          updateCode: "08D03",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if responding nlly",
          questionDisplay:
            "Unk if **pronoun** is completely alert (responding appropriately)",
          continue: true,
          updateCode: "08D06",
        },
      ],
    },

    {
      text: <p>Is **pronoun** having any <b className="font-bold">difficulty breathing</b>?</p>,
      firstPersonText: (
        <p>Are you having any <b className="font-bold">difficulty breathing</b>?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing normally",
          updateCode: "08B01",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswer = answers[answers.length - 1].answer;
            return lastAnswer === "Yes"
          }
        },
        {
          answer: "No",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing normally",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswer = answers[answers.length - 1].answer;
            return lastAnswer !== "Yes"
          }
        },
        {
          answer: "Yes",
          display: "Diff breathing",
          questionDisplay: "**pronoun** is having difficulty breathing",
          updateCode: "08C01",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswer = answers[answers.length - 1].answer;
            return lastAnswer === "Yes"
          }
        },
        {
          answer: "Yes",
          display: "Diff breathing",
          questionDisplay: "**pronoun** is having difficulty breathing",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswer = answers[answers.length - 1].answer;
            return lastAnswer !== "Yes"
          }
        },
        {
          answer: "Unknown",
          display: "Unk if diff breathing",
          questionDisplay: "Unk if **pronoun** is having difficulty breathing",
          continue: true,
          updateCode: "08D06",
        }
      ]
    },

    {
      text: <p>Does **pronoun** have <b className="font-bold">difficulty</b> speaking/crying <b className="font-bold">between</b> breaths?</p>,
      firstPersonText: (
        <p><span className="text-blue-400">(Not obvious)</span> Are you having <b className="font-bold">difficulty</b> speaking/crying <b className="font-bold">between</b> breaths?</p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].answer;
        return lastAnswer === "Yes";
      },
      preRenderLogic: "last answer is yes",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No diff speaking btwn breaths",
          questionDisplay: "**pronoun** is not having difficulty speaking between breaths",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Diff speaking btwn breaths",
          questionDisplay: "**pronoun** is having difficulty speaking between breaths",
          updateCode: "08D04",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if diff speaking btwn breaths",
          questionDisplay: "Unk if **pronoun** is having difficulty speaking between breaths",
          continue: true,
          updateCode: "08D06",
        }
      ]
    }
  ],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "08O01",
          text: "Carbon Monoxide Detector Alarm (Scene Contact w/o priority symptoms)",
          recResponse: 46,
        },
        {
          code: "08O02",
          text: "Carbon Monoxide Detector Alarm (No Scene Contact)",
          recResponse: 46,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "08B00",
          text: "BLS Override (Bravo)",
          recResponse: 40,
          subCodes: [
            {
              suffix: "B",
              text: "Biological",
              recResponse: 40,
            },
            {
              suffix: "C",
              text: "Chemical",
              recResponse: 40,
            },
            {
              suffix: "G",
              text: "Smell of Gas/Fumes",
              recResponse: 40,
            },
            {
              suffix: "M",
              text: "Carbon Monoxide",
              recResponse: 40,
            },
            {
              suffix: "N",
              text: "Nuclear",
              recResponse: 40,
            },
            {
              suffix: "R",
              text: "Radiological",
              recResponse: 40,
            },
            {
              suffix: "S",
              text: "Suicide Attempt (Only Carbon Monoxide)",
              recResponse: 40,
            },
            {
              suffix: "T",
              text: "Suicide Attempt (Other Toxic Substances)",
              recResponse: 40,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 40,
            },
          ],
        },
        {
          code: "08B01",
          text: "Alert w/o Diff Breathing",
          recResponse: 41,
          subCodes: [
            {
              suffix: "B",
              text: "Biological",
              recResponse: 41,
            },
            {
              suffix: "C",
              text: "Chemical",
              recResponse: 41,
            },
            {
              suffix: "G",
              text: "Smell of Gas/Fumes",
              recResponse: 41,
            },
            {
              suffix: "M",
              text: "Carbon Monoxide",
              recResponse: 41,
            },
            {
              suffix: "N",
              text: "Nuclear",
              recResponse: 41,
            },
            {
              suffix: "R",
              text: "Radiological",
              recResponse: 41,
            },
            {
              suffix: "S",
              text: "Suicide Attempt (Only Carbon Monoxide)",
              recResponse: 41,
            },
            {
              suffix: "T",
              text: "Suicide Attempt (Other Toxic Substances)",
              recResponse: 41,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 41,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "08C00",
          text: "ALS Override (Charlie)",
          recResponse: 42,
          subCodes: [
            {
              suffix: "B",
              text: "Biological",
              recResponse: 42,
            },
            {
              suffix: "C",
              text: "Chemical",
              recResponse: 42,
            },
            {
              suffix: "G",
              text: "Smell of Gas/Fumes",
              recResponse: 42,
            },
            {
              suffix: "M",
              text: "Carbon Monoxide",
              recResponse: 42,
            },
            {
              suffix: "N",
              text: "Nuclear",
              recResponse: 42,
            },
            {
              suffix: "R",
              text: "Radiological",
              recResponse: 42,
            },
            {
              suffix: "S",
              text: "Suicide Attempt (Only Carbon Monoxide)",
              recResponse: 42,
            },
            {
              suffix: "T",
              text: "Suicide Attempt (Other Toxic Substances)",
              recResponse: 42,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 42,
            },
          ],
        },
        {
          code: "08C01",
          text: "Alert w/ Diff Breathing",
          recResponse: 42,
          subCodes: [
            {
              suffix: "B",
              text: "Biological",
              recResponse: 42,
            },
            {
              suffix: "C",
              text: "Chemical",
              recResponse: 42,
            },
            {
              suffix: "G",
              text: "Smell of Gas/Fumes",
              recResponse: 42,
            },
            {
              suffix: "M",
              text: "Carbon Monoxide",
              recResponse: 42,
            },
            {
              suffix: "N",
              text: "Nuclear",
              recResponse: 42,
            },
            {
              suffix: "R",
              text: "Radiological",
              recResponse: 42,
            },
            {
              suffix: "S",
              text: "Suicide Attempt (Only Carbon Monoxide)",
              recResponse: 42,
            },
            {
              suffix: "T",
              text: "Suicide Attempt (Other Toxic Substances)",
              recResponse: 42,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 42,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "08D00",
          text: "ALS Override (Delta)",
          recResponse: 43,
          subCodes: [
            {
              suffix: "B",
              text: "Biological",
              recResponse: 43,
            },
            {
              suffix: "C",
              text: "Chemical",
              recResponse: 43,
            },
            {
              suffix: "G",
              text: "Smell of Gas/Fumes",
              recResponse: 43,
            },
            {
              suffix: "M",
              text: "Carbon Monoxide",
              recResponse: 43,
            },
            {
              suffix: "N",
              text: "Nuclear",
              recResponse: 43,
            },
            {
              suffix: "R",
              text: "Radiological",
              recResponse: 43,
            },
            {
              suffix: "S",
              text: "Suicide Attempt (Only Carbon Monoxide)",
              recResponse: 43,
            },
            {
              suffix: "T",
              text: "Suicide Attempt (Other Toxic Substances)",
              recResponse: 43,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 43,
            },
          ],
        },
        {
          code: "08D01",
          text: "Arrest",
          notBreathing: true,
          recResponse: 44,
          subCodes: [
            {
              suffix: "B",
              text: "Biological",
              recResponse: 44,
            },
            {
              suffix: "C",
              text: "Chemical",
              recResponse: 44,
            },
            {
              suffix: "G",
              text: "Smell of Gas/Fumes",
              recResponse: 44,
            },
            {
              suffix: "M",
              text: "Carbon Monoxide",
              recResponse: 44,
            },
            {
              suffix: "N",
              text: "Nuclear",
              recResponse: 44,
            },
            {
              suffix: "R",
              text: "Radiological",
              recResponse: 44,
            },
            {
              suffix: "S",
              text: "Suicide Attempt (Only Carbon Monoxide)",
              recResponse: 44,
            },
            {
              suffix: "T",
              text: "Suicide Attempt (Other Toxic Substances)",
              recResponse: 44,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 44,
            },
          ],
        },
        {
          code: "08D02",
          text: "Unconscious",
          notConscious: true,
          recResponse: 43,
          subCodes: [
            {
              suffix: "B",
              text: "Biological",
              recResponse: 43,
            },
            {
              suffix: "C",
              text: "Chemical",
              recResponse: 43,
            },
            {
              suffix: "G",
              text: "Smell of Gas/Fumes",
              recResponse: 43,
            },
            {
              suffix: "M",
              text: "Carbon Monoxide",
              recResponse: 43,
            },
            {
              suffix: "N",
              text: "Nuclear",
              recResponse: 43,
            },
            {
              suffix: "R",
              text: "Radiological",
              recResponse: 43,
            },
            {
              suffix: "S",
              text: "Suicide Attempt (Only Carbon Monoxide)",
              recResponse: 43,
            },
            {
              suffix: "T",
              text: "Suicide Attempt (Other Toxic Substances)",
              recResponse: 43,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 43,
            },
          ],
        },
        {
          code: "08D03",
          text: "Not Alert",
          recResponse: 42,
          subCodes: [
            {
              suffix: "B",
              text: "Biological",
              recResponse: 42,
            },
            {
              suffix: "C",
              text: "Chemical",
              recResponse: 42,
            },
            {
              suffix: "G",
              text: "Smell of Gas/Fumes",
              recResponse: 42,
            },
            {
              suffix: "M",
              text: "Carbon Monoxide",
              recResponse: 42,
            },
            {
              suffix: "N",
              text: "Nuclear",
              recResponse: 42,
            },
            {
              suffix: "R",
              text: "Radiological",
              recResponse: 42,
            },
            {
              suffix: "S",
              text: "Suicide Attempt (Only Carbon Monoxide)",
              recResponse: 42,
            },
            {
              suffix: "T",
              text: "Suicide Attempt (Other Toxic Substances)",
              recResponse: 42,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 42,
            },
          ],
        },
        {
          code: "08D04",
          text: "Diff Speaking Between Breaths",
          recResponse: 42,
          subCodes: [
            {
              suffix: "B",
              text: "Biological",
              recResponse: 42,
            },
            {
              suffix: "C",
              text: "Chemical",
              recResponse: 42,
            },
            {
              suffix: "G",
              text: "Smell of Gas/Fumes",
              recResponse: 42,
            },
            {
              suffix: "M",
              text: "Carbon Monoxide",
              recResponse: 42,
            },
            {
              suffix: "N",
              text: "Nuclear",
              recResponse: 42,
            },
            {
              suffix: "R",
              text: "Radiological",
              recResponse: 42,
            },
            {
              suffix: "S",
              text: "Suicide Attempt (Only Carbon Monoxide)",
              recResponse: 42,
            },
            {
              suffix: "T",
              text: "Suicide Attempt (Other Toxic Substances)",
              recResponse: 42,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 42,
            },
          ],
        },
        {
          code: "08D05",
          text: "Mult Victims",
          multPatient: true,
          recResponse: 45,
          subCodes: [
            {
              suffix: "B",
              text: "Biological",
              recResponse: 45,
            },
            {
              suffix: "C",
              text: "Chemical",
              recResponse: 45,
            },
            {
              suffix: "G",
              text: "Smell of Gas/Fumes",
              recResponse: 45,
            },
            {
              suffix: "M",
              text: "Carbon Monoxide",
              recResponse: 45,
            },
            {
              suffix: "N",
              text: "Nuclear",
              recResponse: 45,
            },
            {
              suffix: "R",
              text: "Radiological",
              recResponse: 45,
            },
            {
              suffix: "S",
              text: "Suicide Attempt (Only Carbon Monoxide)",
              recResponse: 45,
            },
            {
              suffix: "T",
              text: "Suicide Attempt (Other Toxic Substances)",
              recResponse: 45,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 45,
            },
          ],
        },
        {
          code: "08D06",
          text: "Unkn Status/Other Codes Not Applicable",
          recResponse: 42,
          subCodes: [
            {
              suffix: "B",
              text: "Biological",
              recResponse: 42,
            },
            {
              suffix: "C",
              text: "Chemical",
              recResponse: 42,
            },
            {
              suffix: "G",
              text: "Smell of Gas/Fumes",
              recResponse: 42,
            },
            {
              suffix: "M",
              text: "Carbon Monoxide",
              recResponse: 42,
            },
            {
              suffix: "N",
              text: "Nuclear",
              recResponse: 42,
            },
            {
              suffix: "R",
              text: "Radiological",
              recResponse: 42,
            },
            {
              suffix: "S",
              text: "Suicide Attempt (Only Carbon Monoxide)",
              recResponse: 42,
            },
            {
              suffix: "T",
              text: "Suicide Attempt (Other Toxic Substances)",
              recResponse: 42,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 42,
            },
          ],
        },
      ],
    },
  ],
};
