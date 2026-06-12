import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { A as AuthShell } from "./AuthShell-DzikXIfg.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { I as Input } from "./input-C0QjszdI.js";
import { L as Label } from "./label-JU3yqRBo.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D_u1EXWn.js";
import { toast } from "sonner";
import { u as useAuth } from "./useAuth-DDl7Ozqa.js";
import "./Logo-Bbf78lQK.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@radix-ui/react-tabs";
import "./router-Cqnt14dk.js";
import "@tanstack/react-query";
function Register() {
  const nav = useNavigate();
  const {
    register
  } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function submit(e, role) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const form = e.target;
    const name = form.elements.namedItem("name").value;
    const email = form.elements.namedItem("email").value;
    const password = form.elements.namedItem("password").value;
    try {
      const resp = await register(email, password, name, role);
      toast.success("Cuenta creada. Bienvenido a Find Your Job.");
      if (resp.user.role === "recruiter" || resp.user.role === "admin") {
        nav({
          to: "/empresa/dashboard"
        });
      } else {
        nav({
          to: "/app/dashboard"
        });
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Error al crear cuenta";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxs(AuthShell, { title: "Crea tu cuenta", subtitle: "Empieza gratis. Sin tarjeta de crédito.", children: [
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "candidato", children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "grid grid-cols-2 w-full", children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "candidato", children: "Soy Candidato" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "empresa", children: "Soy Empresa" })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "candidato", className: "mt-5", children: /* @__PURE__ */ jsxs("form", { onSubmit: (e) => submit(e, "candidate"), className: "space-y-4", children: [
        error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: error }),
        /* @__PURE__ */ jsx(Field, { id: "cname", name: "name", label: "Nombre completo", placeholder: "Diego Ramírez" }),
        /* @__PURE__ */ jsx(Field, { id: "cemail", name: "email", label: "Email", type: "email", placeholder: "tu@email.com" }),
        /* @__PURE__ */ jsx(Field, { id: "cpass", name: "password", label: "Contraseña", type: "password", placeholder: "Mínimo 8 caracteres" }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", disabled: loading, children: loading ? "Creando…" : "Crear cuenta de candidato" })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "empresa", className: "mt-5", children: /* @__PURE__ */ jsxs("form", { onSubmit: (e) => submit(e, "recruiter"), className: "space-y-4", children: [
        error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: error }),
        /* @__PURE__ */ jsx(Field, { id: "rname", name: "name", label: "Tu nombre", placeholder: "Andrés Park" }),
        /* @__PURE__ */ jsx(Field, { id: "remail", name: "email", label: "Email corporativo", type: "email", placeholder: "andres@acme.com" }),
        /* @__PURE__ */ jsx(Field, { id: "rpass", name: "password", label: "Contraseña", type: "password", placeholder: "Mínimo 8 caracteres" }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", disabled: loading, children: loading ? "Creando…" : "Crear cuenta de empresa" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-6 text-center text-sm text-muted-foreground", children: [
      "¿Ya tienes cuenta?",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/auth/login", className: "text-primary font-semibold hover:underline", children: "Iniciar sesión" })
    ] })
  ] });
}
function Field({
  id,
  name,
  label,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: id, children: label }),
    /* @__PURE__ */ jsx(Input, { id, name, type, placeholder, required: true })
  ] });
}
export {
  Register as component
};
