import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { I as Input } from "./input-C0QjszdI.js";
import { J as JobCard } from "./JobCard-BrXV76EH.js";
import { P as PageHeader } from "./EmptyState-CO4ipWYw.js";
import { l as listJobs } from "./jobs-B76r06TC.js";
import { Search } from "lucide-react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@tanstack/react-router";
import "./button-BC9oXVxV.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./router-xyFxSyDz.js";
import "@tanstack/react-query";
import "sonner";
function Vacantes() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("published");
  useEffect(() => {
    listJobs({
      status,
      limit: "50"
    }).then((resp) => setJobs(resp.data)).catch(() => setJobs([])).finally(() => setLoading(false));
  }, [status]);
  const filtered = jobs.filter((j) => q === "" || j.title.toLowerCase().includes(q.toLowerCase()) || (j.description ?? "").toLowerCase().includes(q.toLowerCase()));
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Vacantes", description: loading ? "Cargando..." : `${filtered.length} vacantes disponibles.` }),
    /* @__PURE__ */ jsx(Card, { className: "p-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-3", children: /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
      /* @__PURE__ */ jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Buscar por rol o empresa…", className: "pl-8" })
    ] }) }) }),
    loading ? /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Cargando vacantes..." }) : filtered.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "No se encontraron vacantes." }) : /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: filtered.map((job) => /* @__PURE__ */ jsx(JobCard, { job }, job.id)) })
  ] });
}
export {
  Vacantes as component
};
