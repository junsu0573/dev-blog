import { getAllPosts, getAllCategories } from "@/lib/blog";
import BlogClient from "./BlogClient";

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  return <BlogClient posts={posts} categories={categories} />;
}
