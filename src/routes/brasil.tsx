import { createFileRoute } from "@tanstack/react-router";
import { Droplets, Gauge, HeartPulse, Sprout, Sun } from "lucide-react";

import amazonDrought from "../assets/amazon-drought.jpg";
import { BrazilMap } from "../components/brazil-map";
import { Callout, PageHero, Section } from "../components/page-hero";

export const Route = createFileRoute("/brasil")({
  head: () => ({
    meta: [
      { title: "O El Niño no Brasil — seção especial | El Niño.guiado" },
      {
        name: "description",
        content:
          "Seção especial sobre o Brasil: seca na Amazônia e no Nordeste, chuvas no Sul, impactos na agricultura, na energia e na saúde, com mapa interativo das regiões.",
      },
      {
        property: "og:title",
        content: "O El Niño no Brasil — seção especial",
      },
      {
        property: "og:description",
        content:
          "Seca na Amazônia, chuvas no Sul e safras sob risco: o mapa dos impactos do El Niño nas regiões brasileiras.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BrasilPage,
});

const REGIONS = [
  {
    name: "Norte",
    slug: "regiao-norte",
    impact: "Seca severa",
    detail:
      "Rios encolhem, comunidades ribeirinhas ficam isoladas e as queimadas se multiplicam. Em 2023, o Rio Negro chegou ao menor nível já medido em Manaus em mais de 120 anos.",
    dot: "bg-chart-4",
    more: { href: "#amazonia", label: "A Amazônia em chamas e seca" },
  },
  {
    name: "Nordeste",
    slug: "regiao-nordeste",
    impact: "Seca no semiárido",
    detail:
      "Chuvas ficam abaixo da média no semiárido, afetando reservatórios e a agricultura de subsistência; o litoral pode ter chuvas irregulares.",
    dot: "bg-chart-5",
    more: { href: "#cotidiano", label: "Água, energia e agricultura" },
  },
  {
    name: "Centro-Oeste",
    slug: "regiao-centro-oeste",
    impact: "Chuvas atrasadas",
    detail:
      "O plantio da soja atrasa e o milho “safrinha” pode ser semeado fora da janela ideal, quando as chuvas já estão recuando.",
    dot: "bg-chart-2",
    more: { href: "#cotidiano", label: "Impactos na agricultura" },
  },
  {
    name: "Sudeste",
    slug: "regiao-sudeste",
    impact: "Padrão misto",
    detail:
      "Chuvas irregulares e calor extremo; em alguns episódios há blocos de ar seco e recordes de temperatura nas grandes cidades.",
    dot: "bg-chart-1",
    more: { href: "#cotidiano", label: "Energia elétrica e saúde" },
  },
  {
    name: "Sul",
    slug: "regiao-sul",
    impact: "Chuvas acima da média",
    detail:
      "Passagens de frentes frias e umidade extra intensificam tempestades e enchentes — como as do Rio Grande do Sul em 2023 e 2024.",
    dot: "bg-chart-3",
    more: { href: "/consequencias", label: "Enchentes e efeitos na América do Sul" },
  },
] as const;

const IMPACTS = [
  {
    icon: Sprout,
    title: "Agricultura",
    text: "Safra de soja atrasada no Centro-Oeste, perdas de arroz no Sul, estresse hídrico no Nordeste. O Brasil é um dos maiores produtores de alimentos do mundo — o clima do Pacífico mexe no nosso supermercado.",
  },
  {
    icon: Gauge,
    title: "Energia elétrica",
    text: "Reservatórios das hidrelétricas dependem das chuvas: secas no Norte e Nordeste reduzem a geração e encarecem o custo de energia para todos.",
  },
  {
    icon: HeartPulse,
    title: "Saúde",
    text: "Calor e água parada favorecem dengue, zika e chikungunya. Nos anos de El Niño de 2023–24, o Brasil registrou picos históricos de casos de dengue.",
  },
  {
    icon: Droplets,
    title: "Água e navegação",
    text: "Rios secos na Amazônia isolam comunidades e interrompem o escoamento de soja e minério pelos portos fluviais — impacto que chega até a economia nacional.",
  },
] as const;

function BrasilPage() {
  return (
    <div>
      <PageHero
        kicker="Capítulo 5 · Seção especial: Brasil"
        title="Do Rio Negro ao Rio Grande do Sul: o El Niño visto do Brasil"
        lead="O Brasil fica a milhares de quilômetros do Pacífico, mas sente o El Niño de perto. O fenômeno reorganiza as chuvas na América do Sul em dois eixos: mais seca no Norte e Nordeste, mais chuva no Sul."
      />

      <Section title="O mapa dos impactos" eyebrow="Região por região">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="h-fit rounded-3xl border border-border bg-card p-6 lg:sticky lg:top-24">
            <BrazilMap />
            <div className="mt-4 flex flex-wrap gap-2">
              {REGIONS.map((region) => (
                <a
                  key={region.name}
                  href={`#${region.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <span className={`size-2.5 rounded-full ${region.dot}`} />
                  {region.name}
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Contornos reais dos estados (IBGE). Clique numa região para ver
              seus impactos. As cores indicam o impacto típico, não a intensidade exata.
            </p>
          </div>
          <div className="space-y-3">
            {REGIONS.map((region) => (
              <div
                key={region.name}
                id={region.slug}
                className="scroll-mt-24 rounded-3xl border border-border bg-card p-5 target:ring-2 target:ring-primary"
              >
                <div className="flex items-center gap-3">
                  <span className={`size-3 shrink-0 rounded-full ${region.dot}`} />
                  <h3 className="font-display text-base font-bold">{region.name}</h3>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-bold text-secondary-foreground">
                    {region.impact}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{region.detail}</p>
                <a
                  href={region.more.href}
                  className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  {region.more.label} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="A Amazônia em chamas e seca" id="amazonia">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              Em 2023, durante o El Niño mais recente, a Amazônia viveu{" "}
              <strong>uma das secas mais severas já registradas</strong>. O Rio
              Negro em Manaus caiu ao menor nível em mais de um século de
              medições; comunidades ribeirinhas ficaram sem transporte, sem
              água potável e sem acesso a escolas flutuantes.
            </p>
            <p>
              O ar seco e aquecido transformou a floresta em material inflamável:
              focos de queimadas explodiram no segundo semestre de 2023, cobrindo
              Manaus e Porto Velho com fumaça por semanas.
            </p>
            <p>
              Como o El Niño reforça o aquecimento global (e vice-versa), cada
              episódio novo parte de uma Amazônia mais fragilizada por desmatamento
              e calor — o que torna as secas mais extremas do que seriam “só”
              por causa do fenômeno natural.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={amazonDrought}
              alt="Vista aérea de trecho do rio Amazônico com bancos de areia e terra rachada expostos durante a seca"
              width={1600}
              height={912}
              loading="lazy"
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section title="No cotidiano brasileiro" eyebrow="Onde o fenômeno aparece">
        <div className="grid gap-4 sm:grid-cols-2">
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
        <Callout title="E o La Niña no Brasil?">
          A face fria do ENSO tende a produzir o padrão <strong>inverso</strong>: mais
          chuva no Norte e Nordeste e <strong>seca no Sul</strong> — onde o La Niña
          sustentou as grandes secas de 2020–2022. Entre um evento e outro,
          anos “neutros” dão uma trégua relativa.
        </Callout>
      </Section>

      <Section title="Como o Brasil monitora" id="monitoramento">
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            No Brasil, o <strong>INPE/CPTEC</strong> (Instituto Nacional de Pesquisas
            Espaciais / Centro de Previsão de Tempo e Estudos Climáticos)
            publica boletins climáticos mensais com a projeção do ENSO, e a
            <strong> ANA</strong> (Agência Nacional de Águas) acompanha os níveis
            dos rios e reservatórios. Esses órgãos ajudam agricultores,
            geradores de energia e defesa civil a se prepararem antes do pico
            do fenômeno.
          </p>
          <p>
            Aprender a ler esses boletins é uma habilidade útil: o El Niño
            avisa meses antes de chegar com força — e a informação, quando chega
            a tempo, salva safras e vidas.
          </p>
        </div>
      </Section>
    </div>
  );
}
