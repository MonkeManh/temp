import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const CARDIAC_ARREST: IEMSComplaint = {
  protocol: 9,
  name: "Cardiac or Respiratory Arrest / Death",
  shortName: "Cardiac Arrest",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: true },
    { name: "Police", priority: true },
  ],
  defaultPriority: "E",
  defaultPlan: 40,
  defaultCode: "09D00",
  preSend: true,
  questions: [
    {
      text: <p className="text-blue-400">What type of situation is this?</p>,
      questionType: "select",
      defaultTab: "ai",
      additionalInstructions: (
        <div className="space-y-4">
          <AI.ObviousDeath />
          <AI.ExpectedDeath />
        </div>
      ),
      answers: [
        {
          answer: "Witnessed or Just Occurred Cardiac Arrest",
          display: "The arrest was witnessed or just occurred",
          questionDisplay: "The cardiac arrest was witnessed or just occurred",
          updateCode: "09E01",
          continue: true,
          send: true,
        },
        {
          answer: "Unwitnessed Cardiac Arrest (time unknown)",
          display: "The arrest was NOT witnessed",
          questionDisplay: "The cardiac arrest was NOT witnessed",
          updateCode: "09E01",
          continue: true,
          send: true,
        },
        {
          answer: "Suspected Cardiac Arrest (3rd/4th Party)",
          display: "The arrest was suspected by a third or fourth party",
          questionDisplay:
            "The cardiac arrest was suspected by a third or fourth party",
          updateCode: "09D01",
          continue: true,
          send: true,
        },
        {
          answer: "Respiratory Arrest",
          display: "Respiratory arrest ID'd",
          questionDisplay: "Respiratory arrest identified",
          updateCode: "09D01",
          continue: true,
          send: true,
        },
        {
          answer: "OBVIOUS DEATH (suspected)",
          display: "Obvious death suspected",
          questionDisplay: "Obvious death suspected",
          continue: true,
        },
        {
          answer: "EXPECTED DEATH",
          display: "The death was expected",
          questionDisplay: "The death was expected",
          continue: true,
        },
        {
          answer: "Completely Unknown Situation",
          display: "The situation is completely unknown",
          questionDisplay: "The situation is completely unknown",
          end: true,
        },
      ],
    },

    {
      text: (
        <p>
          Is there a <b className="font-bold">defibrillator</b>{" "}
          <span className="text-red-400">(AED)</span> available?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].answer;
        return lastAnswer !== "EXPECTED DEATH" && lastAnswer !== "OBVIOUS DEATH";
      },
      preRenderLogic: "the caller is a second or fourth party",
      preRenderDependencies: ["proximity"],
      answers: [
        {
          answer: "No",
          display: "No AED available",
          questionDisplay: "No AED available",
          continue: true,
        },
        {
          answer: "Yes",
          display: "AED available",
          questionDisplay: "AED available",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "AED availability unknown",
          questionDisplay: "AED availability unknown",
          continue: true,
        },
      ],
    },

    {
      text: <p className="text-blue-400">Type of incident?</p>,
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const lastAnswer = answers[answers.length - 1].answer;
        return lastAnswer === "EXPECTED DEATH";
      },
      preRenderLogic: "the last answer is EXPECTED DEATH",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Terminal illness",
          display: "Terminal illness",
          questionDisplay: "Terminal illness",
          updateSuffix: "x",
          updateCode: "09O01",
          end: true,
        },
        {
          answer: "DNR (Do Not Resuscitate) Order",
          display: "DNR (Do Not Resuscitate) Order",
          questionDisplay: "DNR (Do Not Resuscitate) Order",
          updateSuffix: "y",
          updateCode: "09O01",
          end: true,
        },
        {
          answer: "None of these",
          display: "No expected death criteria met",
          questionDisplay: "No expected death criteria met",
          updateCode: "09E01",
        },
      ],
    },

    {
      text: (
        <p>
          <b className="font-bold">Why</b> do you think **pronoun** is dead?
        </p>
      ),
      questionType: "select",
      preRenderInstructions: (_patient, answers) => {
        const firstAnswer = answers[0].answer;
        return firstAnswer === "OBVIOUS DEATH";
      },
      preRenderLogic: "the first answer is OBVIOUS DEATH or OBVIOUS DEATH",
      preRenderDependencies: ["answers"],
      answers: [
        {
          answer: "Cold and stiff in a warm environment",
          display: "Cold and stiff in a warm environment",
          questionDisplay: "Cold and stiff in a warm environment reported",
          updateCode: "09O01",
          updateSuffix: "a",
          continue: true,
        },
        {
          answer: "Decapitation",
          display: "Decapitation rptd",
          questionDisplay: "Decapitation reported",
          updateCode: "09B01",
          updateSuffix: "b",
          continue: true,
        },
        {
          answer: "Body decomposition",
          display: "Body decomposition rptd",
          questionDisplay: "Body decomposition reported",
          updateCode: "09B01",
          updateSuffix: "c",
          continue: true,
        },
        {
          answer: "Incineration",
          display: "Incineration rptd",
          questionDisplay: "Incineration reported",
          updateCode: "09B01",
          updateSuffix: "d",
          continue: true,
        },
        {
          answer: "Non-recent death",
          display: "Non-recent death rptd",
          questionDisplay: "Non-recent death reported",
          updateCode: "09B01",
          updateSuffix: "e",
          continue: true,
        },
        {
          answer: "Severe injuries obviously incompatible with life",
          display: "Severe injs incompatible with life rptd",
          questionDisplay: "Severe injuries incompatible with life reported",
          updateCode: "09B01",
          updateSuffix: "f",
          continue: true,
        },
        {
          answer: "None of these",
          display: "No obvious death critera met",
          questionDisplay: "No obvious death criteria met",
          updateCode: "09E01",
          continue: true,
        },
      ],
    },
  ],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "09O01",
          text: "Expected Death Unquestionable",
          recResponse: 48,
          subCodes: [
            {
              suffix: "x",
              text: "Terminal Illness",
              recResponse: 48,
            },
            {
              suffix: "y",
              text: "DNR (Do Not Resuscitate) Order",
              recResponse: 48,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "09B00",
          text: "BLS Override (Bravo)",
          recResponse: 47,
          subCodes: [
            {
              suffix: "x",
              text: "Terminal Illness",
              recResponse: 47,
            },
            {
              suffix: "y",
              text: "DNR (Do Not Resuscitate) Order",
              recResponse: 48,
            },
          ],
        },
        {
          code: "09B01",
          text: "Obvious Death Unquestionable",
          recResponse: 48,
          subCodes: [
            {
              suffix: "a",
              text: "Cold & Stiff in a Warm Environment",
              recResponse: 48,
            },
            {
              suffix: "b",
              text: "Decapitation",
              recResponse: 48,
            },
            {
              suffix: "c",
              text: "Decomposition",
              recResponse: 48,
            },
            {
              suffix: "d",
              text: "Incineration",
              recResponse: 48,
            },
            {
              suffix: "e",
              text: "Non-Recent Death",
              recResponse: 48,
            },
            {
              suffix: "f",
              text: "Severe Injs Obviously Incompatible w/ Life",
              recResponse: 48,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "09D00",
          text: "ALS Override (Delta)",
          recResponse: 47,
          subCodes: [
            {
              suffix: "a",
              text: "Cold & Stiff in a Warm Environment",
              recResponse: 47,
            },
            {
              suffix: "b",
              text: "Decapitation",
              recResponse: 47,
            },
            {
              suffix: "c",
              text: "Decomposition",
              recResponse: 47,
            },
            {
              suffix: "d",
              text: "Incineration",
              recResponse: 47,
            },
            {
              suffix: "e",
              text: "Non-Recent Death",
              recResponse: 47,
            },
            {
              suffix: "f",
              text: "Severe Injs Obviously Incompatible w/ Life",
              recResponse: 47,
            },
            {
              suffix: "x",
              text: "Terminal Illness",
              recResponse: 47,
            },
            {
              suffix: "y",
              text: "DNR (Do Not Resuscitate) Order",
              recResponse: 47,
            },
          ],
        },
        {
          code: "09D01",
          text: "Ineffective Breathing",
          recResponse: 47,
        },
        {
          code: "09D02",
          text: "Obvious or Expected Death Questionable",
          recResponse: 47,
          subCodes: [
            {
              suffix: "a",
              text: "Cold & Stiff in a Warm Environment",
              recResponse: 47,
            },
            {
              suffix: "b",
              text: "Decapitation",
              recResponse: 47,
            },
            {
              suffix: "c",
              text: "Decomposition",
              recResponse: 47,
            },
            {
              suffix: "d",
              text: "Incineration",
              recResponse: 47,
            },
            {
              suffix: "e",
              text: "Non-Recent Death",
              recResponse: 47,
            },
            {
              suffix: "f",
              text: "Severe Injs Obviously Incompatible w/ Life",
              recResponse: 47,
            },
            {
              suffix: "x",
              text: "Terminal Illness",
              recResponse: 47,
            },
            {
              suffix: "y",
              text: "DNR (Do Not Resuscitate) Order",
              recResponse: 47,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "09E00",
          text: "ALS Override (Echo)",
          recResponse: 47,
          subCodes: [
            {
              suffix: "a",
              text: "Cold & Stiff in a Warm Environment",
              recResponse: 47,
            },
            {
              suffix: "b",
              text: "Decapitation",
              recResponse: 47,
            },
            {
              suffix: "c",
              text: "Decomposition",
              recResponse: 47,
            },
            {
              suffix: "d",
              text: "Incineration",
              recResponse: 47,
            },
            {
              suffix: "e",
              text: "Non-Recent Death",
              recResponse: 47,
            },
            {
              suffix: "f",
              text: "Severe Injs Obviously Incompatible w/ Life",
              recResponse: 47,
            },
            {
              suffix: "x",
              text: "Terminal Illness",
              recResponse: 47,
            },
            {
              suffix: "y",
              text: "DNR (Do Not Resuscitate) Order",
              recResponse: 47,
            },
          ],
        },
        {
          code: "09E01",
          text: "Suspected Workable Arrest, Not Breathing At All",
          recResponse: 47,
          notBreathing: true,
        },
        {
          code: "09E02",
          text: "Suspected Workable Arrest, Uncertain Breathing",
          uncertainBreathing: true,
          recResponse: 47,
        },
        {
          code: "09E03",
          text: "Suspected Workable Arrest, Hanging",
          recResponse: 47,
        },
        {
          code: "09E04",
          text: "Suspected Workable Arrest, Strangulation",
          recResponse: 47,
        },
        {
          code: "09E05",
          text: "Suspected Workable Arrest, Suffocation",
          recResponse: 47,
        },
      ],
    },
  ],
};
