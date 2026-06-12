import { jsxs, jsx } from "react/jsx-runtime";
import { L as LandingNav, a as LandingFooter } from "./LandingFooter-B1yQhMSW.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "./Logo-Bbf78lQK.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "./button-BC9oXVxV.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./ThemeToggle-CwdoN-WW.js";
import "./router-DCu-jlWR.js";
import "@tanstack/react-query";
import "sonner";
const SplitComponent = () => /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
  /* @__PURE__ */ jsx(LandingNav, {}),
  /* @__PURE__ */ jsxs("article", { className: "mx-auto max-w-3xl px-6 py-16", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Aviso de privacidad" }),
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-3", children: "Última actualización: junio 2026" }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm text-muted-foreground", children: "Resumen de cómo Find Your Job recolecta, almacena y procesa tus datos. Contenido de muestra para fines de presentación." }),
    Array.from({
      length: 6
    }).map((_, i) => /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-semibold", children: [
        i + 1,
        ". Categoría de datos"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Contenido placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
    ] }, i))
  ] }),
  /* @__PURE__ */ jsx(LandingFooter, {})
] });
export {
  SplitComponent as component
};
