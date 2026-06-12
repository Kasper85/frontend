import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { A as AuthShell } from "./AuthShell-DzikXIfg.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { I as Input } from "./input-C0QjszdI.js";
import { L as Label } from "./label-JU3yqRBo.js";
import { toast } from "sonner";
import { u as useAuth } from "./useAuth-CAz1fQqq.js";
import "./Logo-Bbf78lQK.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "./router-CmATITWS.js";
import "@tanstack/react-query";
function Login() {
  const nav = useNavigate();
  const {
    login
  } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function submit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const form = e.target;
    const email = form.elements.namedItem("email").value;
    const password = form.elements.namedItem("password").value;
    try {
      const resp = await login(email, password);
      toast.success("Sesión iniciada");
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
      const msg = err instanceof Error ? err.message : "Error al iniciar sesión";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxs(AuthShell, { title: "Bienvenido de vuelta", subtitle: "Inicia sesión para continuar a tu dashboard", children: [
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
      error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: error }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsx(Input, { id: "email", type: "email", placeholder: "tu@email.com", required: true })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Contraseña" }),
          /* @__PURE__ */ jsx(Link, { to: "/auth/forgot-password", className: "text-xs text-primary hover:underline", children: "¿Olvidaste tu contraseña?" })
        ] }),
        /* @__PURE__ */ jsx(Input, { id: "password", type: "password", placeholder: "••••••••", required: true })
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", disabled: loading, children: loading ? "Ingresando…" : "Iniciar sesión" })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-6 text-center text-sm text-muted-foreground", children: [
      "¿No tienes cuenta?",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/auth/register", className: "text-primary font-semibold hover:underline", children: "Crear cuenta" })
    ] })
  ] });
}
export {
  Login as component
};
