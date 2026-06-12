import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, TrendingUp } from "lucide-react";

export interface NextStep {
  title: string;
  description: string;
  impact: string;
  actionLabel: string;
  actionUrl: string;
  icon?: React.ReactNode;
  priority?: "high" | "medium" | "low";
}

export function NextStepWidget({ step }: { step: NextStep }) {
  const priorityColors = {
    high: "border-red-200 bg-red-50",
    medium: "border-yellow-200 bg-yellow-50",
    low: "border-blue-200 bg-blue-50",
  };

  const priorityBgColor = priorityColors[step.priority || "high"];
  const Icon = step.icon || Sparkles;

  return (
    <Card className={`p-5 sm:p-6 border-2 ${priorityBgColor} transition-shadow hover:shadow-md`}>
      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 grid place-items-center flex-none flex-shrink-0">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h3 className="text-base sm:text-lg font-semibold leading-tight">{step.title}</h3>
            {step.priority === "high" && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-red-200 text-red-900 w-fit">
                <Zap className="h-3 w-3" /> Prioritario
              </span>
            )}
          </div>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{step.description}</p>
          <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-green-700 font-semibold">{step.impact}</span>
          </div>
          <Button asChild size="sm" className="mt-4 w-full sm:w-auto" variant="default">
            <Link to={step.actionUrl}>
              {step.actionLabel}
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
