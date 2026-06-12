import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { AlertCircle, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { B as Badge } from "./badge-DyfXZgLs.js";
function CertificationBadge({
  cert,
  size = "md",
  status = "declared"
}) {
  const px = size === "sm" ? 80 : size === "md" ? 120 : 180;
  const statusConfig = {
    declared: {
      borderColor: "hsl(var(--muted))",
      fillColor: "hsl(var(--muted-foreground))",
      icon: ShieldCheck,
      bgColor: "hsl(var(--muted)/0.2)",
      statusBg: "bg-gray-100",
      statusText: "text-gray-700",
      statusLabel: "Sin verificar"
    },
    pending: {
      borderColor: "hsl(38 92% 50%)",
      fillColor: "hsl(38 92% 50%)",
      icon: Clock,
      bgColor: "hsl(38 92% 50% / 0.15)",
      statusBg: "bg-amber-100",
      statusText: "text-amber-700",
      statusLabel: "En revisión"
    },
    verified: {
      borderColor: "hsl(142 71% 45%)",
      fillColor: "hsl(142 71% 45%)",
      icon: CheckCircle2,
      bgColor: "hsl(142 71% 45% / 0.15)",
      statusBg: "bg-green-100",
      statusText: "text-green-700",
      statusLabel: "Verificada ✓"
    },
    rejected: {
      borderColor: "hsl(0 84% 60%)",
      fillColor: "hsl(0 84% 60%)",
      icon: AlertCircle,
      bgColor: "hsl(0 84% 60% / 0.15)",
      statusBg: "bg-red-100",
      statusText: "text-red-700",
      statusLabel: "Rechazada"
    }
  };
  const config = statusConfig[status];
  const StatusIcon = config.icon;
  return /* @__PURE__ */ jsxs(Link, { to: "/app/certificaciones/$id", params: { id: cert.id }, className: "block", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", style: { width: px, height: px }, children: [
      /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs("linearGradient", { id: `g-${cert.id}`, x1: "0", y1: "0", x2: "1", y2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: config.fillColor, stopOpacity: "0.9" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: config.fillColor, stopOpacity: "0.4" })
          ] }),
          /* @__PURE__ */ jsx("filter", { id: `shadow-${cert.id}`, children: /* @__PURE__ */ jsx("feDropShadow", { dx: "0", dy: "2", stdDeviation: "3", floodOpacity: "0.2" }) })
        ] }),
        /* @__PURE__ */ jsx(
          "polygon",
          {
            points: "50,2 95,25 95,75 50,98 5,75 5,25",
            fill: "var(--card)",
            stroke: config.borderColor,
            strokeWidth: "2.5",
            filter: `url(#shadow-${cert.id})`
          }
        ),
        /* @__PURE__ */ jsx(
          "polygon",
          {
            points: "50,10 88,30 88,70 50,90 12,70 12,30",
            fill: `url(#g-${cert.id})`,
            opacity: "0.25"
          }
        ),
        /* @__PURE__ */ jsx("foreignObject", { x: "20", y: "30", width: "60", height: "40", children: /* @__PURE__ */ jsx("div", { className: "h-full w-full grid place-items-center text-center", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "text-[8px] font-mono uppercase tracking-widest font-bold", style: { color: config.fillColor }, children: cert.level }) }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid place-items-center pointer-events-none", children: /* @__PURE__ */ jsx(StatusIcon, { className: "h-1/4 w-1/4", style: { color: config.fillColor } }) }),
      status !== "verified" && status !== "declared" && /* @__PURE__ */ jsx("div", { className: `absolute top-1 right-1 h-2.5 w-2.5 rounded-full border-2 border-white ${status === "pending" ? "bg-amber-400 animate-pulse" : "bg-red-400"}` }),
      status === "verified" && /* @__PURE__ */ jsx("div", { className: "absolute top-1 right-1 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-white grid place-items-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-1.5 w-1.5 text-white" }) })
    ] }),
    size !== "sm" && /* @__PURE__ */ jsxs("div", { className: "mt-2 text-center space-y-1", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold truncate", style: { maxWidth: px }, children: cert.name }),
      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: `text-[10px] font-medium mx-auto ${config.statusBg} ${config.statusText} border-0`, children: config.statusLabel })
    ] })
  ] });
}
export {
  CertificationBadge as C
};
