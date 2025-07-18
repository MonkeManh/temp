import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const UNKN_PROBLEM: IEMSComplaint = {
  protocol: 32,
  name: "Unknown Problem (Person Down)",
  shortName: "Unkn Problem",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: undefined },
    { name: "Police", priority: 1 },
  ],
  defaultPriority: "B",
  defaultPlan: 199,
  defaultCode: "32B03",
  questions: [
    {
      text: <p>Does **pronoun** appear to be <b className="font-bold">completely awake</b> (alert)?</p>,
      questionType: "select",
      answers: [
        {
          answer: "Yes",
          display: "Appears to be responding nlly",
          questionDisplay: "**pronoun** appears to be responding nlly",
          continue: true
        },
        {
          answer: "No",
          display: "NOT responding nlly",
          questionDisplay: "**pronoun** is NOT responding nlly",
          updateCode: "32D01",
          continue: true,
          send: true
        },
        {
          answer: "Unknown",
          display: "Unk if responding nlly",
          questionDisplay: "Unk if **pronoun** is responding nlly",
          continue: true,
          send: true
        }
      ]
    },

    {
      text: <p>Did you ever hear them <b className="font-bold">talk/cry</b>?</p>,
      questionType: "select",
      answers: [
        {
          answer: "No",
          display: "Didn't hear talk/cry",
          questionDisplay: "Didn't hear **pronoun** talk/cry",
          continue: true,
        },
        {
          answer: "Yes",
          display: "Heard talk/cry",
          questionDisplay: "Heard **pronoun** talk/cry",
          continue: true,
        },
        {
          answer: "Unknown",
          display: "Unk if heard talk/cry",
          questionDisplay: "Unk if heard **pronoun** talk/cry",
          continue: true,
        }
      ]
    },
  ],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "32B01",
          text: "Standing, Sitting, Moving, or Talking",
          recResponse: 199,
        },
        {
          code: "32B02",
          text: "Medical Alarm (Alert) Notifications (No Patient Info)",
          recResponse: 200,
        },
        {
          code: "32B03",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 199,
        },
        {
          code: "32B04",
          text: "Caller's Language Not Understood",
          recResponse: 199,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "32D00",
          text: "ALS Override (Delta)",
          recResponse: 199,
        },
        {
          code: "32D01",
          text: "Life Status Questionable",
          recResponse: 199,
        },
      ],
    },
  ],
};
