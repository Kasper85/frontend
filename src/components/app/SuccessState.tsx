import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface SuccessStateProps {
  title?: string;
  description?: string;
  action?: {
    label: string;
    to?: string;
    onClick?: () => void;
  };
}

export function SuccessState({
  title = "Operación exitosa",
  description = "Tu cambio se ha guardado correctamente.",
  action,
}: SuccessStateProps) {
  return (
    <Card className="p-8 sm:p-12 text-center border-2 border-green-200 bg-green-50">
      <div className="mx-auto h-14 w-14 rounded-full bg-green-100 text-green-600 grid place-items-center mb-4 animate-pulse" aria-hidden="true">
        <CheckCircle2 className="h-7 w-7" />
      </div>
      <h2 className="text-lg sm:text-xl font-semibold text-green-900">{title}</h2>
      <p className="mt-2 text-sm text-green-700 max-w-md mx-auto">{description}</p>
      {action && (
        <div className="mt-6 flex gap-3 justify-center">
          <Button
            variant="default"
            size="sm"
            asChild={!action.onClick}
            onClick={action.onClick}
          >
            {action.to ? <Link to={action.to}>{action.label}</Link> : action.label}
          </Button>
        </div>
      )}
    </Card>
  );
}
