import { prisma } from "@/lib/prisma";

export async function getAllPosts() {
  return await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      category: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
  });
}

export async function getPostBySlug(slug: string) {
  return await prisma.post.findUnique({
    where: {
      slug,
      published: true,
    },
    include: {
      category: true,
    },
  });
}

export async function getAllCategories() {
  return await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

export async function getPostsByCategory(categorySlug: string) {
  return await prisma.post.findMany({
    where: {
      published: true,
      category: {
        slug: categorySlug,
      },
    },
    include: {
      category: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
  });
}
