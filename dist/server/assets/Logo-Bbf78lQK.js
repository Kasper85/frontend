import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { c as cn } from "./utils-H80jjgLf.js";
function Logo({ className, showText = true }) {
  return /* @__PURE__ */ jsxs(Link, { to: "/", className: cn("flex items-center gap-2 group", className), children: [
    /* @__PURE__ */ jsx("div", { className: "relative h-7 w-7 rounded-md bg-primary grid place-items-center", children: /* @__PURE__ */ jsx("span", { className: "font-mono font-bold text-primary-foreground text-sm", children: "{}" }) }),
    showText && /* @__PURE__ */ jsxs("span", { className: "font-bold tracking-tight text-foreground", children: [
      "Find Your Job",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "." })
    ] })
  ] });
}
export {
  Logo as L
};
