import laterales from "@/assets/mod-laterales.webp";
import porteros from "@/assets/mod-porteros.webp";
import defensas from "@/assets/mod-defensas.webp";
import delanteros from "@/assets/mod-delanteros.webp";
import tecnica from "@/assets/mod-tecnica.webp";
import fisico from "@/assets/mod-fisico.webp";
import femenino from "@/assets/mod-femenino.webp";
import infantil from "@/assets/mod-infantil.webp";
export type Persona = "trainer" | "spieler" | "eltern";
export const personas = {
  trainer: {
    label: "Ich bin Trainer",
    h1: "Morgen Training – und noch kein Plan? Deine Einheit steht in 5 Minuten.",
    sub: "Über 2.000 Übungen und mehr als 250 fertige Trainingseinheiten. Nach Altersklasse, Position und Ziel sortiert. Video ansehen, Einheit wählen, loslegen.",
    benefits: [
      "Nie wieder Übungen zusammensuchen",
      "Abwechslung statt Wiederholung",
      "Klare Struktur für Kinder- und Jugendteams",
    ],
    problem: [
      "Du planst die Einheit auf dem Weg zum Platz.",
      "Dieselben Übungen, dieselben gelangweilten Gesichter.",
      "Die Eltern erwarten mehr, als deine Zeit hergibt.",
    ],
  },
  spieler: {
    label: "Ich bin Spieler",
    h1: "Hör auf, irgendwas zu üben. Trainiere mit Plan.",
    sub: "Technik, Passspiel, Abschluss und Athletik: Videos und Übungen für deine Position, die du auch allein trainieren kannst. Mit Ball, Wand und etwas Platz.",
    benefits: [
      "Du weißt jeden Tag, was du trainierst",
      "Technik sehen, bevor du sie übst",
      "Klarer Fortschritt statt Zufall",
    ],
    problem: [
      "Übungen aus zehn Videos zusammengesucht.",
      "Im Spiel passieren dieselben Fehler wie immer.",
      "Du spürst, dass mehr geht, aber du hast keinen Plan.",
    ],
  },
  eltern: {
    label: "Ich bin Elternteil",
    h1: "Dein Kind will besser werden? Gib ihm einen Plan statt Zufall.",
    sub: "Mehr als 2.000 Übungen mit Video, darunter ein Kinderfußball-Modul: für zu Hause, im Garten oder im Park. Spielerisch, Schritt für Schritt, auch ohne Fußballerfahrung.",
    benefits: [
      "Mehr Ballkontakte auch außerhalb des Vereinstrainings",
      "Spaß und Fortschritt statt Druck",
      "Du musst kein Trainer sein",
    ],
    problem: [
      "Dein Kind schießt täglich gegen die Wand, aber ohne Ziel.",
      "Du weißt nicht, welche Übungen für sein Alter sinnvoll sind.",
      "Zusatztraining kostet schnell viel Geld.",
    ],
  },
} as const;
export const modules = [
  ["Außenverteidiger", "+180 Übungen", "Bahn, Flanken und Rückwärtsbewegung", laterales],
  ["Torhüter", "+150 Übungen", "Reaktion, Herauslaufen, Fangen und Spiel mit dem Fuß", porteros],
  [
    "Innenverteidiger",
    "+170 Übungen",
    "Gegnerkontrolle, Absicherung und sauberer Spielaufbau",
    defensas,
  ],
  ["Stürmer", "+200 Übungen", "Abschluss, Freilaufen und Torschuss im Strafraum", delanteros],
  ["Technik", "+260 Übungen", "Pass, Ballannahme, Dribbling und Finten auf engem Raum", tecnica],
  ["Athletik", "+140 Übungen", "Kraft, Schnelligkeit, Gewandtheit und Ausdauer", fisico],
  ["Frauenfußball", "+120 Übungen", "Einheiten nach Kategorie und Niveau", femenino],
  ["Kinderfußball", "+190 Übungen", "Spielerisches Training mit Progression und Spaß", infantil],
];
export const examples = [
  [
    "Jede Position hat eine Funktion. Trainiere sie.",
    "Sieh, wie Räume besetzt werden und wie Spieler zusammenspielen, bevor du die Übung auf den Platz bringst.",
  ],
  [
    "Nicht einfach schießen. Eine Spielsituation trainieren.",
    "Sieh die Abfolge aus Pass, Freilaufen und Abschluss. Geh mit einem klaren Ziel ins nächste Training.",
  ],
  [
    "Gib jedem Pass eine Absicht.",
    "Sieh, wie sich die Gruppe organisiert und wie der Ball läuft. Passe die Aufgabe dann an dein Niveau an.",
  ],
  [
    "Verbinde Technik mit dem, was im Spiel passiert.",
    "Eine komplette Abfolge, die mehrere Aktionen in einer Aufgabe trainiert, ohne dass du den Parcours selbst erfinden musst.",
  ],
];
export const bonuses = [
  [
    "Trainingsleitfaden",
    "Gib deiner Arbeit eine Richtung und plane deine Einheiten, statt alles auf den letzten Drücker zu entscheiden.",
  ],
  [
    "50 Technikübungen für das Einzeltraining",
    "Mehr Optionen für Ballannahme, Pass und Ausführung. Wähle die Aufgabe und wiederhole sie mit klarem Ziel.",
  ],
  ["Athletikzirkel", "Ergänze die Arbeit mit Ball durch Zirkel für die Fitness."],
  [
    "Training für Dribbling, Kraft und Technik",
    "Erweitere dein Repertoire für 1-gegen-1, Kraft und technische Ausführung.",
  ],
];
/** Existing source testimonials, translated without inventing locations or ratings. */
export const testimonials = [
  [
    "Andrés M.",
    "U12-Trainer · Vancouver",
    "Ich kam mit der fertigen Einheit auf meiner Plattform zum Training. Die Kinder haben alles in wenigen Minuten verstanden. Ich hatte noch nie eine so konzentrierte Gruppe.",
  ],
  [
    "Diego R.",
    "U15 · Madrid",
    "Die Pass- und Ballannahmeübungen haben den Rhythmus des Teams komplett verändert. Nach drei Wochen hat man es schon in den Spielen gemerkt.",
  ],
  [
    "Mateo S.",
    "U17-Spieler · Buenos Aires",
    "Ich trainiere allein auf dem Platz im Viertel, mit der Plattform auf dem Handy. Mein Dribbling hat sich deutlich verbessert, und der Trainer hat mich in die Startelf gestellt.",
  ],
  [
    "Luis F.",
    "U9-Fußballschule · Bogotá",
    "Ich verbringe nicht mehr Stunden mit der Trainingsplanung. Ich öffne die Plattform, schaue das Video und kann loslegen. Die Eltern haben den Unterschied bemerkt.",
  ],
];
export const included = [
  "Zugang zur kompletten Plattform mit persönlichem Login",
  "250+ Trainingseinheiten und 2.000+ Übungen, nach Alter, Position und Ziel sortiert",
  "Module für Außenverteidiger, Torhüter, Innenverteidiger und Stürmer",
  "Fußball 360°: Frauenfußball, Kinderfußball und Athletik",
  "Lehrvideos zu jeder Übung",
  "Klare Feld-Diagramme zum Herunterladen",
  "Updates ohne neue Downloads",
  "Alle 4 Bonusmaterialien inklusive",
];
export const faqs = [
  [
    "Wie und wann erhalte ich meinen Zugang?",
    "Nach bestätigter Zahlung erhältst du eine E-Mail mit deinen Zugangsdaten für deine persönliche Plattform. Prüfe auch deinen Spam-Ordner.",
  ],
  [
    "Für wen ist die Plattform gedacht?",
    "Für Spieler und Trainer unterschiedlicher Niveaus. Mehr als 250 Einheiten sind nach Position, Kategorie und Ziel organisiert, vom Nachwuchs bis zu Erwachsenen.",
  ],
  [
    "Was ist im Paket enthalten?",
    "Die komplette Webplattform mit Übungen, integrierten Lehrvideos und allen vier Bonusmaterialien. Alles in einer geordneten Bibliothek.",
  ],
  [
    "Kann ich auch allein trainieren?",
    "Ja. Viele Übungen sind für das Einzeltraining geeignet. Andere sind für Partner oder Teams gedacht. Wähle die passende Aufgabe.",
  ],
  ["Ist das eine Einmalzahlung?", "Ja. 9,90 € inkl. MwSt., einmalig. Keine monatlichen Beiträge."],
  [
    "Was passiert, wenn die Plattform nicht zu mir passt?",
    "Die geltenden Widerrufs- und Erstattungsbedingungen werden vor dem Kauf im Checkout und in der Widerrufsbelehrung angegeben.",
  ],
  [
    "Brauche ich Erfahrung?",
    "Die Übungen sind Schritt für Schritt mit Diagrammen und Videos erklärt. Wähle Aufgaben passend zu deinem Niveau.",
  ],
  [
    "Was ist bei wenig Platz, wenig Material oder wenigen Spielern?",
    "Es gibt Einheiten für kleine Räume, wenig Material und kleine Gruppen. Passe die Aufgabe an die Bedingungen vor Ort an.",
  ],
  [
    "Wie lange dauert die Trainingsplanung?",
    "Du wählst Position und Ziel und schaust dir die Aufgabe an. So kannst du deine nächste Einheit in wenigen Minuten zusammenstellen.",
  ],
  [
    "Ist das für Spieler und Trainer geeignet?",
    "Ja. Spieler finden Einzelübungen, Trainer komplette Einheiten für ihre Mannschaft.",
  ],
  [
    "Für welche Altersgruppen ist das geeignet?",
    "Es gibt ein Kinderfußball-Modul sowie Inhalte für Jugendliche und Erwachsene. Die genaue Alterszuordnung der zusätzlichen Kindertrainings wird vor ihrer Freigabe bestätigt.",
  ],
  [
    "Kann ich als Elternteil allein damit arbeiten?",
    "Ja. Du kannst passende Übungen auswählen und dein Kind begleiten. Berücksichtige Alter, Können, ausreichend Platz und sichere Bedingungen.",
  ],
];
