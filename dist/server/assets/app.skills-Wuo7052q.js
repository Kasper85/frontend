import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { P as Progress } from "./progress-BRG1z6ZI.js";
import { P as PageHeader } from "./EmptyState-CO4ipWYw.js";
import { s as skillMap } from "./extra-CR7G3y7G.js";
import { ShieldCheck, Circle } from "lucide-react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "@radix-ui/react-progress";
import "@tanstack/react-router";
import "./button-BC9oXVxV.js";
import "@radix-ui/react-slot";
function SkillsPage() {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Mapa de Habilidades", description: "Visualización de tu perfil técnico por dominio. La IA mide nivel actual vs verificado." }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Radar técnico" }),
        /* @__PURE__ */ jsx(RadarChart, { categories: skillMap }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-2 gap-2 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-primary" }),
            " Nivel actual"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-primary/30" }),
            " Verificado"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Resumen por dominio" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: skillMap.map((c) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: c.name }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
              c.level,
              "% · ",
              /* @__PURE__ */ jsxs("span", { className: "text-primary", children: [
                c.verified,
                "% verificado"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative h-2 rounded-full bg-muted mt-1.5 overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 bg-primary/30", style: {
              width: `${c.level}%`
            } }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 bg-primary", style: {
              width: `${c.verified}%`
            } })
          ] })
        ] }, c.name)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: skillMap.map((c) => /* @__PURE__ */ jsxs(Card, { className: "p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: c.name }),
        /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "font-mono text-[10px]", children: [
          c.level,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: c.skills.map((s) => /* @__PURE__ */ jsxs("li", { className: "flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          s.verified ? /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-primary" }) : /* @__PURE__ */ jsx(Circle, { className: "h-3.5 w-3.5 text-muted-foreground" }),
          /* @__PURE__ */ jsx("span", { children: s.name })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-muted-foreground", children: s.level })
      ] }, s.name)) }),
      /* @__PURE__ */ jsx(Progress, { value: c.level, className: "mt-3 h-1" })
    ] }, c.name)) })
  ] });
}
function RadarChart({
  categories
}) {
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 40;
  const n = categories.length;
  const angle = (i) => Math.PI * 2 * i / n - Math.PI / 2;
  const point = (i, value) => {
    const a = angle(i);
    const rad = r * value / 100;
    return [cx + Math.cos(a) * rad, cy + Math.sin(a) * rad];
  };
  const levelPath = categories.map((c, i) => point(i, c.level)).map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ") + " Z";
  const verifiedPath = categories.map((c, i) => point(i, c.verified)).map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ") + " Z";
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 ${size} ${size}`, className: "w-full h-auto", children: [
    [20, 40, 60, 80, 100].map((p) => /* @__PURE__ */ jsx("polygon", { points: categories.map((_, i) => point(i, p).join(",")).join(" "), fill: "none", stroke: "oklch(0.3 0 0)", strokeWidth: "0.5" }, p)),
    categories.map((_, i) => {
      const [x, y] = point(i, 100);
      return /* @__PURE__ */ jsx("line", { x1: cx, y1: cy, x2: x, y2: y, stroke: "oklch(0.3 0 0)", strokeWidth: "0.5" }, i);
    }),
    /* @__PURE__ */ jsx("path", { d: levelPath, fill: "oklch(0.7 0.18 150 / 0.15)", stroke: "oklch(0.7 0.18 150 / 0.5)", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx("path", { d: verifiedPath, fill: "oklch(0.7 0.18 150 / 0.45)", stroke: "oklch(0.7 0.18 150)", strokeWidth: "2" }),
    categories.map((c, i) => {
      const [x, y] = point(i, 115);
      return /* @__PURE__ */ jsx("text", { x, y, textAnchor: "middle", dominantBaseline: "middle", className: "fill-foreground", style: {
        fontSize: 11,
        fontFamily: "ui-monospace, monospace"
      }, children: c.name }, c.name);
    })
  ] });
}
export {
  SkillsPage as component
};
