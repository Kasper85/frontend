import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { X, Menu, Github, Linkedin, Twitter } from "lucide-react";
import { L as Logo } from "./Logo-Bbf78lQK.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { T as ThemeToggle } from "./ThemeToggle-zxLTs8qf.js";
function LandingNav() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6", children: [
      /* @__PURE__ */ jsx(Logo, {}),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx("a", { href: "#producto", className: "hover:text-foreground transition-colors", children: "Producto" }),
        /* @__PURE__ */ jsx("a", { href: "#como-funciona", className: "hover:text-foreground transition-colors", children: "Cómo funciona" }),
        /* @__PURE__ */ jsx("a", { href: "#empresas", className: "hover:text-foreground transition-colors", children: "Empresas" }),
        /* @__PURE__ */ jsx(Link, { to: "/precios", className: "hover:text-foreground transition-colors", children: "Precios" }),
        /* @__PURE__ */ jsx("a", { href: "#faq", className: "hover:text-foreground transition-colors", children: "FAQ" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(ThemeToggle, {}),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsx(Link, { to: "/auth/login", children: "Iniciar sesión" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", className: "font-semibold", children: /* @__PURE__ */ jsx(Link, { to: "/auth/register", children: "Crear cuenta" }) })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "md:hidden p-2", onClick: () => setOpen(!open), "aria-label": "Menú", children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" }) })
    ] }),
    open && /* @__PURE__ */ jsxs("div", { className: "md:hidden border-t border-border px-4 py-4 space-y-3", children: [
      /* @__PURE__ */ jsx("a", { href: "#producto", className: "block text-sm", onClick: () => setOpen(false), children: "Producto" }),
      /* @__PURE__ */ jsx("a", { href: "#como-funciona", className: "block text-sm", onClick: () => setOpen(false), children: "Cómo funciona" }),
      /* @__PURE__ */ jsx(Link, { to: "/precios", className: "block text-sm", children: "Precios" }),
      /* @__PURE__ */ jsx("a", { href: "#faq", className: "block text-sm", onClick: () => setOpen(false), children: "FAQ" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 pt-2", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "flex-1", children: /* @__PURE__ */ jsx(Link, { to: "/auth/login", children: "Iniciar sesión" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", className: "flex-1", children: /* @__PURE__ */ jsx(Link, { to: "/auth/register", children: "Crear cuenta" }) })
      ] })
    ] })
  ] });
}
function LandingFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx(Logo, {}),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-xs text-sm text-muted-foreground", children: "Reclutamiento inteligente para Tech, Ciberseguridad, Fintech y Telco. Talento verificado, sin incertidumbre." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "GitHub", children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4 hover:text-foreground" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4 hover:text-foreground" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Twitter", children: /* @__PURE__ */ jsx(Twitter, { className: "h-4 w-4 hover:text-foreground" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        FooterCol,
        {
          title: "Producto",
          links: [
            ["Cómo funciona", "/#como-funciona"],
            ["Precios", "/precios"],
            ["Empresas", "/#empresas"],
            ["FAQ", "/#faq"]
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        FooterCol,
        {
          title: "Para ti",
          links: [
            ["Soy Candidato", "/auth/register"],
            ["Soy Empresa", "/auth/register"],
            ["Iniciar sesión", "/auth/login"]
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        FooterCol,
        {
          title: "Legal",
          links: [
            ["Términos", "/legal/terminos"],
            ["Privacidad", "/legal/privacidad"]
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Find Your Job. Todos los derechos reservados."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "font-mono", children: "Hecho con IA · Validado con Zero Trust" })
    ] })
  ] }) });
}
function FooterCol({ title, links }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: title }),
    /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: links.map(([label, href]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: href, className: "hover:text-foreground transition-colors", children: label }) }, href)) })
  ] });
}
export {
  LandingNav as L,
  LandingFooter as a
};
