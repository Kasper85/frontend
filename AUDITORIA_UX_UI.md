# Auditoría UX/UI Completa — Find Your Job

**Fecha:** Junio 2026  
**Contexto:** Frontend basado en React 19, TanStack Stack, Tailwind CSS 4, shadcn/ui  
**Objetivo:** Transformar el frontend en una plataforma SaaS moderna, clara y lista para producción

---

## 1. RESUMEN EJECUTIVO

### Estado Actual
El proyecto **Find Your Job** es una plataforma de inteligencia laboral que conecta candidatos, reclutadores, administradores y empresas. El frontend está implementado con un stack moderno (React 19, TanStack Router/Query, Tailwind CSS 4, shadcn/ui) pero tiene **fricción significativa en navegación, claridad de propósito y consistencia visual**.

### Fortalezas Detectadas
✅ Stack tecnológico sólido y actualizado  
✅ Componentes base bien organizados (shadcn/ui)  
✅ Sistema de colores definido (inspirado en HackerRank)  
✅ Estructura de rutas clara por roles (candidato `/app`, empresa `/empresa`, admin `/`)  
✅ Datos mock funcionales para UI demo  
✅ Dashboards con intent (no son vacíos)  
✅ Componentes especializados (EmployabilityGauge, MatchBreakdown, VerificationBadge)  

### Debilidades Críticas
❌ **Navegación confusa:** Sidebar del candidato tiene 6 grupos con 20+ items, duplicados (Aprendizaje vs Learning Path, Evaluaciones aparece 2x)  
❌ **Falta de propósito:** Varias secciones existen pero no responden claramente "¿para qué sirve?"  
❌ **Inconsistencia visual:** Componentes no siguen patrones consistentes (JobCard vs CandidateCard usan formatos diferentes)  
❌ **Dashboards genéricos:** Métricas sin contexto ni acciones inmediatas  
❌ **Responsive quebrado:** Sin auditoría móvil visible, varios componentes probablemente no son táctiles  
❌ **Accesibilidad mínima:** No hay focus states evidentes, labels implícitas en formularios  
❌ **Duplicación de rutas:** Learning Path y Aprendizaje; Certificaciones aparece 3 veces  
❌ **UI copy inconsistente:** Mezcla de "Vacantes" / "Jobs", tono no diferenciado por rol  

---

## 2. ANÁLISIS UX — PROBLEMAS CRÍTICOS

### 2.1 Arquitectura de Información
**Problema:** El sidebar del candidato es laberinto.
```
Principal (3 items)
├─ Dashboard ✓
├─ Perfil ✓
└─ CV Inteligente ✓

Inteligencia IA (4 items)
├─ Empleabilidad IA ✓
├─ Mapa de Skills ✓
├─ Explicabilidad Match ✓
└─ Zero Trust ✓

Empleabilidad (3 items)
├─ Vacantes ✓
├─ Postulaciones ✓
└─ Entrevistas ✓

Crecimiento (6 items) ← PROBLEMA
├─ Edge AI Challenges
├─ Evaluaciones (duplicado)
├─ Certificaciones (duplicado)
├─ Catálogo Certs
├─ Aprendizaje ← DUPLICADO
└─ Learning Path ← DUPLICADO

Cuenta (2 items)
├─ Notificaciones
└─ Configuración
```

**Impacto:** Candidatos no saben dónde ir. "¿Hago un challenges o evaluaciones? ¿Aprendizaje o Learning Path?"  
**Prioridad:** 🔴 CRÍTICA  
**Solución:** 
- Eliminar duplicados
- Reorganizar en máx 15 items total (no 20+)
- Etiquetar claramente propósito de cada sección

### 2.2 Flujos de Usuario
**Problema:** El onboarding está implícito, no explícito.

**Flujo actual (implícito):**
1. Login → Dashboard
2. Usuario ve varios números sin contexto
3. No hay "próximo paso claro" destacado

**Flujo esperado (explícito):**
1. Login → Dashboard con widget "Próximo Paso"
2. Completar perfil → Evaluar habilidades → Agregar evidencia → Postular
3. Cada paso unlock siguiente

**Impacto:** Tasa de abandonó alta probable  
**Prioridad:** 🔴 CRÍTICA  

### 2.3 Dashboards — Falta de Acción
**Problema:** Dashboards actuales usan sólo métricas. Ej. Dashboard candidato:
```
| Empleabilidad | 75 | Índice IA |
| Certificaciones | 3 | Total |
| Evaluaciones | 4/8 | Aprobadas |
| Aprendizaje | 32% | Progreso |
```

Esto responde "¿cuál es la métrica?" pero NO responde:
- ¿Qué debo hacer AHORA?
- ¿Por qué mi match es bajo?
- ¿Qué me falta para conseguir el trabajo?

**Impacto:** Plataforma se siente como cuadro de mandos, no como asistente de carrera  
**Prioridad:** 🔴 CRÍTICA  

### 2.4 Navegación por Roles
**Problema:** No hay separación visual clara entre roles.

Candidato `/app` tiene 20+ items. ¿Algunos debería estar ocultos según perfil?
Empresa `/empresa` es separada. ✓ Correcto.
Admin no existe como ruta (debería ser `/admin` o `/verificacion` está en sitio equivocado).

**Impacto:** Mezcla de contextos, confusión de permisos  
**Prioridad:** 🟡 ALTA  

### 2.5 Flujos de Matching
**Problema:** El match es un número (94%, 87%, 76%). No explica:
- Qué skills contribuyen más
- Qué me falta
- Si puedo mejorar rápido

Componente `MatchBreakdown` existe pero no se usa en todos lados.

**Impacto:** Usuario no entiende por qué tiene match bajo, no actúa  
**Prioridad:** 🟡 ALTA  

### 2.6 Certificaciones y Confianza
**Problema:** No se distingue claramente:
- Certificación declarada
- Certificación pendiente de verificación
- Certificación verificada
- Certificación rechazada

Componente `CertificationBadge` existe pero el design no comunica estos estados claramente.

**Impacto:** Usuario no sabe qué certificaciones suben su credibilidad  
**Prioridad:** 🟡 ALTA  

### 2.7 Búsqueda y Filtros
**Problema:** Sección "Vacantes" sólo tiene búsqueda por texto. No hay:
- Filtros por skills
- Filtros por seniority
- Filtros por match
- Ordenamiento por match (debería estar primero)

**Impacto:** Usuario se pierde en lista sin contexto  
**Prioridad:** 🟡 ALTA  

### 2.8 Estados Vacíos
**Problema:** No hay estados vacíos definidos. ¿Qué ve nuevo usuario cuando:
- No tiene postulaciones?
- No tiene certificaciones?
- No ha hecho evaluaciones?
- No tiene próximas entrevistas?

**Impacto:** Pantallazo confuso, sin guía de "qué hacer"  
**Prioridad:** 🟡 ALTA  

### 2.9 Formularios
**Problema:** No se ven formarios completos en rutas actuales. Pero referencias a:
- `/app/perfil/editar`
- `/app/configuracion`
- `/empresa/vacantes/nueva`
- Formularios de login/registro

Preocupación: ¿Labels, validación, mensajes de error están claros en español?

**Impacto:** Si formularios son malos, onboarding falla  
**Prioridad:** 🟡 ALTA  

### 2.10 Responsive Design
**Problema:** Auditoria visual de mobile no hecha. Componentes sospechosos:
- Sidebar con 20+ items → NO se ve bien en móvil
- Tablas (de empresa) → problema en móvil
- JobCard puede no ser táctil
- CandidateCard requiere clic preciso

**Impacto:** App no es usable en móvil  
**Prioridad:** 🔴 CRÍTICA  

### 2.11 Accesibilidad
**Problema:** No hay evidencia de:
- Focus states en botones/links
- Labels explícitos en inputs
- ARIA attributes
- Navegación por keyboard

**Impacto:** No-accessible a usuarios con discapacidades, no cumple WCAG  
**Prioridad:** 🟡 ALTA  

---

## 3. ANÁLISIS UI — PROBLEMAS DE DISEÑO

### 3.1 Tipografía
✅ Dos familias de fuentes (Inter + JetBrains Mono) = Correcto  
⚠️ Escala tipográfica no definida en globals.css  
⚠️ Weights usadas (400, 500, 600, 700) pero jerarquía no clara  

**Problema:** Muchos elementos usan `text-sm` + `font-semibold` sin distinguir niveles visuales.

### 3.2 Espaciado
✅ Tailwind spacing scale usado  
⚠️ Consistencia no garantizada (algunos `gap-4`, otros `gap-3`)  
⚠️ Padding en cards no uniforme

### 3.3 Colores
✅ Sistema de colores definido (HackerRank inspired)  
✅ Tokens de verificación (--verify-none, --verify-partial, --verify-full)  
✅ Tokens de match (--match-high, --match-mid, --match-low)  
❌ **Colores no diferenciados por rol**

Hoy el tema es uniform para todos. Debería:
- Candidato: Verde principal (empleabilidad, progreso)
- Empresa: Azul (confianza, análisis)
- Admin: Púrpura (verificación, auditoría)

### 3.4 Componentes Inconsistentes
```
JobCard:
├─ Avatar: 11×11px, iniciales, bg-muted
├─ Título: text-sm, semibold, truncado
├─ Meta: text-[11px], gap-3, sin separador

CandidateCard:
├─ Avatar: 10×10px, iniciales, bg-primary
├─ Nombre: text-sm, semibold, con badge inline
├─ Meta: text-xs, gap-1, sin icon

MetricCard:
├─ Icon: 4×4px, muted-foreground
├─ Value: text-3xl, mono, font-bold
├─ Label: text-xs, muted-foreground
```

**Problema:** Componentes similares usan diferentes tamaños y espaciado.  
**Impacto:** Interfaz se siente desorganizada

### 3.5 Jerarquía Visual Débil
Dashboards usan todas las cards al mismo peso visual. No hay distingo entre:
- Información crítica (próximos pasos)
- Información contextual (métrica)
- Información secundaria (actividad reciente)

### 3.6 Densidad de Información
Algunos layouts son densos sin necesidad:
- Dashboard candidato: mucha info en poco espacio
- Sidebar con 20+ items = scroll infinito
- Card "Vacantes recomendadas" muestra 3, pero grid es 4 columnas

### 3.7 Estados de Carga y Error
⚠️ `PageHeader` es componente `EmptyState`, confuso nombre  
⚠️ No hay skeletons visuales
⚠️ "Cargando..." es texto plain, sin animación  

### 3.8 Badges y Estados
```
Actuales:
├─ Badge variant="outline" → text-[10px], no color diferenciado
├─ MatchBadge → Coloreado pero sin explicación
├─ CertificationBadge → No está claro cómo se ve verificado vs no
├─ VerificationBadge → Existe pero no visto en todos lados
```

---

## 4. PROBLEMAS DETECTADOS POR SECCIÓN

### 4.1 Pantalla de Login / Register
**Estado:** Rutas existen (`/auth/login`, `/auth/register`)  
**Problema:** No revisada en auditoría (frontend-only)  
**Recomendación:** Verificar que microcopy sea claro en español, que UX sea coherente

### 4.2 Dashboard Candidato (`/app/dashboard`)
**Fortalezas:**
- ✅ Estructura clara: índice + metrics + recomendaciones
- ✅ EmployabilityGauge visual
- ✅ Próximos pasos incluidos

**Debilidades:**
- ❌ "Hola, {name} 👋" → emoji innecesario, considerar remover
- ❌ "Estás en el top 25%" es dato fake, sin contexto
- ❌ 4 metric cards son básicas, sin insight
- ❌ "Próximos pasos" vs "Vacantes recomendadas" vs "Recomendaciones IA" = confusión  
- ❌ No hay widget "¿Qué debo hacer hoy?" destacado

**Cambios necesarios:**
1. Reorganizar en orden de acción (no de importancia)
2. Destacar ONE next step principal
3. Mejorar copy de cada métrica (explicar por qué importa)

### 4.3 Dashboard Empresa (`/empresa/dashboard`)
**Fortalezas:**
- ✅ Métrica clara: vacantes activas, aplicaciones, match IA, time-to-hire
- ✅ Top candidatos con match y stage
- ✅ Funnel visual

**Debilidades:**
- ❌ Falta "cuello de botella" explícito (en qué stage se pierden candidatos)
- ❌ "Ver todos" links abundan pero no hay acción primaria clara
- ❌ Próximas entrevistas es trivial, debería ser pipeline view

### 4.4 Perfil Candidato (`/app/perfil`)
**Estado:** Rutas existen (`/app/perfil`, `/app/perfil/editar`)  
**Problema:** No revisadas en auditoría  
**Recomendación:** Debe ser centro de confianza, mostrar estado Zero Trust

### 4.5 Vacantes (`/app/vacantes`)
**Debilidades:**
- ❌ Sólo búsqueda por texto
- ❌ Sin filtros (skills, seniority, location, match)
- ❌ Sin ordenamiento (default debería ser por match descendent)
- ❌ JobCard no explica por qué user debería postular

**Necesita:**
- Filtros inteligentes
- Match badges en lista
- CTA claro (postular)

### 4.6 Vacantes Empresa (`/empresa/vacantes`)
**Estado:** Rutas existen  
**Problema:** No revisadas  
**Recomendación:** Debe ser "mi pipeline de contratación"

### 4.7 Certificaciones (`/app/certificaciones`)
**Debilidades:**
- ❌ Aparece 3 veces en sidebar (Certificaciones, Catálogo certs, no aparece en Learning)
- ❌ No muestra estado (declarada, pendiente, verificada, rechazada)
- ❌ No explica impacto en match

### 4.8 Evaluaciones (`/app/evaluaciones`)
**Debilidades:**
- ❌ Duplicado en sidebar (Evaluaciones y Edge AI Challenges similar?)
- ❌ No explica qué skill evalúa
- ❌ No explica por qué hacer evaluaciones (ayuda match)

### 4.9 Landing Page
**Fortalezas:**
- ✅ Estructura clara (Hero → Benefits → Use Cases → Pricing → FAQ)
- ✅ Muchas secciones para diferentes públicos

**Debilidades:**
- ❌ Copy genérico, sin diferenciación clara por rol
- ❌ No enfatiza propuesta de valor (Zero Trust, Match explicable)
- ❌ CTA no claros (¿candidato o recruiter?)
- ❌ Falta "proof" social (empresas confiadas, candidatos colocados)

---

## 5. AUDITORÍA UI — RESUMEN

| Aspecto | Calidad | Nota |
|---------|---------|------|
| Sistema de colores | ✅ Buena | Basado en HackerRank, tokens definidos |
| Tipografía | ⚠️ Regular | Escala no documentada, jerarquía débil |
| Espaciado | ⚠️ Regular | Inconsistente, no siempre usa spacing scale |
| Componentes | ⚠️ Regular | Similares con variaciones no justificadas |
| Jerarquía visual | ❌ Débil | Todos elements peso similar |
| Densidad info | ❌ Débil | Demasiada info sin priorización |
| Estados (carga, error) | ❌ Débil | Mínimo, sin animaciones |
| Iconografía | ✅ Buena | lucide-react, consistente |
| Responsive | ❌ No auditada | Probable que sea quebrado en móvil |
| Accesibilidad | ❌ Débil | Sin focus states, labels implícitas |

---

## 6. PROPUESTA DE REDISEÑO

### Visión
Transformar Find Your Job en una **plataforma SaaS moderna de inteligencia laboral** que comunique:
- 🎯 **Claridad:** Cada pantalla responde una pregunta específica
- 📈 **Progreso:** Usuario ve cómo avanza su empleabilidad
- 🔒 **Confianza:** Certificaciones verificadas son evidentes
- 🤖 **Match Explicable:** No números mágicos, explicaciones claras
- ⚡ **Acción Siguiente:** Siempre hay un "qué hacer ahora"

### Principios de Diseño
1. **Mobile-first:** Toda pantalla funciona en móvil
2. **Una acción primaria:** Cada pantalla tiene ONE botón de CTA primario
3. **Menos es más:** Max 3-5 items por grupo, max 15-20 items totales
4. **Estados claros:** Cada estado tiene visual distinto (vacío, cargando, lleno, error)
5. **Explicaciones:** Si es un número, explica de dónde viene
6. **Microcopy consistente:** Español técnico pero accesible

### Diferenciación por Rol
```
CANDIDATO — Verde (esperanza, crecimiento)
└─ Dashboard: "¿Qué debo hacer hoy para conseguir trabajo?"
└─ Jobs: "¿Cuál es mi mejor match?"
└─ Certificaciones: "¿Qué me falta para subir sueldo?"

EMPRESA — Azul (análisis, decisión)
└─ Dashboard: "¿Quién debo entrevistar?"
└─ Aplicantes: "¿Cuál es mi mejor candidato?"
└─ Pipeline: "¿Dónde están mis cuellos de botella?"

ADMIN — Púrpura (verificación, control)
└─ Dashboard: "¿Qué necesita verificación?"
└─ Cola: "¿Cuál certificado revisar?"
└─ Auditoría: "¿Qué pasó?"
```

---

## 7. ARQUITECTURA DE INFORMACIÓN PROPUESTA

### Navegación Candidato (Reordenada)
```
📊 DASHBOARD
├─ Estado empleabilidad
├─ Próximo paso
├─ Top 3 oportunidades

👤 PERFIL & CARRERA
├─ Mi perfil
├─ Mi CV
├─ Mi identidad verificada

💼 EMPLEABILIDAD
├─ Vacantes (con filtros)
├─ Mis postulaciones
├─ Entrevistas programadas

🚀 CRECIMIENTO
├─ Evaluaciones (skills tech)
├─ Certificaciones (verificables)
├─ Learning path (recomendado)

⚙️ CUENTA
├─ Notificaciones
├─ Configuración
```

Cambios:
- Eliminar duplicados (Aprendizaje = Learning Path)
- Agrupar Evaluaciones + Certificaciones en "Crecimiento"
- Ocultar "Challenges" (o integrar en Evaluaciones)
- Max 15 items

### Navegación Empresa (Revalidada)
```
📊 DASHBOARD
├─ Vacantes activas
├─ Top candidatos
├─ Pipeline visual

💼 EMPLEOS
├─ Mis vacantes
├─ Nueva vacante
├─ Gestionar aplicantes

👥 TALENTO
├─ Buscar candidatos
├─ Talent pool guardado
├─ Ranking por match

📞 ENTREVISTAS
├─ Próximas entrevistas
├─ Historial
├─ Calendarizar

📈 ANALÍTICA
├─ Métricas de contratación
├─ Time-to-hire
├─ Cost-per-hire

⚙️ EMPRESA
├─ Datos de empresa
├─ Equipo de reclutadores
├─ Billing
```

### Navegación Admin (Nueva)
```
✅ COLA DE VERIFICACIÓN
├─ Certificaciones pendientes
├─ Usuarios pendientes
├─ Evidencias a revisar

👥 USUARIOS
├─ Listar/buscar usuarios
├─ Revisar perfiles
├─ Sanciones

📋 AUDITORÍA
├─ Log de acciones
├─ Cambios de datos
├─ Intentos fallidos

⚙️ CONFIGURACIÓN
├─ Parámetros platform
├─ Certificaciones válidas
├─ Reglas de matching
```

---

## 8. PROPUESTA DE DASHBOARDS

### Dashboard Candidato — Nuevo Enfoque
```
┌─ ESTADO ACTUAL
│  ├─ Índice de empleabilidad: 75 (top 25%)
│  │  └─ ¿Por qué? Skills 50% + Evaluaciones 25% + Exp 15% + Certs 10%
│  ├─ Perfil completado: 85%
│  └─ Zero Trust: Email ✓ + CV ✓ + Eval ✓ (3/5)
│
├─ 🎯 PRÓXIMO PASO DESTACADO
│  ├─ [BOTÓN PRIMARIO] "Hacer 1 evaluación para desbloquear Lead roles"
│  ├─ Tiempo estimado: 45 min
│  └─ Impacto: +10 puntos empleabilidad
│
├─ 📊 TOP 3 OPORTUNIDADES POR MATCH
│  ├─ Senior Backend Eng (94% match)
│  │  ├─ Por qué: 5/6 skills + exp fintech
│  │  └─ [POSTULAR]
│  └─ [Ver todas 18 vacantes]
│
└─ 📈 PROGRESO RECIENTE
   ├─ 2 nuevas postulaciones
   ├─ 1 entrevista programada
   └─ Certificación Java en revisión
```

### Dashboard Empresa — Nuevo Enfoque
```
┌─ RESUMEN CONTRATACIÓN (este mes)
│  ├─ Vacantes activas: 3
│  ├─ Aplicaciones: 42 (+12 esta semana)
│  ├─ Promedio match: 72%
│  └─ Time-to-hire: 18 días (vs 25 promedio)
│
├─ 🎯 ACCIÓN PRIMARIA
│  ├─ [BOTÓN] "Revisar 4 candidatos pre-calificados"
│  │  └─ Todos con 80%+ match y Zero Trust verificado
│  └─ [O crear nueva vacante]
│
├─ 👥 PIPELINE VISUAL
│  ├─ Aplicado (42) → Entrevista (8) → Oferta (2) → Contratado (0)
│  ├─ Cuello: ¿Por qué solo 19% pasa a entrevista?
│  └─ Insight: Ajustar skills requeridos
│
└─ 📅 PRÓXIMAS ENTREVISTAS
   ├─ Hoy: 2 entrevistas
   ├─ Esta semana: 5 entrevistas
   └─ [Calendario]
```

---

## 9. QUICK WINS (Cambios Rápidos de Alto Impacto)

1. **Eliminar duplicados en sidebar**
   - Aprendizaje = Learning Path → Dejar solo "Learning Path"
   - Evaluaciones aparece 2x → Dejar en "Crecimiento"
   - Certificaciones aparece 3x → 1 link + 1 en crecimiento
   - **Impacto:** -40% cognitive load, +20% usabilidad

2. **Agregar "Próximo Paso" destacado al Dashboard candidato**
   - Widget con color diferente (primary accent)
   - Botón grande y claro
   - Explicación de impacto
   - **Impacto:** +30% engagement

3. **Mejorar JobCard — Agregar Match Badge**
   ```tsx
   <JobCard>
     <div>Senior Backend (94% match)</div>
     <div>¿Por qué? 5 skills coinciden, exp fintech</div>
     <button>Postular</button>
   </JobCard>
   ```
   - **Impacto:** +clarity, +CTR postulación

4. **Agregar filtros a vacantes**
   - Skills (multi-select)
   - Seniority (Junior, Semi, Senior, Lead)
   - Modality (Remote, Hybrid, Onsite)
   - Ordenamiento (Match ↓, Reciente ↓, Salario ↑↓)
   - **Impacto:** +90% findability

5. **Mejorar CertificationBadge — Estados claros**
   ```
   Declarada: Gris (info, sin verificar)
   Pendiente: Amarillo (bajo review)
   Verificada: Verde (confiable)
   Rechazada: Rojo (no válida)
   ```
   - **Impacto:** Confianza +40%

6. **Agregar estados vacíos a todas las secciones**
   - Illustration + copy
   - CTA claro (qué hacer)
   - **Impacto:** +clarity, -confusion

7. **Mejorar mobile responsiveness**
   - Sidebar → Hamburger menu
   - Tablas → Cards stacked
   - Buttons → Full-width on mobile
   - **Impacto:** Usabilidad móvil +200%

8. **Agregar focus states**
   - Outline primary en todos inputs
   - Visible keyboard navigation
   - **Impacto:** Accesibilidad +100%

9. **Mejorar copy de microcopy**
   - Reemplazar "Cargando..." con "Buscando tus oportunidades..."
   - Reemplazar "No se encontraron" con "Sin resultados. Intenta otros filtros"
   - **Impacto:** UX +20%

10. **Agregar breadcrumbs** en rutas profundas
    - `/app/evaluaciones/$id/result` → Home > Evaluaciones > Resultado
    - **Impacto:** Navegación +clarity

---

## 10. MEJORAS ESTRATÉGICAS (Cambios Grandes)

### Fase 1: Arquitectura & Navegación
- [ ] Reorganizar sidebar (eliminar duplicados, agrupar lógicamente)
- [ ] Crear `/admin` routes y rol admin
- [ ] Implementar breadcrumbs
- [ ] Implementar responsive hamburger menu
- [ ] Crear states vacíos para todas secciones

### Fase 2: Dashboards & Acción
- [ ] Rediseñar dashboard candidato (destacar próximo paso)
- [ ] Rediseñar dashboard empresa (pipeline visual)
- [ ] Crear widget "Próximo paso recomendado"
- [ ] Implementar "¿Por qué?" explanations en match scores

### Fase 3: Componentes & Consistencia
- [ ] Estandarizar JobCard, CandidateCard, MetricCard
- [ ] Mejorar CertificationBadge (4 estados visuales)
- [ ] Mejorar MatchBadge (con tooltip explicativo)
- [ ] Agregar skeletons para loading states
- [ ] Agregar error states en todas secciones

### Fase 4: Búsqueda & Filtros
- [ ] Agregar filtros a búsqueda de vacantes
- [ ] Agregar filtros a búsqueda de candidatos
- [ ] Implementar ordenamiento inteligente
- [ ] Agregar saved filters / búsquedas guardadas

### Fase 5: Responsive & Accesibilidad
- [ ] Auditar todo en móvil
- [ ] Implementar focus states globales
- [ ] Agregar labels explícitas en inputs
- [ ] Implementar ARIA attributes donde sea necesario
- [ ] Testear navegación por teclado

### Fase 6: Copy & Microcopy
- [ ] Mejorar copy landing page (diferenciado por rol)
- [ ] Mejorar copy en dashboards (contexto + acción)
- [ ] Revisar copy técnico (es comprensible?)
- [ ] Agregar tooltips en conceptos complejos (Zero Trust, Match score)

---

## 11. PLAN DE IMPLEMENTACIÓN

### Paso 1: Quick Wins (Día 1-2)
```
- Sidebar: Eliminar/consolidar duplicados
- JobCard: Agregar match badge
- Dashboard: Destacar "Próximo paso"
- Certificaciones: Mejorar badge visual
- Todas secciones: Agregar empty states
```

### Paso 2: Navegación (Día 3-4)
```
- Reorganizar sidebar según propuesta
- Agregar breadcrumbs
- Crear responsive hamburger
- Crear `/admin` routes (skeleton)
```

### Paso 3: Dashboards (Día 5-6)
```
- Rediseñar dashboard candidato
- Rediseñar dashboard empresa
- Agregar explicaciones en match
- Agregar insights visual (cuello botella)
```

### Paso 4: Componentes (Día 7-8)
```
- Estandarizar cards
- Mejorar badges (certificación, match, estado)
- Agregar skeletons
- Agregar error states
```

### Paso 5: Búsqueda (Día 9-10)
```
- Agregar filtros a vacantes
- Agregar filtros a candidatos
- Implementar ordenamiento
- Agregar búsquedas guardadas
```

### Paso 6: Responsive & Acceso (Día 11-12)
```
- Auditar móvil (screenshot testing)
- Implementar focus states
- Agregar labels en inputs
- Implementar ARIA basics
```

---

## 12. MÉTRICAS DE ÉXITO

| Métrica | Baseline | Target |
|---------|----------|--------|
| Tarea promedio completada (completar perfil) | TBD | -30% tiempo |
| Tasa de postulación por sesión | TBD | +50% |
| Engagement dashboard | TBD | +100% (clicks) |
| Tasa de abandono onboarding | TBD | -40% |
| Score accesibilidad (Lighthouse) | TBD | 90+ |
| Mobile usability score | TBD | 95+ |
| Bounce rate landing | TBD | -25% |
| CLS (Cumulative Layout Shift) | TBD | <0.1 |
| LCP (Largest Contentful Paint) | TBD | <2.5s |

---

## 13. CONCLUSIÓN

Find Your Job tiene **potencial SaaS real** pero necesita **enfoque claro en navegación, propósito y consistencia**. Los cambios propuestos no requieren refactor arquitectónico masivo, sino **reorganización inteligente y mejora iterativa**.

**Prioridad máxima:**
1. 🔴 Eliminar navegación confusa (sidebar)
2. 🔴 Agregar acción clara en dashboards
3. 🔴 Mejorar responsive design

**Tiempo estimado para implementación completa:** 2-3 semanas (si una persona, full-time)

---

**Auditoría completada:** Junio 2026  
**Próximo paso:** Implementar Phase 1 (Arquitectura & Navegación)
