import { createFileRoute, redirect } from "@tanstack/react-router";

// Ecossistemas foi unido a Vida Marinha na página "Vida marinha e Ecossistema".
// Esta rota só redireciona o endereço antigo para o novo capítulo.
export const Route = createFileRoute("/ecossistemas")({
  head: () => ({
    meta: [
      { title: "Ecossistemas | El Niño.guiado" },
      { name: "robots", content: "noindex" },
    ],
  }),
  loader: () => {
    throw redirect({ to: "/vida-marinha", replace: true });
  },
  component: () => null,
});
