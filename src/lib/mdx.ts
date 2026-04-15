import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "src/content/blog");

export interface BlogMetadata {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
  slug: string;
}

export async function getAllBlogPosts(): Promise<BlogMetadata[]> {
  const files = fs.readdirSync(BLOG_CONTENT_PATH);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(BLOG_CONTENT_PATH, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        ...data,
        slug: file.replace(".mdx", ""),
      } as BlogMetadata;
    });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPostBySlug(slug: string) {
  const filePath = path.join(BLOG_CONTENT_PATH, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return {
    mdxContent,
    metadata: {
      ...data,
      slug,
    } as BlogMetadata,
  };
}
