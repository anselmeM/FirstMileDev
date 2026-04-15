import React from "react";
import { getAllBlogPosts } from "@/lib/mdx";
import BlogGrid from "./BlogGrid";
import Link from "next/link";
import { PenLine, ArrowLeft, Sparkles } from "lucide-react";

export const metadata = {
  title: "Blog - Startup Validation & Development Insights | FirstMileDev",
  description: "Read the latest insights on MVP development, startup validation, No-Code vs Custom development, and building successful products.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <main id="main-content" className="bg-white">
      {/* Page Header */}
      <section className="bg-accent-red text-white px-6 md:px-8 lg:px-16 py-20 md:py-32 relative overflow-hidden flex flex-col justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <nav className="text-xs font-black uppercase tracking-[0.3em] mb-10 flex items-center justify-center gap-3 text-white/60">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="w-1 h-1 bg-white/30 rounded-full"></span>
            <span className="text-white">Insights</span>
          </nav>
          
          <h1 className="text-5xl md:text-8xl font-headline uppercase mb-8 leading-[0.9] tracking-tighter">
            Latest <br /><span className="text-black">Insights</span>
          </h1>
          
          <p className="text-lg md:text-xl font-bold uppercase mt-4 max-w-2xl mx-auto leading-relaxed text-white opacity-90 tracking-wide">
            Tactical guides on startup validation, MVP development, and
            growth strategies for modern founders.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid Section */}
      <section className="px-6 md:px-8 lg:px-16 py-20 md:py-32 bg-gray-50">
        <BlogGrid posts={posts} />

        {/* More Posts Coming Soon */}
        <div className="text-center mt-24 max-w-4xl mx-auto">
          <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-accent-red">
              <PenLine size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
                <PenLine className="w-8 h-8 text-accent-red" />
              </div>
              <h3 className="font-headline text-2xl md:text-3xl uppercase mb-4 text-gray-900">
                More Insights <br />Coming Soon
              </h3>
              <p className="text-gray-500 mb-10 text-lg max-w-md mx-auto leading-relaxed">
                We're currently documenting new patterns in AI automation, PERN stack scaling, and market psychology.
              </p>
              <Link href="/#contact" className="btn btn-primary px-10">
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 md:py-40 bg-carbon-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-red rounded-3xl mb-10 -rotate-3 shadow-2xl">
            <Sparkles size={40} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-headline uppercase mb-8 leading-[0.95]">
            Ready to <br /><span className="text-accent-red">Validate?</span>
          </h2>
          <p className="text-xl opacity-60 mb-12 max-w-xl mx-auto leading-relaxed font-medium">
            Don't build in the dark. Let's run a 14-day validation sprint and see if your idea has real legs.
          </p>
          <Link href="/#contact" className="btn btn-primary btn-lg px-12">
            Book Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
