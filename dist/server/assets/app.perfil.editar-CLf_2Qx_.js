import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { I as Input } from "./input-C0QjszdI.js";
import { L as Label } from "./label-JU3yqRBo.js";
import { T as Textarea } from "./textarea-DSyJ1nlY.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { g as getProfile, u as updateProfile } from "./users-gIm93ooC.js";
import { toast } from "sonner";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "./router-Cqnt14dk.js";
import "@tanstack/react-query";
function Edit() {
  const nav = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    getProfile().then(setProfile).catch(() => {
    }).finally(() => setLoading(false));
  }, []);
  async function save(e) {
    e.preventDefault();
    const form = e.target;
    const data = {};
    const location = form.elements.namedItem("location").value;
    const summary = form.elements.namedItem("summary").value;
    const expYears = form.elements.namedItem("experience_years").value;
    const linkedin = form.elements.namedItem("linkedin_url").value;
    const github = form.elements.namedItem("github_url").value;
    const portfolio = form.elements.namedItem("portfolio_url").value;
    const prefLoc = form.elements.namedItem("preferred_location").value;
    const salaryMin = form.elements.namedItem("salary_min").value;
    const salaryMax = form.elements.namedItem("salary_max").value;
    const prefRemote = form.elements.namedItem("preferred_remote").checked;
    if (location) data.location = location;
    if (summary) data.summary = summary;
    if (expYears) data.experience_years = parseInt(expYears);
    if (linkedin) data.linkedin_url = linkedin;
    if (github) data.github_url = github;
    if (portfolio) data.portfolio_url = portfolio;
    if (prefLoc) data.preferred_location = prefLoc;
    if (salaryMin) data.salary_min = parseInt(salaryMin);
    if (salaryMax) data.salary_max = parseInt(salaryMax);
    data.preferred_remote = prefRemote;
    setSaving(true);
    try {
      await updateProfile(data);
      toast.success("Perfil actualizado");
      nav({
        to: "/app/perfil"
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error al guardar");
    } finally {
      setSaving(false);
    }
  }
  if (loading) return /* @__PURE__ */ jsx("div", { className: "p-10 text-center text-muted-foreground", children: "Cargando..." });
  const p = profile?.profile;
  return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxs(PageHeader, { title: "Editar perfil", description: "Mantén tu información profesional al día.", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", children: /* @__PURE__ */ jsx(Link, { to: "/app/perfil", children: "Cancelar" }) }),
      /* @__PURE__ */ jsx(Button, { form: "profile-form", type: "submit", disabled: saving, children: saving ? "Guardando..." : "Guardar" })
    ] }),
    /* @__PURE__ */ jsxs("form", { id: "profile-form", onSubmit: save, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Información profesional" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx(Field, { id: "location", label: "Ubicación", defaultValue: p?.location ?? "" }),
          /* @__PURE__ */ jsx(Field, { id: "preferred_location", label: "Ubicación preferida", defaultValue: p?.preferred_location ?? "" }),
          /* @__PURE__ */ jsx(Field, { id: "experience_years", label: "Años de experiencia", type: "number", defaultValue: p?.experience_years?.toString() ?? "0" }),
          /* @__PURE__ */ jsx("div", { className: "flex items-end pb-2", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", id: "preferred_remote", name: "preferred_remote", defaultChecked: p?.preferred_remote ?? true }),
            " Prefiero remoto"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-1.5", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "summary", children: "Bio" }),
          /* @__PURE__ */ jsx(Textarea, { id: "summary", name: "summary", defaultValue: p?.summary ?? "", rows: 4 })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Enlaces" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsx(Field, { id: "linkedin_url", label: "LinkedIn", defaultValue: p?.linkedin_url ?? "" }),
          /* @__PURE__ */ jsx(Field, { id: "github_url", label: "GitHub", defaultValue: p?.github_url ?? "" }),
          /* @__PURE__ */ jsx(Field, { id: "portfolio_url", label: "Portafolio", defaultValue: p?.portfolio_url ?? "" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Salario esperado" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx(Field, { id: "salary_min", label: "Mínimo", type: "number", defaultValue: p?.salary_min?.toString() ?? "" }),
          /* @__PURE__ */ jsx(Field, { id: "salary_max", label: "Máximo", type: "number", defaultValue: p?.salary_max?.toString() ?? "" })
        ] })
      ] })
    ] })
  ] });
}
function Field({
  id,
  label,
  type = "text",
  defaultValue
}) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: id, children: label }),
    /* @__PURE__ */ jsx(Input, { id, name: id, type, defaultValue })
  ] });
}
export {
  Edit as component
};
