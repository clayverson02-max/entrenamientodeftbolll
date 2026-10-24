/** Confirm these facts before publishing the German offer. Never reuse a USD checkout. */
export const germanOffer = {
  name: "Training mit Methode",
  price: 9.9,
  priceLabel: "9,90 € inkl. MwSt.",
  checkout: null as string | null, // [CHECKOUT-LINK-DE] must charge EUR 9.90 including VAT
  guaranteeDays: null as number | null, // [PLACEHOLDER] confirm 14 days in checkout and terms
  childrenAvailable: false, // [PLACEHOLDER] confirm the additional 250 sessions are live
  childrenReleaseDate: null as string | null,
  subtitles: null as string | null, // [PLACEHOLDER] reviewed German WebVTT file
  paymentMethods: [] as string[], // Only methods confirmed in the German checkout
  legal: {
    Impressum:
      "[PLACEHOLDER: Anbietername, ladungsfähige Anschrift, Vertretungsberechtigte und weitere erforderliche Angaben ergänzen.]",
    Datenschutz:
      "[PLACEHOLDER: Verantwortlichen, Rechtsgrundlagen, Empfänger, Speicherdauer und Betroffenenrechte ergänzen. Optionale Analyse- und Marketingdienste werden nur nach deiner Einwilligung geladen.]",
    AGB: "[PLACEHOLDER: Vertragsbedingungen, Leistungsumfang, technische Voraussetzungen und Bedeutung des lebenslangen Zugangs ergänzen.]",
    Widerrufsbelehrung:
      "[PLACEHOLDER: Widerrufsrecht, Musterformular und Bedingungen für digitale Inhalte rechtlich prüfen und ergänzen.]",
    Kontakt: "[PLACEHOLDER: Gültige Kontakt-E-Mail und Supportangaben ergänzen.]",
  },
} as const;
export const media = {
  vsl: "/videos/mini-vsl-de.mp4",
  vslPoster: "/images/mini-vsl-de.jpg",
  samples: [1, 2, 3, 4].map((i) => ({
    src: `/videos/training-${i}.mp4`,
    poster: `/images/training-${i}.webp`,
  })),
};
