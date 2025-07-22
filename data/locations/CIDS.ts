import { ILocation } from "@/models/interfaces/locations/ICIDS";

export const getLocation = (location: string): ILocation | undefined => {
  const locations = CIDSData.filter((loc) => loc.name === location);
  if (locations.length > 0) {
    return locations[0];
  }
  return undefined;
};

export const CIDSData: ILocation[] = [
  {
    id: 1,
    name: "PostOP Depot",
    postal: "016",
    postalRange: ["016", "018", "015", "046", "017"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Rt 1 SB",
    cids: `COMM 1 STORY 80X80 CLASS 2 (NON-COMBUSTIBLE)
      POSTOP DEPOT
      A SIDE - STREET
      B SIDE - BRUSH
      C SIDE - BRUSH
      D SIDE - STREET
      UTILITIES AT B/C CORNER EXTERIOR
      VEHICLE ENTRANCES ON A/B CORNER AND D SIDE
      HYDRANT AVAILABLE ACROSS STREET ON D SIDE
      !!!CAUTION!!!
      STACKED BOXES, UNK CONTENTS`,
  },
  {
    id: 2,
    name: "0173 Procopio Dr.",
    postal: "017",
    postalRange: ["017", "018", "019", "016", "020"],
    notLocation: true,
    mainStreet: "Procopio Dr",
    crossStreet1: "Paleto Blvd",
    crossStreet2: "Dulouz Ave",
    cids: `MULTI-FAMILY PD 3 STRY 50X90 CLASS 3 (ORDINARY)
      A SIDE - STREET
      B SIDE - BRUSH
      C SIDE - CLIFF/STAIRS DOWN HILL
      D SIDE - BRUSH
      ATTACHED OVERHEAD PORCH A SIDE ON DIVISION 2
      STAIRS LOCATED B SIDE TO ACCESS DIVISION SUB 1
      ATTACHED PORCH ON C SIDE AT DIVISION SUB 1
      HYDRANT DIRECTLY ACROSS STREET ON A SIDE
      !!!CAUTION!!!
      MEMBERS UTILIZE EXTREME CAUTION OPERATING ON SIDES B/C/D DUE TO CLIFF
      C SIDE IS ON SUPPORTS, CONSIDER DEFENSIVE OPERATIONS IF COMPROMISED`,
  },
  {
    id: 3,
    name: "0175 Procopio Dr.",
    postal: "017",
    postalRange: ["017", "018", "019", "016", "020"],
    notLocation: true,
    mainStreet: "Procopio Dr",
    crossStreet1: "Dulouz Ave",
    crossStreet2: "Cascabel Ave",
    cids: `MULTI-FAMILY PD 2 STRY 115X60 CLASS 3 (ORDINARY)
      A SIDE - STREET
      B SIDE - BRUSH
      C SIDE - CLIFF
      D SIDE - TREES/BRUSH
      GARAGES (2) A SIDE ATTACHED TO DWELLING AT D SIDE
      C SIDE IS SUPPORTED BY STRUTS ON CLIFF FACE, CONSIDER DEFENSIVE OPERATIONS IF COMPROMISED
      HYDRANT LOCATED AT A/B CORNER BY STREET
      UTILITIES LOCATED ON GARAGE BY A/B CORNER
      !!!CAUTION!!!
      MEMBERS UTILIZE EXTREME CAUTION OPERATING ON SIDES B/C/D DUE TO CLIFF`,
  },
  {
    id: 4,
    name: "Black Woods Saloon",
    postal: "019",
    postalRange: ["019", "018", "017", "020", "021", "044"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Dulouz Ave",
    crossStreet2: "Pyrite Ave",
    cids: `COMM 2 STRY 65X65 CLASS 3 (ORDINARY)
      BLACK WOODS SALOON FRMRLY HEN HOUSE
      A SIDE - PALETO BLVD
      B SIDE - DULOUZ AVE
      C SIDE - ALLEYWAY
      D SIDE - DETACHED ABANDONED DWELLING
      DIVISION 1 - STAIRS TO DIVISION 2 ON B/C CORNER
      STAIRS TO DIVISION SUB 1 UNDERNEATH STAIRS TO DIVISION 2
      DIVISION 2 - ELEVATED PATRON AREA, SUPPORTS EXPOSED ON DIVISION 1,
      CONSIDER EXTERIOR OPERATIONS IF SUPPORTS COMPROMISED
      DIVISION SUB 1 - BATHROOMS
      NO SMOKE DETECTORS OR FIRE SPRSN SYSTEM
      HYDRANTS LOCATED ACROSS STREETS ON A/B SIDES`,
  },
  {
    id: 5,
    name: "4401 Procopio Dr.",
    postal: "019",
    postalRange: ["019", "018", "017", "020", "021", "044"],
    notLocation: true,
    mainStreet: "Procopio Dr",
    crossStreet1: "Dulouz Ave",
    crossStreet2: "Cascabel Ave",
    cids: `SINGLE-FAMILY PD 1 STRY 45X55 CLASS 3 (ORDINARY)
      A SIDE - PROCOPIO DR
      B SIDE - DETACHED GARAGE
      C SIDE - ALLEY
      D SIDE - DETACHED 1 STRY SINGLE-FAMILY PD
      CLAY TILE ROOF, UTILIZE ADAPTIVE VENTILATION OPERATIONS
      WALL ON C & D SIDE BETWEEN EXPOSURES
      UTILITIES AT C/D CORNER`,
  },
  {
    id: 6,
    name: "Paleto Pets & Vet",
    postal: "019",
    postalRange: ["019", "018", "017", "020", "021", "044"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Dulouz Ave",
    crossStreet2: "Pyrite Ave",
    cids: `COMM 1 STRY 35X75 CLASS 3 (ORDINARY)
      PALETO PETS & VETERINARY SERVICES
      A SIDE - PALETO BLVD
      B SIDE - EMPTY LOT
      B/C CORNER - DETACHED 1 STRY NON-DWELLING
      C SIDE - ALLEY
      D SIDE - ATTACHED 1 STRY COMM
      INTERCONNECTED COCKLOFT
      ROOF ON A SIDE ELEVATED
      !!!CAUTION!!!
      A SIDE OVERHANGING POWER LINES, USE CAUTION IF EXPOSED
      B/C CORNER - OVERHANGING WIRES FROM B/C CORNER EXPOSURE
      HYDRANTS ACCESSIBLE ON A SIDE, SAME STREET SIDE AND ACROSS`,
  },
  {
    id: 7,
    name: "The Bay Bar (Former Hen House)q",
    postal: "019",
    postalRange: ["019", "018", "017", "020", "021", "044"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Dulouz Ave",
    crossStreet2: "Pyrite Ave",
    cids: `COMM 1 STRY 35X95 CLASS 3 (ORDINARY)
      THE BAY BAR
      A SIDE - PALETO BLVD
      B SIDE - ATTACHED 1 STRY COMM
      C SIDE - ALLEYWAY
      D SIDE - DETACHED HOSPITAL
      INTERCONNECTED COCKLOFT
      ROOF ON A SIDE IS ELEVATED
      BEST ROOF ACCESS FROM D SIDE
      HYDRANTS ACCESSIBLE ON A SIDE, SAME STREET SIDE AND ACROSS
      `,
  },
  {
    id: 8,
    name: "The Bay Care Center",
    postal: "021",
    postalRange: ["021", "019", "020", "023", "044", "043"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Dulouz Ave",
    crossStreet2: "Pyrite Ave",
    cids: `HOSPITAL 1 STRY 75X95 CLASS 2 (NON-COMBUSTIBLE)
      THE BAY CARE MEDICAL CENTER AKA TBMC AKA BAY CARE
      A SIDE - PALETO BLVD
      B SIDE - DETACHED 1 STRY COMM
      C SIDE - PKING
      D SIDE - DETACHED 1 STRY INTERCONNECTED COMM
      ER ENTRANCE C/D CORNER
      AMBULANCE DROP OFF B/C CORNER
      MAX CAPACITY 15 PTS
      ALM SYSTEM PRESENT, NO SPRINKLERS IN MAIN HALLWAYS
      ROOF OVERHANGING A/D SIDES - CONSIDER ALT VENT OPS IF SUPPORTS COMPROMISED
      HYDRANT ACCESS ON A SIDE
      CONSIDER AGGRESSIVE ATTACK AND PRIMARY SEARCH/EVAC IF PLAUSIBLE`,
  },
  {
    id: 9,
    name: "J's Bonds",
    postal: "021",
    postalRange: ["021", "019", "020", "023", "044", "043"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Dulouz Ave",
    crossStreet2: "Pyrite Ave",
    cids: `COMM 1 STRY 35X45 CLASS 2 (NON-COMBUSTIBLE)
      J'S BONDS
      A SIDE - PALETO BLVD
      B SIDE - DETACHED HOSPITAL
      C SIDE - ATTACHED GARAGE WITH EXPOSURE TO DETACHED GARAGE
      D SIDE - PKING
      UTILITIES ON A SIDE
      HYDRANT ACCESS ON A SIDE`,
  },
  {
    id: 10,
    name: "Sally's Surf Shop",
    postal: "021",
    postalRange: ["021", "019", "020", "023", "044", "043"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Dulouz Ave",
    crossStreet2: "Pyrite Ave",
    cids: `MIXED USE 2 STRY 55X35 CLASS 2 (NON-COMBUSTIBLE)
      A SIDE - PALETO BLVD
      B SIDE - PKING
      C SIDE - DETACHED 1 STRY SINGLE-FAMILY PD
      D SIDE - BRUSH / DETACHED 1 STRY SINGLE-FAMILY PD
      DIVISION 1 - SALLY'S SURF SHOP
      DIVISION 2 - RESIDENTIAL (2)
      INTERNAL ACCESS TO DIVISION ONLY, NO EXTERIOR
      CONSIDER INITIAL PRIMARY SEARCH OF DIVISION 2, ACCESS BY C SIDE
      WINDOW BARS PRESENT ON DIVISION 1
      UTILITIES ON C SIDE
      HYDRANT ACCESS ON A SIDE`,
  },
  {
    id: 11,
    name: "Bay Side Drugs",
    postal: "023",
    postalRange: ["023", "021", "022", "024", "042"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Pyrite Ave",
    crossStreet2: "Cascabel Ave",
    cids: `COMM 1 STRY 35X45 CLASS 3 (ORDINARY)
      BAY SIDE DRUGS
      A SIDE - PALETO BLVD
      B SIDE - BRUSH
      C SIDE - DETACHED 1 STRY PD
      D SIDE - ATTACHED 1 STRY COMM WITH EXPOSURE TO MULTI-
      UTILITIES ON C SIDE
      HYDRANT ACCESS ON A SIDE`,
  },
  {
    id: 12,
    name: "South Seas Apartments",
    postal: "023",
    postalRange: ["023", "021", "022", "024", "042"],
    mainStreet: "Cascabel Ave",
    crossStreet1: "Paleto Blvd",
    crossStreet2: "Procopio Dr",
    cids: `APT 2 STRY 140X125 CLASS A (ATRIUM)
      SOUTH SEAS APARTMENTS
      A SIDE - CASCABEL AVE
      B SIDE - PALETO BLVD
      B/C SIDE - DETACHED 1 STRY INTERCONNECTED COMM
      C/D SIDE - DETACHED 1 STRY PD
      D SIDE - PROCOPIO DR
      12 UNITS
      DOOR BARS PRESENT ON SOME UNITS
      UTILITIES PRESENT ON D SIDE, MAIN ENTRANCE A SIDE, C SIDE D CORNER
      HYDRANT ACCESS B & D SIDES AND A SIDE ACROSS STREET
      !!!CAUTION!!!
      POOL LOCATED ON C/D CORNER, FFS TO UTILIZE EXTREME CAUTION WHILE OPERATING ON C/D CORNER
      NO ALM, SPRINKLER OR STANDPIPE SYSTEM PRESENT`,
  },
  {
    id: 13,
    name: "Blaine County Savings Bank - Paleto",
    postal: "024",
    postalRange: ["024", "023", "022", "025", "026", "042"],
    mainStreet: "Cascabel Ave",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Paleto Blvd",
    cids: `BANK 1 STRY 105X80 CLASS 2 (NON-COMBUSTIBLE)
      BLAINE COUNTY SAVINGS BANK
      A SIDE - CASCABEL AVE (PKING LOT)
      B SIDE - PROCOPIO DR
      C SIDE - DETACHED 2 STRY WHSE
      D SIDE - PALETO BLVD
      SINGLE ENTRANCE ON A SIDE
      SAFE IN REAR
      NO EXIT SIGNAGE
      UTILITIES ON C SIDE`,
  },
  {
    id: 14,
    name: "4585 Procopio Dr.",
    postal: "024",
    postalRange: ["024", "023", "022", "025", "026", "042"],
    notLocation: true,
    mainStreet: "Procopio Dr",
    crossStreet1: "Cascabel Ave",
    crossStreet2: "Paleto Blvd",
    cids: `SINGLE-FAMILY PD WITH ATTACHED GARAGE 
      1 STRY 45X50 CLASS 3 (ORDINARY)
      A SIDE - PROCOPIO DR
      B SIDE - BRUSH
      C SIDE - DETACHED 2 STRY MIXED-USE
      D SIDE - NO EXPOSURE
      HYDRANT ACCESS ON A SIDE
      !!!CAUTION!!!
      OVERHEAD WIRES 
      MEMBERS UTILIZE CAUTION WHEN OPERATING ON A & D SIDE`,
  },
  {
    id: 15,
    name: "Willie's Pharmacy & Supermarket",
    postal: "026",
    postalRange: ["026", "024", "025", "028", "041"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Pyrite Ave",
    crossStreet2: "Procopio Dr",
    cids: `SUPMKT 2 STRY 125X145 CLASS 3 (ORDINARY)
      WILLIE'S PHARMACY & SUPERMARKET AKA WILLIE'S
      A SIDE - PKING LOT
      B SIDE - PALETO BLVD
      C SIDE - DETACHED 1 STRY BANK
      D SIDE - DETACHED 1 STRY PD
      A SIDE - SUPMKT, C/D AREA - WHSE
      SUPMKT UTILITIES AT A/B CORNER, WHSE UTILITIES AT C/D CORNER
      HYDRANT ACCESS ON B SIDE`,
  },
  {
    id: 16,
    name: "0232 Paleto Blvd.",
    postal: "026",
    postalRange: ["026", "024", "025", "028", "041"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Cascabel Ave",
    crossStreet2: "Pyrite Ave",
    cids: `SINGLE-FAMILY PD 1 STRY 40X65 CLASS 5 (WOOD FRAME)
      A SIDE - PALETO BLVD
      B SIDE - PKING LOT
      C SIDE - DETACHED 1 STRY PD
      C/D SIDE - DETACHED 1 STRY GARAGE
      D SIDE - DETACHED 1 STRY PD
      HYDRANT ACCESS ON A SIDE`,
  },
  {
    id: 17,
    name: "Don's Country Store",
    postal: "039",
    postalRange: ["039", "029", "030"],
    notLocation: true,
    mainStreet: "Rt 1 SB",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Procopio Promenade",
    cids: `GAS STATION 1 STRY 45X45 CLASS 4 (WOOD FRAME)
      DON'S COUTRY STORE AKA DON'S
      A SIDE - GAS PUMPS
      B SIDE - ATTACHED COMM CLASS 2
      C SIDE - BRUSH
      D SIDE - GAS PUMPS
      NO FIRE ALM OR SPRSN SYSTEM
      GAS SHUTOFF BEHIND COUNTY ON B SIDE
      !!!CAUTION!!!
      NO SPRSN SYSTEM FOR A SIDE GAS PUMPS
      CONSIDER EXPOSURE PROTECTION FOR GAS PUMPS
      NEAREST HYDRANT AT INTERSECTION OF PROCOPIO DR & PALETO BLVD`,
  },
  {
    id: 18,
    name: "Pop's Pills",
    postal: "039",
    postalRange: ["039", "029", "030"],
    notLocation: true,
    mainStreet: "Rt 1 SB",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Procopio Promenade",
    cids: `COMM 1 STRY 35X40 CLASS 3 (ORDINARY)
      POP'S PILLS
      A SIDE - PKING LOT
      B SIDE - BRUSH
      C SIDE - BRUSH
      D SIDE - ATTACHED 1 STRY COMM/GAS STATION
      NO FIRE ALM OR SPRSN SYSTEM
      NEAREST HYDRANT AT INTERSECTION OF PROCOPIO DR & PALETO BLVD`,
  },
  {
    id: 19,
    name: "Beeker's Garage & Parts",
    postal: "039",
    postalRange: ["039", "029", "030"],
    mainStreet: "Rt 1 SB",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Procopio Promenade",
    cids: `MVRS 1 STRY 65X40 CLASS 2 (NON-COMBUSTIBLE)
      BEEKER'S GARAGE & PARTS
      A SIDE - PKING LOT
      B SIDE - PROPANE TANK
      C SIDE - ALLEY
      B SIDE - ATTACHED 1 STRY COMM
      NO FIRE ALM OR SPRSN SYSTEM
      UTILITIES LOCATED B/C CORNER
      !!!CAUTION!!!
      2035 CUBIC FT PROPANE TANK LOCATED B SIDE
      CONSIDER EXPOSURE PROTECTION BEFORE INITIAL ATTACK
      NUMEROUS ELECTRICAL HAZARDS
      HAZ MATS PRESENT
      HYDRANT LOCATED B/C CORNER`,
  },
  {
    id: 20,
    name: "Bayside Rev & Ride",
    postal: "040",
    postalRange: ["040", "028", "026", "041", "039", "063"],
    mainStreet: "Procopio Dr",
    crossStreet1: "Paleto Blvd",
    crossStreet2: "Rt 1 SB",
    cids: `MVRS 2 STRY 125X75 CLASS 2 (NON-COMBUSTIBLE)
      BAYSIDE REV & RIDE
      A SIDE - PROCOPIO DR
      B SIDE - SA ROUTE 1
      C SIDE - PARKING LOT / ALLEY
      D SIDE - PALETO BLVD
      STANDPIPE ACCESS A/B CORNER
      GAS SHUTOFF LOCATED A/D CORNER
      NO ALM OR SPRSN SYSTEM
      UTILS LOCATED C/D CORNER
      STACKED PALLETS AND VEHICLE PARTS ON C SIDE
      HYDRANT ACCESS A/B, C/D, & A/D CORNER`,
  },
  {
    id: 21,
    name: "Discount Clothing Store",
    postal: "040",
    postalRange: ["040", "028", "026", "041", "039", "063"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Cascabel Ave",
    cids: `COMM 1 STRY 60X55 CLASS 2 (NON-COMBUSTIBLE)
      DISCOUNT CLOTHING STORE
      A SIDE - PALETO BLVD
      B SIDE - ALLEY
      C SIDE - ALLEY
      D SIDE - DETACHED 1 STRY COMM
      NO ALM OR SPRSN SYSTEM
      UTILS A SIDE
      HYDRANT ACCESS AT A/D CORNER
      !!!CAUTION!!!
      EXPECT SIGNIFICANT FIRE GROWTH FROM CONTENTS IGNITION
      ELECTRICAL WIRES OVERHANG ON A/D SIDE`,
  },
  {
    id: 22,
    name: "Bay Hardware Store",
    postal: "041",
    postalRange: ["041", "026"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Cascabel Ave",
    cids: `COMM 1 STRY 50X35 CLASS 2 (NON-COMBUSTIBLE)
      BAY HARDWARE STORE
      A SIDE - PALETO BLVD
      B SIDE - DETACHED 1 STRY COMM
      C SIDE - ALLEY
      D SIDE - ATTACHED COMM WITH INTERCONNECTED COCKLOFT
      UTILS AT B/C CORNER
      HYDRANT ACCESS A/B CORNER`,
  },
  {
    id: 23,
    name: "Ray's Electronics",
    postal: "041",
    postalRange: ["041", "026"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Cascabel Ave",
    cids: `COMM 1 STRY 35X55 CLASS 2 (NON-COMBUSTIBLE)
      RAY'S ELECTRONICS
      A SIDE - PALETO BLVD
      B SIDE - ATTACHED 1 STRY COMM
      C SIDE - ALLEYWAY
      D SIDE - DETACHED 1 STRY COMM
      BOARDED WINDOWS
      UTILS ON C SIDE
      LADDER WITH ROOF ACCESS ON C SIDE
      HYDRANT ACCESS ON A SIDE`,
  },
  {
    id: 24,
    name: "Belinda May's Beauty Salon",
    postal: "041",
    postalRange: ["041", "026", "024"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Cascabel Ave",
    cids: `COMM 1 STRY 25X50 CLASS 3 (ORDINARY)
      BELINDA MAY'S BEAUTY SALON
      A SIDE - PALETO BLVD
      B SIDE - INTERCON 1 STRY COMM
      C SIDE - ALLEYWAY
      D SIDE - INTERCON 1 STRY COMM
      INTERCON COCKLOFT W/ D SIDE
      HYDRANT ACCESS ON A SIDE`,
  },
  {
    id: 25,
    name: "No Marks Cleaners",
    postal: "041",
    postalRange: ["041", "026", "024"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Cascabel Ave",
    cids: `COMM 1 STRY 25X50 CLASS 3 (ORDINARY)
      NO MARKS CLEANERS
      A SIDE - PALETO BLVD
      B SIDE - INTERCON 1 STRY COMM
      C SIDE - ALLEYWAY
      D SIDE - DETACHED 2 STRY WHSE
      INTERCON COCKLOFT W/ B SIDE
      UTILS ON C SIDE
      HYDRANT ACCESS A SIDE`,
  },
  {
    id: 26,
    name: "Morris & Sons Feed and Supplies (Warehouse)",
    postal: "041",
    postalRange: ["041", "042", "026", "024"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Cascabel Ave",
    cids: `COMM WHSE 2 STRY 50X115 CLASS 2 (NON-COMBUSTIBLE)
      MORRIS & SONS FEED AND SUPPLIES (WHSE)
      A SIDE - PALETO BLVD
      B SIDE - DETACHED 1 STRY COMM
      C SIDE - PARKING LOT / 2 STRY MIXED USE
      D SIDE - DETACHED 1 STRY GARAGE
      DIVISION 1 - STORAGE (MAINLY AG GOODS, POSS COMBUSTIBLES)
      DIVISION 2 - OFFICES
      NO ALM OR SPRSN SYSTEM
      UTILS ON A & C SIDE
      HYDRANT ACCESS ON A SIDE`,
  },
  {
    id: 27,
    name: "Xero Gas Station",
    postal: "042",
    postalRange: ["042", "041", "023", "024"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Cascabel Ave",
    cids: `GAS STATION 1 STRY 70X35 CLASS 3 (ORDINARY)
      XERO GAS STATION
      A SIDE - PALETO BLVD
      B SIDE - DETACHED 1 STRY GARAGE
      C SIDE - ALLEYWAY
      D SIDE - DETACHED 1 STRY COMM
      PUMPS ON A SIDE
      GAS SHUT OFF AT MAIN COUNTER
      ATTACHED OVERHANG OVER PUMPS
      EXTERIOR PROPANE STORAGE AT C/D CORNER
      UTILS ON C SIDE
      HYDRANT ACCESS A SIDE ACROSS STREET`,
  },
  {
    id: 28,
    name: "Mojito Inn",
    postal: "042",
    postalRange: ["042", "041", "023", "024", "043"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Pyrite Ave",
    crossStreet2: "Cascabel Ave",
    cids: `RESTAURANT 1 STRY 125X80 CLASS 3 (ORDINARY)
      MOJITO INN
      A SIDE - PALETO BLVD
      B SIDE - DETACHED 1 STRY COMM
      C SIDE - DETACHED 2 STRY HOTEL
      D SIDE - PYRITE AVE
      UTILS C AND D SIDE
      HYDRANT ACCESS A SIDE`,
  },
  {
    id: 29,
    name: "Wilson Hatcheries",
    postal: "041",
    postalRange: ["041", "042", "043", "044"],
    notLocation: true,
    mainStreet: "Rt 1 SB",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Pyrite Ave",
    cids: `COMM 2 STRY 80X100 CLASS 3 (ORDINARY)
      WILSON HATCHERIES
      A SIDE - ROUTE 1
      B SIDE - DETACHED 2 STRY COMM
      C SIDE - DETACHED 2 STRY WHSE
      D SIDE - DETACHED 2 STRY COMM
      LIVESTOCK ON C SIDE
      HYDRANT ACCESS A/B SIDE
      !!!CAUTION!!!
      EXTENSION TO POWER LINES/POLES LIKELY`,
  },
  {
    id: 30,
    name: "Morris & Sons Feed and Supplies",
    postal: "041",
    postalRange: ["041", "042", "043", "044"],
    notLocation: true,
    mainStreet: "Rt 1 SB",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Pyrite Ave",
    cids: `COMM 2 STRY 84X145 CLASS 2 (NON-COMBUSTIBLE)
      MORRIS & SONS FEED AND SUPPLIES
      A SIDE - PARKING (WITH DETACHED 2 STRY COMM)
      B SIDE - ROUTE 1
      C SIDE - DETACHED 2 STRY HOTEL
      D SIDE - DETACHED 1 STRY GAS STATION
      UTILS B SIDE
      HYDRANT ACCESS A/B SIDE`,
  },
  {
    id: 31,
    name: "Dream View Motel",
    postal: "042",
    postalRange: ["042", "061"],
    mainStreet: "Pyrite Ave",
    crossStreet1: "Paleto Blvd",
    crossStreet2: "Rt 1 SB",
    cids: `MOTEL 2 STRY 200X125 CLASS J (HOTEL)
      DREAM VIEW MOTEL
      A SIDE - PYRITE AVE
      B SIDE - ROUTE 1
      C SIDE - DETACHED 2 STRY MIXED
      D SIDE - DETACHED 1 STRY RESTAURANT
      L-SHAPED STRUCTURE
      22 UNITS WITH EXTERNAL STAIRCASE ACCESS
      COMMON COCKLOFT ON 2ND DIVISION
      OFFICE AT A/D CORNER
      UTILS AT C/D CORNER
      HYDRANT ACCESS ON A SIDE`,
  },
  {
    id: 32,
    name: "Clucking Bell Farms Offices",
    postal: "043",
    postalRange: ["043", "042"],
    notLocation: true,
    mainStreet: "Pyrite Ave",
    crossStreet1: "Paleto Blvd",
    crossStreet2: "Rt 1 SB",
    cids: `OFFICE 2 STRY 80X60 CLASS 3 (ORDINARY)
      CLUCKING BELL FARMS OFFICES
      A SIDE - PYRITE AVE
      B SIDE - PARKING LOT / ROUTE 1
      C SIDE - DETACHED SCRAPYARD
      D SIDE - DETACHED 1 STRY COMM
      DOOR BARS PRESENT
      HYDRANT ACCESS A SIDE`,
  },
  {
    id: 33,
    name: "Del Vecchio Liqour",
    postal: "043",
    postalRange: ["043", "042"],
    notLocation: true,
    mainStreet: "Pyrite Ave",
    crossStreet1: "Paleto Blvd",
    crossStreet2: "Rt 1 SB",
    cids: `COMM 1 STRY 25X25 CLASS 3 (ORDINARY)
      DEL VECCHIO LIQUOR
      A SIDE - PYRITE AVE
      B SIDE - 1 STRY INTERCON COMM
      C SIDE - DETACHED SCRAPYARD
      D SIDE - 1 STRY INTERCON COMM
      TAXPAYER WITH INTERCON COCKLOFT
      HYDRANT ACCESS A SIDE
      UTILS ON B/C CORNER`,
  },
  {
    id: 34,
    name: "Red's Machine Supplies",
    postal: "043",
    postalRange: ["043", "042", "044"],
    notLocation: true,
    mainStreet: "Paleto Blvd",
    crossStreet1: "Pyrite Ave",
    crossStreet2: "Dulouz Ave",
    cids: `COMM 1 STRY 40X40 CLASS 5 (METAL)
      RED'S MACHINE SUPPLIES
      A SIDE - PALETO BLVD
      B SIDE - DETACHED 1 STRY TAXPAYER
      C SIDE - ROUTE 1
      D SIDE - DETACHED 1 STRY TAXPAYER
      EXPOSURE TO 440 CUBIC FT TANK
      UNK EXPOSURE TANK CONTENTS (H1/F3/R0)
      HYDRANT ACCESS ON A SIDE
      !!!CAUTION!!!
      TRIP HAZARDS
      STACKED PALLETS THROUGHOUT SCRAPYARD
      VARIOUS HAZMATS, CONSIDER SPECIALIZED RESPONSE`,
  },
  {
    id: 35,
    name: "The Chrome Dome",
    postal: "044",
    postalRange: ["044", "043", "045"],
    notLocation: true,
    mainStreet: "Dulouz Ave",
    crossStreet1: "Paleto Blvd",
    crossStreet2: "Rt 1 SB",
    cids: `MVRS 1 STRY 120X75 CLASS 3 (ORDINARY)
      THE CHROME DOME
      A SIDE - ALLEYWAY
      B SIDE - DETACHED SCRAPYARD
      C SIDE - PARKING LOT
      D SIDE - INTERCONN 1 STRY COMM
      ENTER OFF DULOUZ AVE
      UTILS ON C SIDE
      HYDRANT ACCESS OFF DULOUZ AVE
      INTERCONN COCKLOFT WITH D EXPOSURE`,
  },
  {
    id: 36,
    name: "Pixel Pete's Arcade",
    postal: "044",
    postalRange: ["044", "043", "045"],
    notLocation: true,
    mainStreet: "Dulouz Ave",
    crossStreet1: "Paleto Blvd",
    crossStreet2: "Rt 1 SB",
    cids: `COMM 1 STRY 50X75 CLASS 3 (ORDINARY)
      PIXEL PETE'S ARCADE
      A SIDE - DULOUZ AVE
      B SIDE - DETACHED 1 STRY TAXPAYER
      C SIDE - INTERCONN 1 STRY MVRS
      D SIDE - PARKING LOT
      INTERCONN COCKLOFT WITH C EXPOSURE
      UTILS AT B/C CORNER
      HYDRANT ACCESS ON A SIDE ACROSS STREET`,
  },
  {
    id: 37,
    name: "Herr Kutz Barber Shop",
    postal: "044",
    postalRange: ["044", "043", "045", "019"],
    mainStreet: "Paleto Blvd",
    crossStreet1: "Dulouz Ave",
    crossStreet2: "Pyrite Ave",
    cids: `COMM 1.5 STRY 30X70 CLASS 3 (ORDINARY)
      HERR KUTZ BARBER SHOP
      A SIDE - PALETO BLVD
      B SIDE - INTERCON 1 STRY COMM
      C SIDE - ALLEY
      D SIDE - DULOUZ AVE
      ATTACHED ON B SIDE BY REAR (C)
      EXPANDED ATTIC/COCKLOFT
      UTILS ON A/D SIDE
      HYDRANT ACCESS A/D SIDE`,
  },
  {
    id: 38,
    name: "Jetsam Office - Paleto",
    postal: "045",
    postalRange: ["045", "044"],
    mainStreet: "Dulouz Ave",
    crossStreet1: "Paleto Blvd",
    crossStreet2: "Rt 1 SB",
    cids: `COMM 1.5 STRY 85X85 CLASS 3 (ORDINARY)
      JETSAM OFFICE - PALETO
      A SIDE - DULOUZ AVE
      B SIDE - DETACHED 1 STRY COMM
      C SIDE - PARKING LOT
      D SIDE - ROUTE 1 SB
      CURVED FRONT FROM D TO A SIDE
      !!!CAUTION!!!
      LINES OVERHANGING D SIDE
      FFS UTILIZE CAUTION WHEN OPERATING ON D SIDE
      USED PRIMARILY AS STORAGE
      TWO PEAKED ROOFS COVERING STRUCTURE
      UTILS B/C CORNER
      HYDRANT ACCESS BY A/D CORNER`,
  },
  {
    id: 39,
    name: "Paleto Tatoo Parlor",
    postal: "045",
    postalRange: ["045", "044"],
    mainStreet: "Dulouz Ave",
    crossStreet1: "Paleto Blvd",
    crossStreet2: "Rt 1 SB",
    cids: `COMM 1 STRY 30X40 CLASS 3 (ORDINARY)
      PALETO TATTOO PARLOR
      A SIDE - DULOUZ AVE
      B SIDE - INTERCON 1 STRY COMM
      C SIDE - DETACHED 1.5 STRY COMM
      D SIDE - INTERCON 1 STRY COMM
      INTERCON COCKLOFT WITH B AND D SIDE
      UTILS ON C SIDE
      HYDRANT ACCESS ON A SIDE`,
  },
  {
    id: 40,
    name: "Peckerwood Clothing Store",
    postal: "045",
    postalRange: ["045", "044"],
    mainStreet: "Paleto Blvd",
    crossStreet1: "Dulouz Ave",
    crossStreet2: "Procopio Dr",
    cids: `COMM 1.5 STRY 45X165 CLASS 3 (ORDINARY)
      PECKERWOOD CLOTHING STORE
      A SIDE - DULOUZ AVE
      B SIDE - DETACHED 1 STRY COMM
      C SIDE - DETACHED 1.5 STRY COMM
      D SIDE - DETACHED 3 STRY CHURCH
      CLOTHING STORE WITH ATTIC SPACE
      STACKED BOX CONDITION IN ATTIC
      HYDRANT ACCESS A SIDE
      !!!CAUTION!!!
      NUMEROUS HANGING WIRES BETWEEN BLDG & B DETACHED
      FFS USE CAUTION WHILE OPERATING ON B SIDE`,
  },
  {
    id: 41,
    name: "St Brigid Baptist Church",
    postal: "045",
    postalRange: ["045", "046", "018"],
    mainStreet: "Paleto Blvd",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Dulouz Ave",
    cids: `CHURCH 3 STRY 100X120 CLASS 3 (ORDINARY)
      ST BRIGID BAPTIST CHURCH
      A SIDE - PALETO BLVD
      B SIDE - DETACHED 1.5 STRY COMM
      C SIDE - PARKING LOT
      D SIDE - PARKING LOT
      PITCH ROOF - CROSS SHAPE
      HYDRANT ACCESS A SIDE`,
  },
  {
    id: 42,
    name: "BCFR Station 3",
    postal: "046",
    postalRange: ["016", "045"],
    mainStreet: "Paleto Blvd",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Rt 1 SB",
    cids: `FIRE STATION 1 STRY 165X105 CLASS 2 (NON-COMBUSTIBLE)
      BCFR STATION 3
      A SIDE - DULOUZ AVE
      B SIDE - PARKING LOT
      C SIDE - DETACHED 1 STRY COMM
      D SIDE - ALLEY
      6 VEHICLE BAY ON B SIDE
      MULTI-LAYERED PITCHED ROOFES
      UTILS AND STANDPIPE ON C SIDE
      HYDRANT ACCESS NORTH ON A SIDE
      !!!CAUTION!!!
      VARIOUS CHEMS/HAZARDS IN STATION`,
  },
  {
    id: 43,
    name: "Ammu-nation Paleto",
    postal: "046",
    postalRange: ["045", "059"],
    mainStreet: "Rt 1 SB",
    crossStreet1: "Paleto Blvd",
    crossStreet2: "Dulouz Ave",
    cids: `COMM 1 STRY 40X90 CLASS 3 (ORDINARY)
      AMMU-NATION PALETO BAY
      A SIDE - ROUTE 1
      B SIDE - DETACHED 1 STRY COMM
      C SIDE - DETACHED 1 STRY FIRE STATION
      D SIDE - PARKING LOT
      WEAPONS STORE
      UTILS ON A SIDE
      HYDRANT ACCESS A SIDE
      !!!CAUTION!!!
      EXPLOSIVES AND ORDINANCE INSIDE
      CONSIDER HAZMAT RESPONSE AND DEFENSIVE OPS
      MAJORITY OF HAZMAT IN C SIDE STORAGE`,
  },
  {
    id: 44,
    name: "Paleto Bay Sheriff's Station",
    postal: "047",
    postalRange: ["047", "046", "059"],
    mainStreet: "Paleto Blvd",
    crossStreet1: "Procopio Dr",
    crossStreet2: "Rt 1 SB",
    cids: `POLICE STATION 2 STRY 125X80 CLASS 2 (NON-COMBUSTIBLE)
      PALETO BAY POLICE STATION
      A SIDE - PALETO BLVD
      B SIDE - ROUTE 1 SB
      C SIDE - WILDLAND/BRUSH
      D SIDE - WILDLAND/BRUSH
      ARMORY LOCATED MIDDLE OF DIVISION 1
      !!!CAUTION!!!
      HIGH LIFE HAZARD BLDG
      CELLS LOCATED B/C SIDE
      CONSIDER AGGRESSIVE PRIMARY ATTACK/SEARCH`,
  },
  {
    id: 45,
    name: "Bayview Lodge Diner",
    postal: "049",
    postalRange: ["049"],
    mainStreet: "Procopio Dr",
    crossStreet1: "Bayview Bridge",
    crossStreet2: "Rt 1 SB",
    cids: `RESTAURANT 1 STRY 130X80 CLASS 6 (HEAVY TIMBER)
      BAYVIEW LODGE DINER
      A SIDE - PROCOPIO PROMENADE
      B SIDE - DETACHED 1 STRY COMM
      C SIDE - BRUSH
      D SIDE - DETACHED 1 STRY MULTI-RESIDENTIAL
      PEAKED ROOF WITH L-SHAPED STRUCTURE`,
  },
  {
    id: 46,
    name: "Bayview General Grocery Store",
    postal: "049",
    postalRange: ["049"],
    notLocation: true,
    mainStreet: "Procopio Dr",
    crossStreet1: "Bayview Bridge",
    crossStreet2: "Rt 1 SB",
    cids: `COMM 1 STRY 45X25 CLASS 6 (HEAVY TIMBER)
      BAYVIEW GENERAL GROCERY STORE
      A SIDE - PROCOPIO PROMENADE
      B SIDE - BRUSH/WILDLAND
      C SIDE - BRUSH/WILDLAND
      D SIDE - DETACHED 1 STRY RESTAURANT
      PEAKED ROOF`
  },
  {
    id: 47,
    name: "Bayview Main Lodge",
    postal: "049",
    postalRange: ["049"],
    notLocation: true,
    mainStreet: "Procopio Dr",
    crossStreet1: "Bayview Bridge",
    crossStreet2: "Rt 1 SB",
    cids: `MOTEL 1 STRY 120X60 CLASS 6 (HEAVY TIMBER)
      BAYVIEW LODGE
      A SIDE - PROCOPIO PROMENADE
      B SIDE - DETACHED 1 STRY COMM
      C SIDE - VEGETATION/BRUSH
      D SIDE - VEGETATION/BRUSH
      10 UNIT MOTEL
      1 UNIT - 15X25
      PEAKED ROOF`
  },
  {
    id: 48,
    name: "Pala Springs Aerial Tramway Valley Station",
    postal: "055",
    postalRange: ["055"],
    notLocation: true,
    mainStreet: "Procopio Dr",
    crossStreet1: "Bayview Bridge",
    crossStreet2: "Rt 1 SB",
    cids: `COMM 2 STRY 150X60 CLASS 3 (ORDINARY)
      PALA SPRINS AERIAL TRAMWAY VALLEY STATION
      A SIDE - PROCOPIO PROMENADE
      B SIDE - BRUSH
      C SIDE - BRUSH
      D SIDE - PARKING LOT
      A/D SIDE IS 1 STRY BAR
      HYDRANT ACCESS A SIDE
      !!!CAUTION!!!
      HIGH LIFE RISK BLDG
      CONSIDER AGGRESSIVE ATTACK OR MODIFIED DEFENSIVE OPS`
  },
  {
    id: 49,
    name: "Lumber Yard",
    postal: "053",
    postalRange: ["053", "052"],
    mainStreet: "Fallen Tree Rd",
    crossStreet1: "Pine Tree Rd",
    crossStreet2: "Pine Tree Rd",
    cids: `IND 4 STRY CLASS 5 (WOOD FRAME)
      PALETO FOREST SAWMILL AKA LUMBER YARD
      LOG CONVEYOR - SIDE B
      EXTERIOR SCAFFOLDING - SIDE B
      NUMEROUS RAISED PLATFORMS - SIDE C
      LARGE CONVEYOR BELT - SIDE C
      LARGE HOPPER & FEED - SIDE D
      LONG WOOD CHIP CONVEYOR - SIDE D
      NUMEROUS TALL SMOKE STACKS THROUGHOUT
      HIGH FIRE LOAD THROUGHOUT
      OPEN WATER DRAFT JUST NORTH OF BAYVIEW LODGE WEST OF PROCOPIO PROMENADE (APPROX. DISTANCE 3310 FT)
      !!!CAUTION!!!
      URF IS NOT UNIFORM
      TRANSMIT 2ND ALARM ON NOTIFICATION OF WORKING FIRE`
  },
  {
    id: 50,
    name: "Cluckin' Bell Factory Bldg 7",
    postal: "059",
    postalRange: ["059", "060"],
    mainStreet: "Rt 1 NB",
    crossStreet1: "Dulouz Ave",
    crossStreet2: "Paleto Blvd",
    cids: `IND 1.5 STRY 100X70 CLASS 3 (ORDINARY)
      CLUCKIN' BELL FACTORY BLDG 7
      A SIDE - ROUTE 1 NB
      B SIDE - INTERCON 1.5 STRY IND
      C SIDE - RAILROAD
      D SIDE - PARKING LOT
      NO ACCESS TO SIDE C DUE TO RAILROAD
      2 LARGE SMOKESTACKS WITH GUY WIRES TO ROOF
      LARGE ELEVATED WATER TANK - SIDE B
      LARGE TANK - B/C CORNER
      HYDRANT ACCESS A SIDE
      !!!CAUTION!!!
      FFS UTILIZE CAUTION ON C SIDE DUE TO RAILROAD
      CONSIDER NOTIFICATION OF PAPD`
  },
  {
    id: 51,
    name: "Cluckin' Bell Factory Unit A, Bldg 6",
    postal: "060",
    postalRange: ["060", "059"],
    mainStreet: "Rt 1 NB",
    crossStreet1: "Dulouz Ave",
    crossStreet2: "Paleto Blvd",
    cids: `WHSE 1.5 STRY 60X80 CLASS 5 (WOOD FRAME)
      CLUCKIN' BELL FACTORY UNITY A BLDG 6
      HYDRANT ACCESS A SIDE
      LIMITED TO NO ACCESS TO SIDE C DUE TO RAILROAD
      !!!CAUTION!!!
      FFS UTILIZE CAUTION ON C SIDE DUE TO RAILROAD
      CONSIDER NOTIFICATION OF PAPD`
  },
  {
    id: 52,
    name: "Up-n-Atom Diner",
    postal: "069",
    postalRange: ["069", "131"],
    mainStreet: "Rt 1 SB",
    crossStreet1: "Rt 13 NB to Rt 1 SB",
    crossStreet2: "Rt 1 MM07.00",
    cids: `RESTAURANT 1 STRY 45X35 CLASS 4 (WOOD FRAME)
      UP-N-ATOM DINER`
  }
];
