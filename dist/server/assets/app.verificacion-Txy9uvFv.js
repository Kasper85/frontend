import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { P as Progress } from "./progress-BRG1z6ZI.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { V as VerificationBadge } from "./VerificationBadge-ycbWhl00.js";
import { z as zeroTrustRequirements } from "./extra-CR7G3y7G.js";
import { ShieldCheck, CheckCircle2, Circle, Lock } from "lucide-react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "@radix-ui/react-progress";
function Page() {
  const totalWeight = zeroTrustRequirements.reduce((a, r) => a + r.weight, 0);
  const earned = zeroTrustRequirements.filter((r) => r.done).reduce((a, r) => a + r.weight, 0);
  const pct = Math.round(earned / totalWeight * 100);
  const level = pct >= 100 ? "full" : pct >= 60 ? "partial" : "none";
  const pending = zeroTrustRequirements.filter((r) => !r.done);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Verificación Zero Trust", description: "Cuanto más verificado tu perfil, más vacantes premium desbloqueas y mayor confianza generan las empresas." }),
    /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center gap-6 justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "font-semibold", children: "Tu estado actual" })
        ] }),
        /* @__PURE__ */ jsx(VerificationBadge, { level, size: "lg" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground max-w-md", children: [
          "Completa los pasos restantes para alcanzar el nivel",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-primary font-semibold", children: "100% Verificado" }),
          " y aparecer en el Top Talento Verificado de las empresas."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:w-72", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm mb-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Progreso Zero Trust" }),
          /* @__PURE__ */ jsxs("span", { className: "font-mono font-bold text-primary text-lg", children: [
            pct,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx(Progress, { value: pct, className: "h-3" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-2 font-mono", children: [
          zeroTrustRequirements.filter((r) => r.done).length,
          " de ",
          zeroTrustRequirements.length,
          " ",
          "requisitos completados"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsx(LevelCard, { active: pct < 60, done: false, title: "No Verificado", desc: "Acceso básico a la plataforma. Visibilidad limitada para empresas.", min: "0%" }),
      /* @__PURE__ */ jsx(LevelCard, { active: pct >= 60 && pct < 100, done: pct >= 60, title: "Parcialmente Verificado", desc: "Apareces en búsquedas. Match elevado en vacantes Junior y Semi-Senior.", min: "60%" }),
      /* @__PURE__ */ jsx(LevelCard, { active: pct >= 100, done: pct >= 100, title: "100% Verificado", desc: "Top Talento. Acceso a vacantes premium, success fee y ofertas confidenciales.", min: "100%", premium: true })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Checklist de requisitos" }),
      /* @__PURE__ */ jsx("ul", { className: "divide-y divide-border", children: zeroTrustRequirements.map((r) => /* @__PURE__ */ jsxs("li", { className: "py-3 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
          r.done ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-primary flex-none" }) : /* @__PURE__ */ jsx(Circle, { className: "h-5 w-5 text-muted-foreground flex-none" }),
          /* @__PURE__ */ jsx("span", { className: r.done ? "text-sm" : "text-sm font-medium", children: r.label })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 flex-none", children: [
          /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "font-mono text-[10px]", children: [
            "+",
            r.weight,
            " pts"
          ] }),
          !r.done && /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", children: "Completar" })
        ] })
      ] }, r.id)) })
    ] }),
    pending.length > 0 && /* @__PURE__ */ jsx(Card, { className: "p-6 bg-warning/5 border-warning/30", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5 text-warning flex-none mt-0.5" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Próximo paso recomendado" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
          pending[0].label,
          " — sumaría",
          " ",
          /* @__PURE__ */ jsxs("span", { className: "text-warning font-mono font-bold", children: [
            "+",
            pending[0].weight,
            " pts"
          ] }),
          " a tu nivel Zero Trust."
        ] }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", className: "mt-3", children: /* @__PURE__ */ jsx(Link, { to: "/app/empleabilidad", children: "Ver plan completo" }) })
      ] })
    ] }) })
  ] });
}
function LevelCard({
  active,
  done,
  title,
  desc,
  min,
  premium
}) {
  return /* @__PURE__ */ jsxs(Card, { className: `p-5 ${active ? "border-primary ring-1 ring-primary/40" : ""} ${premium ? "bg-primary/5" : ""}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: `font-mono text-[10px] ${done ? "border-primary/40 text-primary bg-primary/10" : ""}`, children: min }),
      active && /* @__PURE__ */ jsx(Badge, { className: "font-mono text-[10px]", children: "Actual" })
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "mt-3 font-semibold", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: desc })
  ] });
}
export {
  Page as component
};
