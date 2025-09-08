"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useMobileLayout } from "./MobileLayout";

export default function Header() {
  const { setSidebarOpen } = useMobileLayout();
  const { data: session, status } = useSession();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Mobile hamburger button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 mr-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label="메뉴 열기"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <Link
              href="/"
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              DevBlog
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/upload"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Upload
            </Link>
            
            {status === "loading" ? (
              <div className="text-muted-foreground">로딩중...</div>
            ) : session ? (
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">
                  안녕하세요, {session.user?.name || session.user?.email}님
                </span>
                <button
                  onClick={() => signOut()}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  로그인
                </Link>
                <Link
                  href="/signup"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium transition-colors"
                >
                  회원가입
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
