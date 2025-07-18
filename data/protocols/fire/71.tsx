import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const VEHICLE_FIRE: IFireComplaint = {
  protocol: 71,
  name: "Vehicle Fire",
  shortName: "Vehicle Fire",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultPlan: 338,
  defaultCode: "71B01",
  questions: [
    {
      text: <p><span className="text-blue-400">(Not obvious)</span> Is the vehicle still <b className="font-bold text-red-400">on fire</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Not/no longer on fire",
          questionDisplay: "Vehicle not/no longer on fire.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Vehicle on fire",
          questionDisplay: "Vehicle on fire.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if vehicle on fire",
          questionDisplay: "Unknown if vehicle on fire.",
          updateCode: "71B01",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-blue-400">What type of caller is this?</p>,
      questionType: "select",
      answers: [
        {
          answer: "First (1st) party",
          display: "1st pty caller",
          questionDisplay: "First (1st) party caller.",
          continue: true,
        },
        {
          answer: "Second (2nd) party",
          display: "2nd pty caller",
          questionDisplay: "Second (2nd) party caller.",
          continue: true,
        },
        {
          answer: "Third (3rd) party",
          display: "3rd pty caller",
          questionDisplay: "Third (3rd) party caller.",
          continue: true,
        },
        {
          answer: "Fourth (4th) party",
          display: "4th pty caller",
          questionDisplay: "Fourth (4th) party caller.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk caller type",
          questionDisplay: "Unknown caller type.",
          continue: true,
        }
      ]
    },

    // Trapped question line

    // First pty
    {
      text: <p className="text-red-400">I need to <b className="font-bold">confirm</b>, are you <b className="font-bold">out</b> of the <b className="font-bold">vehicle</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const onFireAnswer = answers?.find((a) => a.question === "(Not obvious) Is the vehicle still on fire?")?.answer;
        const callerTypeAnswer = answers?.find((a) => a.question === "What type of caller is this?")?.answer;
        return onFireAnswer === "Yes" && callerTypeAnswer === "First (1st) party"
      },
      preRenderLogic: "the vehicle is on fire and the caller is the first party",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Out of vehicle",
          questionDisplay: "Caller is out of the vehicle.",
          continue: true,
        },
        {
          answer: "No",
          display: "Still in vehicle",
          questionDisplay: "Caller is still in the vehicle.",
          continue: true,
        },
      ]
    },

    {
      text: <p className="text-red-400">Are you <b className="font-bold">able</b> to <b className="font-bold">get out</b> of the vehicle?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const outOfVehicleAnswer = answers?.find((a) => a.question === "I need to confirm, are you out of the vehicle?")?.answer;
        return outOfVehicleAnswer === "No"
      },
      preRenderLogic: "the caller is still in the vehicle",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Able to get out",
          questionDisplay: "Caller is able to get out of the vehicle.",
          continue: true,
        },
        {
          answer: "No",
          display: "UNABLE TO GET OUT",
          questionDisplay: "Caller is UNABLE TO GET OUT of the vehicle.",
          updateCode: "71E01",
          continue: true,
          send: true
        }
      ]
    },

    // 2nd-4th pty
    {
      text: <p className="text-red-400">Is <b className="font-bold">everyone</b> out of the vehicle?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const onFireAnswer = answers?.find((a) => a.question === "(Not obvious) Is the vehicle still on fire?")?.answer;
        const callerTypeAnswer = answers?.find((a) => a.question === "What type of caller is this?")?.answer;
        return onFireAnswer === "Yes" && callerTypeAnswer !== "First (1st) party"
      },
      preRenderLogic: "the vehicle is on fire and the caller is not the first party",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Everyone out of vehicle",
          questionDisplay: "Everyone is out of the vehicle.",
          continue: true,
        },
        {
          answer: "No",
          display: "Not everyone out",
          questionDisplay: "Not everyone is out of the vehicle.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if everyone out",
          questionDisplay: "Unknown if everyone is out of the vehicle.",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Are people <b className="font-bold">trapped</b> or <b className="font-bold">unable to get out</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const everyoneOutAnswer = answers?.find((a) => a.question === "Is everyone out of the vehicle?")?.answer;
        return everyoneOutAnswer === "No"
      },
      preRenderLogic: "not everyone is out of the vehicle",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "People trapped/unable to get out",
          questionDisplay: "People are trapped or unable to get out of the vehicle.",
          updateCode: "71E01",
          continue: true,
          send: true
        },
        {
          answer: "No",
          display: "No one trapped",
          questionDisplay: "No one is trapped or unable to get out of the vehicle.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if trapped/unable to get out",
          questionDisplay: "Unknown if people are trapped or unable to get out of the vehicle.",
          updateCode: "71E01",
          continue: true,
          send: true
        }
      ]
    },

    // Extinguished questions
    {
      text: <p>What <b className="font-bold">type</b> of <b className="font-bold">vehicle</b> was on fire?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const onFireAnswer = answers?.find((a) => a.question === "(Not obvious) Is the vehicle still on fire?")?.answer;
        return onFireAnswer === "No"
      },
      preRenderLogic: "the vehicle is not/no longer on fire",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Passenger vehicle",
          display: "Passenger veh involved",
          questionDisplay: "The vehicle that was on fire is a passenger vehicle.",
          updateCode: "71A01",
          continue: true,
          send: true
        },
        {
          answer: "Commercial vehicle",
          display: "Comm veh involved",
          questionDisplay: "The vehicle that was on fire is a commercial vehicle.",
          updateCode: "71B03",
          continue: true,
          send: true
        },
        {
          answer: "Large fuel/fire load vehicle",
          display: "Large fuel/fire load veh involved",
          questionDisplay: "The vehicle that was on fire is a large fuel/fire load vehicle.",
          updateCode: "71B04",
          continue: true,
          send: true
        },
        {
          answer: "Agricultural/farm vehicle",
          display: "Agricultural/farm veh involved",
          questionDisplay: "The vehicle that was on fire is an agricultural/farm vehicle.",
          updateCode: "71B05",
          continue: true,
          send: true
        },
        {
          answer: "Excavation/construction machinery",
          display: "Excavation/constr mach involved",
          questionDisplay: "The vehicle that was on fire is excavation/construction machinery.",
          updateCode: "71B05",
          continue: true,
          send: true
        },
        {
          answer: "Other:",
          display: "Other veh: {input} involved",
          questionDisplay: "The vehicle that was on fire is another type of vehicle.",
          updateCode: "71A01",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk veh type",
          questionDisplay: "The vehicle that was on fire is an unknown type of vehicle.",
          updateCode: "71A01",
          continue: true,
          send: true
        }
      ]
    },

    // Delta level questioning
    {
      text: <p>How <b className="font-bold">many</b> vehicles were involved?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const onFireAnswer = answers?.find((a) => a.question === "(Not obvious) Is the vehicle still on fire?")?.answer;
        return onFireAnswer === "Yes"
      },
      preRenderLogic: "the vehicle is on fire",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single vehicle",
          display: "Single veh involved",
          questionDisplay: "Single vehicle involved.",
          continue: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} vehs involved",
          questionDisplay: "{input} vehicles involved.",
          updateCode: "71D02",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk num vehs",
          questionDisplay: "Unknown how many vehicles are involved.",
          continue: true,
        }
      ]
    },

    {
      text: <p><span className="text-blue-400">(Not obvious)</span> Is the <b className="font-bold">fire</b> in a <b className="font-bold">tunnel</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const onFireAnswer = answers?.find((a) => a.question === "(Not obvious) Is the vehicle still on fire?")?.answer;
        return onFireAnswer === "Yes"
      },
      preRenderLogic: "the vehicle is on fire",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Not in tunnel",
          questionDisplay: "Fire not in a tunnel.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "In tunnel",
          questionDisplay: "Fire in a tunnel.",
          preRenderInstructions: (answers) => {
            const numVehicles = answers?.find((a) => a.question === "How many vehicles were involved?")?.answer;
            return numVehicles === "Single vehicle"
          },
          preRenderLogic: "there is a single vehicle involved",
          preRenderDependencies: ["answers"],
          updateCode: "71D07",
          continue: true,
          send: true
        },
        {
          answer: "Yes",
          display: "In tunnel",
          questionDisplay: "Fire in a tunnel.",
          preRenderInstructions: (answers) => {
            const numVehicles = answers?.find((a) => a.question === "How many vehicles were involved?")?.answer;
            return numVehicles === "Multiple (input number):"
          },
          preRenderLogic: "there are multiple vehicles involved",
          preRenderDependencies: ["answers"],
          updateCode: "71D08",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if in tunnel",
          questionDisplay: "Unknown if fire is in a tunnel.",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is the fire <b className="font-bold">threatening</b> anything?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const onFireAnswer = answers?.find((a) => a.question === "(Not obvious) Is the vehicle still on fire?")?.answer;
        return onFireAnswer === "Yes"
      },
      preRenderLogic: "the vehicle is on fire",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Not threatening",
          questionDisplay: "Fire not threatening anything.",
          continue: true,
        },
        {
          answer: "Building/structure",
          display: "Threatens bldg/structure",
          questionDisplay: "Fire threatens a building/structure.",
          updateCode: "71D03",
          continue: true,
          send: true
        },
        {
          answer: "Non-structure object(s):",
          display: "Threatens non-structure obj(s): {input}",
          questionDisplay: "Fire threatens non-structure object(s): {input}.",
          updateCode: "71C01",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Vegitation/Wildland/Brush/Grass",
          display: "Threatens veg/wildland/brush/grass",
          questionDisplay: "Fire threatens vegitation/wildland/brush/grass.",
          updateCode: "71C04",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if threatens",
          questionDisplay: "Unknown if fire threatens anything.",
          continue: true,
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of <b className="font-bold">vehicle</b> is involved?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const onFireAnswer = answers?.find((a) => a.question === "(Not obvious) Is the vehicle still on fire?")?.answer;
        const numVehicles = answers?.find((a) => a.question === "How many vehicles were involved?")?.answer;
        return onFireAnswer === "Yes" && numVehicles === "Single vehicle"
      },
      preRenderLogic: "the vehicle is on fire and there is a single vehicle involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Passenger vehicle",
          display: "Passenger veh involved",
          questionDisplay: "Passenger vehicle involved.",
          updateCode: "71B01",
          continue: true,
          send: true
        },
        {
          answer: "Commercial vehicle",
          display: "Comm veh involved",
          questionDisplay: "Commercial vehicle involved.",
          updateCode: "71D04",
          continue: true,
          send: true
        },
        {
          answer: "Motorhome/RV",
          display: "Motorhome/RV involved",
          questionDisplay: "Motorhome/RV involved.",
          updateCode: "71D04",
          continue: true,
          send: true
        },
        {
          answer: "Large fuel/fire load vehicle",
          display: "Large fuel/fire load veh involved",
          questionDisplay: "Large fuel/fire load vehicle involved.",
          updateCode: "71D05",
          continue: true,
          send: true
        },
        {
          answer: "Agricultural/farm vehicle",
          display: "Agricultural/farm veh involved",
          questionDisplay: "Agricultural/farm vehicle involved.",
          updateCode: "71D06",
          continue: true,
          send: true
        },
        {
          answer: "Excavation/construction machinery",
          display: "Excavation/constr mach involved",
          questionDisplay: "Excavation/construction machinery involved.",
          updateCode: "71D06",
          continue: true,
          send: true
        },
        {
          answer: "ELECTRIC vehicle",
          display: "ELECTRIC veh involved",
          questionDisplay: "ELECTRIC vehicle involved.",
          updateCode: "71C02",
          continue: true,
          send: true
        },
        {
          answer: "Delivery vehicle",
          display: "Delivery veh involved",
          questionDisplay: "Delivery vehicle involved.",
          updateCode: "71C03",
          continue: true,
          send: true
        },
        {
          answer: "Motorcycle",
          display: "Motorcycle involved",
          questionDisplay: "Motorcycle involved.",
          updateCode: "71B02",
          continue: true,
          send: true
        },
        {
          answer: "Scooter",
          display: "Scooter involved",
          questionDisplay: "Scooter involved.",
          updateCode: "71B03",
          continue: true,
          send: true
        },
        {
          answer: "ATV",
          display: "ATV involved",
          questionDisplay: "ATV involved.",
          updateCode: "71B03",
          continue: true,
          send: true
        },
        {
          answer: "Other:",
          display: "Other veh: {input} involved",
          questionDisplay: "Other vehicle: {input} involved.",
          updateCode: "71B01",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk veh type",
          questionDisplay: "Unknown vehicle type involved.",
          updateCode: "71B01",
          continue: true,
          send: true
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
          updateSuffix: "H",
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
    },

    {
      text: <p className="text-red-400">Does the vehicle use <b className="font-bold">ALTERNATIVE FUEL</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No alt fuel rptd",
          questionDisplay: "No alternative fuel reported.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Alt fuel rptd",
          questionDisplay: "Yes alternative fuel reported.",
          updateSuffix: "A",
          preRenderInstructions: (answers) => {
            const hazAnswer = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
            return hazAnswer !== "Yes";
          },
          preRenderLogic: "no hazardous materials or chemicals are involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Yes",
          display: "Alt fuel rptd",
          questionDisplay: "Yes alternative fuel reported.",
          updateSuffix: "M",
          preRenderInstructions: (answers) => {
            const hazAnswer = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
            return hazAnswer === "Yes";
          },
          preRenderLogic: "hazardous materials or chemicals are involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Doesn't know",
          display: "Unk if alt fuel",
          questionDisplay: "Doesn't know if alternative fuel is used.",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Is anyone <b className="font-bold">hurt</b> or <b className="font-bold">sick</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No injs/sick persons rptd",
          questionDisplay: "No injured or sick persons reported.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Injs/sick persons rptd",
          questionDisplay: "Yes injured or sick persons reported.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if injs/sick persons",
          questionDisplay: "Unknown if there are injured or sick persons.",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">How <b className="font-bold">many</b> <b className="font-bold">injured</b> or <b className="font-bold">sick</b> persons are there?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const injsAnswer = answers?.find((a) => a.question === "Is anyone hurt or sick?")?.answer;
        return injsAnswer === "Yes"
      },
      preRenderLogic: "there are injured or sick persons",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single inj/sick person",
          questionDisplay: "Single injured or sick person.",
          updateSuffix: "R",
          preRenderInstructions: (answers) => {
            const altFuelAnswer = answers?.find((a) => a.question === "Does the vehicle use ALTERNATIVE FUEL?")?.answer;
            const hazAnswer = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
            return altFuelAnswer === "Yes" && hazAnswer !== "Yes";
          },
          preRenderLogic: "the vehicle uses alternative fuel and no hazardous materials or chemicals are involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Single person",
          display: "Single inj/sick person",
          questionDisplay: "Single injured or sick person.",
          updateSuffix: "T",
          preRenderInstructions: (answers) => {
            const altAnswer = answers?.find((a) => a.question === "Does the vehicle use ALTERNATIVE FUEL?")?.answer;
            const hazAnswer = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
            return altAnswer !== "Yes" && hazAnswer === "Yes";
          },
          preRenderLogic: "the vehicle does not use alternative fuel and hazardous materials or chemicals are involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Single person",
          display: "Single inj/sick person",
          questionDisplay: "Single injured or sick person.",
          updateSuffix: "V",
          preRenderInstructions: (answers) => {
            const altAnswer = answers?.find((a) => a.question === "Does the vehicle use ALTERNATIVE FUEL?")?.answer;
            const hazAnswer = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
            return altAnswer === "Yes" && hazAnswer === "Yes";
          },
          preRenderLogic: "the vehicle uses alternative fuel and hazardous materials or chemicals are involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Single person",
          display: "Single inj/sick person",
          questionDisplay: "Single injured or sick person.",
          updateSuffix: "X",
          preRenderInstructions: (answers) => {
            const altAnswer = answers?.find((a) => a.question === "Does the vehicle use ALTERNATIVE FUEL?")?.answer;
            const hazAnswer = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
            return altAnswer !== "Yes" && hazAnswer !== "Yes";
          },
          preRenderLogic: "the vehicle does not use alternative fuel and hazardous materials or chemicals are involved",
          preRenderDependencies: ["answers"],
          continue: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} inj/sick persons",
          questionDisplay: "{input} injured or sick persons.",
          updateSuffix: "S",
          preRenderInstructions: (answers) => {
            const altFuelAnswer = answers?.find((a) => a.question === "Does the vehicle use ALTERNATIVE FUEL?")?.answer;
            const hazAnswer = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
            return altFuelAnswer === "Yes" && hazAnswer !== "Yes";
          },
          preRenderLogic: "the vehicle uses alternative fuel and no hazardous materials or chemicals are involved",
          preRenderDependencies: ["answers"],
          continue: true,
          input: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} inj/sick persons",
          questionDisplay: "{input} injured or sick persons.",
          updateSuffix: "U",
          preRenderInstructions: (answers) => {
            const altAnswer = answers?.find((a) => a.question === "Does the vehicle use ALTERNATIVE FUEL?")?.answer;
            const hazAnswer = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
            return altAnswer !== "Yes" && hazAnswer === "Yes";
          },
          preRenderLogic: "the vehicle does not use alternative fuel and hazardous materials or chemicals are involved",
          preRenderDependencies: ["answers"],
          continue: true,
          input: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} inj/sick persons",
          questionDisplay: "{input} injured or sick persons.",
          updateSuffix: "W",
          preRenderInstructions: (answers) => {
            const altAnswer = answers?.find((a) => a.question === "Does the vehicle use ALTERNATIVE FUEL?")?.answer;
            const hazAnswer = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
            return altAnswer === "Yes" && hazAnswer === "Yes";
          },
          preRenderLogic: "the vehicle does use alternative fuel and hazardous materials or chemicals are involved",
          preRenderDependencies: ["answers"],
          continue: true,
          input: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} inj/sick persons",
          questionDisplay: "{input} injured or sick persons.",
          updateSuffix: "Y",
          preRenderInstructions: (answers) => {
            const altAnswer = answers?.find((a) => a.question === "Does the vehicle use ALTERNATIVE FUEL?")?.answer;
            const hazAnswer = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
            return altAnswer !== "Yes" && hazAnswer !== "Yes";
          },
          preRenderLogic: "the vehicle does not use alternative fuel and hazardous materials or chemicals are involved",
          preRenderDependencies: ["answers"],
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk num injs/sick persons",
          questionDisplay: "Unknown how many injured or sick persons there are.",
          continue: true,
        }
      ]
    },
  ],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "71A01",
          text: "Vehicle Fire (Extinguished)",
          recResponse: 338,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 339,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 340,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 341,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 342,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 343,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 344,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 345,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 346,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 348,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 349,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "71B00",
          text: "Override (Bravo)",
          recResponse: 338,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 339,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 340,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 341,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 342,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 343,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 344,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 345,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 346,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 348,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 349,
            },
          ],
        },
        {
          code: "71B01",
          text: "Vehicle Fire",
          recResponse: 338,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 339,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 340,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 341,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 342,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 343,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 344,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 345,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 346,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 348,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 349,
            },
          ],
        },
        {
          code: "71B02",
          text: "Motorcycle/Scooter/ATV",
          recResponse: 350,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 351,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 352,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 353,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 354,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 355,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 356,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 357,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 358,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 359,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 360,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 361,
            },
          ],
        },
        {
          code: "71B03",
          text: "Comm Vehicle (Extinguished)",
          recResponse: 338,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 339,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 340,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 341,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 342,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 343,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 344,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 345,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 346,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 348,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 349,
            },
          ],
        },
        {
          code: "71B04",
          text: "Large Fuel/Fire Load Vehicle (Extinguished)",
          recResponse: 338,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 339,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 340,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 341,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 342,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 343,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 344,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 345,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 346,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 348,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 349,
            },
          ],
        },
        {
          code: "71B05",
          text: "Agricultural/Farm/Excavation/Construction Machinery (Extinguished)",
          recResponse: 338,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 339,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 340,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 341,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 342,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 343,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 344,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 345,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 346,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 348,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 349,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "71C00",
          text: "Override (Charlie)",
          recResponse: 362,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 363,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 364,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 365,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 366,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 367,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 368,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 369,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 370,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 371,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 372,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 373,
            },
          ],
        },
        {
          code: "71C01",
          text: "Vehicle Fire Threatening Non-Structure Object(s)",
          recResponse: 362,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 363,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 364,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 365,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 366,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 367,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 368,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 369,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 370,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 371,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 372,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 373,
            },
          ],
        },
        {
          code: "71C02",
          text: "Electrical Vehicle",
          recResponse: 340,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 341,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 340,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 341,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 374,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 375,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 345,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 374,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 347,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 375,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 345,
            },
          ],
        },
        {
          code: "71C03",
          text: "Delivery Vehicle",
          recResponse: 376,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 377,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 378,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 379,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 380,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 381,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 382,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 383,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 384,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 385,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 386,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 397,
            },
          ],
        },
        {
          code: "71C04",
          text: "Vehicle Fire Threatening Vegitation/Wildland/Brush/Gass",
          recResponse: 362,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 363,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 364,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 365,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 366,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 367,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 368,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 369,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 370,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 371,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 372,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 373,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "71D00",
          text: "Override (Delta)",
          recResponse: 388,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 389,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 390,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 391,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 392,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 393,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 394,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 395,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 396,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 397,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 398,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 399,
            },
          ],
        },
        {
          code: "71D01",
          text: "Vehicle Fire (Occupants Trapped)",
          recResponse: 388,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 389,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 390,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 391,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 392,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 393,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 394,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 395,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 396,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 397,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 398,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 399,
            },
          ],
        },
        {
          code: "71D02",
          text: "Mult Vehicles on Fire",
          recResponse: 400,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 401,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 402,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 403,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 404,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 405,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 406,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 407,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 408,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 409,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 410,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 411,
            },
          ],
        },
        {
          code: "71D03",
          text: "Vehicle Fire w/ Threatened Building/Structure",
          recResponse: 233,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 278,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 278,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 278,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 283,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 284,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 283,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 284,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 283,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 284,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 268,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 269,
            },
          ],
        },
        {
          code: "71D04",
          text: "Comm Vehicle",
          recResponse: 376,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 377,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 378,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 379,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 380,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 381,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 382,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 383,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 384,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 385,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 386,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 397,
            },
          ],
        },
        {
          code: "71D05",
          text: "Large Fuel/Fire Load Vehicle",
          recResponse: 376,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 377,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 378,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 379,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 380,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 381,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 382,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 383,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 384,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 385,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 386,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 397,
            },
          ],
        },
        {
          code: "71D06",
          text: "Agricultural/Farm/Excavation/Construction Machinery",
          recResponse: 376,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 377,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 378,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 379,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 380,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 381,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 382,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 383,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 384,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 385,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 386,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 397,
            },
          ],
        },
        {
          code: "71D07",
          text: "Vehicle Fire in Tunnel",
          recResponse: 412,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 413,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 414,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 415,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 416,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 417,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 418,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 419,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 420,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 421,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 422,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 423,
            },
          ],
        },
        {
          code: "71D08",
          text: "Mult Vehicles on Fire in Tunnel",
          recResponse: 412,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 413,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 414,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 415,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 416,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 417,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 418,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 419,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 420,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 421,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 422,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 423,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "71E00",
          text: "Override (Echo)",
          recResponse: 388,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 389,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 390,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 391,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 392,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 393,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 394,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 395,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 396,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 397,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 398,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 399,
            },
          ],
        },
        {
          code: "71E01",
          text: "Vehicle Fire (Occupants Trapped)",
          recResponse: 388,
          subCodes: [
            {
              suffix: "A",
              text: "Alternative Fuel",
              recResponse: 389,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 390,
            },
            {
              suffix: "M",
              text: "Alternative Fuel & Hazmat",
              recResponse: 391,
            },
            {
              suffix: "R",
              text: "Alternative Fuel w/ Single Injured Person",
              recResponse: 392,
            },
            {
              suffix: "S",
              text: "Alternative Fuel w/ Mult Injured Persons",
              recResponse: 393,
            },
            {
              suffix: "T",
              text: "Hazmat w/ Single Injured Person",
              recResponse: 394,
            },
            {
              suffix: "U",
              text: "Hazmat w/ Mult Injured Persons",
              recResponse: 395,
            },
            {
              suffix: "V",
              text: "Alternative Fuel & Hazmat w/ Single Injured Person",
              recResponse: 396,
            },
            {
              suffix: "W",
              text: "Alternative Fuel & Hazmat w/ Mult Injured Persons",
              recResponse: 397,
            },
            {
              suffix: "X",
              text: "Single Sick/Injured Person",
              recResponse: 398,
            },
            {
              suffix: "Y",
              text: "Mult Sick/Injured Persons",
              recResponse: 399,
            },
          ],
        },
      ],
    },
  ],
};
