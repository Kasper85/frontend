import { jsxs, jsx } from "react/jsx-runtime";
import { L as LandingNav, a as LandingFooter } from "./LandingFooter-CwcCV3xv.js";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, CheckCircle2, XCircle, ShieldCheck, Bot, BarChart3, Briefcase, GraduationCap, Eye, Cpu, ShieldAlert, Banknote, Radio, Users, Zap, Lock, Star, Check, ChevronDown, Building2 } from "lucide-react";
import { B as Button } from "./button-BC9oXVxV.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { C as Card } from "./card-RGlIzTYo.js";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { c as cn } from "./utils-H80jjgLf.js";
import "./Logo-Bbf78lQK.js";
import "./ThemeToggle-zxLTs8qf.js";
import "./router-BI82v7Nb.js";
import "@tanstack/react-query";
import "sonner";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function HeroVisual() {
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(Card, { className: "p-5 border-border/80 shadow-2xl shadow-primary/5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-md bg-muted grid place-items-center font-mono font-bold text-sm", children: "NC" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "Senior Backend Engineer (Go)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Northwind Cloud · Remoto" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsx("p", { className: "font-mono text-2xl font-bold text-primary leading-none", children: "94%" }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] font-mono uppercase text-muted-foreground tracking-wider", children: "match" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "my-4 h-px bg-border" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: "Skills coincidentes" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-1.5 text-xs", children: ["Go", "Docker", "PostgreSQL", "gRPC", "AWS"].map((s) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 font-mono", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-primary" }),
          " ",
          s
        ] }, s)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-2", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: "Brechas" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs font-mono", children: [
          /* @__PURE__ */ jsx(XCircle, { className: "h-3.5 w-3.5 text-destructive" }),
          " Kubernetes"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-md bg-muted/50 p-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: "Índice de empleabilidad" }),
          /* @__PURE__ */ jsx("span", { className: "font-mono font-bold text-primary", children: "78" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-background", children: /* @__PURE__ */ jsx("div", { className: "h-full rounded-full bg-primary", style: { width: "78%" } }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "absolute -bottom-6 -left-6 p-3 border-border/80 shadow-xl hidden sm:flex items-center gap-2.5 bg-card", children: [
      /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-primary grid place-items-center", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold", children: "Zero Trust" }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] text-muted-foreground font-mono", children: "Verificación parcial" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "absolute -top-4 -right-4 p-3 border-border/80 shadow-xl hidden sm:flex items-center gap-2.5 bg-card", children: [
      /* @__PURE__ */ jsx(Bot, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold", children: "IA NLP" }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] text-muted-foreground font-mono", children: "Análisis en 1.2s" })
      ] })
    ] })
  ] });
}
function HeroSection() {
  return /* @__PURE__ */ jsxs("section", { id: "producto", className: "relative overflow-hidden border-b border-border", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 opacity-[0.15] [background:radial-gradient(circle_at_30%_20%,var(--color-primary),transparent_50%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:64px_64px] opacity-20" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-24 lg:pt-28 lg:pb-32", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(
          Badge,
          {
            variant: "outline",
            className: "border-primary/40 bg-primary/10 text-primary font-mono text-xs",
            children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "mr-1.5 h-3 w-3" }),
              " IA · Match Semántico · Zero Trust"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("h1", { className: "mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]", children: [
          "Talento tech ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "verificado" }),
          ",",
          /* @__PURE__ */ jsx("br", {}),
          "sin incertidumbre."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-xl text-base md:text-lg text-muted-foreground", children: "La plataforma de reclutamiento inteligente para Tech, Ciberseguridad, Fintech y Telco. Validamos competencias reales con IA antes de que llegues a la entrevista." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "font-semibold", children: /* @__PURE__ */ jsxs(Link, { to: "/auth/register", children: [
            "Soy Candidato ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "font-semibold", children: /* @__PURE__ */ jsx(Link, { to: "/auth/register", children: "Soy Empresa" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground font-mono", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-primary" }),
            " Match NLP en segundos"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-primary" }),
            " Evaluaciones en vivo"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-primary" }),
            " Badges verificables"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(HeroVisual, {}) })
    ] }) })
  ] });
}
function TrustedCompanies() {
  const companies = ["Northwind", "Sentinel", "Mercado Telco", "Bloomline", "Vault", "Axiom"];
  return /* @__PURE__ */ jsx("section", { className: "border-b border-border bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-10", children: [
    /* @__PURE__ */ jsx("p", { className: "text-center text-xs font-mono uppercase tracking-widest text-muted-foreground", children: "Empresas tech que confían en talento verificado" }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center text-muted-foreground/70", children: companies.map((n) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "text-center text-sm font-semibold tracking-tight opacity-70 hover:opacity-100 transition-opacity",
        children: n
      },
      n
    )) })
  ] }) });
}
function SectionHeader({ eyebrow, title }) {
  return /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-widest text-primary", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-bold tracking-tight", children: title })
  ] });
}
const benefits = [
  {
    icon: BarChart3,
    title: "Índice de Empleabilidad IA",
    desc: "Sabe exactamente qué te falta para conseguir el trabajo que quieres."
  },
  {
    icon: Briefcase,
    title: "Match semántico real",
    desc: "Comparación NLP entre tus skills y cada vacante, no keywords."
  },
  {
    icon: ShieldCheck,
    title: "Certificaciones verificables",
    desc: "Badges públicos firmados que comprueban competencias reales."
  },
  {
    icon: GraduationCap,
    title: "Learning Path personalizado",
    desc: "Aprende justo lo que te falta para aplicar a más vacantes."
  }
];
function BenefitsSection() {
  return /* @__PURE__ */ jsx("section", { className: "border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-20", children: [
    /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Para candidatos", title: "Construye una carrera tech con evidencia" }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: benefits.map((b) => /* @__PURE__ */ jsxs(Card, { className: "p-6 hover:border-primary/40 transition-colors group", children: [
      /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsx(b.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 font-semibold", children: b.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: b.desc })
    ] }, b.title)) })
  ] }) });
}
const steps = [
  {
    n: "01",
    title: "Sube tu CV",
    desc: "La IA analiza skills, experiencia y educación. Detecta vacíos."
  },
  {
    n: "02",
    title: "Valida competencias",
    desc: "Evaluaciones en vivo: opción múltiple, código real, casos prácticos."
  },
  {
    n: "03",
    title: "Obtén badges Zero Trust",
    desc: "Certificaciones verificables públicamente que viven en tu perfil."
  },
  {
    n: "04",
    title: "Aplica con match alto",
    desc: "Postula a vacantes donde realmente tienes posibilidades reales."
  }
];
function HowItWorksSection() {
  return /* @__PURE__ */ jsx("section", { id: "como-funciona", className: "border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-20", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Cómo funciona",
        title: "De CV anónimo a talento verificado en 4 pasos"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-px bg-border md:grid-cols-4 rounded-lg overflow-hidden border border-border", children: steps.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-6 relative", children: [
      /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-primary font-semibold", children: s.n }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 font-semibold", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc }),
      i < steps.length - 1 && /* @__PURE__ */ jsx(ArrowRight, { className: "hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 h-4 w-4 text-muted-foreground bg-background" })
    ] }, s.n)) })
  ] }) });
}
const features = [
  "Extrae skills de tu CV con redes neuronales especializadas",
  "Compara semánticamente contra cada vacante",
  "Explica el score: qué coincide, qué falta, por qué",
  "Recomienda cursos y evaluaciones para cerrar brechas"
];
function AISection() {
  return /* @__PURE__ */ jsx("section", { className: "border-b border-border bg-muted/20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-20", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        Badge,
        {
          variant: "outline",
          className: "border-primary/40 bg-primary/10 text-primary font-mono text-xs",
          children: [
            /* @__PURE__ */ jsx(Bot, { className: "mr-1.5 h-3 w-3" }),
            " IA aplicada"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("h2", { className: "mt-4 text-3xl md:text-4xl font-bold tracking-tight", children: [
        "Match Semántico NLP, no",
        " ",
        /* @__PURE__ */ jsx("span", { className: "line-through text-muted-foreground/60", children: "keyword matching" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: 'Nuestro motor entiende el significado de tu experiencia. Sabe que "construí pipelines CI/CD en GCP" equivale a DevOps en cloud, aunque la vacante diga "automation engineer".' }),
      /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3 text-sm", children: features.map((t) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2.5", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-primary flex-none" }),
        /* @__PURE__ */ jsx("span", { children: t })
      ] }, t)) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6 border-border/80", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono text-xs uppercase tracking-wider text-muted-foreground", children: "Análisis IA" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-3 font-mono text-xs", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded bg-muted/50 p-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "$ analyzing cv.pdf..." }),
          /* @__PURE__ */ jsx("p", { className: "text-primary mt-1", children: "✓ 14 skills detectadas" }),
          /* @__PURE__ */ jsx("p", { className: "text-primary", children: "✓ 7 años de experiencia" }),
          /* @__PURE__ */ jsx("p", { className: "text-warning", children: "! 2 huecos temporales detectados" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded bg-muted/50 p-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "$ matching vs vacante #4821" }),
          /* @__PURE__ */ jsx("p", { className: "text-primary mt-1", children: "score: 0.94" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "confidence: high" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "latency: 1.2s" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded bg-muted/50 p-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "$ recommend learning path" }),
          /* @__PURE__ */ jsx("p", { className: "text-primary mt-1", children: "→ Kubernetes Operations" }),
          /* @__PURE__ */ jsx("p", { className: "text-primary", children: "→ GraphQL Fundamentals" })
        ] })
      ] })
    ] })
  ] }) }) });
}
const levels = [
  {
    name: "No verificado",
    desc: "Sólo CV cargado",
    color: "bg-muted text-muted-foreground",
    icon: Eye
  },
  {
    name: "Parcialmente verificado",
    desc: "Email + 1 evaluación + 1 cert",
    color: "bg-warning/15 text-warning border-warning/40",
    icon: ShieldCheck
  },
  {
    name: "100% verificado",
    desc: "Identidad + 3+ evaluaciones + certs",
    color: "bg-primary/15 text-primary border-primary/40",
    icon: ShieldCheck
  }
];
function ZeroTrustSection() {
  return /* @__PURE__ */ jsx("section", { className: "border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-20", children: [
    /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Zero Trust", title: "Validamos antes de que postules" }),
    /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-2xl text-center text-muted-foreground", children: "Nada se asume. Cada skill, certificación y experiencia pasa por validación antes de aparecer ante un reclutador." }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-3", children: levels.map((l, i) => /* @__PURE__ */ jsxs(
      Card,
      {
        className: `p-6 border-2 ${i === 2 ? "border-primary/40" : "border-border"}`,
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `inline-flex items-center gap-2 rounded-md border px-2.5 py-1 text-xs font-mono ${l.color}`,
              children: [
                /* @__PURE__ */ jsx(l.icon, { className: "h-3.5 w-3.5" }),
                " Nivel ",
                i + 1
              ]
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 font-semibold", children: l.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: l.desc }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 flex gap-1", children: [0, 1, 2].map((s) => /* @__PURE__ */ jsx(
            "div",
            {
              className: `h-1.5 flex-1 rounded-full ${s <= i ? "bg-primary" : "bg-muted"}`
            },
            s
          )) })
        ]
      },
      l.name
    )) })
  ] }) });
}
const items$1 = [
  { icon: Cpu, title: "Tech", desc: "Backend, full-stack, ML, data, DevOps." },
  { icon: ShieldAlert, title: "Ciberseguridad", desc: "Pentesting, SecOps, Cloud Security." },
  { icon: Banknote, title: "Fintech", desc: "Pagos, banca digital, criptoactivos." },
  { icon: Radio, title: "Telco", desc: "Redes, 5G, infraestructura crítica." }
];
function UseCasesSection() {
  return /* @__PURE__ */ jsx("section", { className: "border-b border-border bg-muted/20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-20", children: [
    /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Casos de uso", title: "Especializados en industrias críticas" }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: items$1.map((i) => /* @__PURE__ */ jsxs(Card, { className: "p-6 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center", children: /* @__PURE__ */ jsx(i.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 font-semibold", children: i.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: i.desc })
    ] }, i.title)) })
  ] }) });
}
const items = [
  {
    icon: Users,
    title: "Talento pre-validado",
    desc: "Sólo recibes candidatos que pasaron evaluaciones técnicas reales."
  },
  {
    icon: Zap,
    title: "Ranking IA",
    desc: "Ordena tu pipeline por compatibilidad semántica con la vacante."
  },
  {
    icon: BarChart3,
    title: "Menor tiempo de selección",
    desc: "Reduce 60% el time-to-hire eliminando candidatos no calificados."
  },
  {
    icon: Lock,
    title: "Zero Trust",
    desc: "Cada credencial es verificable públicamente. Cero CV inflados."
  }
];
function ForCompaniesSection() {
  return /* @__PURE__ */ jsx("section", { id: "empresas", className: "border-b border-border bg-muted/20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-20", children: [
    /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Para empresas", title: "Contrata sin sorpresas técnicas" }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: items.map((b) => /* @__PURE__ */ jsxs(Card, { className: "p-6 hover:border-primary/40 transition-colors group", children: [
      /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsx(b.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 font-semibold", children: b.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: b.desc })
    ] }, b.title)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "font-semibold", children: /* @__PURE__ */ jsxs(Link, { to: "/auth/register", children: [
      "Crear cuenta de empresa ",
      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
    ] }) }) })
  ] }) });
}
const testimonials = [
  {
    quote: "Pasamos de tener entrevistas decepcionantes a contratar talento que entrega desde el día uno. El ranking IA es brutal.",
    name: "María Castillo",
    role: "Head of Engineering, Bloomline"
  },
  {
    quote: "Mi índice de empleabilidad me dijo exactamente qué estudiar. Conseguí oferta en 3 semanas.",
    name: "Diego R.",
    role: "Senior Backend Engineer"
  },
  {
    quote: "Los badges Zero Trust nos ahorran 4 rondas de filtros técnicos por candidato.",
    name: "Andrés Park",
    role: "CTO, Vault Networks"
  }
];
function TestimonialsSection() {
  return /* @__PURE__ */ jsx("section", { className: "border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-20", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Testimonios",
        title: "Lo que dicen quienes ya validan talento con nosotros"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-3", children: testimonials.map((t) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 text-primary", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm", children: t.quote }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-3 pt-4 border-t border-border", children: [
        /* @__PURE__ */ jsx("div", { className: "h-9 w-9 rounded-full bg-muted grid place-items-center text-xs font-bold", children: t.name.split(" ").map((n) => n[0]).join("") }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: t.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: t.role })
        ] })
      ] })
    ] }, t.name)) })
  ] }) });
}
const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Empieza a verificarte",
    features: [
      "Perfil profesional",
      "Análisis CV con IA",
      "1 evaluación / mes",
      "Match con vacantes públicas"
    ],
    cta: "Crear cuenta",
    featured: false
  },
  {
    name: "Pro",
    price: "$12",
    per: "/mes",
    desc: "Talento que destaca",
    features: [
      "Evaluaciones ilimitadas",
      "Learning path completo",
      "Insights de carrera",
      "Soporte prioritario"
    ],
    cta: "Empezar Pro",
    featured: true
  },
  {
    name: "Pay per Cert",
    price: "$29",
    per: "/cert",
    desc: "Sólo certificaciones",
    features: ["Pagas sólo lo que certificas", "Badge verificable público", "Sin suscripción"],
    cta: "Ver certificaciones",
    featured: false
  }
];
function PricingSection() {
  return /* @__PURE__ */ jsx("section", { id: "precios", className: "border-b border-border bg-muted/20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-20", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Planes y precios",
        title: "Comienza gratis, paga sólo cuando creces"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 md:grid-cols-3", children: plans.map((p) => /* @__PURE__ */ jsxs(
      Card,
      {
        className: `p-6 relative ${p.featured ? "border-primary shadow-lg shadow-primary/10" : ""}`,
        children: [
          p.featured && /* @__PURE__ */ jsx(Badge, { className: "absolute -top-2 right-4 bg-primary text-primary-foreground", children: "Más popular" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: p.name }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-4xl font-bold", children: p.price }),
            p.per && /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: p.per })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: p.desc }),
          /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2 text-sm", children: p.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-primary flex-none mt-0.5" }),
            f
          ] }, f)) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, className: "mt-6 w-full", variant: p.featured ? "default" : "outline", children: /* @__PURE__ */ jsx(Link, { to: "/auth/register", children: p.cta }) })
        ]
      },
      p.name
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 text-center text-sm text-muted-foreground", children: [
      "¿Eres empresa?",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/precios", className: "text-primary font-semibold hover:underline", children: "Ver planes B2B →" })
    ] })
  ] }) });
}
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
const faqItems = [
  {
    q: "¿Qué es el Índice de Empleabilidad IA?",
    a: "Un score 0-100 calculado por nuestra IA con base en tu perfil, evaluaciones aprobadas, certificaciones y nivel Zero Trust. Se actualiza en tiempo real."
  },
  {
    q: "¿Cómo funciona Zero Trust?",
    a: "Nada en tu perfil se asume verdadero por defecto. Cada skill se valida con evaluaciones técnicas, cada experiencia se contrasta y cada certificación es firmada y verificable públicamente."
  },
  {
    q: "¿Las certificaciones tienen valor real?",
    a: "Sí. Cada badge tiene una URL pública que cualquier reclutador puede verificar. Incluyen criterios evaluados, fecha de emisión y firma criptográfica."
  },
  {
    q: "¿Cuánto cuesta para empresas?",
    a: "Tenemos modelos SaaS mensual, anual y Success Fee por contratación. Visita la página de precios o agenda una demo."
  },
  { q: "¿Soportan más idiomas?", a: "Actualmente español e inglés. Próximamente portugués." },
  {
    q: "¿Mis datos están protegidos?",
    a: "Cumplimos con buenas prácticas de seguridad: cifrado en tránsito y reposo, control granular de visibilidad y cumplimiento de regulaciones locales."
  }
];
function FAQSection() {
  return /* @__PURE__ */ jsx("section", { id: "faq", className: "border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6 py-20", children: [
    /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "FAQ", title: "Preguntas frecuentes" }),
    /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "mt-10", children: faqItems.map((it, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `i${i}`, children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-base", children: it.q }),
      /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: it.a })
    ] }, i)) })
  ] }) });
}
function FinalCTASection() {
  return /* @__PURE__ */ jsx("section", { className: "border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl px-4 sm:px-6 py-20", children: /* @__PURE__ */ jsxs(Card, { className: "relative overflow-hidden border-primary/30 p-10 lg:p-14 text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 opacity-20 [background:radial-gradient(circle_at_50%_0%,var(--color-primary),transparent_60%)]" }),
    /* @__PURE__ */ jsx(Building2, { className: "mx-auto h-8 w-8 text-primary" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl md:text-4xl font-bold tracking-tight", children: "¿Listo para contratar (o ser contratado) sin dudas?" }),
    /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "Crea tu cuenta gratis y empieza hoy. Sin tarjeta, sin compromisos." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "font-semibold", children: /* @__PURE__ */ jsx(Link, { to: "/auth/register", children: "Soy Candidato" }) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "font-semibold", children: /* @__PURE__ */ jsx(Link, { to: "/auth/register", children: "Soy Empresa" }) })
    ] })
  ] }) }) });
}
function Landing() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(LandingNav, {}),
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(TrustedCompanies, {}),
    /* @__PURE__ */ jsx(BenefitsSection, {}),
    /* @__PURE__ */ jsx(HowItWorksSection, {}),
    /* @__PURE__ */ jsx(AISection, {}),
    /* @__PURE__ */ jsx(ZeroTrustSection, {}),
    /* @__PURE__ */ jsx(UseCasesSection, {}),
    /* @__PURE__ */ jsx(ForCompaniesSection, {}),
    /* @__PURE__ */ jsx(TestimonialsSection, {}),
    /* @__PURE__ */ jsx(PricingSection, {}),
    /* @__PURE__ */ jsx(FAQSection, {}),
    /* @__PURE__ */ jsx(FinalCTASection, {}),
    /* @__PURE__ */ jsx(LandingFooter, {})
  ] });
}
export {
  Landing as component
};
