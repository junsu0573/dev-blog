import { NextRequest, NextResponse } from "next/server";
import { parseMarkdownFile, createOrUpdatePost } from "@/lib/markdown";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Check file type
    if (!file.name.endsWith(".md")) {
      return NextResponse.json(
        { error: "Only .md files are allowed" },
        { status: 400 }
      );
    }

    // Read file content
    const content = await file.text();

    if (!content.trim()) {
      return NextResponse.json({ error: "File is empty" }, { status: 400 });
    }

    // Parse markdown and validate frontmatter
    const { frontmatter, content: markdownContent } =
      parseMarkdownFile(content);

    // Create or update post in database
    const post = await createOrUpdatePost(frontmatter, markdownContent);

    return NextResponse.json({
      success: true,
      message: "Blog post uploaded successfully",
      post: {
        id: post.id,
        title: post.title,
        slug: post.slug,
        published: post.published,
        category: post.category.name,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Invalid frontmatter format",
          details: error.issues.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to upload blog post" },
      { status: 500 }
    );
  }
}
