import { jsxs, jsx } from "react/jsx-runtime";
import { useRouterState, Link, useNavigate, Outlet } from "@tanstack/react-router";
import { u as useSidebar, S as Sidebar, a as SidebarHeader, b as SidebarContent, c as SidebarFooter, d as SidebarGroup, e as SidebarGroupLabel, f as SidebarGroupContent, g as SidebarMenu, h as SidebarMenuItem, i as SidebarMenuButton, j as SidebarTrigger, D as DropdownMenu, k as DropdownMenuTrigger, l as DropdownMenuContent, m as DropdownMenuLabel, n as DropdownMenuSeparator, o as DropdownMenuItem, p as SidebarProvider, q as SidebarInset } from "./dropdown-menu-C0oriLEY.js";
import { Building2, LayoutDashboard, Briefcase, Users, Sparkles, Calendar, BarChart3, TrendingUp, UsersRound, CreditCard, Settings, Search, Plus, Bell } from "lucide-react";
import { L as Logo } from "./Logo-Bbf78lQK.js";
import { c as company } from "./company-BxHeUywR.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
import { I as Input } from "./input-C0QjszdI.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { T as ThemeToggle } from "./ThemeToggle-DdyTx7An.js";
import { g as getCurrentUser, c as clearAuthSession } from "./router-CmATITWS.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-separator";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-dropdown-menu";
import "@tanstack/react-query";
import "sonner";
const hiring = [
  { title: "Dashboard", url: "/empresa/dashboard", icon: LayoutDashboard },
  { title: "Vacantes", url: "/empresa/vacantes", icon: Briefcase },
  { title: "Buscar talento", url: "/empresa/talento", icon: Users },
  { title: "Talent Pool", url: "/empresa/talent-pool", icon: Sparkles },
  { title: "Entrevistas", url: "/empresa/entrevistas", icon: Calendar }
];
const insights = [
  { title: "Analítica", url: "/empresa/analitica", icon: BarChart3 },
  { title: "ROI", url: "/empresa/roi", icon: TrendingUp }
];
const org = [
  { title: "Equipo", url: "/empresa/equipo", icon: UsersRound },
  { title: "Facturación", url: "/empresa/facturacion", icon: CreditCard },
  { title: "Configuración", url: "/empresa/configuracion", icon: Settings }
];
function EmpresaSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  return /* @__PURE__ */ jsxs(Sidebar, { collapsible: "icon", children: [
    /* @__PURE__ */ jsxs(SidebarHeader, { className: "border-b border-sidebar-border", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center h-12 px-2", children: /* @__PURE__ */ jsx(Logo, { showText: !collapsed }) }),
      !collapsed && /* @__PURE__ */ jsx("div", { className: "px-2 pb-2", children: /* @__PURE__ */ jsxs(
        Badge,
        {
          variant: "outline",
          className: "font-mono text-[10px] border-primary/40 text-primary bg-primary/10",
          children: [
            /* @__PURE__ */ jsx(Building2, { className: "h-3 w-3 mr-1" }),
            " Empresa"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs(SidebarContent, { children: [
      /* @__PURE__ */ jsx(Group, { label: "Reclutamiento", items: hiring, collapsed, pathname }),
      /* @__PURE__ */ jsx(Group, { label: "Insights", items: insights, collapsed, pathname }),
      /* @__PURE__ */ jsx(Group, { label: "Organización", items: org, collapsed, pathname })
    ] }),
    /* @__PURE__ */ jsx(SidebarFooter, { className: "border-t border-sidebar-border", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 px-2 py-2", children: [
      /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-md bg-primary text-primary-foreground grid place-items-center text-xs font-bold flex-none font-mono", children: company.logo }),
      !collapsed && /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold truncate", children: company.name }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground truncate", children: [
          "Plan ",
          company.plan
        ] })
      ] })
    ] }) })
  ] });
}
function Group({
  label,
  items,
  collapsed,
  pathname
}) {
  return /* @__PURE__ */ jsxs(SidebarGroup, { children: [
    !collapsed && /* @__PURE__ */ jsx(SidebarGroupLabel, { className: "text-[10px] uppercase tracking-widest", children: label }),
    /* @__PURE__ */ jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsx(SidebarMenu, { children: items.map((it) => {
      const active = pathname === it.url || pathname.startsWith(it.url + "/");
      return /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, isActive: active, tooltip: it.title, children: /* @__PURE__ */ jsxs(Link, { to: it.url, className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(it.icon, { className: "h-4 w-4" }),
        !collapsed && /* @__PURE__ */ jsx("span", { children: it.title })
      ] }) }) }, it.url);
    }) }) })
  ] });
}
function EmpresaTopbar() {
  const nav = useNavigate();
  const user = getCurrentUser();
  function handleLogout() {
    clearAuthSession();
    nav({ to: "/auth/login" });
  }
  return /* @__PURE__ */ jsxs("header", { className: "h-14 sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur flex items-center gap-3 px-3 sm:px-4", children: [
    /* @__PURE__ */ jsx(SidebarTrigger, { className: "text-muted-foreground" }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex-1 max-w-md hidden sm:block", children: [
      /* @__PURE__ */ jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsx(Input, { placeholder: "Buscar candidatos, vacantes, skills…", className: "pl-8 h-9 bg-muted/40 border-border" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 sm:hidden" }),
    /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", className: "hidden md:inline-flex", children: /* @__PURE__ */ jsxs(Link, { to: "/empresa/vacantes/nueva", children: [
      /* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5 mr-1" }),
      " Nueva vacante"
    ] }) }),
    /* @__PURE__ */ jsx(ThemeToggle, {}),
    /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", className: "relative", "aria-label": "Notificaciones", children: [
      /* @__PURE__ */ jsx(Bell, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background" })
    ] }),
    /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 rounded-md p-1 pr-2 hover:bg-muted", children: [
        /* @__PURE__ */ jsx("div", { className: "h-7 w-7 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold", children: user?.name?.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() ?? "U" }),
        /* @__PURE__ */ jsx("span", { className: "hidden md:block text-sm font-medium", children: user?.name?.split(" ")[0] ?? "Usuario" })
      ] }) }),
      /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ jsx(DropdownMenuLabel, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: user?.name ?? "Usuario" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: user?.email ?? "" })
        ] }) }),
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/empresa/configuracion", children: "Configuración" }) }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/empresa/facturacion", children: "Facturación" }) }),
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { children: "Plan" }),
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "font-mono text-[10px]", children: "FREE" })
        ] }),
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: handleLogout, className: "cursor-pointer", children: "Cerrar sesión" })
      ] })
    ] })
  ] });
}
function EmpresaLayout() {
  return /* @__PURE__ */ jsx(SidebarProvider, { children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen w-full bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(EmpresaSidebar, {}),
    /* @__PURE__ */ jsxs(SidebarInset, { className: "flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsx(EmpresaTopbar, {}),
      /* @__PURE__ */ jsx("main", { className: "flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden", children: /* @__PURE__ */ jsx(Outlet, {}) })
    ] })
  ] }) });
}
export {
  EmpresaLayout as component
};
