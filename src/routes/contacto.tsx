import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Elite Football Training" },
      {
        name: "description",
        content:
          "Habla con el equipo de Elite Football Training. Soporte, propuestas y prensa.",
      },
      { property: "og:title", content: "Contacto — Elite Football Training" },
      {
        property: "og:description",
        content: "Escríbenos y te respondemos lo antes posible.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden eft-gradient-hero">
        <div className="absolute inset-0 eft-pitch-pattern opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-20 text-center sm:px-6 sm:pt-24 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Contacto
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Hablemos.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Dudas, propuestas, alianzas o soporte. Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="font-bold">Email</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Escríbenos a cualquier hora.
            </p>
            <a
              href="mailto:hola@elitefootballtraining.com"
              className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
            >
              hola@elitefootballtraining.com
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 className="font-bold">Soporte</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Respondemos en menos de 24h.
            </p>
            <a
              href="mailto:soporte@elitefootballtraining.com"
              className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
            >
              soporte@elitefootballtraining.com
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="font-bold">Ubicación</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Equipo 100% remoto en Latinoamérica y Europa.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/20 py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold">Envíanos un mensaje</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Rellena el formulario y te responderemos por email.
            </p>
            <form
              className="mt-6 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("¡Gracias! Te responderemos pronto.");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Nombre
                  </span>
                  <input
                    required
                    type="text"
                    className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Tu nombre"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="tu@email.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Mensaje
                </span>
                <textarea
                  required
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
