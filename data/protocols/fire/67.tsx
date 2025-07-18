import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const OUTSIDE_OTHER_FIRES: IFireComplaint = {
  protocol: 67,
  name: "Outside / Other Fires",
  shortName: "Outside/Other Fires",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 247,
  defaultCode: "67B03",
  questions: [
    {
      text: <p><span className="text-blue-400">(Not already stated)</span> What <b className="font-bold">exactly</b> is on <b className="font-bold text-red-400">fire</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "General outside",
          display: "General outside fire",
          questionDisplay: "There is a general outside fire.",
          continue: true,
        },
        {
          answer: "Trash",
          display: "Trash fire",
          questionDisplay: "There is a trash fire.",
          continue: true,
        },
        {
          answer: "Grass/Brush/Wildland",
          display: "Grass/Brush/Wildland fire",
          questionDisplay: "There is a grass/brush/wildland fire.",
          gotoProtocol: 82
        },
        {
          answer: "Elevated structure",
          display: "Elevated structure fire",
          questionDisplay: "There is an elevated structure fire.",
          continue: true,
        },
        {
          answer: "PERSON",
          display: "Person on fire",
          questionDisplay: "There is a person on fire.",
          updateCode: "67E01",
          continue: true,
          send: true,
        },
        {
          answer: "Extinguished now",
          display: "Fire is extinguished now",
          questionDisplay: "The fire is extinguished now.",
          updateCode: "67A01",
          continue: true,
        },
        {
          answer: "Illegal burning",
          display: "Illegal burning",
          questionDisplay: "There is illegal burning.",
          updateCode: "67A02",
          continue: true,
        },
        {
          answer: "Structure",
          display: "Structure fire",
          questionDisplay: "There is a structure fire.",
          gotoProtocol: 69
        },
        {
          answer: "Unknown",
          display: "Unknown what is on fire",
          questionDisplay: "It is unknown what is on fire.",
          updateCode: "67B03",
          continue: true,
        },
      ]
    },

    {
      text: <p className="text-red-400">Are there any <b className="font-bold">hazardous materials</b> or <b className="font-bold">chemicals</b> involved?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No hazmat/chems rptd",
          questionDisplay: "No hazardous materials or chemicals are reported.",
          continue: true,
        },
        {
          answer: "Yes:",
          display: "Hazmat/chems rptd: {input}",
          questionDisplay: "There are hazardous materials or chemicals involved: {input}.",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if hazmat/chems involved",
          questionDisplay: "It is unknown if there are hazardous materials or chemicals involved.",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Is anyone <b className="font-bold">trapped</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No one trapped",
          questionDisplay: "No one is trapped.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Person(s) trapped",
          questionDisplay: "There is at least one person trapped.",
          updateSuffix: "T",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if anyone trapped",
          questionDisplay: "It is unknown if anyone is trapped.",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Is anyone <b className="font-bold">threatened</b> or <b className="font-bold">in danger</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const isTrapped = answers?.find((a) => a.question === "Is anyone trapped?")?.answer;
        return isTrapped !== "Yes"
      },
      preRenderLogic: "no one is trapped",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No one threatened/danger",
          questionDisplay: "No one is threatened or in danger.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Person(s) threatened/danger",
          questionDisplay: "There is at least one person threatened or in danger.",
          updateSuffix: "P",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if anyone threatened/danger",
          questionDisplay: "It is unknown if anyone is threatened or in danger.",
          continue: true,
        }
      ]
    },

    {
      text: <p>What is the <b className="font-bold">size</b> of the <b className="font-bold">elevated structure</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const typeOfFire = answers?.find((a) => a.question === "What exactly is on fire?")?.answer;
        return typeOfFire === "Elevated structure"
      },
      preRenderLogic: "this is an elevated structure fire",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Small",
          display: "Small elevated structure",
          questionDisplay: "The elevated structure is small.",
          updateCode: "67C01",
          continue: true,
        },
        {
          answer: "Large",
          display: "Large elevated structure",
          questionDisplay: "The elevated structure is large.",
          updateCode: "67D01",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk size of elevated structure",
          questionDisplay: "The size of the elevated structure is unknown.",
          updateCode: "67C01",
          continue: true,
        }
      ]
    },

    {
      text: <p>What is the <b className="font-bold">size</b> of the <b className="font-bold text-red-400">fire</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const typeOfFire = answers?.find((a) => a.question === "(Not already stated) What exactly is on fire?")?.answer;
        return typeOfFire === "General outside" || typeOfFire === "Trash"
      },
      preRenderLogic: "this is a general outside or trash fire",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Small (< 1 acre)",
          display: "Small fire (< 1 acre)",
          questionDisplay: "The fire is small, less than 1 acre.",
          updateCode: "67B01",
          preRenderInstructions: (answers) => {
            const hazmatInvolved = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
            return hazmatInvolved !== "Yes:"
          },
          preRenderLogic: "no hazmat/chems involved",
          preRenderDependencies: ["answers"],
          continue: true,
          send: true,
        },
        {
          answer: "Small (< 1 acre)",
          display: "Small fire (< 1 acre)",
          questionDisplay: "The fire is small, less than 1 acre.",
          updateCode: "67B02",
          preRenderInstructions: (answers) => {
            const hazmatInvolved = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
            return hazmatInvolved === "Yes:"
          },
          preRenderLogic: "hazmat/chems involved",
          preRenderDependencies: ["answers"],
          continue: true,
          send: true,
        },
        {
          answer: "Large (>= 1 acre)",
          display: "Large fire (>= 1 acre)",
          questionDisplay: "The fire is large, 1 acre or more.",
          updateCode: "67D02",
          preRenderInstructions: (answers) => {
            const hazmatInvolved = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
            return hazmatInvolved !== "Yes:"
          },
          preRenderLogic: "no hazmat/chems involved",
          preRenderDependencies: ["answers"],
          continue: true,
          send: true,
        },
        {
          answer: "Large (>= 1 acre)",
          display: "Large fire (>= 1 acre)",
          questionDisplay: "The fire is large, 1 acre or more.",
          updateCode: "67D03",
          preRenderInstructions: (answers) => {
            const hazmatInvolved = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
            return hazmatInvolved === "Yes:"
          },
          preRenderLogic: "hazmat/chems involved",
          preRenderDependencies: ["answers"],
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk size of fire",
          questionDisplay: "The size of the fire is unknown.",
          updateCode: "67B03",
          continue: true,
          send: true,
        }
      ]
    },

    {
      text: <p>Is anyone <b className="font-bold">injured</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No injs rptd",
          questionDisplay: "No injuries are reported.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Injuries rptd",
          questionDisplay: "There is at least one injury reported.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if injs",
          questionDisplay: "Unknown if there are any injuries.",
          continue: true,
        }
      ]
    },

    {
      text: <p>How <b className="font-bold">many</b> people are <b className="font-bold">injured</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const hasInjuries = answers?.find((a) => a.question === "Is anyone injured?")?.answer;
        return hasInjuries === "Yes"
      },
      preRenderLogic: "there are injuries reported",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single person injured",
          questionDisplay: "There is a single person injured.",
          updateSuffix: "X",
          preRenderInstructions: (answers) => {
            const isTrapped = answers?.find((a) => a.question === "Is anyone trapped?")?.answer;
            const isThreatened = answers?.find((a) => a.question === "Is anyone threatened or in danger?")?.answer;
            return isTrapped !== "Yes" && isThreatened !== "Yes"
          },
          preRenderLogic: "no one is trapped or threatened",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Single person",
          display: "Single person injured",
          questionDisplay: "There is a single person injured.",
          preRenderInstructions: (answers) => {
            const isTrapped = answers?.find((a) => a.question === "Is anyone trapped?")?.answer;
            const isThreatened = answers?.find((a) => a.question === "Is anyone threatened or in danger?")?.answer;
            return isTrapped === "Yes" || isThreatened === "Yes"
          },
          preRenderLogic: "someone is trapped or threatened",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} people injured",
          questionDisplay: "There are multiple people injured: {input}.",
          updateSuffix: "Y",
          preRenderInstructions: (answers) => {
            const isTrapped = answers?.find((a) => a.question === "Is anyone trapped?")?.answer;
            const isThreatened = answers?.find((a) => a.question === "Is anyone threatened or in danger?")?.answer;
            return isTrapped !== "Yes" && isThreatened !== "Yes"
          },
          preRenderLogic: "no one is trapped or threatened",
          preRenderDependencies: ["answers"],
          continue: true,
          input: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} people injured",
          questionDisplay: "There are multiple people injured: {input}.",
          preRenderInstructions: (answers) => {
            const isTrapped = answers?.find((a) => a.question === "Is anyone trapped?")?.answer;
            const isThreatened = answers?.find((a) => a.question === "Is anyone threatened or in danger?")?.answer;
            return isTrapped === "Yes" || isThreatened === "Yes"
          },
          preRenderLogic: "someone is trapped or threatened",
          preRenderDependencies: ["answers"],
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk how many injs",
          questionDisplay: "It is unknown how many people are injured.",
          continue: true,
        }
      ]
    },
  ],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "67A01",
          text: "Extinguished Fire (1st/2nd Party)",
          recResponse: 247,
          subCodes: [
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 247,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 247,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 248,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 249,
            },
          ],
        },
        {
          code: "67A02",
          text: "Illegal Burning",
          recResponse: 34,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 247,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 250,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 247,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 247,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 250,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 247,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 247,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 247,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 248,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 249,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "67B00",
          text: "Override (Bravo)",
          recResponse: 247,
          subCodes: [
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 247,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 247,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 248,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 249,
            },
          ],
        },
        {
          code: "67B01",
          text: "Small Outside Fire",
          recResponse: 247,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 247,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 250,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 250,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 247,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 250,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 247,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 247,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 247,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 248,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 249,
            },
          ],
        },
        {
          code: "67B02",
          text: "Small Outside Fire w/ Hazardous Materials",
          recResponse: 251,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 251,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 251,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 251,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 251,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 251,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 251,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 251,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 251,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 251,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 251,
            },
          ],
        },
        {
          code: "67B03",
          text: "Unkn Situation (Investigation)",
          recResponse: 209,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 209,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 209,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 209,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 209,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 209,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 209,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 209,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 209,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 210,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 211,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "67C00",
          text: "Override (Charlie)",
          recResponse: 250,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 250,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 250,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 250,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 250,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 250,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 250,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 250,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 250,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 252,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 249,
            },
          ],
        },
        {
          code: "67C01",
          text: "Small Elevated Structures",
          recResponse: 253,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 253,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 253,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 253,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 253,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 253,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 254,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 253,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 253,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 254,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 255,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "67D00",
          text: "Override (Delta)",
          recResponse: 256,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 256,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 256,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 256,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 256,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 256,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 256,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 256,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 256,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 256,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 256,
            },
          ],
        },
        {
          code: "67D01",
          text: "Large Elevated Structures",
          recResponse: 256,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 256,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 256,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 256,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 256,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 256,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 256,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 256,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 256,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 256,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 256,
            },
          ],
        },
        {
          code: "67D02",
          text: "Large Outside Fire",
          recResponse: 250,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 250,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 250,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 250,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 250,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 250,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 252,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 250,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 250,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 252,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 249,
            },
          ],
        },
        {
          code: "67D03",
          text: "Large Outside Fire w/ Hazardous Materials",
          recResponse: 251,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 251,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 251,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 251,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 251,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 251,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 251,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 251,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 251,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 251,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 251,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "67E00",
          text: "Override (Echo)",
          recResponse: 257,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 257,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 257,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 257,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 257,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 257,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 257,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 257,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 257,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 257,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 257,
            },
          ],
        },
        {
          code: "67E01",
          text: "Person on Fire (Outside)",
          recResponse: 258,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 258,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 258,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 258,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 258,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 258,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 258,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 258,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 258,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 258,
            },
          ],
        },
      ],
    },
  ],
};
