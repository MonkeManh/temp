import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const MOTOR_VEHICLE_COLLISION: IFireComplaint = {
  protocol: 77,
  name: "Motor Vehicle Collision",
  shortName: "Motor Vehicle Collision",
  description: <></>,
  services: [
    { name: "Fire", priority: 4 },
    { name: "EMS", priority: 4 },
    { name: "Police", priority: true },
  ],
  defaultPriority: "A",
  defaultPlan: 474,
  defaultCode: "77B02",
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "77O01",
          text: "Vehicle Blocking Traffic (No Injs & No Hazard)",
          recResponse: 473,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 473,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 473,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 473,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 338,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 474,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 473,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 340,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 338,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 474,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 340,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 390,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 390,
            },
          ],
        },
        {
          code: "77O02",
          text: "No Injs & No Hazard",
          recResponse: 473,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 473,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 473,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 473,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 338,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 474,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 473,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 340,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 338,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 474,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 340,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 390,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 390,
            },
          ],
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "77A00",
          text: "Override (Alpha)",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77A01",
          text: "Low Mechanism",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77A02",
          text: "No Injs w/ Hazard",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77A03",
          text: "Past Traffic Incident",
          recResponse: 473,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 473,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 473,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 473,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 338,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 474,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 473,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 340,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 338,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 474,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 340,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 390,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 390,
            },
          ],
        },
        {
          code: "77A04",
          text: "Past Hit-and-Run",
          recResponse: 473,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 473,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 473,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 473,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 338,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 474,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 473,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 340,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 338,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 474,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 340,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 390,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 390,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "77B00",
          text: "Override (Bravo)",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77B01",
          text: "Injs",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77B02",
          text: "Unkn Status/Other Codes Not Applicable",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77B03",
          text: "Serious Hemorrhage",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77B04",
          text: "Other Hazards",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77B05",
          text: "Low Mechanism (1st or 2nd Party Caller)",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77B06",
          text: "Traffic Incident (No Inj)",
          recResponse: 473,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 473,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 473,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 473,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 338,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 474,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 473,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 340,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 338,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 474,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 340,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 390,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 390,
            },
          ],
        },
        {
          code: "77B07",
          text: "Traffic Incident (Unkn Inj)",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
        {
          code: "77B08",
          text: "Hit-and-Run (No Inj)",
          recResponse: 473,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 473,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 473,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 473,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 338,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 474,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 473,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 340,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 338,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 474,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 340,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 390,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 388,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 474,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 390,
            },
          ],
        },
        {
          code: "77B09",
          text: "Hit-and-Run (Unkn Inj)",
          recResponse: 476,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 476,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 476,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 476,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 477,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 478,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 476,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 479,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 477,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 478,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 479,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 482,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 480,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 481,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 475,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 482,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "77C00",
          text: "Override (Charlie)",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77C01",
          text: "Injs w/ Hazard",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77C02",
          text: "Fuel/Fluid Leak",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77C03",
          text: "Traffic Incident (w/ Inj)",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77C04",
          text: "Hit-and-Run (w/ Inj)",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "77D00",
          text: "Override (Delta)",
          recResponse: 491,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 491,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 491,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 491,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 492,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 493,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 491,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 494,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 492,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 495,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 493,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 496,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 497,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 494,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 498,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 495,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 496,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 497,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 498,
            },
          ],
        },
        {
          code: "77D01",
          text: "High Occupancy Vehicle (High Mechanism)",
          recResponse: 499,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 499,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 499,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 499,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 500,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 501,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 499,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 502,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 500,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 503,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 501,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 504,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 505,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 502,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 506,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 503,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 504,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 505,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 506,
            },
          ],
        },
        {
          code: "77D02",
          text: "High Mechanism",
          recResponse: 507,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 507,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 507,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 507,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 508,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 509,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 507,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 510,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 508,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 509,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 510,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D03",
          text: "Multi-Vehicle (>= 10) Pile-Up",
          recResponse: 499,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 499,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 499,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 499,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 500,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 501,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 499,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 502,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 500,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 503,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 501,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 504,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 505,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 502,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 506,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 503,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 504,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 505,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 506,
            },
          ],
        },
        {
          code: "77D04",
          text: "Trapped (Pinned) Victim",
          recResponse: 489,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 489,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 489,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 489,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 487,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 488,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 489,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 490,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 488,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 488,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 490,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D05",
          text: "Ejection",
          recResponse: 511,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 511,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 511,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 511,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 512,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 513,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 511,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 514,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 512,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 495,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 513,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 496,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 497,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 514,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 498,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 495,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 496,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 497,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 498,
            },
          ],
        },
        {
          code: "77D06",
          text: "Vehicle vs. Pedestrian/Bicycle",
          recResponse: 515,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 515,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 515,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 515,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 516,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 517,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 515,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 518,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 516,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 517,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 518,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D07",
          text: "Vehicle/Motorcycle vs. Motorcycle",
          recResponse: 519,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 519,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 519,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 519,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 520,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 521,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 519,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 522,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 520,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 521,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 522,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D08",
          text: "Vehicle vs. Building",
          recResponse: 523,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 523,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 523,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 523,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 524,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 525,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 523,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 526,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 524,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 524,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 525,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 525,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 523,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 526,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 525,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 524,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 525,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 523,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 526,
            },
          ],
        },
        {
          code: "77D09",
          text: "Unstable Vehicle",
          recResponse: 507,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 507,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 507,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 507,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 508,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 509,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 507,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 510,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 508,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 509,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 510,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D10",
          text: "Comm Vehicle",
          recResponse: 507,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 507,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 507,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 507,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 508,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 509,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 507,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 510,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 508,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 509,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 510,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D11",
          text: "Arrest",
          recResponse: 491,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 491,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 491,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 491,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 492,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 493,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 491,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 494,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 492,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 495,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 493,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 496,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 497,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 494,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 498,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 495,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 496,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 497,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 498,
            },
          ],
        },
        {
          code: "77D12",
          text: "Unconscious",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D13",
          text: "Not Alert w/ Abnormal Breathing",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
        {
          code: "77D14",
          text: "Not Alert w/ Normal Breathing",
          recResponse: 483,
          subCodes: [
            {
              suffix: "A",
              text: "Animal",
              recResponse: 483,
            },
            {
              suffix: "B",
              text: "Blocking or Slowing Traffic",
              recResponse: 483,
            },
            {
              suffix: "D",
              text: "Airbags Deployed",
              recResponse: 483,
            },
            {
              suffix: "F",
              text: "Fire",
              recResponse: 484,
            },
            {
              suffix: "H",
              text: "Hazmat",
              recResponse: 485,
            },
            {
              suffix: "I",
              text: "Interstate/Fwy/Hwy",
              recResponse: 483,
            },
            {
              suffix: "J",
              text: "Fire & Hazmat",
              recResponse: 486,
            },
            {
              suffix: "K",
              text: "Fire & Interstate/Fwy/Hwy",
              recResponse: 484,
            },
            {
              suffix: "L",
              text: "Fire & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "M",
              text: "Hazmat & Interstate/Fwy/Hwy",
              recResponse: 485,
            },
            {
              suffix: "N",
              text: "Hazmat & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "O",
              text: "Interstate/Fwy/Hwy & Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "P",
              text: "Fire, Hazmat, & Interstate/Fwy/Hwy",
              recResponse: 486,
            },
            {
              suffix: "Q",
              text: "Fire, Hazmat, & Trapped/Pinned Victim",
              recResponse: 490,
            },
            {
              suffix: "R",
              text: "Fire, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 487,
            },
            {
              suffix: "S",
              text: "Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 488,
            },
            {
              suffix: "T",
              text: "Trapped/Pinned Victim",
              recResponse: 489,
            },
            {
              suffix: "U",
              text: "Fire, Hazmat, Interstate/Fwy/Hwy, & Trapped/Pinned Victim",
              recResponse: 490,
            },
          ],
        },
      ],
    },
  ],
};
