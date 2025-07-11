import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const ELECTROCUTION: IEMSComplaint = {
  protocol: 15,
  name: "Electrocution / Lightning",
  shortName: "Electrocution/Lightning",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: 0 },
  ],
  defaultPriority: "C",
  defaultPlan: 71,
  defaultCode: "15D09",
  preSend: true,
  questions: [],
  determinants: [
    {
      priority: "C",
      codes: [
        {
          code: "15C01",
          text: "Alert & Breathing Normally",
          recResponse: 71,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 71,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 71,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "15D00",
          text: "ALS Override (Delta)",
          recResponse: 72,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 72,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 72,
            },
          ],
        },
        {
          code: "15D01",
          text: "Mult Victims",
          recResponse: 73,
          multPatient: true,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 73,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 73,
            },
          ],
        },
        {
          code: "15D02",
          text: "Unconscious",
          recResponse: 72,
          notConscious: true,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 72,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 72,
            },
          ],
        },
        {
          code: "15D03",
          text: "Not Disconnected from Power",
          recResponse: 71,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 71,
            },
          ],
        },
        {
          code: "15D04",
          text: "Powert Not Off or Hazard Present",
          recResponse: 71,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 71,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 71,
            },
          ],
        },
        {
          code: "15D05",
          text: "Extreme Fall (>=30ft/10m)",
          recResponse: 74,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 74,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 74,
            },
          ],
        },
        {
          code: "15D06",
          text: "EXTREME FALL",
          recResponse: 74,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 74,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 74,
            },
          ],
        },
        {
          code: "15D07",
          text: "Not Alert",
          recResponse: 71,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 71,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 71,
            },
          ],
        },
        {
          code: "15D08",
          text: "Abnormal Breathing",
          recResponse: 71,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 71,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 71,
            },
          ],
        },
        {
          code: "15D09",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 71,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 71,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 71,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "15E00",
          text: "ALS Override (Echo)",
          recResponse: 75,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 75,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 75,
            },
          ],
        },
        {
          code: "15E01",
          text: "Not Breathing/Ineffective Breathing",
          notBreathing: true,
          recResponse: 75,
          subCodes: [
            {
              suffix: "E",
              text: "Electrocution",
              recResponse: 75,
            },
            {
              suffix: "L",
              text: "Lightning",
              recResponse: 75,
            },
          ],
        },
      ],
    },
  ],
};
