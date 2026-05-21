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

export const collections = { sections, services };
