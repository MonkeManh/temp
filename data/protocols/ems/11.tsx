import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const CHOKING: IEMSComplaint = {
  protocol: 11,
  name: "Choking",
  shortName: "Choking",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: 0 },
  ],
  defaultPriority: "A",
  defaultPlan: 53,
  defaultCode: "11D00",
  preSend: true,
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
          updateCode: "11D02",
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
      text: <p>Is **pronoun** <b className="font-bold">breathing normally</b>?</p>,
      firstPersonText: <p><span className="text-blue-400">(Not obvious)</span> Are you breathing <b className="font-bold">normally</b>?</p>,
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
          updateCode: "11D01",
          continue: true,
          send: true,
        },
        {
          answer: "NOT AT ALL",
          display: "Not breathing at all",
          questionDisplay: "**pronoun** is NOT breathing at all",
          updateCode: "11E01",
          continue: true,
          send: true,
        },
        {
          answer: "Agonal/ineffective",
          display: "Agonal/ineffective",
          questionDisplay: "**pronoun** is breathing agonal/ineffectively",
          updateCode: "11E01",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if breathing nlly",
          questionDisplay: "Unk if **pronoun** is breathing normally",
          continue: true,
          updateCode: "11D00",
        }
      ]
    },

    {
      text: <p>Is **prounoun** able to <b className="font-bold">talk/cry</b>?</p>,
      firstPersonText: <p className="text-blue-400">Is the caller able to <b className="font-bold">talk/cry</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Able to talk/cry",
          questionDisplay: "**pronoun** is able to talk/cry",
          updateCode: "11A01",
          continue: true,
        },
        {
          answer: "No",
          display: "NOT able to talk/cry",
          questionDisplay: "**pronoun** is NOT able to talk/cry",
          updateCode: "11E01",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if able to talk/cry",
          questionDisplay: "Unk if **pronoun** is able to talk/cry",
          continue: true,
          updateCode: "11D00",
        }
      ]
    },

    {
      text: <p><b className="font-bold">What</b> did **pronoun** <b className="font-bold">choke</b> on?</p>,
      firstPersonText: <p className="text-blue-400"><b className="font-bold">What</b> did you <b className="font-bold">choke</b> on?</p>,
      questionType: "select",
      preRenderInstructions: (patient, answers) => {
        const { patientConsciousness: con, patientBreathing: breath, patientProximity: prox } = patient;
        const lastAnswer = answers[answers.length - 1]?.answer;
        if(con === "yes" && breath === "yes" && prox === "first" && lastAnswer === "No") return false;
        return true;
      },
      preRenderLogic: "the caller is either with the patient, or is the patient but is conscious, breathing, and can talk/cry",
      preRenderDependencies: ["patient", "answers"],
      answers: [
        {
          answer: "Candy:",
          display: "Choked on candy: {input}",
          questionDisplay: "**pronoun** choked on candy: {input}",
          updateSuffix: "C",
          continue: true,
          input: true
        },
        {
          answer: "Food:",
          display: "Choked on food: {input}",
          questionDisplay: "**pronoun** choked on food: {input}",
          updateSuffix: "F",
          continue: true,
          input: true
        },
        {
          answer: "Milk/Liquid (Non-Toxic):",
          display: "Choked on milk/liquid (non-toxic): {input}",
          questionDisplay: "**pronoun** choked on milk/liquid (non-toxic): {input}",
          updateSuffix: "M",
          continue: true,
          input: true
        },
        {
          answer: "Object/Toy:",
          display: "Choked on object/toy: {input}",
          questionDisplay: "**pronoun** choked on object/toy: {input}",
          updateSuffix: "O",
          continue: true,
          input: true
        },
        {
          answer: "Other:",
          display: "Choked on other: {input}",
          questionDisplay: "**pronoun** choked on other: {input}",
          updateSuffix: "U",
          continue: true,
          input: true
        },
        {
          answer: "Unknown",
          display: "Choked on unknown",
          questionDisplay: "**pronoun** choked on unknown",
          updateSuffix: "U",
          continue: true,
        }
      ]
    }
  ],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "11A01",
          text: "Not Choking Now (Can talk or cry, is alert & breathing nlly)",
          recResponse: 53,
          subCodes: [
            {
              suffix: "C",
              text: "Candy",
              recResponse: 53,
            },
            {
              suffix: "F",
              text: "Food",
              recResponse: 53,
            },
            {
              suffix: "M",
              text: "Milk/Liquid (Non-Toxic)",
              recResponse: 53,
            },
            {
              suffix: "O",
              text: "Object/Toy",
              recResponse: 53,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 53,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "11D00",
          text: "ALS Override (Delta)",
          recResponse: 54,
          subCodes: [
            {
              suffix: "C",
              text: "Candy",
              recResponse: 54,
            },
            {
              suffix: "F",
              text: "Food",
              recResponse: 54,
            },
            {
              suffix: "M",
              text: "Milk/Liquid (Non-Toxic)",
              recResponse: 54,
            },
            {
              suffix: "O",
              text: "Object/Toy",
              recResponse: 54,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 54,
            },
          ],
        },
        {
          code: "11D01",
          text: "Abnormal Breathing (Partial Obstruction)",
          recResponse: 54,
          subCodes: [
            {
              suffix: "C",
              text: "Candy",
              recResponse: 54,
            },
            {
              suffix: "F",
              text: "Food",
              recResponse: 54,
            },
            {
              suffix: "M",
              text: "Milk/Liquid (Non-Toxic)",
              recResponse: 54,
            },
            {
              suffix: "O",
              text: "Object/Toy",
              recResponse: 54,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 54,
            },
          ],
        },
        {
          code: "11D02",
          text: "Not Alert",
          recResponse: 55,
          subCodes: [
            {
              suffix: "C",
              text: "Candy",
              recResponse: 55,
            },
            {
              suffix: "F",
              text: "Food",
              recResponse: 55,
            },
            {
              suffix: "M",
              text: "Milk/Liquid (Non-Toxic)",
              recResponse: 55,
            },
            {
              suffix: "O",
              text: "Object/Toy",
              recResponse: 55,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 55,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "11E00",
          text: "ALS Override (Echo)",
          recResponse: 55,
          subCodes: [
            {
              suffix: "C",
              text: "Candy",
              recResponse: 55,
            },
            {
              suffix: "F",
              text: "Food",
              recResponse: 55,
            },
            {
              suffix: "M",
              text: "Milk/Liquid (Non-Toxic)",
              recResponse: 55,
            },
            {
              suffix: "O",
              text: "Object/Toy",
              recResponse: 55,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 55,
            },
          ],
        },
        {
          code: "11E01",
          text: "Complete Obstruction/Not Breathing/Ineffective Breathing",
          recResponse: 56,
          notBreathing: true,
          subCodes: [
            {
              suffix: "C",
              text: "Candy",
              recResponse: 56,
            },
            {
              suffix: "F",
              text: "Food",
              recResponse: 56,
            },
            {
              suffix: "M",
              text: "Milk/Liquid (Non-Toxic)",
              recResponse: 56,
            },
            {
              suffix: "O",
              text: "Object/Toy",
              recResponse: 56,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 56,
            },
          ],
        },
      ],
    },
  ],
};
