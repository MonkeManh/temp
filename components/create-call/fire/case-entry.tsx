import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CIDSData } from "@/data/locations/CIDS";
import { getFireProtocolOptions } from "@/data/protocols/fireProtocols";
import { IFireCaseEntry } from "@/models/interfaces/IFireCaseEntry";
import { INewCallData } from "@/models/interfaces/INewCallData";
import { ISettings } from "@/models/interfaces/ISettings";
import { ILocation } from "@/models/interfaces/locations/ICIDS";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

interface IEMSCaseEntryProps {
  callDetails: INewCallData;
  initialData?: IFireCaseEntry;
  settings: ISettings;
  onComplete: (data: IFireCaseEntry) => void;
  handleCaseRestart: () => void;
}

const getHelpContent = (field: string) => {
  const helpContent: Record<
    string,
    { title: string; description: React.ReactNode }
  > = {
    callerStatement: {
      title: "Caller Statement",
      description: (
        <p className="text-blue-500">
          Enter the <b className="font-bold">caller's description</b> of the
          problem.
        </p>
      ),
    },
    location: {
      title: "Location Information",
      description: (
        <div className="space-y-2">
          <p>
            <span className="text-blue-500">
              Location refers to a specific structure or building, typically a{" "}
              <b className="font-bold">business</b> or{" "}
              <b className="font-bold">well known residence</b>.
            </span>
          </p>
        </div>
      ),
    },
    displayCIDS: {
      title: "Display CIDS",
      description: (
        <p className="text-blue-500">
          Indicate whether the location being reported has a CIDS display. A
          CIDS display is a visual representation of critical information about
          the location, such as hazards, pre-arrival recommendations, and other
          important details that can assist first responders.
        </p>
      ),
    },
    boxType: {
      title: "Box Type",
      description: (
        <p className="text-blue-500">
          Select the type of alarm box that is being used to report the fire
          incident. This information helps in determining the nature of the call
          and the appropriate response.
        </p>
      ),
    },
    chiefComplaint: {
      title: "Chief Complaint Code",
      description: (
        <p className="text-blue-500">
          Enter the Chief Complaint code that{" "}
          <b className="font-bold">most closely describes</b> the{" "}
          <b className="font-bold">incident</b>.
        </p>
      ),
    },
  };

  return (
    helpContent[field] || {
      title: "Caller Statement",
      description: (
        <p>
          <span className="text-blue-500">If choking, verify:</span> "Is s/he{" "}
          <b>breathing</b> or <b>coughing</b> at all?" (You go check and tell me
          what you find.){" "}
          <span className="text-blue-500">Then tell the caller:</span> "
          <b>Do not slap</b> her/him on the back."
          <br />
          <br />
          <span className="text-purple-500">
            NOT BREATHING or INEFFECTIVE/AGONAL BREATHING , code as ECHO on
            Protocols <b>2, 6, 9, 11, 15, 31 only</b>, dispatch, give PDIs, and{" "}
            <b>return</b> to question sequence.
          </span>
        </p>
      ),
    }
  );
};

const formatPhoneNumber = (value: string, onComplete?: () => void) => {
  const digits = value.replace(/\D/g, "");
  const truncatedDigits = digits.slice(0, 10);

  if (truncatedDigits.length === 10 && onComplete) {
    setTimeout(onComplete, 0);
  }

  if (truncatedDigits.length <= 3) {
    return truncatedDigits;
  } else if (truncatedDigits.length <= 6) {
    return `(${truncatedDigits.slice(0, 3)}) ${truncatedDigits.slice(3)}`;
  } else {
    return `(${truncatedDigits.slice(0, 3)}) ${truncatedDigits.slice(
      3,
      6
    )}-${truncatedDigits.slice(6, 10)}`;
  }
};

export default function FireCaseEntry({
  callDetails,
  initialData,
  settings,
  onComplete,
  handleCaseRestart,
}: IEMSCaseEntryProps) {
  const [formData, setFormData] = useState<IFireCaseEntry>(() => {

    
    // Check if buildingInfo matches a location in CIDSData
    const matchingLocation = callDetails?.buildingInfo 
      ? CIDSData.find((c) => c.name === callDetails.buildingInfo)
      : null;

    console.log("Matching Location:", matchingLocation);
    
    return {
      callLocation: `${callDetails?.postal || ""} ${callDetails?.street || ""}`,
      callerNumber: callDetails?.callerNumber || "",
      callerStatement: callDetails?.callerStatement || "",
      location: matchingLocation ? matchingLocation.name : "",
      displayCIDS: "",
      boxType: "",
      chiefComplaint: "",
      currentCode: "DEFAULT_CODE",
      currentSuffix: "DEFAULT_SUFFIX",
      selectableCodes: [],
      answers: [],
      hasBeenSent: false,
      questionsCompleted: false,
      hasCompletedDisconnect: false,
      secureScene: true,
    };
  });
  const [isRestoring, setIsRestoring] = useState(!!initialData);
  const [focusedField, setFocusedField] = useState<string>("");
  const [focusedInput, setFocusedInput] = useState<string>("");
  const callerNumberRef = useRef<HTMLInputElement>(null);
  const callerStatmentRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLButtonElement>(null);
  const boxTypeRef = useRef<HTMLButtonElement>(null);
  const displayCIDSRef = useRef<HTMLButtonElement>(null);
  const chiefComplaintRef = useRef<HTMLButtonElement>(null);
  const continueRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const getLabelText = (field: string, isFocused: boolean) => {
    const labels: Record<string, { normal: string; focused: string }> = {
      callerStatement: {
        normal: "The problem is:",
        focused: "Okay, tell me exactly what happened:",
      },
      location: {
        normal: "The location is:",
        focused: "What is the exact location? (Address, Business Name, etc.)",
      },
      displayCIDS: {
        normal: "Display CIDS?",
        focused: "Should responders expect a CIDS display?",
      },
      boxType: {
        normal: "The box type is:",
        focused: "What type of box is this?",
      },
      chiefComplaint: {
        normal: "The Chief Complaint is:",
        focused: "Chief Complaint Code:",
      },
    };

    return isFocused ? labels[field]?.focused : labels[field]?.normal;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const complaints = getFireProtocolOptions().map((c) => ({
    value: `${c.protocol} - ${c.value}`,
    label: `${c.label}`,
  }));

  const locationOptions = useMemo(() => {
    return (
      CIDSData.filter(
        (location: ILocation) =>
          location.postal === callDetails.postal ||
          location.postal.includes(callDetails.postal)
      ).map((location: ILocation) => ({
        value: location.name,
        label: location.name,
      })) || []
    );
  }, [callDetails]);

  useEffect(() => {
    if (isRestoring) {
      // Give React a tick to stabilize state before allowing automation
      setTimeout(() => setIsRestoring(false), 0);
    }
  }, []);

  useEffect(() => {
    if (
      formData.callerNumber &&
      formData.callerNumber.length >= 14 &&
      !isRestoring
    ) {
      callerStatmentRef.current?.focus();
    }
  }, [formData.callerNumber]);

  useEffect(() => {
    if (formData.location && !isRestoring) {
      setTimeout(() => boxTypeRef.current?.click(), 100);
    }
  }, [formData.location]);

  useEffect(() => {
    if (formData.boxType && !isRestoring) {
      setTimeout(() => displayCIDSRef.current?.click(), 100);
    }
  }, [formData.boxType]);

  useEffect(() => {
    if (formData.displayCIDS && !isRestoring) {
      setTimeout(() => chiefComplaintRef.current?.click(), 100);
    }
  }, [formData.displayCIDS]);

  useEffect(() => {
    if (formData.chiefComplaint && !isRestoring) {
      setTimeout(() => continueRef.current?.focus(), 100);
    }
  }, [formData.chiefComplaint]);

  const canEditLocation = !settings.strictEntry || !!formData.callerStatement;
  const canEditCIDS =
    !settings.strictEntry ||
    (!!formData.callerStatement && !!formData.location);
  const canEditboxType = !settings.strictEntry || !!formData.callerStatement;
  const canEditChiefComplaint =
    !settings.strictEntry || !!formData.callerStatement;
  const canContinue = !!formData.chiefComplaint;

  return (
    <main className="space-y-4">
      <header>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => {
                // Check if buildingInfo matches a location in CIDSData
                const matchingLocation = callDetails?.buildingInfo 
                  ? CIDSData.find((c) => c.name === callDetails.buildingInfo)
                  : null;
                
                // Clear all of the current form data
                setFormData({
                  callLocation: `${callDetails?.postal || ""} ${
                    callDetails?.street || ""
                  }`,
                  callerNumber: callDetails?.callerNumber || "",
                  callerStatement: callDetails?.callerStatement || "",
                  location: matchingLocation ? matchingLocation.name : "",
                  displayCIDS: "",
                  boxType: "",
                  chiefComplaint: "",
                  currentCode: "DEFAULT_CODE",
                  currentSuffix: "DEFAULT_SUFFIX",
                  selectableCodes: [],
                  answers: [],
                  hasBeenSent: false,
                  questionsCompleted: false,
                  hasCompletedDisconnect: false,
                  secureScene: true,
                });
                if (!callDetails.callerNumber) {
                  setFocusedInput("callerNumber");
                  setFocusedField("callerNumber");
                  callerNumberRef.current?.focus();
                } else {
                  setFocusedField("callerStatement");
                  setFocusedInput("callerStatement");
                  callerStatmentRef.current?.focus();
                }
                handleCaseRestart();
              }}
              variant="outline"
              className="cursor-pointer hover:bg-accent-foreground"
            >
              <RotateCcw className="w-4 h-4 text-green-400" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Restart Fire Case</p>
          </TooltipContent>
        </Tooltip>
      </header>
      <div className="p-4 space-y-6">
        <div className="grid grid-cols-5 gap-4 items-center">
          <div className="col-span-2 flex items-center justify-end">
            <Label className="text-sm font-medium">The location is:</Label>
          </div>
          <div className="col-span-3">
            <Input
              value={`${callDetails?.postal || ""} ${
                callDetails?.street || ""
              }`}
              className="bg-gray-50"
              disabled
            />
          </div>

          <div className="col-span-2 flex items-center justify-end">
            <Label className="text-sm font-medium">The phone number is:</Label>
          </div>
          <div className="col-span-3">
            <Input
              value={formData.callerNumber}
              onChange={(e) => {
                const formatted = formatPhoneNumber(e.target.value);
                handleInputChange("callerNumber", formatted);
              }}
              onFocus={() => {
                setFocusedInput("callerNumber");
                setFocusedField("callerNumber");
              }}
              onBlur={() => setFocusedInput("")}
              autoFocus={!callDetails.callerNumber}
              className="bg-white"
              disabled={!!callDetails.callerNumber}
              ref={callerNumberRef}
            />
          </div>

          <div className="col-span-2 flex items-center justify-end">
            <Label
              className={`text-sm ${
                focusedInput === "callerStatement" ? "font-bold" : "font-normal"
              }`}
            >
              {getLabelText(
                "callerStatement",
                focusedInput === "callerStatement"
              )}
            </Label>
          </div>
          <div className="col-span-3">
            <Input
              value={formData.callerStatement}
              onChange={(e) =>
                handleInputChange("callerStatement", e.target.value)
              }
              onFocus={() => {
                setFocusedInput("callerStatement");
                setFocusedField("callerStatement");
              }}
              onBlur={() => setFocusedInput("")}
              autoFocus={callDetails.callerNumber ? true : false}
              ref={callerStatmentRef}
            />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 items-center">
          <div className="col-span-2 flex items-center justify-end">
            <Label
              className={`text-sm ${
                focusedInput === "location" ? "font-bold" : "font-normal"
              }`}
            >
              {getLabelText("location", focusedInput === "location")}
            </Label>
          </div>
          <div className="col-span-3">
            <Combobox
              options={locationOptions}
              value={formData.location}
              onValueChange={(value) => handleInputChange("location", value)}
              onClick={() => {
                setFocusedInput("location");
                setFocusedField("location");
              }}
              placeholder="Select location..."
              searchPlaceholder="Search locations..."
              ref={locationRef}
              disabled={!canEditLocation}
            />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 items-start" style={{ gridTemplateRows: 'auto auto' }}>
          <div className="col-span-2 flex items-center justify-end h-10">
            <Label
              className={`text-sm ${
                focusedInput === "boxType" ? "font-bold" : "font-normal"
              }`}
            >
              {getLabelText("boxType", focusedInput === "boxType")}
            </Label>
          </div>
          
          <div className="col-span-1">
            <Select
              value={formData.boxType}
              onValueChange={(value) => handleInputChange("boxType", value)}
              onOpenChange={(open) => {
                if (open) {
                  setFocusedInput("boxType");
                  setFocusedField("boxType");
                } else {
                  setFocusedInput("");
                }
              }}
              disabled={!canEditboxType}
            >
              <SelectTrigger className="w-full" ref={boxTypeRef}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Phone Alarm">Phone Alarm</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="col-span-2 row-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">
                  {getHelpContent(focusedField).title}
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-[-1rem]">
                <CardDescription className="text-sm">
                  {getHelpContent(focusedField).description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

              
          <div className="col-span-2 flex items-center justify-end h-10">
            <Label
              className={`text-sm ${
                focusedInput === "displayCIDS" ? "font-bold" : "font-normal"
              }`}
            >
              {getLabelText("displayCIDS", focusedInput === "displayCIDS")}
            </Label>
          </div>
          <div className="col-span-1">
            <Select
              value={formData.displayCIDS}
              onValueChange={(value) => handleInputChange("displayCIDS", value)}
              onOpenChange={(open) => {
                if (open) {
                  setFocusedInput("displayCIDS");
                  setFocusedField("displayCIDS");
                } else {
                  setFocusedInput("");
                }
              }}
              disabled={!canEditCIDS}
            >
              <SelectTrigger ref={displayCIDSRef} className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 items-center">
          <div className="col-span-2 flex items-center justify-end">
            <Label
              className={`text-sm ${
                focusedInput === "chiefComplaint" ? "font-bold" : "font-normal"
              }`}
            >
              {getLabelText(
                "chiefComplaint",
                focusedInput === "chiefComplaint"
              )}
            </Label>
          </div>
          <div className="col-span-3 flex items-center gap-2">
            <div className="w-[75%]">
              <Combobox
                options={complaints}
                value={formData.chiefComplaint}
                onValueChange={(value) => {
                  handleInputChange("chiefComplaint", value);
                }}
                onClick={() => {
                  setFocusedInput("chiefComplaint");
                  setFocusedField("chiefComplaint");
                }}
                placeholder="Select chief complaint..."
                searchPlaceholder="Search complaints..."
                ref={chiefComplaintRef}
                disabled={!canEditChiefComplaint}
              />
            </div>
            <Button
              ref={continueRef}
              variant="outline"
              onClick={() => onComplete(formData)}
              disabled={!canContinue}
            >
              <ArrowRight className="h-4 w-4 text-green-400" />
            </Button>
          </div>
        </div>
        <div className="mt-12">
          <Button
            variant="outline"
            onClick={() => {
              router.back();
            }}
          >
            <ArrowLeft className="h-8 w-8 text-destructive" />
            Back
          </Button>
        </div>
      </div>
    </main>
  );
}
