export const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

export const formatCount = (n: number, lang: "en" | "id" = "en") =>
  new Intl.NumberFormat(lang === "id" ? "id-ID" : "en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);
