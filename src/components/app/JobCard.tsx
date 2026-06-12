import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, ChevronRight } from "lucide-react";
import type { Job } from "@/lib/api/types";

export function JobCard({ job, match }: { job: Job; match?: { score: number; reason: string } }) {
  const matchScore = match?.score ?? 75;
  
  // Colores y texto según score
  const matchConfig = 
    matchScore >= 85 ? 
      { bg: "bg-green-50 border-green-200", text: "text-green-700", badge: "bg-green-100 text-green-900", label: "Excelente match" } :
    matchScore >= 70 ?
      { bg: "bg-blue-50 border-blue-200", text: "text-blue-700", badge: "bg-blue-100 text-blue-900", label: "Buen match" } :
    matchScore >= 55 ?
      { bg: "bg-amber-50 border-amber-200", text: "text-amber-700", badge: "bg-amber-100 text-amber-900", label: "Match parcial" } :
      { bg: "bg-orange-50 border-orange-200", text: "text-orange-700", badge: "bg-orange-100 text-orange-900", label: "Match bajo" };
  
  return (
    <Link to="/app/vacantes/$id" params={{ id: job.id }}>
      <Card className={`p-5 sm:p-6 hover:border-primary/40 transition-all h-full hover:shadow-md active:shadow-sm border-2 ${matchConfig.bg}`}>
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-md bg-muted grid place-items-center font-mono font-bold text-sm flex-none flex-shrink-0">
            {job.title.slice(0, 2).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-3 gap-2">
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-base sm:text-sm leading-tight">{job.title}</p>
                {match?.reason && (
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    ✓ {match.reason}
                  </p>
                )}
              </div>
              {match && (
                <div className="flex flex-col items-end gap-1 flex-none">
                  <div className={`px-2.5 py-1 sm:px-2.5 sm:py-1.5 rounded font-bold text-sm whitespace-nowrap ${matchConfig.badge}`}>
                    {matchScore}%
                  </div>
                  <span className={`text-[10px] font-medium ${matchConfig.text}`}>
                    {matchConfig.label}
                  </span>
                </div>
              )}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 text-xs sm:text-[11px] text-muted-foreground">
              {job.location && (
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</span>
              )}
              {job.is_remote && <span>· Remoto</span>}
              {job.job_type && <span>· {job.job_type}</span>}
            </div>
            {matchScore >= 80 && (
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Ver por qué <ChevronRight className="h-3 w-3" />
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
