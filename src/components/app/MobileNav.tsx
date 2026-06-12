import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Logo } from "@/components/Logo";

interface MobileNavItem {
  title: string;
  url: string;
  icon?: React.ReactNode;
}

interface MobileNavProps {
  groups: { label: string; items: MobileNavItem[] }[];
  userName?: string;
  userTitle?: string;
}

export function MobileNav({ groups, userName = "Usuario", userTitle = "Tech Professional" }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button - visible on mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile menu sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64 p-0 flex flex-col">
          <SheetHeader className="border-b border-sidebar-border p-4">
            <div className="flex items-center justify-between">
              <Logo showText={true} />
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            </div>
          </SheetHeader>

          {/* Navigation groups */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {groups.map((group) => (
              <div key={group.label}>
                <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                  {group.label}
                </h3>
                <nav className="space-y-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.url}
                      to={item.url}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent text-foreground"
                    >
                      {item.icon && <span className="h-4 w-4 text-muted-foreground">{item.icon}</span>}
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* User footer */}
          <div className="border-t border-sidebar-border p-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold flex-none">
                {userName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold truncate">{userName}</p>
                <p className="text-xs text-muted-foreground truncate">{userTitle}</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
