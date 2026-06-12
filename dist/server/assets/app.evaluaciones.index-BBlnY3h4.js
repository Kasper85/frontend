import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D_u1EXWn.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { l as listEvaluations, a as listMyEvaluationResults } from "./evaluations-B2Sfwomm.js";
import { Clock, ChevronRight } from "lucide-react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-tabs";
import "@tanstack/react-router";
import "./router-Cqnt14dk.js";
import "@tanstack/react-query";
import "sonner";
function Evals() {
  const [evals, setEvals] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Promise.all([listEvaluations(), listMyEvaluationResults()]).then(([e, r]) => {
      setEvals(e.data.map((item) => item.evaluation));
      setResults(r.data);
    }).catch(() => {
    }).finally(() => setLoading(false));
  }, []);
  if (loading) return /* @__PURE__ */ jsx("div", { className: "p-10 text-center text-muted-foreground", children: "Cargando evaluaciones..." });
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Evaluaciones técnicas", description: "Valida tus skills y desbloquea certificaciones." }),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "catalogo", children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
        /* @__PURE__ */ jsxs(TabsTrigger, { value: "catalogo", className: "text-xs sm:text-sm", children: [
          "Catálogo (",
          evals.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxs(TabsTrigger, { value: "historial", className: "text-xs sm:text-sm", children: [
          "Historial (",
          results.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "catalogo", className: "mt-5", children: evals.length === 0 ? /* @__PURE__ */ jsx(Card, { className: "p-10 text-center text-muted-foreground", children: /* @__PURE__ */ jsx("p", { children: "No hay evaluaciones disponibles." }) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", children: evals.filter((e) => e.is_active).map((ev) => /* @__PURE__ */ jsxs(Card, { className: "p-4 sm:p-5 hover:shadow-md transition-shadow flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm sm:text-base leading-tight", children: ev.title }),
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs w-fit", children: ev.type })
        ] }),
        ev.description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mb-3 line-clamp-2", children: ev.description }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 text-xs text-muted-foreground mb-4 mt-auto", children: [
          ev.duration_minutes && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
            ev.duration_minutes,
            "m"
          ] }),
          ev.max_score && /* @__PURE__ */ jsxs("span", { children: [
            "Max: ",
            ev.max_score
          ] }),
          ev.passing_score && /* @__PURE__ */ jsxs("span", { children: [
            "Aprueba: ",
            ev.passing_score
          ] })
        ] }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "w-full", children: /* @__PURE__ */ jsxs("a", { href: `/app/evaluaciones/${ev.id}`, className: "inline-flex items-center justify-center", children: [
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5 mr-1" }),
          " Tomar"
        ] }) })
      ] }, ev.id)) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "historial", className: "mt-5", children: results.length === 0 ? /* @__PURE__ */ jsx(Card, { className: "p-10 text-center text-muted-foreground", children: /* @__PURE__ */ jsx("p", { children: "No has completado ninguna evaluación." }) }) : /* @__PURE__ */ jsx("div", { className: "space-y-2 sm:space-y-3", children: results.map((r) => /* @__PURE__ */ jsxs(Card, { className: "p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:shadow-sm transition-shadow", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium text-sm sm:text-base", children: r.evaluation_title ?? r.result.evaluation_id }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground", children: r.result.taken_at?.slice(0, 10) ?? "—" })
        ] }),
        /* @__PURE__ */ jsx(Badge, { className: `text-xs sm:text-sm ${r.result.passed ? "bg-primary text-primary-foreground" : "bg-destructive/15 text-destructive"} whitespace-nowrap`, children: r.result.passed ? `Aprobado (${r.result.score})` : `Reprobado (${r.result.score})` })
      ] }, r.result.id)) }) })
    ] })
  ] });
}
export {
  Evals as component
};
