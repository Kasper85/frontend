import { jsxs, jsx } from "react/jsx-runtime";
import { useRouterState, Link, useNavigate, Outlet } from "@tanstack/react-router";
import { u as useSidebar, S as Sidebar, a as SidebarHeader, b as SidebarContent, c as SidebarFooter, d as SidebarGroup, e as SidebarGroupLabel, f as SidebarGroupContent, g as SidebarMenu, h as SidebarMenuItem, i as SidebarMenuButton, j as SidebarTrigger, D as DropdownMenu, k as DropdownMenuTrigger, l as DropdownMenuContent, m as DropdownMenuLabel, n as DropdownMenuSeparator, o as DropdownMenuItem, p as SidebarProvider, q as SidebarInset } from "./dropdown-menu-C0oriLEY.js";
import { LayoutDashboard, UserCircle, FileText, Activity, Radar, Sparkles, ShieldCheck, Briefcase, Inbox, Calendar, GraduationCap, Award, Cpu, BookOpen, Bell, Settings, Search } from "lucide-react";
import { L as Logo } from "./Logo-Bbf78lQK.js";
import { u as user, g as getCurrentUser, c as clearAuthSession } from "./router-xyFxSyDz.js";
import { I as Input } from "./input-C0QjszdI.js";
import { B as Button } from "./button-BC9oXVxV.js";
import { T as ThemeToggle } from "./ThemeToggle-cQOvWIUN.js";
import { B as Badge } from "./badge-DyfXZgLs.js";
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
const main = [
  { title: "Dashboard", url: "/app/dashboard", icon: LayoutDashboard },
  { title: "Mi Perfil", url: "/app/perfil", icon: UserCircle },
  { title: "Mi CV", url: "/app/cv", icon: FileText }
];
const intelligence = [
  { title: "Empleabilidad IA", url: "/app/empleabilidad", icon: Activity },
  { title: "Mapa de Skills", url: "/app/skills", icon: Radar },
  { title: "Explicabilidad Match", url: "/app/match", icon: Sparkles },
  { title: "Verificación Zero Trust", url: "/app/verificacion", icon: ShieldCheck }
];
const employment = [
  { title: "Vacantes", url: "/app/vacantes", icon: Briefcase },
  { title: "Mis Postulaciones", url: "/app/postulaciones", icon: Inbox },
  { title: "Entrevistas", url: "/app/entrevistas", icon: Calendar }
];
const growth = [
  { title: "Evaluaciones", url: "/app/evaluaciones", icon: GraduationCap },
  { title: "Certificaciones", url: "/app/certificaciones", icon: Award },
  { title: "Edge AI Challenges", url: "/app/challenges", icon: Cpu },
  { title: "Learning Path", url: "/app/learning", icon: BookOpen }
];
const account = [
  { title: "Notificaciones", url: "/app/notificaciones", icon: Bell },
  { title: "Configuración", url: "/app/configuracion", icon: Settings }
];
function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  return /* @__PURE__ */ jsxs(Sidebar, { collapsible: "icon", children: [
    /* @__PURE__ */ jsx(SidebarHeader, { className: "border-b border-sidebar-border", children: /* @__PURE__ */ jsx("div", { className: "flex items-center h-12 px-2", children: /* @__PURE__ */ jsx(Logo, { showText: !collapsed }) }) }),
    /* @__PURE__ */ jsxs(SidebarContent, { children: [
      /* @__PURE__ */ jsx(Group, { label: "Principal", items: main, collapsed, pathname }),
      /* @__PURE__ */ jsx(
        Group,
        {
          label: "Inteligencia IA",
          items: intelligence,
          collapsed,
          pathname
        }
      ),
      /* @__PURE__ */ jsx(Group, { label: "Empleabilidad", items: employment, collapsed, pathname }),
      /* @__PURE__ */ jsx(Group, { label: "Crecimiento", items: growth, collapsed, pathname }),
      /* @__PURE__ */ jsx(Group, { label: "Cuenta", items: account, collapsed, pathname })
    ] }),
    /* @__PURE__ */ jsx(SidebarFooter, { className: "border-t border-sidebar-border", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 px-2 py-2", children: [
      /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold flex-none", children: "DR" }),
      !collapsed && /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold truncate", children: user.name }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground truncate", children: user.title })
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
function AppTopbar() {
  const nav = useNavigate();
  const user2 = getCurrentUser();
  function handleLogout() {
    clearAuthSession();
    nav({ to: "/auth/login" });
  }
  return /* @__PURE__ */ jsxs("header", { className: "h-14 sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur flex items-center gap-3 px-3 sm:px-4", children: [
    /* @__PURE__ */ jsx(SidebarTrigger, { className: "text-muted-foreground" }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex-1 max-w-md hidden sm:block", children: [
      /* @__PURE__ */ jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsx(Input, { placeholder: "Buscar vacantes, skills, certificaciones…", className: "pl-8 h-9 bg-muted/40 border-border" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 sm:hidden" }),
    /* @__PURE__ */ jsx(ThemeToggle, {}),
    /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "icon", className: "relative", children: /* @__PURE__ */ jsx(Link, { to: "/app/notificaciones", "aria-label": "Notificaciones", children: /* @__PURE__ */ jsx(Bell, { className: "h-4 w-4" }) }) }),
    /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 rounded-md p-1 pr-2 hover:bg-muted", children: [
        /* @__PURE__ */ jsx("div", { className: "h-7 w-7 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold", children: user2?.name?.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() ?? "U" }),
        /* @__PURE__ */ jsx("span", { className: "hidden md:block text-sm font-medium", children: user2?.name?.split(" ")[0] ?? "Usuario" })
      ] }) }),
      /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [
        /* @__PURE__ */ jsx(DropdownMenuLabel, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: user2?.name ?? "Usuario" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: user2?.email ?? "" })
        ] }) }),
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/app/perfil", children: "Mi perfil" }) }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/app/configuracion", children: "Configuración" }) }),
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
function AppLayout() {
  return /* @__PURE__ */ jsx(SidebarProvider, { children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen w-full bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(AppSidebar, {}),
    /* @__PURE__ */ jsxs(SidebarInset, { className: "flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsx(AppTopbar, {}),
      /* @__PURE__ */ jsx("main", { className: "flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden", children: /* @__PURE__ */ jsx(Outlet, {}) })
    ] })
  ] }) });
}
export {
  AppLayout as component
};
