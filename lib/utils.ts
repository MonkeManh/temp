import { ISettings } from "@/models/interfaces/ISettings";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DEFAULT_SETTINGS: ISettings = {
  advancedMode: false,
  autoSave: true,
  soundEffects: false,
  quickSend: true,
  multiService: false,
  giveInstructions: false,
  strictEntry: false,
}

export default function getSettings(): ISettings {
  const stored = localStorage.getItem("SETTINGS");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (err) {
      console.warn("Failed to parse stored settings", err);
    }
  }
  return DEFAULT_SETTINGS;
}

export const PRIORITY_ORDER = ["O", "A", "B", "C", "D", "E"];