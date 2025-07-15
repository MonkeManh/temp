import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const ELECTROCUTION: IEMSComplaint = {
  protocol: 15,
  name: "Electrocution / Lightning",
  shortName: "Electrocution/Lightning",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: 0 },
  ],
  defaultPriority: "C",
  defaultPlan: 71,
  defaultCode: "15D09",
  preSend: true,
  questions: [
    {
      text: <p className="text-blue-400">What type of incident is this?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Electrocution",
          display: "Incident involves electrocution",
          questionDisplay: "**pronoun** was electrocuted",
          updateSuffix: "E",
          continue: true,
        },
        {
          answer: "Lightning",
          display: "Incident involves lightning strike",
          questionDisplay: "**pronoun** was struck by lightning",
          updateSuffix: "L",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk type of incident",
          questionDisplay:
            "**pronoun** was involved in an unk electrocution/lightning incident",
          continue: true,
        },
      ],
    },

    {
      text: <p>Is **pronoun** still <b className="font-bold">in contact</b> with the <b className="font-bold">power source</b></p>,
      firstPersonText: (
        <p>
          Are you still <b className="font-bold">connected</b> to the{" "}
          <b className="font-bold">power source</b>
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const firstAnswer = answers[0].answer;
        return firstAnswer === "Electrocution";
      },
      preRenderLogic: "patient was electrocuted",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Disconnected from power source",
          questionDisplay: "**pronoun** is no longer in contact with the power source",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Still in contact with power source",
          questionDisplay: "**pronoun** is still in contact with the power source",
          updateCode: "15D03",
          continue: true,
          send: true
        },
        {
          answer: "Unkown",
          display: "Unk if disconnected from power source",
          questionDisplay: "It is unk if **pronoun** is still in contact with the power source",
          continue: true,
        }
      ],
    },

    {
      text: <p>Has the <b className="font-bold">power</b> been <b className="font-bold">turned off</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const firstAnswer = answers[0].answer;
        return firstAnswer === "Electrocution";
      },
      preRenderLogic: "patient was electrocuted",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Power not turned off",
          questionDisplay: "The power has not been turned off",
          updateCode: "15D04",
          continue: true,
          send: true
        },
        {
          answer: "Yes",
          display: "Power turned off",
          questionDisplay: "The power has been turned off",
          continue: true,
        },
        {
          answer: "Unkown",
          display: "Unk if power turned off",
          questionDisplay: "It is unk if the power has been turned off",
          continue: true,
        }
      ]
    },

    {
      text: <p>Did **pronoun** <b className="font-bold">fall</b> after the incident?</p>,
      firstPersonText: <p>Did you <b className="font-bold">fall</b> after the incident?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Did not fall",
          questionDisplay: "**pronoun** did not fall after the incident",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Fell after incident",
          questionDisplay: "**pronoun** fell after the incident",
          continue: true,
        },
        {
          answer: "Unkown",
          display: "Unk if fell after incident",
          questionDisplay: "It is unk if **pronoun** fell after the incident",
          continue: true,
        }
      ]
    },

    {
      text: <p>How <b className="font-bold">far</b> did **pronoun** fall?</p>,
      firstPersonText: <p>How <b className="font-bold">far</b> did you fall?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].answer;
        return lastAnswer === "Yes";
      },
      preRenderLogic: "patient fell after incident",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Ground level",
          display: "Fell at ground level",
          questionDisplay: "**pronoun** fell at ground level",
          continue: true,
        },
        {
          answer: "< 10ft/3m (1 story)",
          display: "Fell < 10ft/3m (1 story)",
          questionDisplay: "**pronoun** fell less than 10ft/3m (1 story)",  
          continue: true,
        },
        {
          answer: "10-29ft (3-9m)",
          display: "Fell 10-29ft (3-9m)",
          questionDisplay: "**pronoun** fell 10-29ft (3-9m)",  
          continue: true,
          updateCode: "15D06",
          send: true
        },
        {
          answer: "EXTREME FALL >=30ft/10m (>=3 stories)",
          display: "Fell >=30ft/10m (>=3 stories)",
          questionDisplay: "**pronoun** fell >=30ft/10m (>=3 stories)",  
          updateCode: "15D05",
          continue: true,
          send: true
        },
        {
          answer: "Unkown",
          display: "Unk how far fell",
          questionDisplay: "It is unk how far **pronoun** fell",
          continue: true,
        }
      ]
    },

    {
      text: (
        <p>
          Is **pronoun** <b>completely alert</b>{" "}
          <span className="text-red-400">(responding appropriately)</span>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        return patient.patientConsciousness !== "no"
      },
      preRenderLogic: "patient is not unconscious",
      preRenderDependencies: ["patient"],
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
          updateCode: "15D07",
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
      ]
    },

    {
      text: <p>Is **pronoun** breathing <b className="font-bold">normally</b>?</p>,
      firstPersonText: (
        <p>Are you having any <b className="font-bold">difficulty breathing</b></p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        return patient.patientBreathing !== "no" && patient.patientBreathing !== "agonal/ineffective"
      },
      preRenderLogic: "patient is not apneic or agonal/ineffective breathing",
      preRenderDependencies: ["patient"],
      answers: [
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing normally",
          continue: true,
          preRenderInstructions: (patient, answers) => {
            const lastAnswer = answers[answers.length - 1].answer;
            return patient.patientProximity !== "first" && lastAnswer !== "Yes";
          }
        },
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing normally",
          updateCode: "15C01",
          continue: true,
          preRenderInstructions: (patient, answers) => {
            const lastAnswer = answers[answers.length - 1].answer;
            return patient.patientProximity !== "first" && lastAnswer === "Yes";
          }
        },
        {
          answer: "No",
          display: "NOT breathing nlly",
          questionDisplay: "**pronoun** is NOT breathing normally",
          updateCode: "15D08",
          continue: true,
          send: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity !== "first"
          }
        },
        {
          answer: "No",
          display: "No diff breathing",
          questionDisplay: "**pronoun** is having no difficulty breathing",
          continue: true,
          preRenderInstructions: (patient, answers) => {
            const lastAnswer = answers[answers.length - 1].answer;
            return patient.patientProximity === "first" && lastAnswer !== "Yes";
          }
        },
        {
          answer: "No",
          display: "No diff breathing",
          questionDisplay: "**pronoun** is having no difficulty breathing",
          updateCode: "15C01",
          continue: true,
          preRenderInstructions: (patient, answers) => {
            const lastAnswer = answers[answers.length - 1].answer;
            return patient.patientProximity === "first" && lastAnswer === "Yes";
          }
        },
        {
          answer: "Yes",
          display: "Diff breathing",
          questionDisplay: "**pronoun** is having difficulty breathing",
          updateCode: "15D08",
          continue: true,
          send: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity === "first"
          }
        },
        {
          answer: "Not at all",
          display: "Not breathing at all",
          questionDisplay: "**pronoun** is not breathing at all",
          updateCode: "15E01",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if breathing nlly",
          questionDisplay: "It is unk if **pronoun** is breathing normally",
          continue: true,
        }
      ]
    },

    {
      text: <p>Are there any other <b className="font-bold text-red-400">hazards</b> present?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No other hazards",
          questionDisplay: "There are no other hazards present",
          continue: true,
        },
        {
          answer: "Yes:",
          display: "Other hazards present: {input}",
          questionDisplay: "There are other hazards present: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk if other hazards present",
          questionDisplay: "It is unk if there are other hazards present",
          continue: true,
        }
      ]
    }
  ],
  determinants: [
    {
      priority: "C",
      codes: [
        {
          code: "15C01",
          text: "Alert & Breathing Normally",
          recResponse: 71,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 71,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 71,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "15D00",
          text: "ALS Override (Delta)",
          recResponse: 72,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 72,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 72,
            },
          ],
        },
        {
          code: "15D01",
          text: "Mult Victims",
          recResponse: 73,
          multPatient: true,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 73,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 73,
            },
          ],
        },
        {
          code: "15D02",
          text: "Unconscious",
          recResponse: 72,
          notConscious: true,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 72,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 72,
            },
          ],
        },
        {
          code: "15D03",
          text: "Not Disconnected from Power",
          recResponse: 71,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 71,
            },
          ],
        },
        {
          code: "15D04",
          text: "Powert Not Off or Hazard Present",
          recResponse: 71,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 71,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 71,
            },
          ],
        },
        {
          code: "15D05",
          text: "Extreme Fall (>=30ft/10m)",
          recResponse: 74,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 74,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 74,
            },
          ],
        },
        {
          code: "15D06",
          text: "LONG FALL",
          recResponse: 74,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 74,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 74,
            },
          ],
        },
        {
          code: "15D07",
          text: "Not Alert",
          recResponse: 71,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 71,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 71,
            },
          ],
        },
        {
          code: "15D08",
          text: "Abnormal Breathing",
          recResponse: 71,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 71,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 71,
            },
          ],
        },
        {
          code: "15D09",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 71,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 71,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 71,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "15E00",
          text: "ALS Override (Echo)",
          recResponse: 75,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 75,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 75,
            },
          ],
        },
        {
          code: "15E01",
          text: "Not Breathing/Ineffective Breathing",
          notBreathing: true,
          recResponse: 75,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 75,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 75,
            },
          ],
        },
      ],
    },
  ],
};
