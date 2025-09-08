// Database model types based on Prisma schema

export interface User {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  password: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  summary: string | null;
  published: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  categoryId: string;
  category: Category;
}

// API response types
export interface PostWithCategory extends Post {
  category: Category;
}

export type PostList = PostWithCategory[];