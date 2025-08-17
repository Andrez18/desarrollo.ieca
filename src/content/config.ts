import { defineCollection, z } from "astro:content";
// z --> Utilizamos zos para validar los datos que se piden en la colección (Los markdowns)

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        members: z.string(),
        img: z.string(),
        year: z.number(),
        description: z.string(),
        get: z.object({
            gitHub: z.string().url(),
            site: z.string().url()
        }), 
    })
})

export const collections = { projects };