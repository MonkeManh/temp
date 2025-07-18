import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const STRUCTURE_FIRE: IFireComplaint = {
  protocol: 69,
  name: "Structure Fire",
  shortName: "Structure Fire",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "D",
  defaultPlan: 261,
  defaultCode: "69D13",
  questions: [
    {
      text: <p className="text-purple-400">How many <b className="font-bold">floors</b> or <b className="font-bold">stories</b> are there?</p>,
      questionType: 'select',
      answers: [
        {
          answer: "Single level",
          display: "Single story struc",
          questionDisplay: "The structure is a single story",
          continue: true,
        },
        {
          answer: "Multi-story (3-7):",
          display: "Multi-story ({input}) struc",
          questionDisplay: "The structure is a multi-story ({input})",
          continue: true,
          input: true,
        },
        {
          answer: "High rise (8+):",
          display: "High rise ({input} floors)",
          questionDisplay: "The structure is a high rise ({input} floors)",
          updateCode: "69E02",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Doesn't know",
          display: "Unk number of floors",
          questionDisplay: "The number of floors is unknown",
          continue: true,
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of <b className="font-bold">building</b> is involved?</p>,
      questionType: 'select',
      answers: [
        {
          answer: "HIGH LIFE HAZARD",
          display: "HIGH LIFE HAZARD bldg",
          questionDisplay: "The building is a HIGH LIFE HAZARD",
          updateCode: "69E01",
          continue: true,
          send: true
        },
        {
          answer: "HIGH RISE",
          display: "HIGH RISE bldg",
          questionDisplay: "The building is a HIGH RISE",
          updateCode: "69E02",
          continue: true,
          send: true
        },
        {
          answer: "COMMERCIAL/INDUSTRIAL building",
          display: "COMM/IND bldg",
          questionDisplay: "The building is a COMMERCIAL/INDUSTRIAL",
          updateCode: "69E03",
          continue: true,
        },
        {
          answer: "Residential (multiple)",
          display: "Residential (mult) bldg",
          questionDisplay: "The building is a Residential (multiple)",
          updateCode: "69E05",
          continue: true,
          send: true
        },
        {
          answer: "Residential (single)",
          display: "Residential (single) bldg",
          questionDisplay: "The building is a Residential (single)",
          updateCode: "69E06",
          continue: true,
          send: true
        },
        {
          answer: "LARGE NON-DWELLING:",
          display: "Large non-dwelling bldg: {input}",
          questionDisplay: "The building is a large non-dwelling bldg: {input}",
          updateCode: "69E07",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "SMALL NON-DWELLING:",
          display: "Small non-dwelling bldg: {input}",
          questionDisplay: "The building is a small non-dwelling bldg: {input}",
          updateCode: "69E08",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Mobile home",
          display: "Mobile home structure",
          questionDisplay: "The structure is a mobile home",
          updateCode: "69E09",
          continue: true,
          send: true
        },
        {
          answer: "House trailer",
          display: "House trailer structure",
          questionDisplay: "The structure is a house trailer",
          updateCode: "69E09",
          continue: true,
          send: true
        },
        {
          answer: "Portable office",
          display: "Portable office structure",
          questionDisplay: "The structure is a portable office",
          updateCode: "69E09",
          continue: true,
          send: true
        },
        {
          answer: "Garage",
          display: "Garage structure",
          questionDisplay: "The structure is a garage",
          updateCode: "69E08",
          continue: true,
          send: true
        },
        {
          answer: "PARKING GARAGE",
          display: "PARKING GARAGE structure",
          questionDisplay: "The structure is a PARKING GARAGE",
          updateCode: "69E12",
          continue: true,
          send: true
        },
        {
          answer: "Building/structure over water",
          display: "Bldg/structure over water",
          questionDisplay: "The building/structure is over water",
          updateCode: "69E10",
          continue: true,
          send: true
        },
        {
          answer: "MIXED-USE OCCUPANCY",
          display: "MIXED-USE OCCUPANCY bldg",
          questionDisplay: "The building is a MIXED-USE OCCUPANCY",
          updateCode: "69E11",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk type of bldg",
          questionDisplay: "The type of building is unknown",
          updateCode: "69E13",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p className="text-red-400">Are there any <b className="font-bold">hazardous materials</b> or <b className="font-bold">chemicals</b> present?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const bldgType = answers.find(
          (a) => a.question === "What type of building is involved?"
        )?.answer;
        return bldgType === "COMMERCIAL/INDUSTRIAL building";
      },
      preRenderLogic: "the building is commercial/industrial",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No haz mats/chem",
          questionDisplay: "There are no hazardous materials or chemicals present",
          continue: true,
        },
        {
          answer: "Yes:",
          display: "Hazmat/chems: {input}",
          questionDisplay: "There are hazardous materials or chemicals present: {input}",
          updateCode: "69E04",
          continue: true,
        },
        {
          answer: "Doesn't know",
          display: "Unk if haz mats/chem",
          questionDisplay: "It is unknown if there are hazardous materials or chemicals present",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is it <b className="font-bold">attached</b> to a <b className="font-bold">building</b>?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const bldgType = answers.find(
          (a) => a.question === "What type of building is involved?"
        )?.answer;
        return bldgType === "Garage";
      },
      preRenderLogic: "the building is a garage",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Not attached to bldg",
          questionDisplay: "The garage is not attached to a building",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Attached to bldg",
          questionDisplay: "The garage is attached to a building",
          continue: true,
        },
        {
          answer: "Doesn't know",
          display: "Unk if attached to bldg",
          questionDisplay: "It is unknown if the garage is attached to a building",
          continue: true,
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of <b className="font-bold">structure</b> is it <b className="font-bold">attached</b> to?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const bldgType = answers.find(
          (a) => a.question === "What type of building is involved?"
        )?.answer;
        const isAttached = answers.find(
          (a) => a.question === "Is it attached to a building?"
        )?.answer;
        return bldgType === "Garage" && isAttached === "Yes";
      },
      preRenderLogic: "the building is a garage and it is attached to a building",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "HIGH LIFE HAZARD",
          display: "HIGH LIFE HAZARD bldg",
          questionDisplay: "The building is a HIGH LIFE HAZARD",
          updateCode: "69E01",
          continue: true,
          send: true
        },
        {
          answer: "HIGH RISE",
          display: "HIGH RISE bldg",
          questionDisplay: "The building is a HIGH RISE",
          updateCode: "69E02",
          continue: true,
          send: true
        },
        {
          answer: "COMMERCIAL/INDUSTRIAL building",
          display: "COMM/IND bldg",
          questionDisplay: "The building is a COMMERCIAL/INDUSTRIAL",
          updateCode: "69E03",
          continue: true,
        },
        {
          answer: "Residential (multiple)",
          display: "Residential (mult) bldg",
          questionDisplay: "The building is a Residential (multiple)",
          updateCode: "69E05",
          continue: true,
          send: true
        },
        {
          answer: "Residential (single)",
          display: "Residential (single) bldg",
          questionDisplay: "The building is a Residential (single)",
          updateCode: "69E06",
          continue: true,
          send: true
        },
        {
          answer: "LARGE NON-DWELLING:",
          display: "Large non-dwelling bldg: {input}",
          questionDisplay: "The building is a large non-dwelling bldg: {input}",
          updateCode: "69E07",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "SMALL NON-DWELLING:",
          display: "Small non-dwelling bldg: {input}",
          questionDisplay: "The building is a small non-dwelling bldg: {input}",
          updateCode: "69E08",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Mobile home",
          display: "Mobile home structure",
          questionDisplay: "The structure is a mobile home",
          updateCode: "69E09",
          continue: true,
          send: true
        },
        {
          answer: "House trailer",
          display: "House trailer structure",
          questionDisplay: "The structure is a house trailer",
          updateCode: "69E09",
          continue: true,
          send: true
        },
        {
          answer: "Portable office",
          display: "Portable office structure",
          questionDisplay: "The structure is a portable office",
          updateCode: "69E09",
          continue: true,
          send: true
        },
        {
          answer: "PARKING GARAGE",
          display: "PARKING GARAGE structure",
          questionDisplay: "The structure is a PARKING GARAGE",
          updateCode: "69E12",
          continue: true,
          send: true
        },
        {
          answer: "Building/structure over water",
          display: "Bldg/structure over water",
          questionDisplay: "The building/structure is over water",
          updateCode: "69E10",
          continue: true,
          send: true
        },
        {
          answer: "MIXED-USE OCCUPANCY",
          display: "MIXED-USE OCCUPANCY bldg",
          questionDisplay: "The building is a MIXED-USE OCCUPANCY",
          updateCode: "69E11",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk type of bldg",
          questionDisplay: "The type of building is unknown",
          updateCode: "69E13",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>Is this a <b className="font-bold">multi-story</b> or <b className="font-bold">multi-car garage</b>?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const bldgType = answers.find(
          (a) => a.question === "What type of building is involved?"
        )?.answer;
        const isAttached = answers.find(
          (a) => a.question === "Is it attached to a building?"
        )?.answer;
        return bldgType === "Garage" && isAttached === "No";
      },
      preRenderLogic: "the building is a garage and it is not attached to a building",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Single-car/story garage",
          questionDisplay: "The garage is a single-car/story",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Multi-car/story garage",
          questionDisplay: "The garage is a multi-car/story",
          updateCode: "69E12",
          continue: true,
          send: true,
        },
        {
          answer: "Doesn't know",
          display: "Unknown garage type",
          questionDisplay: "The garage type is unknown",
          continue: true,
        }
      ]
    },

    {
      text: <p>Are you <b className="font-bold">at that location now</b>?</p>,
      questionType: 'select',
      answers: [
        {
          answer: "Yes (1st party)",
          display: "Caller is on scene (1st party)",
          questionDisplay: "The caller is on scene (1st party)",
          continue: true,
        },
        {
          answer: "Yes (2nd party)",
          display: "Caller is on scene (2nd party)",
          questionDisplay: "The caller is on scene (2nd party)",
          continue: true,
        },
        {
          answer: "No (3rd party)",
          display: "Caller is not on scene (3rd party)",
          questionDisplay: "The caller is not on scene (3rd party)",
          continue: true,
        },
        {
          answer: "No (4th party)",
          display: "Caller is not on scene (4th party)",
          questionDisplay: "The caller is not on scene (4th party)",
          continue: true,
        },
        {
          answer: "Doesn't know",
          display: "Unknown party",
          questionDisplay: "The party is unknown",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">I need to confirm, are you <b className="font-bold">out</b> of the <b className="font-bold">building</b>?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const callerType = answers.find(
          (a) => a.question === "Are you at that location now?"
        )?.answer;
        return callerType === "Yes (1st party)" || callerType === "Yes (2nd party)";
      },
      preRenderLogic: "the caller is on scene (1st or 2nd party)",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Caller is out of bldg",
          questionDisplay: "The caller is out of the building",
          continue: true,
        },
        {
          answer: "No",
          display: "Caller is still in bldg",
          questionDisplay: "The caller is still in the building",
          updateSuffix: "T",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-blue-400">Did the caller indicate one of these incident types?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const callerType = answers.find(
          (a) => a.question === "Are you at that location now?"
        )?.answer;
        return callerType === "Yes (1st party)" || callerType === "Yes (2nd party)";
      },
      preRenderLogic: "the caller is on scene (1st or 2nd party)",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No special incident",
          questionDisplay: "The caller did not indicate a special incident",
          continue: true,
        },
        {
          answer: "LIGHT smoke",
          display: "LIGHT smoke rptd",
          questionDisplay: "The caller indicated LIGHT smoke",
          updateSuffix: "K",
          dependency(_answers, _fireCase, currentCode) {
            return { code: currentCode.replace("E", "D") }
          },
          preRenderInstructions: (answers) => {
            const callerType = answers.find(
              (a) => a.question === "Are you at that location now?"
            )?.answer;
            return callerType === "Yes (1st party)";
          },
          continue: true,
        },
        {
          answer: "Appliance fire",
          display: "Appliance fire rptd",
          questionDisplay: "The caller indicated an appliance fire",
          updateSuffix: "A",
          dependency(_answers, _fireCase, currentCode) {
            return { code: currentCode.replace("E", "D") }
          },
          continue: true,
        },
        {
          answer: "Electrical problem (LIGHT smoke)",
          display: "Electrical problem (LIGHT smoke) rptd",
          questionDisplay: "The caller indicated an electrical problem (LIGHT smoke)",
          updateSuffix: "L",
          dependency(_answers, _fireCase, currentCode) {
            return { code: currentCode.replace("E", "D") }
          },
          preRenderInstructions: (answers) => {
            const callerType = answers.find(
              (a) => a.question === "Are you at that location now?"
            )?.answer;
            return callerType === "Yes (1st party)";
          },
          continue: true,
        },
        {
          answer: "Extinguished fire",
          display: "Extinguished fire rptd",
          questionDisplay: "The caller indicated an extinguished fire",
          updateSuffix: "E",
          dependency(_answers, _fireCase, currentCode) {
            return { code: currentCode.replace("E", "D") }
          },
          preRenderInstructions: (answers) => {
            const callerType = answers.find(
              (a) => a.question === "Are you at that location now?"
            )?.answer;
            return callerType === "Yes (1st party)" || callerType === "Yes (2nd party)";
          },
          continue: true,
        },
        {
          answer: "Chimney fire",
          display: "Chimney fire rptd",
          questionDisplay: "The caller indicated a chimney fire",
          updateSuffix: "C",
          dependency(_answers, _fireCase, currentCode) {
            return { code: currentCode.replace("E", "D") }
          },
          continue: true,
        },
        {
          answer: "Burned food",
          display: "Burned food rptd",
          questionDisplay: "The caller indicated burned food",
          updateSuffix: "F",
          dependency(_answers, _fireCase, currentCode) {
            return { code: currentCode.replace("E", "D") }
          },
          preRenderInstructions: (answers) => {
            const callerType = answers.find(
              (a) => a.question === "Are you at that location now?"
            )?.answer;
            return callerType === "Yes (1st party)";
          },
          continue: true,
        },
        {
          answer: "Odor of smoke",
          display: "Odor of smoke rptd",
          questionDisplay: "The caller indicated an odor of smoke",
          updateSuffix: "O",
          dependency(_answers, _fireCase, currentCode) {
            return { code: currentCode.replace("E", "D") }
          },
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Are there (other) people or animals <b className="font-bold">trapped inside</b> the building?</p>,
      questionType: 'select',
      answers: [
        {
          answer: "No",
          display: "No persons/animals trapped",
          questionDisplay: "There are no people or animals trapped inside the building",
          continue: true,
        },
        {
          answer: "People",
          display: "People trapped inside",
          questionDisplay: "There are people trapped inside the building",
          updateSuffix: "T",
          dependency(_answers, _fireCase, currentCode) {
            return { code: currentCode?.replace("D", "E") }
          },
          continue: true,
        },
        {
          answer: "Animals",
          display: "Animals trapped inside",
          questionDisplay: "There are animals trapped inside the building",
          continue: true,
        },
        {
          answer: "Both",
          display: "People & animals trapped",
          questionDisplay: "There are people and animals trapped inside the building",
          updateSuffix: "T",
          dependency(_answers, _fireCase, currentCode) {
            return { code: currentCode?.replace("D", "E") }
          },
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if persons/animals trapped",
          questionDisplay: "It is unknown if there are people or animals trapped inside the building",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is anyone <b className="font-bold">injured</b>?</p>,
      questionType: 'select',
      answers: [
        {
          answer: "No",
          display: "No injs rptd",
          questionDisplay: "No injuries reported",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Injuries reported",
          questionDisplay: "Injuries reported",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if injs",
          questionDisplay: "It is unknown if there are injuries",
          continue: true,
        }
      ]
    },
    {
      text: <p>How <b className="font-bold">many</b> people are <b className="font-bold">injured</b>?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const injs = answers.find(
          (a) => a.question === "Is anyone injured?"
        )?.answer;
        return injs === "Yes";
      },
      preRenderLogic: "there are injuries reported",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single inj'd person",
          questionDisplay: "There is a single injured person",
          updateSuffix: "X",
          continue: true,
        },
        {
          answer: "Multiple persons:",
          display: "Multiple inj'd persons: {input}",
          questionDisplay: "There are multiple injured persons: {input}",
          updateSuffix: "Y",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk number of injs",
          questionDisplay: "The number of injured persons is unknown",
          continue: true,
        }
      ],
    }
  ],
  determinants: [
    {
      priority: "D",
      codes: [
        {
          code: "69D01",
          text: "High Life Hazard",
          recResponse: 233,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 267,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 268,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 269,
            },
          ],
        },
        {
          code: "69D02",
          text: "High Rise",
          recResponse: 270,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 270,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 271,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 272,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 273,
            },
          ],
        },
        {
          code: "69D03",
          text: "Comm/Ind Building",
          recResponse: 274,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 275,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 276,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 277,
            },
          ],
        },
        {
          code: "69D04",
          text: "Comm/Ind Building w/ Hazardous Materials",
          recResponse: 278,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 279,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 278,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 280,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 280,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 19,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 281,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 19,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 282,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 283,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 284,
            },
          ],
        },
        {
          code: "69D05",
          text: "Residential (Mult)",
          recResponse: 285,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 286,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 287,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 288,
            },
          ],
        },
        {
          code: "69D06",
          text: "Residential (Single)",
          recResponse: 289,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 290,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 291,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 292,
            },
          ],
        },
        {
          code: "69D07",
          text: "Large Non-Dwelling Building/Structure",
          recResponse: 293,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 294,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 295,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 296,
            },
          ],
        },
        {
          code: "69D08",
          text: "Small Non-Dwelling Building/Structure",
          recResponse: 297,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 298,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 299,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 300,
            },
          ],
        },
        {
          code: "69D09",
          text: "Mobile Home, House Trailer, or Portable Office",
          recResponse: 297,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 298,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 299,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 300,
            },
          ],
        },
        {
          code: "69D10",
          text: "Building/Structure Over Water",
          recResponse: 301,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 302,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 303,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 304,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 304,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 305,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 306,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 307,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 308,
            },
          ],
        },
        {
          code: "69D11",
          text: "Mixed-Use Occupancy Building",
          recResponse: 309,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 310,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 311,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 312,
            },
          ],
        },
        {
          code: "69D12",
          text: "Parking Garage",
          recResponse: 313,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 314,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 315,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 316,
            },
          ],
        },
        {
          code: "69D13",
          text: "Unkn Structure Type",
          recResponse: 233,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 267,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 268,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 269,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "69E00",
          text: "Override (Echo)",
          recResponse: 233,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 233,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 233,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 233,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 233,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 233,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 233,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 233,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 267,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 268,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 269,
            },
          ],
        },
        {
          code: "69E01",
          text: "High Life Hazard",
          recResponse: 233,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 267,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 317,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 268,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 269,
            },
          ],
        },
        {
          code: "69E02",
          text: "High Rise",
          recResponse: 270,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 271,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 318,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 272,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 273,
            },
          ],
        },
        {
          code: "69E03",
          text: "Comm/Ind Building",
          recResponse: 274,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 275,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 319,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 276,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 277,
            },
          ],
        },
        {
          code: "69E04",
          text: "Comm/Ind Building w/ Hazardous Materials",
          recResponse: 320,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 321,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 322,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 323,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 324,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 325,
            },
          ],
        },
        {
          code: "69E05",
          text: "Residential (Mult)",
          recResponse: 285,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 286,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 326,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 287,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 288,
            },
          ],
        },
        {
          code: "69E06",
          text: "Residential (Single)",
          recResponse: 289,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 290,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 327,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 291,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 292,
            },
          ],
        },
        {
          code: "69E07",
          text: "Large Non-Dwelling Building/Structure",
          recResponse: 293,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 294,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 328,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 295,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 296,
            },
          ],
        },
        {
          code: "69E08",
          text: "Small Non-Dwelling Building/Structure",
          recResponse: 297,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 298,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 329,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 299,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 300,
            },
          ],
        },
        {
          code: "69E09",
          text: "Mobile Home, House Trailer, or Portable Office",
          recResponse: 297,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 298,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 329,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 299,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 300,
            },
          ],
        },
        {
          code: "69E10",
          text: "Building/Structure Over Water",
          recResponse: 301,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 330,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 306,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 331,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 307,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 308,
            },
          ],
        },
        {
          code: "69E11",
          text: "Mixed-Use Occupancy Building",
          recResponse: 309,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 310,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 332,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 311,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 312,
            },
          ],
        },
        {
          code: "69E12",
          text: "Parking Garage",
          recResponse: 313,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 314,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 333,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 315,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 316,
            },
          ],
        },
        {
          code: "69E13",
          text: "Unkn Building/Structure Type",
          recResponse: 233,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 267,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 317,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 268,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 269,
            },
          ],
        },
      ],
    },
  ],
};
