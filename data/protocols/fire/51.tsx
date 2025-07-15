import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const AIRCRAFT_EMERGENCY: IFireComplaint = {
  protocol: 51,
  name: "Aircraft Emergency",
  shortName: "Aircraft Emergency",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: 3 },
    { name: "Police", priority: true },
  ],
  defaultPriority: "O",
  defaultPlan: 1,
  defaultCode: "51B01",
  questions: [
    {
      text: (
        <p>
          What <b className="font-bold">type</b> of aircraft is <b className="font-bold">involved</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Airship/Blimp",
          display: "Aircraft is an airship/blimp",
          questionDisplay: "Incident involves an airship/blimp",
          continue: true,
          updateSuffix: "A",
        },
        {
          answer: "Hot Air Balloon",
          display: "Aircraft is a hot air balloon",
          questionDisplay: "Incident involves a hot air balloon",
          continue: true,
          updateSuffix: "B",
        },
        {
          answer: "Cargo",
          display: "Aircraft is a cargo plane",
          questionDisplay: "Incident involves a cargo plane",
          continue: true,
          updateSuffix: "C",
        },
        {
          answer: "Helicopter",
          display: "Aircraft is a helicopter",
          questionDisplay: "Incident involves a helicopter",
          continue: true,
          updateSuffix: "H",
        },
        {
          answer: "Large",
          display: "Aircraft is a large plane",
          questionDisplay: "Incident involves a large plane",
          continue: true,
          updateSuffix: "L",
        },
        {
          answer: "Military",
          display: "Aircraft is a military plane",
          questionDisplay: "Incident involves a military plane",
          continue: true,
          updateSuffix: "M",
        },
        {
          answer: "Small",
          display: "Aircraft is a small plane",
          questionDisplay: "Incident involves a small plane",
          continue: true,
          updateSuffix: "S",
        },
        {
          answer: "Light",
          display: "Aircraft is a light plane",
          questionDisplay: "Incident involves a light plane",
          continue: true,
          updateSuffix: "T",
        },
        {
          answer: "Unknown",
          display: "Unk aircraft type",
          questionDisplay: "Incident involves an unk type of aircraft",
          continue: true,
          updateSuffix: "U",
        },
      ],
    },

    {
      text: (
        <p className="text-red-400">
          Was the <b>aircraft</b> carrying <b className="font-bold">ORDINANCE/WEAPONS</b>
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const lastAnswer = answers?.[answers.length - 1]?.answer;
        return lastAnswer === "Military";
      },
      preRenderLogic: "the aircraft is military",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Not carrying ordinance",
          questionDisplay: "The aircraft is not carrying ordinance",
          continue: true,
        },
        {
          answer: "Yes:",
          display: "Carrying ordinance: {input}",
          questionDisplay: "The aircraft is carrying ordinance: {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if carrying ordinance",
          questionDisplay: "Unk if the aircraft is carrying ordinance",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(If not obvious)</span> What is the <b className="font-bold">current status</b> of the aircraft?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "In Flight",
          display: "Aircraft is in flight",
          questionDisplay: "The aircraft is in flight",
          continue: true,
        },
        {
          answer: "On Ground",
          display: "Aircraft is on the ground",
          questionDisplay: "The aircraft is on the ground",
          continue: true,
        },
        {
          answer: "CRASHED",
          display: "Aircraft has CRASHED",
          questionDisplay: "The aircraft has CRASHED",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk aircraft status",
          questionDisplay: "Unk the status of the aircraft",
          continue: true,
          updateCode: "51B01",
        },
      ],
    },

    {
      text: (
        <p>
          What is the <b className="font-bold">nature</b> of the aircraft situation?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const lastAnswer = answers?.[answers.length - 1]?.answer;
        return lastAnswer === "In Flight";
      },
      preRenderLogic: "the aircraft is in flight",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Normal Flight",
          display: "No known problems",
          questionDisplay: "The aircraft is in normal flight",
          updateCode: "51O01",
          continue: true,
        },
        {
          answer: "Standby (No Specific Problem)",
          display: "Requested to stby",
          questionDisplay: "The aircraft has requested to standby",
          updateCode: "51A01",
          continue: true,
        },
        {
          answer: "Alert I (Minor Problem)",
          display: "Minor issue (precautionary landing)",
          questionDisplay: "The aircraft is experiencing a minor issue",
          updateCode: "51C02",
          continue: true,
          send: true,
        },
        {
          answer: "Alert II (Major Problem)",
          display: "Major issue (possible emergency landing)",
          questionDisplay: "The aircraft is experiencing a major issue",
          updateCode: "51C01",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk nature of emergency",
          questionDisplay: "Unk the nature of the aircraft emergency",
          updateCode: "51B01",
          continue: true,
        },
      ],
    },

    {
      text: <p><span className="text-blue-400">(If not already stated)</span> What <b className="font-bold">airport</b> will the aircraft be <b className="font-bold">landing</b> at?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const lastAnswer = answers?.[answers.length - 1]?.answer;
        return lastAnswer === "Standby (No Specific Problem)" || lastAnswer === "Alert I (Minor Problem)" || lastAnswer === "Alert II (Major Problem)";
      },
      preRenderLogic: "the aircraft is landing at an airport",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Los Santos International Airport (LSIA)",
          display: "Landing at LSIA",
          questionDisplay: "The aircraft is landing at Los Santos International Airport (LSIA)",
          continue: true,
        },
        {
          answer: "Sandy Shores Regional Airport (SSRA)",
          display: "Landing at SSRA",
          questionDisplay: "The aircraft is landing at Sandy Shores Regional Airport (SSRA)",
          continue: true,
        },
        {
          answer: "Grapeseed Regional Airport (GSRA)",
          display: "Landing at GSRA",
          questionDisplay: "The aircraft is landing at Grapeseed Regional Airport (GSRA)",
          continue: true,
        },
        {
          answer: "Fort Zancudo Military Base (FZMB)",
          display: "Landing at FZMB",
          questionDisplay: "The aircraft is landing at Fort Zancudo Military Base (FZMB)",
          continue: true,
        },
        {
          answer: "Arroyo Muerto Municipal Airport (AMMA)",
          display: "Landing at AMMA",
          questionDisplay: "The aircraft is landing at Arroyo Muerto Municipal Airport (AMMA)",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Landing at other: {input}",
          questionDisplay: "The aircraft is landing at other: {input}",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk where landing",
          questionDisplay: "Unk where the aircraft is landing",
          continue: true,
        }
      ]
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(If not obvious)</span> Is there any <b className="text-red-400 font-bold">FIRE</b> present?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const answer = answers?.find(
          (a) =>
            a.question === "(If not obvious) What is the current status of the aircraft?"
        )?.answer;
        return answer === "On Ground";
      },
      preRenderLogic: "the aircraft is on the ground",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No fire",
          questionDisplay: "The aircraft is not on fire",
          continue: true,
        },
        {
          answer: "Yes",
          display: "On fire",
          questionDisplay: "The aircraft is on fire",
          updateCode: "51D03",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if fire present",
          questionDisplay: "Unk if the aircraft is on fire",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(If not obvious)</span> Where did the aircraft <b className="text-red-400">CRASH</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const answer = answers?.find(
          (a) =>
            a.question === "(If not obvious) What is the current status of the aircraft?"
        )?.answer;
        return answer === "CRASHED";
      },
      preRenderLogic: "the aircraft has crashed",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "On Land",
          display: "Crashed on land",
          questionDisplay: "The aircraft crashed on land",
          continue: true,
        },
        {
          answer: "In Water",
          display: "Crashed in water",
          questionDisplay: "The aircraft crashed in water",
          continue: true,
        },
        {
          answer: "Completely Unknown",
          display: "Unk where crashed",
          questionDisplay: "Unk where the aircraft crashed",
          continue: true,
          updateCode: "51D00",
          send: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(If not obvious)</span> <b className="font-bold">What</b> did the aircraft <b className="font-bold">crash</b> into
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const answer = answers?.find(
          (a) =>
            a.question === "(If not obvious) What is the current status of the aircraft?"
        )?.answer;
        return answer === "CRASHED";
      },
      preRenderLogic: "the aircraft has crashed",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Building/Structure",
          display: "Crashed into building/structure",
          questionDisplay: "The aircraft crashed into a building/structure",
          continue: true,
          updateCode: "51D02",
          send: true,
          preRenderInstructions: (answers) => {
            const lastAnswer = answers?.[answers.length - 1]?.answer;
            return lastAnswer === "On Land";
          },
        },
        {
          answer: "Nothing",
          display: "Did not hit anything addtnl",
          questionDisplay: "The aircraft did not hit anything additional",
          continue: true,
          send: true,
          updateCode: "51D01",
          preRenderInstructions: (answers) => {
            const lastAnswer = answers?.[answers.length - 1]?.answer;
            return lastAnswer === "On Land";
          },
        },
        {
          answer: "Costal Water",
          display: "Crashed into costal water",
          questionDisplay: "The aircraft crashed into costal water",
          continue: true,
          updateCode: "51D04",
          send: true,
          preRenderInstructions: (answers) => {
            const lastAnswer = answers?.[answers.length - 1]?.answer;
            return lastAnswer === "In Water";
          },
        },
        {
          answer: "Inland Water",
          display: "Crashed into inland water",
          questionDisplay: "The aircraft crashed into inland water",
          continue: true,
          updateCode: "51D05",
          send: true,
          preRenderInstructions: (answers) => {
            const lastAnswer = answers?.[answers.length - 1]?.answer;
            return lastAnswer === "In Water";
          },
        },
        {
          answer: "Oceanic Water",
          display: "Crashed into oceanic water",
          questionDisplay: "The aircraft crashed into oceanic water",
          continue: true,
          updateCode: "51D06",
          send: true,
          preRenderInstructions: (answers) => {
            const lastAnswer = answers?.[answers.length - 1]?.answer;
            return lastAnswer === "In Water";
          },
        },
        {
          answer: "Unknown",
          display: "Unk what aircraft crashed into",
          questionDisplay: "Unk what the aircraft crashed into",
          updateCode: "51D01",
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: (
        <p>
          How many <b className="font-bold">souls</b> are/were <b className="font-bold">on board</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Persons:",
          display: "{input} persons on board",
          questionDisplay: "{input} persons are/were on board the aircraft",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk how many on board",
          questionDisplay: "Unk how many persons were on board the aircraft",
          continue: true,
        },
      ],
    },

    {
      text: <p>Are there any known <b className="font-bold">injuries</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Yes - Multiple Injuries",
          display: "Multiple injd people",
          questionDisplay: "Multiple persons are injured",
          continue: true,
        },
        {
          answer: "Yes - Single Injury",
          display: "Single injd person",
          questionDisplay: "A single person is/was injured",
          continue: true,
        },
        {
          answer: "Yes - Obvious Fatalities",
          display: "Obvious fatalities",
          questionDisplay: "There are obvious fatalities",
          continue: true,
        },
        {
          answer: "No Injuries",
          display: "No injuries rptd",
          questionDisplay: "No injuries have been reported",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if injuries",
          questionDisplay: "Unk if there were any injuries",
          continue: true,
        },
      ],
    },
  ],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "51O01",
          text: "Airbourne Aircraft",
          recResponse: 1,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 1,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 1,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 1,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 1,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 1,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 1,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 1,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 1,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 1,
            },
          ],
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "51A00",
          text: "Override (Alpha)",
          recResponse: 2,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 2,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 2,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 2,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 2,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 2,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 2,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 2,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 2,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 2,
            },
          ],
        },
        {
          code: "51A01",
          text: "Standby",
          recResponse: 3,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 3,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 3,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 3,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 3,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 3,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 3,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 3,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 3,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 3,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "51B00",
          text: "Override (Bravo)",
          recResponse: 2,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 2,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 2,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 2,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 2,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 2,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 2,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 2,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 2,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 2,
            },
          ],
        },
        {
          code: "51B01",
          text: "Unkn Situation (Investigation)",
          recResponse: 2,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 2,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 2,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 2,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 2,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 2,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 2,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 2,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 2,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 2,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "51C00",
          text: "Override (Charlie)",
          recResponse: 4,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 4,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 4,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 4,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 4,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 4,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 4,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 4,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 4,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 4,
            },
          ],
        },
        {
          code: "51C01",
          text: "Aircraft Incoming (Alert II)",
          recResponse: 5,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 5,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 5,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 5,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 5,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 5,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 5,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 5,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 5,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 5,
            },
          ],
        },
        {
          code: "51C02",
          text: "Aircraft Incoming (Alert I)",
          recResponse: 6,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 6,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 6,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 6,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 6,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 6,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 6,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 6,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 6,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 6,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "51D00",
          text: "Override (Delta)",
          recResponse: 7,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 7,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 8,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 7,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 8,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 7,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 7,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 8,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 8,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 7,
            },
          ],
        },
        {
          code: "51D01",
          text: "Aircraft Crash on Land (Alert III)",
          recResponse: 7,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 7,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 8,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 7,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 8,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 7,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 7,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 8,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 8,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 7,
            },
          ],
        },
        {
          code: "51D02",
          text: "Crash Involving Building/Structure (Alert III)",
          recResponse: 7,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 7,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 8,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 7,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 8,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 7,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 7,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 8,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 8,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 7,
            },
          ],
        },
        {
          code: "51D03",
          text: "Fire/Incident on Ground (Alert III)",
          recResponse: 9,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 9,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 10,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 9,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 10,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 9,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 9,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 10,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 10,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 9,
            },
          ],
        },
        {
          code: "51D04",
          text: "Costal Water Crash",
          recResponse: 11,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 11,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 12,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 11,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 12,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 11,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 11,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 12,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 12,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 11,
            },
          ],
        },
        {
          code: "51D05",
          text: "Inland Water Crash",
          recResponse: 11,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 11,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 12,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 11,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 12,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 11,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 11,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 12,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 12,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 11,
            },
          ],
        },
        {
          code: "51D06",
          text: "Oceanic Water Crash",
          recResponse: 11,
          subCodes: [
            {
              suffix: "A",
              text: "Airship/Blimp",
              recResponse: 11,
            },
            {
              suffix: "B",
              text: "Hot Air Balloon",
              recResponse: 12,
            },
            {
              suffix: "C",
              text: "Cargo",
              recResponse: 11,
            },
            {
              suffix: "H",
              text: "Helicopter",
              recResponse: 12,
            },
            {
              suffix: "L",
              text: "Large",
              recResponse: 11,
            },
            {
              suffix: "M",
              text: "Military",
              recResponse: 11,
            },
            {
              suffix: "S",
              text: "Small",
              recResponse: 12,
            },
            {
              suffix: "T",
              text: "Light",
              recResponse: 12,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 11,
            },
          ],
        },
      ],
    },
  ],
};
