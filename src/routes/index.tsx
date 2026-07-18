import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Search,
  Filter,
  BookOpen,
  Users,
  Trophy,
  Zap,
  Shield,
  CheckCircle2,
  PlayCircle,
  Target,
  Dumbbell,
  Brain,
  ShieldCheck,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Elite Football Training — Entrena como los profesionales del fútbol",
      },
      {
        name: "description",
        content:
          "Plataforma premium con miles de ejercicios de fútbol organizados por edad, nivel y objetivo. Coach IA incluido. Prueba gratis.",
      },
      { property: "og:title", content: "Elite Football Training" },
      {
        property: "og:description",
        content:
          "La biblioteca digital de entrenamiento de fútbol más completa en español.",
      },
    ],
  }),
  component: LandingPage,
});

const categories = [
  { icon: Target, name: "Técnica", desc: "Pase, control, regate, finalización" },
  { icon: Brain, name: "Táctica", desc: "Posicionamiento, presión, transiciones" },
  { icon: Dumbbell, name: "Físico", desc: "Velocidad, fuerza, resistencia" },
  { icon: ShieldCheck, name: "Portero", desc: "Reflejos, blocaje, juego con pies" },
  { icon: Zap, name: "Calentamiento", desc: "Activación y prevención" },
  { icon: Trophy, name: "Partido reducido", desc: "Situaciones reales de juego" },
];

const ageGroups = ["U6", "U8", "U10", "U12", "U14", "U15", "U17", "U20", "Adultos"];

const features = [
  {
    icon: BookOpen,
    title: "Biblioteca profesional",
    desc: "Cientos de ejercicios con video, instrucciones detalladas, materiales y variantes.",
  },
  {
    icon: Filter,
    title: "Filtros inteligentes",
    desc: "Encuentra el ejercicio ideal por edad, nivel, duración y objetivo en segundos.",
  },
  {
    icon: Sparkles,
    title: "Coach IA",
    desc: "Genera sesiones completas personalizadas con inteligencia artificial en un clic.",
  },
  {
    icon: Users,
    title: "Para todos los niveles",
    desc: "Desde U6 hasta profesional. Contenido adaptado a cada categoría y edad.",
  },
  {
    icon: Search,
    title: "Búsqueda instantánea",
    desc: "Búsqueda en español optimizada. Llega al ejercicio en menos de tres clics.",
  },
  {
    icon: Shield,
    title: "Actualizado siempre",
    desc: "Nuevos ejercicios cada semana. Tu biblioteca nunca se queda vieja.",
  },
];

const plans = [
  {
    name: "Gratis",
    price: "$0",
    period: "para siempre",
    desc: "Perfecto para conocer la plataforma.",
    features: [
      "Explorar categorías",
      "Ejercicios seleccionados",
      "Búsqueda limitada",
      "Vista previa de contenido premium",
    ],
    cta: "Crear cuenta",
    highlight: false,
  },
  {
    name: "Lifetime",
    price: "$9.99",
    period: "pago único",
    desc: "Oferta de lanzamiento. Acceso de por vida.",
    features: [
      "Biblioteca completa",
      "Coach IA ilimitado",
      "Nuevos ejercicios cada semana",
      "Soporte prioritario",
      "Sin renovaciones",
    ],
    cta: "Obtener Lifetime",
    highlight: true,
    badge: "Oferta de lanzamiento",
  },
  {
    name: "Mensual",
    price: "$5",
    period: "por mes",
    desc: "Flexibilidad total, cancela cuando quieras.",
    features: [
      "Biblioteca completa",
      "Coach IA ilimitado",
      "Nuevos ejercicios cada semana",
      "Cancela cuando quieras",
    ],
    cta: "Suscribirme",
    highlight: false,
  },
];

function LandingPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden eft-gradient-hero">
        <div className="absolute inset-0 eft-pitch-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Nueva plataforma · Beta abierta
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Entrena como los{" "}
              <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                profesionales
              </span>{" "}
              del fútbol.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              La biblioteca digital de ejercicios de fútbol más completa en español.
              Miles de ejercicios organizados por edad, nivel y objetivo.
              Con Coach IA para armar tus sesiones en segundos.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/precios"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 eft-glow-green"
              >
                Empezar gratis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#biblioteca"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <PlayCircle className="h-4 w-4" />
                Ver la plataforma
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8 text-left sm:mt-14 sm:pt-10">
              <div>
                <div className="text-3xl font-black text-foreground">500+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Ejercicios
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-foreground">9</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Categorías de edad
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-foreground">24/7</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Coach IA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section id="categorias" className="border-t border-border/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Categorías
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Todo lo que necesita tu equipo, organizado.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Explora ejercicios por tipo de trabajo. Cada categoría se filtra por edad,
              nivel y objetivo.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ icon: Icon, name, desc }) => (
              <div
                key={name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 eft-card-hover"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Explorar <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <span className="mr-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Edades:
            </span>
            {ageGroups.map((age) => (
              <span
                key={age}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold text-foreground"
              >
                {age}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="biblioteca" className="border-t border-border/60 bg-secondary/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Plataforma
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Diseñada para entrenar mejor, más rápido.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cada detalle pensado para que el entrenador arme sesiones profesionales
              en minutos.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 eft-card-hover"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACH IA */}
      <section id="coach-ia" className="border-t border-border/60 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Coach IA
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Tu asistente táctico personal, disponible 24/7.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Dile a Coach IA la edad, el nivel, la duración y el objetivo. Recibirás una
              sesión completa recomendando ejercicios de la biblioteca, con progresión
              lógica y variantes.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Sesiones completas en segundos",
                "Adaptado a tu edad y nivel",
                "Recomienda ejercicios de la biblioteca",
                "Guarda el historial de conversaciones",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-primary/10">
            <div className="mb-4 flex items-center gap-2 border-b border-border/60 pb-4">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-bold">Coach IA</div>
                <div className="text-xs text-muted-foreground">En línea</div>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-secondary p-3">
                Sesión de 60 min para U12, enfoque en pase y control.
              </div>
              <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-primary/30 bg-primary/10 p-3">
                <div className="font-semibold text-primary">Sesión propuesta</div>
                <ol className="mt-2 space-y-1 text-muted-foreground">
                  <li>1. Calentamiento con balón · 10 min</li>
                  <li>2. Rondo 4v1 progresivo · 15 min</li>
                  <li>3. Pase y control en circuito · 20 min</li>
                  <li>4. Partido reducido 5v5 · 15 min</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="precios" className="border-t border-border/60 bg-secondary/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Planes
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Precios simples. Sin sorpresas.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Empieza gratis. Actualiza cuando quieras.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-8 ${
                  plan.highlight
                    ? "border-primary/50 bg-card eft-glow-green"
                    : "border-border bg-card"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-foreground">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                    plan.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Empieza a entrenar mejor{" "}
            <span className="text-primary">hoy mismo.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Únete a la plataforma que está cambiando la forma en que los entrenadores
            de fútbol arman sus sesiones.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 eft-glow-green"
            >
              Crear cuenta gratis
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/precios"
              className="inline-flex items-center rounded-xl border border-border bg-secondary/50 px-6 py-3.5 text-base font-semibold text-foreground hover:bg-secondary"
            >
              Ver planes
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
