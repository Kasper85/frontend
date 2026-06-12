import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { I as Input } from "./input-C0QjszdI.js";
import { L as Label } from "./label-JU3yqRBo.js";
import { T as Textarea } from "./textarea-DSyJ1nlY.js";
import { S as Switch } from "./switch-CQ4rbtn8.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D_u1EXWn.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { T as ThemeToggle } from "./ThemeToggle-CwdoN-WW.js";
import { c as company } from "./company-BxHeUywR.js";
import { toast } from "sonner";
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
import "lucide-react";
import "./router-DCu-jlWR.js";
import "@tanstack/react-query";
function Config() {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Configuración", description: "Empresa, marca, notificaciones, integraciones y apariencia." }),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "empresa", children: [
      /* @__PURE__ */ jsxs(TabsList, { children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "empresa", children: "Empresa" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "notificaciones", children: "Notificaciones" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "integraciones", children: "Integraciones" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "apariencia", children: "Apariencia" })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "empresa", className: "mt-4 space-y-4", children: /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Perfil de empresa" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx(Field, { label: "Nombre", defaultValue: company.name }),
          /* @__PURE__ */ jsx(Field, { label: "Industria", defaultValue: company.industry }),
          /* @__PURE__ */ jsx(Field, { label: "Tamaño", defaultValue: company.size }),
          /* @__PURE__ */ jsx(Field, { label: "Ubicación", defaultValue: company.location }),
          /* @__PURE__ */ jsx(Field, { label: "Sitio web", defaultValue: company.website })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsx(Label, { children: "Descripción pública" }),
          /* @__PURE__ */ jsx(Textarea, { rows: 3, defaultValue: "Infraestructura cloud nativa para pagos en LATAM." })
        ] }),
        /* @__PURE__ */ jsx(Button, { onClick: () => toast.success("Cambios guardados"), children: "Guardar cambios" })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "notificaciones", className: "mt-4", children: /* @__PURE__ */ jsxs(Card, { className: "p-6 space-y-4", children: [
        /* @__PURE__ */ jsx(Row, { title: "Nuevas aplicaciones", desc: "Notificar cada vez que un candidato aplica.", defaultOn: true }),
        /* @__PURE__ */ jsx(Row, { title: "Top match IA (90%+)", desc: "Alerta inmediata para candidatos con match excepcional.", defaultOn: true }),
        /* @__PURE__ */ jsx(Row, { title: "Resumen diario", desc: "Email a las 9:00 con métricas del día." }),
        /* @__PURE__ */ jsx(Row, { title: "Resumen semanal", desc: "Reporte ejecutivo cada lunes.", defaultOn: true }),
        /* @__PURE__ */ jsx(Row, { title: "Cambios de etapa", desc: "Cuando un miembro mueve a un candidato de etapa." })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "integraciones", className: "mt-4 space-y-3", children: [{
        name: "Slack",
        desc: "Recibe alertas de candidatos en un canal.",
        connected: true
      }, {
        name: "Google Calendar",
        desc: "Sincroniza entrevistas automáticamente.",
        connected: true
      }, {
        name: "Greenhouse",
        desc: "Exporta candidatos a tu ATS.",
        connected: false
      }, {
        name: "LinkedIn",
        desc: "Publica vacantes en LinkedIn Jobs.",
        connected: false
      }, {
        name: "Zapier",
        desc: "Conecta con +5,000 apps.",
        connected: false
      }].map((i) => /* @__PURE__ */ jsxs(Card, { className: "p-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: i.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: i.desc })
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: i.connected ? "outline" : "default", size: "sm", children: i.connected ? "Conectado" : "Conectar" })
      ] }, i.name)) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "apariencia", className: "mt-4", children: /* @__PURE__ */ jsxs(Card, { className: "p-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Tema" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Alterna entre modo oscuro y claro." })
        ] }),
        /* @__PURE__ */ jsx(ThemeToggle, {})
      ] }) })
    ] })
  ] });
}
function Field({
  label,
  defaultValue
}) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsx(Label, { children: label }),
    /* @__PURE__ */ jsx(Input, { defaultValue, className: "h-9" })
  ] });
}
function Row({
  title,
  desc,
  defaultOn
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 py-2 border-b border-border last:border-0", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: desc })
    ] }),
    /* @__PURE__ */ jsx(Switch, { defaultChecked: defaultOn })
  ] });
}
export {
  Config as component
};
