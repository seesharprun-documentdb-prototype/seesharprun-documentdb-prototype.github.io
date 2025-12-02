import { notFound } from 'next/navigation';
import Breadcrumb from '../../../../../components/Breadcrumb';
import Markdown from '../../../../../components/Markdown';
import { getAllReferenceParams, getReferenceByPath } from '../../../../../services/referenceService';
import { getMetadata } from "../../../../../services/metadataService";

export async function generateMetadata({ params }: { params: Promise<{ type: string; category: string; name: string }> }) {
  const { type, category, name } = await params;
  const decodedName = decodeURIComponent(name);
  const data = getReferenceByPath(type, category, decodedName);
  
  if (!data) {
    return getMetadata({
      title: 'Reference - DocumentDB MQL Reference',
      description: '',
      extraKeywords: ['reference', type, category, name]
    });
  }
  
  return getMetadata({
    title: `${data.frontmatter.title || name} - DocumentDB MQL Reference`,
    description: data.frontmatter.description || '',
    extraKeywords: ['reference', type, category, name]
  });
}

export async function generateStaticParams(): Promise<{ type: string; category: string; name: string }[]> {
  return getAllReferenceParams();
}

export default async function ReferencePage({ params }: { params: Promise<{ type: string; category: string; name: string }> }) {
  const { type, category, name } = await params;
  const decodedName = decodeURIComponent(name);
  const data = getReferenceByPath(type, category, decodedName);

  if (!data) {
    notFound();
  }

  const pageTitle = data.frontmatter.title || name;
  const pageDescription = data.frontmatter.description;

  return (
    <article>
      <Breadcrumb type={type} category={category} name={pageTitle} />
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-white mb-4">
          {pageTitle}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full mb-6"></div>
        {pageDescription && (
          <p className="text-gray-300 text-lg leading-relaxed">
            {pageDescription}
          </p>
        )}
      </div>

      {/* Markdown Content */}
      <Markdown content={data.content} />
    </article>
  );
}