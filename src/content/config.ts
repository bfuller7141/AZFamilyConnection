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
        url: z.string(),
        language: z.enum(["en", "es"]).optional(),
      })
    ),
    icon: z.string().optional(),
  }),
});

export const collections = {
  resources: resourcesCollection,
};