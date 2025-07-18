import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const LIGHTNING_STRIKE: IFireComplaint = {
  protocol: 63,
  name: "Lightning Strike (Investigation)",
  shortName: "Lightning Strike",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: false },
  ],
  defaultPriority: "B",
  defaultPlan: 222,
  defaultCode: "63B07",
  questions: [
    {
      text: (
        <p>
          Did you <b className="font-bold">see</b> the lightning{" "}
          <b className="font-bold">strike</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Strike was witnessed",
          questionDisplay: "The lightning strike was witnessed.",
          continue: true,
        },
        {
          answer: "No",
          display: "Strike was not witnessed",
          questionDisplay: "The lightning strike was not witnessed.",
          updateCode: "63B07",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if strike was witnessed",
          questionDisplay: "Unknown if the lightning strike was witnessed.",
          updateCode: "63B07",
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(Not already stated)</span>{" "}
          <b className="font-bold">What</b> did the lightning{" "}
          <b className="font-bold">hit</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const firstAnswer = answers[0].answer;
        return firstAnswer === "Yes";
      },
      preRenderLogic: "The strike was witnessed.",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Outside",
          display: "Struck outside",
          questionDisplay: "The lightning struck outside.",
          continue: true,
        },
        {
          answer: "Structure",
          display: "Struck a structure",
          questionDisplay: "The lightning struck a structure.",
          continue: true,
        },
        {
          answer: "Vehicle",
          display: "Struck a vehicle",
          questionDisplay: "The lightning struck a vehicle.",
          updateCode: "63B06",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk what was struck",
          questionDisplay: "Unknown what the lightning struck.",
          updateCode: "63B07",
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: (
        <p>
          Did the lightning <b className="font-bold">hit</b> anything{" "}
          <b className="font-bold">outside</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const whatWasHit = answers.find(
          (a) =>
            a.question === "(Not already stated) What did the lightning hit?"
        )?.answer;
        return whatWasHit === "Outside";
      },
      preRenderLogic: "The lightning struck outside.",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Did not strike anything specific",
          questionDisplay: "The lightning did not strike anything specific.",
          updateCode: "63B05",
          continue: true,
          send: true,
        },
        {
          answer: "Outdoor venue",
          display: "Struck an outdoor venue",
          questionDisplay: "The lightning struck an outdoor venue.",
          updateCode: "63C05",
          continue: true,
          send: true,
        },
        {
          answer: "Structure",
          display: "Struck a structure",
          questionDisplay: "The lightning struck a structure.",
          continue: true,
        },
        {
          answer: "Vehicle",
          display: "Struck a vehicle",
          questionDisplay: "The lightning struck a vehicle.",
          updateCode: "63B06",
          send: true,
          continue: true,
        },
        {
          answer: "Other:",
          display: "Struck: {input}",
          questionDisplay: "The lightning struck: {input}.",
          updateCode: "63B05",
          input: true,
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk what was struck",
          questionDisplay: "Unknown what the lightning struck.",
          updateCode: "63B07",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">type</b> of{" "}
          <b className="font-bold">structure</b> did it hit?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const whatWasHit = answers.find(
          (a) =>
            a.question === "(Not already stated) What did the lightning hit?"
        )?.answer;
        const didItHitOutside = answers.find(
          (a) => a.question === "Did the lightning hit anything outside?"
        )?.answer;
        return whatWasHit === "Structure" || didItHitOutside === "Structure";
      },
      preRenderLogic: "The lightning struck a structure.",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "HIGH LIFE HAZARD",
          display: "HIGH LIFE HAZARD bldg",
          questionDisplay: "The lightning struck a HIGH LIFE HAZARD building.",
          updateCode: "63C01",
          continue: true,
          send: true,
        },
        {
          answer: "HIGH RISE",
          display: "HIGH RISE bldg",
          questionDisplay: "The lightning struck a HIGH RISE building.",
          updateCode: "63C02",
          continue: true,
        },
        {
          answer: "Commercial/industrial building",
          display: "Commercial/industrial bldg",
          questionDisplay:
            "The lightning struck a commercial/industrial building.",
          updateCode: "63C03",
          continue: true,
          send: true,
        },
        {
          answer: "Residential (mult)",
          display: "Residential (mult) bldg",
          questionDisplay:
            "The lightning struck a Residential (Mult) building.",
          updateCode: "63C04",
          continue: true,
          send: true,
        },
        {
          answer: "Residential (single)",
          display: "Residential (single) bldg",
          questionDisplay:
            "The lightning struck a Residential (Single) building.",
          updateCode: "63B01",
          continue: true,
          send: true,
        },
        {
          answer: "LARGE non-dwelling building/structure (Barn, Lg Garage):",
          display: "LARGE non-dwelling bldg: {input}",
          questionDisplay:
            "The lightning struck a LARGE non-dwelling building/structure: {input}.",
          updateCode: "63B02",
          continue: true,
          input: true,
          send: true,
        },
        {
          answer: "SMALL non-dwelling building/structure (Shed, Small Garage):",
          display: "SMALL non-dwelling bldg: {input}",
          questionDisplay:
            "The lightning struck a SMALL non-dwelling building/structure: {input}.",
          updateCode: "63B03",
          continue: true,
          input: true,
          send: true,
        },
        {
          answer: "Mobile home",
          display: "Mobile home struc",
          questionDisplay: "The lightning struck a mobile home structure.",
          updateCode: "63B04",
          continue: true,
          send: true,
        },
        {
          answer: "House trailer",
          display: "House trailer struc",
          questionDisplay: "The lightning struck a house trailer structure.",
          updateCode: "63B04",
          continue: true,
          send: true,
        },
        {
          answer: "Portable office",
          display: "Portable office struc",
          questionDisplay: "The lightning struck a portable office structure.",
          updateCode: "63B04",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk type of structure",
          questionDisplay: "The lightning struck an unknown type of structure.",
          updateCode: "63B07",
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: <p><span className="text-blue-400">(Not obvious)</span> Is anyone <b className="font-bold">injured</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No injs rptd",
          questionDisplay: "No injuries reported.",
          continue: true
        },
        {
          answer: "Yes",
          display: "Injs rptd",
          questionDisplay: "Injuries reported.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if injs",
          questionDisplay: "Unknown if anyone is injured.",
          continue: true,
        }
      ]
    },

    {
      text: <p>How <b className="font-bold">many</b> people are <b className="font-bold">injured</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const injuredAnswer = answers.find(
          (a) => a.question === "Is anyone injured?"
        )?.answer;
        return injuredAnswer === "Yes";
      },
      preRenderLogic: "Injuries reported.",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single person inj'd",
          questionDisplay: "A single person is injured.",
          updateSuffix: "X",
          continue: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} people inj'd",
          questionDisplay: "{input} people are injured.",
          updateSuffix: "Y",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk number of injs",
          questionDisplay: "Unknown number of injured persons.",
          updateSuffix: "X",
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
          code: "63B01",
          text: "Residential (Single)",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63B02",
          text: "Large Non-Dwelling Building/Structure",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63B03",
          text: "Small Non-Dwelling Building/Structure",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63B04",
          text: "Mobile Home, House Trailer, Portable Office",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63B05",
          text: "Outside Lighting Strike",
          recResponse: 20,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 225,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63B06",
          text: "Vehicle",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63B07",
          text: "Unkn Situation (Investigation)/Unkn Building Type",
          recResponse: 20,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "63C00",
          text: "Override (Charlie)",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63C01",
          text: "High Life Hazard",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63C02",
          text: "High Rise",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63C03",
          text: "Comm/Ind Building",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63C04",
          text: "Residential (Mult)",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
        {
          code: "63C05",
          text: "Outdoor Venue (Sporting Event/Concert/Campground)",
          recResponse: 222,
          subCodes: [
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 223,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 224,
            },
          ],
        },
      ],
    },
  ],
};
