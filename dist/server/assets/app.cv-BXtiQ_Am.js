import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { P as Progress } from "./progress-BRG1z6ZI.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { Upload, Loader2, CheckCircle2, FileText, Sparkles, AlertCircle } from "lucide-react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-progress";
import "@tanstack/react-router";
function CV() {
  const [stage, setStage] = useState("idle");
  const [progress, setProgress] = useState(0);
  function start() {
    setStage("analyzing");
    setProgress(0);
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(t);
          setStage("ready");
          return 100;
        }
        return p + 8;
      });
    }, 120);
  }
  return /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "CV Inteligente", description: "Sube tu CV y nuestra IA extraerá skills, experiencia y educación." }),
    stage === "idle" && /* @__PURE__ */ jsxs(Card, { className: "p-10 border-dashed text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto h-14 w-14 rounded-full bg-primary/10 text-primary grid place-items-center", children: /* @__PURE__ */ jsx(Upload, { className: "h-7 w-7" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 font-semibold", children: "Arrastra tu CV aquí" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Formato PDF · Máx 5MB" }),
      /* @__PURE__ */ jsx(Button, { className: "mt-5", onClick: start, children: "Seleccionar archivo" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-muted-foreground font-mono", children: "demo — análisis simulado" })
    ] }),
    stage === "analyzing" && /* @__PURE__ */ jsxs(Card, { className: "p-10 text-center", children: [
      /* @__PURE__ */ jsx(Loader2, { className: "mx-auto h-10 w-10 text-primary animate-spin" }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 font-semibold", children: "Analizando tu CV con IA…" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Extrayendo skills, experiencia y formación" }),
      /* @__PURE__ */ jsx(Progress, { value: progress, className: "mt-5 max-w-md mx-auto h-2" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-2 font-mono text-xs text-muted-foreground", children: [
        progress,
        "%"
      ] })
    ] }),
    stage === "ready" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-5 border-primary/40 bg-primary/5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "Análisis completado" }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Nivel de confianza: ",
            /* @__PURE__ */ jsx("span", { className: "font-mono text-primary", children: "92%" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-muted-foreground", children: "diego_ramirez_cv.pdf" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Skills detectadas" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: [["Go", 98], ["Docker", 96], ["PostgreSQL", 94], ["AWS", 88], ["gRPC", 86], ["Linux", 90], ["TypeScript", 75], ["Terraform", 70], ["Kafka", 65]].map(([s, conf]) => /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "font-mono text-xs", children: [
            s,
            " ",
            /* @__PURE__ */ jsxs("span", { className: "ml-1 text-primary", children: [
              conf,
              "%"
            ] })
          ] }, s)) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Experiencia detectada" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-sm", children: [["Bloomline Fintech", "Senior Backend Engineer", "2022 — Presente"], ["Northwind Cloud", "Backend Engineer", "2019 — 2022"], ["Startup Foo", "Full-Stack Developer", "2017 — 2019"]].map(([c, r, p]) => /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: r }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: c })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-muted-foreground", children: p })
          ] }, c)) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Educación detectada" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Ingeniería en Computación" }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "UNAM · ",
            /* @__PURE__ */ jsx("span", { className: "font-mono", children: "2012 — 2016" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "p-6 border-warning/40 bg-warning/5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-warning" }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Información faltante" })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "text-sm space-y-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: "· Teléfono de contacto" }),
            /* @__PURE__ */ jsx("li", { children: "· Portafolio personal" }),
            /* @__PURE__ */ jsx("li", { children: "· Nivel de inglés" })
          ] }),
          /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "mt-4", children: "Completar manualmente" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => setStage("idle"), children: "Subir otro CV" }),
        /* @__PURE__ */ jsx(Button, { children: "Confirmar y aplicar a mi perfil" })
      ] })
    ] })
  ] });
}
export {
  CV as component
};
