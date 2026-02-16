import { defineCollection, z } from "astro:content";

const resourcesCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().optional(),
    category: z.enum(["documents", "forms", "external"]),
    language: z.enum(["en", "es", "both"]).optional(),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string().optional(),
        external_url: z.string().optional(),
        language: z.enum(["en", "es"]).optional(),
      }).transform(link => ({
        ...link,
        // Combine url and external_url into a single url field
        url: link.url || link.external_url || '',
      }))
    ),
    icon: z.string().optional(),
  }),
});

const legalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    language: z.enum(["en", "es", "both"]).default("en"),
    draft: z.boolean().default(false),
  }),
});

const teamCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    location: z.string(),
    bio: z.string(),
    language: z.enum(["en", "es", "both"]).default("en"),
    order: z.number().int().nonnegative().default(999),
  }),
});

export const collections = {
  resources: resourcesCollection,
  legal: legalCollection,
  team: teamCollection,
};
