import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import * as AI from "../additionalInformation";

export const OVERDOSE_POISONING: IEMSComplaint = {
  protocol: 23,
  name: "Overdose / Poisoning (Ingestion)",
  shortName: "Overdose/Poisoning",
  description: <></>,
  services: [
    { name: "EMS", priority: true },
    { name: "Fire", priority: 2 },
    { name: "Police", priority: undefined },
  ],
  defaultPriority: "A",
  defaultPlan: 129,
  defaultCode: "23A01",
  preSend: true,
  questions: [],
  determinants: [
    {
      priority: "O",
      codes: [
        {
          code: "23O01",
          text: "Poisoning (w/o Priority Symptoms)",
          recResponse: 138,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 138,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 138,
            },
          ],
        },
      ],
    },
    {
      priority: "A",
      codes: [
        {
          code: "23A01",
          text: "Alert",
          recResponse: 129,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 129,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 129,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 129,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 129,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 129,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 130,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 130,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 130,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 131,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 131,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 131,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 131,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 131,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 131,
            },
          ],
        },
      ],
    },
    {
      priority: "B",
      codes: [
        {
          code: "23B00",
          text: "BLS Override (Bravo)",
          recResponse: 129,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 129,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 130,
            },
          ],
        },
        {
          code: "23B01",
          text: "Overdose (w/o Priority Symptoms)",
          recResponse: 129,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 129,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 129,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 129,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 129,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 129,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 130,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 130,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 130,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 131,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 131,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 131,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 131,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 131,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 131,
            },
          ],
        },
      ],
    },
    {
      priority: "C",
      codes: [
        {
          code: "23C00",
          text: "ALS Override (Charlie)",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 59,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 59,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 59,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 59,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 51,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 51,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
        {
          code: "23C01",
          text: "Not Alert",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 59,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 59,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 59,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 59,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 51,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 51,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
        {
          code: "23C02",
          text: "Abnormal Breathing",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 59,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 59,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 59,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 59,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 51,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 51,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
        {
          code: "23C03",
          text: "Antidepressants (Tricyclic)",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
        {
          code: "23C04",
          text: "Cocaine, Methamphetamine (or Derivative)",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
        {
          code: "23C05",
          text: "Narcotics (Heroin, Morphine, Methadone, Oxycontin)",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 59,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 59,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 59,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 59,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 51,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 51,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
        {
          code: "23C06",
          text: "Acid or Alkali (Lye)",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
        {
          code: "23C07",
          text: "Unkn Status / Other Codes Not Applicable",
          recResponse: 129,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 129,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 129,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 129,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 129,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 129,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 130,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 130,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 130,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 131,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 131,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 131,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 131,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 131,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 131,
            },
          ],
        },
        {
          code: "23C08",
          text: "Poison Control Request for Response",
          recResponse: 129,
          subCodes: [
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 129,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 129,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 131,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 131,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 131,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 131,
            },
          ],
        },
      ],
    },
    {
      priority: "D",
      codes: [
        {
          code: "23D00",
          text: "ALS Override (Delta)",
          recResponse: 133,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 133,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 133,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 133,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 133,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 133,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 134,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 134,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 134,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 135,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 135,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 135,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 135,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 135,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 135,
            },
          ],
        },
        {
          code: "23D01",
          text: "Arrest",
          recResponse: 136,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 136,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 136,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 136,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 136,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 136,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 136,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 136,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 137,
            },
          ],
        },
        {
          code: "23D02",
          text: "Unconscious",
          recResponse: 59,
          notConscious: true,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 59,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 59,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 59,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 59,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 51,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 51,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
          ],
        },
        {
          code: "23D03",
          text: "Changing Color",
          recResponse: 59,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 59,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 59,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 59,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 59,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 59,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 51,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 51,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 51,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 132,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 132,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 132,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 132,
            },
          ],
        },
      ],
    },
    {
      priority: "E",
      codes: [
        {
          code: "23E00",
          text: "ALS Override (Echo)",
          recResponse: 133,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 133,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 133,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 133,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 133,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 133,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 134,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 134,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 134,
            },
            {
              suffix: "Q",
              text: "Violent or Combative (Fentanyl)",
              recResponse: 135,
            },
            {
              suffix: "R",
              text: "Violent or Combative (Carfentanil)",
              recResponse: 135,
            },
            {
              suffix: "S",
              text: "Weapons (Fentanyl)",
              recResponse: 135,
            },
            {
              suffix: "T",
              text: "Weapons (Carfentanil)",
              recResponse: 135,
            },
            {
              suffix: "V",
              text: "Violent or Combative",
              recResponse: 135,
            },
            {
              suffix: "W",
              text: "Weapons",
              recResponse: 135,
            },
          ],
        },
        {
          code: "23E01",
          text: "Obvious Arrest",
          recResponse: 136,
          notBreathing: true,
          subCodes: [
            {
              suffix: "A",
              text: "Accidental",
              recResponse: 136,
            },
            {
              suffix: "C",
              text: "Carfentanil",
              recResponse: 136,
            },
            {
              suffix: "D",
              text: "Accidental (Fentanyl)",
              recResponse: 136,
            },
            {
              suffix: "E",
              text: "Accidental (Carfentanil)",
              recResponse: 136,
            },
            {
              suffix: "F",
              text: "Fentanyl",
              recResponse: 136,
            },
            {
              suffix: "G",
              text: "Intentional (Fentanyl)",
              recResponse: 136,
            },
            {
              suffix: "H",
              text: "Intentional (Carfentanil)",
              recResponse: 136,
            },
            {
              suffix: "I",
              text: "Intentional",
              recResponse: 137,
            },
          ],
        },
      ],
    },
  ],
};
