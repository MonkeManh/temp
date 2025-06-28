"use client";

import { useCallback, useEffect, useState } from "react";
import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ISettings } from "@/models/interfaces/ISettings";
import getSettings from "@/lib/utils";

const settingsConfig = [
  {
    key: "advancedMode" as keyof ISettings,
    label: "Advanced Mode",
    description: "Enable advanced features and options",
  },
  {
    key: "autoSave" as keyof ISettings,
    label: "Auto Save",
    description: "Automatically save changes",
  },
  {
    key: "soundEffects" as keyof ISettings,
    label: "Sound Effects",
    description: "Play audio feedback for actions",
  },
  {
    key: "quickSend" as keyof ISettings,
    label: "Quick Send",
    description: "Sends calls after a critical answer is received",
  },
  {
    key: "multiService" as keyof ISettings,
    label: "Multi Service",
    description: "Allows cases to be sent to multiple services",
  },
  {
    key: "gotoInstructions" as keyof ISettings,
    label: "Post Dispatch Instructions",
    description: "Goes do PDIs after a case is completed",
  },
];

export default function SettingsMenu() {
  const [settings, setSettings] = useState<ISettings>({
    advancedMode: false,
    autoSave: false,
    soundEffects: false,
    quickSend: false,
    multiService: false,
    gotoInstructions: false,
  });

  const updateSetting = useCallback((key: keyof ISettings, value: boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = getSettings();
    setSettings(savedSettings);
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("SETTINGS", JSON.stringify(settings));
  }, [settings]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Open settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="space-y-1">
          {settingsConfig.map(({ key, label, description }) => (
            <DropdownMenuItem
              key={key}
              className="flex items-center justify-between p-3 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                updateSetting(key, !settings[key]);
              }}
            >
              <div className="flex flex-col space-y-1 flex-1">
                <Label
                  htmlFor={key}
                  className="text-sm font-medium cursor-pointer"
                >
                  {label}
                </Label>
                <p className="text-xs text-muted-foreground">{description}</p>
              </div>
              <Switch
                id={key}
                checked={settings[key]}
                onCheckedChange={(checked) => updateSetting(key, checked)}
                className="ml-3"
              />
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
