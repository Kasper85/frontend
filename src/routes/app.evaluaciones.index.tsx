import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader } from "@/components/app/EmptyState";
import { listEvaluations } from "@/lib/api/evaluations";
import { listMyEvaluationResults } from "@/lib/api/evaluations";
import type { Evaluation, EvaluationResultResponse } from "@/lib/api/types";
import { Clock, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/app/evaluaciones/")({
  head: () => ({ meta: [{ title: "Evaluaciones — Find Your Job" }] }),
  component: Evals,
});

function Evals() {
  const [evals, setEvals] = useState<Evaluation[]>([]);
  const [results, setResults] = useState<EvaluationResultResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([listEvaluations(), listMyEvaluationResults()])
      .then(([e, r]) => { setEvals(e.data.map((item) => item.evaluation)); setResults(r.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-10 text-center text-muted-foreground">Cargando evaluaciones...</div>;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <PageHeader title="Evaluaciones técnicas" description="Valida tus skills y desbloquea certificaciones." />
      <Tabs defaultValue="catalogo">
        <TabsList className="grid w-full grid-cols-2"><TabsTrigger value="catalogo" className="text-xs sm:text-sm">Catálogo ({evals.length})</TabsTrigger><TabsTrigger value="historial" className="text-xs sm:text-sm">Historial ({results.length})</TabsTrigger></TabsList>
        <TabsContent value="catalogo" className="mt-5">
          {evals.length === 0 ? (
            <Card className="p-10 text-center text-muted-foreground"><p>No hay evaluaciones disponibles.</p></Card>
          ) : (
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {evals.filter((e) => e.is_active).map((ev) => (
                <Card key={ev.id} className="p-4 sm:p-5 hover:shadow-md transition-shadow flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3">
                    <h3 className="font-semibold text-sm sm:text-base leading-tight">{ev.title}</h3>
                    <Badge variant="outline" className="text-xs w-fit">{ev.type}</Badge>
                  </div>
                  {ev.description && <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{ev.description}</p>}
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-4 mt-auto">
                    {ev.duration_minutes && <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{ev.duration_minutes}m</span>}
                    {ev.max_score && <span>Max: {ev.max_score}</span>}
                    {ev.passing_score && <span>Aprueba: {ev.passing_score}</span>}
                  </div>
                  <Button asChild size="sm" variant="outline" className="w-full"><a href={`/app/evaluaciones/${ev.id}`} className="inline-flex items-center justify-center"><ChevronRight className="h-3.5 w-3.5 mr-1" /> Tomar</a></Button>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="historial" className="mt-5">
          {results.length === 0 ? (
            <Card className="p-10 text-center text-muted-foreground"><p>No has completado ninguna evaluación.</p></Card>
          ) : (
            <div className="space-y-2 sm:space-y-3">
              {results.map((r) => (
                <Card key={r.result.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:shadow-sm transition-shadow">
                  <div className="min-w-0">
                    <p className="font-medium text-sm sm:text-base">{r.evaluation_title ?? r.result.evaluation_id}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{r.result.taken_at?.slice(0, 10) ?? "—"}</p>
                  </div>
                  <Badge className={`text-xs sm:text-sm ${r.result.passed ? "bg-primary text-primary-foreground" : "bg-destructive/15 text-destructive"} whitespace-nowrap`}>{r.result.passed ? `Aprobado (${r.result.score})` : `Reprobado (${r.result.score})`}</Badge>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
