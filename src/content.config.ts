import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ---------- singleton sections ----------
// One markdown file per page section under src/content/sections/.
// Frontmatter holds structured fields; body is prose (becomes <p> tags).
// All fields are optional because each section uses a subset.
const sections = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/sections" }),
  schema: z.object({
    eyebrow: z.string().optional(),
    headline: z.string().optional(),
    // Hero supports a two-line headline with an accent fragment per line.
    headline_lines: z
      .array(z.object({ text: z.string(), accent: z.string() }))
      .optional(),
    tagline: z.string().optional(),
    lede: z.string().optional(),
    scroll_label: z.string().optional(),
    cta_label: z.string().optional(),
    cta_href: z.string().optional(),
  }),
});

// ---------- repeating: services ----------
// One markdown file per service card. Body is the description paragraph.
const services = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/services" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
  }),
});

// ---------- repeating: testimonials ----------
// One markdown file per testimonial. Body is the quote (rendered as blockquote).
const testimonials = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/testimonials" }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    title: z.string(),
  }),
});

// ---------- blog ----------
// One markdown file per blog post under src/content/blog/.
const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { sections, services, testimonials, blog };
