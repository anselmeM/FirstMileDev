"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogMetadata } from "@/lib/mdx";

interface BlogGridProps {
  posts: BlogMetadata[];
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
    <div className="max-w-7xl mx-auto">
      {/* Filters and Search Area */}
      <div className="flex flex-col md:flex-row gap-6 mb-16 items-center justify-between bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mr-2">Filter by:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-accent-red text-white shadow-lg shadow-red-200"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search insights..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-sm font-medium focus:outline-none focus:border-accent-red focus:bg-white transition-all shadow-inner"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                {/* Image Container */}
                <div className="h-64 bg-gray-100 overflow-hidden relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-accent-red px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>

                  <h3 className="font-headline text-2xl uppercase mb-4 text-gray-900 group-hover:text-accent-red transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                    {post.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-accent-red group-hover:text-gray-900 transition-colors inline-flex items-center gap-2">
                      Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-gray-200"
        >
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
            <Search size={40} />
          </div>
          <h3 className="font-headline text-2xl uppercase text-gray-900 mb-2">No matching insights</h3>
          <p className="text-gray-500 font-medium">Try adjusting your filters or search terms.</p>
          <button 
            onClick={() => {setSearchTerm(""); setSelectedCategory("all");}}
            className="mt-8 text-accent-red font-black uppercase tracking-widest text-xs hover:underline"
          >
            Clear All Filters
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default BlogGrid;
