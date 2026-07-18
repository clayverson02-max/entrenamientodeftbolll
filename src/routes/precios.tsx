import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/precios")({
  head: () => ({
    meta: [
      { title: "Precios — Elite Football Training" },
      {
        name: "description",
        content:
          "Planes simples: Gratis, Lifetime $9.99 y Mensual $5. Accede a la biblioteca completa y al Coach IA.",
      },
      { property: "og:title", content: "Precios — Elite Football Training" },
      {
        property: "og:description",
        content: "Planes desde $0. Oferta Lifetime de lanzamiento a $9.99.",
      },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Gratis",
    price: "$0",
    period: "para siempre",
    desc: "Ideal para conocer la plataforma.",
    features: [
      "Explorar todas las categorías",
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
      "Sin renovaciones ni cargos",
      "Actualizaciones futuras incluidas",
    ],
    cta: "Obtener Lifetime",
    highlight: true,
    badge: "Recomendado",
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

const faqs = [
  {
    q: "¿Puedo probar sin pagar?",
    a: "Sí. El plan Gratis te permite explorar la plataforma y ver ejercicios seleccionados sin ingresar tarjeta.",
  },
  {
    q: "¿Qué incluye el Coach IA?",
    a: "Un asistente que genera sesiones completas personalizadas por edad, nivel, duración y objetivo, recomendando ejercicios de la biblioteca.",
  },
  {
    q: "¿Puedo cancelar el plan mensual?",
    a: "Sí, cuando quieras desde tu cuenta. No hay permanencia.",
  },
  {
    q: "¿El plan Lifetime es realmente de por vida?",
    a: "Sí. Un solo pago y acceso permanente, incluidas todas las actualizaciones futuras.",
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden eft-gradient-hero">
        <div className="absolute inset-0 eft-pitch-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-24 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Oferta de lanzamiento
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
            Precios simples.{" "}
            <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Sin sorpresas.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Elige el plan que mejor se adapte a ti. Empieza gratis y actualiza cuando
            quieras.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
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

      <section className="border-t border-border/60 bg-secondary/20 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Preguntas frecuentes
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              ¿Tienes dudas? Las respondemos.
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
