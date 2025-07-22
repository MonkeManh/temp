"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Plus,
  Radio,
  AlertTriangle,
  CheckCircle,
  X,
  Link,
  Trash2,
} from "lucide-react";
import {
  type Station,
  STATIONS,
  type UnitStatus,
} from "@/data/stations/assignment-list";
import { UNIT_LIST } from "@/data/stations/unit-list";
import { MultiSelect } from "@/components/ui/multi-select";

const STORAGE_KEY = "FIRE_UNITS";

interface CrossStaffingPair {
  unit1: string;
  unit2: string;
}

export default function UnitTable() {
  const [stations, setStations] = useState<Station[]>([]);
  const [selectedStation, setSelectedStation] = useState<string>("");
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
  const [crossStaffingPairs, setCrossStaffingPairs] = useState<
    CrossStaffingPair[]
  >([]);
  const [isAddUnitOpen, setIsAddUnitOpen] = useState(false);
  const [isClearUnitsOpen, setIsClearUnitsOpen] = useState(false);
  const [editingUnit, setEditingUnit] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setStations(parsedData);
      } else {
        // First time loading, use default empty stations
        setStations(STATIONS);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(STATIONS));
      }
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
      setStations(STATIONS);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever stations change
  useEffect(() => {
    if (isLoaded && stations.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stations));
      } catch (error) {
        console.error("Error saving data to localStorage:", error);
      }
    }
  }, [stations, isLoaded]);

  // Reset selected units and cross staffing when station changes
  useEffect(() => {
    setSelectedUnits([]);
    setCrossStaffingPairs([]);
  }, [selectedStation]);

  // Reset cross staffing when units change
  useEffect(() => {
    // Remove cross staffing pairs that involve units no longer selected
    setCrossStaffingPairs((prev) =>
      prev.filter(
        (pair) =>
          selectedUnits.includes(pair.unit1) &&
          selectedUnits.includes(pair.unit2)
      )
    );
  }, [selectedUnits]);

  const getStatusIcon = (status: UnitStatus) => {
    switch (status) {
      case "Available":
        return <CheckCircle className="h-3 w-3 text-green-600" />;
      case "On Call":
        return <Radio className="h-3 w-3 text-yellow-600" />;
      case "OOS":
        return <AlertTriangle className="h-3 w-3 text-red-600" />;
    }
  };

  const getStatusBadgeColor = (status: UnitStatus) => {
    switch (status) {
      case "Available":
        return "bg-green-300/10 text-green-600 hover:bg-green-200/10";
      case "On Call":
        return "bg-yellow-300/10 text-yellow-600 hover:bg-yellow-200/10";
      case "OOS":
        return "bg-red-300/10 text-red-600 hover:bg-red-200/10";
    }
  };

  const updateUnitStatus = (
    stationId: string,
    unitId: string,
    newStatus: UnitStatus
  ) => {
    setStations((prevStations) =>
      prevStations.map((station) =>
        station.id === stationId
          ? {
              ...station,
              units: station.units.map((unit) =>
                unit.id === unitId ? { ...unit, status: newStatus } : unit
              ),
            }
          : station
      )
    );
    setEditingUnit(null);
  };

  const addCrossStaffing = (
    stationId: string,
    unitId: string,
    targetUnitId: string
  ) => {
    setStations((prevStations) =>
      prevStations.map((station) =>
        station.id === stationId
          ? {
              ...station,
              units: station.units.map((unit) => {
                if (unit.id === unitId) {
                  // Add target unit to this unit's cross staffing list
                  return {
                    ...unit,
                    crossStaffedWith: [...unit.crossStaffedWith, targetUnitId],
                  };
                } else if (unit.id === targetUnitId) {
                  // Add this unit to target unit's cross staffing list (bidirectional)
                  return {
                    ...unit,
                    crossStaffedWith: [...unit.crossStaffedWith, unitId],
                  };
                }
                return unit;
              }),
            }
          : station
      )
    );
  };

  const removeCrossStaffing = (
    stationId: string,
    unitId: string,
    targetUnitId: string
  ) => {
    console.log('removeCrossStaffing called with:', { stationId, unitId, targetUnitId });
    setStations((prevStations) => {
      const newStations = prevStations.map((station) =>
        station.id === stationId
          ? {
              ...station,
              units: station.units.map((unit) => {
                if (unit.id === unitId) {
                  // Remove target unit from this unit's cross staffing list
                  return {
                    ...unit,
                    crossStaffedWith: unit.crossStaffedWith.filter(
                      (id) => id !== targetUnitId
                    ),
                  };
                } else if (unit.id === targetUnitId) {
                  // Remove this unit from target unit's cross staffing list
                  return {
                    ...unit,
                    crossStaffedWith: unit.crossStaffedWith.filter(
                      (id) => id !== unitId
                    ),
                  };
                }
                return unit;
              }),
            }
          : station
      );
      console.log('Updated stations:', newStations);
      return newStations;
    });
  };

  // Helper function to check if two units are cross staffed in our pairs
  const areUnitsCrossStaffed = (unit1: string, unit2: string): boolean => {
    return crossStaffingPairs.some(
      (pair) =>
        (pair.unit1 === unit1 && pair.unit2 === unit2) ||
        (pair.unit1 === unit2 && pair.unit2 === unit1)
    );
  };

  // Helper function to toggle cross staffing between two units
  const toggleCrossStaffing = (unit1: string, unit2: string) => {
    const isCurrentlyCrossStaffed = areUnitsCrossStaffed(unit1, unit2);

    if (isCurrentlyCrossStaffed) {
      // Remove the pair
      setCrossStaffingPairs((prev) =>
        prev.filter(
          (pair) =>
            !(
              (pair.unit1 === unit1 && pair.unit2 === unit2) ||
              (pair.unit1 === unit2 && pair.unit2 === unit1)
            )
        )
      );
    } else {
      // Add the pair
      setCrossStaffingPairs((prev) => [...prev, { unit1, unit2 }]);
    }
  };

  const addUnits = () => {
    if (!selectedStation || selectedUnits.length === 0) return;

    // Find the units from UNIT_LIST
    const availableUnits = UNIT_LIST[selectedStation] || [];
    const unitsToAdd = availableUnits.filter((unit) =>
      selectedUnits.includes(unit.id)
    );

    if (unitsToAdd.length === 0) return;

    // Check if any units are already assigned to this station
    const station = stations.find((s) => s.id === selectedStation);
    const existingUnitIds = station?.units.map((u) => u.id) || [];

    // Filter out units that are already assigned
    const newUnitsToAdd = unitsToAdd.filter(
      (unit) => !existingUnitIds.includes(unit.id)
    );

    if (newUnitsToAdd.length === 0) {
      alert("All selected units are already assigned to this station.");
      return;
    }

    // Set up cross staffing relationships based on selected pairs
    const unitsWithCrossStaffing = newUnitsToAdd.map((unit) => {
      const crossStaffedWith = crossStaffingPairs
        .filter((pair) => pair.unit1 === unit.id || pair.unit2 === unit.id)
        .map((pair) => (pair.unit1 === unit.id ? pair.unit2 : pair.unit1))
        .filter((unitId) => newUnitsToAdd.some((u) => u.id === unitId)); // Only include units that are actually being added

      return {
        ...unit,
        crossStaffedWith,
      };
    });

    setStations((prevStations) =>
      prevStations.map((station) =>
        station.id === selectedStation
          ? { ...station, units: [...station.units, ...unitsWithCrossStaffing] }
          : station
      )
    );

    setSelectedUnits([]);
    setCrossStaffingPairs([]);
    setSelectedStation("");
    setIsAddUnitOpen(false);
  };

  const removeUnit = (stationId: string, unitId: string) => {
    setStations((prevStations) =>
      prevStations.map((station) =>
        station.id === stationId
          ? {
              ...station,
              units: station.units.filter((unit) => unit.id !== unitId),
            }
          : station
      )
    );
  };

  const clearAllUnits = () => {
    const clearedStations = STATIONS.map((station) => ({
      ...station,
      units: [],
    }));
    setStations(clearedStations);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clearedStations));
    setIsClearUnitsOpen(false);
  };

  // Helper function to get unit name by ID
  const getUnitNameById = (unitId: string) => {
    for (const station of stations) {
      const unit = station.units.find((u) => u.id === unitId);
      if (unit) return unit.name;
    }
    return "";
  };

  // Get available units for selected station (not already assigned)
  const getAvailableUnitsForStation = (stationId: string) => {
    const availableUnits = UNIT_LIST[stationId] || [];
    const station = stations.find((s) => s.id === stationId);
    const assignedUnitIds = station?.units.map((u) => u.id) || [];

    return availableUnits
      .filter((unit) => !assignedUnitIds.includes(unit.id))
      .map((unit) => ({
        value: unit.id,
        label: unit.name,
      }));
  };

  // Get selected unit names for display
  const getUnitNameFromList = (unitId: string) => {
    const availableUnits = UNIT_LIST[selectedStation] || [];
    return availableUnits.find((unit) => unit.id === unitId)?.name || "";
  };

  // Don't render until data is loaded
  if (!isLoaded) {
    return (
      <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading dispatch board...</div>
      </div>
    );
  }

  // Split stations into two groups
  const leftStations = stations.slice(0, 10); // First 10 stations
  const rightStations = stations.slice(10); // Remaining 10 stations

  const renderStationTable = (stationGroup: Station[]) => (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Station / Unit</TableHead>
            <TableHead className="w-32">Status</TableHead>
            <TableHead className="w-48">Cross Staffing</TableHead>
            <TableHead className="w-16">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stationGroup.map((station) => (
            <React.Fragment key={station.id}>
              {/* Station Header Row */}
              <TableRow key={station.id} className="bg-muted/10 font-semibold">
                <TableCell className="py-3">
                  <span className="text-base ml-2">{station.name}</span>
                </TableCell>
                <TableCell className="py-3"></TableCell>
                <TableCell className="py-3"></TableCell>
                <TableCell className="py-3"></TableCell>
              </TableRow>

              {/* Unit Rows */}
              {station.units.map((unit) => {
                // Get available units for cross staffing (same station, not self, not already cross staffed)
                const availableForCrossStaffing = station.units.filter(
                  (u) =>
                    u.id !== unit.id && !unit.crossStaffedWith.includes(u.id)
                );

                return (
                  <TableRow key={unit.id} className="h-10">
                    <TableCell className="pl-8 py-2">
                      <span className="text-sm font-medium">{unit.name}</span>
                    </TableCell>
                    <TableCell className="py-2">
                      {editingUnit === unit.id ? (
                        <Select
                          value={unit.status}
                          onValueChange={(value: UnitStatus) =>
                            updateUnitStatus(station.id, unit.id, value)
                          }
                          open={true}
                          onOpenChange={(open) => !open && setEditingUnit(null)}
                        >
                          <SelectTrigger className="w-28 h-7">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Available">
                              <div className="flex items-center">
                                <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                                Available
                              </div>
                            </SelectItem>
                            <SelectItem value="On Call">
                              <div className="flex items-center">
                                <Radio className="h-3 w-3 mr-2 text-yellow-600" />
                                On Call
                              </div>
                            </SelectItem>
                            <SelectItem value="OOS">
                              <div className="flex items-center">
                                <AlertTriangle className="h-3 w-3 mr-2 text-red-600" />
                                OOS
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <Badge
                          className={`${getStatusBadgeColor(
                            unit.status
                          )} text-xs cursor-pointer transition-colors`}
                          onClick={() => setEditingUnit(unit.id)}
                        >
                          {getStatusIcon(unit.status)}
                          <span className="ml-1">{unit.status}</span>
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="py-2">
                      <div className="flex flex-col gap-1">
                        {/* Show current cross staffing */}
                        {unit.crossStaffedWith.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {unit.crossStaffedWith.map((crossStaffedUnitId) => (
                              <div
                                key={crossStaffedUnitId}
                                className="flex items-center gap-1"
                              >
                                <Badge
                                  variant="outline"
                                  className="text-xs bg-blue-50 text-blue-700 flex items-center gap-1"
                                >
                                  <Link className="h-3 w-3" />
                                  {getUnitNameById(crossStaffedUnitId)}
                                </Badge>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-4 w-4 p-0 hover:bg-red-100 ml-1"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    console.log('X clicked:', { stationId: station.id, unitId: unit.id, crossStaffedUnitId });
                                    removeCrossStaffing(
                                      station.id,
                                      unit.id,
                                      crossStaffedUnitId
                                    );
                                  }}
                                >
                                  <X className="h-3 w-3 text-red-600" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Add cross staffing dropdown */}
                        {availableForCrossStaffing.length > 0 && (
                          <Select
                            onValueChange={(value) =>
                              addCrossStaffing(station.id, unit.id, value)
                            }
                            value=""
                          >
                            <SelectTrigger className="w-full h-6 text-xs">
                              <SelectValue placeholder="+ Add cross staff" />
                            </SelectTrigger>
                            <SelectContent>
                              {availableForCrossStaffing.map(
                                (availableUnit) => (
                                  <SelectItem
                                    key={availableUnit.id}
                                    value={availableUnit.id}
                                  >
                                    <div className="flex items-center">
                                      <Link className="h-3 w-3 mr-2" />
                                      {availableUnit.name}
                                    </div>
                                  </SelectItem>
                                )
                              )}
                            </SelectContent>
                          </Select>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="py-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-red-100"
                        onClick={() => removeUnit(station.id, unit.id)}
                      >
                        <Trash2 className="h-3 w-3 text-red-600" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}

              {/* Empty state for stations with no units */}
              {station.units.length === 0 && (
                <TableRow>
                  <TableCell className="pl-8 py-2 text-sm text-gray-500 italic">
                    No units assigned
                  </TableCell>
                  <TableCell className="py-2"></TableCell>
                  <TableCell className="py-2"></TableCell>
                  <TableCell className="py-2"></TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div className="container mx-auto p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Fire Station Dispatch Board</h1>
        </div>

        <div className="flex gap-2">
          {/* Only show Clear Units button if there are units on the board */}
          {stations.some((station) => station.units.length > 0) && (
            <Dialog open={isClearUnitsOpen} onOpenChange={setIsClearUnitsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  Clear Units
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Clear All Units</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">
                    Are you sure you want to remove all units from the dispatch
                    board? This action cannot be undone.
                  </p>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setIsClearUnitsOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={clearAllUnits}>
                    Clear All Units
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}

          <Dialog open={isAddUnitOpen} onOpenChange={setIsAddUnitOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Units
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Add New Units</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="station">Assignment</Label>
                  <Select
                    value={selectedStation}
                    onValueChange={setSelectedStation}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select station" />
                    </SelectTrigger>
                    <SelectContent>
                      {stations.map((station) => (
                        <SelectItem key={station.id} value={station.id}>
                          {station.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {selectedStation && (
                  <div className="space-y-2">
                    <Label htmlFor="units">Units (select multiple)</Label>
                    <MultiSelect
                      options={getAvailableUnitsForStation(selectedStation)}
                      selected={selectedUnits}
                      onChange={setSelectedUnits}
                      placeholder="Select units..."
                      emptyText="No units available"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {selectedUnits.length} unit
                      {selectedUnits.length !== 1 ? "s" : ""} selected
                    </p>
                  </div>
                )}

                {/* Cross Staffing Configuration */}
                {selectedUnits.length > 1 && (
                  <div className="space-y-3 p-3 bg-muted/10 rounded-lg border">
                    <Label className="text-sm font-medium">
                      Cross Staffing Configuration
                    </Label>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {selectedUnits.map((unit1) => (
                        <div key={unit1} className="space-y-1">
                          <div className="text-sm font-medium text-blue-400">
                            {getUnitNameFromList(unit1)} cross staffed with:
                          </div>
                          <div className="ml-4 space-y-1">
                            {selectedUnits
                              .filter((unit2) => unit2 !== unit1) // Show all other units, not just ones that come after
                              .map((unit2) => (
                                <div
                                  key={unit2}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox
                                    id={`cross-${unit1}-${unit2}`}
                                    checked={areUnitsCrossStaffed(unit1, unit2)}
                                    onCheckedChange={() =>
                                      toggleCrossStaffing(unit1, unit2)
                                    }
                                  />
                                  <Label
                                    htmlFor={`cross-${unit1}-${unit2}`}
                                    className="text-xs"
                                  >
                                    {getUnitNameFromList(unit2)}
                                  </Label>
                                </div>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {crossStaffingPairs.length > 0 && (
                      <div className="text-xs text-muted-foreground">
                        <p className="mb-1">
                          {crossStaffingPairs.length} cross staffing
                          relationship
                          {crossStaffingPairs.length !== 1 ? "s" : ""}{" "}
                          configured
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <Button
                  onClick={addUnits}
                  className="w-full mt-4"
                  disabled={!selectedStation || selectedUnits.length === 0}
                >
                  Add {selectedUnits.length} Unit
                  {selectedUnits.length !== 1 ? "s" : ""}
                  {crossStaffingPairs.length > 0
                    ? ` (${crossStaffingPairs.length} Cross Staff Pair${
                        crossStaffingPairs.length !== 1 ? "s" : ""
                      })`
                    : ""}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Side - First 10 Stations */}
        <div className="space-y-4">{renderStationTable(leftStations)}</div>

        {/* Right Side - Remaining 10 Stations */}
        <div className="space-y-4">{renderStationTable(rightStations)}</div>
      </div>
    </div>
  );
}
