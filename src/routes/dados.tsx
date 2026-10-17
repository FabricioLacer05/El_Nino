import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Callout, PageHero, Section } from "../components/page-hero";

export const Route = createFileRoute("/dados")({
  head: () => ({
    meta: [
      { title: "Histórico do fenômeno El Niño | El Niño.guiado" },
      {
        name: "description",
        content:
          "Gráficos educativos sobre o El Niño: índice Niño-Oceânico (ONI) dos grandes episódios, anomalia de temperatura global e a queda do pH do oceano.",
      },
      { property: "og:title", content: "Histórico do fenômeno El Niño" },
      {
        property: "og:description",
        content:
          "ONI, temperatura global e pH do oceano: três gráficos para interpretar o El Niño com números.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DadosPage,
});

/** Renderiza apenas no cliente, evitando problemas de SSR/hidratação com gráficos. */
function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

const ONI_EVENTS = [
  { label: "1982–83", value: 2.2 },
  { label: "1986–88", value: 1.6 },
  { label: "1988–89", value: -1.7 },
  { label: "1997–98", value: 2.4 },
  { label: "2015–16", value: 2.6 },
  { label: "2020–23", value: -1.6 },
  { label: "2023–24", value: 2.0 },
];

const GLOBAL_TEMP = [
  { year: "1980", anomaly: 0.27 },
  { year: "1990", anomaly: 0.45 },
  { year: "2000", anomaly: 0.42 },
  { year: "2010", anomaly: 0.74 },
  { year: "2015", anomaly: 0.93 },
  { year: "2016", anomaly: 1.02 },
  { year: "2020", anomaly: 1.01 },
  { year: "2023", anomaly: 1.17 },
  { year: "2024", anomaly: 1.28 },
];

const OCEAN_PH = [
  { year: "1985", ph: 8.11 },
  { year: "1995", ph: 8.1 },
  { year: "2005", ph: 8.09 },
  { year: "2015", ph: 8.075 },
  { year: "2024", ph: 8.065 },
];

function ChartSkeleton() {
  return (
    <div className="flex h-72 items-center justify-center rounded-2xl bg-secondary/50 text-sm text-muted-foreground">
      Carregando gráfico…
    </div>
  );
}

function DadosPage() {
  const mounted = useMounted();

  return (
    <div>
      <PageHero
        kicker="Capítulo 5 · Histórico do fenômeno"
        title="Lendo o El Niño em números"
        lead="Três gráficos, três histórias: a força de cada episódio, a temperatura do planeta e a química do oceano. Os valores são aproximados a partir de fontes oficiais, com finalidade didática."
      />

      <Section title="1 · Índice Niño-Oceânico (ONI) dos grandes episódios" id="oni">
        <p className="max-w-3xl text-base leading-relaxed text-foreground/90">
          O ONI mede o desvio da temperatura da água em relação à média na
          região Niño 3.4. Barras <strong className="text-chart-3">laranja</strong> = El
          Niño (água mais quente). Barras <strong className="text-primary">azuis</strong> = La
          Niña (água mais fria). A linha em zero é o "estado normal".
        </p>
        <div className="mt-6 rounded-3xl border border-border bg-card p-4 sm:p-6">
          {mounted ? (
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ONI_EVENTS} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                  <XAxis dataKey="label" tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} tickLine={false} unit=" °C" domain={[-2.5, 3]} />
                  <RechartsTooltip
                    formatter={(value: number | string) => [`${value} °C`, "ONI (pico)"]}
                    contentStyle={{ borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-card)" }}
                  />
                  <ReferenceLine y={0} stroke="var(--color-foreground)" strokeWidth={1.5} />
                  <Bar dataKey="value" radius={[6, 6, 6, 6]}>
                    {ONI_EVENTS.map((entry) => (
                      <Cell
                        key={entry.label}
                        fill={entry.value >= 0 ? "var(--color-chart-3)" : "var(--color-chart-1)"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <ChartSkeleton />
          )}
        </div>
        <Callout title="Como interpretar">
          Quanto mais alta a barra laranja, mais forte o El Niño. O episódio
          2015–16 segue como o recorde no índice. Note que o El Niño de 2023–24
          foi forte (≈+2,0 °C), mas não superou os “megas” anteriores — os
          recordes de temperatura global daqueles anos vieram da combinação
          El Niño + aquecimento global.
        </Callout>
      </Section>

      <Section title="2 · Temperatura média global" eyebrow="Anomalia em °C (média 1951–1980 = 0)" id="temperatura">
        <p className="max-w-3xl text-base leading-relaxed text-foreground/90">
          Anos de El Niño puxam a temperatura do planeta para cima, porque o
          Pacífico quente libera calor para a atmosfera. A linha sobe em cada
          "degrau": parte El Niño, parte aquecimento global contínuo.
        </p>
        <div className="mt-6 rounded-3xl border border-border bg-card p-4 sm:p-6">
          {mounted ? (
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={GLOBAL_TEMP} margin={{ top: 8, right: 16, bottom: 0, left: -16 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} tickLine={false} unit=" °C" domain={[0, 1.4]} />
                  <RechartsTooltip
                    formatter={(value: number | string) => [`+${value} °C`, "Anomalia global"]}
                    contentStyle={{ borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-card)" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="anomaly"
                    stroke="var(--color-chart-3)"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "var(--color-chart-3)" }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <ChartSkeleton />
          )}
        </div>
      </Section>

      <Section title="3 · pH da superfície do oceano" eyebrow="Acidificação em curso" id="ph">
        <p className="max-w-3xl text-base leading-relaxed text-foreground/90">
          A linha desce devagar — e é exatamente isso que preocupa: o oceano
          está se tornando continuamente mais ácido, à medida que absorve o CO₂
          da atmosfera. Uma queda de 0,1 no pH significa cerca de 30% mais
          acidez, pois a escala é logarítmica.
        </p>
        <div className="mt-6 rounded-3xl border border-border bg-card p-4 sm:p-6">
          {mounted ? (
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={OCEAN_PH} margin={{ top: 8, right: 16, bottom: 0, left: -16 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} tickLine={false} />
                  <YAxis
                    tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
                    tickLine={false}
                    domain={[8.03, 8.13]}
                    ticks={[8.05, 8.07, 8.09, 8.11, 8.13]}
                  />
                  <RechartsTooltip
                    formatter={(value: number | string) => [`${value}`, "pH médio"]}
                    contentStyle={{ borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-card)" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="ph"
                    stroke="var(--color-chart-1)"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "var(--color-chart-1)" }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <ChartSkeleton />
          )}
        </div>
      </Section>

      <Section title="Fontes dos dados" eyebrow="Transparência">
        <div className="max-w-3xl space-y-3 rounded-3xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">ONI</strong> — NOAA (Climate Prediction
            Center), valores de pico aproximados de cada episódio.
          </p>
          <p>
            <strong className="text-foreground">Temperatura global</strong> — NASA GISS
            (GISTEMP v4), anomalia anual média em relação à média de 1951–1980.
          </p>
          <p>
            <strong className="text-foreground">pH do oceano</strong> — NOAA Pacific Marine
            Environmental Laboratory / Global Ocean Acidification Observing
            Network (GOA-ON), média aproximada da superfície.
          </p>
          <p>
            Valores simplificados para uso educativo; para pesquisa, consulte
            as séries completas nos sites das instituições (veja Referências).
          </p>
        </div>
      </Section>
    </div>
  );
}
