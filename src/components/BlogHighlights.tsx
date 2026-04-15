"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { BlogMetadata } from "@/lib/mdx";

interface BlogHighlightsProps {
  posts: BlogMetadata[];
}

const BlogHighlights = ({ posts }: BlogHighlightsProps) => {
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
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="blog-card group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                <div className="h-48 bg-gray-100 overflow-hidden relative flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-accent-red uppercase tracking-widest">{post.category}</span>
                  <h3 className="font-headline text-xl uppercase mt-2 mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
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
