import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import ogs from "open-graph-scraper";

const CACHE_DIR = path.resolve(process.cwd(), "public/og-cache");
const PUBLIC_PREFIX = "/og-cache";

const USER_AGENT = "Twitterbot/1.0";

const inFlight = new Map<string, Promise<string | null>>();

function hashUrl(url: string): string {
  return crypto.createHash("sha1").update(url).digest("hex").slice(0, 16);
}

function extFromContentType(ct: string | null): string {
  if (!ct) return "img";
  if (ct.includes("jpeg") || ct.includes("jpg")) return "jpg";
  if (ct.includes("png")) return "png";
  if (ct.includes("webp")) return "webp";
  if (ct.includes("gif")) return "gif";
  if (ct.includes("avif")) return "avif";
  if (ct.includes("svg")) return "svg";
  return "img";
}

async function findCached(hash: string): Promise<string | null> {
  try {
    const files = await fs.readdir(CACHE_DIR);
    const match = files.find((f) => f.startsWith(`${hash}.`));
    return match ? `${PUBLIC_PREFIX}/${match}` : null;
  } catch {
    return null;
  }
}

async function downloadImage(imageUrl: string, hash: string): Promise<string | null> {
  try {
    const res = await fetch(imageUrl, {
      headers: { "User-Agent": USER_AGENT },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return null;
    const ct = res.headers.get("content-type");
    if (ct && !ct.startsWith("image/")) return null;
    const ext = extFromContentType(ct);
    const filename = `${hash}.${ext}`;
    const filepath = path.join(CACHE_DIR, filename);
    await fs.mkdir(CACHE_DIR, { recursive: true });
    const buf = Buffer.from(await res.arrayBuffer());
    await fs.writeFile(filepath, buf);
    return `${PUBLIC_PREFIX}/${filename}`;
  } catch {
    return null;
  }
}

export async function getOgImage(url: string): Promise<string | null> {
  const hash = hashUrl(url);

  const cached = await findCached(hash);
  if (cached) return cached;

  const existing = inFlight.get(hash);
  if (existing) return existing;

  const task = (async () => {
    try {
      const { result, error } = await ogs({
        url,
        fetchOptions: {
          headers: { "User-Agent": USER_AGENT },
        },
        timeout: 15000,
      });
      if (error || !result.ogImage || result.ogImage.length === 0) return null;
      const imageUrl = result.ogImage[0]?.url;
      if (!imageUrl) return null;
      const absolute = new URL(imageUrl, url).toString();
      return await downloadImage(absolute, hash);
    } catch {
      return null;
    } finally {
      inFlight.delete(hash);
    }
  })();

  inFlight.set(hash, task);
  return task;
}
