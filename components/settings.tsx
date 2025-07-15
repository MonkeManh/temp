"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Settings } from "lucide-react";

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
import getSettings, { DEFAULT_SETTINGS } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Badge } from "./ui/badge";
import { Spinner } from "./ui/spinner";

const flagColors = {
  Experimental: "destructive",
  Beta: "secondary",
  New: undefined,
  "In Development": "outline",
} as const;

const settingsConfig = [
  {
    key: "advancedMode" as keyof ISettings,
    label: "Advanced Mode",
    flags: ["In Development"],
    short: "Enable advanced features and options",
    description:
      "Allows the user to program in the on duty units and the system calculates the run order and unit assignment based on the response plan",
  },
  {
    key: "autoSave" as keyof ISettings,
    label: "Auto Save",
    flags: ["Experimental"],
    short: "Automatically save changes",
    description:
      "Automatically saves any inputs you make during the case entry process. For example, patient information or CIDS information.",
  },
  {
    key: "soundEffects" as keyof ISettings,
    label: "Sound Effects",
    flags: ["New"],
    short: "Play audio feedback for actions",
    description:
      "Plays sound effects upon completion of cases, or when certain priority events occur.",
  },
  {
    key: "quickSend" as keyof ISettings,
    label: "Quick Send",
    flags: ["Experimental"],
    short: "Sends calls after a critical answer is received",
    description:
      "Skips the other key questions to dispatch after a critical answer is selected, allowing for faster dispatching. The dispatcher can then go back and fill in the other questions later.",
  },
  {
    key: "multiService" as keyof ISettings,
    label: "Multi Service",
    flags: ["Experimental"],
    short: "Allows cases to be sent to multiple services",
    description:
      "Case entry completion can key into another service depending on requirement. For example, a LEO call that involves injuries will automatically queue an EMS case.",
  },
  {
    key: "giveInstructions" as keyof ISettings,
    label: "Post Dispatch Instructions",
    flags: ["Experimental"],
    short: "Goes to PDIs after a case is completed",
    description:
      "Automatically navigates the user to the Post Dispatch Instructions (PDI) page after completion of a case.",
  },
  {
    key: "strictEntry" as keyof ISettings,
    label: "Strict Case Entry",
    flags: ["In Development"],
    short: "Enforces strict case entry rules",
    description:
      "Mandates specific information to be entered before certain actions can be taken.",
  },
];

export default function SettingsMenu() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [settings, setSettings] = useState<ISettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    const savedSettings = getSettings();
    const merged = { ...DEFAULT_SETTINGS, ...savedSettings };
    setSettings(merged);
  }, []);

  const toggleExpanded = (key: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const updateSetting = useCallback((key: keyof ISettings, value: boolean) => {
    setSettings((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, [key]: value };
      localStorage.setItem("SETTINGS", JSON.stringify(updated));

      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("settings-change", { detail: updated })
        );
      }, 0);

      return updated;
    });
  }, []);

  if (!settings)
    return (
      <Button variant="outline" size="icon" disabled>
        <Spinner className="h-4 w-4 animate-spin" />
      </Button>
    ); // Optional loading fallback

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Open settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-100 max-w-100" align="end">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="space-y-1 max-h-96 overflow-y-auto">
          {settingsConfig.map(({ key, label, short, description, flags }) => (
            <Collapsible key={key} open={expandedItems.has(key)}>
              <DropdownMenuItem
                className="flex items-center justify-between p-3"
                onSelect={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="flex flex-col space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <Label htmlFor={key} className="text-sm font-medium">
                      {label}
                    </Label>
                    {flags?.map((flag) => (
                      <Badge
                        key={flag}
                        variant={flagColors[flag as keyof typeof flagColors]}
                        className="text-xs px-1.5 py-0.5 h-5"
                      >
                        {flag}
                      </Badge>
                    ))}
                    {description && (
                      <CollapsibleTrigger
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpanded(key);
                        }}
                        className="p-0.5 hover:bg-muted rounded"
                      >
                        {expandedItems.has(key) ? (
                          <ChevronDown className="h-3 w-3" />
                        ) : (
                          <ChevronRight className="h-3 w-3" />
                        )}
                      </CollapsibleTrigger>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{short}</p>
                  <CollapsibleContent>
                    {description && (
                      <p className="text-xs text-muted-foreground mt-2 p-2 bg-muted/50 rounded">
                        {description}
                      </p>
                    )}
                  </CollapsibleContent>
                </div>
                <Switch
                  id={key}
                  checked={settings[key]}
                  onCheckedChange={(checked) => updateSetting(key, checked)}
                  className="ml-3 shrink-0"
                />
              </DropdownMenuItem>
            </Collapsible>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
