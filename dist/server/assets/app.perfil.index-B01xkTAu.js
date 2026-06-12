import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { P as Progress } from "./progress-BRG1z6ZI.js";
import { g as getProfile } from "./users-BL3GSZU6.js";
import { l as listMyCertifications } from "./certifications-C7jjXZ06.js";
import { Pencil, MapPin, Linkedin, Github, Globe, Briefcase } from "lucide-react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-progress";
import "./router-xyFxSyDz.js";
import "@tanstack/react-query";
import "sonner";
function Perfil() {
  const [profile, setProfile] = useState(null);
  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProfile().then(setProfile).catch(() => {
    }).finally(() => setLoading(false));
    listMyCertifications().then((r) => setCerts(r.data)).catch(() => {
    });
  }, []);
  if (loading) return /* @__PURE__ */ jsx("div", { className: "p-10 text-center text-muted-foreground", children: "Cargando perfil..." });
  if (!profile) return /* @__PURE__ */ jsx("div", { className: "p-10 text-center text-muted-foreground", children: "No se pudo cargar el perfil." });
  const u = profile.user;
  const p = profile.profile;
  const initials = u.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const completion = p ? Math.min(100, 30 + (p.summary ? 20 : 0) + (p.location ? 20 : 0) + (p.linkedin_url ? 15 : 0) + (p.github_url ? 15 : 0)) : 30;
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsx(Card, { className: "p-6 lg:p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "h-24 w-24 rounded-full bg-primary text-primary-foreground grid place-items-center text-2xl font-bold flex-none", children: initials }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: u.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: u.email }),
            /* @__PURE__ */ jsx(Badge, { className: "mt-1", children: u.role })
          ] }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", children: /* @__PURE__ */ jsxs(Link, { to: "/app/perfil/editar", children: [
            /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4 mr-1" }),
            " Editar"
          ] }) })
        ] }),
        p && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground", children: [
          p.location && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
            p.location
          ] }),
          p.linkedin_url && /* @__PURE__ */ jsxs("a", { href: p.linkedin_url, target: "_blank", rel: "noreferrer", className: "flex items-center gap-1 hover:text-foreground", children: [
            /* @__PURE__ */ jsx(Linkedin, { className: "h-3.5 w-3.5" }),
            "LinkedIn"
          ] }),
          p.github_url && /* @__PURE__ */ jsxs("a", { href: p.github_url, target: "_blank", rel: "noreferrer", className: "flex items-center gap-1 hover:text-foreground", children: [
            /* @__PURE__ */ jsx(Github, { className: "h-3.5 w-3.5" }),
            "GitHub"
          ] }),
          p.portfolio_url && /* @__PURE__ */ jsxs("a", { href: p.portfolio_url, target: "_blank", rel: "noreferrer", className: "flex items-center gap-1 hover:text-foreground", children: [
            /* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5" }),
            "Portafolio"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "h-3.5 w-3.5" }),
            p.experience_years,
            " años exp."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs mb-1", children: [
            /* @__PURE__ */ jsx("span", { children: "Perfil completado" }),
            /* @__PURE__ */ jsxs("span", { children: [
              completion,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: completion, className: "h-2" })
        ] })
      ] })
    ] }) }),
    p?.summary && /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-2", children: "Bio" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground whitespace-pre-wrap", children: p.summary })
    ] }),
    certs.length > 0 && /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxs("h3", { className: "font-semibold mb-4", children: [
        "Certificaciones (",
        certs.length,
        ")"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", children: certs.map((c) => /* @__PURE__ */ jsxs(Card, { className: "p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: c.name }),
          c.verified && /* @__PURE__ */ jsx(Badge, { className: "bg-primary text-primary-foreground text-[10px]", children: "Verificado" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: c.issuer }),
        c.issue_date && /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
          "Emitida: ",
          c.issue_date
        ] }),
        c.credential_url && /* @__PURE__ */ jsx("a", { href: c.credential_url, target: "_blank", rel: "noreferrer", className: "text-xs text-primary hover:underline mt-1 block", children: "Ver credencial" })
      ] }, c.id)) })
    ] })
  ] });
}
export {
  Perfil as component
};
