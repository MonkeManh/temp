import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const STROKE: IEMSComplaint = {
  protocol: 28,
  name: "Stroke (CVA) / Transient Ischemic Attack (TIA)",
  shortName: "Stroke",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 167,
  defaultCode: "28C12",
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
          updateCode: "28C01",
          continue: true,
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
      text: <p>Is **pronoun** <b className="font-bold">breathing normally</b>?</p>,
      firstPersonText: <p><span className="text-blue-400">(Not obvious)</span> Are you <b className="font-bold">breathing normally</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Breathing nlly",
          questionDisplay: "**pronoun** is breathing normally",
          dependency: (patient) => {
            if(patient.patientAge >= 35 && patient.ageUnit === "year") {
              return { code: "28C11" }
            } else {
              return { code: "28A01" }
            }
          }
        },
        {
          answer: "No",
          display: "NOT breathing nlly",
          questionDisplay: "**pronoun** is NOT breathing normally",
          updateCode: "28C02",
          continue: true,
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
      text: <p><span className="text-blue-400">(No STROKE symptoms mentioned yet)</span> Tell me <b className="font-bold">why</b> you think it's a <b className="font-bold">STROKE</b>.</p>,
      questionType: "select",
      answers: [
        {
          answer: "Sudden speech problems",
          display: "Sudden speech problems",
          questionDisplay: "**pronoun** has sudden speech problems",
          updateCode: "28C03",
          continue: true,
        },
        {
          answer: "Sudden weakness or numbness",
          display: "Sudden weakness or numbness",
          questionDisplay: "**pronoun** has sudden weakness or numbness",
          updateCode: "28C04",
          continue: true,
        },
        {
          answer: "Sudden paralysis or facial droop (one side)",
          display: "Sudden paralysis or facial droop (one side)",
          questionDisplay:
            "**pronoun** has sudden paralysis or facial droop (one side)",
          updateCode: "28C05",
          continue: true,
        },
        {
          answer: "Sudden loss of balance or coordination",
          display: "Sudden loss of balance or coordination",
          questionDisplay:
            "**pronoun** has sudden loss of balance or coordination",
          updateCode: "28C06",
          continue: true,
        },
        {
          answer: "Sudden vision problems",
          display: "Sudden vision problems",
          questionDisplay: "**pronoun** has sudden vision problems",
          updateCode: "28C07",
          continue: true,
        },
        {
          answer: "Sudden onset of severe headache",
          display: "Sudden onset of severe headache",
          questionDisplay:
            "**pronoun** has sudden onset of severe headache",
          updateCode: "28C08",
          continue: true,
        },
        {
          answer: 'Only "stroke" mentioned',
          display: 'Only "stroke" mentioned',
          questionDisplay:
            '**pronoun** only mentioned "stroke"',
          continue: true,
        },
      ]
    },

    {
      text: <p><b className="font-bold">When</b> did these symptoms <b className="font-bold">start</b>?</p>,
      questionType: "select",
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
      text: <p className="text-blue-400">Calclate stroke score</p>,
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
          code: "28A01",
          text: "Breathing Normally (< 35)",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "28C00",
          text: "ALS Override (Charlie)",
          recResponse: 91,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 91,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 91,
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
              recResponse: 91,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 91,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 91,
            },
          ],
        },
        {
          code: "28C01",
          text: "Not Alert",
          recResponse: 91,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 91,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 91,
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
              recResponse: 91,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 91,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 91,
            },
          ],
        },
        {
          code: "28C02",
          text: "Abnormal Breathing",
          recResponse: 91,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 91,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 91,
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
              recResponse: 91,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 91,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 91,
            },
          ],
        },
        {
          code: "28C03",
          text: "Sudden Speech Problems",
          recResponse: 91,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 91,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 91,
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
              recResponse: 91,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 91,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 91,
            },
          ],
        },
        {
          code: "28C04",
          text: "Sudden Weakness or Numbness",
          recResponse: 91,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 91,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 91,
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
              recResponse: 91,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 91,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 91,
            },
          ],
        },
        {
          code: "28C05",
          text: "Sudden Paralysis or Facial Droop (One Side)",
          recResponse: 91,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 91,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 91,
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
              recResponse: 91,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 91,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 91,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 91,
            },
          ],
        },
        {
          code: "28C06",
          text: "Sudden Loss of Balance or Coordination",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
        {
          code: "28C07",
          text: "Sudden Vision Problems",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
        {
          code: "28C08",
          text: "Sudden Onset of Severe Headache",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
        {
          code: "28C09",
          text: "Stroke Hx",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
        {
          code: "28C10",
          text: "TIA (Mini-Stroke) Hx",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
        {
          code: "28C11",
          text: "Breathing Normally (>= 35)",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
        {
          code: "28C12",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 167,
          subCodes: [
            {
              suffix: "C",
              text: "Partial Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "D",
              text: "Partial Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "E",
              text: "Partial Evidence (Unk Time Frame)",
              recResponse: 167,
            },
            {
              suffix: "F",
              text: "Strong Evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "G",
              text: "> 4.5hrs since symptoms started",
              recResponse: 167,
            },
            {
              suffix: "H",
              text: "Strong Evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "I",
              text: "Strong Evidence (Unkn Time Frame)",
              recResponse: 167,
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
              recResponse: 167,
            },
            {
              suffix: "M",
              text: "Clear Evidence (Unk Time Frame)",
              recResponse: 91,
            },
            {
              suffix: "U",
              text: "Unkn When Symptoms Started",
              recResponse: 167,
            },
            {
              suffix: "X",
              text: "No test evidence (< 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Y",
              text: "No test evidence (> 4.5hrs)",
              recResponse: 167,
            },
            {
              suffix: "Z",
              text: "No test evidence (Unk Time Frame)",
              recResponse: 167,
            },
          ],
        },
      ],
    },
  ],
};
