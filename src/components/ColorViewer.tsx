import { useEffect, useState } from "react";

type Labels = { window: string; screen: string; exit: string };

export default function ColorViewer({ labels }: { labels: Labels }) {
  const [color, setColor] = useState("#ffffff");
  const [on, setOn] = useState(false);

  const close = () => {
    setOn(false);
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  };

  // Fullscreen <html> rather than the overlay: the overlay doesn't exist yet
  // at click time, and requestFullscreen must run inside the user gesture.
  // No Fullscreen API (iPhone Safari) → falls back to full window.
  const fullScreen = () => {
    setOn(true);
    document.documentElement.requestFullscreen?.().catch(() => {});
  };

  useEffect(() => {
    if (!on) return;
    // Hide the page scrollbar so the color reaches every edge.
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    // The browser eats Esc to leave fullscreen, so watch the exit instead.
    const onFs = () => !document.fullscreenElement && setOn(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("fullscreenchange", onFs);
    return () => {
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("fullscreenchange", onFs);
    };
  }, [on]);

  return (
    <div className="space-y-4">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="h-40 w-full cursor-pointer rounded-(--radius-card) border border-border bg-bg-soft/40 p-2 [&::-moz-color-swatch]:rounded-lg [&::-moz-color-swatch]:border-0 [&::-webkit-color-swatch]:rounded-lg [&::-webkit-color-swatch]:border-0 [&::-webkit-color-swatch-wrapper]:p-0"
      />
      <p className="font-mono text-sm text-fg-soft">{color.toUpperCase()}</p>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setOn(true)}
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-fg transition hover:opacity-90"
        >
          {labels.window}
        </button>
        <button
          type="button"
          onClick={fullScreen}
          className="rounded-full border border-border px-5 py-2 text-sm font-medium text-fg transition hover:border-accent"
        >
          {labels.screen}
        </button>
      </div>
      <p className="text-sm text-fg-soft">{labels.exit}</p>
      {on && (
        <button
          type="button"
          aria-label={labels.exit}
          title={labels.exit}
          onClick={close}
          className="fixed inset-0 z-[100]"
          style={{ background: color }}
        />
      )}
    </div>
  );
}
