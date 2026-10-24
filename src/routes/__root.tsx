import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Fehler 404</p>
        <h1 className="mt-3 text-5xl font-bold text-foreground">Seite nicht gefunden</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Diese Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Etwas ist schiefgelaufen
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Die Seite konnte nicht geladen werden. Versuche es erneut oder gehe zur Startseite.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#16a34a" },
      {
        title: "Training mit Methode | Deine Fußball-Trainingsbibliothek",
      },
      {
        name: "description",
        content:
          "Über 2.000 Übungen, 250+ Einheiten und vier Boni in einer Plattform. Einmalig 9,90 € inkl. MwSt. Kein Abo.",
      },
      { name: "author", content: "Training mit Methode" },
      { property: "og:site_name", content: "Training mit Methode" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Training mit Methode | Deine Fußball-Trainingsbibliothek" },
      {
        name: "twitter:title",
        content: "Training mit Methode | Deine Fußball-Trainingsbibliothek",
      },
      {
        property: "og:description",
        content:
          "Über 2.000 Übungen, 250+ Einheiten und vier Boni in einer Plattform. Einmalig 9,90 € inkl. MwSt. Kein Abo.",
      },
      {
        name: "twitter:description",
        content:
          "Über 2.000 Übungen, 250+ Einheiten und vier Boni in einer Plattform. Einmalig 9,90 € inkl. MwSt. Kein Abo.",
      },
      { property: "og:image", content: "/illustrations/training-social.svg" },
      { name: "twitter:image", content: "/illustrations/training-social.svg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
