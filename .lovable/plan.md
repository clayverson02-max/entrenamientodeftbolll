
# Elite Football Training — Roadmap por fases

Plataforma SaaS estilo "Netflix de entrenamiento de fútbol" en español, con biblioteca de ejercicios, planes premium, IA y auth. Voy a ejecutar el PRD en 8 fases, cada una entregable y verificable antes de pasar a la siguiente.

## Stack y decisiones base
- **Framework**: TanStack Start (ya instalado) + React 19 + Tailwind v4.
- **Backend**: Lovable Cloud (Supabase gestionado) — auth, DB, storage, server functions.
- **IA**: Lovable AI Gateway (asistente coach).
- **Idioma UI**: 100% español. Código, tablas y variables en inglés.
- **Diseño**: Paleta oscura del PRD (#111827 / #1F2937 / #22C55E / #FBBF24) + Inter. Estilo Nike Training Club / EA Sports FC.
- **Pagos**: Stripe (Lifetime $9.99, Monthly $5).

## Fase 1 — Identidad visual y landing pública
- Aplicar design system del PRD en `src/styles.css` (tokens oscuros, verde fútbol, oro).
- Tipografía Inter vía `<link>` en `__root.tsx`.
- Metadata SEO en español (title, description, OG) en root y por ruta.
- Landing `/` en español: hero, propuesta de valor, categorías destacadas, planes (Free / Lifetime / Monthly), testimonios placeholder, footer.
- Rutas públicas: `/precios`, `/nosotros`, `/contacto`.
- Componentes reutilizables: `Button`, `Card`, `Badge` (Premium/Nuevo/Popular) siguiendo el spec de UI del PRD.

## Fase 2 — Autenticación y estructura de app
- Activar **Lovable Cloud**.
- Auth email/password + Google OAuth (broker Lovable). Páginas `/auth` (login/registro) en español.
- Layout protegido bajo `_authenticated/` (gestionado por integración).
- Tabla `profiles` (id, full_name, avatar_url, role, plan, created_at) + trigger `handle_new_user`.
- Tabla `user_roles` + enum `app_role` (`admin`, `coach`, `user`) + función `has_role` SECURITY DEFINER (según guía).
- Shell del dashboard: sidebar, topbar, avatar/menu, logout.
- Ruta protegida `/dashboard` (resumen inicial vacío).

## Fase 3 — Modelo de datos de la biblioteca
Migración SQL con GRANTs + RLS:
- `categories` (técnica, táctica, físico, portero, calentamiento, etc.)
- `age_categories` (U6…U20, adultos)
- `skill_levels` (principiante, intermedio, avanzado, profesional)
- `objectives` (pase, control, finalización, presión, transición…)
- `exercises`: id, title, slug, description, instructions, duration_min, players_min/max, space, materials, video_url, thumbnail_url, is_premium, status, category_id, level_id, created_by, created_at.
- Joins: `exercise_age_categories`, `exercise_objectives`, `exercise_tags`.
- `user_favorites`, `user_exercise_progress`.
- Políticas: lectura pública de ejercicios NO premium (anon + authenticated); premium solo para usuarios con plan activo; escritura solo admin.
- Seed inicial con 15–20 ejercicios demo por categoría.

## Fase 4 — Biblioteca, búsqueda y filtros
- `/ejercicios`: grid tipo Netflix con thumbnails, badges Premium/Nuevo, hover lift.
- Filtros combinables (categoría, edad, nivel, objetivo, duración) — server function con paginación.
- Búsqueda full-text en español (índice `tsvector` con diccionario `spanish`).
- `/ejercicios/$slug`: página de detalle con video embebido, instrucciones, materiales, ejercicios relacionados.
- Gate premium: si no premium y `is_premium=true`, mostrar preview + CTA de upgrade (no accesible por URL directa según regla no-negociable del PRD).
- Favoritos (❤️) con optimistic update.

## Fase 5 — Suscripciones y pagos
- Integrar Stripe. Productos: Lifetime $9.99 (one-time), Monthly $5 (recurring).
- Server route `/api/public/webhooks/stripe` con verificación HMAC → actualiza `profiles.plan` y `subscriptions`.
- Página `/precios` con checkout; `/cuenta/suscripcion` para gestionar/cancelar.
- Middleware/guard de `is_premium_active(user_id)` como SQL function.

## Fase 6 — Asistente IA "Coach IA"
- Panel `/coach-ia` (solo premium).
- Server function → Lovable AI Gateway (`google/gemini-2.5-flash` por defecto).
- Prompt en español: genera sesiones de entrenamiento personalizadas por edad/nivel/objetivo/duración, recomienda ejercicios de la biblioteca.
- Historial de conversaciones por usuario (`ai_conversations`, `ai_messages`).
- Rate limits en Free.

## Fase 7 — Panel de administración
- `/admin` protegido con `has_role('admin')`.
- CRUD de ejercicios, categorías, objetivos, edades.
- Upload de thumbnails y videos a Supabase Storage.
- Métricas básicas: usuarios, conversiones, ejercicios más vistos.

## Fase 8 — Pulido y expansión
- Onboarding progresivo (rol coach/parent, edad principal).
- Sesión Builder: armar plan de entrenamiento arrastrando ejercicios, exportar PDF.
- Notificaciones in-app (nuevos ejercicios).
- Sitemap + robots + JSON-LD para SEO.
- Optimización móvil (mobile-first, no un desktop reducido).
- Accesibilidad: navegación por teclado, contrastes, alt text.

## Detalles técnicos clave
- **Server functions** con `createServerFn` para toda lectura/escritura app-internal.
- **RLS + GRANTs** obligatorios en cada `CREATE TABLE public.*`.
- **Roles** solo en `user_roles` (nunca en `profiles`).
- **Rutas premium** validadas server-side, no solo por UI.
- **i18n-ready**: strings centralizados aunque el único idioma sea español, para futura expansión.
- **Sin edge functions Supabase**: todo por `createServerFn` o server routes bajo `src/routes/api/`.

## Qué construyo ahora
Fase 1 completa (landing pública + design system) como primer entregable. Cuando la apruebes, seguimos con Fase 2 (activar Cloud + auth). ¿Confirmas que arrancamos por Fase 1?
