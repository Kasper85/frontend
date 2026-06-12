import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { useState, useMemo } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { I as Input } from "./input-C0QjszdI.js";
import { L as Label } from "./label-JU3yqRBo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { c as cn } from "./utils-H80jjgLf.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CZRUt5a6.js";
import { P as PageHeader, E as EmptyState } from "./EmptyState-D-D5RvSf.js";
import { C as CandidateCard } from "./CandidateCard-Jl_omsh7.js";
import { t as talentPool } from "./company-BxHeUywR.js";
import { Search, X, Sparkles, UserSearch } from "lucide-react";
import "@radix-ui/react-label";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-select";
import "@tanstack/react-router";
import "./VerificationBadge-ycbWhl00.js";
const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn("relative flex w-full touch-none select-none items-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;
function Talento() {
  const [q, setQ] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);
  const [vertical, setVertical] = useState("Todas");
  const [seniority, setSeniority] = useState("Cualquiera");
  const [verification, setVerification] = useState("Cualquiera");
  const [modality, setModality] = useState("Cualquiera");
  const [minMatch, setMinMatch] = useState([60]);
  const [onlyAvailable, setOnlyAvailable] = useState(true);
  function addSkill() {
    const s = skillInput.trim();
    if (s && !skills.includes(s)) setSkills([...skills, s]);
    setSkillInput("");
  }
  const filtered = useMemo(() => {
    return talentPool.filter((c) => {
      if (q && !`${c.name} ${c.title} ${c.skills.join(" ")}`.toLowerCase().includes(q.toLowerCase())) return false;
      if (vertical !== "Todas" && c.vertical !== vertical) return false;
      if (seniority !== "Cualquiera" && c.seniority !== seniority) return false;
      if (modality !== "Cualquiera" && c.modality !== modality) return false;
      if (verification === "Parcial+" && c.verification === "none") return false;
      if (verification === "100%" && c.verification !== "full") return false;
      if (onlyAvailable && !c.available) return false;
      if ((c.match ?? 0) < minMatch[0]) return false;
      if (skills.length && !skills.every((s) => c.skills.map((x) => x.toLowerCase()).includes(s.toLowerCase()))) return false;
      return true;
    });
  }, [q, skills, vertical, seniority, verification, modality, minMatch, onlyAvailable]);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4 sm:space-y-6 max-w-7xl mx-auto px-4 sm:px-0", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Buscar talento", description: "Más de 24,000 perfiles tech validados con Zero Trust." }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[280px_1fr] gap-4 sm:gap-6", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-4 sm:p-5 space-y-4 sm:space-y-5 h-fit lg:sticky lg:top-20", role: "search", "aria-label": "Filtros de búsqueda de talento", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Búsqueda" }),
          /* @__PURE__ */ jsxs("div", { className: "relative mt-1.5", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Nombre o rol…", className: "pl-8 h-9" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Skills" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5 mt-1.5", children: [
            /* @__PURE__ */ jsx(Input, { value: skillInput, onChange: (e) => setSkillInput(e.target.value), onKeyDown: (e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addSkill();
              }
            }, placeholder: "Go, Kubernetes…", className: "h-9" }),
            /* @__PURE__ */ jsx(Button, { type: "button", onClick: addSkill, variant: "outline", size: "sm", children: "+" })
          ] }),
          skills.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-2 flex flex-wrap gap-1", children: skills.map((s) => /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "font-mono text-[10px] gap-1", children: [
            s,
            /* @__PURE__ */ jsx("button", { onClick: () => setSkills(skills.filter((x) => x !== s)), className: "hover:text-destructive", children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" }) })
          ] }, s)) })
        ] }),
        /* @__PURE__ */ jsx(SelectRow, { label: "Vertical", value: vertical, onChange: setVertical, options: ["Todas", "Tech", "Ciberseguridad", "Fintech", "Telco"] }),
        /* @__PURE__ */ jsx(SelectRow, { label: "Seniority", value: seniority, onChange: setSeniority, options: ["Cualquiera", "Junior", "Semi-Senior", "Senior", "Lead"] }),
        /* @__PURE__ */ jsx(SelectRow, { label: "Modalidad", value: modality, onChange: setModality, options: ["Cualquiera", "Remoto", "Híbrido", "Presencial"] }),
        /* @__PURE__ */ jsx(SelectRow, { label: "Zero Trust", value: verification, onChange: setVerification, options: ["Cualquiera", "Parcial+", "100%"] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx(Label, { className: "text-xs", children: "Match mínimo IA" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-primary", children: [
              minMatch[0],
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx(Slider, { value: minMatch, onValueChange: setMinMatch, min: 0, max: 100, step: 5, className: "mt-3" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 text-xs cursor-pointer hover:opacity-70", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: onlyAvailable, onChange: (e) => setOnlyAvailable(e.target.checked), className: "rounded", "aria-label": "Mostrar solo candidatos disponibles" }),
          "Solo disponibles ahora"
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "w-full", onClick: () => {
          setQ("");
          setSkills([]);
          setVertical("Todas");
          setSeniority("Cualquiera");
          setVerification("Cualquiera");
          setModality("Cualquiera");
          setMinMatch([60]);
        }, children: "Limpiar filtros" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 sm:space-y-4 min-w-0", children: [
        /* @__PURE__ */ jsxs(Card, { className: "p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-primary flex-shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: filtered.length }),
              " candidato",
              filtered.length !== 1 ? "s" : "",
              " compatibles"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Ordenado por match IA" })
        ] }),
        filtered.length === 0 ? /* @__PURE__ */ jsx(EmptyState, { icon: UserSearch, title: "Sin resultados", description: "Ajusta los filtros o reduce el match mínimo para ver más candidatos." }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3", children: filtered.sort((a, b) => (b.match ?? 0) - (a.match ?? 0)).map((c) => /* @__PURE__ */ jsx(CandidateCard, { candidate: c }, c.id)) })
      ] })
    ] })
  ] });
}
function SelectRow({
  label,
  value,
  onChange,
  options
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Label, { className: "text-xs", children: label }),
    /* @__PURE__ */ jsxs(Select, { value, onValueChange: onChange, children: [
      /* @__PURE__ */ jsx(SelectTrigger, { className: "h-9 mt-1.5", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
      /* @__PURE__ */ jsx(SelectContent, { children: options.map((o) => /* @__PURE__ */ jsx(SelectItem, { value: o, children: o }, o)) })
    ] })
  ] });
}
export {
  Talento as component
};
