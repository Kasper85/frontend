import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { P as PageHeader } from "./EmptyState-CO4ipWYw.js";
import { d as companyAnalytics, p as postedVacancies } from "./company-BxHeUywR.js";
import { Sparkles, TrendingUp, TrendingDown } from "lucide-react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "@tanstack/react-router";
import "./button-BC9oXVxV.js";
import "@radix-ui/react-slot";
function Analitica() {
  const maxWeekly = Math.max(...companyAnalytics.weeklyApplicants.map((w) => w.v));
  const totalVertical = companyAnalytics.verticalBreakdown.reduce((a, b) => a + b.value, 0);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Analítica", description: "Métricas de reclutamiento, conversión y rendimiento de IA." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsx(Stat, { label: "Time-to-hire", value: "18d", delta: "-3d", up: true }),
      /* @__PURE__ */ jsx(Stat, { label: "Cost per hire", value: "$840", delta: "-$120", up: true }),
      /* @__PURE__ */ jsx(Stat, { label: "Calidad de match", value: "84%", delta: "+6%", up: true }),
      /* @__PURE__ */ jsx(Stat, { label: "Aceptación de oferta", value: "78%", delta: "-2%" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-2 p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Aplicaciones por día" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Últimos 7 días" }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex items-end gap-3 h-48", children: companyAnalytics.weeklyApplicants.map((w) => /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[11px] font-mono text-muted-foreground", children: w.v }),
          /* @__PURE__ */ jsx("div", { className: "w-full bg-primary/20 rounded-t-md relative", style: {
            height: `${w.v / maxWeekly * 100}%`
          }, children: /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-full bg-primary rounded-t-md opacity-80" }) }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: w.d })
        ] }, w.d)) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Por vertical" }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 space-y-3", children: companyAnalytics.verticalBreakdown.map((v) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs mb-1.5", children: [
            /* @__PURE__ */ jsx("span", { children: v.name }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-muted-foreground", children: [
              Math.round(v.value / totalVertical * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-primary", style: {
            width: `${v.value / totalVertical * 100}%`
          } }) })
        ] }, v.name)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Funnel global" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Conversión por etapa" })
        ] }),
        /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "font-mono text-[10px] border-primary/40 text-primary bg-primary/10", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3 mr-1" }),
          " IA reduce -42% el ruido"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: companyAnalytics.funnel.map((s, i) => {
        const max = companyAnalytics.funnel[0].value;
        const pct = s.value / max * 100;
        return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-44 text-xs text-muted-foreground truncate", children: s.stage }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 h-7 rounded-md bg-muted relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-primary/80 rounded-md flex items-center pl-3 text-[11px] font-mono font-semibold text-primary-foreground", style: {
            width: `${pct}%`
          }, children: s.value }) }),
          /* @__PURE__ */ jsx("div", { className: "w-12 text-right text-[11px] font-mono text-muted-foreground", children: i > 0 && `${Math.round(s.value / companyAnalytics.funnel[i - 1].value * 100)}%` })
        ] }, s.stage);
      }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Rendimiento por vacante" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: postedVacancies.filter((v) => v.status === "Activa").map((v) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3 items-center border-b border-border last:border-0 pb-3 last:pb-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", children: v.title }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-muted-foreground", children: v.vertical })
        ] }),
        /* @__PURE__ */ jsx(Mini, { label: "Vistas", value: v.views }),
        /* @__PURE__ */ jsx(Mini, { label: "Aplicaciones", value: v.applicants }),
        /* @__PURE__ */ jsx(Mini, { label: "Conversión", value: `${Math.round(v.shortlisted / v.applicants * 100)}%`, primary: true })
      ] }, v.id)) })
    ] })
  ] });
}
function Stat({
  label,
  value,
  delta,
  up
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "p-5", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 font-mono text-3xl font-bold", children: value }),
    /* @__PURE__ */ jsxs("p", { className: `mt-1 text-[10px] font-mono inline-flex items-center gap-0.5 ${up ? "text-primary" : "text-destructive"}`, children: [
      up ? /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3" }) : /* @__PURE__ */ jsx(TrendingDown, { className: "h-3 w-3" }),
      delta
    ] })
  ] });
}
function Mini({
  label,
  value,
  primary
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", children: label }),
    /* @__PURE__ */ jsx("p", { className: `font-mono text-sm font-semibold ${primary ? "text-primary" : ""}`, children: value })
  ] });
}
export {
  Analitica as component
};
