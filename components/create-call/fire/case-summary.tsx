import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CIDSData } from "@/data/locations/CIDS";
import { getPostal } from "@/data/locations/postals";
import { getFireResponsePlan } from "@/data/plans/firePlans";
import { IFireCaseEntry } from "@/models/interfaces/IFireCaseEntry";
import { INewCallData } from "@/models/interfaces/INewCallData";
import { ISettings } from "@/models/interfaces/ISettings";
import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import { Ambulance, ArrowRight, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";

interface IFireCaseSummaryProps {
  callDetails: INewCallData;
  fireCase: IFireCaseEntry;
  protocol: IFireComplaint;
  settings: ISettings;
  handleClick: (text: string, navigateTo?: string) => void;
}

export default function FireCaseSummary({
  callDetails,
  fireCase,
  protocol,
  settings,
  handleClick,
}: IFireCaseSummaryProps) {
  const [summaryText, setSummaryText] = useState<string>("");

  const codeMatch = protocol.determinants
    .flatMap((d) => d.codes)
    .find((c) => c.code === fireCase.currentCode);

  const subCodeMatch =
    fireCase.currentSuffix && codeMatch?.subCodes
      ? codeMatch.subCodes.find((s) => s.suffix === fireCase.currentSuffix)
      : null;

  const response = subCodeMatch?.recResponse ?? codeMatch?.recResponse;
  const responsePlan = getFireResponsePlan(response || protocol.defaultPlan);
  const shouldSendPolice = !!responsePlan?.sendPolice;
  const shouldSendEMS = !!responsePlan?.sendEMS;

  const CIDS = CIDSData.find((c) => c.name === fireCase.location);

  useEffect(() => {
    const township = getPostal(callDetails.postal)?.twp;

    const location = `Location: ${callDetails.postal} ${callDetails.street}${
      township ? `, ${township}` : ""
    } ${
      CIDS
        ? `- ${CIDS.name}`
        : callDetails.buildingInfo
        ? `- ${callDetails.buildingInfo}`
        : ""
    }`;

    const crossStreets = `Cross: ${
      callDetails.crossStreet1 ? callDetails.crossStreet1 : ""
    } / ${callDetails.crossStreet2 ? callDetails.crossStreet2 : ""}`;

    const reconfiguration = fireCase.reconfiguredFrom
      ? "-- Call reconfigured from " + fireCase.reconfiguredFrom
      : "";

    const answers =
      fireCase.answers?.map((qa) => `-- ${qa.display}`).filter(Boolean) || [];

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
      `Code: ${fireCase.currentCode !== "DEFAULT_CODE" ? fireCase.currentCode : "Pending"}${
        subCodeMatch?.suffix && fireCase.currentSuffix !== "DEFAULT_SUFFIX"
          ? `${fireCase.currentSuffix}`
          : ""
      }`,
      location,
      fireCase.boxType
        ? `Box: ${fireCase.boxType} Box ${
            getPostal(callDetails.postal)?.fireBox
          }`
        : null,
      crossStreets,
      `Recc: ${responseUnits}`,
      `Disp: Pending`,
      `Problem: ${protocol.shortName} ${codeMatch?.text !== undefined ? `- ${codeMatch.text}` : ""}${
        fireCase.currentSuffix
          ? `${subCodeMatch?.text ? ` - ${subCodeMatch?.text}` : ""}`
          : ""
      }`,
      `Caller Statement: ${callDetails.callerStatement}`,
      "==============================",
      `Scene Status: ${fireCase.secureScene ? "Secure" : "Not Secure"}`,
      "Scene Com: Not Established",
      "Channel: Fire Response",
      "Staging Location: N/A",
      CIDS && fireCase.displayCIDS === "yes" ? `CIDS: ${CIDS.cids} ` : false,
      "==============================",
      callerInfo,
      `ProQA Information:`,
      reconfiguration,
      answers,
      fireCase.questionsCompleted && dispatch,
    ]
      .flat()
      .filter(Boolean)
      .join("\n");

    setSummaryText(text);
  }, [callDetails, fireCase, protocol]);

  return (
    <div>
      <Textarea
        value={summaryText}
        onChange={(e) => setSummaryText(e.target.value)}
        className="w-full min-h-[500px] font-mono text-sm p-4 border rounded-lg resize-none auto-expand"
        style={{ resize: "none" }}
        spellCheck={false}
      />
      <div className="flex justify-end space-x-2 pt-4">
        <Button
          variant="outline"
          onClick={() =>
            handleClick(
              summaryText,
              !fireCase.questionsCompleted ? "kq" : "pdi-cei"
            )
          }
        >
          {fireCase.hasCompletedDisconnect ? "Close Case" : "Dispatch Case"}
          <ArrowRight className="h-4 w-4 text-green-500" />
        </Button>

        {(settings.multiService && shouldSendPolice && (
          <Button
            variant="outline"
            onClick={() => handleClick(summaryText, "police")}
          >
            Dispatch Police <ShieldAlert className="h-4 w-4 text-blue-500" />
          </Button>
        )) ||
          (shouldSendEMS && (
            <Button
              variant="outline"
              onClick={() => handleClick(summaryText, "ems")}
            >
              Dispatch EMS <Ambulance className="h-4 w-4 text-red-500" />
            </Button>
          ))}
      </div>
    </div>
  );
}
