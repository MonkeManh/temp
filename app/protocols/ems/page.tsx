"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { emsProtocols } from "@/data/protocols/emsProtocols";
import { IEMSComplaint } from "@/models/interfaces/protocols/ems/IEMSComplaint";
import { IEMSAnswers } from "@/models/interfaces/protocols/ems/IEMSAnswers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const priorityColors = {
  O: "bg-slate-500 text-white",
  A: "bg-green-500 text-white",
  B: "bg-blue-500 text-white",
  C: "bg-yellow-500 text-black",
  D: "bg-red-500 text-white",
  E: "bg-purple-500 text-white",
};

const priorityNames = {
  O: "Omega",
  A: "Alpha",
  B: "Bravo",
  C: "Charlie",
  D: "Delta",
  E: "Echo",
};

function getPriorityBadgeClass(priority: boolean | number | undefined): string {
  if (typeof priority === "boolean") {
    return priority ? "bg-green-500 text-green-100" : "bg-muted-foreground";
  }
  switch (priority) {
    case 0:
      return "bg-purple-500 text-white";
    case 1:
      return "bg-red-500";
    case 2:
      return "bg-yellow-500 text-black";
    case 3:
      return "bg-blue-500 text-white";
    case 4:
      return "bg-green-500 text-white";
    case 5:
      return "bg-slate-500 text-white";
    default:
      return "bg-muted";
  }
}

function getPriorityLabel(priority: boolean | number | undefined): string {
  if (typeof priority === "boolean") {
    return priority ? "Always Responds" : "No Response";
  }
  return priority !== undefined
    ? priority === 0
      ? "Echo Level"
      : `Priority ${priority}`
    : "Depends on Situation";
}

function ServicesList({ services }: { services: IEMSComplaint["services"] }) {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-sm">Services & Response Priority:</h4>
      <div className="grid gap-2">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex justify-between items-center p-2 bg-muted rounded"
          >
            <span className="font-medium">{service.name}</span>
            <Badge
              variant="outline"
              className={getPriorityBadgeClass(service.priority)}
            >
              {getPriorityLabel(service.priority)}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnswerItem({ answer }: { answer: IEMSAnswers }) {
  const actionBadges = [
    {
      condition: answer.continue,
      label: "Continue",
      className: "bg-blue-100 text-blue-800",
    },
    {
      condition: answer.end,
      label: "End",
      className: "bg-gray-100 text-gray-800",
    },
    {
      condition: answer.send,
      label: "Send",
      className: "bg-red-100 text-red-800",
    },
    {
      condition: answer.input,
      label: "Input Required",
      className: "bg-purple-100 text-purple-800",
    },
    {
      condition: answer.updateCode,
      label: `Code: ${answer.updateCode}`,
      className: "bg-orange-100 text-orange-800",
    },
    {
      condition: answer.gotoProtocol,
      label: `→ Protocol ${answer.gotoProtocol}`,
      className: "bg-indigo-100 text-indigo-800",
    },
    {
      codition: answer.gotoInstruction,
      label: `→ Instruction ${answer.gotoInstruction}`,
      className: "bg-teal-100 text-teal-800",
    },
    {
      condition: answer.gotoQuestion,
      label: `→ Question ${answer.gotoQuestion}`,
      className: "bg-pink-100 text-pink-800",
    },
  ];

  return (
    <div className="ml-4 p-3 bg-muted/50 rounded border-l-2 border-blue-200">
      <div className="flex flex-wrap gap-2 items-start">
        <Badge variant="outline" className="text-xs">
          {answer.answer}
        </Badge>
        <span className="text-sm text-muted-foreground">
          → {answer.display}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap gap-1">
        {actionBadges
          .filter(({ condition }) => condition)
          .map(({ label, className }, idx) => (
            <Badge key={idx} className={`text-xs ${className}`}>
              {label}
            </Badge>
          ))}
      </div>

      {answer.preRenderLogic && (
        <div className="mt-2 p-2 bg-yellow-50 rounded text-xs">
          <strong>Condition:</strong> {answer.preRenderLogic}
        </div>
      )}

      {answer.dependencyLogic && (
        <div className="mt-2 p-2 bg-blue-900/25 rounded text-xs">
          <strong>Dependency:</strong> {answer.dependencyLogic}
        </div>
      )}
    </div>
  );
}

function QuestionsList({
  questions,
}: {
  questions: IEMSComplaint["questions"];
}) {
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(new Set());

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) => {
      const newSet = new Set(prev);
      newSet.has(index) ? newSet.delete(index) : newSet.add(index);
      return newSet;
    });
  };

  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-sm">Protocol Questions:</h4>
      {questions.map((question, index) => {
        const isOpen = openQuestions.has(index);
        return (
          <div key={index} className="border rounded-lg bg-card">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full p-4 text-left hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between"
            >
              <div className="flex items-start gap-3">
                <Badge className="text-xs bg-slate-100 text-slate-800 min-w-fit">
                  Q{index + 1}
                </Badge>
                <div className="flex-1 text-sm font-medium">
                  {question.text}
                </div>
              </div>
              {isOpen ? (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              )}
            </button>

            {isOpen && (
              <div className="px-4 py-4 border-t">
                <div className="mb-6 flex items-center gap-2">
                  <p className="text-xs">Question Type:</p>
                  <Badge className="text-xs bg-muted text-muted-foreground">
                    {question.questionType}
                  </Badge>
                </div>

                {question.preRenderLogic && (
                  <div className="mb-6 p-3 bg-blue-900/25 rounded text-xs">
                    <strong>Show when:</strong> {question.preRenderLogic}
                  </div>
                )}

                <div className="space-y-2 mb-3">
                  <div className="text-xs font-medium text-muted-foreground">
                    Possible Answers:
                  </div>
                  {question.answers.map((answer, answerIndex) => (
                    <AnswerItem key={answerIndex} answer={answer} />
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function DeterminantsList({
  determinants,
}: {
  determinants: IEMSComplaint["determinants"];
}) {
  const getBorderColor = (priority: keyof typeof priorityColors): string => {
    switch (priority) {
      case "O":
        return "#64748b"; // Slate
      case "A":
        return "#22c55e"; // Green
      case "B":
        return "#3b82f6"; // Blue
      case "C":
        return "#eab308"; // Yellow
      case "D":
        return "#ef4444"; // Red
      case "E":
      default:
        return "#a855f7"; // Purple
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-sm">Determinant Codes:</h4>
      {determinants.map((determinant, index) => (
        <div key={index} className="border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Badge
              className={`${priorityColors[determinant.priority]} font-medium`}
            >
              {determinant.priority}
            </Badge>
            <span className="text-sm font-medium">
              {priorityNames[determinant.priority]}
            </span>
          </div>

          <div className="space-y-2">
            {determinant.codes.map((code, codeIndex) => (
              <div
                key={codeIndex}
                className="p-3 bg-muted/30 rounded border-l-4"
                style={{
                  borderLeftColor: getBorderColor(determinant.priority),
                }}
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs font-mono">
                        {code.code}
                      </Badge>
                      {code.defaultCode && (
                        <Badge className="text-xs bg-blue-100 text-blue-800">
                          Default
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm flex items-center gap-1">
                      {code.text.includes("Override") && (
                        <Star className="text-yellow-500 w-4 h-4" />
                      )}
                      {code.text}
                    </div>
                  </div>
                  <Badge className="text-xs bg-gray-100 text-gray-800">
                    Response: {code.recResponse}
                  </Badge>
                </div>

                {code.subCodes && code.subCodes?.length > 0 && (
                  <div className="mt-2 ml-4">
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <button className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                          <ChevronRight className="h-3 w-3" />
                          Sub-codes ({code.subCodes.length})
                        </button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 space-y-1">
                        {code.subCodes.map((subCode, subIndex) => (
                          <div
                            key={subIndex}
                            className="flex justify-between items-center p-2 bg-muted rounded text-xs"
                          >
                            <span>
                              <Badge
                                variant="outline"
                                className="text-xs font-mono mr-2"
                              >
                                {subCode.suffix}
                              </Badge>
                              {subCode.text}
                            </span>
                            {subCode.recResponse && (
                              <Badge className="text-xs">
                                Response: {subCode.recResponse}
                              </Badge>
                            )}
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProtocolCard({ protocol }: { protocol: IEMSComplaint }) {
  const [isOpen, setIsOpen] = useState(false);
  const paddedProtocol = protocol.protocol.toString().padStart(2, "0");
  const defaultPriority = protocol.defaultPriority;
  const defaultPriorityClass = priorityColors[defaultPriority];
  const defaultPriorityName = priorityNames[defaultPriority];

  return (
    <Card className="w-full py-2 rounded-sm">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="-my-2">
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors duration-200 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary text-primary-foreground font-mono">
                  {paddedProtocol}
                </Badge>
                <div>
                  <CardTitle className="text-lg">{protocol.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Short Name: {protocol.shortName}
                  </p>
                </div>
              </div>
              {isOpen ? (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="space-y-6 py-4">
            {protocol.description && (
              <div>
                <h4 className="font-bold text-md mb-2">Description:</h4>
                <span className="text-sm text-muted-foreground">
                  {protocol.description}
                </span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-sm">Default Priority:</h4>
              <Badge className={defaultPriorityClass}>
                {defaultPriority} - {defaultPriorityName}
              </Badge>
            </div>

            {protocol.services?.length > 0 && (
              <ServicesList services={protocol.services} />
            )}

            {protocol.determinants?.length > 0 && (
              <DeterminantsList determinants={protocol.determinants} />
            )}

            {protocol.questions?.length > 0 && (
              <QuestionsList questions={protocol.questions} />
            )}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

export default function ProtocolsPage() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto py-8 px-4 min-h-[100vh]">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">EMS Protocols</h1>
          <p className="text-muted-foreground">
            Emergency Medical Services dispatch protocols with determinant codes
            and response priorities.
          </p>

          <div className="mt-4 p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold text-sm mb-2">
              Priority Color Legend:
            </h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(priorityNames).map(([key, name]) => (
                <Badge
                  key={key}
                  className={priorityColors[key as keyof typeof priorityColors]}
                >
                  {key} - {name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {emsProtocols.map((protocol) => (
            <ProtocolCard key={protocol.protocol} protocol={protocol} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
