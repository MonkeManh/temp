import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const MARINE_BOAT_FIRES: IFireComplaint = {
  protocol: 64,
  name: "Marine / Boat Fire",
  shortName: "Marine/Boat Fire",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultPlan: 227,
  defaultCode: "64B02",
  questions: [
    {
      text: <p><span className="text-blue-400">(Not obvious)</span> Is the boat still <b className="font-bold text-red-400">on fire</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Boat is on fire",
          questionDisplay: "The boat is on fire.",
          continue: true,
        },
        {
          answer: "No",
          display: "Boat fire is out",
          questionDisplay: "The boat fire is out.",
          updateCode: "64B01",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if boat is on fire",
          questionDisplay: "Unknown if the boat is on fire.",
          continue: true,
        }
      ]
    },

    {
      text: <p>What is the <b className="font-bold">status</b> of the vessel?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Docked",
          display: "Vessel is docked",
          questionDisplay: "The vessel is docked.",
          continue: true,
        },
        {
          answer: "Dry dock",
          display: "Vessel is in dry dock",
          questionDisplay: "The vessel is in dry dock.",
          updateCode: "64D01",
          continue: true,
          send: true,
        },
        {
          answer: "Beached",
          display: "Vessel is beached",
          questionDisplay: "The vessel is beached.",
          continue: true,
        },
        {
          answer: "Afloat",
          display: "Vessel is afloat",
          questionDisplay: "The vessel is afloat.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk vessel status",
          questionDisplay: "Unknown what the vessel status is.",
          continue: true,
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of <b className="font-bold">body of water</b> is the vessel in?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const status = answers?.find((a) => a.question === "What is the status of the vessel?")?.answer;
        return status !== "Dry dock"
      },
      preRenderLogic: "the vessel is not in dry dock",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Costal water",
          display: "Costal water",
          questionDisplay: "The vessel is in costal water.",
          continue: true,
          dependency: (answers) => {
            const status = answers?.find((a) => a.question === "What is the status of the vessel?")?.answer;
            if(status === "Docked") {
              return { code: "64D02", send: true }
            } else if(status === "Beached") {
              return { code: "64D04", send: true }
            } else {
              return { code: "64D06", send: true };
            }
          }
        },
        {
          answer: "Inland water",
          display: "Inland water",
          questionDisplay: "The vessel is in inland water.",
          continue: true,
          dependency: (answers) => {
            const status = answers?.find((a) => a.question === "What is the status of the vessel?")?.answer;
            if(status === "Docked") {
              return { code: "64D03", send: true }
            } else if(status === "Beached") {
              return { code: "64D05", send: true }
            } else {
              return { code: "64D08", send: true };
            }
          }
        },
        {
          answer: "Oceanic water",
          display: "Oceanic water",
          questionDisplay: "The vessel is in oceanic water.",
          updateCode: "64D07",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk body of water",
          questionDisplay: "Unknown what type of body of water the vessel is in.",
          continue: true,
        }
      ]
    },

    {
      text: <p>What is the <b className="font-bold">size</b> of the <b className="font-bold">vessel</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Small (< 25ft)",
          display: "Small vessel (< 25ft)",
          questionDisplay: "The vessel is small, less than 25ft (8m).",
          updateSuffix: "S",
          continue: true,
        },
        {
          answer: "Medium (25-49ft)",
          display: "Medium vessel (25-49ft)",
          questionDisplay: "The vessel is medium, between 25-49ft (8-14m).",
          updateSuffix: "M",
          continue: true,
        },
        {
          answer: "Large (>= 50ft)",
          display: "Large vessel (>= 50ft)",
          questionDisplay: "The vessel is large, 50ft (15m) or greater.",
          updateSuffix: "L",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk vessel size",
          questionDisplay: "Unknown what the size of the vessel is.",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Is the vessel carrying any <b className="font-bold">hazardous materials</b> or <b className="font-bold">chemicals</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No hazmat/chems",
          questionDisplay: "The vessel is not carrying any hazardous materials or chemicals.",
          continue: true,
        },
        {
          answer: "Yes:",
          display: "Hazmat/chems: {input}",
          questionDisplay: "The vessel is carrying hazardous materials or chemicals: {input}.",
          input: true,
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if hazmat/chems",
          questionDisplay: "Unknown if the vessel is carrying any hazardous materials or chemicals.",
          continue: true,
        }
      ]
    },

    {
      text: <p><span className="text-blue-400">(Not obvious)</span> Is anyone <b className="font-bold">injured</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No injs rptd",
          questionDisplay: "No injuries reported.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Injs rptd",
          questionDisplay: "Injuries reported.",
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
        const inj = answers?.find((a) => a.question === "(Not obvious) Is anyone injured?")?.answer;
        return inj === "Yes"
      },
      preRenderLogic: "there are injuries",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single injured person",
          questionDisplay: "There is a single injured person.",
          updateSuffix: "T",
          preRenderInstructions: (answers) => {
            const size = answers?.find((a) => a.question === "What is the size of the vessel?")?.answer;
            return size === "Large (>= 50ft)";
          },
          preRenderLogic: "the vessel is large",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Single person",
          display: "Single injured person",
          questionDisplay: "There is a single injured person.",
          updateSuffix: "V",
          preRenderInstructions: (answers) => {
            const size = answers?.find((a) => a.question === "What is the size of the vessel?")?.answer;
            return size === "Medium (25-49ft)";
          },
          preRenderLogic: "the vessel is medium",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Single person",
          display: "Single injured person",
          questionDisplay: "There is a single injured person.",
          updateSuffix: "X",
          preRenderInstructions: (answers) => {
            const size = answers?.find((a) => a.question === "What is the size of the vessel?")?.answer;
            return size === "Small (< 25ft)";
          },
          preRenderLogic: "the vessel is small",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} injured persons",
          questionDisplay: "There are {input} injured persons.",
          updateSuffix: "U",
          preRenderInstructions: (answers) => {
            const size = answers?.find((a) => a.question === "What is the size of the vessel?")?.answer;
            return size === "Large (>= 50ft)";
          },
          preRenderLogic: "the vessel is large",
          preRenderDependencies: ["answers"],
          continue: true,
          input: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} injured persons",
          questionDisplay: "There are {input} injured persons.",
          updateSuffix: "W",
          preRenderInstructions: (answers) => {
            const size = answers?.find((a) => a.question === "What is the size of the vessel?")?.answer;
            return size === "Medium (25-49ft)";
          },
          preRenderLogic: "the vessel is medium",
          preRenderDependencies: ["answers"],
          continue: true,
          input: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} injured persons",
          questionDisplay: "There are {input} injured persons.",
          updateSuffix: "Y",
          preRenderInstructions: (answers) => {
            const size = answers?.find((a) => a.question === "What is the size of the vessel?")?.answer;
            return size === "Small (< 25ft)";
          },
          preRenderLogic: "the vessel is small",
          preRenderDependencies: ["answers"],
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk how many injs",
          questionDisplay: "Unknown how many people are injured.",
          continue: true,
        }
      ]
    }
  ],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "64B01",
          text: "Extinguished Fire",
          recResponse: 227,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 227,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 227,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 227,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 228,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 229,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 228,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 229,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 228,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 229,
            },
          ],
        },
        {
          code: "64B02",
          text: "Unkn Situation (Investigation)",
          recResponse: 209,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 209,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 209,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 209,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 210,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 211,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 210,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 211,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 210,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 211,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "64D00",
          text: "Override (Delta)",
          recResponse: 230,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 230,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 230,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 230,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 232,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 232,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 232,
            },
          ],
        },
        {
          code: "64D01",
          text: "Threatened Building/Structure or Other Boats",
          recResponse: 233,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 233,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 233,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 233,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 233,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 233,
            },
          ],
        },
        {
          code: "64D02",
          text: "Docked in Costal Water",
          recResponse: 233,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 233,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 230,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 230,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 232,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 232,
            },
          ],
        },
        {
          code: "64D03",
          text: "Docked in Inland Water",
          recResponse: 233,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 233,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 230,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 230,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 232,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 232,
            },
          ],
        },
        {
          code: "64D04",
          text: "Beached in Costal Water",
          recResponse: 233,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 233,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 230,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 230,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 232,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 232,
            },
          ],
        },
        {
          code: "64D05",
          text: "Beached in Inland Water",
          recResponse: 233,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 233,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 230,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 230,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 232,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 232,
            },
          ],
        },
        {
          code: "64D06",
          text: "Costal Water",
          recResponse: 234,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 234,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 234,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 234,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 234,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 234,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 234,
            },
          ],
        },
        {
          code: "64D07",
          text: "Oceanic Water",
          recResponse: 234,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 234,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 234,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 234,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 234,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 234,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 234,
            },
          ],
        },
        {
          code: "64D08",
          text: "Inland Water",
          recResponse: 234,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 234,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 234,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 234,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 234,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 234,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 234,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 234,
            },
          ],
        },
        {
          code: "64D09",
          text: "Dry Dock/On Land",
          recResponse: 233,
          subCodes: [
            {
              suffix: "L",
              text: "Large >= 50ft (>=15m)",
              recResponse: 233,
            },
            {
              suffix: "M",
              text: "Medium 25-49ft (8-14m)",
              recResponse: 230,
            },
            {
              suffix: "S",
              text: "Small < 25ft (<8m)",
              recResponse: 230,
            },
            {
              suffix: "T",
              text: "Large & Single Injured Person",
              recResponse: 233,
            },
            {
              suffix: "U",
              text: "Large & Multiple Injured Persons",
              recResponse: 233,
            },
            {
              suffix: "V",
              text: "Medium & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "W",
              text: "Medium & Multiple Injured Persons",
              recResponse: 232,
            },
            {
              suffix: "X",
              text: "Small & Single Injured Person",
              recResponse: 231,
            },
            {
              suffix: "Y",
              text: "Small & Multiple Injured Persons",
              recResponse: 232,
            },
          ],
        },
      ],
    },
  ],
};
