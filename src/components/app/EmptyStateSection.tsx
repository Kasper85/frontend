import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { ComponentType, ReactNode } from "react";

interface EmptyStateSectionProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  contextHint?: string;
  action?: {
    label: string;
    to: string;
    variant?: "default" | "outline" | "secondary";
  };
  secondaryAction?: {
    label: string;
    to: string;
  };
}

export function EmptyStateSection({
  icon: Icon,
  title,
  description,
  contextHint,
  action,
  secondaryAction,
}: EmptyStateSectionProps) {
  return (
    <Card className="p-8 sm:p-12 text-center border-dashed border-2">
      <div
        className="mx-auto h-14 w-14 rounded-full bg-primary/10 text-primary grid place-items-center mb-4"
        aria-hidden="true"
      >
        <Icon className="h-7 w-7" />
      </div>
      <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">{description}</p>
      {contextHint && (
        <p className="mt-3 text-xs font-mono uppercase tracking-widest text-primary/60 max-w-md mx-auto">
          💡 {contextHint}
        </p>
      )}
      {action && (
        <div className="mt-6 flex gap-3 justify-center flex-wrap">
          <Button
            asChild
            variant={action.variant || "default"}
            size="sm"
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-all"
          >
            <Link to={action.to}>{action.label}</Link>
          </Button>
          {secondaryAction && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-all"
            >
              <Link to={secondaryAction.to}>{secondaryAction.label}</Link>
            </Button>
          )}
        </div>
      )}
    </Card>
  );
}
