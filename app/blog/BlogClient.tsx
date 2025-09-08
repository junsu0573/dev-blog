"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogClientProps } from "@/types";

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category.name === selectedCategory);

  const categoryOptions = ["All", ...categories.map((cat) => cat.name)];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Thoughts, tutorials, and insights on web development and programming.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categoryOptions.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition-colors ${
              category === selectedCategory
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">해당 카테고리에 포스트가 없습니다.</p>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-8">
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {post.category.name}
                </span>
                <time className="text-sm text-gray-500">
                  {post.publishedAt &&
                    new Date(post.publishedAt).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                </time>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">{post.summary}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}