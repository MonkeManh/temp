import { IFireCaseEntry } from "@/models/interfaces/IFireCaseEntry";
import { DependencyResult } from "@/models/interfaces/protocols/fire/IFireAnswers";
import { IAnswerData } from "@/models/interfaces/protocols/fire/IFireQuestions";
import React from "react";

export function evaluatePreRenderInstructions(
  func: (
    answers: IAnswerData[],
    fireCase: IFireCaseEntry,
    currentCode: string
  ) => boolean,
  answers: IAnswerData[],
  fireCase: IFireCaseEntry,
  currentCode: string
): boolean {
  try {
    return func(answers, fireCase, currentCode);
  } catch (error) {
    console.error("Error evaluating pre-render instructions:", error);
    return true;
  }
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

export function evaluateDependencies(
  func: (
    answers: IAnswerData[],
    fireCase: IFireCaseEntry,
    currentCode: string
  ) => DependencyResult | undefined,
  answers: IAnswerData[],
  fireCase: IFireCaseEntry,
  currentCode: string
): DependencyResult | undefined {
  try {
    const result = func(answers, fireCase, currentCode);
    return result;
  } catch (error) {
    console.error("Error evaluating dependencies:", error);
    return undefined;
  }
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

export function isOverrideCode(code: string): boolean {
  return code.endsWith("00");
}

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
