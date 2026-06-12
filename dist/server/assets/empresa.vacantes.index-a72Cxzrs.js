import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { I as Input } from "./input-C0QjszdI.js";
import { T as Tabs, a as TabsList, b as TabsTrigger } from "./tabs-D_u1EXWn.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-RrXKMtST.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { l as listJobs } from "./jobs-Be14ugK5.js";
import { Plus, Search, Eye } from "lucide-react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-tabs";
import "./router-CmATITWS.js";
import "@tanstack/react-query";
import "sonner";
const statusColor = {
  published: "bg-primary/15 text-primary border-primary/40",
  draft: "bg-muted text-muted-foreground border-border",
  closed: "bg-muted text-muted-foreground border-border",
  archived: "bg-muted text-muted-foreground border-border"
};
function VacantesList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [tab, setTab] = useState("Todas");
  useEffect(() => {
    listJobs({
      limit: "50"
    }).then((resp) => setJobs(resp.data)).catch(() => setJobs([])).finally(() => setLoading(false));
  }, []);
  const filtered = jobs.filter((j) => {
    if (tab !== "Todas" && j.status !== tab) return false;
    if (q && !j.title.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Vacantes", description: "Administra todas las posiciones abiertas y borradores.", children: /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/empresa/vacantes/nueva", children: [
      /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-1" }),
      " Nueva vacante"
    ] }) }) }),
    /* @__PURE__ */ jsx(Card, { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Buscar vacante...", className: "pl-8" })
      ] }),
      /* @__PURE__ */ jsx(Tabs, { value: tab, onValueChange: setTab, children: /* @__PURE__ */ jsxs(TabsList, { children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "Todas", children: "Todas" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "published", children: "Publicadas" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "draft", children: "Borrador" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "closed", children: "Cerradas" })
      ] }) })
    ] }) }),
    loading ? /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Cargando..." }) : /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { children: "Vacante" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Estado" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Tipo" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Ubicación" }),
        /* @__PURE__ */ jsx(TableHead, {})
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: filtered.map((j) => /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableCell, { className: "font-medium", children: j.title }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, { className: statusColor[j.status] ?? "", children: j.status }) }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-muted-foreground", children: j.job_type ?? "—" }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-muted-foreground", children: j.location ?? "—" }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "ghost", children: /* @__PURE__ */ jsx(Link, { to: "/empresa/vacantes/$id", params: {
          id: j.id
        }, children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }) }) }) })
      ] }, j.id)) })
    ] }) })
  ] });
}
export {
  VacantesList as component
};
