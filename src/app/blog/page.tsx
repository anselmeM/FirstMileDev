import React from "react";
import { getBlogPosts } from "@/lib/blog";
import BlogGrid from "./BlogGrid";
import Link from "next/link";
import { PenLine } from "lucide-react";

export const metadata = {
  title: "Blog - Startup Validation & Development Insights | FirstMileDev",
  description: "Read the latest insights on MVP development, startup validation, No-Code vs Custom development, and building successful products.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main id="main-content" role="main">
      {/* Page Header */}
      <section className="bg-accent-red text-white px-6 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6">
            <Link href="/" className="text-white/80 hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase font-headline">
            Latest Insights
          </h1>
          <p className="text-lg text-white/80 mt-4 max-w-2xl">
            Startup validation tips, MVP development guides, and
            build-measure-learn strategies for founders.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid Section */}
      <section className="px-6 md:px-8 lg:px-16 py-16 md:py-20 bg-[#FAFAFA]">
        <BlogGrid posts={posts} />

        {/* More Posts Coming Soon */}
        <div className="text-center mt-16 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-card border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PenLine className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-headline text-xl uppercase mb-2">
              More Insights Coming Soon
            </h3>
            <p className="text-gray-500 mb-6">
              We're working on new articles about startup growth, technical
              architecture, and market validation strategies.
            </p>
            <Link href="/#contact" className="btn btn-primary">
              Get Notified of New Posts
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-8 lg:px-16 py-16 bg-[#1f2937] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl uppercase font-headline mb-4">
            Ready to Validate Your Idea?
          </h2>
          <p className="text-gray-400 mb-8">
            Book a discovery call and let's see if your startup is ready for the
            First Mile.
          </p>
          <Link href="/#contact" className="btn btn-primary btn-lg">
            Book Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
