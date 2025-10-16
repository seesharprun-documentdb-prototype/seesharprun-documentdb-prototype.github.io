import { Metadata } from "next";

export const getMetadata = ({ title, description, extraKeywords = [] }: { title: string, description: string, extraKeywords?: string[] }): Metadata => ({
  keywords: [...getBaseKeywords(), ...extraKeywords],
  title,
  description,
  openGraph: {
    type: 'article',
    title,
    description,
    images: [
      {
        url: 'https://seesharprun-documentdb-prototype.github.io/images/social-card.png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [
      {
        url: 'https://seesharprun-documentdb-prototype.github.io/images/social-card.png',
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
});

const getBaseKeywords = (): string[] => [
  'DocumentDB',
  'document database',
  'open source',
  'NoSQL',
  'database',
  'MongoDB compatible',
  'PostgreSQL',
  'MQL',
  'MongoDB Query Language',
  'JSON documents',
  'scalable database',
  'distributed database',
];