export type ILocation = {
  id: number;
  name: string;
  postal: string;
  postalRange: string[];
  mainStreet: string;
  crossStreet1: string;
  crossStreet2: string;
  notLocation?: boolean;
  cids?: string;
};
