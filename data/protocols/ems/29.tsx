import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const TRAFFIC_TRANSPORTATION_INCIDENTS: IEMSComplaint = {
  protocol: 29,
  name: "Traffic / Transportation Incidents",
  shortName: "Traffic/Transportation Incidents",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 3 },
    { name: "Police", priority: true },
  ],
  defaultPriority: "B",
  defaultPlan: 168,
  defaultCode: "29B05",
  preSend: true,
  questions: [
    {
      text: <p className="text-red-400">Are there any <b className="font-bold">chemicals</b> or <b className="font-bold">hazardous materials</b> involved?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No chems/hazmat involved",
          questionDisplay: "No hazardous materials or chemicals are involved.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Chems/hazmat involved", 
          questionDisplay: "Hazardous materials or chemicals are involved.",
          updateCode: "29D04",
          continue: true,
        },
        {
          answer: "Doesn't know",
          display: "Unk if chems/hazmat involved",
          questionDisplay: "Unknown if hazardous materials or chemicals are involved.",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Are there any <b className="font-bold">numbers</b> on the vehicle?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const chems = answers?.find(
          (a) => a.question === "Are there any chemicals or hazardous materials involved?"
        )?.answer;

        return chems === "Yes";
      },
      preRenderLogic: "chems or hazmat involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No chem/hazmat numbers",
          questionDisplay: "No hazardous materials or chemicals numbers are visible.",
          continue: true,
        },
        {
          answer: "Yes (input):",
          display: "Chem/hazmat numbers: {input}",
          questionDisplay: "Hazardous materials or chemicals numbers are visible: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Doesn't know",
          display: "Unk if chem/hazmat numbers",
          questionDisplay: "Unknown if hazardous materials or chemicals numbers are visible.",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Are there any <b className="font-bold">placard signs</b> on the vehicle?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const chems = answers?.find(
          (a) => a.question === "Are there any chemicals or hazardous materials involved?"
        )?.answer;

        return chems === "Yes";
      },
      preRenderLogic: "chems or hazmat involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No placard signs",
          questionDisplay: "No placard signs are visible.",
          continue: true,
          send: true
        },
        {
          answer: "Yes (input):",
          display: "Placard signs: {input}",
          questionDisplay: "Placard signs are visible: {input}",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Doesn't know",
          display: "Unk if placard signs",
          questionDisplay: "Unknown if placard signs are visible.",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p className="text-red-400">Was anyone <b className="font-bold">thrown</b> out of the vehicle?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No one thrown out",
          questionDisplay: "No one was thrown out of the vehicle.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Someone thrown out",
          questionDisplay: "Someone was thrown out of the vehicle.",
          updateCode: "29D02",
          updateSuffix: "n",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if someone was thrown out",
          questionDisplay: "Unknown if someone was thrown out of the vehicle.",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-404">Is anyone <b className="font-bold">trapped</b> or <b className="font-bold">pinned</b> in the vehicle?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No one trapped/pinned",
          questionDisplay: "No one is trapped or pinned in the vehicle.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Someone trapped/pinned",
          questionDisplay: "Someone is trapped or pinned in the vehicle.",
          updateCode: "29D05",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if anyone trapped/pinned",
          questionDisplay: "Unknown if anyone is trapped or pinned in the vehicle.",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is everyone in the vehicle <b className="font-bold">completely awake</b> (responding appropriately)?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Everyone completely awake",
          questionDisplay: "Everyone in the vehicle is completely awake and responding appropriately.",
          continue: true,
        },
        {
          answer: "No",
          display: "Not everyone completely awake",
          questionDisplay: "Not everyone in the vehicle is completely awake and responding appropriately.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if everyone completely awake",
          questionDisplay: "Unknown if everyone in the vehicle is completely awake and responding appropriately.",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is everyone <b className="font-bold">breathing normally</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const awake = answers?.find(
          (a) => a.question === "Is everyone in the vehicle completely awake (responding appropriately)?"
        )?.answer;

        return awake === "No";
      },
      preRenderLogic: "not everyone completely awake",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Everyone breathing nlly",
          questionDisplay: "Everyone in the vehicle is breathing normally.",
          updateCode: "29D09",
          continue: true,
          send: true
        },
        {
          answer: "No",
          display: "Not everyone breathing nlly",
          questionDisplay: "Not everyone in the vehicle is breathing normally.",
          updateCode: "29D08",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if everyone breathing nlly",
          questionDisplay: "Unknown if everyone in the vehicle is breathing normally.",
          continue: true,
        }
      ]
    },

    {
      text: <p>Are there any <b className="font-bold">obvious</b> injuries?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No obvious injs",
          questionDisplay: "No obvious injuries are noted.",
          dependency: (patient) => {
            const firstPerson = patient.patientProximity === "first";
            if(firstPerson && patient.numPatients <= 4) {
              return { code: "29O01" }
            } else if(firstPerson) {
              return { code: "29A02" }
            }
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "Obvious injs",
          questionDisplay: "Obvious injuries are noted.",
          dependency: (patient) => {
            const firstPerson = patient.patientProximity === "first";
            if(!firstPerson) {
              return { code: "29B01" }
            }
          },
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if obvious injs",
          questionDisplay: "Unknown if obvious injuries are noted.",
          updateCode: "29B05",
          continue: true,
        }
      ]
    },

    {
      text: <p><b className="font-bold">What</b> part of the body is injured?</p>,
      questionType: "select",
      preRenderInstructions: (patient, answers) => {
        const injs = answers?.find(
          (a) => a.question === "Are there any obvious injuries?"
        )?.answer;
        const firstPerson = patient.patientProximity === "first";
        return injs === "Yes" && firstPerson;
      },
      preRenderLogic: "obvious injuries noted and first party caller",
      preRenderDependencies: ["answers", "patient"],
      defaultTab: "ai",
      additionalInstructions: <AI.BodyAreas />,
      answers: [
        {
          answer: "NOT DANGEROUS body area",
          display: "Inj to NOT DANGEROUS body area",
          questionDisplay: "Injury is to a NOT DANGEROUS body area.",
          updateCode: "29A01",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Inj to {input}",
          questionDisplay: "Injury is to {input}.",
          updateCode: "29B01",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if inj to dangerous body area",
          questionDisplay: "Unknown if injury is to a dangerous body area.",
          updateCode: "29B05",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is there any <b className="font-bold text-red-400">SERIOUS</b> bleeding?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const injs = answers?.find(
          (a) => a.question === "Are there any obvious injuries?"
        )?.answer;
        return injs === "Yes";
      },
      preRenderLogic: "obvious injuries noted",
      preRenderDependencies: ["answers"],
      defaultTab: "ai",
      additionalInstructions: <AI.SeriousBleeding />,
      answers: [
        {
          answer: "No",
          display: "No serious bleeding",
          questionDisplay: "No serious bleeding is noted.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "SERIOUS bleeding",
          questionDisplay: "Serious bleeding is noted.",
          updateCode: "29B02",
          continue: true,
        },
        {
          answer: "Not bleeding now",
          display: "Not bleeding now",
          questionDisplay: "Not bleeding now.",
          continue: true,
        },
        {
          answer: "Not bleeding at all",
          display: "Not bleeding at all",
          questionDisplay: "Not bleeding at all.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if serious bleeding",
          questionDisplay: "Unknown if serious bleeding is noted.",
          continue: true,
        }
      ]
    },

    {
      text: <p>What is the <b className="font-bold">nature</b> of the injury?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const injs = answers?.find(
          (a) => a.question === "Are there any obvious injuries?"
        )?.answer;
        return injs === "Yes";
      },
      preRenderLogic: "obvious injuries noted",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Low mechanism",
          display: "Low mechanism cause",
          questionDisplay: "Injury is due to a low mechanism cause.",
          updateCode: "29B04",
          preRenderInstructions: (patient) => {
            return patient.patientProximity === "first" || patient.patientProximity === "yes"
          }
        },
        {
          answer: "High velocity impact",
          display: "High velocity impact cause",
          questionDisplay: "Injury is due to a high velocity impact cause.",
          updateCode: "29D03",
          continue: true,
        },
        {
          answer: "High mechanism",
          display: "High mechanism cause",
          questionDisplay: "Injury is due to a high mechanism cause.",
          updateCode: "29D02",
          preRenderInstructions: (_patient, answers) => {
            const ejection = answers?.find(
              (a) => a.question === "Was anyone thrown out of the vehicle?"
            )?.answer;
            return ejection !== "Yes";
          },
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-blue-400">Select the high mechanism incident that best describes the situation</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const nature = answers?.find(
          (a) => a.question === "What is the nature of the injury?"
        )?.answer;
        return nature === "High mechanism";
      },
      preRenderLogic: "nature of injury is high mechanism",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Auto vs. Bicycle",
          display: "Auto vs. Bicycle",
          questionDisplay: "High mechanism is Auto vs. Bicycle.",
          updateSuffix: "i",
          continue: true,
        },
        {
          answer: "All-Terrain/Snowmobile",
          display: "All-Terrain/Snowmobile",
          questionDisplay: "High mechanism is All-Terrain/Snowmobile.",
          updateSuffix: "i",
          continue: true,
        },
        {
          answer: "Auto vs. Motorcycle",
          display: "Auto vs. Motorcycle",
          questionDisplay: "High mechanism is Auto vs. Motorcycle.",
          updateSuffix: "l",
          continue: true,
        },
        {
          answer: "Auto vs. Pedestrain",
          display: "Auto vs. Pedestrain",
          questionDisplay: "High mechanism is Auto vs. Pedestrain.",
          updateSuffix: "m",
          continue: true,
        },
        {
          answer: "Ejection",
          display: "Ejection",
          questionDisplay: "High mechanism is Ejection.",
          updateSuffix: "n",
          continue: true,
        },
        {
          answer: "Personal Watercraft",
          display: "Personal Watercraft",
          questionDisplay: "High mechanism is Personal Watercraft.",
          updateSuffix: "o",
          continue: true,
        },
        {
          answer: "Rollovers",
          display: "Rollovers",
          questionDisplay: "High mechanism is Rollovers.",
          updateSuffix: "p",
          continue: true,
        },
        {
          answer: "Vehicle Off Bridge/Height",
          display: "Vehicle Off Bridge/Height",
          questionDisplay: "High mechanism is Vehicle Off Bridge/Height.",
          updateSuffix: "q",
          continue: true,
        },
        {
          answer: "Possible Death at Scene",
          display: "Possible Death at Scene",
          questionDisplay: "High mechanism is Possible Death at Scene.",
          updateSuffix: "r",
          continue: true,
        },
        {
          answer: "Sinking Vehicle/Vehicle in Floodwater",
          display: "Sinking Vehicle/Vehicle in Floodwater",
          questionDisplay: "High mechanism is Sinking Vehicle/Vehicle in Floodwater.",
          updateSuffix: "s",
          continue: true,
        },
        {
          answer: "Train/Light Rail vs. Pedestrian",
          display: "Train/Light Rail vs. Pedestrian",
          questionDisplay: "High mechanism is Train/Light Rail vs. Pedestrian.",
          updateSuffix: "t",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unknown high mechanism",
          questionDisplay: "Unknown high mechanism.",
          continue: true,
        }
      ]
    }
  ],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "29O01",
          text: "No Injs (Confirmed for All Persons Up to 4)",
          recResponse: 169,
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "29A00",
          text: "BLS Override (Alpha)",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
        {
          code: "29A01",
          text: "1st Party Caller w/ Inj to Not Dangerous Body Area",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
        {
          code: "29A02",
          text: "No Injs Rptd (Unconfirmed or >= 5 Persons Involed)",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "29B00",
          text: "BLS Override (Bravo)",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
        {
          code: "29B01",
          text: "Injs",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
        {
          code: "29B02",
          text: "Serious Hemorrhage",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
        {
          code: "29B03",
          text: "Other Hazards",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
        {
          code: "29B04",
          text: "Low Mechanism (1st or 2nd Party Caller)",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
        {
          code: "29B05",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 168,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 168,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 170,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 168,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 170,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "29D00",
          text: "ALS Override (Delta)",
          recResponse: 173,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 173,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 174,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 173,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 174,
            },
          ],
        },
        {
          code: "29D01",
          text: "Major Incident",
          recResponse: 173,
          subCodes: [
            {
              suffix: "a",
              text: "Aircraft",
              recResponse: 175,
            },
            {
              suffix: "B",
              text: "Bus",
              recResponse: 172,
            },
            {
              suffix: "C",
              text: "Subway/Metro",
              recResponse: 176,
            },
            {
              suffix: "d",
              text: "Train",
              recResponse: 176,
            },
            {
              suffix: "E",
              text: "Watercraft",
              recResponse: 177,
            },
            {
              suffix: "f",
              text: "Multi-Vehicle (>= 10) Pile-Up",
              recResponse: 172,
            },
            {
              suffix: "g",
              text: "Street Car/Tram/Light Rail",
              recResponse: 176,
            },
            {
              suffix: "h",
              text: "Vehicle vs. Building",
              recResponse: 178,
            },
          ],
        },
        {
          code: "29D02",
          text: "High Mechanism",
          recResponse: 173,
          subCodes: [
            {
              suffix: "i",
              text: "Auto vs. Bicycle",
              recResponse: 179,
            },
            {
              suffix: "k",
              text: "All-Terrain/Snowmobile",
              recResponse: 180,
            },
            {
              suffix: "l",
              text: "Auto vs. Motorcycle",
              recResponse: 179,
            },
            {
              suffix: "m",
              text: "Auto vs. Pedestrain",
              recResponse: 181,
            },
            {
              suffix: "n",
              text: "Ejection",
              recResponse: 182,
            },
            {
              suffix: "o",
              text: "Personal Watercraft",
              recResponse: 177,
            },
            {
              suffix: "p",
              text: "Rollovers",
              recResponse: 183,
            },
            {
              suffix: "q",
              text: "Vehicle Off Bridge/Height",
              recResponse: 184,
            },
            {
              suffix: "r",
              text: "Possible Death at Scene",
              recResponse: 173,
            },
            {
              suffix: "s",
              text: "Sinking Vehicle/Vehicle in Floodwater",
              recResponse: 185,
            },
            {
              suffix: "t",
              text: "Train/Light Rail vs. Pedestrian",
              recResponse: 186,
            },
          ],
        },
        {
          code: "29D03",
          text: "High Velocity Impact",
          recResponse: 180,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 180,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 180,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 180,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 180,
            },
          ],
        },
        {
          code: "29D04",
          text: "Hazmat",
          recResponse: 187,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 187,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 187,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 187,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 187,
            },
          ],
        },
        {
          code: "29D05",
          text: "Trapped or Pinned Victim",
          recResponse: 188,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 187,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 189,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 187,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 189,
            },
          ],
        },
        {
          code: "29D06",
          text: "Arrest",
          recResponse: 173,
          notBreathing: true,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 173,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 174,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 173,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 174,
            },
          ],
        },
        {
          code: "29D07",
          text: "Unconscious",
          recResponse: 171,
          notConscious: true,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 171,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 172,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 171,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 172,
            },
          ],
        },
        {
          code: "29D08",
          text: "Alert w/ Noisy Breathing (Abnormal)",
          recResponse: 173,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 173,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 174,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 173,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 174,
            },
          ],
        },
        {
          code: "29D09",
          text: "Not Alert w/ Normal Breathing",
          recResponse: 171,
          subCodes: [
            {
              suffix: "U",
              text: "Unkn Number of Patients",
              recResponse: 171,
            },
            {
              suffix: "V",
              text: "Mult Patients",
              recResponse: 172,
            },
            {
              suffix: "X",
              text: "Unkn Number of Patients & Additional Response Required",
              recResponse: 171,
            },
            {
              suffix: "Y",
              text: "Mult Patients & Additional Response Required",
              recResponse: 172,
            },
          ],
        },
      ],
    },
  ],
};
