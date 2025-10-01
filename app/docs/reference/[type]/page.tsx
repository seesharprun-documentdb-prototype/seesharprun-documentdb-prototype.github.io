import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReferenceTable from '../../../components/Grid';
import Breadcrumb from '../../../components/Breadcrumb';
import { getReferencesByTypeGroupedByCategory } from '../../../services/referenceService';
import pluralize from 'pluralize';
import { capitalCase } from 'change-case';

const descriptions = {
  operator: 'MongoDB Query Language (MQL) operators enable powerful filtering, comparison, and data manipulation within queries. Mastering these operators helps you write expressive queries to efficiently retrieve and update documents in your collections.',
  command: 'MongoDB Query Language (MQL) commands are direct instructions for managing and interacting with your database server. They are essential for performing administrative tasks, optimizing performance, and maintaining security.'
};

const allowed_types = ['operator', 'command'];

export const generateStaticParams = async (): Promise<{ type: string }[]> => [
  { type: 'operator' },
  { type: 'command' }
];

export default async function CommandReferencePage({ params }: { params: Promise<{ type: string }> }) {
  const type = (await params).type;
  if (!allowed_types.includes(type)) {
    notFound();
  }
  const grouped = getReferencesByTypeGroupedByCategory(type);
  return (
    <article>
      <Breadcrumb type={type} />
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4 capitalize">
          MongoDB Query Language (MQL) {capitalCase(pluralize(type))}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full mb-6"></div>
        <Link
          href={`/docs/reference`}
          className="text-xs text-blue-500 hover:underline inline-flex items-center gap-1 mb-6">
          <span className="inline-flex items-center">
            <svg
              className="w-[1em] h-[1em] mr-1 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ verticalAlign: 'middle' }}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </span>
          <span>
            Back to reference index
          </span>
        </Link>
        <p className="text-gray-400 text-sm">
          {descriptions[type as keyof typeof descriptions]}
        </p>
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
