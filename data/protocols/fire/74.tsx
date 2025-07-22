import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const SUSPICIOUS_PACKAGE: IFireComplaint = {
  protocol: 74,
  name: "Suspicious Package (Letter, Item, Substance) / Explosives",
  shortName: "Suspicious Package/Explosives",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: true },
  ],
  defaultPriority: "B",
  defaultPlan: 468,
  defaultCode: "74B03",
  questions: [
    {
      text: (
        <p className="text-blue-400">
          Is this a <b className="font-bold">suspicious package</b>,{" "}
          <b className="font-bold">confirmed explosives</b>, or{" "}
          <b className="font-bold">military ordianance</b> situation?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Suspicious package",
          display: "Suspicious package rptd",
          questionDisplay: "This is a suspicious package situation.",
          updateCode: "74C02",
          continue: true,
        },
        {
          answer: "Explosives",
          display: "Explosives rptd",
          questionDisplay: "This is an explosives situation.",
          updateCode: "74B02",
          continue: true,
        },
        {
          answer: "Military ordnance",
          display: "Military ordnance rptd",
          questionDisplay: "This is a military ordnance situation.",
          updateCode: "74B01",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk situation",
          questionDisplay: "This is an unknown situation.",
          updateCode: "74B03",
          continue: true,
        },
      ],
    },

    // Suspicious package questions
    {
      text: <p className="text-red-400">Do you see anything <b className="font-bold">leaking</b> from the package?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const typeOfSituation = answers?.find((a) => a.question === "Is this a suspicious package, confirmed explosives, or military ordianance situation?")?.answer;
        return typeOfSituation === "Suspicious package"
      },
      preRenderLogic: "this is a suspicious package situation",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No leakage",
          questionDisplay: "There is no leakage from the package.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Leakage observed",
          questionDisplay: "There is leakage from the package.",
          updateCode: "74C01",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if leakage",
          questionDisplay: "It is unknown if there is leakage from the package.",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Is anyone <b className="font-bold">sick</b> or <b className="font-bold">injured</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const typeOfSituation = answers?.find((a) => a.question === "Is this a suspicious package, confirmed explosives, or military ordianance situation?")?.answer;
        return typeOfSituation === "Suspicious package"
      },
      preRenderLogic: "this is a suspicious package situation",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No sick/inj'd persons",
          questionDisplay: "No one is sick or injured.",
          continue: true,
          send: true,
        },
        {
          answer: "Yes",
          display: "Sick/inj'd person(s) rptd",
          questionDisplay: "There are sick or injured persons.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if sick/inj'd persons",
          questionDisplay: "It is unknown if there are sick or injured persons.",
          continue: true,
        }
      ]
    },

    {
      text: <p>How <b className="font-bold">many</b> people are <b className="font-bold">sick</b> or <b className="font-bold">injured</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const typeOfSituation = answers?.find((a) => a.question === "Is this a suspicious package, confirmed explosives, or military ordianance situation?")?.answer;
        const sickInjured = answers?.find((a) => a.question === "Is anyone sick or injured?")?.answer;
        return typeOfSituation === "Suspicious package" && sickInjured === "Yes"
      },
      preRenderLogic: "this is a suspicious package situation and there are sick or injured persons",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single sick/inj'd person",
          questionDisplay: "There is a single sick or injured person.",
          updateCode: "74D03",
          preRenderInstructions: (answers) => {
            const leakage = answers?.find((a) => a.question === "Do you see anything leaking from the package?")?.answer;
            return leakage !== "Yes"
          },
          preRenderLogic: "there is no leakage from the package",
          preRenderDependencies: ["answers"],
          continue: true,
          send: true
        },
        {
          answer: "Single person",
          display: "Single sick/inj'd person",
          questionDisplay: "There is a single sick or injured person.",
          updateCode: "74D01",
          preRenderInstructions: (answers) => {
            const leakage = answers?.find((a) => a.question === "Do you see anything leaking from the package?")?.answer;
            return leakage === "Yes"
          },
          preRenderLogic: "there is leakage from the package",
          preRenderDependencies: ["answers"],
          continue: true,
          send: true
        },
        {
          answer: "Multiple (input number):",
          display: "{input} sick/inj'd persons",
          questionDisplay: "There are multiple sick or injured persons.",
          updateCode: "74D04",
          preRenderInstructions: (answers) => {
            const leakage = answers?.find((a) => a.question === "Do you see anything leaking from the package?")?.answer;
            return leakage !== "Yes"
          },
          preRenderLogic: "there is no leakage from the package",
          preRenderDependencies: ["answers"],
          input: true,
          continue: true,
          send: true
        },
        {
          answer: "Multiple (input number):",
          display: "{input} sick/inj'd persons",
          questionDisplay: "There are multiple sick or injured persons.",
          updateCode: "74D02",
          preRenderInstructions: (answers) => {
            const leakage = answers?.find((a) => a.question === "Do you see anything leaking from the package?")?.answer;
            return leakage === "Yes"
          },
          preRenderLogic: "there is leakage from the package",
          preRenderDependencies: ["answers"],
          input: true,
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk num of sick/inj'd persons",
          questionDisplay: "It is unknown how many sick or injured persons there are.",
          updateCode: "74D03",
          preRenderInstructions: (answers) => {
            const leakage = answers?.find((a) => a.question === "Do you see anything leaking from the package?")?.answer;
            return leakage !== "Yes"
          },
          preRenderLogic: "there is no leakage from the package",
          preRenderDependencies: ["answers"],
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk num of sick/inj'd persons",
          questionDisplay: "It is unknown how many sick or injured persons there are.",
          updateCode: "74D01",
          preRenderInstructions: (answers) => {
            const leakage = answers?.find((a) => a.question === "Do you see anything leaking from the package?")?.answer;
            return leakage === "Yes"
          },
          preRenderLogic: "there is leakage from the package",
          preRenderDependencies: ["answers"],
          continue: true,
          send: true
        },
      ]
    },

    // Military ordnance / explosives questions
    {
      text: <p className="text-red-400">Do you see any <b className="font-bold">markings</b> on it?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const typeOfSituation = answers?.find((a) => a.question === "Is this a suspicious package, confirmed explosives, or military ordianance situation?")?.answer;
        return typeOfSituation === "Military ordnance" || typeOfSituation === "Explosives"
      },
      preRenderLogic: "this is a military ordnance or explosives situation",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No markings",
          questionDisplay: "There are no markings on the item.",
          continue: true,
        },
        {
          answer: "Yes (specify):",
          display: "Markings rptd: {input}",
          questionDisplay: "There are markings on the item: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk if markings",
          questionDisplay: "It is unknown if there are markings on the item.",
          continue: true,
        }
      ]
    },

    {
      text: <p><span className="text-blue-400">(Not obvious or already stated)</span> <b className="font-bold">What</b> makes you <b className="font-bold">think</b> it's an <b className="font-bold">explosive</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const typeOfSituation = answers?.find((a) => a.question === "Is this a suspicious package, confirmed explosives, or military ordianance situation?")?.answer;
        return typeOfSituation === "Explosives"
      },
      preRenderLogic: "this is an explosives situation",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Reason:",
          display: "Description given: {input}",
          questionDisplay: "The caller states the reason it is an explosive is: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk why caller thinks it's explosive",
          questionDisplay: "It is unknown why the caller thinks it is an explosive.",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Is anyone <b className="font-bold">injured</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const typeOfSituation = answers?.find((a) => a.question === "Is this a suspicious package, confirmed explosives, or military ordianance situation?")?.answer;
        return typeOfSituation === "Military ordnance"
      },
      preRenderLogic: "this is a military ordnance situation",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No injs rptd",
          questionDisplay: "No one is injured.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Injs rptd",
          questionDisplay: "There are injured persons.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if injs",
          questionDisplay: "It is unknown if there are injured persons.",
          continue: true,
        }
      ]
    },

    {
      text: <p>How <b className="font-bold">many</b> people are <b className="font-bold">injured</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const typeOfSituation = answers?.find((a) => a.question === "Is this a suspicious package, confirmed explosives, or military ordianance situation?")?.answer;
        const injured = answers?.find((a) => a.question === "Is anyone injured?")?.answer;
        return typeOfSituation === "Military ordnance" && injured === "Yes"
      },
      preRenderLogic: "this is a military ordnance situation and there are injured persons",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single inj'd person",
          questionDisplay: "There is a single injured person.",
          updateCode: "74D05",
          continue: true,
          send: true
        },
        {
          answer: "Multiple (input number):",
          display: "{input} inj'd persons",
          questionDisplay: "There are multiple injured persons.",
          updateCode: "74D06",
          input: true,
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk num of inj'd persons",
          questionDisplay: "It is unknown how many injured persons there are.",
          updateCode: "74D05",
          continue: true,
          send: true
        },
      ]
    },

    {
      text: <p><b className="font-bold">Where</b> is the <b className="font-bold">item</b> located?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Indoors",
          display: "Item is inside structure",
          questionDisplay: "The item is located inside a structure.",
          continue: true,
        },
        {
          answer: "Outdoors",
          display: "Item is outside",
          questionDisplay: "The item is located outside.",
          updateSuffix: "O",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk where item is located",
          questionDisplay: "It is unknown where the item is located.",
          continue: true,
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of structure is involved?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const location = answers?.find((a) => a.question === "Where is the item located?")?.answer;
        return location === "Indoors"
      },
      preRenderLogic: "the item is located inside a structure",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "HIGH LIFE HAZARD",
          display: "HIGH LIFE HAZARD bldg",
          questionDisplay: "The item is located inside a high life hazard building.",
          updateSuffix: "H",
          continue: true,
        },
        {
          answer: "HIGH RISE",
          display: "HIGH RISE bldg",
          questionDisplay: "The item is located inside a high rise building.",
          updateSuffix: "H",
          continue: true,
        },
        {
          answer: "Commercial/industrial building",
          display: "Commercial/industrial bldg",
          questionDisplay: "The item is located inside a commercial or industrial building.",
          updateSuffix: "C",
          continue: true,
        },
        {
          answer: "Government building",
          display: "Govt building",
          questionDisplay: "The item is located inside a government building.",
          updateSuffix: "G",
          continue: true,
        },
        {
          answer: "Residential building",
          display: "Residential bldg",
          questionDisplay: "The item is located inside a residential building.",
          updateSuffix: "R",
          continue: true,
        },
        {
          answer: "Non-dwelling building/structure:",
          display: "Non-dwelling bldg/structure: {input}",
          questionDisplay: "The item is located inside a non-dwelling building or structure: {input}",
          updateSuffix: "N",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk type of structure",
          questionDisplay: "It is unknown what type of structure the item is located in.",
          updateSuffix: "N",
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
          code: "74B01",
          text: "Military Ordnance",
          recResponse: 467,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 467,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 467,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 467,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 467,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 467,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 467,
            },
          ],
        },
        {
          code: "74B02",
          text: "Explosives",
          recResponse: 468,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 468,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 468,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 468,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 468,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 468,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 468,
            },
          ],
        },
        {
          code: "74B03",
          text: "Unkn Situation (Investigation)",
          recResponse: 468,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 468,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 468,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 468,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 468,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 468,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 468,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "74C00",
          text: "Override (Charlie)",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74C01",
          text: "Suspicious Package w/ Leakage/Residue",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74C02",
          text: "Suspicious Package",
          recResponse: 468,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 468,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 468,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 468,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 468,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 468,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 468,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "74D00",
          text: "Override (Delta)",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74D01",
          text: "Suspicious Package w/ Leakage/Residue & Single Sick/Injured Person",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74D02",
          text: "Suspicious Package w/ Leakage/Residue & Mult Sick/Injured Person",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74D03",
          text: "Suspicious Package w/ Single Sick/Injured Person",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74D04",
          text: "Suspicious Package w/ Mult Sick/Injured Person",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74D05",
          text: "Military Ordinance/Explosives w/ Single Sick/Injured Person",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
        {
          code: "74D06",
          text: "Military Ordinance/Explosives w/ Mult Sick/Injured Person",
          recResponse: 469,
          subCodes: [
            {
              suffix: "C",
              text: "Comm/Ind Building",
              recResponse: 469,
            },
            {
              suffix: "G",
              text: "Government Building",
              recResponse: 469,
            },
            {
              suffix: "H",
              text: "High Life Hazard/High Rise",
              recResponse: 469,
            },
            {
              suffix: "N",
              text: "Non-Dwelling Building/Structure",
              recResponse: 469,
            },
            {
              suffix: "O",
              text: "Open Area",
              recResponse: 469,
            },
            {
              suffix: "R",
              text: "Residential Building",
              recResponse: 469,
            },
          ],
        },
      ],
    },
  ],
};
