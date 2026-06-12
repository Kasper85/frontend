import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { P as PageHeader } from "./EmptyState-CO4ipWYw.js";
import { C as CandidateCard } from "./CandidateCard-Jl_omsh7.js";
import { t as talentPool } from "./company-BxHeUywR.js";
import { useState } from "react";
import { ShieldCheck, Award, Star, Filter, Sparkles } from "lucide-react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./badge-DyfXZgLs.js";
import "./VerificationBadge-ycbWhl00.js";
const tabs = [{
  id: "verified",
  label: "100% Verificados",
  icon: ShieldCheck,
  filter: (c) => c.verification === "full"
}, {
  id: "partial",
  label: "Parcialmente Verificados",
  icon: ShieldCheck,
  filter: (c) => c.verification === "partial"
}, {
  id: "certified",
  label: "Top Certificados",
  icon: Award,
  filter: (c) => c.certifications >= 4
}, {
  id: "match",
  label: "Top Match",
  icon: Star,
  filter: (c) => (c.match ?? 0) >= 88
}];
function Page() {
  const [tab, setTab] = useState("verified");
  const active = tabs.find((t) => t.id === tab);
  const items = talentPool.filter(active.filter);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Pool de Talento Certificado", description: "El activo B2B de Find Your Job: talento técnico pre-validado, verificado y matcheado por IA.", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxs(Link, { to: "/empresa/talento", children: [
      /* @__PURE__ */ jsx(Filter, { className: "h-3 w-3 mr-1" }),
      "Búsqueda avanzada"
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsx(Stat, { label: "100% Verificados", value: talentPool.filter((c) => c.verification === "full").length }),
      /* @__PURE__ */ jsx(Stat, { label: "Top Certificados (4+)", value: talentPool.filter((c) => c.certifications >= 4).length }),
      /* @__PURE__ */ jsx(Stat, { label: "Score IA medio", value: Math.round(talentPool.reduce((a, c) => a + c.employabilityIndex, 0) / talentPool.length) }),
      /* @__PURE__ */ jsx(Stat, { label: "Disponibles ahora", value: talentPool.filter((c) => c.available).length, accent: true })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "p-5 bg-primary/5 border-primary/30", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-primary flex-none" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Talento pre-validado por IA + Zero Trust" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Todos los candidatos del pool han superado evaluaciones técnicas, validación de identidad y al menos una certificación FYJ." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: tabs.map((t) => {
      const Icon = t.icon;
      return /* @__PURE__ */ jsxs("button", { onClick: () => setTab(t.id), className: `px-3 py-1.5 rounded-md text-xs font-mono border transition-colors inline-flex items-center gap-1.5 ${tab === t.id ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-accent"}`, children: [
        /* @__PURE__ */ jsx(Icon, { className: "h-3 w-3" }),
        " ",
        t.label
      ] }, t.id);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: items.map((c) => /* @__PURE__ */ jsx(CandidateCard, { candidate: c }, c.id)) }),
    items.length === 0 && /* @__PURE__ */ jsx(Card, { className: "p-10 text-center border-dashed", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "No hay candidatos en esta categoría." }) })
  ] });
}
function Stat({
  label,
  value,
  accent
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "p-4", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("p", { className: `font-mono text-3xl font-bold mt-1 ${accent ? "text-primary" : ""}`, children: value })
  ] });
}
export {
  Page as component
};
