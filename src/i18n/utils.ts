import { defaultLang, locales, ui, type Lang, type TranslationKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  if ((locales as readonly string[]).includes(maybeLang)) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return clean === "/" ? "/" : clean;
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "id" : "en";
}

export function switchLangPath(url: URL, target: Lang): string {
  const segments = url.pathname.split("/").filter(Boolean);
  const first = segments[0];
  const rest =
    first && (locales as readonly string[]).includes(first)
      ? segments.slice(1)
      : segments;
  const base = rest.join("/");
  if (target === defaultLang) return base ? `/${base}` : "/";
  return base ? `/${target}/${base}` : `/${target}`;
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}
