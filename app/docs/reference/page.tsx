import Link from 'next/link';
import ReferenceTable from '../../components/Table';
import { getReferencesGroupedByTypeAndCategory } from '../../services/referenceService';

const descriptions = {
  command: 'Commands in MongoDB are specialized instructions that allow you to interact directly with the database server to perform administrative, diagnostic, and operational tasks. They enable you to manage collections, databases, indexes, users, and server configurations, as well as retrieve statistics and perform maintenance operations. Understanding commands is crucial for controlling database behavior, optimizing performance, and ensuring the security and reliability of your MongoDB deployment.',
  operator: 'Operators in the MongoDB Query Language (MQL) are special keywords and symbols used to perform comparisons, logical operations, element matching, and data manipulation within queries. They allow you to filter documents, combine multiple conditions, update fields, and work with arrays and embedded documents. Understanding operators is essential for building expressive queries and efficiently retrieving or modifying data in MongoDB collections.'
}

export default function Home() {
  const grouped = getReferencesGroupedByTypeAndCategory();
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-100">MongoDB Query Language (MQL)</h1>
      {Object.entries(grouped).map(([type, categories]) => {
        const label = type === 'command' ? 'Commands' : 'Operators';
        const linkHref = type === 'command' ? '/reference/commands' : '/reference/operators';
        return (
          <section key={type} className="mb-10">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-bold text-blue-300 capitalize mr-4">{label}</h2>
              <div className="flex-1 flex justify-end">
                <Link href={linkHref} className="flex items-center gap-1 text-blue-400 transition-colors font-medium text-xs hover:text-blue-200 underline text-base font-semibold">
                  <span>See all {label.toLowerCase()}</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              {descriptions[type as keyof typeof descriptions]}
            </p>
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-200 capitalize">{category}</h3>
                <ReferenceTable items={items} />
              </div>
            ))}
          </section>
        );
      })}
    </main>
  );
}