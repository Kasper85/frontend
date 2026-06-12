import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { g as getEvaluation, s as submitEvaluationResult } from "./evaluations-D7Q4VqQC.js";
import { ArrowLeft, Clock } from "lucide-react";
import { toast } from "sonner";
import { p as Route } from "./router-xyFxSyDz.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@tanstack/react-query";
function EvalPage() {
  const {
    id
  } = Route.useParams();
  const nav = useNavigate();
  const [ev, setEv] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [score, setScore] = useState("");
  useEffect(() => {
    getEvaluation(id).then((r) => setEv(r.evaluation)).catch(() => {
    }).finally(() => setLoading(false));
  }, [id]);
  async function handleSubmit() {
    const s = parseInt(score);
    if (isNaN(s) || s < 0) {
      toast.error("Ingresa un score válido");
      return;
    }
    setSubmitting(true);
    try {
      const resp = await submitEvaluationResult(id, s);
      toast.success(resp.result.passed ? `¡Aprobado! (${s})` : `Resultado enviado (${s})`);
      nav({
        to: `/app/evaluaciones/${id}/result`
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Error";
      toast.error(msg.includes("already submitted") ? "Ya enviaste esta evaluación" : msg);
    } finally {
      setSubmitting(false);
    }
  }
  if (loading) return /* @__PURE__ */ jsx("div", { className: "p-10 text-center text-muted-foreground", children: "Cargando..." });
  if (!ev) return /* @__PURE__ */ jsx("div", { className: "p-10 text-center text-muted-foreground", children: "Evaluación no encontrada." });
  return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => nav({
      to: "/app/evaluaciones"
    }), className: "text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Volver"
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: ev.title }),
        /* @__PURE__ */ jsx(Badge, { variant: "outline", children: ev.type })
      ] }),
      ev.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: ev.description }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-sm text-muted-foreground mb-4", children: [
        ev.duration_minutes && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
          ev.duration_minutes,
          " minutos"
        ] }),
        ev.max_score && /* @__PURE__ */ jsxs("span", { children: [
          "Puntaje máximo: ",
          ev.max_score
        ] }),
        ev.passing_score && /* @__PURE__ */ jsxs("span", { children: [
          "Aprueba con: ",
          ev.passing_score
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-end", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-sm font-medium block mb-1", children: [
            "Tu puntaje (0-",
            ev.max_score ?? 100,
            ")"
          ] }),
          /* @__PURE__ */ jsx("input", { type: "number", value: score, onChange: (e) => setScore(e.target.value), min: "0", max: ev.max_score ?? 100, className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm", placeholder: "85" })
        ] }),
        /* @__PURE__ */ jsx(Button, { onClick: handleSubmit, disabled: submitting, children: submitting ? "Enviando..." : "Enviar resultado" })
      ] })
    ] })
  ] });
}
export {
  EvalPage as component
};
