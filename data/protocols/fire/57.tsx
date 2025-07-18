import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const EXPLOSION: IFireComplaint = {
  protocol: 57,
  name: "Explosion",
  shortName: "Explosion",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: true },
  ],
  defaultPriority: "B",
  defaultPlan: 162,
  defaultCode: "57B02",
  questions: [
    {
      text: <b className="font-bold">Where/what exploded?</b>,
      questionType: 'select',
      answers: [
        {
          answer: "Vehicle",
          display: "Vehicle explosion",
          questionDisplay: "A vehicle exploded",
          continue: true,
        },
        {
          answer: "Structure",
          display: "Structure explosion",
          questionDisplay: "A structure exploded",
          continue: true,
        },
        {
          answer: "Manhole",
          display: "Manhole explosion",
          questionDisplay: "A manhole exploded",
          updateCode: "57C03",
          continue: true,
          send: true
        },
        {
          answer: "Open area",
          display: "Explosion in open area",
          questionDisplay: "An explosion occurred in an open area",
          updateCode: "57C02",
          continue: true,
          send: true
        },
        {
          answer: "Other (specify):",
          display: "Other explosion: {input}",
          questionDisplay: "An explosion occurred: {input}",
          updateCode: "57B01",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk what exploded",
          questionDisplay: "Unknown what exploded",
          updateCode: "57B02",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400"><span className="text-blue-400">(Not obvious)</span> Is there any <b className="font-bold">fire</b> present?</p>,
      questionType: 'select',
      answers: [
        {
          answer: "No",
          display: "No fire rptd",
          questionDisplay: "No fire reported",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Fire rptd",
          questionDisplay: "Fire reported",
          updateSuffix: "F",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if fire present",
          questionDisplay: "It is unknown if there is fire",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Are there any <b className="font-bold">hazardous materials</b> or <b className="font-bold">chemicals</b> involved?</p>,
      questionType: 'select',
      answers: [
        {
          answer: "No",
          display: "No hazmat/chems rptd",
          questionDisplay: "No hazardous materials or chemicals reported",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Hazmat/chems rptd",
          questionDisplay: "Hazardous materials or chemicals reported",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if hazmat/chems",
          questionDisplay: "It is unknown if there are hazardous materials or chemicals",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Do you know what <b className="font-bold">type</b> of <b className="font-bold">hazardous material</b> is involved?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const hazmatInvolved = answers?.find((a) => a.question === "Are there any hazardous materials or chemicals involved?")?.answer;
        return hazmatInvolved === "Yes";
      },
      preRenderLogic: "there are hazardous materials or chemicals involved",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Unk type of hazmat",
          questionDisplay: "The type of hazardous material is unknown",
          continue: true,
        },
        {
          answer: "Yes (specify):",
          display: "Hazmat/chems: {input}",
          questionDisplay: "The hazardous material is: {input}",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk hazmat/chems type",
          questionDisplay: "It is unknown if there are hazardous materials or chemicals",
          continue: true,
        }
      ]
    },

    {
      text: <p>What type of <b className="font-bold">vehicle</b> is involved?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const whatExploded = answers?.find((a) => a.question === "Where/what exploded?")?.answer;
        return whatExploded === "Vehicle"
      },
      preRenderLogic: "a vehicle exploded",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Car",
          display: "Vehicle: Car",
          questionDisplay: "The vehicle is a car",
          updateCode: "57C01",
          continue: true,
        },
        {
          answer: "Commercial vehicle:",
          display: "Vehicle: Commercial - {input}",
          questionDisplay: "The vehicle is a commercial vehicle - {input}",
          updateCode: "57D09",
          continue: true,
          input: true,
        },
        {
          answer: "High fuel/fire load vehicle:",
          display: "Vehicle: High fuel/fire load - {input}",
          questionDisplay: "The vehicle is a high fuel/fire load vehicle - {input}",
          updateCode: "57D10",
          continue: true,
          input: true,
        },
        {
          answer: "Other:",
          display: "Vehicle: Other - {input}",
          questionDisplay: "The vehicle is other - {input}",
          updateCode: "57C01",
          continue: true,
          input: true,
        },
        {
          answer: "Unknown",
          display: "Unk vehicle type",
          questionDisplay: "The type of vehicle is unknown",
          updateCode: "57C01",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-red-400">Are there any <b className="font-bold">structures threatened</b>?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const whatExploded = answers?.find((a) => a.question === "Where/what exploded?")?.answer;
        return whatExploded === "Vehicle";
      },
      preRenderLogic: "a vehicle exploded",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No structures threatened",
          questionDisplay: "No structures are threatened",
          continue: true,
          send: true
        },
        {
          answer: "Yes",
          display: "Structures threatened",
          questionDisplay: "Structures are threatened",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if structures threatened",
          questionDisplay: "It is unknown if structures are threatened",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>What <b className="font-bold">type</b> of <b className="font-bold">structure</b> is involved?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const whatExploded = answers?.find((a) => a.question === "Where/what exploded?")?.answer;
        const structuresThreatened = answers?.find((a) => a.question === "Are there any structures threatened?")?.answer;
        return whatExploded === "Structure"  || (whatExploded === "Vehicle" && structuresThreatened === "Yes");
      },
      preRenderLogic: "a structure exploded or a vehicle exploded and structures are threatened",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Residential (single-family)",
          display: "Residential (single-family) bldg",
          questionDisplay: "The building is a residential (single-family) structure",
          updateCode: "57D06",
          continue: true,
          send: true
        },
        {
          answer: "Commercial/industrial",
          display: "Commercial/industrial bldg",
          questionDisplay: "The building is a commercial/industrial structure",
          updateCode: "57D04",
          continue: true,
          send: true
        },
        {
          answer: "Residential (multi-family)",
          display: "Residential (multi-family) bldg",
          questionDisplay: "The building is a residential (multi-family) structure",
          updateCode: "57D06",
          continue: true,
          send: true
        },
        {
          answer: "Non-dwelling structure",
          display: "Non-dwelling structure bldg",
          questionDisplay: "The building is a non-dwelling structure",
          continue: true,
        },
        {
          answer: "HIGH RISE",
          display: "HIGH RISE bldg",
          questionDisplay: "The building is a HIGH RISE structure",
          updateCode: "57D02",
          continue: true,
          send: true
        },
        {
          answer: "Mobile home",
          display: "Mobile home/house trailer",
          questionDisplay: "The building is a mobile home/house trailer",
          updateCode: "57D11",
          continue: true,
          send: true
        },
        {
          answer: "House trailer",
          display: "House trailer",
          questionDisplay: "The building is a house trailer",
          updateCode: "57D11",
          continue: true,
          send: true
        },
        {
          answer: "Portable office",
          display: "Portable office",
          questionDisplay: "The building is a portable office",
          updateCode: "57D11",
          continue: true,
          send: true
        },
        {
          answer: "Other (specify):",
          display: "Other type of structure: {input}",
          questionDisplay: "The building is a {input} structure",
          updateCode: "57D12",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk type of structure",
          questionDisplay: "The type of building is unknown",
          updateCode: "57D12",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>What is the <b className="font-bold">size</b> of the <b className="font-bold">structure</b>?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const whatExploded = answers?.find((a) => a.question === "Where/what exploded?")?.answer;
        const structureType = answers?.find((a) => a.question === "What type of structure is involved?")?.answer;
        const structuresThreatened = answers?.find((a) => a.question === "Are there any structures threatened?")?.answer;
        return (whatExploded === "Structure" || (whatExploded === "Vehicle" && structuresThreatened === "Yes")) && structureType === "Non-dwelling structure";
      },
      preRenderLogic: "a structure exploded or a vehicle exploded and structures are threatened and the structure is a non-dwelling structure",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Small (shed, garage, etc.):",
          display: "Small structure: {input}",
          questionDisplay: "The structure is small: {input}",
          updateCode: "57D08",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Large (barn, warehouse, etc.):",
          display: "Large structure: {input}",
          questionDisplay: "The structure is large: {input}",
          updateCode: "57D07",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk size of structure",
          questionDisplay: "The size of the structure is unknown",
          updateCode: "57D12",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p className="text-purple-400">How many <b className="font-bold">floors</b> or <b className="font-bold">stories</b> are there?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const whatExploded = answers?.find((a) => a.question === "Where/what exploded?")?.answer;
        const structureType = answers?.find((a) => a.question === "What type of structure is involved?")?.answer;
        const structuresThreatened = answers?.find((a) => a.question === "Are there any structures threatened?")?.answer;
        return (whatExploded === "Structure" || (whatExploded === "Vehicle" && structuresThreatened === "Yes")) && structureType === "Non-dwelling structure";
      },
      preRenderLogic: "a structure exploded",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single level",
          display: "Single story struc",
          questionDisplay: "The structure is a single story",
          continue: true,
        },
        {
          answer: "Multi-story (3-7):",
          display: "Multi-story ({input}) struc",
          questionDisplay: "The structure is a multi-story ({input})",
          continue: true,
          input: true,
        },
        {
          answer: "High rise (8+):",
          display: "High rise ({input} floors)",
          questionDisplay: "The structure is a high rise ({input} floors)",
          updateCode: "57D02",
          continue: true,
          input: true,
          send: true
        },
        {
          answer: "Doesn't know",
          display: "Unk number of floors",
          questionDisplay: "The number of floors is unknown",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is the building used by <b className="font-bold">the government</b>?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const whatExploded = answers?.find((a) => a.question === "Where/what exploded?")?.answer;
        const structuresThreatened = answers?.find((a) => a.question === "Are there any structures threatened?")?.answer;
        return (whatExploded === "Structure" || (whatExploded === "Vehicle" && structuresThreatened === "Yes"));
      },
      preRenderLogic: "a structure exploded or a vehicle exploded and structures are threatened",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "Not a govt bldg",
          questionDisplay: "The building is not used by the government",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Govt bldg",
          questionDisplay: "The building is used by the government",
          updateCode: "57D03",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if govt bldg",
          questionDisplay: "It is unknown if the building is used by the government",
          continue: true,
        }
      ]
    },

    {
      text: <p className="text-blue-400">Is there a <b className="font-bold">HIGH LIFE RISK</b>?</p>,
      questionType: 'select',
      answers: [
        {
          answer: "No",
          display: "No HIGH LIFE RISK ID'd",
          questionDisplay: "No HIGH LIFE RISK identified",
          continue: true,
        },
        {
          answer: "Yes",
          display: "HIGH LIFE RISK ID'd",
          questionDisplay: "HIGH LIFE RISK identified",
          updateCode: "57D01",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if HIGH LIFE RISK",
          questionDisplay: "It is unknown if there is a HIGH LIFE RISK",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is anyone <b className="font-bold">injured</b>?</p>,
      questionType: 'select',
      answers: [
        {
          answer: "No",
          display: "No injs rptd",
          questionDisplay: "No injuries reported",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Injs rptd",
          questionDisplay: "Injuries reported",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if injs",
          questionDisplay: "It is unknown if there are any injuries",
          continue: true,
        }
      ]
    },

    {
      text: <p>How <b className="font-bold">many</b> people are <b className="font-bold">injured</b>?</p>,
      questionType: 'select',
      preRenderInstructions: (answers) => {
        const injured = answers?.find((a) => a.question === "Is anyone injured?")?.answer;
        return injured === "Yes";
      },
      preRenderLogic: "there are injuries",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Single person",
          display: "Single injured person",
          questionDisplay: "There is a single injured person",
          preRenderInstructions: (answers) => {
            const firePresnet = answers?.find((a) => a.question === "Is there any fire present?")?.answer;
            return firePresnet !== "Yes";
          },
          updateSuffix: "V",
          continue: true,
        },
        {
          answer: "Single person",
          display: "Single injured person",
          questionDisplay: "There is a single injured person",
          preRenderInstructions: (answers) => {
            const firePresnet = answers?.find((a) => a.question === "Is there any fire present?")?.answer;
            return firePresnet === "Yes";
          },
          updateSuffix: "G",
          continue: true,
        },
        {
          answer: "Two persons",
          display: "Two injured persons",
          questionDisplay: "There are two injured persons",
          preRenderInstructions: (answers) => {
            const firePresnet = answers?.find((a) => a.question === "Is there any fire present?")?.answer;
            return firePresnet !== "Yes";
          },
          updateSuffix: "W",
          continue: true,
        },
        {
          answer: "Two persons",
          display: "Two injured persons",
          questionDisplay: "There are two injured persons",
          preRenderInstructions: (answers) => {
            const firePresnet = answers?.find((a) => a.question === "Is there any fire present?")?.answer;
            return firePresnet === "Yes";
          },
          updateSuffix: "H",
          continue: true,
        },
        {
          answer: "3-8 persons (input amount):",
          display: "{input} injured persons",
          questionDisplay: "There are {input} injured persons",
          updateSuffix: "X",
          continue: true,
        },
        {
          answer: "9-20 persons (input amount):",
          display: "{input} injured persons",
          questionDisplay: "There are {input} injured persons",
          updateSuffix: "Y",
          continue: true,
        },
        {
          answer: "21+ persons (input amount):",
          display: "{input} injured persons",
          questionDisplay: "There are {input} injured persons",
          updateSuffix: "Z",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk number of injs",
          questionDisplay: "The number of injured persons is unknown",
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
          code: "57B01",
          text: "Other Explosion",
          recResponse: 162,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 162,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 162,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 163,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 162,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 163,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 162,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 163,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 163,
            },
          ],
        },
        {
          code: "57B02",
          text: "Unkn Situation (Investigation)",
          recResponse: 162,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 162,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 162,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 163,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 162,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 163,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 162,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 163,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 163,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "57C00",
          text: "Override (Charlie)",
          recResponse: 163,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 163,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 163,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 163,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 163,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 163,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 163,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 163,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 163,
            },
          ],
        },
        {
          code: "57C01",
          text: "Other Vehicle Explosion",
          recResponse: 164,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 165,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 166,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 167,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 168,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 169,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 169,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 169,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 169,
            },
          ],
        },
        {
          code: "57C02",
          text: "Open Area",
          recResponse: 170,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 171,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 172,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 173,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 174,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 175,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 175,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 175,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 175,
            },
          ],
        },
        {
          code: "57C03",
          text: "Manhole (Cover/Underground Vault)",
          recResponse: 162,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 162,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 176,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 177,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 176,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 177,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 177,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 177,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 177,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "57D00",
          text: "Override (Delta)",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 178,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 178,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 178,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 178,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 178,
            },
          ],
        },
        {
          code: "57D01",
          text: "High Life Hazard",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
        {
          code: "57D02",
          text: "High Rise",
          recResponse: 180,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 180,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 180,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 180,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
        {
          code: "57D03",
          text: "Government Building",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
        {
          code: "57D04",
          text: "Comm/Ind Building",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
        {
          code: "57D05",
          text: "Residential (Mult)",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
        {
          code: "57D06",
          text: "Residential (Single)",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
        {
          code: "57D07",
          text: "Large Non-Dwelling Structure",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
        {
          code: "57D08",
          text: "Small Non-Dwelling Structure",
          recResponse: 181,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 181,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 181,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 181,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 181,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 181,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 181,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 181,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 181,
            },
          ],
        },
        {
          code: "57D09",
          text: "Comm Vehicle",
          recResponse: 182,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 182,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 182,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 182,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 182,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 182,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 182,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 182,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 182,
            },
          ],
        },
        {
          code: "57D10",
          text: "Large Fuel/Fire Load Vehicle",
          recResponse: 182,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 182,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 182,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 182,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 182,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 182,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 182,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 182,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 182,
            },
          ],
        },
        {
          code: "57D11",
          text: "Mobile Home, House Trailer, Portable Office",
          recResponse: 181,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 181,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 181,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 181,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 181,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 181,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 181,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 181,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 181,
            },
          ],
        },
        {
          code: "57D12",
          text: "Unkn Type Building/Structure",
          recResponse: 178,
          subCodes: [
            {
              suffix: "F",
              text: "Fire",
              recResponse: 178,
            },
            {
              suffix: "G",
              text: "Fire w/ Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "H",
              text: "Fire w/ Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "V",
              text: "Single Injured Person",
              recResponse: 178,
            },
            {
              suffix: "W",
              text: "Multiple Injured Persons",
              recResponse: 179,
            },
            {
              suffix: "X",
              text: "MCI Level 1",
              recResponse: 179,
            },
            {
              suffix: "Y",
              text: "MCI Level 2",
              recResponse: 179,
            },
            {
              suffix: "Z",
              text: "MCI Level 3",
              recResponse: 179,
            },
          ],
        },
      ],
    },
  ],
};
