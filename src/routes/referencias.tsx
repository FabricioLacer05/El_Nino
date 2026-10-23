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
    url: "https://www.noaa.gov/education/resource-collections/weather-atmosphere/el-nino",
    note: "Explicação oficial e atualizada do ciclo ENSO pelo serviço climático dos EUA.",
  },
  {
    name: "NOAA — Climate Prediction Center: Oceanic Niño Index (ONI)",
    url: "https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso/oni/v6/",
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
    url: "https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/climate-services/wmo-el-ninola-nina-updates",
    note: "Previsões oficiais globais do estado do ENSO, atualizadas periodicamente.",
  },
  {
    name: "IPCC — Sexto Relatório de Avaliação (AR6), Grupo de Trabalho I",
    url: "https://www.ipcc.ch/report/ar6/wg1/",
    note: "O consenso científico sobre mudanças climáticas, incluindo projeções de ENSO e acidificação.",
  },
  {
    name: "INPE/CPTEC — Boletim Climático e monitoramento do ENSO no Brasil",
    url: "https://dataserver.cptec.inpe.br/dataserver_diptc/web/Painel-Elnino/2026-2027/Painel-El-Ni%c3%b1o-04-setembro-2026.pdf",
    note: "Monitoramento brasileiro do El Niño e impactos regionais nas chuvas e temperaturas.",
  },
  {
    name: "Climate Diagnostics Bulletin — Climate Prediction Center — NCEP/NWS/NOAA. Forecast Forum — August 2026. 2026.",
    url: "https://www.google.com/url?sa=i&source=web&rct=j&url=https://www.cpc.ncep.noaa.gov/products/CDB/Forecast/forecast.shtml&ved=2ahUKEwjvrvmugIOXAxW4CbkGHdjUJ-AQ1fkOegoIAggACAAIGhAJ&opi=89978449&cd&psig=AOvVaw2hMRFSLUFE4sYP0ZWtRjAV&ust=1790194507692000",
    note: "Discussão das previsões climáticas no boletim de agosto de 2026. Acesso em: 17/09/2026.",
  },
  {
    name: "Climate Prediction Center — NCEP/NWS/NOAA. El Niño/Southern Oscillation (ENSO) Diagnostic Discussion. 2026.",
    url: "https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml",
    note: "Diagnóstico do estado do ENSO e perspectivas para os próximos meses. Acesso em: 17/09/2026.",
  },
  {
    name: "El Niño: A Historical Perspective. In: Did you Know? National Centers for Environmental Information (NOAA), 2026.",
    url: "https://www.ncei.noaa.gov/access/monitoring/dyk/el-nino",
    note: "Perspectiva histórica do El Niño e de seus episódios. Acesso em: 23 de set. de 2026.",
  },
  {
    name: "El Niño/La Niña Phenomena. World Meteorological Organization, 2026.",
    url: "https://wmo.int/themes/el-nino-la-nina-phenomena",
    note: "Panorama dos fenômenos El Niño e La Niña pela Organização Meteorológica Mundial. Acesso em: 26 de set. de 2026.",
  },
] as const;

const PAPERS = [
  {
    ref: "AN, D. et al. Extreme precipitation patterns in the Asia–Pacific region and its correlation with El Niño-Southern Oscillation (ENSO). Scientific Reports, v. 13, n. 1, p. 11068, 2023.",
    note: "Padrões de precipitação extrema na região Ásia–Pacífico e sua relação com o ENSO.",
  },
  {
    ref: "BRÖNNIMANN, S. et al. ENSO influence on Europe during the last centuries. Climate Dynamics, v. 28, n. 2, p. 181–197, 2007.",
    note: "Análise histórica da influência do ENSO no clima europeu ao longo dos últimos séculos.",
  },
  {
    ref: "CAI, W. et al. Changing El Niño–Southern Oscillation in a warming climate. Nature Reviews Earth & Environment, v. 2, p. 628–644, 2021. DOI: https://doi.org/10.1038/s43017-021-00199-z.",
    note: "Revisão sobre as mudanças do ENSO em um clima em aquecimento.",
  },
  {
    ref: "CLARKE, B. et al. Climate change and El Niño behind extreme precipitation leading to major floods in southern Brazil in 2024. npj Natural Hazards, v. 3, n. 1, p. 1–20, 2026. DOI: https://doi.org/10.1038/s44304-025-00162-8.",
    note: "Contribuições das mudanças climáticas e do El Niño para as chuvas extremas e enchentes no Sul do Brasil em 2024.",
  },
  {
    ref: "COLLINS, M. D. El Niño 2026 Intensifies, Putting U.S. and Latin American Agriculture on Alert. AgroLatam, 2026. Disponível em: https://www.agrolatam.com/usa/weather/el-nino-2026-us-latin-america-agriculture/. Acesso em: 17/09/2026.",
    note: "Fonte jornalística complementar, não revisada por pares, sobre o El Niño e a agricultura nos EUA e na América Latina.",
  },
  {
    ref: "KAY, G.; DUNSTONE, N. J.; SMITH, D. M.; BETTS, R. A.; CUNNINGHAM, C.; SCAIFE, A. A. Assessing the chance of unprecedented dry conditions over North Brazil during El Niño events. Environmental Research Letters, v. 17, n. 6, art. 064016, 2022. DOI: https://doi.org/10.1088/1748-9326/ac6df9.",
    note: "Avaliação da possibilidade de secas sem precedentes no Norte do Brasil durante episódios de El Niño.",
  },
  {
    ref: "RAGHURAMAN, S. P. et al. The 2023 global warming spike was driven by the El Niño–Southern Oscillation. Atmospheric Chemistry and Physics, v. 24, n. 19, p. 11275–11283, 2024. DOI: https://doi.org/10.5194/acp-24-11275-2024.",
    note: "Relação entre o ENSO e o pico de aquecimento global observado em 2023.",
  },
  {
    ref: "ZHANG, R.; SUMI, A. Moisture circulation over East Asia during El Niño episode in northern winter, spring and autumn. Journal of the Meteorological Society of Japan. Ser. II, v. 80, n. 2, p. 213–227, 2002.",
    note: "Mudanças na circulação de umidade sobre o leste da Ásia durante episódios de El Niño.",
  },
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
        lead="O conteúdo deste site reúne fontes oficiais, artigos científicos revisados por pares e uma fonte jornalística complementar identificada abaixo. Confira as referências para aprofundar seus estudos ou citar em trabalhos escolares."
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
          {[...PAPERS].sort((a, b) => a.ref.localeCompare(b.ref, "pt-BR", { sensitivity: "base" })).map((paper) => (
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
            As fontes acima incluem instituições de pesquisa, revistas revisadas
            por pares e uma fonte jornalística identificada como complementar. Antes de compartilhar qualquer
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
