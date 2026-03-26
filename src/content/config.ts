import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const executiveCollection = defineCollection({
  loader: glob({ pattern: ['*.json'], base: 'src/data/executive' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    expertise: z.string(),
    bio: z.string(),
    highlights: z.array(z.string()),
  }),
});

const instructorDefinition = z.object({
  name: z.string(),
  role: z.string(),
  organization: z.string(),
});

const agendaItemDefinition = z.object({
  title: z.string(),
  description: z.string(),
});

const faqItemDefinition = z.object({
  question: z.string(),
  answer: z.string(),
});

const programCollection = defineCollection({
  loader: glob({ pattern: ['*.json'], base: 'src/data/program' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.string(),
    format: z.string(),
    badge: z.string(),
    status: z.string(),
    summary: z.string(),
    audience: z.string(),
    outcomes: z.array(z.string()),
    duration: z.string(),
    venue: z.string(),
    fee: z.string(),
    language: z.string(),
    classSize: z.string(),
    certificate: z.string(),
    overview: z.array(z.string()),
    instructors: z.array(instructorDefinition),
    agenda: z.array(agendaItemDefinition),
    faqs: z.array(faqItemDefinition),
  }),
});

const updateCollection = defineCollection({
  loader: glob({ pattern: ['*.json'], base: 'src/data/update' }),
  schema: z.object({
    type: z.enum(['News', 'Announcement', 'Event']),
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    body: z.array(z.string()),
  }),
});

const serviceAreaCollection = defineCollection({
  loader: glob({ pattern: ['*.json'], base: 'src/data/service-area' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    outcomes: z.array(z.string()),
  }),
});

const clientGroupCollection = defineCollection({
  loader: glob({ pattern: ['*.json'], base: 'src/data/client-group' }),
  schema: z.object({
    sector: z.string(),
    examples: z.array(z.string()),
  }),
});

const knowledgeArticleCollection = defineCollection({
  loader: glob({ pattern: ['*.json'], base: 'src/data/knowledge-article' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
  }),
});

const mediaItemCollection = defineCollection({
  loader: glob({ pattern: ['*.json'], base: 'src/data/media-item' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['Forum', 'Video', 'Webinar']),
    summary: z.string(),
    audience: z.string(),
  }),
});

const documentItemCollection = defineCollection({
  loader: glob({ pattern: ['*.json'], base: 'src/data/document-item' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    updatedAt: z.string(),
    access: z.string(),
  }),
});

const consultingProjectCollection = defineCollection({
  loader: glob({ pattern: ['*.json'], base: 'src/data/consulting-project' }),
  schema: z.object({
    title: z.string(),
    clientType: z.string(),
    challenge: z.string(),
    approach: z.string(),
    outcome: z.string(),
  }),
});

export const collections = {
  post: postCollection,
  executive: executiveCollection,
  program: programCollection,
  update: updateCollection,
  'service-area': serviceAreaCollection,
  'client-group': clientGroupCollection,
  'knowledge-article': knowledgeArticleCollection,
  'media-item': mediaItemCollection,
  'document-item': documentItemCollection,
  'consulting-project': consultingProjectCollection,
};
