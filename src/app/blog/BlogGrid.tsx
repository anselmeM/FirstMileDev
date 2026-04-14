"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Check } from "lucide-react";
import { BlogPost } from "@/lib/blog";

interface BlogGridProps {
  posts: BlogPost[];
}

const BlogGrid = ({ posts }: BlogGridProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto">
      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <label
            htmlFor="category-filter"
            className="text-sm font-bold uppercase tracking-wider text-gray-500"
          >
            Filter:
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent-red transition-all w-full md:w-48"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search insights..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-accent-red transition-all w-full"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredPosts.map((post) => (
            <motion.article
              key={post.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="blog-card group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                <div className="h-48 bg-gray-100 overflow-hidden relative flex-shrink-0">
                  <Image
                    src={`/${post.image}`}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-accent-red uppercase tracking-widest">
                    {post.category}
                  </span>
                  <h3 className="font-headline text-xl uppercase mt-2 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.description}
                  </p>
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <ul className="text-xs text-gray-500 space-y-1 mb-4">
                      {post.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check size={12} className="text-accent-red" />{" "}
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-2">
                    <span className="text-xs text-gray-400">
                      {post.readTime}
                    </span>
                    <span className="text-sm font-bold text-accent-red group-hover:text-black transition">
                      Read More &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 italic">No articles found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
