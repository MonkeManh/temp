import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const ELEVATOR_ESCALATOR_INCIDENT: IFireComplaint = {
  protocol: 56,
  name: "Elevator / Escalator Incident",
  shortName: "Elevator/Escalator Incident",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: 3 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "O",
  defaultPlan: 156,
  defaultCode: "56B03",
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "56O01",
          text: "Elevator Malfunction - No Occupants Inside",
          recResponse: 156,
        },
        {
          code: "56O02",
          text: "Escalator (Not Trapped) w/ or w/o Injs",
          recResponse: 156,
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "56A00",
          text: "Override (Alpha)",
          recResponse: 156,
        },
        {
          code: "56A01",
          text: "Elevator Malfunction - Occupants Inside",
          recResponse: 157,
        },
        {
          code: "56A02",
          text: "Elevator Alarm",
          recResponse: 158,
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "56B00",
          text: "Override (Bravo)",
          recResponse: 159,
        },
        {
          code: "56B01",
          text: "Elevator Malfunction - Occupants Inside (Medical Condition Present)",
          recResponse: 159,
        },
        {
          code: "56B02",
          text: "Escalator Entrapment/Trapped w/o Injs",
          recResponse: 156,
        },
        {
          code: "56B03",
          text: "Unkn Situation (Investigation)",
          recResponse: 156,
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "56D00",
          text: "Override (Delta)",
          recResponse: 160,
        },
        {
          code: "56D01",
          text: "Escalator Entrapment/Trapped w/ Injs",
          recResponse: 161,
        },
        {
          code: "56D02",
          text: "Elevator Accident",
          recResponse: 85,
        },
      ],
    },
  ],
};
