export type UnitStatus = "Available" | "On Call" | "OOS";

export interface Unit {
  id: string;
  name: string;
  type: string;
  status: UnitStatus;
  crossStaffedWith: string[]; 
}

export interface Station {
  id: string;
  name: string;
  units: Unit[];
}

export const STATIONS: Station[] = [
  {
    id: "station-1",
    name: "Station 1",
    units: [],
  },
  {
    id: "station-2",
    name: "Station 2",
    units: [],
  },
  {
    id: "station-3",
    name: "Station 3",
    units: [],
  },
  {
    id: "station-4",
    name: "Station 4",
    units: [],
  },
  {
    id: "station-5",
    name: "Station 5",
    units: [],
  },
  {
    id: "station-6",
    name: "Station 6",
    units: [],
  },
  {
    id: "station-7",
    name: "Station 7",
    units: [],
  },
  {
    id: "station-8",
    name: "Station 8",
    units: [],
  },
  {
    id: "station-9",
    name: "Station 9",
    units: [],
  },
  {
    id: "station-10",
    name: "Station 10",
    units: [],
  },
  {
    id: "station-11",
    name: "Station 11",
    units: [],
  },
  {
    id: "station-12",
    name: "Station 12",
    units: [],
  },
  {
    id: "supervisor",
    name: "Supervisor",
    units: [],
  },
  {
    id: "marine",
    name: "Marine",
    units: [],
  },
  {
    id: "air",
    name: "Air",
    units: [],
  },
  {
    id: "DSO",
    name: "DSO",
    units: [],
  },
  {
    id: "TSU",
    name: "TSU",
    units: [],
  },
  {
    id: "OFI",
    name: "OFI",
    units: [],
  },
  {
    id: "Sanfire",
    name: "Sanfire",
    units: [],
  },
  {
    id: "AMR",
    name: "AMR",
    units: [],
  },
];
