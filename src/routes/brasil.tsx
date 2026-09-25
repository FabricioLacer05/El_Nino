import { createFileRoute } from "@tanstack/react-router";
import { Droplets, Gauge, HeartPulse, Sprout, Sun } from "lucide-react";

import amazonDrought from "../assets/amazon-drought.jpg";
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
    impact: "Seca severa",
    detail:
      "Rios encolhem, comunidades ribeirinhas ficam isoladas e as queimadas se multiplicam. Em 2023, o Rio Negro chegou ao menor nível já medido em Manaus em mais de 120 anos.",
    color: "fill-chart-4",
  },
  {
    name: "Nordeste",
    impact: "Seca no semiárido",
    detail:
      "Chuvas ficam abaixo da média no semiárido, afetando reservatórios e a agricultura de subsistência; o litoral pode ter chuvas irregulares.",
    color: "fill-chart-5",
  },
  {
    name: "Centro-Oeste",
    impact: "Chuvas atrasadas",
    detail:
      "O plantio da soja atrasa e o milho “safrinha” pode ser semeado fora da janela ideal, quando as chuvas já estão recuando.",
    color: "fill-chart-2",
  },
  {
    name: "Sudeste",
    impact: "Padrão misto",
    detail:
      "Chuvas irregulares e calor extremo; em alguns episódios há blocos de ar seco e recordes de temperatura nas grandes cidades.",
    color: "fill-chart-1",
  },
  {
    name: "Sul",
    impact: "Chuvas acima da média",
    detail:
      "Passagens de frentes frias e umidade extra intensificam tempestades e enchentes — como as do Rio Grande do Sul em 2023 e 2024.",
    color: "fill-chart-3",
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
          <div className="rounded-3xl border border-border bg-card p-6">
            <svg
              viewBox="0 0 110 128"
              className="block w-full"
              role="img"
              aria-label="Mapa esquemático do Brasil com as regiões coloridas conforme o impacto típico do El Niño"
            >
              {/* contorno esquemático do Brasil */}
              <path
                d="M 20 20 C 27 12 38 10 45 14 C 53 10 62 12 66 18 C 73 16 79 22 77 30 C 83 34 85 42 79 46 C 83 50 81 58 75 60 C 77 68 73 76 67 80 C 65 88 59 96 55 104 C 52 110 47 114 45 108 C 43 102 39 98 33 94 C 25 88 19 80 17 70 C 13 60 11 46 13 36 C 14 29 16 24 20 20 Z"
                className="fill-secondary"
              />
              <path
                d="M 20 20 C 27 12 38 10 45 14 C 53 10 62 12 66 18 C 73 16 79 22 77 30 C 83 34 85 42 79 46 C 83 50 81 58 75 60 C 77 68 73 76 67 80 C 65 88 59 96 55 104 C 52 110 47 114 45 108 C 43 102 39 98 33 94 C 25 88 19 80 17 70 C 13 60 11 46 13 36 C 14 29 16 24 20 20 Z"
                fill="none"
                className="stroke-primary"
                strokeWidth="1.2"
              />
              {/* zonas de impacto */}
              <ellipse cx="30" cy="30" rx="12" ry="9" className="fill-chart-4/55" />
              <ellipse cx="62" cy="28" rx="9" ry="7" className="fill-chart-5/55" />
              <ellipse cx="45" cy="52" rx="10" ry="9" className="fill-chart-2/55" />
              <ellipse cx="66" cy="58" rx="7" ry="7" className="fill-chart-1/50" />
              <ellipse cx="52" cy="98" rx="8" ry="9" className="fill-chart-3/55" />
              {/* rótulos */}
              <text x="30" y="31" textAnchor="middle" fontSize="4.6" fontWeight="700" fill="oklch(0.3 0.05 250)">Norte</text>
              <text x="62" y="29" textAnchor="middle" fontSize="4.2" fontWeight="700" fill="oklch(0.3 0.05 250)">Nordeste</text>
              <text x="45" y="53" textAnchor="middle" fontSize="4.2" fontWeight="700" fill="oklch(0.3 0.05 250)">Centro-Oeste</text>
              <text x="66" y="59" textAnchor="middle" fontSize="4" fontWeight="700" fill="oklch(0.98 0 0)">Sudeste</text>
              <text x="52" y="99" textAnchor="middle" fontSize="4.4" fontWeight="700" fill="oklch(0.3 0.05 250)">Sul</text>
            </svg>
            <div className="mt-4 flex flex-wrap gap-2">
              {REGIONS.map((region) => (
                <span
                  key={region.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold text-foreground"
                >
                  <span className={`size-2.5 rounded-full ${region.color}`} />
                  {region.name}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Mapa esquemático, sem escala real. Cores indicam o impacto típico
              descrito ao lado, não a intensidade exata.
            </p>
          </div>
          <div className="space-y-3">
            {REGIONS.map((region) => (
              <div key={region.name} className="rounded-3xl border border-border bg-card p-5">
                <div className="flex items-center gap-3">
                  <span className={`size-3 shrink-0 rounded-full ${region.color}`} />
                  <h3 className="font-display text-base font-bold">{region.name}</h3>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-bold text-secondary-foreground">
                    {region.impact}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{region.detail}</p>
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
