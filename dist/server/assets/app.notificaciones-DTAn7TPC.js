import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-RGlIzTYo.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D_u1EXWn.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { n as notifications } from "./router-BI82v7Nb.js";
import { Bell, Settings, CheckCircle2, Award, Briefcase } from "lucide-react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tabs";
import "@tanstack/react-router";
import "./button-BC9oXVxV.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@tanstack/react-query";
import "sonner";
const icon = {
  vacante: Briefcase,
  certificacion: Award,
  evaluacion: CheckCircle2,
  sistema: Settings
};
function Notifs() {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Notificaciones", description: "Mantente al día de tu actividad." }),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "todas", children: [
      /* @__PURE__ */ jsxs(TabsList, { children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "todas", children: "Todas" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "no-leidas", children: "No leídas" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "vacantes", children: "Vacantes" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "sistema", children: "Sistema" })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "todas", className: "mt-4", children: /* @__PURE__ */ jsx(List, { items: notifications }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "no-leidas", className: "mt-4", children: /* @__PURE__ */ jsx(List, { items: notifications.filter((n) => !n.read) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "vacantes", className: "mt-4", children: /* @__PURE__ */ jsx(List, { items: notifications.filter((n) => n.type === "vacante") }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "sistema", className: "mt-4", children: /* @__PURE__ */ jsx(List, { items: notifications.filter((n) => n.type === "sistema") }) })
    ] })
  ] });
}
function List({
  items
}) {
  if (items.length === 0) return /* @__PURE__ */ jsxs(Card, { className: "p-10 text-center border-dashed text-muted-foreground", children: [
    /* @__PURE__ */ jsx(Bell, { className: "h-8 w-8 mx-auto mb-3 opacity-60" }),
    /* @__PURE__ */ jsx("p", { children: "Nada por aquí." })
  ] });
  return /* @__PURE__ */ jsx(Card, { className: "divide-y divide-border", children: items.map((n) => {
    const Icon = icon[n.type];
    return /* @__PURE__ */ jsxs("div", { className: `p-4 flex items-start gap-3 ${!n.read ? "bg-primary/5" : ""}`, children: [
      /* @__PURE__ */ jsx("div", { className: "h-9 w-9 rounded-md bg-muted text-foreground grid place-items-center flex-none", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold truncate", children: n.title }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-muted-foreground font-mono flex-none", children: n.time })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: n.description })
      ] }),
      !n.read && /* @__PURE__ */ jsx("span", { className: "mt-2 h-2 w-2 rounded-full bg-primary flex-none" })
    ] }, n.id);
  }) });
}
export {
  Notifs as component
};
