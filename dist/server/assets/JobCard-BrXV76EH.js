import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as Card } from "./card-RGlIzTYo.js";
import { MapPin, ChevronRight } from "lucide-react";
function JobCard({ job, match }) {
  const matchScore = match?.score ?? 75;
  const matchConfig = matchScore >= 85 ? { bg: "bg-green-50 border-green-200", text: "text-green-700", badge: "bg-green-100 text-green-900", label: "Excelente match" } : matchScore >= 70 ? { bg: "bg-blue-50 border-blue-200", text: "text-blue-700", badge: "bg-blue-100 text-blue-900", label: "Buen match" } : matchScore >= 55 ? { bg: "bg-amber-50 border-amber-200", text: "text-amber-700", badge: "bg-amber-100 text-amber-900", label: "Match parcial" } : { bg: "bg-orange-50 border-orange-200", text: "text-orange-700", badge: "bg-orange-100 text-orange-900", label: "Match bajo" };
  return /* @__PURE__ */ jsx(Link, { to: "/app/vacantes/$id", params: { id: job.id }, children: /* @__PURE__ */ jsx(Card, { className: `p-5 sm:p-6 hover:border-primary/40 transition-all h-full hover:shadow-md active:shadow-sm border-2 ${matchConfig.bg}`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 sm:gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "h-11 w-11 sm:h-12 sm:w-12 rounded-md bg-muted grid place-items-center font-mono font-bold text-sm flex-none flex-shrink-0", children: job.title.slice(0, 2).toUpperCase() }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-3 gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-base sm:text-sm leading-tight", children: job.title }),
          match?.reason && /* @__PURE__ */ jsxs("p", { className: "mt-1.5 text-xs text-muted-foreground", children: [
            "✓ ",
            match.reason
          ] })
        ] }),
        match && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end gap-1 flex-none", children: [
          /* @__PURE__ */ jsxs("div", { className: `px-2.5 py-1 sm:px-2.5 sm:py-1.5 rounded font-bold text-sm whitespace-nowrap ${matchConfig.badge}`, children: [
            matchScore,
            "%"
          ] }),
          /* @__PURE__ */ jsx("span", { className: `text-[10px] font-medium ${matchConfig.text}`, children: matchConfig.label })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 text-xs sm:text-[11px] text-muted-foreground", children: [
        job.location && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3" }),
          " ",
          job.location
        ] }),
        job.is_remote && /* @__PURE__ */ jsx("span", { children: "· Remoto" }),
        job.job_type && /* @__PURE__ */ jsxs("span", { children: [
          "· ",
          job.job_type
        ] })
      ] }),
      matchScore >= 80 && /* @__PURE__ */ jsxs("div", { className: "mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary", children: [
        "Ver por qué ",
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3" })
      ] })
    ] })
  ] }) }) });
}
export {
  JobCard as J
};
