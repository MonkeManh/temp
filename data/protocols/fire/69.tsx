import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const STRUCTURE_FIRE: IFireComplaint = {
  protocol: 69,
  name: "Structure Fire",
  shortName: "Structure Fire",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: true },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "D",
  defaultPlan: 261,
  defaultCode: "69D13",
  questions: [],
  determinants: [
    {
      priority: "D",
      codes: [
        {
          code: "69D01",
          text: "High Life Hazard",
          recResponse: 233,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 267,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 268,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 269,
            },
          ],
        },
        {
          code: "69D02",
          text: "High Rise",
          recResponse: 270,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 270,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 271,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 272,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 273,
            },
          ],
        },
        {
          code: "69D03",
          text: "Comm/Ind Building",
          recResponse: 274,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 275,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 276,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 277,
            },
          ],
        },
        {
          code: "69D04",
          text: "Comm/Ind Building w/ Hazardous Materials",
          recResponse: 278,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 279,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 278,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 280,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 280,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 19,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 281,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 19,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 282,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 283,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 284,
            },
          ],
        },
        {
          code: "69D05",
          text: "Residential (Mult)",
          recResponse: 285,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 286,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 287,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 288,
            },
          ],
        },
        {
          code: "69D06",
          text: "Residential (Single)",
          recResponse: 289,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 290,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 291,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 292,
            },
          ],
        },
        {
          code: "69D07",
          text: "Large Non-Dwelling Building/Structure",
          recResponse: 293,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 294,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 295,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 296,
            },
          ],
        },
        {
          code: "69D08",
          text: "Small Non-Dwelling Building/Structure",
          recResponse: 297,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 298,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 299,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 300,
            },
          ],
        },
        {
          code: "69D09",
          text: "Mobile Home, House Trailer, or Portable Office",
          recResponse: 297,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 298,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 299,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 300,
            },
          ],
        },
        {
          code: "69D10",
          text: "Building/Structure Over Water",
          recResponse: 301,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 302,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 303,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 304,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 304,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 305,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 306,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 307,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 308,
            },
          ],
        },
        {
          code: "69D11",
          text: "Mixed-Use Occupancy Building",
          recResponse: 309,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 310,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 311,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 312,
            },
          ],
        },
        {
          code: "69D12",
          text: "Parking Garage",
          recResponse: 313,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 314,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 315,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 316,
            },
          ],
        },
        {
          code: "69D13",
          text: "Unkn Structure Type",
          recResponse: 233,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 261,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 262,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 263,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 263,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 264,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 265,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 266,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 267,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 268,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 269,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "69E00",
          text: "Override (Echo)",
          recResponse: 233,
          subCodes: [
            {
              suffix: "A",
              text: "Appliance (Contained)",
              recResponse: 233,
            },
            {
              suffix: "C",
              text: "Chimney",
              recResponse: 233,
            },
            {
              suffix: "E",
              text: "Extinguished Fire (1st/2nd Party)",
              recResponse: 233,
            },
            {
              suffix: "F",
              text: "Burned Food (1st Pty)",
              recResponse: 233,
            },
            {
              suffix: "K",
              text: "Light Smoke (1st Pty)",
              recResponse: 233,
            },
            {
              suffix: "L",
              text: "Electrical Problem",
              recResponse: 233,
            },
            {
              suffix: "O",
              text: "Odor of Smoke",
              recResponse: 233,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 267,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 268,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 269,
            },
          ],
        },
        {
          code: "69E01",
          text: "High Life Hazard",
          recResponse: 233,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 267,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 317,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 268,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 269,
            },
          ],
        },
        {
          code: "69E02",
          text: "High Rise",
          recResponse: 270,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 271,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 318,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 272,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 273,
            },
          ],
        },
        {
          code: "69E03",
          text: "Comm/Ind Building",
          recResponse: 274,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 275,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 319,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 276,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 277,
            },
          ],
        },
        {
          code: "69E04",
          text: "Comm/Ind Building w/ Hazardous Materials",
          recResponse: 320,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 321,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 322,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 323,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 324,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 325,
            },
          ],
        },
        {
          code: "69E05",
          text: "Residential (Mult)",
          recResponse: 285,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 286,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 326,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 287,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 288,
            },
          ],
        },
        {
          code: "69E06",
          text: "Residential (Single)",
          recResponse: 289,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 290,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 327,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 291,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 292,
            },
          ],
        },
        {
          code: "69E07",
          text: "Large Non-Dwelling Building/Structure",
          recResponse: 293,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 294,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 328,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 295,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 296,
            },
          ],
        },
        {
          code: "69E08",
          text: "Small Non-Dwelling Building/Structure",
          recResponse: 297,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 298,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 329,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 299,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 300,
            },
          ],
        },
        {
          code: "69E09",
          text: "Mobile Home, House Trailer, or Portable Office",
          recResponse: 297,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 298,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 329,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 299,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 300,
            },
          ],
        },
        {
          code: "69E10",
          text: "Building/Structure Over Water",
          recResponse: 301,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 330,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 306,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 331,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 307,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 308,
            },
          ],
        },
        {
          code: "69E11",
          text: "Mixed-Use Occupancy Building",
          recResponse: 309,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 310,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 332,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 311,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 312,
            },
          ],
        },
        {
          code: "69E12",
          text: "Parking Garage",
          recResponse: 313,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 314,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 333,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 315,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 316,
            },
          ],
        },
        {
          code: "69E13",
          text: "Unkn Building/Structure Type",
          recResponse: 233,
          subCodes: [
            {
              suffix: "P",
              text: "Person on Fire (Inside)",
              recResponse: 258,
            },
            {
              suffix: "R",
              text: "Trapped Person(s)",
              recResponse: 267,
            },
            {
              suffix: "T",
              text: "Trapped Person(s) (Inside)",
              recResponse: 317,
            },
            {
              suffix: "X",
              text: "Single Injured Person",
              recResponse: 268,
            },
            {
              suffix: "Y",
              text: "Mult Injured Persons",
              recResponse: 269,
            },
          ],
        },
      ],
    },
  ],
};
