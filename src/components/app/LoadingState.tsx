import { Card } from "@/components/ui/card";

interface LoadingStateProps {
  count?: number;
  className?: string;
  type?: "card" | "line" | "badge";
}

export function LoadingState({ count = 1, className = "", type = "card" }: LoadingStateProps) {
  if (type === "card") {
    return (
      <div className={`space-y-4 ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
          <Card key={i} className="p-6 animate-pulse">
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-3 bg-muted rounded w-full" />
              <div className="h-3 bg-muted rounded w-5/6" />
            </div>
          </Card>
        ))}
      </div>
    );
  }

  if (type === "line") {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="h-3 bg-muted rounded animate-pulse" />
        ))}
      </div>
    );
  }

  if (type === "badge") {
    return (
      <div className={`flex gap-2 flex-wrap ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="h-6 w-16 bg-muted rounded-full animate-pulse" />
        ))}
      </div>
    );
  }

  return null;
}
