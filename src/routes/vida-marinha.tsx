import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  Atom,
  Bird,
  Droplets,
  Fish,
  Flame,
  Gauge,
  Layers,
  Move,
  Sun,
  ThermometerSun,
  TreePine,
  Waves,
} from "lucide-react";

import coralReef from "../assets/coral-reef.jpg";
import { BubbleCarousel } from "../components/bubble-carousel";
import { Callout, PageHero, Section } from "../components/page-hero";

export const Route = createFileRoute("/vida-marinha")({
  head: () => ({
    meta: [
      {
        title:
          "Vida marinha e Ecossistema: e como fica o oceano? | El Niño.guiado",
      },
      {
        name: "description",
        content:
          "Como o El Niño muda a vida no mar: colapso da ressurgência da Corrente de Humboldt e queda do fitoplâncton, acidificação dos oceanos e suas reações químicas, e a redistribuição de espécies com hipóxia e impactos reprodutivos.",
      },
      {
        property: "og:title",
        content: "Vida marinha e Ecossistema: e como fica o oceano?",
      },
      {
        property: "og:description",
        content:
          "Produtividade do mar, acidificação e espécies mudando de lugar: os três grandes efeitos do El Niño sobre os organismos marinhos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VidaMarinhaPage,
});

const IN_PAGE = [
  { href: "#produtividade", label: "Produtividade" },
  { href: "#corais", label: "Recifes" },
  { href: "#acidificacao", label: "Acidificação" },
  { href: "#distribuicao", label: "Distribuição de espécies" },
  { href: "#biomas", label: "Galápagos e florestas" },
  { href: "#importancia", label: "Por que importa" },
] as const;

const UPWELLING = [
  {
    icon: Waves,
    title: "Como funciona em anos neutros",
    text: "Na costa oeste da América do Sul, os ventos alísios empurram a água superficial para longe da praia. Para ocupar esse espaço, água fria e rica em nutrientes (nitrato e fosfato) sobe do fundo: é a ressurgência da Corrente de Humboldt, a mesma que sustenta a pesca do Peru e do Chile.",
  },
  {
    icon: Layers,
    title: "A termoclina afunda",
    text: "No El Niño, os alísios enfraquecem e a ‘poça’ de água quente do Pacífico central se espalha para o leste. Essa camada quente empurra a termoclina — a fronteira entre a água quente de cima e a fria de baixo — para mais fundo. A ressurgência passa a puxar água quente, pobre em nutrientes.",
  },
  {
    icon: Gauge,
    title: "Produtividade primária despenca",
    text: "Sem nutrientes na superfície, o fitoplâncton — as algas microscópicas que fazem fotossíntese e produzem a base de toda a cadeia alimentar — chega a cair mais de 50% no Pacífico equatorial. Isso é visto do espaço pela queda da clorofila.",
  },
] as const;

const CHEMISTRY = [
  {
    kicker: "Reação 1",
    title: "O oceano absorve o CO₂",
    formula: "CO₂ (ar) → CO₂ (água)",
    text: "O oceano absorve cerca de 25% a 30% do CO₂ que lançamos na atmosfera. É um ‘amortecedor’ para o clima — e um problema para a química do mar.",
  },
  {
    kicker: "Reação 2",
    title: "Nasce o ácido carbônico",
    formula: "CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻",
    text: "O CO₂ reage com a água e forma ácido carbônico (H₂CO₃), que se dissocia liberando íons hidrogênio (H⁺). Mais H⁺ significa pH mais baixo: água mais ácida.",
  },
  {
    kicker: "Reação 3",
    title: "O carbonato some",
    formula: "H⁺ + CO₃²⁻ → 2 HCO₃⁻",
    text: "O H⁺ ‘sequestra’ os íons carbonato (CO₃²⁻) para formar bicarbonato. Resultado: sobra menos carbonato disponível para os seres vivos.",
  },
  {
    kicker: "Reação 4",
    title: "Conchas e esqueletos",
    formula: "Ca²⁺ + CO₃²⁻ → CaCO₃",
    text: "É assim que corais, moluscos e plâncton calcificado constroem conchas e esqueletos. Sem carbonato suficiente, o animal gasta mais energia para se construir — e conchas já prontas podem começar a dissolver.",
  },
] as const;

const CALCIFIERS = [
  {
    icon: TreePine,
    title: "Corais",
    text: "Água quente provoca o branqueamento e a acidificação deixa menos carbonato para reconstruir o esqueleto: o recife sofre duas vezes e demora mais para se recuperar.",
  },
  {
    icon: Droplets,
    title: "Moluscos",
    text: "Ostras, mexilhões e vieiras constroem conchas de carbonato de cálcio. Larvas em água mais ácida gastam energia extra e têm menos sobrevivência — viveiros já sentem isso.",
  },
  {
    icon: Atom,
    title: "Pterópodes",
    text: "Os ‘borboletas-do-mar’, pequenos caracóis de concha fina de aragonita, estão entre os primeiros a sofrer: em água corrosiva, suas conchas se dissolvem. Eles alimentam salmão, bacalhau e até baleias.",
  },
] as const;

const DISTRIBUTION = [
  {
    icon: Move,
    title: "Redistribuição geográfica",
    text: "Cada espécie vive dentro de uma faixa de temperatura. Quando a água esquenta, os cardumes se deslocam para latitudes maiores ou em direção a águas mais frias — e o peixe que era do Peru vira ‘visitante’ do Chile.",
  },
  {
    icon: ArrowDown,
    title: "Migração vertical",
    text: "Nem todos podem viajar longe. Muitas espécies descem a águas mais profundas para achar a temperatura certa. Isso as tira do alcance da pescaria de superfície e das redes de monitoramento.",
  },
  {
    icon: Fish,
    title: "Espécies tropicais invadem",
    text: "Águas temperadas passam a receber espécies de águas quentes: camarão e peixe-espada aparecem no Peru, e em outras regiões peixes tropicais avançam sobre comunidades antes temperadas, competindo e predando espécies locais.",
  },
  {
    icon: ThermometerSun,
    title: "Espécies frias fogem ou morrem",
    text: "Espécies de água fria — anchoveta, sardinha, bacalhau e muitos invertebrados — não têm para onde ir quando a água esquenta além do limite. O resultado são fugas em massa e eventos de mortalidade em recifes e praias.",
  },
  {
    icon: Droplets,
    title: "Hipóxia: o mar perde oxigênio",
    text: "Água quente retém menos oxigênio dissolvido, e a ressurgência mais fraca deixa de renovar esse estoque. Zonas com pouco oxigênio se expandem: peixes e invertebrados se sufocam ou abandonam o habitat.",
  },
  {
    icon: Bird,
    title: "Reprodução de aves e mamíferos",
    text: "Aves marinhas (cormorões, pelicanos, atobás) abandonam ninhadas quando a anchoveta some; lobos e elefantes-marinhos têm menos filhotes em anos de escassez. Em ilhas mais quentes, tartarugas produzem mais fêmeas — o sexo do filhote depende da temperatura da areia.",
  },
] as const;

function VidaMarinhaPage() {
  return (
    <div>
      <PageHero
        kicker="Capítulo 3 · Como fica o oceano?"
        title="Vida marinha e Ecossistema: e como fica o oceano?"
        lead="Antes de aparecer na previsão do tempo, o El Niño aparece na vida selvagem: corais esbranquiçados, peixes que somem das redes dos pescadores e aves que abandonam ninhadas. Três grandes processos explicam essa mudança — e uma quarta força, silenciosa, age ao mesmo tempo: a acidificação do oceano."
      >
        <nav aria-label="Nesta página" className="mt-8 flex flex-wrap gap-2">
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

      <Section
        title="Produtividade: quando o mar fica sem comida"
        eyebrow="Tema 1"
        id="produtividade"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {UPWELLING.map((item) => (
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
          É um efeito cascata: menos nutrientes → menos fitoplâncton → menos
          zoplâncton → menos anchoveta → menos aves marinhas, lobos-marinhos e
          peixes predadores. A pesca da{" "}
          <strong>anchoveta peruana</strong> — maior pesca de espécie única do
          mundo — já colapsou em anos de El Niño (como em 1972–73 e 1982–83),
          derrubando a produção de farinha de peixe, as exportações e os
          empregos. O <strong>guano</strong> (fezes de aves marinhas usadas como
          fertilizante), que fez a riqueza histórica do Peru, também dependia
          desse ciclo.
        </p>

        <div className="mt-6 grid gap-4 rounded-3xl border border-border bg-deep p-6 text-deep-foreground sm:grid-cols-3 sm:p-8">
          <div>
            <p className="font-display text-3xl font-extrabold">−50%</p>
            <p className="mt-1 text-sm text-deep-foreground/75">
              queda típica do fitoplâncton no Pacífico equatorial em El Niños
              fortes
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

        <p className="mt-6 text-sm text-muted-foreground">
          Quer relembrar como o oceano e a atmosfera se conectam?{" "}
          <Link to="/o-fenomeno" className="font-semibold text-primary">
            Veja o capítulo “O Fenômeno”
          </Link>
          .
        </p>
      </Section>

      <Section
        title="Recifes: o primeiro sinal do estresse térmico"
        eyebrow="Antes da química"
        id="corais"
      >
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
        title="Acidificação: a química que corrói o mar"
        eyebrow="Tema 2"
        id="acidificacao"
      >
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              Quando queimamos combustíveis fósseis, boa parte do CO₂ emitido é
              absorvida pelo oceano. Essa é uma “boa notícia” para o clima — e
              uma <strong>péssima notícia para a química do mar</strong>: o CO₂
              reage com a água, forma ácido carbônico e libera íons H⁺,
              reduzindo o pH.
            </p>
            <p>
              Desde 1850, o pH médio da superfície do oceano caiu de ~8,2 para
              ~8,05–8,1. Parece pouco, mas a escala de pH é logarítmica: isso
              equivale a um aumento de <strong>cerca de 30% na acidez</strong>.
            </p>
            <p>
              O ponto crítico é a <strong>perda de íons carbonato</strong>: com
              menos CO₃²⁻ disponível, fica mais difícil construir e manter
              conchas e esqueletos de carbonato de cálcio (CaCO₃). Corais,
              ostras, mexilhões, cocolitoforídeos e pterópodes são os mais
              afetados — e, em água muito corrosiva, conchas já formadas podem
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

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {CALCIFIERS.map((item) => (
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

        <div className="mt-6">
          <Callout title="Estresse térmico + acidificação: dois golpes na mesma vítima">
            O impacto é <strong>sinérgico</strong>, não apenas somado. A água
            quente do El Niño causa branqueamento nos corais e, ao mesmo tempo, a
            água mais ácida rouba o carbonato de que eles precisam para se
            reconstruir. Em moluscos e pterópodes, o calor acelera o metabolismo
            (mais energia necessária) justamente quando construir a concha ficou
            mais caro. Um organismo já estressado pelo calor é muito mais
            vulnerável à acidificação.
          </Callout>
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

      <Section
        title="Distribuição de espécies: o mapa vivo muda de lugar"
        eyebrow="Tema 3"
        id="distribuicao"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DISTRIBUTION.map((item) => (
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
        <Callout title="Quem decide para onde o peixe vai?">
          Não é “vontade” da espécie: são limites fisiológicos. Cada peixe tem
          uma faixa de temperatura em que consegue respirar, crescer e se
          reproduzir. Quando a água sai dessa faixa, ele se move, desce, ou
          morre. Por isso a pesca, as cotas e até as fronteiras entre países
          precisam acompanhar um estoque que está literalmente se mudando.
        </Callout>
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
          <p className="text-sm text-muted-foreground">
            No Brasil, esses mesmos processos aparecem na pesca, na aquicultura
            e no clima — veja a{" "}
            <Link to="/brasil" className="font-semibold text-primary">
              seção especial sobre o Brasil
            </Link>
            .
          </p>
        </div>
      </Section>
    </div>
  );
}
