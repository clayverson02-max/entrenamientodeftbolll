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
  Play,
  LoaderCircle,
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
import coachImgAsset from "@/assets/coach-martinez.jpg.asset.json";
const coachImg = coachImgAsset.url;
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
const uploadedVslEspanol = "/videos/presentacion-plataforma.mp4";

const feedbacksTop = [
  {
    name: "Carlos Méndez",
    role: "Entrenador Sub-14",
    text: "La organización por posición es lo que más me ayudó. Ya no pierdo tiempo pensando qué hacer con los laterales mientras trabajo con los centrales.",
  },
  {
    name: "Julián Castro",
    role: "Jugador Juvenil",
    text: "Los videos son clave. Veo el movimiento exacto antes de intentar el ejercicio. Siento que mi técnica individual mejoró en solo 2 semanas.",
  },
  {
    name: "Roberto Gómez",
    role: "Coordinador Deportivo",
    text: "Implementamos esta plataforma en toda la academia y el nivel de los entrenamientos subió drásticamente. Los diagramas son muy profesionales.",
  },
  {
    name: "Santiago Peña",
    role: "Padre de jugador",
    text: "Mi hijo entrena con estas sesiones en el parque. Está mucho más motivado porque siente que está haciendo lo mismo que los profesionales.",
  },
];

const feedbacksBottom = [
  {
    name: "Fernando Ruiz",
    role: "Entrenador de Porteros",
    text: "La sección de arqueros es muy completa. Trabajo reacción y juego con los pies de una forma que no encontraba en otros manuales.",
  },
  {
    name: "Miguel Ángel Torres",
    role: "Delantero Amateur",
    text: "Los circuitos de finalización me dieron mucha más confianza frente al arco. La plataforma es intuitiva y fácil de usar en el móvil.",
  },
  {
    name: "Gabriel Silva",
    role: "Entrenador Sub-10",
    text: "Ideal para el fútbol base. Los chicos se divierten y aprenden con una metodología seria pero adaptada a su edad.",
  },
  {
    name: "Luis Eduardo Paz",
    role: "Preparador Físico",
    text: "Los bloques de agilidad y velocidad integrados con balón son excelentes. Aprovecho cada minuto de la sesión al máximo.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Entrena con Método: Biblioteca Completa de Entrenamientos de Fútbol",
      },
      {
        name: "description",
        content:
          "Más de 2.000 ejercicios, más de 250 sesiones en video y 4 bonos en una plataforma. Elige posición y objetivo, prepara tu sesión y deja de improvisar.",
      },
      {
        property: "og:title",
        content: "Entrena con Método: Biblioteca Completa de Entrenamientos de Fútbol",
      },
      {
        property: "og:description",
        content:
          "Más de 2.000 ejercicios, más de 250 sesiones en video y 4 bonos en una plataforma. Elige posición y objetivo, prepara tu sesión y deja de improvisar.",
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
    t: "Acceso Instantáneo",
    d: "Recibes tu acceso por e-mail en minutos: usuario y contraseña para entrar a tu plataforma personal desde cualquier dispositivo.",
  },
  {
    n: "2",
    t: "Todo Organizado",
    d: "Accedes a tu panel personalizado por posición, edad y objetivo. La plataforma está diseñada para que encuentres todo en segundos.",
  },
  {
    n: "3",
    t: "Entrenas con Video",
    d: "Mira el video, sigue el diagrama y aplica con seguridad. Llegas al campo sabiendo exactamente qué hacer, cómo y por qué.",
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

const jugador = [
  [
    "Sabes qué entrenar hoy, mañana y el lunes",
    "Progresión real, semana a semana, en tu propia guía.",
  ],
  [
    "Llegas al partido con otra pierna",
    "Circuitos de acondicionamiento físico explicados paso a paso.",
  ],
  [
    "El técnico empieza a notarte",
    "Control, pase y definición más limpios, ejercicio por ejercicio.",
  ],
  [
    "Juegas sin miedo a equivocarte",
    "Repites la jugada 50 veces con la guía en mano; en el partido te sale sola.",
  ],
  [
    "No dependes de nadie para evolucionar",
    "Solo, en el parque o en la cancha del barrio, siempre tienes una sesión lista.",
  ],
];

const entrenador = [
  [
    "Recuperas 5 horas cada semana",
    "Abres la plataforma en el móvil y ya tienes la sesión estructurada.",
  ],
  ["Nunca repites la misma sesión", "Más de 250 sesiones organizadas por objetivo."],
  [
    "Los padres dejan de cuestionarte",
    "Cuando la sesión está estructurada y explicada, se nota desde la banda.",
  ],
  [
    "Tu equipo empieza a jugar distinto",
    "Trabajo por bloques y progresión visibles en pocas semanas.",
  ],
  [
    "Nunca más llegas al campo improvisando",
    "Siempre hay una sesión lista en tu plataforma para esa situación.",
  ],
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
  [
    "Jugadores cansados de estancarse",
    "Ganas de mejorar hay. Lo que faltaba era saber qué entrenar.",
  ],
  [
    "Entrenadores sin tiempo para planificar",
    "Sesión lista en minutos, sin sacrificar la calidad del trabajo.",
  ],
  [
    "Padres que no quieren que su hijo se quede atrás",
    "Le das lo que otros niños no tienen: método real desde pequeño.",
  ],
  ["Escuelitas y academias", "Un método que justifica cada matrícula que cobras."],
  [
    "Entrenador de base",
    "Sub-6 a Sub-15: sesiones adaptadas a cada edad, sin ejercicios copiados de adultos.",
  ],
  [
    "Jugadores juveniles con ambición",
    "Sub-13 a Sub-20: entrena hoy lo que te acerca al siguiente nivel.",
  ],
  ["Profesores de Ed. Física", "Clases que los alumnos esperan con ganas toda la semana."],
  [
    "Entrenador amateur",
    "Poco tiempo, muchos jugadores: llegas con la sesión lista y aprovechas cada minuto.",
  ],
  [
    "Preparador físico",
    "Circuitos, velocidad, agilidad y resistencia con balón integrados a la sesión.",
  ],
  [
    "Entrenador de porteros",
    "Trabajo específico de reacción, salidas y juego con los pies para tus arqueros.",
  ],
  [
    "Coordinador deportivo",
    "Estandariza la metodología del club y guía a todo tu cuerpo técnico con un solo recurso.",
  ],
  [
    "Quien entrena por su cuenta",
    "Sin equipo, sin cancha grande: sesiones que funcionan en poco espacio.",
  ],
  [
    "Quien solo tiene 30 minutos al día",
    "Sesiones cortas y bien dirigidas valen más que horas sin rumbo.",
  ],
  ["Equipos y clubes de barrio", "Un plan serio para todo el plantel, sin gastar en consultoría."],
  ["Quien vive por el fútbol", "Y está harto de entrenar sin ver que nada cambia."],
];

const testimonios = [
  {
    q: "Llegué al entrenamiento con la sesión ya lista en mi plataforma. Los chicos entendieron todo en minutos. Nunca vi un grupo tan enfocado.",
    n: "Andrés M.",
    r: "Formador Sub-12 · Vancouver",
  },
  {
    q: "Los ejercicios de pase y control cambiaron completamente el ritmo del equipo. En 3 semanas ya se notó en los partidos.",
    n: "Diego R.",
    r: "Categoría Sub-15 · Madrid",
  },
  {
    q: "Entreno solo en la cancha del barrio con la plataforma en el celular. Mi drible mejoró muchísimo y el DT me puso de titular.",
    n: "Mateo S.",
    r: "Jugador Sub-17 · Buenos Aires",
  },
  {
    q: "Ya no gasto horas armando entrenamientos. Abro la plataforma, miro el video y listo. Los padres notaron la diferencia.",
    n: "Luis F.",
    r: "Escuela Sub-9 · Bogotá",
  },
];

const incluye = [
  "Acceso a la Plataforma Web Completa y Personalizada",
  "+250 sesiones y +2.000 ejercicios organizados",
  "Módulos por posición: Laterales, Porteros, Defensas, Delanteros",
  "Fútbol 360°: femenino, infantil y acondicionamiento físico",
  "Materiales en video didácticos integrados en cada ejercicio",
  "Diagramas de campo claros y descargables",
  "Acceso vitalicio con usuario y contraseña",
  "Actualizaciones automáticas sin descargas extras",
  "Los 4 bonos adicionales incluidos",
  "Garantía incondicional de 7 días",
];

const incluyeBasico = [
  "200 entrenamientos 100% enfocados en delanteros",
  "Definición, remate, desmarques y movimientos dentro del área",
  "Organizado por nivel y situación de juego",
  "Video de cada ejercicio incluido",
  "Acceso inmediato y vitalicio",
  "Garantía incondicional de 7 días",
];

const bonos = [
  {
    n: "BONO 01",
    title: "Guía de Entrenamiento",
    text: "Dale dirección a tu trabajo. Un recurso para organizar tus sesiones y dejar de decidir todo a último momento.",
  },
  {
    n: "BONO 02",
    title: "50 Ejercicios de Técnica Individual",
    text: "Más opciones para trabajar control, pase y ejecución. Elige la tarea y repite con un objetivo concreto.",
  },
  {
    n: "BONO 03",
    title: "Circuitos de Preparación Física",
    text: "Complementa el trabajo con balón con circuitos para el acondicionamiento. Prepara la sesión con una estructura clara.",
  },
  {
    n: "BONO 04",
    title: "Entrenamientos de Regate, Fuerza y Técnica",
    text: "Amplía tu repertorio para trabajar el uno contra uno, la fuerza y la ejecución técnica. Más recursos para variar tus sesiones.",
  },
];

const faqs = [
  [
    "¿Cómo y cuándo recibiré mi acceso?",
    "Una vez confirmado tu pago, recibirás un correo electrónico con tus datos de acceso (usuario y contraseña) para entrar a tu plataforma personal. En la mayoría de los casos, en menos de 2 minutos.",
  ],
  [
    "¿Para quién está diseñada la Plataforma?",
    "Fue creada para jugadores y entrenadores de todos los niveles. Encontrarás más de 250 sesiones organizadas por posición, categoría y objetivo, desde Sub-8 hasta adultos.",
  ],
  [
    "¿Qué incluye exactamente la oferta?",
    "Acceso vitalicio a la plataforma web completa: biblioteca organizada por posición y categoría, materiales en video didácticos integrados y 4 bonos adicionales: guía de entrenamiento, 50 ejercicios de técnica individual, circuitos de preparación física y entrenamientos de regate, fuerza y técnica. Todo en una sola herramienta.",
  ],
  [
    "¿Puedo entrenar aunque esté solo?",
    "Sí. Muchos ejercicios pueden realizarse de forma individual, mientras que otros están pensados para entrenar con compañeros o equipos.",
  ],
  [
    "¿El pago es único y completamente seguro?",
    "Sí. Un único pago, sin mensualidades, procesado en plataformas seguras.",
  ],
  [
    "¿Qué pasa si la Plataforma no cumple mis expectativas?",
    "Tienes 7 días de garantía. Si no estás conforme, solicitas el reembolso y recibes el 100% de tu dinero.",
  ],
  [
    "¿Necesito experiencia para aprovechar el contenido?",
    "No. Todos los ejercicios están explicados paso a paso con diagramas y videos, para que cualquier nivel pueda aplicarlos.",
  ],
  [
    "¿Y si tengo poco espacio, poco material o faltan jugadores?",
    "Hay sesiones pensadas exactamente para eso: espacios reducidos, poco material y grupos pequeños.",
  ],
  [
    "¿Cuánto tiempo necesito para preparar un entrenamiento?",
    "Menos de 5 minutos. Entras a la plataforma, eliges posición y objetivo, miras el video y ya puedes ir al campo con todo claro.",
  ],
  [
    "¿Sirve tanto para jugadores como para entrenadores?",
    "Sí. El jugador encuentra sesiones individuales para evolucionar por su cuenta y el entrenador encuentra sesiones completas de equipo.",
  ],
];

/* -------------------------------- helpers -------------------------------- */

export const CHECKOUT_URL = "https://pay.hotmart.com/G107438250J?checkoutMode=10";
export const CHECKOUT_BASICO_URL = "https://pay.hotmart.com/A107783439V?checkoutMode=10";

function trackCheckout(plan: "completo" | "basico") {
  if (typeof window !== "undefined") {
    const eventId = `checkout-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.(
      "track",
      "InitiateCheckout",
      {
        currency: "USD",
        value: plan === "completo" ? 6.5 : 4.5,
        content_name: plan === "completo" ? "Paquete Completo" : "Pack Delanteros",
      },
      { eventID: eventId },
    );
  }
}

function openCheckoutModal(url: string) {
  if (typeof window !== "undefined") {
    trackCheckout(url === CHECKOUT_BASICO_URL ? "basico" : "completo");

    let finalUrl = url;
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const utms = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
      const urlObj = new URL(url);

      utms.forEach((utm) => {
        const value = searchParams.get(utm);
        if (value) {
          urlObj.searchParams.set(utm, value);
        }
      });

      finalUrl = urlObj.toString();
    } catch (e) {
      // fallback to original url if anything fails
    }

    window.open(finalUrl, "_blank", "noopener,noreferrer");
  }
}

function CheckoutModal() {
  return null;
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
  const className = variant === "outline" ? "ecm-cta ecm-cta-outline" : "ecm-cta";

  return (
    <button type="button" onClick={() => openCheckoutModal(href)} className={className}>
      {children}
      <ArrowRight className="h-5 w-5 flex-shrink-0" />
    </button>
  );
}

function PaySafety() {
  return (
    <>
      <div className="mt-3 flex flex-col items-center gap-2">
        <p className="text-xs font-bold text-primary">Pago 100% seguro y garantizado</p>
      </div>
      <p className="mt-2 text-sm font-semibold text-primary">
        ✅ Acceso inmediato después de la compra
      </p>

      <p className="mt-1 text-center text-sm text-muted-foreground">
        ¿Finalizaste el pedido? Revisa tu e-mail y accede ahora mismo.
      </p>
    </>
  );
}

function pauseOtherVideos(current: HTMLVideoElement) {
  document.querySelectorAll<HTMLVideoElement>("video[data-football-video]").forEach((video) => {
    if (video !== current) video.pause();
  });
}

function PlatformVsl() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ended, setEnded] = useState(false);
  const [progress, setProgress] = useState(0);

  const play = async () => {
    const video = videoRef.current;
    if (!video) return;
    setFailed(false);
    try {
      await video.play();
    } catch {
      setFailed(true);
      setWaiting(false);
    }
  };
  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void play();
    else video.pause();
  };

  return (
    <div className="football-vsl" aria-label="Presentación de la plataforma de fútbol">
      <div className="football-vsl-label">
        <Play size={15} aria-hidden="true" />
        MIRA LA PLATAFORMA POR DENTRO
      </div>
      <div className="football-vsl-screen">
        <video
          ref={videoRef}
          src={uploadedVslEspanol}
          poster="/images/presentacion-plataforma.webp"
          data-football-video
          playsInline
          preload="metadata"
          disablePictureInPicture
          tabIndex={started ? 0 : -1}
          role="button"
          aria-label={playing ? "Pausar presentación" : "Reproducir presentación"}
          onClick={toggle}
          onKeyDown={(event) => {
            if (event.key === " " || event.key === "Enter") {
              event.preventDefault();
              toggle();
            }
          }}
          onPlay={(event) => {
            pauseOtherVideos(event.currentTarget);
            setStarted(true);
            setPlaying(true);
            setEnded(false);
          }}
          onPlaying={() => {
            setWaiting(false);
            setFailed(false);
          }}
          onWaiting={() => setWaiting(true)}
          onCanPlay={() => setWaiting(false)}
          onPause={() => {
            setPlaying(false);
            setWaiting(false);
          }}
          onTimeUpdate={(event) => {
            const video = event.currentTarget;
            setProgress(
              Number.isFinite(video.duration) && video.duration > 0
                ? Math.min(100, (video.currentTime / video.duration) * 100)
                : 0,
            );
          }}
          onEnded={() => {
            setEnded(true);
            setPlaying(false);
            setWaiting(false);
            setProgress(100);
          }}
          onError={() => {
            setFailed(true);
            setWaiting(false);
          }}
        >
          Tu navegador no admite este video.
        </video>
        {!failed && (!started || !playing) && (
          <button
            className="football-vsl-overlay"
            type="button"
            onClick={() => void play()}
            aria-label={
              ended
                ? "Volver a ver la presentación"
                : started
                  ? "Reanudar presentación"
                  : "Reproducir presentación con sonido"
            }
          >
            <span className="football-video-play">
              <Play size={32} fill="currentColor" aria-hidden="true" />
            </span>
            {!started && (
              <>
                <strong>
                  DEJA DE IMAGINARLO.
                  <br />
                  MIRA CÓMO FUNCIONA.
                </strong>
                <span>Toca para ver con sonido</span>
              </>
            )}
            {ended && <strong>VOLVER A VER</strong>}
          </button>
        )}
        {started && waiting && !failed && (
          <div className="football-vsl-waiting" role="status" aria-label="Cargando video">
            <LoaderCircle size={32} aria-hidden="true" />
          </div>
        )}
        {failed && (
          <div className="football-video-error" role="alert">
            <p>No se pudo cargar la presentación.</p>
            <button
              type="button"
              onClick={() => {
                setFailed(false);
                setStarted(false);
                setProgress(0);
                videoRef.current?.load();
              }}
            >
              Volver a cargar
            </button>
            <a href={uploadedVslEspanol} target="_blank" rel="noopener noreferrer">
              Abrir video
            </a>
          </div>
        )}
      </div>
      <div
        className="football-vsl-progress"
        role="progressbar"
        aria-label="Progreso real de la presentación"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
      >
        <div style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

const trainingSamples = [
  {
    key: "training-1",
    label: "MOVIMIENTO SIN BALÓN",
    title: "Cada posición tiene una función. Entrénala.",
    text: "Observa la ocupación de espacios y la conexión entre jugadores antes de llevar el ejercicio al campo.",
  },
  {
    key: "training-2",
    label: "FINALIZACIÓN",
    title: "No es patear por patear. Es entrenar una situación.",
    text: "Mira la secuencia de pase, desmarque y remate. Llega a tu próxima sesión con un objetivo claro.",
  },
  {
    key: "training-3",
    label: "PASE Y CONTROL",
    title: "Haz que cada pase tenga una intención.",
    text: "Visualiza la organización del grupo, los apoyos y el recorrido del balón. Después, adapta la tarea a tu nivel.",
  },
  {
    key: "training-4",
    label: "CONDUCCIÓN + PASE + REMATE",
    title: "Conecta la técnica con lo que pasa en el partido.",
    text: "Una secuencia completa para trabajar varias acciones en la misma tarea, sin improvisar el circuito.",
  },
];

function TrainingSample({
  sample,
  index,
}: {
  sample: (typeof trainingSamples)[number];
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const play = async () => {
    setFailed(false);
    try {
      await videoRef.current?.play();
    } catch {
      setFailed(true);
    }
  };
  return (
    <article className="football-sample-card">
      <div className="football-sample-video">
        <video
          ref={videoRef}
          src={`/videos/${sample.key}.mp4`}
          poster={`/images/${sample.key}.webp`}
          data-football-video
          playsInline
          controls={started}
          preload="none"
          aria-label={`Vista previa: ${sample.label.toLowerCase()}`}
          onPlay={(event) => {
            pauseOtherVideos(event.currentTarget);
            setStarted(true);
            setFailed(false);
          }}
          onError={() => setFailed(true)}
        />
        {!started && !failed && (
          <button
            type="button"
            className="football-sample-play"
            onClick={() => void play()}
            aria-label={`Ver ejemplo de ${sample.label.toLowerCase()}`}
          >
            <span className="football-video-play">
              <Play size={26} fill="currentColor" aria-hidden="true" />
            </span>
            <span>VER ENTRENAMIENTO</span>
          </button>
        )}
        {failed && (
          <div className="football-video-error" role="alert">
            <p>No se pudo cargar este ejemplo.</p>
            <button
              type="button"
              onClick={() => {
                setFailed(false);
                setStarted(false);
                videoRef.current?.load();
              }}
            >
              Reintentar
            </button>
          </div>
        )}
        <span className="football-sample-number" aria-hidden="true">
          0{index + 1}
        </span>
      </div>
      <div className="football-sample-copy">
        <span>{sample.label}</span>
        <h3>{sample.title}</h3>
        <p>{sample.text}</p>
      </div>
    </article>
  );
}

function TrainingPreviews() {
  return (
    <section className="football-previews" aria-labelledby="training-title">
      <div className="football-section-wrap">
        <p className="football-eyebrow">NO TE LO IMAGINES. MÍRALO.</p>
        <h2 id="training-title">
          Esto es lo que podrías llevar
          <br />
          <span>a tu próximo entrenamiento.</span>
        </h2>
        <p className="football-section-intro">
          Abre uno de estos ejemplos. Mira el movimiento, entiende la tarea y visualiza cómo la
          aplicarías con tus jugadores. Esto es una muestra: dentro te esperan{" "}
          <strong>más de 2.000 ejercicios y más de 250 sesiones organizadas.</strong>
        </p>
        <p className="football-swipe-hint">Desliza para ver los 4 ejemplos →</p>
      </div>
      <div
        className="football-sample-grid"
        role="region"
        aria-label="Cuatro ejemplos de entrenamientos"
        tabIndex={0}
      >
        {trainingSamples.map((sample, index) => (
          <TrainingSample sample={sample} index={index} key={sample.key} />
        ))}
      </div>
      <div className="football-section-wrap">
        <div className="football-preview-takeaway">
          <strong>La próxima sesión no va a prepararse sola.</strong>
          <p>
            Deja de perder tiempo juntando ejercicios sueltos. Entra a tu plataforma, elige posición
            y objetivo, mira el video y llega al campo con una tarea clara.
          </p>
        </div>
      </div>
    </section>
  );
}

function BonusSection() {
  return (
    <section id="bonos" className="football-bonuses" aria-labelledby="bonus-title">
      <div className="football-section-wrap">
        <p className="football-eyebrow">EL PAQUETE COMPLETO VA MÁS ALLÁ</p>
        <h2 id="bonus-title">
          La plataforma completa.
          <br />
          <span>Y 4 bonos para sacar más de cada sesión.</span>
        </h2>
        <p className="football-section-intro">
          No te quedas solo con ideas. Llévate recursos para planificar, trabajar la técnica y
          preparar el físico.{" "}
          <strong>Los cuatro van incluidos en el Paquete Completo, sin un pago adicional.</strong>
        </p>
        <div className="football-bonus-grid">
          {bonos.map((bono) => (
            <article className="football-bonus-card" key={bono.n}>
              <div className="football-bonus-top">
                <span>{bono.n}</span>
                <Gift size={24} aria-hidden="true" />
              </div>
              <h3>{bono.title}</h3>
              <p>{bono.text}</p>
              <span className="football-bonus-included">
                <Check size={17} aria-hidden="true" />
                Incluido en el Paquete Completo
              </span>
            </article>
          ))}
        </div>
        <div className="football-bonus-total">
          <strong>Plataforma + videos + 4 bonos.</strong>
          <p>
            Un solo acceso. Un solo pago. Tu próxima sesión con más recursos y menos improvisación.
          </p>
        </div>
      </div>
    </section>
  );
}

function Cta({ children }: { children: string }) {
  return (
    <div className="flex flex-col items-center">
      <a href="#oferta" className="ecm-cta">
        {children}
        <ArrowRight className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
      </a>
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

function TestimonialCard({ t }: { t: { name: string; role: string; text: string } }) {
  const initials = t.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  // Generate a consistent color based on the name
  const colors = [
    "bg-primary/20 text-primary",
    "bg-gold/20 text-gold",
    "bg-blue-500/20 text-blue-500",
    "bg-purple-500/20 text-purple-500",
    "bg-orange-500/20 text-orange-500",
  ];
  const colorIndex =
    t.name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;

  return (
    <figure className="ecm-card w-[19rem] flex-shrink-0 p-5 sm:w-[22rem]">
      <div className="flex items-center gap-3">
        <div
          className={`grid h-12 w-12 place-items-center rounded-full text-sm font-bold ring-2 ring-primary/40 ${colors[colorIndex]}`}
        >
          {initials}
        </div>
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
  { nombre: "Andrés P.", ciudad: "Bogotá", plan: "Pack Delanteros" },
  { nombre: "Diego R.", ciudad: "Ciudad de México", plan: "Paquete Completo" },
  { nombre: "Javier S.", ciudad: "Madrid", plan: "Paquete Completo" },
  { nombre: "Mateo G.", ciudad: "Santiago", plan: "Pack Delanteros" },
  { nombre: "Bruno F.", ciudad: "Lima", plan: "Paquete Completo" },
  { nombre: "Carlos V.", ciudad: "Montevideo", plan: "Paquete Completo" },
  { nombre: "Pablo H.", ciudad: "Sevilla", plan: "Pack Delanteros" },
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
    <div className="ecm-buy-toast pointer-events-none fixed bottom-3 left-3 z-40 max-w-[13.5rem] rounded-lg border border-border bg-card/95 px-2.5 py-2 shadow-md backdrop-blur sm:bottom-4 sm:left-4 sm:max-w-xs sm:rounded-xl sm:px-3 sm:py-2.5 sm:shadow-lg">
      <div className="flex items-start gap-2 sm:gap-2.5">
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent sm:h-7 sm:w-7">
          <Check className="h-3 w-3 text-primary sm:h-4 sm:w-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-foreground sm:text-sm">
            {c.nombre} · {c.ciudad}
          </p>
          <p className="text-[10px] leading-snug text-muted-foreground sm:text-xs">
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
      <CheckoutModal />

      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-primary py-2.5 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-primary-foreground sm:text-sm">
        🔥 Precio especial por tiempo limitado · Acceso de por vida
      </div>

      {/* HERO */}
      <section data-reveal className="px-4 pb-8 pt-7 sm:px-6 sm:pt-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
            <span className="ecm-pulse-dot" />
            +2.000 ejercicios organizados
          </span>

          <h1 className="football-hero-title mt-4">
            Deja de improvisar.{" "}
            <span className="ecm-highlight">+2.000 ejercicios y +250 sesiones</span> para llegar al
            campo con un plan.
          </h1>
          <p className="football-hero-lead mx-auto mt-5 max-w-2xl">
            No te faltan ganas de mejorar. Te falta dejar de buscar ejercicios sueltos.
            <strong>
              {" "}
              Ten la plataforma completa en tu celular: videos, sesiones por posición y 4 bonos
              adicionales.
            </strong>
          </p>
          <p className="football-hero-note">
            Mira cómo funciona. Después, decide cómo quieres llegar a tu próxima sesión.
          </p>
          <div className="mt-6">
            <PlatformVsl />
          </div>
          <div className="mx-auto mt-6 max-w-xl">
            <Cta>Quiero ver la plataforma y los 4 bonos</Cta>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold">
            <span className="text-gold">★★★★★</span>
            <span className="text-muted-foreground">4.9/5 · +2146 evaluaciones</span>
          </div>

          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            {[
              ["+250", "sesiones listas"],
              ["+2.000", "ejercicios ilustrados"],
              ["5 min", "para armar tu sesión"],
            ].map(([n, d]) => (
              <div key={d} className="ecm-card px-3 py-3 text-center">
                <p className="font-display text-2xl text-primary sm:text-3xl">{n}</p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO DEL QUIZ */}
      <section data-reveal className="border-t border-border bg-card px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <Kicker>Tu diagnóstico, sin filtros</Kicker>
            <H2>
              El problema no es tu falta de ganas.
              <span className="ecm-highlight"> Es entrenar sin un sistema.</span>
            </H2>
            <p className="mt-4 text-muted-foreground">
              Elige el perfil que más se parece a ti y reconoce lo que está frenando tu evolución.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="ecm-card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl">🧢</span>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-primary">
                    Si eres entrenador
                  </p>
                  <h3 className="text-xl font-black">
                    Entrenador con potencial, pero sin sistema.
                  </h3>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Llegas al campo sin un plan y dejas que la sesión se arme sola.",
                  "Sin variedad, tus jugadores se estancan y pierden motivación.",
                  "Entrenas sin conectar objetivo, posición y progresión.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-l-2 border-gold pl-4 text-sm font-semibold">
                Lo que te falta no es conocimiento: es tener la estructura lista para aplicar.
              </p>
            </article>
            <article className="ecm-card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl">⚽</span>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-primary">
                    Si eres jugador
                  </p>
                  <h3 className="text-xl font-black">Jugador con talento, pero sin plan.</h3>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Buscas ejercicios sueltos y sigues sin saber qué entrenar hoy.",
                  "Repites los mismos errores cuando llega el partido.",
                  "Sabes que puedes dar más, pero no tienes una progresión clara.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-l-2 border-gold pl-4 text-sm font-semibold">
                El talento necesita dirección: una sesión clara, una técnica correcta y una
                progresión real.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TU PLATAFORMA PERSONAL */}
      <section data-reveal className="border-t border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Kicker>Tu área de miembros exclusiva</Kicker>
          <H2>
            Tu Plataforma Personal, <span className="ecm-highlight">Lista en Minutos</span>
          </H2>
          <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-lg font-semibold leading-relaxed">
                Olvídate de buscar archivos sueltos. Al unirte, recibes acceso a una
                <strong className="text-foreground"> plataforma web completa</strong> diseñada para
                organizar, acelerar y potenciar tu evolución: biblioteca + videos didácticos +
                herramientas de planificación, todo en un solo lugar.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  [
                    "Login exclusivo con usuario y contraseña",
                    "Tu progreso y contenido siempre seguros y a mano.",
                  ],
                  [
                    "Panel organizado por categorías",
                    "Navega fácilmente por posición, edad u objetivo del día.",
                  ],
                  [
                    "Reproductor de video integrado",
                    "Mira la técnica correcta sin salir de la sesión.",
                  ],
                  [
                    "Acceso multidispositivo",
                    "Usa tu móvil en el campo o tu tablet en casa sin limitaciones.",
                  ],
                  [
                    "Actualizaciones automáticas",
                    "Recibe contenido nuevo sin tener que descargar nada de nuevo.",
                  ],
                ].map(([t, d]) => (
                  <li key={t as string} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-bold">{t as string}</p>
                      <p className="text-sm text-muted-foreground">{d as string}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ecm-card overflow-hidden shadow-2xl ring-1 ring-primary/10">
              <img
                src={heroImg}
                alt="Vista previa de la plataforma"
                className="w-full h-auto object-cover"
              />
              <div className="bg-primary/5 p-4 text-center border-t border-border">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Más de 2.000 contenidos listos para ti
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL TRAINING PREVIEWS */}
      <TrainingPreviews />

      {/* QUIÉN SOY */}
      <section data-reveal className="border-t border-border bg-card px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <img
            src={coachImg}
            alt="Coach Martínez, Entrenador Profesional"
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
              Coach Martínez: Metodología que Forma Jugadores de Verdad
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Llevo más de <strong className="text-foreground">15 años</strong> como entrenador
              profesional trabajando con academias, canteras y jugadores amateur en toda
              Latinoamérica y España. He formado a más de{" "}
              <strong className="text-foreground">2.000 futbolistas</strong>, desde niños de 6 años
              hasta adultos en clubes semiprofesionales.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Esta biblioteca reúne <strong className="text-foreground">toda mi metodología</strong>{" "}
              en un solo lugar: los mismos ejercicios, la misma progresión y las mismas guías
              ilustradas que uso día tras día en el campo. Sin relleno. Sin teoría vacía. Solo lo
              que funciona.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-secondary p-4 text-center">
                <p className="font-display text-3xl text-primary">+2.000</p>
                <p className="text-sm font-semibold text-muted-foreground">Jugadores formados</p>
              </div>
              <div className="rounded-xl bg-secondary p-4 text-center">
                <p className="font-display text-3xl text-primary">15</p>
                <p className="text-sm font-semibold text-muted-foreground">Años en el campo</p>
              </div>
            </div>
            <div className="mt-8">
              <Cta>Quiero Entrenar con el Método del Coach</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA CONTENIDO */}
      <section data-reveal className="border-t border-border bg-card px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Kicker>Esto es lo que vas a tener</Kicker>
          <H2>Nunca más vuelvas a preguntarte "¿qué entreno hoy?"</H2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Dentro de la biblioteca encuentras todo esto organizado por posición, edad y objetivo.
            Eliges el área que quieres trabajar hoy, abres la sesión y aplicas. Así de simple.
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

          <div className="mt-8"></div>
        </div>
      </section>

      {/* PLATAFORMA COMPLETA */}
      <section data-reveal className="border-t border-border bg-accent px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Kicker>Todo en una sola herramienta</Kicker>
          <H2>
            No es solo una biblioteca: es tu{" "}
            <span className="ecm-highlight">Plataforma Completa</span> de Entrenamiento
          </H2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Todo lo que necesitas para entrenar con método, en un solo lugar: sesiones organizadas,
            diagramas claros y materiales en video que te enseñan paso a paso. Olvídate de archivos
            sueltos, PDFs perdidos y horas buscando en Internet.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              [
                "Organización total",
                "Encuentra cualquier sesión en segundos, por posición, edad o objetivo.",
              ],
              [
                "Videos didácticos",
                "Cada ejercicio explicado con técnica, campo y errores comunes.",
              ],
              ["Acceso vitalicio", "Una sola compra. Usa la plataforma hoy, mañana y siempre."],
            ].map(([t, d]) => (
              <div key={t} className="ecm-card p-5 text-center">
                <p className="font-bold text-foreground">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Cta>Quiero mi Plataforma Completa</Cta>
          </div>
        </div>
      </section>

      <BonusSection />

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
                  {(() => {
                    const initials = t.n
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2);
                    const colors = [
                      "bg-primary/20 text-primary",
                      "bg-gold/20 text-gold",
                      "bg-blue-500/20 text-blue-500",
                    ];
                    const colorIndex = t.n.charCodeAt(0) % colors.length;
                    return (
                      <div
                        className={`grid h-10 w-10 place-items-center rounded-full text-xs font-bold ${colors[colorIndex]}`}
                      >
                        {initials}
                      </div>
                    );
                  })()}
                  <div>
                    <p className="text-sm font-bold">{t.n}</p>
                    <p className="text-sm text-muted-foreground">{t.r}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10"></div>
        </div>
      </section>

      {/* FEEDBACKS DINÁMICOS */}
      <section data-reveal className="overflow-hidden border-t border-border bg-card px-0 py-16">
        <div className="px-4 sm:px-6">
          <Kicker>⚡ Lo que dicen quienes ya entrenan con método</Kicker>
          <H2>
            Ellos Dejaron de Improvisar.{" "}
            <span className="ecm-highlight">Ahora Entrenan con un Plan.</span>
          </H2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
            Más de <strong className="text-foreground">2.146 jugadores y entrenadores</strong> ya
            usan la biblioteca cada semana. Estos son algunos de sus mensajes.
          </p>
        </div>

        <div className="ecm-marquee mt-10">
          <div className="ecm-marquee-track">
            {feedbacksTop.map((t, i) => (
              <TestimonialCard key={`a-${i}`} t={t} />
            ))}
          </div>
        </div>

        <div className="ecm-marquee ecm-marquee-reverse mt-4">
          <div className="ecm-marquee-track">
            {feedbacksBottom.map((t, i) => (
              <TestimonialCard key={`b-${i}`} t={t} />
            ))}
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

      {/* OFERTA / DOS PLANES */}
      <section
        id="oferta"
        data-reveal
        className="scroll-mt-16 border-t border-border px-4 py-16 sm:px-6"
      >
        <div className="mx-auto max-w-6xl">
          <Kicker>🔥 Precio Especial Solo Hoy</Kicker>
          <H2>Menos de lo que Gastas en una Cena. Para Siempre.</H2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            <strong className="text-foreground">Completo $6,50 USD</strong> con la plataforma
            completa: biblioteca entera, videos didácticos y todos los bonos, o{" "}
            <strong className="text-foreground">
              agrega el Pack de 200 Entrenamientos para Delanteros por $4,50 USD
            </strong>
            . Un solo pago, sin mensualidades: el acceso llega a tu e-mail en minutos y es tuyo de
            por vida, con <strong className="text-foreground">7 días de garantía total</strong>.
          </p>

          <div className="mx-auto mt-6 flex max-w-xl items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
            <div className="text-sm font-semibold">
              <p>
                ⚡ Promoción exclusiva solo hoy. Si cierras esta página pierdes el precio especial.
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gold">
                Mañana vuelve al valor normal · Stock limitado de lanzamiento
              </p>
            </div>
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
                    $6,50 <span className="text-2xl text-foreground">USD</span>
                  </p>
                  <p className="mt-2 inline-block rounded-full bg-highlight px-3 py-1 text-xs font-extrabold text-highlight-foreground">
                    87% DESCUENTO · Ahorras $43,40
                  </p>
                  <p className="mt-3 text-sm font-bold text-primary">
                    ✅ Pago único · Acceso vitalicio
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-destructive">
                    <Clock className="h-3 w-3" /> Precio de lanzamiento · últimas horas
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
                    <Gift className="h-4 w-4 text-primary" /> 4 bonos adicionales incluidos
                  </p>
                  <ul className="mt-3 space-y-2">
                    {bonos.map((bono) => (
                      <li key={bono.n} className="flex items-start gap-2 text-sm">
                        <Gift className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>
                          <strong>
                            {bono.n} · {bono.title}
                          </strong>
                          <span className="block font-bold text-primary">
                            Incluido sin coste adicional
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col items-center">
                  <CheckoutButton href={CHECKOUT_URL}>Quiero el Paquete Completo</CheckoutButton>
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
                <h3 className="text-center text-2xl">Pack Delanteros</h3>
                <p className="mt-2 text-center text-sm font-bold text-primary">
                  🔥 Agrega: 200 Entrenamientos Exclusivos para Delanteros
                </p>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    De <s>$37,50</s> sólo por hoy
                  </p>
                  <p className="mt-1 font-display text-6xl text-foreground">
                    $4,50 <span className="text-2xl text-muted-foreground">USD</span>
                  </p>
                  <p className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-extrabold text-foreground">
                    88% DESCUENTO · Ahorras $33,00
                  </p>
                  <p className="mt-3 text-sm font-bold text-primary">
                    ✅ Pago único · Acceso vitalicio
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-destructive">
                    <Clock className="h-3 w-3" /> Solo hoy a este precio
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
                    Sí, quiero agregar los 200 entrenamientos para delanteros
                  </CheckoutButton>
                  <PaySafety />
                </div>
              </div>
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
            Accede hoy a toda la plataforma, aplica los entrenamientos durante{" "}
            <strong className="text-foreground">7 días completos</strong> y mira el cambio con tus
            propios ojos. Si sientes que no es para ti, por cualquier motivo y sin dar
            explicaciones, nos escribes un email y te devolvemos{" "}
            <strong className="text-foreground">hasta el último céntimo</strong>. Peor que invertir
            $6,50 es seguir otros 6 meses entrenando a ciegas mientras otros avanzan.
          </p>
          <div className="mt-8"></div>
        </div>
      </section>

      {/* FAQ */}
      <section data-reveal className="border-t border-border bg-card px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <H2>Preguntas Frecuentes</H2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map(([q, a], i) => (
              <AccordionItem key={q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm font-bold">{q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10"></div>
        </div>
      </section>

      {/* CIERRE */}
      <section data-reveal className="border-t border-border px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Kicker>Última palabra</Kicker>
          <H2>Solo Queda Una Pregunta: ¿Sigues Improvisando o Empiezas Hoy?</H2>
          <p className="mt-4 text-muted-foreground">
            Seas <strong className="text-foreground">jugador</strong> o{" "}
            <strong className="text-foreground">entrenador</strong>, el próximo entrenamiento va a
            llegar igual. La única diferencia es si llegas a él con un plan profesional en el
            bolsillo, o improvisando otra vez.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              [Mail, "Acceso inmediato en tu e-mail"],
              [Check, "Un solo pago, acceso de por vida"],
              [Shield, "7 días de garantía total"],
              [Smartphone, "Funciona desde el móvil, tablet u ordenador, con tu login personal"],
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
            Cuesta menos que una pizza y lo pruebas 7 días sin riesgo. Si no te sirve, te devolvemos
            todo.
          </p>

          <div className="mt-8"></div>
        </div>
      </section>

      <footer className="border-t border-border bg-card px-4 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Entrena con Método · Plataforma de Entrenamientos de Fútbol
      </footer>
    </div>
  );
}
