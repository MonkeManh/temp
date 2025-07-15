import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const EYE_PROBLEMS: IEMSComplaint = {
  protocol: 16,
  name: "Eye Problems / Injuries",
  shortName: "Eye Prob/Injs",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 76,
  defaultCode: "16A02",
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
          updateCode: "16D01",
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
      text: <p><b className="font-bold">How</b> did the problem <b className="font-bold">occur</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Chemical:",
          display: "Caused by chem: {input}",
          questionDisplay: "**pronoun**'s problem was caused by chemical: {input}",
          updateCode: "16A01",
          continue: true,
          input: true,
        },
        {
          answer: "Contact lens",
          display: "Caused by contact lens",
          questionDisplay: "**pronoun**'s problem was caused by contact lens",
          updateCode: "16A03",
          continue: true,
        },
        {
          answer: "Direct blow",
          display: "Caused by direct blow",
          questionDisplay: "**pronoun**'s problem was caused by direct blow",
          updateCode: "16A01",
          continue: true,
        },
        {
          answer: "Flying object:",
          display: "Caused by flying object: {input}",
          questionDisplay: "**pronoun**'s problem was caused by flying object: {input}",
          continue: true,
          input: true,
          updateCode: "16A01",
        },
        {
          answer: "Medical eye problem",
          display: "Medical eye problem",
          questionDisplay: "**pronoun** has a medical eye problem",
          updateCode: "16A03",
          continue: true,
        },
        {
          answer: "Penetrating object:",
          display: "Caused by penetrating object: {input}",
          questionDisplay: "**pronoun**'s problem was caused by penetrating object: {input}",
          continue: true,
          input: true,
          updateCode: "16A01",
        },
        {
          answer: "Small foreign object:",
          display: "Caused by small foreign object: {input}",
          questionDisplay: "**pronoun**'s problem was caused by small foreign object: {input}",
          continue: true,
          input: true,
          updateCode: "16A02",
        },
        {
          answer: "Other:",
          display: "Other cause: {input}",
          questionDisplay: "**pronoun**'s problem was caused by: {input}",
          continue: true,
          input: true,
          updateCode: "16A02",
        },
        {
          answer: "Unknown",
          display: "Unk cause",
          questionDisplay: "Unk how **pronoun**'s problem occurred",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is the eyeball <b className="font-bold">cut open</b> or is fluid <b className="font-bold">leaking out</b>?</p>,
      firstPersonText: (
        <p>Is your eyeball <b className="font-bold">cut open</b> or <b className="font-bold">leaking fluid</b>?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No cut or fluid leak",
          questionDisplay: "The eyeball is NOT cut open and NO fluid is leaking out",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Cut or leaking fluid",
          questionDisplay: "The eyeball is cut open or fluid is leaking out",
          updateCode: "16B01",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if cut or leaking fluid",
          questionDisplay: "Unk if the eyeball is cut open or if fluid is leaking out",
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
          code: "16A01",
          text: "Moderate Eye Injs",
          recResponse: 76,
        },
        {
          code: "16A02",
          text: "Minor Eye Injs",
          recResponse: 76,
        },
        {
          code: "16A03",
          text: "Medical Eye Problems",
          recResponse: 77,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "16B00",
          text: "BLS Override (Bravo)",
          recResponse: 76,
        },
        {
          code: "16B01",
          text: "Severe Eye Injs",
          recResponse: 76,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "16D00",
          text: "ALS Override (Delta)",
          recResponse: 78,
        },
        {
          code: "16D01",
          text: "Not Alert",
          recResponse: 78,
        },
      ],
    },
  ],
};
