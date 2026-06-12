import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";

interface MatchBadgeProps {
  score: number;
  reason?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  interactive?: boolean;
}

export function MatchBadge({
  score,
  reason,
  size = "md",
  showLabel = true,
  interactive = false,
}: MatchBadgeProps) {
  // Configuración por rango de score
  const config = 
    score >= 85 ?
      { bg: "bg-green-50 border-green-200", text: "text-green-700", badge: "bg-green-100 text-green-800", icon: CheckCircle2, label: "Excelente match", variant: "success" } :
    score >= 70 ?
      { bg: "bg-blue-50 border-blue-200", text: "text-blue-700", badge: "bg-blue-100 text-blue-800", icon: TrendingUp, label: "Buen match", variant: "info" } :
    score >= 55 ?
      { bg: "bg-amber-50 border-amber-200", text: "text-amber-700", badge: "bg-amber-100 text-amber-800", icon: AlertCircle, label: "Match parcial", variant: "warning" } :
      { bg: "bg-orange-50 border-orange-200", text: "text-orange-700", badge: "bg-orange-100 text-orange-800", icon: AlertCircle, label: "Match bajo", variant: "destructive" };

  const sizeClass = size === "sm" ? "text-xs px-2 py-0.5" : size === "lg" ? "text-base px-3 py-2" : "text-sm px-2.5 py-1";
  const IconComponent = config.icon;

  const content = (
    <div className="flex items-center gap-2">
      <div className={`${config.badge} rounded px-2 py-1 font-bold ${sizeClass}`}>
        {score}%
      </div>
      {showLabel && <span className={`text-xs font-medium ${config.text}`}>{config.label}</span>}
    </div>
  );

  if (interactive && reason) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="cursor-help">{content}</div>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-xs">
            <p className="text-sm font-medium mb-1">¿Por qué este match?</p>
            <p className="text-xs text-muted-foreground">{reason}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return content;
}
