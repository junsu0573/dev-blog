"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SidebarProps } from "@/types";

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname();

  const categories = [
    { name: "React", slug: "react", count: 12 },
    { name: "TypeScript", slug: "typescript", count: 8 },
    { name: "Backend", slug: "backend", count: 6 },
    { name: "DevOps", slug: "devops", count: 4 },
    { name: "Tutorial", slug: "tutorial", count: 10 },
  ];

  const recentPosts = [
    {
      title: "Getting Started with Next.js 15",
      slug: "getting-started-nextjs-15",
    },
    {
      title: "TypeScript Best Practices",
      slug: "typescript-best-practices-2024",
    },
    {
      title: "Building APIs with Prisma",
      slug: "building-apis-prisma-postgresql",
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 min-h-0 h-screen w-64 bg-card border-r border-border z-50 transform transition-transform duration-300 ease-in-out 
        lg:translate-x-0 lg:static lg:z-auto overflow-hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex h-full min-h-0 flex-col">
          <div className="flex-1 space-y-3 p-6 pt-21 overflow-y-auto overscroll-contain">
            {/* Navigation */}
            <nav className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Navigation
              </h3>
              <Link
                href="/"
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  pathname === "/"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={onClose}
              >
                <span className="mr-3">🏠</span>
                Home
              </Link>
              <Link
                href="/blog"
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  pathname.startsWith("/blog")
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={onClose}
              >
                <span className="mr-3">📝</span>
                Blog
              </Link>
              <Link
                href="/about"
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  pathname === "/about"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={onClose}
              >
                <span className="mr-3">👋</span>
                About
              </Link>
            </nav>

            {/* Categories */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Categories
              </h3>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className="flex items-center justify-between px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200 group"
                  onClick={onClose}
                >
                  <span>{category.name}</span>
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full group-hover:bg-muted-foreground group-hover:text-background transition-colors duration-200">
                    {category.count}
                  </span>
                </Link>
              ))}
            </div>

            {/* Recent Posts */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Recent Posts
              </h3>
              {recentPosts.map((post, index) => (
                <Link
                  key={index}
                  href={`/blog/${post.slug}`}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200 leading-relaxed"
                  onClick={onClose}
                >
                  {post.title}
                </Link>
              ))}
            </div>

            {/* Archive */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Archive
              </h3>
              <Link
                href="/blog/archive/2024"
                className="flex items-center justify-between px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
                onClick={onClose}
              >
                <span>2024</span>
                <span className="text-xs text-muted-foreground">25</span>
              </Link>
              <Link
                href="/blog/archive/2023"
                className="flex items-center justify-between px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
                onClick={onClose}
              >
                <span>2023</span>
                <span className="text-xs text-muted-foreground">18</span>
              </Link>
            </div>
            {/* Archive */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Archive
              </h3>
              <Link
                href="/blog/archive/2024"
                className="flex items-center justify-between px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
                onClick={onClose}
              >
                <span>2024</span>
                <span className="text-xs text-muted-foreground">25</span>
              </Link>
              <Link
                href="/blog/archive/2023"
                className="flex items-center justify-between px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
                onClick={onClose}
              >
                <span>2023</span>
                <span className="text-xs text-muted-foreground">18</span>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
