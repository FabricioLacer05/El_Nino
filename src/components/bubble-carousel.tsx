import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";

type Bubble = {
  icon?: React.ComponentType<{ className?: string }>;
  kicker?: string;
  title: string;
  text: string;
  formula?: string;
};

/**
 * Trilha horizontal de balões de fala (speech bubbles) com scroll-snap,
 * arraste por mouse/touch e botões de avançar/voltar.
 */
export function BubbleCarousel({
  bubbles,
  label,
}: {
  bubbles: readonly Bubble[];
  label: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });
  const [grabbing, setGrabbing] = useState(false);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-bubble]");
    const step = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || e.pointerType === "touch") return; // touch já rola nativamente
    drag.current = {
      down: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
    setGrabbing(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = () => {
    drag.current.down = false;
    setGrabbing(false);
  };

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <MoveHorizontal className="size-4 text-primary" aria-hidden />
          Arraste para o lado
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Balão anterior"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Próximo balão"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
          >
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-label={label}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className={`flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-6 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          grabbing ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {bubbles.map((b) => (
          <figure
            key={b.title}
            data-bubble
            className="relative w-[280px] shrink-0 snap-start sm:w-[320px]"
          >
            {/* balão */}
            <div className="relative rounded-[2rem] rounded-bl-md border border-border bg-card p-6 shadow-sm">
              {b.icon ? (
                <span className="flex size-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <b.icon className="size-5" aria-hidden />
                </span>
              ) : null}
              {b.kicker ? (
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-primary">
                  {b.kicker}
                </p>
              ) : null}
              {b.formula ? (
                <p className="mt-2 font-mono text-sm font-bold text-primary">
                  {b.formula}
                </p>
              ) : null}
              <h3 className="mt-2 font-display text-base font-bold">
                {b.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {b.text}
              </p>
              {/* rabicho do balão */}
              <span
                aria-hidden
                className="absolute -bottom-3 left-8 size-6 rotate-45 border-b border-r border-border bg-card"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
