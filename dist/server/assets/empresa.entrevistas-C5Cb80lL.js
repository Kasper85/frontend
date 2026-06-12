import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card } from "./card-RGlIzTYo.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-D_u1EXWn.js";
import { P as PageHeader } from "./EmptyState-D-D5RvSf.js";
import { l as listMyInterviews } from "./interviews-BUVax28G.js";
import { Video, Phone, MapPin, Calendar, Clock } from "lucide-react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "class-variance-authority";
import "@radix-ui/react-tabs";
import "@tanstack/react-router";
import "./button-BC9oXVxV.js";
import "@radix-ui/react-slot";
import "./router-Cqnt14dk.js";
import "@tanstack/react-query";
import "sonner";
const statusColors = {
  scheduled: "bg-primary/15 text-primary",
  confirmed: "bg-chart-2/15 text-chart-2",
  completed: "bg-muted text-muted-foreground",
  cancelled: "bg-destructive/15 text-destructive",
  no_show: "bg-destructive/15 text-destructive"
};
function Entrevistas() {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    listMyInterviews().then((r) => setInterviews(r.data)).catch(() => {
    }).finally(() => setLoading(false));
  }, []);
  const upcoming = interviews.filter((i) => i.status === "scheduled" || i.status === "confirmed");
  const past = interviews.filter((i) => i.status !== "scheduled" && i.status !== "confirmed");
  if (loading) return /* @__PURE__ */ jsx("div", { className: "p-10 text-center text-muted-foreground", children: "Cargando entrevistas..." });
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Entrevistas", description: "Coordina y haz seguimiento de todas las entrevistas." }),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "proximas", children: [
      /* @__PURE__ */ jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxs(TabsTrigger, { value: "proximas", children: [
          "Próximas (",
          upcoming.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxs(TabsTrigger, { value: "pasadas", children: [
          "Historial (",
          past.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "proximas", className: "mt-4 space-y-3", children: upcoming.length === 0 ? /* @__PURE__ */ jsx(Card, { className: "p-10 text-center text-muted-foreground", children: /* @__PURE__ */ jsx("p", { children: "No hay entrevistas próximas." }) }) : upcoming.map((i) => /* @__PURE__ */ jsx(InterviewCard, { iv: i }, i.id)) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "pasadas", className: "mt-4 space-y-3", children: past.length === 0 ? /* @__PURE__ */ jsx(Card, { className: "p-10 text-center text-muted-foreground", children: /* @__PURE__ */ jsx("p", { children: "No hay historial." }) }) : past.map((i) => /* @__PURE__ */ jsx(InterviewCard, { iv: i }, i.id)) })
    ] })
  ] });
}
function InterviewCard({
  iv
}) {
  const typeIcon = iv.type === "video" ? /* @__PURE__ */ jsx(Video, { className: "h-4 w-4" }) : iv.type === "phone" ? /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" });
  return /* @__PURE__ */ jsx(Card, { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-full bg-muted grid place-items-center", children: typeIcon }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: iv.type ?? "Entrevista" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-3 w-3" }),
          iv.scheduled_at?.slice(0, 16) ?? "—"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      iv.duration_minutes > 0 && /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
        iv.duration_minutes,
        "m"
      ] }),
      iv.location_or_link && /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground max-w-[150px] truncate", children: iv.location_or_link }),
      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: `text-[10px] ${statusColors[iv.status] ?? ""}`, children: iv.status })
    ] })
  ] }) });
}
export {
  Entrevistas as component
};
