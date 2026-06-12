import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-RrXKMtST.js";
import { P as PageHeader } from "./EmptyState-CO4ipWYw.js";
import { c as company } from "./company-BxHeUywR.js";
import { Check, Download } from "lucide-react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
const invoices = [{
  id: "INV-0241",
  date: "2026-05-01",
  amount: "$899.00 USD",
  status: "Pagada"
}, {
  id: "INV-0228",
  date: "2026-04-01",
  amount: "$899.00 USD",
  status: "Pagada"
}, {
  id: "INV-0211",
  date: "2026-03-01",
  amount: "$899.00 USD",
  status: "Pagada"
}, {
  id: "INV-0198",
  date: "2026-02-01",
  amount: "$899.00 USD",
  status: "Pagada"
}];
function Facturacion() {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Facturación", description: "Administra tu plan, método de pago e historial." }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxs(Card, { className: "lg:col-span-2 p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground", children: "Plan actual" }),
            /* @__PURE__ */ jsxs("h3", { className: "mt-1 text-2xl font-bold", children: [
              "Find Your Job · ",
              company.plan
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Vacantes ilimitadas · 8 asientos · Match IA avanzado · Soporte prioritario" })
          ] }),
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px] border-primary/40 text-primary bg-primary/10", children: "Anual" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsx(Mini, { label: "Próximo cobro", value: "01 Jul 2026" }),
          /* @__PURE__ */ jsx(Mini, { label: "Importe", value: "$899/mes" }),
          /* @__PURE__ */ jsx(Mini, { label: "Asientos", value: `${company.seats.used}/${company.seats.total}` }),
          /* @__PURE__ */ jsx(Mini, { label: "Vacantes activas", value: "3" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/precios", children: "Cambiar plan" }) }),
          /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Cancelar suscripción" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Método de pago" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-md border border-border p-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "h-9 w-12 rounded bg-muted grid place-items-center font-mono text-[10px] font-bold", children: "VISA" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-mono", children: "•••• 4242" }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-muted-foreground", children: "Expira 09/28" })
          ] }),
          /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-primary" })
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "mt-3 w-full", children: "Actualizar tarjeta" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "p-5 border-b border-border", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Historial de facturas" }) }),
      /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { children: "Factura" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Fecha" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Monto" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Estado" }),
          /* @__PURE__ */ jsx(TableHead, {})
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: invoices.map((i) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-mono text-xs", children: i.id }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-xs", children: i.date }),
          /* @__PURE__ */ jsx(TableCell, { className: "font-mono text-xs", children: i.amount }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px] border-primary/40 text-primary bg-primary/10", children: i.status }) }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", children: [
            /* @__PURE__ */ jsx(Download, { className: "h-3.5 w-3.5 mr-1" }),
            "PDF"
          ] }) })
        ] }, i.id)) })
      ] })
    ] })
  ] });
}
function Mini({
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", children: label }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 font-mono text-sm font-semibold", children: value })
  ] });
}
export {
  Facturacion as component
};
