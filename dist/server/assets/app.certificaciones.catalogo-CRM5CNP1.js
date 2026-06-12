import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { P as PageHeader } from "./EmptyState-CO4ipWYw.js";
import { c as certCatalog } from "./extra-CR7G3y7G.js";
import { useState } from "react";
import { Award, Clock, Zap, Star, ArrowRight } from "lucide-react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "@radix-ui/react-slot";
const cats = ["Todas", "Backend", "Cloud", "DevOps", "Seguridad", "Datos"];
function Catalog() {
  const [cat, setCat] = useState("Todas");
  const items = cat === "Todas" ? certCatalog : certCatalog.filter((c) => c.category === cat);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Catálogo de certificaciones", description: "Certifica tus skills con evaluaciones rigurosas. Cada badge es verificable públicamente.", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/app/certificaciones", children: "Mis certificaciones" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: cats.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setCat(c), className: `px-3 py-1.5 rounded-md text-xs font-mono border transition-colors ${cat === c ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-accent"}`, children: c }, c)) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: items.map((c) => /* @__PURE__ */ jsxs(Card, { className: "p-5 flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-md bg-primary/10 text-primary grid place-items-center", children: /* @__PURE__ */ jsx(Award, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1 flex-wrap justify-end", children: [
          c.newest && /* @__PURE__ */ jsx(Badge, { className: "font-mono text-[10px]", children: "Nuevo" }),
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px]", children: c.level })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 font-semibold", children: c.name }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: c.category }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-1", children: c.skills.map((s) => /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted", children: s }, s)) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-border text-center", children: [
        /* @__PURE__ */ jsx(Meta, { icon: Clock, label: `${c.durationHours}h` }),
        /* @__PURE__ */ jsx(Meta, { icon: Zap, label: "●".repeat(c.difficulty) + "○".repeat(5 - c.difficulty), mono: true }),
        /* @__PURE__ */ jsx(Meta, { icon: Star, label: `${c.popularity}` })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-primary mt-3 font-mono", children: c.jobBenefit }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between pt-4 border-t border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "font-mono text-2xl font-bold", children: [
            "$",
            c.price
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: "Pago único" })
        ] }),
        /* @__PURE__ */ jsxs(Button, { size: "sm", children: [
          "Obtener ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3 ml-1" })
        ] })
      ] })
    ] }, c.id)) })
  ] });
}
function Meta({
  icon: Icon,
  label,
  mono
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5 mx-auto text-muted-foreground" }),
    /* @__PURE__ */ jsx("p", { className: `text-xs mt-1 ${mono ? "font-mono text-primary" : ""}`, children: label })
  ] });
}
export {
  Catalog as component
};
