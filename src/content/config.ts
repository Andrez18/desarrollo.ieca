import { defineCollection, z } from "astro:content";
// z --> Utilizamos zos para validar los datos que se piden en la colección (Los markdowns)
const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    developedyear: z.number(),
    description: z.string(),
    get: z.object({
      git: z.string().url(),
      site: z.string().url(),
    }),
    
  })
})

export const collections = { projects }