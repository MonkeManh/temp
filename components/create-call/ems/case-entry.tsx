"use client";

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
import { getEMSProtocolOptions } from "@/data/protocols/emsProtocols";
import { IEMSCaseEntry } from "@/models/interfaces/IEMSCaseEntry";
import { INewCallData } from "@/models/interfaces/INewCallData";
import { ISettings } from "@/models/interfaces/ISettings";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

interface IEMSCaseEntryProps {
  callDetails: INewCallData;
  initialData?: IEMSCaseEntry;
  settings: ISettings;
  onComplete: (data: IEMSCaseEntry) => void;
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
        <p>
          <span className="text-blue-500">If choking, verify:</span> "Is s/he{" "}
          <b>breathing</b> or <b>coughing</b> at all?" (You go check and tell me
          what you find.){" "}
          <span className="text-blue-500">Then tell the caller:</span> "
          <b>Do not slap</b>{" "}
          her/him on the back."
          <br />
          <br />
          <span className="text-purple-500">
            NOT BREATHING or INEFFECTIVE/AGONAL BREATHING , code as ECHO on
            Protocols <b>2, 6, 9, 11, 15, 31 only</b>, dispatch, give PDIs, and{" "}
            <b>return</b> to question sequence.
          </span>
        </p>
      ),
    },
    patientProximity: {
      title: "Patient Location",
      description: (
        <p>
          <span className="text-blue-500">
            Ask only if <b>not</b> obvious.
          </span>
          <br />
          <br />
          <span className="text-blue-500">
            <b>4th party = referring agency</b> such as police, airport, or
            other <b>professional</b> comm. center.
          </span>
        </p>
      ),
    },
    peopleHurt: {
      title: "Number of Patients",
      description: (
        <p className="text-blue-500">
          The <b>number</b> of people <b>injured</b> or <b>sick</b>. More than
          one <b>serious</b> patient will trigger a <b>DELTA</b> response on
          Protocols <b>4, 7, 8, 14, 15, 20, 22, 27, 29, 32</b>
        </p>
      ),
    },
    patientAge: {
      title: "Patient Age",
      description: (
        <p className="text-blue-500">
          The <b>closest age</b> (even if approximate) <b>must</b> be entered.
          <br />
          <br />
          <b>(Unsure)</b>{" "}
          <span className="text-primary">
            Tell me <b>approximately</b>, then
          </span>
        </p>
      ),
    },
    patientGender: {
      title: "Patient Gender",
      description: (
        <p className="text-blue-500">
          The <b>gender</b> of the patient. Ask only if <b>not</b> obvious.
        </p>
      ),
    },
    patientConsciousness: {
      title: "Level of Consciousness",
      description: (
        <p className="text-blue-500">
          If consciousness is <b>unknown</b>, immediately <b>verify</b> whether
          the patient is <b>breathing</b>.
        </p>
      ),
    },
    patientBreathing: {
      title: "Breathing Status",
      description: (
        <p className="text-blue-500">
          Hasn't checked: Ask <b>"You go check and tell me what you find"</b>
          <br />
          <b>Uncertain:</b> a 2nd party caller who is unsure. <b>Unknown:</b> a
          3rd or 4th party caller who doesn't know. Select <b>INEFFECTIVE</b>{" "}
          when unconscious
          <b>and</b> breathing is <b>irregular</b> or <b>very slow</b>, or{" "}
          <b>AGONAL</b>, when the time <b>between</b> breaths is 10 seconds or
          more.
        </p>
      ),
    },
    chiefComplaint: {
      title: "Chief Complaint Code",
      description: (
        <>
          <p className="text-blue-500">
            Enter the Chief Complaint code that <b>most closely describes</b>{" "}
            the <b>foremost</b> symptom or incident.
          </p>
          <p className="mt-2">
            The report of an <b>"unknown problem"</b> in a{" "}
            <b>patient who is not with or near the caller,</b> or a call for
            help from someone whose language cannot be understood (no
            interpreter in the center), should be sent as protocol 32 (Unknown
            Problem)
          </p>
          <p className="mt-2">
            Please note that <b>Protocol 26</b> should be used for patients with
            an <b>"unknown problem"</b> who are{" "}
            <b>with or near the caller (2nd party).</b>
          </p>
        </>
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

function calculateAgeFromDate(
  dateStr: string
): { value: number; unit: string } | null {
  const birthDate = new Date(dateStr);
  const now = new Date();
  if (isNaN(birthDate.getTime())) return null;

  const diffMs = now.getTime() - birthDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 31) {
    return { value: diffDays, unit: "day" };
  } else if (diffDays < 365) {
    return { value: Math.floor(diffDays / 30), unit: "month" };
  } else {
    return {
      value:
        now.getFullYear() -
        birthDate.getFullYear() -
        (now.getMonth() < birthDate.getMonth() ||
        (now.getMonth() === birthDate.getMonth() &&
          now.getDate() < birthDate.getDate())
          ? 1
          : 0),
      unit: "year",
    };
  }
}

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

export default function EMSCaseEntry({
  callDetails,
  initialData,
  settings,
  onComplete,
  handleCaseRestart,
}: IEMSCaseEntryProps) {
  const [formData, setFormData] = useState<IEMSCaseEntry>(() => {
    if (initialData) {
      return initialData;
    }
    return {
      callLocation: `${callDetails?.postal || ""} ${callDetails?.street || ""}`,
      callerNumber: callDetails?.callerNumber || "",
      callerStatement: callDetails?.callerStatement || "",
      patientProximity: "",
      numPatients: 1,
      patientAge: 0,
      ageUnit: "year",
      patientGender: "",
      patientConsciousness: "",
      patientBreathing: "",
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
  const [tempAge, setTempAge] = useState<string>("");
  const [focusedField, setFocusedField] = useState<string>("");
  const [focusedInput, setFocusedInput] = useState<string>("");
  const callerNumberRef = useRef<HTMLInputElement>(null);
  const callerStatmentRef = useRef<HTMLInputElement>(null);
  const callerLocationRef = useRef<HTMLButtonElement>(null);
  const numPatientsRef = useRef<HTMLInputElement>(null);
  const patientAgeRef = useRef<HTMLInputElement>(null);
  const patientGenderRef = useRef<HTMLButtonElement>(null);
  const patientConsciousnessRef = useRef<HTMLButtonElement>(null);
  const patientBreathingRef = useRef<HTMLButtonElement>(null);
  const chiefComplaintRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const getLabelText = (field: string, isFocused: boolean) => {
    const labels: Record<string, { normal: string; focused: string }> = {
      callerStatement: {
        normal: "The problem is:",
        focused: "Okay, tell me exactly what happened:",
      },
      patientProximity: {
        normal: "With the patient now:",
        focused: "Are you with the patient now?",
      },
      peopleHurt: {
        normal: "The number of hurt (sick) is:",
        focused: "How many people are hurt (sick)?",
      },
      patientAge: {
        normal: "The patient's age is:",
        focused: "How old is the patient?",
      },
      patientGender: {
        normal: "The patient's gender is:",
        focused: "Is the patient a male or female?",
      },
      patientConsciousness: {
        normal: `Is ${
          formData.patientGender === "male"
            ? "he"
            : formData.patientGender === "female"
            ? "she"
            : "he"
        } awake (conscious)?`,
        focused: "Is the patient awake (conscious)?",
      },
      patientBreathing: {
        normal: `Is ${
          formData.patientGender === "male"
            ? "he"
            : formData.patientGender === "female"
            ? "she"
            : "he"
        } breathing?`,
        focused: "Is the patient breathing?",
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

  const sortedComplaintOptions = useMemo(() => {
    const allComplaints = getEMSProtocolOptions();

    const breathingStatus = formData?.patientBreathing?.toLowerCase();
    const consciousness = formData?.patientConsciousness?.toLowerCase();

    const highlight = (complaints: number[]) => {
      const priority = allComplaints.filter((c) =>
        complaints.includes(c.protocol)
      );
      const others = allComplaints.filter(
        (c) => !complaints.includes(c.protocol)
      );

      priority.sort(
        (a, b) =>
          complaints.indexOf(a.protocol) - complaints.indexOf(b.protocol)
      );

      const priorityOptions = priority.map((c) => ({
        value: `${c.protocol} - ${c.value}`,
        label: `${c.label}`,
        className: "bg-red-500/20 hover:bg-red-500/40 transition-colors",
      }));

      const otherOptions = others.map((c) => ({
        value: `${c.protocol} - ${c.value}`,
        label: `${c.label}`,
      }));

      return [...priorityOptions, ...otherOptions];
    };

    if (breathingStatus === "no" || breathingStatus === "ineffective/agonal") {
      return highlight([9, 11, 12, 14, 15]);
    }

    if (consciousness === "no") {
      return highlight([31, 9, 11, 12, 14, 15]);
    }

    return allComplaints.map((c) => ({
      value: `${c.protocol} - ${c.value}`,
      label: `${c.label}`,
    }));
  }, [formData.patientBreathing, formData.patientConsciousness]);

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
    if (isRestoring && initialData?.patientAge !== undefined) {
      setTempAge(initialData.patientAge.toString());
    }
  }, [isRestoring, initialData]);

  useEffect(() => {
    if (formData.patientProximity && !isRestoring) {
      setTimeout(() => {
        const input = numPatientsRef.current;
        input?.focus();
        input?.select();
      }, 50);
    }
  }, [formData.patientProximity]);

  useEffect(() => {
    if (formData.patientGender && !isRestoring) {
      setTimeout(() => patientConsciousnessRef.current?.click(), 50);
    }
  }, [formData.patientGender]);

  useEffect(() => {
    if (formData.patientConsciousness && !isRestoring) {
      setTimeout(() => patientBreathingRef.current?.click(), 50);
    }
  }, [formData.patientConsciousness]);

  useEffect(() => {
    if (formData.patientBreathing && !isRestoring) {
      setTimeout(() => chiefComplaintRef.current?.click(), 50);
      setFocusedField("chiefComplaint");
      setFocusedInput("chiefComplaint");
    }
  }, [formData.patientBreathing]);

  useEffect(() => {
    if (formData.chiefComplaint && !isRestoring) {
      setTimeout(() => {
        nextButtonRef.current?.focus();
      }, 50);
    }
  }, [formData.chiefComplaint]);

  const canEditpatientProximity =
    !settings.strictEntry || !!formData.callerStatement;
  const canEditNumPatients =
    !settings.strictEntry || !!formData.patientProximity;
  const canEditPatientAge = !settings.strictEntry || !!formData.numPatients;
  const canEditPatientGender =
    !settings.strictEntry || !!formData.patientAge || !!tempAge;

  const canEditConsciousness =
    !settings.strictEntry || !!formData.patientGender;

  const canEditBreathing =
    !settings.strictEntry || !!formData.patientConsciousness;

  const canEditChiefComplaint =
    !settings.strictEntry || !!formData.patientBreathing;
  const canSubmitCase =
    !!formData.chiefComplaint &&
    !!formData.patientBreathing &&
    !!formData.patientConsciousness &&
    !!formData.patientGender;

  return (
    <main className="space-y-4">
      <header>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => {
                // Clear all of the current form data
                setFormData({
                  callLocation: `${callDetails?.postal || ""} ${
                    callDetails?.street || ""
                  }`,
                  callerNumber: callDetails?.callerNumber || "",
                  callerStatement: callDetails?.callerStatement || "",
                  patientProximity: "",
                  numPatients: 1,
                  patientAge: 0,
                  ageUnit: "year",
                  patientGender: "",
                  patientConsciousness: "",
                  patientBreathing: "",
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
                setTempAge("");
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
            <p>Restart EMS Case</p>
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

        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2 flex items-center justify-end">
            <Label
              className={`text-sm ${
                focusedInput === "patientProximity"
                  ? "font-bold"
                  : "font-normal"
              }`}
            >
              {getLabelText(
                "patientProximity",
                focusedInput === "patientProximity"
              )}
            </Label>
          </div>
          <div className="col-span-1">
            <Select
              value={formData.patientProximity}
              onValueChange={(value) =>
                handleInputChange("patientProximity", value)
              }
              onOpenChange={(open) => {
                if (open) {
                  setFocusedInput("patientProximity");
                  setFocusedField("patientProximity");
                } else {
                  setFocusedInput("");
                }
              }}
              disabled={!canEditpatientProximity}
            >
              <SelectTrigger className="w-full" ref={callerLocationRef}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="first">First (1st party)</SelectItem>
                <SelectItem value="fourth">Fourth (4th party)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2 row-span-6">
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

          <div className="col-span-2 flex items-center justify-end">
            <Label
              className={`text-sm ${
                focusedInput === "peopleHurt" ? "font-bold" : "font-normal"
              }`}
            >
              {getLabelText("peopleHurt", focusedInput === "peopleHurt")}
            </Label>
          </div>
          <div className="col-span-1">
            <Input
              type="text"
              value={formData.numPatients}
              onChange={(e) => {
                // Clean the input to allow only numbers
                const value = e.target.value.replace(/[^0-9]/g, "");
                handleInputChange("numPatients", value);
              }}
              onFocus={() => {
                setFocusedInput("peopleHurt");
                setFocusedField("peopleHurt");
              }}
              disabled={!canEditNumPatients}
              onBlur={() => setFocusedInput("")}
              ref={numPatientsRef}
            />
          </div>

          <div className="col-span-2 flex items-center justify-end">
            <Label
              className={`text-sm ${
                focusedInput === "patientAge" ? "font-bold" : "font-normal"
              }`}
            >
              {getLabelText("patientAge", focusedInput === "patientAge")}
            </Label>
          </div>

          <div className="col-span-1">
            <div className="flex gap-2">
              <Input
                value={tempAge}
                onChange={(e) => {
                  setTempAge(e.target.value);
                }}
                onFocus={() => {
                  setFocusedInput("patientAge");
                  setFocusedField("patientAge");
                }}
                onBlur={() => {
                  const input = tempAge.trim();

                  const isLikelyDate =
                    /[/-]/.test(input) ||
                    /^\d{4}$/.test(input) ||
                    /^\d{1,2}[/-]\d{1,2}[/-]?\d{0,4}$/.test(input);

                  if (isLikelyDate) {
                    const parsed = calculateAgeFromDate(input);
                    if (parsed) {
                      console.log("Parsed age:", parsed);
                      handleInputChange("ageUnit", parsed.unit);
                      setFormData((prev) => ({
                        ...prev,
                        patientAge: parsed.value,
                        ageUnit: parsed.unit,
                      }));
                      setTempAge(parsed.value.toString());
                      return;
                    }
                  }

                  const numeric = parseInt(input, 10);
                  const safeAge = isNaN(numeric) ? 0 : numeric;

                  setFormData((prev) => ({
                    ...prev,
                    patientAge: safeAge,
                    ageUnit: "year",
                  }));
                  setTempAge(safeAge.toString());
                }}
                placeholder="Age or DOB"
                className="flex-1"
                ref={patientAgeRef}
              />
              <Select
                value={formData.ageUnit}
                onValueChange={(value) => handleInputChange("ageUnit", value)}
                disabled={!canEditPatientAge}
              >
                <SelectTrigger className="w-fit">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="year">year(s)</SelectItem>
                  <SelectItem value="month">month(s)</SelectItem>
                  <SelectItem value="day">day(s)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="col-span-2 flex items-center justify-end">
            <Label
              className={`text-sm ${
                focusedInput === "patientGender" ? "font-bold" : "font-normal"
              }`}
            >
              {getLabelText("patientGender", focusedInput === "patientGender")}
            </Label>
          </div>
          <div className="col-span-1">
            <Select
              value={formData.patientGender}
              onValueChange={(value) =>
                handleInputChange("patientGender", value)
              }
              onOpenChange={(open) => {
                if (open) {
                  setFocusedInput("patientGender");
                  setFocusedField("patientGender");
                } else {
                  setFocusedInput("");
                }
              }}
              disabled={!canEditPatientGender}
            >
              <SelectTrigger className="w-full" ref={patientGenderRef}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="unknown">Unknown</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-2 flex items-center justify-end">
            <Label
              className={`text-sm ${
                focusedInput === "patientConsciousness"
                  ? "font-bold"
                  : "font-normal"
              }`}
            >
              {getLabelText(
                "patientConsciousness",
                focusedInput === "patientConsciousness"
              )}
            </Label>
          </div>
          <div className="col-span-1">
            <Select
              value={formData.patientConsciousness}
              onValueChange={(value) =>
                handleInputChange("patientConsciousness", value)
              }
              onOpenChange={(open) => {
                if (open) {
                  setFocusedInput("patientConsciousness");
                  setFocusedField("patientConsciousness");
                } else {
                  setFocusedInput("");
                }
              }}
              disabled={!canEditConsciousness}
            >
              <SelectTrigger className="w-full" ref={patientConsciousnessRef}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="unknown">Unknown</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-2 flex items-center justify-end">
            <Label
              className={`text-sm ${
                focusedInput === "patientBreathing"
                  ? "font-bold"
                  : "font-normal"
              }`}
            >
              {getLabelText(
                "patientBreathing",
                focusedInput === "patientBreathing"
              )}
            </Label>
          </div>
          <div className="col-span-1">
            <Select
              value={formData.patientBreathing}
              onValueChange={(value) =>
                handleInputChange("patientBreathing", value)
              }
              onOpenChange={(open) => {
                if (open) {
                  setFocusedInput("patientBreathing");
                  setFocusedField("patientBreathing");
                } else {
                  setFocusedInput("");
                }
              }}
              disabled={!canEditBreathing}
            >
              <SelectTrigger className="w-full" ref={patientBreathingRef}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="unknown">Unknown (3rd/4th party)</SelectItem>
                <SelectItem value="uncertain">Uncertain (2nd party)</SelectItem>
                <SelectItem value="agonal/ineffective">
                  INEFFECTIVE/AGONAL
                </SelectItem>
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
                options={sortedComplaintOptions}
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
              ref={nextButtonRef}
              variant="outline"
              onClick={() => onComplete(formData)}
              disabled={!canSubmitCase}
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
