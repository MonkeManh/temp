import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const INACCESSIBLE_ENTRAPMENT: IEMSComplaint = {
  protocol: 22,
  name: "Inaccessible Incident / Other Entrapments (Non-Traffic)",
  shortName: "Inaccessible Incident/Entrap",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 122,
  defaultCode: "22B03",
  questions: [
    {
      text: <p className="text-red-400">Does this incident involve the <b className="font-bold">release</b> of any <b className="font-bold">hazardous materials</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No chems/hazmat involved",
          questionDisplay: "There are no hazardous materials involved in this incident",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Chems/hazmat involved",
          questionDisplay: "There are hazardous materials involved in this incident",
          gotoProtocol: 8
        },
        {
          answer: "Unknown",
          display: "Unk if chems/hazmat involved",
          questionDisplay: "Unknown if there are hazardous materials involved in this incident",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Is **pronoun** <b className="font-bold">still trapped</b>?</p>,
      firstPersonText: <p className="text-red-400">Are you <b className="font-bold">still trapped</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Trapped now",
          questionDisplay: "**pronoun** is still trapped",
          continue: true,
        },
        {
          answer: "No",
          display: "Not trapped now",
          questionDisplay: "**pronoun** is no longer trapped",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if still trapped",
          questionDisplay: "Unknown if **pronoun** is still trapped",
          continue: true,
        }
      ]
    },

    {
      text: <p>Are there any obvious <b className="font-bold">injuries</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const isNotTrapped = answers.find((a) => a.question === "Is **pronoun** still trapped?")?.answer === "No";
        return isNotTrapped;
      },
      preRenderLogic: "pt is no longer trapped",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No obvious injs",
          questionDisplay: "There are no obvious injuries",
          updateCode: "22A01",
          continue: true,
          send: true
        },
        {
          answer: "Yes",
          display: "Obvious injs",
          questionDisplay: "There are obvious injuries",
          gotoProtocol: 30
        },
        {
          answer: "Unknown",
          display: "Unk if obvious injs",
          questionDisplay: "Unknown if there are obvious injuries",
          updateCode: "22B01",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">part</b> of the body is <b className="font-bold">trapped</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const isStillTrapped = answers.find((a) => a.question === "Is **pronoun** still trapped?")?.answer === "Yes";
        return isStillTrapped;
      },
      preRenderLogic: "pt is still trapped",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Extremity/Peripheral:",
          display: "Extremity/peripheral entrapment only: {input}",
          questionDisplay: "**pronoun** has extremity/peripheral entrapment only",
          updateCode: "22B02",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Full body",
          display: "Full body entrapment",
          questionDisplay: "**pronoun** has full body entrapment",
          updateCode: "22D01",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Other entrapment: {input}",
          questionDisplay: "**pronoun** has other entrapment",
          updateCode: "22B03",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk what body part is trapped",
          questionDisplay: "Unknown what part of the body is trapped",
          updateCode: "22B03",
          continue: true,
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">caused</b> the <b className="font-bold">entrapment</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const isStillTrapped = answers.find((a) => a.question === "Is **pronoun** still trapped?")?.answer === "Yes";
        return isStillTrapped;
      },
      preRenderLogic: "pt is still trapped",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Mechanical",
          display: "Mechanical entrapment",
          questionDisplay: "**pronoun** has mechanical entrapment",
          updateCode: "22D01",
          continue: true,
          send: true
        },
        {
          answer: "Machinery:",
          display: "Trapped by machinery: {input}",
          questionDisplay: "**pronoun** is trapped by machinery: {input}",
          updateCode: "22D01",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Object:",
          display: "Trapped by object: {input}",
          questionDisplay: "**pronoun** is trapped by object: {input}",
          updateCode: "22D01",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Trench Collapse",
          display: "Trapped from trench collapse",
          questionDisplay: "**pronoun** is trapped from a trench collapse",
          updateCode: "22D02",
          continue: true,
          send: true
        },
        {
          answer: "Structure Collapse",
          display: "Trapped from structure collapse",
          questionDisplay: "**pronoun** is trapped from a structure collapse",
          updateCode: "22D03",
          continue: true,
          send: true
        },
        {
          answer: "Confined Space",
          display: "Trapped in confined space",
          questionDisplay: "**pronoun** is trapped in a confined space",
          updateCode: "22D04",
          continue: true,
          send: true
        },
        {
          answer: "Inaccessible Terrain",
          display: "Trapped in inaccessible terrain",
          questionDisplay: "**pronoun** is trapped in inaccessible terrain",
          updateCode: "22D05",
          continue: true,
          send: true
        },
        {
          answer: "Mudslide/Avalanche",
          display: "Trapped from mudslide/avalanche",
          questionDisplay: "**pronoun** is trapped from a mudslide/avalanche",
          updateCode: "22D06",
          continue: true,
          send: true
        },
        {
          answer: "Other:",
          display: "Other cause of entrapment: {input}",
          questionDisplay: "**pronoun** has other cause of entrapment: {input}",
          updateCode: "22B03",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk cause of entrapment",
          questionDisplay: "Unknown what caused the entrapment",
          updateCode: "22B03",
          continue: true,
        }
      ]
    },

    {
      text: <p>Where <b className="font-bold">exactly</b> is **pronoun**?</p>,
      firstPersonText: <p>Where are you <b className="font-bold">exactly</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Above ground",
          display: "Pt is above ground",
          questionDisplay: "**pronoun** is above ground",
          continue: true,
        },
        {
          answer: "Below ground",
          display: "Pt is below ground",
          questionDisplay: "**pronoun** is below ground",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if above or below ground",
          questionDisplay: "Unknown if **pronoun** is above or below ground",
          dependency: (patient) => {
            if(patient.numPatients > 1) {
              return { subCode: "M" }
            }
          },
          continue: true,
        }
      ]
    },

    {
      text: <p>What is their approximate <b className="font-bold">distance</b> from the <b className="font-bold">ground</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].answer;
        return lastAnswer === "Above ground" || lastAnswer === "Below ground";
      },
      preRenderLogic: "pt is above or below ground",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Less than 6 feet (2 meters)",
          display: "<6ft/2m from ground",
          questionDisplay: "**pronoun** is less than 6 feet (2 meters) from the ground",
          continue: true,
          dependency: (patient) => {
            if(patient.numPatients > 1) {
              return { subCode: "M" }
            }
          }
        },
        {
          answer: "More than 6 feet (2 meters)",
          display: ">6ft/2m from ground",
          questionDisplay: "**pronoun** is more than 6 feet (2 meters) from the ground",
          continue: true,
          dependency: (patient, answers) => {
            const lastAnswer = answers[answers.length - 1].answer;
            if(lastAnswer === "Above ground") {
              if(patient.numPatients > 1) {
                return { subCode: "M" }
              } else {
                return { subCode: "A" }
              }
            } else if(lastAnswer === "Below ground") {
              if(patient.numPatients > 1) {
                return { subCode: "M" }
              } else {
                return { subCode: "B" }
              }
            }
          }
        },
        {
          answer: "Unknown",
          display: "Unk distance from ground",
          questionDisplay: "Unknown how far **pronoun** is from the ground",
          continue: true,
          dependency: (patient) => {
            if(patient.numPatients > 1) {
              return { subCode: "M" }
            }
          }
        }
      ]
    },

    {
      text: <p>Where was **pronoun** <b className="font-bold">last seen</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastLocation = answers.find((a) => a.question === "Where exactly is **pronoun**?")?.answer;
        return lastLocation === "Unknown"
      },
      preRenderLogic: "unknown patient location",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Location:",
          display: "Last seen location: {input}",
          questionDisplay: "**pronoun** was last seen at {input}",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk where pt was last seen",
          questionDisplay: "Unknown where **pronoun** was last seen",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Is the immediate area <b className="font-bold">dangerous</b> or <b className="font-bold">hazardous</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Area not dangerous/hazardous",
          questionDisplay: "The immediate area is not dangerous or hazardous",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Area is dangerous/hazardous",
          questionDisplay: "The immediate area is dangerous or hazardous",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if area is dangerous/hazardous",
          questionDisplay: "Unknown if the immediate area is dangerous or hazardous",
          continue: true,
        }
      ]
    },

    {
      text: <p>Will we have any <b className="font-bold">problems</b> easily <b className="font-bold">reaching</b> them?</p>,
      firstPersonText: <p>Will you have any <b className="font-bold">problems</b> easily <b className="font-bold">reaching</b> you?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No special concerns",
          questionDisplay: "There are no special concerns with reaching **pronoun**",
          continue: true,
        },
        {
          answer: "Yes:",
          display: "Accessibility concerns: {input}",
          questionDisplay: "There are accessibility concerns: {input}",
          updateCode: "22D05",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk if accessibility concerns",
          questionDisplay: "Unknown if there are accessibility concerns with reaching **pronoun**",
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
          code: "22A01",
          text: "No Longer Trapped (No Injs)",
          recResponse: 122,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 122,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 122,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 122,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 122,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 122,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "22B00",
          text: "BLS Override (Bravo)",
          recResponse: 123,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 123,
            },
          ],
        },
        {
          code: "22B01",
          text: "No Longer Trapped (Unkn Injs)",
          recResponse: 124,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 124,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 124,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 124,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 124,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 124,
            },
          ],
        },
        {
          code: "22B02",
          text: "Peripheral Entrapment Only",
          recResponse: 123,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 123,
            },
          ],
        },
        {
          code: "22B03",
          text: "Unkn Status (Investigation) / Other Codes Not Applicable",
          recResponse: 123,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 123,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "22D00",
          text: "ALS Override (Delta)",
          recResponse: 125,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 125,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 125,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 125,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 125,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 125,
            },
          ],
        },
        {
          code: "22D01",
          text: "Mechanical/Machinery/Object Entrapment",
          recResponse: 123,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 123,
            },
          ],
        },
        {
          code: "22D02",
          text: "Trench Collapse",
          recResponse: 126,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 126,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 126,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 126,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 126,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 126,
            },
          ],
        },
        {
          code: "22D03",
          text: "Structure Collapse",
          recResponse: 127,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 127,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 127,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 127,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 127,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 127,
            },
          ],
        },
        {
          code: "22D04",
          text: "Confined Space Entrapment",
          recResponse: 128,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 128,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 128,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 128,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 128,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 128,
            },
          ],
        },
        {
          code: "22D05",
          text: "Inaccessible Terrain Situation",
          recResponse: 125,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 125,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 125,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 125,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 125,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 125,
            },
          ],
        },
        {
          code: "22D06",
          text: "Mudslide/Avalanche",
          recResponse: 125,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 125,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 125,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 125,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 125,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 125,
            },
          ],
        },
      ],
    },
  ],
};
