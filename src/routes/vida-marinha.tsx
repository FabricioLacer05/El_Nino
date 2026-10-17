import { createFileRoute } from "@tanstack/react-router";
import {
  Atom,
  Bird,
  Flame,
  Fish,
  Move,
  Sun,
  ThermometerSun,
  TreePine,
  Waves,
} from "lucide-react";

import coralReef from "../assets/coral-reef.jpg";
import { Callout, PageHero, Section } from "../components/page-hero";

export const Route = createFileRoute("/vida-marinha")({
  head: () => ({
    meta: [
      { title: "Vida marinha e Ecossistema | El Niño.guiado" },
      {
        name: "description",
        content:
          "Como o El Niño muda os ecossistemas e os organismos do mar: branqueamento de corais, colapso da ressurgência, migrações e mortalidades — e a acidificação dos oceanos.",
      },
      {
        property: "og:title",
        content: "Vida marinha e Ecossistema — El Niño.guiado",
      },
      {
        property: "og:description",
        content:
          "Corais branqueados, peixes que somem e um oceano mais ácido: como a vida no mar sente o El Niño.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VidaMarinhaPage,
});

const IN_PAGE = [
  { href: "#corais", label: "Corais" },
  { href: "#ressurgencia", label: "Ressurgência e pesca" },
  { href: "#biomas", label: "Galápagos, kelp e florestas" },
  { href: "#organismos", label: "Organismos marinhos" },
  { href: "#acidificacao", label: "Acidificação" },
  { href: "#importancia", label: "Por que importa" },
] as const;

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
  {
    step: "1",
    formula: "CO₂ + H₂O → H₂CO₃",
    text: "O oceano absorve cerca de 25% do CO₂ que lançamos na atmosfera, formando ácido carbônico.",
  },
  {
    step: "2",
    formula: "H₂CO₃ → H⁺ + HCO₃⁻",
    text: "O ácido se dissocia, liberando íons hidrogênio (H⁺). Mais H⁺ = água mais ácida.",
  },
  {
    step: "3",
    formula: "H⁺ + CO₃²⁻ → 2 HCO₃⁻",
    text: "Os H⁺ consomem os íons carbonato (CO₃²⁻) — justamente o “tijolo” com que corais e moluscos constroem suas conchas (CaCO₃).",
  },
] as const;

function VidaMarinhaPage() {
  return (
    <div>
      <PageHero
        kicker="Capítulo 3 · Como fica o oceano?"
        title="Vida marinha e Ecossistema"
        lead="Antes de aparecer na previsão do tempo, o El Niño aparece na vida selvagem: corais esbranquiçados, peixes que somem das redes dos pescadores e aves que abandonam ninhadas. E há uma segunda conta, mais silenciosa — o mesmo dióxido de carbono que aquece o planeta também deixa o oceano mais ácido."
      >
        <nav
          aria-label="Nesta página"
          className="mt-8 flex flex-wrap gap-2"
        >
          {IN_PAGE.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </PageHero>

      <Section title="Corais: o termômetro vivo do oceano" id="corais">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={coralReef}
              alt="Recife de coral com colônias branqueadas ao lado de corais ainda coloridos"
              width={1600}
              height={912}
              loading="lazy"
              className="aspect-video w-full object-cover"
            />
          </div>
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              Corais vivem em simbiose com algas microscópicas (as{" "}
              <em>zooxantelas</em>) que dão cor e energia ao animal. Quando a
              água fica quente demais, o coral <strong>expulsa as algas</strong>{" "}
              e fica com o esqueleto branco à mostra: é o{" "}
              <strong>branqueamento</strong> (bleaching).
            </p>
            <p>
              Durante El Niños fortes, o mar esquentado do Pacífico central e
              leste dispara eventos globais de branqueamento. O de 2015–16
              afetou cerca de{" "}
              <strong>90% dos corais da Grande Barreira</strong> em algumas
              regiões. Se a água esfria rápido, o coral se recupera; se o
              estresse dura meses, ele morre.
            </p>
            <p>
              Recifes abrigam cerca de{" "}
              <strong>25% das espécies marinhas</strong> em menos de 1% do
              oceano. Perder corais é perder o “prédio inteiro” onde milhares de
              espécies moram.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="A ressurgência e o colapso da pesca"
        eyebrow="Peru e Equador"
        id="ressurgencia"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Waves,
              title: "O que a ressurgência faz",
              text: "Água fria do fundo sobe carregada de nutrientes (nitratos e fosfatos), alimentando o fitoplâncton — a base da cadeia alimentar.",
            },
            {
              icon: Sun,
              title: "O que o El Niño faz",
              text: "A água quente da superfície “tampa” a ressurgência. Sem nutrientes, o fitoplâncton despenca e a comida acaba de baixo para cima.",
            },
            {
              icon: Bird,
              title: "O efeito em cascata",
              text: "A anchoveta emigra ou morre; aves marinhas (cormorões, pelicanos) e lobos-marinhos perdem o alimento e fracassam na reprodução.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                <item.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-display text-base font-bold">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/90">
          A pesca da <strong>anchoveta peruana</strong> — maior pesca de espécie
          única do mundo — já colapsou em anos de El Niño (como em 1972–73 e
          1982–83), derrubando farinhas de peixe, exportações e empregos. O
          guano (fezes de aves marinhas usado como fertilizante), que fez a
          riqueza histórica do Peru, também dependia desse ciclo.
        </p>
      </Section>

      <Section
        title="Galápagos, kelp e florestas"
        eyebrow="Outros biomas"
        id="biomas"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: TreePine,
              title: "Ilhas Galápagos",
              text: "Durante El Niños fortes, as correntes frias que sustentam pinguins, iguanas-marinhas e leões-marinhos de Galápagos enfraquecem. Populações inteiras encolhem — e depois se recuperam quando chega o La Niña.",
            },
            {
              icon: Waves,
              title: "Florestas de kelp",
              text: "Florestas de algas gigantes do Pacífico dependem de água fria e rica em nutrientes. Em anos quentes, o kelp morre e as espécies que o habitam (peixes, ouriços, lontras) perdem o habitat.",
            },
            {
              icon: Flame,
              title: "Florestas tropicais",
              text: "Na Amazônia, no Sudeste Asiático e na África, o ar seco de anos de El Niño deixa florestas prontas para queimar — liberando carbono e agravando o aquecimento global.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                <item.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-display text-base font-bold">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <Callout title="Ecossistemas como amortecedores">
          Manguezais, recifes e várzeas protegem cidades de ondas e enchentes.
          Quando o El Niño degrada esses ecossistemas, ele também destrói a
          “defesa natural” que protegeria as pessoas do próximo desastre — um
          ciclo que se realimenta.
        </Callout>
      </Section>

      <Section title="Organismos marinhos em anos de El Niño" id="organismos">
        <div className="grid gap-4 sm:grid-cols-2">
          {ORGANISMS.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                <item.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-display text-base font-bold">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 rounded-3xl border border-border bg-deep p-6 text-deep-foreground sm:grid-cols-3 sm:p-8">
          <div>
            <p className="font-display text-3xl font-extrabold">−50%</p>
            <p className="mt-1 text-sm text-deep-foreground/75">
              queda típica do fitoplâncton no Pacífico equatorial central em El
              Niños fortes
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-extrabold">90%</p>
            <p className="mt-1 text-sm text-deep-foreground/75">
              dos corais afetados em trechos da Grande Barreira no evento
              2015–16
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

      <Section
        title="A acidificação dos oceanos"
        eyebrow="Química do problema"
        id="acidificacao"
      >
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              Quando queimamos combustíveis fósseis, cerca de um quarto do CO₂
              emitido é absorvido pelo oceano. Essa é uma “boa notícia” para o
              clima — e uma{" "}
              <strong>péssima notícia para a química do mar</strong>: o CO₂
              reage com a água e forma ácido carbônico, que libera íons H⁺ e
              reduz o pH.
            </p>
            <p>
              Desde 1850, o pH médio da superfície do oceano caiu de ~8,2 para
              ~8,05–8,1. Parece pouco, mas a escala de pH é logarítmica: isso
              equivale a um aumento de{" "}
              <strong>cerca de 30% na acidez</strong>.
            </p>
            <p>
              O problema central é o <strong>carbonato (CO₃²⁻)</strong>: com
              menos carbonato disponível, fica mais difícil construir e manter
              conchas e esqueletos de carbonato de cálcio (CaCO₃). Corais,
              ostras, mexilhões, cocolitoforídeos e pterópodes — pequenos
              caracóis marinhos que alimentam baleias e salmão — são os mais
              afetados. Em águas muito acidificadas, conchas já formadas podem
              começar a <em>dissolver</em>.
            </p>
          </div>
          <div className="space-y-3">
            {CHEMISTRY.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-border bg-card p-5"
              >
                <p className="font-mono text-sm font-bold text-primary">
                  {item.formula}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Callout title="El Niño e acidificação: qual é a relação?">
          São problemas <strong>diferentes, mas conectados</strong>. A
          acidificação vem, sobretudo, do CO₂ emitido por queima de
          combustíveis fósseis — não do El Niño em si. Curiosamente, em anos de
          El Niño o Pacífico equatorial libera <em>menos</em> CO₂ natural para a
          atmosfera (porque a ressurgência fraca traz menos água rica em carbono
          à superfície). Já o aquecimento global{" "}
          <strong>amplifica os impactos do El Niño</strong>: água de base mais
          quente significa mais branqueamento e menos oxigênio a cada episódio.
        </Callout>
      </Section>

      <Section title="Por que isso importa para você" id="importancia">
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            Mais de <strong>3 bilhões de pessoas</strong> dependem de proteína
            do mar. Colapsos de pesca em anos de El Niño já elevaram o preço do
            alimento em todo o mundo e empurraram comunidades costeiras para a
            pobreza.
          </p>
          <p>
            E há um efeito silencioso: o fitoplâncton oceânico produz cerca de{" "}
            <strong>metade do oxigênio que respiramos</strong>. Um oceano mais
            quente, mais ácido e com menos nutrientes disponíveis é um oceano
            com menos capacidade de sustentar — e de nos sustentar.
          </p>
        </div>
      </Section>
    </div>
  );
}
