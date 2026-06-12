import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/app/EmptyState";
import { listMyCertifications, createCertification, deleteCertification } from "@/lib/api/certifications";
import type { Certification } from "@/lib/api/types";
import { toast } from "sonner";
import { Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/app/certificaciones/")({
  head: () => ({ meta: [{ title: "Certificaciones — Find Your Job" }] }),
  component: Certs,
});

function Certs() {
  const [certs, setCerts] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    listMyCertifications().then((r) => setCerts(r.data)).catch(() => {}).finally(() => setLoading(false));
  }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("cname") as HTMLInputElement).value;
    const issuer = (form.elements.namedItem("cissuer") as HTMLInputElement).value;
    const url = (form.elements.namedItem("curl") as HTMLInputElement).value;
    if (!name || !issuer) { toast.error("Nombre y emisor son requeridos"); return; }
    try {
      const resp = await createCertification({ name, issuer, credential_url: url || undefined });
      setCerts([...certs, resp.certification]);
      toast.success("Certificación agregada");
      setAdding(false);
      form.reset();
    } catch (err: unknown) { toast.error(err instanceof Error ? err.message : "Error"); }
  }

  async function handleDelete(id: string) {
    try {
      await deleteCertification(id);
      setCerts(certs.filter((c) => c.id !== id));
      toast.success("Eliminada");
    } catch (err: unknown) { toast.error(err instanceof Error ? err.message : "Error"); }
  }

  if (loading) return <div className="p-10 text-center text-muted-foreground">Cargando...</div>;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <PageHeader title="Mis certificaciones" description={`${certs.length} certificaciones.`}>
        <Button size="sm" onClick={() => setAdding(!adding)}><Plus className="h-4 w-4 mr-1" /> Agregar</Button>
      </PageHeader>
      {adding && (
        <Card className="p-4 sm:p-6">
          <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 items-end" aria-label="Agregar nueva certificación">
            <div className="flex flex-col gap-1.5"><Label htmlFor="cname">Nombre *</Label><Input id="cname" name="cname" placeholder="AWS Solutions Architect" aria-required="true" required /></div>
            <div className="flex flex-col gap-1.5"><Label htmlFor="cissuer">Emisor *</Label><Input id="cissuer" name="cissuer" placeholder="Amazon" aria-required="true" required /></div>
            <div className="flex flex-col gap-1.5"><Label htmlFor="curl">URL credencial</Label><Input id="curl" name="curl" placeholder="https://..." aria-describedby="url-help" /></div>
            <Button type="submit" size="sm" className="sm:col-span-1" aria-label="Guardar nueva certificación">Guardar</Button>
            <p id="url-help" className="sr-only">Ingresa la URL de credencial opcional para verificación</p>
          </form>
        </Card>
      )}
      {certs.length === 0 ? (
        <Card className="p-10 text-center text-muted-foreground"><p>No tienes certificaciones todavía.</p></Card>
      ) : (
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => (
            <Card key={c.id} className="p-4 sm:p-5 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3">
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm sm:text-base leading-tight">{c.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{c.issuer}</p>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  {c.verified && <Badge className="bg-primary text-primary-foreground text-[10px]">Verificado</Badge>}
                  <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => handleDelete(c.id)}><Trash2 className="h-3 w-3" /></Button>
                </div>
              </div>
              {c.issue_date && <p className="text-xs text-muted-foreground">Emitida: {c.issue_date}</p>}
              {c.credential_url && <a href={c.credential_url} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline mt-2 block">Ver credencial</a>}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
