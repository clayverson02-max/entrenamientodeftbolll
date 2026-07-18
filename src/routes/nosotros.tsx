import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Target, Heart, Rocket } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Elite Football Training" },
      {
        name: "description",
        content:
          "Elite Football Training nace para profesionalizar la forma en que los entrenadores de fútbol arman sus sesiones.",
      },
      { property: "og:title", content: "Nosotros — Elite Football Training" },
      {
        property: "og:description",
        content:
          "Construyendo la mayor biblioteca online de entrenamiento de fútbol en español.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Trophy,
    title: "Profesionalismo",
    desc: "Contenido curado con criterios profesionales, no colecciones improvisadas.",
  },
  {
    icon: Target,
    title: "Organización",
    desc: "Todo clasificado por edad, nivel y objetivo. Encuentra en segundos, no en horas.",
  },
  {
    icon: Heart,
    title: "Pasión por el juego",
    desc: "Cada ejercicio pensado por y para gente que ama el fútbol.",
  },
  {
    icon: Rocket,
    title: "Mejora continua",
    desc: "Nuevos ejercicios cada semana. La plataforma evoluciona contigo.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden eft-gradient-hero">
        <div className="absolute inset-0 eft-pitch-pattern opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-28 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Nosotros
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Profesionalizando el entrenamiento del fútbol en español.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Elite Football Training nace de una idea simple: los entrenadores merecen
            una plataforma profesional, no un PDF ni una lista de videos sueltos.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Misión
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Que cualquier entrenador pueda armar mejores sesiones en minutos.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Construimos la mayor biblioteca de ejercicios de fútbol en español, con
              la organización de una plataforma SaaS moderna y la experiencia de un
              producto premium. Cada elemento pensado para llevarte al ejercicio ideal
              en menos de tres clics.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Visión
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Convertirnos en la referencia mundial del entrenamiento de fútbol digital.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Un espacio que se sienta como entrar a Netflix o Nike Training Club, pero
              dedicado íntegramente al fútbol. Escalable a videos, comunidad,
              certificaciones y sesiones en vivo.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/20 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Valores
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Lo que nos guía cada día.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 eft-card-hover"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
