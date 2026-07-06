import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const papers = defineCollection({
  loader: glob({ base: "./src/content/papers", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),

    category: z.enum(["main-work", "working-paper", "work-in-progress"]),

    status: z.string(),
    authors: z.array(
      z.object({
        name: z.string(),
        url: z.string().optional(),
      })
    ),

    year: z.number(),
    order: z.number().optional(),
    featured: z.boolean().default(false),

    description: z.string().optional(),
    abstract: z.string().optional(),
    journal: z.string().optional(),

    links: z
      .object({
        draft: z.string().optional(),
        published: z.string().optional(),
        slides: z.string().optional(),
        code: z.string().optional(),
      })
      .optional(),
  }),
});

const talks = defineCollection({
  loader: glob({ base: "./src/content/talks", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.union([z.string(), z.number()]).transform((value) => String(value)),
    collection: z.string().optional(),
    order: z.number().optional(),
    upcoming: z.boolean().default(false),
  }),
});

const teaching = defineCollection({
  loader: glob({ base: "./src/content/teaching", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    location: z.string().optional(),
    period: z.string().optional(),
  }),
});

const seminars = defineCollection({
  loader: glob({ base: "./src/content/seminars", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    collection: z.string().optional(),
    categories: z.union([z.string(), z.array(z.string())]).optional(),
    permalink: z.string().nullable().optional(),
    date: z.coerce.date(),
    venue: z.string().nullable().optional(),
    paperurl: z.string().optional(),
    link: z.string().optional(),
    citation: z.string().optional(),
	mainOrganizer: z.string().optional(),
    abstract: z.string().nullable().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  papers,
  talks,
  teaching,
  seminars,
};