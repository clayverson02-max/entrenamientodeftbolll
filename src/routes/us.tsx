import { createFileRoute } from "@tanstack/react-router";
import html from "../static/us.html?raw";

export const Route = createFileRoute("/us")({
  server: {
    handlers: {
      GET: () =>
        new Response(html, {
          headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" },
        }),
    },
  },
});
