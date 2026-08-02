import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
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
import heroImg from "@/assets/hero-biblioteca-pdf.webp";
import paginasImg from "@/assets/paginas-ejercicios.webp";
import coachImg from "@/assets/coach-martinez.webp";
import testi1 from "@/assets/testi-1.jpg.asset.json";
import testi2 from "@/assets/testi-2.jpg.asset.json";
import testi3 from "@/assets/testi-3.jpg.asset.json";
import testi4 from "@/assets/testi-4.jpg.asset.json";
import modLaterales from "@/assets/mod-laterales.webp";
import modPorteros from "@/assets/mod-porteros.webp";
import modDefensas from "@/assets/mod-defensas.webp";
import modDelanteros from "@/assets/mod-delanteros.webp";
import modFisico from "@/assets/mod-fisico.webp";
import modFemenino from "@/assets/mod-femenino.webp";
import modInfantil from "@/assets/mod-infantil.webp";
import modTecnica from "@/assets/mod-tecnica.webp";
import video1 from "@/assets/video-entrenamiento-1.webp";
import video2 from "@/assets/video-entrenamiento-2.webp";
import video3 from "@/assets/video-entrenamiento-3.webp";
import demoVideo from "@/assets/hero-entrenamiento.mp4.asset.json";

const feedbacks = [
  {
    name: "Lucas Ferreira",
    role: "Entrenador Sub-15",
    img: testi1.url,
    text: "En 3 semanas dejé de improvisar. Abro el PDF, elijo la sesión y entro al campo con todo claro. Mis jugadores notaron el cambio enseguida.",
  },
  {
    name: "Diego Santana",
    role: "Jugador amateur, 21 años",
    img: testi2.url,
    text: "Entreno solo 4 días por semana con los ejercicios individuales. Mi control y mi primer toque cambiaron por completo. Por menos de $10 fue lo mejor que compré.",
  },
  {
    name: "Rafael Nunes",
    role: "Cantera Sub-17",
    img: testi3.url,
    text: "Los diagramas son clarísimos. Preparé la sesión de la semana en 5 minutos y el míster me pidió el material. Vale muchísimo más de lo que cuesta.",
  },
  {
    name: "Bruno Alves",
    role: "Coordinador de academia",
    img: testi4.url,
    text: "Organizamos toda la academia con la biblioteca: por posición, por categoría y por objetivo. Ahorramos horas cada semana de planificación.",
  },
  {
    name: "Andrés Molina",
    role: "Padre y entrenador de barrio",
    img: testi1.url,
    text: "No tengo experiencia técnica y aun así pude aplicar todo paso a paso. Los chavales llegan motivados a cada entrenamiento.",
  },
  {
    name: "Marco Ribeiro",
    role: "Lateral, categoría adulta",
    img: testi2.url,
    text: "Poco espacio, poco material y sin compañeros: encontré sesiones exactas para eso. Ya no tengo excusas para no entrenar.",
  },
];

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
          "Deja de improvisar. Descarga la biblioteca completa, elige la sesión según posición y categoría, y entrena hoy mismo con método profesional. Acceso inmediato y garantía de 7 días.",
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

const modulos = [
  {
    t: "Laterales",
    d: "Recorrido por banda, centros y repliegue defensivo",
    img: modLaterales,
    n: "+180 ejercicios",
  },
  {
    t: "Porteros",
    d: "Reacción, salidas, blocaje y juego con los pies",
    img: modPorteros,
    n: "+150 ejercicios",
  },
  {
    t: "Defensas Centrales",
    d: "Marcaje, coberturas y salida limpia de balón",
    img: modDefensas,
    n: "+170 ejercicios",
  },
  {
    t: "Delanteros",
    d: "Definición, desmarques y remate en área",
    img: modDelanteros,
    n: "+200 ejercicios",
  },
  {
    t: "Técnica individual",
    d: "Pase, control, conducción y regate en espacio reducido",
    img: modTecnica,
    n: "+260 ejercicios",
  },
  {
    t: "Acondicionamiento físico",
    d: "Circuitos de fuerza, velocidad, agilidad y resistencia",
    img: modFisico,
    n: "+140 ejercicios",
  },
  {
    t: "Fútbol femenino",
    d: "Sesiones adaptadas por categoría y nivel",
    img: modFemenino,
    n: "+120 ejercicios",
  },
  {
    t: "Fútbol infantil",
    d: "Sub-6 a Sub-12, con juego, progresión y diversión",
    img: modInfantil,
    n: "+190 ejercicios",
  },
];

const videos = [
  {
    src: video1,
    alt: "Video explicativo de entrenamiento de pase en el móvil",
    title: "Demostraciones en video",
    desc: "Cada ejercicio incluye su video explicativo para que copies la técnica exacta.",
  },
  {
    src: video2,
    alt: "Video de finalización en tablet con miniaturas de sesiones",
    title: "Biblioteca de videos",
    desc: "Más de 120 videos cortos organizados por posición, nivel y objetivo.",
  },
  {
    src: video3,
    alt: "Catálogo de videos en laptop porteros defensas y delanteros",
    title: "Acceso desde cualquier dispositivo",
    desc: "Mira desde el móvil en el campo o desde la laptop cuando planifiques.",
  },
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
  "Módulos organizados por posición: Laterales, Porteros, Defensas Centrales, Delanteros",
  "Fútbol 360°: femenino, infantil y acondicionamiento físico",
  "Diagramas de campo con pasos numerados y flechas de movimiento",
  "Acceso vitalicio e inmediato",
  "Actualizaciones GRATIS",
  "Garantía incondicional de 7 días",
];

const incluyeBasico = [
  "Biblioteca esencial: +120 sesiones y +800 ejercicios",
  "Módulos por posición: Defensas, Delanteros y Mediocampo",
  "Diagramas de campo con pasos numerados",
  "Acceso inmediato y vitalicio",
  "BONO 01 · Guía de Entrenamiento",
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

export const CHECKOUT_URL = "https://pay.kiwify.com/DdeFcSY";
export const CHECKOUT_BASICO_URL = "https://pay.kiwify.com/eQoQd0Y";

function trackCheckout() {
  if (typeof window !== "undefined") {
    (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.(
      "track",
      "InitiateCheckout",
    );
  }
}

function CheckoutButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: string;
  variant?: "solid" | "outline";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackCheckout}
      className={
        variant === "outline" ? "ecm-cta ecm-cta-outline" : "ecm-cta"
      }

    >
      {children}
      <ArrowRight className="h-5 w-5 flex-shrink-0" />
    </a>
  );
}

function PaySafety() {
  return (
    <>
      <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
        <Lock className="h-3.5 w-3.5" /> Pago 100% seguro vía tarjeta o transferencia
      </p>
      <p className="mt-2 text-sm font-semibold text-primary">
        ✅ Acceso inmediato después de la compra
      </p>
      <p className="mt-1 text-center text-sm text-muted-foreground">
        ¿Finalizaste el pedido? Revisa tu e-mail y accede ahora mismo.
      </p>
    </>
  );
}



function LazyVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || load) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load]);

  return (
    <div ref={ref} className="aspect-video w-full bg-ink">
      {load ? (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="none"
          className="aspect-video h-full w-full bg-ink object-cover"
        />
      ) : (
        <img
          src={poster}
          alt="Vista previa del video de entrenamiento"
          loading="lazy"
          decoding="async"
          className="aspect-video h-full w-full object-cover"
        />
      )}
    </div>
  );
}

const OFFER_EVENT = "ecm:open-offer";


function openOfferModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OFFER_EVENT));
  }
}

const OFFER_PAINS = [
  "Llegar al campo sin saber qué entrenar y improvisar delante del equipo",
  "Repetir siempre los mismos ejercicios y ver el estancamiento",
  "Perder horas buscando sesiones sueltas en YouTube que no sirven",
  "Entrenar sin objetivo claro por posición, edad o nivel",
];

function OfferModal() {
  const [step, setStep] = useState<null | "main" | "down">(null);
  const [downUsed, setDownUsed] = useState(false);
  const [left, setLeft] = useState(15 * 60);

  useEffect(() => {
    const onOpen = () => setStep("main");
    window.addEventListener(OFFER_EVENT, onOpen);
    return () => window.removeEventListener(OFFER_EVENT, onOpen);
  }, []);

  const close = () => {
    if (step === "main" && !downUsed) {
      setDownUsed(true);
      setStep("down");
      return;
    }
    setStep(null);
  };

  useEffect(() => {
    if (!step) return;
    document.body.style.overflow = "hidden";
    const id = setInterval(() => setLeft((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => {
      document.body.style.overflow = "";
      clearInterval(id);
    };
  }, [step]);

  if (!step) return null;

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  const shell = (label: string, children: ReactNode) => (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-foreground/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={close}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-primary/30 bg-card p-5 shadow-2xl sm:rounded-2xl sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Cerrar"
          className="absolute right-3 top-3 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );

  if (step === "down") {
    return shell(
      "Oferta alternativa",
      <>
        <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-foreground">
          <Gift className="h-3.5 w-3.5 text-primary" /> Espera · última oportunidad
        </span>

        <h2 className="mt-4 text-[1.6rem] leading-tight sm:text-3xl">
          ¿El precio te frenó? Empieza hoy con el{" "}
          <span className="ecm-highlight">Paquete Básico</span>
        </h2>

        <p className="mt-3 text-sm text-muted-foreground">
          No te vayas con las manos vacías: sigue improvisando entrenamientos sin objetivo
          o empieza hoy mismo con las sesiones esenciales por menos de lo que cuesta un
          café doble.
        </p>

        <div className="mt-5 rounded-xl border border-primary/25 bg-accent p-4">
          <ul className="space-y-2">
            {[
              "Sesiones esenciales listas para imprimir",
              "Ejercicios ilustrados paso a paso",
              "Acceso inmediato y de por vida",
              "Garantía de 7 días o te devolvemos el dinero",
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-sm font-semibold text-accent-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 text-center">
          <p className="text-4xl font-black text-foreground">$7,50 USD</p>
          <p className="mt-1 text-sm font-bold text-primary">Pago único · acceso de por vida</p>
          <p className="mt-1 inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-destructive">
            <Clock className="h-3.5 w-3.5" /> Esta condición expira en {mm}:{ss}
          </p>
        </div>

        <div className="mt-5 flex flex-col items-center">
          <a
            href={CHECKOUT_BASICO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackCheckout}
            className="ecm-cta ecm-cta-breathe w-full justify-center"
          >
            Quiero empezar por $7,50
            <ArrowRight className="h-5 w-5 flex-shrink-0" />
          </a>
          <Badges />
          <button
            type="button"
            onClick={() => setStep("main")}
            className="mt-4 text-sm font-semibold text-muted-foreground underline"
          >
            Prefiero el Paquete Completo ($9,99)
          </button>
        </div>
      </>,
    );
  }

  return shell(
    "Oferta principal",
    <>
      <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-destructive">
        <Clock className="h-3.5 w-3.5" /> Oferta reservada por {mm}:{ss}
      </span>

      <h2 className="mt-4 text-[1.6rem] leading-tight sm:text-3xl">
        Paquete Completo: todo lo que necesitas para{" "}
        <span className="ecm-highlight">nunca más improvisar</span>
      </h2>

      <p className="mt-3 text-sm font-semibold text-muted-foreground">
        Esto es lo que dejas atrás hoy mismo:
      </p>
      <ul className="mt-3 space-y-2">
        {OFFER_PAINS.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-foreground">
            <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 rounded-xl border border-primary/25 bg-accent p-4">
        <ul className="space-y-2">
          {[
            "+250 sesiones y +2.000 ejercicios listos para imprimir",
            "Organizado por posición, categoría, edad y objetivo",
            "Videoguías de apoyo en cada ejercicio",
            "Acceso inmediato y de por vida, un solo pago",
          ].map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-sm font-semibold text-accent-foreground"
            >
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 text-center">
        <p className="text-sm font-semibold text-muted-foreground line-through">
          Valor real $97 USD
        </p>
        <p className="mt-1 text-4xl font-black text-foreground">$9,99 USD</p>
        <p className="mt-1 text-sm font-bold text-primary">Pago único · sin mensualidades</p>
      </div>

      <div className="mt-5 flex flex-col items-center">
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackCheckout}
          className="ecm-cta ecm-cta-breathe w-full justify-center"
        >
          Sí, quiero el Paquete Completo
          <ArrowRight className="h-5 w-5 flex-shrink-0" />
        </a>
        <Badges />
        <PaySafety />
      </div>
    </>,
  );
}

function Cta({
  children,
  checkout = false,
}: {
  children: string;
  checkout?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      {checkout ? (
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackCheckout}
          className="ecm-cta"
        >
          {children}
          <ArrowRight className="h-5 w-5 flex-shrink-0" />
        </a>
      ) : (
        <button type="button" onClick={openOfferModal} className="ecm-cta">
          {children}
          <ArrowRight className="h-5 w-5 flex-shrink-0" />
        </button>
      )}
      <Badges />
    </div>
  );
}



function Badges() {
  return (
    <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-semibold text-muted-foreground">
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
    <p className="text-center text-sm font-extrabold uppercase tracking-[0.18em] text-primary">
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mx-auto mt-3 max-w-4xl text-center text-3xl leading-[1.2] sm:text-5xl">
      {children}
    </h2>
  );
}

/* --------------------------------- page ---------------------------------- */

function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          e.target.classList.toggle("is-visible", e.isIntersecting);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

function TestimonialCard({
  t,
}: {
  t: { name: string; role: string; text: string; img: string };
}) {
  return (
    <figure className="ecm-card w-[19rem] flex-shrink-0 p-5 sm:w-[22rem]">
      <div className="flex items-center gap-3">
        <img
          src={t.img}
          alt={t.name}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/40"
        />
        <div>
          <p className="text-sm font-extrabold">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.role}</p>
        </div>
        <BadgeCheck className="ml-auto h-5 w-5 text-primary" />
      </div>
      <div className="mt-3 flex gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
        “{t.text}”
      </blockquote>
    </figure>
  );
}

const compras = [
  { nombre: "Lucas M.", ciudad: "Buenos Aires", plan: "Paquete Completo" },
  { nombre: "Andrés P.", ciudad: "Bogotá", plan: "Paquete Básico" },
  { nombre: "Diego R.", ciudad: "Ciudad de México", plan: "Paquete Completo" },
  { nombre: "Javier S.", ciudad: "Madrid", plan: "Paquete Completo" },
  { nombre: "Mateo G.", ciudad: "Santiago", plan: "Paquete Básico" },
  { nombre: "Bruno F.", ciudad: "Lima", plan: "Paquete Completo" },
  { nombre: "Carlos V.", ciudad: "Montevideo", plan: "Paquete Completo" },
  { nombre: "Pablo H.", ciudad: "Sevilla", plan: "Paquete Básico" },
];

function ComprasRecientes() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    const show = () => {
      setVisible(true);
      hideTimer = setTimeout(() => setVisible(false), 5000);
    };
    const first = setTimeout(show, 6000);
    const loop = setInterval(() => {
      setIndex((i) => (i + 1) % compras.length);
      show();
    }, 14000);
    return () => {
      clearTimeout(first);
      clearTimeout(hideTimer);
      clearInterval(loop);
    };
  }, []);

  if (!visible) return null;
  const c = compras[index];

  return (
    <div className="ecm-buy-toast pointer-events-none fixed bottom-4 left-4 z-40 max-w-[17rem] rounded-xl border border-border bg-card/95 px-3 py-2.5 shadow-lg backdrop-blur sm:max-w-xs">
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent">
          <Check className="h-4 w-4 text-primary" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-foreground">
            {c.nombre} · {c.ciudad}
          </p>
          <p className="text-xs text-muted-foreground">
            Acaba de comprar el {c.plan}
          </p>
        </div>
      </div>
    </div>
  );
}

function useStartAtTop() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const toTop = () => window.scrollTo(0, 0);
    toTop();
    const r1 = requestAnimationFrame(toTop);
    const t1 = setTimeout(toTop, 120);
    const t2 = setTimeout(toTop, 400);
    return () => {
      cancelAnimationFrame(r1);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
}

function LandingPage() {
  useScrollReveal();
  useStartAtTop();

  return (

    <div className="bg-background">
      <ComprasRecientes />
      <OfferModal />


      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-primary py-2.5 text-center text-xs font-extrabold uppercase tracking-[0.15em] text-primary-foreground sm:text-sm">
        Descuento exclusivo solo hoy
      </div>

      {/* HERO */}
      <section data-reveal className="px-4 pb-14 pt-10 sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
            <span className="ecm-pulse-dot" />
            +2146 jugadores y entrenadores ya evolucionando
          </span>

          <h1 className="mt-6 text-[2.1rem] leading-[1.18] sm:text-[3.4rem]">
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
            fetchPriority="high"
            decoding="async"
            alt="Biblioteca de entrenamientos por posición — Laterales, Porteros, Defensas y Delanteros"
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

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["+250", "sesiones listas"],
              ["+2.000", "ejercicios ilustrados"],
              ["5 min", "para armar tu sesión"],
            ].map(([n, d]) => (
              <div key={d} className="ecm-card px-4 py-4 text-center">
                <p className="font-display text-2xl text-primary sm:text-3xl">{n}</p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS EXPLICATIVOS (movido arriba para captar atención) */}
      <section data-reveal className="border-t border-border bg-card px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Kicker>Mira esto antes de seguir</Kicker>
          <H2>
            No solo PDFs: cada ejercicio tiene su{" "}
            <span className="ecm-highlight">video explicativo</span>
          </H2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Además de la biblioteca descargable, recibes acceso a videos cortos donde el
            coach muestra la técnica correcta, la organización del campo y los errores más
            comunes. Ideal para copiar la ejecución exacta antes de salir a entrenar.
          </p>

          <div className="ecm-card mx-auto mt-10 max-w-3xl overflow-hidden">
            <LazyVideo src={demoVideo.url} poster={video1} />

            <div className="p-5 text-center">
              <p className="text-base font-bold text-foreground">
                Así se ven las sesiones en acción
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Ejemplo de un ejercicio guiado paso a paso, igual que en los videos de la
                biblioteca.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {videos.map((v) => (
              <div key={v.title} className="ecm-card overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={v.src}
                    alt={v.alt}
                    loading="lazy"
                    width={1024}
                    height={576}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm transition-transform hover:scale-110">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 pl-0.5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm font-semibold text-muted-foreground">
            ✅ Acceso a todos los videos incluido en el mismo pago único
          </p>
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
            <Cta>Quiero Salir de Esto Hoy Mismo</Cta>
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
              { src: paginasImg, alt: "Páginas reales de la biblioteca con diagramas de campo" },
              { src: heroImg, alt: "Módulos de la biblioteca organizados por posición" },
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
          </div>
        </div>
      </section>

      {/* GALERÍA CONTENIDO */}
      <section data-reveal className="border-t border-border bg-card px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Kicker>Esto es lo que vas a tener</Kicker>
          <H2>Nunca más vuelvas a preguntarte "¿qué entreno hoy?"</H2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Dentro de la biblioteca encuentras todo esto organizado por posición, edad
            y objetivo. Eliges el área que quieres trabajar hoy, abres la sesión y
            aplicas. Así de simple.
          </p>

          <div className="ecm-marquee mt-10">
            <div className="ecm-marquee-track" style={{ animationDuration: "40s" }}>
              {[...modulos, ...modulos].map((m, i) => (
                <div
                  key={`${m.t}-${i}`}
                  className="ecm-card w-64 flex-shrink-0 overflow-hidden"
                  aria-hidden={i >= modulos.length}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={m.img}
                      alt={`Entrenamiento de ${m.t} en la biblioteca`}
                      loading="lazy"
                      width={640}
                      height={640}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                      {m.n}
                    </span>
                    <span className="absolute bottom-3 left-3 right-3 font-display text-lg uppercase leading-snug text-white">
                      {m.t}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">
                      Incluido en la biblioteca
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Y muchas áreas más dentro de la biblioteca
          </p>


          <div className="mt-8">
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
                    <p className="text-sm text-muted-foreground">{t.r}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10">
          </div>
        </div>
      </section>

      {/* FEEDBACKS DINÁMICOS */}
      <section
        data-reveal
        className="overflow-hidden border-t border-border bg-card px-0 py-16"
      >
        <div className="px-4 sm:px-6">
          <Kicker>⚡ Lo que dicen quienes ya entrenan con método</Kicker>
          <H2>
            Ellos Dejaron de Improvisar.{" "}
            <span className="ecm-highlight">Ahora Entrenan con un Plan.</span>
          </H2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
            Más de <strong className="text-foreground">2.146 jugadores y entrenadores</strong>{" "}
            ya usan la biblioteca cada semana. Estos son algunos de sus mensajes.
          </p>
        </div>

        <div className="ecm-marquee mt-10">
          <div className="ecm-marquee-track">
            {[...feedbacks, ...feedbacks].map((t, i) => (
              <TestimonialCard key={`a-${i}`} t={t} />
            ))}
          </div>
        </div>

        <div className="ecm-marquee ecm-marquee-reverse mt-4">
          <div className="ecm-marquee-track">
            {[...feedbacks.slice().reverse(), ...feedbacks.slice().reverse()].map(
              (t, i) => (
                <TestimonialCard key={`b-${i}`} t={t} />
              ),
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-gold text-gold" /> 4,9 / 5 de valoración media
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BadgeCheck className="h-4 w-4 text-primary" /> Compras verificadas
          </span>
        </div>
      </section>



      {/* OFERTA — DOS PLANES */}
      <section id="oferta" data-reveal className="scroll-mt-16 border-t border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Kicker>🔥 Precio Especial Solo Hoy</Kicker>
          <H2>Menos de lo que Gastas en un Café. Para Siempre.</H2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            <strong className="text-foreground">Básico $7,50 USD</strong> para empezar hoy con
            método, o <strong className="text-foreground">Completo $9,99 USD</strong> con la
            biblioteca entera y todos los bonos. Un solo pago, sin mensualidades: el acceso
            llega a tu e-mail en minutos y es tuyo de por vida — con{" "}
            <strong className="text-foreground">7 días de garantía total</strong>.
          </p>

          <div className="mx-auto mt-6 flex max-w-xl items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
            <p className="text-sm font-semibold">
              ¡Última oportunidad! Precios válidos solo por hoy. Mañana vuelven al valor
              normal.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
            {/* PLAN COMPLETO */}
            <div className="ecm-card relative overflow-hidden border-primary/40">
              <div className="bg-primary py-2 text-center text-xs font-extrabold uppercase tracking-[0.18em] text-primary-foreground">
                🔥 ¡Más vendido!
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-center text-2xl">Paquete Completo</h3>
                <img
                  src={heroImg}
            fetchPriority="high"
            decoding="async"
                  alt="Biblioteca completa de entrenamientos"
                  loading="lazy"
                  className="mx-auto mt-5 w-full max-w-xs rounded-xl"
                />

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    De <s>$49,90</s> sólo por hoy
                  </p>
                  <p className="mt-1 font-display text-6xl text-primary">
                    $9,99 <span className="text-2xl text-foreground">USD</span>
                  </p>
                  <p className="mt-2 inline-block rounded-full bg-highlight px-3 py-1 text-xs font-extrabold text-highlight-foreground">
                    80% DESCUENTO · Ahorras $39,91
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
                  <CheckoutButton href={CHECKOUT_URL}>
                    Quiero el Paquete Completo
                  </CheckoutButton>
                  <PaySafety />
                </div>
              </div>
            </div>

            {/* PLAN BÁSICO */}
            <div className="ecm-card overflow-hidden">
              <div className="bg-secondary py-2 text-center text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
                Para empezar hoy
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-center text-2xl">Paquete Básico</h3>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    De <s>$37,50</s> sólo por hoy
                  </p>
                  <p className="mt-1 font-display text-6xl text-foreground">
                    $7,50 <span className="text-2xl text-muted-foreground">USD</span>
                  </p>
                  <p className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-extrabold text-foreground">
                    80% DESCUENTO · Ahorras $30,00
                  </p>
                  <p className="mt-3 text-sm font-bold text-primary">
                    ✅ Pago único · Acceso vitalicio
                  </p>
                </div>

                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {incluyeBasico.map((i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col items-center">
                  <CheckoutButton href={CHECKOUT_BASICO_URL} variant="outline">
                    Elegir Paquete Básico
                  </CheckoutButton>
                  <PaySafety />
                </div>
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
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-primary">
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
                <p className="text-sm font-semibold text-muted-foreground">
                  Jugadores formados
                </p>
              </div>
              <div className="rounded-xl bg-secondary p-4 text-center">
                <p className="font-display text-3xl text-primary">15</p>
                <p className="text-sm font-semibold text-muted-foreground">
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
            gastar $7,50 es perder otros 6 meses entrenando a ciegas.
          </p>
          <div className="mt-8">
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
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card px-4 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Entrena con Método · Biblioteca de Entrenamientos de
        Fútbol en PDF
      </footer>
    </div>
  );
}
