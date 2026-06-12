import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { I as Input } from "./input-C0QjszdI.js";
import { L as Label } from "./label-JU3yqRBo.js";
import { S as Switch } from "./switch-CQ4rbtn8.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D_u1EXWn.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { T as ThemeToggle } from "./ThemeToggle-DLBTOkht.js";
import { u as user } from "./router-Cqnt14dk.js";
import { Sparkles } from "lucide-react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@radix-ui/react-switch";
import "@radix-ui/react-tabs";
import "@tanstack/react-router";
import "@tanstack/react-query";
import "sonner";
function Settings() {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Configuración" }),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "cuenta", children: [
      /* @__PURE__ */ jsxs(TabsList, { children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "cuenta", children: "Cuenta" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "notif", children: "Notificaciones" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "privacidad", children: "Privacidad" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "apariencia", children: "Apariencia" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "suscripcion", children: "Suscripción" })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "cuenta", className: "mt-5 space-y-4", children: /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Información de cuenta" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx(Label, { children: "Email" }),
          /* @__PURE__ */ jsx(Input, { defaultValue: user.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx(Label, { children: "Contraseña" }),
          /* @__PURE__ */ jsx(Input, { type: "password", defaultValue: "•••••••••" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx(Button, { children: "Guardar cambios" }) })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "notif", className: "mt-5", children: /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-4", children: [
        /* @__PURE__ */ jsx(Toggle, { title: "Nuevas vacantes compatibles", desc: "Cuando aparece una vacante con +80% match", defaultChecked: true }),
        /* @__PURE__ */ jsx(Toggle, { title: "Resultados de evaluaciones", defaultChecked: true }),
        /* @__PURE__ */ jsx(Toggle, { title: "Certificaciones emitidas", defaultChecked: true }),
        /* @__PURE__ */ jsx(Toggle, { title: "Mensajes de reclutadores", defaultChecked: true }),
        /* @__PURE__ */ jsx(Toggle, { title: "Resumen semanal por email" })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "privacidad", className: "mt-5", children: /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-4", children: [
        /* @__PURE__ */ jsx(Toggle, { title: "Perfil público visible para reclutadores", defaultChecked: true }),
        /* @__PURE__ */ jsx(Toggle, { title: "Permitir contacto directo", defaultChecked: true }),
        /* @__PURE__ */ jsx(Toggle, { title: "Mostrar mi nombre en credenciales públicas", defaultChecked: true }),
        /* @__PURE__ */ jsx(Toggle, { title: "Indexar perfil en buscadores" })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "apariencia", className: "mt-5", children: /* @__PURE__ */ jsxs(Card, { className: "p-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Tema" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Cambia entre modo claro y oscuro" })
        ] }),
        /* @__PURE__ */ jsx(ThemeToggle, {})
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "suscripcion", className: "mt-5 space-y-4", children: /* @__PURE__ */ jsxs(Card, { className: "p-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px]", children: "FREE" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 font-semibold", children: "Plan Free" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "1 evaluación/mes · vacantes públicas" })
        ] }),
        /* @__PURE__ */ jsxs(Button, { children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 mr-1.5" }),
          "Upgrade a Pro"
        ] })
      ] }) })
    ] })
  ] });
}
function Toggle({
  title,
  desc,
  defaultChecked
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: title }),
      desc && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: desc })
    ] }),
    /* @__PURE__ */ jsx(Switch, { defaultChecked })
  ] });
}
export {
  Settings as component
};
