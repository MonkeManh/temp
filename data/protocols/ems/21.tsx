import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const HEMORRHAGE_LACERATION: IEMSComplaint = {
  protocol: 21,
  name: "Hemorrhage / Laceration",
  shortName: "Hemorrhage/Laceration",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 107,
  defaultCode: "21A02",
  preSend: true,
  questions: [
    {
      text: (
        <p>
          <b className="font-bold">Where</b> is **pronoun**{" "}
          <b className="font-bold">bleeding</b> from?
        </p>
      ),
      firstPersonText: (
        <p>
          <b className="font-bold">Where</b> are you{" "}
          <b className="font-bold">bleeding</b> from?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "NOT DANGEROUS hemorrhage",
          display: "NOT DANGEROUS hemorrhage",
          questionDisplay: "**pronoun** has NOT DANGEROUS hemorrhage",
          continue: true,
        },
        {
          answer: "POSSIBLY DANGEROUS hemorrhage",
          display: "POSSIBLY DANGEROUS hemorrhage",
          questionDisplay: "**pronoun** has POSSIBLY DANGEROUS hemorrhage",
          continue: true,
        },
        {
          answer: "DANGEROUS hemorrhage",
          display: "DANGEROUS hemorrhage",
          questionDisplay: "**pronoun** has DANGEROUS hemorrhage",
          continue: true,
        },
        {
          answer: "Amputation",
          display: "NOT DANG: amputation",
          questionDisplay: "**pronoun** is bleeding from an amputation",
          gotoProtocol: 30,
        },
        {
          answer: "Dialysis av fistula",
          display: "NOT DANG: dialysis AV fistula",
          questionDisplay: "**pronoun** is bleeding from a dialysis AV fistula",
          updateCode: "21C02",
          continue: true,
          send: true,
        },
        {
          answer: "TUBES",
          display: "Bleeding through TUBES",
          questionDisplay: "**pronoun** is bleeding through TUBES",
          updateCode: "21C01",
          continue: true,
          send: true,
        },
        {
          answer: "Varicose veins",
          display: "NOT DANG: varicose veins",
          questionDisplay: "**pronoun** is bleeding from varicose veins",
          updateCode: "21C03",
          continue: true,
          send: true,
        },
        {
          answer: "Vaginal/Rectal/Urinary",
          display: "NOT DANG: vaginal/rectal/urinary",
          questionDisplay:
            "**pronoun** is bleeding from vaginal/rectal/urinary",
          continue: true,
        },
        {
          answer: "Other:",
          display: "NOT DANG: {input}",
          questionDisplay: "**pronoun** is bleeding from {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unknown where bleeding from",
          questionDisplay: "Unknown where **pronoun** is bleeding from",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">NOT DANGEROUS</b> area is the{" "}
          <b className="font-bold">bleeding</b> coming from?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const bleedingAnswer = answers.find(
          (a) => a.question === "Where is **pronoun** bleeding from?"
        )?.answer;
        return bleedingAnswer === "NOT DANGEROUS hemorrhage";
      },
      preRenderLogic: "bleeding from NOT DANGEROUS body area",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Ankle",
          display: "NOT DANG: ankle",
          questionDisplay: "**pronoun** is bleeding from the ankle",
          updateCode: "21A01",
          continue: true,
        },
        {
          answer: "Back",
          display: "NOT DANG: back",
          questionDisplay: "**pronoun** is bleeding from the back",
          updateCode: "21A01",
          continue: true,
        },
        {
          answer: "Buttock",
          display: "NOT DANG: buttock",
          questionDisplay: "**pronoun** is bleeding from the buttock",
          updateCode: "21A01",
          continue: true,
        },
        {
          answer: "Couging up (MINOR)",
          display: "Coughing up",
          questionDisplay: "**pronoun** is coughing up",
          updateCode: "21A01",
          continue: true,
        },
        {
          answer: "Finger",
          display: "NOT DANG: finger",
          questionDisplay: "**pronoun** is bleeding from the finger",
          updateCode: "21A01",
          continue: true,
        },
        {
          answer: "Foot",
          display: "NOT DANG: foot",
          questionDisplay: "**pronoun** is bleeding from the foot",
          updateCode: "21A01",
          continue: true,
        },
        {
          answer: "Forearm",
          display: "NOT DANG: forearm",
          questionDisplay: "**pronoun** is bleeding from the forearm",
          updateCode: "21A01",
          continue: true,
        },
        {
          answer: "Hand",
          display: "NOT DANG: hand",
          questionDisplay: "**pronoun** is bleeding from the hand",
          updateCode: "21A01",
          continue: true,
        },
        {
          answer: "Leg, lower",
          display: "NOT DANG: lower leg",
          questionDisplay: "**pronoun** is bleeding from the lower leg",
          updateCode: "21A01",
          continue: true,
        },
        {
          answer: "Mouth (not vomiting/coughing)",
          display: "NOT DANG: mouth",
          questionDisplay:
            "**pronoun** is bleeding from the mouth (not vomiting/coughing)",
          continue: true,
        },
        {
          answer: "Nose",
          display: "NOT DANG: nose",
          questionDisplay: "**pronoun** is bleeding from the nose",
          updateCode: "21A01",
          continue: true,
        },
        {
          answer: "Penis (external)",
          display: "NOT DANG: penis",
          questionDisplay: "**pronoun** is bleeding from the penis (external)",
          updateCode: "21A01",
          continue: true,
        },
        {
          answer: "Rectal (MINOR)",
          display: "NOT DANG: rectum",
          questionDisplay: "**pronoun** is bleeding from the rectal (MINOR)",
          continue: true,
        },
        {
          answer: "Scalp",
          display: "NOT DANG: scalp",
          questionDisplay: "**pronoun** is bleeding from the scalp",
          updateCode: "21A01",
          continue: true,
        },
        {
          answer: "Toe",
          display: "NOT DANG: toe",
          questionDisplay: "**pronoun** is bleeding from the toe",
          updateCode: "21A01",
          continue: true,
        },
        {
          answer: "Urinating/Catheter (non-traumatic)",
          display: "Bleeding when urinating/catheter",
          questionDisplay: "**pronoun** is urinating/catheter (non-traumatic)",
          continue: true,
        },
        {
          answer: "Wrist",
          display: "NOT DANG: wrist",
          questionDisplay: "**pronoun** is bleeding from the wrist",
          updateCode: "21A01",
          continue: true,
        },
        {
          answer: "None of these",
          display: "No NOT DANG hemorrhages ID'd",
          questionDisplay: "**pronoun** has no NOT DANG body area identified",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">POSSIBLY DANGEROUS</b> area is the{" "}
          <b className="font-bold">bleeding</b> coming from?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const bleedingAnswer = answers.find(
          (a) => a.question === "Where is **pronoun** bleeding from?"
        )?.answer;
        return bleedingAnswer === "POSSIBLY DANGEROUS hemorrhage" || answers[answers.length - 1]?.answer === "None of these";
      },
      preRenderLogic: "bleeding from POSSIBLY DANGEROUS body area or no NOT DANG body areas id'd",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Abdomen",
          display: "POSSIBLY DANG: abdomen",
          questionDisplay: "**pronoun** is bleeding from the abdomen",
          updateCode: "21B01",
          continue: true,
        },
        {
          answer: "Arm, upper",
          display: "POSSIBLY DANG: upper arm",
          questionDisplay: "**pronoun** is bleeding from the upper arm",
          updateCode: "21B01",
          continue: true,
        },
        {
          answer: "Chest",
          display: "POSSIBLY DANG: chest",
          questionDisplay: "**pronoun** is bleeding from the chest",
          updateCode: "21B01",
          continue: true,
        },
        {
          answer: "Face",
          display: "POSSIBLY DANG: face",
          questionDisplay: "**pronoun** is bleeding from the face",
          updateCode: "21B01",
          continue: true,
        },
        {
          answer: "Leg, upper",
          display: "POSSIBLY DANG: upper leg",
          questionDisplay: "**pronoun** is bleeding from the upper leg",
          updateCode: "21B01",
          continue: true,
        },
        {
          answer: "Unknown location",
          display: "Unk POSSIBLY DANG body area",
          questionDisplay: "Unknown POSSIBLY DANG body area",
          updateCode: "21B01",
          continue: true,
        },
        {
          answer: "Urinating (traumatic)",
          display: "Bleeding while urinating",
          questionDisplay: "**pronoun** is urinating",
          continue: true,
        },
        {
          answer: "Vaginal",
          display: "POSSIBLY DANG: vagina",
          questionDisplay: "**pronoun** is bleeding from the vagina",
          continue: true,
        },
        {
          answer: "Vomiting (MINOR)",
          display: "Vomiting",
          questionDisplay: "**pronoun** is vomiting (MINOR)",
          continue: true,
        },
        {
          answer: "None of these",
          display: "No POSSIBLY DANG hemorrhages ID'd",
          questionDisplay: "**pronoun** has no POSSIBLY DANG body area identified",
          continue: true,
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">DANGEROUS</b> area is the <b className="font-bold">bleeding</b> coming from?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Armpit",
          display: "DANGEROUS: armpit",
          questionDisplay: "**pronoun** is bleeding from the armpit",
          updateCode: "21D04",
          continue: true,
          send: true,
        },
        {
          answer: "Coughing up (SERIOUS)",
          display: "Coughing up blood",
          questionDisplay: "**pronoun** is coughing up blood",
          continue: true,
        },
        {
          answer: "Groin",
          display: "DANGEROUS: groin",
          questionDisplay: "**pronoun** is bleeding from the groin",
          updateCode: "21D04",
          continue: true,
          send: true,
        },
        {
          answer: "Neck",
          display: "DANGEROUS: neck",
          questionDisplay: "**pronoun** is bleeding from the neck",
          updateCode: "21D04",
          continue: true,
          send: true,
        },
        {
          answer: "Postoperative oral-pharyngeal",
          display: "Postoperative oral-pharyngeal bleeding",
          questionDisplay: "**pronoun** has postoperative oral-pharyngeal bleeding",
          updateCode: "21D04",
          continue: true,
          send: true,
        },
        {
          answer: "Rectal (SERIOUS)",
          display: "Rectal bleeding",
          questionDisplay: "**pronoun** has rectal bleeding (SERIOUS)",
          continue: true,
        },
        {
          answer: "Vomiting (SERIOUS)",
          display: "Vomiting blood",
          questionDisplay: "**pronoun** is vomiting blood (SERIOUS)",
          continue: true,
        },
        {
          answer: "None of these",
          display: "No DANG hemorrhages ID'd",
          questionDisplay: "**pronoun** has no DANG body area identified",
          updateCode: "21B01",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is she <b className="font-bold">pregnant</b> now?</p>,
      firstPersonText: <p>Are you <b className="font-bold">pregnant</b> now?</p>,
      questionType: "select",
      preRenderInstructions: (patient) => {
        return patient.patientGender === "female" && patient.ageUnit === "year" && patient.patientAge >= 12 && patient.patientAge <= 50;
      },
      preRenderLogic: "patient is female and between 12 and 50 years old",
      preRenderDependencies: ["patient"],
      answers: [
        {
          answer: "No",
          display: "Not pregnant",
          questionDisplay: "**pronoun** is not pregnant",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Pregnant",
          questionDisplay: "**pronoun** is pregnant",
          gotoProtocol: 24
        },
        {
          answer: "Was pregnant",
          display: "Was pregnant",
          questionDisplay: "**pronoun** was pregnant",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if pregnant",
          questionDisplay: "Unknown if **pronoun** is pregnant",
          continue: true,
        }
      ]
    },

    {
      text: <p><b className="font-bold">When</b> did you last <b className="font-bold">give birth</b>?</p>,
      firstPersonText: <p><b className="font-bold">When</b> did you last <b className="font-bold">give birth</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1]?.answer;
        return lastAnswer === "Was pregnant";
      },
      preRenderLogic: "last answer was 'Was pregnant'",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Less than 2 months ago",
          display: "Birth < 2 months ago",
          questionDisplay: "**pronoun** gave birth less than 2 months ago",
          dependency: (_patient, answers) => {
            const targetAnswer = answers.find((a) => a.answer === "Vaginal");
            if (targetAnswer) {
              return { code: "21B01" };
            }
          },
          continue: true,
        },
        {
          answer: "Less than 1 hour ago",
          display: "Birth < 1 hour ago",
          questionDisplay: "**pronoun** gave birth less than 1 hour ago",
          dependency: (_patient, answers) => {
            const targetAnswer = answers.find((a) => a.answer === "Vaginal");
            if (targetAnswer) {
              return { code: "21B01" };
            }
          },
          continue: true,
        },
        {
          answer: "More than 2 months ago",
          display: "Birth > 2 months ago",
          questionDisplay: "**pronoun** gave birth more than 2 months ago",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk when last gave birth",
          questionDisplay: "Unknown when **pronoun** last gave birth",
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
          updateCode: "21D03",
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
      text: <p>Is **pronoun** <b className="font-bold">breathing normally</b>?</p>,
      firstPersonText: <p><span className="text-blue-400">(Not obvious)</span> Are you <b className="font-bold">breathing normally</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing completely normally",
          continue: true,
        },
        {
          answer: "No",
          display: "NOT breathing nlly",
          questionDisplay: "**pronoun** is NOT breathing completely normally",
          updateCode: "21D05",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if breathing nlly",
          questionDisplay: "Unk if **pronoun** is breathing completely normally",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-blue-400">What type of incident is this?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Medical hemorrhage",
          display: "Medical hemorrhage",
          questionDisplay: "**pronoun** has a medical hemorrhage",
          updateSuffix: "M",
          continue: true,
        },
        {
          answer: "Traumatic hemorrhage",
          display: "Traumatic hemorrhage",
          questionDisplay: "**pronoun** has a traumatic hemorrhage",
          updateSuffix: "T",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if medical or trauma hemorrhage",
          questionDisplay: "Unk if **pronoun** has a medical or trauma hemorrhage",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is the blood <b className="font-bold">spurting</b> or <b className="font-bold">pouring</b> out?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const typeOfHemorrhage = answers.find(
          (a) => a.question === "What type of incident is this?"
        )?.answer;
        return typeOfHemorrhage === "Traumatic hemorrhage"
      },
      preRenderLogic: "type of hemorrhage is traumatic",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "NOT spurting or pouring",
          questionDisplay: "**pronoun** is NOT spurting or pouring blood",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Spurting or pouring",
          questionDisplay: "**pronoun** is spurting or pouring blood",
          updateCode: "21B02",
          continue: true,
        },
        {
          answer: "Minor bleeding",
          display: "Minor bleeding",
          questionDisplay: "**pronoun** has minor bleeding",
          updateCode: "21A02",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if spurting or pouring",
          questionDisplay: "Unk if **pronoun** is spurting or pouring blood",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is the bleeding <b className="font-bold text-red-400">SERIOUS</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const typeOfHemorrhage = answers.find(
          (a) => a.question === "What type of incident is this?"
        )?.answer;
        return typeOfHemorrhage === "Medical hemorrhage"
      },
      preRenderLogic: "type of hemorrhage is medical",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "NOT serious bleeding",
          questionDisplay: "**pronoun** is NOT experiencing serious bleeding",
          continue: true,
        },
        {
          answer: "Yes",
          display: "SERIOUS bleeding",
          questionDisplay: "**pronoun** is experiencing serious bleeding",
          updateCode: "21B02",
          continue: true,
        },
        {
          answer: "Minor bleeding",
          display: "Minor bleeding",
          questionDisplay: "**pronoun** has minor bleeding",
          updateCode: "21A02",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if serious",
          questionDisplay: "Unk if **pronoun** is experiencing serious bleeding",
          continue: true,
        }
      ]
    },

    {
      text: <p>Does **pronoun** have a <b className="font-bold">bleeding disorder</b> or is **pronoun** normally on <b className="font-bold">blood thinners</b>?</p>,
      firstPersonText: <p>Do you have a <b className="font-bold">bleeding disorder</b> or are you normally on <b className="font-bold">blood thinners</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No bleeding disorder or blood thinners",
          questionDisplay: "**pronoun** has no bleeding disorder or is not on blood thinners",
          continue: true,
        },
        {
          answer: "Yes - Bleeding disorder:",
          display: "Bleeding disorder: {input}",
          questionDisplay: "**pronoun** has a bleeding disorder",
          continue: true,
          input: true,
        },
        {
          answer: "Yes - Blood thinners:",
          display: "Blood thinners: {input}",
          questionDisplay: "**pronoun** is on blood thinners",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk if bleeding disorder or blood thinners",
          questionDisplay: "Unk if **pronoun** has a bleeding disorder or is on blood thinners",
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
          code: "21A01",
          text: "Not Dangerous Hemorrhage",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
        {
          code: "21A02",
          text: "Minor Hemorrhage",
          recResponse: 110,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 111,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 112,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "21B00",
          text: "ALS Override (Bravo)",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
        {
          code: "21B01",
          text: "Possibly Dangerous Hemorrhage",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
        {
          code: "21B02",
          text: "Serious Hemorrhage",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
        {
          code: "21B03",
          text: "Bleeding Disorder",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
        {
          code: "21B04",
          text: "Blood Thinners",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "21C00",
          text: "ALS Override (Charlie)",
          recResponse: 113,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 114,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 115,
            },
          ],
        },
        {
          code: "21C01",
          text: "Hemorrhage Through Tubes",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
        {
          code: "21C02",
          text: "Hemorrhage of Dialysis AV Fistula",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
        {
          code: "21C03",
          text: "Hemorrhage from Varicose Veins",
          recResponse: 107,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 108,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 109,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "21D00",
          text: "ALS Override (Delta)",
          recResponse: 113,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 114,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 115,
            },
          ],
        },
        {
          code: "21D01",
          text: "Arrest",
          recResponse: 116,
          notBreathing: true,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 117,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 118,
            },
          ],
        },
        {
          code: "21D02",
          text: "Unconscious",
          recResponse: 119,
          notConscious: true,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 120,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 121,
            },
          ],
        },
        {
          code: "21D03",
          text: "Not Alert",
          recResponse: 113,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 114,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 115,
            },
          ],
        },
        {
          code: "21D04",
          text: "Dangerous Hemorrhage",
          recResponse: 113,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 114,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 115,
            },
          ],
        },
        {
          code: "21D05",
          text: "Abnormal Breathing",
          recResponse: 113,
          subCodes: [
            {
              suffix: "M",
              text: "Medical",
              recResponse: 114,
            },
            {
              suffix: "T",
              text: "Trauma",
              recResponse: 115,
            },
          ],
        },
      ],
    },
  ],
};
