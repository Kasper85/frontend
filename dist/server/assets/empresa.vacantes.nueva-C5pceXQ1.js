import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { I as Input } from "./input-C0QjszdI.js";
import { L as Label } from "./label-JU3yqRBo.js";
import { T as Textarea } from "./textarea-DSyJ1nlY.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CZRUt5a6.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { c as createJob } from "./jobs-D97xstq7.js";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "./router-BI82v7Nb.js";
import "@tanstack/react-query";
function NuevaVacante() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [jobType, setJobType] = useState("full_time");
  const [error, setError] = useState("");
  async function handleSubmit(e, draft) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError("Título y descripción son requeridos.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const data = {
        title: title.trim(),
        description: description.trim(),
        job_type: jobType,
        location: location.trim() || null,
        is_remote: isRemote
      };
      if (salaryMin) data.salary_min = parseInt(salaryMin);
      if (salaryMax) data.salary_max = parseInt(salaryMax);
      await createJob(data);
      if (!draft) {
        toast.success("Vacante publicada.");
        toast.info("La vacante se creó como borrador. Usa la vista de detalle para publicarla.");
      }
      nav({
        to: "/empresa/vacantes"
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Error al crear vacante";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => nav({
      to: "/empresa/vacantes"
    }), className: "text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Volver"
    ] }),
    /* @__PURE__ */ jsx(PageHeader, { title: "Nueva vacante", description: "Completa los datos de la posición." }),
    /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: (e) => handleSubmit(e, false), className: "space-y-4", children: [
      error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: error }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "Título *" }),
        /* @__PURE__ */ jsx(Input, { id: "title", value: title, onChange: (e) => setTitle(e.target.value), placeholder: "Senior Go Developer", required: true })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "desc", children: "Descripción *" }),
        /* @__PURE__ */ jsx(Textarea, { id: "desc", value: description, onChange: (e) => setDescription(e.target.value), placeholder: "Descripción de la vacante...", required: true, rows: 5 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "location", children: "Ubicación" }),
          /* @__PURE__ */ jsx(Input, { id: "location", value: location, onChange: (e) => setLocation(e.target.value), placeholder: "Buenos Aires, AR" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "jobType", children: "Tipo" }),
          /* @__PURE__ */ jsxs(Select, { value: jobType, onValueChange: setJobType, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "full_time", children: "Full Time" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "part_time", children: "Part Time" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "contract", children: "Contract" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "freelance", children: "Freelance" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "internship", children: "Internship" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-end gap-1", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isRemote, onChange: (e) => setIsRemote(e.target.checked) }),
          " Remoto"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "smin", children: "Salario mínimo" }),
          /* @__PURE__ */ jsx(Input, { id: "smin", type: "number", value: salaryMin, onChange: (e) => setSalaryMin(e.target.value), placeholder: "50000" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "smax", children: "Salario máximo" }),
          /* @__PURE__ */ jsx(Input, { id: "smax", type: "number", value: salaryMax, onChange: (e) => setSalaryMax(e.target.value), placeholder: "100000" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-3 pt-2", children: /* @__PURE__ */ jsx(Button, { type: "submit", disabled: loading, children: loading ? "Creando..." : "Crear vacante" }) }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "La vacante se crea como borrador. Para publicarla, usa la vista de detalle." })
    ] }) })
  ] });
}
export {
  NuevaVacante as component
};
