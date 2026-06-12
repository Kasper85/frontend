import { Link } from "@tanstack/react-router";
import type { Certification } from "@/lib/mock/data";
import { ShieldCheck, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Estados de certificación
type CertificationStatus = "declared" | "pending" | "verified" | "rejected";

export function CertificationBadge({
  cert,
  size = "md",
  status = "declared",
}: {
  cert: Certification;
  size?: "sm" | "md" | "lg";
  status?: CertificationStatus;
}) {
  const px = size === "sm" ? 80 : size === "md" ? 120 : 180;

  // Colores y estilos por estado
  const statusConfig = {
    declared: {
      borderColor: "hsl(var(--muted))",
      fillColor: "hsl(var(--muted-foreground))",
      icon: ShieldCheck,
      statusBg: "bg-gray-100",
      statusText: "text-gray-700",
      statusLabel: "Sin verificar",
    },
    pending: {
      borderColor: "hsl(38 92% 50%)",
      fillColor: "hsl(38 92% 50%)",
      icon: Clock,
      statusBg: "bg-amber-100",
      statusText: "text-amber-700",
      statusLabel: "En revisión",
    },
    verified: {
      borderColor: "hsl(142 71% 45%)",
      fillColor: "hsl(142 71% 45%)",
      icon: CheckCircle2,
      statusBg: "bg-green-100",
      statusText: "text-green-700",
      statusLabel: "Verificada ✓",
    },
    rejected: {
      borderColor: "hsl(0 84% 60%)",
      fillColor: "hsl(0 84% 60%)",
      icon: AlertCircle,
      statusBg: "bg-red-100",
      statusText: "text-red-700",
      statusLabel: "Rechazada",
    },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <Link to="/app/certificaciones/$id" params={{ id: cert.id }} className="block">
      <div className="relative" style={{ width: px, height: px }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id={`g-${cert.id}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={config.fillColor} stopOpacity="0.9" />
              <stop offset="100%" stopColor={config.fillColor} stopOpacity="0.4" />
            </linearGradient>
            <filter id={`shadow-${cert.id}`}>
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2" />
            </filter>
          </defs>
          <polygon
            points="50,2 95,25 95,75 50,98 5,75 5,25"
            fill="var(--card)"
            stroke={config.borderColor}
            strokeWidth="2.5"
            filter={`url(#shadow-${cert.id})`}
          />
          <polygon
            points="50,10 88,30 88,70 50,90 12,70 12,30"
            fill={`url(#g-${cert.id})`}
            opacity="0.25"
          />
          <foreignObject x="20" y="30" width="60" height="40">
            <div className="h-full w-full grid place-items-center text-center">
              <div>
                <div
                  className="text-[8px] font-mono uppercase tracking-widest font-bold"
                  style={{ color: config.fillColor }}
                >
                  {cert.level}
                </div>
              </div>
            </div>
          </foreignObject>
        </svg>
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <StatusIcon className="h-1/4 w-1/4" style={{ color: config.fillColor }} />
        </div>
        {status !== "verified" && status !== "declared" && (
          <div
            className={`absolute top-1 right-1 h-2.5 w-2.5 rounded-full border-2 border-white ${status === "pending" ? "bg-amber-400 animate-pulse" : "bg-red-400"}`}
          />
        )}
        {status === "verified" && (
          <div className="absolute top-1 right-1 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-white grid place-items-center">
            <CheckCircle2 className="h-1.5 w-1.5 text-white" />
          </div>
        )}
      </div>
      {size !== "sm" && (
        <div className="mt-2 text-center space-y-1">
          <p className="text-xs font-semibold truncate" style={{ maxWidth: px }}>
            {cert.name}
          </p>
          <Badge
            variant="outline"
            className={`text-[10px] font-medium mx-auto ${config.statusBg} ${config.statusText} border-0`}
          >
            {config.statusLabel}
          </Badge>
        </div>
      )}
    </Link>
  );
}
