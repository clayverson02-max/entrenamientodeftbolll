import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/precios")({
  beforeLoad: () => {
    throw redirect({ href: "/#angebot" });
  },
});
