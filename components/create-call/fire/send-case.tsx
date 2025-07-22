import { Button } from "@/components/ui/button";
import { getFireResponsePlan } from "@/data/plans/firePlans";
import {
  getPriorityFromCode,
  isOverrideCode,
  isPriorityHigher,
} from "@/lib/utils/fireHelpers";
import { IFireCaseEntry } from "@/models/interfaces/IFireCaseEntry";
import { IFireComplaint } from "@/models/interfaces/protocols/fire/IFireComplaint";
import { ArrowLeft, ArrowRight, ChartPie } from "lucide-react";
import { useState } from "react";

interface SendFireCaseProps {
  recommendedCode: string;
  protocol: IFireComplaint;
  fireCase: IFireCaseEntry;
  hasCallback: boolean;
  handleSend: (code: string, hasCallback: boolean) => void;
  handleDelaySendContinue: (code: string) => void;
  handleBack: () => void;
}

const colorDictionary: Record<string, string> = {
  O: "text-slate-500",
  A: "text-emerald-700",
  B: "text-blue-500",
  C: "text-amber-700",
  D: "text-red-500",
  E: "text-purple-500",
};

export default function SendFireCase({
  recommendedCode,
  protocol,
  fireCase,
  hasCallback,
  handleSend,
  handleDelaySendContinue,
  handleBack,
}: SendFireCaseProps) {
  const getRecResponseForCode = (
    codeString: string,
    suffix?: string
  ): number => {
    const [hoverIndex, setHoverIndex] = useState<number>(0);
    // Find the code object in the protocol determinants
    const codeObj = protocol.determinants
      .flatMap((det) => det.codes)
      .find((code) => code.code === codeString);

    if (!codeObj) return 1; // Default fallback

    // If we have a suffix and the code has subcodes, look for the suffix
    if (suffix && suffix !== "DEFAULT_SUFFIX" && codeObj.subCodes) {
      const subCode = codeObj.subCodes.find((sub) => sub.suffix === suffix);
      if (subCode && subCode.recResponse !== undefined) {
        return subCode.recResponse;
      }
    }

    // Return the default recResponse for the code
    return codeObj.recResponse;
  };

  const tableRows = protocol.determinants.flatMap((determinant) =>
    determinant.codes.map((code, codeIndex) => ({
      priority: codeIndex === 0 ? determinant.priority : null,
      code: code.code,
      text: code.text,
      recResponse: code.recResponse,
      isFirstInPriority: codeIndex === 0,
    }))
  );

  return (
    <div className="p-4 space-y-8">
      {/* Grid of 5 cols */}
      <div className="grid grid-cols-5 gap-4">
        {fireCase.questionsCompleted ? (
          <div className="col-span-3"></div>
        ) : (
          <>
            <Button
              className="col-span-2"
              variant="outline"
              onClick={() => {
                handleDelaySendContinue(recommendedCode);
              }}
            >
              <ChartPie className="w-6 h-6 text-red-500" />
              Delay Send & continue
            </Button>
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="w-6 h-6 text-red-500" />
            </Button>
          </>
        )}

        <Button
          className="col-span-2"
          variant="outline"
          onClick={() => {
            handleSend(recommendedCode, hasCallback);
          }}
        >
          {recommendedCode === fireCase.currentCode ? (
            <>Confirm</>
          ) : fireCase.currentCode !== "DEFAULT_CODE" ? (
            <>Reconfigure</>
          ) : (
            <>Send</>
          )}
          :{" "}
          {recommendedCode &&
            `${parseInt(
              recommendedCode.slice(0, 2),
              10
            )}-${recommendedCode.charAt(2)}-${parseInt(
              recommendedCode.slice(3),
              10
            )}${
              fireCase.currentSuffix &&
              fireCase.currentSuffix !== "DEFAULT_SUFFIX"
                ? `${fireCase.currentSuffix}`
                : ""
            }`}
          <ArrowRight className="w-6 h-6 text-green-500" />
        </Button>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">QA Answers:</h2>
        <div className="p-4 bg-muted/25 rounded-lg space-y-2">
          {fireCase.answers &&
            fireCase.answers.length > 0 &&
            fireCase.answers.map((answer, index) => {
              return (
                <div key={index} className="font-semibold cursor-pointer">
                  {index + 1}.{" "}
                  {answer.questionDisplay.charAt(0).toUpperCase() +
                    answer.questionDisplay.slice(1)}{" "}
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th
                className="text-left py-4 px-4 font-semibold text-muted-foreground"
                colSpan={2}
              >
                Determinants
              </th>
              <th className="text-left py-4 px-4 font-semibold text-muted-foreground border-l-4 border-gray-400">
                Responses
              </th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => {
              const isRecommended = row.code === recommendedCode;
              const currentPriority = recommendedCode
                ? getPriorityFromCode(recommendedCode)
                : "O";
              const rowPriority = getPriorityFromCode(row.code);
              const isHigherPriorityOverride =
                isOverrideCode(row.code) &&
                isPriorityHigher(rowPriority, currentPriority);

              // Only allow the selectable code if it is the same priority as the recommended code
              const isSamePriority = rowPriority === currentPriority;
              const isSelectable =
                (fireCase.selectableCodes.includes(row.code) &&
                  isSamePriority) ||
                (isSamePriority && isOverrideCode(row.code)) ||
                isHigherPriorityOverride;

              return (
                <tr
                  key={`${row.code}-${index}`}
                  className={`rounded-lg font-semibold ${
                    isRecommended
                      ? "bg-green-500 text-black cursor-pointer hover:bg-green-600"
                      : isSelectable
                      ? "bg-yellow-500 text-black cursor-pointer hover:bg-yellow-600"
                      : "text-muted-foreground hover:bg-muted/25"
                  }`}
                  onClick={() => {
                    if (
                      isRecommended ||
                      isHigherPriorityOverride ||
                      fireCase.selectableCodes.includes(row.code)
                    ) {
                      handleSend(row.code, hasCallback);
                    }
                  }}
                >
                  <td className="py-2 px-2 w-12">
                    {row.priority && (
                      <span
                        className={`ml-4 font-bold text-lg ${
                          colorDictionary[row.priority]
                        }`}
                      >
                        {row.priority}
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-2">
                    {parseInt(row.code.slice(-2), 10)} {row.text}
                  </td>
                  <td className="flex items-center py-2 px-2 border-l-4 border-gray-400 text-left">
                    {fireCase.currentSuffix &&
                      fireCase.currentSuffix !== "DEFAULT_SUFFIX" && (
                        <p className="mr-4">{fireCase.currentSuffix}</p>
                      )}
                    {
                      getFireResponsePlan(
                        getRecResponseForCode(row.code, fireCase.currentSuffix)
                      )?.incidentType
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
