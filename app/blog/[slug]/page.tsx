import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
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
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

async function getPost(slug: string): Promise<{
  content: string;
  frontmatter: PostFrontmatter;
} | null> {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    const content = await fs.readFile(filePath, "utf8");

    // Parse frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter: Record<string, string> = {};
      frontmatterMatch[1].split("\n").forEach((line) => {
        const [key, ...valueParts] = line.split(": ");
        if (key && valueParts.length > 0) {
          frontmatter[key.trim()] = valueParts.join(": ").trim().replace(/^["']|["']$/g, "");
        }
      });

      // Remove frontmatter from content for reading time calculation
      const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, "");
      const readTime = calculateReadingTime(contentWithoutFrontmatter);

      return {
        content: contentWithoutFrontmatter,
        frontmatter: {
          title: frontmatter.title || "Untitled",
          date: frontmatter.date || "",
          excerpt: frontmatter.excerpt || "",
          category: frontmatter.category || "",
          readTime: frontmatter.readTime || readTime,
        },
      };
    }

    return {
      content,
      frontmatter: {
        title: "Untitled",
        date: "",
        excerpt: "",
        category: "",
        readTime: "5 min read",
      },
    };
  } catch {
    return null;
  }
}

async function getAllSlugs(): Promise<string[]> {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const files = await fs.readdir(postsDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-headline uppercase mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-[#FF3B3F] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Article Hero */}
      <section className="bg-[#FF3B3F] text-white px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              {post.frontmatter.category}
            </span>
            <span className="text-white/80 text-sm">{post.frontmatter.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline uppercase mb-6">
            {post.frontmatter.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            {post.frontmatter.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>

        {/* Back to Blog */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="text-[#FF3B3F] font-semibold hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
