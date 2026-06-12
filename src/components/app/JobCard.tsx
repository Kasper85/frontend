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
    <Link 
      to="/app/vacantes/$id" 
      params={{ id: job.id }} 
      aria-label={`${job.title} - ${matchConfig.label}${match ? ` - ${matchScore}% de compatibilidad` : ''}`}
      className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg transition-all"
    >
      <Card className={`p-4 sm:p-5 md:p-6 hover:border-primary/40 transition-all h-full hover:shadow-md active:shadow-sm border-2 ${matchConfig.bg} cursor-pointer`} role="article">
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
          <div 
            className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-md bg-muted grid place-items-center font-mono font-bold text-sm flex-none flex-shrink-0 min-h-10 min-w-10"
            aria-hidden="true"
          >
            {job.title.slice(0, 2).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col gap-2">
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-sm sm:text-base leading-tight line-clamp-2">{job.title}</h3>
                {match?.reason && (
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    {match.reason}
                  </p>
                )}
              </div>
              {match && (
                <div className="flex items-center justify-between sm:justify-start sm:flex-col sm:items-end gap-2">
                  <div className="flex items-center gap-1.5">
                    <div 
                      className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded font-bold text-sm whitespace-nowrap ${matchConfig.badge}`}
                      role="status"
                      aria-label={`Compatibilidad: ${matchScore} porciento`}
                    >
                      {matchScore}%
                    </div>
                    <span 
                      className={`text-[10px] font-medium ${matchConfig.text}`}
                      aria-live="polite"
                    >
                      {matchConfig.label}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 text-xs text-muted-foreground">
              {job.location && (
                <span className="flex items-center gap-1 min-w-0">
                  <MapPin className="h-3 w-3 flex-shrink-0" aria-hidden="true" /> 
                  <span className="truncate">{job.location}</span>
                </span>
              )}
              {job.is_remote && <span className="flex-shrink-0">Remoto</span>}
              {job.job_type && <span className="flex-shrink-0">·</span>}
              {job.job_type && <span className="truncate">{job.job_type}</span>}
            </div>
            {matchScore >= 80 && (
              <div className="mt-2 sm:mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Ver por qué <ChevronRight className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
