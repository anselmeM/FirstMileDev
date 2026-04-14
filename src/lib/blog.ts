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
  return postsData.map(post => ({
    ...post,
    slug: post.link.replace("blog-", "").replace(".html", ""),
    id: post.link.replace(".html", "")
  }));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug);
}
