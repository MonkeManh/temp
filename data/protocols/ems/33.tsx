import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const TRANSFER: IEMSComplaint = {
  protocol: 33,
  name: "Transfer / Interfacility / Palliative Care",
  shortName: "Transport",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: false },
    { name: "Police", priority: false },
  ],
  defaultPriority: "A",
  defaultPlan: 201,
  defaultCode: "33A01",
  questions: [
    {
      text: (
        <p>
          Is this call a <b className="font-">result</b> of an{" "}
          <b className="font-bold">evaluation</b> by a{" "}
          <b className="font-bold">nurse</b> or{" "}
          <b className="font-bold">doctor</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Eval by nurse/doctor",
          questionDisplay: "Evaluation was made by a nurse or doctor",
          continue: true,
        },
        {
          answer: "No",
          display: "No eval by nurse/doctor",
          questionDisplay: "No evaluation was made by a nurse or doctor",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if eval by nurse/doctor",
          questionDisplay: "Unk if evaluation was made by a nurse or doctor",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What is their <b className="font-bold">chief complaint</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].answer;
        return lastAnswer === "No" || lastAnswer === "Unknown";
      },
      preRenderLogic: "the evaluation was not made by a nurse or doctor",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Abdominal Pain / Problems",
          display: "Abdominal Pain/Problems complaint",
          questionDisplay: "Chief complaint of Abdominal Pain/Problems",
          gotoProtocol: 1,
        },
        {
          answer: "Allergies (Reactions) / Envenomations (Stings, Bites)",
          display:
            "Allergies (Reactions) / Envenomations (Stings, Bites) complaint",
          questionDisplay:
            "Chief complaint of Allergies (Reactions) / Envenomations (Stings, Bites)",
          gotoProtocol: 2,
        },
        {
          answer: "Animal Bites / Attacks",
          display: "Animal Bites / Attacks complaint",
          questionDisplay: "Chief complaint of Animal Bites / Attacks",
          gotoProtocol: 3,
        },
        {
          answer: "Assault / Sexual Assault",
          display: "Assault / Sexual Assault complaint",
          questionDisplay: "Chief complaint of Assault / Sexual Assault",
          gotoProtocol: 4,
        },
        {
          answer: "Back Pain (Non-Traumatic or Non-Recent Trauma)",
          display: "Back Pain (Non-Traumatic or Non-Recent Trauma) complaint",
          questionDisplay:
            "Chief complaint of Back Pain (Non-Traumatic or Non-Recent Trauma)",
          gotoProtocol: 5,
        },
        {
          answer: "Breathing Problems",
          display: "Breathing Problems complaint",
          questionDisplay: "Chief complaint of Breathing Problems",
          gotoProtocol: 6,
        },
        {
          answer: "Burns (Scalds) / Explosion (Blast)",
          display: "Burns (Scalds) / Explosion (Blast) complaint",
          questionDisplay:
            "Chief complaint of Burns (Scalds) / Explosion (Blast)",
          gotoProtocol: 7,
        },
        {
          answer: "Carbond Monoxide / Inhalation / Hazmat / CBRN",
          display: "Carbond Monoxide / Inhalation / Hazmat / CBRN complaint",
          questionDisplay:
            "Chief complaint of Carbond Monoxide / Inhalation / Hazmat / CBRN",
          gotoProtocol: 8,
        },
        {
          answer: "Cardiac or Respiratory Arrest / Death",
          display: "Cardiac or Respiratory Arrest / Death complaint",
          questionDisplay:
            "Chief complaint of Cardiac or Respiratory Arrest / Death",
          gotoProtocol: 9,
        },
        {
          answer: "Chest Pain (Non-Traumatic)",
          display: "Chest Pain (Non-Traumatic) complaint",
          questionDisplay: "Chief complaint of Chest Pain (Non-Traumatic)",
          gotoProtocol: 10,
        },
        {
          answer: "Choking",
          display: "Choking complaint",
          questionDisplay: "Chief complaint of Choking",
          gotoProtocol: 11,
        },
        {
          answer: "Convulsions / Seizures",
          display: "Convulsions / Seizures complaint",
          questionDisplay: "Chief complaint of Convulsions / Seizures",
          gotoProtocol: 12,
        },
        {
          answer: "Diabetic Problems",
          display: "Diabetic Problems complaint",
          questionDisplay: "Chief complaint of Diabetic Problems",
          gotoProtocol: 13,
        },
        {
          answer: "Drowning (Near) / Diving / SCUBA Accident",
          display: "Drowning (Near) / Diving / SCUBA Accident complaint",
          questionDisplay:
            "Chief complaint of Drowning (Near) / Diving / SCUBA Accident",
          gotoProtocol: 14,
        },
        {
          answer: "Electrocution / Lightning",
          display: "Electrocution / Lightning complaint",
          questionDisplay: "Chief complaint of Electrocution / Lightning",
          gotoProtocol: 15,
        },
        {
          answer: "Eye Problems / Injuries",
          display: "Eye Problems / Injuries complaint",
          questionDisplay: "Chief complaint of Eye Problems / Injuries",
          gotoProtocol: 16,
        },
        {
          answer: "Falls",
          display: "Falls complaint",
          questionDisplay: "Chief complaint of Falls",
          gotoProtocol: 17,
        },
        {
          answer: "Headache",
          display: "Headache complaint",
          questionDisplay: "Chief complaint of Headache",
          gotoProtocol: 18,
        },
        {
          answer: "Heart Problems / A.I.C.D.",
          display: "Heart Problems / A.I.C.D. complaint",
          questionDisplay: "Chief complaint of Heart Problems / A.I.C.D.",
          gotoProtocol: 19,
        },
        {
          answer: "Heat / Cold Exposure",
          display: "Heat / Cold Exposure complaint",
          questionDisplay: "Chief complaint of Heat / Cold Exposure",
          gotoProtocol: 20,
        },
        {
          answer: "Hemorrhage / Lacerations",
          display: "Hemorrhage / Lacerations complaint",
          questionDisplay: "Chief complaint of Hemorrhage / Lacerations",
          gotoProtocol: 21,
        },
        {
          answer: "Inaccessible Incident / Other Entrapments",
          display: "Inaccessible Incident / Other Entrapments complaint",
          questionDisplay:
            "Chief complaint of Inaccessible Incident / Other Entrapments",
          gotoProtocol: 22,
        },
        {
          answer: "Overdose / Poisoning (Ingestion)",
          display: "Overdose / Poisoning (Ingestion) complaint",
          questionDisplay:
            "Chief complaint of Overdose / Poisoning (Ingestion)",
          gotoProtocol: 23,
        },
        {
          answer: "Pregnancy / Childbirth / Miscarriage",
          display: "Pregnancy / Childbirth / Miscarriage complaint",
          questionDisplay:
            "Chief complaint of Pregnancy / Childbirth / Miscarriage",
          gotoProtocol: 24,
        },
        {
          answer:
            "Psychiatric / Mental Health Conditions / Suicide Attempt / Abnormal Behavior",
          display:
            "Psychiatric / Mental Health Conditions / Suicide Attempt / Abnormal Behavior complaint",
          questionDisplay:
            "Chief complaint of Psychiatric / Mental Health Conditions / Suicide Attempt / Abnormal Behavior",
          gotoProtocol: 25,
        },
        {
          answer: "Sick Person (Specific Diagnosis)",
          display: "Sick Person (Specific Diagnosis) complaint",
          questionDisplay:
            "Chief complaint of Sick Person (Specific Diagnosis)",
          gotoProtocol: 26,
        },
        {
          answer: "Shot / Stab / Penetrating Trauma",
          display: "Shot / Stab / Penetrating Trauma complaint",
          questionDisplay:
            "Chief complaint of Shot / Stab / Penetrating Trauma",
          gotoProtocol: 27,
        },
        {
          answer: "Stroke (CVA) / Transient Ischemic Attack (TIA)",
          display: "Stroke (CVA) / Transient Ischemic Attack (TIA) complaint",
          questionDisplay:
            "Chief complaint of Stroke (CVA) / Transient Ischemic Attack (TIA)",
          gotoProtocol: 28,
        },
        {
          answer: "Traffic / Transportation Incidents",
          display: "Traffic / Transportation Incidents complaint",
          questionDisplay:
            "Chief complaint of Traffic / Transportation Incidents",
          gotoProtocol: 29,
        },
        {
          answer: "Traumatic Injuries (Specific)",
          display: "Traumatic Injuries (Specific) complaint",
          questionDisplay: "Chief complaint of Traumatic Injuries (Specific)",
          gotoProtocol: 30,
        },
        {
          answer: "Unconscious / Fainting (Near)",
          display: "Unconscious / Fainting (Near) complaint",
          questionDisplay: "Chief complaint of Unconscious / Fainting (Near)",
          gotoProtocol: 31,
        },
        {
          answer: "Unknown Problem (Person Down)",
          display: "Unknown Problem (Person Down) complaint",
          questionDisplay: "Chief complaint of Unknown Problem (Person Down)",
          gotoProtocol: 32,
        },
        {
          answer: "Automatic Crash Notification (ACN)",
          display: "Automatic Crash Notification (ACN) complaint",
          questionDisplay:
            "Chief complaint of Automatic Crash Notification (ACN)",
          gotoProtocol: 34,
        },
        {
          answer: "Health Care Professional Admission",
          display: "Health Care Professional Admission complaint",
          questionDisplay:
            "Chief complaint of Health Care Professional Admission",
          gotoProtocol: 35,
        },
        {
          answer: "Pandemic Flu",
          display: "Pandemic Flu complaint",
          questionDisplay: "Chief complaint of Pandemic Flu",
          gotoProtocol: 36,
        },
      ],
    },

    {
      text: <p>Is **pronoun** in <b className="font-bold">cardiac or respiratory arrest</b> or has been <b className="font-bold">recently resuscitated or defibrillated</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No recent arrest or resuscitation",
          questionDisplay: "**pronoun** is NOT in cardiac or respiratory arrest or has NOT been recently resuscitated or defibrillated",
          continue: true,
        },
        {
          answer: "Yes - Arrest",
          display: "Cardiac or respiratory arrest",
          questionDisplay: "**pronoun** is in cardiac or respiratory arrest",
          updateCode: "33D01",
          continue: true,
          send: true
        },
        {
          answer: "Yes - Resuscitated/Defibrillated",
          display: "Recently resuscitated or defibrillated",
          questionDisplay: "**pronoun** has been recently resuscitated or defibrillated",
          updateCode: "33D02",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if arrest or resuscitation",
          questionDisplay: "Unk if **pronoun** is in cardiac or respiratory arrest or has been recently resuscitated or defibrillated",
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
      text: <p>Is this a <b className="font-bold">sudden</b> or <b className="font-bold">unexpected change</b> in their <b className="font-bold">usual</b> condition?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const alertStatus = answers.find((a) => a.question === "Is **pronoun** completely alert (responding appropriately)?")?.answer;
        return alertStatus === "No"
      },
      preRenderLogic: "the patient is not alert",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Sudden change in condition",
          questionDisplay: "Sudden or unexpected change in usual condition",
          updateCode: "33C01",
          continue: true,
          send: true
        },
        {
          answer: "No",
          display: "Not a sudden change in condition",
          questionDisplay: "Not a sudden or unexpected change in usual condition",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if sudden change in condition",
          questionDisplay: "Unk if sudden or unexpected change in usual condition",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is **pronoun** <b className="font-bold">breathing normally</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing normally",
          continue: true,
        },
        {
          answer: "No",
          display: "NOT breathing nlly",
          questionDisplay: "**pronoun** is NOT breathing normally",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if breathing nlly",
          questionDisplay: "Unk if **pronoun** is breathing normally",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is this a <b className="font-bold">sudden</b> or <b className="font-bold">unexpected change</b> in their <b className="font-bold">usual</b> condition?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const breathingStatus = answers.find((a) => a.question === "Is **pronoun** breathing normally?")?.answer;
        return breathingStatus === "No";
      },
      preRenderLogic: "the patient is not breathing normally",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Sudden change in condition",
          questionDisplay: "Sudden or unexpected change in usual condition",
          updateCode: "33C02",
          continue: true,
          send: true
        },
        {
          answer: "No",
          display: "Not a sudden change in condition",
          questionDisplay: "Not a sudden or unexpected change in usual condition",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if sudden change in condition",
          questionDisplay: "Unk if sudden or unexpected change in usual condition",
          continue: true,
        }
      ]
    },

    {
      text: <p>Does **pronoun** have any <b className="font-bold">significant bleeding</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No significant bleeding",
          questionDisplay: "**pronoun** has no significant bleeding",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Significant bleeding",
          questionDisplay: "**pronoun** has significant bleeding",
          updateCode: "23C03",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if significant bleeding",
          questionDisplay: "Unk if **pronoun** has significant bleeding",
          continue: true,
        }
      ]
    },

    {
      text: <p>Does **pronoun** have any <b className="font-bold">shock symptoms</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No shock symptoms",
          questionDisplay: "**pronoun** has no shock symptoms",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Shock symptoms",
          questionDisplay: "**pronoun** has shock symptoms",
          updateCode: "23C04",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if shock symptoms",
          questionDisplay: "Unk if **pronoun** has shock symptoms",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is **pronoun** in <b className="font-bold">severe pain</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No severe pain",
          questionDisplay: "**pronoun** is not in severe pain",
          continue: true,
        },
        {
          answer: "Yes - chest pain",
          display: "Severe chest pain",
          questionDisplay: "**pronoun** is in severe chest pain",
          updateCode: "33C06",
          continue: true,
          send: true
        },
        {
          answer: "Yes",
          display: "Severe pain",
          questionDisplay: "**pronoun** is in severe pain",
          updateCode: "33C06",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if severe pain",
          questionDisplay: "Unk if **pronoun** is in severe pain",
          continue: true,
        }
      ]
    },

    {
      text: <p>Could this be an <b className="font-bold">MI</b> (heart attack)?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const severePainStatus = answers.find((a) => a.question === "Is **pronoun** in severe pain?")?.answer;
        return severePainStatus === "Yes - chest pain";
      },
      preRenderLogic: "the patient is in severe chest pain",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No MI suspected",
          questionDisplay: "No MI (heart attack) suspected",
          continue: true,
        },
        {
          answer: "Yes",
          display: "MI suspected",
          questionDisplay: "MI (heart attack) suspected",
          updateCode: "33C05",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if MI suspected",
          questionDisplay: "Unk if MI (heart attack) is suspected",
          continue: true,
        }
      ]
    },

    {
      text: <p>Will any <b className="font-bold">special equipment</b> be necessary?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No special equipment needed",
          questionDisplay: "No special equipment needed for transport",
          continue: true,
        },
        {
          answer: "Yes (input):",
          display: "Special equipment needed: {input}",
          questionDisplay: "Special equipment needed for transport: {input}",
          continue: true,
          input: true
        },
        {
          answer: "Unknown",
          display: "Unk if special equipment needed",
          questionDisplay: "Unk if special equipment is needed for transport",
          continue: true,
        }
      ]
    },

    {
      text: <p>Will <b className="font-bold">additional personnel</b> be necessary?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No extra personnel needed",
          questionDisplay: "No extra personnel needed for transport",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Extra personnel needed",
          questionDisplay: "Extra personnel needed for transport",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if extra personnel needed",
          questionDisplay: "Unk if extra personnel are needed for transport",
          continue: true,
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of personnel is required?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const extraPersonnelStatus = answers.find((a) => a.question === "Will additional personnel be necessary?")?.answer;
        return extraPersonnelStatus === "Yes";
      },
      preRenderLogic: "extra personnel are needed for transport",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "General",
          display: "General personnel needed",
          questionDisplay: "General personnel needed for transport",
          continue: true,
        },
        {
          answer: "EMT-B",
          display: "EMT-B personnel needed",
          questionDisplay: "EMT-B personnel needed for transport",
          continue: true,
        },
        {
          answer: "EMT-P",
          display: "EMT-P personnel needed",
          questionDisplay: "EMT-P personnel needed for transport",
          continue: true,
        },
        {
          answer: "Critical care",
          display: "Critical care personnel needed",
          questionDisplay: "Critical care personnel needed for transport",
          continue: true,
        },
        {
          answer: "Helicopter",
          display: "Helicopter personnel needed",
          questionDisplay: "Helicopter personnel needed for transport",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Other personnel needed: {input}",
          questionDisplay: "Other personnel needed for transport: {input}",
          continue: true,
          input: true
        },
        {
          answer: "Unknown",
          display: "Unk if personnel type needed",
          questionDisplay: "Unk what type of personnel is needed for transport",
          continue: true,
        }
      ]
    },

    {
      text: <p>What's the <b className="font-bold">name</b> of the referring <b className="font-bold">doctor</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Name:",
          display: "Referring doctor name: {input}",
          questionDisplay: "Name of the referring doctor: {input}",
          continue: true,
          input: true
        },
        {
          answer: "Unknown",
          display: "Unk referring doctor name",
          questionDisplay: "Unk the name of the referring doctor",
          continue: true,
        }
      ]
    },

    {
      text: <p>What' the <b className="font-bold">name</b> of the referring <b className="font-bold">facility</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Woolward Hospital",
          display: "Referring facility: Woolward Hospital",
          questionDisplay: "Name of the referring facility: Woolward Hospital",
          continue: true,
        },
        {
          answer: "Sorrow Health Center",
          display: "Referring facility: Sorrow Health Center",
          questionDisplay: "Name of the referring facility: Sorrow Health Center",
          continue: true,
        },
        {
          answer: "The Bay Care Medical Center",
          display: "Referring facility: The Bay Care Medical Center",
          questionDisplay: "Name of the referring facility: The Bay Care Medical Center",
          continue: true,
        },
        {
          answer: "Sandy Shores Medical Center",
          display: "Referring facility: Sandy Shores Medical Center",
          questionDisplay: "Name of the referring facility: Sandy Shores Medical Center",
          continue: true,
        },
        {
          answer: "Mount Zonah Medical Center",
          display: "Referring facility: Mount Zonah Medical Center",
          questionDisplay: "Name of the referring facility: Mount Zonah Medical Center",
          continue: true,
        },
        {
          answer: "Portola Trinity Medical Center",
          display: "Referring facility: Portola Trinity Medical Center",
          questionDisplay: "Name of the referring facility: Portola Trinity Medical Center",
          continue: true,
        },
        {
          answer: "Pillbox Hill Medical Center",
          display: "Referring facility: Pillbox Hill Medical Center",
          questionDisplay: "Name of the referring facility: Pillbox Hill Medical Center",
          continue: true,
        },
        {
          answer: "Central Los Santos Medical Center",
          display: "Referring facility: Central Los Santos Medical Center",
          questionDisplay: "Name of the referring facility: Central Los Santos Medical Center",
          continue: true,
        },
        {
          answer: "St. Fiacre Hospital",
          display: "Referring facility: St. Fiacre Hospital",
          questionDisplay: "Name of the referring facility: St. Fiacre Hospital",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Referring facility: {input}",
          questionDisplay: "Name of the referring facility: {input}",
          continue: true,
          input: true
        },
        {
          answer: "Unknown",
          display: "Unk referring facility",
          questionDisplay: "Unk the name of the referring facility",
          continue: true,
        }
      ]
    },

    {
      text: <p>What is the <b className="font-bold">destination</b> facility?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Woolward Hospital",
          display: "Receiving facility: Woolward Hospital",
          questionDisplay: "Name of the receiving facility: Woolward Hospital",
          continue: true,
        },
        {
          answer: "Sorrow Health Center",
          display: "Receiving facility: Sorrow Health Center",
          questionDisplay: "Name of the receiving facility: Sorrow Health Center",
          continue: true,
        },
        {
          answer: "The Bay Care Medical Center",
          display: "Receiving facility: The Bay Care Medical Center",
          questionDisplay: "Name of the receiving facility: The Bay Care Medical Center",
          continue: true,
        },
        {
          answer: "Sandy Shores Medical Center",
          display: "Receiving facility: Sandy Shores Medical Center",
          questionDisplay: "Name of the receiving facility: Sandy Shores Medical Center",
          continue: true,
        },
        {
          answer: "Mount Zonah Medical Center",
          display: "Receiving facility: Mount Zonah Medical Center",
          questionDisplay: "Name of the receiving facility: Mount Zonah Medical Center",
          continue: true,
        },
        {
          answer: "Portola Trinity Medical Center",
          display: "Receiving facility: Portola Trinity Medical Center",
          questionDisplay: "Name of the receiving facility: Portola Trinity Medical Center",
          continue: true,
        },
        {
          answer: "Pillbox Hill Medical Center",
          display: "Receiving facility: Pillbox Hill Medical Center",
          questionDisplay: "Name of the receiving facility: Pillbox Hill Medical Center",
          continue: true,
        },
        {
          answer: "Central Los Santos Medical Center",
          display: "Receiving facility: Central Los Santos Medical Center",
          questionDisplay: "Name of the receiving facility: Central Los Santos Medical Center",
          continue: true,
        },
        {
          answer: "St. Fiacre Hospital",
          display: "Receiving facility: St. Fiacre Hospital",
          questionDisplay: "Name of the receiving facility: St. Fiacre Hospital",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Receiving facility: {input}",
          questionDisplay: "Name of the receiving facility: {input}",
          continue: true,
          input: true
        },
        {
          answer: "Unknown",
          display: "Unk Receiving facility",
          questionDisplay: "Unk the name of the Receiving facility",
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
          code: "33A01",
          text: "Acuity Level I",
          recResponse: 201,
        },
        {
          code: "33A02",
          text: "Acuity Level II",
          recResponse: 201,
        },
        {
          code: "33A03",
          text: "Acuity Level III",
          recResponse: 201,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "33C00",
          text: "ALS Override (Charlie)",
          recResponse: 202,
        },
        {
          code: "33C01",
          text: "Not Alert (Acute Change)",
          recResponse: 202,
        },
        {
          code: "33C02",
          text: "Abnormal Breathing (Acute Onset)",
          recResponse: 202,
        },
        {
          code: "23C03",
          text: "Significant Hemorrhage or Shock",
          recResponse: 202,
        },
        {
          code: "33C04",
          text: "Possibly Acute Heart Problems or MI",
          recResponse: 202,
        },
        {
          code: "33C05",
          text: "Acute Severe Pain",
          recResponse: 202,
        },
        {
          code: "33C06",
          text: "Emergency Response Requested",
          recResponse: 202,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "33D00",
          text: "ALS Override (Delta)",
          recResponse: 203,
        },
        {
          code: "33D01",
          text: "Suspected Cardiac or Respiratory Arrest",
          recResponse: 203,
        },
        {
          code: "33D02",
          text: "Just Resuscitated and/or Defibrillated",
          recResponse: 203,
        },
      ],
    },
  ],
};
