import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const BACK_PAIN: IEMSComplaint = {
  protocol: 5,
  name: "Back Pain (Non-Traumatic or Non-Recent Trauma)",
  shortName: "Back Pain",
  description: (
    <>
      <p>
        Back pain—especially when non-traumatic—may seem low acuity, but can
        conceal
        <span className="text-red-500 font-semibold">
          {" "}
          life-threatening vascular conditions
        </span>{" "}
        in older adults. Always distinguish between{" "}
        <span className="font-medium">traumatic vs. non-traumatic</span> causes
        and assess for associated symptoms such as chest pain, fainting, or
        changes in skin color.
      </p>

      <p className="mt-2">
        <span className="text-yellow-400 font-semibold">Key concern:</span>{" "}
        Sudden, severe pain described as{" "}
        <span className="text-red-500 font-semibold">
          "ripping" or "tearing"
        </span>{" "}
        in patients over 50 may indicate an <i>aortic aneurysm</i> and warrants
        immediate ALS response.
      </p>

      <p className="mt-2">Use the following to guide triage:</p>

      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
        <li>
          <span className="font-semibold">Non-traumatic onset</span> → often
          Alpha, unless other risk factors present
        </li>
        <li>
          <span className="text-red-500 font-semibold">
            Fainting, grey skin tone, or altered mental status
          </span>{" "}
          → escalate to Charlie or Delta
        </li>
        <li>
          <span className="font-semibold">Chest pain + back pain</span> →
          suspect vascular or cardiac cause
        </li>
        <li>
          <span className="font-semibold">Known or suspected aneurysm</span> →
          treat as high-priority
        </li>
      </ul>

      <p className="mt-2">
        For <span className="font-medium">traumatic back pain</span> (e.g., from
        a recent fall), escalate based on the time of injury and signs of spinal
        involvement. Old injuries without new symptoms may qualify as
        Alpha-level.
      </p>

      <p className="mt-2">
        <span className="font-medium">REMEMBER:</span> In patients over 50,
        always ask about chest involvement and check for signs of vascular
        collapse, even if the chief complaint is "just back pain."
      </p>
    </>
  ),
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 20,
  defaultCode: "05A01",
  questions: [
    {
      text: (
        <p>
          What <b className="font-bold">caused</b> the back pain?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Recent fall (< 6 hours ago)",
          display: "Recent fall (< 6 hours ago)",
          questionDisplay: "Recent fall (< 6 hours ago)",
          gotoProtocol: 17,
        },
        {
          answer: "Trauma",
          display: "Pn caused by trauma",
          questionDisplay: "Pain caused by trauma",
          continue: true,
        },
        {
          answer: "Non-Traumatic",
          display: "Pn NOT caused by trauma",
          questionDisplay: "Pain NOT caused by trauma",
          continue: true,
          updateCode: "05A01",
        },
        {
          answer: "Unknown",
          display: "Unk what caused the back pain",
          questionDisplay: "Unk what caused the back pain",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          When did the <b className="font-bold">trauma/injury</b> happen?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.answer;
        return lastAnswer === "Trauma";
      },
      preRenderLogic: "Trauma was selected",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Now (less than 6hrs ago)",
          display: "Trauma happened now (< 6 hours ago)",
          questionDisplay: "Trauma happened now (< 6 hours ago)",
          gotoProtocol: 31,
        },
        {
          answer: "Earlier (more than 6hrs ago)",
          display: "Trauma happened earlier (> 6 hours ago)",
          questionDisplay: "Trauma happened earlier (> 6 hours ago)",
          continue: true,
          updateCode: "05A02",
        },
        {
          answer: "Unknown",
          display: "Unk when trauma happened",
          questionDisplay: "Unk when trauma happened",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have any <b className="font-bold">chest pain</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Do you have any <b className="font-bold">chest pain</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No chest pain",
          questionDisplay: "**pronoun** does not have chest pain",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Chest pain",
          questionDisplay: "**pronoun** has chest pain",
          gotoProtocol: 10,
        },
        {
          answer: "Unknown",
          display: "Unk if chest pain",
          questionDisplay: "Unk if **pronoun** has chest pain",
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
          updateCode: "05D01",
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
          Has **pronoun** had a recent <b className="font-bold">change</b> in{" "}
          <b className="font-bold">skin color</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Have you had a recent <b className="font-bold">change</b> in{" "}
          <b className="font-bold">skin color</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientAge } = patient;
        return patientAge >= 50;
      },
      defaultTab: "ai",
      additionalInstructions: <AI.ChangingColor />,
      answers: [
        {
          answer: "No",
          display: "No recent change in color",
          questionDisplay: "**pronoun** has had no recent change in color",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Recent change in color",
          questionDisplay: "**pronoun** has had a recent change in color",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if recent change in color",
          questionDisplay:
            "Unk if **pronoun** has had a recent change in color",
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
      defaultTab: "ai",
      additionalInstructions: <AI.ChangingColor />,
      preRenderInstructions: (patient, answers) => {
        const { patientAge } = patient;
        const lastAnswer = answers[answers.length - 1];
        return (
          patientAge >= 50 &&
          lastAnswer.answer === "Yes" &&
          lastAnswer.question === "Has **pronoun** had a recent change in skin color?"
        );
      },
      preRenderLogic:
        "Patient is >= 50, is the caller, and has had a recent change in skin color",
      preRenderDependencies: ["patient", "answers"],
      answers: [
        {
          answer: "Ashen/Gray",
          display: "Ashen or Gray skin color",
          questionDisplay: "**pronoun** has ashen or gray skin color",
          updateCode: "05D02",
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
          Is **pronoun** breathing <b className="font-bold">normally</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          <span className="text-blue-400">(If not obvious)</span> Are you breathing <b className="font-bold">normally</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "No diff breathing",
          questionDisplay: "**pronoun** does not have difficulty breathing",
          continue: true,
        },
        {
          answer: "No",
          display: "Diff breathing",
          questionDisplay: "**pronoun** has difficulty breathing",
          updateCode: "05C04",
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
          Did **pronoun** faint or pass out?{" "}
          <span className="text-blue-400">(Nearly)</span>
        </p>
      ),
      firstPersonText: (
        <p>
          Did you <b className="font-bold">faint</b> or{" "}
          <b className="font-bold">pass out</b>?{" "}
          <span className="text-blue-400">(Nearly)</span>
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        const { patientAge } = patient;
        return patientAge >= 50;
      },
      preRenderLogic: "Patient is >= 50",
      preRenderDependencies: ["patient"],
      answers: [
        {
          answer: "No",
          display: "No fainting",
          questionDisplay: "**pronoun** did not faint or pass out",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Fainted",
          questionDisplay: "**pronoun** fainted or passed out",
          updateCode: "05C03",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if fainted",
          questionDisplay: "Unk if **pronoun** fainted or passed out",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Can **pronoun** <b className="font-bold">describe</b> the pain?
        </p>
      ),
      firstPersonText: (
        <p>
          Can you <b className="font-bold">describe</b> the pain?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Pain:",
          display: "Pain is {input}",
          questionDisplay: "**pronoun** describes the pain as {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Ripping/Tearing",
          display: "Ripping or tearing pain",
          questionDisplay:
            "**pronoun** describes the pain as ripping or tearing",
          continue: true,
          preRenderInstructions: (patient) => {
            const { patientAge } = patient;
            return patientAge >= 50;
          },
          preRenderLogic: "Patient is >= 50",
          preRenderDependencies: ["patient"],
          updateCode: "05C01",
          send: true,
        },
        {
          answer: "No",
          display: "Unable to describe pain",
          questionDisplay: "**pronoun** is unable to describe the pain",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Does **pronoun** have a{" "}
          <b className="font-bold">diagnosed aortic aneurysm</b>?
        </p>
      ),
      firstPersonText: (
        <p>
          Do you have a <b className="font-bold">diagnosed aortic aneurysm</b>?
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
          updateCode: "05C02",
          continue: true,
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
  ],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "05A01",
          text: "Non-Traumatic Back Pain",
          recResponse: 20,
        },
        {
          code: "05A02",
          text: "Non-Recent (>= 6hrs) Traumatic Back Pain (w/o priority symptoms)",
          recResponse: 20,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "05C00",
          text: "ALS Override (Charlie)",
          recResponse: 21,
        },
        {
          code: "05C01",
          text: "Suspected Aortic Aneurysm (Tearing/Ripping Pain) (>= 50)",
          recResponse: 21,
        },
        {
          code: "05C02",
          text: "Diagnosed Aortic Aneurysm",
          recResponse: 21,
        },
        {
          code: "05C03",
          text: "Fainting or Near Fainting (>= 50)",
          recResponse: 21,
        },
        {
          code: "05C04",
          text: "Diff Breathing",
          recResponse: 21,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "05D00",
          text: "ALS Override (Delta)",
          recResponse: 21,
        },
        {
          code: "05D01",
          text: "Not Alert",
          recResponse: 21,
        },
        {
          code: "05D02",
          text: "Ashen or Gray Color (>= 50)",
          recResponse: 21,
        },
      ],
    },
  ],
};
