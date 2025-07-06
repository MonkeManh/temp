import { IEMSCaseEntry } from "@/models/interfaces/IEMSCaseEntry";
import { DependencyResult } from "@/models/interfaces/protocols/ems/IEMSAnswers";
import { IAnswerData } from "@/models/interfaces/protocols/ems/IEMSQuestions";
import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";

export function safelyParseStoredEMSCase(key: string): IEMSCaseEntry | null {
  const stored = localStorage.getItem(key);
  if (!stored) return null;
  try {
    return JSON.parse(stored) as IEMSCaseEntry;
  } catch (error) {
    console.error(`Error parsing stored EMS case from ${key}:`, error);
    return null;
  }
}

export function parseStoredEMSCase(
  stored: string | null
): IEMSCaseEntry | null {
  if (!stored) return null;
  try {
    return JSON.parse(stored) as IEMSCaseEntry;
  } catch (error) {
    console.error("Error parsing stored EMS case:", error);
    return null;
  }
}

export function formatAgeUnit(unit: string): string {
  return unit.charAt(0).toUpperCase() + unit.slice(1);
}

export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function getBreathingStatus(value: string): string {
  switch (value) {
    case "yes":
      return "Breathing";
    case "no":
      return "Not Breathing";
    case "agonal/ineffective":
      return "Agonal/Ineffective";
    default:
      return "Unk Breathing";
  }
}

export function getConsciousnessStatus(value: string): string {
  switch (value) {
    case "yes":
      return "Conscious";
    case "no":
      return "Unconscious";
    default:
      return "Unk Consciousness";
  }
}

export function formatProximity(prox: string): string {
  switch (prox) {
    case "no":
      return "3rd Party";
    case "first":
      return "First Party";
    case "fourth":
      return "Fourth Party";
    default:
      return "";
  }
}

export function getPronoun(gender: string): string {
  switch (gender) {
    case "male":
      return "he";
    case "female":
      return "she";
    default:
      return "the patient";
  }
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case "O":
      return "text-slate-500";
    case "A":
      return "text-green-500";
    case "B":
      return "text-blue-500";
    case "C":
      return "text-yellow-500";
    case "D":
      return "text-red-500";
    case "E":
      return "text-purple-500";
    default:
      return "";
  }
}

export function replacePronounInNode(
  node: ReactNode,
  replacement: string
): ReactNode {
  if (typeof node === "string") {
    return node.replace(/\*\*pronoun\*\*/gi, replacement);
  }

  if (Array.isArray(node)) {
    return node.map((child, index) => {
      const replacedChild = replacePronounInNode(child, replacement);
      if (isValidElement(replacedChild) && replacedChild.key == null) {
        return cloneElement(replacedChild, { key: index });
      }
      return replacedChild;
    });
  }

  if (isValidElement(node)) {
    const element = node as ReactElement<any>; // 👈 key fix

    const newChildren = replacePronounInNode(
      element.props.children,
      replacement
    );
    return cloneElement(element, { ...element.props, children: newChildren });
  }

  return node;
}

// Codes are in 00X00 format where the first 00 is the same, the X is the priority (O, A, B, C, D, E) and the last 00 is the two numbers, return the one with the higher priority
export function higherCode(codeA: string, codeB: string): string {
  const priorityOrder = ["O", "A", "B", "C", "D", "E"];

  const priorityA = codeA.charAt(2);
  const priorityB = codeB.charAt(2);

  if (priorityOrder.indexOf(priorityA) > priorityOrder.indexOf(priorityB)) {
    return codeA;
  } else if (
    priorityOrder.indexOf(priorityA) < priorityOrder.indexOf(priorityB)
  ) {
    return codeB;
  } else {
    // If priorities are the same, compare the last two digits
    const numA = parseInt(codeA.slice(3), 10);
    const numB = parseInt(codeB.slice(3), 10);
    return numA >= numB ? codeA : codeB;
  }
}

export function isSamePriority(codeA: string, codeB: string): boolean {
  return codeA.charAt(2) === codeB.charAt(2);
}

export function processQuestionText(text: React.ReactNode): string {
  if (typeof text === "string") return text;
  if (React.isValidElement(text)) {
    let content = "";
    const element = text as React.ReactElement<{ children?: React.ReactNode }>;

    if (element.props.children) {
      React.Children.forEach(
        element.props.children,
        (child: React.ReactNode) => {
          if (typeof child === "string") {
            content += child;
          } else if (React.isValidElement(child)) {
            content += processQuestionText(child);
          }
        }
      );
    }
    return content;
  }
  return "";
}

export function getPriorityFromCode(code: string): string {
  return code.charAt(2);
}

export function isPriorityHigher(
  priority1: string,
  priority2: string
): boolean {
  const priorityOrder = ["O", "A", "B", "C", "D", "E"];
  const index1 = priorityOrder.indexOf(priority1);
  const index2 = priorityOrder.indexOf(priority2);
  return index1 > index2;
}

export function isOverrideCode(code: string): boolean {
  return code.endsWith("00");
}

export function evaluatePreRenderInstructions(
  func: (
    patient: IEMSCaseEntry,
    answers: IAnswerData[],
    currentCode: string
  ) => boolean,
  patient: IEMSCaseEntry,
  answers: IAnswerData[],
  currentCode: string
): boolean {
  try {
    return func(patient, answers, currentCode);
  } catch (error) {
    console.error("Error evaluating pre-render instructions:", error);
    return true;
  }
}

export function evaluateDependencies(
  func: (
    patient: IEMSCaseEntry,
    answers: IAnswerData[],
    currentCode: string
  ) => DependencyResult | undefined,
  patient: IEMSCaseEntry,
  answers: IAnswerData[],
  currentCode: string
): DependencyResult | undefined {
  try {
    const result = func(patient, answers, currentCode);
    return result;
  } catch (error) {
    console.error("Error evaluating dependencies:", error);
    return undefined;
  }
}
