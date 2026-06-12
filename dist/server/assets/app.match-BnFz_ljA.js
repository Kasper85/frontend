import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { P as Progress } from "./progress-BRG1z6ZI.js";
import { Sparkles, Check, X, Briefcase } from "lucide-react";
import { m as matchExplanation } from "./extra-CR7G3y7G.js";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "@tanstack/react-router";
import "@radix-ui/react-progress";
function MatchBreakdown({
  total,
  factors,
  matched,
  missing,
  audience = "candidate",
  signal
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: audience === "candidate" ? "¿Por qué obtuve este match?" : "¿Por qué recomendamos este candidato?" }),
        /* @__PURE__ */ jsxs("h3", { className: "mt-1 text-lg font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
          " Explicabilidad IA"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-mono text-4xl font-bold text-primary leading-none", children: [
          total,
          "%"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1", children: "Match total" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: factors.map((f) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: f.label }),
          /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "font-mono text-[10px]", children: [
            "peso ",
            f.weight,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "font-mono font-semibold", children: [
          f.score,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx(Progress, { value: f.score, className: "mt-1.5 h-1.5" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: f.detail })
    ] }, f.label)) }),
    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 pt-2 border-t border-border", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2", children: "Skills coincidentes" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: matched.map((s) => /* @__PURE__ */ jsxs(
          "span",
          {
            className: "inline-flex items-center gap-1 rounded-md border border-primary/40 bg-primary/10 text-primary px-2 py-0.5 text-xs font-mono",
            children: [
              /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }),
              " ",
              s
            ]
          },
          s
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2", children: "Brechas detectadas" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
          missing.length === 0 && /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "Ninguna" }),
          missing.map((s) => /* @__PURE__ */ jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1 rounded-md border border-warning/40 bg-warning/10 text-warning px-2 py-0.5 text-xs font-mono",
              children: [
                /* @__PURE__ */ jsx(X, { className: "h-3 w-3" }),
                " ",
                s
              ]
            },
            s
          ))
        ] })
      ] })
    ] }),
    signal && /* @__PURE__ */ jsx("div", { className: "rounded-md border border-primary/40 bg-primary/5 px-3 py-2 text-xs text-primary font-mono", children: signal })
  ] });
}
function Page() {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Explicabilidad del Match IA", description: "Cada match es transparente: los factores, su peso y su evidencia.", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
      /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3 mr-1" }),
      " Recalcular"
    ] }) }),
    /* @__PURE__ */ jsxs(Card, { className: "p-5 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
        /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center flex-none", children: /* @__PURE__ */ jsx(Briefcase, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: "Vacante evaluada" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold truncate", children: matchExplanation.jobTitle }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: matchExplanation.company })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px]", children: "Modelo NLP v2.4" })
    ] }),
    /* @__PURE__ */ jsx(MatchBreakdown, { total: matchExplanation.total, factors: matchExplanation.factors, matched: matchExplanation.matched, missing: matchExplanation.missing, signal: matchExplanation.signal }),
    /* @__PURE__ */ jsxs(Card, { className: "p-5", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3", children: "¿Cómo se calcula?" }),
      /* @__PURE__ */ jsxs("ol", { className: "text-sm text-muted-foreground space-y-2 list-decimal list-inside", children: [
        /* @__PURE__ */ jsx("li", { children: "Extraemos entidades (skills, herramientas, niveles) de la vacante con NLP semántico." }),
        /* @__PURE__ */ jsx("li", { children: "Comparamos contra tu perfil verificado y evidencia de evaluaciones." }),
        /* @__PURE__ */ jsx("li", { children: "Ponderamos por relevancia del rol y por nivel de verificación Zero Trust." }),
        /* @__PURE__ */ jsx("li", { children: "Generamos una explicación auditable para ti y para el reclutador." })
      ] })
    ] })
  ] });
}
export {
  Page as component
};
