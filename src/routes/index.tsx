import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Check,
  Clock,
  Download,
  Gift,
  Lock,
  Mail,
  Shield,
  Smartphone,
  Star,
  Target,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero-biblioteca-pdf.jpg";
import paginasImg from "@/assets/paginas-ejercicios.jpg";
import coachImg from "@/assets/coach-martinez.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Entrena con Método — Biblioteca Completa de Entrenamientos de Fútbol",
      },
      {
        name: "description",
        content:
          "Deja de improvisar. Descarga la biblioteca completa, elige la sesión según posición y categoría, y entrena hoy mismo con método profesional. Acceso inmediato y garantía de 7 días.",
      },
      {
        property: "og:title",
        content:
          "Entrena con Método — Biblioteca Completa de Entrenamientos de Fútbol",
      },
      {
        property: "og:description",
        content:
          "+250 sesiones y +2.000 ejercicios en PDF, organizados por posición, categoría y objetivo. Un solo pago de $3,90 USD, acceso de por vida.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

/* ---------------------------------- data --------------------------------- */

const dolores = [
  "Llegas al entrenamiento sin un plan claro y terminas improvisando toda la sesión.",
  "Entrenas durante semanas, pero cuando llega el partido sigues cometiendo los mismos errores de siempre.",
  "Pierdes horas buscando ejercicios en YouTube o Internet sin saber cuáles realmente funcionan.",
  "Repites los mismos entrenamientos una y otra vez porque ya no sabes qué hacer para seguir evolucionando.",
  "No sabes qué entrenar según la posición, la categoría o la edad, y eso limita el progreso dentro del campo.",
  "Mientras otros jugadores y equipos evolucionan cada temporada, tú sientes que podrías conseguir mucho más con una metodología profesional.",
];

const pasos = [
  {
    n: "1",
    t: "Accedes hoy mismo",
    d: "Un solo pago y el acceso llega a tu e-mail en minutos. Descarga en PDF desde el móvil, tablet u ordenador.",
  },
  {
    n: "2",
    t: "Dices qué necesitas",
    d: "Posición, edad y objetivo del día. La biblioteca está organizada para que encuentres exactamente qué entrenar.",
  },
  {
    n: "3",
    t: "Entrenas con seguridad",
    d: "Guía ilustrada paso a paso, con diagramas de campo y ejercicios numerados. Llegas al campo sabiendo qué hacer, cómo y por qué.",
  },
];

const ebooks = [
  { t: "Laterales", d: "Recorrido, centros y repliegue" },
  { t: "Porteros", d: "Reacción, salidas y juego con los pies" },
  { t: "Defensas Centrales", d: "Marcaje, coberturas y salida de balón" },
  { t: "Delanteros", d: "Definición, desmarques y remate" },
  { t: "Acondicionamiento físico", d: "Circuitos de fuerza, velocidad y resistencia" },
  { t: "Fútbol femenino", d: "Sesiones adaptadas por categoría" },
  { t: "Fútbol infantil", d: "Sub-6 a Sub-12, con juego y progresión" },
];

const jugador = [
  ["Sabes qué entrenar hoy, mañana y el lunes", "Progresión real, semana a semana, en tu propia guía."],
  ["Llegas al partido con otra pierna", "Circuitos de acondicionamiento físico explicados paso a paso."],
  ["El técnico empieza a notarte", "Control, pase y definición más limpios, ejercicio por ejercicio."],
  ["Juegas sin miedo a equivocarte", "Repites la jugada 50 veces con la guía en mano; en el partido te sale sola."],
  ["No dependes de nadie para evolucionar", "Solo, en el parque o en la cancha del barrio, siempre tienes una sesión lista."],
];

const entrenador = [
  ["Recuperas 5 horas cada semana", "Abres la guía en el móvil y ya tienes la sesión estructurada."],
  ["Nunca repites la misma sesión", "Más de 250 sesiones organizadas por objetivo."],
  ["Los padres dejan de cuestionarte", "Cuando la sesión está estructurada y explicada, se nota desde la banda."],
  ["Tu equipo empieza a jugar distinto", "Trabajo por bloques y progresión visibles en pocas semanas."],
  ["Nunca más llegas al campo improvisando", "Siempre hay una sesión en PDF lista para esa situación."],
];

const antes = [
  "Llegas al entrenamiento sin un plan claro.",
  "Pierdes horas buscando ejercicios en YouTube o Internet.",
  "Repites los mismos ejercicios una y otra vez.",
  "No sabes exactamente qué trabajar para seguir evolucionando.",
  "Cada semana pasa sin una metodología clara.",
  "Sigues improvisando.",
];

const despues = [
  "En menos de 5 minutos ya tienes la sesión lista para aplicar.",
  "Más de 250 sesiones y 2.000 ejercicios organizados por posición, categoría y edad.",
  "Siempre tienes nuevas ideas y entrenamientos listos para usar.",
  "Sabes qué entrenar según tu objetivo, posición y nivel.",
  "Cada entrenamiento tiene un propósito y una planificación.",
  "Empiezas a entrenar con un método profesional.",
];

const perfiles = [
  ["Jugadores cansados de estancarse", "Ganas de mejorar hay. Lo que faltaba era saber qué entrenar."],
  ["Entrenadores sin tiempo para planificar", "Sesión lista en minutos, sin sacrificar la calidad del trabajo."],
  ["Padres que no quieren que su hijo se quede atrás", "Le das lo que otros niños no tienen: método real desde pequeño."],
  ["Escuelitas y academias", "Un método que justifica cada matrícula que cobras."],
  ["Entrenador de base", "Sub-6 a Sub-15: sesiones adaptadas a cada edad, sin ejercicios copiados de adultos."],
  ["Jugadores juveniles con ambición", "Sub-13 a Sub-20: entrena hoy lo que te acerca al siguiente nivel."],
  ["Profesores de Ed. Física", "Clases que los alumnos esperan con ganas toda la semana."],
  ["Entrenador amateur", "Poco tiempo, muchos jugadores: llegas con la sesión lista y aprovechas cada minuto."],
  ["Preparador físico", "Circuitos, velocidad, agilidad y resistencia con balón integrados a la sesión."],
  ["Entrenador de porteros", "Trabajo específico de reacción, salidas y juego con los pies para tus arqueros."],
  ["Coordinador deportivo", "Estandariza la metodología del club y guía a todo tu cuerpo técnico con un solo recurso."],
  ["Quien entrena por su cuenta", "Sin equipo, sin cancha grande: sesiones que funcionan en poco espacio."],
  ["Quien solo tiene 30 minutos al día", "Sesiones cortas y bien dirigidas valen más que horas sin rumbo."],
  ["Equipos y clubes de barrio", "Un plan serio para todo el plantel, sin gastar en consultoría."],
  ["Quien vive por el fútbol", "Y está harto de entrenar sin ver que nada cambia."],
];

const testimonios = [
  {
    q: "Llegué al entrenamiento con la sesión ya impresa en la mochila. Los chicos entendieron todo en minutos. Nunca vi un grupo tan enfocado.",
    n: "Coach Andrés M.",
    r: "Formador Sub-12 · Vancouver",
  },
  {
    q: "Los ejercicios de pase y control cambiaron completamente el ritmo del equipo. En 3 semanas ya se notó en los partidos.",
    n: "Coach Diego R.",
    r: "Categoría Sub-15 · Madrid",
  },
  {
    q: "Entreno solo en la cancha del barrio con la guía en el celular. Mi drible mejoró muchísimo y el DT me puso de titular.",
    n: "Mateo S.",
    r: "Jugador Sub-17 · Buenos Aires",
  },
  {
    q: "Ya no gasto horas armando entrenamientos. Abro el PDF, miro el diagrama y listo. Los padres notaron la diferencia.",
    n: "Coach Luis F.",
    r: "Escuela Sub-9 · Bogotá",
  },
];

const incluye = [
  "Biblioteca completa en PDF: +250 sesiones y +2.000 ejercicios",
  "Ebooks organizados por posición: Laterales, Porteros, Defensas Centrales, Delanteros",
  "Fútbol 360°: femenino, infantil y acondicionamiento físico",
  "Diagramas de campo con pasos numerados y flechas de movimiento",
  "Acceso vitalicio e inmediato",
  "Actualizaciones GRATIS",
  "Garantía incondicional de 7 días",
];

const bonos = [
  ["BONO 01", "Guía de Entrenamiento", "$47"],
  ["BONO 02", "50 Ejercicios de Técnica Individual", "$39"],
  ["BONO 03", "Pack de Circuitos de Preparación Física", "$49"],
];

const faqs = [
  ["¿Cómo y cuándo recibiré mi acceso?", "Una vez confirmado tu pago, recibirás un correo electrónico con el enlace de descarga de tu biblioteca en PDF. En la mayoría de los casos, en menos de 2 minutos."],
  ["¿Para quién está diseñada la Biblioteca?", "Fue creada para jugadores y entrenadores de todos los niveles. Encontrarás más de 250 sesiones organizadas por posición, categoría y objetivo, desde Sub-8 hasta adultos."],
  ["¿Qué incluye exactamente la oferta?", "Acceso inmediato a la biblioteca completa en PDF, organizada por posición y categoría, además de los bonos exclusivos y acceso vitalicio."],
  ["¿Puedo entrenar aunque esté solo?", "Sí. Muchos ejercicios pueden realizarse de forma individual, mientras que otros están pensados para entrenar con compañeros o equipos."],
  ["¿El pago es único y completamente seguro?", "Sí. Un único pago, sin mensualidades, procesado en plataformas seguras."],
  ["¿Qué pasa si la Biblioteca no cumple mis expectativas?", "Tienes 7 días de garantía. Si no cumple tus expectativas, solicitas el reembolso y recibes el 100% de tu dinero."],
  ["¿Necesito experiencia para aprovechar la Biblioteca?", "No. Todos los ejercicios están explicados paso a paso con diagramas, para que cualquier nivel pueda aplicarlos."],
  ["¿Y si tengo poco espacio, poco material o faltan jugadores?", "Hay sesiones pensadas exactamente para eso: espacios reducidos, poco material y grupos pequeños."],
  ["¿Cuánto tiempo necesito para preparar un entrenamiento?", "Menos de 5 minutos. Eliges posición, edad y objetivo, abres el PDF con el diagrama y ya puedes ir al campo con todo claro."],
  ["¿Sirve tanto para jugadores como para entrenadores?", "Sí. El jugador encuentra sesiones individuales para evolucionar por su cuenta y el entrenador encuentra sesiones completas de equipo."],
];

/* -------------------------------- helpers -------------------------------- */

function Cta({ children }: { children: string }) {
  return (
    <div className="flex flex-col items-center">
      <a href="#oferta" className="ecm-cta">
        {children}
        <ArrowRight className="h-5 w-5 flex-shrink-0" />
      </a>
      <Badges />
    </div>
  );
}

function Badges() {
  return (
    <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-semibold text-muted-foreground">
      <span className="inline-flex items-center gap-1">
        <Shield className="h-3.5 w-3.5 text-primary" /> Garantía de 7 días
      </span>
      <span className="text-border">•</span>
      <span className="inline-flex items-center gap-1">
        <Download className="h-3.5 w-3.5 text-primary" /> Acceso inmediato
      </span>
    </p>
  );
}

function Kicker({ children }: { children: string }) {
  return (
    <p className="text-center text-xs font-extrabold uppercase tracking-[0.22em] text-primary">
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mx-auto mt-3 max-w-4xl text-center text-3xl leading-[1.05] sm:text-5xl">
      {children}
    </h2>
  );
}

/* --------------------------------- page ---------------------------------- */

function LandingPage() {
  return (
    <div className="bg-background">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-primary py-2.5 text-center text-xs font-extrabold uppercase tracking-[0.15em] text-primary-foreground sm:text-sm">
        Descuento exclusivo solo hoy
      </div>

      {/* HERO */}
      <section data-reveal className="px-4 pb-14 pt-10 sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground">
            <span className="ecm-pulse-dot" />
            +2146 jugadores y entrenadores ya evolucionando
          </span>

          <h1 className="mt-6 text-[2rem] leading-[1.04] sm:text-6xl">
            Descubre el <span className="ecm-highlight">Método Profesional</span>{" "}
            para Dejar de Improvisar Tus Entrenamientos y Evolucionar Más Rápido
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Descubre la <strong className="text-foreground">Biblioteca Completa</strong>{" "}
            con <span className="ecm-highlight font-bold">+250 sesiones y +2.000 ejercicios</span>{" "}
            profesionales, organizados por{" "}
            <strong className="text-foreground">posición, categoría y objetivo</strong>: en
            menos de 5 minutos tienes la sesión de hoy lista para imprimir o llevar en
            tu móvil.{" "}
            <strong className="text-foreground">Un solo pago, acceso de por vida.</strong>
          </p>

          <img
            src={heroImg}
            alt="Biblioteca descargable en PDF: ebooks por posición — Laterales, Porteros, Defensas y Delanteros"
            width={1200}
            height={1200}
            className="mx-auto mt-8 w-full max-w-xl rounded-2xl"
          />

          <div className="mt-8">
            <Cta>Quiero Mi Biblioteca de Entrenamiento Hoy</Cta>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold">
            <span className="text-gold">★★★★★</span>
            <span className="text-muted-foreground">4.9/5 · +2146 evaluaciones</span>
          </div>
        </div>
      </section>

      {/* DOLOR */}
      <section data-reveal className="border-t border-border bg-card px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Kicker>Seamos honestos</Kicker>
          <H2>¿Te Identificas con Alguna de Estas Situaciones?</H2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Si respondes "sí" a dos o más de estas situaciones, probablemente el problema
            no sea tu esfuerzo... sino la falta de un método claro para entrenar.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {dolores.map((d) => (
              <div key={d} className="ecm-card flex gap-3 p-5">
                <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                <p className="text-sm font-semibold leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl rounded-2xl bg-secondary p-6 text-center text-sm leading-relaxed text-muted-foreground">
            El talento sin dirección se pierde. Cada semana entrenando a ciegas es una
            semana que no vuelve — para ti, o para los chicos que dependen de ti. Y nadie
            se estanca por falta de ganas: se estanca por no saber qué entrenar hoy. Eso
            se resuelve en 5 minutos, a partir de hoy.
          </p>

          <div className="mt-8">
            <Cta>Quiero Entrenar con Método Desde Hoy</Cta>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section data-reveal className="border-t border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Kicker>Mira la biblioteca por dentro</Kicker>
          <H2>
            Así Funciona la Biblioteca que Está Cambiando la Forma de Entrenar de Miles
            de Personas
          </H2>

          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {[
              { src: paginasImg, alt: "Páginas reales de los ebooks con diagramas de campo" },
              { src: heroImg, alt: "Portadas de los ebooks por posición" },
              { src: paginasImg, alt: "Ejercicios con pasos numerados y flechas de movimiento" },
            ].map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-[85%] flex-shrink-0 snap-center rounded-2xl border border-border object-cover sm:w-[48%]"
              />
            ))}
          </div>

          <h3 className="mt-10 text-center text-2xl sm:text-3xl">
            De la duda al campo en 3 pasos
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pasos.map((p) => (
              <div key={p.n} className="ecm-card p-6 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary font-display text-xl text-primary-foreground">
                  {p.n}
                </div>
                <h4 className="mt-4 font-extrabold">{p.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Cta>Quiero Empezar a Entrenar Así Hoy</Cta>
          </div>
        </div>
      </section>

      {/* GALERÍA CONTENIDO */}
      <section data-reveal className="border-t border-border bg-card px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Kicker>Esto es lo que vas a tener</Kicker>
          <H2>Nunca más vuelvas a preguntarte "¿qué entreno hoy?"</H2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Cada sesión es una guía completa, explicada con imágenes y probada en el
            campo — filtrada por posición, edad y objetivo. Abres el PDF, miras el
            diagrama, aplicas. Así de simple.
          </p>

          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {ebooks.map((e) => (
              <div
                key={e.t}
                className="ecm-card w-56 flex-shrink-0 snap-center overflow-hidden"
              >
                <div className="grid h-32 place-items-center bg-gradient-to-br from-primary to-primary-dark px-4 text-center">
                  <span className="font-display text-xl uppercase text-primary-foreground">
                    {e.t}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    Ebook PDF
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{e.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Cta>Quiero Todo Esto en Mi Móvil Hoy</Cta>
          </div>
        </div>
      </section>

      {/* PERFILES */}
      <section data-reveal className="border-t border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Kicker>Antes y después de la biblioteca</Kicker>
          <H2>Elige tu Perfil y Mira lo que Cambia en Ti</H2>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" /> Sesión lista en 5 minutos
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Smartphone className="h-4 w-4 text-primary" /> Todo desde el móvil, en el campo
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Target className="h-4 w-4 text-primary" /> Progresión clara, semana a semana
            </span>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { emoji: "⚽", tag: "Si eres jugador", title: "Dejas de Entrenar Sin Rumbo", items: jugador },
              { emoji: "👨‍🏫", tag: "Si eres entrenador", title: "Recuperas tu Tiempo y tu Autoridad", items: entrenador },
            ].map((col) => (
              <div key={col.tag} className="ecm-card p-6">
                <p className="text-sm font-bold text-primary">
                  {col.emoji} {col.tag}
                </p>
                <h3 className="mt-2 text-2xl">{col.title}</h3>
                <ul className="mt-5 space-y-4">
                  {col.items.map(([t, d]) => (
                    <li key={t} className="flex gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-bold">{t}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Cta>Quiero Ese Cambio en Mi Semana</Cta>
          </div>
        </div>
      </section>

      {/* ANTES VS DESPUÉS */}
      <section data-reveal className="border-t border-border bg-card px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Kicker>Antes vs Después</Kicker>
          <H2>Dentro de 30 Días Vas a Estar en Uno de los Dos</H2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            El tiempo va a pasar igual. Lo único que cambia es si lo aprovechas con
            método o lo sigues perdiendo.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-destructive/25 bg-destructive/5 p-6">
              <h3 className="text-xl text-destructive">Si Sigues Como Hasta Hoy</h3>
              <ul className="mt-4 space-y-3">
                {antes.map((a) => (
                  <li key={a} className="flex gap-3 text-sm">
                    <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-accent p-6">
              <h3 className="text-xl text-primary">Si Empiezas Hoy con la Biblioteca</h3>
              <ul className="mt-4 space-y-3">
                {despues.map((a) => (
                  <li key={a} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <Cta>Quiero Estar del Lado Verde en 30 Días</Cta>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section data-reveal className="border-t border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Kicker>Para quién es</Kicker>
          <H2>Hecho para Alguien Como Tú</H2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perfiles.map(([t, d]) => (
              <div key={t} className="ecm-card p-5">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-sm font-extrabold">{t}</p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Cta>Sí, Ese Soy Yo — Quiero Mi Acceso</Cta>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section data-reveal className="border-t border-border bg-card px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Kicker>Resultados reales</Kicker>
          <H2>Lo que Pasa Cuando Dejas de Improvisar</H2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {testimonios.map((t) => (
              <figure key={t.n} className="ecm-card p-6">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed">"{t.q}"</blockquote>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-primary-foreground">
                    {t.n.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t.n}</p>
                    <p className="text-xs text-muted-foreground">{t.r}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10">
            <Cta>Quiero el Mismo Resultado</Cta>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" data-reveal className="scroll-mt-16 border-t border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <Kicker>🔥 Precio Especial Solo Hoy</Kicker>
          <H2>Menos de lo que Gastas en un Café. Para Siempre.</H2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Acceso completo a la Biblioteca de Entrenamiento por un solo pago de{" "}
            <strong className="text-foreground">$3,90 USD</strong>, sin mensualidades: el
            acceso llega a tu e-mail en minutos y es tuyo de por vida — con{" "}
            <strong className="text-foreground">7 días de garantía total</strong>.
          </p>

          <div className="mx-auto mt-6 flex max-w-xl items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
            <p className="text-sm font-semibold">
              ¡Última oportunidad! Precio válido solo por hoy. Mañana vuelve al valor
              normal.
            </p>
          </div>

          <div className="ecm-card mt-8 overflow-hidden border-primary/40">
            <div className="bg-primary py-2 text-center text-xs font-extrabold uppercase tracking-[0.18em] text-primary-foreground">
              Oferta única
            </div>
            <div className="p-6 sm:p-8">
              <img
                src={heroImg}
                alt="Biblioteca completa en PDF"
                loading="lazy"
                className="mx-auto w-full max-w-xs rounded-xl"
              />

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  De <s>$19,50</s> sólo por hoy
                </p>
                <p className="mt-1 font-display text-6xl text-primary">
                  $3,90 <span className="text-2xl text-foreground">USD</span>
                </p>
                <p className="mt-2 inline-block rounded-full bg-highlight px-3 py-1 text-xs font-extrabold text-highlight-foreground">
                  80% DESCUENTO · Ahorras $15,60
                </p>
                <p className="mt-3 text-sm font-bold text-primary">
                  ✅ Pago único · Acceso vitalicio
                </p>
              </div>

              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {incluye.map((i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl bg-secondary p-5">
                <p className="flex items-center gap-2 text-sm font-extrabold">
                  <Gift className="h-4 w-4 text-primary" /> Bonos exclusivos incluidos
                </p>
                <ul className="mt-3 space-y-2">
                  {bonos.map(([n, t, p]) => (
                    <li key={n} className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="rounded bg-primary px-2 py-0.5 text-[10px] font-extrabold text-primary-foreground">
                        {n}
                      </span>
                      <span className="font-semibold">{t}</span>
                      <span className="text-muted-foreground">
                        <s>{p}</s>{" "}
                        <strong className="text-primary">GRATIS</strong>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col items-center">
                <a href="#oferta" className="ecm-cta">
                  Quiero Mi Biblioteca Completa
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                </a>
                <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                  <Lock className="h-3.5 w-3.5" /> Pago 100% seguro vía tarjeta o
                  transferencia
                </p>
                <p className="mt-2 text-xs font-semibold text-primary">
                  ✅ Acceso inmediato después de la compra
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  ¿Finalizaste el pedido? Revisa tu e-mail y accede ahora mismo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉN SOY */}
      <section data-reveal className="border-t border-border bg-card px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <img
            src={coachImg}
            alt="Coach Martínez — Entrenador Profesional"
            loading="lazy"
            width={912}
            height={1104}
            className="w-full rounded-2xl object-cover"
          />
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-primary">
              Quién soy · +15 años en el campo
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Coach Martínez — Metodología que Forma Jugadores de Verdad
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Llevo más de <strong className="text-foreground">15 años</strong> como
              entrenador profesional trabajando con academias, canteras y jugadores
              amateur en toda Latinoamérica y España. He formado a más de{" "}
              <strong className="text-foreground">2.000 futbolistas</strong> — desde niños
              de 6 años hasta adultos en clubes semiprofesionales.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Esta biblioteca reúne{" "}
              <strong className="text-foreground">toda mi metodología</strong> en un solo
              lugar: los mismos ejercicios, la misma progresión y las mismas guías
              ilustradas que uso día tras día en el campo. Sin relleno. Sin teoría vacía.
              Solo lo que funciona.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-secondary p-4 text-center">
                <p className="font-display text-3xl text-primary">+2.000</p>
                <p className="text-xs font-semibold text-muted-foreground">
                  Jugadores formados
                </p>
              </div>
              <div className="rounded-xl bg-secondary p-4 text-center">
                <p className="font-display text-3xl text-primary">15</p>
                <p className="text-xs font-semibold text-muted-foreground">
                  Años en el campo
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Cta>Quiero Entrenar con el Método del Coach</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section data-reveal className="border-t border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border-4 border-primary bg-accent">
            <Shield className="h-11 w-11 text-primary" />
          </div>
          <Kicker>Compra Protegida</Kicker>
          <H2>El Riesgo Es Todo Mío, No Tuyo</H2>
          <p className="mt-4 text-muted-foreground">
            Descarga hoy, aplica los entrenamientos durante{" "}
            <strong className="text-foreground">7 días completos</strong> y mira el cambio
            con tus propios ojos. Si sientes que no es para ti — por cualquier motivo y
            sin dar explicaciones — nos escribes un email y te devolvemos{" "}
            <strong className="text-foreground">hasta el último céntimo</strong>. Peor que
            gastar $3,90 es perder otros 6 meses entrenando a ciegas.
          </p>
          <div className="mt-8">
            <Cta>Probar 7 Días Sin Riesgo</Cta>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section data-reveal className="border-t border-border bg-card px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <H2>Preguntas Frecuentes</H2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map(([q, a], i) => (
              <AccordionItem key={q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm font-bold">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10">
            <Cta>Quiero Mi Acceso Ahora</Cta>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section data-reveal className="border-t border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Kicker>Última palabra</Kicker>
          <H2>Solo Queda Una Pregunta: ¿Sigues Improvisando o Empiezas Hoy?</H2>
          <p className="mt-4 text-muted-foreground">
            Seas <strong className="text-foreground">jugador</strong> o{" "}
            <strong className="text-foreground">entrenador</strong>, el próximo
            entrenamiento va a llegar igual. La única diferencia es si llegas a él con un
            plan profesional en el bolsillo — o improvisando otra vez.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              [Mail, "Acceso inmediato en tu e-mail"],
              [Check, "Un solo pago, acceso de por vida"],
              [Shield, "7 días de garantía total"],
              [Smartphone, "Funciona desde el móvil, para imprimir o leer en pantalla"],
            ].map(([Icon, label]) => {
              const I = Icon as typeof Mail;
              return (
                <div
                  key={label as string}
                  className="ecm-card flex items-center gap-3 p-4 text-left"
                >
                  <I className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm font-semibold">{label as string}</span>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-sm font-semibold">
            Cuesta menos que un café y lo pruebas 7 días sin riesgo. Si no te sirve, te
            devolvemos todo.
          </p>

          <div className="mt-8">
            <Cta>Quiero Mi Biblioteca Hoy Mismo</Cta>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card px-4 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Entrena con Método · Biblioteca de Entrenamientos de
        Fútbol en PDF
      </footer>
    </div>
  );
}
