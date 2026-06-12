import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { I as Input } from "./input-C0QjszdI.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { l as learningMarketplace } from "./extra-CR7G3y7G.js";
import { useState } from "react";
import { Sparkles, Search, Star, Clock, TrendingUp, Briefcase, ExternalLink } from "lucide-react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "@tanstack/react-router";
function Page() {
  const [q, setQ] = useState("");
  const filtered = learningMarketplace.filter((c) => c.title.toLowerCase().includes(q.toLowerCase()) || c.skill.toLowerCase().includes(q.toLowerCase()));
  const sorted = [...filtered].sort((a, b) => b.employabilityImpact - a.employabilityImpact);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Marketplace de Aprendizaje", description: "Cursos recomendados por IA para cerrar tus brechas y maximizar tu empleabilidad." }),
    /* @__PURE__ */ jsxs(Card, { className: "p-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center bg-primary/5 border-primary/30", children: [
      /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-primary flex-none" }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm flex-1", children: [
        "Basado en tu mapa de skills, te recomendamos enfocarte en",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-primary font-semibold", children: "Kubernetes" }),
        " y",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-primary font-semibold", children: "AWS" }),
        " para maximizar tus matches en vacantes Senior."
      ] }),
      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px] border-primary/40 text-primary bg-primary/10", children: "Personalizado" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Buscar curso o skill...", className: "pl-9" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: sorted.map((c) => /* @__PURE__ */ jsxs(Card, { className: "p-5 flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px]", children: c.provider }),
        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px]", children: c.level })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 font-semibold leading-snug", children: c.title }),
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
        "Skill principal: ",
        /* @__PURE__ */ jsx("span", { className: "font-mono text-foreground", children: c.skill })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mt-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 text-warning" }),
          " ",
          c.rating
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
          " ",
          c.durationHours,
          "h"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          c.students.toLocaleString(),
          " alumnos"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t border-border space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-primary", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3" }),
            " Impacto IA"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "font-mono font-bold text-primary", children: [
            "+",
            c.employabilityImpact,
            " pts"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "h-3 w-3" }),
            " Vacantes"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "font-mono", children: [
            c.relatedVacancies,
            " compatibles"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-mono text-xl font-bold", children: [
          "$",
          c.price
        ] }),
        /* @__PURE__ */ jsxs(Button, { size: "sm", variant: c.affiliate ? "default" : "outline", children: [
          "Ver curso ",
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 ml-1" })
        ] })
      ] }),
      c.affiliate && /* @__PURE__ */ jsx("p", { className: "text-[10px] text-muted-foreground mt-2", children: "Enlace de afiliado" })
    ] }, c.id)) })
  ] });
}
export {
  Page as component
};
