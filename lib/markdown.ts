import matter from "gray-matter";
import { blogPostSchema, type BlogPostFrontmatter } from "@/utils/validation";
import { prisma } from "@/lib/prisma";

export function parseMarkdownFile(content: string) {
  const { data, content: markdownContent } = matter(content);

  // Validate frontmatter
  const validatedData = blogPostSchema.parse(data);

  return {
    frontmatter: validatedData,
    content: markdownContent.trim(),
  };
}

export async function createOrUpdatePost(
  frontmatter: BlogPostFrontmatter,
  content: string
) {
  // Find or create category
  let category = await prisma.category.findUnique({
    where: { name: frontmatter.category },
  });

  if (!category) {
    const categorySlug = frontmatter.category
      .toLowerCase()
      .replace(/\s+/g, "-");
    category = await prisma.category.create({
      data: {
        name: frontmatter.category,
        slug: categorySlug,
      },
    });
  }

  // Check if post with this slug already exists
  const existingPost = await prisma.post.findUnique({
    where: { slug: frontmatter.slug },
  });

  const postData = {
    title: frontmatter.title,
    slug: frontmatter.slug,
    content,
    summary: frontmatter.summary || null,
    published: frontmatter.published,
    publishedAt:
      frontmatter.publishedAt || (frontmatter.published ? new Date() : null),
    categoryId: category.id,
  };

  if (existingPost) {
    // Update existing post
    return await prisma.post.update({
      where: { slug: frontmatter.slug },
      data: {
        ...postData,
        updatedAt: new Date(),
      },
      include: {
        category: true,
      },
    });
  } else {
    // Create new post
    return await prisma.post.create({
      data: postData,
      include: {
        category: true,
      },
    });
  }
}
