type RoadCrossPair = {
  crossStreet1: string;
  crossStreet2: string;
};

type AvailableRoads = {
  [roadName: string]: RoadCrossPair;
};

type CrossStreet = {
  autoFill?: boolean;
  availableRoads?: AvailableRoads;
  mainStreet?: string;
  crossStreet1?: string;
  crossStreet2?: string;
};

type RunOrderNumber =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

type PoliceAgencies =
  | "MBPD"
  | "RCSO"
  | "PBPD"
  | "BCSO"
  | "SSPD"
  | "SAHP"
  | "LSPD"
  | "LCSO";

export type IPostal = {
  postal: string;
  twp?: string;
  hasHeli?: boolean;
  fdDistrict: string;
  policeDistrict: string;
  fireBox: string;
  fdRunOrder: RunOrderNumber[];
  policeRunOrder: PoliceAgencies[];
  streets: CrossStreet;
};
