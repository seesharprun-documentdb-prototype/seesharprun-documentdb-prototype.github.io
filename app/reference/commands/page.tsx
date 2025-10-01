import Link from 'next/link';
import ReferenceTable from '../../components/Table';
import { getReferencesByTypeGroupedByCategory } from '../../services/referenceService';

export default function CommandReferencePage() {
  const grouped = getReferencesByTypeGroupedByCategory('command');
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-gray-100">MongoDB Query Language (MQL) Operators</h1>
      <div className="flex items-start justify-between mb-6 pt-2">
        <p className="text-gray-400 mb-6 text-sm">
          Commands in MongoDB are specialized instructions that allow you to interact directly with the database server to perform administrative, diagnostic, and operational tasks. They enable you to manage collections, databases, indexes, users, and server configurations, as well as retrieve statistics and perform maintenance operations. Understanding commands is crucial for controlling database behavior, optimizing performance, and ensuring the security and reliability of your MongoDB deployment.
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
