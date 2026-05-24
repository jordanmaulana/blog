import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  return rss({
    title: "Jordan Maulana — Tulisan",
    description: "Catatan dari bengkel kerja. Flutter, Django, produk indie, dan hal berantakan di antaranya.",
    site: context.site!,
    items: sorted.map((post) => {
      const slug = post.id.replace(/\.mdx?$/, "");
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/id/blog/${slug}`,
        categories: post.data.tags,
      };
    }),
  });
}
