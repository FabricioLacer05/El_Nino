import { createFileRoute } from "@tanstack/react-router";
import { Bird, Flame, Sun, TreePine, Waves } from "lucide-react";

import coralReef from "../assets/coral-reef.jpg";
import { Callout, PageHero, Section } from "../components/page-hero";

export const Route = createFileRoute("/ecossistemas")({
  head: () => ({
    meta: [
      { title: "Impactos nos ecossistemas | El Niño.guiado" },
      {
        name: "description",
        content:
          "Como o El Niño afeta ecossistemas: branqueamento de corais, colapso da ressurgência, ilhas Galápagos, florestas de kelp, aves marinhas e a Amazônia.",
      },
      {
        property: "og:title",
        content: "Impactos nos ecossistemas — El Niño.guiado",
      },
      {
        property: "og:description",
        content:
          "Corais branqueados, peixes que somem e florestas que queimam: os ecossistemas sentem o El Niño primeiro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EcossistemasPage,
});

function EcossistemasPage() {
  return (
    <div>
      <PageHero
        kicker="Capítulo 3 · Ecossistemas"
        title="A natureza percebe o El Niño antes dos jornais"
        lead="Antes de aparecer na previsão do tempo, o El Niño aparece na vida selvagem: corais esbranquiçados, aves que abandonam ninhadas, peixes que somem das redes dos pescadores. Ecossistemas são os primeiros sensores do fenômeno."
      />

      <Section title="Corais: o termômetro vivo do oceano" id="corais">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={coralReef}
              alt="Recife de coral com colônias branqueadas ao lado de corais ainda coloridos"
              width={1600}
              height={912}
              loading="lazy"
              className="aspect-video w-full object-cover"
            />
          </div>
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              Corais vivem em simbiose com algas microscópicas (as{" "}
              <em>zooxantelas</em>) que dão cor e energia ao animal. Quando a
              água fica quente demais, o coral <strong>expulsa as algas</strong> e
              fica com o esqueleto branco à mostra: é o{" "}
              <strong>branqueamento</strong> (bleaching).
            </p>
            <p>
              Durante El Niños fortes, o mar esquentado do Pacífico central e
              leste dispara eventos globais de branqueamento. O de 2015–16
              afetou cerca de <strong>90% dos corais da Grande Barreira</strong> em
              algumas regiões. Se a água esfria rápido, o coral se recupera;
              se o estresse dura meses, ele morre.
            </p>
            <p>
              Recifes abrigam cerca de <strong>25% das espécies marinhas</strong> em
              menos de 1% do oceano. Perder corais é perder o “prédio inteiro”
              onde milhares de espécies moram.
            </p>
          </div>
        </div>
      </Section>

      <Section title="A ressurgência e o colapso da pesca" eyebrow="Peru e Equador" id="ressurgencia">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Waves,
              title: "O que a ressurgência faz",
              text: "Água fria do fundo sobe carregada de nutrientes (nitratos e fosfatos), alimentando o fitoplâncton — a base da cadeia alimentar.",
            },
            {
              icon: Sun,
              title: "O que o El Niño faz",
              text: "A água quente da superfície “tampa” a ressurgência. Sem nutrientes, o fitoplâncton despenca e a comida acaba de baixo para cima.",
            },
            {
              icon: Bird,
              title: "O efeito em cascata",
              text: "A anchoveta emigra ou morre; aves marinhas (cormorões, pelicanos) e lobos-marinhos perdem o alimento e fracassam na reprodução.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                <item.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-display text-base font-bold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/90">
          A pesca da <strong>anchoveta peruana</strong> — maior pesca de espécie
          única do mundo — já colapsou em anos de El Niño (como em 1972–73 e
          1982–83), derrubando farinhas de peixe, exportações e empregos. O
          guano (fezes de aves marinhas usado como fertilizante), que fez a
          riqueza histórica do Peru, também dependia desse ciclo.
        </p>
      </Section>

      <Section title="Galápagos, kelp e florestas" eyebrow="Outros biomas" id="outros">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: TreePine,
              title: "Ilhas Galápagos",
              text: "Durante El Niños fortes, as correntes frias que sustentam pinguins, iguanas-marinhas e leões-marinhos de Galápagos enfraquecem. Populações inteiras encolhem — e depois se recuperam quando chega o La Niña.",
            },
            {
              icon: Waves,
              title: "Florestas de kelp",
              text: "Florestas de algas gigantes do Pacífico dependem de água fria e rica em nutrientes. Em anos quentes, o kelp morre e as espécies que o habitam (peixes, ouriços, lontras) perdem o habitat.",
            },
            {
              icon: Flame,
              title: "Florestas tropicais",
              text: "Na Amazônia, no Sudeste Asiático e na África, o ar seco de anos de El Niño deixa florestas prontas para queimar — liberando carbono e agravando o aquecimento global.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                <item.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-display text-base font-bold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
        <Callout title="Ecossistemas como amortecedores">
          Manguezais, recifes e várzeas protegem cidades de ondas e enchentes.
          Quando o El Niño degrada esses ecossistemas, ele também destrói a
          “defesa natural” que protegeria as pessoas do próximo desastre —
          um ciclo que se realimenta.
        </Callout>
      </Section>
    </div>
  );
}
