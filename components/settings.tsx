"use client";

import { useState } from "react";
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

export default function SettingsMenu() {
  const [settings, setSettings] = useState<ISettings>({
    advancedMode: false,
    autoSave: true,
    soundEffects: true,
    quickSend: false,
    multiService: false,
    gotoInstructions: true,
  });

  const updateSetting = (key: keyof ISettings, value: boolean) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

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
      description: "Send messages with Enter key",
    },
    {
      key: "multiService" as keyof ISettings,
      label: "Multi Service",
      description: "Enable multiple service connections",
    },
    {
      key: "gotoInstructions" as keyof ISettings,
      label: "Go to Instructions",
      description: "Show navigation to instructions",
    },
  ];

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
          {settingsConfig.map((setting) => (
            <DropdownMenuItem
              key={setting.key}
              className="flex items-center justify-between p-3 cursor-pointer"
              onSelect={(e) => e.preventDefault()}
            >
              <div className="flex flex-col space-y-1 flex-1">
                <Label
                  htmlFor={setting.key}
                  className="text-sm font-medium cursor-pointer"
                >
                  {setting.label}
                </Label>
                <p className="text-xs text-muted-foreground">
                  {setting.description}
                </p>
              </div>
              <Switch
                id={setting.key}
                checked={settings[setting.key]}
                onCheckedChange={(checked) =>
                  updateSetting(setting.key, checked)
                }
                className="ml-3"
              />
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
