import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { I as Input } from "./input-C0QjszdI.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-RrXKMtST.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { c as company, a as teamMembers } from "./company-BxHeUywR.js";
import { UserPlus, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@tanstack/react-router";
function Equipo() {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Equipo", description: `Asientos usados ${company.seats.used} de ${company.seats.total}.`, children: /* @__PURE__ */ jsxs(Button, { onClick: () => toast.success("Invitación enviada"), children: [
      /* @__PURE__ */ jsx(UserPlus, { className: "h-4 w-4 mr-1" }),
      " Invitar miembro"
    ] }) }),
    /* @__PURE__ */ jsx(Card, { className: "p-5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs text-muted-foreground", children: "Invitar por email" }),
        /* @__PURE__ */ jsx(Input, { placeholder: "nombre@empresa.com", className: "mt-1.5 h-9" })
      ] }),
      /* @__PURE__ */ jsxs("select", { className: "h-9 rounded-md border border-input bg-background px-3 text-sm", children: [
        /* @__PURE__ */ jsx("option", { children: "Recruiter" }),
        /* @__PURE__ */ jsx("option", { children: "Hiring Manager" }),
        /* @__PURE__ */ jsx("option", { children: "Owner" }),
        /* @__PURE__ */ jsx("option", { children: "Viewer" })
      ] }),
      /* @__PURE__ */ jsx(Button, { onClick: () => toast.success("Invitación enviada"), children: "Enviar" })
    ] }) }),
    /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { children: "Miembro" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Rol" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Última actividad" }),
        /* @__PURE__ */ jsx(TableHead, {})
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: teamMembers.map((m) => /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold", children: m.name.split(" ").map((p) => p[0]).join("").slice(0, 2) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: m.name }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-muted-foreground", children: m.email })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px]", children: m.role }) }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-xs text-muted-foreground", children: m.lastActive }),
        /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-7 w-7", children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }) }) })
      ] }, m.id)) })
    ] }) })
  ] });
}
export {
  Equipo as component
};
