// Validation-related types

export type BlogPostFrontmatter = {
  title: string;
  slug: string;
  summary?: string;
  category: string;
  published: boolean;
  publishedAt?: Date;
};

export type SignupFormData = {
  name: string;
  email: string;
  password: string;
};