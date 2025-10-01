import Link from 'next/link';
import ReferenceTable from '../../components/Table';
import { getReferencesByTypeGroupedByCategory } from '../../services/referenceService';

export default function OperatorReferencePage() {
  const grouped = getReferencesByTypeGroupedByCategory('operator');
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-gray-100">MongoDB Query Language (MQL) Operators</h1>
      <div className="flex items-start justify-between mb-6 pt-2">
        <p className="text-gray-400 mb-6 text-sm">
          Operators in the MongoDB Query Language (MQL) are special keywords and symbols used to perform comparisons, logical operations, element matching, and data manipulation within queries. They allow you to filter documents, combine multiple conditions, update fields, and work with arrays and embedded documents. Understanding operators is essential for building expressive queries and efficiently retrieving or modifying data in MongoDB collections.
        </p>
        <Link href="/reference" className="flex items-center gap-1 text-blue-400 transition-colors font-medium text-xs hover:text-blue-200 underline text-base font-semibold ml-2 whitespace-nowrap">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <span>Back to MQL language</span>
        </Link>
      </div>
      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="mb-10">
          <h2 className="text-xl font-bold mb-4 text-blue-300 capitalize">{category}</h2>
          <ReferenceTable items={items} />
        </section>
      ))}
    </main>
  );
}
