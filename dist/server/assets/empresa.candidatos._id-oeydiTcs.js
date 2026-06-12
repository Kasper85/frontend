import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { P as Progress } from "./progress-BRG1z6ZI.js";
import { V as VerificationBadge, M as MatchBadge } from "./VerificationBadge-ycbWhl00.js";
import { t as talentPool, b as applicants, p as postedVacancies } from "./company-BxHeUywR.js";
import { ArrowLeft, MapPin, Briefcase, CheckCircle2, Sparkles, MessageSquare, CalendarPlus, Award, GraduationCap } from "lucide-react";
import { toast } from "sonner";
import { k as Route } from "./router-BI82v7Nb.js";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-progress";
import "@tanstack/react-query";
function CandidateDetail() {
  const {
    id
  } = Route.useParams();
  const nav = useNavigate();
  const c = talentPool.find((x) => x.id === id);
  if (!c) {
    return /* @__PURE__ */ jsxs(Card, { className: "p-10 text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-semibold", children: "Candidato no encontrado" }),
      /* @__PURE__ */ jsx(Button, { asChild: true, className: "mt-4", children: /* @__PURE__ */ jsx(Link, { to: "/empresa/talento", children: "Volver" }) })
    ] });
  }
  const apps = applicants.filter((a) => a.candidateId === c.id);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => nav({
      to: "/empresa/talento"
    }), className: "text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
      " Talento"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-2 p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-16 w-16 rounded-full bg-primary text-primary-foreground grid place-items-center font-mono font-bold text-xl flex-none", children: c.avatar }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: c.name }),
              /* @__PURE__ */ jsx(VerificationBadge, { level: c.verification, size: "sm" }),
              !c.available && /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-[10px] font-mono", children: "No disponible" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-sm text-muted-foreground", children: c.title }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3" }),
                " ",
                c.location
              ] }),
              /* @__PURE__ */ jsxs("span", { children: [
                "· ",
                c.modality
              ] }),
              /* @__PURE__ */ jsxs("span", { children: [
                "· ",
                c.seniority
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Briefcase, { className: "h-3 w-3" }),
                " ",
                c.experienceYears,
                " años"
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm", children: c.bio })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2", children: "Skills validadas" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: c.skills.map((s) => /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "font-mono text-[11px] border-primary/30 bg-primary/5 text-primary", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 mr-1" }),
              s
            ] }, s)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2", children: "Expectativa salarial" }),
            /* @__PURE__ */ jsx("p", { className: "font-mono text-lg font-semibold", children: c.salaryExpectation }),
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-muted-foreground mt-1", children: [
              c.vertical,
              " · ",
              c.modality
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground", children: "Match con tu vacante" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-4xl font-bold text-primary", children: [
              c.match ?? "—",
              "%"
            ] }),
            /* @__PURE__ */ jsx(MatchBadge, { match: c.match ?? 0, size: "sm" })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: c.match ?? 0, className: "h-1.5 mt-3" }),
          c.matchReasons && /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-1.5 text-xs", children: c.matchReasons.map((r) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-1.5", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3 mt-0.5 text-primary flex-none" }),
            /* @__PURE__ */ jsx("span", { children: r })
          ] }, r)) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-2", children: [
          /* @__PURE__ */ jsxs(Button, { className: "w-full", onClick: () => toast.success("Mensaje enviado al candidato"), children: [
            /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4 mr-1.5" }),
            " Contactar"
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", onClick: () => toast.success("Invitación a entrevista enviada"), children: [
            /* @__PURE__ */ jsx(CalendarPlus, { className: "h-4 w-4 mr-1.5" }),
            " Agendar entrevista"
          ] }),
          /* @__PURE__ */ jsx(Button, { variant: "outline", className: "w-full", onClick: () => toast.success("Guardado en shortlist"), children: "Agregar a shortlist" })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3", children: "Índice IA" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-3xl font-bold", children: c.employabilityIndex }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "/100" })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: c.employabilityIndex, className: "h-1.5 mt-2" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3 text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-border p-2", children: [
              /* @__PURE__ */ jsx(Award, { className: "h-3.5 w-3.5 mx-auto text-primary" }),
              /* @__PURE__ */ jsx("p", { className: "font-mono text-lg font-bold mt-1", children: c.certifications }),
              /* @__PURE__ */ jsx("p", { className: "text-[10px] text-muted-foreground", children: "Certs" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-border p-2", children: [
              /* @__PURE__ */ jsx(GraduationCap, { className: "h-3.5 w-3.5 mx-auto text-primary" }),
              /* @__PURE__ */ jsx("p", { className: "font-mono text-lg font-bold mt-1", children: c.skills.length }),
              /* @__PURE__ */ jsx("p", { className: "text-[10px] text-muted-foreground", children: "Skills" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    apps.length > 0 && /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3", children: "Postulaciones en tu empresa" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: apps.map((a) => {
        const v = postedVacancies.find((x) => x.id === a.vacancyId);
        if (!v) return null;
        return /* @__PURE__ */ jsxs(Link, { to: "/empresa/vacantes/$id", params: {
          id: v.id
        }, className: "flex items-center justify-between gap-3 p-3 rounded-md border border-border hover:border-primary/40", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: v.title }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-muted-foreground", children: a.appliedAt })
          ] }),
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px]", children: a.stage })
        ] }, a.id);
      }) })
    ] })
  ] });
}
export {
  CandidateDetail as component
};
