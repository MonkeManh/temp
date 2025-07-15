import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const STAB_SHOT_TRAUMA: IEMSComplaint = {
  protocol: 27,
  name: "Stab / Gunshot / Penetrating Trauma",
  shortName: "Stab/Shot/Trauma",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: true },
  ],
  defaultPriority: "A",
  defaultPlan: 152,
  defaultCode: "27B04",
  preSend: true,
  questions: [
    {
      text: <p className="text-blue-400">What type of incident is this?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Shooting",
          display: "Shooting incident",
          questionDisplay: "The incident involves a shooting",
          continue: true,
          updateSuffix: "G",
        },
        {
          answer: "Stabbing",
          display: "Stabbing incident",
          questionDisplay: "The incident involves a stabbing",
          continue: true,
          updateSuffix: "S",
        },
        {
          answer: "Penetrating trauma",
          display: "Penetrating trauma incident",
          questionDisplay:
            "The incident involves penetrating trauma (not stabbing or shooting)",
          continue: true,
          updateSuffix: "P",
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(Not obvious)</span>{" "}
          <b className="font-bold">When</b> did this{" "}
          <b className="font-bold">happen</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Happening now",
          display: "In progress",
          questionDisplay: "The incident is currently happening",
          continue: true,
          setSceneSecure: false,
        },
        {
          answer: "Less than 6 hours ago",
          display: "Happened now (<6 hrs)",
          questionDisplay: "The incident happened less than 6 hours ago",
          continue: true,
          setSceneSecure: false,
        },
        {
          answer: "More than 6 hours ago",
          display: "Happened earlier (>=6 hrs)",
          questionDisplay: "The incident happened more than 6 hours ago",
          continue: true,
          setSceneSecure: false,
        },
        {
          answer: "Unknown",
          display: "Unk when injury occurred",
          questionDisplay: "It is unknown when the incident happened",
          continue: true,
          setSceneSecure: false,
        },
      ],
    },

    {
      text: (
        <p>
          Do you think **pronoun** is <b className="font-bold">beyond</b> any{" "}
          <b className="font-bold">help</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (patient) => {
        return (
          patient.patientConsciousness === "no" &&
          (patient.patientBreathing === "no" ||
            patient.patientBreathing === "agonal/ineffective")
        );
      },
      preRenderLogic: "patient is in arrest on case entry",
      preRenderDependencies: ["patient"],
      answers: [
        {
          answer: "Yes",
          display: "Obvious death rptd",
          questionDisplay:
            "The caller thinks the patient is beyond help (obvious death)",
          updateCode: "27B05",
          overrideCode: true,
          overrideSend: true,
          end: true,
        },
        {
          answer: "No",
          display: "No obvious death rptd",
          questionDisplay:
            "The caller does not think the patient is beyond help",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if obvious death",
          questionDisplay:
            "It is unknown if the caller thinks the patient is beyond help",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-400">
          Is the <b className="font-bold">assailant</b> (attacker){" "}
          <b className="font-bold">still nearby</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Assailant gone",
          questionDisplay: "The assailant is no longer nearby",
          continue: true,
        },
        {
          answer: "Yes:",
          display: "Assailant still nearby: {input}",
          questionDisplay: "The assailant is still nearby",
          continue: true,
          input: true,
        },
        {
          answer: "No assailant",
          display: "No assailant involved",
          questionDisplay: "There is no assailant involved",
          continue: true,
        },
        {
          answer: "Intentional/self-inflicted",
          display: "Self-inflicted/intentional injury",
          questionDisplay: "The injury was self-inflicted or intentional",
          continue: true,
          dependency: (_patient, answers) => {
            const firstAnswer = answers[0]?.answer;
            if (firstAnswer === "Shooting") {
              return { subCode: "X" };
            } else {
              return { subCode: "Y" };
            }
          },
        },
        {
          answer: "Unknown",
          display: "Unk if assailant still nearby",
          questionDisplay: "It is unknown if the assailant is still nearby",
          continue: true,
        },
      ],
    },

    {
      text: <p>Is there any <b className="font-bold">SERIOUS</b> bleeding (spurting or pouring)?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No SERIOUS bleeding",
          questionDisplay: "There is no SERIOUS bleeding",
          continue: true,
        },
        {
          answer: "Yes",
          display: "SERIOUS bleeding",
          questionDisplay: "There is SERIOUS bleeding",
          updateCode: "27B03",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if SERIOUS bleeding",
          questionDisplay: "It is unknown if there is SERIOUS bleeding",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is the <b className="font-bold">object</b> (knife) <b className="font-bold">still impaled</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const firstAnswer = answers[0]?.answer;
        return firstAnswer === "Stabbing" || firstAnswer === "Penetrating trauma";
      },
      preRenderLogic: "the incident involves stabbing or penetrating trauma",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Object not currently impaled",
          questionDisplay: "The object is not currently impaled",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Object still impaled",
          questionDisplay: "The object is still impaled",
          updateSuffix: "I",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if object still impaled",
          questionDisplay: "It is unknown if the object is still impaled",
          continue: true,
        }
      ]
    },

    {
      text: (
        <p>
          Is **pronoun** <b className="font-bold">completely alert</b>{" "}
          <span className="text-red-400">(responding appropriately)</span>?
        </p>
      ),
      preRenderInstructions: (patient) => {
        return patient.patientConsciousness !== "no";
      },
      preRenderLogic: "patient is not unconscious on case entry",
      preRenderDependencies: ["patient"],
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
          updateCode: "27D03",
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
      text: <p>What <b className="font-bold">part</b> of the body was <b className="font-bold">injured</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Peripheral:",
          display: "Injs to extremities: {input}",
          questionDisplay: "The injury is to the extremities: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Central:",
          display: "Injs to central body: {input}",
          questionDisplay: "The injury is to the central body: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk what part of body injured",
          questionDisplay: "It is unknown what part of the body was injured",
          continue: true,
          updateCode: "27B04",
        }
      ]
    },

    {
      text: <p>Is there <b className="font-bold">more</b> than <b className="font-bold">one wound</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Single wound",
          questionDisplay: "There is a single wound",
          updateCode: "27B01",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const timeAnswer = answers.find((a) => a.question === "When did this happen?")?.answer;
            const locationAnswer = answers.find((a) => a.question === "What part of the body was injured?")?.answer;
            return timeAnswer === "More than 6 hours ago" && locationAnswer === "Central:";
          }
        },
        {
          answer: "No",
          display: "Single wound",
          questionDisplay: "There is a single wound",
          updateCode: "27B02",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const locationAnswer = answers.find((a) => a.question === "What part of the body was injured?")?.answer;
            return locationAnswer === "Peripheral:";
          }
        },
        {
          answer: "No",
          display: "Single wound",
          questionDisplay: "There is a single wound",
          updateCode: "27B04",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const timeAnswer = answers.find((a) => a.question === "When did this happen?")?.answer;
            const locationAnswer = answers.find((a) => a.question === "What part of the body was injured?")?.answer;
            return !(timeAnswer === "More than 6 hours ago" && locationAnswer === "Central:") && !(locationAnswer === "Peripheral:");
          },
        },
        {
          answer: "Yes",
          display: "Multiple wounds",
          questionDisplay: "There are multiple wounds",
          updateCode: "27A01",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const timeAnswer = answers.find((a) => a.question === "When did this happen?")?.answer;
            const locationAnswer = answers.find((a) => a.question === "What part of the body was injured?")?.answer;
            return timeAnswer === "More than 6 hours ago" && locationAnswer === "Peripheral:";
          }
        },
        {
          answer: "Yes",
          display: "Multiple wounds",
          questionDisplay: "There are multiple wounds",
          updateCode: "27D05",
          continue: true,
          send: true,
          preRenderInstructions: (_patient, answers) => {
            const timeAnswer = answers.find((a) => a.question === "When did this happen?")?.answer;
            const locationAnswer = answers.find((a) => a.question === "What part of the body was injured?")?.answer;
            return !(timeAnswer === "More than 6 hours ago" && locationAnswer === "Peripheral:");
          }
        },
        {
          answer: "Unknown",
          display: "Unk if mult wounds",
          questionDisplay: "It is unknown if there are multiple wounds",
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
          code: "27A01",
          text: "Non-Recent (>= 6hrs) Peripheral Wounds (w/o Pririty Symptoms)",
          recResponse: 153,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 152,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 153,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 153,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 154,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 152,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 154,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "27B00",
          text: "BLS Override (Bravo)",
          recResponse: 153,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 152,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 153,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 153,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 154,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 152,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 154,
            },
          ],
        },
        {
          code: "27B01",
          text: "Non-Recent (>= 6hrs) Single Central Wound",
          recResponse: 153,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 152,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 153,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 153,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 154,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 152,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 154,
            },
          ],
        },
        {
          code: "27B02",
          text: "Known Single Peripheral Wound",
          recResponse: 153,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 152,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 153,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 153,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 154,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 152,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 154,
            },
          ],
        },
        {
          code: "27B03",
          text: "Serious Hemorrhage",
          recResponse: 153,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 152,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 153,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 153,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 154,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 152,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 154,
            },
          ],
        },
        {
          code: "27B04",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 153,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 152,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 153,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 153,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 154,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 152,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 154,
            },
          ],
        },
        {
          code: "27B05",
          text: "Obvious Death",
          recResponse: 156,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 155,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 156,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 156,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 157,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 155,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 157,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "27D00",
          text: "ALS Override (Delta)",
          recResponse: 156,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 155,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 156,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 156,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 157,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 155,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 157,
            },
          ],
        },
        {
          code: "27D01",
          text: "Arrest",
          recResponse: 158,
          notBreathing: true,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 159,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 158,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 158,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 160,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 159,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 160,
            },
          ],
        },
        {
          code: "27D02",
          text: "Unconscious",
          recResponse: 162,
          notConscious: true,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 161,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 162,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 162,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 163,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 161,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 163,
            },
          ],
        },
        {
          code: "27D03",
          text: "Not Alert",
          recResponse: 162,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 161,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 162,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 162,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 163,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 161,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 163,
            },
          ],
        },
        {
          code: "27D04",
          text: "Central Wounds",
          recResponse: 156,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 155,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 156,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 156,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 157,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 155,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 157,
            },
          ],
        },
        {
          code: "27D05",
          text: "Mult Wounds",
          recResponse: 156,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 155,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 156,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 156,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 157,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 155,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 157,
            },
          ],
        },
        {
          code: "27D06",
          text: "Mult Victims",
          recResponse: 165,
          multPatient: true,
          subCodes: [
            {
              suffix: "G",
              text: "Gunshot",
              recResponse: 164,
            },
            {
              suffix: "I",
              text: "Impaled Currently",
              recResponse: 165,
            },
            {
              suffix: "P",
              text: "Penetrating Wound (Not Impaled Now)",
              recResponse: 165,
            },
            {
              suffix: "S",
              text: "Stab",
              recResponse: 166,
            },
            {
              suffix: "X",
              text: "Self-Inflicted GSW (Intentional)",
              recResponse: 164,
            },
            {
              suffix: "Y",
              text: "Self-Inflicted Knife/Stab Wound (Intentional)",
              recResponse: 166,
            },
          ],
        },
      ],
    },
  ],
};
