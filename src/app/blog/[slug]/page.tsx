import React from "react";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MidPostCTA from "@/components/MidPostCTA";
import { 
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ChevronRight
} from "lucide-react";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);
  
  if (!post) return {};

  const { metadata } = post;
  const url = `https://firstmiledev.com/blog/${resolvedParams.slug}`;

  return {
    title: `${metadata.title} | FirstMileDev Blog`,
    description: metadata.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: url,
      type: "article",
      images: [
        {
          url: metadata.image,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [metadata.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const { mdxContent, metadata } = post;

  return (
    <main id="main-content" className="bg-white">
      {/* Article Hero */}
      <section className="bg-accent-red text-white px-6 py-16 md:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white mb-12 transition-colors group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
          </Link>
          
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <span className="bg-white text-accent-red px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              {metadata.category}
            </span>
            <div className="flex items-center gap-4 text-white/80 text-xs font-bold uppercase tracking-[0.15em]">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-white/60" />
                <span>{new Date(metadata.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-white/60" />
                <span>{metadata.readTime}</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline uppercase mb-10 leading-[0.9] tracking-tighter">
            {metadata.title}
          </h1>
          
          <div className="flex items-center gap-4 py-6 border-t border-white/10">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20 border-2 border-white flex-shrink-0">
              <Image 
                src="https://placehold.co/100x100/333/fff?text=AM" 
                alt="Anselme Motcho" 
                width={48} 
                height={48} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-widest">Anselme Motcho</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Principal & Lead Dev</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <div className="max-w-5xl mx-auto px-6 -mt-16 md:-mt-24 relative z-20">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] border-8 border-white">
          <Image 
            src={metadata.image} 
            alt={metadata.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none 
          prose-headings:font-headline prose-headings:uppercase prose-headings:text-gray-900 prose-headings:tracking-tight
          prose-h2:text-3xl md:prose-h2:text-5xl prose-h2:mt-20 prose-h2:mb-10 prose-h2:pb-6 prose-h2:border-b-4 prose-h2:border-gray-900
          prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-gray-800
          prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-10 prose-p:text-[1.15rem]
          prose-li:text-gray-600 prose-li:mb-4 prose-li:text-[1.15rem]
          prose-strong:text-gray-900 prose-strong:font-black
          prose-a:text-accent-red prose-a:no-underline hover:prose-a:underline prose-a:font-black prose-a:decoration-2
          prose-blockquote:border-l-[12px] prose-blockquote:border-accent-red prose-blockquote:bg-gray-50 prose-blockquote:py-12 prose-blockquote:px-12 prose-blockquote:rounded-r-3xl prose-blockquote:not-italic prose-blockquote:text-gray-900 prose-blockquote:font-medium prose-blockquote:text-2xl md:prose-blockquote:text-3xl prose-blockquote:my-16 prose-blockquote:shadow-sm
          prose-table:w-full prose-table:text-left prose-table:border-collapse prose-table:my-16 prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-lg
          prose-th:py-5 prose-th:px-8 prose-th:bg-gray-900 prose-th:text-white prose-th:font-headline prose-th:uppercase prose-th:text-xs prose-th:tracking-[0.2em] prose-th:border-none
          prose-td:py-5 prose-td:px-8 prose-td:border-b prose-td:border-gray-100 prose-td:text-gray-700 prose-td:text-base prose-td:font-medium
          prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-16
          marker:prose-li:text-accent-red marker:prose-li:font-black marker:prose-li:text-xl
        ">
          {mdxContent}
        </div>

        {/* High-Impact Breakout CTA */}
        <div className="my-20">
          <MidPostCTA 
            title="Stop Guessing. Start Validating."
            description="We've helped 50+ founders avoid $30,000 mistakes by testing demand before writing a single line of code. Ready for your roadmap?"
            buttonText="Build My Roadmap"
            buttonHref="/#contact"
          />
        </div>

        {/* Related Articles Section */}
        <section className="border-t border-gray-200 pt-20 mt-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-3xl font-headline uppercase text-gray-900">Keep Learning</h3>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-2">More from the FirstMileDev Lab</p>
            </div>
            <Link href="/blog" className="text-accent-red font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-3 transition-all">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {metadata.slug !== "why-startups-fail" && (
              <Link href="/blog/why-startups-fail" className="group block">
                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-6 relative shadow-md">
                  <Image src="/images/Handpicked-Reasons-Why-90-Startups-Fail-.jpg" alt="Why 90% fail" fill className="object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <h4 className="font-headline text-xl uppercase group-hover:text-accent-red transition-colors leading-tight mb-2">Why 90% of Startups Fail</h4>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 italic">Validation-first development prevents your startup from becoming another statistic.</p>
              </Link>
            )}
            {metadata.slug !== "no-code-vs-custom" && (
              <Link href="/blog/no-code-vs-custom" className="group block">
                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-6 relative shadow-md">
                  <Image src="/images/MVPInfluence.jpg" alt="No-code vs Custom" fill className="object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <h4 className="font-headline text-xl uppercase group-hover:text-accent-red transition-colors leading-tight mb-2">No-Code vs Custom Development</h4>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 italic">One decision will shape your startup's future. Learn when to move fast.</p>
              </Link>
            )}
            {metadata.slug !== "true-cost-mvp" && (
              <Link href="/blog/true-cost-mvp" className="group block">
                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-6 relative shadow-md">
                  <Image src="/images/Why-Building-an-MVP-Matters-for-Startups.jpg" alt="True cost" fill className="object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <h4 className="font-headline text-xl uppercase group-hover:text-accent-red transition-colors leading-tight mb-2">The True Cost of an MVP</h4>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 italic">A complete breakdown of MVP development costs and budgeting strategy.</p>
              </Link>
            )}
          </div>
        </section>

        {/* Final Page CTA */}
        <section className="mt-32 py-20 bg-carbon-900 text-white rounded-[2rem] text-center px-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="bg-accent-red text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-8 inline-block shadow-xl">
              Ready to Scale?
            </span>
            <h2 className="text-4xl md:text-6xl font-headline uppercase mb-8 leading-[0.95] tracking-tight">
              Build Your <br /><span className="text-accent-red">First Mile.</span>
            </h2>
            <p className="text-xl opacity-70 mb-12 font-medium leading-relaxed">
              Don't leave your success to chance. Let our validation experts help you find product-market fit faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/#contact" className="btn btn-primary btn-lg px-12 group">
                Book Roadmap Call <ArrowLeft className="ml-2 w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/calculator" className="btn btn-outline-white btn-lg px-12">
                Cost Calculator
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
