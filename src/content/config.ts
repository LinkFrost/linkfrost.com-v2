import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tag: z.string(),
});

export type BlogSchema = z.infer<typeof blogSchema>;

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: blogSchema,
});

export const collections = { blog };
