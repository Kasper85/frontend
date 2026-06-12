import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { P as Progress } from "./progress-BRG1z6ZI.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { M as MatchBadge } from "./VerificationBadge-ycbWhl00.js";
import { p as postedVacancies, b as applicants, t as talentPool, i as interviews, c as company, d as companyAnalytics } from "./company-BxHeUywR.js";
import { Plus, Briefcase, Users, Sparkles, Calendar, ChevronRight, Eye, UserCheck, ArrowRight, TrendingUp } from "lucide-react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-progress";
function EmpresaDashboard() {
  const active = postedVacancies.filter((v) => v.status === "Activa");
  const topApplicants = applicants.map((a) => ({
    ...a,
    cand: talentPool.find((c) => c.id === a.candidateId)
  })).sort((a, b) => b.match - a.match).slice(0, 4);
  const upcoming = interviews.filter((i) => i.status === "Programada").slice(0, 4);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs(PageHeader, { title: `Hola, ${company.recruiter.name.split(" ")[0]} 👋`, description: `Resumen de reclutamiento de ${company.name}.`, children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", children: /* @__PURE__ */ jsx(Link, { to: "/empresa/talento", children: "Buscar talento" }) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxs(Link, { to: "/empresa/vacantes/nueva", children: [
        /* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5 mr-1" }),
        " Nueva vacante"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsx(MetricCard, { icon: Briefcase, label: "Vacantes activas", value: companyAnalytics.activeVacancies.toString(), delta: "+1 esta semana" }),
      /* @__PURE__ */ jsx(MetricCard, { icon: Users, label: "Aplicaciones", value: companyAnalytics.totalApplicants.toString(), delta: "+24 últimos 7d" }),
      /* @__PURE__ */ jsx(MetricCard, { icon: Sparkles, label: "Match promedio IA", value: `${companyAnalytics.avgMatch}%` }),
      /* @__PURE__ */ jsx(MetricCard, { icon: Calendar, label: "Time-to-hire", value: `${companyAnalytics.timeToHire}d`, delta: "-3d vs promedio" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-2 p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Top candidatos por match IA" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Pre-cualificados con Zero Trust verificado" })
          ] }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxs(Link, { to: "/empresa/talento", children: [
            "Ver todos ",
            /* @__PURE__ */ jsx(ChevronRight, { className: "ml-1 h-3.5 w-3.5" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: topApplicants.map((a) => {
          const vac = postedVacancies.find((v) => v.id === a.vacancyId);
          return /* @__PURE__ */ jsx(Link, { to: "/empresa/candidatos/$id", params: {
            id: a.cand.id
          }, className: "block", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 rounded-md border border-border hover:border-primary/40 transition-colors", children: [
            /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-mono font-bold text-xs flex-none", children: a.cand.avatar }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm truncate", children: a.cand.name }),
                /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-[10px] font-mono", children: a.stage })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground truncate", children: [
                a.cand.title,
                " · ",
                vac?.title
              ] })
            ] }),
            /* @__PURE__ */ jsx(MatchBadge, { match: a.match, size: "sm" })
          ] }) }, a.id);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Vacantes activas" }),
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsx(Link, { to: "/empresa/vacantes", children: "Ver más" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: active.slice(0, 3).map((v) => /* @__PURE__ */ jsx(Link, { to: "/empresa/vacantes/$id", params: {
            id: v.id
          }, className: "block p-2.5 rounded-lg hover:bg-muted transition-colors group", children: /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate group-hover:text-primary", children: v.title }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-[11px] text-muted-foreground font-mono", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", title: "Vistas", children: [
                /* @__PURE__ */ jsx(Eye, { className: "h-3 w-3" }),
                " ",
                v.views
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", title: "Aplicaciones", children: [
                /* @__PURE__ */ jsx(Users, { className: "h-3 w-3" }),
                " ",
                v.applicants
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-primary font-medium", title: "Preseleccionados", children: [
                /* @__PURE__ */ jsx(UserCheck, { className: "h-3 w-3" }),
                " ",
                v.shortlisted
              ] })
            ] }),
            /* @__PURE__ */ jsx(Progress, { value: v.shortlisted / Math.max(v.applicants, 1) * 100, className: "h-1" })
          ] }) }, v.id)) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Próximas entrevistas" }),
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsx(Link, { to: "/empresa/entrevistas", children: "Calendario" }) })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: upcoming.map((i) => {
            const c = talentPool.find((t) => t.id === i.candidateId);
            return /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted transition-colors group cursor-pointer", children: [
              /* @__PURE__ */ jsx("div", { className: "h-9 w-9 rounded-md bg-primary/10 text-primary grid place-items-center font-mono text-[10px] flex-none group-hover:bg-primary/20", children: /* @__PURE__ */ jsxs("div", { className: "text-center leading-none", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[8px] uppercase", children: new Date(i.date).toLocaleDateString("es", {
                  month: "short"
                }) }),
                /* @__PURE__ */ jsx("div", { className: "text-sm font-bold mt-0.5", children: new Date(i.date).getDate() })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate group-hover:text-primary", children: c.name }),
                /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
                  i.time,
                  " · ",
                  i.type
                ] })
              ] }),
              /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-muted-foreground flex-none" })
            ] }, i.id);
          }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Funnel de contratación" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Últimos 30 días" })
        ] }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxs(Link, { to: "/empresa/analitica", children: [
          "Ver analítica ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-3.5 w-3.5" })
        ] }) })
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
    ] })
  ] });
}
function MetricCard({
  icon: Icon,
  label,
  value,
  delta
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-muted-foreground" }),
      delta && /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-mono text-primary flex items-center gap-0.5", children: [
        /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3" }),
        delta
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 font-mono text-3xl font-bold", children: value }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: label })
  ] });
}
export {
  EmpresaDashboard as component
};
