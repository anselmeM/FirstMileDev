"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const blogPosts = [
  {
    id: "why-startups-fail",
    title: "Why 90% of Startups Fail",
    category: "Startup Validation",
    description: "And how validation-first development prevents your startup from becoming another statistic.",
    image: "/images/Handpicked-Reasons-Why-90-Startups-Fail-.jpg",
    link: "/blog/why-startups-fail",
    readTime: "5 min read",
    features: ["Build measure learn loop", "Problem-solution fit first", "Data-driven decisions"]
  },
  {
    id: "no-code-vs-custom",
    title: "No-Code vs Custom",
    category: "Development",
    description: "When to use low-code tools and when to invest in custom development.",
    image: "/images/MVPInfluence.jpg",
    link: "/blog/no-code-vs-custom",
    readTime: "7 min read",
    features: ["MVP: Bubble, FlutterFlow", "Scale: PERN, Next.js", "Migration path planning"]
  },
  {
    id: "true-cost-mvp",
    title: "The True Cost of an MVP",
    category: "Pricing",
    description: "A breakdown of MVP development costs and how to budget for your first product.",
    image: "/images/Why-Building-an-MVP-Matters-for-Startups.jpg",
    link: "/blog/true-cost-mvp",
    readTime: "6 min read",
    features: ["Phase 1: $2,000", "Phase 2: $5,000", "Hidden costs to avoid"]
  }
];

const BlogHighlights = () => {
  return (
    <section id="blog" className="px-6 md:px-8 lg:px-16 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl uppercase font-headline mb-4">Latest Insights</h2>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Startup Validation & Development Tips</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="blog-card group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <Link href={post.link} className="flex flex-col h-full">
                <div className="h-48 bg-gray-100 overflow-hidden relative flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-accent-red uppercase tracking-widest">{post.category}</span>
                  <h3 className="font-headline text-xl uppercase mt-2 mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <ul className="text-xs text-gray-500 space-y-1 mb-4">
                      {post.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check size={12} className="text-accent-red" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-2">
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                    <span className="text-sm font-bold text-accent-red group-hover:text-black transition">Read More &rarr;</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn btn-outline">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
