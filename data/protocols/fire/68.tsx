import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const SMOKE_INVESTIGATION: IFireComplaint = {
  protocol: 68,
  name: "Smoke Investigation (Outside)",
  shortName: "Smoke Investigation (Outdoor)",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: undefined },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 259,
  defaultCode: "68A03",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "68A01",
          text: "Light Smoke",
          recResponse: 259,
        },
        {
          code: "68A02",
          text: "Odor of Smoke",
          recResponse: 259,
        },
        {
          code: "68A03",
          text: "Unkn Situation (Investigation)",
          recResponse: 259,
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "68C00",
          text: "Override (Charlie)",
          recResponse: 260,
        },
        {
          code: "68C01",
          text: "Heavy Smoke",
          recResponse: 260,
        },
      ],
    },
  ],
};
