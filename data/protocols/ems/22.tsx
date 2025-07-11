import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const INACCESSIBLE_ENTRAPMENT: IEMSComplaint = {
  protocol: 22,
  name: "Inaccessible Incident / Other Entrapments (Non-Traffic)",
  shortName: "Inaccessible Incident/Entrap",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 122,
  defaultCode: "22B03",
  questions: [],
  determinants: [
    {
      priority: "A",
      codes: [
        {
          code: "22A01",
          text: "No Longer Trapped (No Injs)",
          recResponse: 122,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 122,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 122,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 122,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 122,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 122,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "22B00",
          text: "BLS Override (Bravo)",
          recResponse: 123,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 123,
            },
          ],
        },
        {
          code: "22B01",
          text: "No Longer Trapped (Unkn Injs)",
          recResponse: 124,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 124,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 124,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 124,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 124,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 124,
            },
          ],
        },
        {
          code: "22B02",
          text: "Peripheral Entrapment Only",
          recResponse: 123,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 123,
            },
          ],
        },
        {
          code: "22B03",
          text: "Unkn Status (Investigation) / Other Codes Not Applicable",
          recResponse: 123,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 123,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "22D00",
          text: "ALS Override (Delta)",
          recResponse: 125,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 125,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 125,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 125,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 125,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 125,
            },
          ],
        },
        {
          code: "22D01",
          text: "Mechanical/Machinery/Object Entrapment",
          recResponse: 123,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 123,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 123,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 123,
            },
          ],
        },
        {
          code: "22D02",
          text: "Trench Collapse",
          recResponse: 126,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 126,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 126,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 126,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 126,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 126,
            },
          ],
        },
        {
          code: "22D03",
          text: "Structure Collapse",
          recResponse: 127,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 127,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 127,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 127,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 127,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 127,
            },
          ],
        },
        {
          code: "22D04",
          text: "Confined Space Entrapment",
          recResponse: 128,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 128,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 128,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 128,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 128,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 128,
            },
          ],
        },
        {
          code: "22D05",
          text: "Inaccessible Terrain Situation",
          recResponse: 125,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 125,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 125,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 125,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 125,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 125,
            },
          ],
        },
        {
          code: "22D06",
          text: "Mudslide/Avalanche",
          recResponse: 125,
          subCodes: [
            {
              suffix: "A",
              text: "Above Ground (>=6ft/2m)",
              recResponse: 125,
            },
            {
              suffix: "B",
              text: "Below Ground (>=6ft/2m)",
              recResponse: 125,
            },
            {
              suffix: "M",
              text: "Mult Victims",
              recResponse: 125,
            },
            {
              suffix: "X",
              text: "Both Above Ground & Mult Victims",
              recResponse: 125,
            },
            {
              suffix: "Y",
              text: "Both Below Ground & Mult Victims",
              recResponse: 125,
            },
          ],
        },
      ],
    },
  ],
};
