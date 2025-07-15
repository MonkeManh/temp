import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import * as AI from "../additionalInformation";

export const COLLAPSE_ENTRAPMENTS: IFireComplaint = {
  protocol: 54,
  name: "Confined Space / Structure Collapse",
  shortName: "Confined Space/Collapse",
  description: <></>,
  services: [
    { name: "Fire", priority: true },
    { name: "EMS", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "B",
  defaultPlan: 83,
  defaultCode: "54B01",
  questions: [],
  determinants: [
    {
      priority: "B",
      codes: [
        {
          code: "54B01",
          text: "Entrapment/Trapped (Unconfirmed)",
          recResponse: 83,
          subCodes: [
            {
              suffix: "C",
              text: "Confined Space",
              recResponse: 83,
            },
            {
              suffix: "H",
              text: "Sinkhole",
              recResponse: 83,
            },
            {
              suffix: "L",
              text: "Large Building/Structure Collapse",
              recResponse: 83,
            },
            {
              suffix: "M",
              text: "Landslide/Mudslide",
              recResponse: 83,
            },
            {
              suffix: "S",
              text: "Small Building/Structure Collapse",
              recResponse: 83,
            },
            {
              suffix: "T",
              text: "Trench (Collapse/Rescue)",
              recResponse: 83,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 83,
            },
            {
              suffix: "W",
              text: "Building/Structure Collapse into Water",
              recResponse: 84,
            },
          ],
        },
        {
          code: "54B02",
          text: "No On Trapped (Investigation)",
          recResponse: 83,
          subCodes: [
            {
              suffix: "C",
              text: "Confined Space",
              recResponse: 83,
            },
            {
              suffix: "H",
              text: "Sinkhole",
              recResponse: 83,
            },
            {
              suffix: "L",
              text: "Large Building/Structure Collapse",
              recResponse: 83,
            },
            {
              suffix: "M",
              text: "Landslide/Mudslide",
              recResponse: 83,
            },
            {
              suffix: "S",
              text: "Small Building/Structure Collapse",
              recResponse: 83,
            },
            {
              suffix: "T",
              text: "Trench (Collapse/Rescue)",
              recResponse: 83,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 83,
            },
            {
              suffix: "W",
              text: "Building/Structure Collapse into Water",
              recResponse: 84,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "54C00",
          text: "Override (Charlie)",
          recResponse: 85,
          subCodes: [
            {
              suffix: "C",
              text: "Confined Space",
              recResponse: 86,
            },
            {
              suffix: "H",
              text: "Sinkhole",
              recResponse: 86,
            },
            {
              suffix: "L",
              text: "Large Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "M",
              text: "Landslide/Mudslide",
              recResponse: 88,
            },
            {
              suffix: "S",
              text: "Small Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "T",
              text: "Trench (Collapse/Rescue)",
              recResponse: 88,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 83,
            },
            {
              suffix: "W",
              text: "Building/Structure Collapse into Water",
              recResponse: 89,
            },
          ],
        },
        {
          code: "54C01",
          text: "Entrapment/Trapped (Unconfirmed) w/ Hazardous Materials",
          recResponse: 85,
          subCodes: [
            {
              suffix: "C",
              text: "Confined Space",
              recResponse: 86,
            },
            {
              suffix: "H",
              text: "Sinkhole",
              recResponse: 86,
            },
            {
              suffix: "L",
              text: "Large Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "M",
              text: "Landslide/Mudslide",
              recResponse: 88,
            },
            {
              suffix: "S",
              text: "Small Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "T",
              text: "Trench (Collapse/Rescue)",
              recResponse: 88,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 83,
            },
            {
              suffix: "W",
              text: "Building/Structure Collapse into Water",
              recResponse: 89,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "54D00",
          text: "Override (Delta)",
          recResponse: 85,
          subCodes: [
            {
              suffix: "C",
              text: "Confined Space",
              recResponse: 86,
            },
            {
              suffix: "H",
              text: "Sinkhole",
              recResponse: 86,
            },
            {
              suffix: "L",
              text: "Large Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "M",
              text: "Landslide/Mudslide",
              recResponse: 88,
            },
            {
              suffix: "S",
              text: "Small Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "T",
              text: "Trench (Collapse/Rescue)",
              recResponse: 88,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 83,
            },
            {
              suffix: "W",
              text: "Building/Structure Collapse into Water",
              recResponse: 89,
            },
          ],
        },
        {
          code: "54D01",
          text: "Entrapment/Trapped (Confirmed)",
          recResponse: 85,
          subCodes: [
            {
              suffix: "C",
              text: "Confined Space",
              recResponse: 86,
            },
            {
              suffix: "H",
              text: "Sinkhole",
              recResponse: 86,
            },
            {
              suffix: "L",
              text: "Large Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "M",
              text: "Landslide/Mudslide",
              recResponse: 88,
            },
            {
              suffix: "S",
              text: "Small Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "T",
              text: "Trench (Collapse/Rescue)",
              recResponse: 88,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 83,
            },
            {
              suffix: "W",
              text: "Building/Structure Collapse into Water",
              recResponse: 89,
            },
          ],
        },
        {
          code: "54D02",
          text: "Entrapment/Trapped (Confirmed) w/ Hazardous Materials",
          recResponse: 85,
          subCodes: [
            {
              suffix: "C",
              text: "Confined Space",
              recResponse: 86,
            },
            {
              suffix: "H",
              text: "Sinkhole",
              recResponse: 86,
            },
            {
              suffix: "L",
              text: "Large Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "M",
              text: "Landslide/Mudslide",
              recResponse: 88,
            },
            {
              suffix: "S",
              text: "Small Building/Structure Collapse",
              recResponse: 87,
            },
            {
              suffix: "T",
              text: "Trench (Collapse/Rescue)",
              recResponse: 88,
            },
            {
              suffix: "U",
              text: "Unkn",
              recResponse: 83,
            },
            {
              suffix: "W",
              text: "Building/Structure Collapse into Water",
              recResponse: 89,
            },
          ],
        },
      ],
    },
  ],
};
