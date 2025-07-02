import { Button } from "@/components/ui/button";
import { getEmsResponsePlan } from "@/data/plans/emsPlans";
import { IEMSCaseEntry } from "@/models/interfaces/IEMSCaseEntry";
import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import { ArrowLeft, ArrowRight, ChartPie } from "lucide-react";

interface IEMSCaseProps {
  recommendedCode: string;
  emsCase: IEMSCaseEntry;
  protocol: IEMSComplaint;
  updateCode: (code: string, copyCase?: boolean) => void;
  onDelaySendContinue?: () => void;
  onBackToQuestions?: () => void;
}

const colorDictionary: Record<string, string> = {
  O: "text-slate-500",
  A: "text-green-500",
  B: "text-blue-500",
  C: "text-yellow-500",
  D: "text-red-500",
  E: "text-purple-500",
};

const getPriorityFromCode = (code: string): string => {
  return code.charAt(2);
};

const isPriorityHigher = (priority1: string, priority2: string): boolean => {
  const priorityOrder = ["O", "A", "B", "C", "D", "E"];
  const index1 = priorityOrder.indexOf(priority1);
  const index2 = priorityOrder.indexOf(priority2);
  return index1 > index2;
};

const isOverrideCode = (code: string): boolean => {
  return code.endsWith("00");
};

export default function SendEMSCase({
  recommendedCode,
  emsCase,
  protocol,
  updateCode,
  onDelaySendContinue,
  onBackToQuestions,
}: IEMSCaseProps) {
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
        <Button
          className="col-span-2"
          variant="outline"
          onClick={() => {
            updateCode(recommendedCode, true);
          }}
        >
          <ChartPie className="w-6 h-6 text-red-500" />
          Delay Send & continue
        </Button>
        <Button variant="outline" onClick={onBackToQuestions}>
          <ArrowLeft className="w-6 h-6 text-red-500" />
        </Button>
        <Button
          className="col-span-2"
          variant="outline"
          onClick={() => {
            updateCode(recommendedCode);
          }}
        >
          Send:{" "}
          {recommendedCode &&
            `${parseInt(
              recommendedCode.slice(0, 2),
              10
            )}-${recommendedCode.charAt(2)}-${parseInt(
              recommendedCode.slice(3),
              10
            )}`}
          <ArrowRight className="w-6 h-6 text-green-500" />
        </Button>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">QA Answers:</h2>
        <div className="p-4 bg-muted/25 rounded-lg space-y-2">
          {emsCase.answers &&
            emsCase.answers.length > 0 &&
            emsCase.answers.map((answer, index) => {
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
                Responses (user-defined)
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

              return (
                <tr
                  key={`${row.code}-${index}`}
                  className={`rounded-lg font-semibold ${
                    isRecommended
                      ? "bg-green-500 text-black cursor-pointer hover:bg-green-600"
                      : isHigherPriorityOverride
                      ? "bg-yellow-500 text-black cursor-pointer hover:bg-yellow-600"
                      : "text-muted-foreground hover:bg-muted/25"
                  }`}
                  onClick={() => {
                    if (isRecommended || isHigherPriorityOverride) {
                      updateCode(row.code);
                    }
                  }}
                >
                  <td className="py-3 px-4 w-12">
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
                  <td className="py-3 px-4">
                    {parseInt(row.code.slice(-2), 10)} {row.text}
                  </td>
                  <td className="py-3 px-4 border-l-4 border-gray-400 text-left">
                    {getEmsResponsePlan(row.recResponse)?.incidentType}
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
