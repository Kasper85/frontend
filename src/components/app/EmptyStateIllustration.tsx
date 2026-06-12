import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import React from "react";

export interface EmptyStateConfig {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionUrl?: string;
  variant?: "info" | "success" | "warning";
}

export function EmptyStateIllustration({ config }: { config: EmptyStateConfig }) {
  const variantColors = {
    info: "bg-blue-50 border-blue-200",
    success: "bg-green-50 border-green-200",
    warning: "bg-yellow-50 border-yellow-200",
  };

  const variant = config.variant || "info";
  const variantClass = variantColors[variant];

  return (
    <Card className={`p-12 text-center border-2 ${variantClass}`}>
      <div className="flex justify-center mb-4">
        <div className="h-16 w-16 rounded-full bg-primary/10 grid place-items-center">
          <div className="h-8 w-8 text-primary">{config.icon}</div>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{config.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">{config.description}</p>
      {config.actionLabel && config.actionUrl && (
        <Button asChild size="sm" className="mt-6" variant="outline">
          <Link to={config.actionUrl}>{config.actionLabel}</Link>
        </Button>
      )}
    </Card>
  );
}
