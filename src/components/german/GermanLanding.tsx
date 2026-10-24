import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Check,
  ArrowDown,
  ArrowUp,
  Play,
  ShieldCheck,
  Smartphone,
  Gift,
  X,
  Cookie,
  LockKeyhole,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { germanOffer as offer, media } from "@/data/germanOffer";
import {
  personas,
  modules,
  bonuses,
  examples,
  testimonials,
  included,
  faqs,
  type Persona,
} from "@/data/germanCopy";
import {
  consentKey,
  hasConsent,
  saveConsent,
  startMarketing,
  trackGerman,
  checkoutUrl,
} from "@/lib/germanTracking";
import { FootballArt } from "./FootballArt";
import { GermanMiniVsl } from "./GermanMiniVsl";
import preview from "@/assets/paginas-ejercicios.webp";
import coach from "@/assets/coach-martinez.webp";
import "@/german.css";

function Section({
  id,
  dark = false,
  children,
}: {
  id?: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`de-section ${dark ? "de-dark" : ""}`}>
      <div className="de-wrap">{children}</div>
    </section>
  );
}
function OfferButton({ up = false }: { up?: boolean }) {
  return (
    <a
      className="de-cta"
      href="#angebot"
      onClick={(e) => {
        e.preventDefault();
        trackGerman("ClickZumAngebot");
        document.getElementById("angebot")?.scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        });
      }}
    >
      {up ? "ZUM ANGEBOT ↑" : "ZUM ANGEBOT ↓"}
      {up ? <ArrowUp aria-hidden /> : <ArrowDown aria-hidden />}
    </a>
  );
}
function Video({ index }: { index: number }) {
  const v = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const asset = media.samples[index];
  useEffect(() => {
    if (started) void v.current?.play().catch(() => setFailed(true));
  }, [started]);
  return (
    <div className="de-video">
      <video
        ref={v}
        src={started ? asset.src : undefined}
        poster={asset.poster}
        preload="none"
        playsInline
        controls={started}
        width={480}
        height={270}
        onPlay={(e) => {
          setPlaying(true);
          document.querySelectorAll("video").forEach((other) => {
            if (other !== e.currentTarget) other.pause();
          });
        }}
        onError={() => setFailed(true)}
        onPause={() => setPlaying(false)}
      >
        Dein Browser unterstützt dieses Video nicht.
      </video>
      {!started && (
        <button
          type="button"
          aria-label="Trainingsbeispiel ansehen"
          onClick={() => {
            setStarted(true);
          }}
        >
          <Play fill="currentColor" />
          <span>BEISPIEL ANSEHEN</span>
        </button>
      )}
      {started && !failed && !playing && (
        <button
          type="button"
          className="de-video-start"
          onClick={() => {
            void v.current?.play().catch(() => setFailed(true));
          }}
        >
          Video starten
        </button>
      )}
      {failed && (
        <p role="status">Das Video konnte nicht gestartet werden. Bitte versuche es erneut.</p>
      )}
    </div>
  );
}
function Legal({ name }: { name: keyof typeof offer.legal }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button">{name}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="de-overlay" />
        <Dialog.Content className="de-modal">
          <Dialog.Title>{name}</Dialog.Title>
          <Dialog.Description>{offer.legal[name]}</Dialog.Description>
          <Dialog.Close className="de-close" aria-label="Schließen">
            <X />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
function Consent({ onConsent }: { onConsent: () => void }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try {
      setOpen(!localStorage.getItem(consentKey));
    } catch {
      setOpen(true);
    }
    startMarketing();
    onConsent();
  }, [onConsent]);
  const decide = (yes: boolean) => {
    saveConsent(yes);
    setOpen(false);
    onConsent();
  };
  return (
    <>
      <button className="de-cookie-settings" onClick={() => setOpen(true)} type="button">
        <Cookie size={20} />
        Cookie-Einstellungen
      </button>
      {open && (
        <aside className="de-consent" aria-label="Cookie-Einstellungen">
          <div>
            <strong>Du entscheidest über deine Daten.</strong>
            <p>
              Wir verwenden notwendige Speicherung für deine Cookie-Auswahl. Mit deiner Zustimmung
              laden wir den Meta Pixel, um Seitenaufrufe und Angebotsinteresse zu messen. Du kannst
              deine Wahl jederzeit ändern.
            </p>
            <Legal name="Datenschutz" />
          </div>
          <div className="de-consent-actions">
            <button onClick={() => decide(true)}>Akzeptieren</button>
            <button onClick={() => decide(false)}>Ablehnen</button>
          </div>
        </aside>
      )}
    </>
  );
}
export function GermanLanding() {
  const [persona, setPersona] = useState<Persona>("trainer");
  const [consentVersion, setConsentVersion] = useState(0);
  const viewSent = useRef(false);
  const pending = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const value = new URLSearchParams(location.search).get("p");
    if (value === "trainer" || value === "spieler" || value === "eltern") setPersona(value);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);
  useEffect(() => {
    const check = () => {
      const available = document.documentElement.scrollHeight - innerHeight;
      if (!viewSent.current && available > 0 && scrollY / available >= 0.5 && hasConsent()) {
        viewSent.current = true;
        trackGerman(
          "ViewContent",
          { content_name: offer.name, value: offer.price, currency: "EUR" },
          true,
        );
      }
    };
    addEventListener("scroll", check, { passive: true });
    check();
    return () => removeEventListener("scroll", check);
  }, [consentVersion]);
  const copy = personas[persona];
  const select = (p: Persona) => {
    setPersona(p);
    const url = new URL(location.href);
    url.searchParams.set("p", p);
    history.replaceState(history.state, "", url);
    trackGerman(
      { trainer: "Persona_Trainer", spieler: "Persona_Spieler", eltern: "Persona_Eltern" }[p],
    );
  };
  // Stable callback keeps the consent initialization effect from rerunning during persona changes.
  const consentChanged = useRef(() => setConsentVersion((v) => v + 1)).current;
  const guarantee = offer.guaranteeDays === 14;
  return (
    <div className="de-page">
      <div className="de-top">Einmal zahlen. Kein Abo. Sofortzugang auf Handy, Tablet und PC.</div>
      <main>
        <Section>
          <div className="de-brand">
            <span>↗</span> TRAINING MIT METHODE
          </div>
          <div className="de-tabs" role="tablist" aria-label="Für wen trainierst du?">
            {(Object.keys(personas) as Persona[]).map((p) => (
              <button
                type="button"
                id={`tab-${p}`}
                role="tab"
                aria-selected={persona === p}
                aria-controls="persona-content"
                tabIndex={persona === p ? 0 : -1}
                key={p}
                onClick={() => select(p)}
                onKeyDown={(e) => {
                  const keys = Object.keys(personas) as Persona[];
                  if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
                    e.preventDefault();
                    const next =
                      e.key === "Home"
                        ? keys[0]
                        : e.key === "End"
                          ? keys[2]
                          : keys[(keys.indexOf(p) + (e.key === "ArrowRight" ? 1 : 2)) % 3];
                    select(next);
                    document.getElementById(`tab-${next}`)?.focus();
                  }
                }}
              >
                {personas[p].label}
              </button>
            ))}
          </div>
          <div
            id="persona-content"
            role="tabpanel"
            aria-labelledby={`tab-${persona}`}
            className="de-hero-grid"
          >
            <div className="de-hero-copy">
              <p className="de-kicker">DEIN TRAINING. KLAR GEORDNET.</p>
              <h1>{copy.h1}</h1>
              <p className="de-lead">
                {copy.sub}
                {offer.childrenAvailable && persona !== "spieler"
                  ? " Zusätzlich 250 Kindertrainings."
                  : ""}
              </p>
            </div>
            <GermanMiniVsl />
            <div className="de-hero-details">
              <ul className="de-checks">
                {copy.benefits.map((b) => (
                  <li key={b}>
                    <Check />
                    {b}
                  </li>
                ))}
              </ul>
              {persona === "eltern" && (
                <p>
                  <strong>
                    Wir versprechen keinen Profivertrag. Wir geben deinem Kind einen Plan.
                  </strong>
                </p>
              )}

              <p className="de-note">
                Einmalzahlung · Kein Abo · Sofortzugang
                {guarantee ? " · 14 Tage Geld-zurück-Garantie" : ""}
              </p>
            </div>
          </div>
        </Section>
        <Section dark>
          <div className="de-split">
            <div>
              <p className="de-kicker">KOMMT DIR DAS BEKANNT VOR?</p>
              <h2>Dein Problem ist nicht der Wille. Es ist das fehlende System.</h2>
            </div>
            <FootballArt kind="problem" persona={persona} />
          </div>
          <div className="de-grid three">
            {copy.problem.map((p, i) => (
              <article className="de-dark-card" key={p}>
                <span>0{i + 1}</span>
                <h3>{p}</h3>
              </article>
            ))}
          </div>
          <p className="de-statement">Talent allein reicht nicht. Es braucht Struktur.</p>
        </Section>
        <Section>
          <div className="de-split">
            <div>
              <p className="de-kicker">ÖFFNEN. AUSWÄHLEN. TRAINIEREN.</p>
              <h2>Deine Plattform, in Minuten startklar</h2>
              <ul className="de-checks">
                {[
                  "Persönlicher Login",
                  "Übersicht nach Kategorie: Position, Alter oder Ziel des Tages",
                  "Integrierter Videoplayer",
                  "Zugriff auf Handy, Tablet und PC",
                  "Automatische Updates ohne neue Downloads",
                ].map((t) => (
                  <li key={t}>
                    <Check />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <figure>
              <img
                src={preview}
                alt="Bestehende Vorschau der Trainingsbibliothek mit geordneten Übungsdiagrammen"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                Einblick in die bestehende Bibliothek. Die Vorschau zeigt Originalmaterial.
              </figcaption>
            </figure>
          </div>
        </Section>
        <Section id="kinder">
          <div className="de-kids">
            <div>
              <span className="de-badge">{offer.childrenAvailable ? "NEU" : "IN PLANUNG"}</span>
              <h2>
                {offer.childrenAvailable
                  ? "+250 Kindertrainings: Fußball, der Kindern Spaß macht und sie weiterbringt."
                  : "Kinderfußball, der Spaß macht und Struktur gibt."}
              </h2>
              <p>
                Das vorhandene Modul enthält über 190 Übungen. Spielerisch trainieren, passende
                Aufgaben auswählen und Schritt für Schritt aufbauen.
              </p>
              {!offer.childrenAvailable && (
                <p>
                  <strong>
                    Zusätzliche 250 Kindertrainings sind geplant und noch nicht Bestandteil des
                    verfügbaren Pakets.
                  </strong>{" "}
                  {offer.childrenReleaseDate
                    ? `Freigabe: ${offer.childrenReleaseDate}.`
                    : "Der Freigabetermin und die genaue Altersspanne werden noch bestätigt."}
                </p>
              )}
              <p>
                <strong>Für Trainer:</strong> Einheiten, die Kinder begeistern, ohne dass du
                stundenlang planst.
              </p>
              <p>
                <strong>Für Eltern:</strong> Training zu Hause, das Spaß macht und Fortschritt
                bringt.
              </p>
            </div>
            <FootballArt kind="kids" />
          </div>
        </Section>
        <Section id="beispiele">
          <div className="de-heading">
            <p className="de-kicker">VOM VIDEO AUF DEN PLATZ</p>
            <h2>So wird aus einer Idee eine klare Aufgabe</h2>
          </div>
          <div className="de-grid two">
            {examples.map(([title, text], i) => (
              <article className="de-card" key={title}>
                <FootballArt kind="pitch" />
                <h3>{title}</h3>
                <p>{text}</p>
                <Video index={i} />
              </article>
            ))}
          </div>
        </Section>
        <Section>
          <div className="de-split">
            <img
              className="de-coach"
              src={coach}
              alt="Coach Martínez, Methodik der Trainingsbibliothek"
              width={700}
              height={900}
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="de-kicker">ERFAHRUNG AUF DEM PLATZ</p>
              <h2>Methodik von Coach Martínez</h2>
              <p>
                Über 15 Jahre als Trainer in Akademien, Nachwuchsabteilungen und mit Amateurspielern
                in Lateinamerika und Spanien. Mehr als 2.000 Spieler ausgebildet, vom Kind mit sechs
                Jahren bis zum Erwachsenen im semiprofessionellen Verein.
              </p>
              <p>
                Diese Bibliothek bündelt meine komplette Methodik: dieselben Übungen, dieselbe
                Progression, dieselben bebilderten Anleitungen, die ich jeden Tag auf dem Platz
                nutze. Ohne Füllmaterial, ohne leere Theorie.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="de-heading">
            <p className="de-kicker">DEINE TRAININGSBIBLIOTHEK</p>
            <h2>Nie wieder fragen: Was trainiere ich heute?</h2>
          </div>
          <div className="de-grid four">
            {modules.map(([title, count, text, img]) => (
              <article className="de-card" key={title}>
                <img
                  src={img}
                  alt={`Übungsdiagramm aus dem Modul ${title}`}
                  width={640}
                  height={640}
                  loading="lazy"
                  decoding="async"
                />
                <span className="de-count">{count}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </Section>
        <Section>
          <div className="de-heading">
            <p className="de-kicker">MEHR MÖGLICHKEITEN FÜR DEIN TRAINING</p>
            <h2>Vier Boni. Direkt im Paket.</h2>
          </div>
          <div className="de-grid two">
            {bonuses.map(([title, text], i) => (
              <article className="de-card de-bonus" key={title}>
                <Gift />
                <p className="de-kicker">BONUS {i + 1}</p>
                <h3>{title}</h3>
                <p>{text}</p>
                <strong>Im Paket enthalten, ohne Aufpreis.</strong>
              </article>
            ))}
          </div>
        </Section>
        <div className="de-wrap de-content-cta">
          <OfferButton />
        </div>
        <Section>
          <div className="de-heading">
            <h2>Was Trainer, Spieler und Eltern sagen</h2>
            <p>
              Bestehende Rückmeldungen aus Spanien und Lateinamerika, dazu eine Rückmeldung aus
              Vancouver. Ins Deutsche übersetzt.
            </p>
          </div>
          <div className="de-testimonials">
            {testimonials.map(([name, origin, text]) => (
              <figure className="de-card" key={name}>
                <blockquote>„{text}“</blockquote>
                <figcaption>
                  <strong>{name}</strong>
                  <br />
                  {origin}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="de-note">
            Individuelle Erfahrungen. Keine Zusage eines bestimmten Ergebnisses.
          </p>
        </Section>
        <Section id="angebot" dark>
          <div className="de-split">
            <div>
              <p className="de-kicker">ALLES AN EINEM ORT</p>
              <h2>Dein Zugang. Einmal zahlen. Ohne Abo.</h2>
              <p>
                Das nächste Training braucht keinen weiteren Ordner voller Ideen. Es braucht eine
                Einheit, die du verstehst und umsetzen kannst.
              </p>
              <FootballArt kind="stack" />
            </div>
            <div className="de-offer">
              <span className="de-badge">KOMPLETTPAKET</span>
              <h3>Deine komplette Trainingsplattform</h3>
              <p className="de-price">
                9,90 €<span>inkl. MwSt.</span>
              </p>
              <p>
                <strong>Einmalzahlung · Lebenslanger Zugang (siehe AGB)</strong>
              </p>
              <ul className="de-checks">
                {included.map((t) => (
                  <li key={t}>
                    <Check />
                    {t}
                  </li>
                ))}
                {offer.childrenAvailable && (
                  <li>
                    <Check />
                    NEU: 250+ Kindertrainings
                  </li>
                )}
                {guarantee && (
                  <li>
                    <Check />
                    14 Tage Geld-zurück-Garantie
                  </li>
                )}
              </ul>
              <button
                type="button"
                className="de-cta"
                disabled={!offer.checkout}
                onClick={() => {
                  if (!offer.checkout || pending.current) return;
                  pending.current = true;
                  trackGerman(
                    "InitiateCheckout",
                    { value: offer.price, currency: "EUR", content_name: "Komplettpaket" },
                    true,
                  );
                  const destination = checkoutUrl(offer.checkout, location.search);
                  timer.current = setTimeout(() => location.assign(destination), 150);
                }}
              >
                JETZT ZUGANG SICHERN
              </button>
              {!offer.checkout && (
                <p className="de-note" role="status">
                  Der Kauf wird nach Einrichtung des deutschen Checkouts freigeschaltet.
                </p>
              )}
              <p className="de-note">
                <LockKeyhole size={20} />
                Einmalzahlung, keine monatlichen Beiträge.
              </p>
              {offer.paymentMethods.length > 0 && (
                <p>Sicher bezahlen mit {offer.paymentMethods.join(" · ")}</p>
              )}
            </div>
          </div>
        </Section>
        <Section>
          <div className="de-guarantee">
            <ShieldCheck size={58} />
            <div>
              <h2>
                {guarantee ? "Du gehst kein Risiko ein" : "Klare Bedingungen vor deinem Kauf"}
              </h2>
              <p>
                {guarantee
                  ? "Probiere die Plattform 14 Tage lang. Wenn sie nicht zu dir passt, schreibst du uns eine E-Mail und bekommst dein Geld zurück."
                  : "Informationen zum Widerruf und zur Erstattung findest du vor dem Kauf im Checkout und in der Widerrufsbelehrung."}
              </p>
              <Legal name="Widerrufsbelehrung" />
            </div>
          </div>
        </Section>
        <Section>
          <div className="de-heading">
            <p className="de-kicker">NOCH FRAGEN?</p>
            <h2>Bevor du loslegst</h2>
          </div>
          <div className="de-faq">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>
                  {q === "Was passiert, wenn die Plattform nicht zu mir passt?" && guarantee
                    ? "Du hast 14 Tage Geld-zurück-Garantie. Die Bedingungen findest du im Checkout und in der Widerrufsbelehrung."
                    : a}
                </p>
              </details>
            ))}
          </div>
        </Section>
        <Section dark>
          <div className="de-heading">
            <h2>Das nächste Training kommt sowieso. Mit Plan oder wieder ohne?</h2>
            <p>
              Einmal zahlen, kein Abo, Sofortzugang
              {guarantee ? " und 14 Tage Geld-zurück-Garantie" : ""}.
            </p>
            <OfferButton up />
          </div>
        </Section>
      </main>
      <footer className="de-footer">
        <strong>TRAINING MIT METHODE</strong>
        <nav aria-label="Rechtliche Informationen">
          {(Object.keys(offer.legal) as (keyof typeof offer.legal)[]).map((name) => (
            <Legal name={name} key={name} />
          ))}
        </nav>
        <p>Keine Verbindung zum DFB oder zu Vereinen.</p>
        <p>© {new Date().getFullYear()} Training mit Methode</p>
        <Consent onConsent={consentChanged} />
      </footer>
    </div>
  );
}
