import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D_u1EXWn.js";
import { P as PageHeader } from "./EmptyState-CO4ipWYw.js";
import { l as listEvaluations, a as listMyEvaluationResults } from "./evaluations-D7Q4VqQC.js";
import { Clock, ChevronRight } from "lucide-react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-tabs";
import "@tanstack/react-router";
import "./router-xyFxSyDz.js";
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
      /* @__PURE__ */ jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxs(TabsTrigger, { value: "catalogo", children: [
          "Catálogo (",
          evals.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxs(TabsTrigger, { value: "historial", children: [
          "Historial (",
          results.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "catalogo", className: "mt-5", children: evals.length === 0 ? /* @__PURE__ */ jsx(Card, { className: "p-10 text-center text-muted-foreground", children: /* @__PURE__ */ jsx("p", { children: "No hay evaluaciones disponibles." }) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: evals.filter((e) => e.is_active).map((ev) => /* @__PURE__ */ jsxs(Card, { className: "p-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: ev.title }),
          /* @__PURE__ */ jsx(Badge, { variant: "outline", children: ev.type })
        ] }),
        ev.description && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mb-3 line-clamp-2", children: ev.description }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
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
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "w-full mt-3", children: /* @__PURE__ */ jsxs("a", { href: `/app/evaluaciones/${ev.id}`, className: "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2", children: [
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 mr-1" }),
          " Tomar"
        ] }) })
      ] }, ev.id)) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "historial", className: "mt-5", children: results.length === 0 ? /* @__PURE__ */ jsx(Card, { className: "p-10 text-center text-muted-foreground", children: /* @__PURE__ */ jsx("p", { children: "No has completado ninguna evaluación." }) }) : /* @__PURE__ */ jsx("div", { className: "space-y-3", children: results.map((r) => /* @__PURE__ */ jsxs(Card, { className: "p-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: r.evaluation_title ?? r.result.evaluation_id }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: r.result.taken_at?.slice(0, 10) ?? "—" })
        ] }),
        /* @__PURE__ */ jsx(Badge, { className: r.result.passed ? "bg-primary text-primary-foreground" : "bg-destructive/15 text-destructive", children: r.result.passed ? `Aprobado (${r.result.score})` : `${r.result.score}` })
      ] }, r.result.id)) }) })
    ] })
  ] });
}
export {
  Evals as component
};
