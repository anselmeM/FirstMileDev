import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
}

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const files = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(".mdx", "");
        const filePath = path.join(postsDirectory, file);
        const content = await fs.readFile(filePath, "utf8");

        // Parse frontmatter manually (simple approach)
        const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
        if (frontmatterMatch) {
          const frontmatter: Record<string, string> = {};
          frontmatterMatch[1].split("\n").forEach((line) => {
            const [key, ...valueParts] = line.split(": ");
            if (key && valueParts.length > 0) {
              frontmatter[key.trim()] = valueParts.join(": ").trim().replace(/^["']|["']$/g, "");
            }
          });
          return {
            slug,
            title: frontmatter.title || "Untitled",
            date: frontmatter.date || "",
            excerpt: frontmatter.excerpt || "",
            category: frontmatter.category || "",
            readTime: frontmatter.readTime || "5 min read",
          };
        }
        return {
          slug,
          title: "Untitled",
          date: "",
          excerpt: "",
          category: "",
          readTime: "5 min read",
        };
      })
  );

  // Sort by date descending
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on MVP development, startup validation, and building products that actually matter.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#FF3B3F] text-white px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline uppercase mb-6">
            Blog
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            Insights on MVP development, startup validation, and building
            products that actually matter.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#FF3B3F]/10 text-[#FF3B3F] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-headline uppercase mb-4 text-gray-900">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#FF3B3F] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time className="text-gray-400 text-sm">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#FF3B3F] font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
