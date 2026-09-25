import { createFileRoute } from "@tanstack/react-router";
import {
  Ambulance,
  CloudLightning,
  Factory,
  Flame,
  Ship,
  Sprout,
} from "lucide-react";

import { Callout, PageHero, Section } from "../components/page-hero";

export const Route = createFileRoute("/consequencias")({
  head: () => ({
    meta: [
      { title: "Consequências socioambientais do El Niño | El Niño.guiado" },
      {
        name: "description",
        content:
          "Como o El Niño transforma o clima mundial: secas, enchentes, perdas agrícolas, riscos à saúde, incêndios e impactos econômicos em cada continente.",
      },
      {
        property: "og:title",
        content: "Consequências socioambientais do El Niño",
      },
      {
        property: "og:description",
        content:
          "Secas, enchentes, queimadas e crises de saúde: o efeito dominó do aquecimento do Pacífico sobre as sociedades.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConsequenciasPage,
});

const REGIONS = [
  {
    region: "Sudeste Asiático e Indonésia",
    impact: "Seca intensa e queimadas",
    detail:
      "As chuvas que “eram” da Indonésia migram para o Pacífico leste. Florestas secas queimam e a fumaça fecha o céu de cidades como Jacarta e Singapura.",
  },
  {
    region: "Austrália",
    impact: "Seca, incêndios e safra de trigo menor",
    detail:
      "El Niños fortes derrubam a produção de trigo e ampliam a temporada de incêndios florestais no leste do país.",
  },
  {
    region: "Peru e Equador",
    impact: "Chuvas torrenciais e enchentes",
    detail:
      "O mar quente alimenta nuvens carregadas que raramente passam por ali: cidades desabam em deslizamentos e rios saem do leito.",
  },
  {
    region: "África austral (Zimbábue, Zâmbia, Moçambique)",
    impact: "Secas severas",
    detail:
      "Safra de milho comprometida e crise de segurança alimentar — o El Niño de 2015–16 afetou mais de 40 milhões de pessoas na região.",
  },
  {
    region: "América do Norte",
    impact: "Invernos mais quentes e tempestades no sul",
    detail:
      "O jato subtropical desloca-se, trazendo inverno ameno ao norte dos EUA/Canadá e chuvas à Califórnia e ao Golfo do México.",
  },
  {
    region: "Brasil",
    impact: "Seca no Norte e Nordeste, chuvas no Sul",
    detail:
      "Veja a seção especial do Brasil, com mapa e dados dedicados a este tema.",
  },
] as const;

const IMPACTS = [
  {
    icon: Sprout,
    title: "Agricultura e segurança alimentar",
    text: "Secas reduzem colheitas de trigo, arroz, milho, café e cacau em vários continentes ao mesmo tempo — encarecendo alimentos no mundo inteiro.",
  },
  {
    icon: CloudLightning,
    title: "Água e energia",
    text: "Reservatórios encolhem em regiões de seca e hidrelétricas operam abaixo da capacidade. No Panamá, o El Niño de 2023–24 baixou o nível do canal e reduziu a passagem de navios.",
  },
  {
    icon: Flame,
    title: "Incêndios florestais",
    text: "Florestas secas viram combustível: na Indonésia e na Amazônia, anos de El Niño historicamente coincidem com picos de queimadas e liberação de carbono.",
  },
  {
    icon: Ambulance,
    title: "Saúde pública",
    text: "Secas e enchentes favorecem dengue, malária, cólera e leptospirose. O ar seco e poluído agrava doenças respiratórias, e ondas de calor atingem populações vulneráveis.",
  },
  {
    icon: Ship,
    title: "Economia e transporte",
    text: "Seguradoras, portos, hidrelétricas e preços de commodities sentem o golpe. Estudos estimam que um El Niño forte custa trilhões de dólares à economia global nos anos seguintes.",
  },
  {
    icon: Factory,
    title: "Efeito cascata global",
    text: "Como as perdas acontecem em vários continentes simultaneamente, o El Niño também mexe com inflação, exportações e cadeias de suprimento — um problema de todos, não só do Pacífico.",
  },
] as const;

function ConsequenciasPage() {
  return (
    <div>
      <PageHero
        kicker="Capítulo 2 · Consequências"
        title="O aquecimento do Pacífico reorganiza o clima — e a vida das pessoas"
        lead="O El Niño não muda só a temperatura do mar: ele desloca chuvas, ventos e correntes de jato. O resultado é uma redistribuição global de secas e enchentes, com efeitos na comida, na água, na saúde e na economia."
      />

      <Section title="Como um oceano distante muda o clima de outros continentes?" id="teleconexoes">
        <p className="max-w-3xl text-base leading-relaxed text-foreground/90">
          Com as chuvas deslocadas no Pacífico, o padrão de <strong>pressão e ventos
          na atmosfera</strong> se reorganiza em ondas gigantes (ondas de Rossby) que
          viajam pelos jatos de vento em altitude. Essas “teleconexões”
          transmitem a anomalia para longe: um recorde de água morna perto do
          Peru pode resultar em seca no Zimbábue ou inverno ameno no Canadá.
          Por isso meteorologistas chamam o El Niño de <strong>“maior oscilação
          interanual do sistema climático”</strong>.
        </p>
      </Section>

      <Section title="Quem sente o quê" eyebrow="Mapa dos impactos">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-secondary/60">
              <tr>
                <th className="px-5 py-3 font-display text-xs font-bold uppercase tracking-wide sm:text-sm">Região</th>
                <th className="px-5 py-3 font-display text-xs font-bold uppercase tracking-wide sm:text-sm">Impacto típico</th>
                <th className="hidden px-5 py-3 font-display text-xs font-bold uppercase tracking-wide sm:table-cell sm:text-sm">O que acontece</th>
              </tr>
            </thead>
            <tbody>
              {REGIONS.map((row) => (
                <tr key={row.region} className="border-b border-border/60 last:border-0">
                  <td className="px-5 py-4 font-semibold text-foreground">{row.region}</td>
                  <td className="px-5 py-4 font-medium text-primary">{row.impact}</td>
                  <td className="hidden px-5 py-4 text-muted-foreground sm:table-cell">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Padrões típicos em episódios de El Niño moderado a forte; cada evento
          tem particularidades. Em caso de não entendimento de um termo, veja o
          glossário rápido em “O Fenômeno”.
        </p>
      </Section>

      <Section title="Impactos socioambientais" eyebrow="Além do clima">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IMPACTS.map((impact) => (
            <div key={impact.title} className="rounded-3xl border border-border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                <impact.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-display text-base font-bold">{impact.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{impact.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Nem todos sentem igual" eyebrow="Justiça climática">
        <div className="max-w-3xl">
          <p className="text-base leading-relaxed text-foreground/90">
            Os impactos do El Niño recaem sobre tudo, mas não sobre todos da
            mesma forma. Comunidades rurais, populações ribeirinhas e países de
            renda mais baixa têm menos infraestrutura para armazenar água,
            proteger colheitas e reconstruir casas após enchentes. Um mesmo
            episódio que custa uma safra para uma multinacional pode significar
            fome para uma comunidade inteira.
          </p>
          <Callout title="Pergunta para discutir em sala">
            Se o El Niño acontece naturalmente há milhares de anos, por que seus
            desastres cresceram tanto nas últimas décadas? Dica: pense no
            aquecimento global, no crescimento das cidades e na perda de
            ecossistemas que amortecem enchentes (manguezais, várzeas).
          </Callout>
        </div>
      </Section>
    </div>
  );
}
