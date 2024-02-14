import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { TITLE, SITE_DESCRIPTION, SITE_URL } from "../config";

export async function GET() {
  const posts = await getCollection("blog");
  return rss({
    title: TITLE,
    description: SITE_DESCRIPTION,
    site: SITE_URL,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
