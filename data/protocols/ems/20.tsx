import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const HEAT_COLD_EXPOSURE: IEMSComplaint = {
  protocol: 20,
  name: "Heat / Cold Exposure",
  shortName: "Heat/Cold Exposure",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 99,
  defaultCode: "20A01",
  preSend: true,
  questions: [
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
      answers: [
        {
          answer: "No",
          display: "No other pn",
          questionDisplay: "**pronoun** has no other pain",
          continue: true,
        },
        {
          answer: "Chest pain",
          display: "Chest pain",
          questionDisplay: "**pronoun** has chest pain",
          gotoProtocol: 10,
        },
        {
          answer: "Abdominal pain",
          display: "Abdominal pain",
          questionDisplay: "**pronoun** has abdominal pain",
          gotoProtocol: 1,
        },
        {
          answer: "Back pain",
          display: "Back pain",
          questionDisplay: "**pronoun** has back pain",
          gotoProtocol: 5,
        },
        {
          answer: "Unknown",
          display: "Unk if has other pn",
          questionDisplay: "It is unknown if **pronoun** has other pain",
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
          updateCode: "20D01",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if responding nlly",
          questionDisplay:
            "Unk if **pronoun** is completely alert (responding appropriately)",
          updateCode: "20B02",
          continue: true,
        },
      ],
    },

    {
      text: <p>Does **pronoun** have any <b className="font-bold">cardiac history</b>?</p>,
      firstPersonText: <p>Do you have any <b className="font-bold">cardiac history</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Yes:",
          display: "Cardiac hx: {input}",
          questionDisplay: "**pronoun** has cardiac history: {input}",
          updateCode: "20C01",
          continue: true,
          input: true,
          send: true,
        },
        {
          answer: "No",
          display: "No cardiac hx",
          questionDisplay: "**pronoun** has no cardiac history",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if cardiac hx",
          questionDisplay: "It is unknown if **pronoun** has cardiac history",
          updateCode: "20B02",
          continue: true,
        },
      ],
    },

    {
      text: <p>Has **pronoun** had a <b className="font-bold">change</b> in <b className="font-bold">skin color</b>?</p>,
      firstPersonText: <p>Have you had a <b className="font-bold">change</b> in <b className="font-bold">skin color</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No skin color change",
          questionDisplay: "**pronoun** has no skin color change",
          updateCode: "20A01",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Change in skin color",
          questionDisplay: "**pronoun** has had a change in skin color",
          updateCode: "20B01",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if skin color change",
          questionDisplay: "It is unknown if **pronoun** has had a change in skin color",
          updateCode: "20B02",
          continue: true,
        }
      ]
    },

    {
      text: <p>What is their skin <b className="font-bold">temperature</b>?</p>,
      firstPersonText: <p>What is your skin <b className="font-bold">temperature</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Colder than normal",
          display: "Colder than nl",
          questionDisplay: "**pronoun**'s skin is colder than normal",
          updateSuffix: "C",
          continue: true,
        },
        {
          answer: "Hotter than normal",
          display: "Hotter than nl",
          questionDisplay: "**pronoun**'s skin is hotter than normal",
          updateSuffix: "H",
          continue: true,
        },
        {
          answer: "Normal",
          display: "Normal",
          questionDisplay: "**pronoun**'s skin temperature is normal",
          updateSuffix: "",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk skin temp",
          questionDisplay: "It is unknown what **pronoun**'s skin temperature is",
          updateCode: "20B02",
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
          code: "20A01",
          text: "Alert",
          recResponse: 99,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 99,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 100,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "20B00",
          text: "ALS Override (Bravo)",
          recResponse: 101,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 101,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 102,
            },
          ],
        },
        {
          code: "20B01",
          text: "Change in Skin Color",
          recResponse: 101,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 101,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 102,
            },
          ],
        },
        {
          code: "20B02",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 101,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 101,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 102,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "20C00",
          text: "ALS Override (Charlie)",
          recResponse: 103,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 103,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 104,
            },
          ],
        },
        {
          code: "20C01",
          text: "Heart Attack or Angina Hx",
          recResponse: 101,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 101,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 102,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "20D00",
          text: "ALS Override (Delta)",
          recResponse: 103,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 103,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 104,
            },
          ],
        },
        {
          code: "20D01",
          text: "Not Alert",
          recResponse: 103,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 103,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 104,
            },
          ],
        },
        {
          code: "20D02",
          text: "Mult Victims (w/ Priority Symptoms)",
          recResponse: 105,
          multPatient: true,
          subCodes: [
            {
              suffix: "C",
              text: "Cold Exposure",
              recResponse: 105,
            },
            {
              suffix: "H",
              text: "Heat Exposure",
              recResponse: 106,
            },
          ],
        },
      ],
    },
  ],
};
