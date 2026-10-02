import { useEffect, useState } from "react";
import { platforms } from "~/data/post-times";
import type { Lang } from "~/i18n/ui";

type Labels = {
  next: string;
  now: string;
  none: string;
  note: string;
  sources: string;
};

export default function PostTime({
  lang,
  labels,
}: {
  lang: Lang;
  labels: Labels;
}) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const fmt = new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const time = (h: number) => fmt.format(new Date(2000, 0, 1, h));
  const day = now.getDay();
  const hour = now.getHours();

  return (
    <div className="space-y-6">
      {platforms.map((p) => {
        const votes = new Map<number, string[]>();
        for (const s of p.studies)
          for (const h of s.hours[day])
            votes.set(h, [...(votes.get(h) ?? []), s.name]);
        // Most votes first, earlier hour on ties — so the first slot not yet
        // past is the next best one.
        const slots = [...votes].sort(
          (a, b) => b[1].length - a[1].length || a[0] - b[0],
        );
        const next = slots.find(([h]) => h >= hour)?.[0];

        return (
          <section
            key={p.name}
            className="space-y-4 rounded-(--radius-card) border border-border bg-bg-soft/40 p-6"
          >
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold tracking-tight">{p.name}</h2>
              <p className="text-sm text-fg-soft">
                {next === undefined ? (
                  labels.none
                ) : (
                  <>
                    {labels.next}:{" "}
                    <span className="font-mono text-accent">
                      {time(next)}
                      {next === hour && ` · ${labels.now}`}
                    </span>
                  </>
                )}
              </p>
            </header>
            <ul className="grid gap-2 sm:grid-cols-2">
              {slots.map(([h, by]) => (
                <li
                  key={h}
                  className={`flex items-baseline justify-between gap-3 rounded-lg border px-3 py-2 ${
                    h === next ? "border-accent" : "border-border"
                  } ${h < hour ? "opacity-50" : ""}`}
                >
                  <span className={`font-mono ${h < hour ? "line-through" : ""}`}>
                    {time(h)}
                  </span>
                  <span className="text-right text-xs text-fg-soft">
                    {by.length}/{p.studies.length} · {by.join(", ")}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <footer className="space-y-3 text-sm text-fg-soft">
        <p>{labels.note}</p>
        <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {labels.sources}
        </h2>
        <ul className="space-y-1">
          {platforms.map((p) => (
            <li key={p.name}>
              <span className="text-fg">{p.name}:</span>{" "}
              {p.studies.map((s, i) => (
                <span key={s.name}>
                  {i > 0 && " · "}
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener"
                    className="underline hover:text-accent"
                  >
                    {s.name}
                  </a>{" "}
                  ({s.detail})
                </span>
              ))}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
