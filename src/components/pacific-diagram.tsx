import { useState } from "react";

type Phase = "neutro" | "nino";

/**
 * Diagrama esquemático do Pacífico tropical (corte leste–oeste):
 * à esquerda a Ásia/Indonésia, à direita a América do Sul.
 * Alterna entre condições neutras e El Niño.
 */
export function PacificDiagram({ compact = false }: { compact?: boolean }) {
  const [phase, setPhase] = useState<Phase>("nino");

  const isNino = phase === "nino";

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">
      <div className="flex items-center justify-between gap-3 border-b border-border bg-secondary/60 px-4 py-3 sm:px-6">
        <p className="font-display text-sm font-bold sm:text-base">
          Corte do Oceano Pacífico tropical
        </p>
        <div className="flex rounded-full border border-border bg-card p-0.5 text-xs font-semibold sm:text-sm">
          <button
            type="button"
            onClick={() => setPhase("neutro")}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              !isNino ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Condições neutras
          </button>
          <button
            type="button"
            onClick={() => setPhase("nino")}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              isNino ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            El Niño
          </button>
        </div>
      </div>

      <svg
        viewBox="0 0 640 300"
        className="block w-full"
        role="img"
        aria-label={
          isNino
            ? "Diagrama do Pacífico em El Niño: ventos alísios enfraquecidos, água quente espalhada para o leste e termoclina afundada perto da América do Sul"
            : "Diagrama do Pacífico em condições neutras: ventos alísios empurram a água quente para o oeste e a ressurgência sobe água fria perto da América do Sul"
        }
      >
        <defs>
          <linearGradient id="diagram-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.97 0.02 230)" />
            <stop offset="100%" stopColor="oklch(0.93 0.045 220)" />
          </linearGradient>
          <linearGradient id="diagram-surface" x1="0" y1="0" x2="1" y2="0">
            {isNino ? (
              <>
                <stop offset="0%" stopColor="oklch(0.8 0.075 205)" />
                <stop offset="35%" stopColor="oklch(0.83 0.08 150)" />
                <stop offset="65%" stopColor="oklch(0.86 0.12 55)" />
                <stop offset="100%" stopColor="oklch(0.88 0.14 48)" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="oklch(0.86 0.13 55)" />
                <stop offset="55%" stopColor="oklch(0.8 0.1 190)" />
                <stop offset="100%" stopColor="oklch(0.78 0.11 202)" />
              </>
            )}
          </linearGradient>
          <linearGradient id="diagram-deep" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.12 250)" />
            <stop offset="100%" stopColor="oklch(0.38 0.1 254)" />
          </linearGradient>
          <marker id="diagram-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="oklch(0.4 0.09 252)" />
          </marker>
          <marker id="diagram-arrow-cold" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 1 L 9 5 L 0 9 z" fill="oklch(0.5 0.13 245)" />
          </marker>
        </defs>

        {/* céu */}
        <rect x="0" y="0" width="640" height="120" fill="url(#diagram-sky)" />
        <circle cx="560" cy="34" r="20" fill="oklch(0.86 0.14 80)" opacity="0.9" />

        {/* nuvens: concentradas a oeste no neutro, deslocadas para leste no El Niño */}
        <g fill="oklch(0.98 0.005 230)" opacity={isNino ? 0.95 : 0.98}>
          <g transform={isNino ? "translate(150 0)" : "translate(0 0)"}>
            <ellipse cx="150" cy="52" rx="52" ry="14" />
            <ellipse cx="118" cy="44" rx="30" ry="11" />
            <ellipse cx="182" cy="44" rx="28" ry="10" />
            <ellipse cx="168" cy="82" rx="40" ry="10" opacity="0.75" />
          </g>
          {isNino && (
            <g transform="translate(-40 14)" opacity="0.85">
              <ellipse cx="150" cy="52" rx="48" ry="13" />
              <ellipse cx="120" cy="44" rx="28" ry="10" />
              <ellipse cx="178" cy="45" rx="26" ry="9" />
            </g>
          )}
        </g>

        {/* continentes */}
        <path d="M 0 120 L 58 96 L 86 110 L 96 132 L 96 300 L 0 300 Z" fill="oklch(0.72 0.1 105)" />
        <path d="M 640 120 L 596 104 L 570 116 L 556 138 L 548 168 L 552 300 L 640 300 Z" fill="oklch(0.72 0.1 105)" />
        <text x="48" y="88" textAnchor="end" fontSize="13" fontWeight="700" fill="oklch(0.35 0.08 140)">
          Ásia / Indonésia
        </text>
        <text x="586" y="94" textAnchor="start" fontSize="13" fontWeight="700" fill="oklch(0.35 0.08 140)">
          América do Sul
        </text>

        {/* oceano profundo */}
        <rect x="96" y="120" width="460" height="180" fill="url(#diagram-deep)" />
        {/* camada de água quente (superfície) */}
        <path
          d={
            isNino
              ? "M 96 120 L 556 120 L 556 214 C 480 224 300 210 180 186 C 130 176 108 160 96 152 Z"
              : "M 96 120 L 556 120 L 556 138 C 500 146 420 158 320 176 C 230 192 150 176 96 156 Z"
          }
          fill="url(#diagram-surface)"
        />
        {/* termoclina (tracejada) */}
        <path
          d={isNino ? "M 96 154 L 556 216" : "M 96 158 L 556 140"}
          fill="none"
          stroke="oklch(0.95 0.02 230)"
          strokeWidth="2.5"
          strokeDasharray="7 6"
          opacity="0.9"
        />
        {/* bulbo quente */}
        {isNino ? (
          <>
            <ellipse cx="470" cy="168" rx="120" ry="52" fill="oklch(0.84 0.12 55)" opacity="0.55" />
            <ellipse cx="380" cy="176" rx="90" ry="40" fill="oklch(0.86 0.12 60)" opacity="0.35" />
          </>
        ) : (
          <ellipse cx="170" cy="148" rx="110" ry="40" fill="oklch(0.86 0.13 55)" opacity="0.6" />
        )}

        {/* ventos alísios */}
        {!isNino ? (
          <>
            <g stroke="oklch(0.4 0.09 252)" strokeWidth="3" markerEnd="url(#diagram-arrow)">
              <line x1="210" y1="62" x2="290" y2="62" />
              <line x1="250" y1="86" x2="330" y2="86" />
              <line x1="300" y1="108" x2="380" y2="108" />
            </g>
            <text x="300" y="34" textAnchor="middle" fontSize="13" fontWeight="700" fill="oklch(0.34 0.09 252)">
              Ventos alísios fortes →
            </text>
          </>
        ) : (
          <>
            <g stroke="oklch(0.4 0.09 252)" strokeWidth="3" strokeDasharray="6 5" opacity="0.55" markerEnd="url(#diagram-arrow)">
              <line x1="290" y1="62" x2="240" y2="62" />
              <line x1="330" y1="86" x2="280" y2="86" />
            </g>
            <text x="300" y="34" textAnchor="middle" fontSize="13" fontWeight="700" fill="oklch(0.34 0.09 252)">
              Alísios enfraquecidos ←
            </text>
          </>
        )}

        {/* ressurgência (upwelling) perto da América do Sul */}
        {isNino ? (
          <g opacity="0.35">
            <line x1="540" y1="270" x2="540" y2="200" stroke="oklch(0.9 0.03 230)" strokeWidth="2.5" strokeDasharray="4 5" markerEnd="url(#diagram-arrow-cold)" />
            <text x="556" y="262" textAnchor="end" fontSize="11" fill="oklch(0.95 0.02 230)" opacity="0.8">
              ressurgência fraca
            </text>
          </g>
        ) : (
          <g>
            <line x1="540" y1="272" x2="540" y2="196" stroke="oklch(0.85 0.06 210)" strokeWidth="3.5" markerEnd="url(#diagram-arrow-cold)" />
            <text x="552" y="262" fontSize="11" fontWeight="600" fill="oklch(0.95 0.02 230)">
              água fria sobe
            </text>
          </g>
        )}

        {/* rótulos */}
        <text x={isNino ? 470 : 170} y={isNino ? 152 : 132} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="oklch(0.3 0.08 50)">
          {isNino ? "água quente se espalha para o leste" : "poça de água quente (oeste)"}
        </text>
        <text
          x={isNino ? 250 : 470}
          y={isNino ? 208 : 130}
          textAnchor="middle"
          fontSize="11.5"
          fill="oklch(0.96 0.01 230)"
          fontWeight="600"
        >
          termoclina {isNino ? "afundada" : "rasa"}
        </text>

        <text x="324" y="292" textAnchor="middle" fontSize="11" fill="oklch(0.9 0.03 225)" opacity="0.75">
          superfície do mar • escala vertical esquemática (sem proporção real)
        </text>
      </svg>

      <div className="border-t border-border bg-foam/60 px-4 py-4 sm:px-6">
        <p className="text-sm leading-relaxed text-foreground/90">
          {isNino ? (
            <>
              <strong>No El Niño</strong>, os ventos alísios enfraquecem, a poça
              de água quente "escorrega" para o leste do Pacífico, as nuvens e
              as chuvas acompanham o deslocamento e a água fria para de subir
              perto da América do Sul.
            </>
          ) : (
            <>
              <strong>Em condições neutras</strong>, os alísios empurram a água
              quente para o oeste, as chuvas se concentram sobre a Indonésia e
              a ressurgência (surgência) traz nutrientes e água fria para a
              superfície perto do Peru.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
