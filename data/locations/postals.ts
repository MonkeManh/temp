import { IPostal } from "@/models/interfaces/locations/IPostal";

export function getPostalBox(postal: string): string | undefined {
  const found = postalData.find((p) => p.postal === postal);
  return found?.fireBox;
}

export function getPostal(postal: string): IPostal | undefined {
  return postalData.find((p) => p.postal === postal);
}

export const postalData: IPostal[] = [
  {
    postal: "001",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0318",
    hasHeli: true,
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Procopio Beach",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found",
    },
  },
  {
    postal: "002",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    fireBox: "0318",
    hasHeli: true,
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Procopio Beach",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found",
    },
  },
  {
    postal: "003",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0318",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Paleto Beach",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found",
    },
  },
  {
    postal: "004",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0318",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Paleto Beach",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found",
    },
  },
  {
    postal: "005",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0318",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Rt 1 SB",
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "006",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Rt 1 SB",
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "007",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Rt 1 SB",
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "008",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Rt 1 SB",
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "009",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Rt 1 SB",
        },
        "Bayview Bridge": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Riverfront Ave",
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "010",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Promenade": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Bayview Bridge",
        },
        "Bayview Bridge": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Riverfront Ave",
        },
      },
    },
  },
  {
    postal: "011",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      availableRoads: {
        "Procopio Promenade": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Bayview Bridge",
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "012",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Paleto Beach",
      crossStreet1: "Procopio Promenade",
      crossStreet2: "Bayview Bridge",
    },
  },
  {
    postal: "013",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Promenade": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Bayview Bridge",
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "014",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Procopio Promenade",
      crossStreet1: "Rt 1 SB",
      crossStreet2: "Bayview Bridge",
    },
  },
  {
    postal: "015",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Promenade": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Bayview Bridge",
        },
        "Paleto Blvd": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Duluoz Ave",
        },
        "Procopio View": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Paleto Blvd",
        },
      },
    },
  },
  {
    postal: "016",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr": {
          crossStreet1: "Duluoz Ave",
          crossStreet2: "Paleto Blvd",
        },
        "Paleto Blvd": {
          crossStreet1: "Duluoz Ave",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "017",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Cascabel Ave",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "018",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr": {
          crossStreet1: "Duluoz Ave",
          crossStreet2: "Paleto Blvd",
        },
        "Paleto Blvd": {
          crossStreet1: "Procopio Dr",
          crossStreet2: "Duluoz Ave",
        },
        "Duluoz Ave": {
          crossStreet1: "Procopio Dr",
          crossStreet2: "Paleto Blvd",
        },
      },
    },
  },
  {
    postal: "019",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Duluoz Ave": {
          crossStreet1: "Procopio Dr",
          crossStreet2: "Paleto Blvd",
        },
        "Procopio Dr": {
          crossStreet1: "Cascabel Ave",
          crossStreet2: "Duluoz Ave",
        },
        "Paleto Blvd": {
          crossStreet1: "Duluoz Ave",
          crossStreet2: "Pyrite Ave",
        },
      },
    },
  },
  {
    postal: "020",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Cascabel Ave",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "021",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr": {
          crossStreet1: "Duluoz Ave",
          crossStreet2: "Cascabel Ave",
        },
        "Paleto Blvd": {
          crossStreet1: "Duluoz Ave",
          crossStreet2: "Pyrite Ave",
        },
      },
    },
  },
  {
    postal: "022",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Cascabel Ave, Paleto Blvd",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge, Procopio View",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "023",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0302",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Paleto Blvd": {
          crossStreet1: "Pyrite Ave",
          crossStreet2: "Cascabel Ave",
        },
        "Procopio Dr": {
          crossStreet1: "Duluoz Ave",
          crossStreet2: "Cascabel Ave",
        },
        "Cascabel Ave": {
          crossStreet1: "Procopio Dr",
          crossStreet2: "Paleto Blvd",
        },
      },
    },
  },
  {
    postal: "024",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0304",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cascabel Ave": {
          crossStreet1: "Procopio Dr",
          crossStreet2: "Paleto Blvd",
        },
        "Procopio Dr": {
          crossStreet1: "Cascabel Ave",
          crossStreet2: "Paleto Blvd",
        },
        "Paleto Blvd": {
          crossStreet1: "Cascabel Ave",
          crossStreet2: "Procopio Dr",
        },
      },
    },
  },
  {
    postal: "025",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0306",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr": {
          crossStreet1: "Cascabel Ave",
          crossStreet2: "Paleto Blvd",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "026",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0304",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr": {
          crossStreet1: "Cascabel Ave",
          crossStreet2: "Paleto Blvd",
        },
        "Paleto Blvd": {
          crossStreet1: "Cascabel Ave",
          crossStreet2: "Procopio Dr",
        },
      },
    },
  },
  {
    postal: "027",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0306",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr": {
          crossStreet1: "Cascabel Ave",
          crossStreet2: "Paleto Blvd",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "028",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0304",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Paleto Blvd": {
          crossStreet1: "Cascabel Ave",
          crossStreet2: "Procopio Dr",
        },
        "Procopio Dr": {
          crossStreet1: "Cascabel Ave",
          crossStreet2: "Paleto Blvd",
        },
      },
    },
  },
  {
    postal: "029",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0304",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Dr": {
          crossStreet1: "Cascabel Ave",
          crossStreet2: "Paleto Blvd",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "030",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0306",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Procopio Promenade",
      crossStreet1: "Rt 1 SB",
      crossStreet2: "Bayview Bridge",
    },
  },
  {
    postal: "031",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0318",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Procopio Promenade",
      crossStreet1: "Rt 1 SB",
      crossStreet2: "Bayview Bridge",
    },
  },
  {
    postal: "032",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0318",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Procopio Promenade",
      crossStreet1: "Bayview Bridge",
      crossStreet2: "Rt 1 SB",
    },
  },
  {
    postal: "033",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0320",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      availableRoads: {
        "Procopio Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "034",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0318",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "035",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0320",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "036",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0320",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Rt 1 MM07.00",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 MM07.00",
          crossStreet2: "Procopio Promenade",
        },
        "Procopio Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "037",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0316",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Procopio Dr",
          crossStreet2: "Procopio Promenade",
        },
        "Rt 1 NB": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Rt 1 MM07.00",
        },
        "Procopio Promenade": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "038",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0306",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Procopio Dr",
          crossStreet2: "Procopio Promenade",
        },
        "Rt 1 NB": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Procopio Dr",
        },
      },
    },
  },
  {
    postal: "039",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0304",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Pyrite Ave, Procopio Dr",
          crossStreet2: "Procopio Promenade",
        },
        "Rt 1 NB": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Pyrite Ave, Procopio Dr",
        },
        "Procopio Dr": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "040",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "3132",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Pyrite Ave",
          crossStreet2: "Procopio Dr",
        },
        "Rt 1 NB": {
          crossStreet1: "Procopio Dr",
          crossStreet2: "Pyrite Ave",
        },
        "Procopio Dr": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Rt 1 SB",
        },
        "Paleto Blvd": {
          crossStreet1: "Cascabel Ave",
          crossStreet2: "Procopio Dr",
        },
      },
    },
  },
  {
    postal: "041",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0304",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Paleto Blvd": {
          crossStreet1: "Cascabel Ave",
          crossStreet2: "Procopio Dr",
        },
        "Rt 1 SB": {
          crossStreet1: "Pyrite Ave",
          crossStreet2: "Procopio Dr",
        },
        "Rt 1 NB": {
          crossStreet1: "Procopio Dr",
          crossStreet2: "Pyrite Ave",
        },
      },
    },
  },
  {
    postal: "042",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0302",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Pyrite Ave": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Rt 1 SB",
        },
        "Paleto Blvd": {
          crossStreet1: "Pyrite Ave",
          crossStreet2: "Cascabel Ave",
        },
        "Rt 1 SB": {
          crossStreet1: "Pyrite Ave",
          crossStreet2: "Procopio Dr",
        },
        "Rt 1 NB": {
          crossStreet1: "Procopio Dr",
          crossStreet2: "Pyrite Ave",
        },
      },
    },
  },
  {
    postal: "043",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0302",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Paleto Blvd": {
          crossStreet1: "Duluoz Ave",
          crossStreet2: "Pyrite Ave",
        },
        "Pyrite Ave": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Rt 1 SB",
        },
        "Rt 1 SB": {
          crossStreet1: "Duluoz Ave",
          crossStreet2: "Pyrite Ave",
        },
        "Rt 1 NB": {
          crossStreet1: "Pyrite Ave",
          crossStreet2: "Duluoz Ave",
        },
      },
    },
  },
  {
    postal: "044",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Duluoz Ave": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Rt 1 SB",
        },
        "Paleto Blvd": {
          crossStreet1: "Duluoz Ave",
          crossStreet2: "Pyrite Ave",
        },
        "Rt 1 SB": {
          crossStreet1: "Duluoz Ave",
          crossStreet2: "Pyrite Ave",
        },
        "Rt 1 NB": {
          crossStreet1: "Pyrite Ave",
          crossStreet2: "Duluoz Ave",
        },
      },
    },
  },
  {
    postal: "045",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Paleto Blvd": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Duluoz Ave",
        },
        "Duluoz Ave": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Rt 1 SB",
        },
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM06.00",
          crossStreet2: "Duluoz Ave",
        },
        "Rt 1 NB": {
          crossStreet1: "Duluoz Ave",
          crossStreet2: "Rt 1 MM06.00",
        },
      },
    },
  },
  {
    postal: "046",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Paleto Blvd": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Procopio Dr",
        },
        "Rt 1 SB": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Rt 1 MM06.00",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 MM06.00",
          crossStreet2: "Paleto Blvd",
        },
      },
    },
  },
  {
    postal: "047",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0301",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Paleto Blvd": {
          crossStreet1: "Procopio Dr",
          crossStreet2: "Rt 1 SB",
        },
        "Rt 1 SB": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Procopio Promenade",
        },
        "Rt 1 NB": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Rt 1 MM06.00",
        },
      },
    },
  },
  {
    postal: "048",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Paleto Blvd",
        },
        "Rt 1 NB": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Procopio Promenade",
        },
      },
    },
  },
  {
    postal: "049",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Procopio Promenade",
      crossStreet1: "Rt 1 SB",
      crossStreet2: "Bayview Bridge",
    },
  },
  {
    postal: "050",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Promenade": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Bayview Bridge",
        },
        "Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "Paleto Loop Trail": {
          crossStreet1: "Pine Tree Trail",
          crossStreet2: "Procopio Trail",
        },
      },
    },
  },
  {
    postal: "051",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Procopio Promenade": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Bayview Bridge",
        },
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM05.00",
          crossStreet2: "Procopio Promenade",
        },
        "Rt 1 NB": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Rt 1 MM05.00",
        },
        "Paleto Loop Trail": {
          crossStreet1: "Pine Tree Trail",
          crossStreet2: "Procopio Trail",
        },
      },
    },
  },
  {
    postal: "052",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0350",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Fallen Tree Rd": {
          crossStreet1: "Pine Tree Rd",
          crossStreet2: "Pine Tree Rd",
        },
        "Pine Tree Rd": {
          crossStreet1: "Fallen Tree Rd",
          crossStreet2: "Rt 1 NB",
        },
        "Base Trail": {
          crossStreet1: "Pine Tree Rd",
          crossStreet2: "Dead End",
        },
        "Paleto Loop Trail": {
          crossStreet1: "Pine Tree Trail",
          crossStreet2: "Procopio Trail",
        },
        "Pine Tree Trail": {
          crossStreet1: "Paleto Loop Trail",
          crossStreet2: "Fallen Tree Rd",
        },
      },
    },
  },
  {
    postal: "053",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0350",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Fallen Tree Rd": {
          crossStreet1: "Pine Tree Rd",
          crossStreet2: "Pine Tree Rd",
        },
        "Ridgeline Loop Trail": {
          crossStreet1: "Fallen Tree Rd",
          crossStreet2: "Pine Tree Rd",
        },
      },
    },
  },
  {
    postal: "054",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0350",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Pine Tree Trail",
      crossStreet1: "Fallen Tree Rd",
      crossStreet2: "Paleto Loop Trail",
    },
  },
  {
    postal: "055",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Paleto Blvd",
        },
        "Rt 1 NB": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Procopio Promenade",
        },
      },
    },
  },
  {
    postal: "056",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Paleto Blvd",
        },
        "Rt 1 NB": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Procopio Promenade",
        },
      },
    },
  },
  {
    postal: "057",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Paleto Blvd",
        },
        "Rt 1 NB": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Procopio Promenade",
        },
        "Pine Tree Trail": {
          crossStreet1: "Paleto Loop Trail",
          crossStreet2: "Rt 1 NB",
        },
      },
    },
  },
  {
    postal: "058",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0303",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Rt 1 MM06.00",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 MM06.00",
          crossStreet2: "Procopio Promenade",
        },
        "Pine Tree Trail": {
          crossStreet1: "Paleto Loop Trail",
          crossStreet2: "Rt 1 NB",
        },
      },
    },
  },
  {
    postal: "059",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0305",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Paleto Blvd",
          crossStreet2: "Duluoz Ave",
        },
        "Rt 1 NB": {
          crossStreet1: "Duluoz Ave",
          crossStreet2: "Paleto Blvd",
        },
      },
    },
  },
  {
    postal: "060",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0305",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM06.00",
          crossStreet2: "Pyrite Ave",
        },
        "Rt 1 NB": {
          crossStreet1: "Pyrite Ave",
          crossStreet2: "Rt 1 MM06.00",
        },
      },
    },
  },
  {
    postal: "061",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0308",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Duluoz Ave, Pyrite Ave",
          crossStreet2: "Procopio Dr",
        },
        "Rt 1 NB": {
          crossStreet1: "Procopio Dr",
          crossStreet2: "Duluoz Ave, Pyrite Ave",
        },
      },
    },
  },
  {
    postal: "062",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0310",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Pyrite Ave",
          crossStreet2: "Procopio Dr",
        },
        "Rt 1 NB": {
          crossStreet1: "Procopio Dr",
          crossStreet2: "Pyrite Ave",
        },
      },
    },
  },
  {
    postal: "063",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0310",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Pyrite Ave",
          crossStreet2: "Procopio Dr",
        },
        "Rt 1 NB": {
          crossStreet1: "Procopio Dr",
          crossStreet2: "Pyrite Ave",
        },
      },
    },
  },
  {
    postal: "064",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0310",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Pyrite Ave",
          crossStreet2: "Procopio Promenade, Procopio Dr",
        },
        "Rt 1 NB": {
          crossStreet1: "Procopio Promenade, Procopio Dr",
          crossStreet2: "Pyrite Ave",
        },
      },
    },
  },
  {
    postal: "065",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0312",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Pyrite Ave",
          crossStreet2: "Procopio Promenade",
        },
        "Rt 1 NB": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Pyrite Ave",
        },
      },
    },
  },
  {
    postal: "066",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "PBPD",
    hasHeli: true,
    fireBox: "0314",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "8", "7", "6", "5"],
    policeRunOrder: [
      "PBPD",
      "BCSO",
      "SAHP",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Rt 1 MM07.00",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 MM07.00",
          crossStreet2: "Procopio Promenade",
        },
      },
    },
  },
  {
    postal: "067",
    twp: "Paleto Bay",
    fdDistrict: "03",
    policeDistrict: "SAHP",
    hasHeli: true,
    fireBox: "0322",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SAHP",
      "BCSO",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Rt 1 MM07.00",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 MM07.00",
          crossStreet2: "Procopio Promenade",
        },
        "Hanes Memorial Bridge": {
          crossStreet1: "Rt 1 NB",
          crossStreet2: "Driftwood Dr",
        },
        "Rt 1 SB to Hanes Memorial Bridge Ramp": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Hanes Memorial Bridge",
        },
        "Rt 1 NB to Hanes Memorial Bridge Ramp": {
          crossStreet1: "Rt 1 NB",
          crossStreet2: "Hanes Memorial Bridge",
        },
        "Hanes Memorial Bridge to Rt 1 SB Ramp": {
          crossStreet1: "Hanes Memorial Bridge",
          crossStreet2: "Rt 1 SB",
        },
        "Hanes Memorial Bridge to Rt 1 NB Ramp": {
          crossStreet1: "Hanes Memorial Bridge",
          crossStreet2: "Rt 1 NB",
        },
      },
    },
  },
  {
    postal: "068",
    fdDistrict: "03",
    policeDistrict: "SAHP",
    hasHeli: true,
    fireBox: "0322",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SAHP",
      "BCSO",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM07.00",
          crossStreet2: "Rt 13 NB to Rt 1 SB",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 NB to Rt 13 SB",
          crossStreet2: "Rt 1 MM07.00",
        },
      },
    },
  },
  {
    postal: "069",
    fdDistrict: "03",
    policeDistrict: "SHAP",
    hasHeli: true,
    fireBox: "0322",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SAHP",
      "BCSO",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM07.00",
          crossStreet2: "Rt 13 NB to Rt 1 SB",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 NB to Rt 13 SB",
          crossStreet2: "Rt 1 MM07.00",
        },
      },
    },
  },
  {
    postal: "070",
    fdDistrict: "03",
    policeDistrict: "SAHP",
    hasHeli: true,
    fireBox: "0322",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SAHP",
      "BCSO",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM07.00",
          crossStreet2: "Rt 13 NB to Rt 1 SB",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 NB to Rt 13 SB",
          crossStreet2: "Rt 1 MM07.00",
        },
      },
    },
  },
  {
    postal: "071",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0351",
    fdRunOrder: ["3", "11", "9", "4", "2", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM07.00",
          crossStreet2: "Rt 13 NB to Rt 1 SB",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 NB to Rt 13 SB",
          crossStreet2: "Rt 1 MM07.00",
        },
      },
    },
  },
  {
    postal: "072",
    fdDistrict: "03",
    policeDistrict: "SAHP",
    hasHeli: true,
    fireBox: "3141",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SAHP",
      "BCSO",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 13 SB": {
          crossStreet1: "Rt 13 MM01.00",
          crossStreet2: "Rt 1 NB to Rt 13 SB",
        },
        "Rt 13 NB": {
          crossStreet1: "Rt 13 NB to Rt 1 SB",
          crossStreet2: "Rt 13 MM01.00",
        },
      },
    },
  },
  {
    postal: "073",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0351",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Gordo Trail",
      crossStreet1: "Union Rd",
      crossStreet2: "Gordo Dr",
    },
  },
  {
    postal: "074",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0351",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Gordo Trail",
      crossStreet1: "Union Rd",
      crossStreet2: "Gordo Dr",
    },
  },
  {
    postal: "075",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0351",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Gordo Trail",
      crossStreet1: "Union Rd",
      crossStreet2: "Gordo Dr",
    },
  },
  {
    postal: "076",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0351",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "MBPD",
      "RCSO",
      "SSPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Gordo Trail",
      crossStreet1: "Union Rd",
      crossStreet2: "Gordo Dr",
    },
  },
  {
    postal: "077",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0951",
    fdRunOrder: ["9", "3", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Gordo Trail",
      crossStreet1: "Union Rd",
      crossStreet2: "Gordo Dr",
    },
  },
  {
    postal: "078",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0351",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Gordo Trail",
      crossStreet1: "Union Rd",
      crossStreet2: "Gordo Dr",
    },
  },
  {
    postal: "079",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0951",
    fdRunOrder: ["9", "3", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Gordo Trail",
      crossStreet1: "Union Rd",
      crossStreet2: "Gordo Dr",
    },
  },
  {
    postal: "080",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0951",
    fdRunOrder: ["9", "3", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Gordo Dr",
      crossStreet1: "Catfish View",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "081",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0920",
    fdRunOrder: ["9", "3", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Gordo Dr",
      crossStreet1: "Catfish View",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "082",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0952",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Catfish View": {
          crossStreet1: "Union Rd",
          crossStreet2: "Dead End, Gordo Dr",
        },
        "Gordo Dr": {
          crossStreet1: "Catfish View",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "083",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0952",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Catfish View",
      crossStreet1: "Gordo Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "084",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0952",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Catfish View",
      crossStreet1: "Gordo Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "085",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0952",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Catfish View",
      crossStreet1: "Gordo Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "086",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0952",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Catfish View",
      crossStreet1: "Gordo Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "087",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0912",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Chianski Passage": {
          crossStreet1: "Amtrack Access Rd",
          crossStreet2: "Union Rd",
        },
        "Amtrack Access Rd": {
          crossStreet1: "Chianski Passage",
          crossStreet2: "Union Rd",
        },
        "Union Rd": {
          crossStreet1: "Chianski Passage",
          crossStreet2: "Amtrack Access Rd",
        },
      },
    },
  },
  {
    postal: "088",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0912",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 13 NB": {
          crossStreet1: "E. Joshua Rd",
          crossStreet2: "Union Rd",
        },
        "Rt 13 SB": {
          crossStreet1: "Union Rd",
          crossStreet2: "Rt 13 MM02.00",
        },
        "Chianski Passage": {
          crossStreet1: "Hayseed Rd",
          crossStreet2: "Union Rd",
        },
        "Union Rd": {
          crossStreet1: "Rt 13 NB",
          crossStreet2: "Chianski Passage",
        },
      },
    },
  },
  {
    postal: "089",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Dots Ln": {
          crossStreet1: "Cattle Rd",
          crossStreet2: "Pinto Ln",
        },
        "Rt 13 NB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
        "Rt 13 SB": {
          crossStreet1: "Union Rd",
          crossStreet2: "Rt 13 MM02.00",
        },
        "E. Joshua Rd": {
          crossStreet1: "Seaview Rd",
          crossStreet2: "Rt 13 SB",
        },
      },
    },
  },
  {
    postal: "090",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Seaview Rd": {
          crossStreet1: "Dots Ln",
          crossStreet2: "E. Joshua Rd",
        },
        "Dots Ln": {
          crossStreet1: "Seaview Rd",
          crossStreet2: "Pinto Ln",
        },
        "E. Joshua Rd": {
          crossStreet1: "Seaview Rd",
          crossStreet2: "Pinto Ln",
        },
      },
    },
  },

  {
    postal: "091",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Seaview Rd": {
          crossStreet1: "Farmer Rd",
          crossStreet2: "Dots Ln",
        },
        "Farmer Rd": {
          crossStreet1: "Seaview Rd",
          crossStreet2: "Maize Rd",
        },
        "Pinto Ln": {
          crossStreet1: "Farmer Rd",
          crossStreet2: "Dots Ln",
        },
        "Dots Ln": {
          crossStreet1: "Seaview Rd",
          crossStreet2: "Pinto Ln",
        },
      },
    },
  },
  {
    postal: "092",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Pinto Ln": {
          crossStreet1: "Farmer Rd",
          crossStreet2: "Dots Ln",
        },
        "Farmer Rd": {
          crossStreet1: "Pinto Ln",
          crossStreet2: "Maize Rd",
        },
        "Maize Rd": {
          crossStreet1: "Farmer Rd",
          crossStreet2: "Dots Ln",
        },
        "Dots Ln": {
          crossStreet1: "Pinto Ln",
          crossStreet2: "Maize Rd",
        },
      },
    },
  },
  {
    postal: "093",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Seaview Rd": {
          crossStreet1: "Grapeseed Way",
          crossStreet2: "Farmer Rd",
        },
        "Grapeseed Way": {
          crossStreet1: "Maize Rd",
          crossStreet2: "Seaview Rd",
        },
        "Maize Rd": {
          crossStreet1: "Grapeseed Way",
          crossStreet2: "Farmer Rd",
        },
        "Farmer Rd": {
          crossStreet1: "Seaview Rd",
          crossStreet2: "Maize Rd",
        },
      },
    },
  },
  {
    postal: "094",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Maize Rd": {
          crossStreet1: "Grapeseed Way",
          crossStreet2: "Dots Ln",
        },
        "Grapeseed Way": {
          crossStreet1: "Maize Rd",
          crossStreet2: "Cattle Rd",
        },
        "Cattle Rd": {
          crossStreet1: "Grapeseed Way",
          crossStreet2: "Dots Ln",
        },
        "Dots Ln": {
          crossStreet1: "Maize Rd",
          crossStreet2: "Cattle Rd",
        },
        "Rt 13 SB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
        "Rt 13 NB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
      },
    },
  },
  {
    postal: "095",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0912",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Chianski Passage": {
          crossStreet1: "Hayseed Rd",
          crossStreet2: "Amtrack Access Rd",
        },
        "Hayseed Rd": {
          crossStreet1: "Chainski Passage",
          crossStreet2: "Union Rd",
        },
        "Union Rd": {
          crossStreet1: "Hayseed Rd",
          crossStreet2: "Amtrack Access Rd",
        },
        "Amtrack Access Rd": {
          crossStreet1: "Chianski Passage",
          crossStreet2: "Union Rd",
        },
        "Rt 13 SB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
        "Rt 13 NB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
      },
    },
  },
  {
    postal: "096",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Union Rd": {
          crossStreet1: "Grapeseed Ave",
          crossStreet2: "Grapeseed Way",
        },
        "Grapeseed Ave": {
          crossStreet1: "Seaview Rd",
          crossStreet2: "Cattle Rd",
        },
        "Grapeseed Way": {
          crossStreet1: "Seaview Rd",
          crossStreet2: "Cattle Rd",
        },
      },
    },
  },
  {
    postal: "097",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0906",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cattle Rd": {
          crossStreet1: "Grapeseed Ave",
          crossStreet2: "Dots Ln",
        },
        "Grapeseed Ave": {
          crossStreet1: "Cattle Rd",
          crossStreet2: "Dots Ln",
        },
        "Dots Ln": {
          crossStreet1: "Grapeseed Ave",
          crossStreet2: "Cattle Rd",
        },
        "Rt 13 SB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
        "Rt 13 NB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
      },
    },
  },
  {
    postal: "098",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0912",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Chianski Passage": {
          crossStreet1: "Hayseed Way",
          crossStreet2: "Hayseed Rd",
        },
        "Hayseed Way": {
          crossStreet1: "Chianski Passage",
          crossStreet2: "Union Rd",
        },
        "Union Rd": {
          crossStreet1: "Hayseed Way",
          crossStreet2: "Hayseed Rd",
        },
        "Hayseed Rd": {
          crossStreet1: "Chianski Passage",
          crossStreet2: "Union Rd",
        },
        "Rt 13 SB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
        "Rt 13 NB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
      },
    },
  },
  {
    postal: "099",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0912",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 13 SB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
        "Rt 13 NB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
        "Chianski Passage": {
          crossStreet1: "Grapeseed Ave",
          crossStreet2: "Hayseed Way",
        },
        "Grapeseed Ave": {
          crossStreet1: "Chianski Passage, Dots Ln",
          crossStreet2: "Union Rd",
        },
        "Union Rd": {
          crossStreet1: "Grapeseed Ave",
          crossStreet2: "Hayseed Way",
        },
        "Hayseed Way": {
          crossStreet1: "Chianski Passage",
          crossStreet2: "Union Rd",
        },
      },
    },
  },
  {
    postal: "100",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    hasHeli: true,
    fireBox: "0910",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 13 NB": {
          crossStreet1: "E. Joshua Rd",
          crossStreet2: "Rt 13 MM01.00",
        },
        "Rt 13 SB": {
          crossStreet1: "E. Joshua Rd",
          crossStreet2: "Union Rd",
        },
        "Union Rd": {
          crossStreet1: "Rt 13 NB",
          crossStreet2: "Grapeseed Ave",
        },
      },
    },
  },
  {
    postal: "101",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0904",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Dots Ln": {
          crossStreet1: "Little Finger Way",
          crossStreet2: "Grapeseed Ave",
        },
        "Little Finger Way": {
          crossStreet1: "Dots Ln",
          crossStreet2: "Dead End",
        },
        "Rt 13 SB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
        "Rt 13 NB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
      },
    },
  },
  {
    postal: "102",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0904",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cattle Rd": {
          crossStreet1: "Swine Rd",
          crossStreet2: "Grapeseed Ave",
        },
        "Swine Rd": {
          crossStreet1: "Cattle Rd",
          crossStreet2: "Dots Ln",
        },
        "Dots Ln": {
          crossStreet1: "Swine Rd",
          crossStreet2: "Grapeseed Ave",
        },
      },
    },
  },
  {
    postal: "103",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0904",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Cattle Rd",
      crossStreet1: "Swine Rd",
      crossStreet2: "Grapeseed Ave",
    },
  },
  {
    postal: "104",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0904",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Seaview Rd": {
          crossStreet1: "Joad Ln",
          crossStreet2: "Grapeseed Ave",
        },
        "Rancher Rd": {
          crossStreet1: "Cattle Rd",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "105",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0904",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joad Ln": {
          crossStreet1: "Seaview Rd",
          crossStreet2: "O'Neil Way",
        },
        "O'Neil Way": {
          crossStreet1: "Joad Ln",
          crossStreet2: "Cattle Rd",
        },
        "Cattle Rd": {
          crossStreet1: "Rancher Rd",
          crossStreet2: "O'Neil Way",
        },
        "Rancher Rd": {
          crossStreet1: "Cattle Rd",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "106",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0904",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cattle Rd": {
          crossStreet1: "O'Neil Way",
          crossStreet2: "Swine Rd",
        },
        "Dots Ln": {
          crossStreet1: "O'Neil Way",
          crossStreet2: "Dead End",
        },
        "O'Neil Way": {
          crossStreet1: "Cattle Rd",
          crossStreet2: "Swine Rd",
        },
        "Swine Rd": {
          crossStreet1: "O'Neil Way",
          crossStreet2: "O'Neil Ln",
        },
        "O'Neil Ln": {
          crossStreet1: "Cattle Rd",
          crossStreet2: "Swine Rd",
        },
      },
    },
  },
  {
    postal: "107",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0904",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Swine Rd": {
          crossStreet1: "Dots Ln",
          crossStreet2: "O'Neil Way",
        },
        "Union Rd": {
          crossStreet1: "O'Neil Way",
          crossStreet2: "Rt 13 SB",
        },
        "Rt 13 SB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
        "Rt 13 NB": {
          crossStreet1: "Union Rd",
          crossStreet2: "E. Joshua Rd",
        },
      },
    },
  },
  {
    postal: "108",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0902",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Dots Ln": {
          crossStreet1: "Phire Ln",
          crossStreet2: "O'Neil Way",
        },
        "Phire Ln": {
          crossStreet1: "Dots Ln",
          crossStreet2: "Union Rd",
        },
        "Union Rd": {
          crossStreet1: "Phire Ln",
          crossStreet2: "O'Neil Way",
        },
        "O'Neil Way": {
          crossStreet1: "Dots Ln",
          crossStreet2: "Union Rd",
        },
      },
    },
  },
  {
    postal: "109",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0902",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joad Ln": {
          crossStreet1: "Phire Ln",
          crossStreet2: "O'Neil Way",
        },
        "Phire Ln": {
          crossStreet1: "Joad Ln",
          crossStreet2: "Dots Ln",
        },
        "Dots Ln": {
          crossStreet1: "Phire Ln",
          crossStreet2: "O'Neil Way",
        },
        "O'Neil Way": {
          crossStreet1: "Joad Ln",
          crossStreet2: "Dots Ln",
        },
      },
    },
  },
  {
    postal: "110",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9400",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Seaview Rd": {
          crossStreet1: "Orchard Ln",
          crossStreet2: "Joad Ln",
        },
        "Joad Ln": {
          crossStreet1: "O'Neil Way",
          crossStreet2: "Seaview Rd",
        },
        "McKenzie Rd": {
          crossStreet1: "Phire Way",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "111",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Seaview Rd": {
          crossStreet1: "Orchard Ln",
          crossStreet2: "Joad Ln",
        },
        "Orchard Ln": {
          crossStreet1: "Boar Ln",
          crossStreet2: "Seaview Rd",
        },
        "Boar Ln": {
          crossStreet1: "Seaview Rd",
          crossStreet2: "Phire Way",
        },
      },
    },
  },
  {
    postal: "112",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Grapeseed Main St": {
          crossStreet1: "N. Calafia Way",
          crossStreet2: "Boar Ln",
        },
        "Seaview Rd": {
          crossStreet1: "N. Calafia Way",
          crossStreet2: "Boar Ln",
        },
      },
    },
  },
  {
    postal: "113",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Grapeseed Main St": {
          crossStreet1: "Boar Ln",
          crossStreet2: "N. Calafia Way",
        },
        "N. Calafia Way": {
          crossStreet1: "Fishery Ln",
          crossStreet2: "Grapeseed Main St",
        },
      },
    },
  },
  {
    postal: "114",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0909",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Grapeseed Main St",
      crossStreet1: "N. Calafia Way",
      crossStreet2: "Boar Ln",
    },
  },
  {
    postal: "115",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Grapeseed Main St": {
          crossStreet1: "N. Calafia Way",
          crossStreet2: "Boar Ln",
        },
        "Boar Ln": {
          crossStreet1: "Union Way",
          crossStreet2: "Phire Way",
        },
      },
    },
  },
  {
    postal: "116",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0909",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Grapeseed Main St",
      crossStreet1: "N. Calafia Way",
      crossStreet2: "Boar Ln",
    },
  },
  {
    postal: "117",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Boar Ln": {
          crossStreet1: "Grapeseed Main St",
          crossStreet2: "Union Way",
        },
        "Grapeseed Main St": {
          crossStreet1: "Boar Ln",
          crossStreet2: "McKenzie Rd",
        },
        "McKenzie Rd": {
          crossStreet1: "Grapeseed Main St",
          crossStreet2: "Union Way",
        },
        "Union Way": {
          crossStreet1: "Boar Ln",
          crossStreet2: "McKenzie Rd",
        },
      },
    },
  },
  {
    postal: "118",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Boar Ln": {
          crossStreet1: "Union Way",
          crossStreet2: "Phire Way",
        },
        "McKenzie Rd": {
          crossStreet1: "Union Way",
          crossStreet2: "Phire Way",
        },
        "Phire Way": {
          crossStreet1: "Boar Ln",
          crossStreet2: "McKenzie Rd",
        },
      },
    },
  },
  {
    postal: "119",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "McKenzie Way": {
          crossStreet1: "Phire Ln",
          crossStreet2: "Phire Way",
        },
        "Phire Ln": {
          crossStreet1: "McKenzie Rd",
          crossStreet2: "Joad Ln",
        },
        "Joad Ln": {
          crossStreet1: "Phire Ln",
          crossStreet2: "Phire Way",
        },
        "Phire Way": {
          crossStreet1: "McKenzie Rd",
          crossStreet2: "Joad Ln",
        },
      },
    },
  },
  {
    postal: "120",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "McKenzie Rd": {
          crossStreet1: "Union Way",
          crossStreet2: "Phire Ln",
        },
        "Union Way": {
          crossStreet1: "McKenzie Rd",
          crossStreet2: "Joad Ln",
        },
        "Joad Ln": {
          crossStreet1: "Union Way",
          crossStreet2: "Phire Ln",
        },
        "Phire Ln": {
          crossStreet1: "McKenzie Rd",
          crossStreet2: "Joad Ln",
        },
      },
    },
  },
  {
    postal: "121",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0902",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "McKenzie Rd": {
          crossStreet1: "Grapeseed Main St",
          crossStreet2: "Union Way",
        },
        "Grapeseed Main St": {
          crossStreet1: "McKenzie Rd",
          crossStreet2: "Union Way",
        },
        "Union Way": {
          crossStreet1: "McKenzie Rd",
          crossStreet2: "Grapeseed Main St",
        },
      },
    },
  },
  {
    postal: "122",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0902",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joad Ln": {
          crossStreet1: "Union Rd",
          crossStreet2: "Phire Ln",
        },
        "Union Rd": {
          crossStreet1: "Joad Ln",
          crossStreet2: "Cattle Rd",
        },
        "Cattle Rd": {
          crossStreet1: "Union Rd",
          crossStreet2: "Phire Ln",
        },
        "Phire Ln": {
          crossStreet1: "Joad Ln",
          crossStreet2: "Cattle Rd",
        },
      },
    },
  },
  {
    postal: "123",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0902",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cattle Rd": {
          crossStreet1: "Union Rd",
          crossStreet2: "Phire Ln",
        },
        "Union Rd": {
          crossStreet1: "Cattle Rd",
          crossStreet2: "Phire Ln",
        },
        "Phire Ln": {
          crossStreet1: "Cattle Rd",
          crossStreet2: "Union Rd",
        },
      },
    },
  },
  {
    postal: "124",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Union Rd": {
          crossStreet1: "Dots Ln",
          crossStreet2: "O'Neil Way",
        },
        "Eagle Chilliad Trail": {
          crossStreet1: "Chilliad Trail",
          crossStreet2: "Union Rd",
        },
      },
    },
  },
  {
    postal: "125",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Braddock Ln": {
          crossStreet1: "Union Rd",
          crossStreet2: "Dead End",
        },
        "Rt 13 SB": {
          crossStreet1: "Rt 13 MM01.00",
          crossStreet2: "Union Rd",
        },
        "Rt 13 NB": {
          crossStreet1: "Union Rd",
          crossStreet2: "Rt 13 MM01.00",
        },
      },
    },
  },
  {
    postal: "126",
    twp: "Grapeseed",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "9", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 13 SB": {
          crossStreet1: "Rt 1 NB to Rt 13 SB",
          crossStreet2: "Union Rd",
        },
        "Rt 13 NB": {
          crossStreet1: "Rt 13 MM01.00",
          crossStreet2: "Rt 13 NB to Rt 1 SB",
        },
        "Falcon Chilliad Trail": {
          crossStreet1: "Chilliad Trail",
          crossStreet2: "Falcon Trail Drop",
        },
      },
    },
  },
  {
    postal: "127",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Braddock Ln",
      crossStreet1: "Union Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "128",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Union Rd": {
          crossStreet1: "Joad Ln",
          crossStreet2: "Phire Ln",
        },
        "Eagle Chilliad Trail": {
          crossStreet1: "Chilliad Trail",
          crossStreet2: "Union Rd",
        },
      },
    },
  },
  {
    postal: "129",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Eagle Chilliad Trail",
      crossStreet1: "Chilliad Trail",
      crossStreet2: "Union Rd",
    },
  },
  {
    postal: "130",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Falcon Chilliad Trail",
      crossStreet1: "Chilliad Trail",
      crossStreet2: "Falcon Trail Drop",
    },
  },
  {
    postal: "131",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM07.00",
          crossStreet2: "Rt 13 NB to Rt 1 SB",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 NB to Rt 13 SB",
          crossStreet2: "Rt 1 MM07.00",
        },
      },
    },
  },
  {
    postal: "132",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "9", "11", "2", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM07.00",
          crossStreet2: "Rt 13 NB to Rt 1 SB",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 NB to Rt 13 SB",
          crossStreet2: "Rt 1 MM07.00",
        },
      },
    },
  },
  {
    postal: "133",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Falcon Chilliad Trail",
      crossStreet1: "Chilliad Trail",
      crossStreet2: "Falcon Trail Drop",
    },
  },
  {
    postal: "134",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Eagle Chilliad Trail",
      crossStreet1: "Chilliad Trail",
      crossStreet2: "Union Rd",
    },
  },
  {
    postal: "135",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Chilliad Trail": {
          crossStreet1: "Base Trail",
          crossStreet2: "Falcon Chilliad Trail",
        },
        "Falcon Chilliad Trail": {
          crossStreet1: "Chilliad Trail",
          crossStreet2: "Falcon Trail Drop",
        },
        "Eagle Chilliad Trail": {
          crossStreet1: "Chilliad Trail",
          crossStreet2: "Union Rd",
        },
      },
    },
  },
  {
    postal: "136",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "N. Calfia Way",
      crossStreet1: "Carlo Ln",
      crossStreet2: "Fishery Ln",
    },
  },
  {
    postal: "137",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0903",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "N. Calfia Way",
      crossStreet1: "Carlo Ln",
      crossStreet2: "Fishery Ln",
    },
  },
  {
    postal: "138",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0903",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Fishery Ln": {
          crossStreet1: "N. Calfia Way",
          crossStreet2: "Dead End",
        },
        "N. Calfia Way": {
          crossStreet1: "Carlo Ln",
          crossStreet2: "Fishery Ln",
        },
      },
    },
  },
  {
    postal: "139",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0903",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "N. Calfia Way",
      crossStreet1: "Carlo Ln",
      crossStreet2: "Fishery Ln",
    },
  },
  {
    postal: "140",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0933",
    fdRunOrder: ["9", "2", "3", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Marina Dr": {
          crossStreet1: "Meringue Ln",
          crossStreet2: "Lesbos Ln",
        },
        "Fishery Ln": {
          crossStreet1: "N. Calafia Way",
          crossStreet2: "Dead End",
        },
        "Carlo Ln": {
          crossStreet1: "N. Calafia Way",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "141",
    twp: "Grapeseed",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0233",
    fdRunOrder: ["2", "9", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "N. Calafia Way": {
          crossStreet1: "Pine Tree Rd",
          crossStreet2: "Carlo Ln",
        },
        "Carlo Ln": {
          crossStreet1: "N. Calafia Way",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "142",
    twp: "Grapeseed",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0233",
    fdRunOrder: ["2", "9", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "N. Calafia Way",
      crossStreet1: "Pine Tree Rd",
      crossStreet2: "Carlo Ln",
    },
  },
  {
    postal: "143",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chiliad Trail",
      crossStreet1: "Base Trail",
      crossStreet2: "Falcon Chilliad Trail",
    },
  },
  {
    postal: "144",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chiliad Trail",
      crossStreet1: "Base Trail",
      crossStreet2: "Falcon Chilliad Trail",
    },
  },
  {
    postal: "145",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chiliad Trail",
      crossStreet1: "Base Trail",
      crossStreet2: "Falcon Chilliad Trail",
    },
  },
  {
    postal: "146",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0950",
    fdRunOrder: ["9", "3", "2", "11", "4", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chiliad Trail",
      crossStreet1: "Base Trail",
      crossStreet2: "Faclon Chiliad Trail",
    },
  },
  {
    postal: "147",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "2", "4", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chiliad Trail",
      crossStreet1: "Base Trail",
      crossStreet2: "Falcon Chilliad Trail",
    },
  },
  {
    postal: "148",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "2", "4", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Chiliad Trail": {
          crossStreet1: "Base Trail",
          crossStreet2: "Falcon Chilliad Trail",
        },
        "Base Trail": {
          crossStreet1: "Chiliad Trail",
          crossStreet2: "Ridgeline Loop Trail",
        },
      },
    },
  },
  {
    postal: "149",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "2", "4", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      availableRoads: {
        "Pine Tree Rd": {
          crossStreet1: "Cult Ln",
          crossStreet2: "N. Calfia Way",
        },
        "Base Trail": {
          crossStreet1: "Hanger Trail",
          crossStreet2: "Chiliad Trail",
        },
        "Ridgeline Loop Trail": {
          crossStreet1: "Base Trail",
          crossStreet2: "Pine Tree Rd",
        },
        "Hanger Trail": {
          crossStreet1: "Ridgeline Loop Trail",
          crossStreet2: "Base Trail",
        },
      },
    },
  },
  {
    postal: "150",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Pine Tree Rd": {
          crossStreet1: "Cult Ln",
          crossStreet2: "Fallen Tree Rd",
        },
        "Hanger Terrace": {
          crossStreet1: "Karin Dr",
          crossStreet2: "Pine Tree Rd",
        },
        "Base Trail": {
          crossStreet1: "Cult Ln",
          crossStreet2: "Pine Tree Rd",
        },
      },
    },
  },
  {
    postal: "151",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Pine Tree Rd": {
          crossStreet1: "Cult Ln",
          crossStreet2: "Fallen Tree Rd",
        },
        "Hanger Terrace": {
          crossStreet1: "Karin Dr",
          crossStreet2: "Pine Tree Rd",
        },
      },
    },
  },
  {
    postal: "152",
    fdDistrict: "03",
    policeDistrict: "SAHP",
    fireBox: "0307",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SAHP",
      "BCSO",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM05.00",
          crossStreet2: "Pine Tree Rd",
        },
        "Rt 1 NB": {
          crossStreet1: "Pine Tree Rd",
          crossStreet2: "Rt 1 MM05.00",
        },
        "S. Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "153",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0307",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM05.00",
          crossStreet2: "Pine Tree Rd",
        },
        "Rt 1 NB": {
          crossStreet1: "Pine Tree Rd",
          crossStreet2: "Rt 1 MM05.00",
        },
        "S. Paleto Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "154",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0311",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Submarine Ln",
      crossStreet1: "Rt 1 SB",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "155",
    fdDistrict: "03",
    policeDistrict: "SAHP",
    fireBox: "0309",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SAHP",
      "BCSO",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Submarine Ln": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Dead End",
        },
        "Rt 1 SB": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Rt 1 MM05.00",
        },
        "Rt 1 NB": {
          crossStreet1: "Submarine Ln",
          crossStreet2: "Rt 1 MM05.00",
        },
        "Basin Dr": {
          crossStreet1: "Karin Dr",
          crossStreet2: "Rt 1 NB",
        },
      },
    },
  },
  {
    postal: "156",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0313",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Submarine Ln",
        },
        "Rt 1 NB": {
          crossStreet1: "Submarine Ln",
          crossStreet2: "Raton Pass",
        },
      },
    },
  },
  {
    postal: "157",
    fdDistrict: "03",
    policeDistrict: "SAHP",
    fireBox: "0313",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SAHP",
      "BCSO",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Submarine Ln",
        },
        "Rt 1 NB": {
          crossStreet1: "Submarine Ln",
          crossStreet2: "Raton Pass",
        },
      },
    },
  },
  {
    postal: "158",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "11", "2", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Submarine Ln",
        },
        "Rt 1 NB": {
          crossStreet1: "Submarine Ln",
          crossStreet2: "Raton Pass",
        },
        "Basin Dr": {
          crossStreet1: "Rt 1 NB",
          crossStreet2: "Karin Dr",
        },
      },
    },
  },
  {
    postal: "159",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Submarine Ln",
        },
        "Rt 1 NB": {
          crossStreet1: "Submarine Ln",
          crossStreet2: "Raton Pass",
        },
        "Karin Trail": {
          crossStreet1: "Basin Dr",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "160",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Beaver Trail",
      crossStreet1: "Basin Dr",
      crossStreet2: "Cassidy Trail",
    },
  },
  {
    postal: "161",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Karin Dr": {
          crossStreet1: "Basin Dr",
          crossStreet2: "Hanger Terrace",
        },
        "Basin Dr": {
          crossStreet1: "Karin Dr",
          crossStreet2: "N. Calfia Way",
        },
      },
    },
  },
  {
    postal: "162",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Hanger Terrace",
      crossStreet1: "Karin Dr",
      crossStreet2: "Pine Tree Rd",
    },
  },
  {
    postal: "163",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cult Ln": {
          crossStreet1: "Pine Tree Rd",
          crossStreet2: "Dead End",
        },
        "Hanger Terrace": {
          crossStreet1: "Karin Dr",
          crossStreet2: "Pine Tree Rd",
        },
      },
    },
  },
  {
    postal: "164",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Hanger Trail",
      crossStreet1: "Hanger Terrace",
      crossStreet2: "Ridgeline Loop Trail",
    },
  },
  {
    postal: "165",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Hanger Terrace": {
          crossStreet1: "Karin Dr",
          crossStreet2: "Hanger Trail",
        },
        "Cult Ln": {
          crossStreet1: "Pine Tree Rd",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "166",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Hanger Terrace",
      crossStreet1: "Karin Dr",
      crossStreet2: "Hanger Trail",
    },
  },
  {
    postal: "167",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Basin Dr",
      crossStreet1: "Beaver Trail",
      crossStreet2: "N. Calfia Way",
    },
  },
  {
    postal: "168",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Beaver Trail",
      crossStreet1: "Basin Dr",
      crossStreet2: "Cassidy Trail",
    },
  },
  {
    postal: "169",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Hanger Trail": {
          crossStreet1: "Hanger Terrace",
          crossStreet2: "Ridgeline Loop Trail",
        },
        "Hanger Terrace": {
          crossStreet1: "Karin Dr",
          crossStreet2: "Hanger Trail",
        },
        "Basin Dr": {
          crossStreet1: "Beaver Trail",
          crossStreet2: "N. Calfia Way",
        },
      },
    },
  },
  {
    postal: "170",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Basin Dr": {
          crossStreet1: "Beaver Trail",
          crossStreet2: "N. Calfia Way",
        },
        "Beaver Trail": {
          crossStreet1: "Basin Dr",
          crossStreet2: "Cassidy Trail",
        },
      },
    },
  },
  {
    postal: "171",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Hanger Trail",
      crossStreet1: "Hanger Terrace",
      crossStreet2: "Ridgeline Loop Trail",
    },
  },
  {
    postal: "172",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Ridgeline Loop Trail",
      crossStreet1: "Hanger Trail",
      crossStreet2: "Chilliad Trail",
    },
  },
  {
    postal: "173",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0250",
    fdRunOrder: ["2", "4", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Pine Tree Rd",
      crossStreet1: "Cult Ln",
      crossStreet2: "N. Calfia Way",
    },
  },
  {
    postal: "174",
    fdDistrict: "03",
    policeDistrict: "BCSO",
    fireBox: "0350",
    fdRunOrder: ["3", "4", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Basin Dr",
      crossStreet1: "Beaver Trail",
      crossStreet2: "N. Calfia Way",
    },
  },
  {
    postal: "175",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0250",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Pine Tree Rd": {
          crossStreet1: "Cult Ln",
          crossStreet2: "N. Calfia Way",
        },
        "N. Calfia Way": {
          crossStreet1: "Basin Dr",
          crossStreet2: "Carlo Ln",
        },
      },
    },
  },
  {
    postal: "176",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0250",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "N. Calfia Way": {
          crossStreet1: "Cassidy Trail",
          crossStreet2: "Pine Tree Rd",
        },
        "Basin Dr": {
          crossStreet1: "Beaver Trail",
          crossStreet2: "N. Calfia Way",
        },
      },
    },
  },
  {
    postal: "177",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0258",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Calafia Rd",
      crossStreet1: "Cassidy Trail",
      crossStreet2: "Raton Pass",
    },
  },
  {
    postal: "178",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0258",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Calafia Rd",
      crossStreet1: "Cassidy Trail",
      crossStreet2: "Joshua Rd",
    },
  },
  {
    postal: "179",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0258",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Calafia Rd",
      crossStreet1: "Raton Pass",
      crossStreet2: "Rapids Edge Rd",
    },
  },
  {
    postal: "180",
    twp: "Stab City",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0205",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Stab City Rd": {
          crossStreet1: "Calafia Rd",
          crossStreet2: "Dead End",
        },
        "Calafia Rd": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Rapids Edge Rd",
        },
      },
    },
  },
  {
    postal: "181",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0258",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Calafia Rd": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Joshua Rd",
        },
        "Rapids Edge Rd": {
          crossStreet1: "Zancudo Relief Rd",
          crossStreet2: "Calafia Rd",
        },
      },
    },
  },
  {
    postal: "182",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Raton Pass": {
          crossStreet1: "Cassidy Trail",
          crossStreet2: "Calafia Rd",
        },
        "Rapid's Edge Rd": {
          crossStreet1: "Zancudo Relief Rd",
          crossStreet2: "Calafia Rd",
        },
        "Zancudo Relief Rd": {
          crossStreet1: "Lago Rd",
          crossStreet2: "Rapid's Edge Rd",
        },
      },
    },
  },
  {
    postal: "183",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Raton Pass",
      crossStreet1: "Raton Main",
      crossStreet2: "Calafia Rd",
    },
  },
  {
    postal: "184",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cassidy Trail": {
          crossStreet1: "Beaver Trail",
          crossStreet2: "Calafia Rd",
        },
        "Raton East": {
          crossStreet1: "Raton Main",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "185",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Cassidy Trail",
      crossStreet1: "Raton Pass",
      crossStreet2: "Califia Rd",
    },
  },
  {
    postal: "186",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Raton North": {
          crossStreet1: "Raton Main",
          crossStreet2: "Dead End",
        },
        "Raton West": {
          crossStreet1: "Raton Main",
          crossStreet2: "Dead End",
        },
        "Raton Main": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Raton East",
        },
      },
    },
  },
  {
    postal: "187",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Raton Pass",
      crossStreet1: "Cassidy Trail",
      crossStreet2: "Califia Rd",
    },
  },
  {
    postal: "188",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Raton Pass",
      crossStreet1: "Cassidy Trail",
      crossStreet2: "Califia Rd",
    },
  },
  {
    postal: "189",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cassidy Trail": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Califia Rd",
        },
        "Raton Pass": {
          crossStreet1: "Cassidy Trail",
          crossStreet2: "Califia Rd",
        },
      },
    },
  },
  {
    postal: "190",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cassidy Trail": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Califia Rd",
        },
        "Raton Pass": {
          crossStreet1: "Cassidy Trail",
          crossStreet2: "Califia Rd",
        },
      },
    },
  },
  {
    postal: "191",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Raton Pass",
      crossStreet1: "Cassidy Trail",
      crossStreet2: "Califia Rd",
    },
  },
  {
    postal: "192",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "3", "9", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Cassidy Trail",
      crossStreet1: "Raton Pass",
      crossStreet2: "Califia Rd",
    },
  },
  {
    postal: "193",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "3", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cassidy Trail": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Califia Rd",
        },
        "Raton Pass": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Califia Rd",
        },
        "Rt 1 SB": {
          crossStreet1: "Raton Pass",
          crossStreet2: "Submarine Ln",
        },
        "Rt 1 NB": {
          crossStreet1: "Submarine Ln",
          crossStreet2: "Raton Pass",
        },
      },
    },
  },
  {
    postal: "194",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0419",
    fdRunOrder: ["4", "3", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Raton Pass": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Cassidy Trail",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 MM04.00",
          crossStreet2: "Submarine Ln",
        },
        "Rt 1 SB": {
          crossStreet1: "Submarine Ln",
          crossStreet2: "Rt 1 MM04.00",
        },
      },
    },
  },
  {
    postal: "195",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0419",
    fdRunOrder: ["4", "3", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 NB": {
          crossStreet1: "Rt 1 MM04.00",
          crossStreet2: "Submarine Ln",
        },
        "Rt 1 SB": {
          crossStreet1: "Submarine Ln",
          crossStreet2: "Rt 1 MM04.00",
        },
      },
    },
  },
  {
    postal: "196",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0421",
    fdRunOrder: ["4", "3", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Zancudo Relief Rd",
          crossStreet2: "Rt 1 MM04.00",
        },
        "Rt 1 NB": {
          crossStreet1: "Ft Zancudo Approach Rd",
          crossStreet2: "Rt 1 MM04.00",
        },
      },
    },
  },
  {
    postal: "197",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "3", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Zancudo Relief Rd",
          crossStreet2: "Rt 1 MM04.00",
        },
        "Rt 1 NB": {
          crossStreet1: "Ft Zancudo Approach Rd",
          crossStreet2: "Rt 1 MM04.00",
        },
        "Raton Pass": {
          crossStreet1: "Cassidy Trail",
          crossStreet2: "Raton Main",
        },
      },
    },
  },
  {
    postal: "198",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0414",
    fdRunOrder: ["4", "3", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM03.00",
          crossStreet2: "Zancudo Relief Rd",
        },
        "Rt 1 NB": {
          crossStreet1: "Ft Zancudo Approach Rd",
          crossStreet2: "Rt 1 MM04.00",
        },
        "Fort Zancudo Approach Rd": {
          crossStreet1: "Rt 1 NB",
          crossStreet2: "Rt 68",
        },
      },
    },
  },
  {
    postal: "199",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0413",
    fdRunOrder: ["4", "3", "2", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Relief Rd",
      crossStreet1: "Rt 1 SB",
      crossStreet2: "Lago Rd",
    },
  },
  {
    postal: "200",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4472",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Zancudo Relief Rd": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Lago Rd",
        },
        "Zancudo Approach Rd": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Rt 68 WB",
        },
      },
    },
  },
  {
    postal: "201",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4471",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM03.00",
          crossStreet2: "Fort Zancudo Approach Rd",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 MM03.00",
          crossStreet2: "Fort Zancudo Approach Rd",
        },
        "Fort Zancudo Approach Rd": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Rt 68 WB",
        },
      },
    },
  },
  {
    postal: "202",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4480",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Approach Rd",
      crossStreet1: "Rt 1 NB",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "203",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4482",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Approach Rd",
      crossStreet1: "Rt 1 NB",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "204",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4481",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Approach Rd",
      crossStreet1: "Rt 1 NB",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "205",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4483",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Approach Rd",
      crossStreet1: "Rt 1 NB",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "206",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4483",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Approach Rd",
      crossStreet1: "Rt 1 NB",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "207",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4491",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Approach Rd",
      crossStreet1: "Rt 1 NB",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "208",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4490",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Approach Rd",
      crossStreet1: "Rt 1 NB",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "209",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4490",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Approach Rd",
      crossStreet1: "Rt 1 NB",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "210",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4461",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Zancudo Approach Rd": {
          crossStreet1: "Rt 1 NB",
          crossStreet2: "Rt 68 WB",
        },
        "Lago Rd": {
          crossStreet1: "Zancudo Relief Rd",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "211",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4490",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Approach Rd",
      crossStreet1: "Rt 1 NB",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "212",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4460",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Approach Rd",
      crossStreet1: "Rt 1 NB",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "213",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4490",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Approach Rd",
      crossStreet1: "Rt 1 NB",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "214",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "4470",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Approach Rd",
      crossStreet1: "Rt 1 NB",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "215",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0413",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM03.00",
          crossStreet2: "Zancudo Relief Rd",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 MM03.00",
          crossStreet2: "Zancudo Relief Rd",
        },
        "Zancudo Relief Rd": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Lago Rd",
        },
      },
    },
  },
  {
    postal: "216",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0491",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Route 68",
          crossStreet2: "Rt 1 MM03.00",
        },
        "Rt 1 NB": {
          crossStreet1: "Route 68",
          crossStreet2: "Rt 1 MM03.00",
        },
      },
    },
  },
  {
    postal: "217",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0456",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Zancudo Relief Rd": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Lago Rd",
        },
        "Fort Zancudo Approach Rd": {
          crossStreet1: "Rt 1 NB",
          crossStreet2: "Rt 68 WB",
        },
      },
    },
  },
  {
    postal: "218",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0456",
    fdRunOrder: ["4", "2", "3", "11", "9", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Relief Rd",
      crossStreet1: "Rt 1 SB",
      crossStreet2: "Lago Rd",
    },
  },
  {
    postal: "219",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Zancudo Relief Rd": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Rapids Edge Rd",
        },
        "Lago Rd": {
          crossStreet1: "Zancudo Relief Rd",
          crossStreet2: "Dead End",
        },
        "Fort Zancudo Approach Rd": {
          crossStreet1: "Rt 1 NB",
          crossStreet2: "Rt 68 WB",
        },
      },
    },
  },
  {
    postal: "220",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Zancudo Relief Rd": {
          crossStreet1: "Lago Rd",
          crossStreet2: "Rapids Edge Rd",
        },
        "Lago Rd": {
          crossStreet1: "Zancudo Relief Rd",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "221",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0458",
    fdRunOrder: ["4", "2", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "PBPD",
      "SSPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Zancudo Relief Rd": {
          crossStreet1: "Lago Rd",
          crossStreet2: "Rapids Edge Rd",
        },
        "Rt 68 WB": {
          crossStreet1: "Lago Pass",
          crossStreet2: "Mt Vinewood Dr",
        },
        "Rt 68 EB": {
          crossStreet1: "Lago Pass",
          crossStreet2: "Mt Vinewood Dr",
        },
      },
    },
  },
  {
    postal: "222",
    twp: "Zancudo",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0258",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Zancudo Relief Rd": {
          crossStreet1: "Lago Rd",
          crossStreet2: "Harmony Relief Rd",
        },
        "Rapids Edge Rd": {
          crossStreet1: "Zancudo Relief Rd",
          crossStreet2: "Calafia Rd",
        },
      },
    },
  },
  {
    postal: "223",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0258",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Rapids Edge Rd",
      crossStreet1: "Zancudo Relief Rd",
      crossStreet2: "Calafia Rd",
    },
  },
  {
    postal: "224",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Harmony Relief Rd",
      crossStreet1: "Zancudo Relief Rd",
      crossStreet2: "Joshua Rd",
    },
  },
  {
    postal: "225",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 Approach": {
          crossStreet1: "Rt 68",
          crossStreet2: "Joshua Rd",
        },
        "Rt 68 EB": {
          crossStreet1: "Mount Vinewood Dr",
          crossStreet2: "Jobe Ln",
        },
        "Rt 68 WB": {
          crossStreet1: "Mount Vinewood Dr",
          crossStreet2: "Jobe Ln",
        },
      },
    },
  },
  {
    postal: "226",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Rt 68 Approach",
          crossStreet2: "Rt 68 MM03.00",
        },
        "Rt 68 WB": {
          crossStreet1: "Rt 68 MM03.00",
          crossStreet2: "Rt 68 Approach",
        },
        "Rt 68 Approach": {
          crossStreet1: "Rt 68 WB",
          crossStreet2: "Joshua Rd",
        },
      },
    },
  },
  {
    postal: "227",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Harmony Ln": {
          crossStreet1: "Cat-Tail Rd",
          crossStreet2: "Rt 68 EB",
        },
        "Rt 68 WB": {
          crossStreet1: "Jobe Ln",
          crossStreet2: "Senora Rd",
        },
        "Rt 68 EB": {
          crossStreet1: "Senora Rd",
          crossStreet2: "Jobe Ln",
        },
        "Senora Rd": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Harmony Ln",
        },
      },
    },
  },
  {
    postal: "228",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Rd",
      crossStreet1: "Rt 68 WB",
      crossStreet2: "Rt 68 Approach",
    },
  },
  {
    postal: "229",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 Approach": {
          crossStreet1: "Rt 68 WB",
          crossStreet2: "Joshua Rd",
        },
        "Joshua Rd": {
          crossStreet1: "Rt 68 Bypass",
          crossStreet2: "Rt 68 EB",
        },
      },
    },
  },
  {
    postal: "230",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Rd",
      crossStreet1: "Rt 68 Bypass",
      crossStreet2: "Rt 68 Approach",
    },
  },
  {
    postal: "231",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd": {
          crossStreet1: "Rt 68 Bypass",
          crossStreet2: "Harmony Relief Rd",
        },
        "Rt 68 Bypass": {
          crossStreet1: "Joshua Rd",
          crossStreet2: "Harmony Loop Rd",
        },
      },
    },
  },
  {
    postal: "232",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "4", "9", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd": {
          crossStreet1: "Harmony Relief Rd",
          crossStreet2: "Califia Rd",
        },
        "Joshua Way": {
          crossStreet1: "Joshua Rd",
          crossStreet2: "Joshua Pass",
        },
      },
    },
  },
  {
    postal: "233",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Rd",
      crossStreet1: "Califia Rd",
      crossStreet2: "Unk Side St",
    },
  },
  {
    postal: "234",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "SSPD",
    fireBox: "0204",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr",
      crossStreet1: "Unk Side St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "235",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0204",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Unk Side St": {
          crossStreet1: "Joshua Rd",
          crossStreet2: "Marina Dr",
        },
        "Marina Dr": {
          crossStreet1: "Unk Side St",
          crossStreet2: "Unk Side St",
        },
        "Joshua Rd": {
          crossStreet1: "Unk Side St",
          crossStreet2: "Unk Side St",
        },
      },
    },
  },
  {
    postal: "236",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Rd",
      crossStreet1: "Unk Side St",
      crossStreet2: "Unk Side St",
    },
  },
  {
    postal: "237",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Way",
      crossStreet1: "Joshua Rd",
      crossStreet2: "Joshua Pass",
    },
  },
  {
    postal: "238",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Rt 68 Bypass",
      crossStreet1: "Joshua Rd",
      crossStreet2: "Airfield Access Rd",
    },
  },
  {
    postal: "239",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd": {
          crossStreet1: "Rt 68 WB",
          crossStreet2: "Rt 68 Approach",
        },
        "Rt 68 Bypass": {
          crossStreet1: "Joshua Rd",
          crossStreet2: "Harmony Loop Rd",
        },
        "Harmony Loop Rd": {
          crossStreet1: "Rt 68 Bypass",
          crossStreet2: "Rt 68 WB",
        },
      },
    },
  },
  {
    postal: "240",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd": {
          crossStreet1: "Rt 68 WB",
          crossStreet2: "Rt 68 Approach",
        },
        "Harmony Loop Rd": {
          crossStreet1: "Rt 68 Bypass",
          crossStreet2: "Rt 68 WB",
        },
      },
    },
  },
  {
    postal: "241",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "9", "4", "3", "1", "11", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Senora Rd": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Cat-Tail Rd",
        },
        "Rt 68 EB": {
          crossStreet1: "Senora Rd",
          crossStreet2: "Orbit's Folly Ln",
        },
        "Rt 68 WB": {
          crossStreet1: "Senora Rd",
          crossStreet2: "Orbit's Folly Ln",
        },
        "Harmony View": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Harmony Ln",
        },
        "Harmony Ln": {
          crossStreet1: "Senora Rd",
          crossStreet2: "Orbit's Folly Ln",
        },
      },
    },
  },
  {
    postal: "242",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0208",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Orbit's Folly Ln": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Harmony Ln",
        },
        "Rt 68 EB": {
          crossStreet1: "Orbit's Folly Ln",
          crossStreet2: "Harmony Ln",
        },
        "Rt 68 WB": {
          crossStreet1: "Orbit's Folly Ln",
          crossStreet2: "Harmony Ln",
        },
        "Harmony Ln": {
          crossStreet1: "Orbit's Folly Ln",
          crossStreet2: "Rt 68 EB",
        },
      },
    },
  },
  {
    postal: "243",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0216",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Harmony Ln",
          crossStreet2: "Harmony Loop Rd",
        },
        "Rt 68 WB": {
          crossStreet1: "Harmony Ln",
          crossStreet2: "Harmony Loop Rd",
        },
        "Rebel Rd": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Cat-Tail Rd",
        },
      },
    },
  },
  {
    postal: "244",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0208",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Rt 68 EB",
      crossStreet1: "Orbit's Folly Ln",
      crossStreet2: "Rebel Rd",
    },
  },
  {
    postal: "245",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Orbit's Folly Ln",
          crossStreet2: "Rebel Rd",
        },
        "Rt 68 WB": {
          crossStreet1: "Orbit's Folly Ln",
          crossStreet2: "Rebel Rd",
        },
        "Harmony Loop Rd": {
          crossStreet1: "Rt 68 Bypass",
          crossStreet2: "Rt 68 WB",
        },
      },
    },
  },
  {
    postal: "246",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Orbit's Folly Ln",
          crossStreet2: "Rebel Rd",
        },
        "Rt 68 WB": {
          crossStreet1: "Orbit's Folly Ln",
          crossStreet2: "Rebel Rd",
        },
        "Harmony Loop Rd": {
          crossStreet1: "Rt 68 Bypass",
          crossStreet2: "Rt 68 WB",
        },
      },
    },
  },
  {
    postal: "247",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0216",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 WB": {
          crossStreet1: "Rebel Rd",
          crossStreet2: "Harmony Loop Rd",
        },
        "Rt 68 EB": {
          crossStreet1: "Rebel Rd",
          crossStreet2: "Harmony Loop Rd",
        },
      },
    },
  },
  {
    postal: "248",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Harmony Loop Rd",
      crossStreet1: "Rt 68 Bypass",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "249",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Harmony Loop Rd",
      crossStreet1: "Rt 68 Bypass",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "250",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SAHP",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 Bypass": {
          crossStreet1: "Harmony Loop Rd",
          crossStreet2: "Rt 68 WB",
        },
        "Airfield Access Rd": {
          crossStreet1: "Rt 68 Bypass",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "251",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "SSPD",
    fireBox: "0203",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Rd",
      crossStreet1: "Unk Side St",
      crossStreet2: "Unk Side St",
    },
  },
  {
    postal: "252",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "SSPD",
    fireBox: "0203",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr",
      crossStreet1: "Unk Side St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "253",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "SSPD",
    fireBox: "0203",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr",
      crossStreet1: "Unk Side St",
      crossStreet2: "Meringue Ln",
    },
  },
  {
    postal: "254",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "SSPD",
    fireBox: "0203",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Rd",
      crossStreet1: "Unk Side St",
      crossStreet2: "Algonquin Blvd",
    },
  },
  {
    postal: "255",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "SSPD",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd": {
          crossStreet1: "Unk Side St",
          crossStreet2: "Joshua Pass",
        },
        "Joshua Pass": {
          crossStreet1: "Joshua Rd",
          crossStreet2: "Joshua Way",
        },
      },
    },
  },
  {
    postal: "256",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Pass": {
          crossStreet1: "Joshua Rd",
          crossStreet2: "Joshua Way",
        },
        "Joshua Way": {
          crossStreet1: "Joshua Rd",
          crossStreet2: "Panorama Dr",
        },
      },
    },
  },
  {
    postal: "257",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2400",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Airfield Access Rd",
      crossStreet1: "Rt 68 Bypass",
      crossStreet2: "Panorama Dr",
    },
  },
  {
    postal: "258",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 Bypass": {
          crossStreet1: "Airfield Access Rd",
          crossStreet2: "Panorama Dr",
        },
        "Harmony Loop Rd": {
          crossStreet1: "Rt 68 Bypass",
          crossStreet2: "Rt 68 WB",
        },
      },
    },
  },
  {
    postal: "259",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Harmony Loop Rd",
      crossStreet1: "Rt 68 Bypass",
      crossStreet2: "Rt 68 WB",
    },
  },
  {
    postal: "260",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Harmony Loop Rd": {
          crossStreet1: "Rt 68 Bypass",
          crossStreet2: "Rt 68",
        },
        "Rt 68 EB": {
          crossStreet1: "Harmony Loop Rd",
          crossStreet2: "Rt 68 MM04.00",
        },
        "Rt 68 WB": {
          crossStreet1: "Harmony Loop Rd",
          crossStreet2: "Rt 68 MM04.00",
        },
      },
    },
  },
  {
    postal: "261",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Harmony Loop Rd": {
          crossStreet1: "Rt 68 Bypass",
          crossStreet2: "Rt 68",
        },
        "Rt 68 Bypass": {
          crossStreet1: "Harmony Loop Rd",
          crossStreet2: "Panorama Dr",
        },
        "Brook Trail": {
          crossStreet1: "Rt 68 Bypass",
          crossStreet2: "Dead End",
        },
        "Rt 68 EB": {
          crossStreet1: "Harmony Loop Rd",
          crossStreet2: "Rt 68 MM04.00",
        },
        "Rt 68 WB": {
          crossStreet1: "Harmony Loop Rd",
          crossStreet2: "Rt 68 MM04.00",
        },
      },
    },
  },
  {
    postal: "262",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Chancy Ln",
          crossStreet2: "Rt 68 MM04.00",
        },
        "Rt 68 WB": {
          crossStreet1: "Chancy Ln",
          crossStreet2: "Rt 68 MM04.00",
        },
      },
    },
  },
  {
    postal: "263",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Chancy Ln",
          crossStreet2: "Stinger Rd",
        },
        "Rt 68 WB": {
          crossStreet1: "Chancy Ln",
          crossStreet2: "Stinger Rd",
        },
        "Rt 68 Bypass": {
          crossStreet1: "Harmony Loop Rd",
          crossStreet2: "Panorama Dr",
        },
      },
    },
  },
  {
    postal: "264",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Rt 68 MM04.00",
          crossStreet2: "Stinger Rd",
        },
        "Rt 68 WB": {
          crossStreet1: "Rt 68 MM04.00",
          crossStreet2: "Stinger Rd",
        },
        "Rt 68 Bypass": {
          crossStreet1: "Harmony Loop Rd",
          crossStreet2: "Panorama Dr",
        },
      },
    },
  },
  {
    postal: "265",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Rt 68 MM04.00",
          crossStreet2: "Stinger Rd",
        },
        "Rt 68 WB": {
          crossStreet1: "Rt 68 MM04.00",
          crossStreet2: "Stinger Rd",
        },
        "Rt 68 Bypass": {
          crossStreet1: "Harmony Loop Rd",
          crossStreet2: "Panorama Dr",
        },
      },
    },
  },
  {
    postal: "266",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2400",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Airfield Access Rd",
      crossStreet1: "Rt 68 Bypass",
      crossStreet2: "Panorama Dr",
    },
  },
  {
    postal: "267",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Airfield Access Rd",
      crossStreet1: "Rt 68 Bypass",
      crossStreet2: "Panorama Dr",
    },
  },
  {
    postal: "268",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Joshua Way",
      crossStreet1: "Joshua Pass",
      crossStreet2: "Panorama Dr",
    },
  },
  {
    postal: "269",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd": {
          crossStreet1: "Joshua Pass",
          crossStreet2: "Panorama Dr",
        },
        "Algonquin Blvd": {
          crossStreet1: "Joshua Rd",
          crossStreet2: "Meringue Ln",
        },
      },
    },
  },
  {
    postal: "270",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr",
      crossStreet1: "Meringue Ln",
      crossStreet2: "Panorama Dr",
    },
  },
  {
    postal: "271",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Meringue Ln": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Algonquin Blvd",
        },
        "Marina Dr": {
          crossStreet1: "Meringue Ln",
          crossStreet2: "Lesbos Ln",
        },
        "Lesbos Ln": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Algonquin Blvd",
        },
        "Algonquin Blvd": {
          crossStreet1: "Meringue Ln",
          crossStreet2: "Lesbos Ln",
        },
      },
    },
  },
  {
    postal: "272",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Lesbos Ln": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Algonquin Blvd",
        },
        "Marina Dr": {
          crossStreet1: "Lesbos Ln",
          crossStreet2: "Panorama Dr",
        },
        "Panorama Dr": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Algonquin Blvd",
        },
        "Algonquin Blvd": {
          crossStreet1: "Lesbos Ln",
          crossStreet2: "Panorama Dr",
        },
      },
    },
  },
  {
    postal: "273",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd": {
          crossStreet1: "Algonquin Blvd",
          crossStreet2: "Panorama Dr",
        },
        "Algonquin Blvd": {
          crossStreet1: "Joshua Rd",
          crossStreet2: "Lesbos Ln",
        },
      },
    },
  },
  {
    postal: "274",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Algonquin Blvd": {
          crossStreet1: "Lesbos Ln",
          crossStreet2: "Panorama Dr",
        },
        "Panorama Dr": {
          crossStreet1: "Algonquin Blvd",
          crossStreet2: "Zancudo Ave",
        },
      },
    },
  },
  {
    postal: "275",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0202",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd": {
          crossStreet1: "Algonquin Blvd",
          crossStreet2: "Panorama Dr",
        },
        "Panorama Dr": {
          crossStreet1: "Alhambra Dr",
          crossStreet2: "Joshua Rd",
        },
      },
    },
  },
  {
    postal: "276",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Joshua Rd": {
          crossStreet1: "Algonquin Blvd",
          crossStreet2: "Panorama Dr",
        },
        "Joshua Way": {
          crossStreet1: "Joshua Pass",
          crossStreet2: "Panorama Dr",
        },
      },
    },
  },
  {
    postal: "277",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Panorama Dr",
      crossStreet1: "Joshua Way",
      crossStreet2: "Cholla Rd",
    },
  },
  {
    postal: "278",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Panorama Dr": {
          crossStreet1: "Cholla Rd",
          crossStreet2: "Stinger Rd",
        },
        "Rt 68 Bypass": {
          crossStreet1: "Harmony Loop Rd",
          crossStreet2: "Panorama Dr",
        },
      },
    },
  },
  {
    postal: "279",
    twp: "Sandy Shores",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0259",
    fdRunOrder: ["2", "9", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Stinger Rd": {
          crossStreet1: "Rt 68",
          crossStreet2: "Panorama Dr",
        },
        "Rt 68 EB": {
          crossStreet1: "Stinger Rd",
          crossStreet2: "Panorama Dr",
        },
        "Rt 68 WB": {
          crossStreet1: "Stinger Rd",
          crossStreet2: "Panorama Dr",
        },
        "Panorama Dr": {
          crossStreet1: "Stinger Rd",
          crossStreet2: "Rt 68",
        },
      },
    },
  },
  {
    postal: "280",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0953",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Smoke Ln",
      crossStreet1: "Panorama Dr",
      crossStreet2: "Smoke Tree Rd",
    },
  },
  {
    postal: "281",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0953",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "E. Joshua Way": {
          crossStreet1: "Panorama Dr",
          crossStreet2: "Cat-Claw Ave",
        },
        "Nowhere Rd": {
          crossStreet1: "Smoke-Tree Rd",
          crossStreet2: "Dead End",
        },
        "Cholla Rd": {
          crossStreet1: "Panorama Dr",
          crossStreet2: "Smoke Tree Rd",
        },
        "Panorama Dr": {
          crossStreet1: "Cholla Rd",
          crossStreet2: "E. Joshua Way",
        },
      },
    },
  },
  {
    postal: "282",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0953",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "E. Joshua Way": {
          crossStreet1: "Panorama Dr",
          crossStreet2: "Cat-Claw Ave",
        },
        "E. Joshua Rd": {
          crossStreet1: "Panorama Dr",
          crossStreet2: "Marina Dr",
        },
      },
    },
  },
  {
    postal: "283",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Panorama Dr": {
          crossStreet1: "Zancudo Ave",
          crossStreet2: "Alhambra Dr",
        },
        "Zancudo Ave": {
          crossStreet1: "Panorama Dr",
          crossStreet2: "Moutain View Dr",
        },
        "Moutain View Dr": {
          crossStreet1: "Zancudo Ave",
          crossStreet2: "Alhambra Dr",
        },
        "Alhambra Dr": {
          crossStreet1: "Panorama Dr",
          crossStreet2: "Moutain View Dr",
        },
      },
    },
  },
  {
    postal: "284",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Lolita Ave": {
          crossStreet1: "Algonquin Blvd",
          crossStreet2: "Zancudo Ave",
        },
        "Algonquin Blvd": {
          crossStreet1: "Lolita Ave",
          crossStreet2: "Mountain View Dr",
        },
        "Moutain View Dr": {
          crossStreet1: "Algonquin Blvd",
          crossStreet2: "Zancudo Ave",
        },
        "Zauncudo Ave": {
          crossStreet1: "Lolita Ave",
          crossStreet2: "Mountain View Dr",
        },
      },
    },
  },
  {
    postal: "285",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Panorama Dr": {
          crossStreet1: "Cholla Springs Ave",
          crossStreet2: "Algonquin Blvd",
        },
        "Cholla Springs Ave": {
          crossStreet1: "Panorama Dr",
          crossStreet2: "Mountain View Dr",
        },
        "Mountain View Dr": {
          crossStreet1: "Cholla Springs Ave",
          crossStreet2: "Algonquin Blvd",
        },
        "Algonquin Blvd": {
          crossStreet1: "Panorama Dr",
          crossStreet2: "Mountain View Dr",
        },
      },
    },
  },
  {
    postal: "286",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Panorama Dr": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Cholla Springs Ave",
        },
        "Marina Dr": {
          crossStreet1: "Panorama Dr",
          crossStreet2: "Mountain View Dr",
        },
        "Mountain View Dr": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Cholla Springs Ave",
        },
        "Cholla Springs Ave": {
          crossStreet1: "Panorama Dr",
          crossStreet2: "Mountain View Dr",
        },
      },
    },
  },
  {
    postal: "287",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0912",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr",
      crossStreet1: "Lesbos Ln",
      crossStreet2: "Mountain View Dr",
    },
  },
  {
    postal: "288",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr",
      crossStreet1: "Panorama Dr",
      crossStreet2: "Armadillo Ave",
    },
  },
  {
    postal: "289",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "4", "3", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Mountain View Dr": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Cholla Springs Ave",
        },
        "Marina Dr": {
          crossStreet1: "Mountain View Dr",
          crossStreet2: "Armadillo Ave",
        },
        "Armadillo Ave": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Cholla Springs Ave",
        },
        "Cholla Springs Ave": {
          crossStreet1: "Mountain View Dr",
          crossStreet2: "Armadillo Ave",
        },
      },
    },
  },
  {
    postal: "290",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Marina Dr",
      crossStreet1: "Armadillo Ave",
      crossStreet2: "Niland Ave",
    },
  },
  {
    postal: "291",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Armadillo Ave": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Cholla Springs Ave",
        },
        "Marina Dr": {
          crossStreet1: "Armadillo Ave",
          crossStreet2: "Niland Ave",
        },
        "Niland Ave": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Cholla Springs Ave",
        },
        "Cholla Springs Ave": {
          crossStreet1: "Armadillo Ave",
          crossStreet2: "Niland Ave",
        },
      },
    },
  },
  {
    postal: "292",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Armadillo Ave": {
          crossStreet1: "Cholla Springs Ave",
          crossStreet2: "Algonquin Blvd",
        },
        "Cholla Springs Ave": {
          crossStreet1: "Armadillo Ave",
          crossStreet2: "Niland Ave",
        },
        "Niland Ave": {
          crossStreet1: "Cholla Springs Ave",
          crossStreet2: "Algonquin Blvd",
        },
        "Algonquin Blvd": {
          crossStreet1: "Armadillo Ave",
          crossStreet2: "Niland Ave",
        },
      },
    },
  },
  {
    postal: "293",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Armadillo Ave": {
          crossStreet1: "Algonquin Blvd",
          crossStreet2: "Zancudo Ave",
        },
        "Algonquin Blvd": {
          crossStreet1: "Armadillo Ave",
          crossStreet2: "Niland Ave",
        },
        "Niland Ave": {
          crossStreet1: "Algonquin Blvd",
          crossStreet2: "Zancudo Ave",
        },
        "Zancudo Ave": {
          crossStreet1: "Armadillo Ave",
          crossStreet2: "Niland Ave",
        },
      },
    },
  },
  {
    postal: "294",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Mountain View Dr": {
          crossStreet1: "Zauncudo Ave",
          crossStreet2: "Alhambra Dr",
        },
        "Zauncudo Ave": {
          crossStreet1: "Mountain View Dr",
          crossStreet2: "Niland Ave",
        },
        "Niland Ave": {
          crossStreet1: "Zauncudo Ave",
          crossStreet2: "Alhambra Dr",
        },
        "Alhambra Dr": {
          crossStreet1: "Mountain View Dr",
          crossStreet2: "Niland Ave",
        },
      },
    },
  },
  {
    postal: "295",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Niland Ave": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Algonquin Blvd",
        },
        "Marina Dr": {
          crossStreet1: "Niland Ave",
          crossStreet2: "Algonquin Blvd",
        },
        "Algonquin Blvd": {
          crossStreet1: "Niland Ave",
          crossStreet2: "Marina Dr",
        },
      },
    },
  },
  {
    postal: "296",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Niland Ave": {
          crossStreet1: "Algonquin Blvd",
          crossStreet2: "Zauncudo Ave",
        },
        "Algonquin Blvd": {
          crossStreet1: "Niland Ave",
          crossStreet2: "Marina Dr",
        },
        "Marina Dr": {
          crossStreet1: "Algonquin Blvd",
          crossStreet2: "Zauncudo Ave",
        },
        "Zauncudo Ave": {
          crossStreet1: "Niland Ave",
          crossStreet2: "Marina Dr",
        },
      },
    },
  },
  {
    postal: "297",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0901",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Niland Ave": {
          crossStreet1: "Zancudo Ave",
          crossStreet2: "Alhambra Dr",
        },
        "Zancudo Ave": {
          crossStreet1: "Niland Ave",
          crossStreet2: "Marina Dr",
        },
        "Marina Dr": {
          crossStreet1: "Zancudo Ave",
          crossStreet2: "Alhambra Dr",
        },
        "Alhambra Dr": {
          crossStreet1: "Niland Ave",
          crossStreet2: "Marina Dr",
        },
      },
    },
  },
  {
    postal: "298",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0911",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Marina Dr": {
          crossStreet1: "Niland Ave",
          crossStreet2: "Algonquin Blvd",
        },
        "Algonquin Blvd Ext": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "299",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "0910",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Zancudo Ave": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Dead End",
        },
        "E. Joshua Rd": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Seaview Rd",
        },
      },
    },
  },
  {
    postal: "300",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "SSPD",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "SSPD",
      "BCSO",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "E. Joshua Rd": {
          crossStreet1: "Panorama Dr",
          crossStreet2: "Marina Dr",
        },
        "Marina Dr": {
          crossStreet1: "E. Joshua Rd",
          crossStreet2: "E. Joshua Way",
        },
        "E. Joshua Way": {
          crossStreet1: "Panorama Dr",
          crossStreet2: "Marina Dr",
        },
      },
    },
  },
  {
    postal: "301",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Cat-Claw Ave",
      crossStreet1: "Marina Dr",
      crossStreet2: "Smoke Tree Rd",
    },
  },
  {
    postal: "302",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Nowhere Rd",
      crossStreet1: "Smoke Tree Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "303",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Nowhere Rd",
      crossStreet1: "Smoke Tree Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "304",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cat-Claw Ave": {
          crossStreet1: "Smoke Tree Rd",
          crossStreet2: "Marina Dr",
        },
        "Smoke Tree Rd": {
          crossStreet1: "Cat-Claw Ave",
          crossStreet2: "Smoke Ln",
        },
      },
    },
  },
  {
    postal: "305",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Cat-Claw Ave": {
          crossStreet1: "Rt 68 WB",
          crossStreet2: "Smoke Tree Rd",
        },
        "Yucca Rd": {
          crossStreet1: "Smoke Tree Rd",
          crossStreet2: "Yucca Trail Ln",
        },
        "Rt 68 EB": {
          crossStreet1: "Stinger Rd.",
          crossStreet2: "Rt 13 SB",
        },
        "Rt 68 WB": {
          crossStreet1: "Stinger Rd.",
          crossStreet2: "Rt 13 SB",
        },
      },
    },
  },
  {
    postal: "306",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Cat-Claw Ave",
          crossStreet2: "Rt 13 NB",
        },
        "Rt 68 WB": {
          crossStreet1: "Cat-Claw Ave",
          crossStreet2: "Rt 13 NB",
        },
        "Rt 13 SB": {
          crossStreet1: "Rt 13 MM03.00",
          crossStreet2: "Rt 13 SB to Rt 15 SB",
        },
        "Rt 13 NB": {
          crossStreet1: "Rt 13 MM03.00",
          crossStreet2: "Rt 13 MM02.00",
        },
        "Rt 13 SB to Rt 68 WB Ramp": {
          crossStreet1: "Rt 13 SB",
          crossStreet2: "Rt 68 WB",
        },
        "Rt 68 EB to Rt 13 SB Ramp": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Rt 13 SB",
        },
        "Rt 13 NB to Rt 68 EB Ramp": {
          crossStreet1: "Rt 13 NB",
          crossStreet2: "Rt 68 EB",
        },
        "Rt 68 WB to Rt 13 NB Ramp": {
          crossStreet1: "Rt 68 WB",
          crossStreet2: "Rt 13 NB",
        },
      },
    },
  },
  {
    postal: "307",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Yucca Rd": {
          crossStreet1: "Smoke Tree Rd",
          crossStreet2: "Yucca Trail Ln",
        },
        "Rt 13 SB": {
          crossStreet1: "Rt 13 MM03.00",
          crossStreet2: "Rt 13 MM02.00",
        },
        "Rt 13 NB": {
          crossStreet1: "Rt 13 MM03.00",
          crossStreet2: "Rt 13 MM02.00",
        },
      },
    },
  },
  {
    postal: "308",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 13 SB": {
          crossStreet1: "Rt 13 MM03.00",
          crossStreet2: "Rt 13 MM02.00",
        },
        "Rt 13 NB": {
          crossStreet1: "Rt 13 MM03.00",
          crossStreet2: "Rt 13 MM02.00",
        },
        "Yucca Rd": {
          crossStreet1: "Smoke Tree Rd",
          crossStreet2: "Yucca Trail Ln",
        },
      },
    },
  },
  {
    postal: "309",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Smoke Tree Rd",
      crossStreet1: "Yucca Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "310",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Yucca Loop Trail",
      crossStreet1: "Cat-Claw Trail",
      crossStreet2: "Yucca Trail",
    },
  },
  {
    postal: "311",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "E. Joshua Rd": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Seaview Rd",
        },
        "Cat-Claw Ave": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Rt 13 SB",
        },
      },
    },
  },
  {
    postal: "312",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Yucca Loop Trail",
      crossStreet1: "Cat-Claw Trail",
      crossStreet2: "Yucca Trail",
    },
  },
  {
    postal: "313",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 13 NB": {
          crossStreet1: "Rt 13 MM02.00",
          crossStreet2: "Rt 68 Exit",
        },
        "Rt 13 SB": {
          crossStreet1: "Rt 13 MM02.00",
          crossStreet2: "Rt 13 MM03.00",
        },
        "Yucca Rd": {
          crossStreet1: "Yucca Trail Ln",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "314",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 13 NB": {
          crossStreet1: "Rt 13 MM02.00",
          crossStreet2: "Rt 68 Exit",
        },
        "Rt 13 SB": {
          crossStreet1: "Rt 13 MM02.00",
          crossStreet2: "Rt 13 MM03.00",
        },
        "Cat-Claw Ave": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Rt 13 SB",
        },
      },
    },
  },
  {
    postal: "315",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Cat-Claw Ave",
      crossStreet1: "Marina Dr",
      crossStreet2: "Rt 13 SB",
    },
  },
  {
    postal: "316",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Cat-Claw Ave",
      crossStreet1: "Marina Dr",
      crossStreet2: "Rt 13 SB",
    },
  },
  {
    postal: "317",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "E. Joshua Rd": {
          crossStreet1: "Marina Dr",
          crossStreet2: "Pinto Ln",
        },
        "Seaview Rd": {
          crossStreet1: "E. Joshua Rd",
          crossStreet2: "Dots Ln",
        },
      },
    },
  },
  {
    postal: "318",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 13 SB": {
          crossStreet1: "E. Joshua Rd",
          crossStreet2: "Rt 68 Exit",
        },
        "Rt 13 NB": {
          crossStreet1: "E. Joshua Rd",
          crossStreet2: "Rt 68 Exit",
        },
        "Pinto Ln": {
          crossStreet1: "E. Joshua Rd",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "319",
    twp: "Sandy Shores",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "9538",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "E. Joshua Rd": {
          crossStreet1: "Seaview Rd",
          crossStreet2: "Rt 13 SB",
        },
        "Pinto Ln": {
          crossStreet1: "E. Joshua Rd",
          crossStreet2: "Dead End",
        },
        "Rt 13 SB": {
          crossStreet1: "Rt 13 MM02.00",
          crossStreet2: "E. Joshua Rd",
        },
        "Rt 13 NB": {
          crossStreet1: "Rt 13 MM02.00",
          crossStreet2: "Union Rd",
        },
      },
    },
  },
  {
    postal: "320",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0935",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 13 SB": {
          crossStreet1: "Rt 13 MM02.00",
          crossStreet2: "E. Joshua Rd",
        },
        "Rt 13 NB": {
          crossStreet1: "Rt 13 MM02.00",
          crossStreet2: "Union Rd",
        },
        "Chianski Passage": {
          crossStreet1: "Union Rd",
          crossStreet2: "Dead End",
        },
        "Union Rd": {
          crossStreet1: "Rt 13 NB",
          crossStreet2: "Chianski Passage",
        },
      },
    },
  },
  {
    postal: "321",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chianski Passage",
      crossStreet1: "Union Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "322",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Chianski Passage": {
          crossStreet1: "Union Rd",
          crossStreet2: "Dead End",
        },
        "Rt 13 NB": {
          crossStreet1: "Rt 68 Exit",
          crossStreet2: "Rt 13 MM02.00",
        },
        "Rt 13 SB": {
          crossStreet1: "Rt 68 Exit",
          crossStreet2: "Rt 13 MM02.00",
        },
      },
    },
  },
  {
    postal: "323",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 13 SB": {
          crossStreet1: "Rt 13 MM03.00",
          crossStreet2: "Rt 13 MM02.00",
        },
        "Rt 13 NB": {
          crossStreet1: "Rt 13 MM03.00",
          crossStreet2: "Rt 13 MM02.00",
        },
        "Chianski Passage": {
          crossStreet1: "Union Rd",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "324",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Chianski Passage": {
          crossStreet1: "Union Rd",
          crossStreet2: "Dead End",
        },
        "Rt 13 NB": {
          crossStreet1: "Rt 68 Exit",
          crossStreet2: "Rt 13 MM02.00",
        },
        "Rt 13 SB": {
          crossStreet1: "Rt 68 Exit",
          crossStreet2: "Rt 13 MM02.00",
        },
      },
    },
  },
  {
    postal: "325",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chianski Passage",
      crossStreet1: "Union Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "326",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chianski Passage",
      crossStreet1: "Union Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "327",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chianski Passage",
      crossStreet1: "Union Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "328",
    twp: "Grapeseed",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chianski Passage",
      crossStreet1: "Union Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "329",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "3", "4", "11", "1", "10", "7", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Chianski Passage",
      crossStreet1: "Union Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "330",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Quarry Access Rd",
      crossStreet1: "Senora Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "331",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Quarry Access Rd",
      crossStreet1: "Senora Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "332",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Senora Way",
      crossStreet1: "Windmill Access Rd",
      crossStreet2: "Dynamite Approach Rd",
    },
  },
  {
    postal: "333",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Quarry Access Rd",
      crossStreet1: "Senora Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "334",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Quarry Access Rd": {
          crossStreet1: "Senora Rd",
          crossStreet2: "Dead End",
        },
        "Senora Way": {
          crossStreet1: "Rt 13 NB",
          crossStreet2: "Dynamite Approach Rd",
        },
        "Rt 13 SB to Rt 68 WB Ramp": {
          crossStreet1: "Rt 13 SB",
          crossStreet2: "Rt 68 WB",
        },
        "Rt 68 EB to Rt 13 SB Ramp": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Rt 13 SB",
        },
        "Rt 13 NB to Rt 68 EB Ramp": {
          crossStreet1: "Rt 13 NB",
          crossStreet2: "Rt 68 EB",
        },
        "Rt 68 WB to Rt 13 NB Ramp": {
          crossStreet1: "Rt 68 WB",
          crossStreet2: "Rt 13 NB",
        },
      },
    },
  },
  {
    postal: "335",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Dynomite Approach Rd": {
          crossStreet1: "Senora View",
          crossStreet2: "Senora Way",
        },
        "Senora Way": {
          crossStreet1: "Windmill Access Rd",
          crossStreet2: "Quarry Access Rd",
        },
      },
    },
  },
  {
    postal: "336",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Senora Way",
      crossStreet1: "Windmill Access Rd",
      crossStreet2: "Dynamite Approach Rd",
    },
  },
  {
    postal: "337",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Windmill Access Rd": {
          crossStreet1: "East View Rd",
          crossStreet2: "Senora Way",
        },
        "Senora Way": {
          crossStreet1: "Dynamite Approach Rd",
          crossStreet2: "Power Station Access Rd",
        },
      },
    },
  },
  {
    postal: "338",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0932",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Senora Way",
      crossStreet1: "Windmill Access Rd",
      crossStreet2: "Power Station Access Rd",
    },
  },
  {
    postal: "339",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0940",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Senora Way": {
          crossStreet1: "Windmill Access Rd",
          crossStreet2: "Dynamite Approach Rd",
        },
        "Power Station Access Rd": {
          crossStreet1: "Senora Way",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "340",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0940",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Power Station Access Rd",
      crossStreet1: "Senora Way",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "341",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0952",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Power Station Access Rd",
      crossStreet1: "Senora Way",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "342",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0940",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Power Station Access Rd",
      crossStreet1: "Senora Way",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "343",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0940",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Power Station Access Rd",
      crossStreet1: "Senora Way",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "344",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0940",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Power Station Access Rd",
      crossStreet1: "Senora Way",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "345",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0932",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Senora Way": {
          crossStreet1: "Rt 15 NB",
          crossStreet2: "Windmill Access Rd",
        },
        "Windmill Access Rd": {
          crossStreet1: "Senora Way",
          crossStreet2: "Windmill View",
        },
        "Rt 15 NB": {
          crossStreet1: "Rt 15 MM02.00",
          crossStreet2: "Rt 15 MM03.00",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 15 MM02.00",
          crossStreet2: "Rt 15 MM03.00",
        },
        "Rt 15 SB to Senora Way Ramp": {
          crossStreet1: "Rt 15 SB",
          crossStreet2: "Senora Way",
        },
        "Senora Way to Rt 15 NB Ramp": {
          crossStreet1: "Senora Way",
          crossStreet2: "Rt 15 NB",
        },
        "Senora Way to Rt 15 SB Ramp": {
          crossStreet1: "Senora Way",
          crossStreet2: "Rt 15 SB",
        },
        "Rt 15 NB to Senora Way Ramp": {
          crossStreet1: "Rt 15 NB",
          crossStreet2: "Senora Way",
        },
      },
    },
  },
  {
    postal: "346",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0932",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill Access Rd",
      crossStreet1: "Windmill View",
      crossStreet2: "Senora Way",
    },
  },
  {
    postal: "347",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0932",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill Access Rd",
      crossStreet1: "Windmill View",
      crossStreet2: "Senora Way",
    },
  },
  {
    postal: "348",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0932",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill Access Rd",
      crossStreet1: "Windmill View",
      crossStreet2: "Senora Way",
    },
  },
  {
    postal: "349",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill Access Rd",
      crossStreet1: "Windmill View",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "350",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 15 NB": {
          crossStreet1: "Senora Way Exit",
          crossStreet2: "Rt 15 NB to Rt 13 NB",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 13 SB to Rt 15 SB",
          crossStreet2: "Senora Way Exit",
        },
        "Windmill View": {
          crossStreet1: "Windmill Access Rd",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "351",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill Access Rd",
      crossStreet1: "Windmill View",
      crossStreet2: "East View Rd",
    },
  },
  {
    postal: "352",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 13 NB": {
          crossStreet1: "I1 NB to Rt 13 NB",
          crossStreet2: "Rt 68 Exit",
        },
        "Rt 13 SB": {
          crossStreet1: "I1 to Rt 13 SB",
          crossStreet2: "Rt 68 Exit",
        },
        "Rt 15 NB": {
          crossStreet1: "Senora Way Exit",
          crossStreet2: "Rt 15 NB to Rt 13 NB",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 13 SB to Rt 15 SB",
          crossStreet2: "Senora Way Exit",
        },
      },
    },
  },
  {
    postal: "353",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 15 NB": {
          crossStreet1: "Senora Way Exit",
          crossStreet2: "Rt 15 NB to Rt 13 NB",
        },
        "Windmill View": {
          crossStreet1: "Windmill Access Rd",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "354",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "East View Rd": {
          crossStreet1: "Windmill Access Rd",
          crossStreet2: "Dead End",
        },
        "Windmill Access Rd": {
          crossStreet1: "East View Rd",
          crossStreet2: "Senora Way",
        },
      },
    },
  },
  {
    postal: "355",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0933",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill Access Rd",
      crossStreet1: "East View Rd",
      crossStreet2: "Senora Way",
    },
  },
  {
    postal: "356",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0933",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Senora View",
      crossStreet1: "Dynanite Approach Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "357",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Windmill Access Rd",
      crossStreet1: "East View Rd",
      crossStreet2: "Senora Way",
    },
  },
  {
    postal: "358",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 15 NB": {
          crossStreet1: "Senora Way Exit",
          crossStreet2: "Rt 15 NB to Rt 13 NB",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 13 SB to Rt 15 SB",
          crossStreet2: "Senora Way Exit",
        },
        "Rt 13 NB": {
          crossStreet1: "I1 NB to Rt 13 NB",
          crossStreet2: "Rt 68 Exit",
        },
        "Rt 13 SB": {
          crossStreet1: "Rt 13 SB to I1 SB",
          crossStreet2: "Rt 68 Exit",
        },
        "Windmill Access Rd": {
          crossStreet1: "East View Rd",
          crossStreet2: "Senora Way",
        },
      },
    },
  },
  {
    postal: "359",
    fdDistrict: "09",
    policeDistrict: "BCSO",
    fireBox: "0931",
    fdRunOrder: ["9", "2", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 13 NB": {
          crossStreet1: "I1 NB to Rt 13 NB",
          crossStreet2: "Rt 68 Exit",
        },
        "Rt 13 SB": {
          crossStreet1: "Rt 13 SB to I1 SB",
          crossStreet2: "Rt 68 Exit",
        },
        "Rt 15 NB": {
          crossStreet1: "Senora Way Exit",
          crossStreet2: "Rt 15 NB to Rt 13 NB",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 13 SB to Rt 15 SB",
          crossStreet2: "Senora Way Exit",
        },
        "Windmill Access Rd": {
          crossStreet1: "East View Rd",
          crossStreet2: "Senora Way",
        },
      },
    },
  },
  {
    postal: "360",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0220",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Boilingbroke Approach Rd": {
          crossStreet1: "Boilingbroke Loop",
          crossStreet2: "Rt 68 EB",
        },
        "Rt 13 SB": {
          crossStreet1: "Rt 13 SB to Rt 15 SB",
          crossStreet2: "Rt 68 Exit",
        },
        "Rt 13 NB": {
          crossStreet1: "Rt 15 NB to Rt 13 NB",
          crossStreet2: "Rt 68 Exit",
        },
        "Rt 13 SB to Rt 68 WB Ramp": {
          crossStreet1: "Rt 13 SB",
          crossStreet2: "Rt 68 WB",
        },
        "Rt 68 EB to Rt 13 SB Ramp": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Rt 13 SB",
        },
        "Rt 13 NB to Rt 68 EB Ramp": {
          crossStreet1: "Rt 13 NB",
          crossStreet2: "Rt 68 EB",
        },
        "Rt 68 WB to Rt 13 NB Ramp": {
          crossStreet1: "Rt 68 WB",
          crossStreet2: "Rt 13 NB",
        },
      },
    },
  },
  {
    postal: "361",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Rt 68 MM04.00",
          crossStreet2: "Boilingbroke Approach Rd",
        },
        "Rt 68 WB": {
          crossStreet1: "Rt 68 MM04.00",
          crossStreet2: "Boilingbroke Approach Rd",
        },
        "Satellite Access Rd": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Boilingbroke Approach Rd",
        },
      },
    },
  },
  {
    postal: "362",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0220",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Boilingbroke Approach Rd": {
          crossStreet1: "Boilingbroke Loop",
          crossStreet2: "Rt 68 EB",
        },
        "Boilingbroke Loop": {
          crossStreet1: "Boilingbroke Approach Rd",
          crossStreet2: "Dead End",
        },
        "Rt 13 SB": {
          crossStreet1: "Rt 13 SB to I1 SB",
          crossStreet2: "Rt 68 Exit",
        },
        "Rt 13 NB": {
          crossStreet1: "I1 NB to Rt 13 NB",
          crossStreet2: "Rt 68 Exit",
        },
      },
    },
  },
  {
    postal: "363",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0220",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Rt 68 MM04.00",
          crossStreet2: "Stinger Rd",
        },
        "Rt 68 WB": {
          crossStreet1: "Rt 68 MM04.00",
          crossStreet2: "Stinger Rd",
        },
        "Boilingbroke Access Rd": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Boilingbroke Loop",
        },
        "Boilingbroke Loop": {
          crossStreet1: "Boilingbroke Approach Rd",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "364",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Boilingbroke Loop",
      crossStreet1: "Boilingbroke Approach Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "365",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Boilingbroke Loop",
      crossStreet1: "Boilingbroke Approach Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "366",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 13 SB": {
          crossStreet1: "Rt 13 SB to I1 SB",
          crossStreet2: "Rt 68 Exit",
        },
        "Rt 13 NB": {
          crossStreet1: "I1 NB to Rt 13 NB",
          crossStreet2: "Rt 68 Exit",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 13 SB to Rt 15 SB",
          crossStreet2: "Senora Way Exit",
        },
        "Rt 15 NB": {
          crossStreet1: "Rt 15 NB to Rt 13 NB",
          crossStreet2: "Senora Way Exit",
        },
        "Boilingbroke Loop": {
          crossStreet1: "Boilingbroke Approach Rd",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "367",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Star Ln": {
          crossStreet1: "Roadrunner Rd",
          crossStreet2: "Chancy Ln",
        },
        "Star Ln Ext": {
          crossStreet1: "Chancy Ln",
          crossStreet2: "Dead End",
        },
        "Chancy Ln": {
          crossStreet1: "Redwood Approach Rd",
          crossStreet2: "Roadrunner Rd",
        },
      },
    },
  },
  {
    postal: "368",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "9", "4", "7", "3", "11", "1", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Chancy Ln": {
          crossStreet1: "Roadroadrunner Rd",
          crossStreet2: "Star Ln",
        },
        "Star Ln": {
          crossStreet1: "Roadroadrunner Rd",
          crossStreet2: "Chancy Ln",
        },
        "Roadrunner Rd": {
          crossStreet1: "Star Ln",
          crossStreet2: "Chancy Ln",
        },
      },
    },
  },
  {
    postal: "369",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0214",
    fdRunOrder: ["2", "9", "4", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Senora Rd": {
          crossStreet1: "Star Ln",
          crossStreet2: "Baytree Canyon Rd",
        },
        "Roadrunner Rd": {
          crossStreet1: "Senora Rd",
          crossStreet2: "Star Ln",
        },
      },
    },
  },
  {
    postal: "370",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0214",
    fdRunOrder: ["2", "9", "4", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Redwood Lights Track": {
          crossStreet1: "Redwood Access Rd",
          crossStreet2: "Redwood Approach Rd",
        },
        "Redwood Access Rd": {
          crossStreet1: "Senora Rd",
          crossStreet2: "Dead End",
        },
        "Redwood Approach Rd": {
          crossStreet1: "Chancy Ln",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "371",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0213",
    fdRunOrder: ["2", "9", "4", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Redwood Access Rd",
      crossStreet1: "Senora Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "372",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0217",
    fdRunOrder: ["2", "9", "4", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Rebel Rd",
      crossStreet1: "Cat-Tail Rd",
      crossStreet2: "Rt 68 EB",
    },
  },
  {
    postal: "373",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0207",
    fdRunOrder: ["2", "9", "4", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Senora Rd": {
          crossStreet1: "Cat-Tail Rd",
          crossStreet2: "Harmony Ln",
        },
        "Orbits Folly Ln": {
          crossStreet1: "Cat-Tail Rd",
          crossStreet2: "Harmony Ln",
        },
        "Cat-Tail Rd": {
          crossStreet1: "Orbits Folly Ln",
          crossStreet2: "Senora Rd",
        },
      },
    },
  },
  {
    postal: "374",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "9", "4", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Harmony Ln": {
          crossStreet1: "Baytree Canyon Rd",
          crossStreet2: "Cat-Tail Rd",
        },
        "Senora Rd": {
          crossStreet1: "Baytree Canyon Rd",
          crossStreet2: "Cat-Tail Rd",
        },
        "Baytree Canyon Rd": {
          crossStreet1: "Harmony Ln",
          crossStreet2: "Senora Rd",
        },
      },
    },
  },
  {
    postal: "375",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "9", "4", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Harmony Ln",
      crossStreet1: "Baytree Canyon Rd",
      crossStreet2: "Cat-Tail Rd",
    },
  },
  {
    postal: "376",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Jobe Ln": {
          crossStreet1: "Galileo Bybass",
          crossStreet2: "Rt 68 EB",
        },
        "Galileo Bybass": {
          crossStreet1: "Jobe Ln",
          crossStreet2: "Harmony Relief Rd",
        },
      },
    },
  },
  {
    postal: "377",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Mt Vinewood Dr",
          crossStreet2: "Rt 68 Approach",
        },
        "Rt 68 WB": {
          crossStreet1: "Mt Vinewood Dr",
          crossStreet2: "Rt 68 Approach",
        },
        "Pedro Ln": {
          crossStreet1: "Jobe Ln",
          crossStreet2: "Rt 68 EB",
        },
        "Jobe Ln": {
          crossStreet1: "Mt Vinewood Dr Ext",
          crossStreet2: "Pedro Ln",
        },
      },
    },
  },
  {
    postal: "378",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Mt Vinewood Dr",
          crossStreet2: "Rt 68 Approach",
        },
        "Rt 68 WB": {
          crossStreet1: "Mt Vinewood Dr",
          crossStreet2: "Rt 68 Approach",
        },
        "Harmony Relief Rd": {
          crossStreet1: "Rt 68 WB",
          crossStreet2: "Joshua Rd",
        },
        "Zancudo Relief Rd": {
          crossStreet1: "Rapids Edge Rd",
          crossStreet2: "Harmony Relief Rd",
        },
      },
    },
  },
  {
    postal: "379",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Mt Vinewood Dr": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Lago Pass",
        },
        "Mt Vinewood Dr Ext": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Mt Vinewood Dr",
        },
        "Jobe Ln": {
          crossStreet1: "Mt Vinewood Dr Ext",
          crossStreet2: "Pedro Ln",
        },
        "Rt 68 EB": {
          crossStreet1: "Rt 68 MM02.00",
          crossStreet2: "Pedro Ln",
        },
        "Rt 68 WB": {
          crossStreet1: "Rt 68 MM02.00",
          crossStreet2: "Pedro Ln",
        },
      },
    },
  },
  {
    postal: "380",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Pedro Ln": {
          crossStreet1: "Jobe Ln",
          crossStreet2: "Dead End",
        },
        "Jobe Ln": {
          crossStreet1: "Jobe Ln",
          crossStreet2: "Galileo Bybass",
        },
        "Galileo Bybass": {
          crossStreet1: "Baytree Canyon Rd",
          crossStreet2: "Jobe Ln",
        },
      },
    },
  },
  {
    postal: "381",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Galileo Bybass",
      crossStreet1: "Jobe Ln",
      crossStreet2: "Baytree Canyon Rd",
    },
  },
  {
    postal: "382",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Harmony Ln": {
          crossStreet1: "Baytree Canyon Rd",
          crossStreet2: "Cat-Tail Rd",
        },
        "Baytree Canyon Rd": {
          crossStreet1: "Galileo Bybass",
          crossStreet2: "Chaparral Dr",
        },
      },
    },
  },
  {
    postal: "383",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      availableRoads: {
        "Galileo Bybass": {
          crossStreet1: "Jobe Ln",
          crossStreet2: "Baytree Canyon Rd",
        },
        "Galileo Rd": {
          crossStreet1: "Mt Vinewood Dr",
          crossStreet2: "Baytree Canyon Rd",
        },
      },
    },
  },
  {
    postal: "384",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "9", "1", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Galileo Rd",
      crossStreet1: "Mt Vinewood Dr",
      crossStreet2: "Baytree Canyon Rd",
    },
  },
  {
    postal: "385",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "1", "9", "3", "11", "7", "10", "8", "6", "5"],
    policeRunOrder: [
      "BCSO",
      "SSPD",
      "SAHP",
      "PBPD",
      "RCSO",
      "MBPD",
      "LCSO",
      "LSPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Galileo Trails",
      crossStreet1: "Observatory Approach",
      crossStreet2: "E. Galileo Ave",
    },
  },
  {
    postal: "386",
    fdDistrict: "01",
    policeDistrict: "BCSO",
    fireBox: "0128",
    fdRunOrder: ["1", "2", "8", "9", "10", "4", "6", "7", "3", "5", "11"],
    policeRunOrder: [
      "LSPD",
      "LCSO",
      "SAHP",
      "BCSO",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
    ],
    streets: {
      availableRoads: {
        "Galileo Pass": {
          crossStreet1: "E. Galileo Ave",
          crossStreet2: "Observatory Approach",
        },
        "Galileo Trails": {
          crossStreet1: "Observatory Approach",
          crossStreet2: "E. Galileo Ave",
        },
      },
    },
  },
  {
    postal: "387",
    fdDistrict: "01",
    policeDistrict: "BCSO",
    fireBox: "0128",
    fdRunOrder: ["1", "2", "8", "9", "10", "4", "6", "7", "3", "5", "11"],
    policeRunOrder: [
      "LSPD",
      "LCSO",
      "SAHP",
      "BCSO",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Observatory Approach",
      crossStreet1: "Galileo Pass",
      crossStreet2: "E. Galileo Ave",
    },
  },
  {
    postal: "388",
    fdDistrict: "01",
    policeDistrict: "BCSO",
    fireBox: "0128",
    fdRunOrder: ["1", "2", "8", "9", "10", "4", "6", "7", "3", "5", "11"],
    policeRunOrder: [
      "LSPD",
      "LCSO",
      "SAHP",
      "BCSO",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Observatory Approach",
      crossStreet1: "Galileo Pass",
      crossStreet2: "E. Galileo Ave",
    },
  },
  {
    postal: "389",
    fdDistrict: "01",
    policeDistrict: "BCSO",
    fireBox: "0128",
    fdRunOrder: ["1", "2", "8", "9", "10", "4", "6", "7", "3", "5", "11"],
    policeRunOrder: [
      "LSPD",
      "LCSO",
      "SAHP",
      "BCSO",
      "SSPD",
      "PBPD",
      "RCSO",
      "MBPD",
    ],
    streets: {
      autoFill: true,
      mainStreet: "Observatory Approach",
      crossStreet1: "Galileo Pass",
      crossStreet2: "E. Galileo Ave",
    },
  },
  {
    postal: "390",
    fdDistrict: "01",
    policeDistrict: "LCSO",
    fireBox: "0128",
    fdRunOrder: ["1", "2", "4", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "E. Galileo Ave": {
          crossStreet1: "Mt Vinewood Dr",
          crossStreet2: "Observatory Approach",
        },
        "Mt Vinewood Dr": {
          crossStreet1: "Marlowe Dr",
          crossStreet2: "Galileo Rd",
        },
      },
    },
  },
  {
    postal: "391",
    fdDistrict: "01",
    policeDistrict: "LCSO",
    fireBox: "1513",
    fdRunOrder: ["1", "2", "4", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Marlowe Dr",
      crossStreet1: "N. Sheldon Ave",
      crossStreet2: "Rt 11 NB",
    },
  },
  {
    postal: "392",
    fdDistrict: "01",
    policeDistrict: "LCSO",
    fireBox: "1513",
    fdRunOrder: ["1", "2", "4", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Marlowe Dr",
      crossStreet1: "N. Sheldon Ave",
      crossStreet2: "Rt 11 NB",
    },
  },
  {
    postal: "393",
    fdDistrict: "01",
    policeDistrict: "LCSO",
    fireBox: "1513",
    fdRunOrder: ["1", "2", "4", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr": {
          crossStreet1: "Rt 11 NB",
          crossStreet2: "N. Sheldon Ave",
        },
        "Rt 11 NB": {
          crossStreet1: "Banham Canyon Dr",
          crossStreet2: "Rt 11 MM01.00",
        },
        "Rt 11 SB": {
          crossStreet1: "Banham Canyon Dr",
          crossStreet2: "Rt 11 MM01.00",
        },
      },
    },
  },
  {
    postal: "394",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0453",
    fdRunOrder: ["4", "2", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Mt Vinewood Dr",
      crossStreet1: "E. Galileo Ave",
      crossStreet2: "Galileo Rd",
    },
  },
  {
    postal: "395",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0453",
    fdRunOrder: ["4", "2", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 11 SB": {
          crossStreet1: "Marlowe Dr",
          crossStreet2: "Zancudo Baranca",
        },
        "Rt 11 NB": {
          crossStreet1: "Marlowe Dr",
          crossStreet2: "Zancudo Baranca",
        },
        "Zancudo Baranca": {
          crossStreet1: "Tongva Dr",
          crossStreet2: "Mt Vinewood Dr",
        },
        "Mt Vinewood Dr": {
          crossStreet1: "Marlowe Dr",
          crossStreet2: "Zancudo Baranca",
        },
        "Marlowe Dr": {
          crossStreet1: "Tongva Dr",
          crossStreet2: "Mt Vinewood Dr",
        },
      },
    },
  },
  {
    postal: "396",
    fdDistrict: "02",
    policeDistrict: "LCSO",
    fireBox: "0252",
    fdRunOrder: ["2", "4", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Mt Vinewood Dr": {
          crossStreet1: "Galileo Rd",
          crossStreet2: "E. Galileo Ave",
        },
        "Galileo Rd": {
          crossStreet1: "Mt Vinewood Dr",
          crossStreet2: "Banham Canyon Dr",
        },
      },
    },
  },
  {
    postal: "397",
    fdDistrict: "02",
    policeDistrict: "LCSO",
    fireBox: "0252",
    fdRunOrder: ["2", "4", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Mt Vinewood Dr": {
          crossStreet1: "Galileo Rd",
          crossStreet2: "Zancudo Baranca",
        },
        "Galileo Rd": {
          crossStreet1: "Mt Vinewood Dr",
          crossStreet2: "Banham Canyon Dr",
        },
      },
    },
  },
  {
    postal: "398",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0457",
    fdRunOrder: ["4", "2", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Zancudo Baranca": {
          crossStreet1: "Tongva Dr",
          crossStreet2: "Mt Vinewood Dr",
        },
        "Mt Vinewood Dr": {
          crossStreet1: "Zancudo Baranca",
          crossStreet2: "Lago Pass",
        },
      },
    },
  },
  {
    postal: "399",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0457",
    fdRunOrder: ["4", "2", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Zancudo Baranca",
      crossStreet1: "Tongva Dr",
      crossStreet2: "Mt Vinewood Dr",
    },
  },
  {
    postal: "400",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "LCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Galileo Rd": {
          crossStreet1: "Mt Vinewood Dr",
          crossStreet2: "Banham Canyon Dr",
        },
        "Lago Pass": {
          crossStreet1: "Mt Vinewood Dr",
          crossStreet2: "Galileo Rd",
        },
      },
    },
  },
  {
    postal: "401",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "LCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "4", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Mt Vinewood Dr": {
          crossStreet1: "Zancudo Baranca",
          crossStreet2: "Lago Pass",
        },
        "Lago Pass": {
          crossStreet1: "Mt Vinewood Dr",
          crossStreet2: "Galileo Rd",
        },
      },
    },
  },
  {
    postal: "402",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0457",
    fdRunOrder: ["4", "2", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["BCSO", "SAHP", "LCSO", "LSPD", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Lago Pass": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Mt Vinewood Dr",
        },
        "Mt Vinewood Dr": {
          crossStreet1: "Lago Pass",
          crossStreet2: "Jobe Ln",
        },
      },
    },
  },
  {
    postal: "403",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0457",
    fdRunOrder: ["4", "2", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["BCSO", "SAHP", "LCSO", "LSPD", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Lago Pass",
          crossStreet2: "Mt Vinewood Dr",
        },
        "Rt 68 WB": {
          crossStreet1: "Lago Pass",
          crossStreet2: "Mt Vinewood Dr",
        },
        "Lago Pass": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Mt Vinewood Dr",
        },
      },
    },
  },
  {
    postal: "404",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0457",
    fdRunOrder: ["4", "2", "1", "10", "9", "8", "7", "3", "6", "11", "5"],
    policeRunOrder: ["BCSO", "SAHP", "LCSO", "LSPD", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Zancudo Rd",
          crossStreet2: "Lago Pass",
        },
        "Rt 68 WB": {
          crossStreet1: "Zancudo Rd",
          crossStreet2: "Lago Pass",
        },
        "Tongva Dr": {
          crossStreet1: "Zancudo Baranca",
          crossStreet2: "Rt 68 EB",
        },
        "Ft Zancudo Approach Rd": {
          crossStreet1: "Rt 68 WB",
          crossStreet2: "Rt 1 NB",
        },
      },
    },
  },
  {
    postal: "405",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0457",
    fdRunOrder: ["4", "2", "1", "9", "3", "11", "10", "8", "7", "6", "5"],
    policeRunOrder: ["BCSO", "SAHP", "LCSO", "LSPD", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Tongva Dr": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Zancudo Baranca",
        },
        "Zancudo Baranca": {
          crossStreet1: "Rt 11 NB",
          crossStreet2: "Mt Vinewood Dr",
        },
      },
    },
  },
  {
    postal: "406",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0410",
    fdRunOrder: ["4", "2", "1", "9", "3", "11", "10", "8", "7", "6", "5"],
    policeRunOrder: ["LCSO", "SAHP", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Zancudo Rd": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Zancudo Baranca",
        },
        "Zancudo Baranca": {
          crossStreet1: "Zancudo Rd",
          crossStreet2: "Tongva Dr",
        },
        "Rt 11 NB": {
          crossStreet1: "Zancudo Baranca",
          crossStreet2: "Rt 11 MM01.00",
        },
        "Rt 11 SB": {
          crossStreet1: "Zancudo Baranca",
          crossStreet2: "Rt 11 MM01.00",
        },
        "Zancudo Baranca Ext": {
          crossStreet1: "Rt 11 SB",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "407",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0456",
    fdRunOrder: ["4", "2", "1", "9", "3", "11", "10", "8", "7", "6", "5"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "LCSO", "PBPD", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Rt 68 MM01.00",
          crossStreet2: "Tongva Dr",
        },
        "Rt 68 WB": {
          crossStreet1: "Rt 68 MM01.00",
          crossStreet2: "Tongva Dr",
        },
        "Zancudo Rd": {
          crossStreet1: "Zancudo Baranca",
          crossStreet2: "Rt 68 EB",
        },
      },
    },
  },
  {
    postal: "408",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0410",
    fdRunOrder: ["4", "2", "1", "9", "3", "11", "10", "8", "7", "6", "5"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "LCSO", "PBPD", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Buen Vino Rd": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Banham Canyon Dr",
        },
        "Zancudo Rd": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Zancudo Baranca",
        },
      },
    },
  },
  {
    postal: "409",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0410",
    fdRunOrder: ["4", "2", "1", "9", "3", "11", "10", "8", "7", "6", "5"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "LCSO", "PBPD", "LSPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buen Vino Rd",
      crossStreet1: "Rt 68 EB",
      crossStreet2: "Banham Canyon Dr",
    },
  },
  {
    postal: "410",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0410",
    fdRunOrder: ["4", "2", "1", "9", "3", "11", "10", "8", "7", "6", "5"],
    policeRunOrder: ["LCSO", "SAHP", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buen Vino Rd",
      crossStreet1: "Rt 68 EB",
      crossStreet2: "Banham Canyon Dr",
    },
  },
  {
    postal: "411",
    fdDistrict: "04",
    policeDistrict: "SAHP",
    fireBox: "0454",
    fdRunOrder: ["4", "2", "1", "8", "10", "9", "3", "11", "7", "6", "5"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 11 SB": {
          crossStreet1: "Rt 11 MM01.00",
          crossStreet2: "Zancudo Baranca",
        },
        "Rt 11 NB": {
          crossStreet1: "Zancudo Baranca",
          crossStreet2: "Rt 11 MM01.00",
        },
      },
    },
  },
  {
    postal: "412",
    fdDistrict: "04",
    policeDistrict: "SAHP",
    fireBox: "0454",
    fdRunOrder: ["4", "1", "2", "8", "10", "9", "3", "11", "7", "6", "5"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 11 SB": {
          crossStreet1: "Rt 11 MM01.00",
          crossStreet2: "Marlowe Dr",
        },
        "Rt 11 NB": {
          crossStreet1: "Marlowe Dr",
          crossStreet2: "Rt 11 MM01.00",
        },
      },
    },
  },
  {
    postal: "413",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0454",
    fdRunOrder: ["4", "2", "8", "1", "10", "9", "3", "11", "7", "6", "5"],
    policeRunOrder: ["LCSO", "SAHP", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Banham Canyon Dr": {
          crossStreet1: "Buen Vino Rd",
          crossStreet2: "Tongva Dr",
        },
        "Buen Vino Rd": {
          crossStreet1: "Banham Canyon Dr",
          crossStreet2: "Rt 68 EB",
        },
        "Rt 11 NB": {
          crossStreet1: "Banham Canyon Dr",
          crossStreet2: "Zancudo Baranca",
        },
        "Rt 11 SB": {
          crossStreet1: "Banham Canyon Dr",
          crossStreet2: "Zancudo Baranca",
        },
      },
    },
  },
  {
    postal: "414",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0410",
    fdRunOrder: ["4", "2", "8", "1", "10", "9", "3", "11", "7", "6", "5"],
    policeRunOrder: ["LCSO", "SAHP", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buen Vino Rd",
      crossStreet1: "Rt 68 EB",
      crossStreet2: "Banham Canyon Dr",
    },
  },
  {
    postal: "415",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0454",
    fdRunOrder: ["4", "2", "8", "1", "10", "9", "3", "11", "7", "6", "5"],
    policeRunOrder: ["LCSO", "SAHP", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buen Vino Rd",
      crossStreet1: "Rt 68 EB",
      crossStreet2: "Banham Canyon Dr",
    },
  },
  {
    postal: "416",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "BCSO",
    fireBox: "0410",
    fdRunOrder: ["4", "2", "3", "1", "9", "8", "10", "11", "7", "6", "5"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Rt 1 NB",
          crossStreet2: "Zancudo Rd",
        },
        "Rt 68 WB": {
          crossStreet1: "Rt 1 NB",
          crossStreet2: "Zancudo Rd",
        },
        "Buen Vino Rd": {
          crossStreet1: "Rt 68 EB",
          crossStreet2: "Banham Canyon Rd",
        },
      },
    },
  },
  {
    postal: "417",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0454",
    fdRunOrder: ["4", "2", "8", "1", "10", "9", "3", "11", "7", "6", "5"],
    policeRunOrder: ["LCSO", "SAHP", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buen Vino Rd",
      crossStreet1: "Rt 68 EB",
      crossStreet2: "Banham Canyon Dr",
    },
  },
  {
    postal: "418",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "SAHP",
    fireBox: "0456",
    fdRunOrder: ["4", "2", "3", "1", "9", "8", "10", "11", "7", "6", "5"],
    policeRunOrder: ["SAHP", "BCSO", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 68 EB": {
          crossStreet1: "Rt 1 NB",
          crossStreet2: "Buen Vino Rd",
        },
        "Rt 68 WB": {
          crossStreet1: "Rt 1 NB",
          crossStreet2: "Buen Vino Rd",
        },
      },
    },
  },
  {
    postal: "419",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "SAHP",
    fireBox: "0455",
    fdRunOrder: ["4", "2", "3", "8", "9", "1", "10", "11", "7", "6", "5"],
    policeRunOrder: ["SAHP", "BCSO", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 1 NB": {
          crossStreet1: "Rt 1 MM02.00",
          crossStreet2: "Rt 1 MM03.00",
        },
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM02.00",
          crossStreet2: "Rt 1 MM03.00",
        },
      },
    },
  },
  {
    postal: "420",
    twp: "Zancudo",
    fdDistrict: "04",
    policeDistrict: "SAHP",
    fireBox: "0455",
    fdRunOrder: ["4", "2", "3", "8", "9", "1", "10", "11", "7", "6", "5"],
    policeRunOrder: ["SAHP", "BCSO", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 1 NB": {
          crossStreet1: "Rt 1 MM02.00",
          crossStreet2: "Rt 68",
        },
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM02.00",
          crossStreet2: "Rt 68",
        },
      },
    },
  },
  {
    postal: "421",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0455",
    fdRunOrder: ["4", "2", "3", "8", "9", "1", "10", "11", "7", "6", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buen Vino Rd",
      crossStreet1: "Rt 68 EB",
      crossStreet2: "Banham Canyon Dr",
    },
  },
  {
    postal: "422",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0455",
    fdRunOrder: ["4", "2", "3", "8", "9", "1", "10", "11", "7", "6", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Buen Vino Rd": {
          crossStreet1: "Banham Canyon Dr",
          crossStreet2: "Rt 68 EB",
        },
        "Banham Canyon Dr": {
          crossStreet1: "Buen Vino Rd",
          crossStreet2: "Rt 11 SB",
        },
      },
    },
  },
  {
    postal: "423",
    fdDistrict: "04",
    policeDistrict: "SAHP",
    fireBox: "0455",
    fdRunOrder: ["4", "2", "8", "3", "9", "1", "10", "11", "7", "6", "5"],
    policeRunOrder: ["SAHP", "BCSO", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 1 NB": {
          crossStreet1: "Rt 1 MM02.00",
          crossStreet2: "Rt 68",
        },
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM02.00",
          crossStreet2: "Rt 68",
        },
      },
    },
  },
  {
    postal: "424",
    twp: "Chumash",
    fdDistrict: "04",
    policeDistrict: "SAHP",
    fireBox: "0455",
    fdRunOrder: ["4", "2", "8", "3", "9", "1", "10", "11", "7", "6", "5"],
    policeRunOrder: ["SAHP", "BCSO", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 1 NB": {
          crossStreet1: "Barbareno Dr",
          crossStreet2: "Rt 1 MM02.00",
        },
        "Rt 1 SB": {
          crossStreet1: "Barbareno Dr",
          crossStreet2: "Rt 1 MM02.00",
        },
      },
    },
  },
  {
    postal: "425",
    twp: "Chumash",
    fdDistrict: "04",
    policeDistrict: "LCSO",
    fireBox: "0420",
    fdRunOrder: ["4", "2", "8", "1", "3", "9", "10", "11", "7", "6", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Banham Canyon Dr",
      crossStreet1: "Rt 1 NB",
      crossStreet2: "Buen Vino Rd",
    },
  },
  {
    postal: "426",
    twp: "Chumash",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "4", "1", "2", "3", "10", "9", "6", "7", "11", "5"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Barbareno Dr",
      crossStreet1: "Rt 1 SB",
      crossStreet2: "Rt 1 SB",
    },
  },
  {
    postal: "427",
    twp: "Chumash",
    fdDistrict: "08",
    policeDistrict: "SAHP",
    fireBox: "0855",
    fdRunOrder: ["8", "4", "1", "2", "3", "10", "9", "6", "7", "11", "5"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Banham Canyon Dr": {
          crossStreet1: "Rt 1 NB",
          crossStreet2: "Buen Vino Rd",
        },
        "Rt 1 NB": {
          crossStreet1: "Barbareno Dr",
          crossStreet2: "Rt 1 MM02.00",
        },
        "Rt 1 SB": {
          crossStreet1: "Barbareno Dr",
          crossStreet2: "Rt 1 MM02.00",
        },
      },
    },
  },
  {
    postal: "428",
    twp: "Chumash",
    fdDistrict: "08",
    policeDistrict: "LCSO",
    fireBox: "0850",
    fdRunOrder: ["8", "4", "1", "2", "3", "10", "9", "6", "7", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Banham Canyon Dr",
      crossStreet1: "Buen Vino Rd",
      crossStreet2: "N. Rockford Dr",
    },
  },
  {
    postal: "429",
    fdDistrict: "08",
    policeDistrict: "LCSO",
    fireBox: "0854",
    fdRunOrder: ["8", "4", "1", "2", "3", "10", "9", "6", "7", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Banham Canyon Dr",
      crossStreet1: "Buen Vino Rd",
      crossStreet2: "N. Rockford Dr",
    },
  },
  {
    postal: "430",
    fdDistrict: "01",
    policeDistrict: "SAHP",
    fireBox: "1513",
    fdRunOrder: ["1", "8", "4", "2", "10", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Banham Canyon Dr": {
          crossStreet1: "Buen Vino Rd",
          crossStreet2: "N. Rockford Dr",
        },
        "N. Rockford Dr": {
          crossStreet1: "Marlowe Dr",
          crossStreet2: "Ace Jones Dr",
        },
      },
    },
  },
  {
    postal: "431",
    fdDistrict: "08",
    policeDistrict: "LCSO",
    fireBox: "0854",
    fdRunOrder: ["8", "4", "1", "2", "3", "10", "9", "6", "7", "11", "5"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Banham Canyon Dr": {
          crossStreet1: "Buen Vino Rd",
          crossStreet2: "N. Rockford Dr",
        },
        "N. Rockford Dr": {
          crossStreet1: "Banham Canyon Dr",
          crossStreet2: "Ace Jones Dr",
        },
      },
    },
  },
  {
    postal: "432",
    fdDistrict: "08",
    policeDistrict: "LCSO",
    fireBox: "0850",
    fdRunOrder: ["8", "1", "4", "10", "6", "2", "7", "5", "9", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Kortz Dr": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Dead End",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 MM01.00",
          crossStreet2: "Inesno Rd",
        },
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM01.00",
          crossStreet2: "Inesno Rd",
        },
      },
    },
  },
  {
    postal: "433",
    twp: "Chumash",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "4", "1", "10", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Barbareno Dr",
      crossStreet1: "Rt 1 SB",
      crossStreet2: "Rt 1 SB",
    },
  },
  {
    postal: "434",
    twp: "Chumash",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "4", "1", "10", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Barbareno Dr",
      crossStreet1: "Rt 1 SB",
      crossStreet2: "Rt 1 SB",
    },
  },
  {
    postal: "435",
    twp: "Chumash",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "4", "1", "10", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Barbareno Dr": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Rt 1 SB",
        },
        "Rt 1 NB": {
          crossStreet1: "Barbareno Dr",
          crossStreet2: "Inesno Rd",
        },
        "Rt 1 SB": {
          crossStreet1: "Barbareno Dr",
          crossStreet2: "Inesno Rd",
        },
      },
    },
  },
  {
    postal: "436",
    twp: "Chumash",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0828",
    fdRunOrder: ["8", "4", "1", "10", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Barbareno Dr",
          crossStreet2: "Rt 1 MM01.00",
        },
        "Rt 1 NB": {
          crossStreet1: "Barbareno Dr",
          crossStreet2: "Rt 1 MM01.00",
        },
        "Inesno Rd": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "437",
    twp: "Chumash",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0828",
    fdRunOrder: ["8", "4", "1", "10", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Inesno Rd",
          crossStreet2: "Rt 1 MM01.00",
        },
        "Rt 1 NB": {
          crossStreet1: "Inesno Rd",
          crossStreet2: "Rt 1 MM01.00",
        },
        "Inesno Rd": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "438",
    twp: "Chumash",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0828",
    fdRunOrder: ["8", "4", "1", "10", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Inesno Rd",
          crossStreet2: "Rt 1 MM01.00",
        },
        "Rt 1 NB": {
          crossStreet1: "Inesno Rd",
          crossStreet2: "Rt 1 MM01.00",
        },
        "Inesno Rd": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Rt 1 SB @ MM01.00",
        },
      },
    },
  },
  {
    postal: "439",
    twp: "Chumash",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0826",
    fdRunOrder: ["8", "4", "1", "10", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Rt 1 MM01.00",
          crossStreet2: "W. Eclipse Blvd",
        },
        "Rt 1 NB": {
          crossStreet1: "Rt 1 MM01.00",
          crossStreet2: "W. Eclipse Blvd",
        },
        "Inesno Rd": {
          crossStreet1: "Rt 1 SB",
          crossStreet2: "Rt 1 SB",
        },
      },
    },
  },
  {
    postal: "440",
    twp: "Chumash",
    fdDistrict: "08",
    policeDistrict: "SAHP",
    fireBox: "0824",
    fdRunOrder: ["8", "1", "10", "4", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Inesno Rd",
          crossStreet2: "W. Eclipse Blvd",
        },
        "Rt 1 NB": {
          crossStreet1: "Inesno Rd",
          crossStreet2: "W. Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "441",
    twp: "Chumash",
    fdDistrict: "08",
    policeDistrict: "SAHP",
    fireBox: "0824",
    fdRunOrder: ["8", "1", "10", "4", "2", "6", "7", "5", "3", "9", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 1 SB": {
          crossStreet1: "Inesno Rd",
          crossStreet2: "W. Eclipse Blvd",
        },
        "Rt 1 NB": {
          crossStreet1: "Inesno Rd",
          crossStreet2: "W. Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "442",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0849",
    fdRunOrder: ["8", "1", "10", "6", "4", "2", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Kortz Dr",
      crossStreet1: "N. Rockford Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "443",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0849",
    fdRunOrder: ["8", "1", "10", "6", "4", "2", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Kortz Dr",
      crossStreet1: "N. Rockford Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "444",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0848",
    fdRunOrder: ["8", "1", "10", "6", "4", "2", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "N. Rockford Dr",
      crossStreet1: "Banham Canyon Dr",
      crossStreet2: "Ace Jones Dr",
    },
  },
  {
    postal: "445",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0847",
    fdRunOrder: ["8", "1", "10", "6", "4", "2", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "N. Rockford Dr",
      crossStreet1: "Ace Jones Dr",
      crossStreet2: "Richman St",
    },
  },
  {
    postal: "446",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0850",
    fdRunOrder: ["8", "1", "10", "6", "4", "2", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Rockford Dr": {
          crossStreet1: "Ace Jones Dr",
          crossStreet2: "Richman St",
        },
        "Kortz Dr": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "447",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0850",
    fdRunOrder: ["8", "1", "10", "6", "4", "2", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Rockford Dr": {
          crossStreet1: "Ace Jones Dr",
          crossStreet2: "Picture Perfect Dr",
        },
        "Kortz Dr": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "448",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0850",
    fdRunOrder: ["8", "1", "10", "6", "4", "2", "7", "5", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Kortz Dr": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Dead End",
        },
        "N. Rockford Dr": {
          crossStreet1: "Picture Perfect Dr",
          crossStreet2: "W. Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "449",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0144",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Rockford Dr": {
          crossStreet1: "Picture Perfect Dr",
          crossStreet2: "W. Eclipse Blvd",
        },
        "Sam Austin Dr": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "Dead End",
        },
        "W. Eclipse Blvd": {
          crossStreet1: "Sam Austin Dr",
          crossStreet2: "Dorset Dr",
        },
        "Dorset Dr": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "W. Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "450",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0107",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dorset Dr": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "Blvd Del Perro",
        },
        "W. Eclipse Blvd": {
          crossStreet1: "Hardy Way",
          crossStreet2: "Dorset Dr",
        },
      },
    },
  },
  {
    postal: "451",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0107",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "W. Eclipse Blvd": {
          crossStreet1: "Hardy Way",
          crossStreet2: "Greenwhich Pl",
        },
        "Mad Wayne Thunder Dr": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "Blvd Del Perro",
        },
      },
    },
  },
  {
    postal: "452",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0144",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Rockford Dr": {
          crossStreet1: "Picture Perfect Dr",
          crossStreet2: "Dorset Dr",
        },
        "Picture Perfect Dr": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Americano Way",
        },
        "Americano Way": {
          crossStreet1: "Picture Perfect Dr",
          crossStreet2: "W. Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "453",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0144",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Americano Way": {
          crossStreet1: "Picture Perfect Dr",
          crossStreet2: "W. Eclipse Blvd",
        },
        "Picture Perfect Dr": {
          crossStreet1: "Americano Way",
          crossStreet2: "Hardy Way",
        },
        "Hardy Way": {
          crossStreet1: "Picture Perfect Dr",
          crossStreet2: "W. Eclipse Blvd",
        },
        "W. Eclipse Blvd": {
          crossStreet1: "Hardy Way",
          crossStreet2: "Americano Way",
        },
      },
    },
  },
  {
    postal: "454",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0103",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Rockford Dr": {
          crossStreet1: "Richman St",
          crossStreet2: "Picture Perfect Dr",
        },
        "Richman St": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Picture Perfect Dr",
        },
        "Picture Perfect Dr": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Richman St",
        },
      },
    },
  },
  {
    postal: "455",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0103",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Richman St": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Picture Perfect Dr",
        },
        "Picture Perfect Dr": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Richman St",
        },
      },
    },
  },
  {
    postal: "456",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0103",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Rockford Dr": {
          crossStreet1: "Unknown Rd",
          crossStreet2: "Richman St",
        },
        "Unknown Rd": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Dead End",
        },
        "Richman St": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Picture Perfect Dr",
        },
      },
    },
  },
  {
    postal: "457",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0104",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Rockford Dr": {
          crossStreet1: "Banham Canyon Dr",
          crossStreet2: "Ace Jones Dr",
        },
        "Ace Jones Dr": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Mad Wayne Thunder Dr",
        },
      },
    },
  },
  {
    postal: "458",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "1513",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Ace Jones Dr": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Mad Wayne Thunder Dr",
        },
        "Unknown Rd": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "459",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0104",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Unknown Rd": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Dead End",
        },
        "Richman St": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Picture Perfect Dr",
        },
      },
    },
  },
  {
    postal: "460",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0105",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Ace Jones Dr",
      crossStreet1: "N. Rockford Dr",
      crossStreet2: "Mad Wayne Thunder Dr",
    },
  },
  {
    postal: "461",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0153",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "N. Sheldon Ave",
        },
        "N. Sheldon Ave": {
          crossStreet1: "Hangman Ave",
          crossStreet2: "Ace Jones Dr",
        },
      },
    },
  },
  {
    postal: "462",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0102",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hangman Ave": {
          crossStreet1: "N. Sheldon Ave",
          crossStreet2: "Mad Wayne Thunder Dr",
        },
        "Mad Wayne Thunder Dr": {
          crossStreet1: "Ace Jones Dr",
          crossStreet2: "S. Mo Milton Dr",
        },
      },
    },
  },
  {
    postal: "463",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0102",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hardy Way": {
          crossStreet1: "Picture Perfect Dr",
          crossStreet2: "W. Eclipse Blvd",
        },
        "Picture Perfect Dr": {
          crossStreet1: "Hardy Way",
          crossStreet2: "Greenwhich Pl",
        },
        "Greenwhich Pl": {
          crossStreet1: "Picture Perfect Dr",
          crossStreet2: "W. Eclipse Blvd",
        },
        "W. Eclipse Blvd": {
          crossStreet1: "Hardy Way",
          crossStreet2: "Greenwhich Pl",
        },
      },
    },
  },
  {
    postal: "464",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0102",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Greenwhich Pl": {
          crossStreet1: "Picture Perfect Dr",
          crossStreet2: "W. Eclipse Blvd",
        },
        "Picture Perfect Dr": {
          crossStreet1: "Greenwhich Pl",
          crossStreet2: "Mad Wayne Thunder Dr",
        },
        "Mad Wayne Thunder Dr": {
          crossStreet1: "Picture Perfect Dr",
          crossStreet2: "W. Eclipse Blvd",
        },
        "W. Eclipse Blvd": {
          crossStreet1: "Greenwhich Pl",
          crossStreet2: "Mad Wayne Thunder Dr",
        },
      },
    },
  },
  {
    postal: "465",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0102",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "S. Mo Milton Dr": {
          crossStreet1: "Mad Wayne Thunder Dr",
          crossStreet2: "Picture Perfect Dr",
        },
        "Mad Wayne Thunder Dr": {
          crossStreet1: "S. Mo Milton Dr",
          crossStreet2: "Picture Perfect Dr",
        },
      },
    },
  },
  {
    postal: "466",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0133",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Sheldon Ave": {
          crossStreet1: "Hangman Ave",
          crossStreet2: "Hillcrest Ave",
        },
        "Hillcrest Ridge Access Rd": {
          crossStreet1: "N. Sheldon Ave",
          crossStreet2: "Picture Perfect Dr",
        },
      },
    },
  },
  {
    postal: "467",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Sheldon Ave": {
          crossStreet1: "Hillcrest Ridge Access Rd",
          crossStreet2: "Normandy Dr",
        },
        "Hillcrest Ave": {
          crossStreet1: "N. Sheldon Ave",
          crossStreet2: "Normandy Dr",
        },
      },
    },
  },
  {
    postal: "468",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hillcrest Ridge Access Rd": {
          crossStreet1: "N. Sheldon Ave",
          crossStreet2: "Picture Perfect Dr",
        },
        "S. Mo Milton Dr": {
          crossStreet1: "Mad Wayne Thunder Dr",
          crossStreet2: "Picture Perfect Dr",
        },
      },
    },
  },
  {
    postal: "469",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0102",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Mad Wayne Thunder Dr": {
          crossStreet1: "S. Mo Milton Dr",
          crossStreet2: "Picture Perfect Dr",
        },
        "Picture Perfect Dr": {
          crossStreet1: "Mad Wayne Thunder Dr",
          crossStreet2: "S. Mo Milton Dr",
        },
      },
    },
  },
  {
    postal: "470",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Greenwich Way": {
          crossStreet1: "Mad Wayne Thunder Dr",
          crossStreet2: "Dunstable Dr",
        },
        "Dunstable Dr": {
          crossStreet1: "Picture Perfect Dr",
          crossStreet2: "W. Eclipse Blvd",
        },
        "Dunstable Ln": {
          crossStreet1: "Dunstable Dr",
          crossStreet2: "S. Mo Milton Dr",
        },
      },
    },
  },
  {
    postal: "471",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dunstable Dr": {
          crossStreet1: "Greenwich Way",
          crossStreet2: "W. Eclipse Blvd",
        },
        "Dunstable Ln": {
          crossStreet1: "Dunstable Dr",
          crossStreet2: "S. Mo Milton Dr",
        },
        "S. Mo Milton Dr": {
          crossStreet1: "Dunstable Ln",
          crossStreet2: "Rockford Dr",
        },
        "Rockford Dr": {
          crossStreet1: "S. Mo Milton Dr",
          crossStreet2: "W. Eclipse Blvd",
        },
        "W. Eclipse Blvd": {
          crossStreet1: "Dunstable Dr",
          crossStreet2: "Rockford Dr",
        },
      },
    },
  },
  {
    postal: "472",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "S. Mo Milton Dr": {
          crossStreet1: "Picture Perfect Dr",
          crossStreet2: "Rockford Dr",
        },
        "Picture Perfect Dr": {
          crossStreet1: "S. Mo Milton Dr",
          crossStreet2: "Milton Rd",
        },
      },
    },
  },
  {
    postal: "473",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "S. Mo Milton Dr": {
          crossStreet1: "Rockford Dr",
          crossStreet2: "W. Eclipse Blvd",
        },
        "Milton Rd": {
          crossStreet1: "Cox Way",
          crossStreet2: "W. Eclipse Blvd",
        },
        "W. Eclipse Blvd": {
          crossStreet1: "S. Mo Milton Dr",
          crossStreet2: "Milton Rd",
        },
      },
    },
  },
  {
    postal: "474",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Picture Perfect Dr": {
          crossStreet1: "Hillcrest Ridge Access Rd",
          crossStreet2: "Milton Rd",
        },
        "Milton Rd": {
          crossStreet1: "Picture Perfect Dr",
          crossStreet2: "Cox Way",
        },
      },
    },
  },
  {
    postal: "475",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Picture Perfect Dr": {
          crossStreet1: "S. Mo Milton Dr",
          crossStreet2: "Hillcrest Ridge Access Rd",
        },
        "Hillcrest Ridge Access Rd": {
          crossStreet1: "N. Sheldon Ave",
          crossStreet2: "Picture Perfect Dr",
        },
      },
    },
  },
  {
    postal: "476",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "S. Mo Milton Dr": {
          crossStreet1: "Mad Wayne Thunder Dr",
          crossStreet2: "Picture Perfect Dr",
        },
        "Picture Perfect Dr": {
          crossStreet1: "S. Mo Milton Dr",
          crossStreet2: "Milton Rd",
        },
      },
    },
  },

  {
    postal: "477",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hillcrest Ave": {
          crossStreet1: "N. Sheldon Ave",
          crossStreet2: "Normandy Dr",
        },
        "Hillcrest Ridge Access Rd": {
          crossStreet1: "N. Sheldon Ave",
          crossStreet2: "Picture Perfect Dr",
        },
      },
    },
  },
  {
    postal: "478",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Milton Rd",
      crossStreet1: "Didion Dr",
      crossStreet2: "Picture Perfect Dr",
    },
  },
  {
    postal: "479",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Hillcrest Ave",
      crossStreet1: "N. Sheldon Ave",
      crossStreet2: "Normandy Dr",
    },
  },
  {
    postal: "480",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "6", "7", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hillcrest Ave": {
          crossStreet1: "N. Sheldon Ave",
          crossStreet2: "Normandy Dr",
        },
        "Hillcrest Ridge Access Rd": {
          crossStreet1: "N. Sheldon Ave",
          crossStreet2: "Picture Perfect Dr",
        },
      },
    },
  },
  {
    postal: "481",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "N. Sheldon Ave": {
          crossStreet1: "Hillcrest Ave",
          crossStreet2: "Normandy Dr",
        },
        "Normandy Dr": {
          crossStreet1: "N. Sheldon Ave",
          crossStreet2: "Hillcrest Ave",
        },
      },
    },
  },
  {
    postal: "482",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "1513",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Lake Vinewood E",
        },
        "Mt Vinewood Dr": {
          crossStreet1: "E. Galileo Ave",
          crossStreet2: "Marlowe Dr",
        },
        "Milton Rd": {
          crossStreet1: "N. Sheldon Ave",
          crossStreet2: "Normandy Dr",
        },
      },
    },
  },
  {
    postal: "483",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Normandy Dr",
      crossStreet1: "N. Sheldon Ave",
      crossStreet2: "Milton Rd",
    },
  },
  {
    postal: "484",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Milton Rd": {
          crossStreet1: "N. Sheldon Ave",
          crossStreet2: "Normandy Dr",
        },
        "Normandy Dr": {
          crossStreet1: "N. Sheldon Ave",
          crossStreet2: "Hillcrest Ave",
        },
      },
    },
  },
  {
    postal: "485",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0152",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Marlowe Dr",
      crossStreet1: "Milton Rd",
      crossStreet2: "Lake Vinewood E",
    },
  },
  {
    postal: "486",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Milton Rd": {
          crossStreet1: "N. Sheldon Ave",
          crossStreet2: "Normandy Dr",
        },
        "Kimble Hill Dr": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Lake Vinewood Dr",
        },
      },
    },
  },
  {
    postal: "487",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Miton Rd": {
          crossStreet1: "Kimble Hill Dr",
          crossStreet2: "Didion Dr",
        },
        "Kimble Hill Dr": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Lake Vinewood Dr",
        },
        "Didion Dr": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Whispymound Dr",
        },
      },
    },
  },
  {
    postal: "488",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Milton Rd": {
          crossStreet1: "Didion Dr",
          crossStreet2: "Cox Way",
        },
        "Didion Dr": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Cox Way",
        },
        "Cox Way": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Didion Dr",
        },
      },
    },
  },
  {
    postal: "489",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Milton Rd": {
          crossStreet1: "Cox Way",
          crossStreet2: "Eclipse Blvd",
        },
        "Cox Way": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Didion Dr",
        },
        "Didion Dr": {
          crossStreet1: "Cox Way",
          crossStreet2: "Didion Dr",
        },
      },
    },
  },
  {
    postal: "490",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0122",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Didion Dr": {
          crossStreet1: "Cox Way",
          crossStreet2: "Las Lagunas Blvd",
        },
        "Eclipse Blvd": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Sam Vitus Blvd",
        },
      },
    },
  },
  {
    postal: "491",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0121",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Didion Dr": {
          crossStreet1: "Cox Way",
          crossStreet2: "Las Lagunas Blvd",
        },
        "Eclipse Blvd": {
          crossStreet1: "Milton Rd",
          crossStreet2: "N. Archer Ave",
        },
      },
    },
  },
  {
    postal: "492",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0122",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Cox Way": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Didion Dr",
        },
        "Didion Dr": {
          crossStreet1: "Cox Way",
          crossStreet2: "Las Lagunas Blvd",
        },
      },
    },
  },
  {
    postal: "493",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0119",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Didion Dr": {
          crossStreet1: "Whispymound Dr",
          crossStreet2: "Didion Dr",
        },
        "Whispymound Dr": {
          crossStreet1: "Didion Dr",
          crossStreet2: "Wild Oats Dr",
        },
      },
    },
  },
  {
    postal: "494",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0132",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Didion Dr": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Whispymound Dr",
        },
        "Kimble Hill Dr": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Lake Vinewood Dr",
        },
        "Whispymound Dr": {
          crossStreet1: "Didion Dr",
          crossStreet2: "Wild Oats Dr",
        },
      },
    },
  },
  {
    postal: "495",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0152",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Marlowe Dr",
      crossStreet1: "Milton Rd",
      crossStreet2: "Lake Vinewood E",
    },
  },
  {
    postal: "496",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0134",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Lake Vinewood E",
        },
        "Lake Vinewood E": {
          crossStreet1: "Marlowe Dr",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "497",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0152",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Marlowe Dr",
      crossStreet1: "Lake Vinewood E",
      crossStreet2: "Baytree Canyon Rd",
    },
  },
  {
    postal: "498",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0134",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Lake Vinewood E",
      crossStreet1: "Marlowe Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "499",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0134",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Lake Vinewood E",
      crossStreet1: "Marlowe Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "500",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0134",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Lake Vinewood E",
      crossStreet1: "Marlowe Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "501",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0127",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Kimble Hill Dr": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Lake Vinewood Dr",
        },
        "Lake Vinewood Dr": {
          crossStreet1: "Marlowe Dr",
          crossStreet2: "Baytree Canyon Rd",
        },
      },
    },
  },
  {
    postal: "502",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0119",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Whispymound Dr": {
          crossStreet1: "Wild Oats Dr",
          crossStreet2: "Baytree Canyon Rd",
        },
        "Wild Oats Dr": {
          crossStreet1: "Whispymound Dr",
          crossStreet2: "Baytree Canyon Rd",
        },
      },
    },
  },
  {
    postal: "503",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0121",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Eclipse Blvd": {
          crossStreet1: "San Vitus Blvd",
          crossStreet2: "N. Archer Ave",
        },
        "Didion Dr": {
          crossStreet1: "Cox Way",
          crossStreet2: "Las Lagunas Blvd",
        },
      },
    },
  },
  {
    postal: "504",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0119",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Didion Dr": {
          crossStreet1: "Cox Way",
          crossStreet2: "Eclipse Blvd",
        },
        "Las Lagunas Blvd": {
          crossStreet1: "Didion Dr",
          crossStreet2: "Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "505",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0119",
    fdRunOrder: ["1", "8", "10", "7", "6", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Wild Oats Dr": {
          crossStreet1: "Whispymound Dr",
          crossStreet2: "Baytree Canyon Rd",
        },
        "Didion Dr": {
          crossStreet1: "Cox Way",
          crossStreet2: "Las Lagunas Blvd",
        },
        "Las Lagunas Blvd": {
          crossStreet1: "Didion Dr",
          crossStreet2: "Baytree Canyon Rd",
        },
      },
    },
  },
  {
    postal: "506",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0152",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Lake Vinewood Dr",
      crossStreet1: "Kimble Hill Dr",
      crossStreet2: "Baytree Canyon Rd",
    },
  },
  {
    postal: "507",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0152",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr": {
          crossStreet1: "Lake Vinewood E",
          crossStreet2: "Baytree Canyon Rd",
        },
        "Baytree Canyon Rd": {
          crossStreet1: "Marlowe Dr",
          crossStreet2: "Lake Vinewood Dr",
        },
      },
    },
  },
  {
    postal: "508",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0152",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Lake Vinewood Dr": {
          crossStreet1: "Kimble Hill Dr",
          crossStreet2: "Baytree Canyon Rd",
        },
        "Baytree Canyon Rd": {
          crossStreet1: "Lake Vinewood Dr",
          crossStreet2: "Whispymound Dr",
        },
      },
    },
  },
  {
    postal: "509",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0119",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Whispymound Dr": {
          crossStreet1: "Wild Oats Dr",
          crossStreet2: "Baytree Canyon Rd",
        },
        "Baytree Canyon Rd": {
          crossStreet1: "Whispymound Dr",
          crossStreet2: "Wild Oats Dr",
        },
      },
    },
  },
  {
    postal: "510",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0119",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Whispymound Dr": {
          crossStreet1: "Wild Oats Dr",
          crossStreet2: "Baytree Canyon Rd",
        },
        "Wild Oats Dr": {
          crossStreet1: "Whispymound Dr",
          crossStreet2: "Baytree Canyon Rd",
        },
      },
    },
  },
  {
    postal: "511",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0119",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Wild Oats Dr": {
          crossStreet1: "Whispymound Dr",
          crossStreet2: "Baytree Canyon Rd",
        },
        "Baytree Canyon Rd": {
          crossStreet1: "Wild Oats Dr",
          crossStreet2: "Las Lagunas Blvd",
        },
        "Las Lagunas Blvd": {
          crossStreet1: "Baytree Canyon Rd",
          crossStreet2: "Didion Dr",
        },
      },
    },
  },
  {
    postal: "512",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "N. Conker Ave",
      crossStreet1: "Baytree Canyon Rd",
      crossStreet2: "Fenwell Pl",
    },
  },
  {
    postal: "513",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr": {
          crossStreet1: "Baytree Canyon Rd",
          crossStreet2: "Vinewood Access Rd",
        },
        "Lake Vinewood Dr Ext": {
          crossStreet1: "Baytree Canyon Rd",
          crossStreet2: "Marlowe Dr",
        },
        "Baytree Canyon Rd": {
          crossStreet1: "N. Conker Ave",
          crossStreet2: "Lake Vinewood Dr",
        },
      },
    },
  },
  {
    postal: "514",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Mt Haan Rd": {
          crossStreet1: "Marlowe Dr",
          crossStreet2: "Vinewood Access Rd",
        },
        "Marlowe Dr": {
          crossStreet1: "Baytree Canyon Rd",
          crossStreet2: "Mt Haan Rd",
        },
      },
    },
  },
  {
    postal: "515",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0125",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Baytree Canyon Rd",
      crossStreet1: "E. Galileo Ave",
      crossStreet2: "Marlowe Dr",
    },
  },
  {
    postal: "516",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0125",
    fdRunOrder: ["1", "8", "10", "7", "2", "6", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "E. Galileo Ave": {
          crossStreet1: "Observatory Approach",
          crossStreet2: "Baytree Canyon Rd",
        },
        "Baytree Canyon Rd": {
          crossStreet1: "E. Galileo Ave",
          crossStreet2: "Marlowe Dr",
        },
      },
    },
  },
  {
    postal: "517",
    twp: "Los Santos City",
    fdDistrict: "02",
    policeDistrict: "LSPD",
    fireBox: "0252",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Baytree Canyon Rd": {
          crossStreet1: "Galileo Rd",
          crossStreet2: "E. Galileo Ave",
        },
        "Mt Haan Rd": {
          crossStreet1: "Baytree Canyon Rd",
          crossStreet2: "Chaparral Dr",
        },
      },
    },
  },
  {
    postal: "518",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0215",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Baytree Canyon Rd [S]": {
          crossStreet1: "Galileo Rd",
          crossStreet2: "Harmony Ln",
        },
        "Baytree Canyon Rd [N]": {
          crossStreet1: "Galileo Bypass",
          crossStreet2: "Harmony Ln",
        },
      },
    },
  },
  {
    postal: "519",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Baytree Canyon Rd": {
          crossStreet1: "Galileo Bypass",
          crossStreet2: "Chaparral Dr",
        },
        "Harmony Ln": {
          crossStreet1: "Baytree Canyon Rd",
          crossStreet2: "Baytree Canyon Rd",
        },
        "Chaparral Dr": {
          crossStreet1: "Baytree Canyon Rd",
          crossStreet2: "Mt Haan Rd",
        },
      },
    },
  },
  {
    postal: "520",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0251",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Chaparral Dr",
      crossStreet1: "Baytree Canyon Rd",
      crossStreet2: "Mt Haan Rd",
    },
  },
  {
    postal: "521",
    twp: "Los Santos City",
    fdDistrict: "02",
    policeDistrict: "LSPD",
    fireBox: "0251",
    fdRunOrder: ["2", "1", "10", "7", "6", "4", "8", "5", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Mt Haan Rd",
      crossStreet1: "Baytree Canyon Rd",
      crossStreet2: "Chaparral Terrace",
    },
  },
  {
    postal: "522",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0257",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Baytree Canyon Rd": {
          crossStreet1: "Chaparral Dr",
          crossStreet2: "Senora Rd",
        },
        "Chaparral Dr": {
          crossStreet1: "Mt Haan Rd",
          crossStreet2: "Senora Rd",
        },
      },
    },
  },
  {
    postal: "523",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2511",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Baytree Canyon Rd": {
          crossStreet1: "Chaparral Dr",
          crossStreet2: "Senora Rd",
        },
        "Chaparral Dr": {
          crossStreet1: "Mt Haan Rd",
          crossStreet2: "Senora Rd",
        },
        "Senora Rd": {
          crossStreet1: "Cat-Tail Rd",
          crossStreet2: "Chapparel Dr",
        },
      },
    },
  },
  {
    postal: "524",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0251",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Chaparral Terrace",
      crossStreet1: "Chaparral Dr",
      crossStreet2: "Mt Haan Rd",
    },
  },
  {
    postal: "525",
    twp: "Los Santos City",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0251",
    fdRunOrder: ["2", "1", "4", "10", "7", "6", "8", "5", "9", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Mt Haan Rd",
      crossStreet1: "Baytree Canyon Rd",
      crossStreet2: "Marlowe Dr",
    },
  },
  {
    postal: "526",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "2", "10", "7", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Mt Haan Rd",
      crossStreet1: "Marlowe Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "527",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "2", "10", "7", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Mt Haan Rd",
      crossStreet1: "Vinewood Access Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "528",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "2", "10", "7", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Mt Haan Rd",
      crossStreet1: "Marlowe Dr",
      crossStreet2: "Vinewood Access Rd",
    },
  },
  {
    postal: "529",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "2", "10", "7", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Vinewood Access Rd",
      crossStreet1: "Mt Haan Rd",
      crossStreet2: "Marlowe Dr",
    },
  },
  {
    postal: "530",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "10", "7", "6", "2", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Marlowe Dr",
      crossStreet1: "Mt Haan Rd [W]",
      crossStreet2: "Mt Haan Rd [E]",
    },
  },
  {
    postal: "531",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "30",
    fdRunOrder: ["1", "10", "7", "6", "2", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Vinewood Park Dr",
      crossStreet1: "Fenwell Pl",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "532",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "10", "7", "6", "2", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Fenwell Pl",
      crossStreet1: "N. Conker Ave",
      crossStreet2: "Vinewood Park Dr",
    },
  },
  {
    postal: "533",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1018",
    fdRunOrder: ["10", "1", "7", "6", "2", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Elgin Ave": {
          crossStreet1: "Clinton Ave",
          crossStreet2: "Marlowe Dr",
        },
        "Vinewood Park Dr": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "Mirror Park Blvd",
        },
        "I1 SB": {
          crossStreet1: "I1 MM01.00",
          crossStreet2: "I1 MM02.00",
        },
        "I1 NB": {
          crossStreet1: "I1 MM01.00",
          crossStreet2: "Tataviam Dr",
        },
        "Vinewood Park Dr to I1 NB Ramp": {
          crossStreet1: "Vinewood Park Dr",
          crossStreet2: "I1 NB",
        },
        "Vinewood Park Dr to I1 SB Ramp": {
          crossStreet1: "Vinewood Park Dr",
          crossStreet2: "I1 SB",
        },
        "I1 SB to Vinewood Park Dr Ramp": {
          crossStreet1: "I1 SB",
          crossStreet2: "Vinewood Park Dr",
        },
        "I1 NB to Vinewood Park Dr Ramp": {
          crossStreet1: "I1 NB",
          crossStreet2: "Vinewood Park Dr",
        },
      },
    },
  },
  {
    postal: "534",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "10", "7", "2", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr [W]": {
          crossStreet1: "Vinewood Access Rd",
          crossStreet2: "Mt Haan Rd",
        },
        "Mt Haan Rd": {
          crossStreet1: "Marlowe Dr",
          crossStreet2: "Baytree Canyon Rd",
        },
        "Marlowe Dr [E]": {
          crossStreet1: "Mt Haan Rd",
          crossStreet2: "Senora Rd",
        },
      },
    },
  },
  {
    postal: "535",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "1500",
    fdRunOrder: ["1", "10", "7", "2", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Senora Rd": {
          crossStreet1: "Marlowe Dr",
          crossStreet2: "Star Ln",
        },
        "I1 SB": {
          crossStreet1: "Vinewood Park Dr Exit",
          crossStreet2: "I1 MM02.00",
        },
        "I2 NB": {
          crossStreet1: "Vinewood Park Dr Exit",
          crossStreet2: "Tataviam Dr",
        },
      },
    },
  },
  {
    postal: "536",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "10", "7", "2", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marlowe Dr": {
          crossStreet1: "Mt Haan Rd [W]",
          crossStreet2: "Mt Haan Rd [E]",
        },
        "Mt Haan Rd": {
          crossStreet1: "Marlowe Dr",
          crossStreet2: "Baytree Canyon Rd",
        },
      },
    },
  },
  {
    postal: "537",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0151",
    fdRunOrder: ["1", "10", "7", "2", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Mt Haan Rd",
      crossStreet1: "Marlowe Dr",
      crossStreet2: "Baytree Canyon Rd",
    },
  },
  {
    postal: "538",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "1500",
    fdRunOrder: ["1", "10", "7", "2", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Senora Rd",
      crossStreet1: "Marlowe Dr",
      crossStreet2: "Star Ln",
    },
  },
  {
    postal: "539",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "1500",
    fdRunOrder: ["1", "10", "7", "2", "6", "8", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Senora Rd": {
          crossStreet1: "Vinewood Park Dr",
          crossStreet2: "Star Ln",
        },
        "I1 SB": {
          crossStreet1: "Vinewood Park Dr Exit",
          crossStreet2: "Chancy Ln",
        },
        "I1 NB": {
          crossStreet1: "I1 NB to Rt 13 NB",
          crossStreet2: "Tataviam Dr",
        },
      },
    },
  },
  {
    postal: "540",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "0251",
    fdRunOrder: ["2", "10", "1", "9", "4", "7", "6", "8", "5", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Senora Rd",
      crossStreet1: "Vinewood Park Dr",
      crossStreet2: "Star Ln",
    },
  },
  {
    postal: "541",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "10", "1", "9", "4", "7", "6", "8", "5", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Senora Rd": {
          crossStreet1: "Chaparral Dr",
          crossStreet2: "Star Ln",
        },
        "Star Ln": {
          crossStreet1: "Senora Rd",
          crossStreet2: "Roadrunner Rd",
        },
        "Roadrunner Rd": {
          crossStreet1: "Senora Rd",
          crossStreet2: "Chancy Ln",
        },
      },
    },
  },
  {
    postal: "542",
    twp: "Harmony",
    fdDistrict: "02",
    policeDistrict: "BCSO",
    fireBox: "2500",
    fdRunOrder: ["2", "10", "1", "9", "4", "7", "6", "8", "5", "3", "11"],
    policeRunOrder: ["BCSO", "SAHP", "SSPD", "PBPD", "LCSO", "LSPD", "MBPD"],
    streets: {
      availableRoads: {
        "Chancy Ln": {
          crossStreet1: "Roadrunner Rd",
          crossStreet2: "Interstate 1 SB",
        },
        "Rt 13 SB": {
          crossStreet1: "Chancy Ln",
          crossStreet2: "Rt 13 SB to Rt 15 SB",
        },
        "Rt 13 NB": {
          crossStreet1: "I1 NB to Rt 13 NB",
          crossStreet2: "Rt 68 Exit",
        },
      },
    },
  },
  {
    postal: "543",
    twp: "Los Santos City",
    fdDistrict: "09",
    policeDistrict: "SAHP",
    fireBox: "9500",
    fdRunOrder: ["9", "2", "10", "7", "1", "6", "4", "8", "5", "3", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Chancy Ln": {
          crossStreet1: "I1 SB",
          crossStreet2: "Roadrunner Rd",
        },
        "I1 SB": {
          crossStreet1: "Chancy Ln",
          crossStreet2: "Rt 13 SB to I1 SB",
        },
        "I1 NB": {
          crossStreet1: "I1 MM02.00",
          crossStreet2: "I1 NB to Rt 13 NB",
        },
        "Rt 13 SB": {
          crossStreet1: "Rt 13 SB to I1 SB",
          crossStreet2: "Rt 13 SB to Rt 15 SB",
        },
        "Rt 13 NB": {
          crossStreet1: "I1 NB to Rt 13 NB",
          crossStreet2: "Rt 15 NB to Rt 13 NB",
        },
      },
    },
  },
  {
    postal: "544",
    twp: "Los Santos",
    fdDistrict: "10",
    policeDistrict: "SAHP",
    fireBox: "1039",
    fdRunOrder: ["10", "9", "7", "2", "1", "6", "4", "8", "5", "3", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I1 NB to Rt 15 SB Ramp": {
          crossStreet1: "I1 NB",
          crossStreet2: "Rt 15 SB",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 15 MM03.00",
          crossStreet2: "Senora Way Exit",
        },
        "Rt 15 NB": {
          crossStreet1: "Senora Way Exit",
          crossStreet2: "Rt 15 MM03.00",
        },
      },
    },
  },
  {
    postal: "545",
    twp: "Los Santos",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "8", "9", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I1 NB": {
          crossStreet1: "I1 MM02.00",
          crossStreet2: "I1 NB to Rt 13 NB",
        },
        "I1 SB": {
          crossStreet1: "Rt 13 SB to I1 SB",
          crossStreet2: "I1 MM02.00",
        },
        "Tataviam Dr": {
          crossStreet1: "I1 NB",
          crossStreet2: "Reservoir Access Rd",
        },
      },
    },
  },
  {
    postal: "546",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "1", "6", "2", "8", "9", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I1 NB": {
          crossStreet1: "Vinewood Park Dr Exit",
          crossStreet2: "I1 MM02.00",
        },
        "I1 SB": {
          crossStreet1: "Vinewood Park Dr Exit",
          crossStreet2: "I1 MM02.00",
        },
        "Tataviam Dr": {
          crossStreet1: "I1 NB",
          crossStreet2: "Reservoir Access Rd",
        },
      },
    },
  },
  {
    postal: "547",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "8", "9", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Tataviam Dr",
      crossStreet1: "Interstate 1 NB",
      crossStreet2: "Reservoir Access Rd",
    },
  },
  {
    postal: "548",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "0750",
    fdRunOrder: ["7", "9", "10", "6", "1", "2", "8", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 15 NB": {
          crossStreet1: "Rt 15 MM02.00",
          crossStreet2: "Rt 15 MM03.00",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 15 MM02.00",
          crossStreet2: "Rt 15 MM03.00",
        },
        "Rt 15 SB to Senora Way Ramp": {
          crossStreet1: "Rt 15 SB",
          crossStreet2: "Senora Way",
        },
        "Senora Way to Rt 15 NB Ramp": {
          crossStreet1: "Senora Way",
          crossStreet2: "Rt 15 NB",
        },
        "Senora Way to Rt 15 SB Ramp": {
          crossStreet1: "Senora Way",
          crossStreet2: "Rt 15 SB",
        },
        "Rt 15 NB to Senora Way Ramp": {
          crossStreet1: "Rt 15 NB",
          crossStreet2: "Senora Way",
        },
        "Tataviam Dr": {
          crossStreet1: "Senora Way to Rt 15 SB Ramp",
          crossStreet2: "Reservoir Access Rd",
        },
      },
    },
  },
  {
    postal: "549",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "7502",
    fdRunOrder: ["7", "9", "10", "6", "1", "2", "8", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 15 NB": {
          crossStreet1: "Rt 15 MM02.00",
          crossStreet2: "Senora Way Exit",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 15 MM02.00",
          crossStreet2: "Senora Way Exit",
        },
      },
    },
  },
  {
    postal: "550",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Tataviam Dr",
      crossStreet1: "Reservoir Access Rd",
      crossStreet2: "Rt 15 SB",
    },
  },
  {
    postal: "551",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Tataviam Dr",
      crossStreet1: "Reservoir Access Rd",
      crossStreet2: "I1 NB",
    },
  },
  {
    postal: "552",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Tataviam Dr",
      crossStreet1: "Reservoir Access Rd",
      crossStreet2: "I1 NB",
    },
  },
  {
    postal: "553",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Tataviam Dr",
      crossStreet1: "Reservoir Access Rd",
      crossStreet2: "I1 NB",
    },
  },
  {
    postal: "554",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Tataviam Dr",
      crossStreet1: "Reservoir Access Rd",
      crossStreet2: "Rt 15 SB",
    },
  },
  {
    postal: "555",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "7502",
    fdRunOrder: ["7", "9", "10", "6", "1", "2", "8", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 15 NB": {
          crossStreet1: "Rt 15 MM02.00",
          crossStreet2: "Senora Way Exit",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 15 MM02.00",
          crossStreet2: "Senora Way Exit",
        },
      },
    },
  },
  {
    postal: "556",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "7502",
    fdRunOrder: ["7", "9", "10", "6", "1", "2", "8", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 15 NB": {
          crossStreet1: "Rt 15 MM02.00",
          crossStreet2: "Senora Way Exit",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 15 MM02.00",
          crossStreet2: "Senora Way Exit",
        },
      },
    },
  },
  {
    postal: "557",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "7502",
    fdRunOrder: ["7", "9", "10", "6", "1", "2", "8", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 15 NB": {
          crossStreet1: "Rt 15 MM02.00",
          crossStreet2: "Senora Way Exit",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 15 MM02.00",
          crossStreet2: "Senora Way Exit",
        },
      },
    },
  },
  {
    postal: "558",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "7205",
    fdRunOrder: ["7", "9", "10", "6", "1", "2", "8", "5", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 15 NB": {
          crossStreet1: "Rt 15 MM02.00",
          crossStreet2: "Sustancia Rd Exit",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 15 MM02.00",
          crossStreet2: "Sustancia Rd Exit",
        },
      },
    },
  },
  {
    postal: "559",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Tataviam Dr",
      crossStreet1: "Reservoir Access Rd",
      crossStreet2: "Rt 15 SB",
    },
  },
  {
    postal: "560",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Tataviam Dr",
      crossStreet1: "Reservoir Access Rd",
      crossStreet2: "I1 NB",
    },
  },
  {
    postal: "561",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "7300",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Tataviam Dr [E]": {
          crossStreet1: "Reservoir Access Rd",
          crossStreet2: "Rt 15 SB",
        },
        "Tataviam Dr [W]": {
          crossStreet1: "Reservoir Access Rd",
          crossStreet2: "I1 NB",
        },
        "Reservoir Access Rd": {
          crossStreet1: "Mirror Park Blvd",
          crossStreet2: "Tataviam Dr",
        },
      },
    },
  },
  {
    postal: "562",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "2", "9", "8", "5", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Tataviam Dr",
      crossStreet1: "Reservoir Access Rd",
      crossStreet2: "Rt 15 SB",
    },
  },
  {
    postal: "563",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "5", "2", "8", "9", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Tataviam Dr": {
          crossStreet1: "Reservoir Access Rd",
          crossStreet2: "Rt 15",
        },
        "Rt 15 NB": {
          crossStreet1: "I4 EB to Rt 15 NB",
          crossStreet2: "Rt 15 MM01.00",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 15 SB to I4 WB",
          crossStreet2: "Rt 15 MM01.00",
        },
      },
    },
  },
  {
    postal: "564",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "7207",
    fdRunOrder: ["7", "10", "6", "1", "5", "2", "8", "9", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 15 SB": {
          crossStreet1: "Rt 15 MM01.00",
          crossStreet2: "Sustancia Rd Exit",
        },
        "Rt 15 NB": {
          crossStreet1: "Sustancia Rd Exit",
          crossStreet2: "Rt 15 MM02.00",
        },
      },
    },
  },
  {
    postal: "565",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0730",
    fdRunOrder: ["7", "10", "6", "1", "5", "2", "8", "9", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Noose Approach",
      crossStreet1: "Sustancia Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "566",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "5", "2", "8", "9", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Sustancia View",
      crossStreet1: "Sustancia Rd",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "567",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LCSO",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "5", "2", "8", "9", "4", "3", "11"],
    policeRunOrder: ["LCSO", "LSPD", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Sustancia Rd",
      crossStreet1: "El Burro Blvd",
      crossStreet2: "Noose Approach",
    },
  },
  {
    postal: "568",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "6", "1", "5", "2", "8", "9", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LCSO", "LSPD", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 15 NB": {
          crossStreet1: "I4 EB to Rt 15 NB",
          crossStreet2: "Sustancia Rd Exit",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 15 SB to I4 WB",
          crossStreet2: "Sustancia Rd Exit",
        },
      },
    },
  },
  {
    postal: "569",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "SAHP",
    fireBox: "7210",
    fdRunOrder: ["7", "10", "6", "1", "5", "2", "8", "9", "4", "3", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 15 NB": {
          crossStreet1: "I4 EB to Rt 15 NB",
          crossStreet2: "Rt 15 MM01.00",
        },
        "Rt 15 SB": {
          crossStreet1: "Rt 15 SB to I4 WB",
          crossStreet2: "Rt 15 MM01.00",
        },
      },
    },
  },
  {
    postal: "570",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0703",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Utopia Gardens": {
          crossStreet1: "E. Mirror Dr",
          crossStreet2: "Dead End",
        },
        "E. Mirror Dr": {
          crossStreet1: "Mirror Park Blvd",
          crossStreet2: "Nikola Pl",
        },
      },
    },
  },
  {
    postal: "571",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0704",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Nikola Pl": {
          crossStreet1: "E. Mirror Dr",
          crossStreet2: "Dead End",
        },
        "E. Mirror Dr": {
          crossStreet1: "Utopia Gardens",
          crossStreet2: "Mirror Park Blvd",
        },
      },
    },
  },
  {
    postal: "572",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0703",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Mirror Park Blvd": {
          crossStreet1: "E. Mirror Dr",
          crossStreet2: "Nikola Ave",
        },
        "Nikola Ave": {
          crossStreet1: "Mirror Park Blvd",
          crossStreet2: "E. Mirror Dr",
        },
        "E. Mirror Dr": {
          crossStreet1: "Nikola Ave",
          crossStreet2: "Mirror Park Blvd",
        },
      },
    },
  },
  {
    postal: "573",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0704",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Mirror Park Blvd": {
          crossStreet1: "Nikola Ave",
          crossStreet2: "E. Mirror Dr",
        },
        "E. Mirror Dr": {
          crossStreet1: "Mirror Park Blvd",
          crossStreet2: "Nikola Ave",
        },
        "Nikola Ave": {
          crossStreet1: "Mirror Park Blvd",
          crossStreet2: "E. Mirror Dr",
        },
      },
    },
  },
  {
    postal: "574",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0790",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "W. Mirror Dr": {
          crossStreet1: "Mirror Pl",
          crossStreet2: "Mirror Park Blvd",
        },
        "Mirror Pl": {
          crossStreet1: "West Mirror Dr",
          crossStreet2: "Nikola Ave",
        },
        "Nikola Ave": {
          crossStreet1: "Mirror Pl",
          crossStreet2: "Mirror Park Blvd",
        },
        "Mirror Park Blvd": {
          crossStreet1: "W. Mirror Dr",
          crossStreet2: "Nikola Ave",
        },
      },
    },
  },
  {
    postal: "575",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0705",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Nikola Ave": {
          crossStreet1: "Bridge St",
          crossStreet2: "Mirror Park Blvd",
        },
        "Bridge St": {
          crossStreet1: "Nikola Ave",
          crossStreet2: "W. Mirror Dr",
        },
        "W. Mirror Dr": {
          crossStreet1: "Bridge St",
          crossStreet2: "Mirror Park Blvd",
        },
        "Mirror Park Blvd": {
          crossStreet1: "Nikola Ave",
          crossStreet2: "W. Mirror Dr",
        },
      },
    },
  },
  {
    postal: "576",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0705",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "W. Mirror Dr": {
          crossStreet1: "Nikola Ave",
          crossStreet2: "Mirror Pl",
        },
        "Nikola Ave": {
          crossStreet1: "W. Mirror Dr",
          crossStreet2: "Mirror Pl",
        },
        "Mirror Pl": {
          crossStreet1: "W. Mirror Dr",
          crossStreet2: "Nikola Ave",
        },
      },
    },
  },
  {
    postal: "577",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0705",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Nikola Ave": {
          crossStreet1: "W. Mirror Dr",
          crossStreet2: "Bridge St",
        },
        "W. Mirror Dr": {
          crossStreet1: "Nikola Ave",
          crossStreet2: "Bridge St",
        },
        "Bridge St": {
          crossStreet1: "Nikola Ave",
          crossStreet2: "W. Mirror Dr",
        },
      },
    },
  },
  {
    postal: "578",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7886",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Popular St": {
          crossStreet1: "Glory Way",
          crossStreet2: "Supply St",
        },
        "I2 WB": {
          crossStreet1: "Elgin Ave Exit",
          crossStreet2: "I2 MM03.00",
        },
        "I2 EB": {
          crossStreet1: "Elgine Ave Entrance",
          crossStreet2: "I2 MM03.00",
        },
      },
    },
  },
  {
    postal: "579",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7887",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Glory Way",
      crossStreet1: "Popular St",
      crossStreet2: "Bridge St",
    },
  },
  {
    postal: "580",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0705",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "W. Mirror Dr": {
          crossStreet1: "Bridge St",
          crossStreet2: "Mirror Park Blvd",
        },
        "Bridge St": {
          crossStreet1: "W. Mirror Dr",
          crossStreet2: "Glory Way",
        },
        "Mirror Park Blvd": {
          crossStreet1: "W. Mirror Dr",
          crossStreet2: "Glory Way",
        },
      },
    },
  },
  {
    postal: "581",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0705",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Mirror Park Blvd": {
          crossStreet1: "W. Mirror Dr",
          crossStreet2: "Glory Way",
        },
        "Reservoir Access Rd": {
          crossStreet1: "Mirror Park Blvd",
          crossStreet2: "Tataviam Dr",
        },
        "E. Mirror Dr": {
          crossStreet1: "Mirror Park Blvd",
          crossStreet2: "Nikola Ave",
        },
      },
    },
  },
  {
    postal: "582",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0708",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Casino Access Rd",
      crossStreet1: "Vinewood Park Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "583",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0708",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Casino Access Rd",
      crossStreet1: "Vinewood Park Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "584",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0750",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I1 NB": {
          crossStreet1: "I1 MM01.00",
          crossStreet2: "Tataviam Dr",
        },
        "I1 SB": {
          crossStreet1: "I1 MM02.00",
          crossStreet2: "I1 MM01.00",
        },
        "Vinewood Park Dr to I1 NB Ramp": {
          crossStreet1: "Vinewood Park Dr",
          crossStreet2: "I1 NB",
        },
        "Vinewood Park Dr to I1 SB Ramp": {
          crossStreet1: "Vinewood Park Dr",
          crossStreet2: "I1 SB",
        },
        "I1 SB to Vinewood Park Dr Ramp": {
          crossStreet1: "I1 SB",
          crossStreet2: "Vinewood Park Dr",
        },
        "I1 NB to Vinewood Park Dr Ramp": {
          crossStreet1: "I1 NB",
          crossStreet2: "Vinewood Park Dr",
        },
        "Vinewood Park Dr": {
          crossStreet1: "Interstate 1 NB",
          crossStreet2: "Casino Access Rd",
        },
      },
    },
  },
  {
    postal: "585",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0708",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I1 NB": {
          crossStreet1: "I1 MM01.00",
          crossStreet2: "Vinewood Park Dr Entrance",
        },
        "I1 SB": {
          crossStreet1: "Vinewood Park Dr Exit",
          crossStreet2: "I1 MM01.00",
        },
        "Vinewood Park Dr": {
          crossStreet1: "Mirror Park Blvd",
          crossStreet2: "I1 NB",
        },
        "Vinewood Park Dr to I1 NB Ramp": {
          crossStreet1: "Vinewood Park Dr",
          crossStreet2: "I1 NB",
        },
        "Vinewood Park Dr to I1 SB Ramp": {
          crossStreet1: "Vinewood Park Dr",
          crossStreet2: "I1 SB",
        },
        "I1 SB to Vinewood Park Dr Ramp": {
          crossStreet1: "I1 SB",
          crossStreet2: "Vinewood Park Dr",
        },
        "I1 NB to Vinewood Park Dr Ramp": {
          crossStreet1: "I1 NB",
          crossStreet2: "Vinewood Park Dr",
        },
      },
    },
  },
  {
    postal: "586",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0708",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I1 NB": {
          crossStreet1: "Popular St Entrance",
          crossStreet2: "Vinewood Park Dr Exit",
        },
        "I1 SB": {
          crossStreet1: "Popular St Exit",
          crossStreet2: "Vinewood Park Dr Entrance",
        },
      },
    },
  },
  {
    postal: "587",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0707",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Mirror Park Blvd": {
          crossStreet1: "Vinewood Park Dr",
          crossStreet2: "Tangerine St",
        },
        "Vinewood Park Dr": {
          crossStreet1: "Mirror Park Blvd",
          crossStreet2: "Casino Access Rd",
        },
      },
    },
  },
  {
    postal: "588",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0707",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bridge St": {
          crossStreet1: "York St",
          crossStreet2: "Tangerine St",
        },
        "York St": {
          crossStreet1: "Bridge St",
          crossStreet2: "Mirror Park Blvd",
        },
        "Mirror Park Blvd": {
          crossStreet1: "York St",
          crossStreet2: "Tangerine St",
        },
        "Tangerine St": {
          crossStreet1: "Bridge St",
          crossStreet2: "Mirror Park Blvd",
        },
      },
    },
  },
  {
    postal: "589",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0707",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bridge St": {
          crossStreet1: "Tangerine St",
          crossStreet2: "Glory Way",
        },
        "Tangerine St": {
          crossStreet1: "Bridge St",
          crossStreet2: "Mirror Park Blvd",
        },
        "Mirror Park Blvd": {
          crossStreet1: "Tangerine St",
          crossStreet2: "Glory Way",
        },
        "Glory Way": {
          crossStreet1: "Bridge St",
          crossStreet2: "Mirror Park Blvd",
        },
      },
    },
  },
  {
    postal: "590",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0707",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Glory Way": {
          crossStreet1: "Popular St",
          crossStreet2: "Bridge St",
        },
        "Bridge St": {
          crossStreet1: "Tangerine St",
          crossStreet2: "Elgin Ave",
        },
        "Popular St to I1 NB Ramp": {
          crossStreet1: "Popular St",
          crossStreet2: "I1 NB",
        },
        "I1 NB": {
          crossStreet1: "Integrity Way",
          crossStreet2: "I1 MM01.00",
        },
        "I1 SB to Popular St Ramp": {
          crossStreet1: "Popular St",
          crossStreet2: "I1 SB",
        },
        "I1 SB": {
          crossStreet1: "Integrity Way",
          crossStreet2: "I1 MM01.00",
        },
      },
    },
  },
  {
    postal: "591",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0707",
    fdRunOrder: ["7", "10", "1", "6", "8", "5", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bridge St": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "York St",
        },
        "Mirror Park Blvd": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "York St",
        },
        "York St": {
          crossStreet1: "Bridge St",
          crossStreet2: "Mirror Park Blvd",
        },
        "I1 SB": {
          crossStreet1: "Popular St Exit",
          crossStreet2: "I1 MM01.00",
        },
        "I1 NB": {
          crossStreet1: "Popular St Entrance",
          crossStreet2: "I1 MM01.00",
        },
      },
    },
  },
  {
    postal: "592",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Vinewood Blvd": {
          crossStreet1: "Meteor St",
          crossStreet2: "Elgin Ave",
        },
        "Meteor St": {
          crossStreet1: "Vinewood Blvd",
          crossStreet2: "Clinton Ave",
        },
        "Clinton Ave": {
          crossStreet1: "Meteor St",
          crossStreet2: "Elgin Ave",
        },
        "Elgin Ave": {
          crossStreet1: "Vinewood Blvd",
          crossStreet2: "Clinton Ave",
        },
      },
    },
  },
  {
    postal: "593",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Vinewood Blvd": {
          crossStreet1: "Power St",
          crossStreet2: "Meteor St",
        },
        "Power St": {
          crossStreet1: "Vinewood Blvd",
          crossStreet2: "Clinton Ave",
        },
        "Clinton Ave": {
          crossStreet1: "Power St",
          crossStreet2: "Meteor St",
        },
        "Meteor St": {
          crossStreet1: "Vinewood Blvd",
          crossStreet2: "Clinton Ave",
        },
      },
    },
  },
  {
    postal: "594",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Clinton Ave": {
          crossStreet1: "Alta St",
          crossStreet2: "Power St",
        },
        "Alta St": {
          crossStreet1: "Clinton Ave",
          crossStreet2: "Power St",
        },
        "Power St": {
          crossStreet1: "Clinton Ave",
          crossStreet2: "Alta St",
        },
      },
    },
  },
  {
    postal: "595",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "019",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Clinton Ave": {
          crossStreet1: "Las Lagunas Blvd",
          crossStreet2: "Alta St",
        },
        "Las Lagunas Blvd": {
          crossStreet1: "Clinton Ave",
          crossStreet2: "Alta St",
        },
        "Alta St": {
          crossStreet1: "Clinton Ave",
          crossStreet2: "Las Lagunas Blvd",
        },
      },
    },
  },
  {
    postal: "596",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Vinewood Blvd": {
          crossStreet1: "Alta St",
          crossStreet2: "Power St",
        },
        "Alta St": {
          crossStreet1: "Vinewood Blvd",
          crossStreet2: "Clinton Ave",
        },
        "Clinton Ave": {
          crossStreet1: "Alta St",
          crossStreet2: "Power St",
        },
        "Power St": {
          crossStreet1: "Vinewood Blvd",
          crossStreet2: "Clinton Ave",
        },
      },
    },
  },
  {
    postal: "597",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Vinewood Blvd": {
          crossStreet1: "Las Lagunas Blvd",
          crossStreet2: "Alta St",
        },
        "Las Lagunas Blvd": {
          crossStreet1: "Vinewood Blvd",
          crossStreet2: "Clinton Ave",
        },
        "Clinton Ave": {
          crossStreet1: "Las Lagunas Blvd",
          crossStreet2: "Alta St",
        },
        "Alta St": {
          crossStreet1: "Vinewood Blvd",
          crossStreet2: "Clinton Ave",
        },
      },
    },
  },
  {
    postal: "598",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Las Lagunas Blvd": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
        "Vinewood Blvd": {
          crossStreet1: "Las Lagunas Blvd",
          crossStreet2: "Alta St",
        },
        "Alta St": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
      },
    },
  },
  {
    postal: "599",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Alta St": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
        "Vinewood Blvd": {
          crossStreet1: "Alta St",
          crossStreet2: "Power St",
        },
        "Power St": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
      },
    },
  },
  {
    postal: "600",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Power St": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
        "Vinewood Blvd": {
          crossStreet1: "Power St",
          crossStreet2: "Meteor St",
        },
        "Meteor St": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
      },
    },
  },
  {
    postal: "601",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Meteor St": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
        "Vinewood Blvd": {
          crossStreet1: "Meteor St",
          crossStreet2: "Elgin Ave",
        },
        "Elgin Ave": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
      },
    },
  },
  {
    postal: "602",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0118",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I1 SB to Popular St Ramp": {
          crossStreet1: "Popular St",
          crossStreet2: "I1 SB",
        },
        "I1 SB": {
          crossStreet1: "Integrity Way",
          crossStreet2: "I1 MM01.00",
        },
        "Popular St to I1 NB Ramp": {
          crossStreet1: "Popular St",
          crossStreet2: "I1 NB",
        },
        "I1 NB": {
          crossStreet1: "Integrity Way",
          crossStreet2: "I1 MM01.00",
        },
        "Elgin Ave [S]": {
          crossStreet1: "Popular St",
          crossStreet2: "Spanish Ave",
        },
        "Elgin Ave [N]": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Bridge St",
        },
        "Spanish Ave": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "Meteor St",
        },
      },
    },
  },
  {
    postal: "603",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave": {
          crossStreet1: "Meteor St",
          crossStreet2: "Elgin Ave",
        },
        "Meteor St": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
        "Elgin Ave": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Bridge St",
        },
      },
    },
  },
  {
    postal: "604",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave": {
          crossStreet1: "Power St",
          crossStreet2: "Meteor St",
        },
        "Power St": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
        "Meteor St": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
      },
    },
  },
  {
    postal: "605",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave": {
          crossStreet1: "Alta St",
          crossStreet2: "Power St",
        },
        "Alta St": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
        "Power St": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
      },
    },
  },
  {
    postal: "606",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0124",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave": {
          crossStreet1: "Las Lagunas Blvd",
          crossStreet2: "Alta St",
        },
        "Las Lagunas Blvd": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
        "Alta St": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Vinewood Blvd",
        },
      },
    },
  },
  {
    postal: "607",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hawick Ave": {
          crossStreet1: "Unknown Rd",
          crossStreet2: "Alta St",
        },
        "Unknown Rd": {
          crossStreet1: "Hawick Ave",
          crossStreet2: "Spanish Ave",
        },
        "Spanish Ave": {
          crossStreet1: "Unknown Rd",
          crossStreet2: "Alta St",
        },
        "Alta St": {
          crossStreet1: "Hawick Ave",
          crossStreet2: "Spanish Ave",
        },
      },
    },
  },
  {
    postal: "608",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hawick Ave": {
          crossStreet1: "Alta Pl",
          crossStreet2: "Power St",
        },
        "Alta Pl": {
          crossStreet1: "Hawick Ave",
          crossStreet2: "Spanish Ave",
        },
        "Spanish Ave": {
          crossStreet1: "Alta Pl",
          crossStreet2: "Power St",
        },
        "Power St": {
          crossStreet1: "Hawick Ave",
          crossStreet2: "Spanish Ave",
        },
      },
    },
  },
  {
    postal: "609",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hawick Ave": {
          crossStreet1: "Power St",
          crossStreet2: "Meteor St",
        },
        "Power St": {
          crossStreet1: "Hawick Ave",
          crossStreet2: "Spanish Ave",
        },
        "Spanish Ave": {
          crossStreet1: "Power St",
          crossStreet2: "Meteor St",
        },
        "Meteor St": {
          crossStreet1: "Hawick Ave",
          crossStreet2: "Spanish Ave",
        },
      },
    },
  },
  {
    postal: "610",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hawick Ave": {
          crossStreet1: "Meteor St",
          crossStreet2: "Elgin Ave",
        },
        "Meteor St": {
          crossStreet1: "Hawick Ave",
          crossStreet2: "Spanish Ave",
        },
        "Spanish Ave": {
          crossStreet1: "Meteor St",
          crossStreet2: "Elgin Ave",
        },
        "Elgin Ave": {
          crossStreet1: "Hawick Ave",
          crossStreet2: "Spanish Ave",
        },
      },
    },
  },
  {
    postal: "611",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "1399",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "I2 MM02.00",
          crossStreet2: "I2 MM01.00",
        },
        "I2 EB": {
          crossStreet1: "I2 MM01.00",
          crossStreet2: "I2 MM02.00",
        },
        "I1 SB": {
          crossStreet1: "Integrity Way",
          crossStreet2: "I1 MM01.00",
        },
        "I1 NB": {
          crossStreet1: "Integrity Way",
          crossStreet2: "I1 MM01.00",
        },
        "Popular St to I2 WB Ramp": {
          crossStreet1: "Popular St",
          crossStreet2: "I2 WB",
        },
        "Popular St to I2 EB Ramp": {
          crossStreet1: "Popular St",
          crossStreet2: "I2 EB",
        },
        "I1 SB to I2 WB Ramp": {
          crossStreet1: "I1 SB",
          crossStreet2: "I2 WB",
        },
        "I1 SB to I2 EB Ramp": {
          crossStreet1: "I1 SB",
          crossStreet2: "I2 EB",
        },
        "I1 SB to Elgin Ave Ramp": {
          crossStreet1: "I1 SB",
          crossStreet2: "Elgin Ave",
        },
        "Elgin Ave": {
          crossStreet1: "Meteor St",
          crossStreet2: "Hawick Ave",
        },
      },
    },
  },
  {
    postal: "612",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Elgin Ave": {
          crossStreet1: "Meteor St",
          crossStreet2: "Hawick Ave",
        },
        "Meteor St": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "Hawick Ave",
        },
        "Hawick Ave": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "Meteor St",
        },
      },
    },
  },
  {
    postal: "613",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 EB": {
          crossStreet1: "Interstate 2 MM02.00",
          crossStreet2: "Interstate 2 MM01.00",
        },
        "I2 WB": {
          crossStreet1: "Interstate 2 MM02.00",
          crossStreet2: "Interstate 2 MM01.00",
        },
        "Elgin Ave to I2 WB Ramp": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "I2 WB",
        },
        "Power St": {
          crossStreet1: "Occupation Ave",
          crossStreet2: "Swiss St",
        },
        "Occupation Ave": {
          crossStreet1: "Power St",
          crossStreet2: "Elgin Ave",
        },
        "Elgin Ave": {
          crossStreet1: "Swiss St",
          crossStreet2: "Occupation Ave",
        },
      },
    },
  },
  {
    postal: "614",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Occupation Ave": {
          crossStreet1: "Power St",
          crossStreet2: "Meteor St",
        },
        "Power St": {
          crossStreet1: "Occupation Ave",
          crossStreet2: "Hawick Ave",
        },
        "Hawick Ave": {
          crossStreet1: "Power St",
          crossStreet2: "Meteor St",
        },
        "Meteor St": {
          crossStreet1: "Occupation Ave",
          crossStreet2: "Hawick Ave",
        },
      },
    },
  },
  {
    postal: "615",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0112",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 EB": {
          crossStreet1: "I5 NB to I2 WB",
          crossStreet2: "Elgin Ave Exit",
        },
        "I2 WB": {
          crossStreet1: "I2 WB to I5 SB",
          crossStreet2: "Elgin Ave Entrance",
        },
        "Alta St": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Occupation Ave",
        },
        "Occupation Ave": {
          crossStreet1: "Alta St",
          crossStreet2: "Power St",
        },
        "Power St": {
          crossStreet1: "Swiss St",
          crossStreet2: "Occupation Ave",
        },
      },
    },
  },
  {
    postal: "616",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0114",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Occupation Ave": {
          crossStreet1: "Alta St",
          crossStreet2: "Power St",
        },
        "Alta St": {
          crossStreet1: "Occupation Ave",
          crossStreet2: "Hawick Ave",
        },
        "Hawick Ave": {
          crossStreet1: "Alta St",
          crossStreet2: "Power St",
        },
        "Power St": {
          crossStreet1: "Occupation Ave",
          crossStreet2: "Hawick Ave",
        },
      },
    },
  },
  {
    postal: "617",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0112",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Occupation Ave": {
          crossStreet1: "Las Lagunas Blvd",
          crossStreet2: "Alta St",
        },
        "Las Lagunas Blvd": {
          crossStreet1: "Occupation Ave",
          crossStreet2: "Hawick Ave",
        },
        "Hawick Ave": {
          crossStreet1: "Las Lagunas Blvd",
          crossStreet2: "Alta St",
        },
        "Alta St": {
          crossStreet1: "Occupation Ave",
          crossStreet2: "Hawick Ave",
        },
      },
    },
  },
  {
    postal: "618",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0110",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 EB": {
          crossStreet1: "I5 NB to I2 WB",
          crossStreet2: "Elgin Ave Exit",
        },
        "I2 WB": {
          crossStreet1: "I2 WB to I5 SB",
          crossStreet2: "Elgin Ave Entrance",
        },
        "Las Lagunas Blvd": {
          crossStreet1: "Dorset Dr",
          crossStreet2: "Occupation Ave",
        },
        "Occupation Ave": {
          crossStreet1: "Las Lagunas Blvd",
          crossStreet2: "Alta St",
        },
        "Alta St": {
          crossStreet1: "Integrity Way",
          crossStreet2: "Occupation Ave",
        },
      },
    },
  },
  {
    postal: "619",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0117",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "San Vitus Blvd": {
          crossStreet1: "Dorset Dr",
          crossStreet2: "Carcer Way",
        },
        "Carcer Way": {
          crossStreet1: "San Vitus Blvd",
          crossStreet2: "Las Lagunas Blvd",
        },
        "Las Lagunas Blvd": {
          crossStreet1: "Dorset Dr",
          crossStreet2: "Carcer Way",
        },
      },
    },
  },
  {
    postal: "620",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0117",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carcer Way": {
          crossStreet1: "San Vitus Blvd",
          crossStreet2: "Las Lagunas Blvd",
        },
        "San Vitus Blvd": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Hawick Ave",
        },
        "Hawick Ave": {
          crossStreet1: "San Vitus Blvd",
          crossStreet2: "Las Lagunas Blvd",
        },
        "Las Lagunas Blvd": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Hawick Ave",
        },
      },
    },
  },
  {
    postal: "621",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0115",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hawick Ave": {
          crossStreet1: "San Vitus Blvd",
          crossStreet2: "Las Lagunas Blvd",
        },
        "Spanish Ave": {
          crossStreet1: "San Vitus Blvd",
          crossStreet2: "Las Lagunas Blvd",
        },
        "Las Lagunas Blvd": {
          crossStreet1: "Hawick Ave",
          crossStreet2: "Spanish Ave",
        },
      },
    },
  },
  {
    postal: "622",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0113",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "San Vitus Blvd": {
          crossStreet1: "Hawick Ave",
          crossStreet2: "Spanish Ave",
        },
        "Spanish Ave": {
          crossStreet1: "San Vitus Blvd",
          crossStreet2: "N. Archer Ave",
        },
      },
    },
  },
  {
    postal: "623",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0115",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave": {
          crossStreet1: "N. Archer Ave",
          crossStreet2: "Las Lagunas Blvd",
        },
        "N. Archer Ave": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Eclipse Blvd",
        },
        "Eclipse Blvd": {
          crossStreet1: "N. Archer Ave",
          crossStreet2: "Las Lagunas Blvd",
        },
        "Las Lagunas Blvd": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "624",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0113",
    fdRunOrder: ["1", "10", "7", "6", "8", "2", "5", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave": {
          crossStreet1: "San Vitus Blvd",
          crossStreet2: "N. Archer Ave",
        },
        "San Vitus Blvd": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Eclipse Blvd",
        },
        "Eclipse Blvd": {
          crossStreet1: "San Vitus Blvd",
          crossStreet2: "N. Archer Ave",
        },
        "N. Archer Ave": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "625",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0122",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave": {
          crossStreet1: "Milton Rd",
          crossStreet2: "San Vitus Blvd",
        },
        "Eclipse Blvd": {
          crossStreet1: "Milton Rd",
          crossStreet2: "San Vitus Blvd",
        },
        "San Vitus Blvd": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "626",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0113",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hawick Ave": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "San Vitus Blvd",
        },
        "Eastbourne Way": {
          crossStreet1: "Hawick Ave",
          crossStreet2: "Spanish Ave",
        },
        "Spanish Ave": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "San Vitus Blvd",
        },
        "San Vitus Blvd": {
          crossStreet1: "Hawick Ave",
          crossStreet2: "Spanish Ave",
        },
      },
    },
  },
  {
    postal: "627",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0111",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carcer Way": {
          crossStreet1: "Abe Milton Pkwy",
          crossStreet2: "San Vitus Blvd",
        },
        "Eastbourne Way": {
          crossStreet1: "Abe Milton Pkwy",
          crossStreet2: "Hawick Ave",
        },
        "Hawick Ave": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "San Vitus Blvd",
        },
        "San Vitus Blvd": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Hawick Ave",
        },
      },
    },
  },
  {
    postal: "628",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0111",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Abe Milton Pkwy": {
          crossStreet1: "Carcer Way",
          crossStreet2: "San Vitus Blvd",
        },
        "Carcer Way": {
          crossStreet1: "Abe Milton Pkwy",
          crossStreet2: "San Vitus Blvd",
        },
        "San Vitus Blvd": {
          crossStreet1: "Abe Milton Pkwy",
          crossStreet2: "Carcer Way",
        },
      },
    },
  },
  {
    postal: "629",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dorset Dr": {
          crossStreet1: "Dorset Pl",
          crossStreet2: "Abe Milton Pkwy",
        },
        "Dorset Pl": {
          crossStreet1: "Dorset Dr",
          crossStreet2: "Abe Milton Pkwy",
        },
        "Abe Milton Pkwy": {
          crossStreet1: "Dorset Pl",
          crossStreet2: "Dorset Dr",
        },
      },
    },
  },
  {
    postal: "630",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0110",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "Rockford Dr Exit",
          crossStreet2: "Elgin Ave Entrance",
        },
        "I2 EB": {
          crossStreet1: "Rockford Dr Entrance",
          crossStreet2: "Elgin Ave Exit",
        },
        "I2 WB to I5 SB Ramp": {
          crossStreet1: "I2 WB",
          crossStreet2: "I5 SB",
        },
        "I5 NB to I2 WB Ramp": {
          crossStreet1: "I2 WB",
          crossStreet2: "I5 NB",
        },
        "I5 NB to Palomino Ave Ramp": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "I5 NB",
        },
        "Dorset Dr": {
          crossStreet1: "Dorset Pl",
          crossStreet2: "Abe Milton Pkwy",
        },
      },
    },
  },
  {
    postal: "631",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "Rockford Dr Exit",
          crossStreet2: "I2 MM02.00",
        },
        "I2 EB": {
          crossStreet1: "Rockford Dr Entrance",
          crossStreet2: "I2 MM01.00",
        },
        "I5 NB to I2 WB Ramp": {
          crossStreet1: "I2 WB",
          crossStreet2: "I5 NB",
        },
        "I5 NB to Palomino Ave Ramp": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "I5 NB",
        },
        "Palomino Ave": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Dorset Dr",
        },
        "Dorset Dr": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "Rockford Dr",
        },
      },
    },
  },
  {
    postal: "632",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dorset Dr": {
          crossStreet1: "Rockford Dr",
          crossStreet2: "Dorset Pl",
        },
        "Rockford Dr": {
          crossStreet1: "Dorset Dr",
          crossStreet2: "Carcer Way",
        },
        "Carcer Way": {
          crossStreet1: "Rockford Dr",
          crossStreet2: "Abe Milton Pkwy",
        },
        "Abe Milton Pkwy": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Dorset Pl",
        },
        "Dorset Pl": {
          crossStreet1: "Dorset Dr",
          crossStreet2: "Abe Milton Pkwy",
        },
      },
    },
  },
  {
    postal: "633",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0109",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carcer Way": {
          crossStreet1: "Abe Milton Pkwy",
          crossStreet2: "San Vitus Blvd",
        },
        "Abe Milton Pkwy": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Eastbourne Way",
        },
        "Eastbourne Way": {
          crossStreet1: "Abe Milton Pkwy",
          crossStreet2: "Hawick Ave",
        },
      },
    },
  },
  {
    postal: "634",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Abe Milton Pkwy": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "Milton Rd",
        },
        "Milton Rd": {
          crossStreet1: "Abe Milton Pkwy",
          crossStreet2: "Hawick Ave",
        },
        "Hawick Ave": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Eastbourne Way",
        },
        "Eastbourne Way": {
          crossStreet1: "Abe Milton Pkwy",
          crossStreet2: "Hawick Ave",
        },
      },
    },
  },
  {
    postal: "635",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Hawick Ave": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Eastbourne Way",
        },
        "Milton Rd": {
          crossStreet1: "Hawick Ave",
          crossStreet2: "Spanish Ave",
        },
        "Spanish Ave": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Eastbourne Way",
        },
        "Eastbourne Way": {
          crossStreet1: "Hawick Ave",
          crossStreet2: "Spanish Ave",
        },
      },
    },
  },
  {
    postal: "636",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0123",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave": {
          crossStreet1: "Milton Rd",
          crossStreet2: "Eastbourne Way",
        },
        "Milton Rd": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "Eclipse Blvd",
        },
        "Eclipse Blvd": {
          crossStreet1: "Milton Rd",
          crossStreet2: "San Vitus Blvd",
        },
      },
    },
  },
  {
    postal: "637",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave": {
          crossStreet1: "Strangeways Dr",
          crossStreet2: "Milton Rd",
        },
        "Strangeways Dr": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "W. Eclipse Blvd",
        },
        "W. Eclipse Blvd": {
          crossStreet1: "Strangeways Dr",
          crossStreet2: "Milton Rd",
        },
        "Milton Rd": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "W. Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "638",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd Del Perro": {
          crossStreet1: "Strangeways Dr",
          crossStreet2: "Milton Rd",
        },
        "Strangeways Dr": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Spanish Ave",
        },
        "Spanish Ave": {
          crossStreet1: "Strangeways Dr",
          crossStreet2: "Milton Rd",
        },
        "Milton Rd": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Spanish Ave",
        },
      },
    },
  },
  {
    postal: "639",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Eastbourne Way": {
          crossStreet1: "Rockford Dr",
          crossStreet2: "Abe Milton Pkwy",
        },
        "Rockford Dr": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "Abe Milton Pkwy",
        },
        "Abe Milton Pkwy": {
          crossStreet1: "Rockford Dr",
          crossStreet2: "Eastbourne Way",
        },
      },
    },
  },
  {
    postal: "640",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carcer Way": {
          crossStreet1: "Rockford Dr",
          crossStreet2: "Abe Milton Pkwy",
        },
        "Rockford Dr": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Eastbourne Way",
        },
        "Eastbourne Way": {
          crossStreet1: "Rockford Dr",
          crossStreet2: "Abe Milton Pkwy",
        },
        "Abe Milton Pkwy": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Eastbourne Way",
        },
      },
    },
  },
  {
    postal: "641",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dorset Dr": {
          crossStreet1: "Portola Dr",
          crossStreet2: "Rockford Dr",
        },
        "Portola Dr": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Rockford Dr",
        },
        "Carcer Way": {
          crossStreet1: "Portola Dr",
          crossStreet2: "Rockford Dr",
        },
        "Rockford Dr": {
          crossStreet1: "Dorset Dr",
          crossStreet2: "Carcer Way",
        },
      },
    },
  },
  {
    postal: "642",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carcer Way": {
          crossStreet1: "Portola Dr",
          crossStreet2: "Rockford Dr",
        },
        "Portola Dr": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Eastbourne Way",
        },
        "Eastbourne Way": {
          crossStreet1: "Portola Dr",
          crossStreet2: "Rockford Dr",
        },
        "Rockford Dr": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Eastbourne Way",
        },
      },
    },
  },
  {
    postal: "643",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Eastbourne Way": {
          crossStreet1: "Portola Dr",
          crossStreet2: "Rockford Dr",
        },
        "Portola Dr": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "S. Blvd Del Perro",
        },
        "S. Blvd Del Perro": {
          crossStreet1: "Portola Dr",
          crossStreet2: "Rockford Dr",
        },
        "Rockford Dr": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "S. Blvd Del Perro",
        },
      },
    },
  },
  {
    postal: "644",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd Del Perro": {
          crossStreet1: "Portola Dr",
          crossStreet2: "Rockford Dr",
        },
        "Portola Dr": {
          crossStreet1: "Caesars Pl",
          crossStreet2: "Spanish Ave",
        },
        "Caesars Pl": {
          crossStreet1: "Portola Dr",
          crossStreet2: "Spanish Ave",
        },
        "Spanish Ave": {
          crossStreet1: "Portola Dr",
          crossStreet2: "Rockford Dr",
        },
        "Rockford Dr": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Spanish Ave",
        },
      },
    },
  },
  {
    postal: "645",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd Del Perro": {
          crossStreet1: "Rockford Dr",
          crossStreet2: "Strangeways Dr",
        },
        "Rockford Dr": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Spanish Ave",
        },
        "Spanish Ave": {
          crossStreet1: "Rockford Dr",
          crossStreet2: "Strangeways Dr",
        },
        "Strangeways Dr": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Spanish Ave",
        },
      },
    },
  },
  {
    postal: "646",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave": {
          crossStreet1: "Rockford Dr",
          crossStreet2: "Strangeways Dr",
        },
        "Rockford Dr": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "W. Eclipse Blvd",
        },
        "W. Eclipse Blvd": {
          crossStreet1: "Rockford Dr",
          crossStreet2: "Strangeways Dr",
        },
        "Strangeways Dr": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "W. Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "647",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave": {
          crossStreet1: "Portola Dr",
          crossStreet2: "Rockford Dr",
        },
        "Portola Dr": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "W. Eclipse Blvd",
        },
        "Edwood Way": {
          crossStreet1: "Portola Dr",
          crossStreet2: "Rockford Dr",
        },
        "W. Eclipse Blvd": {
          crossStreet1: "Portola Dr",
          crossStreet2: "Rockford Dr",
        },
        "Rockford Dr": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "W. Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "648",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Spanish Ave": {
          crossStreet1: "Mad Wayne Thunder Dr",
          crossStreet2: "Portola Dr",
        },
        "Mad Wayne Thunder Dr": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "W. Eclipse Blvd",
        },
        "Steele Way": {
          crossStreet1: "Portola Dr",
          crossStreet2: "W. Eclipse Blvd",
        },
        "W. Eclipse Blvd": {
          crossStreet1: "Mad Wayne Thunder Dr",
          crossStreet2: "Portola Dr",
        },
        "Portola Dr": {
          crossStreet1: "Spanish Ave",
          crossStreet2: "W. Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "649",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0108",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd Del Perro": {
          crossStreet1: "Mad Wayne Thunder Dr",
          crossStreet2: "Portola Dr",
        },
        "Mad Wayne Thunder Dr": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Spanish Ave",
        },
        "Caesars Pl": {
          crossStreet1: "Portola Dr",
          crossStreet2: "Spanish Ave",
        },
        "Spanish Ave": {
          crossStreet1: "Mad Wayne Thunder Dr",
          crossStreet2: "Portola Dr",
        },
        "Portola Dr": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Spanish Ave",
        },
      },
    },
  },
  {
    postal: "650",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0140",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dorset Dr": {
          crossStreet1: "S. Blvd Del Perro",
          crossStreet2: "Mad Wayne Thunder Dr",
        },
        "S. Blvd Del Perro": {
          crossStreet1: "Dorset Dr",
          crossStreet2: "Mad Wayne Thunder Dr",
        },
        "Mad Wayne Thunder Dr": {
          crossStreet1: "Dorset Dr",
          crossStreet2: "S. Blvd Del Perro",
        },
        "Blvd Del Perro": {
          crossStreet1: "Dorset Dr",
          crossStreet2: "Mad Wayne Thunder Dr",
        },
      },
    },
  },
  {
    postal: "651",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Eastbourne Way": {
          crossStreet1: "Mad Wayne Thunder Dr",
          crossStreet2: "Portola Dr",
        },
        "Mad Wayne Thunder Dr": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "S. Blvd Del Perro",
        },
        "S. Blvd Del Perro": {
          crossStreet1: "Mad Wayne Thunder Dr",
          crossStreet2: "Portola Dr",
        },
        "Portola Dr": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "S. Blvd Del Perro",
        },
      },
    },
  },
  {
    postal: "652",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dorset Dr": {
          crossStreet1: "Eastbourne Way",
          crossStreet2: "Carcer Way",
        },
        "Eastbourne Way": {
          crossStreet1: "Dorset Dr",
          crossStreet2: "Portola Dr",
        },
        "Portola Dr": {
          crossStreet1: "Carcer Way",
          crossStreet2: "Eastbourne Way",
        },
        "Carcer Way": {
          crossStreet1: "Dorset Dr",
          crossStreet2: "Rockford Dr",
        },
      },
    },
  },
  {
    postal: "653",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0101",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "Del Perro Exit",
          crossStreet2: "Interstate 2 MM02.00",
        },
        "I2 EB": {
          crossStreet1: "Del Perro Entrance",
          crossStreet2: "Interstate 2 MM01.00",
        },
        "Palomino Ave to I2 WB Ramp": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "I2 WB",
        },
        "Dorset Dr": {
          crossStreet1: "Heritage Way",
          crossStreet2: "Palomino Ave",
        },
        "Palomino Ave": {
          crossStreet1: "Interstate 2 WB Exit",
          crossStreet2: "Dorset Dr",
        },
      },
    },
  },
  {
    postal: "654",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0140",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "Del Perro Exit",
          crossStreet2: "Interstate 2 MM02.00",
        },
        "I2 EB": {
          crossStreet1: "Del Perro Entrance",
          crossStreet2: "Interstate 2 MM01.00",
        },
        "Palomino Ave to I2 WB Ramp": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "I2 WB",
        },
        "Movie Star Way": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Heritage Way",
        },
        "Heritage Way": {
          crossStreet1: "Movie Star Way",
          crossStreet2: "Dorset Dr",
        },
      },
    },
  },
  {
    postal: "655",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0140",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Heritage Way": {
          crossStreet1: "Movie Star Way",
          crossStreet2: "Dorset Dr",
        },
        "Movie Star Way": {
          crossStreet1: "Heritage Way",
          crossStreet2: "Marathon Ave",
        },
        "Marathon Ave": {
          crossStreet1: "Movie Star Way",
          crossStreet2: "Dorset Dr",
        },
        "Dorset Dr": {
          crossStreet1: "Heritage Way",
          crossStreet2: "Marathon Ave",
        },
      },
    },
  },
  {
    postal: "656",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0140",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marathon Ave": {
          crossStreet1: "Movie Star Way",
          crossStreet2: "Dorset Dr",
        },
        "Movie Star Way": {
          crossStreet1: "Marathon Ave",
          crossStreet2: "S. Blvd Del Perro",
        },
        "S. Blvd Del Perro": {
          crossStreet1: "Movie Star Way",
          crossStreet2: "Dorset Dr",
        },
        "Dorset Dr": {
          crossStreet1: "Marathon Ave",
          crossStreet2: "S. Blvd Del Perro",
        },
        "Blvd Del Perro": {
          crossStreet1: "S. Blvd Del Perro",
          crossStreet2: "Dorset Dr",
        },
      },
    },
  },
  {
    postal: "657",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0107",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Dorset Dr",
      crossStreet1: "Blvd Del Perro",
      crossStreet2: "W. Eclipse Blvd",
    },
  },
  {
    postal: "658",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0140",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd Del Perro": {
          crossStreet1: "Morningwood Blvd",
          crossStreet2: "Dorset Dr",
        },
        "Dorset Dr": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "W. Eclipse Blvd",
        },
      },
    },
  },

  {
    postal: "659",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marathon Ave": {
          crossStreet1: "Heritage Way",
          crossStreet2: "Movie Star Way",
        },
        "S. Blvd Del Perro": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Movie Star Way",
        },
        "Movie Star Way": {
          crossStreet1: "Marathon Ave",
          crossStreet2: "S. Blvd Del Perro",
        },
      },
    },
  },
  {
    postal: "660",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Heritage Way": {
          crossStreet1: "Marathon Ave",
          crossStreet2: "Movie Star Way",
        },
        "Marathon Ave": {
          crossStreet1: "Heritage Way",
          crossStreet2: "Movie Star Way",
        },
        "Movie Star Way": {
          crossStreet1: "Heritage Way",
          crossStreet2: "Marathon Ave",
        },
      },
    },
  },
  {
    postal: "661",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "10", "8", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "Del Perro Exit",
          crossStreet2: "Interstate 2 MM02.00",
        },
        "I2 EB": {
          crossStreet1: "Del Perro Entrance",
          crossStreet2: "Interstate 2 MM01.00",
        },
        "Heritage Way": {
          crossStreet1: "Marathon Ave",
          crossStreet2: "Movie Star Way",
        },
        "Movie Star Way": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Heritage Way",
        },
      },
    },
  },
  {
    postal: "662",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "8", "10", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "Del Perro Exit",
          crossStreet2: "Interstate 2 MM02.00",
        },
        "I2 EB": {
          crossStreet1: "Del Perro Entrance",
          crossStreet2: "Interstate 2 MM01.00",
        },
        "I2 WB to N. Rockford Dr Ramp": {
          crossStreet1: "I2 WB",
          crossStreet2: "N. Rockford Dr",
        },
        "N. Rockford Dr": {
          crossStreet1: "I2 EB Entrance",
          crossStreet2: "Marathon Ave",
        },
        "Industry Passage": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Heritage Way",
        },
      },
    },
  },
  {
    postal: "663",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "8", "10", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marathon Ave": {
          crossStreet1: "Morningwood Blvd",
          crossStreet2: "Heritage Way",
        },
        "Morningwood Blvd": {
          crossStreet1: "Marathon Ave",
          crossStreet2: "Blvd Del Perro",
        },
        "Blvd Del Perro": {
          crossStreet1: "Morningwood Blvd",
          crossStreet2: "S. Blvd Del Perro",
        },
      },
    },
  },
  {
    postal: "664",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "8", "10", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Morningwood Blvd": {
          crossStreet1: "Cougar Ave",
          crossStreet2: "Blvd Del Perro",
        },
        "Blvd Del Perro": {
          crossStreet1: "Morningwood Blvd",
          crossStreet2: "Dorset Dr",
        },
      },
    },
  },
  {
    postal: "665",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "8", "10", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Morningwood Blvd": {
          crossStreet1: "Perth St",
          crossStreet2: "Dorset Dr",
        },
        "Cougar Ave": {
          crossStreet1: "Morningwood Blvd",
          crossStreet2: "Dorset Dr",
        },
        "Dorset Dr": {
          crossStreet1: "Morningwood Blvd",
          crossStreet2: "Blvd Del Perro",
        },
      },
    },
  },
  {
    postal: "666",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "8", "10", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Cougar Ave": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Morningwood Blvd",
        },
        "N. Rockford Dr": {
          crossStreet1: "Cougar Ave",
          crossStreet2: "Dorset Dr",
        },
        "Dorset Dr": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Morningwood Blvd",
        },
        "Morningwood Blvd": {
          crossStreet1: "Cougar Ave",
          crossStreet2: "Dorset Dr",
        },
      },
    },
  },
  {
    postal: "667",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "8", "10", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd Del Perro": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Morningwood Blvd",
        },
        "N. Rockford Dr": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Cougar Ave",
        },
        "Perth St": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Morningwood Blvd",
        },
        "Morningwood Blvd": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Cougar Ave",
        },
      },
    },
  },
  {
    postal: "668",
    twp: "Los Santos City",
    fdDistrict: "01",
    policeDistrict: "LSPD",
    fireBox: "0141",
    fdRunOrder: ["1", "8", "10", "6", "7", "5", "2", "4", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marathon Ave": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Morningwood Blvd",
        },
        "N. Rockford Dr": {
          crossStreet1: "Marathon Ave",
          crossStreet2: "Blvd Del Perro",
        },
        "Blvd Del Perro": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Morningwood Blvd",
        },
        "Morningwood Blvd": {
          crossStreet1: "Marathon Ave",
          crossStreet2: "Blvd Del Perro",
        },
      },
    },
  },
  {
    postal: "669",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0832",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Red Desert Ave": {
          crossStreet1: "Prosperity St Promenade",
          crossStreet2: "N. Rockford Dr",
        },
        "Prosperity St Promenade": {
          crossStreet1: "Red Desert Ave",
          crossStreet2: "Marathon Ave",
        },
        "Marathon Ave": {
          crossStreet1: "Prosperity St Promenade",
          crossStreet2: "N. Rockford Dr",
        },
        "N. Rockford Dr": {
          crossStreet1: "Red Desert Ave",
          crossStreet2: "Marathon Ave",
        },
      },
    },
  },
  {
    postal: "670",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0841",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marathon Ave": {
          crossStreet1: "Prosperity St",
          crossStreet2: "N. Rockford Dr",
        },
        "Prosperity St": {
          crossStreet1: "Marathon Ave",
          crossStreet2: "Blvd Del Perro",
        },
        "Blvd Del Perro": {
          crossStreet1: "Prosperity St",
          crossStreet2: "N. Rockford Dr",
        },
        "N. Rockford Dr": {
          crossStreet1: "Marathon Ave",
          crossStreet2: "Blvd Del Perro",
        },
      },
    },
  },
  {
    postal: "671",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0844",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd Del Perro": {
          crossStreet1: "Prosperity St",
          crossStreet2: "N. Rockford Dr",
        },
        "Prosperity St": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Cougar Ave",
        },
        "Cougar Ave": {
          crossStreet1: "Prosperity St",
          crossStreet2: "N. Rockford Dr",
        },
        "N. Rockford Dr": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Cougar Ave",
        },
      },
    },
  },
  {
    postal: "672",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0845",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Cougar Ave": {
          crossStreet1: "Prosperity St",
          crossStreet2: "N. Rockford Dr",
        },
        "Prosperity St": {
          crossStreet1: "Cougar Ave",
          crossStreet2: "W. Eclipse Blvd",
        },
        "N. Rockford Dr": {
          crossStreet1: "Cougar Ave",
          crossStreet2: "W. Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "673",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0845",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "W. Eclipse Blvd",
      crossStreet1: "Playa Vista",
      crossStreet2: "Prosperity St",
    },
  },
  {
    postal: "674",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0845",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Cougar Ave": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St",
        },
        "W. Eclipse Blvd": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St",
        },
        "Prosperity St": {
          crossStreet1: "Cougar Ave",
          crossStreet2: "W. Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "675",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0845",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd Del Perro": {
          crossStreet1: "Unknown Rd",
          crossStreet2: "Prosperity St",
        },
        "Unknown Rd": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Cougar Ave",
        },
        "Cougar Ave": {
          crossStreet1: "Unknown Rd",
          crossStreet2: "Prosperity St",
        },
        "Prosperity St": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Cougar Ave",
        },
      },
    },
  },
  {
    postal: "676",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0830",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Marathon Ave": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St",
        },
        "Bay City Ave": {
          crossStreet1: "Marathon Ave",
          crossStreet2: "Blvd Del Perro",
        },
        "Blvd Del Perro": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St",
        },
        "Prosperity St": {
          crossStreet1: "Marathon Ave",
          crossStreet2: "Blvd Del Perro",
        },
      },
    },
  },
  {
    postal: "677",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0831",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 EB": {
          crossStreet1: "Del Perro Exit",
          crossStreet2: "Rockford Dr Entrance",
        },
        "I2 WB": {
          crossStreet1: "Del Perro Entrance",
          crossStreet2: "Rockford Dr Exit",
        },
        "Red Desert Ave": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St Promenade",
        },
        "Bay City Ave": {
          crossStreet1: "Red Desert Ave",
          crossStreet2: "Marathon Ave",
        },
        "Marathon Ave": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St Promenade",
        },
        "Prosperity St Promenade": {
          crossStreet1: "Red Desert Ave",
          crossStreet2: "Marathon Ave",
        },
      },
    },
  },
  {
    postal: "678",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0830",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Blvd Del Perro": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St",
        },
        "Bay City Ave": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Playa Vista",
        },
        "Cougar Ave": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Unknown Rd",
        },
        "Unknown Rd": {
          crossStreet1: "Blvd Del Perro",
          crossStreet2: "Cougar Ave",
        },
      },
    },
  },
  {
    postal: "679",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0830",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Cougar Ave": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Unknown Rd",
        },
        "Bay City Ave": {
          crossStreet1: "Cougar Ave",
          crossStreet2: "W. Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "680",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0829",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 EB": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "I2 EB to Magellan Ave",
        },
        "I2 WB": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "I2 MM01.00",
        },
        "Bay City Incline": {
          crossStreet1: "I2 WB",
          crossStreet2: "Bay City Ave",
        },
        "Bay City Ave": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "Blvd Del Perro",
        },
        "Playa Vista": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "Bay City Ave",
        },
      },
    },
  },
  {
    postal: "681",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0830",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Playa Vista": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "Bay City Ave",
        },
        "W. Eclipse Blvd": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "I2 WB",
        },
        "Bay City Ave": {
          crossStreet1: "Playa Vista",
          crossStreet2: "W. Eclipse Blvd",
        },
      },
    },
  },
  {
    postal: "682",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0827",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 EB": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "I2 EB to Magellan Ave",
        },
        "I2 WB": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "I2 MM01.00",
        },
        "Playa Vista": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "Bay City Ave",
        },
        "W. Eclipse Blvd": {
          crossStreet1: "I2 WB",
          crossStreet2: "Playa Vista",
        },
      },
    },
  },
  {
    postal: "683",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0850",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "W. Eclipse Blvd",
      crossStreet1: "I2 WB",
      crossStreet2: "Bay City Ave",
    },
  },
  {
    postal: "684",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0850",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "W. Eclipse Blvd": {
          crossStreet1: "Interstate 2",
          crossStreet2: "Playa Vista",
        },
        "Rt 1 SB": {
          crossStreet1: "Inesno Rd",
          crossStreet2: "W. Eclipse Blvd",
        },
        "Rt 1 NB": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "Inesno Rd",
        },
        "I2 WB": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "Del Perro Entrance",
        },
        "I2 EB": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "Del Perro Exit",
        },
      },
    },
  },
  {
    postal: "685",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0813",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Del Perro N Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "I2 WB": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "I2 MM01.00",
        },
        "I2 EB": {
          crossStreet1: "W. Eclipse Blvd",
          crossStreet2: "Del Perro Exit",
        },
      },
    },
  },
  {
    postal: "686",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0811",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Del Perro N Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "I2 WB": {
          crossStreet1: "Bay City Incline",
          crossStreet2: "I2 MM01.00",
        },
        "I2 EB": {
          crossStreet1: "Bay City Incline",
          crossStreet2: "I2 MM01.00",
        },
        "I2 WB to Equality Way Ramp": {
          crossStreet1: "I2 WB",
          crossStreet2: "Equality Way",
        },
        "I2 WB to Magellan Ave Ramp": {
          crossStreet1: "I2 WB",
          crossStreet2: "Magellan Ave",
        },
      },
    },
  },
  {
    postal: "687",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0808",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Red Desert Ave": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Dead End",
        },
        "Del Perro Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "Magellan Ave": {
          crossStreet1: "Interstate 2",
          crossStreet2: "Sand Castle Way",
        },
      },
    },
  },
  {
    postal: "688",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0808",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Red Desert Ave",
      crossStreet1: "Bay City Ave",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "689",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0809",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Del Perro S Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "Conquistador St": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Magellan Ave",
        },
        "Cortes St": {
          crossStreet1: "Dead End",
          crossStreet2: "Magellan Ave",
        },
        "Magellan Ave": {
          crossStreet1: "Vitus St",
          crossStreet2: "Sand Castle Way",
        },
      },
    },
  },
  {
    postal: "690",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Del Perro S Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "Vitus St": {
          crossStreet1: "Dead End",
          crossStreet2: "Magellan Ave",
        },
        "Palomino Ave": {
          crossStreet1: "Dead End",
          crossStreet2: "Magellan Ave",
        },
        "Magellan Ave": {
          crossStreet1: "Vitus St",
          crossStreet2: "Palomino Ave",
        },
      },
    },
  },
  {
    postal: "691",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Del Perro S Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "Palomino Ave": {
          crossStreet1: "Dead End",
          crossStreet2: "Magellan Ave",
        },
        "Aguja St": {
          crossStreet1: "Dead End",
          crossStreet2: "Magellan Ave",
        },
        "Goma St": {
          crossStreet1: "Dead End",
          crossStreet2: "Magellan Ave",
        },
        "Magellan Ave": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "Aguja St",
        },
      },
    },
  },
  {
    postal: "692",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Del Perro S Beach",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found",
    },
  },
  {
    postal: "693",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Melanoma St": {
          crossStreet1: "Magellan Ave",
          crossStreet2: "Dead End",
        },
        "Magellan Ave": {
          crossStreet1: "Goma St",
          crossStreet2: "Bay City Ave",
        },
        "Bay City Ave": {
          crossStreet1: "Magellan Ave",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "694",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0807",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Del Perro S Beach",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found",
    },
  },
  {
    postal: "695",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bay City Ave": {
          crossStreet1: "Magellan Ave",
          crossStreet2: "Goma St",
        },
        "Magellan Ave": {
          crossStreet1: "Goma St",
          crossStreet2: "Bay City Ave",
        },
        "Melanoma St": {
          crossStreet1: "Magellan Ave",
          crossStreet2: "Bay City Ave",
        },
        "Tug St": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Dead End",
        },
        "Goma St": {
          crossStreet1: "Magellan Ave",
          crossStreet2: "Bay City Ave",
        },
      },
    },
  },
  {
    postal: "696",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Goma St": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Palomino Ave",
        },
        "Aguja St": {
          crossStreet1: "Magellan Ave",
          crossStreet2: "Goma St",
        },
        "Bay City Ave": {
          crossStreet1: "Tug St",
          crossStreet2: "Palomino Ave",
        },
        "Palomino Ave": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St",
        },
      },
    },
  },
  {
    postal: "697",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bay City Ave": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "Invention Ct",
        },
        "Invention Ct": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St",
        },
        "Prosperity St": {
          crossStreet1: "Invention Ct",
          crossStreet2: "Palomino Ave",
        },
        "Palomino Ave": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St",
        },
      },
    },
  },
  {
    postal: "698",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bay City Ave": {
          crossStreet1: "Invention Ct",
          crossStreet2: "Imagination Ct",
        },
        "Imagination Ct": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St",
        },
        "Prosperity St": {
          crossStreet1: "Imagination Ct",
          crossStreet2: "Invention Ct",
        },
        "Invention Ct": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St",
        },
      },
    },
  },
  {
    postal: "699",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bay City Ave": {
          crossStreet1: "Imagination Ct",
          crossStreet2: "San Andreas Ave",
        },
        "Vespucci Blvd": {
          crossStreet1: "Magellan Ave",
          crossStreet2: "Prosperity St",
        },
        "Prosperity St": {
          crossStreet1: "Imagination Ct",
          crossStreet2: "Vespucci Blvd",
        },
        "Imagination Ct": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St",
        },
      },
    },
  },
  {
    postal: "700",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0805",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bay City Ave": {
          crossStreet1: "Conquistador St",
          crossStreet2: "San Andreas Ave",
        },
        "San Andreas Ave": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St",
        },
        "Prosperity St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "Vespucci Blvd": {
          crossStreet1: "Magellan Ave",
          crossStreet2: "Prosperity St",
        },
      },
    },
  },
  {
    postal: "701",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0805",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bay City Ave": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Sandcastle Way",
        },
        "Prosperity St Promenade": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Red Desert Ave",
        },
        "San Andreas Ave": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St Promenade",
        },
      },
    },
  },
  {
    postal: "702",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0820",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Bay City Ave": {
          crossStreet1: "Sandcastle Way",
          crossStreet2: "Red Desert Ave",
        },
        "Red Desert Ave": {
          crossStreet1: "Bay City Ave",
          crossStreet2: "Prosperity St Promenade",
        },
        "Prosperity St Promenade": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Red Desert Ave",
        },
        "I2 WB": {
          crossStreet1: "I2 MM01.00",
          crossStreet2: "Del Perro Exit",
        },
        "I2 EB": {
          crossStreet1: "I2 MM01.00",
          crossStreet2: "Del Perro Entrance",
        },
      },
    },
  },
  {
    postal: "703",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0820",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Prosperity St Promenade": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Red Desert Ave",
        },
        "N. Rockford Dr": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Red Desert Ave",
        },
        "San Andreas Ave": {
          crossStreet1: "Prosperity St Promenade",
          crossStreet2: "N. Rockford Dr",
        },
        "I2 WB": {
          crossStreet1: "I2 MM01.00",
          crossStreet2: "Del Perro Exit",
        },
        "I2 EB": {
          crossStreet1: "I2 MM01.00",
          crossStreet2: "Del Perro Entrance",
        },
        "N. Rockford Dr to I2 EB Ramp": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "I2 EB",
        },
      },
    },
  },
  {
    postal: "704",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0805",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Prosperity St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "San Andreas Ave": {
          crossStreet1: "Prosperity St",
          crossStreet2: "S. Rockford Dr",
        },
        "S. Rockford Dr": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "Vespucci Blvd": {
          crossStreet1: "Prosperity St",
          crossStreet2: "S. Rockford Dr",
        },
      },
    },
  },
  {
    postal: "705",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Prosperity St": {
          crossStreet1: "Imagination Ct",
          crossStreet2: "Vespucci Blvd",
        },
        "Vespucci Blvd": {
          crossStreet1: "Prosperity St",
          crossStreet2: "S. Rockford Dr",
        },
        "Imagination Ct": {
          crossStreet1: "Prosperity St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "706",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Prosperity St": {
          crossStreet1: "Invention Ct",
          crossStreet2: "Imagination Ct",
        },
        "Imagination Ct": {
          crossStreet1: "Prosperity St",
          crossStreet2: "Dead End",
        },
        "Invention Ct": {
          crossStreet1: "Prosperity St",
          crossStreet2: "S. Rockford Dr",
        },
      },
    },
  },
  {
    postal: "707",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Prosperity St": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "Invention Ct",
        },
        "Invention Ct": {
          crossStreet1: "Prosperity St",
          crossStreet2: "S. Rockford Dr",
        },
        "Palomino Ave": {
          crossStreet1: "Prosperity St",
          crossStreet2: "S. Rockford Dr",
        },
      },
    },
  },
  {
    postal: "708",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "1", "10", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Palomino Ave",
      crossStreet1: "Goma St",
      crossStreet2: "S. Rockford Dr",
    },
  },
  {
    postal: "709",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "6", "5", "10", "1", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Tackle St",
      crossStreet1: "S. Rockford Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "710",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0617",
    fdRunOrder: ["6", "8", "5", "10", "1", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dutch Lundon St": {
          crossStreet1: "Davis Ave",
          crossStreet2: "Greenwich Pkwy",
        },
        "Greenwich Pkwy": {
          crossStreet1: "Autopia Pkwy",
          crossStreet2: "Dutch Lundon St",
        },
        "Interstate 5": {
          crossStreet1: "I5 MM02.00",
          crossStreet2: "Innocence Blvd Exit",
        },
      },
    },
  },
  {
    postal: "711",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0617",
    fdRunOrder: ["6", "8", "5", "10", "1", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dutch Lundon St": {
          crossStreet1: "S. Arsenal St",
          crossStreet2: "Greenwich Pkwy",
        },
        "S. Arsenal St": {
          crossStreet1: "Dutch Lundon St",
          crossStreet2: "Muttiny Rd",
        },
        "Interstate 5": {
          crossStreet1: "I5 MM02.00",
          crossStreet2: "Innocence Blvd Exit",
        },
      },
    },
  },
  {
    postal: "712",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0815",
    fdRunOrder: ["8", "6", "5", "10", "1", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Shank St": {
          crossStreet1: "Dutch Lundon St",
          crossStreet2: "Dead End",
        },
        "Dutch Lundon St": {
          crossStreet1: "S. Rockford Dr",
          crossStreet2: "S. Arsenal St",
        },
        "Greenwich Pkwy": {
          crossStreet1: "Autopia Pkwy",
          crossStreet2: "Dutch Lundon St",
        },
      },
    },
  },
  {
    postal: "713",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Tackle St": {
          crossStreet1: "S. Rockford Dr",
          crossStreet2: "Dead End",
        },
        "Palomino Ave": {
          crossStreet1: "Prosperity St",
          crossStreet2: "S. Rockford Dr",
        },
        "S. Rockford Dr": {
          crossStreet1: "Tackle St",
          crossStreet2: "Palomino Ave",
        },
      },
    },
  },
  {
    postal: "714",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0801",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Invention Ct": {
          crossStreet1: "Prosperity St",
          crossStreet2: "S. Rockford Dr",
        },
        "S. Rockford Dr": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "Invention Ct",
        },
        "Palomino Ave": {
          crossStreet1: "Prosperity St",
          crossStreet2: "S. Rockford Dr",
        },
      },
    },
  },
  {
    postal: "715",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Imagination Ct": {
          crossStreet1: "Prosperity St",
          crossStreet2: "Dead End",
        },
        "S. Rockford Dr": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "Invention Ct",
        },
        "Invention Ct": {
          crossStreet1: "Prosperity St",
          crossStreet2: "S. Rockford Dr",
        },
      },
    },
  },
  {
    postal: "716",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0803",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Imagination Ct": {
          crossStreet1: "Prosperity St",
          crossStreet2: "Dead End",
        },
        "Vespucci Blvd": {
          crossStreet1: "Prosperity St",
          crossStreet2: "S. Rockford Dr",
        },
        "S. Rockford Dr": {
          crossStreet1: "Decker St",
          crossStreet2: "Vespucci Blvd",
        },
      },
    },
  },
  {
    postal: "717",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0819",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 EB": {
          crossStreet1: "Rockford Dr Entrance",
          crossStreet2: "Palomino Ave Exit",
        },
        "I2 WB": {
          crossStreet1: "Rockford Dr Exit",
          crossStreet2: "Palomino Ave Entrance",
        },
        "N. Rockford Dr. to I2 EB Ramp": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "I2 EB",
        },
        "San Andreas Ave": {
          crossStreet1: "N. Rockford Dr",
          crossStreet2: "Movie Star Way",
        },
        "Movie Star Way": {
          crossStreet1: "Heritage Way",
          crossStreet2: "San Andreas Ave",
        },
      },
    },
  },
  {
    postal: "718",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0819",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "San Andreas Ave": {
          crossStreet1: "S. Rockford Dr",
          crossStreet2: "Decker St",
        },
        "Decker St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "Vespucci Blvd": {
          crossStreet1: "S. Rockford Dr",
          crossStreet2: "Decker St",
        },
      },
    },
  },
  {
    postal: "719",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0819",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Vespucci Blvd": {
          crossStreet1: "S. Rockford Dr",
          crossStreet2: "Decker St",
        },
        "Decker St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "S. Rockford Dr",
        },
        "S. Rockford Dr": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "Decker St",
        },
      },
    },
  },
  {
    postal: "720",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0806",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Decker St": {
          crossStreet1: "S. Rockford Dr",
          crossStreet2: "Vespucci Blvd",
        },
        "Vespucci Blvd": {
          crossStreet1: "Decker St",
          crossStreet2: "Ginger St",
        },
        "Ginger St": {
          crossStreet1: "S. Rockford Dr",
          crossStreet2: "Vespucci Blvd",
        },
        "S. Rockford Dr": {
          crossStreet1: "Decker St",
          crossStreet2: "Ginger St",
        },
      },
    },
  },
  {
    postal: "721",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0806",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "S. Rockford Dr": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "Ginger St",
        },
        "Ginger St": {
          crossStreet1: "S. Rockford Dr",
          crossStreet2: "Lindsay Circus",
        },
        "Lindsay Circus": {
          crossStreet1: "Ginger St",
          crossStreet2: "Palomino Ave",
        },
        "Palomino Ave": {
          crossStreet1: "S. Rockford Dr",
          crossStreet2: "Lindsay Circus",
        },
      },
    },
  },
  {
    postal: "722",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0816",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "S. Rockford Dr": {
          crossStreet1: "Tackle St",
          crossStreet2: "Palomino Ave",
        },
        "Palomino Ave": {
          crossStreet1: "S. Rockford Dr",
          crossStreet2: "Lindsay Circus",
        },
      },
    },
  },
  {
    postal: "723",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0816",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "S. Rockford Dr": {
          crossStreet1: "Dutch Lundon St",
          crossStreet2: "Palomino Ave",
        },
        "Calais Ave": {
          crossStreet1: "S. Rockford Dr",
          crossStreet2: "Adam's Apple Blvd",
        },
      },
    },
  },
  {
    postal: "724",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0816",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Calais Ave": {
          crossStreet1: "S. Rockford Dr",
          crossStreet2: "Innocence Blvd",
        },
        "Innocence Blvd": {
          crossStreet1: "Calais Ave",
          crossStreet2: "Interstate 5",
        },
      },
    },
  },
  {
    postal: "725",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Palomino Ave": {
          crossStreet1: "S. Rockford Dr",
          crossStreet2: "Lindsay Circus",
        },
        "Lindsay Circus": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "Calais Ave",
        },
        "Calais Ave": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Lindsay Circus",
        },
      },
    },
  },
  {
    postal: "726",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Ginger St": {
          crossStreet1: "Lindsay Circus",
          crossStreet2: "Vespucci Blvd",
        },
        "Vespucci Blvd": {
          crossStreet1: "Ginger St",
          crossStreet2: "Palomino Ave",
        },
        "Palomino Ave": {
          crossStreet1: "Lindsay Circus",
          crossStreet2: "Vespucci Blvd",
        },
        "Lindsay Circus": {
          crossStreet1: "Ginger St",
          crossStreet2: "Palomino Ave",
        },
      },
    },
  },
  {
    postal: "727",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0819",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Decker St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "San Andreas Ave": {
          crossStreet1: "Decker St",
          crossStreet2: "Ginger St",
        },
        "Ginger St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "Vespucci Blvd": {
          crossStreet1: "Decker St",
          crossStreet2: "Ginger St",
        },
      },
    },
  },
  {
    postal: "728",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0819",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 EB": {
          crossStreet1: "Rockford Dr Entrance",
          crossStreet2: "I2 MM02.00",
        },
        "I2 WB": {
          crossStreet1: "Rockford Dr Exit",
          crossStreet2: "I2 MM02.00",
        },
        "I2 EB to Palomino Ave Ramp": {
          crossStreet1: "I2 EB",
          crossStreet2: "Palomino Ave",
        },
        "Movie Star Way": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Heritage Way",
        },
        "San Andreas Ave": {
          crossStreet1: "Movie Star Way",
          crossStreet2: "Ginger St",
        },
      },
    },
  },
  {
    postal: "729",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0819",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 EB": {
          crossStreet1: "Rockford Dr Entrance",
          crossStreet2: "I2 MM02.00",
        },
        "I2 WB": {
          crossStreet1: "Rockford Dr Exit",
          crossStreet2: "I2 MM02.00",
        },
        "I2 EB to Palomino Ave Ramp": {
          crossStreet1: "I2 EB",
          crossStreet2: "Palomino Ave",
        },
        "Palomino Ave": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Dorset Dr",
        },
        "San Andreas Ave": {
          crossStreet1: "Ginger St",
          crossStreet2: "Palomino Ave",
        },
      },
    },
  },
  {
    postal: "730",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Ginger St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "San Andreas Ave": {
          crossStreet1: "Ginger St",
          crossStreet2: "Palomino Ave",
        },
        "Palomino Ave": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "Vespucci Blvd": {
          crossStreet1: "Ginger St",
          crossStreet2: "Palomino Ave",
        },
      },
    },
  },
  {
    postal: "731",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Palomino Ave": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "San Andreas Ave": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "Calais Ave",
        },
        "Calais Ave": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "Vespucci Blvd": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "Calais Ave",
        },
      },
    },
  },
  {
    postal: "732",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0818",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Palomino Ave": {
          crossStreet1: "Lindsay Circus",
          crossStreet2: "Vespucci Blvd",
        },
        "Vespucci Blvd": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "Calais Ave",
        },
        "Calais Ave": {
          crossStreet1: "Lindsay Circus",
          crossStreet2: "Vespucci Blvd",
        },
        "Lindsay Circus": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "Calais Ave",
        },
      },
    },
  },
  {
    postal: "733",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0815",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Calais Ave": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Vespucci Blvd",
        },
        "I5 SB [U]": {
          crossStreet1: "I5 MM01.00",
          crossStreet2: "I2 WB to I5 SB",
        },
        "I5 NB [U]": {
          crossStreet1: "I5 MM01.00",
          crossStreet2: "I2 EB to I5 NB",
        },
        "I5 SB [L]": {
          crossStreet1: "Innocence Blvd Exit",
          crossStreet2: "I5 SB [U]",
        },
        "I5 NB [L]": {
          crossStreet1: "Innocence Blvd Exit",
          crossStreet2: "I5 NB [U]",
        },
      },
    },
  },
  {
    postal: "734",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0831",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I5 SB": {
          crossStreet1: "I5 MM01.00",
          crossStreet2: "I2 WB to I5 SB",
        },
        "I5 NB": {
          crossStreet1: "I5 MM01.00",
          crossStreet2: "I2 EB to I5 NB",
        },
        "Calais Ave": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "San Andreas Ave": {
          crossStreet1: "Calais Ave",
          crossStreet2: "Ginger St",
        },
        "Vespucci Blvd": {
          crossStreet1: "Calais Ave",
          crossStreet2: "Peaceful St",
        },
      },
    },
  },
  {
    postal: "735",
    twp: "Los Santos City",
    fdDistrict: "08",
    policeDistrict: "LSPD",
    fireBox: "0831",
    fdRunOrder: ["8", "10", "1", "6", "5", "7", "4", "2", "3", "9", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 EB": {
          crossStreet1: "Palomino Ave Exit",
          crossStreet2: "I2 MM02.00",
        },
        "I2 WB": {
          crossStreet1: "Palomino Ave Entrance",
          crossStreet2: "I2 MM02.00",
        },
        "I5 SB": {
          crossStreet1: "I2 WB to I5 SB",
          crossStreet2: "I5 MM01.00",
        },
        "I5 NB": {
          crossStreet1: "I4 WB to I5 NB",
          crossStreet2: "I5 NB to I2 EB",
        },
        "Palomino Ave to I5 SB Ramp": {
          crossStreet1: "I2 EB",
          crossStreet2: "Palomino Ave",
        },
        "I2 EB to I5 SB Ramp": {
          crossStreet1: "I2 EB",
          crossStreet2: "I5 SB",
        },
        "Palomino Ave": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Dorset Dr",
        },
        "Ginger St": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Dead End",
        },
        "San Andreas Ave": {
          crossStreet1: "Palomino Ave",
          crossStreet2: "Ginger St",
        },
      },
    },
  },
  {
    postal: "736",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1035",
    fdRunOrder: ["10", "1", "8", "6", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I5 SB": {
          crossStreet1: "I5 SB to I4 EB",
          crossStreet2: "I2 WB to I5 SB",
        },
        "I5 NB": {
          crossStreet1: "I4 WB to I5 NB",
          crossStreet2: "I5 NB to I2 EB",
        },
        "I2 EB": {
          crossStreet1: "I2 MM02.00",
          crossStreet2: "Elgin Ave Exit",
        },
        "I2 WB": {
          crossStreet1: "I2 MM02.00",
          crossStreet2: "Elgin Ave Entrance",
        },
        "I5 NB to I2 EB Ramp": {
          crossStreet1: "I5 NB",
          crossStreet2: "I2 EB",
        },
        "San Andreas Ave": {
          crossStreet1: "Ginger St",
          crossStreet2: "Las Lagunas Blvd",
        },
        "Las Lagunas Blvd": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Dorset Dr",
        },
      },
    },
  },
  {
    postal: "737",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1036",
    fdRunOrder: ["10", "1", "8", "6", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I5 SB [U]": {
          crossStreet1: "I5 MM01.00",
          crossStreet2: "I2 WB to I5 SB",
        },
        "I5 NB [U]": {
          crossStreet1: "I5 MM01.00",
          crossStreet2: "I2 EB to I5 NB",
        },
        "I5 SB [L]": {
          crossStreet1: "Innocence Blvd Exit",
          crossStreet2: "I5 SB [U]",
        },
        "I5 NB [L]": {
          crossStreet1: "Innocence Blvd Exit",
          crossStreet2: "I5 NB [U]",
        },
        "San Andreas Ave": {
          crossStreet1: "Ginger St",
          crossStreet2: "Peaceful St",
        },
        "Peaceful St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "Vespucci Blvd": {
          crossStreet1: "Calais Ave",
          crossStreet2: "Peaceful St",
        },
      },
    },
  },
  {
    postal: "738",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1024",
    fdRunOrder: ["10", "6", "1", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I5 SB [U]": {
          crossStreet1: "I5 MM01.00",
          crossStreet2: "I2 WB to I5 SB",
        },
        "I5 NB [U]": {
          crossStreet1: "I5 MM01.00",
          crossStreet2: "I2 EB to I5 NB",
        },
        "I5 SB [L]": {
          crossStreet1: "Innocence Blvd Exit",
          crossStreet2: "I5 SB [U]",
        },
        "I5 NB [L]": {
          crossStreet1: "Innocence Blvd Exit",
          crossStreet2: "I5 NB [U]",
        },
        "Vespucci Blvd": {
          crossStreet1: "Calais Ave",
          crossStreet2: "Alta St",
        },
        "Alta St": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Vespucci Blvd",
        },
      },
    },
  },
  {
    postal: "739",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1023",
    fdRunOrder: ["10", "6", "1", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I5 SB [U]": {
          crossStreet1: "I5 MM01.00",
          crossStreet2: "I2 EB to I5 SB",
        },
        "I5 NB [U]": {
          crossStreet1: "I5 MM01.00",
          crossStreet2: "I5 NB to I2 EB",
        },
        "I5 SB [L]": {
          crossStreet1: "Innocence Blvd Exit",
          crossStreet2: "I5 SB [U]",
        },
        "I5 NB [L]": {
          crossStreet1: "Innocence Blvd Entrance",
          crossStreet2: "I5 NB [U]",
        },
        "I4 EB": {
          crossStreet1: "I5 SB to I4 EB",
          crossStreet2: "Elgin Ave Exit",
        },
        "I4 WB": {
          crossStreet1: "I4 WB to I5 NB",
          crossStreet2: "Elgin Ave Entrance",
        },
        "I4 WB to I5 NB Ramp": {
          crossStreet1: "I4 WB",
          crossStreet2: "I5 NB",
        },
        "I5 SB to I4 EB Ramp": {
          crossStreet1: "I5 SB",
          crossStreet2: "I4 EB",
        },
        "I4 WB to I5 SB Ramp": {
          crossStreet1: "I4 WB",
          crossStreet2: "I5 SB",
        },
        "Alta St": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Vespucci Blvd",
        },
        "Adam's Apple Blvd": {
          crossStreet1: "Calais Ave",
          crossStreet2: "Alta St",
        },
      },
    },
  },
  {
    postal: "740",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1029",
    fdRunOrder: ["10", "1", "6", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Peaceful St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "San Andreas Ave [L]": {
          crossStreet1: "Peaceful St",
          crossStreet2: "Alta St",
        },
        "San Andreas Ave [U]": {
          crossStreet1: "Peaceful St",
          crossStreet2: "Power St",
        },
        "Alta St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "Vespucci Blvd": {
          crossStreet1: "Peaceful St",
          crossStreet2: "Alta St",
        },
      },
    },
  },
  {
    postal: "741",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1037",
    fdRunOrder: ["10", "1", "6", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "I2 MM02.00",
          crossStreet2: "Elgin Ave Entrance",
        },
        "I2 EB": {
          crossStreet1: "I2 MM02.00",
          crossStreet2: "Elgin Ave Exit",
        },
        "Las Lagunas Blvd": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Dorset Dr",
        },
        "Alta St": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Integrity Way",
        },
        "San Andreas Ave [L]": {
          crossStreet1: "Peaceful St",
          crossStreet2: "Alta St",
        },
        "San Andreas Ave [U]": {
          crossStreet1: "Peaceful St",
          crossStreet2: "Power St",
        },
      },
    },
  },
  {
    postal: "742",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1039",
    fdRunOrder: ["10", "1", "6", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "I2 MM02.00",
          crossStreet2: "Elgin Ave Entrance",
        },
        "I2 EB": {
          crossStreet1: "I2 MM02.00",
          crossStreet2: "Elgin Ave Exit",
        },
        "Alta St": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Integrity Way",
        },
        "Integrity Way": {
          crossStreet1: "Alta St",
          crossStreet2: "Low Power St",
        },
        "Low Power St": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Integrity Way",
        },
        "Power St (Upper)": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Swiss St",
        },
        "San Andreas Ave [L]": {
          crossStreet1: "Peaceful St",
          crossStreet2: "Alta St",
        },
        "San Andreas Ave [U]": {
          crossStreet1: "Peaceful St",
          crossStreet2: "Power St",
        },
      },
    },
  },
  {
    postal: "743",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1029",
    fdRunOrder: ["10", "1", "6", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Alta St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "San Andreas Ave [L]": {
          crossStreet1: "Peaceful St",
          crossStreet2: "Alta St",
        },
        "San Andreas Ave [U]": {
          crossStreet1: "Peaceful St",
          crossStreet2: "Power St",
        },
        "Low Power St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave [L]",
        },
        "Power St (Upper)": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave [U]",
        },
        "Vespucci Blvd": {
          crossStreet1: "Alta St",
          crossStreet2: "Power St",
        },
      },
    },
  },
  {
    postal: "744",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1020",
    fdRunOrder: ["10", "6", "1", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 WB": {
          crossStreet1: "I4 WB to I5 NB",
          crossStreet2: "Elgin Ave Entrance",
        },
        "I4 EB": {
          crossStreet1: "I5 SB to I4 EB",
          crossStreet2: "Elgin Ave Exit",
        },
        "Alta St": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Vespucci Blvd",
        },
        "Vespucci Blvd": {
          crossStreet1: "Alta St",
          crossStreet2: "Power St",
        },
        "Power St": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Vespucci Blvd",
        },
        "Adam's Apple Blvd": {
          crossStreet1: "Alta St",
          crossStreet2: "Power St",
        },
      },
    },
  },
  {
    postal: "745",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "1", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 WB": {
          crossStreet1: "I4 WB to I5 NB",
          crossStreet2: "Elgin Ave Entrance",
        },
        "I4 EB": {
          crossStreet1: "I5 SB to I4 EB",
          crossStreet2: "Elgin Ave Exit",
        },
        "Elgin Ave to I4 WB Ramp": {
          crossStreet1: "I4 WB",
          crossStreet2: "Elgin Ave",
        },
        "Power St": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Vespucci Blvd",
        },
        "Vespucci Blvd": {
          crossStreet1: "Power St",
          crossStreet2: "Elgin Ave",
        },
        "Elgin Ave": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Vespucci Blvd",
        },
        "Adam's Apple Blvd": {
          crossStreet1: "Power St",
          crossStreet2: "Elgin Ave",
        },
      },
    },
  },
  {
    postal: "746",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1021",
    fdRunOrder: ["10", "1", "6", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Power St (Upper)": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave [U]",
        },
        "Lower Power St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave [L]",
        },
        "San Andreas Ave [L]": {
          crossStreet1: "Lower Power St",
          crossStreet2: "Elgin Ave",
        },
        "San Andreas Ave [U]": {
          crossStreet1: "Power St (Upper)",
          crossStreet2: "Dead End",
        },
        "Elgin Ave": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "Vespucci Blvd": {
          crossStreet1: "Power St",
          crossStreet2: "Elgin Ave",
        },
      },
    },
  },
  {
    postal: "747",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1021",
    fdRunOrder: ["10", "1", "6", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Lower Power St": {
          crossStreet1: "San Andreas Ave [L]",
          crossStreet2: "Integrity Way",
        },
        "Power St (Upper)": {
          crossStreet1: "San Andreas Ave [U]",
          crossStreet2: "Swiss St",
        },
        "Integrity Way": {
          crossStreet1: "Lower Power St",
          crossStreet2: "Strawberry Ave",
        },
        "Swiss St": {
          crossStreet1: "Power St (Upper)",
          crossStreet2: "Elgin Ave",
        },
        "Elgin Ave": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Swiss St",
        },
        "San Andreas Ave [L]": {
          crossStreet1: "Lower Power St",
          crossStreet2: "Elgin Ave",
        },
        "San Andreas Ave [U]": {
          crossStreet1: "Peaceful St",
          crossStreet2: "Power St (Upper)",
        },
      },
    },
  },
  {
    postal: "748",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1039",
    fdRunOrder: ["10", "1", "6", "8", "7", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "I2 WB to I5 SB",
          crossStreet2: "I2 MM03.00",
        },
        "I2 EB": {
          crossStreet1: "I5 NB to I2 EB",
          crossStreet2: "I2 MM03.00",
        },
        "I2 EB to Elgin Ave Ramp": {
          crossStreet1: "I2 EB",
          crossStreet2: "Elgin Ave",
        },
        "Power St": {
          crossStreet1: "Swiss St",
          crossStreet2: "Occupation Ave",
        },
        "Elgin Ave": {
          crossStreet1: "Swiss St",
          crossStreet2: "Occupation Ave",
        },
        "Swiss St": {
          crossStreet1: "Power St",
          crossStreet2: "Elgin Ave",
        },
        "Integrity Way": {
          crossStreet1: "Lower Power St",
          crossStreet2: "Strawberry Ave",
        },
      },
    },
  },
  {
    postal: "749",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1028",
    fdRunOrder: ["10", "1", "6", "7", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "I2 WB to I5 SB",
          crossStreet2: "I2 MM03.00",
        },
        "I2 EB": {
          crossStreet1: "I5 NB to I2 EB",
          crossStreet2: "I2 MM03.00",
        },
        "Elgin Ave to Popular St Ramp": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "Popular St",
        },
        "Elgin Ave to I2 EB Ramp": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "I2 EB",
        },
        "I1 NB": {
          crossStreet1: "Integrity Way",
          crossStreet2: "Popular St Entrance",
        },
        "I1 SB": {
          crossStreet1: "Integrity Way",
          crossStreet2: "Popular St Exit",
        },
        "Elgin Ave": {
          crossStreet1: "Swiss St",
          crossStreet2: "Occupation Ave",
        },
        "Integrity Way": {
          crossStreet1: "Lower Power St",
          crossStreet2: "Strawberry Ave",
        },
        "Strawberry Ave": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Integrity Way",
        },
      },
    },
  },
  {
    postal: "750",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1021",
    fdRunOrder: ["10", "6", "1", "7", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Elgin Ave": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Swiss St",
        },
        "Integrity Way": {
          crossStreet1: "Lower Power St",
          crossStreet2: "Strawberry Ave",
        },
        "Strawberry Ave": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Integrity Way",
        },
        "San Andreas Ave": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "Strawberry Ave",
        },
      },
    },
  },
  {
    postal: "751",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "1", "7", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Elgin Ave": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "San Andreas Ave": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "Strawberry Ave",
        },
        "Strawberry Ave": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "Vespucci Blvd": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "Strawberry Ave",
        },
      },
    },
  },
  {
    postal: "752",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "1", "7", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 WB": {
          crossStreet1: "I4 WB to I5 NB",
          crossStreet2: "I4 MM01.00",
        },
        "I4 EB": {
          crossStreet1: "I5 SB to I4 EB",
          crossStreet2: "I4 MM01.00",
        },
        "I4 WB to Elgin Ave Ramp": {
          crossStreet1: "I4 WB",
          crossStreet2: "Elgin Ave",
        },
        "Elgin Ave": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Vespucci Blvd",
        },
        "Vespucci Blvd": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "Strawberry Ave",
        },
        "Strawberry Ave": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Vespucci Blvd",
        },
        "Adam's Apple Blvd": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "Strawberry Ave",
        },
      },
    },
  },
  {
    postal: "753",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 WB": {
          crossStreet1: "Elgin Ave Exit",
          crossStreet2: "I4 MM01.00",
        },
        "I4 EB": {
          crossStreet1: "Elgin Ave Entrance",
          crossStreet2: "I4 MM01.00",
        },
        "I4 WB to Elgin Ave Ramp": {
          crossStreet1: "I4 WB",
          crossStreet2: "Elgin Ave",
        },
        "Strawberry Ave": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Vespucci Blvd",
        },
        "Vespucci Blvd": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Unk Alleyway",
        },
        "Unk Alleyway": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Vespucci Blvd",
        },
        "Adam's Apple Blvd": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Unk Alleyway",
        },
      },
    },
  },
  {
    postal: "754",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 WB": {
          crossStreet1: "Elgin Ave Exit",
          crossStreet2: "I4 MM01.00",
        },
        "I4 EB": {
          crossStreet1: "Elgin Ave Entrance",
          crossStreet2: "I4 MM01.00",
        },
        "Unk Alleyway": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Vespucci Blvd",
        },
        "Vespucci Blvd": {
          crossStreet1: "Unk Alleyway",
          crossStreet2: "Sinner St",
        },
        "Sinner St": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Vespucci Blvd",
        },
        "Adam's Apple Blvd": {
          crossStreet1: "Unk Alleyway",
          crossStreet2: "Sinner St",
        },
      },
    },
  },
  {
    postal: "755",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Strawberry Ave": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "Atlee St",
        },
        "Atlee St": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Sinner St",
        },
        "Sinner St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "Atlee St",
        },
        "Vespucci Blvd": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Sinner St",
        },
      },
    },
  },
  {
    postal: "756",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Strawberry Ave": {
          crossStreet1: "Atlee St",
          crossStreet2: "San Andreas Ave",
        },
        "San Andreas Ave": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Sinner St",
        },
        "Sinner St": {
          crossStreet1: "Atlee St",
          crossStreet2: "San Andreas Ave",
        },
        "Atlee St": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Sinner St",
        },
      },
    },
  },
  {
    postal: "757",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Strawberry Ave": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Integrity Way",
        },
        "Integrity Way": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Sinner St",
        },
        "Sinner St": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "Integrity Way",
        },
        "San Andreas Ave": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Sinner St",
        },
      },
    },
  },
  {
    postal: "758",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1027",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 EB": {
          crossStreet1: "Elgin Ave Exit",
          crossStreet2: "I2 MM03.00",
        },
        "I2 WB": {
          crossStreet1: "Elgin Ave Entrance",
          crossStreet2: "I2 MM03.00",
        },
        "Elgin Ave to Popular St Ramp": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "Popular St",
        },
        "Elgin Ave to I2 EB Ramp": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "I2 EB",
        },
        "I1 NB": {
          crossStreet1: "Integrity Way",
          crossStreet2: "Popular St Entrance",
        },
        "I1 SB": {
          crossStreet1: "Integrity Way",
          crossStreet2: "Popular St Exit",
        },
        "Intgrity Way": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Little Bighorn Ave",
        },
        "Little Bighorn Ave": {
          crossStreet1: "Sinners Passage",
          crossStreet2: "Integrity Way",
        },
      },
    },
  },
  {
    postal: "759",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Sinners Passage": {
          crossStreet1: "Sinner St",
          crossStreet2: "Little Bighorn Ave",
        },
        "Sinner St": {
          crossStreet1: "Sinners Passage",
          crossStreet2: "Integrity Way",
        },
        "Integrity Way": {
          crossStreet1: "Sinner St",
          crossStreet2: "Little Bighorn Ave",
        },
        "Little Bighorn Ave": {
          crossStreet1: "Sinners Passage",
          crossStreet2: "Integrity Way",
        },
        "San Andreas Ave": {
          crossStreet1: "Sinner St",
          crossStreet2: "Supply St",
        },
      },
    },
  },
  {
    postal: "760",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Atlee St": {
          crossStreet1: "Sinner St",
          crossStreet2: "Little Bighorn Ave",
        },
        "Sinner St": {
          crossStreet1: "Atlee St",
          crossStreet2: "San Andreas Ave",
        },
        "San Andreas Ave": {
          crossStreet1: "Sinner St",
          crossStreet2: "Supply St",
        },
        "Little Bighorn Ave": {
          crossStreet1: "Atlee St",
          crossStreet2: "Sinners Passage",
        },
      },
    },
  },
  {
    postal: "761",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Vespucci Blvd": {
          crossStreet1: "Sinner St",
          crossStreet2: "Popular St",
        },
        "Sinner St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "Atlee St",
        },
        "Atlee St": {
          crossStreet1: "Sinner St",
          crossStreet2: "Little Bighorn Ave",
        },
        "Little Bighorn Ave": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Atlee St",
        },
      },
    },
  },
  {
    postal: "762",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1022",
    fdRunOrder: ["10", "6", "7", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 WB": {
          crossStreet1: "Elgin Ave Exit",
          crossStreet2: "I4 MM01.00",
        },
        "I4 EB": {
          crossStreet1: "Elgin Ave Entrance",
          crossStreet2: "I4 MM01.00",
        },
        "Adam's Apple Blvd": {
          crossStreet1: "Sinner St",
          crossStreet2: "Little Bighorn Ave",
        },
        "Sinner St": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Vespucci Blvd",
        },
        "Vespucci Blvd": {
          crossStreet1: "Sinner St",
          crossStreet2: "Popular St",
        },
        "Little Bighorn Ave": {
          crossStreet1: "Adam's Apple Blvd",
          crossStreet2: "Atlee St",
        },
      },
    },
  },
  {
    postal: "763",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1088",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 WB": {
          crossStreet1: "Elgin Ave Exit",
          crossStreet2: "Popular St Entrance",
        },
        "I4 EB": {
          crossStreet1: "Elgin Ave Entrance",
          crossStreet2: "Popular St Exit",
        },
        "Vespucci Blvd": {
          crossStreet1: "Sinner St",
          crossStreet2: "Popular St",
        },
      },
    },
  },
  {
    postal: "764",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1019",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "San Andreas Ave": {
          crossStreet1: "Sinner St",
          crossStreet2: "Supply St",
        },
        "Popular St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "Supply St",
        },
        "Vespucci Blvd": {
          crossStreet1: "Sinner St",
          crossStreet2: "Popular St",
        },
      },
    },
  },
  {
    postal: "765",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1020",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "San Andreas Ave": {
          crossStreet1: "Sinner St",
          crossStreet2: "Supply St",
        },
        "Popular St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "Supply St",
        },
      },
    },
  },
  {
    postal: "766",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1013",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["SAHP", "LSPD", "LCSO", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "Elgin Ave Entrance",
          crossStreet2: "Mirror Park Exit",
        },
        "I2 EB": {
          crossStreet1: "Mirror Park Entrance",
          crossStreet2: "Elgin Ave Exit",
        },
        "I1 SB to I2 EB Ramp": {
          crossStreet1: "I1 SB",
          crossStreet2: "I2 EB",
        },
        "Popular St to I2 EB Ramp": {
          crossStreet1: "Popular St",
          crossStreet2: "I2 EB",
        },
      },
    },
  },
  {
    postal: "767",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1020",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "Rt 15 WB to I2 WB",
          crossStreet2: "I2 MM03.00",
        },
        "I2 EB": {
          crossStreet1: "I2 EB to I4 WB",
          crossStreet2: "I2 MM03.00",
        },
        "I2 EB to San Andreas Ave Ramp": {
          crossStreet1: "I2 EB",
          crossStreet2: "San Andreas Ave",
        },
        "San Andreas Ave to I2 WB Ramp": {
          crossStreet1: "San Andreas Ave",
          crossStreet2: "I2 WB",
        },
        "Popular St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "Glory Way",
        },
        "Supply St": {
          crossStreet1: "Popular St",
          crossStreet2: "San Andreas Ave",
        },
      },
    },
  },
  {
    postal: "768",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1019",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 EB": {
          crossStreet1: "Mirror Park Exit",
          crossStreet2: "I2 EB to I4 WB",
        },
        "I2 WB": {
          crossStreet1: "Mirror Park Entrance",
          crossStreet2: "Rt 15 WB to I2 WB",
        },
        "Vespucci Blvd": {
          crossStreet1: "Popular St",
          crossStreet2: "Supply St",
        },
        "Popular St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "Supply St",
        },
        "San Andreas Ave": {
          crossStreet1: "Sinner St",
          crossStreet2: "Supply St",
        },
        "Supply St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
      },
    },
  },
  {
    postal: "769",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1018",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 WB": {
          crossStreet1: "I4 MM01.00",
          crossStreet2: "I2 EB to I4 WB",
        },
        "I4 EB": {
          crossStreet1: "I4 MM01.00",
          crossStreet2: "I4 EB to Rt 20 SB",
        },
        "I4 WB to Popular St Ramp": {
          crossStreet1: "I4 WB",
          crossStreet2: "Popular St",
        },
        "Popular St to I4 WB Ramp": {
          crossStreet1: "Popular St",
          crossStreet2: "I4 WB",
        },
        "Vespucci Blvd": {
          crossStreet1: "Sinner St",
          crossStreet2: "Supply St",
        },
        "Popular St": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "Supply St",
        },
        "Supply St": {
          crossStreet1: "Popular St",
          crossStreet2: "Vespucci Blvd",
        },
      },
    },
  },
  {
    postal: "770",
    twp: "Los Santos City",
    fdDistrict: "10",
    policeDistrict: "LSPD",
    fireBox: "1019",
    fdRunOrder: ["10", "7", "6", "1", "8", "5", "2", "4", "9", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 WB": {
          crossStreet1: "Popular St Exit",
          crossStreet2: "Rt 15 WB to I2 WB",
        },
        "I4 EB": {
          crossStreet1: "Popular St Entrance",
          crossStreet2: "I4 EB to Rt 15 NB",
        },
        "I2 EB": {
          crossStreet1: "Mirror Park Exit",
          crossStreet2: "I2 EB to I4 WB",
        },
        "I2 WB": {
          crossStreet1: "Mirror Park Entrance",
          crossStreet2: "Rt 15 WB to I2 WB",
        },
        "I2 EB to I4 WB Ramp": {
          crossStreet1: "I2 EB",
          crossStreet2: "I4 WB",
        },
        "I2 EB to Rt 15 NB Ramp": {
          crossStreet1: "I2 EB",
          crossStreet2: "Rt 15 NB",
        },
        "I4 EB to Rt 20 SB Ramp": {
          crossStreet1: "I4 EB",
          crossStreet2: "Rt 20 SB",
        },
        "I4 EB to I2 WB Ramp": {
          crossStreet1: "I4 EB",
          crossStreet2: "I2 WB",
        },
        "Supply St": {
          crossStreet1: "Popular St",
          crossStreet2: "San Andreas Ave",
        },
        "Vespucci Blvd": {
          crossStreet1: "Popular St",
          crossStreet2: "Supply St",
        },
      },
    },
  },
  {
    postal: "771",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0702",
    fdRunOrder: ["7", "10", "6", "1", "8", "5", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "Mirror Park Entrance",
          crossStreet2: "Rt 15 SB to I2 WB",
        },
        "I2 EB": {
          crossStreet1: "Mirror Park Exit",
          crossStreet2: "I2 EB to I4 WB",
        },
        "Rt 15 SB to I2 WB Ramp": {
          crossStreet1: "Rt 15 SB",
          crossStreet2: "I2 WB",
        },
        "I4 EB to I2 WB Ramp": {
          crossStreet1: "I4 EB",
          crossStreet2: "I2 WB",
        },
        "San Andreas Ave": {
          crossStreet1: "Supply St",
          crossStreet2: "Mirror Park Blvd",
        },
        "Mirror Park Blvd": {
          crossStreet1: "Vespucci Blvd",
          crossStreet2: "San Andreas Ave",
        },
        "Vespucci Blvd": {
          crossStreet1: "Supply St",
          crossStreet2: "Mirror Park Blvd",
        },
      },
    },
  },
  {
    postal: "772",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0702",
    fdRunOrder: ["7", "10", "6", "1", "8", "5", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 WB": {
          crossStreet1: "Mirror Park Entrance",
          crossStreet2: "Rt 20 NB to I2 WB",
        },
        "I2 EB": {
          crossStreet1: "Mirror Park Exit",
          crossStreet2: "I2 EB to Rt 20 SB",
        },
        "I4 EB": {
          crossStreet1: "I4 EB to I2 WB",
          crossStreet2: "I4 EB to Rt 15 NB",
        },
        "I4 WB": {
          crossStreet1: "Rt 15 SB to I4 WB",
          crossStreet2: "Popular St Exit",
        },
        "Rt 15 SB to I2 WB Ramp": {
          crossStreet1: "Rt 15 SB",
          crossStreet2: "I2 WB",
        },
        "Rt 15 SB to Rt 20 SB Ramp": {
          crossStreet1: "Rt 15 SB",
          crossStreet2: "Rt 20 SB",
        },
        "I2 EB to Rt 15 NB Ramp": {
          crossStreet1: "I2 EB",
          crossStreet2: "Rt 15 NB",
        },
        "I2 EB to I4 WB Ramp": {
          crossStreet1: "I2 EB",
          crossStreet2: "I4 WB",
        },
        "I4 EB to Rt 20 SB Ramp": {
          crossStreet1: "I4 EB",
          crossStreet2: "Rt 20 SB",
        },
        "I4 EB to I2 WB Ramp": {
          crossStreet1: "I4 EB",
          crossStreet2: "I2 WB",
        },
        "Mirror Park Blvd": {
          crossStreet1: "Capital Blvd",
          crossStreet2: "Vespucci Blvd",
        },
        "Vespucci Blvd": {
          crossStreet1: "Supply St",
          crossStreet2: "Mirror Park Blvd",
        },
      },
    },
  },
  {
    postal: "773",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7209",
    fdRunOrder: ["7", "10", "6", "1", "8", "5", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I2 EB": {
          crossStreet1: "I2 EB to Rt 20 SB",
          crossStreet2: "I2 EB to I4 WB Exit",
        },
        "I2 WB": {
          crossStreet1: "Rt 20 NB to I2 WB",
          crossStreet2: "Rt 15 SB to I2 WB Entrance",
        },
        "I4 EB": {
          crossStreet1: "I4 EB to Rt 15 NB",
          crossStreet2: "I4 EB to Rt 20 SB Exit",
        },
        "I4 WB": {
          crossStreet1: "Rt 15 SB to I4 WB",
          crossStreet2: "I2 EB to I4 WB Entrance",
        },
        "Rt 20 NB": {
          crossStreet1: "Rt 20 NB to I2 WB",
          crossStreet2: "East LS Entrance",
        },
        "Rt 20 SB": {
          crossStreet1: "I2 EB to Rt 20 SB",
          crossStreet2: "East LS Exit",
        },
        "Rt 15 SB to I2 WB Ramp": {
          crossStreet1: "Rt 15 SB",
          crossStreet2: "I2 WB",
        },
        "Rt 15 SB to Rt 20 SB Ramp": {
          crossStreet1: "Rt 15 SB",
          crossStreet2: "Rt 20 SB",
        },
        "I2 EB to Rt 15 NB Ramp": {
          crossStreet1: "I2 EB",
          crossStreet2: "Rt 15 NB",
        },
        "I2 EB to I4 WB Ramp": {
          crossStreet1: "I2 EB",
          crossStreet2: "I4 WB",
        },
        "I4 EB to Rt 20 SB Ramp": {
          crossStreet1: "I4 EB",
          crossStreet2: "Rt 20 SB",
        },
        "I4 EB to I2 WB Ramp": {
          crossStreet1: "I4 EB",
          crossStreet2: "I2 WB",
        },
        "Rt 20 NB to Rt 15 NB Ramp": {
          crossStreet1: "Rt 20 NB",
          crossStreet2: "Rt 15 NB",
        },
        "Rt 20 NB to I4 WB Ramp": {
          crossStreet1: "Rt 20 NB",
          crossStreet2: "I4 WB",
        },
        "El Rancho Blvd": {
          crossStreet1: "Capital Blvd",
          crossStreet2: "Vespucci Blvd",
        },
      },
    },
  },
  {
    postal: "774",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0751",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Fudge Ln": {
          crossStreet1: "El Rancho Blvd",
          crossStreet2: "Sustancia Rd",
        },
        "Sustancia Rd": {
          crossStreet1: "El Rancho Blvd",
          crossStreet2: "El Burro Blvd",
        },
      },
    },
  },
  {
    postal: "775",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0712",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Sustancia Rd": {
          crossStreet1: "Fudge Ln",
          crossStreet2: "El Burro Blvd",
        },
        "El Burro Blvd": {
          crossStreet1: "Rt 20 NB",
          crossStreet2: "Sustancia Rd",
        },
      },
    },
  },
  {
    postal: "776",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0712",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Sustancia Rd": {
          crossStreet1: "Fudge Ln",
          crossStreet2: "El Burro Blvd",
        },
        "El Burro Blvd": {
          crossStreet1: "Rt 20 NB",
          crossStreet2: "Sustancia Rd",
        },
      },
    },
  },
  {
    postal: "777",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0751",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Sustancia Rd": {
          crossStreet1: "Fudge Ln",
          crossStreet2: "Noose Approach",
        },
        "El Burro Blvd": {
          crossStreet1: "Rt 20 NB",
          crossStreet2: "Sustancia Rd",
        },
      },
    },
  },
  {
    postal: "778",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0711",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "El Burro Blvd",
      crossStreet1: "Rt 20 NB",
      crossStreet2: "Sustancia Rd",
    },
  },
  {
    postal: "779",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0711",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "El Rancho Blvd": {
          crossStreet1: "Rt 20 NB",
          crossStreet2: "Sustancia Rd",
        },
        "Sustancia Rd": {
          crossStreet1: "El Rancho Blvd",
          crossStreet2: "El Burro Blvd",
        },
        "El Burro Blvd": {
          crossStreet1: "Rt 20 NB",
          crossStreet2: "Sustancia Rd",
        },
      },
    },
  },
  {
    postal: "780",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0751",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "El Burro Blvd",
      crossStreet1: "Rt 20 NB",
      crossStreet2: "Sustancia Rd",
    },
  },
  {
    postal: "781",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0711",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "El Rancho Blvd": {
          crossStreet1: "Rt 20 NB",
          crossStreet2: "Labor Pl",
        },
        "El Burro Blvd": {
          crossStreet1: "Rt 20 NB",
          crossStreet2: "Sustancia Rd",
        },
      },
    },
  },
  {
    postal: "782",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0711",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "El Rancho Blvd": {
          crossStreet1: "Rt 20 NB",
          crossStreet2: "Labor Pl",
        },
        "El Burro Blvd": {
          crossStreet1: "Rt 20 NB",
          crossStreet2: "Sustancia Rd",
        },
      },
    },
  },
  {
    postal: "783",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0751",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "El Burro Blvd",
      crossStreet1: "Rt 20 NB",
      crossStreet2: "Sustancia Rd",
    },
  },
  {
    postal: "784",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0710",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20 NB": {
          crossStreet1: "El Burro Blvd",
          crossStreet2: "El Rancho Blvd",
        },
        "Rt 20 SB": {
          crossStreet1: "El Burro Blvd",
          crossStreet2: "El Rancho Blvd",
        },
        "El Burro Blvd": {
          crossStreet1: "Rt 20",
          crossStreet2: "Sustancia Rd",
        },
      },
    },
  },
  {
    postal: "785",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0710",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "El Burro Blvd",
      crossStreet1: "Rt 20 NB",
      crossStreet2: "Sustancia Rd",
    },
  },
  {
    postal: "786",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0751",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "El Burro Blvd",
      crossStreet1: "Rt 20 NB",
      crossStreet2: "Sustancia Rd",
    },
  },
  {
    postal: "787",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0710",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20 NB": {
          crossStreet1: "Rt 20 MM01.00",
          crossStreet2: "El Rancho Blvd",
        },
        "Rt 20 SB": {
          crossStreet1: "Rt 20 MM01.00",
          crossStreet2: "El Rancho Blvd",
        },
        "El Burro Blvd": {
          crossStreet1: "Rt 20 NB",
          crossStreet2: "Sustancia Rd",
        },
      },
    },
  },
  {
    postal: "788",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0713",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20 NB": {
          crossStreet1: "Rt 20 MM01.00",
          crossStreet2: "El Rancho Blvd",
        },
        "Rt 20 SB": {
          crossStreet1: "Rt 20 MM01.00",
          crossStreet2: "El Rancho Blvd",
        },
      },
    },
  },
  {
    postal: "789",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0713",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "S. Shambles St": {
          crossStreet1: "Hanger Way",
          crossStreet2: "El Rancho Blvd",
        },
        "Rt 20 NB": {
          crossStreet1: "El Burro Blvd",
          crossStreet2: "El Rancho Blvd",
        },
        "Rt 20 SB": {
          crossStreet1: "El Burro Blvd",
          crossStreet2: "El Rancho Blvd",
        },
      },
    },
  },
  {
    postal: "790",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0711",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20 NB": {
          crossStreet1: "El Burro Blvd",
          crossStreet2: "Rt 20 MM02.00",
        },
        "Rt 20 SB": {
          crossStreet1: "El Burro Blvd",
          crossStreet2: "Rt 20 MM02.00",
        },
        "El Rancho Blvd": {
          crossStreet1: "S. Shambles St",
          crossStreet2: "Labor Pl",
        },
      },
    },
  },
  {
    postal: "791",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0701",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20 SB": {
          crossStreet1: "East LS Entrance",
          crossStreet2: "El Rancho Blvd",
        },
        "Rt 20 NB": {
          crossStreet1: "El Rancho Blvd",
          crossStreet2: "East LS Exit",
        },
        "Labor Pl": {
          crossStreet1: "Amarillo Way",
          crossStreet2: "El Rancho Blvd",
        },
        "El Rancho Blvd": {
          crossStreet1: "Rt 20 NB",
          crossStreet2: "Labor Pl",
        },
        "Amarillo Way": {
          crossStreet1: "Labor Pl",
          crossStreet2: "Innocence Blvd",
        },
      },
    },
  },
  {
    postal: "792",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0701",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20 NB": {
          crossStreet1: "Rt 20 MM02.00",
          crossStreet2: "Rt 20 NB to I4 WB/Rt 15 NB Exit",
        },
        "Rt 20 SB": {
          crossStreet1: "Rt 20 MM02.00",
          crossStreet2: "I4 EB/Rt 15 SB to Rt 20 SB Entrance",
        },
        "Amarillo Way": {
          crossStreet1: "Labor Pl",
          crossStreet2: "Innocence Blvd",
        },
        "Innocence Blvd": {
          crossStreet1: "Amarillo Way",
          crossStreet2: "El Rancho Blvd",
        },
        "Amarillo Vista": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "El Rancho Blvd",
        },
        "Labor Pl": {
          crossStreet1: "Amarillo Way",
          crossStreet2: "El Rancho Blvd",
        },
        "El Rancho Blvd": {
          crossStreet1: "Labor Pl",
          crossStreet2: "Innocence Blvd",
        },
      },
    },
  },
  {
    postal: "793",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0701",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20 NB": {
          crossStreet1: "Rt 20 MM02.00",
          crossStreet2: "Rt 20 NB to I4 WB/Rt 15 NB Exit",
        },
        "Rt 20 SB": {
          crossStreet1: "Rt 20 MM02.00",
          crossStreet2: "I4 EB/Rt 15 SB to Rt 20 SB Entrance",
        },
        "El Rancho Blvd": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Capital Blvd",
        },
        "Fudge Ln": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "El Rancho Blvd",
        },
      },
    },
  },
  {
    postal: "794",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0701",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20 NB": {
          crossStreet1: "Rt 20 MM02.00",
          crossStreet2: "Rt 20 NB to I4 WB/Rt 15 NB Exit",
        },
        "Rt 20 SB": {
          crossStreet1: "Rt 20 MM02.00",
          crossStreet2: "I4 EB/Rt 15 SB to Rt 20 SB Entrance",
        },
        "Capital Blvd": {
          crossStreet1: "Popular St",
          crossStreet2: "El Rancho Blvd",
        },
        "El Rancho Blvd": {
          crossStreet1: "Fudge Ln",
          crossStreet2: "Capital Blvd",
        },
      },
    },
  },
  {
    postal: "795",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0716",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 EB": {
          crossStreet1: "I4 MM01.00",
          crossStreet2: "I4 EB to Rt 15 NB",
        },
        "I4 WB": {
          crossStreet1: "Rt 15 SB to I4 WB",
          crossStreet2: "I4 MM01.00",
        },
        "I4 EB to Rt 20 SB Ramp": {
          crossStreet1: "I4 EB",
          crossStreet2: "Rt 20 SB",
        },
        "I4 EB to I2 WB Ramp": {
          crossStreet1: "I4 EB",
          crossStreet2: "I2 WB",
        },
        "Rt 15 SB to Rt 20 SB Ramp": {
          crossStreet1: "Rt 15 SB",
          crossStreet2: "Rt 20 SB",
        },
        "Popular St": {
          crossStreet1: "Capital Blvd",
          crossStreet2: "I4 EB Entrance",
        },
        "Capital Blvd": {
          crossStreet1: "Popular St",
          crossStreet2: "El Rancho Blvd",
        },
      },
    },
  },
  {
    postal: "796",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20 NB": {
          crossStreet1: "East LS Entrance",
          crossStreet2: "Rt 20 NB to I4 WB/Rt 15 NB Exit",
        },
        "Rt 20 SB": {
          crossStreet1: "East LS Exit",
          crossStreet2: "I4 EB/Rt 15 SB to Rt 20 SB Entrance",
        },
        "Popular St": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Capital Blvd",
        },
        "Capital Blvd": {
          crossStreet1: "Popular St",
          crossStreet2: "El Rancho Blvd",
        },
      },
    },
  },
  {
    postal: "797",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20 NB": {
          crossStreet1: "East LS Entrance",
          crossStreet2: "Rt 20 NB to I4 WB/Rt 15 NB Exit",
        },
        "Rt 20 SB": {
          crossStreet1: "East LS Exit",
          crossStreet2: "I4 EB/Rt 15 SB to Rt 20 SB Entrance",
        },
        "Popular St": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Capital Blvd",
        },
        "Innocence Blvd": {
          crossStreet1: "Popular St",
          crossStreet2: "Tower Way",
        },
        "Tower Way": {
          crossStreet1: "Labor Pl",
          crossStreet2: "Innocence Blvd",
        },
      },
    },
  },
  {
    postal: "798",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20 NB": {
          crossStreet1: "Rt 20 MM02.00",
          crossStreet2: "Rt 20 NB to I4 WB/Rt 15 NB Exit",
        },
        "Rt 20 SB": {
          crossStreet1: "Rt 20 MM02.00",
          crossStreet2: "I4 EB/Rt 15 SB to Rt 20 SB Entrance",
        },
        "Innocence Blvd": {
          crossStreet1: "Popular St",
          crossStreet2: "Amarillo Way",
        },
        "Tower Way": {
          crossStreet1: "Labor Pl",
          crossStreet2: "Innocence Blvd",
        },
        "Amarillo Way": {
          crossStreet1: "Labor Pl",
          crossStreet2: "Innocence Blvd",
        },
        "Labor Pl": {
          crossStreet1: "Orchardville Ave",
          crossStreet2: "Amarillo Way",
        },
        "Orchardville Ave": {
          crossStreet1: "Labor Pl",
          crossStreet2: "Innocence Blvd",
        },
      },
    },
  },
  {
    postal: "799",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "El Rancho Blvd": {
          crossStreet1: "Orchardville Ave",
          crossStreet2: "S. Shambles St",
        },
        "Orchardville Ave": {
          crossStreet1: "El Rancho Blvd",
          crossStreet2: "Labor Pl",
        },
        "Labor Pl": {
          crossStreet1: "Orchardville Ave",
          crossStreet2: "Tower Way",
        },
      },
    },
  },
  {
    postal: "800",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20 NB": {
          crossStreet1: "El Rancho Blvd",
          crossStreet2: "East LS Exit",
        },
        "Rt 20 SB": {
          crossStreet1: "El Rancho Blvd",
          crossStreet2: "East LS Entrance",
        },
        "El Rancho Blvd": {
          crossStreet1: "S. Shambles St",
          crossStreet2: "Rt 20 SB",
        },
      },
    },
  },
  {
    postal: "801",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0713",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "S. Shambles St": {
          crossStreet1: "Hanger Way",
          crossStreet2: "El Rancho Blvd",
        },
        "El Rancho Blvd": {
          crossStreet1: "S. Shambles St",
          crossStreet2: "Rt 20 SB",
        },
      },
    },
  },
  {
    postal: "802",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0713",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Orchardville Ave": {
          crossStreet1: "Dry Dock St",
          crossStreet2: "El Rancho Blvd",
        },
        "El Rancho Blvd": {
          crossStreet1: "Orchardville Ave",
          crossStreet2: "S. Shambles St",
        },
        "S. Shambles St": {
          crossStreet1: "Hanger Way",
          crossStreet2: "El Rancho Blvd",
        },
      },
    },
  },
  {
    postal: "803",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0713",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Orchardville Ave": {
          crossStreet1: "Hanger Way",
          crossStreet2: "Dry Dock St",
        },
        "S. Shambles St": {
          crossStreet1: "Hanger Way",
          crossStreet2: "El Rancho Blvd",
        },
        "Hanger Way": {
          crossStreet1: "Orchardville Ave",
          crossStreet2: "S. Shambles St",
        },
      },
    },
  },
  {
    postal: "804",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0713",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20 NB": {
          crossStreet1: "Rt 20 MM01.00",
          crossStreet2: "El Burro Blvd",
        },
        "Rt 20 SB": {
          crossStreet1: "Rt 20 MM01.00",
          crossStreet2: "El Burro Blvd",
        },
        "Hanger Way": {
          crossStreet1: "Orchardville Ave",
          crossStreet2: "S. Shambles St",
        },
        "S. Shambles St": {
          crossStreet1: "Hanger Way",
          crossStreet2: "El Rancho Blvd",
        },
      },
    },
  },
  {
    postal: "805",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0713",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20 NB": {
          crossStreet1: "LS Ports Exit",
          crossStreet2: "Rt 20 MM01.00",
        },
        "Rt 20 SB": {
          crossStreet1: "Rt 20 MM01.00",
          crossStreet2: "LS Ports Exit",
        },
        "Hanger Way": {
          crossStreet1: "Popular St",
          crossStreet2: "S. Shambles St",
        },
      },
    },
  },
  {
    postal: "806",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0714",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Popular St": {
          crossStreet1: "Chum St",
          crossStreet2: "Dry Dock St",
        },
        "Dry Dock St": {
          crossStreet1: "Popular St",
          crossStreet2: "Orchardville Ave",
        },
        "Orchardville Ave": {
          crossStreet1: "Hanger Way",
          crossStreet2: "Dry Dock St",
        },
        "Hanger Way": {
          crossStreet1: "Popular St",
          crossStreet2: "Orchardville Ave",
        },
      },
    },
  },
  {
    postal: "807",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0714",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Popular St": {
          crossStreet1: "Dry Dock St",
          crossStreet2: "El Rancho Blvd",
        },
        "El Rancho Blvd": {
          crossStreet1: "Popular St",
          crossStreet2: "Orchardville Ave",
        },
        "Orchardville Ave": {
          crossStreet1: "Dry Dock St",
          crossStreet2: "El Rancho Blvd",
        },
        "Dry Dock St": {
          crossStreet1: "Popular St",
          crossStreet2: "Orchardville Ave",
        },
      },
    },
  },
  {
    postal: "808",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0714",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "El Rancho Blvd": {
          crossStreet1: "Popular St",
          crossStreet2: "Orchardville Ave",
        },
        "Popular St": {
          crossStreet1: "El Rancho Blvd",
          crossStreet2: "Innocence Blvd",
        },
        "Orchardville Ave": {
          crossStreet1: "El Rancho Blvd",
          crossStreet2: "Labor Pl",
        },
      },
    },
  },
  {
    postal: "809",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Popular St": {
          crossStreet1: "El Rancho Blvd",
          crossStreet2: "Innocence Blvd",
        },
        "Innocence Blvd": {
          crossStreet1: "Popular St",
          crossStreet2: "Orchardville Ave",
        },
        "Orchardville Ave": {
          crossStreet1: "El Rancho Blvd",
          crossStreet2: "Innocence Blvd",
        },
      },
    },
  },
  {
    postal: "810",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0717",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Popular St": {
          crossStreet1: "Capital Blvd",
          crossStreet2: "Supply St",
        },
        "I4 WB": {
          crossStreet1: "Rt 20 NB/I2 EB to I4 WB Entrance",
          crossStreet2: "I4 MM01.00",
        },
        "I4 EB": {
          crossStreet1: "I4 MM01.00",
          crossStreet2: "I4 WB to Rt 20 SB/I2 WB Exit",
        },
        "Popular St to I4 EB Ramp": {
          crossStreet1: "Popular St",
          crossStreet2: "I4 EB",
        },
        "I4 EB to Popular St Ramp": {
          crossStreet1: "I4 EB",
          crossStreet2: "Popular St",
        },
        "Capital Blvd": {
          crossStreet1: "Little Bighorn Ave",
          crossStreet2: "El Rancho Blvd",
        },
      },
    },
  },
  {
    postal: "811",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0717",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 EB": {
          crossStreet1: "Elgin Ave to I4 EB Entrance",
          crossStreet2: "I4 EB to Popular St Ramp",
        },
        "I4 WB": {
          crossStreet1: "Popular St to I4 WB Ramp",
          crossStreet2: "I4 WB to Elgin Ave Exit",
        },
        "I4 EB to Popular St Ramp": {
          crossStreet1: "I4 EB",
          crossStreet2: "Popular St",
        },
        "Little Bighorn Ave": {
          crossStreet1: "Capital Blvd",
          crossStreet2: "Crusade Rd",
        },
        "Capital Blvd": {
          crossStreet1: "Little Bighorn Ave",
          crossStreet2: "Popular St",
        },
      },
    },
  },
  {
    postal: "812",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0716",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Capital Blvd": {
          crossStreet1: "Little Bighorn Ave",
          crossStreet2: "Popular St",
        },
        "Popular St": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Capital Blvd",
        },
      },
    },
  },
  {
    postal: "813",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7870",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Little Bighorn Ave": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Roy Lowenstein Blvd",
        },
        "Innocence Blvd": {
          crossStreet1: "Jamestown St",
          crossStreet2: "Popular St",
        },
        "Popular St": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Capital Blvd",
        },
      },
    },
  },
  {
    postal: "814",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Popular St": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Capital Blvd",
        },
        "Innocence Blvd": {
          crossStreet1: "Jamestown St",
          crossStreet2: "Popular St",
        },
      },
    },
  },
  {
    postal: "815",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Innocence Blvd": {
          crossStreet1: "Jamestown St",
          crossStreet2: "Popular St",
        },
        "Popular St": {
          crossStreet1: "El Rancho Blvd",
          crossStreet2: "Innocence Blvd",
        },
      },
    },
  },
  {
    postal: "816",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Popular St": {
          crossStreet1: "El Rancho Blvd",
          crossStreet2: "Innocence Blvd",
        },
        "El Rancho Blvd": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Popular St",
        },
      },
    },
  },
  {
    postal: "817",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "El Rancho Blvd": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Popular St",
        },
        "Popular St": {
          crossStreet1: "Dry Dock St",
          crossStreet2: "El Rancho Blvd",
        },
      },
    },
  },
  {
    postal: "818",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Popular St",
      crossStreet1: "Chum St",
      crossStreet2: "Dry Dock St",
    },
  },
  {
    postal: "819",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "0715",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "9", "2", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Popular St": {
          crossStreet1: "Chum St",
          crossStreet2: "Dry Dock St",
        },
        "Chum St": {
          crossStreet1: "Signal St",
          crossStreet2: "Popular St",
        },
        "Bucaneer Way": {
          crossStreet1: "Chum St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "820",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0612",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Unknown Access Rd",
      crossStreet1: "Dutch London St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "821",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0612",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Access Rd": {
          crossStreet1: "Dutch London St",
          crossStreet2: "Dead End",
        },
        "El Rancho Blvd": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Popular St",
        },
        "Dutch London St": {
          crossStreet1: "Signal St",
          crossStreet2: "Carson Ave",
        },
      },
    },
  },
  {
    postal: "822",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "El Rancho Blvd": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Popular St",
        },
        "Carson Ave": {
          crossStreet1: "Jamestown St",
          crossStreet2: "El Rancho Blvd",
        },
        "Little Bighorn Ave": {
          crossStreet1: "El Rancho Blvd",
          crossStreet2: "Jamestown St",
        },
      },
    },
  },
  {
    postal: "823",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0604",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Macdonald St": {
          crossStreet1: "Jamestown St",
          crossStreet2: "Little Bighorn Ave",
        },
        "Jamestown St": {
          crossStreet1: "Macdonald St",
          crossStreet2: "Innocence Blvd",
        },
        "Innocence Blvd": {
          crossStreet1: "Jamestown St",
          crossStreet2: "Popular St",
        },
        "Little Bighorn Ave": {
          crossStreet1: "Macdonald St",
          crossStreet2: "Jamestown St",
        },
      },
    },
  },
  {
    postal: "824",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Innocence Blvd": {
          crossStreet1: "Roy Lowenstein Blvd",
          crossStreet2: "Popular St",
        },
        "Jamestown St": {
          crossStreet1: "Macdonald St",
          crossStreet2: "Little Bighorn Ave",
        },
        "Little Bighorn Ave": {
          crossStreet1: "Macdonald St",
          crossStreet2: "Jamestown St",
        },
      },
    },
  },
  {
    postal: "825",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Innocence Blvd": {
          crossStreet1: "Roy Lowenstein Blvd",
          crossStreet2: "Jamestown St",
        },
        "Roy Lowenstein Blvd": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Little Bighorn Ave",
        },
        "Little Bighorn Ave": {
          crossStreet1: "Jamestown St",
          crossStreet2: "Roy Lowenstein Blvd",
        },
        "Jamestown St": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Little Bighorn Ave",
        },
      },
    },
  },
  {
    postal: "826",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 EB": {
          crossStreet1: "Elgin Ave to I4 EB Entrance",
          crossStreet2: "I4 MM01.00",
        },
        "I4 WB": {
          crossStreet1: "I4 MM01.00",
          crossStreet2: "I4 WB to Elgin Ave Exit",
        },
        "Capital Blvd": {
          crossStreet1: "Crusade Rd",
          crossStreet2: "Little Bighorn Ave",
        },
        "Crusade Rd": {
          crossStreet1: "Capital Blvd",
          crossStreet2: "Little Bighorn Ave",
        },
        "Little Bighorn Ave": {
          crossStreet1: "Capital Blvd",
          crossStreet2: "Crusade Rd",
        },
      },
    },
  },
  {
    postal: "827",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Innocence Blvd": {
          crossStreet1: "Davis Ave",
          crossStreet2: "Roy Lowenstein Blvd",
        },
        "Davis Ave": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Capital Blvd",
        },
        "Capital Blvd": {
          crossStreet1: "Davis Ave",
          crossStreet2: "Little Bighorn Ave",
        },
        "Little Bighorn Ave": {
          crossStreet1: "Roy Lowenstein Blvd",
          crossStreet2: "Capital Blvd",
        },
        "Roy Lowenstein Blvd": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Little Bighorn Ave",
        },
      },
    },
  },
  {
    postal: "828",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Macdonald St": {
          crossStreet1: "Roy Lowenstein Blvd",
          crossStreet2: "Jamestown St",
        },
        "Roy Lowenstein Blvd": {
          crossStreet1: "Macdonald St",
          crossStreet2: "Innocence Blvd",
        },
        "Innocence Blvd": {
          crossStreet1: "Roy Lowenstein Blvd",
          crossStreet2: "Jamestown St",
        },
        "Jamestown St": {
          crossStreet1: "Macdonald St",
          crossStreet2: "Innocence Blvd",
        },
      },
    },
  },
  {
    postal: "829",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0604",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carson Ave": {
          crossStreet1: "Jamestown St",
          crossStreet2: "Little Bighorn Ave",
        },
        "Jamestown St": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Macdonald St",
        },
        "Macdonald St": {
          crossStreet1: "Jamestown St",
          crossStreet2: "Little Bighorn Ave",
        },
        "Little Bighorn Ave": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Macdonald St",
        },
      },
    },
  },
  {
    postal: "830",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dutch London St": {
          crossStreet1: "Signal St",
          crossStreet2: "Carson Ave",
        },
        "Carson Ave": {
          crossStreet1: "Jamestown St",
          crossStreet2: "Dutch London St",
        },
        "Signal St": {
          crossStreet1: "Chum St",
          crossStreet2: "Dutch London St",
        },
      },
    },
  },
  {
    postal: "831",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0604",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carson Ave": {
          crossStreet1: "Roy Lowenstein Blvd",
          crossStreet2: "Jamestown St",
        },
        "Roy Lowenstein Blvd": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Macdonald St",
        },
        "Macdonald St": {
          crossStreet1: "Roy Lowenstein Blvd",
          crossStreet2: "Jamestown St",
        },
        "Jamestown St": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Macdonald St",
        },
      },
    },
  },
  {
    postal: "832",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Macdonald St": {
          crossStreet1: "Davis Ave",
          crossStreet2: "Roy Lowenstein Blvd",
        },
        "Davis Ave": {
          crossStreet1: "Macdonald St",
          crossStreet2: "Innocence Blvd",
        },
        "Innocence Blvd": {
          crossStreet1: "Davis Ave",
          crossStreet2: "Roy Lowenstein Blvd",
        },
        "Roy Lowenstein Blvd": {
          crossStreet1: "Macdonald St",
          crossStreet2: "Innocence Blvd",
        },
      },
    },
  },
  {
    postal: "833",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Innocence Blvd": {
          crossStreet1: "Crusade Rd",
          crossStreet2: "Davis Ave",
        },
        "Crusade Rd": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Capital Blvd",
        },
        "Capital Blvd": {
          crossStreet1: "Crusade Rd",
          crossStreet2: "Davis Ave",
        },
        "Davis Ave": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Capital Blvd",
        },
      },
    },
  },
  {
    postal: "834",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 EB": {
          crossStreet1: "Elgin Ave to I4 EB Entrance",
          crossStreet2: "I4 MM01.00",
        },
        "I4 WB": {
          crossStreet1: "I4 MM01.00",
          crossStreet2: "I4 WB to Elgin Ave Exit",
        },
        "Strawberry Ave": {
          crossStreet1: "Capital Blvd",
          crossStreet2: "Adam's Apple Blvd",
        },
        "Crusade Rd": {
          crossStreet1: "Capital Blvd",
          crossStreet2: "Little Bighorn Ave",
        },
        "Capital Blvd": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Crusade Rd",
        },
      },
    },
  },
  {
    postal: "835",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 EB": {
          crossStreet1: "I5 SB to I4 EB Entrance",
          crossStreet2: "I4 MM01.00",
        },
        "I4 WB": {
          crossStreet1: "I4 MM01.00",
          crossStreet2: "I4 WB to I5 NB Exit",
        },
        "Elgin Ave to I4 EB Ramp": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "I4 EB",
        },
        "Elgin Ave": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Adam's Apple Blvd",
        },
        "Strawberry Ave": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Adam's Apple Blvd",
        },
        "Innocence Blvd": {
          crossStreet1: "Elgin Ave",
          crossStreet2: "Strawberry Ave",
        },
      },
    },
  },
  {
    postal: "836",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Innocence Blvd": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Crusade Rd",
        },
        "Strawberry Ave": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Capital Blvd",
        },
        "Capital Blvd": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Crusade Rd",
        },
        "Crusade Rd": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Capital Blvd",
        },
      },
    },
  },
  {
    postal: "837",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Macdonald St": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Davis Ave",
        },
        "Strawberry Ave": {
          crossStreet1: "Macdonald St",
          crossStreet2: "Innocence Blvd",
        },
        "Innocence Blvd": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Davis Ave",
        },
        "Davis Ave": {
          crossStreet1: "Macdonald St",
          crossStreet2: "Innocence Blvd",
        },
      },
    },
  },
  {
    postal: "838",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0601",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carson Ave": {
          crossStreet1: "Davis Ave",
          crossStreet2: "Brogue Ave",
        },
        "Davis Ave": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Macdonald St",
        },
        "Macdonald St": {
          crossStreet1: "Davis Ave",
          crossStreet2: "Brogue Ave",
        },
        "Brogue Ave": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Macdonald St",
        },
      },
    },
  },
  {
    postal: "839",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0601",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carson Ave": {
          crossStreet1: "Brogue Ave",
          crossStreet2: "Roy Lowenstein Blvd",
        },
        "Brogue Ave": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Macdonald St",
        },
        "Macdonald St": {
          crossStreet1: "Brogue Ave",
          crossStreet2: "Roy Lowenstein Blvd",
        },
        "Roy Lowenstein Blvd": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Macdonald St",
        },
      },
    },
  },
  {
    postal: "840",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Covenant Ave": {
          crossStreet1: "Brogue Ave",
          crossStreet2: "Roy Lowenstein Blvd",
        },
        "Brogue Ave": {
          crossStreet1: "Covenant Ave",
          crossStreet2: "Carson Ave",
        },
        "Carson Ave": {
          crossStreet1: "Brogue Ave",
          crossStreet2: "Roy Lowenstein Blvd",
        },
        "Roy Lowenstein Blvd": {
          crossStreet1: "Covenant Ave",
          crossStreet2: "Carson Ave",
        },
      },
    },
  },
  {
    postal: "841",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dutch London St": {
          crossStreet1: "Roy Lowenstein Blvd",
          crossStreet2: "Jamestown St",
        },
        "Roy Lowenstein Blvd": {
          crossStreet1: "Dutch London St",
          crossStreet2: "Carson Ave",
        },
        "Carson Ave": {
          crossStreet1: "Roy Lowenstein Blvd",
          crossStreet2: "Jamestown St",
        },
        "Jamestown St": {
          crossStreet1: "Dutch London St",
          crossStreet2: "Carson Ave",
        },
      },
    },
  },
  {
    postal: "842",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dutch London St": {
          crossStreet1: "Jamestown St",
          crossStreet2: "Signal St",
        },
        "Jamestown St": {
          crossStreet1: "Dutch London St",
          crossStreet2: "Carson Ave",
        },
        "Signal St": {
          crossStreet1: "Chum St",
          crossStreet2: "Dutch London St",
        },
      },
    },
  },
  {
    postal: "843",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0610",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Unknown Access Rd",
      crossStreet1: "Dutch London St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "844",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0610",
    fdRunOrder: ["6", "7", "10", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Dutch London St",
      crossStreet1: "Autopia Pkwy",
      crossStreet2: "Jamestown St",
    },
  },
  {
    postal: "845",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dutch London St": {
          crossStreet1: "Autopia Pkwy",
          crossStreet2: "Roy Lowenstein Blvd",
        },
        "Grove St": {
          crossStreet1: "Davis Ave",
          crossStreet2: "Brogue Ave",
        },
        "Grove St (End)": {
          crossStreet1: "Brogue Ave",
          crossStreet2: "Dead End",
        },
        "Roy Lowenstein Blvd": {
          crossStreet1: "Dutch London St",
          crossStreet2: "Covenant Ave",
        },
      },
    },
  },
  {
    postal: "846",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Grove St": {
          crossStreet1: "Davis Ave",
          crossStreet2: "Brogue Ave",
        },
        "Grove St (End)": {
          crossStreet1: "Brogue Ave",
          crossStreet2: "Dead End",
        },
        "Brogue Ave": {
          crossStreet1: "Grove St",
          crossStreet2: "Covenant Ave",
        },
        "Covenant Ave": {
          crossStreet1: "Brogue Ave",
          crossStreet2: "Roy Lowenstein Blvd",
        },
        "Roy Lowenstein Blvd": {
          crossStreet1: "Dutch London St",
          crossStreet2: "Covenant Ave",
        },
      },
    },
  },
  {
    postal: "847",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Grove St": {
          crossStreet1: "Brogue Ave",
          crossStreet2: "Davis Ave",
        },
        Alleyway: {
          crossStreet1: "Brogue Ave",
          crossStreet2: "Davis Ave",
        },
        "Davis Ave": {
          crossStreet1: "Grove St",
          crossStreet2: "Carson Ave",
        },
        "Carson Ave": {
          crossStreet1: "Davis Ave",
          crossStreet2: "Brogue Ave",
        },
        "Brogue Ave": {
          crossStreet1: "Covenant Ave",
          crossStreet2: "Carson Ave",
        },
      },
    },
  },
  {
    postal: "848",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0601",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carson Ave": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Davis Ave",
        },
        "Strawberry Ave": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Macdonald St",
        },
        "Macdonald St": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Davis Ave",
        },
        "Davis Ave": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Macdonald St",
        },
      },
    },
  },
  {
    postal: "849",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0602",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Forum Dr": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Strawberry Ave",
        },
        "Innocence Blvd": {
          crossStreet1: "Power St",
          crossStreet2: "Elgin Ave",
        },
        "Elgin Ave": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Strawberry Ave",
        },
        "Strawberry Ave": {
          crossStreet1: "Forum Dr",
          crossStreet2: "Innocence Blvd",
        },
      },
    },
  },
  {
    postal: "850",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0606",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 EB": {
          crossStreet1: "I5 SB to I4 EB Entrance",
          crossStreet2: "Elgin Ave to I4 EB Entrance",
        },
        "I4 WB": {
          crossStreet1: "I4 MM01.00",
          crossStreet2: "I4 WB to Elgin Ave Exit",
        },
        "I4 EB to Elgin Ave Ramp": {
          crossStreet1: "I4 EB",
          crossStreet2: "Elgin Ave",
        },
        "Power St": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Adam's Apple Blvd",
        },
        "Elgin Ave": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Adam's Apple Blvd",
        },
        "Innocence Blvd": {
          crossStreet1: "Power St",
          crossStreet2: "Elgin Ave",
        },
      },
    },
  },
  {
    postal: "851",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0609",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 EB": {
          crossStreet1: "I5 SB to I4 EB Entrance",
          crossStreet2: "I4 EB to Elgin Ave Exit",
        },
        "I4 WB": {
          crossStreet1: "Elgin Ave to I4 WB Entrance",
          crossStreet2: "I4 WB to I5 NB Exit",
        },
        "Alta St": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Adam's Apple Blvd",
        },
        "Power St": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Adam's Apple Blvd",
        },
        "Innocence Blvd": {
          crossStreet1: "Alta St",
          crossStreet2: "Power St",
        },
      },
    },
  },
  {
    postal: "852",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0601",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Carson Ave": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Forum Dr",
        },
        "Innocence Blvd": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Power St",
        },
        "Forum Dr": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Strawberry Ave",
        },
      },
    },
  },
  {
    postal: "853",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0601",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Forum Dr": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Strawberry Ave",
        },
        "Strawberry Ave": {
          crossStreet1: "Carson Ave",
          crossStreet2: "Forum Dr",
        },
        "Carson Ave": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Forum Dr",
        },
      },
    },
  },
  {
    postal: "854",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0601",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Alta St": {
          crossStreet1: "S. Arsenal St",
          crossStreet2: "Innocence Blvd",
        },
        "Carson Ave": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Forum Dr",
        },
        "Forum Dr": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Carson Ave",
        },
      },
    },
  },
  {
    postal: "855",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0601",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Forum Dr": {
          crossStreet1: "Strawberry Ave",
          crossStreet2: "Carson Ave",
        },
        "Carson Ave": {
          crossStreet1: "Forum Dr",
          crossStreet2: "Strawberry Ave",
        },
        "Strawberry Ave": {
          crossStreet1: "Forum Dr",
          crossStreet2: "Carson Ave",
        },
      },
    },
  },
  {
    postal: "856",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Strawberry Ave": {
          crossStreet1: "Forum Dr",
          crossStreet2: "Carson Ave",
        },
        "Carson Ave": {
          crossStreet1: "Davis Ave",
          crossStreet2: "Strawberry Ave",
        },
        "Davis Ave": {
          crossStreet1: "Grove St",
          crossStreet2: "Carson Ave",
        },
      },
    },
  },
  {
    postal: "857",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "10", "7", "5", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Grove St": {
          crossStreet1: "Brogue Ave",
          crossStreet2: "Davis Ave",
        },
        "Davis Ave": {
          crossStreet1: "Alta St",
          crossStreet2: "Grove St",
        },
      },
    },
  },
  {
    postal: "858",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "5", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Autopia Pkwy": {
          crossStreet1: "Exceptionalists Way",
          crossStreet2: "Davis Ave",
        },
        "Dutch London St": {
          crossStreet1: "LSIA Exit",
          crossStreet2: "Roy Lowenstein Blvd",
        },
      },
    },
  },
  {
    postal: "859",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0603",
    fdRunOrder: ["6", "5", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Autopia Pkwy": {
          crossStreet1: "Exceptionalists Way",
          crossStreet2: "Davis Ave",
        },
        "Dutch London St": {
          crossStreet1: "LSIA Exit",
          crossStreet2: "Roy Lowenstein Blvd",
        },
      },
    },
  },
  {
    postal: "860",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0531",
    fdRunOrder: ["5", "6", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Autopia Pkwy",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "861",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0531",
    fdRunOrder: ["5", "6", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Autopia Pkwy",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "862",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0531",
    fdRunOrder: ["5", "6", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Dutch London St": {
          crossStreet1: "LSIA Exit",
          crossStreet2: "Autopia Pkwy",
        },
        "Davis Ave": {
          crossStreet1: "Dutch London St",
          crossStreet2: "Alta St",
        },
        "Davis Ave SB to Dutch London St WB/EB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St WB/EB Ramps",
        },
        "Davis Ave SB to Dutch London St WB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St WB",
        },
        "Davis Ave SB to Dutch London St EB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St EB",
        },
        "Davis Ave NB to Dutch London St WB/EB Ramp": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St WB/EB Ramps",
        },
        "Davis Ave NB to Dutch London St WB": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St WB",
        },
        "Davis Ave NB to Dutch London St EB": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St EB",
        },
        "Dutch London St EB to Davis Ave NB/SB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB/SB Ramps",
        },
        "Dutch London St EB to Davis Ave NB Ramp": {
          crossStreet1: "Dutch London St EB",
          crossStreet2: "Davis Ave NB",
        },
        "Dutch London St EB to Davis Ave SB Ramp": {
          crossStreet1: "Dutch London St EB",
          crossStreet2: "Davis Ave SB",
        },
        "Dutch London St WB to Davis Ave NB/SB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB/SB Ramps",
        },
        "Dutch London St WB to Davis Ave NB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB",
        },
        "Dutch London St WB to Davis Ave SB": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave SB",
        },
        "Autopia Pkwy": {
          crossStreet1: "Exceptionalists Way",
          crossStreet2: "Davis Ave",
        },
      },
    },
  },
  {
    postal: "863",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0531",
    fdRunOrder: ["5", "6", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Davis Ave": {
          crossStreet1: "Dutch London St",
          crossStreet2: "Alta St",
        },
        "Autopia Pkwy": {
          crossStreet1: "Exceptionalists Way",
          crossStreet2: "Davis Ave",
        },
        "Dutch London St": {
          crossStreet1: "LSIA Exit",
          crossStreet2: "Autopia Pkwy",
        },
        "Davis Ave SB to Dutch London St WB/EB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St WB/EB Ramps",
        },
        "Davis Ave SB to Dutch London St WB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St WB",
        },
        "Davis Ave SB to Dutch London St EB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St EB",
        },
        "Davis Ave NB to Dutch London St WB/EB Ramp": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St WB/EB Ramps",
        },
        "Davis Ave NB to Dutch London St WB": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St WB",
        },
        "Davis Ave NB to Dutch London St EB": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St EB",
        },
        "Dutch London St EB to Davis Ave NB/SB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB/SB Ramps",
        },
        "Dutch London St EB to Davis Ave NB Ramp": {
          crossStreet1: "Dutch London St EB",
          crossStreet2: "Davis Ave NB",
        },
        "Dutch London St EB to Davis Ave SB Ramp": {
          crossStreet1: "Dutch London St EB",
          crossStreet2: "Davis Ave SB",
        },
        "Dutch London St WB to Davis Ave NB/SB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB/SB Ramps",
        },
        "Dutch London St WB to Davis Ave NB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB",
        },
        "Dutch London St WB to Davis Ave SB": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave SB",
        },
      },
    },
  },
  {
    postal: "864",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0631",
    fdRunOrder: ["6", "5", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Alta St": {
          crossStreet1: "Davis Ave",
          crossStreet2: "Innocence Blvd",
        },
        "Davis Ave": {
          crossStreet1: "Alta St",
          crossStreet2: "Grove St",
        },
      },
    },
  },
  {
    postal: "865",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0607",
    fdRunOrder: ["6", "10", "5", "8", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I4 EB": {
          crossStreet1: "I5 SB to I4 EB Entrance",
          crossStreet2: "I4 EB to Elgin Ave Exit",
        },
        "I4 WB": {
          crossStreet1: "Elgin Ave to I4 WB Entrance",
          crossStreet2: "I4 WB to I5 NB Exit",
        },
        "I5 NB [U]": {
          crossStreet1: "I5 NB to Innocence Blvd Exit",
          crossStreet2: "I5 MM01.00",
        },
        "I5 SB [U]": {
          crossStreet1: "I5 MM01.00",
          crossStreet2: "Innocence Blvd to I5 SB Entrance",
        },
        "I5 NB [L]": {
          crossStreet1: "Innocence Blvd to I5 NB [L] Entrance",
          crossStreet2: "I5 NB [L] to I5 NB [U]",
        },
        "I5 SB [L]": {
          crossStreet1: "I5 SB [U] to I5 SB [L]",
          crossStreet2: "I5 SB to Innocence Blvd Exit",
        },
        "I5 NB to I4 EB Ramp": {
          crossStreet1: "I5 NB",
          crossStreet2: "I4 EB",
        },
        "I5 SB to I4 EB Ramp": {
          crossStreet1: "I5 SB",
          crossStreet2: "I4 EB",
        },
        "Innocence Blvd to I4 EB Ramp": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "I5 NB to I4 EB Ramp",
        },
        "Innocence Blvd to I5 NB [L] Ramp": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "I5 NB [L]",
        },
        "I5 SB [L] to Innocence Blvd Ramp": {
          crossStreet1: "I5 SB [L]",
          crossStreet2: "Innocence Blvd",
        },
        "I4 WB to I5 SB Ramp": {
          crossStreet1: "I4 WB",
          crossStreet2: "I5 SB",
        },
        "I4 WB to Innocence Blvd Ramp": {
          crossStreet1: "I4 WB",
          crossStreet2: "Innocence Blvd",
        },
        "Alta St": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "Adam's Apple Blvd",
        },
        "Innocence Blvd": {
          crossStreet1: "Calais Ave",
          crossStreet2: "Alta St",
        },
      },
    },
  },
  {
    postal: "866",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0605",
    fdRunOrder: ["6", "10", "5", "8", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I5 NB [U]": {
          crossStreet1: "I5 NB [U] to I5 NB [L]",
          crossStreet2: "I5 NB [U] to I4 EB Exit",
        },
        "I5 SB [U]": {
          crossStreet1: "I4 WB to I5 SB [U] Entrance",
          crossStreet2: "I5 SB [L] to I5 SB [U]",
        },
        "I5 NB [L]": {
          crossStreet1: "I5 NB [U] to I5 NB [L]",
          crossStreet2: "I5 NB [U] to Innocence Blvd Entrance",
        },
        "I5 SB [L]": {
          crossStreet1: "I5 SB [L] to Innocence Blvd Exit",
          crossStreet2: "I5 SB [L] to I5 SB [U]",
        },
        "I5 NB to Innocence Blvd Ramp": {
          crossStreet1: "I5 NB",
          crossStreet2: "Innocence Blvd",
        },
        "Innocence Blvd to I5 SB Ramp": {
          crossStreet1: "Innocence Blvd",
          crossStreet2: "I5 SB",
        },
        "Innocence Blvd": {
          crossStreet1: "Calais Ave",
          crossStreet2: "Alta St",
        },
        "Alta St": {
          crossStreet1: "S. Arsenal St",
          crossStreet2: "Innocence Blvd",
        },
      },
    },
  },
  {
    postal: "867",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0615",
    fdRunOrder: ["6", "5", "10", "8", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I5 NB [U]": {
          crossStreet1: "Dutch London St to I5 NB Entrance",
          crossStreet2: "I5 NB [U] to Innocence Blvd Ext",
        },
        "I5 SB [U]": {
          crossStreet1: "Innocence Blvd to I5 SB Entrance",
          crossStreet2: "I5 SB [U] to Dutch London St Exit",
        },
        "I5 NB [L]": {
          crossStreet1: "I5 NB [U] to I5 NB [L]",
          crossStreet2: "Innocence Blvd to I5 NB [L] Entrance",
        },
        "I5 SB [L]": {
          crossStreet1: "I5 SB [L] to Innocence Blvd Exit",
          crossStreet2: "I5 SB [L] to I5 SB [U]",
        },
        "Alta St": {
          crossStreet1: "S. Arsenal St",
          crossStreet2: "Innocence Blvd",
        },
        "S. Arsenal St": {
          crossStreet1: "Mutiny Rd",
          crossStreet2: "Alta St",
        },
      },
    },
  },
  {
    postal: "868",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0615",
    fdRunOrder: ["6", "5", "10", "8", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "I5 NB": {
          crossStreet1: "Dutch London St to I5 NB Entrance",
          crossStreet2: "I5 NB to I5 NB [L]",
        },
        "I5 SB": {
          crossStreet1: "I5 SB [L] to I5 SB",
          crossStreet2: "I5 SB to Dutch London St Exit",
        },
        "Dutch London St to I5 NB Ramp": {
          crossStreet1: "Dutch London St",
          crossStreet2: "I5 NB",
        },
        "I5 SB to Dutch London St Ramp": {
          crossStreet1: "I5 SB",
          crossStreet2: "Dutch London St",
        },
        "Dutch London St": {
          crossStreet1: "Davis Ave to Dutch London St WB Ramp",
          crossStreet2: "I5 NB Ramp",
        },
        "Davis Ave to Dutch London St WB Ramp": {
          crossStreet1: "Davis Ave",
          crossStreet2: "Dutch London St WB",
        },
        "S. Arsenal St": {
          crossStreet1: "Dutch London St",
          crossStreet2: "Mutiny Rd",
        },
        "Mutiny Rd": {
          crossStreet1: "S. Arsenal St",
          crossStreet2: "S. Arsenal St",
        },
      },
    },
  },
  {
    postal: "869",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "0611",
    fdRunOrder: ["6", "5", "10", "8", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Davis Ave": {
          crossStreet1: "Dutch London St",
          crossStreet2: "Alta St",
        },
        "Davis Ave SB to Dutch London St WB/EB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St WB/EB Ramps",
        },
        "Davis Ave SB to Dutch London St WB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St WB",
        },
        "Davis Ave SB to Dutch London St EB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St EB",
        },
        "Davis Ave NB to Dutch London St WB/EB Ramp": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St WB/EB Ramps",
        },
        "Davis Ave NB to Dutch London St WB": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St WB",
        },
        "Davis Ave NB to Dutch London St EB": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St EB",
        },
        "Dutch London St EB to Davis Ave NB/SB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB/SB Ramps",
        },
        "Dutch London St EB to Davis Ave NB Ramp": {
          crossStreet1: "Dutch London St EB",
          crossStreet2: "Davis Ave NB",
        },
        "Dutch London St EB to Davis Ave SB Ramp": {
          crossStreet1: "Dutch London St EB",
          crossStreet2: "Davis Ave SB",
        },
        "Dutch London St WB to Davis Ave NB/SB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB/SB Ramps",
        },
        "Dutch London St WB to Davis Ave NB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB",
        },
        "Dutch London St WB to Davis Ave SB": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave SB",
        },
        "Mutiny Rd": {
          crossStreet1: "S. Arsenal St",
          crossStreet2: "S. Arsenal St",
        },
        "S. Arsenal St": {
          crossStreet1: "Mutiny Rd",
          crossStreet2: "Alta St",
        },
      },
    },
  },
  {
    postal: "870",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0510",
    fdRunOrder: ["5", "6", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM02.00",
          crossStreet2: "I5 MM03.00",
        },
        "Autopia Pkwy": {
          crossStreet1: "Exceptionalists Way",
          crossStreet2: "Davis Ave",
        },
      },
    },
  },
  {
    postal: "871",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0510",
    fdRunOrder: ["5", "6", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM02.00",
          crossStreet2: "I5 MM03.00",
        },
        "Exceptionalists Way": {
          crossStreet1: "Greenwich Pkwy",
          crossStreet2: "Autopia Pkwy",
        },
        "Autopia Pkwy": {
          crossStreet1: "Exceptionalists Way",
          crossStreet2: "Davis Ave",
        },
      },
    },
  },
  {
    postal: "872",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0514",
    fdRunOrder: ["5", "6", "10", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM02.00",
          crossStreet2: "I5 MM03.00",
        },
        "Davis Ave": {
          crossStreet1: "New Empire Way",
          crossStreet2: "Alta St",
        },
        "Dutch London St": {
          crossStreet1: "Interstate 5",
          crossStreet2: "Autopia Pkwy",
        },
        "Davis Ave SB to Dutch London St WB/EB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St WB/EB Ramps",
        },
        "Davis Ave SB to Dutch London St WB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St WB",
        },
        "Davis Ave SB to Dutch London St EB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St EB",
        },
        "Davis Ave NB to Dutch London St WB/EB Ramp": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St WB/EB Ramps",
        },
        "Davis Ave NB to Dutch London St WB": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St WB",
        },
        "Davis Ave NB to Dutch London St EB": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St EB",
        },
        "Dutch London St EB to Davis Ave NB/SB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB/SB Ramps",
        },
        "Dutch London St EB to Davis Ave NB Ramp": {
          crossStreet1: "Dutch London St EB",
          crossStreet2: "Davis Ave NB",
        },
        "Dutch London St EB to Davis Ave SB Ramp": {
          crossStreet1: "Dutch London St EB",
          crossStreet2: "Davis Ave SB",
        },
        "Dutch London St WB to Davis Ave NB/SB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB/SB Ramps",
        },
        "Dutch London St WB to Davis Ave NB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB",
        },
        "Dutch London St WB to Davis Ave SB": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave SB",
        },
        "Autopia Pkwy": {
          crossStreet1: "Greenwich Pkwy",
          crossStreet2: "Exceptionalists Way",
        },
      },
    },
  },
  {
    postal: "873",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0526",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM02.00",
          crossStreet2: "I5 MM03.00",
        },
        "Autopia Pkwy": {
          crossStreet1: "Greenwich Pkwy",
          crossStreet2: "Exceptionalists Way",
        },
        "Davis Ave": {
          crossStreet1: "Dutch London St",
          crossStreet2: "Alta St",
        },
        "Davis Ave SB to Dutch London St WB/EB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St WB/EB Ramps",
        },
        "Davis Ave SB to Dutch London St WB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St WB",
        },
        "Davis Ave SB to Dutch London St EB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St EB",
        },
        "Davis Ave NB to Dutch London St WB/EB Ramp": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St WB/EB Ramps",
        },
        "Davis Ave NB to Dutch London St WB": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St WB",
        },
        "Davis Ave NB to Dutch London St EB": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St EB",
        },
        "Dutch London St EB to Davis Ave NB/SB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB/SB Ramps",
        },
        "Dutch London St EB to Davis Ave NB Ramp": {
          crossStreet1: "Dutch London St EB",
          crossStreet2: "Davis Ave NB",
        },
        "Dutch London St EB to Davis Ave SB Ramp": {
          crossStreet1: "Dutch London St EB",
          crossStreet2: "Davis Ave SB",
        },
        "Dutch London St WB to Davis Ave NB/SB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB/SB Ramps",
        },
        "Dutch London St WB to Davis Ave NB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB",
        },
        "Dutch London St WB to Davis Ave SB": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave SB",
        },
      },
    },
  },
  {
    postal: "874",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "0526",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM02.00",
          crossStreet2: "I5 MM03.00",
        },
        "Davis Ave": {
          crossStreet1: "Dutch London St",
          crossStreet2: "Alta St",
        },
        "Davis Ave SB to Dutch London St WB/EB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St WB/EB Ramps",
        },
        "Davis Ave SB to Dutch London St WB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St WB",
        },
        "Davis Ave SB to Dutch London St EB Ramp": {
          crossStreet1: "Davis Ave SB",
          crossStreet2: "Dutch London St EB",
        },
        "Davis Ave NB to Dutch London St WB/EB Ramp": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St WB/EB Ramps",
        },
        "Davis Ave NB to Dutch London St WB": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St WB",
        },
        "Davis Ave NB to Dutch London St EB": {
          crossStreet1: "Davis Ave NB",
          crossStreet2: "Dutch London St EB",
        },
        "Dutch London St EB to Davis Ave NB/SB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB/SB Ramps",
        },
        "Dutch London St EB to Davis Ave NB Ramp": {
          crossStreet1: "Dutch London St EB",
          crossStreet2: "Davis Ave NB",
        },
        "Dutch London St EB to Davis Ave SB Ramp": {
          crossStreet1: "Dutch London St EB",
          crossStreet2: "Davis Ave SB",
        },
        "Dutch London St WB to Davis Ave NB/SB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB/SB Ramps",
        },
        "Dutch London St WB to Davis Ave NB Ramp": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave NB",
        },
        "Dutch London St WB to Davis Ave SB": {
          crossStreet1: "Dutch London St WB",
          crossStreet2: "Davis Ave SB",
        },
      },
    },
  },
  {
    postal: "875",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5402",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM02.00",
          crossStreet2: "I5 MM03.00",
        },
        "Greenwich Pkwy": {
          crossStreet1: "Autopia Pkwy",
          crossStreet2: "Dutch London St",
        },
      },
    },
  },
  {
    postal: "876",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Greenwich Pkwy",
      crossStreet1: "Autopia Pkwy",
      crossStreet2: "Dutch London St",
    },
  },
  {
    postal: "877",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5401",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "878",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5401",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "879",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5401",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "880",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5401",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "881",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "882",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "883",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "884",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "885",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "886",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "887",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Greenwich Pkwy",
      crossStreet1: "Dutch London St",
      crossStreet2: "Autopia Pkwy",
    },
  },
  {
    postal: "888",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Autopia Pkwy": {
          crossStreet1: "Greenwich Pkwy",
          crossStreet2: "Exceptionalists Way",
        },
        "Greenwich Pkwy": {
          crossStreet1: "Autopia Pkwy",
          crossStreet2: "Exceptionalists Way",
        },
      },
    },
  },
  {
    postal: "889",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Greenwich Pkwy": {
          crossStreet1: "Autopia Pkwy",
          crossStreet2: "Exceptionalists Way",
        },
        "New Empire Way": {
          crossStreet1: "Dutch London St",
          crossStreet2: "Exceptionalists Way",
        },
      },
    },
  },
  {
    postal: "890",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "891",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "892",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "893",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "894",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "895",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "896",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "897",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "898",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5403",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "899",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "900",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "901",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "902",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "903",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "904",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5404",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "905",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "New Empire Way",
      crossStreet1: "Exceptionalists Way",
      crossStreet2: "Davis Ave",
    },
  },
  {
    postal: "906",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Greenwich Pkwy": {
          crossStreet1: "Autopia Pkwy",
          crossStreet2: "Exceptionalists Way",
        },
        "Exceptionalists Way": {
          crossStreet1: "New Empire Way",
          crossStreet2: "Greenwich Pkwy",
        },
        "New Empire Way": {
          crossStreet1: "Greenwich Pkwy",
          crossStreet2: "Davis Ave",
        },
      },
    },
  },
  {
    postal: "907",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Exceptionalists Way",
      crossStreet1: "New Empire Way",
      crossStreet2: "Autopia Pkwy",
    },
  },
  {
    postal: "908",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM02.00",
          crossStreet2: "I5 MM03.00",
        },
        "Davis Ave": {
          crossStreet1: "New Empire Way",
          crossStreet2: "Dutch London St",
        },
        "Greenwich Pkwy": {
          crossStreet1: "Autopia Pkwy",
          crossStreet2: "Exceptionalists Way",
        },
        "Exceptionalists Way": {
          crossStreet1: "Greenwich Pkwy",
          crossStreet2: "Autopia Pkwy",
        },
      },
    },
  },
  {
    postal: "909",
    twp: "Los Santos City",
    fdDistrict: "05",
    policeDistrict: "LSPD",
    fireBox: "5400",
    fdRunOrder: ["5", "6", "8", "10", "7", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM02.00",
          crossStreet2: "I5 MM03.00",
        },
        "Exceptionalists Way": {
          crossStreet1: "Greenwich Pkwy",
          crossStreet2: "Autopia Pkwy",
        },
      },
    },
  },
  {
    postal: "910",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM02.00",
          crossStreet2: "I5 MM03.00",
        },
        "Plaice Pl": {
          crossStreet1: "Chupacabra St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "911",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Pliace Pl",
      crossStreet1: "Chupacabra St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "912",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Pliace Pl",
      crossStreet1: "Chupacabra St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "913",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Pliace Pl",
      crossStreet1: "Chupacabra St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "914",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM02.00",
          crossStreet2: "LS Ports Exit",
        },
        "Chupacabra St": {
          crossStreet1: "Pliace Pl",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "915",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM03.00",
          crossStreet2: "LS Ports Exit",
        },
        "Chupacabra St": {
          crossStreet1: "Pliace Pl",
          crossStreet2: "Dead End",
        },
        "Plaice Pl": {
          crossStreet1: "Chupacabra St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "916",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Chupacabra St": {
          crossStreet1: "Pliace Pl",
          crossStreet2: "Dead End",
        },
        "Plaice Pl": {
          crossStreet1: "Chupacabra St",
          crossStreet2: "Chum St",
        },
      },
    },
  },
  {
    postal: "917",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM03.00",
          crossStreet2: "LS Ports Exit",
        },
        "Chupacabra St": {
          crossStreet1: "Pliace Pl",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "918",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM03.00",
          crossStreet2: "LS Ports Exit",
        },
        "Chupacabra St": {
          crossStreet1: "Pliace Pl",
          crossStreet2: "Dead End",
        },
        "Plaice Pl": {
          crossStreet1: "Chupacabra St",
          crossStreet2: "Chum St",
        },
      },
    },
  },
  {
    postal: "919",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM03.00",
          crossStreet2: "LS Ports Exit",
        },
        "Plaice Pl": {
          crossStreet1: "Chupacabra St",
          crossStreet2: "Chum St",
        },
      },
    },
  },
  {
    postal: "920",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM03.00",
          crossStreet2: "LS Ports Exit",
        },
        "Chupacabra St": {
          crossStreet1: "Pliace Pl",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "921",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6901",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM03.00",
          crossStreet2: "LS Ports Exit",
        },
        "Plaice Pl": {
          crossStreet1: "Chupacabra St",
          crossStreet2: "Chum St",
        },
      },
    },
  },
  {
    postal: "922",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Plaice Pl": {
          crossStreet1: "Chum St",
          crossStreet2: "Chum St",
        },
        "Chum St": {
          crossStreet1: "Plaice Pl",
          crossStreet2: "Signal St",
        },
      },
    },
  },
  {
    postal: "923",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Chum St": {
          crossStreet1: "Plaice Pl",
          crossStreet2: "Signal St",
        },
        "Signal St": {
          crossStreet1: "Chum St",
          crossStreet2: "Dutch London St",
        },
      },
    },
  },
  {
    postal: "924",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM03.00",
          crossStreet2: "LS Ports Exit",
        },
        "Chum St": {
          crossStreet1: "Plaice Pl",
          crossStreet2: "Signal St",
        },
        "Signal St": {
          crossStreet1: "Voodoo Pl",
          crossStreet2: "Chum St",
        },
      },
    },
  },
  {
    postal: "925",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20": {
          crossStreet1: "LS Ports Exit",
          crossStreet2: "Rt 20 MM01.00",
        },
        "Signal St": {
          crossStreet1: "Voodoo Pl",
          crossStreet2: "Chum St",
        },
      },
    },
  },
  {
    postal: "926",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Interstate 5": {
          crossStreet1: "I5 MM03.00",
          crossStreet2: "LS Ports Exit",
        },
        "Signal St": {
          crossStreet1: "Voodoo Pl",
          crossStreet2: "Chum St",
        },
      },
    },
  },
  {
    postal: "927",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Signal St": {
          crossStreet1: "Voodoo Pl",
          crossStreet2: "Chum St",
        },
        "Voodoo Pl": {
          crossStreet1: "Signal St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "928",
    twp: "Los Santos City",
    fdDistrict: "06",
    policeDistrict: "LSPD",
    fireBox: "6900",
    fdRunOrder: ["6", "10", "5", "7", "8", "1", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Voodoo Pl",
      crossStreet1: "Signal St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "929",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7904",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Abattoir Ave",
      crossStreet1: "Chum St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "930",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7903",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Abattoir Ave",
      crossStreet1: "Chum St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "931",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7903",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Abattoir Ave": {
          crossStreet1: "Chum St",
          crossStreet2: "Dead End",
        },
        "Buccaneer Way": {
          crossStreet1: "Chum St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "932",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7903",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20": {
          crossStreet1: "LS Ports Exit",
          crossStreet2: "Rt 20 MM01.00",
        },
        "Abattoir Ave": {
          crossStreet1: "Chum St",
          crossStreet2: "Dead End",
        },
        "Buccaneer Way": {
          crossStreet1: "Chum St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "933",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7902",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20": {
          crossStreet1: "LS Ports Exit",
          crossStreet2: "Rt 20 MM01.00",
        },
        "Chum St": {
          crossStreet1: "Signal St",
          crossStreet2: "Abattoir Ave",
        },
        "Abattoir Ave": {
          crossStreet1: "Chum St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "934",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7902",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Chum St": {
          crossStreet1: "Signal St",
          crossStreet2: "Poplar St",
        },
        "Abattoir Ave": {
          crossStreet1: "Chum St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "935",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7902",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Rt 20": {
          crossStreet1: "LS Ports Exit",
          crossStreet2: "Rt 20 MM01.00",
        },
        "Abattoir Ave": {
          crossStreet1: "Chum St",
          crossStreet2: "Dead End",
        },
        "Buccaneer Way": {
          crossStreet1: "Chum St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "936",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7904",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      availableRoads: {
        "Buccaneer Way": {
          crossStreet1: "Chum St",
          crossStreet2: "Dead End",
        },
        "Abattoir Ave": {
          crossStreet1: "Chum St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "937",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buccaneer Way",
      crossStreet1: "Chum St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "938",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buccaneer Way",
      crossStreet1: "Chum St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "939",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buccaneer Way",
      crossStreet1: "Chum St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "940",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buccaneer Way",
      crossStreet1: "Chum St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "941",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buccaneer Way",
      crossStreet1: "Chum St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "942",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buccaneer Way",
      crossStreet1: "Chum St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "943",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buccaneer Way",
      crossStreet1: "Chum St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "944",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buccaneer Way",
      crossStreet1: "Chum St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "945",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buccaneer Way",
      crossStreet1: "Chum St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "946",
    twp: "Los Santos City",
    fdDistrict: "07",
    policeDistrict: "LSPD",
    fireBox: "7905",
    fdRunOrder: ["7", "6", "10", "5", "1", "8", "2", "9", "4", "3", "11"],
    policeRunOrder: ["LSPD", "LCSO", "SAHP", "BCSO", "SSPD", "PBPD", "MBPD"],
    streets: {
      autoFill: true,
      mainStreet: "Buccaneer Way",
      crossStreet1: "Chum St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "947",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Bayview Bridge": {
          crossStreet1: "Great Voyage Rd",
          crossStreet2: "Procopio Promenade",
        },
        "Bayview Dr": {
          crossStreet1: "Squidrillo Fwy",
          crossStreet2: "Riverfront Ave",
        },
        "Pearl Rd": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "948",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Great Voyage Rd": {
          crossStreet1: "Bayview Bridge",
          crossStreet2: "Dead End",
        },
        "Bayview Dr": {
          crossStreet1: "Squidrillo Fwy",
          crossStreet2: "Riverfront Ave",
        },
      },
    },
  },
  {
    postal: "949",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Bayview Dr": {
          crossStreet1: "Squidrillo Fwy",
          crossStreet2: "Riverfront Ave",
        },
        "Squidrillo Fwy": {
          crossStreet1: "Bayview Dr",
          crossStreet2: "Riverfront Ave",
        },
      },
    },
  },
  {
    postal: "950",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Shell Bead Rd",
      crossStreet1: "Conny Ln",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "951",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Sunrise Ln": {
          crossStreet1: "Conny Ln",
          crossStreet2: "Riverfront Ave",
        },
        "Conny Ln": {
          crossStreet1: "Pearl Rd",
          crossStreet2: "Shell Bead Rd",
        },
        "Shell Bead Rd": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Dead End",
        },
        "Pearl Rd": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Dead End",
        },
        "Riverfront Ave": {
          crossStreet1: "Pearl Rd",
          crossStreet2: "Ortega Dr",
        },
      },
    },
  },
  {
    postal: "952",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Riverfront Ave",
      crossStreet1: "Pearl Rd",
      crossStreet2: "Shell Bead Rd",
    },
  },
  {
    postal: "953",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Riverfront Ave",
      crossStreet1: "Ortega Dr",
      crossStreet2: "Clam Way",
    },
  },
  {
    postal: "954",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Ortega Dr": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Clam Way",
        },
        "Riverfront Ave": {
          crossStreet1: "Ortega Dr",
          crossStreet2: "Clam Way",
        },
        "Clam Way": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "955",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Ortega Dr": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Clam Way",
        },
        "Clam Way": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "956",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Clam Way",
      crossStreet1: "Riverfront Ave",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "957",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Clam Way": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Dead End",
        },
        "Riverfront Ave": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "958",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Riverfront Ave",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found",
    },
  },
  {
    postal: "959",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Riverfront Ave",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found",
    },
  },
  {
    postal: "960",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Riverfront Ave",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found",
    },
  },
  {
    postal: "961",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Riverfront Ave": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "Clam Way": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "962",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Riverfront Ave",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found",
    },
  },
  {
    postal: "963",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Riverfront Ave",
      crossStreet1: "Not Found",
      crossStreet2: "Not Found",
    },
  },
  {
    postal: "964",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Riverfront Ave": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "Squidrillo Fwy": {
          crossStreet1: "Bayview Dr",
          crossStreet2: "Riverfront Ave",
        },
      },
    },
  },
  {
    postal: "965",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Riverfront Ave": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "Squidrillo Fwy": {
          crossStreet1: "Bayview Dr",
          crossStreet2: "Riverfront Ave",
        },
      },
    },
  },
  {
    postal: "966",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Riverfront Ave": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
        "Bayview Dr": {
          crossStreet1: "Squidrillo Fwy",
          crossStreet2: "Riverfront Ave",
        },
      },
    },
  },
  {
    postal: "967",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Bayview Dr",
      crossStreet1: "Squidrillo Fwy",
      crossStreet2: "Riverfront Ave",
    },
  },
  {
    postal: "968",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Bayview Dr",
      crossStreet1: "Squidrillo Fwy",
      crossStreet2: "Riverfront Ave",
    },
  },
  {
    postal: "969",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Bayview Dr",
      crossStreet1: "Squidrillo Fwy",
      crossStreet2: "Riverfront Ave",
    },
  },
  {
    postal: "970",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Bayview Dr",
      crossStreet1: "Squidrillo Fwy",
      crossStreet2: "Riverfront Ave",
    },
  },
  {
    postal: "971",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Bayview Dr": {
          crossStreet1: "Squidrillo Fwy",
          crossStreet2: "Riverfront Ave",
        },
        "Squidrillo Fwy": {
          crossStreet1: "Bayview Dr",
          crossStreet2: "Riverfront Ave",
        },
      },
    },
  },
  {
    postal: "972",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Squidrillo Fwy",
      crossStreet1: "Bayview Dr",
      crossStreet2: "Riverfront Ave",
    },
  },
  {
    postal: "973",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Squidrillo Fwy": {
          crossStreet1: "Bayview Dr",
          crossStreet2: "Riverfront Ave",
        },
        "Clam Way": {
          crossStreet1: "Ortega Dr",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "974",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1102",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Bayview Dr": {
          crossStreet1: "Great Voyage Rd",
          crossStreet2: "Squidrillo Fwy",
        },
        "Power Station Access Rd": {
          crossStreet1: "Bayview Dr",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "975",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1155",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Bayview Dr",
      crossStreet1: "Squidrillo Fwy",
      crossStreet2: "Riverfront Ave",
    },
  },
  {
    postal: "977",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Power Station Access Rd",
      crossStreet1: "Bayview Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "1000",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Hanes Memorial Bridge": {
          crossStreet1: "Rt 1 NB",
          crossStreet2: "Driftwood Dr",
        },
        "Driftwood Dr": {
          crossStreet1: "Hanes Memorial Bridge",
          crossStreet2: "Swell St",
        },
      },
    },
  },
  {
    postal: "1001",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Driftwood Dr",
      crossStreet1: "Swell St",
      crossStreet2: "Hanes Memorial Bridge",
    },
  },
  {
    postal: "1002",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Driftwood Dr",
      crossStreet1: "Swell St",
      crossStreet2: "Hanes Memorial Bridge",
    },
  },
  {
    postal: "1003",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Driftwood Dr": {
          crossStreet1: "Silver St",
          crossStreet2: "Hanes Memorial Bridge",
        },
        "Swell St": {
          crossStreet1: "Shore Way",
          crossStreet2: "Driftwood Dr",
        },
        "Shore Way": {
          crossStreet1: "Swell St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "1004",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Driftwood Dr": {
          crossStreet1: "Silver St",
          crossStreet2: "Hanes Memorial Bridge",
        },
        "Shore Way": {
          crossStreet1: "Swell St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "1005",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Driftwood Dr": {
          crossStreet1: "Mill St, Silver St",
          crossStreet2: "Swell St",
        },
        "Silver St": {
          crossStreet1: "Driftwood Dr",
          crossStreet2: "Dead End",
        },
        "Mill St": {
          crossStreet1: "Driftwood Dr",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "1006",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Driftwood Dr": {
          crossStreet1: "Mill St",
          crossStreet2: "Bobcat Way, Mill St, Silver St",
        },
        "Bobcat Way": {
          crossStreet1: "Driftwood Dr",
          crossStreet2: "Dead End",
        },
        "Mill St": {
          crossStreet1: "Driftwood Dr",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "1007",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Ortega Dr": {
          crossStreet1: "Poseidon Pkwy",
          crossStreet2: "Squidrillo Fwy EB to Ortega Dr Ramp",
        },
        "Poseidon Pkwy": {
          crossStreet1: "Ortega Dr",
          crossStreet2: "Bobcat Way",
        },
      },
    },
  },
  {
    postal: "1008",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Poseidon Pkwy": {
          crossStreet1: "Ortega Dr",
          crossStreet2: "Bobcat Way",
        },
        "Ortega Dr": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Poseidon Pkwy",
        },
      },
    },
  },
  {
    postal: "1009",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Riverfront Ave": {
          crossStreet1: "Flotsam Rd",
          crossStreet2: "Ortega Dr",
        },
        "Flotsam Rd": {
          crossStreet1: "Ortega Dr",
          crossStreet2: "Riverfront Ave",
        },
        "Ortega Dr": {
          crossStreet1: "Flotsam Rd",
          crossStreet2: "Riverfront Ave",
        },
      },
    },
  },
  {
    postal: "1010",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Riverfront Ave": {
          crossStreet1: "Flotsam Rd",
          crossStreet2: "Trawlers Rock Rd",
        },
        "Flotsam Rd": {
          crossStreet1: "Ortega Dr",
          crossStreet2: "Riverfront Ave",
        },
        "Clam Way": {
          crossStreet1: "Ortega Dr",
          crossStreet2: "Riverfront Ave",
        },
        "Ortega Dr": {
          crossStreet1: "Clam Way",
          crossStreet2: "Flotsam Rd",
        },
      },
    },
  },
  {
    postal: "1011",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Ortega Dr": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Clam Way",
        },
        "Riverfront Ave": {
          crossStreet1: "Ortega Dr",
          crossStreet2: "Clam Way",
        },
        "Clam Way": {
          crossStreet1: "Ortega Dr",
          crossStreet2: "Riverfront Ave",
        },
        "Trawlers Rock Rd": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Riverfront Ave",
        },
      },
    },
  },
  {
    postal: "1012",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Trawlers Rock Rd": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Riverfront Ave",
        },
        "Marina Beach": {
          crossStreet1: "Not Found",
          crossStreet2: "Not Found",
        },
      },
    },
  },
  {
    postal: "1013",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Riverfront Ave": {
          crossStreet1: "Pearl Rd",
          crossStreet2: "Shell Bead Rd",
        },
        "Sunrise Ln": {
          crossStreet1: "Conny Ln",
          crossStreet2: "Riverfront Ave",
        },
        "Shell Bead Rd": {
          crossStreet1: "Conny Ln",
          crossStreet2: "Riverfront Ave",
        },
        "Pearl Rd": {
          crossStreet1: "Conny Ln",
          crossStreet2: "Riverfront Ave",
        },
      },
    },
  },
  {
    postal: "1014",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Riverfront Ave": {
          crossStreet1: "Bayview Dr",
          crossStreet2: "Pearl Rd",
        },
        "Bayview Bridge": {
          crossStreet1: "Procopio Promenade",
          crossStreet2: "Riverfront Ave",
        },
      },
    },
  },
  {
    postal: "1015",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Pearl Rd": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Dead End",
        },
        "Conny Ln": {
          crossStreet1: "Pearl Rd",
          crossStreet2: "Shell Bead Rd",
        },
        "Sunrise Ln": {
          crossStreet1: "Conny Ln",
          crossStreet2: "Riverfront Ave",
        },
      },
    },
  },
  {
    postal: "1016",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Shell Bead Rd": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Dead End",
        },
        "Conny Ln": {
          crossStreet1: "Shell Bead Rd",
          crossStreet2: "Sunrise Ln",
        },
      },
    },
  },
  {
    postal: "1017",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Ortega Dr": {
          crossStreet1: "Riverfront Ave",
          crossStreet2: "Clam Way",
        },
        "Clam Way": {
          crossStreet1: "Ortega Dr",
          crossStreet2: "Dead End",
        },
        "Abalone St": {
          crossStreet1: "Clam Way",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "1018",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Balboa St": {
          crossStreet1: "Wello Dr",
          crossStreet2: "Ortega Dr",
        },
        "Flotsam Rd": {
          crossStreet1: "Balboa St",
          crossStreet2: "Ortega Dr",
        },
        "Ortega Dr": {
          crossStreet1: "Flotsam Rd",
          crossStreet2: "Balboa St",
        },
        "Wello Dr": {
          crossStreet1: "Balboa St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "1019",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Balboa St": {
          crossStreet1: "Kelly St",
          crossStreet2: "Ortega Dr",
        },
        "Kelly St": {
          crossStreet1: "Balboa St",
          crossStreet2: "Riverfront Ave",
        },
        "Riverfront Ave": {
          crossStreet1: "Kelly St",
          crossStreet2: "Ortega Dr",
        },
        "Ortega Dr": {
          crossStreet1: "Balboa St",
          crossStreet2: "Riverfront Ave",
        },
      },
    },
  },
  {
    postal: "1020",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Ortega Dr": {
          crossStreet1: "Poseidon Pkwy",
          crossStreet2: "Squidrillo Fwy EB",
        },
        "Squidrillo Fwy EB": {
          crossStreet1: "Bayview Dr Entrance",
          crossStreet2: "Ortega Dr Exit",
        },
        "Squidrillo Fwy WB": {
          crossStreet1: "Ortega Dr Entrance",
          crossStreet2: "Bayview Dr Exit",
        },
        "Squidrillo Fwy EB to Ortega Dr Ramp": {
          crossStreet1: "Squidrillo Fwy EB",
          crossStreet2: "Ortega Dr",
        },
        "Ortega Dr to Squidrillo Fwy WB Ramp": {
          crossStreet1: "Ortega Dr",
          crossStreet2: "Squidrillo Fwy WB",
        },
      },
    },
  },
  {
    postal: "1021",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "State Park Dr": {
          crossStreet1: "Kodiak Dr",
          crossStreet2: "Riverfront Ave, Ortega Dr",
        },
        "Riverfront Ave": {
          crossStreet1: "Kelly St",
          crossStreet2: "Ortega Dr, State Park Dr",
        },
        "Ortega Dr": {
          crossStreet1: "Riverfront Ave, State Park Dr",
          crossStreet2: "Squidrillo Fwy WB",
        },
      },
    },
  },
  {
    postal: "1022",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Riverfront Ave": {
          crossStreet1: "Kelly St",
          crossStreet2: "Ortega Dr, State Park Dr",
        },
        "Squidrillo Fwy EB": {
          crossStreet1: "Ortega Dr Exit",
          crossStreet2: "Bayview Dr Entrance",
        },
        "Squidrillo Fwy WB": {
          crossStreet1: "Ortega Dr Entrance",
          crossStreet2: "Bayview Dr Exit",
        },
      },
    },
  },
  {
    postal: "1023",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Squidrillo Fwy EB": {
          crossStreet1: "Bayview Dr Entrance",
          crossStreet2: "Ortega Dr Exit",
        },
        "Squidrillo Fwy WB": {
          crossStreet1: "Ortega Dr Entrance",
          crossStreet2: "Bayview Dr Exit",
        },
        "Balboa St": {
          crossStreet1: "Kelly St",
          crossStreet2: "Wello Dr",
        },
        "Balboa St Ext": {
          crossStreet1: "Balboa St",
          crossStreet2: "Dead End",
        },
        "Kelly St": {
          crossStreet1: "Balboa St",
          crossStreet2: "Riverfront Ave",
        },
        "Wello Dr": {
          crossStreet1: "Balboa St",
          crossStreet2: "Dead End",
        },
        "Clam Way": {
          crossStreet1: "Abalone St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "1024",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Squidrillo Fwy EB": {
          crossStreet1: "Bayview Dr Entrance",
          crossStreet2: "Ortega Dr Exit",
        },
        "Squidrillo Fwy WB": {
          crossStreet1: "Ortega Dr Entrance",
          crossStreet2: "Bayview Dr Exit",
        },
        "Vista Point Rd": {
          crossStreet1: "State Park Dr",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "1025",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Squidrillo Fwy EB": {
          crossStreet1: "Bayview Dr Entrance",
          crossStreet2: "Ortega Dr Exit",
        },
        "Squidrillo Fwy WB": {
          crossStreet1: "Ortega Dr Entrance",
          crossStreet2: "Bayview Dr Exit",
        },
        "Clam Way": {
          crossStreet1: "Abalone St",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "1026",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Bayview Dr": {
          crossStreet1: "Geiger Bridge",
          crossStreet2: "Great Voyage Rd",
        },
        "Great Voyage Rd": {
          crossStreet1: "Bayview Dr",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "1027",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Great Voyage Rd": {
          crossStreet1: "Bayview Dr",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "1028",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Bayview Dr": {
          crossStreet1: "Geiger Bridge",
          crossStreet2: "Great Voyage Rd",
        },
        "Geiger Bridge": {
          crossStreet1: "Geiger Rd",
          crossStreet2: "Bayview Dr",
        },
        "Squidrillo Fwy EB": {
          crossStreet1: "Bayview Dr Entrance",
          crossStreet2: "Ortega Dr Exit",
        },
        "Squidrillo Fwy WB": {
          crossStreet1: "Ortega Dr Entrance",
          crossStreet2: "Bayview Dr Exit",
        },
        "Bayview Dr to Squidrillo Fwy EB Ramp": {
          crossStreet1: "Bayview Dr",
          crossStreet2: "Squidrillo Fwy EB",
        },
        "Squidrillo Fwy EB to Bayview Dr Ramp": {
          crossStreet1: "Squidrillo Fwy EB",
          crossStreet2: "Bayview Dr",
        },
        "Bayview Dr to Squidrillo Fwy WB Ramp": {
          crossStreet1: "Bayview Dr",
          crossStreet2: "Squidrillo Fwy WB",
        },
        "Squidrillo Fwy WB to Bayview Dr Ramp": {
          crossStreet1: "Squidrillo Fwy WB",
          crossStreet2: "Bayview Dr",
        },
      },
    },
  },
  {
    postal: "1029",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Squidrillo Fwy EB": {
          crossStreet1: "Bayview Dr Entrance",
          crossStreet2: "Ortega Dr Exit",
        },
        "Squidrillo Fwy WB": {
          crossStreet1: "Ortega Dr Entrance",
          crossStreet2: "Bayview Dr Exit",
        },
      },
    },
  },
  {
    postal: "1030",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Vista Point Rd",
      crossStreet1: "State Park Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "1031",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Vista Point Rd",
      crossStreet1: "State Park Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "1032",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "State Park Dr",
      crossStreet1: "Kodiak Dr",
      crossStreet2: "Vista Point Rd",
    },
  },
  {
    postal: "1033",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "State Park Dr": {
          crossStreet1: "Solverde Blvd",
          crossStreet2: "Vista Point Rd",
        },
        "Kodiak Dr": {
          crossStreet1: "State Park Dr",
          crossStreet2: "Minerva Rd",
        },
      },
    },
  },
  {
    postal: "1034",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Kodiak Dr",
      crossStreet1: "Minerva Rd",
      crossStreet2: "State Park Dr",
    },
  },
  {
    postal: "1035",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Kodiak Dr": {
          crossStreet1: "Squidrillo Fwy WB",
          crossStreet2: "State Park Dr",
        },
        "Minerva Rd": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Kodiak Dr",
        },
      },
    },
  },
  {
    postal: "1036",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Kodiak Dr": {
          crossStreet1: "Minerva Rd",
          crossStreet2: "Bayview Dr",
        },
        "Criticality Circle": {
          crossStreet1: "Geiger Bridge",
          crossStreet2: "Geiger Bridge",
        },
        "Squidrillo Fwy WB": {
          crossStreet1: "Squidrillo Fwy WB to Oypress Hollow Ln",
          crossStreet2: "Ortega Dr Entrance",
        },
        "Squidrillo Fwy EB": {
          crossStreet1: "Oypress Hollow Ln to Squidrillo Fwy EB",
          crossStreet2: "Ortega Dr Exit",
        },
        "Squidrillo Fwy WB to Bayview Dr Ramp": {
          crossStreet1: "Squidrillo Fwy WB",
          crossStreet2: "Bayview Dr",
        },
        "Bayview Dr to Squidrillo Fwy WB Ramp": {
          crossStreet1: "Bayview Dr",
          crossStreet2: "Squidrillo Fwy WB",
        },
        "Squidrillo Fwy EB to Bayview Dr Ramp": {
          crossStreet1: "Squidrillo Fwy EB",
          crossStreet2: "Bayview Dr",
        },
        "Bayview Dr to Squidrillo Fwy EB Ramp": {
          crossStreet1: "Bayview Dr",
          crossStreet2: "Squidrillo Fwy EB",
        },
      },
    },
  },
  {
    postal: "1037",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Geiger Rd": {
          crossStreet1: "Geiger Bridge",
          crossStreet2: "Geiger Rd",
        },
        "Geiger Bridge": {
          crossStreet1: "Geiger Rd",
          crossStreet2: "Bayview Dr",
        },
      },
    },
  },
  {
    postal: "1038",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Squidrillo Fwy EB": {
          crossStreet1: "Oypress Hollow Ln to Squidrillo Fwy EB",
          crossStreet2: "Bayview Dr Exit",
        },
        "Squidrillo Fwy WB": {
          crossStreet1: "Squidrillo Fwy WB to Oypress Hollow Ln",
          crossStreet2: "Bayview Dr Entrance",
        },
      },
    },
  },
  {
    postal: "1039",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Squidrillo Fwy EB": {
          crossStreet1: "Oypress Hollow Ln to Squidrillo Fwy EB",
          crossStreet2: "Bayview Dr Exit",
        },
        "Squidrillo Fwy WB": {
          crossStreet1: "Squidrillo Fwy WB to Oypress Hollow Ln",
          crossStreet2: "Bayview Dr Entrance",
        },
        "Kodiak Dr": {
          crossStreet1: "Squidrillo Fwy WB",
          crossStreet2: "Minerva Rd",
        },
        "Minerva Rd": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Kodiak Dr",
        },
      },
    },
  },
  {
    postal: "1040",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Minerva Rd": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Kodiak Dr",
        },
        "Kodiak Dr": {
          crossStreet1: "Minerva Rd",
          crossStreet2: "State Park Dr",
        },
      },
    },
  },
  {
    postal: "1041",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Kodiak Dr",
      crossStreet1: "Minerva Rd",
      crossStreet2: "State Park Dr",
    },
  },
  {
    postal: "1042",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "State Park Dr": {
          crossStreet1: "Kodiak Dr",
          crossStreet2: "Solverde Blvd, Camino Arroyo",
        },
        "Solverde Blvd": {
          crossStreet1: "Arroyo Vivo Campgrounds",
          crossStreet2: "State Park Dr, Camino Arroyo",
        },
        "Camino Arroyo": {
          crossStreet1: "Solverde Blvd, State Park Dr",
          crossStreet2: "Dead End",
        },
        "Solverde Blvd Ext": {
          crossStreet1: "Solverde Blvd, Camino Arroyo, State Park Dr",
          crossStreet2: "Dead End",
        },
      },
    },
  },
  {
    postal: "1043",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Camino Arroyo",
      crossStreet1: "Solverde Blvd, State Park Dr",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "1044",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Arroyo Vivo Campgrounds": {
          crossStreet1: "Solverde Blvd",
          crossStreet2: "Dead End",
        },
        "Solverde Blvd": {
          crossStreet1: "State Park Dr, Camino Arroyo",
          crossStreet2: "Avenida Del Solano",
        },
      },
    },
  },
  {
    postal: "1045",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {

        "Arroyo Vivo Campgrounds": {
          crossStreet1: "Solverde Blvd",
          crossStreet2: "Dead End",
        },
        "Solverde Blvd": {
          crossStreet1: "Arroyo Vivo Campgrounds",
          crossStreet2: "Avenida Del Solano",
        },
      }
      },
  },
  {
    postal: "1046",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Solverde Blvd": {
          crossStreet1: "Avenida Del Solano",
          crossStreet2: "Arroyo Vivo Campgrounds",
        },
        "Encanto Dr": {
          crossStreet1: "Avenida Del Solano",
          crossStreet2: "Dead End",
        }
      }
    },
  },
  {
    postal: "1047",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Avenida Del Solano": {
          crossStreet1: "Encanto Dr",
          crossStreet2: "Sierra Lucia Dr"
        },
        "Sierra Lucia Dr": {
          crossStreet1: "Avenida Del Solano",
          crossStreet2: "Dead End"
        }
      }
    },
  },
  {
    postal: "1048",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Solverde Blvd": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Arroyo Vivo Campgrounds"
        },
        "Avenida Del Solano": {
          crossStreet1: "Solverde Blvd",
          crossStreet2: "Sierra Lucia Dr"
        },
        "Encanto Dr": {
          crossStreet1: "Avenida Del Solano",
          crossStreet2: "Dead End"
        }
      }
    },
  },
  {
    postal: "1049",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Avenida Del Solano": {
          crossStreet1: "Solverde Blvd",
          crossStreet2: "Sierra Lucia Dr"
        },
        "Sierra Lucia Dr": {
          crossStreet1: "Avenida Del Solano",
          crossStreet2: "Dead End"
        }
      }
    },
  },
  {
    postal: "1050",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Solverde Blvd": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Arroyo Vivo Campgrounds"
        },
        "Avenida Del Solano": {
          crossStreet1: "Solverde Blvd",
          crossStreet2: "Sierra Lucia Dr"
        },
        "Encanto Dr": {
          crossStreet1: "Avenida Del Solano",
          crossStreet2: "Dead End"
        }
      }
    },
  },
  {
    postal: "1051",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Minerva Rd (East)": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Kodiak Dr"
        },
        "Minerva Rd (West)": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Josiah Dr"
        },
        "Dulcis St (South)": {
          crossStreet1: "Minerva Rd",
          crossStreet2: "Fugero Rd"
        },
        "Dulcis St (North)": {
          crossStreet1: "Minerva Rd",
          crossStreet2: "Solverde Blvd"
        }
      }
    },
  },
  {
    postal: "1052",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Dulcis St": {
          crossStreet1: "Fugero Rd",
          crossStreet2: "Minerva Rd"
        },
        "Fugero Rd": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Camino Del Cielo"
        }
      }
    },
  },
  {
    postal: "1053",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Oypress Hollow Ln": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Squidrillo Fwy EB/WB"
        },
        "Dulcis St": {
          crossStreet1: "Junipero Cabrera Hwy, Oypress Hollow Ln",
          crossStreet2: "Fugero Rd"
        },
        "Dillmore Way": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Dead End"
        },
        "Del Soleo Hwy EB": {
          crossStreet1: "Del Soleo Hwy EB to Squidrillo Fwy EB",
          crossStreet2: "Dead End"
        },
        "Del Soleo Hwy WB": {
          crossStreet1: "Squidrillo Fwy WB to Del Soleo Hwy WB",
          crossStreet2: "Dead End"
        }
      }
    },
  },
  {
    postal: "1054",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Orolund Circle": {
          crossStreet1: "Lomeli St",
          crossStreet2: "Dead End"
        },
        "Lomeli St": {
          crossStreet1: "Oypress Hollow Ln",
          crossStreet2: "Orolund Circle"
        }
      }
    },
  },
  {
    postal: "1055",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Orolund Circle",
      crossStreet1: "Lomeli St",
      crossStreet2: "Dead End",
    },
  },
  {
    postal: "1056",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Sardine Row",
      crossStreet1: "3rd St",
      crossStreet2: "Doldrum Blvd"
    },
  },
  {
    postal: "1057",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Lockwood Loop": {
          crossStreet1: "2nd St",
          crossStreet2: "Juniper Ave"
        },
        "Marinera Ave": {
          crossStreet1: "Juniper Ave",
          crossStreet2: "Doldrum Blvd, Sardine Row"
        },
        "1st St": {
          crossStreet1: "Lockwood Loop",
          crossStreet2: "Doldrum Blvd"
        },
        "Doldrum Blvd": {
          crossStreet1: "2nd St",
          crossStreet2: "Sardine Row"
        },
        "2nd St": {
          crossStreet1: "Lockwood Loop",
          crossStreet2: "Doldrum Blvd"
        }
      }
    },
  },
  {
    postal: "1058",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Lockwood Loop": {
          crossStreet1: "Marinera Ave",
          crossStreet2: "Juniper Ave, Marinera Ave"
        },
        "Marinera Ave": {
          crossStreet1: "Lockwood Loop",
          crossStreet2: "Juniper Ave, Lockwood Loop, Sardine Row"
        }
      }
    },
  },
  {
    postal: "1059",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Marinera Ave": {
          crossStreet1: "Lockwood Loop",
          crossStreet2: "Junipero Cabrera Hwy"
        },
        "Junipero Cabrera Hwy": {
          crossStreet1: "Ladera Ln",
          crossStreet2: "Dulcis St"
        },
      }
    },
  },
  {
    postal: "1060",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Dillmore Way": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Dead End"
        },
        "Del Soleo Hwy EB": {
          crossStreet1: "Del Soleo Hwy EB to Squidrillo Fwy EB",
          crossStreet2: "Dead End"
        },
        "Del Soleo Hwy WB": {
          crossStreet1: "Squidrillo Fwy WB to Del Soleo Hwy WB",
          crossStreet2: "Dead End"
        },
        "Dulcis St": {
          crossStreet1: "Dillmore Way",
          crossStreet2: "Fugero Rd"
        }
      }
    },
  },
  {
    postal: "1061",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Fugero Rd": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Camino Del Cielo"
        },
        "Camino Del Cielo": {
          crossStreet1: "Fugero Rd",
          crossStreet2: "Dead End"
        }
      }
    },
  },
  {
    postal: "1062",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Minerva Rd": {
          crossStreet1: "Josiah Dr",
          crossStreet2: "Dulcis St"
        },
        "Josiah Dr": {
          crossStreet1: "Minerva Rd",
          crossStreet2: "Minerva Rd"
        },
        "Dulcis St": {
          crossStreet1: "Arroy Dr",
          crossStreet2: "Minerva Rd, Arroy Dr"
        },
        "Arrory Dr": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Perimeter, Dulcis St"
        }
      }
    },
  },
  {
    postal: "1063",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Dulcis St": {
          crossStreet1: "Solverde Blvd",
          crossStreet2: "Arroy Dr, Perimeter Rd"
        },
        "Arroy Dr": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Perimeter Rd, Dulcis St"
        },
        "Arroyo Vivo Campgrounds": {
          crossStreet1: "Solverde Blvd",
          crossStreet2: "Dead End"
        }
      }
    },
  },
  {
    postal: "1064",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Perimeter Rd": {
          crossStreet1: "Minerva Rd",
          crossStreet2: "Arroy Dr, Dulcis St"
        },
        "Arroyo Vivo Campgrounds": {
          crossStreet1: "Solverde Blvd",
          crossStreet2: "Dead End"
        }
      }
    },
  },
  {
    postal: "1065",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Camino Arroyo",
      crossStreet1: "Solverde Blvd, State Park Dr",
      crossStreet2: "Dead End"
    },
  },
  {
    postal: "1066",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Camino Arroyo",
      crossStreet1: "Solverde Blvd, State Park Dr",
      crossStreet2: "Dead End"
    },
  },
  {
    postal: "1067",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Perimeter Rd",
      crossStreet1: "Minerva Rd",
      crossStreet2: "Arroy Dr, Dulcis St"
    },
  },
  {
    postal: "1068",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Perimeter Rd",
      crossStreet1: "Minerva Rd",
      crossStreet2: "Arroy Dr, Dulcis St"
    },
  },
  {
    postal: "1069",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Perimeter Rd",
      crossStreet1: "Minerva Rd",
      crossStreet2: "Arroy Dr, Dulcis St"
    },
  },
  {
    postal: "1070",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Minerva Rd": {
          crossStreet1: "Josiah Dr",
          crossStreet2: "Fort Arroy Rd"
        },
        "Perimeter Rd": {
          crossStreet1: "Minerva Rd",
          crossStreet2: "Arroy Dr, Dulcis St"
        },
        "Fort Arroy Rd": {
          crossStreet1: "Minerva Rd",
          crossStreet2: "Dead End"
        },
        "Josiah Dr": {
          crossStreet1: "Minerva Rd",
          crossStreet2: "Minerva Rd"
        },
        "Arroy Dr": {
          crossStreet1: "Dulcis St",
          crossStreet2: "Perimeter Rd, Dulcis St"
        },
        "Dulcis St": {
          crossStreet1: "Perimeter Rd, Arroy Dr",
          crossStreet2: "Arroy Dr"
        }
      }
    },
  },
  {
    postal: "1071",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Josiah Dr": {
          crossStreet1: "Minerva Rd",
          crossStreet2: "Minerva Rd"
        },
        "Minerva Rd": {
          crossStreet1: "Josiah Dr",
          crossStreet2: "Perimeter Rd"
        },
        "Fort Arroy Rd": {
          crossStreet1: "Minerva Rd",
          crossStreet2: "Dead End"
        }
      }
    },
  },
  {
    postal: "1072",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        "Josiah Dr": {
          crossStreet1: "Minerva Rd", 
          crossStreet2: "Minerva Rd"
        },
        "Fugero Rd": {
          crossStreet1: "Camino Del Cielo",
          crossStreet2: "Dead End"
        }
      }
    },
  },
  {
    postal: "1073",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      autoFill: true,
      mainStreet: "Fugero Rd",
      crossStreet1: "Camino Del Cielo",
      crossStreet2: "Dead End"
    },
  },
  {
    postal: "1074",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {
      availableRoads: {
        
      }
    },
  },
  {
    postal: "1075",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1076",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1077",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1078",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1079",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1080",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1081",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1082",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1083",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1084",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1085",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1086",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1087",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1088",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1089",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1090",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1091",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1092",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1093",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
  {
    postal: "1094",
    twp: "Roxwood",
    fdDistrict: "11",
    policeDistrict: "MBPD",
    fireBox: "1101",
    fdRunOrder: ["11", "3", "4", "9", "2", "1", "8", "10", "7", "6", "5"],
    policeRunOrder: ["MBPD", "SAHP", "BCSO", "PBPD", "SSPD", "LCSO", "LSPD"],
    streets: {},
  },
];
