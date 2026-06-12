import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { C as Card } from "./card-RGlIzTYo.js";
import { CheckCircle2 } from "lucide-react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
function Result() {
  return /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto space-y-6", children: /* @__PURE__ */ jsxs(Card, { className: "p-10 text-center border-primary/40 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 opacity-10 [background:radial-gradient(circle_at_50%_0%,var(--color-primary),transparent_60%)]" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto h-14 w-14 rounded-full bg-primary/15 text-primary grid place-items-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-7 w-7" }) }),
    /* @__PURE__ */ jsx("h1", { className: "mt-4 text-2xl font-bold", children: "Resultado enviado" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Tu resultado fue registrado correctamente." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center gap-3", children: /* @__PURE__ */ jsx(Link, { to: "/app/evaluaciones", className: "inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground", children: "Ver evaluaciones" }) })
  ] }) });
}
export {
  Result as component
};
