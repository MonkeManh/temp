import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const OVERDOSE_POISONING: IEMSComplaint = {
  protocol: 23,
  name: "Overdose / Poisoning (Ingestion)",
  shortName: "Overdose/Poisoning",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 129,
  defaultCode: "23A01",
  preSend: true,
  questions: [
    {
      text: <p className="text-red-400">Was this <b className="font-bold">accidental</b> or <b className="font-bold">intentional</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Accidental",
          display: "Accidental overdose/poisoning",
          questionDisplay: "This was an accidental overdose/poisoning",
          updateSuffix: "A",
          continue: true,
        },
        {
          answer: "Intentional - recreational",
          display: "Intentional - recreational overdose/poisoning",
          questionDisplay: "This was an intentional overdose/poisoning - recreational",
          continue: true,
        },
        {
          answer: "Intentional",
          display: "Intentional overdose/poisoning",
          questionDisplay: "This was an intentional overdose/poisoning",
          updateSuffix: "I",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unknown if accidental or intentional",
          questionDisplay: "It is unknown if this was an accidental or intentional overdose/poisoning",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Is **pronoun** violent?</p>,
      questionType: "select",
      preRenderInstructions: (patient) => {
        return patient.patientConsciousness !== "no" && patient.patientAge >= 8 && patient.ageUnit === "year"
      },
      preRenderLogic: "pt is conscious and age >= 8 years",
      preRenderDependencies: ["patient"],
      answers: [
        {
          answer: "No",
          display: "Not violent",
          questionDisplay: "**pronoun** is not violent",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Violent",
          questionDisplay: "**pronoun** is violent",
          updateSuffix: "V",
          setSceneSecure: false,
        },
        {
          answer: "Unknown",
          display: "Unk if violent",
          questionDisplay: "It is unknown if **pronoun** is violent",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Are <b className="font-bold">any weapons involved</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No wpns",
          questionDisplay: "There are no weapons involved",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Wpns involved",
          questionDisplay: "There are weapons involved",
          updateSuffix: "W",
          continue: true,
          setSceneSecure: false,
        },
        {
          answer: "Unknown",
          display: "Unk if wpns",
          questionDisplay: "It is unknown if there are weapons involved",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">What <b className="font-bold">type</b> of <b className="font-bold">weapon</b> is it?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].display;
        return lastAnswer === "Wpns involved";
      },
      preRenderLogic: "weapons involved",
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
      text: <p>Is **pronoun <b className="font-bold">changing color</b>?</p>,
      questionType: "select",
      preRenderInstructions: (patient) => {
        return patient.patientProximity !== "first";
      },
      preRenderLogic: "pt is not caller",
      preRenderDependencies: ["proximity"],
      answers: [
         {
          answer: "No",
          display: "Not changing color",
          questionDisplay: "**pronoun** is not changing color",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Changing color",
          questionDisplay: "**pronoun** is changing color",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if changing color",
          questionDisplay: "Unk if **pronoun** is changing color",
          continue: true,
        },
      ]
    },

    {
      text: <p><b className="font-bold">Describe</b> the color change.</p>,
      questionType: 'select',
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].display;
        return lastAnswer === "Changing color";
      },
      preRenderLogic: "changing color",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Ashen",
          display: "Ashen color rptd",
          questionDisplay: "**pronoun** has ashen color",
          updateCode: "23D03",
          continue: true,
          send: true,
        },
        {
          answer: "Gray",
          display: "Gray color rptd",
          questionDisplay: "**pronoun** has gray color",
          updateCode: "23D03",
          continue: true,
          send: true,
        },
        {
          answer: "Blue",
          display: "Blue color rptd",
          questionDisplay: "**pronoun** has blue color",
          updateCode: "23D03",
          continue: true,
          send: true,
        },
        {
          answer: "Cyanotic",
          display: "Cyanotic color rptd",
          questionDisplay: "**pronoun** has cyanotic color",
          updateCode: "23D03",
          continue: true,
          send: true,
        },
        {
          answer: "Purple",
          display: "Purple color rptd",
          questionDisplay: "**pronoun** has purple color",
          updateCode: "23D03",
          continue: true,
          send: true,
        },
        {
          answer: "Mottled",
          display: "Mottled color rptd",
          questionDisplay: "**pronoun** has mottled color",
          updateCode: "23D03",
          continue: true,
          send: true,
        },
        {
          answer: "Pale",
          display: "Pale color rptd",
          questionDisplay: "**pronoun** has pale color",
          continue: true,
        },
        {
          answer: "Pink",
          display: "Pink color rptd",
          questionDisplay: "**pronoun** has pink color",
          continue: true,
        },
        {
          answer: "Red",
          display: "Red color rptd",
          questionDisplay: "**pronoun** has red color",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Color is {input}",
          questionDisplay: "**pronoun** has color of {input}",
          input: true,
          continue: true,
        },
      ],
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
          updateCode: "23C01",
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
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay:
            "**pronoun** is breathing normally",
          continue: true,
        },
        {
          answer: "No",
          display: "NOT breathing nlly",
          questionDisplay:
            "**pronoun** is NOT breathing normally",
          updateCode: "23C02",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if breathing nlly",
          questionDisplay:
            "Unk if **pronoun** is breathing normally",
          continue: true,
        }
      ]
    },

    {
      text: <p><b className="font-bold">What</b> did **pronoun** <b className="font-bold">take</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Narcotics (Heroin, Morphine, Methadone, Oxycontin):",
          display: "Took narcotics: {input}",
          questionDisplay: "**pronoun** took narcotics (Heroin, Morphine, Methadone, Oxycontin): {input}",
          updateCode: "23C05",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Antidepressants (Tricyclic):",
          display: "Took antidepressants: {input}",
          questionDisplay: "**pronoun** took antidepressants (Tricyclic): {input}",
          updateCode: "23C06",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Cocaine, Methamphetamine (or Derivative):",
          display: "Took cocaine/methamphetamine: {input}",
          questionDisplay: "**pronoun** took cocaine, methamphetamine (or derivative): {input}",
          updateCode: "23C04",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Acid or Alkali (Lye):",
          display: "Took acid/alkali (Lye): {input}",
          questionDisplay: "**pronoun** took acid or alkali (Lye): {input}",
          updateCode: "23C07",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Cannabis",
          display: "Took cannabis",
          questionDisplay: "**pronoun** took cannabis",
          updateCode: "23B01",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Other:",
          display: "Took other: {input}",
          questionDisplay: "**pronoun** took other: {input}",
          updateCode: "23C08",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk what taken",
          questionDisplay: "Unk what **pronoun** took",
          updateCode: "23C07",
          continue: true
        }
      ]
    },

    {
      text: <p><b className="font-bold">When</b> did **pronoun** take it?</p>,
      questionType: "select",
      preRenderInstructions: (patient) => {
        return patient.patientConsciousness !== "no";
      },
      preRenderLogic: "pt is conscious on case entry",
      preRenderDependencies: ["patient"],
      answers: [
        {
          answer: "Time:",
          display: "Took at {input}",
          questionDisplay: "**pronoun** took it at {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk when took",
          questionDisplay: "Unk when **pronoun** took it",
          continue: true
        }
      ]
    },
  ],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "23O01",
          text: "Poisoning (w/o Priority Symptoms)",
          recResponse: 138,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 138,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 138,
            },
          ],
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "23A01",
          text: "Alert",
          recResponse: 129,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 129,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 129,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 129,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 129,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 129,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 130,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 130,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 130,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 131,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 131,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 131,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 131,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 131,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 131,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "23B00",
          text: "BLS Override (Bravo)",
          recResponse: 129,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 129,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 130,
            },
          ],
        },
        {
          code: "23B01",
          text: "Overdose (w/o Priority Symptoms)",
          recResponse: 129,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 129,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 129,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 129,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 129,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 129,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 130,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 130,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 130,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 131,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 131,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 131,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 131,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 131,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 131,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "23C00",
          text: "ALS Override (Charlie)",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 59,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 59,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 59,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 59,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 51,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 51,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
        {
          code: "23C01",
          text: "Not Alert",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 59,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 59,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 59,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 59,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 51,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 51,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
        {
          code: "23C02",
          text: "Abnormal Breathing",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 59,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 59,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 59,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 59,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 51,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 51,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
        {
          code: "23C03",
          text: "Antidepressants (Tricyclic)",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
        {
          code: "23C04",
          text: "Cocaine, Methamphetamine (or Derivative)",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
        {
          code: "23C05",
          text: "Narcotics (Heroin, Morphine, Methadone, Oxycontin)",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 59,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 59,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 59,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 59,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 51,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 51,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
        {
          code: "23C06",
          text: "Acid or Alkali (Lye)",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
        {
          code: "23C07",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 129,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 129,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 129,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 129,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 129,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 129,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 130,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 130,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 130,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 131,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 131,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 131,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 131,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 131,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 131,
            },
          ],
        },
        {
          code: "23C08",
          text: "Poison Control Request for Response",
          recResponse: 129,
          subCodes: [
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 129,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 129,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 131,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 131,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 131,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 131,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "23D00",
          text: "ALS Override (Delta)",
          recResponse: 133,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 133,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 133,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 133,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 133,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 133,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 134,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 134,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 134,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 135,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 135,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 135,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 135,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 135,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 135,
            },
          ],
        },
        {
          code: "23D01",
          text: "Arrest",
          recResponse: 136,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 136,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 136,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 136,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 136,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 136,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 136,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 136,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 137,
            },
          ],
        },
        {
          code: "23D02",
          text: "Unconscious",
          recResponse: 59,
          notConscious: true,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 59,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 59,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 59,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 59,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 51,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 51,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
          ],
        },
        {
          code: "23D03",
          text: "Changing Color",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 59,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 59,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 59,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 59,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 51,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 51,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "23E00",
          text: "ALS Override (Echo)",
          recResponse: 133,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 133,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 133,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 133,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 133,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 133,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 134,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 134,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 134,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 135,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 135,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 135,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 135,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 135,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 135,
            },
          ],
        },
        {
          code: "23E01",
          text: "Obvious Arrest",
          recResponse: 136,
          notBreathing: true,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 136,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 136,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 136,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 136,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 136,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 136,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 136,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 137,
            },
          ],
        },
      ],
    },
  ],
};
