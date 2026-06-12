import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { C as CertificationBadge } from "./CertificationBadge-DYVPnRoS.js";
import { ArrowLeft, ShieldCheck, Share2, Copy, Download, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { o as Route } from "./router-BI82v7Nb.js";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@tanstack/react-query";
function Detail() {
  const {
    cert
  } = Route.useLoaderData();
  const url = `/verify/${cert.id}`;
  function share() {
    navigator.clipboard?.writeText(window.location.origin + url);
    toast.success("Enlace copiado al portapapeles");
  }
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/app/certificaciones", className: "inline-flex items-center text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-1" }),
      " Volver"
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[auto_1fr] gap-8 items-center", children: [
      /* @__PURE__ */ jsx(CertificationBadge, { cert, size: "lg" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "border-primary/40 bg-primary/10 text-primary font-mono text-[10px]", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3 w-3 mr-1" }),
          " Verificable Zero Trust"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 text-2xl font-bold", children: cert.name }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Emitido por ",
          cert.issuer
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3 text-sm max-w-md", children: [
          /* @__PURE__ */ jsx(Field, { label: "Nivel", value: cert.level }),
          /* @__PURE__ */ jsx(Field, { label: "Emitido", value: cert.issuedAt }),
          /* @__PURE__ */ jsx(Field, { label: "ID", value: cert.id.toUpperCase() }),
          /* @__PURE__ */ jsx(Field, { label: "Skills", value: `${cert.skills.length} validadas` })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxs(Button, { onClick: share, children: [
            /* @__PURE__ */ jsx(Share2, { className: "h-3.5 w-3.5 mr-1.5" }),
            "Compartir"
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: share, children: [
            /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5 mr-1.5" }),
            "Copiar enlace"
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
            /* @__PURE__ */ jsx(Download, { className: "h-3.5 w-3.5 mr-1.5" }),
            "Descargar"
          ] }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", children: /* @__PURE__ */ jsxs(Link, { to: "/verify/$credentialId", params: {
            credentialId: cert.id
          }, children: [
            "Ver verificación pública ",
            /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5 ml-1.5" })
          ] }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3", children: "Competencias validadas" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: cert.skills.map((s) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono", children: s }, s)) })
    ] })
  ] });
}
function Field({
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("p", { className: "font-mono text-sm", children: value })
  ] });
}
export {
  Detail as component
};
