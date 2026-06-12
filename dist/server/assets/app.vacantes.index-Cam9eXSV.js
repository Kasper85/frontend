import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { I as Input } from "./input-C0QjszdI.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { J as JobCard } from "./JobCard-Cg6S-ZeW.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { l as listJobs } from "./jobs-D97xstq7.js";
import { Search, ArrowUpDown, Briefcase } from "lucide-react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@tanstack/react-router";
import "./router-BI82v7Nb.js";
import "@tanstack/react-query";
import "sonner";
function LoadingState({ count = 1, className = "", type = "card" }) {
  if (type === "card") {
    return /* @__PURE__ */ jsx("div", { className: `space-y-4 ${className}`, children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ jsx(Card, { className: "p-6 animate-pulse", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-3/4" }),
      /* @__PURE__ */ jsx("div", { className: "h-3 bg-muted rounded w-full" }),
      /* @__PURE__ */ jsx("div", { className: "h-3 bg-muted rounded w-5/6" })
    ] }) }, i)) });
  }
  if (type === "line") {
    return /* @__PURE__ */ jsx("div", { className: `space-y-2 ${className}`, children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ jsx("div", { className: "h-3 bg-muted rounded animate-pulse" }, i)) });
  }
  if (type === "badge") {
    return /* @__PURE__ */ jsx("div", { className: `flex gap-2 flex-wrap ${className}`, children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ jsx("div", { className: "h-6 w-16 bg-muted rounded-full animate-pulse" }, i)) });
  }
  return null;
}
function Vacantes() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("published");
  const [sortBy, setSortBy] = useState("relevance");
  useEffect(() => {
    listJobs({
      status,
      limit: "50"
    }).then((resp) => setJobs(resp.data)).catch(() => setJobs([])).finally(() => setLoading(false));
  }, [status]);
  const filtered = jobs.filter((j) => q === "" || j.title.toLowerCase().includes(q.toLowerCase()) || (j.description ?? "").toLowerCase().includes(q.toLowerCase())).sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime();
    }
    return (b.match ?? 0) - (a.match ?? 0);
  });
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-4 sm:space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Vacantes", description: loading ? "Cargando..." : `${filtered.length} vacantes ${filtered.length === 1 ? "disponible" : "disponibles"}.` }),
    /* @__PURE__ */ jsx(Card, { className: "p-3 sm:p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" }),
          /* @__PURE__ */ jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Buscar por rol, empresa, skills…", className: "pl-8 h-10 text-sm", "aria-label": "Buscar vacantes" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Button, { variant: sortBy === "relevance" ? "default" : "outline", size: "sm", onClick: () => setSortBy("relevance"), className: "text-xs h-10", children: "Relevancia" }),
          /* @__PURE__ */ jsxs(Button, { variant: sortBy === "newest" ? "default" : "outline", size: "sm", onClick: () => setSortBy("newest"), className: "text-xs h-10", children: [
            /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3 w-3 mr-1" }),
            " Nuevas"
          ] })
        ] })
      ] }),
      q && /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
        filtered.length,
        " resultado",
        filtered.length !== 1 ? "s" : "",
        ' para "',
        q,
        '"'
      ] })
    ] }) }),
    loading ? /* @__PURE__ */ jsx(LoadingState, { count: 3, type: "card" }) : filtered.length === 0 ? /* @__PURE__ */ jsxs(Card, { className: "p-8 sm:p-12 text-center border-2 border-dashed", children: [
      /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center mx-auto mb-4", "aria-hidden": "true", children: q ? /* @__PURE__ */ jsx(Search, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Briefcase, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsx("h2", { className: "font-semibold", children: q ? "No se encontraron vacantes" : "Sin vacantes" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: q ? "Intenta otros términos de búsqueda o ajusta los filtros" : "No hay vacantes disponibles en este momento" })
    ] }) : /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:gap-4", role: "list", children: filtered.map((job) => /* @__PURE__ */ jsx("div", { role: "listitem", children: /* @__PURE__ */ jsx(JobCard, { job }) }, job.id)) })
  ] });
}
export {
  Vacantes as component
};
