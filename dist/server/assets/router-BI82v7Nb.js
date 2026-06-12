import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, redirect, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext } from "react";
import { Toaster as Toaster$1 } from "sonner";
const appCss = "/assets/styles-BKszDcNQ.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const ThemeCtx = createContext({
  theme: "dark",
  toggle: () => {
  }
});
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("fyj-theme") || "dark";
    setTheme(stored);
  }, []);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("fyj-theme", theme);
  }, [theme]);
  return /* @__PURE__ */ jsx(
    ThemeCtx.Provider,
    {
      value: { theme, toggle: () => setTheme((t) => t === "dark" ? "light" : "dark") },
      children
    }
  );
}
const useTheme = () => useContext(ThemeCtx);
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase tracking-widest text-primary", children: "Error 404" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 text-5xl font-bold text-foreground", children: "Página no encontrada" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "La ruta que buscas no existe o fue movida." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90",
        children: "Volver al inicio"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold text-foreground", children: "Algo salió mal" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Ocurrió un error inesperado. Intenta recargar o volver al inicio." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
          children: "Reintentar"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent",
          children: "Ir al inicio"
        }
      )
    ] })
  ] }) });
}
const Route$T = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Find Your Job — Talento tech verificado con IA" },
      {
        name: "description",
        content: "Plataforma de reclutamiento inteligente para Tech, Ciberseguridad, Fintech y Telco. Match semántico con IA, evaluaciones técnicas y certificaciones Zero Trust."
      },
      { name: "author", content: "Find Your Job" },
      { property: "og:title", content: "Find Your Job — Talento tech verificado con IA" },
      {
        property: "og:description",
        content: "Reclutamiento inteligente con IA, match semántico y validación Zero Trust."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "es", className: "dark", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$T.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] }) });
}
const $$splitComponentImporter$Q = () => import("./precios-a2iRJLZX.js");
const Route$S = createFileRoute("/precios")({
  head: () => ({
    meta: [{
      title: "Precios — Find Your Job"
    }, {
      name: "description",
      content: "Planes para candidatos (Freemium y Pro) y empresas (SaaS mensual, anual y Success Fee)."
    }, {
      property: "og:title",
      content: "Precios — Find Your Job"
    }, {
      property: "og:description",
      content: "Planes para candidatos y empresas. Empieza gratis."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$Q, "component")
});
const BASE_URL = "http://localhost:8080";
const TOKEN_KEY = "fyj_access_token";
const REFRESH_KEY = "fyj_refresh_token";
const USER_KEY = "fyj_user";
function getAccessToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}
function setAuthSession(accessToken, refreshToken, user2) {
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_KEY, refreshToken);
  localStorage.setItem(USER_KEY, JSON.stringify(user2));
}
function clearAuthSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(USER_KEY);
}
function getCurrentUser() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.name = "ApiError";
  }
  status;
}
async function request(method, path, body) {
  const headers = { "Content-Type": "application/json" };
  const token = getAccessToken();
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : void 0
  });
  if (!res.ok) {
    let msg = res.statusText;
    try {
      const err = await res.json();
      msg = err.error ?? msg;
    } catch {
    }
    throw new ApiError(res.status, msg);
  }
  if (res.status === 204) return void 0;
  return res.json();
}
const api = {
  get: (path) => request("GET", path),
  post: (path, body) => request("POST", path, body),
  put: (path, body) => request("PUT", path, body),
  patch: (path, body) => request("PATCH", path, body),
  delete: (path) => request("DELETE", path)
};
const VALID_ROLES = ["candidate", "recruiter", "admin"];
function getStoredUser() {
  return getCurrentUser();
}
function getStoredUserRole() {
  const role = getStoredUser()?.role;
  return role && VALID_ROLES.includes(role) ? role : null;
}
function getHomeForRole(role) {
  if (role === "candidate") return "/app/dashboard";
  if (role === "recruiter" || role === "admin") return "/empresa/dashboard";
  return "/auth/login";
}
function getRedirectForDisallowedRole(role) {
  return getHomeForRole(role);
}
function requireRole(allowedRoles) {
  if (typeof window === "undefined") return null;
  const token = getAccessToken();
  if (!token) return "/auth/login";
  const role = getStoredUserRole();
  if (!role) {
    clearAuthSession();
    return "/auth/login";
  }
  if (!allowedRoles.includes(role)) {
    return getRedirectForDisallowedRole(role);
  }
  return null;
}
function getAuthenticatedHomeRedirect() {
  if (typeof window === "undefined") return null;
  const token = getAccessToken();
  if (!token) return null;
  const role = getStoredUserRole();
  if (!role) {
    clearAuthSession();
    return null;
  }
  return getHomeForRole(role);
}
const $$splitComponentImporter$P = () => import("./empresa-Bnd1x1Tg.js");
const Route$R = createFileRoute("/empresa")({
  component: lazyRouteComponent($$splitComponentImporter$P, "component"),
  beforeLoad: () => {
    const to = requireRole(["recruiter", "admin"]);
    if (to) throw redirect({
      to
    });
  }
});
const $$splitComponentImporter$O = () => import("./app-DFHvUUXw.js");
const Route$Q = createFileRoute("/app")({
  component: lazyRouteComponent($$splitComponentImporter$O, "component"),
  beforeLoad: () => {
    const to = requireRole(["candidate"]);
    if (to) throw redirect({
      to
    });
  }
});
const $$splitComponentImporter$N = () => import("./index-BU3KOOBA.js");
const Route$P = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Find Your Job — Talento tech verificado con IA"
    }, {
      name: "description",
      content: "Reclutamiento inteligente para Tech, Ciberseguridad, Fintech y Telco. Match semántico con NLP, evaluaciones técnicas y certificaciones Zero Trust."
    }, {
      property: "og:title",
      content: "Find Your Job — Talento tech verificado con IA"
    }, {
      property: "og:description",
      content: "Reclutamiento inteligente con IA, match semántico y validación Zero Trust."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$N, "component")
});
const Route$O = createFileRoute("/empresa/")({
  beforeLoad: () => {
    throw redirect({ to: "/empresa/dashboard" });
  }
});
const Route$N = createFileRoute("/app/")({
  beforeLoad: () => {
    throw redirect({ to: "/app/dashboard" });
  }
});
const jobs = [
  {
    id: "1",
    title: "Senior Backend Engineer (Go)",
    company: "Northwind Cloud",
    logo: "NC",
    location: "CDMX, México",
    modality: "Remoto",
    seniority: "Senior",
    salary: "$80k - $110k USD",
    match: 94,
    matchedSkills: ["Go", "Docker", "PostgreSQL", "gRPC", "AWS"],
    missingSkills: ["Kubernetes"],
    reasons: [
      "5/6 skills críticas coinciden",
      "Experiencia en fintech alineada",
      "Seniority compatible"
    ],
    description: "Construye servicios distribuidos de alto rendimiento para procesamiento de pagos.",
    responsibilities: [
      "Diseñar APIs gRPC",
      "Optimizar consultas PostgreSQL",
      "Mentorear ingenieros junior"
    ],
    requirements: [
      "5+ años con Go",
      "Experiencia con sistemas distribuidos",
      "Inglés conversacional"
    ],
    postedAt: "hace 2 días",
    vertical: "Fintech"
  },
  {
    id: "2",
    title: "Pentester Senior",
    company: "Sentinel Labs",
    logo: "SL",
    location: "Remoto LATAM",
    modality: "Remoto",
    seniority: "Senior",
    salary: "$70k - $95k USD",
    match: 87,
    matchedSkills: ["Burp Suite", "OWASP", "Python", "Linux"],
    missingSkills: ["OSCP", "Red Team"],
    reasons: ["Skills core de pentesting validadas", "Falta certificación OSCP"],
    description: "Pruebas de penetración en aplicaciones web y APIs para clientes fintech.",
    responsibilities: ["Pentest web/API", "Reportes ejecutivos", "Red team exercises"],
    requirements: ["OSCP deseable", "OWASP Top 10", "3+ años exp"],
    postedAt: "hace 4 días",
    vertical: "Ciberseguridad"
  },
  {
    id: "3",
    title: "DevOps / SRE",
    company: "Mercado Telco",
    logo: "MT",
    location: "Bogotá, Colombia",
    modality: "Híbrido",
    seniority: "Semi-Senior",
    salary: "$45k - $65k USD",
    match: 76,
    matchedSkills: ["Docker", "Terraform", "AWS", "Linux"],
    missingSkills: ["Kubernetes", "Prometheus"],
    reasons: ["Infra core OK", "Faltan herramientas de observabilidad"],
    description: "Operación de infraestructura para una red de telecomunicaciones moderna.",
    responsibilities: ["Mantener clusters", "Automatizar pipelines CI/CD", "On-call rotativo"],
    requirements: ["Terraform", "Cloud (AWS/GCP)", "Bash"],
    postedAt: "hace 1 semana",
    vertical: "Telco"
  },
  {
    id: "4",
    title: "Full-Stack Engineer (TS + React)",
    company: "Bloomline Fintech",
    logo: "BF",
    location: "Remoto",
    modality: "Remoto",
    seniority: "Semi-Senior",
    salary: "$55k - $75k USD",
    match: 82,
    matchedSkills: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    missingSkills: ["GraphQL"],
    reasons: ["Stack 100% alineado al frontend", "Backend en Node ya validado"],
    description: "Construye dashboards financieros con foco en performance y accesibilidad.",
    responsibilities: ["Features end-to-end", "Code review", "Accesibilidad WCAG"],
    requirements: ["TS", "React 18+", "Node", "Pruebas automatizadas"],
    postedAt: "hace 3 días",
    vertical: "Fintech"
  },
  {
    id: "5",
    title: "Cloud Security Architect",
    company: "Vault Networks",
    logo: "VN",
    location: "Madrid, España",
    modality: "Híbrido",
    seniority: "Lead",
    salary: "€80k - €110k",
    match: 71,
    matchedSkills: ["AWS", "IAM", "Zero Trust", "Terraform"],
    missingSkills: ["Azure", "GCP"],
    reasons: ["Fuerte en AWS, débil multi-cloud"],
    description: "Diseña arquitecturas Zero Trust para clientes regulados.",
    responsibilities: ["Threat modeling", "Compliance ISO27001", "Mentoring"],
    requirements: ["AWS Solutions Architect Pro", "Experiencia Zero Trust"],
    postedAt: "hace 5 días",
    vertical: "Ciberseguridad"
  },
  {
    id: "6",
    title: "ML Engineer",
    company: "Northwind Cloud",
    logo: "NC",
    location: "Remoto LATAM",
    modality: "Remoto",
    seniority: "Senior",
    salary: "$85k - $120k USD",
    match: 64,
    matchedSkills: ["Python", "Docker", "SQL"],
    missingSkills: ["PyTorch", "MLOps", "Kubeflow"],
    reasons: ["Base sólida, falta especialización ML"],
    description: "Modelos de ranking y matching para una plataforma de talento.",
    responsibilities: ["Entrenar modelos", "Servir en producción", "AB testing"],
    requirements: ["Python avanzado", "ML fundamentals", "MLOps"],
    postedAt: "hace 6 días",
    vertical: "Tech"
  }
];
const applications = [
  {
    id: "a1",
    jobId: "1",
    jobTitle: "Senior Backend Engineer (Go)",
    company: "Northwind Cloud",
    status: "Entrevista",
    appliedAt: "hace 5 días",
    match: 94
  },
  {
    id: "a2",
    jobId: "4",
    jobTitle: "Full-Stack Engineer (TS + React)",
    company: "Bloomline Fintech",
    status: "Evaluación",
    appliedAt: "hace 1 semana",
    match: 82
  },
  {
    id: "a3",
    jobId: "3",
    jobTitle: "DevOps / SRE",
    company: "Mercado Telco",
    status: "En revisión",
    appliedAt: "hace 10 días",
    match: 76
  },
  {
    id: "a4",
    jobId: "5",
    jobTitle: "Cloud Security Architect",
    company: "Vault Networks",
    status: "Rechazada",
    appliedAt: "hace 3 semanas",
    match: 71
  }
];
const certifications = [
  {
    id: "c1",
    name: "Go Backend Engineer",
    issuer: "Find Your Job",
    issuedAt: "2025-03-12",
    skills: ["Go", "gRPC", "PostgreSQL"],
    level: "Professional",
    color: "150"
  },
  {
    id: "c2",
    name: "Docker Foundations",
    issuer: "Find Your Job",
    issuedAt: "2024-11-05",
    skills: ["Docker", "Linux"],
    level: "Foundational",
    color: "200"
  },
  {
    id: "c3",
    name: "AWS Cloud Practitioner",
    issuer: "Find Your Job",
    issuedAt: "2025-01-22",
    skills: ["AWS", "Cloud"],
    level: "Associate",
    color: "75"
  },
  {
    id: "c4",
    name: "Secure Coding (OWASP)",
    issuer: "Find Your Job",
    issuedAt: "2025-02-14",
    skills: ["OWASP", "Security"],
    level: "Associate",
    color: "25"
  }
];
const evalHistory = [
  {
    id: "h1",
    evalId: "e1",
    title: "Fundamentos de Go",
    score: 92,
    passed: true,
    takenAt: "2025-03-12"
  },
  {
    id: "h2",
    evalId: "e2",
    title: "Docker & Contenedores",
    score: 88,
    passed: true,
    takenAt: "2024-11-05"
  },
  {
    id: "h3",
    evalId: "e4",
    title: "OWASP Top 10 Práctico",
    score: 81,
    passed: true,
    takenAt: "2025-02-14"
  },
  {
    id: "h4",
    evalId: "e3",
    title: "Kubernetes Operations",
    score: 58,
    passed: false,
    takenAt: "2025-04-02"
  }
];
const learningPath = [
  {
    id: "l1",
    title: "Kubernetes desde cero",
    type: "Curso",
    provider: "FYJ Learning",
    skill: "Kubernetes",
    duration: "6h",
    progress: 35
  },
  {
    id: "l2",
    title: "Evaluación Kubernetes Ops",
    type: "Evaluación",
    provider: "Find Your Job",
    skill: "Kubernetes",
    duration: "60min",
    progress: 0
  },
  {
    id: "l3",
    title: "Certificación K8s Associate",
    type: "Certificación",
    provider: "Find Your Job",
    skill: "Kubernetes",
    duration: "—",
    progress: 0
  },
  {
    id: "l4",
    title: "GraphQL para backenders",
    type: "Curso",
    provider: "FYJ Learning",
    skill: "GraphQL",
    duration: "4h",
    progress: 0
  },
  {
    id: "l5",
    title: "Azure Fundamentals",
    type: "Curso",
    provider: "FYJ Learning",
    skill: "Azure",
    duration: "5h",
    progress: 12
  }
];
const user = {
  name: "Diego Ramírez",
  title: "Senior Backend Engineer",
  email: "diego.ramirez@email.com",
  employabilityIndex: 78,
  verification: "partial"
};
const notifications = [
  {
    id: "n1",
    type: "vacante",
    title: "Nueva vacante con 94% match",
    description: "Senior Backend Engineer (Go) en Northwind Cloud",
    time: "hace 2h",
    read: false
  },
  {
    id: "n2",
    type: "certificacion",
    title: "Certificación emitida",
    description: "Go Backend Engineer ya está disponible en tu perfil",
    time: "hace 1 día",
    read: false
  },
  {
    id: "n3",
    type: "evaluacion",
    title: "Resultado de evaluación",
    description: "Aprobaste Fundamentos de Go con 92/100",
    time: "hace 1 día",
    read: true
  },
  {
    id: "n4",
    type: "sistema",
    title: "Verifica tu identidad",
    description: "Eleva tu nivel Zero Trust al 100%",
    time: "hace 3 días",
    read: true
  }
];
const $$splitNotFoundComponentImporter$2 = () => import("./verify._credentialId-Dcd3ANGa.js");
const $$splitComponentImporter$M = () => import("./verify._credentialId-CYgFxkRv.js");
const Route$M = createFileRoute("/verify/$credentialId")({
  loader: ({
    params
  }) => {
    const cert = certifications.find((c) => c.id === params.credentialId);
    if (!cert) throw notFound();
    return {
      cert
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `Verificación pública — ${loaderData?.cert.name}`
    }, {
      name: "description",
      content: `Credencial verificable emitida por Find Your Job.`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$M, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent")
});
const $$splitComponentImporter$L = () => import("./legal.terminos-zQf1jEdx.js");
const Route$L = createFileRoute("/legal/terminos")({
  head: () => ({
    meta: [{
      title: "Términos de servicio — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$L, "component")
});
const $$splitComponentImporter$K = () => import("./legal.privacidad-D9DGm0Ai.js");
const Route$K = createFileRoute("/legal/privacidad")({
  head: () => ({
    meta: [{
      title: "Aviso de privacidad — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$K, "component")
});
const $$splitComponentImporter$J = () => import("./empresa.vacantes-BFsOu0JM.js");
const Route$J = createFileRoute("/empresa/vacantes")({
  component: lazyRouteComponent($$splitComponentImporter$J, "component")
});
const $$splitComponentImporter$I = () => import("./empresa.talento-VvalZZw9.js");
const Route$I = createFileRoute("/empresa/talento")({
  head: () => ({
    meta: [{
      title: "Buscar talento — Empresa"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$I, "component")
});
const $$splitComponentImporter$H = () => import("./empresa.talent-pool-Cag8c--O.js");
const Route$H = createFileRoute("/empresa/talent-pool")({
  head: () => ({
    meta: [{
      title: "Pool de Talento Certificado — Empresa"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$H, "component")
});
const $$splitComponentImporter$G = () => import("./empresa.roi-CfK9YIoa.js");
const Route$G = createFileRoute("/empresa/roi")({
  head: () => ({
    meta: [{
      title: "ROI Empresarial — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$G, "component")
});
const $$splitComponentImporter$F = () => import("./empresa.facturacion-KerXaoB6.js");
const Route$F = createFileRoute("/empresa/facturacion")({
  head: () => ({
    meta: [{
      title: "Facturación — Empresa"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$F, "component")
});
const $$splitComponentImporter$E = () => import("./empresa.equipo-DXN9b8SC.js");
const Route$E = createFileRoute("/empresa/equipo")({
  head: () => ({
    meta: [{
      title: "Equipo — Empresa"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$E, "component")
});
const $$splitComponentImporter$D = () => import("./empresa.entrevistas-CD3qnT2W.js");
const Route$D = createFileRoute("/empresa/entrevistas")({
  head: () => ({
    meta: [{
      title: "Entrevistas — Empresa"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$D, "component")
});
const $$splitComponentImporter$C = () => import("./empresa.dashboard-B047nuvq.js");
const Route$C = createFileRoute("/empresa/dashboard")({
  head: () => ({
    meta: [{
      title: "Dashboard Empresa — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$C, "component")
});
const $$splitComponentImporter$B = () => import("./empresa.configuracion-CfsYpavr.js");
const Route$B = createFileRoute("/empresa/configuracion")({
  head: () => ({
    meta: [{
      title: "Configuración — Empresa"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$B, "component")
});
const $$splitComponentImporter$A = () => import("./empresa.analitica-E9KC3lIN.js");
const Route$A = createFileRoute("/empresa/analitica")({
  head: () => ({
    meta: [{
      title: "Analítica — Empresa"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$A, "component")
});
const $$splitComponentImporter$z = () => import("./auth.register-DgRQmKiu.js");
const Route$z = createFileRoute("/auth/register")({
  head: () => ({
    meta: [{
      title: "Crear cuenta — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$z, "component"),
  beforeLoad: () => {
    const to = getAuthenticatedHomeRedirect();
    if (to) throw redirect({
      to
    });
  }
});
const $$splitComponentImporter$y = () => import("./auth.login-5pmKl8X2.js");
const Route$y = createFileRoute("/auth/login")({
  head: () => ({
    meta: [{
      title: "Iniciar sesión — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$y, "component"),
  beforeLoad: () => {
    const to = getAuthenticatedHomeRedirect();
    if (to) throw redirect({
      to
    });
  }
});
const $$splitComponentImporter$x = () => import("./auth.forgot-password-Bwrj-Mnb.js");
const Route$x = createFileRoute("/auth/forgot-password")({
  head: () => ({
    meta: [{
      title: "Recuperar contraseña — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$x, "component")
});
const $$splitComponentImporter$w = () => import("./auth.confirm-email-Bz-_fNp8.js");
const Route$w = createFileRoute("/auth/confirm-email")({
  head: () => ({
    meta: [{
      title: "Confirma tu email — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$w, "component")
});
const $$splitComponentImporter$v = () => import("./app.verificacion-Txy9uvFv.js");
const Route$v = createFileRoute("/app/verificacion")({
  head: () => ({
    meta: [{
      title: "Verificación Zero Trust — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./app.vacantes-BFsOu0JM.js");
const Route$u = createFileRoute("/app/vacantes")({
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./app.skills-Dn6UX00J.js");
const Route$t = createFileRoute("/app/skills")({
  head: () => ({
    meta: [{
      title: "Mapa de Habilidades — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$t, "component")
});
const $$splitComponentImporter$s = () => import("./app.postulaciones-DckhtFeE.js");
const Route$s = createFileRoute("/app/postulaciones")({
  head: () => ({
    meta: [{
      title: "Mis postulaciones — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./app.perfil-BFsOu0JM.js");
const Route$r = createFileRoute("/app/perfil")({
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./app.notificaciones-DTAn7TPC.js");
const Route$q = createFileRoute("/app/notificaciones")({
  head: () => ({
    meta: [{
      title: "Notificaciones — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("./app.match-BnFz_ljA.js");
const Route$p = createFileRoute("/app/match")({
  head: () => ({
    meta: [{
      title: "Explicabilidad del Match IA — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./app.learning-Cn3ExFmF.js");
const Route$o = createFileRoute("/app/learning")({
  head: () => ({
    meta: [{
      title: "Learning Path — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./app.evaluaciones-BFsOu0JM.js");
const Route$n = createFileRoute("/app/evaluaciones")({
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./app.entrevistas-f1AW2fze.js");
const Route$m = createFileRoute("/app/entrevistas")({
  head: () => ({
    meta: [{
      title: "Entrevistas — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./app.empleabilidad-CfczTY1M.js");
const Route$l = createFileRoute("/app/empleabilidad")({
  head: () => ({
    meta: [{
      title: "Centro de Empleabilidad IA — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./app.dashboard-Cv-_F5mL.js");
const Route$k = createFileRoute("/app/dashboard")({
  head: () => ({
    meta: [{
      title: "Dashboard — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./app.cv-BXtiQ_Am.js");
const Route$j = createFileRoute("/app/cv")({
  head: () => ({
    meta: [{
      title: "CV Inteligente — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./app.configuracion-P1BZrrxv.js");
const Route$i = createFileRoute("/app/configuracion")({
  head: () => ({
    meta: [{
      title: "Configuración — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./app.challenges-BKQIoqil.js");
const Route$h = createFileRoute("/app/challenges")({
  head: () => ({
    meta: [{
      title: "Edge AI Challenges — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./app.certificaciones-BFsOu0JM.js");
const Route$g = createFileRoute("/app/certificaciones")({
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./app.aprendizaje-CIz8kg-M.js");
const Route$f = createFileRoute("/app/aprendizaje")({
  head: () => ({
    meta: [{
      title: "Marketplace de Aprendizaje — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./empresa.vacantes.index-Drdy-T5P.js");
const Route$e = createFileRoute("/empresa/vacantes/")({
  head: () => ({
    meta: [{
      title: "Vacantes — Empresa"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./app.vacantes.index-Cam9eXSV.js");
const Route$d = createFileRoute("/app/vacantes/")({
  head: () => ({
    meta: [{
      title: "Vacantes — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./app.perfil.index-qfWMmbUl.js");
const Route$c = createFileRoute("/app/perfil/")({
  head: () => ({
    meta: [{
      title: "Perfil — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./app.evaluaciones.index-DG4cotwT.js");
const Route$b = createFileRoute("/app/evaluaciones/")({
  head: () => ({
    meta: [{
      title: "Evaluaciones — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./app.certificaciones.index-DnRh5suH.js");
const Route$a = createFileRoute("/app/certificaciones/")({
  head: () => ({
    meta: [{
      title: "Certificaciones — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./empresa.vacantes.nueva-C5pceXQ1.js");
const Route$9 = createFileRoute("/empresa/vacantes/nueva")({
  head: () => ({
    meta: [{
      title: "Nueva vacante — Empresa"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./empresa.vacantes._id-ClOAQ_Pi.js");
const Route$8 = createFileRoute("/empresa/vacantes/$id")({
  head: () => ({
    meta: [{
      title: "Detalle vacante — Empresa"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./empresa.candidatos._id-oeydiTcs.js");
const Route$7 = createFileRoute("/empresa/candidatos/$id")({
  head: () => ({
    meta: [{
      title: "Perfil candidato — Empresa"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitNotFoundComponentImporter$1 = () => import("./app.vacantes._id-C533ls_k.js");
const $$splitComponentImporter$6 = () => import("./app.vacantes._id-BTCuj89W.js");
const Route$6 = createFileRoute("/app/vacantes/$id")({
  head: () => ({
    meta: [{
      title: "Vacante — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
const $$splitComponentImporter$5 = () => import("./app.perfil.editar-DOZCJ_mZ.js");
const Route$5 = createFileRoute("/app/perfil/editar")({
  head: () => ({
    meta: [{
      title: "Editar perfil — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./app.evaluaciones._id-BFsOu0JM.js");
const Route$4 = createFileRoute("/app/evaluaciones/$id")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./app.certificaciones.catalogo-UkPSCVzG.js");
const Route$3 = createFileRoute("/app/certificaciones/catalogo")({
  head: () => ({
    meta: [{
      title: "Catálogo de Certificaciones — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitNotFoundComponentImporter = () => import("./app.certificaciones._id-C5ipxlv_.js");
const $$splitComponentImporter$2 = () => import("./app.certificaciones._id-BOIz-LzS.js");
const Route$2 = createFileRoute("/app/certificaciones/$id")({
  loader: ({
    params
  }) => {
    const cert = certifications.find((c) => c.id === params.id);
    if (!cert) throw notFound();
    return {
      cert
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.cert.name} — Certificación`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const $$splitComponentImporter$1 = () => import("./app.evaluaciones._id.index-t7i2K3Le.js");
const Route$1 = createFileRoute("/app/evaluaciones/$id/")({
  head: () => ({
    meta: [{
      title: "Evaluación — Find Your Job"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./app.evaluaciones._id.result-DXtOZrdO.js");
const Route = createFileRoute("/app/evaluaciones/$id/result")({
  head: () => ({
    meta: [{
      title: "Resultado — Evaluación"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const PreciosRoute = Route$S.update({
  id: "/precios",
  path: "/precios",
  getParentRoute: () => Route$T
});
const EmpresaRoute = Route$R.update({
  id: "/empresa",
  path: "/empresa",
  getParentRoute: () => Route$T
});
const AppRoute = Route$Q.update({
  id: "/app",
  path: "/app",
  getParentRoute: () => Route$T
});
const IndexRoute = Route$P.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$T
});
const EmpresaIndexRoute = Route$O.update({
  id: "/",
  path: "/",
  getParentRoute: () => EmpresaRoute
});
const AppIndexRoute = Route$N.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppRoute
});
const VerifyCredentialIdRoute = Route$M.update({
  id: "/verify/$credentialId",
  path: "/verify/$credentialId",
  getParentRoute: () => Route$T
});
const LegalTerminosRoute = Route$L.update({
  id: "/legal/terminos",
  path: "/legal/terminos",
  getParentRoute: () => Route$T
});
const LegalPrivacidadRoute = Route$K.update({
  id: "/legal/privacidad",
  path: "/legal/privacidad",
  getParentRoute: () => Route$T
});
const EmpresaVacantesRoute = Route$J.update({
  id: "/vacantes",
  path: "/vacantes",
  getParentRoute: () => EmpresaRoute
});
const EmpresaTalentoRoute = Route$I.update({
  id: "/talento",
  path: "/talento",
  getParentRoute: () => EmpresaRoute
});
const EmpresaTalentPoolRoute = Route$H.update({
  id: "/talent-pool",
  path: "/talent-pool",
  getParentRoute: () => EmpresaRoute
});
const EmpresaRoiRoute = Route$G.update({
  id: "/roi",
  path: "/roi",
  getParentRoute: () => EmpresaRoute
});
const EmpresaFacturacionRoute = Route$F.update({
  id: "/facturacion",
  path: "/facturacion",
  getParentRoute: () => EmpresaRoute
});
const EmpresaEquipoRoute = Route$E.update({
  id: "/equipo",
  path: "/equipo",
  getParentRoute: () => EmpresaRoute
});
const EmpresaEntrevistasRoute = Route$D.update({
  id: "/entrevistas",
  path: "/entrevistas",
  getParentRoute: () => EmpresaRoute
});
const EmpresaDashboardRoute = Route$C.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => EmpresaRoute
});
const EmpresaConfiguracionRoute = Route$B.update({
  id: "/configuracion",
  path: "/configuracion",
  getParentRoute: () => EmpresaRoute
});
const EmpresaAnaliticaRoute = Route$A.update({
  id: "/analitica",
  path: "/analitica",
  getParentRoute: () => EmpresaRoute
});
const AuthRegisterRoute = Route$z.update({
  id: "/auth/register",
  path: "/auth/register",
  getParentRoute: () => Route$T
});
const AuthLoginRoute = Route$y.update({
  id: "/auth/login",
  path: "/auth/login",
  getParentRoute: () => Route$T
});
const AuthForgotPasswordRoute = Route$x.update({
  id: "/auth/forgot-password",
  path: "/auth/forgot-password",
  getParentRoute: () => Route$T
});
const AuthConfirmEmailRoute = Route$w.update({
  id: "/auth/confirm-email",
  path: "/auth/confirm-email",
  getParentRoute: () => Route$T
});
const AppVerificacionRoute = Route$v.update({
  id: "/verificacion",
  path: "/verificacion",
  getParentRoute: () => AppRoute
});
const AppVacantesRoute = Route$u.update({
  id: "/vacantes",
  path: "/vacantes",
  getParentRoute: () => AppRoute
});
const AppSkillsRoute = Route$t.update({
  id: "/skills",
  path: "/skills",
  getParentRoute: () => AppRoute
});
const AppPostulacionesRoute = Route$s.update({
  id: "/postulaciones",
  path: "/postulaciones",
  getParentRoute: () => AppRoute
});
const AppPerfilRoute = Route$r.update({
  id: "/perfil",
  path: "/perfil",
  getParentRoute: () => AppRoute
});
const AppNotificacionesRoute = Route$q.update({
  id: "/notificaciones",
  path: "/notificaciones",
  getParentRoute: () => AppRoute
});
const AppMatchRoute = Route$p.update({
  id: "/match",
  path: "/match",
  getParentRoute: () => AppRoute
});
const AppLearningRoute = Route$o.update({
  id: "/learning",
  path: "/learning",
  getParentRoute: () => AppRoute
});
const AppEvaluacionesRoute = Route$n.update({
  id: "/evaluaciones",
  path: "/evaluaciones",
  getParentRoute: () => AppRoute
});
const AppEntrevistasRoute = Route$m.update({
  id: "/entrevistas",
  path: "/entrevistas",
  getParentRoute: () => AppRoute
});
const AppEmpleabilidadRoute = Route$l.update({
  id: "/empleabilidad",
  path: "/empleabilidad",
  getParentRoute: () => AppRoute
});
const AppDashboardRoute = Route$k.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => AppRoute
});
const AppCvRoute = Route$j.update({
  id: "/cv",
  path: "/cv",
  getParentRoute: () => AppRoute
});
const AppConfiguracionRoute = Route$i.update({
  id: "/configuracion",
  path: "/configuracion",
  getParentRoute: () => AppRoute
});
const AppChallengesRoute = Route$h.update({
  id: "/challenges",
  path: "/challenges",
  getParentRoute: () => AppRoute
});
const AppCertificacionesRoute = Route$g.update({
  id: "/certificaciones",
  path: "/certificaciones",
  getParentRoute: () => AppRoute
});
const AppAprendizajeRoute = Route$f.update({
  id: "/aprendizaje",
  path: "/aprendizaje",
  getParentRoute: () => AppRoute
});
const EmpresaVacantesIndexRoute = Route$e.update({
  id: "/",
  path: "/",
  getParentRoute: () => EmpresaVacantesRoute
});
const AppVacantesIndexRoute = Route$d.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppVacantesRoute
});
const AppPerfilIndexRoute = Route$c.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppPerfilRoute
});
const AppEvaluacionesIndexRoute = Route$b.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppEvaluacionesRoute
});
const AppCertificacionesIndexRoute = Route$a.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppCertificacionesRoute
});
const EmpresaVacantesNuevaRoute = Route$9.update({
  id: "/nueva",
  path: "/nueva",
  getParentRoute: () => EmpresaVacantesRoute
});
const EmpresaVacantesIdRoute = Route$8.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => EmpresaVacantesRoute
});
const EmpresaCandidatosIdRoute = Route$7.update({
  id: "/candidatos/$id",
  path: "/candidatos/$id",
  getParentRoute: () => EmpresaRoute
});
const AppVacantesIdRoute = Route$6.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => AppVacantesRoute
});
const AppPerfilEditarRoute = Route$5.update({
  id: "/editar",
  path: "/editar",
  getParentRoute: () => AppPerfilRoute
});
const AppEvaluacionesIdRoute = Route$4.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => AppEvaluacionesRoute
});
const AppCertificacionesCatalogoRoute = Route$3.update({
  id: "/catalogo",
  path: "/catalogo",
  getParentRoute: () => AppCertificacionesRoute
});
const AppCertificacionesIdRoute = Route$2.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => AppCertificacionesRoute
});
const AppEvaluacionesIdIndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => AppEvaluacionesIdRoute
});
const AppEvaluacionesIdResultRoute = Route.update({
  id: "/result",
  path: "/result",
  getParentRoute: () => AppEvaluacionesIdRoute
});
const AppCertificacionesRouteChildren = {
  AppCertificacionesIdRoute,
  AppCertificacionesCatalogoRoute,
  AppCertificacionesIndexRoute
};
const AppCertificacionesRouteWithChildren = AppCertificacionesRoute._addFileChildren(AppCertificacionesRouteChildren);
const AppEvaluacionesIdRouteChildren = {
  AppEvaluacionesIdResultRoute,
  AppEvaluacionesIdIndexRoute
};
const AppEvaluacionesIdRouteWithChildren = AppEvaluacionesIdRoute._addFileChildren(AppEvaluacionesIdRouteChildren);
const AppEvaluacionesRouteChildren = {
  AppEvaluacionesIdRoute: AppEvaluacionesIdRouteWithChildren,
  AppEvaluacionesIndexRoute
};
const AppEvaluacionesRouteWithChildren = AppEvaluacionesRoute._addFileChildren(
  AppEvaluacionesRouteChildren
);
const AppPerfilRouteChildren = {
  AppPerfilEditarRoute,
  AppPerfilIndexRoute
};
const AppPerfilRouteWithChildren = AppPerfilRoute._addFileChildren(
  AppPerfilRouteChildren
);
const AppVacantesRouteChildren = {
  AppVacantesIdRoute,
  AppVacantesIndexRoute
};
const AppVacantesRouteWithChildren = AppVacantesRoute._addFileChildren(
  AppVacantesRouteChildren
);
const AppRouteChildren = {
  AppAprendizajeRoute,
  AppCertificacionesRoute: AppCertificacionesRouteWithChildren,
  AppChallengesRoute,
  AppConfiguracionRoute,
  AppCvRoute,
  AppDashboardRoute,
  AppEmpleabilidadRoute,
  AppEntrevistasRoute,
  AppEvaluacionesRoute: AppEvaluacionesRouteWithChildren,
  AppLearningRoute,
  AppMatchRoute,
  AppNotificacionesRoute,
  AppPerfilRoute: AppPerfilRouteWithChildren,
  AppPostulacionesRoute,
  AppSkillsRoute,
  AppVacantesRoute: AppVacantesRouteWithChildren,
  AppVerificacionRoute,
  AppIndexRoute
};
const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
const EmpresaVacantesRouteChildren = {
  EmpresaVacantesIdRoute,
  EmpresaVacantesNuevaRoute,
  EmpresaVacantesIndexRoute
};
const EmpresaVacantesRouteWithChildren = EmpresaVacantesRoute._addFileChildren(
  EmpresaVacantesRouteChildren
);
const EmpresaRouteChildren = {
  EmpresaAnaliticaRoute,
  EmpresaConfiguracionRoute,
  EmpresaDashboardRoute,
  EmpresaEntrevistasRoute,
  EmpresaEquipoRoute,
  EmpresaFacturacionRoute,
  EmpresaRoiRoute,
  EmpresaTalentPoolRoute,
  EmpresaTalentoRoute,
  EmpresaVacantesRoute: EmpresaVacantesRouteWithChildren,
  EmpresaIndexRoute,
  EmpresaCandidatosIdRoute
};
const EmpresaRouteWithChildren = EmpresaRoute._addFileChildren(EmpresaRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AppRoute: AppRouteWithChildren,
  EmpresaRoute: EmpresaRouteWithChildren,
  PreciosRoute,
  AuthConfirmEmailRoute,
  AuthForgotPasswordRoute,
  AuthLoginRoute,
  AuthRegisterRoute,
  LegalPrivacidadRoute,
  LegalTerminosRoute,
  VerifyCredentialIdRoute
};
const routeTree = Route$T._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$M as R,
  api as a,
  getAccessToken as b,
  clearAuthSession as c,
  useTheme as d,
  certifications as e,
  evalHistory as f,
  getCurrentUser as g,
  applications as h,
  Route$8 as i,
  jobs as j,
  Route$7 as k,
  learningPath as l,
  Route$6 as m,
  notifications as n,
  Route$2 as o,
  Route$1 as p,
  router as r,
  setAuthSession as s,
  user as u
};
