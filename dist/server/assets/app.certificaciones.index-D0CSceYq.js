import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { I as Input } from "./input-C0QjszdI.js";
import { L as Label } from "./label-JU3yqRBo.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { l as listMyCertifications, c as createCertification, d as deleteCertification } from "./certifications-D2EfVN0N.js";
import { toast } from "sonner";
import { Plus, Trash2 } from "lucide-react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@tanstack/react-router";
import "./router-DCu-jlWR.js";
import "@tanstack/react-query";
function Certs() {
  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  useEffect(() => {
    listMyCertifications().then((r) => setCerts(r.data)).catch(() => {
    }).finally(() => setLoading(false));
  }, []);
  async function handleAdd(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.namedItem("cname").value;
    const issuer = form.elements.namedItem("cissuer").value;
    const url = form.elements.namedItem("curl").value;
    if (!name || !issuer) {
      toast.error("Nombre y emisor son requeridos");
      return;
    }
    try {
      const resp = await createCertification({
        name,
        issuer,
        credential_url: url || void 0
      });
      setCerts([...certs, resp.certification]);
      toast.success("Certificación agregada");
      setAdding(false);
      form.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error");
    }
  }
  async function handleDelete(id) {
    try {
      await deleteCertification(id);
      setCerts(certs.filter((c) => c.id !== id));
      toast.success("Eliminada");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error");
    }
  }
  if (loading) return /* @__PURE__ */ jsx("div", { className: "p-10 text-center text-muted-foreground", children: "Cargando..." });
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Mis certificaciones", description: `${certs.length} certificaciones.`, children: /* @__PURE__ */ jsxs(Button, { size: "sm", onClick: () => setAdding(!adding), children: [
      /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-1" }),
      " Agregar"
    ] }) }),
    adding && /* @__PURE__ */ jsx(Card, { className: "p-4 sm:p-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleAdd, className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 items-end", "aria-label": "Agregar nueva certificación", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "cname", children: "Nombre *" }),
        /* @__PURE__ */ jsx(Input, { id: "cname", name: "cname", placeholder: "AWS Solutions Architect", "aria-required": "true", required: true })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "cissuer", children: "Emisor *" }),
        /* @__PURE__ */ jsx(Input, { id: "cissuer", name: "cissuer", placeholder: "Amazon", "aria-required": "true", required: true })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "curl", children: "URL credencial" }),
        /* @__PURE__ */ jsx(Input, { id: "curl", name: "curl", placeholder: "https://...", "aria-describedby": "url-help" })
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "submit", size: "sm", className: "sm:col-span-1", "aria-label": "Guardar nueva certificación", children: "Guardar" }),
      /* @__PURE__ */ jsx("p", { id: "url-help", className: "sr-only", children: "Ingresa la URL de credencial opcional para verificación" })
    ] }) }),
    certs.length === 0 ? /* @__PURE__ */ jsx(Card, { className: "p-10 text-center text-muted-foreground", children: /* @__PURE__ */ jsx("p", { children: "No tienes certificaciones todavía." }) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", children: certs.map((c) => /* @__PURE__ */ jsxs(Card, { className: "p-4 sm:p-5 hover:shadow-md transition-shadow", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm sm:text-base leading-tight", children: c.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground mt-1", children: c.issuer })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1 flex-shrink-0", children: [
          c.verified && /* @__PURE__ */ jsx(Badge, { className: "bg-primary text-primary-foreground text-[10px]", children: "Verificado" }),
          /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", className: "h-6 w-6", onClick: () => handleDelete(c.id), children: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" }) })
        ] })
      ] }),
      c.issue_date && /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "Emitida: ",
        c.issue_date
      ] }),
      c.credential_url && /* @__PURE__ */ jsx("a", { href: c.credential_url, target: "_blank", rel: "noreferrer", className: "text-xs text-primary hover:underline mt-2 block", children: "Ver credencial" })
    ] }, c.id)) })
  ] });
}
export {
  Certs as component
};
