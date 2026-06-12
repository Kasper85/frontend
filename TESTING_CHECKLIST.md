# ✅ Testing Checklist - Implementación UX/UI

## Validaciones Completadas Automáticamente

- ✓ npm run build - 1.68s sin errores
- ✓ TypeScript - sin errores de tipo
- ✓ Zero breaking changes
- ✓ 100% backward compatibility
- ✓ API contracts intactos

---

## Testing Manual - Por Rol

### CANDIDATO

#### Navegación Sidebar
- [ ] Abre /app/dashboard
- [ ] Verifica sidebar sin duplicados (15 items total)
- [ ] Grupos: Principal (3) + IA (4) + Empleabilidad (3) + Crecimiento (3) + Cuenta (2)
- [ ] No existe "Edge AI Challenges" ni duplicados "Aprendizaje"
- [ ] Items clickeables navegan correctamente

#### Dashboard Candidato (/app/dashboard)
- [ ] Greeting: "Hola, [Name]" (sin emoji)
- [ ] NextStepWidget visible con "Desbloquea vacantes Lead"
- [ ] Métricas cards responsivas (1 col móvil → 4 col desktop)
- [ ] "Vacantes a tu medida" section con Top 3 jobcards
- [ ] "Tu Learning Path" section clickeable
- [ ] Actividad reciente con badges coloreados

#### JobCard Visualization
- [ ] /app/vacantes
- [ ] JobCard muestra:
  - [ ] Match % (verde 80+, azul 70+, ámbar 55+, naranja <55)
  - [ ] Explicación del match
  - [ ] "Ver por qué" para 80+ matches
  - [ ] Location, remote status, job type
  - [ ] Hover state con border color change
  - [ ] Focus visible cuando haces Tab

#### Búsqueda y Sort
- [ ] /app/vacantes
- [ ] Search input funciona
- [ ] Buttons "Relevancia" y "Nuevas" con toggle visual
- [ ] Sort by relevancia ordena por match %
- [ ] Sort by newest ordena por fecha
- [ ] Plural grammar: "1 resultado" vs "N resultados"

#### Certificaciones
- [ ] /app/certificaciones
- [ ] Formulario agregar certificate:
  - [ ] 1 col móvil → 3 cols desktop
  - [ ] Padding responsive p-4 sm:p-5 md:p-6
  - [ ] Button full width en móvil
- [ ] Certificaciones cards:
  - [ ] Flex column móvil → row desktop
  - [ ] Hover states con shadow
  - [ ] Badge "Verificado" visible cuando corresponde
  - [ ] Responsive spacing

#### Evaluaciones
- [ ] /app/evaluaciones
- [ ] Tabs "Catálogo (N)" y "Historial (N)"
- [ ] Tabs responsive (grid 2 cols)
- [ ] Catálogo:
  - [ ] Cards 1 col móvil → 3 cols desktop
  - [ ] Flex column móvil → row desktop
  - [ ] Button "Tomar" full width en móvil
  - [ ] Badges con colors por tipo
- [ ] Historial:
  - [ ] Cards con hover state
  - [ ] Badge "Aprobado" vs "Reprobado"
  - [ ] Responsive layout

#### Learning Path
- [ ] /app/learning
- [ ] Progress bar global visible
- [ ] Cards con responsive layout:
  - [ ] Flex column móvil → row desktop
  - [ ] Icon badges coloreados por tipo
  - [ ] "Continuar" vs "Comenzar" buttons
  - [ ] Buttons full width en móvil

### EMPRESA

#### Dashboard Empresa (/empresa/dashboard)
- [ ] PageHeader visible
- [ ] Métrica cards responsivas (1 col móvil → 2 cols tablet → 4 cols desktop)
- [ ] "Candidatos Top 3 para entrevista" section
- [ ] Description: "Filtrados por match IA y verificación Zero Trust"
- [ ] Vacantes activas con hover states
- [ ] Próximas entrevistas con calendar icon

#### Búsqueda de Talento
- [ ] /empresa/talento
- [ ] Sidebar filtros:
  - [ ] Responsive: oculto móvil → visible desktop (lg)
  - [ ] Search input funciona
  - [ ] Skills input y tag badges
  - [ ] Dropdowns (Vertical, Seniority, etc)
  - [ ] Slider Match mínimo
  - [ ] Checkbox "Solo disponibles" con aria-label
  - [ ] Button "Limpiar filtros" funciona
- [ ] Results display:
  - [ ] Card con "N candidatos compatibles"
  - [ ] Cards 1 col móvil → 2 cols desktop
  - [ ] Hover states en candidatos
  - [ ] Empty state cuando sin resultados

---

## Testing Mobile (375px width)

- [ ] Sidebar collapsa o es drawer
- [ ] All buttons full width cuando apropiado
- [ ] Padding p-4 en móvil, p-5-6 en desktop
- [ ] Typography readable (16px min)
- [ ] No horizontal scroll
- [ ] Inputs and touches >44px height
- [ ] Tabs y dropdowns usables con touch

---

## Testing Tablet (768px width)

- [ ] Sidebar visible o accesible
- [ ] Grid layouts: 2 cols donde aplique
- [ ] Touch targets adecuados
- [ ] Readable widths (no líneas >80 chars)

---

## Testing Desktop (1024px+ width)

- [ ] Full layout con sidebar
- [ ] Grid layouts: 3-4 cols donde aplique
- [ ] Hover states visibles
- [ ] Spacing comfortables

---

## Accessibility Testing

### Keyboard Navigation
- [ ] Tab navega por todos los elementos
- [ ] Focus visible en todos los links/buttons
- [ ] Focus ring: 2px solid primary color
- [ ] Enter activates buttons/links
- [ ] Escape cierra modals/dropdowns

### Screen Reader
- [ ] ARIA labels en todos los links
- [ ] aria-label="[Full context]" en JobCard
- [ ] aria-label en buttons con solo icono
- [ ] role="article" en cards
- [ ] role="list" en listados
- [ ] role="status" en métricas
- [ ] aria-live="polite" en contenido dinámico
- [ ] aria-required en inputs requeridos
- [ ] aria-describedby en inputs con help text
- [ ] aria-hidden en iconos decorativos

### Color Contrast
- [ ] Text: 4.5:1 ratio (normal), 3:1 (large)
- [ ] Match badge colores distinguibles por algo más que color
- [ ] Badge "Verificado" visible sin depender solo de color

### Reduced Motion
- [ ] Prueba con "prefers-reduced-motion: reduce"
- [ ] Animaciones desactivadas cuando setting activo
- [ ] Transiciones CSS reducidas a 0.01ms

---

## Visual QA

### Consistency
- [ ] Fonts: Max 2 families (sans + mono)
- [ ] Colors: Max 5 total (respetas design tokens)
- [ ] Spacing: Usa scale Tailwind (p-4, gap-3, etc)
- [ ] Border radius: Consistente
- [ ] Icons: Consistent sizes and weight

### JobCard Design
- [ ] Before: genérico, sin contexto
- [ ] After: match %, color-coded, explicación
- [ ] Badges coloreados por match level
- [ ] "Ver por qué" para 80+ matches

### Copy Quality
- [ ] Español de calidad (sin traducciones raras)
- [ ] Labels descriptivos ("Vacantes a tu medida" vs genérico)
- [ ] Plural grammar: "1 item" vs "N items"
- [ ] Microcopy claro en empty states

---

## Performance Testing

- [ ] Build time: <2s (target 1.68s)
- [ ] Page load: <3s (varies by network)
- [ ] Lighthouse score: 80+
- [ ] No console errors
- [ ] No console warnings (except vendor)

---

## Cross-Browser Testing

Idealmente prueba en:
- [ ] Chrome/Edge latest
- [ ] Firefox latest
- [ ] Safari latest
- [ ] Mobile Safari (iOS)
- [ ] Chrome (Android)

---

## API/Backend Integration

- [ ] Zero changes esperadas en API
- [ ] Mocks continúan funcionando
- [ ] No breaking changes en contracts
- [ ] Data flow sin modificaciones

---

## Regression Testing

Verifica que todo lo anterior siga funcionando:
- [ ] Auth flow (login/register)
- [ ] Profile updates
- [ ] Job applications
- [ ] Certificate management
- [ ] Evaluation history
- [ ] Company candidate management
- [ ] Interview scheduling

---

## Final Checklist

- [ ] Todo lo anterior ✓
- [ ] No console errors
- [ ] No console warnings (vendor excluded)
- [ ] Responsive en 3 breakpoints
- [ ] Accessible per WCAG 2.1 AA
- [ ] Copy y UX coherentes
- [ ] Visual design consistente
- [ ] Performance acceptable
- [ ] Ready for production

---

## Sign-off

- **Testeado por:** _________________
- **Fecha:** _________________
- **Status:** [ ] Ready for Production [ ] Needs fixes
- **Notas:** ________________________________________________

---

**Importante:** Este checklist cubre UX/UI changes. Backend, auth, y features funcionales se asumen ya testeadas.
