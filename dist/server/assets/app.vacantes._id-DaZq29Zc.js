import { jsx, jsxs } from "react/jsx-runtime";
import { notFound, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { g as getJob } from "./jobs-DfoeokN3.js";
import { b as applyToJob } from "./applications-BYsVd1tN.js";
import { a as getJobMatch } from "./matching-CbmvLVeI.js";
import { ArrowLeft, MapPin, Briefcase, Sparkles, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";
import { m as Route } from "./router-DCu-jlWR.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@tanstack/react-query";
function Detail() {
  const {
    id
  } = Route.useParams();
  const [job, setJob] = useState(null);
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  useEffect(() => {
    getJob(id).then((resp) => setJob(resp.job)).catch(() => setJob(null)).finally(() => setLoading(false));
    getJobMatch(id).then(setMatch).catch(() => {
    });
  }, [id]);
  async function handleApply() {
    if (!job) return;
    setApplying(true);
    try {
      await applyToJob(job.id);
      toast.success("Postulación enviada");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Error al postular";
      toast.error(msg);
    } finally {
      setApplying(false);
    }
  }
  if (loading) return /* @__PURE__ */ jsx("div", { className: "p-10 text-center text-muted-foreground", children: "Cargando vacante..." });
  if (!job) throw notFound();
  const score = match?.score ?? 0;
  const matchedSkills = match?.matched_skills ?? [];
  const missingSkills = match?.missing_skills ?? [];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/app/vacantes", className: "inline-flex items-center text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-1" }),
      " Volver a vacantes"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 space-y-6", children: /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-md bg-muted grid place-items-center font-mono font-bold flex-none", children: job.title.slice(0, 2).toUpperCase() }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: job.title }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground", children: [
              job.location && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
                job.location
              ] }),
              job.job_type && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Briefcase, { className: "h-3.5 w-3.5" }),
                job.job_type
              ] }),
              job.is_remote && /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Remoto" })
            ] })
          ] })
        ] }),
        job.description && /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed whitespace-pre-wrap", children: job.description }),
        job.requirements && /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm mb-1", children: "Requisitos" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm whitespace-pre-wrap", children: job.requirements })
        ] }),
        job.responsibilities && /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm mb-1", children: "Responsabilidades" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm whitespace-pre-wrap", children: job.responsibilities })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        match && /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Match IA" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-4xl font-bold", children: [
            score,
            "%"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: match.level.replace("_", " ") }),
          matchedSkills.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: "Skills coincidentes" }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 space-y-1", children: matchedSkills.map((s) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-primary flex-none" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono", children: s })
            ] }, s)) })
          ] }),
          missingSkills.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: "Brechas detectadas" }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 space-y-1", children: missingSkills.map((s) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4 text-destructive flex-none" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono", children: s })
            ] }, s)) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsx(Button, { className: "w-full", onClick: handleApply, disabled: applying, children: applying ? "Enviando..." : "Postular ahora" }) })
      ] })
    ] })
  ] });
}
export {
  Detail as component
};
