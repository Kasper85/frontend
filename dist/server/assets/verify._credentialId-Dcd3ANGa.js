import { jsx, jsxs } from "react/jsx-runtime";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsx("div", { className: "min-h-screen grid place-items-center bg-background p-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
  /* @__PURE__ */ jsx("p", { className: "font-mono text-xs text-destructive", children: "ERROR" }),
  /* @__PURE__ */ jsx("h1", { className: "mt-2 text-2xl font-bold", children: "Credencial no encontrada" }),
  /* @__PURE__ */ jsx("p", { className: "mt-1 text-muted-foreground", children: "Verifica el enlace o ID de la certificación." })
] }) });
export {
  SplitNotFoundComponent as notFoundComponent
};
