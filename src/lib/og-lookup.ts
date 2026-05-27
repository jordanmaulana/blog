import type { ImageMetadata } from "astro";
import { hashUrl } from "./og-image.ts";

const ogImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/og-cache/*.{jpg,png,webp,gif,avif,svg,img}",
  { eager: true },
);

export function getOgImageMetadata(url: string): ImageMetadata | null {
  const hash = hashUrl(url);
  const match = Object.entries(ogImages).find(([key]) => key.includes(hash));
  return match ? match[1].default : null;
}
