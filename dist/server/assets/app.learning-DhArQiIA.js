import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { P as Progress } from "./progress-BRG1z6ZI.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { l as learningPath } from "./router-DCu-jlWR.js";
import { Award, CheckCircle2, BookOpen, Clock, ChevronRight } from "lucide-react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-progress";
import "@tanstack/react-query";
import "sonner";
const typeIcon = {
  Curso: BookOpen,
  Evaluación: CheckCircle2,
  Certificación: Award
};
function Learning() {
  const overall = Math.round(learningPath.reduce((a, b) => a + b.progress, 0) / learningPath.length);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Tu Learning Path", description: "Generado por IA según las brechas detectadas en tu perfil." }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground", children: "Progreso global" }),
        /* @__PURE__ */ jsxs("span", { className: "font-mono font-bold text-primary", children: [
          overall,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx(Progress, { value: overall, className: "h-2" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: learningPath.map((l) => {
      const Icon = typeIcon[l.type];
      return /* @__PURE__ */ jsxs(Card, { className: "p-4 flex items-center gap-4 hover:border-primary/40 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-md bg-primary/10 text-primary grid place-items-center flex-none", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: l.title }),
            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px]", children: l.type }),
            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px] text-primary border-primary/40 bg-primary/10", children: l.skill })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center gap-3 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { children: l.provider }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
              l.duration
            ] })
          ] }),
          l.progress > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Progress, { value: l.progress, className: "h-1 flex-1" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-[11px] text-muted-foreground", children: [
              l.progress,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: l.progress > 0 ? "default" : "outline", children: /* @__PURE__ */ jsxs(Link, { to: l.type === "Evaluación" ? "/app/evaluaciones" : "/app/learning", children: [
          l.progress > 0 ? "Continuar" : "Comenzar",
          " ",
          /* @__PURE__ */ jsx(ChevronRight, { className: "ml-1 h-3.5 w-3.5" })
        ] }) })
      ] }, l.id);
    }) })
  ] });
}
export {
  Learning as component
};
