import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { A as AuthShell } from "./AuthShell-DzikXIfg.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { I as Input } from "./input-C0QjszdI.js";
import { L as Label } from "./label-JU3yqRBo.js";
import { CheckCircle2 } from "lucide-react";
import "./Logo-Bbf78lQK.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
function Forgot() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsx(AuthShell, { title: "Recuperar contraseña", subtitle: "Te enviaremos un enlace para restablecerla", children: sent ? /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-center py-6", children: [
    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-10 w-10 text-primary mx-auto" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Si el email existe en nuestro sistema, te enviamos instrucciones." }),
    /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "w-full", children: /* @__PURE__ */ jsx(Link, { to: "/auth/login", children: "Volver a iniciar sesión" }) })
  ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    setSent(true);
  }, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
      /* @__PURE__ */ jsx(Input, { id: "email", type: "email", placeholder: "tu@email.com", required: true })
    ] }),
    /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", children: "Enviar enlace" })
  ] }) });
}
export {
  Forgot as component
};
