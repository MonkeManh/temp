import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const PSYCH: IEMSComplaint = {
  protocol: 25,
  name: "Psychiatric / Mental Health Conditions / Suicide Attempt / Abnormal Behavior",
  shortName: "Psych/Abn Beh",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "O",
  defaultPlan: 142,
  defaultCode: "25B06",
  preSend: true,
  questions: [
    {
      text: <p className="text-red-400">Is **pronoun** <b className="font-bold">violent</b>?</p>,
      questionType: "select",
      preRenderInstructions: (patient) => {
        return patient.patientConsciousness !== "no" && patient.patientAge >= 7 && patient.ageUnit === "year"
      },
      answers: [
        {
          answer: "No",
          display: "Not violent",
          questionDisplay: "**pronoun** is not violent",
          continue: true
        },
        {
          answer: "Yes",
          display: "Violent",
          questionDisplay: "**pronoun** is violent",
          updateSuffix: "V",
          continue: true
        },
        {
          answer: "Unknown",
          display: "Unk if violent",
          questionDisplay: "Unk if **pronoun** is violent",
          continue: true
        }
      ]
    },

    {
      text: <p className="text-red-400">Are <b className="font-bold">any weapons involved</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No wpns rptd",
          questionDisplay: "No weapons reported",
          continue: true
        },
        {
          answer: "Yes",
          display: "Weapons rptd",
          questionDisplay: "Weapons reported",
          dependency: (_patient, answers) => {
            const firstAnswer = answers[0]?.answer;
            if(firstAnswer === "Yes") {
              return { subCode: "B" }
            } else {
              return { subCode: "W" }
            }
          },
          continue: true
        },
        {
          answer: "Unknown",
          display: "Unk if wpns",
          questionDisplay: "Unk if weapons involved",
          continue: true
        }
      ]
    },

    {
      text: <p className="text-red-400">What <b className="font-bold">type</b> of <b className="font-bold">weapon</b> is it?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const targetQuestionAnswer = answers?.find((a) => a.question === "Are any weapons involved?")?.answer;
        return targetQuestionAnswer === "Yes"
      },
      preRenderLogic: "weapons are involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Firearm:",
          display: "Firearm: {input}",
          questionDisplay: "**pronoun** has or has access to a firearm: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Knife:",
          display: "Knife: {input}",
          questionDisplay: "**pronoun** has or has access to a knife: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Club:",
          display: "Club: {input}",
          questionDisplay: "**pronoun** has or has access to a club: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Explosive:",
          display: "Explosive: {input}",
          questionDisplay: "**pronoun** has or has access to an explosive: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Other:",
          display: "Other: {input}",
          questionDisplay: "**pronoun** has or has access to another type of weapon: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk type of wpn",
          questionDisplay: "Unk type of weapon **pronoun** has or has access to",
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
      preRenderInstructions: (patient) => {
        return patient.patientConsciousness !== "no"
      },
      preRenderLogic: "patient is conscious",
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
          continue: true,
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
      text: <p>Is **pronoun** <b className="font-bold">talking</b>, <b className="font-bold">standing</b>, or <b className="font-bold">sitting up</b> on their <b className="font-bold">own</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const alertStatus = answers.find((a) => a.question === "Is pronoun completely alert (responding appropriately)?")?.answer;
        return alertStatus === "No"
      },
      preRenderLogic: "patient is not alert",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Talking or sitting up",
          questionDisplay: "**pronoun** is talking, standing, or sitting up on their own",
          updateCode: "25C02",
          continue: true,
        },
        {
          answer: "No",
          display: "Not talking or sitting up",
          questionDisplay: "**pronoun** is NOT talking, standing, or sitting up on their own",
          updateCode: "25D03",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if talking or sitting up",
          questionDisplay: "Unk if **pronoun** is talking, standing, or sitting up on their own",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is **pronoun** <b className="font-bold">thinking</b> or <b className="font-bold">expressing thoughts</b> about killing themselves?</p>,
      questionType: "select",
      preRenderInstructions: (_patientm, answers) => {
        const alertStatus = answers.find((a) => a.question === "Is pronoun completely alert (responding appropriately)?")?.answer;
        return alertStatus === "Yes"
      },
      preRenderLogic: "patient is alert",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Not suicidal",
          questionDisplay: "**pronoun** is not thinking or expressing thoughts about killing themselves",
          dependency: (patient) => {
            if(patient.patientProximity === "first") {
              return { code: "25O01" }
            } else {
              return { code: "25A01" }
            }
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "Suicidal",
          questionDisplay: "**pronoun** is thinking or expressing thoughts about killing themselves",
          dependency: (patient) => {
            if(patient.patientProximity === "first") {
              return { code: "25O02" }
            } else {
              return { code: "25A02" }
            }
          },
          continue: true,
        },
        {
          answer: "Yes - Threatening",
          display: "Threatening suicide",
          questionDisplay: "**pronoun** is threatening to kill themselves",
          updateCode: "25B03",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if suicidal",
          questionDisplay: "Unk if **pronoun** is thinking or expressing thoughts about killing themselves",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Has **pronoun** done <b className="font-bold">anything</b> to <b className="font-bold">injure</b> themselves?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No injs rptd",
          questionDisplay: "**pronoun** has NOT injured themselves",
          continue: true
        },
        {
          answer: "Yes - Laceration",
          display: "Injs rptd (laceration)",
          questionDisplay: "**pronoun** has injured themselves (laceration)",
          continue: true
        },
        {
          answer: "Yes - Hanging/Strangulation/Suffocation",
          display: "Injs rptd (hanging/strangulation/suffocation)",
          questionDisplay: "**pronoun** has injured themselves (hanging/strangulation/suffocation)",
          continue: true
        },
        {
          answer: "Yes - Jumped",
          display: "Jumped now",
          questionDisplay: "**pronoun** has jumped",
          updateCode: "25D06",
          continue: true
        },
        {
          answer: "Unknown",
          display: "Unk if injs",
          questionDisplay: "Unk if **pronoun** has injured themselves",
          updateCode: "25B06",
          continue: true
        }
      ]
    },

    {
      text: <p>Is **pronoun** <b className="font-bold">thinking</b> about <b className="font-bold">injuring</b> themselves?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const injuryIntentions = answers.find((a) => a.question === "Has pronoun done anything to injure themselves?")?.answer;
        return injuryIntentions === "No"
      },
      preRenderLogic: "no self-injury reported",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Not thinking of self-harm",
          questionDisplay: "**pronoun** is not thinking about injuring themselves",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Thinking of self-harm",
          questionDisplay: "**pronoun** is thinking about injuring themselves",
          continue: true,
        },
        {
          answer: "Yes - Threatening to jump",
          display: "Threatening to jump",
          questionDisplay: "**pronoun** is threatening to injure themselves",
          updateCode: "25B04",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if self-harm",
          questionDisplay: "Unk if **pronoun** is thinking about injuring themselves",
          continue: true,
        }
      ]
    },

    {
      text: <p><b className="font-bold">Where</b> is **pronoun** <b className="font-bold">cut</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const injuryStatus = answers.find((a) => a.question === "Has pronoun done anything to injure themselves?")?.answer;
        return injuryStatus === "Yes - Laceration";
      },
      preRenderLogic: "self-injury reported (laceration)",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "NOT DANGEROUS body area:",
          display: "NOT DANG body area: {input}",
          questionDisplay: "**pronoun** has a cut in a NOT DANGEROUS body area: {input}",
          updateCode: "25B02",
          continue: true,
          input: true,
        },
        {
          answer: "POSSIBLY DANGEROUS body area:",
          display: "POSS DANG body area: {input}",
          questionDisplay: "**pronoun** has a cut in a POSSIBLY DANGEROUS body area: {input}",
          updateCode: "25B03",
          continue: true,
          input: true,
        },
        {
          answer: "DANGEROUS body area:",
          display: "DANG body area: {input}",
          questionDisplay: "**pronoun** has a cut in a DANGEROUS body area: {input}",
          updateCode: "25B04",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk if body area: {input}",
          questionDisplay: "Unk if **pronoun** has a cut in a body area: {input}",
          updateCode: "25B05",
          continue: true,
          input: true,
        }
      ]
    },

    {
      text: <p>Is there any <b className="font-bold text-red-400">SERIOUS</b> <b className="font-bold">bleeding</b> (spurting or pouring)?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const injuryStatus = answers.find((a) => a.question === "Has pronoun done anything to injure themselves?")?.answer;
        return injuryStatus === "Yes - Laceration";
      },
      answers: [
        {
          answer: "No",
          display: "No SERIOUS bleeding",
          questionDisplay: "No SERIOUS bleeding",
          continue: true,
        },
        {
          answer: "Yes",
          display: "SERIOUS bleeding",
          questionDisplay: "There is SERIOUS bleeding",
          dependency: (_patient, answers) => {
            const lastAnswer = answers[answers.length - 1]?.answer;
            if(lastAnswer === "NOT DANGEROUS body area:") {
              return { code: "25B01" }
            } else if(lastAnswer === "POSSIBLY DANGEROUS body area:" || lastAnswer === "DANGEROUS body area:") {
              return { code: "25D04", send: true }
            }
          },
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if bleeding",
          questionDisplay: "Unk if **pronoun** is bleeding",
          continue: true,
        }
      ]
    },

    {
      text: <p>Does **pronoun** have any <b className="font-bold">difficulty breathing</b>?</p>,
      firstPersonText: <p>Do you have any <b className="font-bold">difficulty breathing</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const injuryStatus = answers.find((a) => a.question === "Has pronoun done anything to injure themselves?")?.answer;
        return injuryStatus === "Yes - Hanging/Strangulation/Suffocation";
      },
      answers: [
        {
          answer: "No",
          display: "No diff breathing",
          questionDisplay: "**pronoun** has no difficulty breathing",
          updateCode: "25B05",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Diff breathing",
          questionDisplay: "**pronoun** has difficulty breathing",
          updateCode: "25D05",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if diff breathing",
          questionDisplay: "Unk if **pronoun** has difficulty breathing",
          updateCode: "25B05",
        }
      ]
    },

    {
      text: <p className="text-red-400">Where is **pronoun** right <b className="font-bold">now</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Location:",
          display: "PT is at: {input}",
          questionDisplay: "**pronoun** is at: {input}",
          continue: true,
        },
        {
          answer: "Inside same building",
          display: "Inside same structure",
          questionDisplay: "**pronoun** is inside the same building/structure",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk where PT is",
          questionDisplay: "Unk where **pronoun** is",
          continue: true,
        }
      ]
    },

    {
      text: <p>Was this a <b className="font-bold">sudden change</b> in their <b className="font-bold">behavior</b> or <b className="font-bold">personality</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const alertStatus = answers.find((a) => a.question === "Is pronoun completely alert (responding appropriately)?")?.answer;
        return alertStatus === "Altered level of consciousness";
      },
      preRenderLogic: "altered level of consciousness",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No sudden change in behavior",
          questionDisplay: "**pronoun** has not had a sudden change in behavior",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Sudden change in behavior",
          questionDisplay: "**pronoun** has had a sudden change in behavior",
          updateCode: "25C04",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if sudden change in behavior",
          questionDisplay: "Unk if **pronoun** has had a sudden change in behavior",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-blue-400">Does this incident qualify for a <b className="font-bold">CRISIS TEAM/ALTERNATE RESPONSE</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No crisis team or alt response indicated",
          questionDisplay: "No crisis team or alternate response indicated",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Crisis team/alt response indicated",
          questionDisplay: "Crisis team or alternate response indicated",
          dependency: (_patient, answers) => {
            const isViolent = answers.find((a) => a.question === "Is **pronoun** violent?")?.answer === "Yes";
            const hasWeapons = answers.find((a) => a.question === "Are any weapons involved?")?.answer === "Yes";
            if(isViolent || hasWeapons) {
              return { subCode: "D" }
            } else {
              return { subCode: "C" }
            }
          },
        },
        {
          answer: "Unknown",
          display: "Unk if crisis team or alt response indicated",
          questionDisplay: "Unk if crisis team or alternate response indicated",
          continue: true,
        }
      ]
    },

    {
      text: <p>Does **pronoun** have a <b className="font-bold">history</b> of <b className="font-bold">MENTAL HEALTH CONDITIONS</b> (psychiatric problems)?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No MENTAL HEALTH CONDITIONS",
          questionDisplay: "**pronoun** does not have a history of mental health conditions",
          dependency: (_patient, answers) => {
            const alertStatus = answers.find((a) => a.question === "Is pronoun completely alert (responding appropriately)?")?.answer;
            if(alertStatus === "Altered level of consciousness") {
              return { code: "25C02", send: true }
            }
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "MENTAL HEALTH CONDITIONS",
          questionDisplay: "**pronoun** has a history of mental health conditions",
          dependency: (_patient, answers) => {
            const alertStatus = answers.find((a) => a.question === "Is pronoun completely alert (responding appropriately)?")?.answer;
            if(alertStatus === "Altered level of consciousness") {
              return { code: "25C01", send: true }
            }
          },
          continue: true,

        },
        {
          answer: "Unknown",
          display: "Unk if MENTAL HEALTH CONDITIONS",
          questionDisplay: "Unk if **pronoun** has a history of mental health conditions",
          dependency: (_patient, answers) => {
            const alertStatus = answers.find((a) => a.question === "Is pronoun completely alert (responding appropriately)?")?.answer;
            if(alertStatus === "Altered level of consciousness") {
              return { code: "25C02", send: true }
            }
          },
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-purple-400">Has **pronoun** ever had a <b className="font-bold">confrontation</b> (run-in) with <b className="font-bold">public safety responders</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No prev confrontation w/ responders",
          questionDisplay: "**pronoun** has not had a previous confrontation with public safety responders",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Prev confrontation w/ responders",
          questionDisplay: "**pronoun** has had a previous confrontation with public safety responders",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if prev confrontation w/ responders",
          questionDisplay: "Unk if **pronoun** has had a previous confrontation with public safety responders",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-purple-400">Does **pronoun** (or the family) <b className="font-bold">have</b> a <b className="font-bold">SAFETY PLAN</b> in <b className="font-bold">place</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const hasMentalHealthConditions = answers.find((a) => a.question === "Does pronoun have a history of MENTAL HEALTH CONDITIONS (psychiatric problems)?")?.answer;
        return hasMentalHealthConditions === "Yes"
      },
      preRenderLogic: "history of mental health conditions",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Has SAFETY PLAN",
          questionDisplay: "**pronoun** (or the family) has a safety plan in place",
          continue: true,
        },
        {
          answer: "No",
          display: "No SAFETY PLAN",
          questionDisplay: "**pronoun** (or the family) does not have a safety plan in place",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if has SAFETY PLAN",
          questionDisplay: "Unk if **pronoun** (or the family) has a safety plan in place",
          continue: true,
        }
      ]
    },
  ],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "25O01",
          text: "Non-Suicidal & Alert (w/ 1st Pty Verification)",
          recResponse: 142,
          subCodes: [
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 142,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 142,
            },
          ],
        },
        {
          code: "25O02",
          text: "Suicide Ideation & Alert (w/ 1st Pty Verification)",
          recResponse: 142,
          subCodes: [
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 142,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 142,
            },
          ],
        },
        {
          code: "25O03",
          text: "Non-Suicidal & Alert (w/ 1st Pty Verification & HX of Mental Health Conditions)",
          recResponse: 142,
          subCodes: [
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 142,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 142,
            },
          ],
        },
        {
          code: "25O04",
          text: "Suicide Ideation & Alert (w/ 1st Pty Verification & HX of Mental Health Conditions)",
          recResponse: 142,
          subCodes: [
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 142,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 142,
            },
          ],
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "25A01",
          text: "Non-Suicidal & Alert (w/o 1st Pty Verification)",
          recResponse: 142,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
        {
          code: "25A02",
          text: "Suicide Ideation & Alert (w/o 1st Pty Verification)",
          recResponse: 142,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "25B00",
          text: "BLS Override (Bravo)",
          recResponse: 142,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
        {
          code: "25B01",
          text: "Serious Hemorrhage",
          recResponse: 142,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
        {
          code: "25B02",
          text: "Non-Serious or Minor Hemorrhage",
          recResponse: 142,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
        {
          code: "25B03",
          text: "Intending Suicide",
          recResponse: 142,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
        {
          code: "25B04",
          text: "Jumper (Threatening)",
          recResponse: 80,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 80,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 80,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 80,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 80,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 80,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 80,
            },
          ],
        },
        {
          code: "25B05",
          text: "Near Hanging, Strangulation, or Suffocation (Alert w/o Diff Breathing)",
          recResponse: 143,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
        {
          code: "25B06",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 142,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 143,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 143,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 143,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 143,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 143,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 143,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "25C00",
          text: "ALS Override (Charlie)",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25C01",
          text: "Altered LOC (Hx of Mental Health Conditions)",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25C02",
          text: "Altered LOC (No or Unk HX of Mental Health Conditions)",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25C03",
          text: "Altered LOC (Ingestion of Medications/Substances)",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25C04",
          text: "Altered LOC (Sudden Change in Behavior/Personality)",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "C",
              text: "Crisis Team/Alternate Response",
              recResponse: 145,
            },
            {
              suffix: "D",
              text: "Crisis Team/Alternate Response w/ Violence or Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "25D00",
          text: "ALS Override (Delta)",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25D01",
          text: "Arrest",
          recResponse: 146,
          notBreathing: true,
        },
        {
          code: "25D02",
          text: "Unconscious",
          recResponse: 144,
          notConscious: true,
        },
        {
          code: "25D03",
          text: "Not Alert",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25D04",
          text: "Dangerous Hemorrhage",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25D05",
          text: "Near Hanging, Strangulation, or Suffocation (Alert w/ Diff Breathing)",
          recResponse: 144,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 145,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 145,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 145,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 145,
            },
          ],
        },
        {
          code: "25D06",
          text: "Jumped Now",
          recResponse: 84,
          subCodes: [
            {
              suffix: "B",
              text: "Both Violent & Weapons",
              recResponse: 84,
            },
            {
              suffix: "T",
              text: "Threateneing Self-Immolation",
              recResponse: 84,
            },
            {
              suffix: "V",
              text: "Violent",
              recResponse: 84,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 84,
            },
          ],
        },
      ],
    },
  ],
};
