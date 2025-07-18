import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const COLLAPSE_ENTRAPMENTS: IFireComplaint = {
  protocol: 54,
  name: "Confined Space / Structure Collapse",
  shortName: "Confined Space/Collapse",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultPlan: 83,
  defaultCode: "54B01",
  questions: [
    {
      text: <p className="text-blue-400">What type of <b className="font-bold">incident</b> is this?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Structure collapse",
          display: "Structure collapse rptd",
          questionDisplay: "This is a structure collapse",
          continue: true
        },
        {
          answer: "Confined space rescue",
          display: "Confined space entrapment rptd",
          questionDisplay: "This is a confined space rescue",
          updateSuffix: "C",
          continue: true,
        },
        {
          answer: "Sinkhole",
          display: "Sinkhole rptd",
          questionDisplay: "This is a sinkhole",
          updateSuffix: "H",
          continue: true,
        },
        {
          answer: "Landslide/mudslide",
          display: "Landslide/mudslide rptd",
          questionDisplay: "This is a landslide/mudslide",
          updateSuffix: "M",
          continue: true,
        },
        {
          answer: "Trench collapse/rescue",
          display: "Trench collapse/rescue rptd",
          questionDisplay: "This is a trench collapse/rescue",
          updateSuffix: "T",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk situation",
          questionDisplay: "This is an unknown situation",
          updateCode: "54B02",
          updateSuffix: "U",
        }
      ]
    },

    {
      text: <p className="text-red-400">Does this incident involve <b className="font-bold">hazmat or chemicals</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No hazmat/chems rptd",
          questionDisplay: "No hazmat/chemicals reported",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Hazmat/chems rptd",
          questionDisplay: "Hazmat/chemicals reported",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if hazmat/chems",
          questionDisplay: "It is unknown if there are hazmat/chemicals involved",
          continue: true,
        }
      ]
    },

    {
      text: <p>Do you see any <b className="font-bold">placards</b> or <b className="font-bold">chemical id's</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const hazmatInvolved = answers.find((a) => a.question === "Does this incident involve hazmat or chemicals?")?.answer;
        return hazmatInvolved === "Yes";
      },
      preRenderLogic: "this incident involves hazmat or chemicals",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No placards/IDs seen",
          questionDisplay: "No placards or chemical id's seen",
          continue: true,
        },
        {
          answer: "Yes:",
          display: "Hazmat/chems: {input}",
          questionDisplay: "Placards or chemical id's seen: {input}",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk hazmat/chem involved",
          questionDisplay: "It is unknown if there are placards or chemical id's seen",
          continue: true,
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of structue <b className="font-bold text-red-400">collapsed</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers.find((a) => a.question === "What type of incident is this?")?.answer;
        return incidentType === "Structure collapse";
      },
      preRenderLogic: "this is a structure collapse incident",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Large building/structure",
          display: "Large building/structure",
          questionDisplay: "The structure is a large building/structure",
          updateSuffix: "L",
          continue: true,
        },
        {
          answer: "Small building/structure",
          display: "Small building/structure",
          questionDisplay: "The structure is a small building/structure",
          updateSuffix: "S",
          continue: true,
        },
        {
          answer: "Unknown structure",
          display: "Unk structure",
          questionDisplay: "The structure is unknown",
          updateSuffix: "L",
          continue: true,
        }
      ]
    },

    {
      text: <p>Did the structue <b className="font-bold">collapse</b> into <b className="font-bold">water</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers.find((a) => a.question === "What type of incident is this?")?.answer;
        return incidentType === "Structure collapse";
      },
      preRenderLogic: "this is a structure collapse incident",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No collapse into water",
          questionDisplay: "The structure did not collapse into water",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Collapse into water",
          questionDisplay: "The structure collapsed into water",
          updateSuffix: "W",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if collapse into water",
          questionDisplay: "It is unknown if the structure collapsed into water",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is anyone <b className="font-bold text-red-400">TRAPPED</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No entrapment rptd",
          questionDisplay: "No entrapment reported",
          updateCode: "54B02",
          continue: true,
        },
        {
          answer: "Yes (confirmed)",
          display: "Entrapment rptd (confirmed)",
          questionDisplay: "Entrapment reported (confirmed)",
          updateCode: "54D01",
          preRenderInstructions: (answers) => {
            const hazmatInvolved = answers.find((a) => a.question === "Does this incident involve hazmat or chemicals?")?.answer;
            return hazmatInvolved !== "Yes";
          },
          continue: true,
          send: true
        },
        {
          answer: "Yes (confirmed)",
          display: "Entrapment rptd (confirmed)",
          questionDisplay: "Entrapment reported (confirmed)",
          updateCode: "54D02",
          preRenderInstructions: (answers) => {
            const hazmatInvolved = answers.find((a) => a.question === "Does this incident involve hazmat or chemicals?")?.answer;
            return hazmatInvolved === "Yes";
          },
          continue: true,
          send: true
        },
        {
          answer: "Yes (suspected)",
          display: "Entrapment rptd (unconfirmed)",
          questionDisplay: "Entrapment reported (unconfirmed)",
          updateCode: "54B01",
          preRenderInstructions: (answers) => {
            const hazmatInvolved = answers.find((a) => a.question === "Does this incident involve hazmat or chemicals?")?.answer;
            return hazmatInvolved !== "Yes";
          },
          continue: true,
        },
        {
          answer: "Yes (suspected)",
          display: "Entrapment rptd (unconfirmed)",
          questionDisplay: "Entrapment reported (unconfirmed)",
          updateCode: "54C01",
          preRenderInstructions: (answers) => {
            const hazmatInvolved = answers.find((a) => a.question === "Does this incident involve hazmat or chemicals?")?.answer;
            return hazmatInvolved === "Yes";
          },
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if entrapment",
          questionDisplay: "It is unknown if there is an entrapment",
          updateCode: "54B01",
          continue: true,
        }
      ]
    },

    {
      text: <p>How <b className="font-bold">many</b> people are <b className="font-bold">trapped</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const entrapmentStatus = answers.find((a) => a.question === "Is anyone TRAPPED?")?.answer;
        return entrapmentStatus === "Yes (confirmed)" || entrapmentStatus === "Yes (suspected)";
      },
      preRenderLogic: "there is a confirmed or suspected entrapment",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single person rptd trapped",
          questionDisplay: "A single person is trapped",
          continue: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} persons rptd trapped",
          questionDisplay: "{input} persons are trapped",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk number trapped",
          questionDisplay: "It is unknown how many people are trapped",
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
          code: "54B01",
          text: "Entrapment/Trapped (Unconfirmed)",
          recResponse: 83,
          subCodes: [
            {
              suffix: "C",
              text: "Confined Space",
              recResponse: 83,
            },
            {
              suffix: "H",
              text: "Sinkhole",
              recResponse: 83,
            },
            {
              suffix: "L",
              text: "Large Building/Structure Collapse",
              recResponse: 83,
            },
            {
              suffix: "M",
              text: "Landslide/Mudslide",
              recResponse: 83,
            },
            {
              suffix: "S",
              text: "Small Building/Structure Collapse",
              recResponse: 83,
            },
            {
              suffix: "T",
              text: "Trench (Collapse/Rescue)",
              recResponse: 83,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 83,
            },
            {
              suffix: "W",
              text: "Building/Structure Collapse into Water",
              recResponse: 84,
            },
          ],
        },
        {
          code: "54B02",
          text: "No On Trapped (Investigation)",
          recResponse: 83,
          subCodes: [
            {
              suffix: "C",
              text: "Confined Space",
              recResponse: 83,
            },
            {
              suffix: "H",
              text: "Sinkhole",
              recResponse: 83,
            },
            {
              suffix: "L",
              text: "Large Building/Structure Collapse",
              recResponse: 83,
            },
            {
              suffix: "M",
              text: "Landslide/Mudslide",
              recResponse: 83,
            },
            {
              suffix: "S",
              text: "Small Building/Structure Collapse",
              recResponse: 83,
            },
            {
              suffix: "T",
              text: "Trench (Collapse/Rescue)",
              recResponse: 83,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 83,
            },
            {
              suffix: "W",
              text: "Building/Structure Collapse into Water",
              recResponse: 84,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "54C00",
          text: "Override (Charlie)",
          recResponse: 85,
          subCodes: [
            {
              suffix: "C",
              text: "Confined Space",
              recResponse: 86,
            },
            {
              suffix: "H",
              text: "Sinkhole",
              recResponse: 86,
            },
            {
              suffix: "L",
              text: "Large Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "M",
              text: "Landslide/Mudslide",
              recResponse: 88,
            },
            {
              suffix: "S",
              text: "Small Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "T",
              text: "Trench (Collapse/Rescue)",
              recResponse: 88,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 83,
            },
            {
              suffix: "W",
              text: "Building/Structure Collapse into Water",
              recResponse: 89,
            },
          ],
        },
        {
          code: "54C01",
          text: "Entrapment/Trapped (Unconfirmed) w/ Hazardous Materials",
          recResponse: 85,
          subCodes: [
            {
              suffix: "C",
              text: "Confined Space",
              recResponse: 86,
            },
            {
              suffix: "H",
              text: "Sinkhole",
              recResponse: 86,
            },
            {
              suffix: "L",
              text: "Large Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "M",
              text: "Landslide/Mudslide",
              recResponse: 88,
            },
            {
              suffix: "S",
              text: "Small Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "T",
              text: "Trench (Collapse/Rescue)",
              recResponse: 88,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 83,
            },
            {
              suffix: "W",
              text: "Building/Structure Collapse into Water",
              recResponse: 89,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "54D00",
          text: "Override (Delta)",
          recResponse: 85,
          subCodes: [
            {
              suffix: "C",
              text: "Confined Space",
              recResponse: 86,
            },
            {
              suffix: "H",
              text: "Sinkhole",
              recResponse: 86,
            },
            {
              suffix: "L",
              text: "Large Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "M",
              text: "Landslide/Mudslide",
              recResponse: 88,
            },
            {
              suffix: "S",
              text: "Small Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "T",
              text: "Trench (Collapse/Rescue)",
              recResponse: 88,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 83,
            },
            {
              suffix: "W",
              text: "Building/Structure Collapse into Water",
              recResponse: 89,
            },
          ],
        },
        {
          code: "54D01",
          text: "Entrapment/Trapped (Confirmed)",
          recResponse: 85,
          subCodes: [
            {
              suffix: "C",
              text: "Confined Space",
              recResponse: 86,
            },
            {
              suffix: "H",
              text: "Sinkhole",
              recResponse: 86,
            },
            {
              suffix: "L",
              text: "Large Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "M",
              text: "Landslide/Mudslide",
              recResponse: 88,
            },
            {
              suffix: "S",
              text: "Small Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "T",
              text: "Trench (Collapse/Rescue)",
              recResponse: 88,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 83,
            },
            {
              suffix: "W",
              text: "Building/Structure Collapse into Water",
              recResponse: 89,
            },
          ],
        },
        {
          code: "54D02",
          text: "Entrapment/Trapped (Confirmed) w/ Hazardous Materials",
          recResponse: 85,
          subCodes: [
            {
              suffix: "C",
              text: "Confined Space",
              recResponse: 86,
            },
            {
              suffix: "H",
              text: "Sinkhole",
              recResponse: 86,
            },
            {
              suffix: "L",
              text: "Large Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "M",
              text: "Landslide/Mudslide",
              recResponse: 88,
            },
            {
              suffix: "S",
              text: "Small Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "T",
              text: "Trench (Collapse/Rescue)",
              recResponse: 88,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 83,
            },
            {
              suffix: "W",
              text: "Building/Structure Collapse into Water",
              recResponse: 89,
            },
          ],
        },
      ],
    },
  ],
};
