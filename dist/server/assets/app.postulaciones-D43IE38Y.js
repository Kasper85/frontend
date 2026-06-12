import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { l as listMyApplications } from "./applications-BYsVd1tN.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "@tanstack/react-router";
import "./button-BC9oXVxV.js";
import "@radix-ui/react-slot";
import "./router-DCu-jlWR.js";
import "@tanstack/react-query";
import "sonner";
const statusTone = {
  pending: "bg-muted text-muted-foreground",
  reviewed: "bg-secondary text-secondary-foreground",
  shortlisted: "bg-chart-2/15 text-chart-2 border-chart-2/40",
  rejected: "bg-destructive/15 text-destructive border-destructive/40",
  offered: "bg-primary text-primary-foreground",
  accepted: "bg-primary/15 text-primary border-primary/40",
  withdrawn: "bg-muted text-muted-foreground"
};
function Postulaciones() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    listMyApplications().then((resp) => setApps(resp.data)).catch(() => setApps([])).finally(() => setLoading(false));
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Mis postulaciones", description: loading ? "Cargando..." : `${apps.length} postulaciones.` }),
    loading ? /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Cargando postulaciones..." }) : apps.length === 0 ? /* @__PURE__ */ jsx(Card, { className: "p-10 text-center text-muted-foreground", children: /* @__PURE__ */ jsx("p", { children: "No has postulado a ninguna vacante todavía." }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-muted/40 text-xs font-mono uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Vacante" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Postulada" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4", children: "Estado" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-border", children: apps.map((a) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-muted/40", children: [
          /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: a.job_title ?? a.application.job_id }),
          /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground font-mono text-xs", children: a.application.applied_at?.slice(0, 10) ?? "—" }),
          /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: `font-mono text-[10px] ${statusTone[a.application.status] ?? ""}`, children: a.application.status }) })
        ] }, a.application.id)) })
      ] }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden space-y-3", children: apps.map((a) => /* @__PURE__ */ jsx(Card, { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm flex-1", children: a.job_title ?? a.application.job_id }),
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: `font-mono text-[10px] flex-shrink-0 ${statusTone[a.application.status] ?? ""}`, children: a.application.status })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
          "Postulada el ",
          a.application.applied_at?.slice(0, 10) ?? "—"
        ] })
      ] }) }, a.application.id)) })
    ] })
  ] });
}
export {
  Postulaciones as component
};
