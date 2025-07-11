import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const BREATHING_PROB: IEMSComplaint = {
  protocol: 6,
  name: "Breathing Problems",
  shortName: "Breathing Prob",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "C",
  defaultPlan: 22,
  defaultCode: "06C01",
  preSend: true,
  questions: [
    {
      text: (
        <p>
          <span className="text-blue-400">(If not obvious (1st pty))</span> Is
          **pronoun** able to talk to you{" "}
          <span className="text-blue-400">(cry)</span> at all?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientConsciousness, patientBreathing } = patient;
        return (
          patientConsciousness !== "no" &&
          patientBreathing !== "no" &&
          patientBreathing !== "agonal/ineffective"
        );
      },
      preRenderLogic: "Patient is conscious and breathing",
      preRenderDependencies: ["patient"],
      answers: [
        {
          answer: "Yes",
          display: "Can talk or cry",
          questionDisplay: "**pronoun** can talk or cry",
          continue: true,
        },
        {
          answer: "No",
          display: "Cannot talk or cry",
          questionDisplay: "**pronoun** cannot talk or cry",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if can talk or cry",
          questionDisplay: "Unk if **pronoun** can talk or cry",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Did **pronoun** <b className="font-bold">choke</b> on anything first?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.answer;
        return lastAnswer === "No";
      },
      preRenderLogic: "Patient is unable to talk or cry",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "**pronoun** did not choke on anything prior",
          questionDisplay: "**pronoun** did not choke on anything",
          continue: true,
        },
        {
          answer: "Yes",
          display: "**pronoun** choked on something prior",
          questionDisplay: "**pronoun** choked on something",
          gotoProtocol: 11,
        },
        {
          answer: "Unknown",
          display: "Unk if **pronoun** choked prior",
          questionDisplay: "Unk if **pronoun** choked on anything",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(If not obvious (1st pty))</span> Is
          **pronoun** having difficulty{" "}
          <b className="font-bold">speaking between breaths</b>?
        </p>
      ),
      questionType: "select",
      defaultTab: "ai",
      additionalInstructions: (
        <div className="space-y-8">
          <AI.DiffSpeakingBtwnBreaths />
          <AI.ChangingColor />
        </div>
      ),
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
          updateCode: "06D02",
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
            "**pronoun** is completely alert (responding appropriately)",
          continue: true,
        },
        {
          answer: "No",
          display: "NOT responding nlly",
          questionDisplay:
            "**pronoun** is NOT completely alert (not responding appropriately)",
          updateCode: "06D01",
          send: true,
          continue: true,
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
      preRenderInstructions: (patient) => {
        const { patientProximity } = patient;
        return patientProximity !== "first";
      },
      preRenderLogic: "Patient is not the caller",
      preRenderDependencies: ["proximity"],
      additionalInstructions: <AI.ChangingColor />,
      defaultTab: "ai",
      answers: [
        {
          answer: "No",
          display: "Not changing color",
          questionDisplay: "**pronoun** is not changing color",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Changing color",
          questionDisplay: "**pronoun** is changing color",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if changing color",
          questionDisplay: "Unk if **pronoun** is changing color",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Have you noticed your skin <b className="font-bold">changing color</b>
          ?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientProximity } = patient;
        return patientProximity === "first";
      },
      preRenderLogic: "Patient is the caller",
      preRenderDependencies: ["proximity"],
      additionalInstructions: <AI.ChangingColor />,
      defaultTab: "ai",
      answers: [
        {
          answer: "No",
          display: "Not changing color",
          questionDisplay: "**pronoun** is not changing color",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Changing color",
          questionDisplay: "**pronoun** is changing color",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if changing color",
          questionDisplay: "Unk if **pronoun** is changing color",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <b className="font-bold">Describe</b> the color change
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient, answers) => {
        const { patientProximity } = patient;
        const lastAnswer = answers[answers.length - 1].answer;
        return lastAnswer === "Yes";
      },
      preRenderLogic: "Patient has had a change in color",
      preRenderDependencies: ["answers", "proximity"],
      additionalInstructions: <AI.ChangingColor />,
      defaultTab: "ai",
      answers: [
        {
          answer: "Ashen",
          display: "Ashen color rptd",
          questionDisplay: "**pronoun** has ashen color",
          updateCode: "06D03",
          continue: true,
          send: true,
        },
        {
          answer: "Gray",
          display: "Gray color rptd",
          questionDisplay: "**pronoun** has gray color",
          updateCode: "06D03",
          continue: true,
          send: true,
        },
        {
          answer: "Blue",
          display: "Blue color rptd",
          questionDisplay: "**pronoun** has blue color",
          updateCode: "06D03",
          continue: true,
          send: true,
        },
        {
          answer: "Cyanotic",
          display: "Cyanotic color rptd",
          questionDisplay: "**pronoun** has cyanotic color",
          updateCode: "06D03",
          continue: true,
          send: true,
        },
        {
          answer: "Purple",
          display: "Purple color rptd",
          questionDisplay: "**pronoun** has purple color",
          updateCode: "06D03",
          continue: true,
          send: true,
        },
        {
          answer: "Mottled",
          display: "Mottled color rptd",
          questionDisplay: "**pronoun** has mottled color",
          updateCode: "06D03",
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
      text: (
        <p>
          Is **pronoun** <b className="font-bold">clammy</b>{" "}
          <span className="text-red-400">(cold sweats)</span>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientProximity } = patient;
        return patientProximity !== "first";
      },
      preRenderLogic: "Patient is not the caller",
      preRenderDependencies: ["proximity"],
      answers: [
        {
          answer: "No",
          display: "Not clammy",
          questionDisplay: "**pronoun** is not clammy",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Clammy",
          questionDisplay: "**pronoun** is clammy",
          updateCode: "06D04",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if clammy",
          questionDisplay: "Unk if **pronoun** is clammy",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Are you <b className="font-bold">clammy</b>{" "}
          <span className="text-red-400">(cold sweats)</span>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientProximity } = patient;
        return patientProximity === "first";
      },
      preRenderLogic: "Patient is the caller",
      preRenderDependencies: ["proximity"],
      answers: [
        {
          answer: "No",
          display: "Not clammy",
          questionDisplay: "**pronoun** is not clammy",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Clammy",
          questionDisplay: "**pronoun** is clammy",
          updateCode: "06D04",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if clammy",
          questionDisplay: "Unk if **pronoun** is clammy",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have <b className="font-bold">asthma</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientProximity } = patient;
        return patientProximity !== "first";
      },
      preRenderLogic: "Patient is not the caller",
      preRenderDependencies: ["proximity"],
      answers: [
        {
          answer: "No",
          display: "No asthma",
          questionDisplay: "**pronoun** does not have asthma",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Has asthma",
          questionDisplay: "**pronoun** has asthma",
          updateSuffix: "A",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if asthma",
          questionDisplay: "Unk if **pronoun** has asthma",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Do you have <b className="font-bold">asthma</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientProximity } = patient;
        return patientProximity === "first";
      },
      preRenderLogic: "Patient is the caller",
      preRenderDependencies: ["proximity"],
      answers: [
        {
          answer: "No",
          display: "No asthma",
          questionDisplay: "**pronoun** does not have asthma",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Has asthma",
          questionDisplay: "**pronoun** has asthma",
          updateSuffix: "A",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if asthma",
          questionDisplay: "Unk if **pronoun** has asthma",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have <b className="font-bold">COPD</b> (Chronic
          Obstructive Pulmonary Disease)
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientProximity } = patient;
        return patientProximity !== "first";
      },
      preRenderLogic: "Patient is not the caller",
      preRenderDependencies: ["proximity"],
      answers: [
        {
          answer: "No",
          display: "No COPD",
          questionDisplay: "**pronoun** does not have COPD",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Has COPD",
          questionDisplay: "**pronoun** has COPD",
          updateSuffix: "E",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if COPD",
          questionDisplay: "Unk if **pronoun** has COPD",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Do you have <b className="font-bold">COPD</b> (Chronic Obstructive
          Pulmonary Disease)
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientProximity } = patient;
        return patientProximity === "first";
      },
      preRenderLogic: "Patient is the caller",
      preRenderDependencies: ["proximity"],
      answers: [
        {
          answer: "No",
          display: "No COPD",
          questionDisplay: "**pronoun** does not have COPD",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Has COPD",
          questionDisplay: "**pronoun** has COPD",
          updateSuffix: "E",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if COPD",
          questionDisplay: "Unk if **pronoun** has COPD",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have any other{" "}
          <b className="font-bold">lung problems</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient, answers) => {
        const { patientProximity } = patient;
        const asthmaAnswer =
          answers.find((a) => a.question === "Do you have asthma?")?.answer ||
          answers.find((a) => a.question === "Does **pronoun** have asthma?")
            ?.answer;
        const copdAnswer =
          answers.find(
            (a) =>
              a.question ===
              "Do you have COPD (Chronic Obstructive Pulmonary Disease)?"
          )?.answer ||
          answers.find(
            (a) =>
              a.question ===
              "Does **pronoun** have COPD (Chronic Obstructive Pulmonary Disease)?"
          )?.answer;
        return (
          patientProximity !== "first" &&
          asthmaAnswer !== "Yes" &&
          copdAnswer !== "Yes"
        );
      },
      preRenderLogic:
        "Patient is not the caller and does not have asthma or COPD",
      preRenderDependencies: ["proximity", "answers"],
      answers: [
        {
          answer: "No",
          display: "No other lung problems",
          questionDisplay: "**pronoun** does not have any other lung problems",
          continue: true,
        },
        {
          answer: "Yes (input problems):",
          display: "PT has other lung problems: {input}",
          questionDisplay: "**pronoun** has other lung problems: {input}",
          input: true,
          continue: true,
          updateSuffix: "O",
        },
        {
          answer: "Unknown",
          display: "Unk if other lung problems",
          questionDisplay: "Unk if **pronoun** has any other lung problems",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Do you have any other <b className="font-bold">lung problems</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient, answers) => {
        const { patientProximity } = patient;
        const asthmaAnswer = answers.find(
          (a) => a.question === "Do you have asthma?"
        )?.answer;
        const copdAnswer = answers.find(
          (a) =>
            a.question ===
            "Do you have COPD (Chronic Obstructive Pulmonary Disease)?"
        )?.answer;
        return (
          patientProximity === "first" &&
          asthmaAnswer !== "Yes" &&
          copdAnswer !== "Yes"
        );
      },
      preRenderLogic: "Patient is the caller and does not have asthma or COPD",
      preRenderDependencies: ["proximity", "answers"],
      answers: [
        {
          answer: "No",
          display: "No other lung problems",
          questionDisplay: "**pronoun** does not have any other lung problems",
          continue: true,
        },
        {
          answer: "Yes (input problems):",
          display: "PT has other lung problems: {input}",
          questionDisplay: "**pronoun** has other lung problems: {input}",
          input: true,
          continue: true,
          updateSuffix: "O",
        },
        {
          answer: "Unknown",
          display: "Unk if other lung problems",
          questionDisplay: "Unk if **pronoun** has any other lung problems",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(Tracheostomy blockage)</span> Does
          **pronoun** have any <b className="font-bold">special equipment</b> or{" "}
          <b className="font-bold">instructions</b> to treat this?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientProximity } = patient;
        return patientProximity !== "first";
      },
      preRenderLogic: "Patient is not the caller",
      preRenderDependencies: ["proximity"],
      answers: [
        {
          answer: "Not applicable",
          display: "N/A",
          questionDisplay: "N/A",
          continue: true,
        },
        {
          answer: "No",
          display: "No special equipment or instructions",
          questionDisplay:
            "**pronoun** has no special equipment or instructions",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Has special equipment or instructions",
          questionDisplay: "**pronoun** has special equipment or instructions",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if special equipment or instructions",
          questionDisplay:
            "Unk if **pronoun** has special equipment or instructions",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(Tracheostomy blockage)</span> Do you
          have any <b className="font-bold">special equipment</b> or{" "}
          <b className="font-bold">instructions</b> to treat this?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientProximity } = patient;
        return patientProximity === "first";
      },
      preRenderLogic: "Patient is the caller",
      preRenderDependencies: ["proximity"],
      answers: [
        {
          answer: "Not applicable",
          display: "N/A",
          questionDisplay: "N/A",
          continue: true,
        },
        {
          answer: "No",
          display: "No special equipment or instructions",
          questionDisplay:
            "**pronoun** has no special equipment or instructions",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Has special equipment or instructions",
          questionDisplay: "**pronoun** has special equipment or instructions",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if special equipment or instructions",
          questionDisplay:
            "Unk if **pronoun** has special equipment or instructions",
          continue: true,
        },
      ],
    },
  ],
  determinants: [
    {
      priority: "C",
      codes: [
        {
          code: "06C01",
          text: "Abnormal Breathing",
          recResponse: 22,
          subCodes: [
            {
              suffix: "A",
              text: "Asthma",
              recResponse: 22,
            },
            {
              suffix: "E",
              text: "COPD (Emphysema/Chronic Bronchitis)",
              recResponse: 22,
            },
            {
              suffix: "O",
              text: "Other Lung Problems",
              recResponse: 22,
            },
          ],
        },
        {
          code: "06C02",
          text: "Tracheostomy (No Obvious Distress)",
          recResponse: 23,
          subCodes: [
            {
              suffix: "A",
              text: "Asthma",
              recResponse: 23,
            },
            {
              suffix: "E",
              text: "COPD (Emphysema/Chronic Bronchitis)",
              recResponse: 23,
            },
            {
              suffix: "O",
              text: "Other Lung Problems",
              recResponse: 23,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "06D00",
          text: "ALS Override (Delta)",
          recResponse: 24,
          subCodes: [
            {
              suffix: "A",
              text: "Asthma",
              recResponse: 24,
            },
            {
              suffix: "E",
              text: "COPD (Emphysema/Chronic Bronchitis)",
              recResponse: 24,
            },
            {
              suffix: "O",
              text: "Other Lung Problems",
              recResponse: 24,
            },
          ],
        },
        {
          code: "06D01",
          text: "Not Alert",
          recResponse: 22,
          subCodes: [
            {
              suffix: "A",
              text: "Asthma",
              recResponse: 22,
            },
            {
              suffix: "E",
              text: "COPD (Emphysema/Chronic Bronchitis)",
              recResponse: 22,
            },
            {
              suffix: "O",
              text: "Other Lung Problems",
              recResponse: 22,
            },
          ],
        },
        {
          code: "06D02",
          text: "Diff Speaking Between Breaths",
          recResponse: 22,
          subCodes: [
            {
              suffix: "A",
              text: "Asthma",
              recResponse: 22,
            },
            {
              suffix: "E",
              text: "COPD (Emphysema/Chronic Bronchitis)",
              recResponse: 22,
            },
            {
              suffix: "O",
              text: "Other Lung Problems",
              recResponse: 22,
            },
          ],
        },
        {
          code: "06D03",
          text: "Changing Color",
          recResponse: 22,
          subCodes: [
            {
              suffix: "A",
              text: "Asthma",
              recResponse: 22,
            },
            {
              suffix: "E",
              text: "COPD (Emphysema/Chronic Bronchitis)",
              recResponse: 22,
            },
            {
              suffix: "O",
              text: "Other Lung Problems",
              recResponse: 22,
            },
          ],
        },
        {
          code: "06D04",
          text: "Clammy or Cold Sweats",
          recResponse: 22,
          subCodes: [
            {
              suffix: "A",
              text: "Asthma",
              recResponse: 22,
            },
            {
              suffix: "E",
              text: "COPD (Emphysema/Chronic Bronchitis)",
              recResponse: 22,
            },
            {
              suffix: "O",
              text: "Other Lung Problems",
              recResponse: 22,
            },
          ],
        },
        {
          code: "06D05",
          text: "Tracheostomy (Obvious Distress)",
          recResponse: 22,
          subCodes: [
            {
              suffix: "A",
              text: "Asthma",
              recResponse: 22,
            },
            {
              suffix: "E",
              text: "COPD (Emphysema/Chronic Bronchitis)",
              recResponse: 22,
            },
            {
              suffix: "O",
              text: "Other Lung Problems",
              recResponse: 22,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "06E00",
          text: "ALS Override (Echo)",
          recResponse: 25,
          subCodes: [
            {
              suffix: "A",
              text: "Asthma",
              recResponse: 25,
            },
            {
              suffix: "E",
              text: "COPD (Emphysema/Chronic Bronchitis)",
              recResponse: 25,
            },
            {
              suffix: "O",
              text: "Other Lung Problems",
              recResponse: 25,
            },
          ],
        },
        {
          code: "06E01",
          text: "Ineffective Breathing",
          notBreathing: true,
          recResponse: 25,
          subCodes: [
            {
              suffix: "A",
              text: "Asthma",
              recResponse: 25,
            },
            {
              suffix: "E",
              text: "COPD (Emphysema/Chronic Bronchitis)",
              recResponse: 25,
            },
            {
              suffix: "O",
              text: "Other Lung Problems",
              recResponse: 25,
            },
          ],
        },
      ],
    },
  ],
};
