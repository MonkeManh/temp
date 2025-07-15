import { IResponsePlan } from "@/models/interfaces/IResponsePlan";
import { fireProtocols } from "../protocols/fireProtocols";
import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";

export const getFireResponsePlan = (id: number): IResponsePlan | undefined => {
  return firePlans.find((plan) => plan.id === id);
};

export const getFireResponsePlanFromProtocol = (
  protocol: number,
  priority: string,
  code: string
): IResponsePlan | undefined => {
  const complaint = fireProtocols.find(
    (c: IFireComplaint) => c.protocol === protocol
  );
  if (!complaint) return undefined;

  const priorityGroup = complaint.determinants.find(
    (p) => p.priority === priority
  );
  if (!priorityGroup) return undefined;

  const determinant = priorityGroup.codes.find((d) => d.code === code);
  if (!determinant) return undefined;

  return getFireResponsePlan(determinant.recResponse);
};

export const firePlans: IResponsePlan[] = [
  {
    id: 1,
    name: "SA",
    incidentType: "AIRBORNE|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 2,
    name: "SE",
    incidentType: "AIR|INVEST|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 3,
    name: "SE",
    incidentType: "AIR|STANDBY|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 4,
    name: "PHM1",
    incidentType: "AIR|ALERT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 5,
    name: "HMFULL",
    incidentType: "AIR|FullEmergency",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 6,
    name: "PHM1",
    incidentType: "AIR|MinorEmergency",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 7,
    name: "HMFULL",
    incidentType: "AIR|CRASH|LARGE",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 2,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 8,
    name: "PHM1",
    incidentType: "AIR|CRASH|SMALL",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 9,
    name: "HMFULL",
    incidentType: "FIRE|AIR|LARGE",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 2,
      },
    ],
    sendPolice: true,
  },
  {
    id: 10,
    name: "PHM1",
    incidentType: "FIRE|AIR|SMALL",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 11,
    name: "HMFULLWTR",
    incidentType: "AIR|CRASH|LARGE|WATER",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 2,
      },
      {
        type: "Rescue Boat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 2,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 12,
    name: "PHMWTR",
    incidentType: "AIR|CRASH|SMALL|WATER",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 2,
      },
      {
        type: "Rescue Boat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 13,
    name: "SCE",
    incidentType: "ALARM|HOME|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 14,
    name: "SCT",
    incidentType: "ALARM|CO",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 15,
    name: "FDALS1",
    incidentType: "ALARM|CO|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 16,
    name: "FDMULTP",
    incidentType: "ALARM|CO|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 17,
    name: "FDALS1",
    incidentType: "ALARM|FIRE|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 18,
    name: "SCE",
    incidentType: "ALARM|SINGLE|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 19,
    name: "HMADAPT",
    incidentType: "HMINVEST",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 20,
    name: "SCE",
    incidentType: "SVC|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 21,
    name: "SCT",
    incidentType: "SVC|LOCK|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 22,
    name: "SCLA",
    incidentType: "SVC|LIFT ASSIST",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 23,
    name: "SCE",
    incidentType: "SVC|ANIMAL|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 24,
    name: "SCW",
    incidentType: "SVC|WATER|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 25,
    name: "FC",
    incidentType: "LANDINGZONE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 26,
    name: "SCFF",
    incidentType: "SVC|OFI|FOLLOWUP",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 27,
    name: "SCFC",
    incidentType: "SVC|OFI|CODE",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 28,
    name: "SCFI",
    incidentType: "SVC|OFI|INVEST",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 29,
    name: "SCFO",
    incidentType: "SVC|OFI|OTHER",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 30,
    name: "SCE",
    incidentType: "SVC|EVENT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 31,
    name: "SCE",
    incidentType: "SVC|MERCURY",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 32,
    name: "SCE",
    incidentType: "SVC|BBQ|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 33,
    name: "SCT",
    incidentType: "SVC|MALF",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 34,
    name: "SCE",
    incidentType: "SVC",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 35,
    name: "SCTE",
    incidentType: "SVC|VEH|LOCKOUT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 36,
    name: "SCE",
    incidentType: "SVC|CheckWelfare",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 37,
    name: "SCTE",
    incidentType: "SVC|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 38,
    name: "SCB",
    incidentType: "SVC|SAFE|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 39,
    name: "HMFULLB",
    incidentType: "SVC|STAGE|BLS",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 40,
    name: "SCB",
    incidentType: "SVC|POL|SWEEP|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 41,
    name: "SCB",
    incidentType: "SVC|POL|BARRICADE|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 42,
    name: "SCB",
    incidentType: "SVC|POL|SPECOPS|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 43,
    name: "SCB",
    incidentType: "SVC|POL|TAC|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 44,
    name: "FF",
    incidentType: "SVC|LOCKOUT|FoodOnStove|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 45,
    name: "SCB",
    incidentType: "SVC|MH|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 46,
    name: "SCB",
    incidentType: "SVC|COMM|BLS",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 47,
    name: "SCFFB",
    incidentType: "SVC|OFI|FOLLOWUP|BLS",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 48,
    name: "SCFCB",
    incidentType: "SVC|OFI|CODE|BLS",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 49,
    name: "SCFIB",
    incidentType: "SVC|OFI|INVEST|BLS",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 50,
    name: "SCFOB",
    incidentType: "SVC|OFI|OTHER|BLS",
    units: [
      {
        type: "Fire Investigator",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 51,
    name: "SCTEB",
    incidentType: "SVC|EVENT|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 52,
    name: "SCEB",
    incidentType: "SVC|MERCURY|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 53,
    name: "SCEB",
    incidentType: "SVC|BBQ|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 54,
    name: "SCTB",
    incidentType: "SVC|MALF|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 55,
    name: "SCB",
    incidentType: "SVC|SAFE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 56,
    name: "HMFULL",
    incidentType: "SVC|STAGE",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 57,
    name: "TSU",
    incidentType: "SVC|POL|SWEEP",
    units: [
      {
        type: "Tactical Support Unit",
        quantity: 1,
      },
    ],
  },
  {
    id: 58,
    name: "TSU",
    incidentType: "SVC|POL|BARRICADE",
    units: [
      {
        type: "Tactical Support Unit",
        quantity: 1,
      },
    ],
  },
  {
    id: 59,
    name: "TSU",
    incidentType: "SVC|POL|SPECOPS",
    units: [
      {
        type: "Tactical Support Unit",
        quantity: 1,
      },
    ],
  },
  {
    id: 60,
    name: "TSU",
    incidentType: "SVC|POL|TAC",
    units: [
      {
        type: "Tactical Support Unit",
        quantity: 1,
      },
    ],
  },
  {
    id: 61,
    name: "FE",
    incidentType: "SVC|LOCKOUT|FoodOnStove",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 62,
    name: "SCB",
    incidentType: "SVC|MH",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 63,
    name: "SCB",
    incidentType: "SVC|COMM",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 64,
    name: "SC1",
    incidentType: "SVC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 65,
    name: "SC1",
    incidentType: "SVC|SAFE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 66,
    name: "HMFULL",
    incidentType: "SVC|STAGE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Crash",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 67,
    name: "SC1",
    incidentType: "SVC|POL|SWEEP|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 68,
    name: "SC1",
    incidentType: "SVC|POL|BARRICADE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 69,
    name: "SC1",
    incidentType: "SVC|POL|SPECOPS|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 70,
    name: "SC1",
    incidentType: "SVC|POL|TAC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 71,
    name: "FF",
    incidentType: "SVC|LOCKOUT|FoodOnStove|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 72,
    name: "SC1",
    incidentType: "SVC|MH|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 73,
    name: "SC1",
    incidentType: "SVC|COMM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 74,
    name: "FC",
    incidentType: "SVC|OFI|FOLLOWUP|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 75,
    name: "SCFF1",
    incidentType: "SVC|OFI|CODE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 76,
    name: "SCFC1",
    incidentType: "SVC|OFI|INVEST|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 77,
    name: "SCFI1",
    incidentType: "SVC|OFI|OTHER|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 78,
    name: "SCFO1",
    incidentType: "SVC|EVENT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 79,
    name: "SCTE1",
    incidentType: "SVC|MERCURY|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 80,
    name: "SCE1",
    incidentType: "SVC|BBQ|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 81,
    name: "SCT1",
    incidentType: "SVC|MALF|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 82,
    name: "SA",
    incidentType: "WATER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 83,
    name: "FE",
    incidentType: "TECH|INVEST",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 84,
    name: "WTR0",
    incidentType: "TECH|INVEST|WATER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
    ],
  },
  {
    id: 85,
    name: "RES",
    incidentType: "TECH|RESQ",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 86,
    name: "RES",
    incidentType: "CONFINEDSPACE|RESQ",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 87,
    name: "RES",
    incidentType: "COLLAPSE|RESQ",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 88,
    name: "RES",
    incidentType: "TRENCH|RESQ",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 89,
    name: "TECHWTR",
    incidentType: "TECH|RESQ|WATER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 90,
    name: "TECHWTR",
    incidentType: "COLLAPSE|RESQ|WATER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 91,
    name: "TRAR",
    incidentType: "TRANSFORMER|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 92,
    name: "TRA",
    incidentType: "TRANSFORMER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 93,
    name: "TRA1",
    incidentType: "TRANSFORMER|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 94,
    name: "TRA2",
    incidentType: "TRANSFORMER|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 95,
    name: "TRAM",
    incidentType: "TRANSFORMER|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 96,
    name: "APPR",
    incidentType: "APPLIANCE|PROBLEM|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 97,
    name: "APP",
    incidentType: "APPLIANCE|PROBLEM",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 98,
    name: "APP1",
    incidentType: "APPLIANCE|PROBLEM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 99,
    name: "APP2",
    incidentType: "APPLIANCE|PROBLEM|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 100,
    name: "APPM",
    incidentType: "APPLIANCE|PROBLEM|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 101,
    name: "ELECR",
    incidentType: "ELEC|HAZ|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 102,
    name: "ELEC",
    incidentType: "ELEC|HAZ",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 103,
    name: "ELEC1",
    incidentType: "ELEC|HAZ|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 104,
    name: "ELEC2",
    incidentType: "ELEC|HAZ|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 105,
    name: "ELECM",
    incidentType: "ELEC|HAZ|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 106,
    name: "ELECARR",
    incidentType: "ELEC|ARC|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 107,
    name: "ELECARC",
    incidentType: "ELEC|ARC",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 108,
    name: "ELECARC1",
    incidentType: "ELEC|ARC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 109,
    name: "ELECARC2",
    incidentType: "ELEC|ARC|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 110,
    name: "ELECARCM",
    incidentType: "ELEC|ARC|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 111,
    name: "SE",
    incidentType: "WIRESDOWN|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 112,
    name: "WIRES",
    incidentType: "WIRESDOWN",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 113,
    name: "WIRES1",
    incidentType: "WIRESDOWN|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 114,
    name: "WIRES2",
    incidentType: "WIRESDOWN|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 115,
    name: "WIRESM",
    incidentType: "WIRESDOWN|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 116,
    name: "APPOR",
    incidentType: "APPLIANCE|ODOR|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 117,
    name: "APPO",
    incidentType: "APPLIANCE|ODOR",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 118,
    name: "APPO1",
    incidentType: "APPLIANCE|ODOR|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 119,
    name: "APPO2",
    incidentType: "APPLIANCE|ODOR|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 120,
    name: "APPOM",
    incidentType: "APPLIANCE|ODOR|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 121,
    name: "ELECOR",
    incidentType: "ELEC|ODOR|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 122,
    name: "ELECO",
    incidentType: "ELEC|ODOR",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 123,
    name: "ELECO1",
    incidentType: "ELEC|ODOR|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 124,
    name: "ELECO2",
    incidentType: "ELEC|ODOR|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 125,
    name: "ELECOM",
    incidentType: "ELEC|ODOR|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 126,
    name: "ELECIR",
    incidentType: "ELEC|INVEST|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 127,
    name: "ELECI",
    incidentType: "ELEC|INVEST",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 128,
    name: "ELECI1",
    incidentType: "ELEC|INVEST|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 129,
    name: "ELECI2",
    incidentType: "ELEC|INVEST|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 130,
    name: "ELECIM",
    incidentType: "ELEC|INVEST|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 131,
    name: "ELECWR",
    incidentType: "ELEC|HAZ|WATER|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 132,
    name: "ELECW",
    incidentType: "ELEC|HAZ|WATER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 133,
    name: "ELECW1",
    incidentType: "ELEC|HAZ|WATER|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 134,
    name: "ELECW2",
    incidentType: "ELEC|HAZ|WATER|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 135,
    name: "ELECWM",
    incidentType: "ELEC|HAZ|WATER|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 136,
    name: "WIRESSMR",
    incidentType: "WIRESDOWN|ARC|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 137,
    name: "WIRESAR",
    incidentType: "WIRESDOWN|ARC",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 138,
    name: "WIRESAR1",
    incidentType: "WIRESDOWN|ARC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 139,
    name: "WIRESAR2",
    incidentType: "WIRESDOWN|ARC|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 140,
    name: "WIRESARM",
    incidentType: "WIRESDOWN|ARC|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 141,
    name: "SUBSR",
    incidentType: "ELEC|SUBS|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 142,
    name: "SUBS",
    incidentType: "ELEC|SUBS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 143,
    name: "SUBS1",
    incidentType: "ELEC|SUBS|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 144,
    name: "SUBS2",
    incidentType: "ELEC|SUBS|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 145,
    name: "SUBSM",
    incidentType: "ELEC|SUBS|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 146,
    name: "ELECUR",
    incidentType: "ELEC|UNDER|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 147,
    name: "ELECU",
    incidentType: "ELEC|UNDER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 148,
    name: "ELECU1",
    incidentType: "ELEC|UNDER|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 149,
    name: "ELECU2",
    incidentType: "ELEC|UNDER|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 150,
    name: "ELECUM",
    incidentType: "ELEC|UNDER|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 151,
    name: "SOLARR",
    incidentType: "SOLAR|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 152,
    name: "SOLAR",
    incidentType: "SOLAR",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 153,
    name: "SOLAR1",
    incidentType: "SOLAR|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 154,
    name: "SOLAR2",
    incidentType: "SOLAR|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 155,
    name: "SOLARM",
    incidentType: "SOLAR|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 156,
    name: "SCT",
    incidentType: "ELEVATOR|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 157,
    name: "SCT",
    incidentType: "ELEVATOR",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 158,
    name: "SCT",
    incidentType: "ALARM|ELEVATOR|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 159,
    name: "SCTE",
    incidentType: "ELEVATOR|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 160,
    name: "ALS1",
    incidentType: "ELEVATOR|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 161,
    name: "PAALS1",
    incidentType: "ELEVATOR|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 162,
    name: "EXPLI",
    incidentType: "EXPL|INVEST",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 163,
    name: "EXPLIHM",
    incidentType: "EXPL|INVEST|HM",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 164,
    name: "EXPLV",
    incidentType: "EXPL|VEH",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 165,
    name: "EXPLVF",
    incidentType: "FIRE|EXPL|VEH",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 166,
    name: "EXPLVF1",
    incidentType: "FIRE|EXPL|VEH|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 167,
    name: "EXPLVFM",
    incidentType: "FIRE|EXPL|VEH|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 168,
    name: "EXPLV1",
    incidentType: "EXPL|VEH|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 169,
    name: "EXPLVM",
    incidentType: "EXPL|VEH|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 170,
    name: "EXPL",
    incidentType: "EXPL",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 171,
    name: "EXPLF",
    incidentType: "FIRE|EXPL",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 172,
    name: "EXPLF1",
    incidentType: "FIRE|EXPL|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 173,
    name: "EXPLFM",
    incidentType: "FIRE|EXPL|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 174,
    name: "EXPL1",
    incidentType: "EXPL|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 175,
    name: "EXPLM",
    incidentType: "EXPL|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 176,
    name: "EXPLI1",
    incidentType: "EXPL|INVEST|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 177,
    name: "EXPLIM",
    incidentType: "EXPL|INVEST|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 178,
    name: "HMFULLFMO",
    incidentType: "FIRE|BLDG|EXPL",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 179,
    name: "HMFULLFMO1",
    incidentType: "FIRE|BLDG|EXPL|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 180,
    name: "HMFULLFMO",
    incidentType: "FIRE|BLDG|EXPL|HM",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 2,
      },
    ],
    sendPolice: true,
  },
  {
    id: 181,
    name: "HMADAPTFMO",
    incidentType: "FIRE|SMALLSTRUC|EXPL",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 182,
    name: "HMADAMPFMO",
    incidentType: "FIRE|VEH|EXPL|w/PD",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 183,
    name: "BLSR",
    incidentType: "INJURED|ROUTINE",
    units: [
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 184,
    name: "HMINVEST",
    incidentType: "HMINVEST|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
    ],
  },
  {
    id: 185,
    name: "TRAP1",
    incidentType: "ENTRAP|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 186,
    name: "TRAPHM1",
    incidentType: "ENTRAP|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 187,
    name: "TRAP2",
    incidentType: "ENTRAP|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 188,
    name: "TRAPHM2",
    incidentType: "ENTRAP|HM|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 189,
    name: "ALS1",
    incidentType: "INJURED|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 190,
    name: "SE",
    incidentType: "FUEL|SPILL",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 191,
    name: "FC",
    incidentType: "FUEL|SPILL|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 192,
    name: "FG",
    incidentType: "FUEL|SPILL|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
    ],
  },
  {
    id: 193,
    name: "SE",
    incidentType: "FUEL|SPILL|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 194,
    name: "FE",
    incidentType: "FUEL|ODOR|INSIDE",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 195,
    name: "SE",
    incidentType: "FUEL|ODOR|OUTSIDE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 196,
    name: "FF",
    incidentType: "FUEL|ODOR|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 197,
    name: "FDMULTP",
    incidentType: "FUEL|ODOR|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 198,
    name: "HMADAPT",
    incidentType: "FUEL|SPILL|LARGE",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 199,
    name: "HMLOCAL",
    incidentType: "FUEL|SPILL|HM",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
    ],
  },
  {
    id: 200,
    name: "SE",
    incidentType: "BROKEN OUTSIDE GAS SERVICE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 201,
    name: "SE",
    incidentType: "GASODOR",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 202,
    name: "FC",
    incidentType: "GASODOR|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 203,
    name: "FX",
    incidentType: "GASODOR|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 204,
    name: "FC",
    incidentType: "BROKEN OUTSIDE GAS SERVICE|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 205,
    name: "FX",
    incidentType: "BROKEN OUTSIDE GAS SERVICE|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 206,
    name: "SE",
    incidentType: "GASLEAK|OUTSIDE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 207,
    name: "FC",
    incidentType: "GASLEAK|OUTSIDE|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 208,
    name: "FX",
    incidentType: "GASLEAK|OUTSIDE|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 209,
    name: "SE",
    incidentType: "INVEST",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 210,
    name: "FC",
    incidentType: "INVEST|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 211,
    name: "FX",
    incidentType: "INVEST|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 212,
    name: "FE",
    incidentType: "GASLEAK",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 213,
    name: "FC",
    incidentType: "GASLEAK|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 214,
    name: "FX",
    incidentType: "GASLEAK|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 215,
    name: "GASFULL",
    incidentType: "GASMAJOR",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 216,
    name: "HMLOCAL",
    incidentType: "HMSPILLSM",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
    ],
  },
  {
    id: 217,
    name: "HMADAPT",
    incidentType: "HMSPILL",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 218,
    name: "HMADPD",
    incidentType: "HM|CONTAINED|w/PD",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 219,
    name: "HMADMPD",
    incidentType: "HM|CONTAINED|MULT|w/PD",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 220,
    name: "HMADAPT",
    incidentType: "HM|UNCONTAINED|w/PD",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 221,
    name: "HMADAMPD",
    incidentType: "HM|UNCONTAINED|MULT|w/PD",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 222,
    name: "FE",
    incidentType: "LIGHTNING",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 223,
    name: "FG",
    incidentType: "LIGHTNING|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 224,
    name: "FDMULTP",
    incidentType: "LIGHTNING|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 225,
    name: "AL1D",
    incidentType: "ELECTROCUTION|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 226,
    name: "SE",
    incidentType: "LIGHTNGSE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 227,
    name: "SE",
    incidentType: "FIRE|BOAT|OUT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 228,
    name: "FC",
    incidentType: "FIRE|BOAT|OUT|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 229,
    name: "FDMULTP",
    incidentType: "FIRE|BOAT|OUT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 230,
    name: "FE",
    incidentType: "FIRE|BOAT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 2,
      },
      {
        type: "Rescue Boat",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 231,
    name: "FF",
    incidentType: "FIRE|BOAT|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 2,
      },
      {
        type: "Rescue Boat",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 232,
    name: "FDMULTP",
    incidentType: "FIRE|BOAT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 2,
      },
      {
        type: "Rescue Boat",
        quantity: 2,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 233,
    name: "FJ",
    incidentType: "FIRE|BLDG",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 234,
    name: "BOATFIRE",
    incidentType: "FIRE|BOAT|WATER",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Rescue Boat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 235,
    name: "MA11",
    incidentType: "MA|1+1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 236,
    name: "MA11R",
    incidentType: "MA|1+1|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 237,
    name: "MASER",
    incidentType: "MA|ENGINE|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 238,
    name: "MATXFR",
    incidentType: "MA|TXFR",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 239,
    name: "MASTAGE",
    incidentType: "MA|STAGE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 240,
    name: "MA21",
    incidentType: "MA|2+1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
    ],
  },
  {
    id: 241,
    name: "MASE",
    incidentType: "MA|ENGINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 242,
    name: "MABOX",
    incidentType: "MA|BOX",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 2,
      },
    ],
  },
  {
    id: 243,
    name: "SE",
    incidentType: "ODOR|UNK|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 244,
    name: "HMINVEST",
    incidentType: "HM|INVEST",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
    ],
  },
  {
    id: 245,
    name: "FG",
    incidentType: "ODOR|UNK|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 246,
    name: "FDMULTP",
    incidentType: "ODOR|UNK|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 247,
    name: "SE",
    incidentType: "FIRE|OUTSIDE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 248,
    name: "FC",
    incidentType: "FIRE|OUTSIDE|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 249,
    name: "FDMULTP",
    incidentType: "FIRE|OUTSIDE|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 250,
    name: "FE",
    incidentType: "FIRE|OUTSIDE|ADAPT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 251,
    name: "HMADAPT",
    incidentType: "FIRE|OUTSIDE|HM",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 252,
    name: "FF",
    incidentType: "FIRE|OUTSIDE|ADAPT|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 253,
    name: "FE",
    incidentType: "ElevatedStructureFire",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 254,
    name: "FF",
    incidentType: "ElevatedStructureFire|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 255,
    name: "FDMULTP",
    incidentType: "ElevatedStructureFire|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 256,
    name: "FH",
    incidentType: "ElevatedStructureFireLG",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 257,
    name: "ADA",
    incidentType: "BURN|ADAPT|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 258,
    name: "FY2",
    incidentType: "FIRE|PERSON|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 259,
    name: "SE",
    incidentType: "INVEST|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 260,
    name: "SE",
    incidentType: "SMOKE|INVEST",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 261,
    name: "FU",
    incidentType: "FIRE|APPLIANCE",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 262,
    name: "FR",
    incidentType: "FIRE|CHIMNEY",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 263,
    name: "FW",
    incidentType: "FIRE|OUT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 264,
    name: "FE",
    incidentType: "SMOKE|HAZE",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 265,
    name: "FE",
    incidentType: "FIRE|ELECTRICALSHORT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 266,
    name: "FE",
    incidentType: "SMOKE|ODOR",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 267,
    name: "FJT",
    incidentType: "FIRE|BLDG|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 268,
    name: "FJ1",
    incidentType: "FIRE|BLDG|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 269,
    name: "FJM",
    incidentType: "FIRE|BLDG|MULT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
  },
  {
    id: 270,
    name: "FK",
    incidentType: "FIRE|HIGHRISE",
    units: [
      {
        type: "Engine",
        quantity: 4,
      },
      {
        type: "Truck",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 2,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 271,
    name: "FKT",
    incidentType: "FIRE|HIGHRISE|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 4,
      },
      {
        type: "Truck",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 2,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 272,
    name: "FK1",
    incidentType: "FIRE|HIGHRISE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 4,
      },
      {
        type: "Truck",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 2,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 273,
    name: "FKM",
    incidentType: "FIRE|HIGHRISE|MULT",
    units: [
      {
        type: "Engine",
        quantity: 4,
      },
      {
        type: "Truck",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 2,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 274,
    name: "FL",
    incidentType: "FIRE|COMM",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 275,
    name: "FLT",
    incidentType: "FIRE|COMM|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 276,
    name: "FL1",
    incidentType: "FIRE|COMM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 277,
    name: "FLM",
    incidentType: "FIRE|COMM|MULT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 278,
    name: "HMFULL",
    incidentType: "FIRE|BLDG|HM",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 279,
    name: "HMADAPT",
    incidentType: "APPLIANCEH",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 280,
    name: "FWH",
    incidentType: "FIRE|OUT|HM",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 281,
    name: "HMADAPT",
    incidentType: "FIRE|ELECTRICALSHORT|HM",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 282,
    name: "HMFULL",
    incidentType: "FIRE|BLDG|HM|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 283,
    name: "FJH1",
    incidentType: "FIRE|BLDG|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 284,
    name: "FJHM",
    incidentType: "FIRE|BLDG|HM|MULT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 285,
    name: "FL",
    incidentType: "FIRE|MULTI",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 286,
    name: "FLT",
    incidentType: "FIRE|MULTI|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 287,
    name: "FL1",
    incidentType: "FIRE|MULTI|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 288,
    name: "FLM",
    incidentType: "FIRE|MULTI|MULT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 289,
    name: "FJ",
    incidentType: "FIRE|HOUSE",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 290,
    name: "FJT",
    incidentType: "FIRE|HOUSE|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 291,
    name: "FJ1",
    incidentType: "FIRE|HOUSE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 292,
    name: "FJM",
    incidentType: "FIRE|HOUSE|MULT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 293,
    name: "FL",
    incidentType: "FIRE|LARGE",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 294,
    name: "FLT",
    incidentType: "FIRE|LARGE|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 295,
    name: "FL1",
    incidentType: "FIRE|LARGE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 296,
    name: "FLM",
    incidentType: "FIRE|LARGE|MULT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 297,
    name: "FS",
    incidentType: "FIRE|SMALL",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 298,
    name: "FST",
    incidentType: "FIRE|SMALL|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 299,
    name: "FS1",
    incidentType: "FIRE|SMALL|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 300,
    name: "FSM",
    incidentType: "FIRE|SMALL|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 301,
    name: "FJW",
    incidentType: "FIRE|WATER|BLDG",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 302,
    name: "FUW",
    incidentType: "FIRE|WATER|APPLIANCE",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 303,
    name: "FRW",
    incidentType: "FIRE|WATER|CHIMNEY",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 304,
    name: "FWW",
    incidentType: "FIRE|WATER|OUT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 305,
    name: "FEW",
    incidentType: "FIRE|WATER|ELECTRICALSHORT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 306,
    name: "FJTW",
    incidentType: "FIRE|WATER|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 307,
    name: "FJW1",
    incidentType: "FIRE|WATER|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 308,
    name: "FJMW",
    incidentType: "FIRE|WATER|MULT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 309,
    name: "FL",
    incidentType: "FIRE|MIXED",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 310,
    name: "FLT",
    incidentType: "FIRE|MIXED|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 311,
    name: "FL1",
    incidentType: "FIRE|MIXED|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 312,
    name: "FLM",
    incidentType: "FIRE|MIXED|MULT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 313,
    name: "FP",
    incidentType: "FIRE|PKG",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 314,
    name: "FPT",
    incidentType: "FIRE|PKG|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 315,
    name: "FP1",
    incidentType: "FIRE|PKG|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 316,
    name: "FPM",
    incidentType: "FIRE|PKG|MULT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 317,
    name: "FJT2",
    incidentType: "FIRE|BLDG|TRAP|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 318,
    name: "FKT2",
    incidentType: "FIRE|HIGHRISE|TRAP|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 4,
      },
      {
        type: "Truck",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 2,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 319,
    name: "FLT2",
    incidentType: "FIRE|COMM|TRAP|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 320,
    name: "FLH",
    incidentType: "FIRE|COMM|HM",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 321,
    name: "FYH2",
    incidentType: "FIRE|PERSON|HM|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 322,
    name: "FLTH",
    incidentType: "FIRE|COMM|TRAP|HM",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 323,
    name: "FLTH2",
    incidentType: "FIRE|COMM|TRAP|HM|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 324,
    name: "FLH1",
    incidentType: "FIRE|COMM|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 325,
    name: "FLHM",
    incidentType: "FIRE|COMM|HM|MULT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 326,
    name: "FLT2",
    incidentType: "FIRE|MULTI|TRAP|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 327,
    name: "FJT2",
    incidentType: "FIRE|HOUSE|TRAP|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 328,
    name: "FLT2",
    incidentType: "FIRE|LARGE|TRAP|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 329,
    name: "FST2",
    incidentType: "FIRE|SMALL|TRAP|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 330,
    name: "FYW2",
    incidentType: "FIRE|WATER|PERSON|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 331,
    name: "FJTW2",
    incidentType: "FIRE|WATER|BLDG|TRAP|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 332,
    name: "FLT2",
    incidentType: "FIRE|MIXED|TRAP|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 333,
    name: "FPT2",
    incidentType: "FIRE|PKG|TRAP|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 334,
    name: "TRM",
    incidentType: "TRAIN|INVEST",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 335,
    name: "SA",
    incidentType: "SUBWAY",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 4,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 336,
    name: "TRC",
    incidentType: "TRAIN|CRASH",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 4,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 337,
    name: "TRAT",
    incidentType: "TRAIN|PED",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 338,
    name: "FV",
    incidentType: "FIRE|VEH",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 339,
    name: "FVA",
    incidentType: "FIRE|VEH|ALT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 340,
    name: "FVH",
    incidentType: "FIRE|VEH|HM",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 341,
    name: "FVHA",
    incidentType: "FIRE|VEH|HM|ALT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 342,
    name: "FVAB",
    incidentType: "FIRE|VEH|ALT|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 343,
    name: "FVAM",
    incidentType: "FIRE|VEH|ALT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 344,
    name: "FVHB",
    incidentType: "FIRE|VEH|HM|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 345,
    name: "FVHM",
    incidentType: "FIRE|VEH|HM|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 346,
    name: "FVHAB",
    incidentType: "FIRE|VEH|HM|ALT|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 347,
    name: "FVHAM",
    incidentType: "FIRE|VEH|HM|ALT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 348,
    name: "FVB",
    incidentType: "FIRE|VEH|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
    ],
    sendPolice: true,
  },
  {
    id: 349,
    name: "FVM",
    incidentType: "FIRE|VEH|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 350,
    name: "FVS",
    incidentType: "FIRE|VEH|SM",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 351,
    name: "FVSA",
    incidentType: "FIRE|VEH|SM|ALT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 352,
    name: "FVSH",
    incidentType: "FIRE|VEH|SM|HM",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 353,
    name: "FVSHA",
    incidentType: "FIRE|VEH|SM|ALT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 354,
    name: "FVSAB",
    incidentType: "FIRE|VEH|SM|ALT|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 355,
    name: "FVSAM",
    incidentType: "FIRE|VEH|SM|ALT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 356,
    name: "FVSHB",
    incidentType: "FIRE|VEH|SM|HM|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 357,
    name: "FVSHM",
    incidentType: "FIRE|VEH|SM|HM|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 358,
    name: "FVSHAB",
    incidentType: "FIRE|VEH|SM|HM|ALT|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 359,
    name: "FVSHAM",
    incidentType: "FIRE|VEH|SM|HM|ALT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 360,
    name: "FVSB",
    incidentType: "FIRE|VEH|SM|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
    ],
    sendPolice: true,
  },
  {
    id: 361,
    name: "FVSM",
    incidentType: "FIRE|VEH|SM|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 362,
    name: "FVT",
    incidentType: "FIRE|VEH|THREAT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 363,
    name: "FVTA",
    incidentType: "FIRE|VEH|THREAT|ALT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 364,
    name: "FVTH",
    incidentType: "FIRE|VEH|THREAT|HM",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 365,
    name: "FVTHA",
    incidentType: "FIRE|VEH|THREAT|HM|ALT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 366,
    name: "FVTA1",
    incidentType: "FIRE|VEH|THREAT|ALT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 367,
    name: "FVTAM",
    incidentType: "FIRE|VEH|THREAT|ALT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 368,
    name: "FVTH1",
    incidentType: "FIRE|VEH|THREAT|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 369,
    name: "FVTHM",
    incidentType: "FIRE|VEH|THREAT|HM|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 370,
    name: "FVTHA1",
    incidentType: "FIRE|VEH|THREAT|HM|ALT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 371,
    name: "FVTHAM",
    incidentType: "FIRE|VEH|THREAT|HM|ALT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 372,
    name: "FVT1",
    incidentType: "FIRE|VEH|THREAT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 373,
    name: "FVTM",
    incidentType: "FIRE|VEH|THREAT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 374,
    name: "FVHA1",
    incidentType: "FIRE|VEH|HM|ALT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 375,
    name: "FVH1",
    incidentType: "FIRE|VEH|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 376,
    name: "FVL",
    incidentType: "FIRE|VEH|LG",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 377,
    name: "FVLA",
    incidentType: "FIRE|VEH|LG|ALT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 378,
    name: "FVLH",
    incidentType: "FIRE|VEH|LG|HM",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 379,
    name: "FVLHA",
    incidentType: "FIRE|VEH|LG|HM|ALT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 380,
    name: "FVLA1",
    incidentType: "FIRE|VEH|LG|ALT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 381,
    name: "FVLAM",
    incidentType: "FIRE|VEH|LG|ALT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 382,
    name: "FVLH1",
    incidentType: "FIRE|VEH|LG|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 383,
    name: "FVLHM",
    incidentType: "FIRE|VEH|LG|HM|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 384,
    name: "FVLHA1",
    incidentType: "FIRE|VEH|LG|HM|ALT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 385,
    name: "FVLHAM",
    incidentType: "FIRE|VEH|LG|HM|ALT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 386,
    name: "FVL1",
    incidentType: "FIRE|VEH|LG|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 387,
    name: "FVLM",
    incidentType: "FIRE|VEH|LG|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 388,
    name: "FVX",
    incidentType: "FIRE|VEH|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 389,
    name: "FVXA",
    incidentType: "FIRE|VEH|TRAP|ALT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 390,
    name: "FVXH",
    incidentType: "FIRE|VEH|TRAP|HM",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 391,
    name: "FVXHA",
    incidentType: "FIRE|VEH|TRAP|HM|ALT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 392,
    name: "FVXA2",
    incidentType: "FIRE|VEH|TRAP|ALT|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 393,
    name: "FVXAM",
    incidentType: "FIRE|VEH|TRAP|ALT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 394,
    name: "FVXH2",
    incidentType: "FIRE|VEH|TRAP|HM|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 395,
    name: "FVXHM",
    incidentType: "FIRE|VEH|TRAP|HM|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 396,
    name: "FVXHA2",
    incidentType: "FIRE|VEH|TRAP|HM|ALT|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 397,
    name: "FVXHAM",
    incidentType: "FIRE|VEH|TRAP|HM|ALT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 398,
    name: "FVX2",
    incidentType: "FIRE|VEH|TRAP|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 399,
    name: "FVXM",
    incidentType: "FIRE|VEH|TRAP|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 400,
    name: "FVU",
    incidentType: "FIRE|VEH|MULTI",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 401,
    name: "FVUA",
    incidentType: "FIRE|VEH|MULTI|ALT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 402,
    name: "FVUH",
    incidentType: "FIRE|VEH|MULTI|HM",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 403,
    name: "FVUHA",
    incidentType: "FIRE|VEH|MULTI|HM|ALT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 404,
    name: "FVUA1",
    incidentType: "FIRE|VEH|MULTI|ALT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 405,
    name: "FVUAM",
    incidentType: "FIRE|VEH|MULTI|ALT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 406,
    name: "FVUH1",
    incidentType: "FIRE|VEH|MULTI|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 407,
    name: "FVUHM",
    incidentType: "FIRE|VEH|MULTI|HM|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 408,
    name: "FVUHA1",
    incidentType: "FIRE|VEH|MULTI|HM|ALT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 409,
    name: "FVUHAM",
    incidentType: "FIRE|VEH|MULTI|HM|ALT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 410,
    name: "FVU1",
    incidentType: "FIRE|VEH|MULTI|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 411,
    name: "FVUM",
    incidentType: "FIRE|VEH|MULTI|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 412,
    name: "FVN",
    incidentType: "FIRE|VEH|TUNNEL",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 413,
    name: "FVNA",
    incidentType: "FIRE|VEH|TUNNEL|ALT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 414,
    name: "FVNH",
    incidentType: "FIRE|VEH|TUNNEL|HM",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 415,
    name: "FVNHA",
    incidentType: "FIRE|VEH|TUNNEL|HM|ALT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 416,
    name: "FVNA1",
    incidentType: "FIRE|VEH|TUNNEL|ALT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 417,
    name: "FVNAM",
    incidentType: "FIRE|VEH|TUNNEL|ALT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 418,
    name: "FVNH1",
    incidentType: "FIRE|VEH|TUNNEL|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 419,
    name: "FVNHM",
    incidentType: "FIRE|VEH|TUNNEL|HM|MULT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 420,
    name: "FVNHA1",
    incidentType: "FIRE|VEH|TUNNEL|HM|ALT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 421,
    name: "FVNHAM",
    incidentType: "FIRE|VEH|TUNNEL|HM|ALT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 422,
    name: "FVN1",
    incidentType: "FIRE|VEH|TUNNEL|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 423,
    name: "FVNM",
    incidentType: "FIRE|VEH|TUNNEL|MULT",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 424,
    name: "WTRRESAN",
    incidentType: "WTR|RES|ANIMAL",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 425,
    name: "WTRRESBD",
    incidentType: "WTR|RES|BODY",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Dive Rescue",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 426,
    name: "WTRRESB",
    incidentType: "WTR|RES|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 427,
    name: "WTRRESM",
    incidentType: "WTR|RES|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 428,
    name: "WTRRES1",
    incidentType: "WTR|RES|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 429,
    name: "WTRRESR",
    incidentType: "WTR|RES|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
    ],
  },
  {
    id: 430,
    name: "WTRRESSW",
    incidentType: "WTR|RES|SWIFT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 431,
    name: "WTRRESSWM",
    incidentType: "WTR|RES|SWIFT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 432,
    name: "WTRRESSW1",
    incidentType: "WTR|RES|SWIFT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 433,
    name: "WTRRESLF",
    incidentType: "WTR|RES|FLOOD|LARGE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 434,
    name: "WTRRES2",
    incidentType: "WTR|RES|FLOOD|LARGE|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 435,
    name: "WTRRESLF1",
    incidentType: "WTR|RES|FLOOD|LARGE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 436,
    name: "WTRRESICE",
    incidentType: "WTR|RES|ICE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 437,
    name: "WTRRESICEM",
    incidentType: "WTR|RES|ICE|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 438,
    name: "WTRRESICE1",
    incidentType: "WTR|RES|ICE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 439,
    name: "WTRRES",
    incidentType: "WTR|RES",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 440,
    name: "WTRRESPO",
    incidentType: "WTR|RES|POOL",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 441,
    name: "WTRRESPOM",
    incidentType: "WTR|RES|POOL|MULT",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 442,
    name: "WTRRESPO1",
    incidentType: "WTR|RES|POOL|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 443,
    name: "WTRRESCO",
    incidentType: "WTR|RES|COASTAL",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 444,
    name: "WTRRESCOM",
    incidentType: "WTR|RES|COASTAL|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 445,
    name: "WTRRESCO1",
    incidentType: "WTR|RES|COASTAL|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 446,
    name: "WTRRESIN",
    incidentType: "WTR|RES|INLAND",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 447,
    name: "WTRRESINM",
    incidentType: "WTR|RES|INLAND|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 448,
    name: "WTRRESIN1",
    incidentType: "WTR|RES|INLAND|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 449,
    name: "WTRRESOC",
    incidentType: "WTR|RES|OCEANIC",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 450,
    name: "WTRRESOCM",
    incidentType: "WTR|RES|OCEANIC|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 451,
    name: "WTRRESOC1",
    incidentType: "WTR|RES|OCEANIC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 452,
    name: "WTRRESSU",
    incidentType: "WTR|RES|SURF",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 453,
    name: "WTRRESSUM",
    incidentType: "WTR|RES|SURF|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 454,
    name: "WTRRESSU1",
    incidentType: "WTR|RES|SURF|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 455,
    name: "WTRRESSF",
    incidentType: "WTR|RES|FLOOD|SMALL",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 456,
    name: "WTRRESSFM",
    incidentType: "WTR|RES|FLOOD|SMALL|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 457,
    name: "WTRRESSF1",
    incidentType: "WTR|RES|FLOOD|SMALL|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 458,
    name: "WTRRESMUD",
    incidentType: "WTR|RES|MUD",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 459,
    name: "WTRRESMUDM",
    incidentType: "WTR|RES|MUD|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 460,
    name: "WTRRESMUD1",
    incidentType: "WTR|RES|MUD|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 461,
    name: "WTRRESCOR",
    incidentType: "WTR|RES|COASTAL|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
    ],
    sendPolice: true,
  },
  {
    id: 462,
    name: "WTRRESINR",
    incidentType: "WTR|RES|INLAND|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
    ],
    sendPolice: true,
  },
  {
    id: 463,
    name: "WTRRESOCOR",
    incidentType: "WTR|RES|OCEANIC|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
    ],
    sendPolice: true,
  },
  {
    id: 464,
    name: "WTRRESCOB",
    incidentType: "WTR|RES|COASTAL|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 465,
    name: "WTRRESINB",
    incidentType: "WTR|RES|INLAND|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 466,
    name: "WTRRESOCB",
    incidentType: "WTR|RES|OCEANIC|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 467,
    name: "EX",
    incidentType: "MilitaryOrdnance",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "EOD",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 2,
      },
    ],
    sendPolice: true,
  },
  {
    id: 468,
    name: "EX",
    incidentType: "SuspiciousPackage",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "EOD",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 2,
      },
    ],
    sendPolice: true,
  },
  {
    id: 469,
    name: "HMLOCALM",
    incidentType: "SuspiciousPackage|INVEST",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 470,
    name: "TRMR",
    incidentType: "TRAIN|INVEST|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 471,
    name: "TRF",
    incidentType: "FIRE|TRAIN",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 4,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Tanker",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 472,
    name: "BMB",
    incidentType: "BOMBTHREAT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "EOD",
        quantity: 1,
      },
      {
        type: "Fire Investigator",
        quantity: 2,
      },
      {
        type: "TSU",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 473,
    name: "1P",
    incidentType: "MVC|PD",
    units: [
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 474,
    name: "HMADAPT",
    incidentType: "HM|CONTAINED",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 475,
    name: "MVCTRAPB",
    incidentType: "MVC|TRAP|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 476,
    name: "MVCB",
    incidentType: "MVC|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 477,
    name: "MVCFIREB",
    incidentType: "FIRE|MVC|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 478,
    name: "MVCHMB",
    incidentType: "MVC|HM|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 479,
    name: "MVCFIREHMB",
    incidentType: "FIRE|MVC|HM|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 480,
    name: "MVCFIRETRAPB",
    incidentType: "FIRE|MVC|TRAP|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 481,
    name: "MVCTRAPHMB",
    incidentType: "MVC|TRAP|HM|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 482,
    name: "MVCFIRETRAPHMB",
    incidentType: "FIRE|MVC|TRAP|HM|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 483,
    name: "MVC1",
    incidentType: "MVC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
    sendPolice: true,
  },
  {
    id: 484,
    name: "MVCFIRE1",
    incidentType: "FIRE|MVC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
    sendPolice: true,
  },
  {
    id: 485,
    name: "MVCHM1",
    incidentType: "MVC|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
    sendPolice: true,
  },
  {
    id: 486,
    name: "MVCFIREHM1",
    incidentType: "FIRE|MVC|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Police Patrol",
        quantity: 2,
      },
    ],
    sendPolice: true,
  },
  {
    id: 487,
    name: "MVCFIRETRAP1",
    incidentType: "FIRE|MVC|TRAP|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 488,
    name: "MVCTRAPHM1",
    incidentType: "MVC|TRAP|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 489,
    name: "MVCTRAP1",
    incidentType: "MVC|TRAP|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 490,
    name: "MVCFIRETRAPHM1",
    incidentType: "FIRE|MVC|TRAP|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 491,
    name: "MVC2",
    incidentType: "MVC|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 492,
    name: "MVCFIRE2",
    incidentType: "FIRE|MVC|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 493,
    name: "MVCHM2",
    incidentType: "MVC|HM|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 494,
    name: "MVCFIREHM2",
    incidentType: "FIRE|MVC|HM|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 495,
    name: "MVCFIRETRAP2",
    incidentType: "FIRE|MVC|TRAP|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 496,
    name: "MVCTRAPHM2",
    incidentType: "MVC|TRAP|HM|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 497,
    name: "MVCTRAP2",
    incidentType: "MVC|TRAP|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 498,
    name: "MVCFIRETRAPHM2",
    incidentType: "FIRE|MVC|TRAP|HM|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 499,
    name: "MVCMCI1",
    incidentType: "MVC|MULT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 500,
    name: "MVCFIREMCI1",
    incidentType: "FIRE|MVC|MULT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 501,
    name: "MVCHMMCI1",
    incidentType: "MVC|HM|MULT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 502,
    name: "MVCFIREHMMCI1",
    incidentType: "FIRE|MVC|HM|MULT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 503,
    name: "MVCFIRETRAPMCI1",
    incidentType: "FIRE|MVC|TRAP|MULT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 504,
    name: "MVCTRAPHMMCI1",
    incidentType: "MVC|TRAP|HM|MULT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 505,
    name: "MVCTRAPMCI1",
    incidentType: "MVC|TRAP|MULT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 506,
    name: "MVCFIRETRAPHMMCI1",
    incidentType: "FIRE|MVC|TRAP|HM|MULT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 507,
    name: "MVCMECH1",
    incidentType: "MVC|MECH|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 508,
    name: "MVCFIREMECH1",
    incidentType: "FIRE|MVC|MECH|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 509,
    name: "MVCHMMECH1",
    incidentType: "MVC|MECH|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 510,
    name: "MVCFIREHMMECH1",
    incidentType: "FIRE|MVC|MECH|HM|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 511,
    name: "MVCEJEC2",
    incidentType: "MVC|EJEC|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 512,
    name: "MVCFIREJEC2",
    incidentType: "FIRE|MVC|EJEC|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 513,
    name: "MVCEJECHM2",
    incidentType: "MVC|EJEC|HM|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 514,
    name: "MVCFIREJECM2",
    incidentType: "FIRE|MVC|EJEC|HM|ALS2",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 515,
    name: "MVCPC1",
    incidentType: "MVC|PED|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 516,
    name: "MVCFIRE1",
    incidentType: "FIRE|MVC|PED|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 517,
    name: "MVCHMPC1",
    incidentType: "MVC|HM|PED|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 518,
    name: "MVCFIREHMPED1",
    incidentType: "FIRE|MVC|HM|PED|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 519,
    name: "MVCPC1",
    incidentType: "MVC|CYCLE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 520,
    name: "MVCFIRE1",
    incidentType: "FIRE|MVC|CYCLE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 521,
    name: "MVCHM1",
    incidentType: "MVC|HM|CYCLE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 522,
    name: "MVCFIREHM1",
    incidentType: "FIRE|MVC|HM|CYCLE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 523,
    name: "MVCBLDG1",
    incidentType: "MVC|STRUC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 524,
    name: "FJ",
    incidentType: "FIRE|MVC|STRUC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 525,
    name: "MVCHMBLDG1",
    incidentType: "MVC|HM|STRUC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 526,
    name: "HMFULL",
    incidentType: "FIRE|MVC|HM|STRUC|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 2,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 527,
    name: "BCR",
    incidentType: "BackCountryRescue",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 528,
    name: "BCRXM",
    incidentType: "BackCountryRescue|WX|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 529,
    name: "BCRWM",
    incidentType: "BackCountryRescue|WTR|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 530,
    name: "BCRW",
    incidentType: "BackCountryRescue|WTR",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 531,
    name: "BCRM",
    incidentType: "BackCountryRescue|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 532,
    name: "BCRX",
    incidentType: "BackCountryRescue|WX",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 533,
    name: "AVAM",
    incidentType: "AVALANCHE|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 534,
    name: "AVAMX",
    incidentType: "AVALANCHE|WX|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 535,
    name: "AVAWM",
    incidentType: "AVALANCHE|WTR|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 536,
    name: "AVA1",
    incidentType: "AVALANCHE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 537,
    name: "AVAW",
    incidentType: "AVALANCHE|WTR",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 538,
    name: "AVAX",
    incidentType: "AVALANCHE|WX",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 539,
    name: "BCRC",
    incidentType: "BackCountryRescue|CREVASSE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 540,
    name: "BCRI",
    incidentType: "BackCountryRescue|INACCESS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 541,
    name: "BCRT",
    incidentType: "BackCountryRescue|TERRAIN",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 542,
    name: "CAVE1",
    incidentType: "CAVE|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 543,
    name: "CAVEXM",
    incidentType: "CAVE|WX|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 544,
    name: "CAVEWM",
    incidentType: "CAVE|WTR|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 545,
    name: "CAVEW",
    incidentType: "CAVE|WTR",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Marine",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 546,
    name: "CAVEM",
    incidentType: "CAVE|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 547,
    name: "CAVEX",
    incidentType: "CAVE|WX",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 548,
    name: "LOST",
    incidentType: "LOSTPERSON|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 549,
    name: "LOST1",
    incidentType: "LOSTPERSON",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
    ],
  },
  {
    id: 550,
    name: "SE",
    incidentType: "FIRE|TANK|SMALL",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 551,
    name: "FC",
    incidentType: "FIRE|TANK|SMALL|MULT|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
    ],
  },
  {
    id: 552,
    name: "FX",
    incidentType: "FIRE|TANK|SMALL|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 553,
    name: "FE",
    incidentType: "FIRE|TANK|STRUC",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 554,
    name: "SE",
    incidentType: "FIRE|OUT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 555,
    name: "FWB",
    incidentType: "FIRE|OUT|BLS",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 556,
    name: "FW1",
    incidentType: "FIRE|OUT|ALS1",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 557,
    name: "HMADAPT",
    incidentType: "FIRE|TANK|SMALL|MULT|HM",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 2,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 558,
    name: "SE",
    incidentType: "FIRE|TANK|OUT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 559,
    name: "FC",
    incidentType: "FIRE|TANK|OUT|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 560,
    name: "FX",
    incidentType: "FIRE|TANK|OUT|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 561,
    name: "GASFULL",
    incidentType: "FIRE|TANK|LARGE",
    units: [
      {
        type: "Engine",
        quantity: 3,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Hazmat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 562,
    name: "WTR2RS",
    incidentType: "VEH|SINKING",
    units: [
      {
        type: "Engine",
        quantity: 2,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Rescue Boat",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 563,
    name: "WTR2RS",
    incidentType: "VEH|SINKING|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Rescue Boat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 564,
    name: "WTR2RS",
    incidentType: "FLOODINGVEH|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Truck",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Swift Water",
        quantity: 2,
      },
      {
        type: "Rescue Boat",
        quantity: 1,
      },
      {
        type: "Helo",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
    sendPolice: true,
  },
  {
    id: 565,
    name: "SE",
    incidentType: "FIRE|CONTROLLEDBURN|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 566,
    name: "SE",
    incidentType: "FIRE|CONTROLLEDBURN",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 567,
    name: "FC",
    incidentType: "FIRE|CONTROLLEDBURN|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
    ],
  },
  {
    id: 568,
    name: "FX",
    incidentType: "FIRE|CONTROLLEDBURN|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
    ],
  },
  {
    id: 569,
    name: "SE",
    incidentType: "FIRE|OUTSIDE|ROUTINE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
    ],
  },
  {
    id: 570,
    name: "BRUSHSMT",
    incidentType: "FIRE|BRUSH|SMALL|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 571,
    name: "BRUSHSM",
    incidentType: "FIRE|BRUSH|SMALL",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 572,
    name: "BRUSHSMB",
    incidentType: "FIRE|BRUSH|SMALL|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 573,
    name: "BRUSHSMM",
    incidentType: "FIRE|BRUSH|SMALL|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "EMS Officer",
        quantity: 1,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 1,
      },
      {
        type: "Patrol",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 574,
    name: "BRUSHLG",
    incidentType: "FIRE|BRUSH|LARGE",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 2,
      },
      {
        type: "Patrol",
        quantity: 2,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Wildland",
        quantity: 1,
      },
      {
        type: "Firehawk",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 575,
    name: "BRUSHLGB",
    incidentType: "FIRE|BRUSH|LARGE|BLS",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 2,
      },
      {
        type: "Patrol",
        quantity: 2,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Wildland",
        quantity: 1,
      },
      {
        type: "Firehawk",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 576,
    name: "BRUSHLGT",
    incidentType: "FIRE|BRUSH|LARGE|TRAP",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Rescue",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 1,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 2,
      },
      {
        type: "Patrol",
        quantity: 2,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Wildland",
        quantity: 1,
      },
      {
        type: "Firehawk",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
  {
    id: 577,
    name: "BRUSHLGM",
    incidentType: "FIRE|BRUSH|LARGE|MULT",
    units: [
      {
        type: "Engine",
        quantity: 1,
      },
      {
        type: "Transport (ALS)",
        quantity: 1,
      },
      {
        type: "Transport (BLS)",
        quantity: 2,
      },
      {
        type: "Tanker",
        quantity: 1,
      },
      {
        type: "Type III Engine",
        quantity: 2,
      },
      {
        type: "Patrol",
        quantity: 2,
      },
      {
        type: "Knight Truck",
        quantity: 1,
      },
      {
        type: "Wildland",
        quantity: 1,
      },
      {
        type: "Firehawk",
        quantity: 1,
      },
      {
        type: "Chief",
        quantity: 1,
      },
    ],
  },
];
