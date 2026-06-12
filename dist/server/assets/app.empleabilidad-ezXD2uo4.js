import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { P as Progress } from "./progress-BRG1z6ZI.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { P as PageHeader } from "./EmptyState-CO4ipWYw.js";
import { E as EmployabilityGauge } from "./EmployabilityGauge-DLDwL-8k.js";
import { e as employability } from "./extra-CR7G3y7G.js";
import { ArrowUp, TrendingUp, Trophy, AlertTriangle, Sparkles, Cpu, UserCircle, Award, GraduationCap } from "lucide-react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "@radix-ui/react-progress";
import "@radix-ui/react-slot";
const kindIcon = {
  skill: GraduationCap,
  cert: Award,
  profile: UserCircle,
  challenge: Cpu
};
function Page() {
  const e = employability;
  const delta = e.score - e.previousScore;
  const max = Math.max(...e.history.map((h) => h.score));
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Centro de Empleabilidad IA", description: "¿Por qué no consigo más entrevistas? La IA analiza tu perfil contra miles de vacantes activas." }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6 flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsx(EmployabilityGauge, { value: e.score, size: 220 }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-2 text-sm text-primary font-mono", children: [
          /* @__PURE__ */ jsx(ArrowUp, { className: "h-4 w-4" }),
          " +",
          delta,
          " pts vs mes anterior"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6 lg:col-span-2 space-y-5", children: [
        /* @__PURE__ */ jsx(Metric, { icon: TrendingUp, label: "Probabilidad de recibir entrevista", value: `${e.interviewProbability}%`, detail: "Basado en tu match promedio con vacantes activas." }),
        /* @__PURE__ */ jsx(Metric, { icon: Trophy, label: "Percentil entre candidatos similares", value: `Top ${100 - e.percentile}%`, detail: `Mejor que el ${e.percentile}% de perfiles con tu seniority y stack.` }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2", children: "Tendencia histórica" }),
          /* @__PURE__ */ jsx("div", { className: "flex items-end gap-2 h-24", children: e.history.map((h) => /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("div", { className: "w-full rounded-t bg-primary/70", style: {
              height: `${h.score / max * 100}%`
            } }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-muted-foreground", children: h.month })
          ] }, h.month)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx(Trophy, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Fortalezas" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: e.strengths.map((s) => /* @__PURE__ */ jsxs("li", { className: "flex items-start justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: s.label }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: s.detail })
          ] }),
          s.verified && /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px] border-primary/40 text-primary bg-primary/10", children: "Verificada" })
        ] }, s.label)) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-warning" }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Debilidades" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: e.weaknesses.map((w) => /* @__PURE__ */ jsxs("li", { className: "flex items-start justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: w.label }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: w.detail })
          ] }),
          w.critical && /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px] border-warning/40 text-warning bg-warning/10", children: "Crítica" })
        ] }, w.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Plan de impacto recomendado por IA" })
        ] }),
        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px]", children: "Priorizado por impacto" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: e.recommendations.map((r) => {
        const Icon = kindIcon[r.kind];
        return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-border p-4 flex flex-col md:flex-row md:items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center flex-none", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: r.action }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
              r.reason,
              " · ",
              r.effort
            ] }),
            /* @__PURE__ */ jsx(Progress, { value: Math.min(r.impact * 5, 100), className: "mt-2 h-1.5" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-right flex-none", children: [
            /* @__PURE__ */ jsxs("p", { className: "font-mono text-2xl font-bold text-primary leading-none", children: [
              "+",
              r.impact
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: "pts IA" })
          ] }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "flex-none", children: /* @__PURE__ */ jsx(Link, { to: r.kind === "cert" ? "/app/certificaciones/catalogo" : r.kind === "challenge" ? "/app/challenges" : r.kind === "profile" ? "/app/perfil" : "/app/aprendizaje", children: "Activar" }) })
        ] }, r.id);
      }) })
    ] })
  ] });
}
function Metric({
  icon: Icon,
  label,
  value,
  detail
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsx("div", { className: "h-9 w-9 rounded-md bg-primary/10 text-primary grid place-items-center flex-none", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx("p", { className: "font-mono text-xl font-bold mt-0.5", children: value }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: detail })
    ] })
  ] });
}
export {
  Page as component
};
