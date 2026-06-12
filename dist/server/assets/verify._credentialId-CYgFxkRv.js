import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { C as CertificationBadge } from "./CertificationBadge-DYVPnRoS.js";
import { L as Logo } from "./Logo-Bbf78lQK.js";
import { R as Route, u as user } from "./router-BI82v7Nb.js";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "@tanstack/react-router";
import "@tanstack/react-query";
import "sonner";
function Verify() {
  const {
    cert
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx("header", { className: "border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(Logo, {}),
      /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "border-primary/40 bg-primary/10 text-primary font-mono text-[10px]", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3 w-3 mr-1" }),
        " Zero Trust"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-6 py-12", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-10 text-center border-primary/30 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 opacity-10 [background:radial-gradient(circle_at_50%_0%,var(--color-primary),transparent_60%)]" }),
        /* @__PURE__ */ jsx("div", { className: "mx-auto h-12 w-12 rounded-full bg-primary/15 text-primary grid place-items-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs font-mono uppercase tracking-widest text-primary", children: "Credencial verificada" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-2 text-3xl font-bold", children: cert.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-muted-foreground", children: "Esta credencial es auténtica y fue emitida por Find Your Job." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsx(CertificationBadge, { cert, size: "lg" }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 max-w-md mx-auto grid grid-cols-2 gap-3 text-left text-sm", children: [
          /* @__PURE__ */ jsx(Field, { label: "Titular", value: user.name }),
          /* @__PURE__ */ jsx(Field, { label: "Nivel", value: cert.level }),
          /* @__PURE__ */ jsx(Field, { label: "Emisor", value: cert.issuer }),
          /* @__PURE__ */ jsx(Field, { label: "Emitido", value: cert.issuedAt }),
          /* @__PURE__ */ jsx(Field, { label: "ID credencial", value: cert.id.toUpperCase() }),
          /* @__PURE__ */ jsx(Field, { label: "Estado", value: "Válida" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-border max-w-md mx-auto text-left", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2", children: "Competencias validadas" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: cert.skills.map((s) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-xs", children: s }, s)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-center text-xs text-muted-foreground font-mono", children: "Verificada con firma criptográfica · findyourjob.io" })
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
  Verify as component
};
