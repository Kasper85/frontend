import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { A as AuthShell } from "./AuthShell-DzikXIfg.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { MailCheck } from "lucide-react";
import "./Logo-Bbf78lQK.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
function Confirm() {
  return /* @__PURE__ */ jsx(AuthShell, { title: "Revisa tu email", subtitle: "Te enviamos un enlace de confirmación", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-5 py-4", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto h-14 w-14 rounded-full bg-primary/15 text-primary grid place-items-center", children: /* @__PURE__ */ jsx(MailCheck, { className: "h-7 w-7" }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Haz clic en el enlace que enviamos para activar tu cuenta. ¿No llegó? Revisa tu spam o solicita un nuevo email." }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, className: "w-full", children: /* @__PURE__ */ jsx(Link, { to: "/app/dashboard", children: "Continuar a la app (demo)" }) }),
      /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "w-full", children: "Reenviar email" })
    ] })
  ] }) });
}
export {
  Confirm as component
};
