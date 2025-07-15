import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const MUTUAL_AID: IFireComplaint = {
  protocol: 65,
  name: "Mutual Aid / Assist Outside Agency",
  shortName: "Mutual Aid",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 235,
  defaultCode: "65A01",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "65A00",
          text: "Override (Alpha)",
          recResponse: 235,
        },
        {
          code: "65A01",
          text: "Mutual Aid to Incident (Mult Units-Cold)",
          recResponse: 236,
        },
        {
          code: "65A02",
          text: "Assist Outside Agency (Mult Units-Cold)",
          recResponse: 236,
        },
        {
          code: "65A03",
          text: "Mutual Aid to Incident (Single Unit-Cold)",
          recResponse: 237,
        },
        {
          code: "65A04",
          text: "Assist Outside Agency (Single Unit-Cold)",
          recResponse: 237,
        },
        {
          code: "65A05",
          text: "Mutual Aid Move-Up/Cover (Station Assignment)",
          recResponse: 238,
        },
        {
          code: "65A06",
          text: "Mutual Aid to Staging Area",
          recResponse: 239,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "65B00",
          text: "Override (Bravo)",
          recResponse: 240,
        },
        {
          code: "65B01",
          text: "Mutual Aid to Incident (Single Unit-Hot)",
          recResponse: 241,
        },
        {
          code: "65B02",
          text: "Assist Outside Agency (Single Unit-Hot)",
          recResponse: 241,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "65D00",
          text: "Override (Delta)",
          recResponse: 242,
        },
        {
          code: "65D01",
          text: "Mutual Aid to Incident (Mult Units-Hot)",
          recResponse: 240,
        },
        {
          code: "65D02",
          text: "Assist Outside Agency (Mult Units-Hot)",
          recResponse: 240,
        },
      ],
    },
  ],
};
