import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Compass, Thermometer, Wind } from "lucide-react";

import { Callout, PageHero, Section } from "../components/page-hero";
import { PacificDiagram } from "../components/pacific-diagram";

export const Route = createFileRoute("/o-fenomeno")({
  head: () => ({
    meta: [
      { title: "O Fenômeno — Como o El Niño funciona | El Niño.guiado" },
      {
        name: "description",
        content:
          "O que é o El Niño, por que ele acontece e como o oceano e a atmosfera se acoplam no ciclo ENSO: ventos alísios, termoclina, ressurgência e o índice Niño-Oceânico (ONI).",
      },
      {
        property: "og:title",
        content: "O Fenômeno — Como o El Niño funciona",
      },
      {
        property: "og:description",
        content:
          "Ventos alísios, termoclina e ressurgência: entenda o mecanismo físico do El Niño e o ciclo ENSO.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FenomenoPage,
});

const STEPS = [
  {
    icon: Wind,
    title: "1 · Os ventos alísios",
    text: "Ventos constantes que sopram de leste para oeste no Pacífico tropical. Eles “empurram” a água aquecida pelo Sol em direção à Ásia e à Indonésia.",
  },
  {
    icon: Compass,
    title: "2 · A gangorra do oceano",
    text: "Com a água empurrada para o oeste, o nível do mar fica ~0,5 m mais alto do lado asiático. No leste, próximo à América do Sul, água fria do fundo sobe para ocupar o lugar (ressurgência).",
  },
  {
    icon: Thermometer,
    title: "3 · A termoclina",
    text: "A fronteira entre a camada morna superficial e a água fria de baixo. Fica rasgada no leste e profunda no oeste. É ela quem muda de posição durante o El Niño.",
  },
  {
    icon: Anchor,
    title: "4 · A retroalimentação de Bjerknes",
    text: "Quando os alísios enfraquecem, a água quente volta para o leste; o mar mais quente enfraquece os ventos ainda mais. O sistema se reforça até um pico — depois oscila de volta.",
  },
] as const;

const EVENTS = [
  {
    period: "1982–83",
    name: "O primeiro “Mega Niño”",
    text: "Atingiu forte os recifes de coral do Pacífico, causou enchentes no Equador e secas na Austrália e na Indonésia. Morreram milhares de pessoas.",
  },
  {
    period: "1997–98",
    name: "O mais famoso",
    text: "Balanço estimado em dezenas de bilhões de dólares. Choques de clima, falta de alimentos e doenças atingiram milhões de pessoas nos cinco continentes.",
  },
  {
    period: "2015–16",
    name: "O recorde de intensidade",
    text: "O índice Niño-Oceânico chegou a +2,6 °C. Provocou o maior evento global de branqueamento de corais já registrado até então.",
  },
  {
    period: "2023–24",
    name: "O mais recente",
    text: "Somado ao aquecimento global, ajudou a tornar 2023 e 2024 os anos mais quentes já medidos pela ciência — com seca histórica na Amazônia e enchentes no Sul do Brasil.",
  },
] as const;

function FenomenoPage() {
  return (
    <div>
      <PageHero
        kicker="Capítulo 1 · O Fenômeno"
        title="Um aquecimento que começa no oceano e termina no céu"
        lead="“El Niño” significa, em espanhol, “o menino” — uma referência ao Menino Jesus, que os pescadores peruanos associavam ao mar anormalmente quente que aparecia perto do Natal. Hoje sabemos que ele é a face quente de um ciclo oceano–atmosfera chamado ENSO."
      />

      <Section title="O que é o El Niño, exatamente?" id="definicao">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              O El Niño é um <strong>aumento anormal e persistente da temperatura da
              superfície do mar</strong> na região central e leste do Oceano Pacífico
              tropical, acompanhado de uma reorganização de toda a circulação
              atmosférica da região. Ele não é uma tempestade nem uma corrente:
              é uma mudança do <em>estado normal</em> do oceano e da atmosfera.
            </p>
            <p>
              O nome completo do sistema é <strong>ENSO — El Niño–Oscilação Sul</strong> —
              porque o oceano e a atmosfera agem como um só: a pressão sobe em
              Tahiti quando desce em Darwin (Austrália), como uma gangorra. Essa
              “oscilação sul” é a parte atmosférica; o El Niño é a parte oceânica.
            </p>
            <p>
              O ciclo inteiro dura de <strong>2 a 7 anos</strong> e alterna três fases:
              neutra, El Niño (face quente) e La Niña (face fria, quando as
              águas do Pacífico leste ficam <em>mais frias</em> que o normal). Cada
              episódio começa tipicamente entre abril e junho, ganha força no
              fim do ano e se enfraquece no outono do Hemisfério Norte.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="font-display text-base font-bold">Como os cientistas medem</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A região monitorada é o <strong>Niño 3.4</strong>: uma caixa de oceano
              entre 5°N e 5°S e 170°W e 120°W, no centro do Pacífico equatorial.
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="rounded-2xl bg-secondary/70 px-4 py-2.5">
                <strong className="text-chart-3">El Niño</strong> — anomalia média de 3
                meses <strong>≥ +0,5 °C</strong>
              </li>
              <li className="rounded-2xl bg-secondary/70 px-4 py-2.5">
                <strong className="text-muted-foreground">Neutro</strong> — entre −0,5 °C
                e +0,5 °C
              </li>
              <li className="rounded-2xl bg-secondary/70 px-4 py-2.5">
                <strong className="text-primary">La Niña</strong> — anomalia média de 3
                meses <strong>≤ −0,5 °C</strong>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Esse número é o <strong>ONI</strong> (Oceanic Niño Index), calculado pela
              NOAA a partir de boias e satélites. Quanto mais alto o ONI,
              mais forte o El Niño.
            </p>
          </div>
        </div>
      </Section>

      <Section title="O mecanismo, passo a passo" eyebrow="Mecânica do ENSO">
        <div className="grid gap-4 sm:grid-cols-2">
          {STEPS.map((step) => (
            <div key={step.title} className="rounded-3xl border border-border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                <step.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-display text-base font-bold">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <PacificDiagram />
        </div>
      </Section>

      <Section title="E o La Niña?" id="la-nina">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <p className="text-base leading-relaxed text-foreground/90">
            O La Niña é o <strong>oposto</strong> do El Niño: os alísios ficam mais
            fortes que o normal, empurrando ainda mais água quente para o oeste
            e intensificando a ressurgência de água fria no leste. As consequências
            climáticas costumam ser, em muitos lugares, <em>inversas</em>: mais
            seca no Sul do Brasil e mais chuva no Norte e Nordeste, por exemplo.
          </p>
          <Callout title="El Niño ≠ aquecimento global">
            O El Niño é um fenômeno <strong>natural e cíclico</strong> que já existia
            há milhares de anos. O aquecimento global é uma tendência de longo
            prazo causada pelas emissões humanas. Os dois interagem: um El Niño
            sobre uma atmosfera mais quente produz recordes de temperatura
            ainda maiores — como ocorreu em 2023–2024.
          </Callout>
        </div>
      </Section>

      <Section title="Episódios marcantes" eyebrow="Linha do tempo">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EVENTS.map((event) => (
            <div key={event.period} className="rounded-3xl border border-border bg-card p-5">
              <p className="font-display text-xl font-extrabold text-primary">{event.period}</p>
              <h3 className="mt-1 text-sm font-bold text-foreground">{event.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{event.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
