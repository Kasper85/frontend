import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { g as getJob, u as updateJob, d as deleteJob } from "./jobs-D97xstq7.js";
import { a as listJobApplications, u as updateApplicationStatus } from "./applications-BtzXLEzk.js";
import { c as createInterview } from "./interviews-DYxxGWxG.js";
import { ArrowLeft, MapPin, Pause, Play, X, Users, Sparkles, CalendarPlus } from "lucide-react";
import { toast } from "sonner";
import { i as Route } from "./router-BI82v7Nb.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@tanstack/react-query";
function VacancyDetail() {
  const {
    id
  } = Route.useParams();
  const nav = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [realApps, setRealApps] = useState([]);
  const [schedulingAppId, setSchedulingAppId] = useState(null);
  const [scheduling, setScheduling] = useState(false);
  useEffect(() => {
    getJob(id).then((r) => setJob(r.job)).catch(() => {
    }).finally(() => setLoading(false));
    listJobApplications(id).then((r) => setRealApps(r.data)).catch(() => {
    });
  }, [id]);
  async function handleStatusChange(appId, status) {
    try {
      await updateApplicationStatus(appId, status);
      setRealApps((prev) => prev.map((a) => a.application.id === appId ? {
        ...a,
        application: {
          ...a.application,
          status
        }
      } : a));
      toast.success(`Estado: ${status}`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error");
    }
  }
  async function handleToggleStatus() {
    if (!job) return;
    const newStatus = job.status === "published" ? "draft" : "published";
    try {
      const r = await updateJob(job.id, {
        status: newStatus
      });
      setJob(r.job);
      toast.success(newStatus === "published" ? "Vacante publicada" : "Vacante pausada");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error");
    }
  }
  async function handleClose() {
    if (!job) return;
    try {
      await updateJob(job.id, {
        status: "closed"
      });
      setJob({
        ...job,
        status: "closed"
      });
      toast.success("Vacante cerrada");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error");
    }
  }
  async function handleDelete() {
    if (!job) return;
    if (!confirm("¿Eliminar esta vacante?")) return;
    try {
      await deleteJob(job.id);
      toast.success("Eliminada");
      nav({
        to: "/empresa/vacantes"
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error");
    }
  }
  async function handleScheduleInterview(e, appId) {
    e.preventDefault();
    const form = e.currentTarget;
    const scheduledAt = form.elements.namedItem("scheduled_at").value;
    const duration = form.elements.namedItem("duration_minutes").value;
    const type = form.elements.namedItem("type").value;
    const locationOrLink = form.elements.namedItem("location_or_link").value.trim();
    const notes = form.elements.namedItem("notes").value.trim();
    if (!scheduledAt) {
      toast.error("Selecciona fecha y hora.");
      return;
    }
    setScheduling(true);
    try {
      await createInterview(appId, {
        scheduled_at: new Date(scheduledAt).toISOString(),
        duration_minutes: Number(duration) || 60,
        type,
        location_or_link: locationOrLink || void 0,
        notes: notes || void 0
      });
      toast.success("Entrevista programada");
      setSchedulingAppId(null);
      form.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error al programar entrevista");
    } finally {
      setScheduling(false);
    }
  }
  if (loading) return /* @__PURE__ */ jsx("div", { className: "p-10 text-center text-muted-foreground", children: "Cargando vacante..." });
  if (!job) return /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs(Card, { className: "p-10 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-semibold", children: "Vacante no encontrada" }),
    /* @__PURE__ */ jsx(Button, { asChild: true, className: "mt-4", children: /* @__PURE__ */ jsx(Link, { to: "/empresa/vacantes", children: "Volver" }) })
  ] }) });
  const appsCount = realApps.length;
  const shortlisted = realApps.filter((a) => a.application.status === "shortlisted").length;
  const salaryStr = job.salary_min || job.salary_max ? `${job.salary_min ?? "?"} - ${job.salary_max ?? "?"} ${job.currency}` : "—";
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => nav({
      to: "/empresa/vacantes"
    }), className: "text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
      " Vacantes"
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px] border-primary/40 text-primary bg-primary/10", children: job.status }),
          /* @__PURE__ */ jsx("h1", { className: "mt-2 text-2xl font-bold", children: job.title }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground", children: [
            job.location && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3" }),
              job.location
            ] }),
            /* @__PURE__ */ jsxs("span", { children: [
              "· ",
              job.is_remote ? "Remoto" : "Presencial"
            ] }),
            job.job_type && /* @__PURE__ */ jsxs("span", { children: [
              "· ",
              job.job_type
            ] }),
            /* @__PURE__ */ jsxs("span", { children: [
              "· ",
              salaryStr
            ] }),
            /* @__PURE__ */ jsxs("span", { children: [
              "· ",
              job.created_at?.slice(0, 10)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", onClick: handleToggleStatus, children: job.status === "published" ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Pause, { className: "h-3.5 w-3.5 mr-1" }),
            "Pausar"
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Play, { className: "h-3.5 w-3.5 mr-1" }),
            "Publicar"
          ] }) }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: handleClose, children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5 mr-1" }),
            "Cerrar"
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "text-destructive hover:text-destructive", onClick: handleDelete, children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5 mr-1" }),
            "Eliminar"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
        /* @__PURE__ */ jsx(Stat, { icon: Users, label: "Postulantes", value: appsCount }),
        /* @__PURE__ */ jsx(Stat, { icon: Sparkles, label: "Shortlist", value: shortlisted })
      ] }),
      job.description && /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm whitespace-pre-wrap", children: job.description })
    ] }),
    realApps.length > 0 && /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-primary/5 border-primary/40", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-xs font-mono uppercase tracking-wider text-primary mb-2", children: [
        "Postulantes (",
        realApps.length,
        ")"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: realApps.map((a) => /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-border/60 bg-background/70 p-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: a.job_title ?? a.application.job_id }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px]", children: a.application.status }),
            /* @__PURE__ */ jsx("select", { value: a.application.status, onChange: (e) => handleStatusChange(a.application.id, e.target.value), className: "h-7 rounded border border-input bg-background px-2 text-xs", children: ["pending", "reviewed", "shortlisted", "rejected", "offered", "accepted", "withdrawn"].map((s) => /* @__PURE__ */ jsx("option", { value: s, children: s }, s)) }),
            /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", onClick: () => setSchedulingAppId(schedulingAppId === a.application.id ? null : a.application.id), children: [
              /* @__PURE__ */ jsx(CalendarPlus, { className: "h-3.5 w-3.5 mr-1" }),
              " Programar entrevista"
            ] })
          ] })
        ] }),
        schedulingAppId === a.application.id && /* @__PURE__ */ jsxs("form", { onSubmit: (e) => handleScheduleInterview(e, a.application.id), className: "mt-3 grid gap-3 rounded-md bg-muted/30 p-3 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-xs font-medium", children: [
            "Fecha y hora",
            /* @__PURE__ */ jsx("input", { name: "scheduled_at", type: "datetime-local", required: true, className: "mt-1 h-9 w-full rounded border border-input bg-background px-2 text-sm" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "text-xs font-medium", children: [
            "Duración",
            /* @__PURE__ */ jsx("input", { name: "duration_minutes", type: "number", min: "1", defaultValue: 60, className: "mt-1 h-9 w-full rounded border border-input bg-background px-2 text-sm" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "text-xs font-medium", children: [
            "Tipo",
            /* @__PURE__ */ jsx("select", { name: "type", defaultValue: "video", className: "mt-1 h-9 w-full rounded border border-input bg-background px-2 text-sm", children: ["phone", "video", "in_person", "technical", "hr"].map((t) => /* @__PURE__ */ jsx("option", { value: t, children: t }, t)) })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "text-xs font-medium", children: [
            "Link o ubicación",
            /* @__PURE__ */ jsx("input", { name: "location_or_link", placeholder: "https://meet...", className: "mt-1 h-9 w-full rounded border border-input bg-background px-2 text-sm" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "text-xs font-medium md:col-span-2", children: [
            "Notas",
            /* @__PURE__ */ jsx("textarea", { name: "notes", rows: 3, className: "mt-1 w-full rounded border border-input bg-background px-2 py-2 text-sm" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 md:col-span-2", children: [
            /* @__PURE__ */ jsx(Button, { type: "submit", size: "sm", disabled: scheduling, children: scheduling ? "Programando..." : "Guardar entrevista" }),
            /* @__PURE__ */ jsx(Button, { type: "button", size: "sm", variant: "ghost", onClick: () => setSchedulingAppId(null), children: "Cancelar" })
          ] })
        ] })
      ] }, a.application.id)) })
    ] })
  ] });
}
function Stat({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "p-3 bg-muted/30 flex items-center gap-3", children: [
    /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-muted-foreground" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] font-mono uppercase tracking-wider text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx("p", { className: "font-bold text-lg", children: value })
    ] })
  ] });
}
export {
  VacancyDetail as component
};
