import { createFileRoute } from "@tanstack/react-router";
import { Atom, Fish, Move, ThermometerSun } from "lucide-react";

import { Callout, PageHero, Section } from "../components/page-hero";

export const Route = createFileRoute("/vida-marinha")({
  head: () => ({
    meta: [
      { title: "Vida marinha e acidificação dos oceanos | El Niño.guiado" },
      {
        name: "description",
        content:
          "Como o El Niño afeta organismos marinhos — migrações, mortalidades e pesca — e como a acidificação dos oceanos ameaça corais, moluscos e a cadeia alimentar.",
      },
      {
        property: "og:title",
        content: "Vida marinha e acidificação dos oceanos",
      },
      {
        property: "og:description",
        content:
          "Organismos marinhos em risco e a acidificação: a outra face do dióxido de carbono no mar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VidaMarinhaPage,
});

const ORGANISMS = [
  {
    icon: Move,
    title: "Migrações em massa",
    text: "Espécies seguem a água na sua faixa de temperatura. Em anos de El Niño, peixes de água quente (como o camarão e o peixe-espada) aparecem no Peru, enquanto espécies de água fria fogem para o sul ou para águas mais profundas.",
  },
  {
    icon: Fish,
    title: "Mortalidade em massa",
    text: "Águas quentes carregam menos oxigênio dissolvido. Peixes e invertebrados podem morrer sufocados — eventos de “mortalidade em massa” já foram registrados em recifes e praias durante El Niños fortes.",
  },
  {
    icon: ThermometerSun,
    title: "Reprodução sob estresse",
    text: "Aves marinhas, tartarugas e mamíferos dependem de presas previsíveis. Sem a anchoveta, aves abandonam ninhos; em ilhas quentes, tartarugas produzem mais filhotes fêmeas (o sexo do filhote depende da temperatura da areia).",
  },
  {
    icon: Atom,
    title: "Efeito sobre o fitoplâncton",
    text: "Na base de tudo: sem ressurgência, o fitoplâncton reduz mais de 50% no Pacífico equatorial em anos de El Niño — e toda a cadeia alimentar sente o aperto.",
  },
] as const;

const CHEMISTRY = [
  { step: "1", formula: "CO₂ + H₂O → H₂CO₃", text: "O oceano absorve cerca de 25% do CO₂ que lançamos na atmosfera, formando ácido carbônico." },
  { step: "2", formula: "H₂CO₃ → H⁺ + HCO₃⁻", text: "O ácido se dissocia, liberando íons hidrogênio (H⁺). Mais H⁺ = água mais ácida." },
  { step: "3", formula: "H⁺ + CO₃²⁻ → 2 HCO₃⁻", text: "Os H⁺ consomem os íons carbonato (CO₃²⁻) — justamente o “tijolo” com que corais e moluscos constroem suas conchas (CaCO₃)." },
] as const;

function VidaMarinhaPage() {
  return (
    <div>
      <PageHero
        kicker="Capítulo 4 · Vida marinha"
        title="Os organismos do mar pagam a conta — duas vezes"
        lead="No curto prazo, o El Niño esmaga populações marinhas com calor e falta de alimento. No longo prazo, o dióxido de carbono que aquece o planeta também acidifica o oceano — e isso corrói, quimicamente, a base de vida do mar."
      />

      <Section title="Organismos marinhos em anos de El Niño" id="organismos">
        <div className="grid gap-4 sm:grid-cols-2">
          {ORGANISMS.map((item) => (
            <div key={item.title} className="rounded-3xl border border-border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                <item.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-display text-base font-bold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 rounded-3xl border border-border bg-deep p-6 text-deep-foreground sm:grid-cols-3 sm:p-8">
          <div>
            <p className="font-display text-3xl font-extrabold">−50%</p>
            <p className="mt-1 text-sm text-deep-foreground/75">
              queda típica do fitoplâncton no Pacífico equatorial central em El Niños fortes
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-extrabold">90%</p>
            <p className="mt-1 text-sm text-deep-foreground/75">
              dos corais afetados em trechos da Grande Barreira no evento 2015–16
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-extrabold">≈30%</p>
            <p className="mt-1 text-sm text-deep-foreground/75">
              aumento da acidez do oceano desde a Revolução Industrial
            </p>
          </div>
        </div>
      </Section>

      <Section title="A acidificação dos oceanos" eyebrow="Química do problema" id="acidificacao">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              Quando queimamos combustíveis fósseis, cerca de um quarto do CO₂
              emitido é absorvido pelo oceano. Essa é uma “boa notícia” para o
              clima — e uma <strong>péssima notícia para a química do mar</strong>:
              o CO₂ reage com a água e forma ácido carbônico, que libera íons
              H⁺ e reduz o pH.
            </p>
            <p>
              Desde 1850, o pH médio da superfície do oceano caiu de ~8,2 para
              ~8,05–8,1. Parece pouco, mas a escala de pH é logarítmica: isso
              equivale a um aumento de <strong>cerca de 30% na acidez</strong>.
            </p>
            <p>
              O problema central é o <strong>carbonato (CO₃²⁻)</strong>: com menos
              carbonato disponível, fica mais difícil construir e manter
              conchas e esqueletos de carbonato de cálcio (CaCO₃). Corais,
              ostras, mexilhões, cocolitoforídeos e pterópodes — pequenos
              caracóis marinhos que alimentam baleias e salmão — são os mais
              afetados. Em águas muito acidificadas, conchas já formadas podem
              começar a <em>dissolver</em>.
            </p>
          </div>
          <div className="space-y-3">
            {CHEMISTRY.map((item) => (
              <div key={item.step} className="rounded-3xl border border-border bg-card p-5">
                <p className="font-mono text-sm font-bold text-primary">{item.formula}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <Callout title="El Niño e acidificação: qual é a relação?">
          São problemas <strong>diferentes, mas conectados</strong>. A acidificação vem,
          sobretudo, do CO₂ emitido por queima de combustíveis fósseis — não do
          El Niño em si. Curiosamente, em anos de El Niño o Pacífico equatorial
          libera <em>menos</em> CO₂ natural para a atmosfera (porque a ressurgência
          fraca traz menos água rica em carbono à superfície). Já o
          aquecimento global <strong>amplifica os impactos do El Niño</strong>: água
          de base mais quente significa mais branqueamento e menos oxigênio a
          cada episódio.
        </Callout>
      </Section>

      <Section title="Por que isso importa para você" id="importancia">
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            Mais de <strong>3 bilhões de pessoas</strong> dependem de proteína do mar.
            Colapsos de pesca em anos de El Niño já elevaram o preço do alimento
            em todo o mundo e empurraram comunidades costeiras para a pobreza.
          </p>
          <p>
            E há um efeito silencioso: o fitoplâncton oceânico produz cerca de{" "}
            <strong>metade do oxigênio que respiramos</strong>. Um oceano mais quente,
            mais ácido e com menos nutrientes disponíveis é um oceano com menos
            capacidade de sustentar — e de nos sustentar.
          </p>
        </div>
      </Section>
    </div>
  );
}
