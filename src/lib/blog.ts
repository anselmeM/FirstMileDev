export interface BlogPost {
  id: string;
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  readTime: string;
  link: string; // The original .html link
  slug: string; // The new Next.js slug
}

import postsData from "../../blog-posts.json";

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = postsData.map(post => {
    const slug = post.link.replace("blog-", "").replace(".html", "");
    console.log(`[Blog Debug] Generated slug: ${slug} from ${post.link}`);
    return {
      ...post,
      slug,
      id: post.link.replace(".html", "")
    };
  });
  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug);
}
