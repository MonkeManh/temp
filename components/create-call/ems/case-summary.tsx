import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getPostal } from "@/data/locations/postals";
import { getEmsResponsePlan } from "@/data/plans/emsPlans";
import { DEFAULT_SETTINGS } from "@/lib/utils";
import { IEMSCaseEntry } from "@/models/interfaces/IEMSCaseEntry";
import { INewCallData } from "@/models/interfaces/INewCallData";
import { ISettings } from "@/models/interfaces/ISettings";
import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface IEMSCaseSummaryProps {
  hasCallback: boolean;
  reconfigured: string;
  callDetails: INewCallData;
  emsCase: IEMSCaseEntry;
  protocol: IEMSComplaint;
  handleClick: (text: string) => void;
}

export default function EMSCaseSummary({
  callDetails,
  emsCase,
  protocol,
  reconfigured,
  handleClick,
  hasCallback
}: IEMSCaseSummaryProps) {
  const [summaryText, setSummaryText] = useState<string>("");

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

    const reconfiguration = reconfigured
      ? "-- Call reconfigured from " + reconfigured
      : "";

    const answers = emsCase.answers?.map((qa) => `-- ${qa.display}`) || [];

    const dispatch = `ProQA completed by: Dispatcher ${
      localStorage.getItem("CALLSIGN") || "Unknown"
    }`;

    const callerInfo = callDetails.callerName
      ? `${callDetails.isLocalCaller ? "Local " : ""}Caller: ${
          callDetails.callerName || "Unknown"
        } | Phone ${callDetails.callerNumber || "Unknown"}`
      : "";

    const codeMatch = protocol.determinants
      .flatMap((d) => d.codes)
      .find((c) => c.code === emsCase.currentCode);

    const subCodeMatch =
      emsCase.currentSuffix && codeMatch?.subCodes
        ? codeMatch.subCodes.find((s) => s.suffix === emsCase.currentSuffix)
        : null;

    const response = subCodeMatch?.recResponse ?? codeMatch?.recResponse;

    const responseText = getEmsResponsePlan(response || 0)?.units;

    const responseUnits =
      responseText
        ?.map((u) => {
          let unitType = u.type;

          if (unitType === "Police Notification") {
            return "Police Notification";
          } else if (unitType === "OFI Notification") {
            return "OFI Notification";
          } else if (unitType === "Fire Notification") {
            return "Fire Notification";
          } else if (unitType === "EMS Notification") {
            return "EMS Notification";
          } else if (unitType === "MEO Notification") {
            return "MEO Notification";
          }

          return `${u.quantity}x ${unitType}`;
        })
        .join(", ") || "No Response Units";

    const text = [
      `Code: ${emsCase.currentCode}`,
      location,
      crossStreets,
      `Recc: ${responseUnits}`,
      `Disp: Pending`,
      `Problem: ${protocol.shortName} - ${
        subCodeMatch?.text ?? codeMatch?.text
      }${
        emsCase.currentSuffix
          ? `${
              emsCase.currentSuffix !== "DEFAULT_SUFFIX"
                ? ` - ${emsCase.currentSuffix}`
                : ""
            }`
          : ""
      }`,
      `Caller Statement: ${callDetails.callerStatement}`,
      "==============================",
      `Scene Status: Secure`,
      "Scene Com: Not Established",
      "Channel: Fire Response",
      "Staging Location: N/A",
      "==============================",
      callerInfo,
      `ProQA Information:`,
      patientInfo,
      reconfiguration,
      answers,
      hasCallback && dispatch,
    ]
      .flat()
      .filter(Boolean)
      .join("\n");

    setSummaryText(text);
  }, [callDetails, emsCase, protocol, reconfigured]);

  return (
    <div>
      <Textarea
        value={summaryText}
        onChange={(e) => setSummaryText(e.target.value)}
        className="w-full min-h-[500px] font-mono text-sm p-4 border rounded-lg resize-none auto-expand"
        style={{ resize: "none" }}
        spellCheck={false}
      />
      <div className="flex justify-end space=x-2 pt-4">
        <Button variant="outline" onClick={() => handleClick(summaryText)}>
          Dispatch Case
          <ArrowRight className="h-4 w-4 text-green-500" />
        </Button>
      </div>
    </div>
  );
}
