export interface IEMSDeterminants {
    priority: "O" | "A" | "B" | "C" | "D" | "E";
    codes: IEMSCodes[];
}

export interface IEMSCodes {
    code: string;
    text: string;
    recResponse: number;
    notBreathing?: boolean;
    uncertainBreathing?: boolean;
    notConscious?: boolean;
    multPatient?: boolean;
    subCodes?: {
        suffix: string;
        text: string;
        recResponse?: number;
    }[];
}