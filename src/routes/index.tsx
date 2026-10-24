import { createFileRoute } from "@tanstack/react-router";
import { GermanLanding } from "@/components/german/GermanLanding";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Training mit Methode | 2.000+ Fußballübungen für 9,90 €" },
      {
        name: "description",
        content:
          "Über 2.000 Fußballübungen, 250+ Trainingseinheiten und vier Boni in einer Plattform. Nach Position, Alter und Ziel sortiert. Einmalig 9,90 € inkl. MwSt.",
      },
      { property: "og:title", content: "Training mit Methode | Deine geordnete Fußballplattform" },
      {
        property: "og:description",
        content:
          "Für Trainer, Spieler und Eltern. Übungen und Videos an einem Ort. 9,90 € inkl. MwSt., kein Abo.",
      },
    ],
  }),
  component: GermanLanding,
});
