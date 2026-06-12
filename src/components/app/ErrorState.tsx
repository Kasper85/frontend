import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  description?: string;
  error?: string | Error;
  action?: {
    label: string;
    to?: string;
    onClick?: () => void;
  };
  retryAction?: () => void;
}

export function ErrorState({
  title = "Algo salió mal",
  description = "Ocurrió un error inesperado. Por favor intenta de nuevo.",
  error,
  action,
  retryAction,
}: ErrorStateProps) {
  return (
    <Card className="p-8 sm:p-12 text-center border-2 border-destructive/20 bg-destructive/5">
      <div
        className="mx-auto h-14 w-14 rounded-full bg-destructive/10 text-destructive grid place-items-center mb-4"
        aria-hidden="true"
      >
        <AlertCircle className="h-7 w-7" />
      </div>
      <h2 className="text-lg sm:text-xl font-semibold text-destructive">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">{description}</p>
      {error && (
        <div className="mt-4 p-3 rounded-lg bg-muted text-left text-xs font-mono text-muted-foreground max-w-md mx-auto">
          {error instanceof Error ? error.message : String(error)}
        </div>
      )}
      <div className="mt-6 flex gap-3 justify-center flex-wrap">
        {retryAction && (
          <Button variant="default" size="sm" onClick={retryAction}>
            Reintentar
          </Button>
        )}
        {action && (
          <Button variant="outline" size="sm" asChild={!action.onClick} onClick={action.onClick}>
            {action.to ? <Link to={action.to}>{action.label}</Link> : action.label}
          </Button>
        )}
      </div>
    </Card>
  );
}
