import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const EYE_PROBLEMS: IEMSComplaint = {
  protocol: 16,
  name: "Eye Problems / Injuries",
  shortName: "Eye Prob/Injs",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 76,
  defaultCode: "16A02",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "16A01",
          text: "Moderate Eye Injs",
          recResponse: 76,
        },
        {
          code: "16A02",
          text: "Minor Eye Injs",
          recResponse: 76,
        },
        {
          code: "16A03",
          text: "Medical Eye Problems",
          recResponse: 77,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "16B00",
          text: "BLS Override (Bravo)",
          recResponse: 76,
        },
        {
          code: "16B01",
          text: "Severe Eye Injs",
          recResponse: 76,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "16D00",
          text: "ALS Override (Delta)",
          recResponse: 78,
        },
        {
          code: "16D01",
          text: "Not Alert",
          recResponse: 78,
        },
      ],
    },
  ],
};
