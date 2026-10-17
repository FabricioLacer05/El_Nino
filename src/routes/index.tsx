import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CloudRain,
  Droplets,
  Fish,
  Globe2,
  MapPinned,
  Waves,
} from "lucide-react";

import heroOcean from "../assets/hero-ocean.jpg";
import { PacificDiagram } from "../components/pacific-diagram";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Niño.guiado — Entenda o fenômeno que muda o clima" },
      {
        name: "description",
        content:
          "Guia educativo sobre o El Niño para o ensino médio: como funciona o fenômeno, suas consequências socioambientais, os impactos nos ecossistemas, na vida marinha e no Brasil.",
      },
      {
        property: "og:title",
        content: "El Niño.guiado — Entenda o fenômeno que muda o clima",
      },
      {
        property: "og:description",
        content:
          "Guia educativo sobre o El Niño: oceano, clima, ecossistemas, vida marinha e o Brasil — com gráficos e referências científicas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SECTIONS = [
  {
    to: "/o-fenomeno",
    icon: Waves,
    title: "O Fenômeno",
    description:
      "O que é o El Niño, por que ele acontece e como o oceano e a atmosfera se conectam no ciclo ENSO.",
  },
  {
    to: "/consequencias",
    icon: CloudRain,
    title: "Consequências",
    description:
      "Secas, enchentes, perdas na agricultura e riscos à saúde: o efeito dominó do aquecimento do Pacífico.",
  },
  {
    to: "/ecossistemas",
    icon: Globe2,
    title: "Ecossistemas",
    description:
      "Recifes de coral, ressurgência, Galápagos e florestas: como a vida na Terra sente o El Niño.",
  },
  {
    to: "/vida-marinha",
    icon: Fish,
    title: "Vida Marinha",
    description:
      "Organismos marinhos em risco e a acidificação dos oceanos — a outra face do CO₂ no mar.",
  },
  {
    to: "/brasil",
    icon: MapPinned,
    title: "Brasil",
    description:
      "Seção especial: seca na Amazônia, chuvas no Sul e o que o El Niño muda na vida brasileira.",
  },
  {
    to: "/dados",
    icon: BarChart3,
    title: "Dados",
    description:
      "Gráficos com índice Niño-Oceânico, temperatura global e pH do oceano para interpretar.",
  },
  {
    to: "/referencias",
    icon: BookOpen,
    title: "Referências",
    description:
      "Fontes científicas usadas no site: NOAA, OMM, NASA, INPE/CPTEC e artigos clássicos.",
  },
] as const;

const STATS = [
  { value: "2 a 7", unit: "anos", label: "intervalo entre episódios de El Niño" },
  { value: "+2,6", unit: "°C", label: "recorde do índice Niño-Oceânico (2015–16)" },
  { value: "1,28", unit: "°C", label: "anomalia global média em 2024 (NASA)" },
  { value: "≈30%", unit: "", label: "aumento da acidez do oceano desde 1850" },
] as const;

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroOcean}
          alt="Vista aérea do oceano Pacífico com águas em tons de azul e turquesa"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/30 to-background"
        />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 sm:pb-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase backdrop-blur">
            <Droplets className="size-3.5" aria-hidden />
            Projeto extensionista educativo
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl">
            El Niño: o aquecimento do Pacífico que muda o clima do mundo
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            A cada poucos anos, uma faixa gigante de água quente no Oceano
            Pacífico desloca chuvas, ventos e correntes — e provoca secas,
            enchentes e crises nos ecossistemas de quase todo o planeta. Neste
            guia, você aprende como isso funciona, com ciência, dados e mapas.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/o-fenomeno"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              Começar por “O Fenômeno”
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              to="/dados"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              Ir direto aos gráficos
            </Link>
          </div>
        </div>
      </section>

      {/* DESTAQUE VISUAL: como funciona */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-widest text-primary uppercase">
            Destaque visual
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Veja o El Niño acontecer
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Alterne entre “condições neutras” e “El Niño” para comparar como os
            ventos, a água quente e as chuvas mudam de lugar no Oceano Pacífico
            tropical.
          </p>
        </div>
        <div className="mt-8">
          <PacificDiagram />
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "1 · Alísios enfraquecem",
              text: "Os ventos que normalmente empurram a água quente para o oeste perdem força.",
            },
            {
              title: "2 · Água quente avança",
              text: "A poça de água morna migra para a costa da América do Sul, esquentando o Pacífico leste.",
            },
            {
              title: "3 · O clima global reage",
              text: "Chuvas, secas e ondas de calor mudam de padrão em continentes inteiros.",
            },
          ].map((step) => (
            <div key={step.title} className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-base font-bold text-primary">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="bg-deep py-14 text-deep-foreground sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-extrabold sm:text-4xl">
                  {stat.value}
                  {stat.unit && (
                    <span className="ml-1 text-lg font-bold text-foam sm:text-xl">{stat.unit}</span>
                  )}
                </p>
                <p className="mt-1.5 text-sm leading-snug text-deep-foreground/75">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÕES DO SITE */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-widest text-primary uppercase">
            Explore o guia
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Sete capítulos, um fenômeno
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Cada página aprofunda uma parte da história — do mecanismo físico
            até as referências científicas.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((section) => (
            <Link
              key={section.to}
              to={section.to}
              className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <section.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                {section.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {section.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Abrir seção
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SOBRE O PROJETO */}
      <section className="bg-foam/70 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Nosso primeiro projeto real de programação
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Este site foi feito como projeto escolar de ciências e
                tecnologia. Cada seção foi escrita a partir de fontes
                científicas confiáveis — e você pode conferir todas na página de
                Referências. Os gráficos usam valores aproximados, mas coerentes
                com os dados oficiais, para fins didáticos.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Oceanografia", "Climatologia", "Ecologia", "Química da água", "Ciência de dados"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground/80"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold">Dica de estudo</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Comece pelo diagrama acima, depois leia “O Fenômeno” com calma.
                Antes de seguir para as consequências, tente explicar para um
                colega por que o El Niño esfria o Pacífico oeste enquanto aquece
                o leste — é a chamada “gangorra” do ENSO.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
