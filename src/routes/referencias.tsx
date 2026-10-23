import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";

import { Callout, PageHero, Section } from "../components/page-hero";

export const Route = createFileRoute("/referencias")({
  head: () => ({
    meta: [
      { title: "Referências científicas | El Niño.guiado" },
      {
        name: "description",
        content:
          "Fontes científicas usadas no site: NOAA, WMO, NASA, IPCC, INPE/CPTEC e artigos clássicos sobre o El Niño e a acidificação dos oceanos.",
      },
      { property: "og:title", content: "Referências científicas — El Niño.guiado" },
      {
        property: "og:description",
        content: "Todas as fontes científicas citadas no guia educativo sobre o El Niño.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReferenciasPage,
});

const INSTITUTIONS = [
  {
    name: "NOAA — Climate.gov: “What are El Niño and La Niña?”",
    url: "https://www.climate.gov/news-features/blogs/enso/what-el-ni%C3%B1o-la-ni%C3%B1a",
    note: "Explicação oficial e atualizada do ciclo ENSO pelo serviço climático dos EUA.",
  },
  {
    name: "NOAA — Climate Prediction Center: Oceanic Niño Index (ONI)",
    url: "https://origin.cpc.ncep.noaa.gov/products/analysis_monitoring/ensostuff/ONI_v5.shtml",
    note: "Série histórica do ONI, com os limiares de ±0,5 °C usados neste site.",
  },
  {
    name: "NOAA — Pacific Marine Environmental Laboratory (PMEL)",
    url: "https://www.pmel.noaa.gov/tao/",
    note: "Rede de boias TAO/TRITON que mede a temperatura do Pacífico equatorial em tempo real.",
  },
  {
    name: "NOAA — Ocean Acidification Program",
    url: "https://oceanacidification.noaa.gov/",
    note: "Monitoramento da acidificação dos oceanos e seus efeitos sobre organismos marinhos.",
  },
  {
    name: "NASA — GISTEMP: Global Temperature Anomalies",
    url: "https://data.giss.nasa.gov/gistemp/",
    note: "Série de anomalias de temperatura global usada no gráfico da página Histórico.",
  },
  {
    name: "WMO — El Niño/La Niña Updates (Organização Meteorológica Mundial)",
    url: "https://wmo.int/what-we-do/our-programmes/el-nino-la-nina-updates",
    note: "Previsões oficiais globais do estado do ENSO, atualizadas periodicamente.",
  },
  {
    name: "IPCC — Sexto Relatório de Avaliação (AR6), Grupo de Trabalho I",
    url: "https://www.ipcc.ch/report/ar6/wg1/",
    note: "O consenso científico sobre mudanças climáticas, incluindo projeções de ENSO e acidificação.",
  },
  {
    name: "INPE/CPTEC — Boletim Climático e monitoramento do ENSO no Brasil",
    url: "https://clima.cptec.inpe.br/climanalise/-/clima/boletins-climaticos",
    note: "Monitoramento brasileiro do El Niño e impactos regionais nas chuvas e temperaturas.",
  },
] as const;

const PAPERS = [
  {
    ref: "TRENBERTH, K. E. The definition of El Niño. Bulletin of the American Meteorological Society, v. 78, n. 12, p. 2771–2777, 1997.",
    note: "O artigo que padronizou como definir e medir o El Niño.",
  },
  {
    ref: "McPHADEN, M. J.; ZEBIAK, S. E.; GLANTZ, M. H. ENSO as an integrating concept in Earth science. Science, v. 314, n. 5806, p. 1740–1745, 2006.",
    note: "Visão geral do ENSO como sistema oceano–atmosfera acoplado.",
  },
  {
    ref: "HOEGH-GULDBERG, O. Climate change, coral bleaching and the future of the world’s coral reefs. Marine and Freshwater Research, v. 50, n. 8, p. 839–866, 1999.",
    note: "Estudo clássico sobre o branqueamento de corais e o estresse térmico.",
  },
  {
    ref: "FEELY, R. A. et al. Impact of anthropogenic CO₂ on the CaCO₃ system in the oceans. Science, v. 305, n. 5682, p. 362–366, 2004.",
    note: "Referência fundamental sobre acidificação e o sistema carbonato nos oceanos.",
  },
  {
    ref: "CAI, W. et al. Increased frequency of extreme El Niño events due to greenhouse warming. Nature Climate Change, v. 4, p. 111–116, 2014.",
    note: "Projeta El Niños extremos mais frequentes com o aquecimento global.",
  },
  {
    ref: "CAI, W. et al. Climate impacts of the El Niño–Southern Oscillation on South America. Nature Reviews Earth & Environment, v. 1, n. 4, p. 215–231, 2020.",
    note: "Revisão completa dos impactos do El Niño na América do Sul.",
  },
  {
    ref: "CAI, W. et al. Climate impacts of the El Niño–Southern Oscillation in Africa. Nature Reviews Earth & Environment, v. 6, n. 8, p. 503–520, 2025.",
    note: "Como o El Niño afeta secas, chuvas e ecossistemas africanos.",
  },
  {
    ref: "TASCHETTO, A. S. et al. Climate impacts of the El Niño–Southern Oscillation on Australia. Nature Reviews Earth & Environment, v. 7, n. 2, p. 103–123, 2026.",
    note: "Os efeitos do El Niño sobre secas, monções e queimadas na Austrália.",
  },
  {
    ref: "BRÖNNIMANN, S. Impact of El Niño–Southern Oscillation on European climate. Reviews of Geophysics, v. 45, n. 3, 2007.",
    note: "Por que a influência do El Niño sobre a Europa é controversa e indireta.",
  },
  {
    ref: "TURNER, J. The El Niño–Southern Oscillation and Antarctica. International Journal of Climatology, v. 24, n. 1, p. 1–31, 2004.",
    note: "Os efeitos do El Niño sobre o gelo marinho e o clima da Antártida.",
  },
  {
    ref: "ALIZADEH, O.; MOUSAVIZADEH, M. Impact of ENSO on extreme precipitation in Southwest Asia. Global and Planetary Change, v. 244, p. 104645, 2025.",
    note: "Chuvas extremas no Oriente Médio durante episódios de El Niño.",
  },
] as const;

function ReferenciasPage() {
  return (
    <div>
      <PageHero
        kicker="Capítulo 6 · Referências"
        title="Fontes científicas deste guia"
        lead="Todo o conteúdo deste site foi escrito a partir de fontes oficiais e artigos científicos revisados por pares. Confira abaixo — e use-as para aprofundar seus estudos ou citar em trabalhos escolares."
      />

      <Section title="Instituições e bases de dados" eyebrow="Fontes oficiais">
        <div className="grid gap-3 sm:grid-cols-2">
          {INSTITUTIONS.map((source) => (
            <a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <p className="flex items-start gap-2 font-semibold text-foreground">
                {source.name}
                <ExternalLink className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden />
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{source.note}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Artigos científicos" eyebrow="Literatura revisada por pares">
        <div className="space-y-3">
          {PAPERS.map((paper) => (
            <div key={paper.ref} className="rounded-3xl border border-border bg-card p-5">
              <p className="text-sm font-semibold leading-relaxed text-foreground">{paper.ref}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{paper.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Como citar este site" eyebrow="Dica para trabalhos escolares">
        <div className="max-w-3xl space-y-4">
          <p className="text-base leading-relaxed text-foreground/90">
            Em trabalhos com formato ABNT, você pode citar assim (ajuste a data
            de acesso):
          </p>
          <div className="rounded-3xl border border-border bg-foam/70 p-6 font-mono text-sm leading-relaxed">
            EL NIÑO.guiado. <strong>Guia educativo sobre o fenômeno El Niño</strong>.
            2026. Disponível em:{" "}
            <a
              href="https://elninoguiado.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2"
            >
              https://elninoguiado.lovable.app
            </a>
            . Acesso em: 25 set. 2026.
          </div>
          <Callout title="Pense como cientista">
            Repare que todas as fontes acima são de instituições de pesquisa ou
            de revistas revisadas por pares. Antes de compartilhar qualquer
            informação climática, pergunte: <strong>quem mediu isso, com qual
            instrumento, e onde o dado está publicado?</strong>
          </Callout>
          <p className="text-sm text-muted-foreground">
            Quer revisar os conceitos antes da prova? Volte para{" "}
            <Link to="/o-fenomeno" className="font-semibold text-primary underline-offset-2 hover:underline">
              “O Fenômeno”
            </Link>{" "}
            e tente explicar o diagrama do Pacífico sem olhar as legendas.
          </p>
        </div>
      </Section>

      <Section
        title="Autores do projeto"
        eyebrow="Quem fez este site"
        className="pt-0 sm:pt-4"
      >
        <div className="max-w-3xl space-y-4">
          <ul className="list-disc space-y-1.5 pl-6 text-base leading-relaxed text-foreground/90 marker:text-primary">
            <li>Fabrício de Almeida Lacerda</li>
            <li>Gabriel Fonseca Lins</li>
            <li>Gabrielle Maria de Souza</li>
            <li>Herley Bastos de Assis</li>
            <li>Letícia de Oliveira Siqueira</li>
            <li>Maria Virgínia de Sousa Carlos da Silva</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            <a
              href="https://github.com/FabricioLacer05/El_Nino"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-primary underline-offset-2 hover:underline"
            >
              Ver o repositório no GitHub
              <Github className="size-4" aria-hidden />
            </a>
          </p>
        </div>
      </Section>
    </div>
  );
}
