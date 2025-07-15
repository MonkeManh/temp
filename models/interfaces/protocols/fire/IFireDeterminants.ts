export interface IFireDeterminants {
  priority: "O" | "A" | "B" | "C" | "D" | "E";
  codes: IFireCodes[];
}

export interface IFireCodes {
  code: string;
  text: string;
  recResponse: number;
  subCodes?: {
    suffix: string;
    text: string;
    recResponse?: number;
  }[];
}
