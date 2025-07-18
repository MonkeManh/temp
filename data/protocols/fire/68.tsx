import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const SMOKE_INVESTIGATION: IFireComplaint = {
  protocol: 68,
  name: "Smoke Investigation (Outside)",
  shortName: "Smoke Investigation (Outdoor)",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 259,
  defaultCode: "68A03",
  questions: [
    {
      text: <p><span className="text-blue-400">(Appropriate)</span> Can you see <b className="font-bold">smoke</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No smoke rptd",
          questionDisplay: "No smoke reported.",
          continue: true
        },
        {
          answer: "Yes",
          display: "Smoke rptd",
          questionDisplay: "Smoke reported.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if smoke",
          questionDisplay: "Unknown if smoke.",
          updateCode: "68A03",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is there an <b className="font-bold">odor</b> of smoke?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const smokeAnswer = answers?.find((a) => a.question === "(Appropriate) Can you see smoke?")?.answer;
        return smokeAnswer !== "Yes"
      },
      preRenderLogic: "there is no smoke visible",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No odor rptd",
          questionDisplay: "No smoke odor reported.",
          updateCode: "68A03",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Odor rptd",
          questionDisplay: "Smoke odor reported.",
          updateCode: "68A02",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if odor present",
          questionDisplay: "Unknown if smoke odor present.",
          updateCode: "68A03",
          continue: true,
        }
      ]
    },

    {
      text: <p><b className="font-bold">Where</b> is the <b className="font-bold">odor</b> coming <b className="font-bold">from</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const odorAnswer = answers?.find((a) => a.question === "Is there an odor of smoke?")?.answer;
        return odorAnswer === "Yes"
      },
      preRenderLogic: "there is an odor of smoke",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Outside:",
          display: "Odor frm outside: {input}",
          questionDisplay: "Smoke odor coming from outside: {input}.",
          continue: true,
          input: true
        },
        {
          answer: "Structure",
          display: "Odor frm structure",
          questionDisplay: "Smoke odor coming from structure.",
          gotoProtocol: 69
        },
        {
          answer: "Unknown",
          display: "Unk where odor frm",
          questionDisplay: "Unknown where smoke odor is coming from.",
          continue: true,
        }
      ]
    },

    {
      text: <p><b className="font-bold">Where</b> is the <b className="font-bold">smoke</b> coming <b className="font-bold">from</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const smokeAnswer = answers?.find((a) => a.question === "(Appropriate) Can you see smoke?")?.answer;
        return smokeAnswer === "Yes"
      },
      preRenderLogic: "there is smoke visible",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Outside:",
          display: "Smoke frm outside: {input}",
          questionDisplay: "Smoke coming from outside: {input}.",
          continue: true,
          input: true
        },
        {
          answer: "Brush/Grass/Wildland",
          display: "Smoke frm brush/grass/wildland",
          questionDisplay: "Smoke coming from brush/grass/wildland.",
          gotoProtocol: 82
        },
        {
          answer: "Structure",
          display: "Smoke frm structure",
          questionDisplay: "Smoke coming from structure.",
          gotoProtocol: 69
        },
        {
          answer: "Trash/Other",
          display: "Smoke frm trash/other",
          questionDisplay: "Smoke coming from trash/other.",
          gotoProtocol: 67
        },
        {
          answer: "Unknown",
          display: "Unk where smoke frm",
          questionDisplay: "Unknown where smoke is coming from.",
          updateCode: "68A03",
          continue: true,
        }
      ]
    },

    {
      text: <p>Are there any <b className="font-bold text-red-400">flames</b> visible?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const smokeAnswer = answers?.find((a) => a.question === "(Appropriate) Can you see smoke?")?.answer;
        const smokeLocationAnswer = answers?.find((a) => a.question === "Where is the smoke coming from?")?.answer;
        return smokeAnswer === "Yes" && smokeLocationAnswer === "Outside:";
      },
      preRenderLogic: "there is smoke visible coming from outside",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No flames rptd",
          questionDisplay: "No flames reported.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Flames rptd",
          questionDisplay: "Flames reported.",
          gotoProtocol: 67
        },
        {
          answer: "Unknown",
          display: "Unk if flames",
          questionDisplay: "Unknown if flames.",
          continue: true,
        }
      ]
    },

    {
      text: <p>Are <b className="font-bold">you</b> able to <b className="font-bold">see through</b> the smoke?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const smokeAnswer = answers?.find((a) => a.question === "(Appropriate) Can you see smoke?")?.answer;
        return smokeAnswer === "Yes"
      },
      preRenderLogic: "there is smoke visible",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Light smoke rptd",
          questionDisplay: "Light smoke reported.",
          updateCode: "68A01",
          continue: true,
        },
        {
          answer: "No",
          display: "Heavy smoke rptd",
          questionDisplay: "Heavy smoke reported.",
          updateCode: "68C01",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if light or heavy",
          questionDisplay: "Unknown if light or heavy smoke.",
          updateCode: "68A03",
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
          code: "68A01",
          text: "Light Smoke",
          recResponse: 259,
        },
        {
          code: "68A02",
          text: "Odor of Smoke",
          recResponse: 259,
        },
        {
          code: "68A03",
          text: "Unkn Situation (Investigation)",
          recResponse: 259,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "68C00",
          text: "Override (Charlie)",
          recResponse: 260,
        },
        {
          code: "68C01",
          text: "Heavy Smoke",
          recResponse: 260,
        },
      ],
    },
  ],
};
