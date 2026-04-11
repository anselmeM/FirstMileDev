import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";

interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).filter(Boolean).length;
  return `${Math.ceil(words / wordsPerMinute)} min read`;
}

async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  try {
    const content = await fs.readFile(filePath, "utf8");
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) return { content, frontmatter: { title: "Untitled", date: "", excerpt: "", category: "", readTime: "5 min read" } };
    const fm: Record<string, string> = {};
    fmMatch[1].split("\n").forEach((line) => {
      const [k, ...v] = line.split(": ");
      if (k && v.length) fm[k.trim()] = v.join(": ").trim().replace(/^["']|["']$/g, "");
    });
    const body = content.replace(/^---[\s\S]*?---\n/, "");
    return { content: body, frontmatter: { title: fm.title||"Untitled", date: fm.date||"", excerpt: fm.excerpt||"", category: fm.category||"", readTime: fm.readTime || calculateReadingTime(body) } };
  } catch { return null; }
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post?.frontmatter.title || "Post Not Found", description: post?.frontmatter.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return <div className="p-20 text-center"><h1 className="text-4xl font-headline">Post Not Found</h1><Link href="/blog" className="text-[#FF3B3F]">← Back</Link></div>;
  return (
    <div className="bg-white">
      <section className="bg-[#FF3B3F] text-white px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 mb-6">
            <span className="bg-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{post.frontmatter.category}</span>
            <span className="text-white/80 text-sm">{post.frontmatter.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline uppercase mb-6">{post.frontmatter.title}</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">{post.frontmatter.excerpt}</p>
        </div>
      </section>
      <article className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-[#FF3B3F] font-semibold hover:underline">← Back to Blog</Link>
        </div>
      </article>
    </div>
  );
}
