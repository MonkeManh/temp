import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const TRAIN_RAIL_COLLISION: IFireComplaint = {
  protocol: 70,
  name: "Train & Rail Collision / Derailment",
  shortName: "Train Collision/Derailment",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: true },
  ],
  defaultPriority: "C",
  defaultPlan: 334,
  defaultCode: "70C05",
  questions: [
    {
      text: <p className="text-blue-400">What type of incident is this?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Derailment",
          display: "Train derailment",
          questionDisplay: "This is a train derailment.",
          continue: true,
        },
        {
          answer: "Collision",
          display: "Train collision",
          questionDisplay: "This is a train collision.",
          continue: true,
        },
        {
          answer: "Vehicle on tracks",
          display: "Vehicle on tracks",
          questionDisplay: "There is a vehicle on the tracks.",
          continue: true,
        },
        {
          answer: "Person trapped/struck",
          display: "Person trapped/struck by train",
          questionDisplay: "This is a person struck by a train.",
          updateCode: "70D01",
          continue: true,
          send: true
        },
        {
          answer: "Person stranded",
          display: "Person stranded on train",
          questionDisplay: "This is a person stranded on the train.",
          updateCode: "70C04",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk situation",
          questionDisplay: "This is an unknown situation.",
          updateCode: "70C05",
          continue: true,
        }
      ]
    },

    {
      text: <p>Are any <b className="font-bold">structures</b> or <b className="font-bold">other vehicles</b> <span className="text-blue-400">(includes other trains)</span> involved?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find((a) => a.question === "What type of incident is this?")?.answer;
        return incidentType === "Derailment" || incidentType === "Collision";
      },
      preRenderLogic: "the incident is a derailment or collision",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No vehs or bldgs involved",
          questionDisplay: "No structures or other vehicles involved.",
          continue: true,
        },
        {
          answer: "Building/structure",
          display: "Bldg/structure involved",
          questionDisplay: "A building or structure is involved.",
          updateCode: "70D02",
          continue: true,
          send: true
        },
        {
          answer: "Vehicle",
          display: "Vehicle involved",
          questionDisplay: "Another vehicle is involved.",
          updateCode: "70D03",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if vehs or bldgs involved",
          questionDisplay: "Unknown if structures or other vehicles involved.",
          continue: true,
        }
      ]
    },

    {
      text: <p>How many <b className="font-bold">structures</b> are <b className="font-bold">involved</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const structureAnswer = answers?.find((a) => a.question === "Are any structures or other vehicles (includes other trains) involved?")?.answer;
        return structureAnswer === "Building/structure";
      },
      preRenderLogic: "a building or structure is involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single",
          display: "Single bldg involved",
          questionDisplay: "A single building is involved.",
          continue: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} bldgs involved",
          questionDisplay: "There are {input} buildings involved.",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk how many bldgs",
          questionDisplay: "Unknown how many buildings are involved.",
          continue: true,
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type(s)</b> of building/structure is involved?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const structureAnswer = answers?.find((a) => a.question === "Are any structures or other vehicles (includes other trains) involved?")?.answer;
        return structureAnswer === "Building/structure";
      },
      preRenderLogic: "a building or structure is involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "HIGH LIFE HAZARD",
          display: "HIGH LIFE HAZARD bldg",
          questionDisplay: "A HIGH LIFE HAZARD building is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Single";
          },
          preRenderLogic: "there is a single building involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "HIGH RISE",
          display: "HIGH RISE bldg",
          questionDisplay: "A HIGH RISE building is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Single";
          },
          preRenderLogic: "there is a single building involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Commercial/industrial building",
          display: "Commercial/industrial bldg",
          questionDisplay: "A commercial or industrial building is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Single";
          },
          preRenderLogic: "there is a single building involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Residential (multiple)",
          display: "Residential (multy) bldg",
          questionDisplay: "A multi-family residential building is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Single";
          },
          preRenderLogic: "there is a single building involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Residential (single)",
          display: "Residential (single) bldg",
          questionDisplay: "A single-family residential building is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Single";
          },
          preRenderLogic: "there is a single building involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "LARGE NON-DWELLING:",
          display: "Large non-dwelling bldg: {input}",
          questionDisplay: "A large non-dwelling building is involved: {input}.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Single";
          },
          preRenderLogic: "there is a single building involved",
          preRenderDependencies: ["answers"],
          continue: true,
          input: true
        },
        {
          answer: "SMALL NON-DWELLING:",
          display: "Small non-dwelling bldg: {input}",
          questionDisplay: "A small non-dwelling building is involved: {input}.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Single";
          },
          preRenderLogic: "there is a single building involved",
          preRenderDependencies: ["answers"],
          continue: true,
          input: true
        },
        {
          answer: "Mobile home",
          display: "Mobile home involved",
          questionDisplay: "A mobile home is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Single";
          },
          preRenderLogic: "there is a single building involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "House trailer",
          display: "House trailer involved",
          questionDisplay: "A house trailer is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Single";
          },
          preRenderLogic: "there is a single building involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Portable office",
          display: "Portable office involved",
          questionDisplay: "A portable office is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Single";
          },
          preRenderLogic: "there is a single building involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Garage",
          display: "Garage involved",
          questionDisplay: "A garage is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Single";
          },
          preRenderLogic: "there is a single building involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "PARKING GARAGE",
          display: "PARKING GARAGE involved",
          questionDisplay: "A PARKING GARAGE is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Single";
          },
          preRenderLogic: "there is a single building involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Other:",
          display: "Other bldg type: {input}",
          questionDisplay: "Another type of building is involved: {input}.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Single";
          },
          preRenderLogic: "there is a single building involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Select all that apply:",
          display: "Mult bldg types: {input}",
          questionDisplay: "Multiple building types are involved: {input}.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple buildings involved",
          preRenderDependencies: ["answers"],
          continue: true,
          multiSelect: true,
        },
        {
          answer: "HIGH LIFE HAZARD",
          display: "HIGH LIFE HAZARD",
          questionDisplay: "A HIGH LIFE HAZARD building is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple buildings involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "HIGH RISE",
          display: "HIGH RISE",
          questionDisplay: "A HIGH RISE building is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple buildings involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "HIGH RISE",
          display: "HIGH RISE",
          questionDisplay: "A HIGH RISE building is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple buildings involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Commercial/industrial building",
          display: "Commercial/industrial",
          questionDisplay: "A commercial or industrial building is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple buildings involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Residential (multiple)",
          display: "Residential (mult)",
          questionDisplay: "A multi-family residential building is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple buildings involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Residential (single)",
          display: "Residential (single)",
          questionDisplay: "A single-family residential building is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple buildings involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Mobile home",
          display: "Mobile home",
          questionDisplay: "A mobile home is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple buildings involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "House trailer",
          display: "House trailer",
          questionDisplay: "A house trailer is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple buildings involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Portable office",
          display: "Portable office",
          questionDisplay: "A portable office is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple buildings involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Garage",
          display: "Garage",
          questionDisplay: "A garage is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple buildings involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "PARKING GARAGE",
          display: "PARKING GARAGE",
          questionDisplay: "A PARKING GARAGE is involved.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple buildings involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Other:",
          display: "Other bldg type: {input}",
          questionDisplay: "Another type of building is involved: {input}.",
          preRenderInstructions: (answers) => {
            const structureCount = answers?.find((a) => a.question === "How many structures are involved?")?.answer;
            return structureCount === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple buildings involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Unknown",
          display: "Unk bldg type",
          questionDisplay: "Unknown what type of building is involved.",
          continue: true,
        },
      ]
    },

    {
      text: <p className="text-red-400">Were (are) any of the structues <b className="font-bold">occupied</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const structureAnswer = answers?.find((a) => a.question === "Are any structures or other vehicles (includes other trains) involved?")?.answer;
        return structureAnswer === "Building/structure";
      },
      preRenderLogic: "a building or structure is involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Bldg was/is unoccupied",
          questionDisplay: "Building was or is occupied.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Bldg was/is occupied",
          questionDisplay: "Building was or is occupied.",
          continue: true,
        },
        {
          answer: "Doesn't know",
          display: "Unk if bldg occupied",
          questionDisplay: "Unknown if building was or is occupied.",
          continue: true,
        }
      ]
    },

    {
      text: <p>How <b className="font-bold">many</b> vehicles are <b className="font-bold">involved</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const vehicleAnswer = answers?.find((a) => a.question === "Are any structures or other vehicles (includes other trains) involved?")?.answer;
        return vehicleAnswer === "Vehicle";
      },
      preRenderLogic: "another vehicle is involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single",
          display: "Single veh involved",
          questionDisplay: "A single vehicle is involved.",
          continue: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} vehs involved",
          questionDisplay: "There are {input} vehicles involved.",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk how many vehs",
          questionDisplay: "Unknown how many vehicles are involved.",
          continue: true,
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of vehicle(s) are (is) <b className="font-bold">involved</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const vehicleAnswer = answers?.find((a) => a.question === "Are any structures or other vehicles (includes other trains) involved?")?.answer;
        return vehicleAnswer === "Vehicle";
      },
      preRenderLogic: "another vehicle is involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Passenger vehicle",
          display: "Passenger veh involved",
          questionDisplay: "A passenger vehicle is involved.",
          preRenderInstructions: (answers) => {
            const numVehicles = answers?.find((a) => a.question === "How many vehicles are involved?")?.answer;
            return numVehicles === "Single";
          },
          preRenderLogic: "there is a single vehicle involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Commercial vehicle",
          display: "Commercial veh involved",
          questionDisplay: "A commercial vehicle is involved.",
          preRenderInstructions: (answers) => {
            const numVehicles = answers?.find((a) => a.question === "How many vehicles are involved?")?.answer;
            return numVehicles === "Single";
          },
          preRenderLogic: "there is a single vehicle involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Large fuel/fire load vehicle",
          display: "Large fuel/fire load veh involved",
          questionDisplay: "A large fuel/fire load vehicle is involved.",
          preRenderInstructions: (answers) => {
            const numVehicles = answers?.find((a) => a.question === "How many vehicles are involved?")?.answer;
            return numVehicles === "Single";
          },
          preRenderLogic: "there is a single vehicle involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Other vehicle:",
          display: "Other veh involved: {input}",
          questionDisplay: "Another type of vehicle is involved: {input}.",
          preRenderInstructions: (answers) => {
            const numVehicles = answers?.find((a) => a.question === "How many vehicles are involved?")?.answer;
            return numVehicles === "Single";
          },
          preRenderLogic: "there is a single vehicle involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Select all that apply:",
          display: "Mult veh types: {input}",
          questionDisplay: "Multiple vehicle types are involved: {input}.",
          preRenderInstructions: (answers) => {
            const numVehicles = answers?.find((a) => a.question === "How many vehicles are involved?")?.answer;
            return numVehicles === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple vehicles involved",
          preRenderDependencies: ["answers"],
          continue: true,
          multiSelect: true,
        },
        {
          answer: "Passenger vehicle",
          display: "Passenger veh",
          questionDisplay: "A passenger vehicle is involved.",
          preRenderInstructions: (answers) => {
            const numVehicles = answers?.find((a) => a.question === "How many vehicles are involved?")?.answer;
            return numVehicles === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple vehicles involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Commercial vehicle",
          display: "Commercial veh",
          questionDisplay: "A commercial vehicle is involved.",
          preRenderInstructions: (answers) => {
            const numVehicles = answers?.find((a) => a.question === "How many vehicles are involved?")?.answer;
            return numVehicles === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple vehicles involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Large fuel/fire load vehicle",
          display: "Large fuel/fire load veh",
          questionDisplay: "A large fuel/fire load vehicle is involved.",
          preRenderInstructions: (answers) => {
            const numVehicles = answers?.find((a) => a.question === "How many vehicles are involved?")?.answer;
            return numVehicles === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple vehicles involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Other vehicle:",
          display: "Other veh: {input}",
          questionDisplay: "Another type of vehicle is involved: {input}.",
          preRenderInstructions: (answers) => {
            const numVehicles = answers?.find((a) => a.question === "How many vehicles are involved?")?.answer;
            return numVehicles === "Multiple (input number):";
          },
          preRenderLogic: "there are multiple vehicles involved",
          preRenderDependencies: ["answers"],
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Unknown",
          display: "Unk veh type",
          questionDisplay: "Unknown what type of vehicle is involved.",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Were (are) any of the vehicles <b className="font-bold">occupied</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const vehicleAnswer = answers?.find((a) => a.question === "Are any structures or other vehicles (includes other trains) involved?")?.answer;
        return vehicleAnswer === "Vehicle";
      },
      preRenderLogic: "another vehicle is involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Vehs was/are unoccupied",
          questionDisplay: "Vehicles were or are occupied.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Vehs was/are occupied",
          questionDisplay: "Vehicles were or are occupied.",
          continue: true,
        },
        {
          answer: "Doesn't know",
          display: "Unk if vehs occupied",
          questionDisplay: "Unknown if vehicles were or are occupied.",
          continue: true,
        }
      ]
    },

    {
      text: <p><b className="font-bold">Where</b> did the incident <b className="font-bold">occur</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find((a) => a.question === "What type of incident is this?")?.answer;
        return incidentType === "Derailment" || incidentType === "Collision";
      },
      preRenderLogic: "the incident is a derailment or collision",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "On bridge/overpass (not over water)",
          display: "Happened on bridge/overpass",
          questionDisplay: "The incident occurred on a bridge or overpass.",
          updateCode: "70D08",
          continue: true,
          send: true
        },
        {
          answer: "In tunnel",
          display: "Happened in tunnel",
          questionDisplay: "The incident occurred in a tunnel.",
          updateCode: "70D07",
          continue: true,
          send: true
        },
        {
          answer: "Into water",
          display: "Happened into water",
          questionDisplay: "The incident occurred into water.",
          updateCode: "70D09",
          continue: true,
          send: true
        },
        {
          answer: "OVER WATER",
          display: "Happened over water",
          questionDisplay: "The incident occurred over water.",
          updateCode: "70D09",
          continue: true,
          send: true
        },
        {
          answer: "Above ground level (not on bridge/overpass)",
          display: "Happened above grd lvl",
          questionDisplay: "The incident occurred above ground level.",
          updateCode: "70D05",
          continue: true,
          send: true
        },
        {
          answer: "At ground level",
          display: "Happened at grd lvl",
          questionDisplay: "The incident occurred at ground level.",
          updateCode: "70D06",
          continue: true,
          send: true
        },
        {
          answer: "Below ground level (not in tunnel)",
          display: "Happened below grd lvl",
          questionDisplay: "The incident occurred below ground level.",
          updateCode: "70D04",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk where incident happened",
          questionDisplay: "Unknown where the incident occurred.",
          updateCode: "70C05",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>How <b className="font-bold">many</b> vehicles are <b className="font-bold">on</b> the <b className="font-bold">tracks</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find((a) => a.question === "What type of incident is this?")?.answer;
        return incidentType === "Vehicle on tracks";
      },
      preRenderLogic: "the incident is a vehicle on the tracks",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single",
          display: "Single veh on tracks",
          questionDisplay: "A single vehicle is on the tracks.",
          continue: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} vehs on tracks",
          questionDisplay: "There are {input} vehicles on the tracks.",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk how many vehs on tracks",
          questionDisplay: "Unknown how many vehicles are on the tracks.",
          updateCode: "70C05",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of <b className="font-bold">vehicle</b> is involved?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find((a) => a.question === "What type of incident is this?")?.answer;
        const numVehicles = answers?.find((a) => a.question === "How many vehicles are on the tracks?")?.answer;
        return incidentType === "Vehicle on tracks" && numVehicles === "Single";
      },
      preRenderLogic: "the incident is a vehicle on the tracks and there is a single vehicle involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Passenger vehicle",
          display: "Passenger veh rptd",
          questionDisplay: "A passenger vehicle is on the tracks.",
          updateCode: "70C03",
          continue: true,
          send: true
        },
        {
          answer: "Commercial vehicle",
          display: "Commercial veh rptd",
          questionDisplay: "A commercial vehicle is on the tracks.",
          updateCode: "70C02",
          continue: true,
          send: true
        },
        {
          answer: "High fuel/fire load vehicle",
          display: "High fuel/fire load veh rptd",
          questionDisplay: "A high fuel/fire load vehicle is on the tracks.",
          continue: true,
          updateCode: "70C01",
          send: true
        },
        {
          answer: "Other vehicle:",
          display: "Other veh rptd: {input}",
          questionDisplay: "Another type of vehicle is on the tracks: {input}.",
          updateCode: "70C03",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk veh type rptd",
          questionDisplay: "Unknown what type of vehicle is on the tracks.",
          updateCode: "70C03",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">types</b> of <b className="font-bold">vehicles</b> are involved?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find((a) => a.question === "What type of incident is this?")?.answer;
        const numVehicles = answers?.find((a) => a.question === "How many vehicles are on the tracks?")?.answer;
        return incidentType === "Vehicle on tracks" && numVehicles === "Multiple (input number):";
      },
      preRenderLogic: "the incident is a vehicle on the tracks and there are multiple vehicles involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Select all that apply:",
          display: "Mult veh types: {input}",
          questionDisplay: "Multiple vehicle types are involved: {input}.",
          continue: true,
          multiSelect: true,
        },
        {
          answer: "Passenger vehicle",
          display: "Passenger veh",
          questionDisplay: "A passenger vehicle is involved.",
          updateCode: "70C03",
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Commercial vehicle",
          display: "Commercial veh",
          questionDisplay: "A commercial vehicle is involved.",
          updateCode: "70C02",
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "High fuel/fire load vehicle",
          display: "High fuel/fire load veh",
          questionDisplay: "A high fuel/fire load vehicle is involved.",
          updateCode: "70C01",
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Other vehicle:",
          display: "Other veh: {input}",
          questionDisplay: "Another type of vehicle is involved: {input}.",
          updateCode: "70C03",
          continue: true,
          isMultiSelectOption: true
        },
        {
          answer: "Unknown",
          display: "Unk veh type",
          questionDisplay: "Unknown what type of vehicle is involved.",
          updateCode: "70C05",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Is anyone <b className="font-bold">still inside the vehicle(s)</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find((a) => a.question === "What type of incident is this?")?.answer;
        return incidentType === "Vehicle on tracks";
      },
      preRenderLogic: "the incident is a vehicle on the tracks",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No one still inside",
          questionDisplay: "No one is still inside the vehicle(s).",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Someone still inside",
          questionDisplay: "Someone is still inside the vehicle(s).",
          continue: true,
        },
        {
          answer: "Doesn't know",
          display: "Unk if someone inside",
          questionDisplay: "Doesn't know if someone is still inside the vehicle(s).",
          continue: true,
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of <b className="font-bold">train</b> is involved?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find((a) => a.question === "What type of incident is this?")?.answer;
        return incidentType !== "Vehicle on tracks";
      },
      preRenderLogic: "the incident is not a vehicle on the tracks",
      preRenderDependencies: ["answers"],
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
      text: <p>What type of <b className="font-bold">train line/tracks</b> is the vehicle <b className="font-bold">on</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const incidentType = answers?.find((a) => a.question === "What type of incident is this?")?.answer;
        return incidentType === "Vehicle on tracks";
      },
      preRenderLogic: "the incident is a vehicle on the tracks",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Cabe car",
          display: "Cabe car line/tracks",
          questionDisplay: "The vehicle is on cabe car line/tracks.",
          updateSuffix: "C",
          continue: true,
        },
        {
          answer: "Freight train",
          display: "Freight train line/tracks",
          questionDisplay: "The vehicle is on freight train line/tracks.",
          updateSuffix: "F",
          continue: true,
        },
        {
          answer: "Light rail",
          display: "Light rail line/tracks",
          questionDisplay: "The vehicle is on light rail line/tracks.",
          updateSuffix: "L",
          continue: true,
        },
        {
          answer: "Monorail",
          display: "Monorail line/tracks",
          questionDisplay: "The vehicle is on monorail line/tracks.",
          updateSuffix: "M",
          continue: true,
        },
        {
          answer: "Passenger (Commuter) Train",
          display: "Passenger (Commuter) Train line/tracks",
          questionDisplay: "The vehicle is on passenger (commuter) train line/tracks.",
          updateSuffix: "P",
          continue: true,
        },
        {
          answer: "Subway",
          display: "Subway line/tracks",
          questionDisplay: "The vehicle is on subway line/tracks.",
          updateSuffix: "S",
          continue: true,
        },
        {
          answer: "Trolley/Streetcar",
          display: "Trolley/Streetcar line/tracks",
          questionDisplay: "The vehicle is on trolley/streetcar line/tracks.",
          updateSuffix: "T",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Other train line/tracks: {input}",
          questionDisplay: "Another type of train is on other line/tracks: {input}.",
          updateSuffix: "O",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unknown train line/tracks",
          questionDisplay: "Unknown what type of train is on the line/tracks.",
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
      priority: "C",
      codes: [
        {
          code: "70C01",
          text: "Large Fuel/Fire Load Vehicle on Tracks",
          recResponse: 334,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
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
              recResponse: 334,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 334,
            },
            {
              suffix: "U",
              text: "Unkn train",
              recResponse: 334,
            },
          ],
        },
        {
          code: "70C02",
          text: "Comm Vehicle on Tracks",
          recResponse: 334,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
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
              recResponse: 334,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 334,
            },
            {
              suffix: "U",
              text: "Unkn train",
              recResponse: 334,
            },
          ],
        },
        {
          code: "70C03",
          text: "Other Vehicle on Tracks",
          recResponse: 334,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
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
              recResponse: 334,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 334,
            },
            {
              suffix: "U",
              text: "Unkn train",
              recResponse: 334,
            },
          ],
        },
        {
          code: "70C04",
          text: "Stranded on Train",
          recResponse: 334,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
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
              recResponse: 334,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 334,
            },
            {
              suffix: "U",
              text: "Unkn train",
              recResponse: 334,
            },
          ],
        },
        {
          code: "70C05",
          text: "Unkn Situation (Investigation)",
          recResponse: 334,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
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
              recResponse: 334,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 334,
            },
            {
              suffix: "U",
              text: "Unkn train",
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
          code: "70D00",
          text: "Override (Delta)",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn train",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D01",
          text: "Person Trapped/Struck by Train (No Collision/Derailment)",
          recResponse: 337,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 337,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 337,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 337,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 337,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 337,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 337,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 337,
            },
            {
              suffix: "U",
              text: "Unkn train",
              recResponse: 337,
            },
          ],
        },
        {
          code: "70D02",
          text: "Collision/Derailment Involving Buildings/Structures",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn train",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D03",
          text: "Collision/Derailment Involving Vehicles",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn train",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D04",
          text: "Collision/Derailment Below Ground Level",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn train",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D05",
          text: "Collision/Derailment Above Ground Level",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn train",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D06",
          text: "Collision/Derailment at Ground Level",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn train",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D07",
          text: "Collision/Derailment in Tunnel",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn train",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D08",
          text: "Collision/Derailment on Bridge/Trestle",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn train",
              recResponse: 336,
            },
          ],
        },
        {
          code: "70D09",
          text: "Collision/Derailment into/over Water",
          recResponse: 336,
          subCodes: [
            {
              suffix: "C",
              text: "Cabe Car",
              recResponse: 336,
            },
            {
              suffix: "F",
              text: "Freight Train",
              recResponse: 336,
            },
            {
              suffix: "L",
              text: "Light Rail",
              recResponse: 336,
            },
            {
              suffix: "M",
              text: "Monorail",
              recResponse: 336,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 336,
            },
            {
              suffix: "P",
              text: "Passenger (Commuter) Train",
              recResponse: 336,
            },
            {
              suffix: "S",
              text: "Subway",
              recResponse: 335,
            },
            {
              suffix: "T",
              text: "Trolley/Streetcar",
              recResponse: 336,
            },
            {
              suffix: "U",
              text: "Unkn train",
              recResponse: 336,
            },
          ],
        },
      ],
    },
  ],
};
