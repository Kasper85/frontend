import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { ReactNode } from "react";

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: any;
  title: string;
  description: string;
  action?: { label: string; to: string };
}) {
  return (
    <Card className="p-6 sm:p-10 text-center border-dashed">
      <div className="mx-auto h-10 sm:h-12 w-10 sm:w-12 rounded-full bg-primary/10 text-primary grid place-items-center">
        <Icon className="h-5 sm:h-6 w-5 sm:w-6" />
      </div>
      <h3 className="mt-3 sm:mt-4 font-semibold text-base sm:text-lg">{title}</h3>
      <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">{description}</p>
      {action && (
        <Button asChild className="mt-4 sm:mt-5 w-full sm:w-auto">
          <Link to={action.to}>{action.label}</Link>
        </Button>
      )}
    </Card>
  );
}

export function PageHeader({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
      <div className="min-w-0">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">{title}</h1>
        {description && <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{description}</p>}
      </div>
      {children && <div className="flex gap-2 flex-wrap">{children}</div>}
    </div>
  );
}
