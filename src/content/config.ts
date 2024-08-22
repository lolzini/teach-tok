import { z, defineCollection } from "astro:content";
import TOPICS from "./temas";
import TAGS from "./tags";

const creatorsCollection = defineCollection({
  type: "content",
  schema: z.object({
    username: z.string(),
    topic: z.enum(Object.values(TOPICS) as [string, ...string[]]),
    tags: z.enum(Object.values(TAGS) as [string, ...string[]]).array(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
  }),
});

export const collections = {
  creators: creatorsCollection,
};
