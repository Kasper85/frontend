import { jsxs, jsx } from "react/jsx-runtime";
function EmployabilityGauge({ value, size = 240 }) {
  const stroke = 14;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - value / 100 * c;
  const tone = value >= 80 ? "var(--match-high)" : value >= 60 ? "var(--match-mid)" : "var(--match-low)";
  return /* @__PURE__ */ jsxs("div", { className: "relative", style: { width: size, height: size }, children: [
    /* @__PURE__ */ jsxs("svg", { width: size, height: size, className: "-rotate-90", children: [
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: size / 2,
          cy: size / 2,
          r,
          stroke: "var(--muted)",
          strokeWidth: stroke,
          fill: "none"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: size / 2,
          cy: size / 2,
          r,
          stroke: tone,
          strokeWidth: stroke,
          fill: "none",
          strokeDasharray: c,
          strokeDashoffset: offset,
          strokeLinecap: "round",
          style: { transition: "stroke-dashoffset 1s ease" }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid place-items-center text-center", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-5xl font-bold leading-none", children: value }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: "Índice IA" })
    ] }) })
  ] });
}
export {
  EmployabilityGauge as E
};
