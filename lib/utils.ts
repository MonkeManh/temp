import { ISettings } from "@/models/interfaces/ISettings";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function getSettings(): ISettings {
  const defaultSettings: ISettings = {
    advancedMode: false,
    autoSave: false,
    soundEffects: false,
    quickSend: false,
    multiService: false,
    gotoInstructions: false,
  };
  const storedSettings = localStorage.getItem("SETTINGS");
  return storedSettings ? JSON.parse(storedSettings) : defaultSettings;
}