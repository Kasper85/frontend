import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { P as Progress } from "./progress-BRG1z6ZI.js";
import { E as EmployabilityGauge } from "./EmployabilityGauge-DLDwL-8k.js";
import { V as VerificationBadge } from "./VerificationBadge-ycbWhl00.js";
import { J as JobCard } from "./JobCard-Cg6S-ZeW.js";
import { Sparkles, Zap, TrendingUp, ArrowRight, Briefcase, Award, CheckCircle2, BookOpen, ChevronRight, Check } from "lucide-react";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { g as getRecommendations } from "./matching-CbmvLVeI.js";
import { u as user, j as jobs, e as certifications, f as evalHistory, h as applications, l as learningPath } from "./router-DCu-jlWR.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-progress";
import "@tanstack/react-query";
import "sonner";
function NextStepWidget({ step }) {
  const priorityColors = {
    high: "border-red-200 bg-red-50",
    medium: "border-yellow-200 bg-yellow-50",
    low: "border-blue-200 bg-blue-50"
  };
  const priorityBgColor = priorityColors[step.priority || "high"];
  const Icon = step.icon || Sparkles;
  return /* @__PURE__ */ jsx(Card, { className: `p-5 sm:p-6 border-2 ${priorityBgColor} transition-shadow hover:shadow-md`, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start gap-3 sm:gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 grid place-items-center flex-none flex-shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 sm:h-6 sm:w-6 text-primary" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold leading-tight", children: step.title }),
        step.priority === "high" && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-red-200 text-red-900 w-fit", children: [
          /* @__PURE__ */ jsx(Zap, { className: "h-3 w-3" }),
          " Prioritario"
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs sm:text-sm text-muted-foreground", children: step.description }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center gap-2 text-xs sm:text-sm", children: [
        /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-green-600" }),
        /* @__PURE__ */ jsx("span", { className: "text-green-700 font-semibold", children: step.impact })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", className: "mt-4 w-full sm:w-auto", variant: "default", children: /* @__PURE__ */ jsx(Link, { to: step.actionUrl, children: step.actionLabel }) })
    ] })
  ] }) });
}
function Dashboard() {
  const top = jobs.slice(0, 3);
  const next = learningPath.slice(0, 3);
  const [recs, setRecs] = useState([]);
  useEffect(() => {
    getRecommendations({
      limit: "3"
    }).then((r) => setRecs(r.data)).catch(() => {
    });
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: `Hola, ${user.name.split(" ")[0]} 👋`, description: "Este es el estado de tu carrera tech hoy." }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-2 p-5 sm:p-6 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 opacity-10 [background:radial-gradient(circle_at_80%_30%,var(--color-primary),transparent_60%)]" }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:gap-6 items-center", children: [
          /* @__PURE__ */ jsx(EmployabilityGauge, { value: user.employabilityIndex }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-mono uppercase tracking-widest text-primary", children: "Índice de empleabilidad IA" })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-bold", children: "Estás en el top 25% de tu campo" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: "Completa 1 evaluación más y verifica tu identidad para subir a 85+ y desbloquear vacantes Lead." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxs(Link, { to: "/app/evaluaciones", children: [
                "Hacer evaluación ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-3.5 w-3.5" })
              ] }) }),
              /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/app/perfil/editar", children: "Mejorar perfil" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground", children: "Verificación Zero Trust" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(VerificationBadge, { level: user.verification, size: "lg" }) }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-2.5 text-sm", children: [
          /* @__PURE__ */ jsx(CheckItem, { ok: true, label: "Email verificado" }),
          /* @__PURE__ */ jsx(CheckItem, { ok: true, label: "CV analizado con IA" }),
          /* @__PURE__ */ jsx(CheckItem, { ok: true, label: "1 evaluación aprobada" }),
          /* @__PURE__ */ jsx(CheckItem, { label: "Verificación de identidad" }),
          /* @__PURE__ */ jsx(CheckItem, { label: "3+ evaluaciones aprobadas" })
        ] }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "mt-5 w-full", children: /* @__PURE__ */ jsx(Link, { to: "/app/configuracion", children: "Subir nivel" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsx(MetricCard, { icon: Briefcase, label: "Vacantes compatibles", value: jobs.filter((j) => j.match >= 70).length.toString(), delta: "+3 esta semana" }),
      /* @__PURE__ */ jsx(MetricCard, { icon: Award, label: "Certificaciones", value: certifications.length.toString(), delta: "+1 este mes" }),
      /* @__PURE__ */ jsx(MetricCard, { icon: CheckCircle2, label: "Evaluaciones aprobadas", value: `${evalHistory.filter((e) => e.passed).length}/${evalHistory.length}` }),
      /* @__PURE__ */ jsx(MetricCard, { icon: BookOpen, label: "Aprendizaje", value: "32%", progress: 32 })
    ] }),
    /* @__PURE__ */ jsx(NextStepWidget, { step: {
      title: "Desbloquea vacantes Lead",
      description: "Completa 1 evaluación técnica más y verifica tu identidad para subir tu índice a 85+",
      impact: "+10 puntos empleabilidad · Acceso a 24 vacantes Lead",
      actionLabel: "Hacer evaluación ahora",
      actionUrl: "/app/evaluaciones",
      icon: /* @__PURE__ */ jsx(Zap, { className: "h-6 w-6" }),
      priority: "high"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-2 p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Vacantes recomendadas para ti" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Ordenadas por compatibilidad semántica" })
          ] }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxs(Link, { to: "/app/vacantes", children: [
            "Ver todas ",
            /* @__PURE__ */ jsx(ChevronRight, { className: "ml-1 h-3.5 w-3.5" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: top.map((j) => /* @__PURE__ */ jsx(JobCard, { job: j, match: {
          score: j.match,
          reason: j.match >= 80 ? "Tus skills coinciden perfectamente con los requeridos" : j.match >= 60 ? "Tienes la mayoría de los skills requeridos" : "Podrías desarrollar algunos skills adicionales"
        } }, j.id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Próximos pasos" }),
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsx(Link, { to: "/app/learning", children: "Ver más" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: next.map((l) => /* @__PURE__ */ jsxs(Link, { to: "/app/learning", className: "flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer group", children: [
            /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-md bg-primary/10 text-primary grid place-items-center flex-none group-hover:bg-primary/20", children: l.type === "Curso" ? /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4" }) : l.type === "Evaluación" ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Award, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate group-hover:text-primary", children: l.title }),
              /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
                l.type,
                " · ",
                l.skill
              ] }),
              l.progress > 0 && /* @__PURE__ */ jsx(Progress, { value: l.progress, className: "h-1 mt-1.5" })
            ] }),
            /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-primary mt-0.5 flex-none" })
          ] }, l.id)) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Actividad reciente" }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-sm", children: applications.slice(0, 3).map((a) => /* @__PURE__ */ jsxs("li", { className: "flex items-start justify-between gap-3 p-2.5 rounded-lg hover:bg-muted transition-colors group cursor-pointer", children: [
            /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate group-hover:text-primary", children: a.jobTitle }),
              /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
                a.company,
                " · ",
                a.appliedAt
              ] })
            ] }),
            /* @__PURE__ */ jsx(Badge, { variant: a.status === "Entrevista programada" ? "default" : a.status === "Revisión" ? "secondary" : "outline", className: "text-[10px] font-mono whitespace-nowrap", children: a.status })
          ] }, a.id)) })
        ] }),
        recs.length > 0 && /* @__PURE__ */ jsxs(Card, { className: "p-6 border-primary/30", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Recomendaciones IA" }),
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsx(Link, { to: "/app/vacantes", children: "Ver todas" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: recs.map((r) => /* @__PURE__ */ jsx(Link, { to: "/app/vacantes/$id", params: {
            id: r.job.id
          }, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 p-3 rounded-md hover:bg-muted/40", children: [
            /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", children: r.job.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: r.job.location ?? "Remoto" })
            ] }),
            /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "font-mono", children: [
              Math.round(r.match.skills * 0.5 + r.match.evaluations * 0.25 + r.match.experience * 0.15 + r.match.certifications * 0.1),
              "%"
            ] })
          ] }) }, r.job.id)) })
        ] })
      ] })
    ] })
  ] });
}
function CheckItem({
  ok,
  label
}) {
  return /* @__PURE__ */ jsxs("li", { className: `flex items-center gap-2 ${ok ? "" : "text-muted-foreground"}`, children: [
    /* @__PURE__ */ jsx("div", { className: `h-4 w-4 rounded-full grid place-items-center ${ok ? "bg-primary text-primary-foreground" : "bg-muted border border-border"}`, children: ok && /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }) }),
    /* @__PURE__ */ jsx("span", { children: label })
  ] });
}
function MetricCard({
  icon: Icon,
  label,
  value,
  delta,
  progress
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "p-5", "aria-label": `${label}: ${value}${delta ? ` (${delta})` : ""}`, role: "status", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-muted-foreground", "aria-hidden": "true" }),
      delta && /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-mono text-primary flex items-center gap-0.5", "aria-label": `Cambio: ${delta}`, children: [
        /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3", "aria-hidden": "true" }),
        delta
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 font-mono text-3xl font-bold", "aria-live": "polite", children: value }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: label }),
    progress !== void 0 && /* @__PURE__ */ jsx(Progress, { value: progress, className: "h-1 mt-3", "aria-label": `Progreso de ${label}: ${progress}%` })
  ] });
}
export {
  Dashboard as component
};
