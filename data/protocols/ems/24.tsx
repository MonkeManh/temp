import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const PREGNANCY: IEMSComplaint = {
  protocol: 24,
  name: "Pregnancy / Childbirth / Miscarriage",
  shortName: "Pregnancy",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined }
  ],
  defaultPriority: "O",
  defaultPlan: 139,
  defaultCode: "24B02",
  questions: [
    {
      text: <p>How many <b className="font-bold">weeks</b> (or <b className="font-bold">months</b>) pregnant is she?</p>,
      firstPersonText: <p>How many <b className="font-bold">weeks</b> (or <b className="font-bold">months</b>) pregnant are you?</p>,
      questionType: "select",
      answers: [
        {
          answer: "25+ wks (7-9 mos) 3rd TRIMESTER",
          display: "25+ wks 3rd TRIMESTER",
          questionDisplay: "She is 25+ weeks (7-9 months) pregnant (3rd TRIMESTER)",
          continue: true,
        },
        {
          answer: "20-24 wks (5-6 mos) 2nd TRIMESTER",
          display: "20-24 wks 2nd TRIMESTER",
          questionDisplay: "She is 20-24 weeks (5-6 months) pregnant (2nd TRIMESTER)",
          continue: true,
        },
        {
          answer: "13-19 wks (3-4 mos) 2nd TRIMESTER",
          display: "13-19 wks 2nd TRIMESTER",
          questionDisplay: "She is 13-19 weeks (3-4 months) pregnant (2nd TRIMESTER)",
          continue: true,
        },
        {
          answer: "0-12 wks (0-2 mos) 1st TRIMESTER",
          display: "0-12 wks 1st TRIMESTER",
          questionDisplay: "She is 0-12 weeks (0-2 months) pregnant (1st TRIMESTER)",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk how many wks pregnant",
          questionDisplay: "She is an unknown number of weeks pregnant",
          continue: true,
        }
      ]
    },

    {
      text: <p>Can you <b className="font-bold">see</b> (<span className="text-orange-400"><b className="font-bold">feel</b> or <b className="font-bold">touch</b></span>) any part of the <b className="font-bold">baby</b> now?</p>,
      questionType: "select",
      answers: [
        {
          answer: "BREECH or CORD",
          display: "BREECH or CORD visible/felt",
          questionDisplay: "**pronoun** has breech or cord visible/felt",
          updateCode: "24D01",
          continue: true,
          send: true
        },
        {
          answer: "Head visible/out",
          display: "Head visible/out",
          questionDisplay: "**pronoun** has head visible/out",
          updateCode: "24D02",
          continue: true,
          send: true
        },
        {
          answer: "Baby born (complications with baby)",
          display: "Baby born (complications with baby)",
          questionDisplay: "**pronoun** has baby born (complications with baby)",
          updateCode: "24D06",
          continue: true,
          send: true
        },
        {
          answer: "Baby born (complications with mother)",
          display: "Baby born (complications with mother)",
          questionDisplay: "**pronoun** has baby born (complications with mother)",
          updateCode: "24D07",
          continue: true,
          send: true
        },
        {
          answer: "Baby born (no complications)",
          display: "Baby born (no complications)",
          questionDisplay: "**pronoun** has baby born (no complications)",
          updateCode: "24C04",
          continue: true,
          send: true
        },
        {
          answer: "No",
          display: "No baby parts visible/felt",
          questionDisplay: "**pronoun** does not have any baby parts visible/felt",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if baby parts visible/felt",
          questionDisplay: "It is unknown if **pronoun** has any baby parts visible/felt",
          continue: true,
        }
      ]
    },

    {
      text: <p><span className="text-blue-400">(STILLBIRTH)</span> I just need to <b className="font-bold">be sure</b> that you feel there is <b className="font-bold">nothing we can do</b> for the baby now.</p>,
      questionType: "select",
      answers: [
        {
          answer: "Nothing can be done",
          display: "Stillbirth - no signs of life",
          questionDisplay: "She feels there is nothing we can do for the baby now (STILLBIRTH)",
          updateCode: "24A02",
        },
        {
          answer: "Signs of life",
          display: "Baby has signs of life",
          questionDisplay: "She feels the baby has signs of life",
          updateCode: "24D08",
          continue: true,
        },
        {
          answer: "Uncertain",
          display: "Uncertain if signs of life",
          questionDisplay: "She is uncertain if the baby has signs of life",
          continue: true,
          updateCode: "24D06",
        },
        {
          answer: "Not applicable",
          display: "Not a STILLBIRTH",
          questionDisplay: "N/A",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is she having <b className="font-bold">contractions</b> (labor pains)?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lengthOfPregnancy = answers.find(
          (a) =>
            a.questionDisplay ===
            "How many weeks (or months) pregnant is she?"
        )?.answer;
        return lengthOfPregnancy === "20-24 wks (5-6 mos) 2nd TRIMESTER" || lengthOfPregnancy === "25+ wks (7-9 mos) 3rd TRIMESTER";
      },
      preRenderLogic: "> 5 months pregnant",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Yes",
          display: "Having contractions",
          questionDisplay: "**pronoun** is having contractions (labor pains)",
          updateCode: "24D03",
          continue: true,
          send: true
        },
        {
          answer: "No",
          display: "Not having contractions",
          questionDisplay: "**pronoun** is not having contractions (labor pains)",
          continue: true,
        },
        {
          answer: "Uncertain",
          display: "Uncertain if having contractions",
          questionDisplay: "It is uncertain if **pronoun** is having contractions (labor pains)",
          continue: true,
        }
      ]
    },
    
    {
      text: <p>Is this her <b className="font-bold">first</b> delivery?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].display;
        return lastAnswer === "Having contractions";
      },
      preRenderLogic: "Having contractions",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No:",
          display: "{input} deliveries before",
          questionDisplay: "This is not her first delivery; she has had {input} deliveries before",
          continue: true,
          input: true,
        },
        {
          answer: "Yes",
          display: "First delivery",
          questionDisplay: "This is her first delivery",
          continue: true,
        },
        {
          answer: "Uncertain",
          display: "Uncertain if first delivery",
          questionDisplay: "It is uncertain if this is her first delivery",
          continue: true,
        }
      ]
    },

    {
      text: <p>How many <b className="font-bold">minutes apart</b> are the contractions?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].display;
        return lastAnswer === "Having contractions";
      },
      preRenderLogic: "Having contractions",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "5 or more minutes apart",
          display: "5+ mins apart",
          questionDisplay: "The contractions are 5 or more minutes apart",
          continue: true,
        },
        {
          answer: "2-4 minutes apart",
          display: "2-4 mins apart",
          questionDisplay: "The contractions are 2-4 minutes apart",
          continue: true,
        },
        {
          answer: "Less than 2 minutes apart",
          display: "< 2 mins apart",
          questionDisplay: "The contractions are less than 2 minutes apart",
          continue: true,
        },
        {
          answer: "Uncertain",
          display: "Uncertain how far apart",
          questionDisplay: "It is uncertain how far apart the contractions are",
          continue: true,
        }
      ]
    },

    {
      text: <p>Does she have <b className="font-bold">abdominal</b> pain?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lengthOfPregnancy = answers.find(
          (a) =>
            a.questionDisplay ===
            "How many weeks (or months) pregnant is she?"
        )?.answer;
        return lengthOfPregnancy === "13-19 wks (3-4 mos) 2nd TRIMESTER" || lengthOfPregnancy === "0-12 wks (0-2 mos) 1st TRIMESTER";
      },
      preRenderLogic: "< 5 months pregnant",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "No",
          display: "No abdominal pain",
          questionDisplay: "**pronoun** does not have abdominal pain",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Has abdominal pain",
          questionDisplay: "**pronoun** has abdominal pain",
          updateCode: "24C03",
          continue: true,
          send: true
        },
        {
          answer: "Uncertain",
          display: "Uncertain if abdominal pain",
          questionDisplay: "It is uncertain if **pronoun** has abdominal pain",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is there any <b className="font-bold"><span className="text-red-400">SERIOUS</span> bleeding</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No SERIOUS bleeding",
          questionDisplay: "**pronoun** does not have SERIOUS bleeding",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Has SERIOUS bleeding",
          questionDisplay: "**pronoun** has SERIOUS bleeding",
          continue: true,
          dependency: (_patient, answers) => {
            const pregnancyAnswer = answers.find(
              (a) =>
                a.questionDisplay ===
                "How many weeks (or months) pregnant is she?"
            )?.answer;
            if(pregnancyAnswer === "0-12 wks (0-2 mos) 1st TRIMESTER") {
              return { code: "24C02" }
            } else if(pregnancyAnswer === "13-19 wks (3-4 mos) 2nd TRIMESTER" || pregnancyAnswer === "20-24 wks (5-6 mos) 2nd TRIMESTER") {
              return { code: "24C01" }
            } else if(pregnancyAnswer === "25+ wks (7-9 mos) 3rd TRIMESTER") {
              return { code: "24D04" }
            }
          }
        },
        {
          answer: "Minor",
          display: "Has MINOR bleeding",
          questionDisplay: "**pronoun** has MINOR bleeding",
          continue: true,
          dependency: (_patient, answers) => {
            const pregnancyAnswer = answers.find(
              (a) =>
                a.questionDisplay ===
                "How many weeks (or months) pregnant is she?"
            )?.answer;
            if(pregnancyAnswer === "0-12 wks (0-2 mos) 1st TRIMESTER") {
              return { code: "24A01" }
            } else if(pregnancyAnswer === "13-19 wks (3-4 mos) 2nd TRIMESTER" || pregnancyAnswer === "20-24 wks (5-6 mos) 2nd TRIMESTER") {
              return { code: "24B01" }
            } else if(pregnancyAnswer === "25+ wks (7-9 mos) 3rd TRIMESTER") {
              return { code: "24D04" }
            }
          }
        },
        {
          answer: "Unknown",
          display: "Unk if SERIOUS bleeding",
          questionDisplay: "It is unknown if **pronoun** has SERIOUS bleeding",
          continue: true,
        }
      ]
    },

    {
      text: <p>Does she have any <b className="font-bold">HIGH RISK</b> complications?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No HIGH RISK complications",
          questionDisplay: "**pronoun** does not have any HIGH RISK complications",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Has HIGH RISK complications",
          questionDisplay: "**pronoun** has HIGH RISK complications",
          updateCode: "24D05",
          continue: true,
          send: true
        },
        {
          answer: "Uncertain",
          display: "Uncertain if HIGH RISK complications",
          questionDisplay: "It is uncertain if **pronoun** has any HIGH RISK complications",
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
            code: "24O01",
            text: "Waters Broken (No Contractions or Presenting Parts)",
            recResponse: 139,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 139,
              },
            ],
          },
        ],
      },
      {
        priority: "A",
        codes: [
          {
            code: "24A00",
            text: "BLS Override (Alpha)",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
          {
            code: "24A01", 
            text: "1st Trimester Hemorrhage or Miscarriage",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
          {
            code: "24A02",
            text: "Stillbirth (> 24 weeks w/ Complications)",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
        ],
      },
      {
        priority: "B",
        codes: [
          {
            code: "24B00",
            text: "BLS Override (Bravo)",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
          {
            code: "24B01",
            text: "Labor (Delivery Not Imminent, >= 6 months/24 weeks)",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
          {
            code: "24B02",
            text: "Unkn Status / Other Codes Not Applicable",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
        ],
      },
      {
        priority: "C",
        codes: [
          {
            code: "24C00",
            text: "ALS Override (Charlie)",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24C01",
            text: "2nd Trimester Hemorrhage or Miscarriage",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24C02",
            text: "1st Trimester Serious Hemorrhage",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
          {
            code: "24C03",
            text: "Abdominal Pain/Cramping (< 6 months/24 weeks & No Fetus or Tissue)",
            recResponse: 140,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 140,
              },
            ],
          },
          {
            code: "24C04",
            text: "Baby Born (No Complications)",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
        ],
      },
      {
        priority: "D",
        codes: [
          {
            code: "24D00",
            text: "ALS Override (Delta)",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D01",
            text: "Breech or Cord",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D02",
            text: "Head Visible/Out",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D03",
            text: "Imminent Delivery (>= 6 months/24 weeks)",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D04",
            text: "3rd Trimester Hemorrhage",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D05",
            text: "High Risk Complications",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D06",
            text: "Baby Born (Complications w/ Baby)",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D07",
            text: "Baby Born (Complications w/ Mother)",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
          {
            code: "24D08",
            text: "Psbl Misscarriage w/ Signs of Life",
            recResponse: 141,
            subCodes: [
              {
                suffix: "M",
                text: "Mult Birth",
                recResponse: 141,
              },
            ],
          },
        ],
      },
    ]
};
