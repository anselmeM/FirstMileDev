import React from "react";
import { getBlogPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, XCircle, ArrowRight, AlertTriangle, Check } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main id="main-content">
      {/* Article Hero */}
      <section className="bg-accent-red text-white px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              {post.category}
            </span>
            <span className="text-white/80 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline uppercase mb-6">
            {post.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            {post.description}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        {params.slug === "why-startups-fail" && (
          <>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">Every year, millions of entrepreneurs launch startups with dreams of building the next billion-dollar company. Yet <strong>90% of them fail</strong>. The conventional wisdom says this is just the cost of entrepreneurship—that failure is inevitable, even necessary.</p>
              <p className="text-lg text-gray-600 leading-relaxed">But what if most startup failures aren't accidents? What if they're predictable—and preventable?</p>
            </div>
            
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-headline uppercase mb-6 text-gray-900">The Real Startup Failure Statistics</h2>
              <ul className="space-y-4 mb-8">
                {[
                  "90% of startups fail — CB Insights research shows the top reason is \"no market need\"",
                  "21.5% of startups fail in the first year, 30% in the first two years",
                  "74% of high-growth startups fail due to premature scaling",
                  "35% of startups cite \"team issues\" as a reason for failure"
                ].map((stat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-accent-red mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{stat}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-headline uppercase mb-6 text-gray-900">Pattern #1: Building Before Validating</h2>
              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-accent-red mb-6">
                <p className="text-lg text-gray-700 italic">"We spent 8 months building a product that nobody wanted. By the time we realized our target market didn't care, we had burned through $55,000 in savings." — SaaS Founder</p>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Founders assume their idea is unique, the problem is urgent, and customers will find them. Most of these assumptions are wrong.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-headline uppercase mb-6 text-gray-900">The Validation-First Alternative</h2>
              <div className="bg-gray-900 text-white p-8 rounded-xl mb-8">
                <h3 className="font-headline text-2xl uppercase mb-4">The Three-Phase Approach</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-accent-red font-bold text-xl mb-2">Phase 1: Validate</div>
                    <p className="text-gray-400 text-sm mt-2">Landing page + ad campaign to test real demand before writing code.</p>
                  </div>
                  <div>
                    <div className="text-accent-red font-bold text-xl mb-2">Phase 2: Build</div>
                    <p className="text-gray-400 text-sm mt-2">MVP development with validated features based on real user data.</p>
                  </div>
                  <div>
                    <div className="text-accent-red font-bold text-xl mb-2">Phase 3: Scale</div>
                    <p className="text-gray-400 text-sm mt-2">Full-scale development when you've proven demand and secured funding.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {params.slug === "no-code-vs-custom" && (
          <>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">Should I build with no-code tools like Bubble and FlutterFlow, or invest in custom development with MERN, React, or Python?</p>
              <p className="text-lg text-gray-600 leading-relaxed">The wrong choice can cost you months of time and tens of thousands of dollars. The right choice depends on your specific situation.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-headline uppercase mb-4 text-blue-800">No-Code / Low-Code</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Bubble</strong> - Web apps</li>
                  <li>• <strong>FlutterFlow</strong> - Mobile apps</li>
                  <li>• <strong>Wized + Xano</strong> - Backend + frontend</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-headline uppercase mb-4 text-purple-800">Custom Development</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>MERN Stack</strong> - MongoDB, Express, React, Node</li>
                  <li>• <strong>Next.js</strong> - React framework</li>
                  <li>• <strong>Python/Django</strong> - Backend</li>
                </ul>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-headline uppercase mb-6 text-gray-900">When to Choose No-Code</h2>
              <div className="space-y-6">
                {[
                  { title: "You're in the Validation Phase", desc: "Test demand in days, not months." },
                  { title: "Your Feature Needs Are Standard", desc: "Auth, forms, dashboards, and payments are ready-made." },
                  { title: "Budget Under $15,000", desc: "No-code is significantly more affordable for early stages." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg"><Check className="w-6 h-6 text-green-600" /></div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {params.slug === "true-cost-mvp" && (
          <>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">MVP costs range from <strong>$2,000 to $150,000+</strong> depending on your approach, features, and team.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { price: "$2,000", phase: "Phase 1: Validation", color: "bg-green-50 border-green-200 text-green-600" },
                { price: "$5,000", phase: "Phase 2: MVP Build", color: "bg-blue-50 border-blue-200 text-blue-600" },
                { price: "Custom", phase: "Phase 3: Scale", color: "bg-purple-50 border-purple-200 text-purple-600" }
              ].map((item, i) => (
                <div key={i} className={`${item.color} p-6 rounded-xl border`}>
                  <div className="text-3xl font-headline mb-2">{item.price}</div>
                  <p className="font-bold uppercase text-sm">{item.phase}</p>
                </div>
              ))}
            </div>

            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-headline uppercase mb-6 text-gray-900">Hidden Costs</h2>
              <div className="space-y-4">
                {[
                  { title: "Hosting & Infrastructure", desc: "$50-500/month for AWS, Vercel, etc." },
                  { title: "Software Subscriptions", desc: "Stripe, Twilio, SendGrid costs add up." },
                  { title: "Legal & Compliance", desc: "Terms, privacy policies, and security audits." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-red-50 p-6 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Common Footer for all posts */}
        <section className="mt-12 pt-12 border-t border-gray-200 text-center">
          <h2 className="text-3xl font-headline uppercase mb-6">Ready to Build?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="btn btn-primary btn-lg">Start Your Validation</Link>
            <Link href="/calculator" className="btn btn-outline btn-lg">Cost Calculator</Link>
          </div>
        </section>
      </article>
    </main>
  );
}
