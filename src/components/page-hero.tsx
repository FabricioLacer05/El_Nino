import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  lead,
  children,
}: {
  kicker: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm font-bold tracking-widest text-primary uppercase">{kicker}</p>
        <h1 className="mt-2 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lead}
        </p>
        {children}
      </div>
    </section>
  );
}

export function Section({
  title,
  eyebrow,
  children,
  id,
  className,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-sm font-bold tracking-widest text-primary uppercase">{eyebrow}</p>
      )}
      <h2 className="mt-2 max-w-3xl font-display text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function Callout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-primary/30 bg-accent/40 p-6">
      <h3 className="font-display text-base font-bold text-accent-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-accent-foreground/90">{children}</p>
    </div>
  );
}
