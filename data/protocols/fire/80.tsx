import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const OUTSIDE_TANK_FIRE: IFireComplaint = {
  protocol: 80,
  name: "Outside Tank Fire",
  shortName: "Outside Tank Fire",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "C",
  defaultPlan: 550,
  defaultCode: "80C05",
  questions: [
    {
      text: <p className="text-red-400">Is the fire inside?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Fire is outside",
          questionDisplay: "The fire is outside",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Fire is inside",
          questionDisplay: "The fire is inside",
          gotoProtocol: 69,
        },
        {
          answer: "Unknown",
          display: "Unk if fire is inside",
          questionDisplay: "Unknown if the fire is inside",
          updateCode: "80C05",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-blue-400">
          Is this at a <b className="font-bold">refinery</b> or{" "}
          <b className="font-bold">tank farm</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Not a refinery/tank farm",
          questionDisplay: "This is not a refinery or tank farm",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Refinery/tank farm",
          questionDisplay: "This is a refinery or tank farm",
          updateCode: "80D04",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if refinery/tank farm",
          questionDisplay: "Unknown if this is a refinery or tank farm",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-blue-400">
          What <b className="font-bold">party</b> is the caller?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "First (1st) Party",
          display: "1st pty caller",
          questionDisplay: "The caller is the 1st party",
          continue: true,
        },
        {
          answer: "Second (2nd) Party",
          display: "2nd pty caller",
          questionDisplay: "The caller is the 2nd party",
          continue: true,
        },
        {
          answer: "Third (3rd) Party",
          display: "3rd pty caller",
          questionDisplay: "The caller is the 3rd party",
          continue: true,
        },
        {
          answer: "Fourth (4th) Party",
          display: "4th pty caller",
          questionDisplay: "The caller is the 4th party",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk pty caller",
          questionDisplay: "Unknown what party the caller is",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(Not obvious)</span> Is the fire still{" "}
          <b className="font-bold">active</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Fire rptd",
          questionDisplay: "The fire is still active",
          continue: true,
        },
        {
          answer: "No",
          display: "Fire out",
          questionDisplay: "The fire is out",
          dependency: (answers) => {
            const partyAnswer = answers?.find(
              (a) => a.question === "What party is the caller?"
            )?.answer;
            if (
              partyAnswer === "Third (3rd) Party" ||
              partyAnswer === "Unknown"
            ) {
              return { code: "80C05", send: true };
            }
          },
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk status of fire",
          questionDisplay: "It is unknown if the fire is still active",
          updateCode: "80C05",
          continue: true,
        },
      ],
    },

    // Fire still active
    {
      text: (
        <p className="text-red-400">
          Is anyone <b className="font-bold">trapped</b> by the fire?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const fireActiveAnswer = answers?.find(
          (a) => a.question === "(Not obvious) Is the fire still active?"
        )?.answer;
        return fireActiveAnswer === "Yes";
      },
      preRenderLogic: "the fire is still active",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No one trapped",
          questionDisplay: "No one is trapped by the fire",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Someone trapped",
          questionDisplay: "Someone is trapped by the fire",
          updateSuffix: "T",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if anyone trapped",
          questionDisplay: "Unknown if anyone is trapped by the fire",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-400">
          <b className="font-bold">What</b> does the tank{" "}
          <b className="font-bold">hold</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const fireActiveAnswer = answers?.find(
          (a) => a.question === "(Not obvious) Is the fire still active?"
        )?.answer;
        return fireActiveAnswer === "Yes";
      },
      preRenderLogic: "the fire is still active",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Natural/LP Gas",
          display: "Tank holds natural/LP gas",
          questionDisplay: "The tank holds natural/LP gas",
          continue: true,
        },
        {
          answer: "Chemicals",
          display: "Tank holds chemicals",
          questionDisplay: "The tank holds chemicals",
          continue: true,
        },
        {
          answer: "Fuel",
          display: "Tank holds fuel",
          questionDisplay: "The tank holds fuel",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Tank holds {input}",
          questionDisplay: "The tank holds {input}",
          updateCode: "80C05",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk what tank holds",
          questionDisplay: "Unknown what the tank holds",
          updateCode: "80C05",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What is the <b className="font-bold">size</b> of the tank?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "<= 5 Gallons (20 Liters)",
          display: "Small tank (<= 5 gal/20L)",
          questionDisplay: "The tank is 5 gallons (20 liters) or less",
          preRenderInstructions: (answers) => {
            const fireActiveAnswer = answers?.find(
              (a) => a.question === "(Not obvious) Is the fire still active?"
            )?.answer;
            return fireActiveAnswer === "Yes";
          },
          preRenderLogic: "the fire is still active",
          preRenderDependencies: ["answers"],
          dependency: (answers) => {
            const contentsAnswer = answers?.find(
              (a) => a.question === "What does the tank hold?"
            )?.answer;
            if (contentsAnswer === "Natural/LP Gas") {
              return { code: "80B01", send: true };
            }
          },
          continue: true,
        },
        {
          answer: "> 5 Gallons and < 120 gallons",
          display: "Small tank (>5 gal & <120 gal)",
          questionDisplay:
            "The tank is greater than 5 gallons and less than 120 gallons",
          dependency: (answers) => {
            const contentsAnswer = answers?.find(
              (a) => a.question === "What does the tank hold?"
            )?.answer;
            const fireActiveAnswer = answers?.find(
              (a) => a.question === "(Not obvious) Is the fire still active?"
            )?.answer;
            const partyAnswer = answers?.find(
              (a) => a.question === "What party is the caller?"
            )?.answer;
            if (fireActiveAnswer === "Yes") {
              if (contentsAnswer === "Natural/LP Gas") {
                return { code: "80C01", send: true };
              } else if (contentsAnswer === "Chemicals") {
                return { code: "80C02", send: true };
              } else if (contentsAnswer === "Fuel") {
                return { code: "80C03", send: true };
              } else {
                return { code: "80C05", send: true };
              }
            } else if(fireActiveAnswer && partyAnswer !== "Third (3rd) Party" && partyAnswer !== "Unknown") {
              return { code: "80B02", send: true };
            } else {
              return { code: "80C05", send: true };
            }
          },
          continue: true,
        },
        {
          answer: ">= 120 Gallons",
          display: "Large tank (>= 120 gal)",
          questionDisplay: "The tank is 120 gallons or more",
          dependency: (answers) => {
            const contentsAnswer = answers?.find(
              (a) => a.question === "What does the tank hold?"
            )?.answer;
            const fireActiveAnswer = answers?.find(
              (a) => a.question === "(Not obvious) Is the fire still active?"
            )?.answer;
            const partyAnswer = answers?.find(
              (a) => a.question === "What party is the caller?"
            )?.answer;
            if (fireActiveAnswer === "Yes") {
              if (contentsAnswer === "Natural/LP Gas") {
                return { code: "80D01", send: true };
              } else if (contentsAnswer === "Chemicals") {
                return { code: "80D02", send: true };
              } else if (contentsAnswer === "Fuel") {
                return { code: "80D03", send: true };
              } else {
                return { code: "80C05", send: true };
              }
            } else if(fireActiveAnswer && partyAnswer !== "Third (3rd) Party" && partyAnswer !== "Unknown") {
              return { code: "80C04", send: true };
            } else {
              return { code: "80C05", send: true };
            }
          },
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk tank size",
          questionDisplay: "Unknown what the size of the tank is",
          updateCode: "80C05",
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: <p>Is anything <b className="font-bold">else</b> threatened?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const fireActiveAnswer = answers?.find(
          (a) => a.question === "(Not obvious) Is the fire still active?"
        )?.answer;

        const trappedAnswer = answers?.find(
          (a) => a.question === "Is anyone trapped by the fire?"
        )?.answer;
        return fireActiveAnswer === "Yes" && trappedAnswer === "No";
      },
      preRenderLogic: "the fire is still active and no one is trapped",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Animals",
          display: "Animals threatened",
          questionDisplay: "Animals are threatened by the fire",
          updateSuffix: "A",
          continue: true,
        },
        {
          answer: "Buildings (Non-Residential)",
          display: "Non-res bldgs threatened",
          questionDisplay: "Non-residential buildings are threatened by the fire",
          updateSuffix: "B",
          continue: true,
        },
        {
          answer: "Additional/Other Tanks",
          display: "Other tanks threatened",
          questionDisplay: "Additional or other tanks are threatened by the fire",
          updateSuffix: "D",
          continue: true,
        },
        {
          answer: "People",
          display: "People in danger",
          questionDisplay: "People are in danger from the fire",
          updateSuffix: "P",
          continue: true,
        },
        {
          answer: "Residential",
          display: "Res bldgs threatened",
          questionDisplay: "Residential buildings are threatened by the fire",
          updateSuffix: "R",
          continue: true,
        },
        {
          answer: "Vehicles",
          display: "Vehicles threatened",
          questionDisplay: "Vehicles are threatened by the fire",
          updateSuffix: "V",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Other threatened: {input}",
          questionDisplay: "Other threatened by the fire: {input}",
          updateSuffix: "O",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if anything else threatened",
          questionDisplay: "Unknown if anything else is threatened by the fire",
          updateSuffix: "U",
          continue: true,
        },
      ]
    },

    {
      text: <p>Is anyone <b className="font-bold">sick</b> or <b className="font-bold">injured</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No one sick/injured",
          questionDisplay: "No one is sick or injured",
          continue: true
        },
        {
          answer: "Yes",
          display: "Someone sick/injured",
          questionDisplay: "Someone is sick or injured",
          continue: true
        },
        {
          answer: "Unknown",
          display: "Unk if anyone sick/injured",
          questionDisplay: "Unknown if anyone is sick or injured",
          continue: true
        }
      ]
    },

    {
      text: <p>How <b className="font-bold">many</b> people are <b className="font-bold">sick</b> or <b className="font-bold">injured</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const sickInjuredAnswer = answers?.find(
          (a) => a.question === "Is anyone sick or injured?"
        )?.answer;
        return sickInjuredAnswer === "Yes";
      },
      preRenderLogic: "someone is sick or injured",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single person sick/injured",
          questionDisplay: "One person is sick or injured",
          updateSuffix: "X",
          continue: true
        },
        {
          answer: "Multiple (input number):",
          display: "{input} people sick/injured",
          questionDisplay: "{input} people are sick or injured",
          updateSuffix: "Y",
          continue: true
        },
        {
          answer: "Unknown",
          display: "Unk how many sick/injured",
          questionDisplay: "Unknown how many people are sick or injured",
          continue: true
        }
      ]
    }
  ],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "80B01",
          text: "Single Natrual/LP Gas Storage Tank (<= 5 Gallons/20 Liters)",
          recResponse: 550,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 551,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 553,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 553,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 550,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 551,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 553,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 551,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 550,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 550,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 551,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 552,
            },
          ],
        },
        {
          code: "80B02",
          text: "Extinguished Fire - Small Tank (1st/2nd Pty)",
          recResponse: 554,
          subCodes: [
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 555,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 555,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 556,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "80C00",
          text: "Override (Charlie)",
          recResponse: 553,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 553,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 553,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 553,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 551,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 551,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 553,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 551,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 551,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 553,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 551,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 552,
            },
          ],
        },
        {
          code: "80C01",
          text: "Small Natural/LP Gas Storage Tank",
          recResponse: 557,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 557,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 557,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 557,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 557,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 557,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 557,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 557,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 557,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 557,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 557,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 557,
            },
          ],
        },
        {
          code: "80C02",
          text: "Small Chemical Storage Tank",
          recResponse: 557,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 557,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 557,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 557,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 557,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 557,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 557,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 557,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 557,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 557,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 557,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 557,
            },
          ],
        },
        {
          code: "80C03",
          text: "Small Fuel Storage Tank",
          recResponse: 557,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 557,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 557,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 557,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 557,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 557,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 557,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 557,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 557,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 557,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 557,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 557,
            },
          ],
        },
        {
          code: "80C04",
          text: "Extinguished Fire - Large Tank (1st/2nd Pty)",
          recResponse: 558,
          subCodes: [
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 559,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 559,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 560,
            },
          ],
        },
        {
          code: "80C05",
          text: "Unkn Situation (Investigation)",
          recResponse: 209,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 209,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 209,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 209,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 209,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 210,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 209,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 210,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 209,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 209,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 210,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 211,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "80D00",
          text: "Override (Delta)",
          recResponse: 561,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 561,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 561,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 561,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 561,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 561,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 561,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 561,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 561,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 561,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 561,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 561,
            },
          ],
        },
        {
          code: "80D01",
          text: "Large Natrual/LP Gas Storage Tank",
          recResponse: 561,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 561,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 561,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 561,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 561,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 561,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 561,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 561,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 561,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 561,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 561,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 561,
            },
          ],
        },
        {
          code: "80D02",
          text: "Large Chemical Storage Tank",
          recResponse: 561,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 561,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 561,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 561,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 561,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 561,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 561,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 561,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 561,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 561,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 561,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 561,
            },
          ],
        },
        {
          code: "80D03",
          text: "Large Fuel Storage Tank",
          recResponse: 561,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 561,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 561,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 561,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 561,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 561,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 561,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 561,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 561,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 561,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 561,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 561,
            },
          ],
        },
        {
          code: "80D04",
          text: "Refinery/Tank Farm Fire",
          recResponse: 561,
          subCodes: [
            {
              suffix: "A",
              text: "Animals Threatened",
              recResponse: 561,
            },
            {
              suffix: "B",
              text: "Buildings (Non-Residential) Threatened",
              recResponse: 561,
            },
            {
              suffix: "D",
              text: "Additional/Other Tanks",
              recResponse: 561,
            },
            {
              suffix: "O",
              text: "Other Threatened",
              recResponse: 561,
            },
            {
              suffix: "P",
              text: "People in Danger",
              recResponse: 561,
            },
            {
              suffix: "R",
              text: "Residential Threatened",
              recResponse: 561,
            },
            {
              suffix: "T",
              text: "Trapped",
              recResponse: 561,
            },
            {
              suffix: "U",
              text: "Unkn Threatened",
              recResponse: 561,
            },
            {
              suffix: "V",
              text: "Vehicle Threatened",
              recResponse: 561,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 561,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 561,
            },
          ],
        },
      ],
    },
  ],
};
