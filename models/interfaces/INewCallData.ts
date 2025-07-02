export interface INewCallData {
    postal: string;
    street: string;
    buildingInfo?: string;
    crossStreet1: string;
    crossStreet2: string;
    callerName?: string;
    callerNumber?: string;
    isLocalCaller?: boolean;
    callerStatement: string;
    service: "Police" | "Fire" | "EMS";
}