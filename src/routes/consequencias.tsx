import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Ambulance,
  CloudLightning,
  Factory,
  Flame,
  Globe2,
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
          "Os efeitos do El Niño pelo mundo, continente por continente: teleconexões, secas, enchentes, queimadas, impactos em ecossistemas e crises socioeconômicas.",
      },
      {
        property: "og:title",
        content: "Consequências socioambientais do El Niño",
      },
      {
        property: "og:description",
        content:
          "Das enchentes no Atacama às secas na Austrália: como o aquecimento do Pacífico reorganiza o clima de todos os continentes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConsequenciasPage,
});

const TELECONEXOES = [
  {
    title: "Circulação de Walker",
    text: "O El Niño é uma alteração da circulação de Walker — a célula de ventos que cruza o Pacífico equatorial. Ao enfraquecê-la ou deslocá-la, toda a circulação atmosférica e oceânica que regula o clima planetário é impactada de alguma forma.",
  },
  {
    title: "Ondas de Rossby e correntes de jato",
    text: "O calor extra do Pacífico gera ondas gigantes na atmosfera (ondas de Rossby) que desviam as correntes de jato da alta atmosfera, levando anomalias de chuva e temperatura para continentes distantes.",
  },
  {
    title: "Outras oscilações somam ou atenuam",
    text: "O El Niño nunca age sozinho: o Dipolo do Oceano Índico (IOD), a Oscilação do Atlântico Norte (NAO) e a Oscilação Antártica (SAM) podem reforçar ou mascarar seus efeitos em cada região.",
  },
  {
    title: "Tipos de El Niño",
    text: "O El Niño Costeiro (água quente perto da América do Sul) costuma ter efeitos mais fortes sobre o continente; o El Niño Centro-Pacífico (Modoki) distribui as anomalias de outro jeito. Cada episódio é único.",
  },
  {
    title: "Aquecimento global de fundo",
    text: "A anomalia global de temperatura — causada principalmente pela atividade humana — soma-se ao El Niño e modifica seus efeitos, tornando cada evento mais imprevisível.",
  },
  {
    title: "O ano seguinte é o mais crítico",
    text: "Os efeitos não são instantâneos: costumam ficar mais aparentes e fortes no ano posterior à formação do El Niño. O episódio de 2026 já mostra efeitos logo no início, com previsões mais severas para 2027.",
  },
] as const;

const CONTINENTS = [
  {
    name: "América do Sul",
    intensity: "Efeitos mais intensos do planeta",
    climate:
      "É o continente mais relacionado ao El Niño. Na costa oeste, as águas quentes alimentam chuvas e tempestades severas sobre Equador, Peru e o deserto do Atacama, com enchentes devastadoras em locais normalmente secos — padrão que também atinge o centro-sul do Brasil, a Bacia Platina e o Altiplano Andino. Ao mesmo tempo, há estiagem e calor sobre a Amazônia, o Centro-Oeste e o Nordeste do Brasil, a costa colombiana e venezuelana e o sul do Chile (Patagônia Verde).",
    ecosystems:
      "Nas áreas de estiagem, o calor favorece queimadas que desregulam o ciclo natural do fogo; nas áreas chuvosas, alagamentos e deslizamentos se multiplicam. No Pacífico oriental, o acúmulo de água quente “afunda” a termoclina e bloqueia a ressurgência de nutrientes da Corrente de Humboldt, colapsando a teia alimentar marinha a partir do fitoplâncton.",
    note: "O El Niño Costeiro apresenta os maiores efeitos sobre o continente, e um Dipolo do Oceano Índico positivo pode somar-se a eles.",
  },
  {
    name: "Oceania",
    intensity: "Efeitos muito claros",
    climate:
      "Na Austrália, onde os efeitos são mais severos, predomina um verão muito seco em quase todo o país, inverno mais ameno e atraso da monção indo-australiana que regula o clima do norte. Na Nova Zelândia, a costa leste seca e a oeste fica mais úmida. Nas ilhas do Pacífico e em Papua-Nova Guiné, o clima tende a ficar mais seco — exceto na faixa equatorial, onde o El Niño se forma e o verão fica bem mais quente e úmido.",
    ecosystems:
      "Com a água quente deslocada para o leste, o nível do mar cai no Mar dos Corais, impactando os recifes. Queimadas massivas atingem o outback e as florestas do sudeste australiano, e ilhas como Fiji e Samoa sofrem forte queda de chuvas sobre suas florestas.",
    note: "Um Dipolo do Oceano Índico positivo pode agravar ainda mais os efeitos na Austrália.",
  },
  {
    name: "América do Norte, Central e Caribe",
    intensity: "Efeitos indiretos, mas típicos",
    climate:
      "A corrente de jato do Pacífico se fortalece e a jato Ártica Polar enfraquece: o oeste do Canadá esquenta, o Centro-Oeste dos EUA fica mais seco e o Oeste e Sudoeste dos EUA — incluindo o Deserto do Mojave — recebem chuvas anormais. O Sul dos EUA fica mais úmido, frio e com inverno ameno. Há mais neve nas Montanhas Rochosas e na Sierra Madre, e menos gelo na Colúmbia Britânica e no Alasca. No Caribe e na América Central, o ar descendente seco da célula de Walker desviada eleva a temperatura e derruba a umidade; os furacões aumentam no Pacífico e diminuem no Atlântico.",
    ecosystems:
      "O excesso de chuva atinge ecossistemas semidesérticos do Sudoeste dos EUA que não são adaptados a tanta água. A floresta boreal do Canadá e do Alasca passa por invernos quentes demais, e as florestas tropicais do Caribe e da América Central sofrem com a falta de umidade.",
    note: "A região sofre forte influência da Oscilação do Atlântico Norte, que modula os efeitos do El Niño.",
  },
  {
    name: "Ásia",
    intensity: "Depende do Dipolo do Oceano Índico",
    climate:
      "A Ásia Ocidental (Oriente Médio) recebe mais chuvas que o normal. O Sul e parte do Sudeste Asiático passam por aumento de temperatura e disrupção das monções, que podem ficar mais demoradas e severas. Indonésia, Filipinas e o norte da China perdem umidade; o Sul da China fica mais chuvoso quando o El Niño é do tipo Costeiro.",
    ecosystems:
      "O atraso da monção indiana desregula a umidade das florestas tropicais do subcontinente, e o mesmo ocorre nas selvas da Indonésia e do Sudeste Asiático — regiões de altíssima biodiversidade com muitas espécies ameaçadas. As estepes da Mongólia e áreas secas da China sofrem estiagem maior, e pode haver derretimento acelerado das geleiras do Planalto Tibetano e da Ásia Central.",
    note: "A combinação El Niño + Dipolo do Oceano Índico define a distribuição da umidade no continente.",
  },
  {
    name: "África",
    intensity: "Secas severas e cheias extremas",
    climate:
      "O Sahel, a parte úmida da África Ocidental e o sul do continente passam por secas severas. Nas regiões de alternância entre estação seca e chuvosa, as estiagens se alongam e as chuvas ficam mais fortes no período úmido, principalmente no fim do ano. Na África oriental, as “chuvas curtas” recebem volume muito maior, causando inundações em ambiente de savana e planalto normalmente seco. As águas costeiras do sul e do oeste africano ficam mais quentes que a média.",
    ecosystems:
      "As savanas — lar da maior parte da megafauna de mamíferos do planeta — sofrem com a escassez prolongada de água, pressionando animais já afetados pela caça. O risco de incêndios cresce com a vegetação seca, principalmente no sul da África, e as selvas da África Ocidental enfrentam menos água e a expansão da aridez no Sahel.",
    note: "Somam-se aos impactos os conflitos armados, que dificultam ações humanitárias.",
  },
  {
    name: "Antártida",
    intensity: "Efeitos via mares do Pacífico",
    climate:
      "Anomalias de alta pressão se formam sobre os mares de Bellingshausen e de Ross, voltados ao Pacífico. Elas reduzem a formação de gelo marinho nesses mares e facilitam a entrada de jatos de ar quente em direção ao polo sul. Já o mar de Weddell, voltado ao Atlântico Sul, tende a ficar mais frio e com mais gelo.",
    ecosystems:
      "A redução do gelo marinho nos mares voltados ao Pacífico impacta as populações de krill — crustáceos que são a base da cadeia alimentar polar e se abrigam, junto a algas, nas rachaduras do gelo.",
    note: "O clima antártico é mais fortemente influenciado pela sua própria oscilação: a Oscilação Antártica (SAM).",
  },
  {
    name: "Europa",
    intensity: "O continente menos afetado",
    climate:
      "A influência do El Niño sobre a Europa ainda é controversa e pouco clara, pois o clima local tem muitos outros fatores. Observa-se uma tendência de resfriamento no norte e noroeste e de aquecimento no Mediterrâneo, com umidade maior no centro, oeste e sul, e menor na Escandinávia durante o inverno boreal.",
    ecosystems: null,
    note: "Esses efeitos não são causados unicamente pelo El Niño — dependem também do estado da Oscilação do Atlântico Norte (NAO).",
  },
] as const;

const IMPACTS = [
  {
    icon: Sprout,
    title: "Agricultura e segurança alimentar",
    text: "Nas regiões de estiagem, a agropecuária de subsistência de populações tradicionais é duramente atingida, causando fome e sede. Nos grandes polos produtores, o comércio internacional de alimentos pode ser impactado.",
  },
  {
    icon: CloudLightning,
    title: "Enchentes, deslizamentos e solo",
    text: "Em áreas de chuva excessiva, deslizamentos de terra, enchentes e alagamentos destroem infraestrutura, lixiviam o solo e derrubam a agricultura — com mais doenças fúngicas e apodrecimento de mudas.",
  },
  {
    icon: Flame,
    title: "Incêndios florestais",
    text: "Florestas e savanas secas viram combustível: anos de El Niño historicamente coincidem com picos de queimadas na Amazônia, na Indonésia e na Austrália, liberando carbono e agravando o aquecimento global.",
  },
  {
    icon: Ambulance,
    title: "Saúde pública",
    text: "Secas e enchentes favorecem dengue, malária, cólera e leptospirose. O ar seco e poluído agrava doenças respiratórias, e ondas de calor atingem populações vulneráveis.",
  },
  {
    icon: Ship,
    title: "Economia e transporte",
    text: "Seguradoras, portos, hidrelétricas e preços de commodities sentem o golpe. No Panamá, o El Niño de 2023–24 baixou o nível do canal e reduziu a passagem de navios.",
  },
  {
    icon: Factory,
    title: "Efeito cascata global",
    text: "Como as perdas acontecem em vários continentes simultaneamente, o El Niño mexe com inflação, exportações e cadeias de suprimento — um problema de todos, não só do Pacífico.",
  },
] as const;

function ConsequenciasPage() {
  return (
    <div>
      <PageHero
        kicker="Capítulo 2 · Consequências"
        title="Os efeitos do El Niño pelo mundo"
        lead="O El Niño não muda só a temperatura do mar: por meio das teleconexões — “rodovias” atmosféricas entre anomalias climáticas a grandes distâncias — ele reorganiza chuvas, ventos e correntes de jato em todos os continentes, das enchentes no Atacama às secas na Austrália."
      />

      <Section
        title="Teleconexões: as rodovias do clima"
        eyebrow="Por que um oceano distante muda o seu tempo"
        id="teleconexoes"
      >
        <p className="max-w-3xl text-base leading-relaxed text-foreground/90">
          Cada episódio de El Niño é único: seus efeitos não são garantidos e
          variam conforme o tipo de evento, a estação do ano, o aquecimento
          global de fundo e a configuração de outras oscilações
          oceânico-atmosféricas. Entenda os mecanismos:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TELECONEXOES.map((item) => (
            <div key={item.title} className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-base font-bold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Efeitos continente por continente" eyebrow="Mapa dos impactos" id="continentes">
        <div className="space-y-4">
          {CONTINENTS.map((continent) => (
            <details
              key={continent.name}
              className="group rounded-3xl border border-border bg-card open:border-primary/40 open:shadow-lg open:shadow-primary/10"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Globe2 className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{continent.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {continent.intensity}
                    </p>
                  </div>
                </div>
                <span className="font-display text-2xl text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="space-y-4 border-t border-border/60 px-6 py-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Clima</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/90">{continent.climate}</p>
                </div>
                {continent.ecosystems ? (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Ecossistemas</p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/90">{continent.ecosystems}</p>
                  </div>
                ) : null}
                <p className="rounded-2xl bg-foam/70 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Detalhe:</strong> {continent.note}
                </p>
              </div>
            </details>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Padrões típicos de episódios de El Niño; cada evento tem
          particularidades, e os efeitos costumam ficar mais fortes no ano
          seguinte à formação. Para o Brasil, veja a{" "}
          <Link to="/brasil" className="font-semibold text-primary underline-offset-2 hover:underline">
            seção especial
          </Link>
          .
        </p>
      </Section>

      <Section title="Impactos socioeconômicos e humanitários" eyebrow="Além do clima">
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
            Os continentes que mais sofrem com os impactos humanitários são a
            África e a América do Sul, que concentram países de baixa renda e
            populações com menos recursos para armazenar água, proteger
            colheitas e reconstruir casas após enchentes. Na África, somam-se
            ainda os conflitos entre grupos armados, que dificultam ações
            humanitárias. Um mesmo episódio que custa uma safra para uma
            multinacional pode significar fome para uma comunidade inteira.
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
