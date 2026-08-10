import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function readInitial(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export default function ThemeToggle({ label }: { label: string }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(readInitial());
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore quota / privacy mode
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-soft text-fg transition hover:scale-105 hover:border-accent"
    >
      <span aria-hidden="true" className="text-sm">
        {theme === "dark" ? "☀" : "☾"}
      </span>
    </button>
  );
}
