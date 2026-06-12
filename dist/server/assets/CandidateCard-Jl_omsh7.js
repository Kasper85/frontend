import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { M as MatchBadge, V as VerificationBadge } from "./VerificationBadge-ycbWhl00.js";
import { MapPin, Briefcase, Award } from "lucide-react";
function CandidateCard({ candidate }) {
  return /* @__PURE__ */ jsx(Link, { to: "/empresa/candidatos/$id", params: { id: candidate.id }, children: /* @__PURE__ */ jsx(Card, { className: "p-4 hover:border-primary/40 transition-colors h-full", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-full bg-primary text-primary-foreground grid place-items-center font-mono font-bold text-sm flex-none", children: candidate.avatar }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm leading-tight truncate", children: candidate.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground truncate", children: candidate.title })
        ] }),
        candidate.match !== void 0 && /* @__PURE__ */ jsx(MatchBadge, { match: candidate.match, size: "sm" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3" }),
          " ",
          candidate.location
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "· ",
          candidate.modality
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "· ",
          candidate.seniority
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Briefcase, { className: "h-3 w-3" }),
          " ",
          candidate.experienceYears,
          "a exp"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Award, { className: "h-3 w-3" }),
          " ",
          candidate.certifications,
          " certs"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "font-mono text-primary", children: [
          "IA ",
          candidate.employabilityIndex
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2.5 flex flex-wrap gap-1", children: [
        candidate.skills.slice(0, 5).map((s) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px] px-1.5 py-0", children: s }, s)),
        candidate.skills.length > 5 && /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "font-mono text-[10px] px-1.5 py-0", children: [
          "+",
          candidate.skills.length - 5
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2.5 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(VerificationBadge, { level: candidate.verification, size: "sm" }),
        !candidate.available && /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-muted-foreground", children: "No disponible" })
      ] })
    ] })
  ] }) }) });
}
export {
  CandidateCard as C
};
