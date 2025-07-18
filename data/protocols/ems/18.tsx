import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const HEADACHE: IEMSComplaint = {
  protocol: 18,
  name: "Headache",
  shortName: "Headache",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 88,
  defaultCode: "18A01",
  questions: [
    {
      text: (
        <p>
          Is **pronoun** <b className="font-bold">completely alert</b>{" "}
          <span className="text-red-400">(responding appropriately)</span>?
        </p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Responding nlly",
          questionDisplay:
            "**pronoun** is completely alert (responding appropriately)",
          continue: true,
        },
        {
          answer: "No",
          display: "NOT responding nlly",
          questionDisplay:
            "**pronoun** is NOT completely alert (not responding appropriately)",
          updateCode: "18C01",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if responding nlly",
          questionDisplay:
            "Unk if **pronoun** is completely alert (responding appropriately)",
          continue: true,
        },
      ],
    },

    {
      text: <p>Is **pronoun** breathing <b className="font-bold">normally</b>?</p>,
      firstPersonText: (
        <p>Are you having any <b className="font-bold">difficulty breathing</b>?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing normally",
          continue: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity !== "first"
          }
        },
        {
          answer: "No",
          display: "Not breathing nlly",
          questionDisplay: "**pronoun** is NOT breathing normally",
          updateCode: "18C02",
          continue: true,
          send: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity !== "first"
          }
        },
        {
          answer: "No",
          display: "Diff breathing",
          questionDisplay: "**pronoun** is having difficulty breathing",
          updateCode: "18C02",
          continue: true,
          send: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity === "first"
          }
        },
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is NOT having difficulty breathing",
          continue: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity === "first"
          }
        },
        {
          answer: "Unknown",
          display: "Unk if breathing nlly",
          questionDisplay: "Unk if **pronoun** is breathing normally",
          continue: true,
        }
      ]
    },

    {
      text: <p>Is **pronoun** able to <b className="font-bold">speak</b> or <b className="font-bold">talk</b> normally?</p>,
      firstPersonText: (
        <p><span className="text-blue-400">(If not obvious)</span> Have you had any <b className="font-bold">sudden speech problems</b>?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Talking/speaking nlly",
          questionDisplay: "**pronoun** is able to speak or talk normally",
          continue: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity !== "first"
          }
        },
        {
          answer: "No",
          display: "Speech problems",
          questionDisplay: "**pronoun** is NOT able to speak or talk normally",
          updateCode: "18C03",
          continue: true,
          send: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity !== "first"
          }
        },
        {
          answer: "No",
          display: "Speech problems",
          questionDisplay: "**pronoun** is having sudden speech problems",
          updateCode: "18C03",
          continue: true,
          send: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity === "first"
          }
        },
        {
          answer: "Yes",
          display: "Talking/speaking nlly",
          questionDisplay: "**pronoun** is NOT having sudden speech problems",
          continue: true,
          preRenderInstructions: (patient) => {
            return patient.patientProximity === "first"
          }
        },
        {
          answer: "Unknown",
          display: "Unk if talking/speaking nlly",
          questionDisplay: "Unk if **pronoun** is able to speak or talk normally",
          continue: true,
        }
      ]
    },

    {
      text: <p>Did the pain onset <b className="font-bold">suddenly</b> or <b className="font-bold">gradually</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Suddenly",
          display: "Sudden onset",
          questionDisplay: "**pronoun** had a sudden onset of severe pain",
          updateCode: "18C04",
          continue: true,
          send: true,
        },
        {
          answer: "Gradually",
          display: "Gradual onset",
          questionDisplay: "**pronoun** had a gradual onset of pain",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk onset",
          questionDisplay: "Unk if **pronoun** had a sudden or gradual onset of pain",
          continue: true,
        }
      ]
    },

    {
      text: <p>Does **pronoun** have any <b className="font-bold">numbness</b> on one side or <b className="font-bold">paralysis</b>?</p>,
      firstPersonText: (
        <p>Do you have any <b className="font-bold">numbness</b> on one side or <b className="font-bold">paralysis</b>?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No numbness or paralysis",
          questionDisplay: "**pronoun** does NOT have numbness on one side or paralysis",
          continue: true,
        },
        {
          answer: "Numbness",
          display: "Numbness",
          questionDisplay: "**pronoun** has numbness on one side",
          updateCode: "18C05",
          continue: true,
          send: true,
        },
        {
          answer: "Paralysis",
          display: "Paralysis",
          questionDisplay: "**pronoun** has paralysis",
          updateCode: "18C06",
          continue: true,
          send: true,
        },
        {
          answer: "Both",
          display: "Numbness & Paralysis",
          questionDisplay: "**pronoun** has numbness on one side and paralysis",
          updateCode: "18C05",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if numbness or paralysis",
          questionDisplay:
            "Unk if **pronoun** has numbness on one side or paralysis",
          continue: true,
        }
      ]
    },

    {
      text: <p>Has **pronoun** had a <b className="font-bold">change in behavior</b> in the last 3 hours?</p>,
      firstPersonText: (
        <p>Have you had any <b className="font-bold">change in behavior</b> in the last 3 hours?</p>
      ),
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "No chng in beh (<=3hrs)",
          questionDisplay: "**pronoun** has had NO change in behavior in the last 3 hours",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Chng in beh (<=3hrs)",
          questionDisplay: "**pronoun** has had a change in behavior in the last 3 hours",
          updateCode: "18C07",
          continue: true,
          send: true,
        },
        {
          answer: "Unknown",
          display: "Unk if chng in beh (<=3hrs)",
          questionDisplay:
            "Unk if **pronoun** has had a change in behavior in the last 3 hours",
          continue: true,
        }
      ]
    },

    {
      text: <p><b className="font-bold">When</b> did these symptoms <b className="font-bold">start</b>?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, _answers, currentCode) => {
        return currentCode?.startsWith("18C") ?? false;
      },
      preRenderLogic: "An 18C code was selected",
      preRenderDependencies: ["currentCode"],
      answers: [
        {
          answer: "Less than 4.5 hours ago:",
          display: "Sx started: {input} (<4.5 hrs)",
          questionDisplay: "**pronoun**'s symptoms started at {input} (< 4.5 hrs)",
          continue: true,
          input: true,
          updateSuffix: "L"
        },
        {
          answer: "More than 4.5 hours ago:",
          display: "Sx started: {input} (>4.5 hrs)",
          questionDisplay: "**pronoun**'s symptoms started at {input} (> 4.5 hrs)",
          continue: true,
          input: true,
          updateSuffix: "G"
        },
        {
          answer: "Unknown when symptoms started",
          display: "Unk when sx started",
          questionDisplay: "Unk when **pronoun**'s symptoms started",
          continue: true,
          updateSuffix: "U"
        }
      ]
    },

    {
      text: <p>We need to complete a test before the paramedics show up ok?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, _answers, currentCode) => {
        return currentCode?.startsWith("18C") ?? false;
      },
      answers: [
        {
          answer: "Ok",
          display: "Stroke test score: {input}",
          questionDisplay: "Stroke test score: {input}",
          continue: true,
          strokeTest: true,
        },
        {
          answer: "Refused",
          display: "Stroke test refused",
          questionDisplay: "Stroke test refused",
          updateSuffix: "X",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswer = answers[answers.length - 1]?.answer;
            return lastAnswer === "Less than 4.5 hours ago:"
          }
        },
        {
          answer: "Refused",
          display: "Stroke test refused",
          questionDisplay: "Stroke test refused",
          updateSuffix: "Y",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswer = answers[answers.length - 1]?.answer;
            return lastAnswer === "More than 4.5 hours ago:"
          }
        },
        {
          answer: "Refused",
          display: "Stroke test refused",
          questionDisplay: "Stroke test refused",
          updateSuffix: "Z",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswer = answers[answers.length - 1]?.answer;
            return lastAnswer === "Unknown when symptoms started"
          }
        },
        {
          answer: "Unable",
          display: "Stroke test unable",
          questionDisplay: "Stroke test unable",
          updateSuffix: "X",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswer = answers[answers.length - 1]?.answer;
            return lastAnswer === "Less than 4.5 hours ago:";
          }
        },
        {
          answer: "Unable",
          display: "Stroke test unable",
          questionDisplay: "Stroke test unable",
          updateSuffix: "Y",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswer = answers[answers.length - 1]?.answer;
            return lastAnswer === "More than 4.5 hours ago:";
          }
        },
        {
          answer: "Unable",
          display: "Stroke test unable",
          questionDisplay: "Stroke test unable",
          updateSuffix: "Z",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswer = answers[answers.length - 1]?.answer;
            return lastAnswer === "Unknown when symptoms started";
          }
        },
      ],
    },

    {
      text: <p>Calclate stroke score</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswerDisplay = answers[answers.length - 1]?.display;
        const score = lastAnswerDisplay?.match(/Stroke test score: (\d)/)?.[1];
        return score !== undefined;
      },
      answers: [
        {
          answer: "Calculate",
          display: "Stroke test inconclusive",
          questionDisplay: "Stroke test completed",
          updateSuffix: "X",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswerDisplay = answers[answers.length - 1]?.display;
            const score = lastAnswerDisplay?.match(/Stroke test score: (\d)/)?.[1];
            const timeFrame = answers.find((a) => a.question === "When did these symptoms start?")?.answer;
            return timeFrame === "Less than 4.5 hours ago:" && score !== undefined && parseInt(score) === 0;
          },
        },
        {
          answer: "Calculate",
          display: "Stroke test inconclusive",
          questionDisplay: "Stroke test completed",
          updateSuffix: "Y",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswerDisplay = answers[answers.length - 1]?.display;
            const score = lastAnswerDisplay?.match(/Stroke test score: (\d)/)?.[1];
            const timeFrame = answers.find((a) => a.question === "When did these symptoms start?")?.answer;
            return timeFrame === "More than 4.5 hours ago:" && score !== undefined && parseInt(score) === 0;
          },
        },
        {
          answer: "Calculate",
          display: "Stroke test inconclusive",
          questionDisplay: "Stroke test completed",
          updateSuffix: "Z",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswerDisplay = answers[answers.length - 1]?.display;
            const score = lastAnswerDisplay?.match(/Stroke test score: (\d)/)?.[1];
            const timeFrame = answers.find((a) => a.question === "When did these symptoms start?")?.answer;
            return timeFrame === "Unknown when symptoms started" && score !== undefined && parseInt(score) === 0;
          },
        },
        {
          answer: "Calculate",
          display: "Partial stroke evidence",
          questionDisplay: "Stroke test completed",
          updateSuffix: "C",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswerDisplay = answers[answers.length - 1]?.display;
            const score = lastAnswerDisplay?.match(/Stroke test score: (\d)/)?.[1];
            const timeFrame = answers.find((a) => a.question === "When did these symptoms start?")?.answer;
            return score !== undefined && parseInt(score) > 0 && parseInt(score) < 3 && timeFrame === "Less than 4.5 hours ago:";
          },
        },
        {
          answer: "Calculate",
          display: "Partial stroke evidence",
          questionDisplay: "Stroke test completed",
          updateSuffix: "D",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswerDisplay = answers[answers.length - 1]?.display;
            const score = lastAnswerDisplay?.match(/Stroke test score: (\d)/)?.[1];
            const timeFrame = answers.find((a) => a.question === "When did these symptoms start?")?.answer;
            return score !== undefined && parseInt(score) > 0 && parseInt(score) < 3 && timeFrame === "More than 4.5 hours ago:";
          },
        },
        {
          answer: "Calculate",
          display: "Partial stroke evidence",
          questionDisplay: "Stroke test completed",
          updateSuffix: "E",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswerDisplay = answers[answers.length - 1]?.display;
            const score = lastAnswerDisplay?.match(/Stroke test score: (\d)/)?.[1];
            const timeFrame = answers.find((a) => a.question === "When did these symptoms start?")?.answer;
            return score !== undefined && parseInt(score) > 0 && parseInt(score) < 3 && timeFrame === "Unknown when symptoms started";
          },
        },
        {
          answer: "Calculate",
          display: "Strong stroke evidence",
          questionDisplay: "Stroke test completed",
          updateSuffix: "F",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswerDisplay = answers[answers.length - 1]?.display;
            const score = lastAnswerDisplay?.match(/Stroke test score: (\d)/)?.[1];
            const timeFrame = answers.find((a) => a.question === "When did these symptoms start?")?.answer;
            return score !== undefined && parseInt(score) >= 3 && parseInt(score) < 5 && timeFrame === "Less than 4.5 hours ago:";
          },
        },
        {
          answer: "Calculate",
          display: "Strong stroke evidence",
          questionDisplay: "Stroke test completed",
          updateSuffix: "H",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswerDisplay = answers[answers.length - 1]?.display;
            const score = lastAnswerDisplay?.match(/Stroke test score: (\d)/)?.[1];
            const timeFrame = answers.find((a) => a.question === "When did these symptoms start?")?.answer;
            return score !== undefined && parseInt(score) >= 3 && parseInt(score) < 5 && timeFrame === "More than 4.5 hours ago:";
          },
        },
        {
          answer: "Calculate",
          display: "Strong stroke evidence",
          questionDisplay: "Stroke test completed",
          updateSuffix: "I",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswerDisplay = answers[answers.length - 1]?.display;
            const score = lastAnswerDisplay?.match(/Stroke test score: (\d)/)?.[1];
            const timeFrame = answers.find((a) => a.question === "When did these symptoms start?")?.answer;
            return score !== undefined && parseInt(score) >= 3 && parseInt(score) < 5 && timeFrame === "Unknown when symptoms started";
          },
        },
        {
          answer: "Calculate",
          display: "Clear stroke evidence",
          questionDisplay: "Stroke test completed",
          updateSuffix: "J",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswerDisplay = answers[answers.length - 1]?.display;
            const score = lastAnswerDisplay?.match(/Stroke test score: (\d)/)?.[1];
            const timeFrame = answers.find((a) => a.question === "When did these symptoms start?")?.answer;
            return score !== undefined && parseInt(score) >= 5 && timeFrame === "Less than 4.5 hours ago:";
          },
        },
        {
          answer: "Calculate",
          display: "Clear stroke evidence",
          questionDisplay: "Stroke test completed",
          updateSuffix: "K",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswerDisplay = answers[answers.length - 1]?.display;
            const score = lastAnswerDisplay?.match(/Stroke test score: (\d)/)?.[1];
            const timeFrame = answers.find((a) => a.question === "When did these symptoms start?")?.answer;
            return score !== undefined && parseInt(score) >= 5 && timeFrame === "More than 4.5 hours ago:";
          },
        },
        {
          answer: "Calculate",
          display: "Clear stroke evidence",
          questionDisplay: "Stroke test completed",
          updateSuffix: "M",
          continue: true,
          preRenderInstructions: (_patient, answers) => {
            const lastAnswerDisplay = answers[answers.length - 1]?.display;
            const score = lastAnswerDisplay?.match(/Stroke test score: (\d)/)?.[1];
            const timeFrame = answers.find((a) => a.question === "When did these symptoms start?")?.answer;
            return score !== undefined && parseInt(score) >= 5 && timeFrame === "Unknown when symptoms started";
          },
        }
      ]
    },
    
  ],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "18A01",
          text: "Breathing Normally",
          recResponse: 88,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "18B00",
          text: "BLS Override (Bravo)",
          recResponse: 89,
        },
        {
          code: "18B01",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 89,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "18C00",
          text: "ALS Override (Charlie)",
          recResponse: 90,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 90,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 90,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 90,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 90,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 90,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 90,
            },
          ],
        },
        {
          code: "18C01",
          text: "Not Alert",
          recResponse: 92,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 92,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 92,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 92,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 92,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 92,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 92,
            },
          ],
        },
        {
          code: "18C02",
          text: "Abnormal Breathing",
          recResponse: 93,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 93,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 93,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 93,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 93,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 93,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 93,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 93,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 93,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 93,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 93,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 93,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 93,
            },
          ],
        },
        {
          code: "18C03",
          text: "Speech Problems",
          recResponse: 89,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 89,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 89,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 89,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 89,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 89,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 89,
            },
          ],
        },
        {
          code: "18C04",
          text: "Sudden Onset of Severe Pain",
          recResponse: 89,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 89,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 89,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 89,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 89,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 89,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 89,
            },
          ],
        },
        {
          code: "18C05",
          text: "Numbness",
          recResponse: 89,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 89,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 89,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 89,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 89,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 89,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 89,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 89,
            },
          ],
        },
        {
          code: "18C06",
          text: "Paralysis",
          recResponse: 90,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 90,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 90,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 90,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 90,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 90,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 90,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 90,
            },
          ],
        },
        {
          code: "18C07",
          text: "Change in Behavior (<= 3hrs)",
          recResponse: 92,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 92,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 92,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 92,
            },
            {
              suffix: "J",
              text: "Clear Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "K",
              text: "Clear Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "L",
              text: "< 4.5hrs since symptoms started",
              recResponse: 92,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 92,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 92,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 92,
            },
          ],
        },
      ],
    },
  ],
};
