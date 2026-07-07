import { defineCollection, z } from 'astro:content';

const artistaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    slug: z.string().optional(),
    section: z.string().optional(),
    order: z.number().optional(),
    heroEyebrow: z.string().optional(),
    heroTitle: z.string().optional(),
    heroDescription: z.string().optional(),
    heroCta: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    aboutEyebrow: z.string().optional(),
    aboutTitle: z.string().optional(),
    aboutImage: z.string().optional(),
    aboutImageAlt: z.string().optional(),
    contacts: z.object({
      phone: z.string().optional(),
      email: z.string().optional(),
      soundcloud: z.string().optional(),
    }).optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    audioFile: z.string().optional(),
    albumArt: z.string().optional(),
    artist: z.string().optional(),
  }),
});

const equipeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    age: z.string().optional(),
    role: z.string(),
    image: z.string(),
    order: z.number(),
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    description: z.string().optional(),
    title: z.string().optional(),
  }),
});

const fichaTecnicaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    order: z.number().optional(),
  }),
});

const galeriaCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({ file: z.string(), alt: z.string() })),
});

const paginasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    updated: z.string().optional(),
    robots: z.string().optional(),
  }),
});

const footerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  artista: artistaCollection,
  equipe: equipeCollection,
  'ficha-tecnica': fichaTecnicaCollection,
  galeria: galeriaCollection,
  paginas: paginasCollection,
  footer: footerCollection,
};
