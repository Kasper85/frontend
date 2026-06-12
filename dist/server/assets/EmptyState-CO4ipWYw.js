import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { B as Button } from "./button-BC9oXVxV.js";
import { C as Card } from "./card-RGlIzTYo.js";
function EmptyState({
  icon: Icon,
  title,
  description,
  action
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "p-10 text-center border-dashed", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
    /* @__PURE__ */ jsx("h3", { className: "mt-4 font-semibold", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground max-w-md mx-auto", children: description }),
    action && /* @__PURE__ */ jsx(Button, { asChild: true, className: "mt-5", children: /* @__PURE__ */ jsx(Link, { to: action.to, children: action.label }) })
  ] });
}
function PageHeader({
  title,
  description,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl sm:text-2xl font-bold tracking-tight", children: title }),
      description && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs sm:text-sm text-muted-foreground", children: description })
    ] }),
    children && /* @__PURE__ */ jsx("div", { className: "flex gap-2 flex-wrap", children })
  ] });
}
export {
  EmptyState as E,
  PageHeader as P
};
