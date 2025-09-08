import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "이름은 최소 2자 이상이어야 합니다.")
    .max(8, "이름은 최대 8자 이하이어야 합니다."),
  email: z.email("잘못된 이메일 주소입니다."),
  password: z
    .string()
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
    .max(20, "비밀번호는 최대 20자 이하이어야 합니다."),
});

export const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must be lowercase, numbers, and hyphens only"
    ),
  summary: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  published: z.boolean().default(false),
  publishedAt: z
    .string()
    .optional()
    .transform((val) => (val ? new Date(val) : undefined)),
});

export type BlogPostFrontmatter = z.infer<typeof blogPostSchema>;
