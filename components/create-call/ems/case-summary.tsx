import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getPostal } from "@/data/locations/postals";
import { getEmsResponsePlan } from "@/data/plans/emsPlans";
import { UNIT_LIST, UNIT_ORDER } from "@/data/stations/unit-list";
import { IEMSCaseEntry } from "@/models/interfaces/IEMSCaseEntry";
import { INewCallData } from "@/models/interfaces/INewCallData";
import { ISettings } from "@/models/interfaces/ISettings";
import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import { ArrowRight, Badge, FireExtinguisher, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface IEMSCaseSummaryProps {
  callDetails: INewCallData;
  emsCase: IEMSCaseEntry;
  protocol: IEMSComplaint;
  settings: ISettings;
  handleClick: (
    text: string,
    navigateTo?: string,
    unitsToSend?: string[]
  ) => void;
}

export default function EMSCaseSummary({
  callDetails,
  emsCase,
  protocol,
  settings,
  handleClick,
}: IEMSCaseSummaryProps) {
  const [summaryText, setSummaryText] = useState<string>("");
  const [channel, setChannel] = useState<string>("Fire Dispatch");
  const [sceneStatus, setSceneStatus] = useState<string>(
    emsCase.secureScene ? "Secure" : "Not Secure"
  );
  const [stagingLocation, setStagingLocation] = useState<string>("N/A");
  const [unitsToSend, setUnitsToSend] = useState<string[]>(
    emsCase.unitsToSend && emsCase.unitsToSend.length > 0
      ? emsCase.unitsToSend.filter((unit) => unit !== "Pending")
      : []
  );

  const [availableUnits, setAvailableUnits] = useState<string[]>([]);

  // Function to automatically select units based on response plan and postal run order
  const selectUnitsFromResponsePlan = (
    responsePlan: any,
    availableUnits: string[]
  ) => {
    if (!responsePlan?.units || availableUnits.length === 0) {
      return [];
    }

    // Get the postal data to access fdRunOrder
    const postalData = getPostal(callDetails.postal);
    const runOrder = postalData?.fdRunOrder || [];

    const selectedUnits: string[] = [];

    // Helper function to get the station number from a unit name
    const getStationFromUnit = (unitName: string): string => {
      const match = unitName.match(/\d+/);
      return match ? match[0] : "0";
    };

    // Helper function to get the run order position of a station
    const getRunOrderPosition = (station: string): number => {
      const position = runOrder.indexOf(station as any);
      return position === -1 ? 999 : position; // Return high number if not found
    };

    // Helper function to find the best unit considering proximity override
    const findBestUnitWithProximityOverride = (
      unitType: string,
      quantity: number,
      alreadySelected: string[]
    ): string[] => {
      const priorityOrder = UNIT_ORDER[unitType] || [unitType];
      const selectedForThisType: string[] = [];

      // For each unit we need to select
      for (let i = 0; i < quantity; i++) {
        let bestUnit: string | null = null;
        let bestPosition = 999;
        let bestPriorityIndex = 999;

        // Go through each priority type in order
        for (
          let priorityIndex = 0;
          priorityIndex < priorityOrder.length;
          priorityIndex++
        ) {
          const priorityType = priorityOrder[priorityIndex];

          // Find available units of this priority type
          const availableOfThisType = availableUnits.filter((unit) => {
            // Skip if already selected
            if (
              alreadySelected.includes(unit) ||
              selectedForThisType.includes(unit)
            )
              return false;

            // Check if this unit matches the priority type
            if (priorityType === "AMR 400 series") {
              return (
                unit.includes("AMR") &&
                (unit.includes("4") || unit.includes("400"))
              );
            }
            if (priorityType === "AMR 600 series") {
              return (
                unit.includes("AMR") &&
                (unit.includes("6") || unit.includes("600"))
              );
            }
            if (priorityType === "AMR 800 series") {
              return (
                unit.includes("AMR") &&
                (unit.includes("8") || unit.includes("800"))
              );
            }
            if (priorityType === "Type III Engine") {
              return unit.includes("Engine 3") || unit.includes("Engine 30");
            }
            if (priorityType === "Medic 900 series") {
              return unit.includes("Medic 9") && unit.match(/Medic 9\d{2}/);
            }
            if (priorityType === "Medic 90 series") {
              return unit.includes("Medic 9") && unit.match(/Medic 9\d$/);
            }
            if (priorityType === "Firehawk") {
              return unit.includes("FireHawk");
            }

            // For standard types, check if the unit name starts with the type
            return unit.startsWith(priorityType + " ");
          });

          // Find the closest unit of this type
          for (const unit of availableOfThisType) {
            const station = getStationFromUnit(unit);
            const position = getRunOrderPosition(station);

            // If this is the first priority type or we found a closer unit
            if (priorityIndex === 0 || position < bestPosition) {
              // Check proximity override: if current best is more than 3 positions away
              // and this unit is closer, prefer this unit even if it's lower priority
              if (
                bestUnit === null ||
                position < bestPosition ||
                (bestPosition > 3 &&
                  position <= 3 &&
                  priorityIndex < bestPriorityIndex + 2)
              ) {
                bestUnit = unit;
                bestPosition = position;
                bestPriorityIndex = priorityIndex;

                // If we found a unit within 3 positions, break early unless we're still on first priority
                if (position <= 3 && priorityIndex > 0) {
                  break;
                }
              }
            }
          }

          // If we found a good unit (within 3 positions) and we're past the first priority, stop looking
          if (bestUnit && bestPosition <= 3 && priorityIndex > 0) {
            break;
          }
        }

        if (bestUnit) {
          selectedForThisType.push(bestUnit);
        }
      }

      return selectedForThisType;
    };

    // For each required unit type in the response plan
    responsePlan.units.forEach(
      (requiredUnit: { type: string; quantity: number }) => {
        const unitType = requiredUnit.type;
        const quantity = requiredUnit.quantity;

        // Skip notification types
        if (unitType.includes("Notification")) {
          return;
        }

        // Find the best units for this type considering proximity override
        const unitsForThisType = findBestUnitWithProximityOverride(
          unitType,
          quantity,
          selectedUnits
        );
        selectedUnits.push(...unitsForThisType);
      }
    );

    return selectedUnits;
  };

  // Load available units from FIRE_UNITS localStorage
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("FIRE_UNITS");
      if (savedData) {
        const parsedStations = JSON.parse(savedData);
        // Extract all unit names from all stations
        const allUnits = parsedStations
          .flatMap((station: any) => station.units)
          .map((unit: any) => unit.name)
          .filter(
            (name: string, index: number, array: string[]) =>
              array.indexOf(name) === index // Remove duplicates
          );

        setAvailableUnits(allUnits);
      } else {
        // Fallback to all units from UNIT_LIST if no localStorage data
        const allUnitsFromList = Object.values(UNIT_LIST)
          .flatMap((stationUnits) => stationUnits)
          .map((unit) => unit.name)
          .filter(
            (name: string, index: number, array: string[]) =>
              array.indexOf(name) === index // Remove duplicates
          );

        setAvailableUnits(allUnitsFromList);
      }
    } catch (error) {
      console.error("Error loading units from localStorage:", error);
      // Fallback to all units from UNIT_LIST on error
      const allUnitsFromList = Object.values(UNIT_LIST)
        .flatMap((stationUnits) => stationUnits)
        .map((unit) => unit.name)
        .filter(
          (name: string, index: number, array: string[]) =>
            array.indexOf(name) === index // Remove duplicates
        );

      setAvailableUnits(allUnitsFromList);
    }
  }, []);

  // Priority order for unit display - using exact unit names and patterns
  const unitPriorityOrder = [
    // Engines first (all variations)
    "Engine",
    // Squads
    "Squad",
    // Patrols
    "Patrol",
    // Trucks
    "Truck",
    // Light Force
    "Light Force",
    // Tankers
    "Tanker",
    // Tenders
    "Tender",
    // Rescues
    "Rescue",
    // Guardians
    "Guardian",
    // Gryphons
    "Gryphon",
    // Hazmat
    "Hazmat",
    // Other units
    "EOD",
    "Fire Investigator",
    "Fire Marshal",
    "Knight Truck",
    "Wildland",
    "Gator",
    "Polaris",
    "ATV",
    "Attack",
    "USAR",
    // Marine/Boat units
    "Marine",
    "Rescue Boat",
    "Dive Rescue",
    "Swift Water",
    // Air units
    "Air Rescue",
    "FireHawk",
    // Medical units
    "Transport (ACLS)",
    "Transport (ALS)",
    "Transport (BLS)",
    "Ambulance",
    "Medic",
    // Command units
    "Command",
    "Chief",
    "Battalion",
    "Safety",
    "Deputy",
    // Crash units
    "Crash",
    // Notifications
    "Police Notification",
    "OFI Notification",
    "Fire Notification",
    "EMS Notification",
    "MEO Notification",
  ];

  // Unit abbreviations mapping - updated with proper abbreviations
  const unitAbbreviations: { [key: string]: string } = {
    // Basic pattern matching for numbered units
    Engine: "Eng",
    Patrol: "Ptrl",
    Squad: "Sq",
    Gryphon: "Gryph",
    Guardian: "Guard",
    Truck: "Trck",
    "Light Force": "LF",
    Tanker: "Tnk",
    Tender: "Tnd",
    Rescue: "Resq",
    Hazmat: "Haz",
    "Rescue Boat": "RB",
    "Dive Rescue": "DR",
    "Swift Water": "SW",
    "Transport (ACLS)": "CC-Medic",
    "Transport (ALS)": "Med",
    "Transport (BLS)": "Amb",
    Ambulance: "Amb",
    Medic: "Med",
    "Air Rescue": "Helo",
    FireHawk: "FH",
    Command: "Cmd",
    Battalion: "Batt",
    Safety: "Safe",
    Deputy: "Dep",
    Chief: "Chief",
    Crash: "Crash",
    EOD: "EOD",
    "Fire Investigator": "OFI",
    "Fire Marshal": "FM",
    "Knight Truck": "KT",
    Wildland: "WL",
    Gator: "Gator",
    Polaris: "Pol",
    ATV: "ATV",
    Attack: "Att",
    Marine: "Marine",
  };

  // Function to get unit abbreviation - enhanced to handle numbered units
  const getUnitAbbreviation = (unit: string): string => {
    // First check if there's an exact match
    if (unitAbbreviations[unit]) {
      return unitAbbreviations[unit];
    }

    // Handle numbered units by extracting the base type
    for (const [baseType, abbreviation] of Object.entries(unitAbbreviations)) {
      if (unit.startsWith(baseType + " ")) {
        const number = unit.substring(baseType.length + 1);
        return abbreviation + " " + number;
      }
    }

    // Special handling for Guardian units
    if (unit.includes("Guardian")) {
      const number = unit.match(/\d+/)?.[0] || "";
      return "Guard " + number;
    }

    // Default to the unit name if no abbreviation found
    return unit;
  };

  // Function to sort units by priority order then by station number
  const sortUnitsByPriority = (units: string[]) => {
    return units.sort((a, b) => {
      // Helper function to get priority index for a unit
      const getPriorityIndex = (unitName: string) => {
        // First try exact match
        const exactIndex = unitPriorityOrder.indexOf(unitName);
        if (exactIndex !== -1) return exactIndex;

        // Try to match by base type (e.g., "Engine 3" matches "Engine")
        for (let i = 0; i < unitPriorityOrder.length; i++) {
          const priorityType = unitPriorityOrder[i];
          if (
            unitName.startsWith(priorityType + " ") ||
            unitName.includes(priorityType)
          ) {
            return i;
          }
        }

        // Return a high number if not found in priority list
        return 9999;
      };

      // Helper function to extract station number from unit name
      const getStationNumber = (unitName: string) => {
        const match = unitName.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
      };

      const indexA = getPriorityIndex(a);
      const indexB = getPriorityIndex(b);

      // First sort by priority order (unit type)
      if (indexA !== indexB) {
        // If both units are in the priority list, sort by their index
        if (indexA !== 9999 && indexB !== 9999) {
          return indexA - indexB;
        }

        // If only one unit is in the priority list, prioritize it
        if (indexA !== 9999) return -1;
        if (indexB !== 9999) return 1;

        // If neither unit is in the priority list, sort alphabetically
        return a.localeCompare(b);
      }

      // If both units have the same priority (same type), sort by station number
      const stationA = getStationNumber(a);
      const stationB = getStationNumber(b);

      return stationA - stationB;
    });
  };

  const handleUnitToggle = (unit: string) => {
    setUnitsToSend((prev) =>
      prev.includes(unit) ? prev.filter((u) => u !== unit) : [...prev, unit]
    );
  };

  const handleRefreshUnitSelection = () => {
    if (availableUnits.length > 0 && responsePlan) {
      const recommendedUnits = selectUnitsFromResponsePlan(
        responsePlan,
        availableUnits
      );
      setUnitsToSend(recommendedUnits);
    }
  };

  const handleDeselectAll = () => {
    setUnitsToSend([]);
  };

  // Extract determinant and response logic
  const codeMatch = protocol.determinants
    .flatMap((d) => d.codes)
    .find((c) => c.code === emsCase.currentCode);

  const subCodeMatch =
    emsCase.currentSuffix && codeMatch?.subCodes
      ? codeMatch.subCodes.find((s) => s.suffix === emsCase.currentSuffix)
      : null;

  const response = subCodeMatch?.recResponse ?? codeMatch?.recResponse;
  const responsePlan = getEmsResponsePlan(response || protocol.defaultPlan);
  const shouldSendPolice = !!responsePlan?.sendPolice;
  const shouldSendFire = !!responsePlan?.sendFire;

  useEffect(() => {
    const township = getPostal(callDetails.postal)?.twp;

    const location = `Location: ${callDetails.postal} ${callDetails.street}${
      township ? `, ${township}` : ""
    } ${callDetails.buildingInfo ? `- ${callDetails.buildingInfo}` : ""}`;

    const crossStreets = `Cross: ${
      callDetails.crossStreet1 ? callDetails.crossStreet1 : ""
    } / ${callDetails.crossStreet2 ? callDetails.crossStreet2 : ""}`;

    const proximity =
      emsCase.patientProximity === "first"
        ? "First Party - "
        : emsCase.patientProximity === "no"
        ? "Third Party - "
        : emsCase.patientProximity === "fourth"
        ? "Fourth Party - "
        : "";

    const count = emsCase.numPatients;
    const age = emsCase.patientAge;
    const ageUnit = emsCase.ageUnit;
    const gender =
      emsCase.patientGender.charAt(0).toUpperCase() +
      emsCase.patientGender.slice(1).toLowerCase();
    const consciousness =
      emsCase.patientConsciousness === "yes"
        ? "Conscious"
        : emsCase.patientConsciousness === "no"
        ? "Unconscious"
        : "Unk Consciousness";
    const breathing =
      emsCase.patientBreathing === "yes"
        ? "Breathing"
        : emsCase.patientBreathing === "no"
        ? "Not Breathing"
        : emsCase.patientBreathing === "agonal/ineffective"
        ? "Agonal/Ineffective Breating"
        : "Unk Breathing";

    const patientInfo = `${proximity}${
      count > 1
        ? `${count}x Patients`
        : `${age}-${ageUnit}-old, ${gender}, ${consciousness}, ${breathing}`
    }`;

    const reconfiguration = emsCase.reconfiguredFrom
      ? "-- Call reconfigured from " + emsCase.reconfiguredFrom
      : "";

    const answers =
      emsCase.answers?.map((qa) => `-- ${qa.display}`).filter(Boolean) || [];

    const dispatch = `ProQA completed by: Dispatcher ${
      localStorage.getItem("CALLSIGN") || "Unknown"
    }`;

    const callerInfo = callDetails.callerName
      ? `${callDetails.isLocalCaller ? "Local " : ""}Caller: ${
          callDetails.callerName || "Unknown"
        } | Phone ${callDetails.callerNumber || "Unknown"}`
      : "";

    const responseUnits =
      responsePlan?.units
        ?.map((u) => {
          let unitType = u.type;

          if (unitType === "Police Notification") return "PD Notify";
          if (unitType === "OFI Notification") return "OFI Notify";
          if (unitType === "Fire Notification") return "Fire Notify";
          if (unitType === "EMS Notification") return "EMS Notify";
          if (unitType === "MEO Notification") return "MEO Notify";

          return `${u.quantity}x ${unitType}`;
        })
        .join(", ") || "No Response Units";

    const text = [
      `Code: ${
        emsCase.currentCode !== "DEFAULT_CODE"
          ? emsCase.currentCode
          : "Pending"
      }${
        subCodeMatch?.suffix && emsCase.currentSuffix !== "DEFAULT_SUFFIX"
          ? `${emsCase.currentSuffix}`
          : ""
      }`,
      location,
      crossStreets,
      `Recc: ${responseUnits}`,
      `Disp: ${
        unitsToSend.length > 0
          ? sortUnitsByPriority(unitsToSend)
              .map((unit) => getUnitAbbreviation(unit))
              .join(", ")
          : "Pending"
      }`,
      `Problem: ${protocol.shortName} ${
        codeMatch?.text !== undefined ? `- ${codeMatch.text}` : ""
      }${
        emsCase.currentSuffix
          ? `${subCodeMatch?.text ? ` - ${subCodeMatch?.text}` : ""}`
          : ""
      }`,
      `Caller Statement: ${callDetails.callerStatement}`,
      "==============================",
      `Scene Status: ${sceneStatus}`,
      "Scene Com: Not Established",
      `Channel: ${channel}`,
      `Staging Location: ${stagingLocation}`,
      "==============================",
      callerInfo,
      `ProQA Information:`,
      patientInfo,
      reconfiguration,
      answers,
      emsCase.questionsCompleted && dispatch,
    ]
      .flat()
      .filter(Boolean)
      .join("\n");

    setSummaryText(text);
  }, [callDetails, emsCase, protocol, channel, sceneStatus, stagingLocation, unitsToSend]);

  return (
    <div>
      {emsCase.questionsCompleted && (
        <div className="space-y-6">
          <header>
            <h2 className="text-xl font-bold mb-4">Configuration</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Scene Status */}
            <div className="space-y-2">
              <Label>Scene Status</Label>
              <Select
                value={sceneStatus}
                onValueChange={(value) => {
                  setSceneStatus(value);
                  emsCase.secureScene = value === "Secure";
                }}
                defaultValue={sceneStatus}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Secure">Secure</SelectItem>
                  <SelectItem value="Not Secure">Not Secure</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Channel */}
            <div className="space-y-2">
              <Label>Channel</Label>
              <Select
                value={channel}
                onValueChange={setChannel}
                defaultValue={channel}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Statewide">Statewide</SelectItem>
                  <SelectItem value="Los Santos">Los Santos</SelectItem>
                  <SelectItem value="Blaine County">Blaine County</SelectItem>
                  <SelectItem value="Tac 1">Tac 1</SelectItem>
                  <SelectItem value="Tac 2">Tac 2</SelectItem>
                  <SelectItem value="Fire Dispatch">Fire Dispatch</SelectItem>
                  <SelectItem value="Fire Tac 1">Fire Tac 1</SelectItem>
                  <SelectItem value="Fire Tac 2">Fire Tac 2</SelectItem>
                  <SelectItem value="Fire Tac 3">Fire Tac 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Staging Location */}
            <div className="space-y-2">
              <Label>Staging Location</Label>
              <Input
                value={stagingLocation}
                onChange={(e) => setStagingLocation(e.target.value)}
                placeholder="Enter staging location"
                className="w-full"
              />
            </div>
          </div>

          {/* Units Selection */}
          {settings.advancedMode && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-lg font-semibold">
                    Select Units to Dispatch
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Choose the units you want to send to this incident
                  </p>
                </div>
                <div className="flex gap-2">
                  {responsePlan && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleRefreshUnitSelection}
                      className="text-xs"
                    >
                      Auto-Select from Response Plan
                    </Button>
                  )}
                  {unitsToSend.length > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDeselectAll}
                      className="text-xs"
                    >
                      De-select All
                    </Button>
                  )}
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-muted/20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {sortUnitsByPriority(availableUnits).map((unit) => (
                    <div key={unit} className="flex items-center space-x-2">
                      <Checkbox
                        id={unit}
                        checked={unitsToSend.includes(unit)}
                        onCheckedChange={() => handleUnitToggle(unit)}
                      />
                      <Label
                        htmlFor={unit}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {unit}
                      </Label>
                    </div>
                  ))}
                </div>

                {unitsToSend.length > 0 && (
                  <div className="mt-4 p-3 bg-primary/10 rounded-md">
                    <Label className="text-sm font-semibold">
                      Selected Units:
                    </Label>
                    <p className="text-sm mt-1">
                      {sortUnitsByPriority(unitsToSend).join(", ")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
      <Textarea
        value={summaryText}
        onChange={(e) => setSummaryText(e.target.value)}
        className="w-full min-h-[500px] font-mono text-sm p-4 border rounded-lg resize-none auto-expand mt-8"
        style={{ resize: "none" }}
        spellCheck={false}
      />
      <div className="flex justify-end space-x-2 pt-4">
        <Button
          variant="outline"
          onClick={() =>
            handleClick(
              summaryText,
              !emsCase.questionsCompleted ? "kq" : "pdi-cei",
              unitsToSend
            )
          }
        >
          {emsCase.hasCompletedDisconnect
            ? "Close Case"
            : emsCase.questionsCompleted
            ? "Dispatch Case"
            : "Send Case"}
          <ArrowRight className="h-4 w-4 text-green-500" />
        </Button>

        {(settings.multiService &&
          emsCase.questionsCompleted &&
          shouldSendPolice && (
            <Button
              variant="outline"
              onClick={() => handleClick(summaryText, "police", unitsToSend)}
            >
              Dispatch Police <ShieldAlert className="h-4 w-4 text-blue-500" />
            </Button>
          )) ||
          (shouldSendFire && (
            <Button
              variant="outline"
              onClick={() => handleClick(summaryText, "fire", unitsToSend)}
            >
              Dispatch Fire <FireExtinguisher className="h-4 w-4 text-red-500" />
            </Button>
          ))}
      </div>
    </div>
  );
}
