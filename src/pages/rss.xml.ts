import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  return rss({
    title: "Jordan Maulana — Writing",
    description: "Notes from the workbench. Flutter, Django, indie products, and the messy bits in between.",
    site: context.site!,
    items: sorted.map((post) => {
      const slug = post.id.replace(/\.mdx?$/, "");
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${slug}`,
        categories: post.data.tags,
      };
    }),
  });
}
