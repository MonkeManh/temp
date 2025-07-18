import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const ALARMS: IFireComplaint = {
  protocol: 52,
  name: "Alarms",
  shortName: "Alarms",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultPlan: 13,
  defaultCode: "52B04",
  questions: [
    {
      text: (
        <p>
          <b className="font-bold">Who</b> is reporting the{" "}
          <b className="font-bold">alarm</b>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Alarm Company",
          display: "Alarm co reporting",
          questionDisplay: "The alarm company is reporting the alarm",
          continue: true,
        },
        {
          answer: "First (1st) party",
          display: "Caller is first party",
          questionDisplay: "The caller is the first party",
          continue: true,
        },
        {
          answer: "Second (2nd) party",
          display: "Caller is second party",
          questionDisplay: "The caller is the second party",
          continue: true,
        },
        {
          answer: "Third (3rd) party",
          display: "Caller is third party",
          questionDisplay: "The caller is the third party",
          continue: true,
        },
        {
          answer: "Fourth (4th) party:",
          display: "Caller is fourth party: {input}",
          questionDisplay: "The caller is the fourth party",
          continue: true,
          input: true,
        },
        {
          answer: "Call box",
          display: "Call box alarm",
          questionDisplay: "The alarm is from a call box",
          updateCode: "52B04",
          continue: true,
        },
        {
          answer: "Pull station",
          display: "Pull station alarm",
          questionDisplay: "The alarm is from a pull station",
          updateSuffix: "P",
          continue: true,
        },
        {
          answer: "Unkown",
          display: "Unk caller type",
          questionDisplay: "The caller type is unk",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          What <b className="font-bold">type</b> of{" "}
          <b className="font-bold">alarm</b> activation is this?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "General fire alarm",
          display: "General fire alarm activation",
          questionDisplay: "The alarm is a general fire alarm activation",
          updateSuffix: "G",
          continue: true,
        },
        {
          answer: "Smoke detector",
          display: "Smoke detector activation",
          questionDisplay: "The alarm is a smoke detector activation",
          updateSuffix: "S",
          continue: true,
        },
        {
          answer: "Carbond monoxide detector",
          display: "Carbon monoxide detector activation",
          questionDisplay: "The alarm is a carbon monoxide detector activation",
          updateSuffix: "C",
          continue: true,
        },
        {
          answer: "Waterflow/sprinkler",
          display: "Waterflow/sprinkler activation",
          questionDisplay: "The alarm is a waterflow/sprinkler activation",
          updateSuffix: "W",
          continue: true,
        },
        {
          answer: "Heat (temperature) detector",
          display: "Heat (temperature) detector activation",
          questionDisplay:
            "The alarm is a heat (temperature) detector activation",
          updateSuffix: "H",
          continue: true,
        },
        {
          answer: "Industrial gas detector",
          display: "Industrial gas detector activation",
          questionDisplay: "The alarm is an industrial gas detector activation",
          updateSuffix: "I",
          continue: true,
        },
        {
          answer: "Manual pull station",
          display: "Manual pull station activation",
          questionDisplay: "The alarm is a manual pull station activation",
          updateSuffix: "P",
          continue: true,
        },
        {
          answer: "Trouble/tamper",
          display: "Trouble/tamper signal",
          questionDisplay: "The alarm is a trouble/tamper signal",
          updateSuffix: "T",
          continue: true,
        },
        {
          answer: "Carbon dioxide detector",
          display: "Carbon dioxide detector activation",
          questionDisplay: "The alarm is a carbon dioxide detector activation",
          updateSuffix: "D",
          continue: true,
        },
        {
          answer: "Cooking hood system",
          display: "Cooking hood system activation",
          questionDisplay: "The alarm is a cooking hood system activation",
          updateSuffix: "J",
          continue: true,
        },
        {
          answer: "Keypad (manual)",
          display: "Keypad (manual) activation",
          questionDisplay: "The alarm is a keypad (manual) activation",
          updateSuffix: "K",
          continue: true,
        },
        {
          answer: "Duct detector",
          display: "Duct detector activation",
          questionDisplay: "The alarm is a duct detector activation",
          updateSuffix: "L",
          continue: true,
        },
        {
          answer: "Area of rescue assistance",
          display: "Area of rescue assistance activation",
          questionDisplay:
            "The alarm is an area of rescue assistance activation",
          updateSuffix: "R",
          continue: true,
        },
        {
          answer: "Other:",
          display: "Other alarm type: {input}",
          questionDisplay: "The alarm is of another type",
          updateSuffix: "O",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk alarm type",
          questionDisplay: "The alarm type is unk",
          updateSuffix: "U",
          continue: true,
        },
      ],
    },

    {
      text: (
        <p>
          Do you see any <b className="font-bold text-red-400">SMOKE</b> or{" "}
          <b className="font-bold text-red-400">FIRE</b>?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (answers) => {
        const reportingParty = answers.find(
          (a) => a.question === "Who is reporting the alarm?"
        )?.answer;
        const alarmType = answers.find(
          (a) => a.question === "What type of alarm activation is this?"
        )?.answer;
        return (
          (reportingParty === "First (1st) party" ||
            reportingParty === "Second (2nd) party" ||
            reportingParty === "Third (3rd) party") &&
          (alarmType === "General fire alarm" ||
            alarmType === "Smoke detector" ||
            alarmType === "Heat (temperature) detector" ||
            alarmType === "Waterflow/sprinkler" ||
            alarmType === "Trouble/tamper" ||
            alarmType === "Keypad (manual)" ||
            alarmType === "Duct detector" ||
            alarmType === "Pull station" ||
            alarmType === "Other:" ||
            alarmType === "Unknown")
        );
      },
      preRenderLogic: "the caller is on scene and the alarm is fire-related",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No smoke or fire seen",
          questionDisplay: "No smoke or fire is seen",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Smoke or fire rptd",
          questionDisplay: "Smoke or fire is reported",
          gotoProtocol: 69
        },
        {
          answer: "Unkown",
          display: "Unk if smoke or fire",
          questionDisplay: "It is unk if smoke or fire is present",
          continue: true,
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of building is <b className="font-bold">involved</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "HIGH LIFE RISK",
          display: "HIGH LIFE RISK bldg",
          questionDisplay: "The building involved is a HIGH LIFE RISK bldg",
          updateCode: "52C01",
          continue: true,
          send: true
        },
        {
          answer: "Residential (single-family)",
          display: "Residential (single-family) bldg",
          questionDisplay: "The building involved is a residential (single-family) bldg",
          updateCode: "52B01",
          continue: true,
          send: true
        },
        {
          answer: "Commercial/industrial",
          display: "Commercial/industrial bldg",
          questionDisplay: "The building involved is a commercial/industrial bldg",
          updateCode: "52C03",
          continue: true,
          send: true
        },
        {
          answer: "Residential (multi-family)",
          display: "Residential (multi-family) bldg",
          questionDisplay: "The building involved is a residential (multi-family) bldg",
          updateCode: "52C04",
          continue: true,
          send: true
        },
        {
          answer: "Non-dwelling building/structure (shed, garage):",
          display: "Non-dwelling bldg/structure: {input}",
          questionDisplay: "The building involved is a non-dwelling bldg/structure: {input}",
          updateCode: "52B02",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "HIGH RISE",
          display: "HIGH RISE bldg",
          questionDisplay: "The building involved is a HIGH RISE bldg",
          updateCode: "52C02",
          continue: true,
          send: true
        },
        {
          answer: "Mixed-occupancy",
          display: "Mixed-occupancy bldg",
          questionDisplay: "The building involved is a mixed-occupancy bldg",
          updateCode: "52C05",
          continue: true,
          send: true
        },
        {
          answer: "Mobile home",
          display: "Mobile home",
          questionDisplay: "The building involved is a mobile home",
          updateCode: "52B03",
          continue: true,
          send: true
        },
        {
          answer: "House trailer",
          display: "House trailer",
          questionDisplay: "The building involved is a house trailer",
          updateCode: "52B03",
          continue: true,
        },
        {
          answer: "Portable office",
          display: "Portable office",
          questionDisplay: "The building involved is a portable office",
          updateCode: "52B03",
          continue: true,
          send: true
        },
        {
          answer: "Other:",
          display: "Other building type: {input}",
          questionDisplay: "The building involved is another type: {input}",
          updateCode: "52B04",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk building type",
          questionDisplay: "The building type is unk",
          updateCode: "52B04",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>Is anyone <b className="font-bold">sick</b> or experiencing <b className="font-bold">symptoms</b> (nausea, headaches, drowsiness)?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const alarmType = answers.find(
          (a) => a.question === "What type of alarm activation is this?"
        )?.answer;
        return alarmType === "Carbon monoxide detector" || alarmType === "Industrial gas detector"
      },
      preRenderLogic: "the alarm is gas-related",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No sick persons rptd",
          questionDisplay: "No sick persons are reported",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Sick person(s) rptd",
          questionDisplay: "Sick person(s) are reported",
          continue: true,
        },
        {
          answer: "Unkown",
          display: "Unk if sick persons",
          questionDisplay: "It is unk if sick persons are present",
          continue: true,
        }
      ]
    },
    
    {
      text: <p>How <b className="font-bold">many</b> people have <b className="font-bold">symptoms</b>?</p>,
      questionType: "select",
      preRenderInstructions: (answers) => {
        const sickAnswer = answers.find(
          (a) => a.question === "Is anyone sick or experiencing symptoms (nausea, headaches, drowsiness)?"
        )?.answer;
        return sickAnswer === "Yes"
      },
      preRenderLogic: "sick persons are present",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single sick person",
          display: "Single sick person rptd",
          questionDisplay: "A single sick person is reported",
          updateSuffix: "X",
          continue: true,
          preRenderInstructions: (answers) => {
            const alarmType = answers.find(
              (a) => a.question === "What type of alarm activation is this?"
            )?.answer;
            return alarmType === "Carbon monoxide detector";
          }
        },
        {
          answer: "Single sick person",
          display: "Single sick person rptd",
          questionDisplay: "A single sick person is reported",
          updateSuffix: "E",
          continue: true,
          preRenderInstructions: (answers) => {
            const alarmType = answers.find(
              (a) => a.question === "What type of alarm activation is this?"
            )?.answer;
            return alarmType === "Industrial gas detector";
          }
        },
        {
          answer: "Multiple sick persons (input number):",
          display: "{input} sick persons rptd",
          questionDisplay: "{input} sick persons are reported",
          updateSuffix: "Y",
          continue: true,
          input: true,
          preRenderInstructions: (answers) => {
            const alarmType = answers.find(
              (a) => a.question === "What type of alarm activation is this?"
            )?.answer;
            return alarmType === "Carbon monoxide detector";
          }
        },
        {
          answer: "Multiple sick persons (input number):",
          display: "{input} sick persons rptd",
          questionDisplay: "{input} sick persons are reported",
          updateSuffix: "F",
          continue: true,
          input: true,
          preRenderInstructions: (answers) => {
            const alarmType = answers.find(
              (a) => a.question === "What type of alarm activation is this?"
            )?.answer;
            return alarmType === "Industrial gas detector";
          }
        },
        {
          answer: "Unknown",
          display: "Unk num of sick persons",
          questionDisplay: "Unknown number of sick persons",
          updateSuffix: "Y",
          continue: true,
          preRenderInstructions: (answers) => {
            const alarmType = answers.find(
              (a) => a.question === "What type of alarm activation is this?"
            )?.answer;
            return alarmType === "Carbon monoxide detector";
          }
        },
        {
          answer: "Unknown",
          display: "Unk num of sick persons",
          questionDisplay: "Unknown number of sick persons",
          updateSuffix: "F",
          continue: true,
          preRenderInstructions: (answers) => {
            const alarmType = answers.find(
              (a) => a.question === "What type of alarm activation is this?"
            )?.answer;
            return alarmType === "Industrial gas detector";
          }
        },
      ]
    }
  ],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "52B01",
          text: "Residential (Single)",
          recResponse: 13,
          subCodes: [
            {
              suffix: "C",
              text: "Carbon Monoxide",
              recResponse: 14,
            },
            {
              suffix: "D",
              text: "Carbon Dioxide",
              recResponse: 13,
            },
            {
              suffix: "E",
              text: "Industrial Gas w/ Sick Person",
              recResponse: 15,
            },
            {
              suffix: "F",
              text: "Industrial Gas w/ Mult Sick Persons",
              recResponse: 16,
            },
            {
              suffix: "G",
              text: "General/Fire",
              recResponse: 13,
            },
            {
              suffix: "H",
              text: "Heat (Temperature) Detector",
              recResponse: 13,
            },
            {
              suffix: "I",
              text: "Industrial Gas",
              recResponse: 13,
            },
            {
              suffix: "J",
              text: "Cooking Hood System",
              recResponse: 13,
            },
            {
              suffix: "K",
              text: "Keypad (Manual)",
              recResponse: 13,
            },
            {
              suffix: "L",
              text: "Duct Detector",
              recResponse: 13,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 13,
            },
            {
              suffix: "P",
              text: "Pull Station",
              recResponse: 13,
            },
            {
              suffix: "R",
              text: "Area of Rescue Assistance",
              recResponse: 13,
            },
            {
              suffix: "S",
              text: "Smoke Detector",
              recResponse: 13,
            },
            {
              suffix: "T",
              text: "Trouble/Tamper",
              recResponse: 13,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 13,
            },
            {
              suffix: "W",
              text: "Waterflow/Sprinkler",
              recResponse: 13,
            },
            {
              suffix: "X",
              text: "CO w/ Single Sick Person",
              recResponse: 15,
            },
            {
              suffix: "Y",
              text: "CO w/ Multiple Sick Persons",
              recResponse: 16,
            },
          ],
        },
        {
          code: "52B02",
          text: "Non-Dwelling Building/Structure (Shed, Garage)",
          recResponse: 17,
          subCodes: [
            {
              suffix: "C",
              text: "Carbon Monoxide",
              recResponse: 14,
            },
            {
              suffix: "D",
              text: "Carbon Dioxide",
              recResponse: 13,
            },
            {
              suffix: "E",
              text: "Industrial Gas w/ Sick Person",
              recResponse: 19,
            },
            {
              suffix: "F",
              text: "Industrial Gas w/ Mult Sick Persons",
              recResponse: 19,
            },
            {
              suffix: "G",
              text: "General/Fire",
              recResponse: 13,
            },
            {
              suffix: "H",
              text: "Heat (Temperature) Detector",
              recResponse: 13,
            },
            {
              suffix: "I",
              text: "Industrial Gas",
              recResponse: 13,
            },
            {
              suffix: "J",
              text: "Cooking Hood System",
              recResponse: 13,
            },
            {
              suffix: "K",
              text: "Keypad (Manual)",
              recResponse: 13,
            },
            {
              suffix: "L",
              text: "Duct Detector",
              recResponse: 13,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 13,
            },
            {
              suffix: "P",
              text: "Pull Station",
              recResponse: 13,
            },
            {
              suffix: "R",
              text: "Area of Rescue Assistance",
              recResponse: 13,
            },
            {
              suffix: "S",
              text: "Smoke Detector",
              recResponse: 13,
            },
            {
              suffix: "T",
              text: "Trouble/Tamper",
              recResponse: 13,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 13,
            },
            {
              suffix: "W",
              text: "Waterflow/Sprinkler",
              recResponse: 13,
            },
            {
              suffix: "X",
              text: "CO w/ Single Sick Person",
              recResponse: 19,
            },
            {
              suffix: "Y",
              text: "CO w/ Multiple Sick Persons",
              recResponse: 19,
            },
          ],
        },
        {
          code: "52B03",
          text: "Mobile Home, House Trailer, Portable Office",
          recResponse: 13,
          subCodes: [
            {
              suffix: "C",
              text: "Carbon Monoxide",
              recResponse: 14,
            },
            {
              suffix: "D",
              text: "Carbon Dioxide",
              recResponse: 13,
            },
            {
              suffix: "E",
              text: "Industrial Gas w/ Sick Person",
              recResponse: 15,
            },
            {
              suffix: "F",
              text: "Industrial Gas w/ Mult Sick Persons",
              recResponse: 16,
            },
            {
              suffix: "G",
              text: "General/Fire",
              recResponse: 13,
            },
            {
              suffix: "H",
              text: "Heat (Temperature) Detector",
              recResponse: 13,
            },
            {
              suffix: "I",
              text: "Industrial Gas",
              recResponse: 13,
            },
            {
              suffix: "J",
              text: "Cooking Hood System",
              recResponse: 13,
            },
            {
              suffix: "K",
              text: "Keypad (Manual)",
              recResponse: 13,
            },
            {
              suffix: "L",
              text: "Duct Detector",
              recResponse: 13,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 13,
            },
            {
              suffix: "P",
              text: "Pull Station",
              recResponse: 13,
            },
            {
              suffix: "R",
              text: "Area of Rescue Assistance",
              recResponse: 13,
            },
            {
              suffix: "S",
              text: "Smoke Detector",
              recResponse: 13,
            },
            {
              suffix: "T",
              text: "Trouble/Tamper",
              recResponse: 13,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 13,
            },
            {
              suffix: "W",
              text: "Waterflow/Sprinkler",
              recResponse: 13,
            },
            {
              suffix: "X",
              text: "CO w/ Single Sick Person",
              recResponse: 15,
            },
            {
              suffix: "Y",
              text: "CO w/ Multiple Sick Persons",
              recResponse: 16,
            },
          ],
        },
        {
          code: "52B04",
          text: "Unkn Situation (Investigation/Call Box)",
          recResponse: 13,
          subCodes: [
            {
              suffix: "C",
              text: "Carbon Monoxide",
              recResponse: 14,
            },
            {
              suffix: "D",
              text: "Carbon Dioxide",
              recResponse: 13,
            },
            {
              suffix: "E",
              text: "Industrial Gas w/ Sick Person",
              recResponse: 15,
            },
            {
              suffix: "F",
              text: "Industrial Gas w/ Mult Sick Persons",
              recResponse: 16,
            },
            {
              suffix: "G",
              text: "General/Fire",
              recResponse: 13,
            },
            {
              suffix: "H",
              text: "Heat (Temperature) Detector",
              recResponse: 13,
            },
            {
              suffix: "I",
              text: "Industrial Gas",
              recResponse: 13,
            },
            {
              suffix: "J",
              text: "Cooking Hood System",
              recResponse: 13,
            },
            {
              suffix: "K",
              text: "Keypad (Manual)",
              recResponse: 13,
            },
            {
              suffix: "L",
              text: "Duct Detector",
              recResponse: 13,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 13,
            },
            {
              suffix: "P",
              text: "Pull Station",
              recResponse: 13,
            },
            {
              suffix: "R",
              text: "Area of Rescue Assistance",
              recResponse: 13,
            },
            {
              suffix: "S",
              text: "Smoke Detector",
              recResponse: 13,
            },
            {
              suffix: "T",
              text: "Trouble/Tamper",
              recResponse: 13,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 13,
            },
            {
              suffix: "W",
              text: "Waterflow/Sprinkler",
              recResponse: 13,
            },
            {
              suffix: "X",
              text: "CO w/ Single Sick Person",
              recResponse: 15,
            },
            {
              suffix: "Y",
              text: "CO w/ Multiple Sick Persons",
              recResponse: 16,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "52C00",
          text: "Override (Charlie)",
          recResponse: 17,
          subCodes: [
            {
              suffix: "C",
              text: "Carbon Monoxide",
              recResponse: 14,
            },
            {
              suffix: "D",
              text: "Carbon Dioxide",
              recResponse: 17,
            },
            {
              suffix: "E",
              text: "Industrial Gas w/ Sick Person",
              recResponse: 19,
            },
            {
              suffix: "F",
              text: "Industrial Gas w/ Mult Sick Persons",
              recResponse: 19,
            },
            {
              suffix: "G",
              text: "General/Fire",
              recResponse: 17,
            },
            {
              suffix: "H",
              text: "Heat (Temperature) Detector",
              recResponse: 17,
            },
            {
              suffix: "I",
              text: "Industrial Gas",
              recResponse: 17,
            },
            {
              suffix: "J",
              text: "Cooking Hood System",
              recResponse: 17,
            },
            {
              suffix: "K",
              text: "Keypad (Manual)",
              recResponse: 17,
            },
            {
              suffix: "L",
              text: "Duct Detector",
              recResponse: 17,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 17,
            },
            {
              suffix: "P",
              text: "Pull Station",
              recResponse: 17,
            },
            {
              suffix: "R",
              text: "Area of Rescue Assistance",
              recResponse: 17,
            },
            {
              suffix: "S",
              text: "Smoke Detector",
              recResponse: 17,
            },
            {
              suffix: "T",
              text: "Trouble/Tamper",
              recResponse: 17,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 17,
            },
            {
              suffix: "W",
              text: "Waterflow/Sprinkler",
              recResponse: 17,
            },
            {
              suffix: "X",
              text: "CO w/ Single Sick Person",
              recResponse: 19,
            },
            {
              suffix: "Y",
              text: "CO w/ Multiple Sick Persons",
              recResponse: 19,
            },
          ],
        },
        {
          code: "52C01",
          text: "High Life Hazard",
          recResponse: 17,
          subCodes: [
            {
              suffix: "C",
              text: "Carbon Monoxide",
              recResponse: 14,
            },
            {
              suffix: "D",
              text: "Carbon Dioxide",
              recResponse: 17,
            },
            {
              suffix: "E",
              text: "Industrial Gas w/ Sick Person",
              recResponse: 19,
            },
            {
              suffix: "F",
              text: "Industrial Gas w/ Mult Sick Persons",
              recResponse: 19,
            },
            {
              suffix: "G",
              text: "General/Fire",
              recResponse: 17,
            },
            {
              suffix: "H",
              text: "Heat (Temperature) Detector",
              recResponse: 17,
            },
            {
              suffix: "I",
              text: "Industrial Gas",
              recResponse: 17,
            },
            {
              suffix: "J",
              text: "Cooking Hood System",
              recResponse: 17,
            },
            {
              suffix: "K",
              text: "Keypad (Manual)",
              recResponse: 17,
            },
            {
              suffix: "L",
              text: "Duct Detector",
              recResponse: 17,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 17,
            },
            {
              suffix: "P",
              text: "Pull Station",
              recResponse: 17,
            },
            {
              suffix: "R",
              text: "Area of Rescue Assistance",
              recResponse: 17,
            },
            {
              suffix: "S",
              text: "Smoke Detector",
              recResponse: 17,
            },
            {
              suffix: "T",
              text: "Trouble/Tamper",
              recResponse: 17,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 17,
            },
            {
              suffix: "W",
              text: "Waterflow/Sprinkler",
              recResponse: 17,
            },
            {
              suffix: "X",
              text: "CO w/ Single Sick Person",
              recResponse: 19,
            },
            {
              suffix: "Y",
              text: "CO w/ Multiple Sick Persons",
              recResponse: 19,
            },
          ],
        },
        {
          code: "52C02",
          text: "High Rise",
          recResponse: 17,
          subCodes: [
            {
              suffix: "C",
              text: "Carbon Monoxide",
              recResponse: 14,
            },
            {
              suffix: "D",
              text: "Carbon Dioxide",
              recResponse: 17,
            },
            {
              suffix: "E",
              text: "Industrial Gas w/ Sick Person",
              recResponse: 19,
            },
            {
              suffix: "F",
              text: "Industrial Gas w/ Mult Sick Persons",
              recResponse: 19,
            },
            {
              suffix: "G",
              text: "General/Fire",
              recResponse: 17,
            },
            {
              suffix: "H",
              text: "Heat (Temperature) Detector",
              recResponse: 17,
            },
            {
              suffix: "I",
              text: "Industrial Gas",
              recResponse: 17,
            },
            {
              suffix: "J",
              text: "Cooking Hood System",
              recResponse: 17,
            },
            {
              suffix: "K",
              text: "Keypad (Manual)",
              recResponse: 17,
            },
            {
              suffix: "L",
              text: "Duct Detector",
              recResponse: 17,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 17,
            },
            {
              suffix: "P",
              text: "Pull Station",
              recResponse: 17,
            },
            {
              suffix: "R",
              text: "Area of Rescue Assistance",
              recResponse: 17,
            },
            {
              suffix: "S",
              text: "Smoke Detector",
              recResponse: 17,
            },
            {
              suffix: "T",
              text: "Trouble/Tamper",
              recResponse: 17,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 17,
            },
            {
              suffix: "W",
              text: "Waterflow/Sprinkler",
              recResponse: 17,
            },
            {
              suffix: "X",
              text: "CO w/ Single Sick Person",
              recResponse: 19,
            },
            {
              suffix: "Y",
              text: "CO w/ Multiple Sick Persons",
              recResponse: 19,
            },
          ],
        },
        {
          code: "52C03",
          text: "Comm/Ind Building",
          recResponse: 17,
          subCodes: [
            {
              suffix: "C",
              text: "Carbon Monoxide",
              recResponse: 14,
            },
            {
              suffix: "D",
              text: "Carbon Dioxide",
              recResponse: 17,
            },
            {
              suffix: "E",
              text: "Industrial Gas w/ Sick Person",
              recResponse: 19,
            },
            {
              suffix: "F",
              text: "Industrial Gas w/ Mult Sick Persons",
              recResponse: 19,
            },
            {
              suffix: "G",
              text: "General/Fire",
              recResponse: 17,
            },
            {
              suffix: "H",
              text: "Heat (Temperature) Detector",
              recResponse: 17,
            },
            {
              suffix: "I",
              text: "Industrial Gas",
              recResponse: 17,
            },
            {
              suffix: "J",
              text: "Cooking Hood System",
              recResponse: 17,
            },
            {
              suffix: "K",
              text: "Keypad (Manual)",
              recResponse: 17,
            },
            {
              suffix: "L",
              text: "Duct Detector",
              recResponse: 17,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 17,
            },
            {
              suffix: "P",
              text: "Pull Station",
              recResponse: 17,
            },
            {
              suffix: "R",
              text: "Area of Rescue Assistance",
              recResponse: 17,
            },
            {
              suffix: "S",
              text: "Smoke Detector",
              recResponse: 17,
            },
            {
              suffix: "T",
              text: "Trouble/Tamper",
              recResponse: 17,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 17,
            },
            {
              suffix: "W",
              text: "Waterflow/Sprinkler",
              recResponse: 17,
            },
            {
              suffix: "X",
              text: "CO w/ Single Sick Person",
              recResponse: 19,
            },
            {
              suffix: "Y",
              text: "CO w/ Multiple Sick Persons",
              recResponse: 19,
            },
          ],
        },
        {
          code: "52C04",
          text: "Residential (Mult)",
          recResponse: 17,
          subCodes: [
            {
              suffix: "C",
              text: "Carbon Monoxide",
              recResponse: 14,
            },
            {
              suffix: "D",
              text: "Carbon Dioxide",
              recResponse: 17,
            },
            {
              suffix: "E",
              text: "Industrial Gas w/ Sick Person",
              recResponse: 19,
            },
            {
              suffix: "F",
              text: "Industrial Gas w/ Mult Sick Persons",
              recResponse: 19,
            },
            {
              suffix: "G",
              text: "General/Fire",
              recResponse: 17,
            },
            {
              suffix: "H",
              text: "Heat (Temperature) Detector",
              recResponse: 17,
            },
            {
              suffix: "I",
              text: "Industrial Gas",
              recResponse: 17,
            },
            {
              suffix: "J",
              text: "Cooking Hood System",
              recResponse: 17,
            },
            {
              suffix: "K",
              text: "Keypad (Manual)",
              recResponse: 17,
            },
            {
              suffix: "L",
              text: "Duct Detector",
              recResponse: 17,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 17,
            },
            {
              suffix: "P",
              text: "Pull Station",
              recResponse: 17,
            },
            {
              suffix: "R",
              text: "Area of Rescue Assistance",
              recResponse: 17,
            },
            {
              suffix: "S",
              text: "Smoke Detector",
              recResponse: 17,
            },
            {
              suffix: "T",
              text: "Trouble/Tamper",
              recResponse: 17,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 17,
            },
            {
              suffix: "W",
              text: "Waterflow/Sprinkler",
              recResponse: 17,
            },
            {
              suffix: "X",
              text: "CO w/ Single Sick Person",
              recResponse: 19,
            },
            {
              suffix: "Y",
              text: "CO w/ Multiple Sick Persons",
              recResponse: 19,
            },
          ],
        },
        {
          code: "52C05",
          text: "Mixed-Use Occupancy Building",
          recResponse: 17,
          subCodes: [
            {
              suffix: "C",
              text: "Carbon Monoxide",
              recResponse: 14,
            },
            {
              suffix: "D",
              text: "Carbon Dioxide",
              recResponse: 17,
            },
            {
              suffix: "E",
              text: "Industrial Gas w/ Sick Person",
              recResponse: 19,
            },
            {
              suffix: "F",
              text: "Industrial Gas w/ Mult Sick Persons",
              recResponse: 19,
            },
            {
              suffix: "G",
              text: "General/Fire",
              recResponse: 17,
            },
            {
              suffix: "H",
              text: "Heat (Temperature) Detector",
              recResponse: 17,
            },
            {
              suffix: "I",
              text: "Industrial Gas",
              recResponse: 17,
            },
            {
              suffix: "J",
              text: "Cooking Hood System",
              recResponse: 17,
            },
            {
              suffix: "K",
              text: "Keypad (Manual)",
              recResponse: 17,
            },
            {
              suffix: "L",
              text: "Duct Detector",
              recResponse: 17,
            },
            {
              suffix: "O",
              text: "Other",
              recResponse: 17,
            },
            {
              suffix: "P",
              text: "Pull Station",
              recResponse: 17,
            },
            {
              suffix: "R",
              text: "Area of Rescue Assistance",
              recResponse: 17,
            },
            {
              suffix: "S",
              text: "Smoke Detector",
              recResponse: 17,
            },
            {
              suffix: "T",
              text: "Trouble/Tamper",
              recResponse: 17,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 17,
            },
            {
              suffix: "W",
              text: "Waterflow/Sprinkler",
              recResponse: 17,
            },
            {
              suffix: "X",
              text: "CO w/ Single Sick Person",
              recResponse: 19,
            },
            {
              suffix: "Y",
              text: "CO w/ Multiple Sick Persons",
              recResponse: 19,
            },
          ],
        },
      ],
    },
  ],
};
