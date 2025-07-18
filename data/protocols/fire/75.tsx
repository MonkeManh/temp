import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const TRAIN_RAIL_FIRE: IFireComplaint = {
  protocol: 75,
  name: "Train & Rail Fire",
  shortName: "Train/Rail Fire",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: true },
  ],
  defaultPriority: "C",
  defaultPlan: 470,
  defaultCode: "75C01",
  questions: [
    {
      text: <p className="text-red-400">Did the train <b className="font-bold">derail</b> or <b className="font-bold">collide</b> with anything?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No collision/derailment",
          questionDisplay: "There was no collision/derailment",
          continue: true
        },
        {
          answer: "Yes",
          display: "Collision/derailment",
          questionDisplay: "There was a collision/derailment",
          gotoProtocol: 70
        },
        {
          answer: "Unknown",
          display: "Unk if collision/derailment",
          questionDisplay: "Unknown if there was a collision/derailment",
          continue: true,
        }
      ]
    },

    // Delta Questions
    {
      text: <p>Does the fire involve any <b className="font-bold">buildings</b> or <b className="font-bold">vehicles</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No bldgs or vehs involved",
          questionDisplay: "No buildings or vehicles involved",
          continue: true
        },
        {
          answer: "Structure",
          display: "Bldg/structure involved",
          questionDisplay: "A building or structure is involved",
          updateCode: "75D01",
          continue: true
        },
        {
          answer: "Vehicle",
          display: "Veh involved",
          questionDisplay: "A vehicle is involved",
          updateCode: "75D02",
          continue: true
        },
        {
          answer: "Unknown",
          display: "Unk if bldg/structure involved",
          questionDisplay: "Unknown if building or structure involved",
          updateCode: "75C01",
          continue: true
        }
      ]
    },

    // INVOLVING STRUCT
    {
      text: <p>How <b className="font-bold">many</b> buildings are involved?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const structureInvolved = answers?.find((a) => a.question === "Does the fire involve any buildings or vehicles?")?.answer;
        return structureInvolved === "Structure"
      },
      preRenderLogic: "a building or structure is involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single",
          display: "Single bldg",
          questionDisplay: "Single building involved",
          continue: true
        },
        {
          answer: "Multiple (input number):",
          display: "{input} bldgs",
          questionDisplay: "{input} buildings involved",
          continue: true,
          input: true
        },
        {
          answer: "Unknown",
          display: "Unk num of bldgs",
          questionDisplay: "Unknown number of buildings involved",
          continue: true
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of building is involved?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const bldgCount = answers?.find((a) => a.question === "How many buildings are involved?")?.answer;
        return bldgCount === "Single"
      },
      preRenderLogic: "there is a single building involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "HIGH LIFE HAZARD",
          display: "HIGH LIFE HAZARD bldg",
          questionDisplay: "A HIGH LIFE HAZARD building is involved.",
          continue: true,
        },
        {
          answer: "HIGH RISE",
          display: "HIGH RISE bldg",
          questionDisplay: "A HIGH RISE building is involved.",
          continue: true,
        },
        {
          answer: "Commercial/industrial building",
          display: "Commercial/industrial bldg",
          questionDisplay: "A commercial or industrial building is involved.",
          continue: true,
        },
        {
          answer: "Residential (multiple)",
          display: "Residential (multy) bldg",
          questionDisplay: "A multi-family residential building is involved.",
          continue: true,
        },
        {
          answer: "Residential (single)",
          display: "Residential (single) bldg",
          questionDisplay: "A single-family residential building is involved.",
          continue: true,
        },
        {
          answer: "LARGE NON-DWELLING:",
          display: "Large non-dwelling bldg: {input}",
          questionDisplay: "A large non-dwelling building is involved: {input}.",
          continue: true,
          input: true
        },
        {
          answer: "SMALL NON-DWELLING:",
          display: "Small non-dwelling bldg: {input}",
          questionDisplay: "A small non-dwelling building is involved: {input}.",
          continue: true,
          input: true
        },
        {
          answer: "Mobile home",
          display: "Mobile home involved",
          questionDisplay: "A mobile home is involved.",
          continue: true,
        },
        {
          answer: "House trailer",
          display: "House trailer involved",
          questionDisplay: "A house trailer is involved.",
          continue: true,
        },
        {
          answer: "Portable office",
          display: "Portable office involved",
          questionDisplay: "A portable office is involved.",
          continue: true,
        },
        {
          answer: "Garage",
          display: "Garage involved",
          questionDisplay: "A garage is involved.",
          continue: true,
        },
        {
          answer: "PARKING GARAGE",
          display: "PARKING GARAGE involved",
          questionDisplay: "A PARKING GARAGE is involved.",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Other bldg type: {input}",
          questionDisplay: "Another type of building is involved: {input}.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk bldg type",
          questionDisplay: "Unknown type of building involved",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Is the <b className="font-bold">building</b> occupied?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const numBuildings = answers?.find((a) => a.question === "How many buildings are involved?")?.answer;
        return numBuildings === "Single"
      },
      preRenderLogic: "there is a single building involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Bldg unoccupied",
          questionDisplay: "The building is unoccupied",
          continue: true,
          send: true
        },
        {
          answer: "Yes",
          display: "Bldg occupied",
          questionDisplay: "The building is occupied",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if bldg occupied",
          questionDisplay: "Unknown if the building is occupied",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">types</b> of buildings are involved?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const bldgCount = answers?.find((a) => a.question === "How many buildings are involved?")?.answer;
        return bldgCount === "Multiple (input number):"
      },
      preRenderLogic: "there are multiple buildings involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Select all that apply:",
          display: "Mult bldgs involved: {input}",
          questionDisplay: "Multiple buildings are involved: {input}.",
          continue: true,
          multiSelect: true
        },
        {
          answer: "HIGH LIFE HAZARD",
          display: "HIGH LIFE HAZARD bldg",
          questionDisplay: "A HIGH LIFE HAZARD building is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "HIGH RISE",
          display: "HIGH RISE bldg",
          questionDisplay: "A HIGH RISE building is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Commercial/industrial building",
          display: "Commercial/industrial bldg",
          questionDisplay: "A commercial or industrial building is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Residential (multiple)",
          display: "Residential (multy) bldg",
          questionDisplay: "A multi-family residential building is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Residential (single)",
          display: "Residential (single) bldg",
          questionDisplay: "A single-family residential building is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "LARGE NON-DWELLING:",
          display: "Large non-dwelling bldg: {input}",
          questionDisplay: "A large non-dwelling building is involved: {input}.",
          continue: true,
          input: true,
          isMultiSelectOption: true,
        },
        {
          answer: "SMALL NON-DWELLING:",
          display: "Small non-dwelling bldg: {input}",
          questionDisplay: "A small non-dwelling building is involved: {input}.",
          continue: true,
          input: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Mobile home",
          display: "Mobile home involved",
          questionDisplay: "A mobile home is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "House trailer",
          display: "House trailer involved",
          questionDisplay: "A house trailer is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Portable office",
          display: "Portable office involved",
          questionDisplay: "A portable office is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Garage",
          display: "Garage involved",
          questionDisplay: "A garage is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "PARKING GARAGE",
          display: "PARKING GARAGE involved",
          questionDisplay: "A PARKING GARAGE is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Other:",
          display: "Other bldg type: {input}",
          questionDisplay: "Another type of building is involved: {input}.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Unknown",
          display: "Unk bldg types",
          questionDisplay: "Unknown types of buildings involved",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Are the <b className="font-bold">buildings</b> occupied?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const numBuildings = answers?.find((a) => a.question === "How many buildings are involved?")?.answer;
        return numBuildings === "Multiple (input number):"
      },
      preRenderLogic: "there is a single building involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Bldgs unoccupied",
          questionDisplay: "The buildings are unoccupied",
          continue: true,
          send: true
        },
        {
          answer: "Yes",
          display: "Bldgs occupied",
          questionDisplay: "The buildings are occupied",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if bldgs occupied",
          questionDisplay: "Unknown if the buildings are occupied",
          continue: true,
          send: true
        }
      ]
    },

    // INVOLVING VEHS
    {
      text: <p>How <b className="font-bold">many</b> vehicles are involved?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const vehicleInvolved = answers?.find((a) => a.question === "Does the fire involve any buildings or vehicles?")?.answer;
        return vehicleInvolved === "Vehicle"
      },
      preRenderLogic: "there is a single vehicle involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single",
          display: "Single veh",
          questionDisplay: "Single vehicle involved",
          continue: true
        },
        {
          answer: "Multiple (input number):",
          display: "{input} vehs",
          questionDisplay: "{input} vehicles involved",
          continue: true,
          input: true
        },
        {
          answer: "Unknown",
          display: "Unk num of vehs",
          questionDisplay: "Unknown number of vehicles involved",
          continue: true
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of vehicle is involved?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const vehCount = answers?.find((a) => a.question === "How many vehicles are involved?")?.answer;
        return vehCount === "Single"
      },
      preRenderLogic: "there is a single vehicle involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Passenger vehicle",
          display: "Passenger veh",
          questionDisplay: "A passenger vehicle is involved.",
          continue: true
        },
        {
          answer: "Commercial vehicle",
          display: "Commercial veh",
          questionDisplay: "A commercial vehicle is involved.",
          continue: true
        },
        {
          answer: "Large fuel/fire load vehicle",
          display: "Large fuel/fire load veh",
          questionDisplay: "A large fuel/fire load vehicle is involved.",
          continue: true
        },
        {
          answer: "Agricultural/farm vehicle",
          display: "Agricultural/farm veh",
          questionDisplay: "An agricultural/farm vehicle is involved.",
          continue: true
        },
        {
          answer: "Excavation/construction machinery",
          display: "Excavation/construction machinery",
          questionDisplay: "Excavation/construction machinery is involved.",
          continue: true
        },
        {
          answer: "Other:",
          display: "Other veh type: {input}",
          questionDisplay: "Another type of vehicle is involved: {input}.",
          continue: true,
          input: true
        },
        {
          answer: "Unknown",
          display: "Unk veh type",
          questionDisplay: "Unknown type of vehicle involved",
          continue: true
        }
      ]
    },

    {
      text: <p className="text-red-400">Is anyone <b className="font-bold">inside</b> the vehicle?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const numVehicles = answers?.find((a) => a.question === "How many vehicles are involved?")?.answer;
        return numVehicles === "Single"
      },
      preRenderLogic: "there is a single vehicle involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No one inside veh",
          questionDisplay: "No one is inside the vehicle",
          continue: true,
          send: true
        },
        {
          answer: "Yes",
          display: "Someone inside veh",
          questionDisplay: "Someone is inside the vehicle",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if anyone inside veh",
          questionDisplay: "Unknown if anyone is inside the vehicle",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">types</b> of vehicles are involved?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const vehCount = answers?.find((a) => a.question === "How many vehicles are involved?")?.answer;
        return vehCount === "Multiple (input number):"
      },
      preRenderLogic: "there are multiple vehicles involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Select all that apply:",
          display: "Mult vehs involved: {input}",
          questionDisplay: "Multiple vehicles are involved: {input}.",
          continue: true,
          multiSelect: true
        },
        {
          answer: "Passenger vehicle",
          display: "Passenger veh",
          questionDisplay: "A passenger vehicle is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Commercial vehicle",
          display: "Commercial veh",
          questionDisplay: "A commercial vehicle is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Large fuel/fire load vehicle",
          display: "Large fuel/fire load veh",
          questionDisplay: "A large fuel/fire load vehicle is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Agricultural/farm vehicle",
          display: "Agricultural/farm veh",
          questionDisplay: "An agricultural/farm vehicle is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Excavation/construction machinery",
          display: "Excavation/construction machinery",
          questionDisplay: "Excavation/construction machinery is involved.",
          continue: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Other:",
          display: "Other veh type: {input}",
          questionDisplay: "Another type of vehicle is involved: {input}.",
          continue: true,
          input: true,
          isMultiSelectOption: true,
        },
        {
          answer: "Unknown",
          display: "Unk veh types",
          questionDisplay: "Unknown types of vehicles involved",
          continue: true
        }
      ]
    },

    {
      text: <p className="text-red-400">Is anyone <b className="font-bold">inside</b> the vehicles?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const numVehicles = answers?.find((a) => a.question === "How many vehicles are involved?")?.answer;
        return numVehicles === "Multiple (input number):"
      },
      preRenderLogic: "there are multiple vehicles involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No one inside vehs",
          questionDisplay: "No one is inside the vehicles",
          continue: true,
          send: true
        },
        {
          answer: "Yes",
          display: "Someone inside vehs",
          questionDisplay: "Someone is inside the vehicles",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if anyone inside vehs",
          questionDisplay: "Unknown if anyone is inside the vehicles",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>Is the train <b className="font-bold">stopped</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Train is stopped",
          questionDisplay: "The train is stopped.",
          continue: true,
        },
        {
          answer: "No",
          display: "Train is moving",
          questionDisplay: "The train is moving.",
          updateCode: "75O01",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if train stopped",
          questionDisplay: "Unknown if the train is stopped.",
          continue: true,
        }
      ]
    },

    {
      text: <p>What is the <b className="font-bold">location</b> of the train?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const isStopped = answers?.find((a) => a.question === "Is the train stopped?")?.answer;
        return isStopped !== "No";
      },
      preRenderLogic: "the train is not moving",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "On bridge/overpass (not over water)",
          display: "On bridge/overpass",
          questionDisplay: "The train is on a bridge or overpass (not over water).",
          updateCode: "75D07",
          continue: true,
          send: true
        },
        {
          answer: "In tunnel",
          display: "In tunnel",
          questionDisplay: "The train is in a tunnel.",
          updateCode: "75D06",
          continue: true,
          send: true
        },
        {
          answer: "Into water",
          display: "Into water",
          questionDisplay: "The train is into water.",
          updateCode: "75D08",
          continue: true,
          send: true
        },
        {
          answer: "At ground level",
          display: "At ground level",
          questionDisplay: "The train is at ground level.",
          updateCode: "75D05",
          continue: true,
          send: true
        },
        {
          answer: "Above ground level (not bridge/overpass)",
          display: "Above ground level",
          questionDisplay: "The train is above ground level (not bridge/overpass).",
          updateCode: "75D04",
          continue: true,
          send: true
        },
        {
          answer: "Below ground level (not in tunnel)",
          display: "Below ground level",
          questionDisplay: "The train is below ground level (not in tunnel).",
          updateCode: "75D03",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unknown",
          questionDisplay: "Unknown where the train is located.",
          updateCode: "75C01",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of train is involved?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Cabe car",
          display: "Cabe car involved",
          questionDisplay: "A cabe car is involved.",
          updateSuffix: "C",
          continue: true,
        },
        {
          answer: "Freight train",
          display: "Freight train involved",
          questionDisplay: "A freight train is involved.",
          updateSuffix: "F",
          continue: true,
        },
        {
          answer: "Light rail",
          display: "Light rail involved",
          questionDisplay: "A light rail is involved.",
          updateSuffix: "L",
          continue: true,
        },
        {
          answer: "Monorail",
          display: "Monorail involved",
          questionDisplay: "A monorail is involved.",
          updateSuffix: "M",
          continue: true,
        },
        {
          answer: "Other",
          display: "Other involved",
          questionDisplay: "Another type of train is involved.",
          updateSuffix: "O",
          continue: true,
        },
        {
          answer: "Passenger (Commuter) Train",
          display: "Passenger (Commuter) Train involved",
          questionDisplay: "A passenger (commuter) train is involved.",
          updateSuffix: "P",
          continue: true,
        },
        {
          answer: "Subway",
          display: "Subway involved",
          questionDisplay: "A subway is involved.",
          updateSuffix: "S",
          continue: true,
        },
        {
          answer: "Trolley/Streetcar",
          display: "Trolley/Streetcar involved",
          questionDisplay: "A trolley/streetcar is involved.",
          updateSuffix: "T",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Other train type: {input}",
          questionDisplay: "Another type of train is involved: {input}.",
          updateSuffix: "O",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk train type",
          questionDisplay: "Unknown what type of train is involved.",
          updateSuffix: "U",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Are there any <b className="font-bold">hazardous materials</b> or <b className="font-bold">chemicals</b> involved?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No hazmat/chems rptd",
          questionDisplay: "No hazardous materials or chemicals are involved.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Hazmat/chems rptd",
          questionDisplay: "Yes hazardous materials or chemicals are involved.",
          continue: true,
        },
        {
          answer: "Doesn't know",
          display: "Unk if hazmat/chems",
          questionDisplay: "Doesn't know if hazardous materials or chemicals are involved.",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Do you see any <b className="font-bold">placards</b> or <b className="font-bold">chemical information</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const hazmatAnswer = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
        return hazmatAnswer === "Yes";
      },
      preRenderLogic: "hazardous materials or chemicals are involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No placards/chem info",
          questionDisplay: "No placards or chemical information is visible.",
          continue: true,
        },
        {
          answer: "Yes (input):",
          display: "Placards/chem info: {input}",
          questionDisplay: "Placards or chemical information is visible: {input}.",
          continue: true,
          input: true,
        },
        {
          answer: "Doesn't know",
          display: "Unk if placards/chem info",
          questionDisplay: "Doesn't know if placards or chemical information is visible.",
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
          code: "75O01",
          text: "Moving Train",
          recResponse: 470,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 470,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 470,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 470,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 470,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 470,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 470,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 470,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 470,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "75C00",
          text: "Override (Charlie)",
          recResponse: 334,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 334,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 334,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 334,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 334,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 334,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 334,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 334,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 334,
            },
          ],
        },
        {
          code: "75C01",
          text: "Unkn Situation (Investigation)",
          recResponse: 334,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 334,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 334,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 334,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 334,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 334,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 334,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 334,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 334,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "75D00",
          text: "Override (Delta)",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D01",
          text: "Train Fire Involving Building/Structure",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D02",
          text: "Train Fire Involving Vehicles",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D03",
          text: "Train Fire Below Ground Level",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D04",
          text: "Train Fire Above Ground Level",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D05",
          text: "Train Fire At Ground Level",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D06",
          text: "Train Fire In Tunnel",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D07",
          text: "Train Fire on Bridge/Trestle",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
        {
          code: "75D08",
          text: "Train Fire in/over Water",
          recResponse: 471,
          subCodes: [
            {
              suffix: "C",
              text: "Cable Car",
              recResponse: 471,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 471,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 471,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 471,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 471,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 471,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 471,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 471,
            },
            {
              suffix: "U",
              text: "Unknown",
              recResponse: 471,
            },
          ],
        },
      ],
    },
  ],
};
