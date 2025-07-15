import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const SICK_PERSON: IEMSComplaint = {
  protocol: 26,
  name: "Sick Person (Specific Diagnosis)",
  shortName: "Sick Person",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 147,
  defaultCode: "26A01",
  questions: [
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
          updateCode: "26D01",
          continue: true,
          send: true,
        },
        {
          answer: "Altered level of consciousness",
          display: "Altered LOC",
          questionDisplay: "**pronoun** has an altered level of consciousness",
          updateCode: "26C01",
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
        <p>
          <span className="text-blue-400">(Not obvious)</span> Are you{" "}
          <b className="font-bold">breathing normally</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing normally",
          continue: true,
        },
        {
          answer: "No",
          display: "NOT breathing nlly",
          questionDisplay: "**pronoun** is NOT breathing normally",
          updateCode: "26C02",
          continue: true,
          send: true,
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
          Is **pronoun** <b className="font-bold">bleeding</b> or{" "}
          <b className="font-bold">vomiting blood</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Are you <b className="font-bold">bleeding</b> or{" "}
          <b className="font-bold">vomiting blood</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No bleeding or vomit blood",
          questionDisplay: "**pronoun** is not bleeding or vomiting blood",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Bleeding or vomit blood",
          questionDisplay: "**pronoun** is bleeding or vomiting blood",
          gotoProtocol: 21,
        },
        {
          answer: "Unknown",
          display: "Unk if bleeding or vomit blood",
          questionDisplay: "Unk if **pronoun** is bleeding or vomiting blood",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have any <b className="font-bold">pain</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Do you have any <b className="font-bold">pain</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const firstAnswer = answers[0]?.answer;
        return firstAnswer === "Yes";
      },
      preRenderLogic: "pt is alert",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Chest pain",
          display: "Chest pain",
          questionDisplay: "**pronoun** has chest pain",
          gotoProtocol: 10,
        },
        {
          answer: "Sickle cell crisis",
          display: "Sickle cell crisis",
          questionDisplay: "**pronoun** is having a sickle cell crisis",
          updateCode: "26C03",
          continue: true,
          send: true,
        },
        {
          answer: "Thalassemia",
          display: "Thalassemia",
          questionDisplay: "**pronoun** has thalassemia",
          updateCode: "26C03",
          continue: true,
          send: true,
        },
        {
          answer: "Autonomic dysreflexia/hyperreflexia",
          display: "Autonomic dysreflexia/hyperreflexia",
          questionDisplay:
            "**pronoun** has autonomic dysreflexia/hyperreflexia",
          updateCode: "26C04",
          continue: true,
          send: true,
        },
        {
          answer: "Acute adrenal insufficiency/crisis or Addison's disease",
          display: "Acute adrenal insufficiency/crisis or Addison's disease",
          questionDisplay:
            "**pronoun** has acute adrenal insufficiency/crisis or Addison's disease",
          updateCode: "26C05",
          continue: true,
          send: true,
        },
        {
          answer: "Other pain:",
          display: "Other pain: {input}",
          questionDisplay: "**pronoun** has other pain: {input}",
          updateCode: "26A08",
          continue: true,
          input: true,
        },
        {
          answer: "No",
          display: "No other pain",
          questionDisplay: "**pronoun** does not have any pain",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if pain",
          questionDisplay: "Unk if **pronoun** has any pain",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is the "Primary Problem" one of the listed ALPHA-LEVEL complaints?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "None of These",
          display: "No priority sx (ALPHA 2-12 not ID'd)",
          questionDisplay:
            "**pronoun** has no priority symptoms (ALPHA 2-12 not ID'd)",
          continue: true,
        },
        {
          answer: "Blood pressure abnormality (asymptomatic)",
          display: "Blood pressure abnormality (asymptomatic)",
          questionDisplay:
            "**pronoun** has blood pressure abnormality (asymptomatic)",
          updateCode: "26A02",
          end: true,
        },
        {
          answer: "Dizziness/Vertigo",
          display: "Dizziness/vertigo",
          questionDisplay: "**pronoun** has dizziness/vertigo",
          updateCode: "26A03",
          end: true,
        },
        {
          answer: "Fever/Chills",
          display: "Fever/chills",
          questionDisplay: "**pronoun** has fever/chills",
          updateCode: "26A04",
          end: true,
        },
        {
          answer: "General weakness",
          display: "General weakness",
          questionDisplay: "**pronoun** has general weakness",
          updateCode: "26A05",
          end: true,
        },
        {
          answer: "Nausea",
          display: "Nausea",
          questionDisplay: "**pronoun** has nausea",
          updateCode: "26A06",
          end: true,
        },
        {
          answer: "New (not sudden) onset of immobility",
          display: "New (not sudden) onset of immobility",
          questionDisplay:
            "**pronoun** has new (not sudden) onset of immobility",
          updateCode: "26A07",
          end: true,
        },
        {
          answer: "Transportation Only",
          display: "Transportation Only",
          questionDisplay: "**pronoun** needs transport only",
          updateCode: "26A09",
          end: true,
        },
        {
          answer: "Unwell/Ill",
          display: "Unwell/ill",
          questionDisplay: "**pronoun** is unwell/ill",
          updateCode: "26A10",
          end: true,
        },
        {
          answer: "Vomiting",
          display: "Vomiting",
          questionDisplay: "**pronoun** is vomiting",
          updateCode: "26A11",
          end: true,
        },
        {
          answer: "Possible Contaigious Disease",
          display: "Possible contagious disease",
          questionDisplay: "**pronoun** has possible contagious disease",
          updateCode: "26A12",
          end: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is the "Primary Problem" one of the listed OMEGA-Level complaints?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "None of These",
          display: "No priority sx (OMEGA 2-28 not ID'd)",
          questionDisplay:
            "**pronoun** has no priority symptoms (OMEGA 2-28 not ID'd)",
          updateCode: "26A01",
          end: true,
        },
        {
          answer: "Boils",
          display: "Boils",
          questionDisplay: "**pronoun** has boils",
          updateCode: "26O02",
          end: true,
        },
        {
          answer: "Bumps (Non-Traumatic)",
          display: "Bumps (non-traumatic)",
          questionDisplay: "**pronoun** has bumps (non-traumatic)",
          updateCode: "26O03",
          end: true,
        },
        {
          answer: "Can't Sleep",
          display: "Can't sleep",
          questionDisplay: "**pronoun** can't sleep",
          updateCode: "26O04",
          end: true,
        },
        {
          answer: "Can't Urinate (w/o Abdominal Pain)",
          display: "Can't urinate (w/o abdominal pain)",
          questionDisplay: "**pronoun** can't urinate (w/o abdominal pain)",
          updateCode: "26O05",
          end: true,
        },
        {
          answer: "Catheter (Urinary-In/Out w/o Hemorrhaging)",
          display: "Has urinary catheter (in/out w/o hemorrhaging)",
          questionDisplay:
            "**pronoun** has urinary catheter (in/out w/o hemorrhaging)",
          updateCode: "26O06",
          end: true,
        },
        {
          answer: "Constipation",
          display: "Constipation",
          questionDisplay: "**pronoun** has constipation",
          updateCode: "26O07",
          end: true,
        },
        {
          answer: "Cramps/Spasms/Join Pain (In Extremities & Non-Traumatic)",
          display: "Cramps/spasms/joint pn (in extremities & non-traumatic)",
          questionDisplay:
            "**pronoun** has cramps/spasms/joint pn (in extremities & non-traumatic)",
          updateCode: "26O08",
          end: true,
        },
        {
          answer: "Cut-Off Ring Request",
          display: "Cut-off ring request",
          questionDisplay: "**pronoun** has cut-off ring request",
          updateCode: "26O09",
          end: true,
        },
        {
          answer: "Deafness",
          display: "Deafness",
          questionDisplay: "**pronoun** has deafness",
          updateCode: "26O10",
          end: true,
        },
        {
          answer: "Defecation/Diarrhea",
          display: "Defecation/diarrhea problem",
          questionDisplay: "**pronoun** has defecation/diarrhea",
          updateCode: "26O11",
          end: true,
        },
        {
          answer: "Earache",
          display: "Earache",
          questionDisplay: "**pronoun** has earache",
          updateCode: "26O12",
          end: true,
        },
        {
          answer: "Enema",
          display: "Enema",
          questionDisplay: "**pronoun** needs an enema",
          updateCode: "26O13",
          end: true,
        },
        {
          answer: "Gout",
          display: "Gout",
          questionDisplay: "**pronoun** has gout",
          updateCode: "26O14",
          end: true,
        },
        {
          answer: "Hemorrhoids/Piles",
          display: "Hemorrhoids/piles",
          questionDisplay: "**pronoun** has hemorrhoids/piles",
          updateCode: "26O15",
          end: true,
        },
        {
          answer: "Hepatitis",
          display: "Hepatitis",
          questionDisplay: "**pronoun** has hepatitis",
          updateCode: "26O16",
          end: true,
        },
        {
          answer: "Hiccups",
          display: "Hiccups",
          questionDisplay: "**pronoun** has hiccups",
          updateCode: "26O17",
          end: true,
        },
        {
          answer: "Itching",
          display: "Itching",
          questionDisplay: "**pronoun** has itching",
          updateCode: "26O18",
          end: true,
        },
        {
          answer: "Nervous",
          display: "Nervous",
          questionDisplay: "**pronoun** is nervous",
          updateCode: "26O19",
          end: true,
        },
        {
          answer: "Object Stuck (Nose, Ear, Vagina, Rectum, etc.):",
          display: "Object stuck: {input}",
          questionDisplay: "**pronoun** has object stuck: {input}",
          updateCode: "26O20",
          end: true,
          input: true,
        },
        {
          answer: "Object Swallowed (No Choking or Diff Breathing):",
          display: "Swallowed {input} (w/o choking or diff breathing)",
          questionDisplay: "**pronoun** has swallowed: {input} (w/o choking or diff breathing)",
          updateCode: "26O21",
          end: true,
          input: true,
        },
        {
          answer: "Painful Urination",
          display: "Painful urination",
          questionDisplay: "**pronoun** has painful urination",
          updateCode: "26O22",
          end: true,
        },
        {
          answer: "Penis Problems/Pain",
          display: "Penis problems or pain",
          questionDisplay: "**pronoun** has penis problems or pain",
          updateCode: "26O23",
          end: true,
        },
        {
          answer: "Rash/Skin Disorder (w/o Diff Breathing or Swallowing)",
          display:
            "Pt has rash or skin disorder (no diff breathing or swallowing)",
          questionDisplay: "**pronoun** has rash or skin disorder (no diff breathing or swallowing)",
          updateCode: "26O24",
          end: true,
        },
        {
          answer: "Sexually Transmitted Disease (STD)",
          display: "Sexually transmitted disease (std)",
          questionDisplay: "**pronoun** has sexually transmitted disease (std)",
          updateCode: "26O25",
          end: true,
        },
        {
          answer: "Sore Throat (w/o diff breathing or swallowing)",
          display: "Sore throat (w/o diff breathing or swallowing)",
          questionDisplay: "**pronoun** has sore throat (w/o diff breathing or swallowing)",
          updateCode: "26O26",
          end: true,
        },
        {
          answer: "Toothache (w/o Jaw Pain)",
          display: "Toothache (w/o jaw pain)",
          questionDisplay: "**pronoun** has toothache (w/o jaw pain)",
          updateCode: "26O27",
          end: true,
        },
        {
          answer: "Infected Wound (Focal or Surface)",
          display: "Infected wound (focal or surface)",
          questionDisplay: "**pronoun** has infected wound (focal or surface)",
          updateCode: "26O28",
          end: true,
        },
      ],
    },
  ],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "26O01",
          text: "Code Not in Use",
          recResponse: 147,
        },
        {
          code: "26O02",
          text: "Boils",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O03",
          text: "Bumps (Non-Traumatic)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O04",
          text: "Can't Sleep",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O05",
          text: "Can't Urinate (w/o Abdominal Pain)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O06",
          text: "Catheter (Urinary-In/Out w/o Hemorrhaging)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O07",
          text: "Constipation",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O08",
          text: "Cramps/Spasms/Joint Pain (In Extremities & Non-Traumatic)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O09",
          text: "Cut-Off Ring Request",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O10",
          text: "Deafness",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O11",
          text: "Defecation/Diarrhea",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O12",
          text: "Earache",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O13",
          text: "Enema",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O14",
          text: "Gout",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O15",
          text: "Hemorrhoids/Piles",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O16",
          text: "Hepatitis",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O17",
          text: "Hiccups",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O18",
          text: "Itching",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O19",
          text: "Nervous",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O20",
          text: "Object Stuck (Nose, Ear, Vagina, Rectum, etc.)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O21",
          text: "Object Swallowed (w/o Choking or Diff Breathing, Can Talk)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O22",
          text: "Painful Urination",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O23",
          text: "Penis Problems/Pain",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O24",
          text: "Rash/Skin Disorder (w/o Diff Breathing or Swallowing)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O25",
          text: "Sexually Transmitted Disease (STD)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O26",
          text: "Sore Throat (w/o Diff Breathing or Swallowing)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O27",
          text: "Toothache (w/o Jaw Pain)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26O28",
          text: "Wound Infected (Focal or Surface)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "26A00",
          text: "BLS Override (Alpha)",
          recResponse: 148,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 148,
            },
          ],
        },
        {
          code: "26A01",
          text: "No Priority Symptoms",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A02",
          text: "Blood Pressure Abnormality (Asymptomatic)",
          recResponse: 148,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 148,
            },
          ],
        },
        {
          code: "26A03",
          text: "Dizziness/Vertigo",
          recResponse: 148,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 148,
            },
          ],
        },
        {
          code: "26A04",
          text: "Fever/Chills",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A05",
          text: "General Weakness",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A06",
          text: "Nausea",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A07",
          text: "New Onset of Immobility (Not-Sudden)",
          recResponse: 148,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 148,
            },
          ],
        },
        {
          code: "26A08",
          text: "Other Pain (Non-Omega-Level)",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A09",
          text: "Transportation Only",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A10",
          text: "Unwell/Ill",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A11",
          text: "Vomiting",
          recResponse: 147,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 147,
            },
          ],
        },
        {
          code: "26A12",
          text: "Possible Contagious Disease",
          recResponse: 148,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 148,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "26B00",
          text: "BLS Override (Bravo)",
          recResponse: 148,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 148,
            },
          ],
        },
        {
          code: "26B01",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 148,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 148,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "26C00",
          text: "ALS Override (Charlie)",
          recResponse: 149,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 149,
            },
          ],
        },
        {
          code: "26C01",
          text: "Altered Level of Consciousness",
          recResponse: 150,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 150,
            },
          ],
        },
        {
          code: "26C02",
          text: "Abnormal Breathing",
          recResponse: 151,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 151,
            },
          ],
        },
        {
          code: "26C03",
          text: "Sickle Cell Crisis/Thalassemia",
          recResponse: 151,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 151,
            },
          ],
        },
        {
          code: "26C04",
          text: "Autonomic Dysreflexia/Hyperreflexia",
          recResponse: 151,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 151,
            },
          ],
        },
        {
          code: "26C05",
          text: "Acute Adrenal Insufficiency/Crisis or Addison's Disease",
          recResponse: 151,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 151,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "26D00",
          text: "ALS Override (Delta)",
          recResponse: 149,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 149,
            },
          ],
        },
        {
          code: "26D01",
          text: "Not Alert",
          recResponse: 150,
          subCodes: [
            {
              suffix: "C",
              text: "Suspected Coronavirus Illness",
              recResponse: 150,
            },
          ],
        },
      ],
    },
  ],
};
