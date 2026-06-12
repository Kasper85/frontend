import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { L as LandingNav, a as LandingFooter } from "./LandingFooter-B1yQhMSW.js";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D_u1EXWn.js";
import { User, Building2, Check } from "lucide-react";
import "./Logo-Bbf78lQK.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "./ThemeToggle-CwdoN-WW.js";
import "./router-DCu-jlWR.js";
import "@tanstack/react-query";
import "sonner";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-tabs";
const b2c = [{
  name: "Free",
  price: "$0",
  desc: "Empieza a verificarte",
  features: ["Perfil profesional", "Análisis CV con IA", "1 evaluación / mes", "Vacantes públicas"],
  cta: "Crear cuenta",
  featured: false
}, {
  name: "Pro",
  price: "$12",
  per: "/mes",
  desc: "Talento que destaca",
  features: ["Evaluaciones ilimitadas", "Learning path completo", "Insights de carrera", "Vacantes premium", "Soporte prioritario"],
  cta: "Empezar Pro",
  featured: true
}, {
  name: "Pay per Cert",
  price: "$29",
  per: "/cert",
  desc: "Sólo certificaciones",
  features: ["Pagas sólo lo que certificas", "Badge verificable público", "Sin suscripción"],
  cta: "Ver certificaciones",
  featured: false
}];
const b2b = [{
  name: "Starter",
  price: "$199",
  per: "/mes",
  desc: "Equipos pequeños",
  features: ["5 vacantes activas", "Buscador de talento", "100 perfiles desbloqueables/mes", "Ranking IA"],
  cta: "Empezar",
  featured: false
}, {
  name: "Growth",
  price: "$599",
  per: "/mes",
  desc: "Empresas en escala",
  features: ["Vacantes ilimitadas", "Perfiles ilimitados", "Analítica avanzada", "Integración ATS", "Soporte dedicado"],
  cta: "Hablar con ventas",
  featured: true
}, {
  name: "Success Fee",
  price: "12%",
  per: "por contratación",
  desc: "Sin riesgo inicial",
  features: ["Sin mensualidad", "Pagas sólo si contratas", "Garantía 90 días", "Onboarding incluido"],
  cta: "Agendar demo",
  featured: false
}];
function Pricing() {
  const [billing, setBilling] = useState("mensual");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(LandingNav, {}),
    /* @__PURE__ */ jsx("section", { className: "border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-widest text-primary", children: "Precios" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl md:text-5xl font-bold tracking-tight", children: "Planes simples. Resultados verificados." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Empieza gratis. Escala cuando lo necesites." })
      ] }),
      /* @__PURE__ */ jsxs(Tabs, { defaultValue: "candidato", className: "mt-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxs(TabsList, { children: [
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "candidato", children: [
              /* @__PURE__ */ jsx(User, { className: "h-3.5 w-3.5 mr-1.5" }),
              "Candidato"
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "empresa", children: [
              /* @__PURE__ */ jsx(Building2, { className: "h-3.5 w-3.5 mr-1.5" }),
              "Empresa"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-md border border-border bg-muted/30 p-1 text-xs", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => setBilling("mensual"), className: `px-3 py-1.5 rounded ${billing === "mensual" ? "bg-background shadow-sm" : "text-muted-foreground"}`, children: "Mensual" }),
            /* @__PURE__ */ jsxs("button", { onClick: () => setBilling("anual"), className: `px-3 py-1.5 rounded flex items-center gap-1.5 ${billing === "anual" ? "bg-background shadow-sm" : "text-muted-foreground"}`, children: [
              "Anual",
              " ",
              /* @__PURE__ */ jsx(Badge, { className: "bg-primary text-primary-foreground text-[9px] px-1.5 py-0", children: "-20%" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(TabsContent, { value: "candidato", className: "mt-10", children: /* @__PURE__ */ jsx(PriceGrid, { plans: b2c }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "empresa", className: "mt-10", children: /* @__PURE__ */ jsx(PriceGrid, { plans: b2b }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-10 text-center text-sm text-muted-foreground", children: "Todos los planes incluyen Zero Trust, badges verificables y soporte por email." })
    ] }) }),
    /* @__PURE__ */ jsx(LandingFooter, {})
  ] });
}
function PriceGrid({
  plans
}) {
  return /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-3 max-w-5xl mx-auto", children: plans.map((p) => /* @__PURE__ */ jsxs(Card, { className: `p-6 relative ${p.featured ? "border-primary shadow-lg shadow-primary/10" : ""}`, children: [
    p.featured && /* @__PURE__ */ jsx(Badge, { className: "absolute -top-2 right-4 bg-primary text-primary-foreground", children: "Más popular" }),
    /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: p.name }),
    /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-baseline gap-1", children: [
      /* @__PURE__ */ jsx("span", { className: "text-4xl font-bold", children: p.price }),
      p.per && /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: p.per })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: p.desc }),
    /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2 text-sm", children: p.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-primary flex-none mt-0.5" }),
      f
    ] }, f)) }),
    /* @__PURE__ */ jsx(Button, { asChild: true, className: "mt-6 w-full", variant: p.featured ? "default" : "outline", children: /* @__PURE__ */ jsx(Link, { to: "/auth/register", children: p.cta }) })
  ] }, p.name)) });
}
export {
  Pricing as component
};
