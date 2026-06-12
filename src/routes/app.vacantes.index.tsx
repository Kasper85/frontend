import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/app/JobCard";
import { PageHeader } from "@/components/app/EmptyState";
import { listJobs } from "@/lib/api/jobs";
import type { Job } from "@/lib/api/types";
import { Search, ArrowUpDown } from "lucide-react";

export const Route = createFileRoute("/app/vacantes/")({
  head: () => ({ meta: [{ title: "Vacantes — Find Your Job" }] }),
  component: Vacantes,
});

function Vacantes() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("published");
  const [sortBy, setSortBy] = useState<"relevance" | "newest">("relevance");

  useEffect(() => {
    listJobs({ status, limit: "50" })
      .then((resp) => setJobs(resp.data))
      .catch(() => setJobs([]))
      .finally(() => setLoading(false));
  }, [status]);

  const filtered = jobs
    .filter(
      (j) =>
        q === "" ||
        j.title.toLowerCase().includes(q.toLowerCase()) ||
        (j.description ?? "").toLowerCase().includes(q.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime();
      }
      // "relevance" - por match score si está disponible
      return (b.match ?? 0) - (a.match ?? 0);
    });

  return (
    <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
      <PageHeader
        title="Vacantes"
        description={loading ? "Cargando..." : `${filtered.length} vacantes ${filtered.length === 1 ? "disponible" : "disponibles"}.`}
      />
      <Card className="p-3 sm:p-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input 
                value={q} 
                onChange={(e) => setQ(e.target.value)} 
                placeholder="Buscar por rol, empresa, skills…" 
                className="pl-8 h-10 text-sm"
                aria-label="Buscar vacantes"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant={sortBy === "relevance" ? "default" : "outline"} 
                size="sm"
                onClick={() => setSortBy("relevance")}
                className="text-xs h-10"
              >
                Relevancia
              </Button>
              <Button 
                variant={sortBy === "newest" ? "default" : "outline"} 
                size="sm"
                onClick={() => setSortBy("newest")}
                className="text-xs h-10"
              >
                <ArrowUpDown className="h-3 w-3 mr-1" /> Nuevas
              </Button>
            </div>
          </div>
          {q && (
            <div className="text-xs text-muted-foreground">
              {filtered.length} resultado{filtered.length !== 1 ? "s" : ""} para "{q}"
            </div>
          )}
        </div>
      </Card>
      {loading ? (
        <div className="flex flex-col gap-4">
          <div className="h-24 bg-muted rounded-lg animate-pulse" />
          <div className="h-24 bg-muted rounded-lg animate-pulse" />
          <div className="h-24 bg-muted rounded-lg animate-pulse" />
        </div>
      ) : filtered.length === 0 ? (
        <Card className="p-8 sm:p-12 text-center border-dashed">
          <div className="h-12 w-12 rounded-full bg-muted grid place-items-center mx-auto mb-4" aria-hidden="true">
            <Search className="h-6 w-6 text-muted-foreground" />
          </div>
          <h2 className="font-semibold">No se encontraron vacantes</h2>
          <p className="text-sm text-muted-foreground mt-1">Intenta otros términos de búsqueda</p>
        </Card>
      ) : (
        <div className="grid gap-3 sm:gap-4" role="list">
          {filtered.map((job) => (
            <div key={job.id} role="listitem">
              <JobCard job={job} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
