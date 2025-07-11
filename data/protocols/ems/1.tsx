import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const ABDO_PAIN: IEMSComplaint = {
  protocol: 1,
  name: "Abdominal Pain/Problems",
  shortName: "Abdo Pain",
  description: (
    <>
      <p>
        Key considerations for Abdominal Pain include patient alertness,
        pregnancy status for females of childbearing age, fainting/syncope, pain
        characteristics (especially ripping/tearing pain that may indicate
        aortic issues), and pain location.
      </p>
      <p className="mt-2">
        Pay special attention to age and gender factors, as they significantly
        impact determinant selection. For example, males over 35 with pain above
        the navel may require a higher response level due to increased cardiac
        risk.
      </p>
      <p className="mt-2">
        <span className="font-medium">REMEMBER:</span> Pain{" "}
        <span className="text-red-500 font-medium">above the navel</span> in
        older adults often signals greater risk, especially for cardiac or
        vascular emergencies. Use skin color (ashen/gray), fainting symptoms,
        and pain description to guide response escalation. Groin/testicular pain
        in males, while less urgent, still requires appropriate classification.
        Think in terms of:
      </p>
      <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
        <li>
          <span className="font-medium">Above Navel</span> + Age + Gender →
          Increased concern
        </li>
        <li>
          <span className="font-medium">Tearing Pain</span> → Possible vascular
          event
        </li>
        <li>
          <span className="font-medium">Not Alert / Fainting</span> → Prioritize
          immediately
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
  defaultPlan: 1,
  defaultCode: "01A01",
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
          updateCode: "01D01",
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
          Is she <b className="font-bold">pregnant</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Are you <b className="font-bold">pregnant</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const {
          patientAge: age,
          patientGender: gender,
        } = patient;
        return (
          age >= 12 &&
          age <= 50 &&
          gender === "female" 
        );
      },
      preRenderDependencies: ["gender", "age"],
      preRenderLogic: "Females between the ages of 12 and 50",
      answers: [
        {
          answer: "No",
          display: "Not pregnant",
          questionDisplay: "She is not pregnant",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Pregnant",
          questionDisplay: "She is pregnant",
          gotoProtocol: 24,
        },
        {
          answer: "Unknown",
          display: "Unk if pregnant",
          questionDisplay: "Unk if she is pregnant",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** appear ashen or gray?{" "}
          <span className="text-blue-400">(Compared to usual color)</span>
        </p>
      ),
      preRenderInstructions: (patient) => {
        const { patientAge: age, patientProximity: proximity } = patient;
        return age >= 50 && proximity !== "first";
      },
      preRenderDependencies: ["age", "proximity"],
      preRenderLogic: "Patients 50 and older",
      questionType: "select",
      defaultTab: "ai",
      additionalInstructions: <AI.ChangingColor />,
      answers: [
        {
          answer: "No",
          continue: true,
          display: "Not ashen or gray",
          questionDisplay: "**pronoun** does not appear ashen or gray",
        },
        {
          answer: "Yes",
          display: "Ashen or gray",
          questionDisplay: "**pronoun** appears ashen or gray",
          updateCode: "01D02",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if ashen or gray",
          questionDisplay: "Unk if **pronoun** appears ashen or gray",
          continue: true,
        },
      ],
    },

    {
      text: <p>Has your skin <b className="font-bold">changed color</b>?</p>,
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientAge: age, patientProximity: proximity } = patient;
        return proximity === "first" && age >= 50;
      },
      preRenderDependencies: ["proximity"],
      preRenderLogic: "Caller is the patient",
      defaultTab: "ai",
      additionalInstructions: <AI.ChangingColor />,
      answers: [
        {
          answer: "No",
          display: "No skin color change",
          questionDisplay: "**pronoun** rpts no skin color change",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Skin color changed",
          questionDisplay: "**pronoun** rpts skin color changed",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if skin color changed",
          questionDisplay: "Unk if **pronoun** has had a change in skin color",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b>color</b> is your skin?{" "}
          <span className="text-blue-400">(Compared to normal)</span>
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient, answers) => {
        const { patientAge: age, patientProximity: proximity } = patient;
        if (proximity !== "first" || age < 50) return false;
        const lastAnswer = answers[answers.length - 1].answer;
        return lastAnswer === "Yes";
      },
      preRenderDependencies: ["proximity", "answers"],
      preRenderLogic:
        "Caller is the patient and has a change in skin color and is a first party caller",
      defaultTab: "ai",
      additionalInstructions: <AI.ChangingColor />,
      answers: [
        {
          answer: "Ashen/Gray",
          display: "Ashen or Gray skin color",
          questionDisplay: "**pronoun** has ashen or gray skin color",
          updateCode: "01D02",
          continue: true,
          send: true,
        },
        {
          answer: "Other:",
          display: "Skin color is {input}",
          questionDisplay: "**pronoun** has skin color of {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if skin color changed",
          questionDisplay: "Unk if **pronoun** has had a change in skin color",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Did **pronoun** faint or pass out?{" "}
          <span className="text-blue-400">(Nearly)</span>
        </p>
      ),
      firstPersonText: (
        <p>
          Have you <b>fainted</b> or <b>passed out</b>?{" "}
          <span className="text-blue-400">(Nearly)</span>
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Not fainted or feeling faint",
          questionDisplay: "**pronoun** has not fainted or feeling faint",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Fainted or feeling faint",
          questionDisplay: "**pronoun** has fainted or feeling faint",
          dependency: (patient) => {
            const { patientAge: age, patientGender: gender } = patient;
            if (age >= 50) {
              return { code: "01C03", send: true };
            } else if (age >= 12 && age <= 50 && gender === "female") {
              return { code: "01C04", send: true };
            }
          },
          dependencyDependencies: ["age", "gender"],
          dependencyLogic:
            "Females between the ages of 12 and 50 and patients 50 and older",
          continue: true,
        },
        {
          answer: "Unknown",
          questionDisplay: "Unk if **pronoun** has fainted or feeling faint",
          display: "Unk if fainted or feeling faint",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have a <b className="font-bold">diagnosed</b> aoritc aneurysm
        </p>
      ),
      firstPersonText: (
        <p>
          Do you have a <b className="font-bold">diagnosed</b> aortic aneurysm?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No diagnosed aortic aneurysm",
          questionDisplay:
            "**pronoun** does not have a diagnosed aortic aneurysm",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Diagnosed aortic aneurysm",
          questionDisplay: "**pronoun** has a diagnosed aortic aneurysm",
          continue: true,
          updateCode: "01C02",
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if diagnosed aortic aneurysm",
          questionDisplay: "Unk if **pronoun** has a diagnosed aortic aneurysm",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is **pronoun** able to <b className="font-bold">describe</b> the <b className="font-bold">pain</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Are you able to <b className="font-bold">describe</b> the <b className="font-bold">pain</b>?
        </p>
      ),
      questionType: "select",
      additionalInstructions: <AI.AbdoPainDescription />,
      defaultTab: "ai",
      answers: [
        {
          answer: "Pain:",
          display: "{input} pn",
          questionDisplay: "**pronoun** describes the pain as {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Ripping/Tearing",
          display: "Ripping/Tearing pn",
          questionDisplay: "**pronoun** describes the pain as ripping/tearing",
          continue: true,
          dependency: (patient) => {
            if (!patient) return;
            const { patientAge: age } = patient;
            if (age >= 50) {
              return { code: "01C01", send: true };
            }
          },
          dependencyDependencies: ["age"],
          dependencyLogic: "Patients 50 and older",
        },
        {
          answer: "No",
          display: "Not able to describe pn",
          questionDisplay: "**pronoun** is not able to describe the pain",
          continue: true,
        },
      ],
    },

    {
      text: <p>Where is the pain <b className="font-bold">located</b>?</p>,
      questionType: "select",
      additionalInstructions: <AI.AbdoPainLocation />,
      defaultTab: "ai",
      answers: [
        {
          answer: "Below the navel",
          display: "Pn below the navel",
          questionDisplay: "**pronoun** has pain below the navel",
          end: true,
        },
        {
          answer: "Above the navel",
          display: "Pn above the navel",
          questionDisplay: "**pronoun** has pain above the navel",
          preRenderInstructions: (patient) => {
            const { patientAge: age, patientGender: gender } = patient;
            return age >= 35 && gender === "male";
          },
          updateCode: "01C05",
          end: true,
        },
        {
          answer: "Above the navel",
          display: "Pn above the navel",
          questionDisplay: "**pronoun** has pain above the navel",
          preRenderInstructions: (patient) => {
            const { patientAge: age, patientGender: gender } = patient;
            return age >= 45 && gender === "female";
          },
          updateCode: "01C06",
          end: true,
        },
        {
          answer: "Above the navel",
          display: "Pn above the navel",
          questionDisplay: "**pronoun** has pain above the navel",
          preRenderInstructions: (patient) => {
            const { patientAge: age, patientGender: gender } = patient;
            return (
              (age < 35 && gender === "male") ||
              (age < 45 && gender === "female")
            );
          },
          end: true,
        },
        {
          answer: "Other:",
          display: "Pn in {input}",
          questionDisplay: "**pronoun** has pain in {input}",
          input: true,
          end: true,
        },
        {
          answer: "Groin/Testical",
          preRenderInstructions: (patient) => {
            if (!patient) return false;
            const { patientGender: gender } = patient;
            return gender === "male";
          },
          preRenderDependencies: ["gender"],
          display: "Pn in groin/testicles",
          questionDisplay: "He has pain in the groin/testicles",
          updateCode: "01A02",
          end: true,
        },
        {
          answer: "Unknown",
          display: "Unk where pn is",
          questionDisplay: "It is unknown where **pronoun** has pain",
          end: true,
        },
      ],
    },
  ],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "01A01",
          text: "General Abdominal Pain",
          recResponse: 1,
        },
        {
          code: "01A02",
          text: "Testical or Groin Pain (Male)",
          recResponse: 2,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "01C00",
          text: "ALS Override (Charlie)",
          recResponse: 3,
        },
        {
          code: "01C01",
          text: "Suspected Aortic Aneurysm (Tearing/Ripping Pain) (>= 50)",
          recResponse: 3,
        },
        {
          code: "01C02",
          text: "Diagnosed Aortic Aneurysm",
          recResponse: 3,
        },
        {
          code: "01C03",
          text: "Fainting or Near Fainting (>= 50)",
          recResponse: 3,
        },
        {
          code: "01C04",
          text: "Females w/ Fainting or Near Fainting (12-50)",
          recResponse: 3,
        },
        {
          code: "01C05",
          text: "Males w/ Pain Above Navel (>= 35)",
          recResponse: 2,
        },
        {
          code: "01C06",
          text: "Females w/ Pain Above Navel (>= 45)",
          recResponse: 2,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "01D00",
          text: "ALS Override (Delta)",
          recResponse: 3,
        },
        {
          code: "01D01",
          text: "Not Alert",
          recResponse: 3,
        },
        {
          code: "01D02",
          text: "Ashen or Gray Color (>= 50)",
          recResponse: 3,
        },
      ],
    },
  ],
};
