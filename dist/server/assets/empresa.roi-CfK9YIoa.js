import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { P as Progress } from "./progress-BRG1z6ZI.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { r as roiData } from "./extra-CR7G3y7G.js";
import { Clock, DollarSign, Award, Users, Zap, TrendingDown, TrendingUp } from "lucide-react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "@radix-ui/react-progress";
import "@tanstack/react-router";
import "./button-BC9oXVxV.js";
import "@radix-ui/react-slot";
function Page() {
  const r = roiData;
  const timeReduction = Math.round((r.timeToHire.industry - r.timeToHire.fyj) / r.timeToHire.industry * 100);
  const costReduction = Math.round((r.costPerHire.industry - r.costPerHire.fyj) / r.costPerHire.industry * 100);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "ROI Empresarial", description: "Impacto medible de Find Your Job en tu organización vs. benchmarks de industria." }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsx(KPI, { icon: Clock, label: "Time-to-hire", value: `${r.timeToHire.fyj} días`, delta: `-${timeReduction}%`, positive: true, detail: `Industria: ${r.timeToHire.industry} días` }),
      /* @__PURE__ */ jsx(KPI, { icon: DollarSign, label: "Cost-per-hire", value: `$${r.costPerHire.fyj.toLocaleString()}`, delta: `-${costReduction}%`, positive: true, detail: `Industria: $${r.costPerHire.industry.toLocaleString()}` }),
      /* @__PURE__ */ jsx(KPI, { icon: Award, label: "Quality of hire", value: `${r.qualityOfHire.fyj}/10`, delta: `+${(r.qualityOfHire.fyj - r.qualityOfHire.industry).toFixed(1)}`, positive: true, detail: `Industria: ${r.qualityOfHire.industry}/10` }),
      /* @__PURE__ */ jsx(KPI, { icon: Users, label: "Early attrition", value: `${r.earlyAttrition.fyj}%`, delta: `-${r.earlyAttrition.industry - r.earlyAttrition.fyj}pp`, positive: true, detail: `Industria: ${r.earlyAttrition.industry}%` })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Time-to-hire por trimestre" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: r.hireQuarter.map((q) => {
          const max = Math.max(...r.hireQuarter.flatMap((x) => [x.fyj, x.industry]));
          return /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono text-muted-foreground mb-1", children: q.q }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx(Bar, { label: "FYJ", value: q.fyj, max, accent: true }),
              /* @__PURE__ */ jsx(Bar, { label: "Industria", value: q.industry, max })
            ] })
          ] }, q.q);
        }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Eficiencia del funnel" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsx("span", { children: "Find Your Job" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-primary font-bold", children: [
              r.funnelEfficiency.fyj,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: r.funnelEfficiency.fyj, className: "h-2 mt-1" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsx("span", { children: "Industria" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-muted-foreground", children: [
              r.funnelEfficiency.industry,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: r.funnelEfficiency.industry, className: "h-2 mt-1 opacity-60" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-border space-y-3", children: [
          /* @__PURE__ */ jsx(Highlight, { icon: Clock, value: `${r.savings.hours} h`, label: "Ahorro de tiempo del equipo este trimestre" }),
          /* @__PURE__ */ jsx(Highlight, { icon: DollarSign, value: `$${r.savings.money.toLocaleString()}`, label: "Ahorro económico estimado vs. industria" }),
          /* @__PURE__ */ jsx(Highlight, { icon: Zap, value: `${r.csat}%`, label: "CSAT de hiring managers" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6 bg-primary/5 border-primary/30", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: "Resumen ejecutivo" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-2 text-lg leading-relaxed", children: [
        "Find Your Job reduce tu tiempo de contratación en",
        " ",
        /* @__PURE__ */ jsxs("span", { className: "text-primary font-bold", children: [
          timeReduction,
          "%"
        ] }),
        ", baja el costo por contratación en ",
        /* @__PURE__ */ jsxs("span", { className: "text-primary font-bold", children: [
          costReduction,
          "%"
        ] }),
        " y eleva la calidad de contratación a",
        " ",
        /* @__PURE__ */ jsxs("span", { className: "text-primary font-bold", children: [
          r.qualityOfHire.fyj,
          "/10"
        ] }),
        ", con una rotación temprana de solo ",
        /* @__PURE__ */ jsxs("span", { className: "text-primary font-bold", children: [
          r.earlyAttrition.fyj,
          "%"
        ] }),
        "."
      ] })
    ] })
  ] });
}
function KPI({
  icon: Icon,
  label,
  value,
  delta,
  positive,
  detail
}) {
  const Trend = positive ? TrendingDown : TrendingUp;
  return /* @__PURE__ */ jsxs(Card, { className: "p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "h-9 w-9 rounded-md bg-primary/10 text-primary grid place-items-center", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: `font-mono text-[10px] ${positive ? "border-primary/40 text-primary bg-primary/10" : "border-warning/40 text-warning bg-warning/10"}`, children: [
        /* @__PURE__ */ jsx(Trend, { className: "h-3 w-3 mr-1" }),
        " ",
        delta
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("p", { className: "font-mono text-2xl font-bold mt-1", children: value }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: detail })
  ] });
}
function Bar({
  label,
  value,
  max,
  accent
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono w-16 text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 h-4 bg-muted rounded relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: `h-full ${accent ? "bg-primary" : "bg-muted-foreground/40"}`, style: {
      width: `${value / max * 100}%`
    } }) }),
    /* @__PURE__ */ jsxs("span", { className: "text-xs font-mono w-12 text-right", children: [
      value,
      "d"
    ] })
  ] });
}
function Highlight({
  icon: Icon,
  value,
  label
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-primary flex-none" }),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono font-bold text-primary", children: value }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: label })
    ] })
  ] });
}
export {
  Page as component
};
