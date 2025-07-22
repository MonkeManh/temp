import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const MOTOR_VEHICLE_COLLISION: IFireComplaint = {
  protocol: 77,
  name: "Motor Vehicle Collision",
  shortName: "Motor Vehicle Collision",
  description: <></>,
  services: [
    { name: "Fire", priority: 4 },
    { name: "EMS", priority: 4 },
    { name: "Police", priority: true },
  ],
  defaultPriority: "B",
  defaultPlan: 474,
  defaultCode: "77B02",
  questions: [
    {
      text: (
        <p className="text-blue-400">
          What <b className="font-bold">type</b> of caller is this?
        </p>
      ),
      questionType: "select",
      omit: true,
      answers: [
        {
          answer: "First (1st) party",
          display: "First pty caller",
          questionDisplay: "The caller is a first (1st) party.",
          continue: true,
        },
        {
          answer: "Second (2nd) party",
          display: "Second pty caller",
          questionDisplay: "The caller is a second (2nd) party.",
          continue: true,
        },
        {
          answer: "Third (3rd) party",
          display: "Third pty caller",
          questionDisplay: "The caller is a third (3rd) party.",
          continue: true,
        },
        {
          answer: "Fourth (4th) party",
          display: "Fourth pty caller",
          questionDisplay: "The caller is a fourth (4th) party.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk caller pty",
          questionDisplay: "The caller's party is unknown.",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          <span className="text-blue-400">(Not obvious)</span> Are you on scene?
        </p>
      ),
      questionType: "select",
      omit: true,
      answers: [
        {
          answer: "No",
          display: "Not on scene",
          questionDisplay: "The caller is not on scene.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "On scene",
          questionDisplay: "The caller is on scene.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if on scene",
          questionDisplay: "Unknown if the caller is on scene.",
          continue: true,
        },
      ],
    },

    // DELTA LEVEL QUESTIONS

    // Pileup
    {
      text: (
        <p>
          How <b className="font-bold">many</b> vehicles are{" "}
          <b className="font-bold">involved</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Single",
          display: "Single vehicle involved",
          questionDisplay: "A single vehicle is involved.",
          continue: true,
        },
        {
          answer: "Less than 10:",
          display: "{input} vehicles involved",
          questionDisplay: "Less than 10 vehicles are involved.",
          continue: true,
          input: true,
        },
        {
          answer: "10 or more:",
          display: "{input} vehicles involved",
          questionDisplay: "10 or more vehicles are involved.",
          updateCode: "77D03",
          continue: true,
          input: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk num of vehs involved",
          questionDisplay: "Unknown number of vehicles are involved.",
          updateCode: "77B02",
          continue: true,
        },
      ],
    },

    // Commercial Vehicle
    {
      text: (
        <p>
          Were/are there any <b className="font-bold">commercial vehicles</b>{" "}
          involved?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No comm vehs",
          questionDisplay: "No commercial vehicles are involved.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Comm veh(s) involved",
          questionDisplay: "Commercial vehicles are involved.",
          updateCode: "77D10",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if comm vehs",
          questionDisplay: "Unknown if any commercial vehicles are involved.",
          continue: true,
        },
      ],
    },

    // Ejection
    {
      text: (
        <p className="text-red-400">
          Was anyone <b className="font-bold">thrown</b> from the vehicle?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No one thrown out",
          questionDisplay: "No one was thrown from the vehicle.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Someone thrown out",
          questionDisplay: "Someone was thrown from the vehicle.",
          updateCode: "77D05",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if anyone thrown out",
          questionDisplay: "Unknown if anyone was thrown from the vehicle.",
          continue: true,
        },
      ],
    },

    // Trapped
    {
      text: (
        <p className="text-red-400">
          Is anyone <b className="font-bold">trapped</b> in the vehicle?
        </p>
      ),
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
          display: "Person trapped/pinned",
          questionDisplay: "Someone is trapped or pinned in the vehicle.",
          updateCode: "77D04",
          updateSuffix: "T",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if anyone trapped/pinned",
          questionDisplay:
            "Unknown if anyone is trapped or pinned in the vehicle.",
          continue: true,
        },
      ],
    },

    // Rollover
    {
      text: (
        <p>
          Did any vehicle <b className="font-bold">rollover</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No overturn",
          questionDisplay: "No vehicle has rolled over.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "A vehicle overturned",
          questionDisplay: "A vehicle has rolled over.",
          updateCode: "77D02",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if overturn",
          questionDisplay: "Unknown if any vehicle has rolled over.",
          continue: true,
        },
      ],
    },

    // Building Involvement
    {
      text: (
        <p>
          Did any vehicle(s) <b className="font-bold">strike</b> or{" "}
          <b className="font-bold">hit</b> a building?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No bldgs involved",
          questionDisplay: "No buildings are involved.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Bldg(s) involved",
          questionDisplay: "Buildings are involved.",
          updateCode: "77D08",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if bldgs involved",
          questionDisplay: "Unknown if any buildings are involved.",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">type</b> of building was involved?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const didStrikeBldg = answers?.find(
          (a) => a.question === "Did any vehicle(s) strike or hit a building?"
        )?.answer;
        return didStrikeBldg === "Yes";
      },
      preRenderLogic: "a building is involved",
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
          display: "Residential (mult) bldg",
          questionDisplay: "A Residential (multiple) building is involved.",
          continue: true,
        },
        {
          answer: "Residential (single)",
          display: "Residential (single) bldg",
          questionDisplay: "A Residential (single) building is involved.",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Other bldg: {input}",
          questionDisplay: "Another type of building is involved: {input}.",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk bldg type",
          questionDisplay: "Unknown what type of building is involved.",
          continue: true,
        },
      ],
    },

    // Motorcycle
    {
      text: (
        <p>
          Were any <b className="font-bold">motorcycles</b> involved?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No mcycles involved",
          questionDisplay: "No motorcycles are involved.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Mcycle(s) involved",
          questionDisplay: "Motorcycles are involved.",
          updateCode: "77D07",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if mcycles involved",
          questionDisplay: "Unknown if any motorcycles are involved.",
          continue: true,
        },
      ],
    },

    // Peds/Bikes
    {
      text: (
        <p>
          Were any <b className="font-bold">pedestrians</b> or{" "}
          <b className="font-bold">bicyclists</b> involved?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No peds/bikes involved",
          questionDisplay: "No pedestrians or bicyclists are involved.",
          continue: true,
        },
        {
          answer: "Pedestrian(s)",
          display: "Ped(s) involved",
          questionDisplay: "Pedestrian(s) are involved.",
          updateCode: "77D06",
          continue: true,
          send: true
        },
        {
          answer: "Bicyclist(s)",
          display: "Bicyclist(s) involved",
          questionDisplay: "Bicyclist(s) are involved.",
          updateCode: "77D06",
          continue: true,
          send: true
        },
        {
          answer: "Both",
          display: "Peds & bikes involved",
          questionDisplay: "Both pedestrians and bicyclists are involved.",
          updateCode: "77D06",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if peds/bikes involved",
          questionDisplay:
            "Unknown if any pedestrians or bicyclists are involved.",
          continue: true,
        },
      ],
    },

    // Stable vehicle
    {
      text: (
        <p>
          Is the <b className="font-bold">vehicle</b> stable?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const callerIsOnScene = answers?.find(
          (a) => a.question === "Are you on scene?"
        )?.answer;
        const numVehs = answers?.find(
          (a) => a.question === "How many vehicles are involved?"
        )?.answer;
        return callerIsOnScene === "Yes" && numVehs === "Single";
      },
      preRenderLogic: "the caller is on scene and a single vehicle is involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Veh is stable",
          questionDisplay: "The vehicle is stable.",
          continue: true,
        },
        {
          answer: "No",
          display: "Veh is unstable",
          questionDisplay: "The vehicle is unstable.",
          updateCode: "77D09",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if veh is stable",
          questionDisplay: "Unknown if the vehicle is stable.",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Are the <b className="font-bold">vehicles</b> stable?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const callerIsOnScene = answers?.find(
          (a) => a.question === "Are you on scene?"
        )?.answer;
        const numVehs = answers?.find(
          (a) => a.question === "How many vehicles are involved?"
        )?.answer;
        return (
          callerIsOnScene === "Yes" &&
          numVehs !== "Single" &&
          numVehs !== "Unknown"
        );
      },
      preRenderLogic:
        "the caller is on scene and multiple vehicles are involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Vehs are stable",
          questionDisplay: "The vehicles are stable.",
          continue: true,
        },
        {
          answer: "No",
          display: "Vehs are unstable",
          questionDisplay: "The vehicles are unstable.",
          updateCode: "77D09",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if vehs are stable",
          questionDisplay: "Unknown if the vehicles are stable.",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-400">
          Are there any <b className="font-bold">hazardous materials</b> or{" "}
          <b className="font-bold">chemicals</b> involved?
        </p>
      ),
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
          updateSuffix: "H",
          preRenderInstructions: (answers) => {
            const trapped = answers?.find(
              (a) => a.question === "Is anyone trapped in the vehicle?"
            )?.answer;

            return trapped !== "Yes";
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "Chems/hazmat involved",
          questionDisplay: "Hazardous materials or chemicals are involved.",
          updateSuffix: "N",
          preRenderInstructions: (answers) => {
            const trapped = answers?.find(
              (a) => a.question === "Is anyone trapped in the vehicle?"
            )?.answer;

            return trapped === "Yes";
          },
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if chems/hazmat involved",
          questionDisplay:
            "Unknown if hazardous materials or chemicals are involved.",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-red-400">
          Do you see any <b className="font-bold">placards</b> or{" "}
          <b className="font-bold">chemical information</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const hazmatInvolved = answers?.find(
          (a) =>
            a.question ===
            "Are there any hazardous materials or chemicals involved?"
        )?.answer;
        return hazmatInvolved === "Yes";
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
          answer: "Yes:",
          display: "Placards/chem info: {input}",
          questionDisplay:
            "Placards or chemical information is visible: {input}.",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk if placards/chem info",
          questionDisplay:
            "Unknown if any placards or chemical information is visible.",
          continue: true,
        },
      ],
    },

    // HIGH OCCUPANCY
    {
      text: (
        <p>
          How <b className="font-bold">many people</b> were inside?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const vehRoll = answers?.find(
          (a) => a.question === "Did any vehicle rollover?"
        )?.answer;
        const onScene = answers?.find(
          (a) => a.question === "Are you on scene?"
        )?.answer;
        return vehRoll === "Yes" || onScene === "Yes";
      },
      preRenderLogic: "a vehicle has rolled over or the caller is on scene",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single",
          display: "Single occupant",
          questionDisplay: "A single person was inside the vehicle.",
          continue: true,
        },
        {
          answer: "Less than 4:",
          display: "{input} occupants",
          questionDisplay: "Less than 4 people were inside the vehicle.",
          continue: true,
          input: true,
        },
        {
          answer: "4 or more:",
          display: "{input} occupants",
          questionDisplay: "4 or more people were inside the vehicle.",
          updateCode: "77D01",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk num of occupants",
          questionDisplay: "Unknown number of people were inside the vehicle.",
          continue: true,
        },
      ],
    },

    // ON SCENE QUESTIONS
    {
      text: (
        <p>
          Is everyone <b className="font-bold">conscious</b> and{" "}
          <b className="font-bold">breathing</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Everyone is conscious and breathing",
          questionDisplay: "Everyone is conscious and breathing.",
          continue: true,
        },
        {
          answer: "Unconscious",
          display: "Someone unconscious",
          questionDisplay: "Someone is unconscious.",
          updateCode: "77D12",
          continue: true,
          send: true,
        },
        {
          answer: "Not breathing",
          display: "Someone not breathing",
          questionDisplay: "Someone is not breathing.",
          updateCode: "77D11",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if everyone conscious/breathing",
          questionDisplay: "Unknown if everyone is conscious and breathing.",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is everyone <b className="font-bold">completely alert</b> (responding
          appropriately)?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const everyoneConscious = answers?.find(
          (a) => a.question === "Is everyone conscious and breathing?"
        )?.answer;
        return everyoneConscious === "Yes";
      },
      preRenderLogic:
        "someone is injured and everyone is conscious and breathing",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Everyone completely awake",
          questionDisplay: "Everyone is completely alert.",
          continue: true,
        },
        {
          answer: "No",
          display: "Someone not completely awake",
          questionDisplay: "Someone is not completely alert.",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if everyone completely awake",
          questionDisplay: "Unknown if everyone is completely alert.",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Are they <b className="font-bold">breathing</b> normally?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const isAlert = answers?.find(
          (a) =>
            a.question ===
            "Is everyone completely alert (responding appropriately)?"
        )?.answer;
        return isAlert === "No";
      },
      preRenderLogic: "someone is injured and not everyone is completely alert",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay: "They are breathing normally.",
          updateCode: "77D14",
          continue: true,
          send: true,
        },
        {
          answer: "No",
          display: "Not breathing nlly",
          questionDisplay: "They are not breathing normally.",
          updateCode: "77D13",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if breathing nlly",
          questionDisplay: "Unknown if they are breathing normally.",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is there any <b className="font-bold text-red-400">SERIOUS</b>{" "}
          bleeding?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No SERIOUS bleeding",
          questionDisplay: "There is no SERIOUS bleeding.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "SERIOUS bleeding",
          questionDisplay: "There is SERIOUS bleeding.",
          updateCode: "77B03",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if SERIOUS bleeding",
          questionDisplay: "Unknown if there is SERIOUS bleeding.",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p className="text-blue-400">
          What <b className="font-bold">type</b> of incident is this?
        </p>
      ),
      questionType: "select",
      omit: true,
      answers: [
        {
          answer: "Traffic collision",
          display: "Traffic collision",
          questionDisplay: "The incident is a traffic collision.",
          continue: true,
        },
        {
          answer: "Traffic incident",
          display: "Traffic incident",
          questionDisplay: "The incident is a traffic incident.",
          continue: true,
        },
        {
          answer: "Traffic incident (> 6hrs ago)",
          display: "Traffic incident (previous)",
          questionDisplay: "The incident is a traffic incident (previous).",
          updateCode: "77A03",
          continue: true,
        },
        {
          answer: "Hit and run",
          display: "Hit and run",
          questionDisplay: "The incident is a hit and run.",
          continue: true,
        },
        {
          answer: "Hit and run (> 6hrs ago)",
          display: "Hit and run (previous)",
          questionDisplay: "The incident is a hit and run (previous).",
          updateCode: "77A04",
          continue: true,
        },
        {
          answer: "None of these",
          display: "None of these",
          questionDisplay: "The incident is none of these.",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Are there any <b className="font-bold">obvious injuries</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const onScene = answers?.find(
          (a) => a.question === "Are you on scene?"
        )?.answer;
        return onScene === "Yes";
      },
      preRenderLogic: "the caller is on scene",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No one injured",
          questionDisplay: "No one is injured.",
          dependency: (answers) => {
            const typeOfIncident = answers?.find(
              (a) => a.question === "What type of incident is this?"
            )?.answer;
            if (typeOfIncident === "Traffic incident") {
              return { code: "77B06" };
            } else if (typeOfIncident === "Hit and run") {
              return { code: "77B08" };
            }
          },
          continue: true,
          send: true,
        },
        {
          answer: "Yes",
          display: "Someone injured",
          questionDisplay: "Someone is injured.",
          dependency: (answers) => {
            const typeOfIncident = answers?.find(
              (a) => a.question === "What type of incident is this?"
            )?.answer;
            if (typeOfIncident === "Traffic incident") {
              return { code: "77C03" };
            } else if (typeOfIncident === "Hit and run") {
              return { code: "77C04" };
            }
          },
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if anyone injured",
          questionDisplay: "Unknown if anyone is injured.",
          dependency: (answers) => {
            const typeOfIncident = answers?.find(
              (a) => a.question === "What type of incident is this?"
            )?.answer;
            if (typeOfIncident === "Traffic incident") {
              return { code: "77B07" };
            } else if (typeOfIncident === "Hit and run") {
              return { code: "77B09" };
            } else {
              return { code: "77B02" };
            }
          },
          continue: true,
          send: true,
        },
      ],
    },

    {
      text: (
        <p>
          How <b className="font-bold">many</b> people are{" "}
          <b className="font-bold">injured</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const anyoneInjured = answers?.find(
          (a) => a.question === "Is anyone injured?"
        )?.answer;
        return anyoneInjured === "Yes";
      },
      preRenderLogic: "someone is injured",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single",
          display: "Single injured person",
          questionDisplay: "A single person is injured.",
          continue: true,
        },
        {
          answer: "Multiple (input number):",
          display: "{input} injured persons",
          questionDisplay: "Multiple people are injured.",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk num of injured",
          questionDisplay: "Unknown number of people are injured.",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Are there any <b className="font-bold">hazards</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No hazards present",
          questionDisplay: "There are no hazards present.",
          dependency: (answers) => {
            const injs = answers?.find(
              (a) => a.question === "Are there any obvious injuries?"
            )?.answer;
            if (injs === "No") {
              return { code: "77O02" };
            }
          },
          continue: true,
        },
        {
          answer: "Yes:",
          display: "Hazards present: {input}",
          questionDisplay: "There are hazards present: {input}.",
          dependency: (answers) => {
            const injs = answers?.find(
              (a) => a.question === "Are there any obvious injuries?"
            )?.answer;
            if (injs === "No") {
              return { code: "77A02" };
            } else if (injs === "Yes") {
              return { code: "77C01" };
            }
          },
        },
        {
          answer: "Unknown",
          display: "Unk if hazards present",
          questionDisplay: "Unknown if there are any hazards present.",
          updateCode: "77B02",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is the vehicle <b className="font-bold">blocking traffic</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const injs = answers?.find(
          (a) => a.question === "Are there any obvious injuries?"
        )?.answer;
        const hazards = answers?.find(
          (a) => a.question === "Are there any hazards?"
        )?.answer;
        return injs === "No" && hazards === "No";
      },
      preRenderLogic: "no one is injured and there are no hazards present",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Not blocking traffic",
          questionDisplay: "The vehicle is not blocking traffic.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Blocking traffic",
          questionDisplay: "The vehicle is blocking traffic.",
          updateCode: "77O01",
          updateSuffix: "B",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if blocking traffic",
          questionDisplay: "Unknown if the vehicle is blocking traffic.",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is there any <b className="font-bold">fuel</b> or{" "}
          <b className="font-bold">fluid</b> leaking?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No fuel/fluid leak",
          questionDisplay: "There is no fuel or fluid leaking.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Fuel/fluid leak",
          questionDisplay: "There is fuel or fluid leaking.",
          updateCode: "77C02",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if fuel/fluid leak",
          questionDisplay: "Unknown if there is fuel or fluid leaking.",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Did the <b className="font-bold">airbags</b> deploy?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No airbags deployed",
          questionDisplay: "The airbags did not deploy.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Airbags deployed",
          questionDisplay: "The airbags deployed.",
          updateSuffix: "D",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if airbags deployed",
          questionDisplay: "Unknown if the airbags deployed.",
          continue: true,
        },
      ],
    },

    {
      text: <p><span className="text-blue-400">(Not obvious)</span> Is there any <b className="font-bold">fire</b> present?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No fire present",
          questionDisplay: "There is no fire present.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Fire present",
          questionDisplay: "There is fire present.",
          updateSuffix: "F",
          preRenderInstructions: (answers) => {
            const hazmatInvolved = answers?.find(
              (a) =>
                a.question ===
                "Are there any hazardous materials or chemicals involved?"
            )?.answer;
            const isTrapped = answers?.find(
              (a) =>
                a.question ===
                "Is anyone trapped in the vehicle?"
            )?.answer;
            return hazmatInvolved !== "Yes" && isTrapped !== "Yes";
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "Fire present",
          questionDisplay: "There is fire present.",
          updateSuffix: "J",
          preRenderInstructions: (answers) => {
            const hazmatInvolved = answers?.find(
              (a) =>
                a.question ===
                "Are there any hazardous materials or chemicals involved?"
            )?.answer;
            const isTrapped = answers?.find(
              (a) =>
                a.question ===
                "Is anyone trapped in the vehicle?"
            )?.answer;

            return hazmatInvolved === "Yes" && isTrapped !== "Yes";
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "Fire present",
          questionDisplay: "There is fire present.",
          updateSuffix: "L",
          preRenderInstructions: (answers) => {
            const hazmatInvolved = answers?.find(
              (a) =>
                a.question ===
                "Are there any hazardous materials or chemicals involved?"
            )?.answer;
            const isTrapped = answers?.find(
              (a) =>
                a.question ===
                "Is anyone trapped in the vehicle?"
            )?.answer;

            return hazmatInvolved !== "Yes" && isTrapped === "Yes";
          },
        },
        {
          answer: "Yes",
          display: "Fire present",
          questionDisplay: "There is fire present.",
          updateSuffix: "N",
          preRenderInstructions: (answers) => {
            const hazmatInvolved = answers?.find(
              (a) =>
                a.question ===
                "Are there any hazardous materials or chemicals involved?"
            )?.answer;
            const isTrapped = answers?.find(
              (a) =>
                a.question ===
                "Is anyone trapped in the vehicle?"
            )?.answer;

            return hazmatInvolved === "Yes" && isTrapped === "Yes";
          },
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if fire present",
          questionDisplay: "Unknown if there is fire present.",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-blue-400">Did this occour on an interstate/highway?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Not on interstate/fwy/hwy",
          questionDisplay: "This did not occur on an interstate, freeway, or highway.",
          continue: true,
        },
        {
          answer: "Yes",
          display: "On interstate/fwy/hwy",
          questionDisplay: "This occurred on an interstate, freeway, or highway.",
          updateSuffix: "I",
          preRenderInstructions: (answers) => {
            const isFirePresent = answers?.find(
              (a) =>
                a.question ===
                "Is there any fire present?"
            )?.answer;
            const isTrapped = answers?.find(
              (a) =>
                a.question ===
                "Is anyone trapped in the vehicle?"
            )?.answer;
            const isHazmat = answers?.find(
              (a) =>
                a.question ===
                "Is there any hazardous materials present?"
            )?.answer;

            return isFirePresent !== "Yes" && isTrapped !== "Yes" && isHazmat !== "Yes";
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "On interstate/fwy/hwy",
          questionDisplay: "This occurred on an interstate, freeway, or highway.",
          updateSuffix: "K",
          preRenderInstructions: (answers) => {
            const isFirePresent = answers?.find(
              (a) =>
                a.question ===
                "Is there any fire present?"
            )?.answer;
            const isTrapped = answers?.find(
              (a) =>
                a.question ===
                "Is anyone trapped in the vehicle?"
            )?.answer;
            const isHazmat = answers?.find(
              (a) =>
                a.question ===
                "Is there any hazardous materials present?"
            )?.answer;
            return isFirePresent === "Yes" && isTrapped !== "Yes" && isHazmat !== "Yes";
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "On interstate/fwy/hwy",
          questionDisplay: "This occurred on an interstate, freeway, or highway.",
          updateSuffix: "O",
          preRenderInstructions: (answers) => {
            const isFirePresent = answers?.find(
              (a) =>
                a.question ===
                "Is there any fire present?"
            )?.answer;
            const isTrapped = answers?.find(
              (a) =>
                a.question ===
                "Is anyone trapped in the vehicle?"
            )?.answer;
            const isHazmat = answers?.find(
              (a) =>
                a.question ===
                "Is there any hazardous materials present?"
            )?.answer;
            return isFirePresent !== "Yes" && isTrapped === "Yes" && isHazmat !== "Yes";
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "On interstate/fwy/hwy",
          questionDisplay: "This occurred on an interstate, freeway, or highway.",
          updateSuffix: "M",
          preRenderInstructions: (answers) => {
            const isFirePresent = answers?.find(
              (a) =>
                a.question ===
                "Is there any fire present?"
            )?.answer;
            const isTrapped = answers?.find(
              (a) =>
                a.question ===
                "Is anyone trapped in the vehicle?"
            )?.answer;
            const isHazmat = answers?.find(
              (a) =>
                a.question ===
                "Is there any hazardous materials present?"
            )?.answer;
            return isFirePresent !== "Yes" && isTrapped !== "Yes" && isHazmat === "Yes";
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "On interstate/fwy/hwy",
          questionDisplay: "This occurred on an interstate, freeway, or highway.",
          updateSuffix: "P",
          preRenderInstructions: (answers) => {
            const isFirePresent = answers?.find(
              (a) =>
                a.question ===
                "Is there any fire present?"
            )?.answer;
            const isTrapped = answers?.find(
              (a) =>
                a.question ===
                "Is anyone trapped in the vehicle?"
            )?.answer;
            const isHazmat = answers?.find(
              (a) =>
                a.question ===
                "Is there any hazardous materials present?"
            )?.answer;
            return isFirePresent === "Yes" && isTrapped !== "Yes" && isHazmat === "Yes";
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "On interstate/fwy/hwy",
          questionDisplay: "This occurred on an interstate, freeway, or highway.",
          updateSuffix: "R",
          preRenderInstructions: (answers) => {
            const isFirePresent = answers?.find(
              (a) =>
                a.question ===
                "Is there any fire present?"
            )?.answer;
            const isTrapped = answers?.find(
              (a) =>
                a.question ===
                "Is anyone trapped in the vehicle?"
            )?.answer;
            const isHazmat = answers?.find(
              (a) =>
                a.question ===
                "Is there any hazardous materials present?"
            )?.answer;
            return isFirePresent === "Yes" && isTrapped === "Yes" && isHazmat !== "Yes";
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "On interstate/fwy/hwy",
          questionDisplay: "This occurred on an interstate, freeway, or highway.",
          updateSuffix: "S",
          preRenderInstructions: (answers) => {
            const isFirePresent = answers?.find(
              (a) =>
                a.question ===
                "Is there any fire present?"
            )?.answer;
            const isTrapped = answers?.find(
              (a) =>
                a.question ===
                "Is anyone trapped in the vehicle?"
            )?.answer;
            const isHazmat = answers?.find(
              (a) =>
                a.question ===
                "Is there any hazardous materials present?"
            )?.answer;
            return isFirePresent !== "Yes" && isTrapped === "Yes" && isHazmat === "Yes";
          },
          continue: true,
        },
        {
          answer: "Yes",
          display: "On interstate/fwy/hwy",
          questionDisplay: "This occurred on an interstate, freeway, or highway.",
          updateSuffix: "U",
          preRenderInstructions: (answers) => {
            const isFirePresent = answers?.find(
              (a) =>
                a.question ===
                "Is there any fire present?"
            )?.answer;
            const isTrapped = answers?.find(
              (a) =>
                a.question ===
                "Is anyone trapped in the vehicle?"
            )?.answer;
            const isHazmat = answers?.find(
              (a) =>
                a.question ===
                "Is there any hazardous materials present?"
            )?.answer;
            return isFirePresent === "Yes" && isTrapped === "Yes" && isHazmat === "Yes";
          },
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if on interstate/fwy/hwy",
          questionDisplay: "Unknown if this occurred on an interstate, freeway, or highway.",
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
          code: "77O01",
          text: "Vehicle Blocking Traffic (No Injs & No Hazard)",
          recResponse: 473,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 473,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 473,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 473,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 338,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 474,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 473,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 340,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 338,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 474,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 340,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 390,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 390,
            },
          ],
        },
        {
          code: "77O02",
          text: "No Injs & No Hazard",
          recResponse: 473,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 473,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 473,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 473,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 338,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 474,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 473,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 340,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 338,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 474,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 340,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 390,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 390,
            },
          ],
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "77A00",
          text: "Override (Alpha)",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77A01",
          text: "Low Mechanism",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77A02",
          text: "No Injs w/ Hazard",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77A03",
          text: "Past Traffic Incident",
          recResponse: 473,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 473,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 473,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 473,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 338,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 474,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 473,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 340,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 338,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 474,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 340,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 390,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 390,
            },
          ],
        },
        {
          code: "77A04",
          text: "Past Hit-and-Run",
          recResponse: 473,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 473,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 473,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 473,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 338,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 474,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 473,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 340,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 338,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 474,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 340,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 390,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 390,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "77B00",
          text: "Override (Bravo)",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77B01",
          text: "Injs",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77B02",
          text: "Unkn Status/Other Codes Not Applicable",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77B03",
          text: "Serious Hemorrhage",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77B04",
          text: "Other Hazards",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77B05",
          text: "Low Mechanism (1st or 2nd Party Caller)",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77B06",
          text: "Traffic Incident (No Inj)",
          recResponse: 473,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 473,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 473,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 473,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 338,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 474,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 473,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 340,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 338,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 474,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 340,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 390,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 390,
            },
          ],
        },
        {
          code: "77B07",
          text: "Traffic Incident (Unkn Inj)",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77B08",
          text: "Hit-and-Run (No Inj)",
          recResponse: 473,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 473,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 473,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 473,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 338,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 474,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 473,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 340,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 338,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 474,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 340,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 390,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 390,
            },
          ],
        },
        {
          code: "77B09",
          text: "Hit-and-Run (Unkn Inj)",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "77C00",
          text: "Override (Charlie)",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77C01",
          text: "Injs w/ Hazard",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77C02",
          text: "Fuel/Fluid Leak",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77C03",
          text: "Traffic Incident (w/ Inj)",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77C04",
          text: "Hit-and-Run (w/ Inj)",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "77D00",
          text: "Override (Delta)",
          recResponse: 491,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 491,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 491,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 491,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 492,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 493,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 491,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 494,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 492,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 495,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 493,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 496,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 497,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 494,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 498,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 495,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 496,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 497,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 498,
            },
          ],
        },
        {
          code: "77D01",
          text: "High Occupancy Vehicle (High Mechanism)",
          recResponse: 499,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 499,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 499,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 499,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 500,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 501,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 499,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 502,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 500,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 503,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 501,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 504,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 505,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 502,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 506,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 503,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 504,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 505,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 506,
            },
          ],
        },
        {
          code: "77D02",
          text: "High Mechanism",
          recResponse: 507,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 507,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 507,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 507,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 508,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 509,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 507,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 510,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 508,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 509,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 510,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D03",
          text: "Multi-Vehicle (>= 10) Pile-Up",
          recResponse: 499,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 499,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 499,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 499,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 500,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 501,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 499,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 502,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 500,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 503,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 501,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 504,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 505,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 502,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 506,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 503,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 504,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 505,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 506,
            },
          ],
        },
        {
          code: "77D04",
          text: "Trapped (Pinned) Victim",
          recResponse: 489,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 489,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 489,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 489,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 487,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 488,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 489,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 490,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 488,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 488,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 490,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D05",
          text: "Ejection",
          recResponse: 511,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 511,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 511,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 511,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 512,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 513,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 511,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 514,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 512,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 495,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 513,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 496,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 497,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 514,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 498,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 495,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 496,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 497,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 498,
            },
          ],
        },
        {
          code: "77D06",
          text: "Vehicle vs. Pedestrian/Bicycle",
          recResponse: 515,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 515,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 515,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 515,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 516,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 517,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 515,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 518,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 516,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 517,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 518,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D07",
          text: "Vehicle/Motorcycle vs. Motorcycle",
          recResponse: 519,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 519,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 519,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 519,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 520,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 521,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 519,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 522,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 520,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 521,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 522,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D08",
          text: "Vehicle vs. Building",
          recResponse: 523,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 523,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 523,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 523,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 524,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 525,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 523,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 526,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 524,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 524,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 525,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 525,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 523,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 526,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 525,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 524,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 525,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 523,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 526,
            },
          ],
        },
        {
          code: "77D09",
          text: "Unstable Vehicle",
          recResponse: 507,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 507,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 507,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 507,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 508,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 509,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 507,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 510,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 508,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 509,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 510,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D10",
          text: "Comm Vehicle",
          recResponse: 507,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 507,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 507,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 507,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 508,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 509,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 507,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 510,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 508,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 509,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 510,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D11",
          text: "Arrest",
          recResponse: 491,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 491,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 491,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 491,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 492,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 493,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 491,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 494,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 492,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 495,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 493,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 496,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 497,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 494,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 498,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 495,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 496,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 497,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 498,
            },
          ],
        },
        {
          code: "77D12",
          text: "Unconscious",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D13",
          text: "Not Alert w/ Abnormal Breathing",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D14",
          text: "Not Alert w/ Normal Breathing",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
      ],
    },
  ],
};
