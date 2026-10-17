import { useState } from "react";

import { BRAZIL_STATES, MAP_HEIGHT, MAP_WIDTH, type RegionKey } from "./brazil-states";

export const REGION_STYLE: Record<RegionKey, { name: string; fill: string; dot: string; slug: string }> = {
  N: { name: "Norte", fill: "fill-chart-4", dot: "bg-chart-4", slug: "regiao-norte" },
  NE: { name: "Nordeste", fill: "fill-chart-5", dot: "bg-chart-5", slug: "regiao-nordeste" },
  CO: { name: "Centro-Oeste", fill: "fill-chart-2", dot: "bg-chart-2", slug: "regiao-centro-oeste" },
  SE: { name: "Sudeste", fill: "fill-chart-1", dot: "bg-chart-1", slug: "regiao-sudeste" },
  S: { name: "Sul", fill: "fill-chart-3", dot: "bg-chart-3", slug: "regiao-sul" },
};

const LABEL_POS: Record<RegionKey, [number, number]> = {
  N: [170, 140],
  NE: [420, 160],
  CO: [270, 300],
  SE: [365, 350],
  S: [290, 440],
};

export function BrazilMap() {
  const [hover, setHover] = useState<RegionKey | null>(null);
  const keys = Object.keys(REGION_STYLE) as RegionKey[];

  return (
    <svg
      viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
      className="block w-full"
      role="img"
      aria-label="Mapa do Brasil com estados agrupados nas cinco regiões, coloridas conforme o impacto típico do El Niño"
    >
      {keys.map((key) => {
        const style = REGION_STYLE[key];
        const dim = hover !== null && hover !== key;
        return (
          <a
            key={key}
            href={`#${style.slug}`}
            aria-label={`Ver impactos na região ${style.name}`}
            onMouseEnter={() => setHover(key)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(key)}
            onBlur={() => setHover(null)}
            className="cursor-pointer outline-none"
          >
            <title>{`${style.name} — clique para ver os impactos`}</title>
            {BRAZIL_STATES.filter((s) => s.region === key).map((s) => (
              <path
                key={s.uf}
                d={s.d}
                className={`${style.fill} stroke-card transition-opacity duration-200 ${dim ? "opacity-35" : "opacity-90"}`}
                strokeWidth={1}
                strokeLinejoin="round"
              />
            ))}
            {BRAZIL_STATES.filter((s) => s.region === key).map((s) => (
              <text
                key={`${s.uf}-l`}
                x={s.cx}
                y={s.cy}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={s.uf === "DF" ? 6 : 9}
                className="pointer-events-none fill-foreground/60 font-semibold"
              >
                {["DF", "SE", "AL", "PB", "RN", "ES", "RJ"].includes(s.uf) ? "" : s.uf}
              </text>
            ))}
          </a>
        );
      })}
      {keys.map((key) => (
        <text
          key={`${key}-name`}
          x={LABEL_POS[key][0]}
          y={LABEL_POS[key][1]}
          textAnchor="middle"
          fontSize={18}
          fontWeight={800}
          className="pointer-events-none fill-foreground"
          paintOrder="stroke"
          stroke="var(--card)"
          strokeWidth={4}
        >
          {REGION_STYLE[key].name}
        </text>
      ))}
    </svg>
  );
}
