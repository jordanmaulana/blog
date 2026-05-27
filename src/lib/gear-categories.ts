import type { CollectionEntry } from "astro:content";

export function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getUniqueCategories(
  gears: CollectionEntry<"gears">[],
): string[] {
  const set = new Set<string>();
  for (const g of gears) set.add(g.data.category);
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
