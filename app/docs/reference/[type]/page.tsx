import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReferenceTable from '../../../components/Grid';
import Breadcrumb from '../../../components/Breadcrumb';
import { getReferencesByTypeGroupedByCategory, getTypeDescription } from '../../../services/referenceService';
import pluralize from 'pluralize';
import { capitalCase } from 'change-case';

const allowed_types = ['operator', 'command'];

export const generateStaticParams = async (): Promise<{ type: string }[]> => [
  { type: 'operator' },
  { type: 'command' }
];

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const title = capitalCase(pluralize(type));
  const description = getTypeDescription(type);
  return {
    title: `${title} - DocumentDB MQL Reference`,
    description: description || undefined,
  };
}

export default async function CommandReferencePage({ params }: { params: Promise<{ type: string }> }) {
  const type = (await params).type;
  if (!allowed_types.includes(type)) {
    notFound();
  }
  const grouped = getReferencesByTypeGroupedByCategory(type);
  const description = getTypeDescription(type);
  return (
    <article>
      <Breadcrumb type={type} />
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-4 capitalize">
          MongoDB Query Language (MQL) {capitalCase(pluralize(type))}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full mb-6"></div>
        {description && (
          <p className="text-gray-400 text-lg mb-6">
            {description}
          </p>
        )}
      </div>
      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="mb-6">
          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
            <Link href={`/docs/reference/${type}/${category}`} className="text-xl font-semibold text-white capitalize">
              {capitalCase(category)}
            </Link>
            <div className="mt-4">
              <ReferenceTable items={items} />
            </div>
          </div>
        </section>
      ))}
    </article>
  );
}
