import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { P as PageHeader } from "./EmptyState-CO4ipWYw.js";
import { a as edgeChallenges } from "./extra-CR7G3y7G.js";
import { Cpu, Fingerprint, Shield, Sparkles, Clock, Zap, CheckCircle2 } from "lucide-react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "@tanstack/react-router";
const statusStyle = {
  Disponible: "border-primary/40 text-primary bg-primary/10",
  "En progreso": "border-warning/40 text-warning bg-warning/10",
  Completado: "border-border text-muted-foreground bg-muted",
  Expirado: "border-destructive/40 text-destructive bg-destructive/10"
};
function Page() {
  const available = edgeChallenges.filter((c) => c.status === "Disponible");
  const completed = edgeChallenges.filter((c) => c.status === "Completado");
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Edge AI Challenges", description: "Micro-retos técnicos generados dinámicamente. Únicos para tu perfil, imposibles de copiar." }),
    /* @__PURE__ */ jsx(Card, { className: "p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/30", children: /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-4 text-sm", children: [
      /* @__PURE__ */ jsx(Feature, { icon: Cpu, title: "Edge AI", desc: "El reto se genera en el borde, no en el servidor central." }),
      /* @__PURE__ */ jsx(Feature, { icon: Fingerprint, title: "Seed único", desc: "Cada reto se firma con un identificador irrepetible." }),
      /* @__PURE__ */ jsx(Feature, { icon: Shield, title: "Anti-fraude", desc: "Imposible compartir respuestas: cada candidato recibe variantes distintas." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
        /* @__PURE__ */ jsx("h2", { className: "font-semibold", children: "Disponibles para ti" }),
        /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "font-mono text-[10px]", children: [
          available.length,
          " retos activos"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: available.map((c) => /* @__PURE__ */ jsxs(Card, { className: "p-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: [
              "Generado ",
              c.generatedAt
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "mt-1 font-semibold", children: c.topic }),
            /* @__PURE__ */ jsxs("div", { className: "mt-1.5 flex gap-1.5 flex-wrap", children: [
              /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px]", children: c.vertical }),
              /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px]", children: c.level })
            ] })
          ] }),
          /* @__PURE__ */ jsx("span", { className: `px-2 py-1 rounded-md border text-[10px] font-mono ${statusStyle[c.status]}`, children: c.status })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-3", children: c.description }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
              " ",
              c.durationMin,
              " min"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 font-mono", children: [
              /* @__PURE__ */ jsx(Fingerprint, { className: "h-3 w-3" }),
              " ",
              c.uniqueSeed
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Button, { size: "sm", children: [
            /* @__PURE__ */ jsx(Zap, { className: "h-3 w-3 mr-1" }),
            " Iniciar"
          ] })
        ] })
      ] }, c.id)) })
    ] }),
    completed.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-primary" }),
        /* @__PURE__ */ jsx("h2", { className: "font-semibold", children: "Historial" })
      ] }),
      /* @__PURE__ */ jsx(Card, { className: "divide-y divide-border", children: completed.map((c) => /* @__PURE__ */ jsxs("div", { className: "p-4 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: c.topic }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground font-mono", children: [
            c.uniqueSeed,
            " · ",
            c.generatedAt
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px]", children: c.level }),
          /* @__PURE__ */ jsxs("span", { className: "font-mono text-lg font-bold text-primary", children: [
            c.score,
            "/100"
          ] })
        ] })
      ] }, c.id)) })
    ] })
  ] });
}
function Feature({
  icon: Icon,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsx("div", { className: "h-9 w-9 rounded-md bg-primary/15 text-primary grid place-items-center flex-none", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: desc })
    ] })
  ] });
}
export {
  Page as component
};
