import Link from 'next/link';
import ReferenceTable from '../../../components/Table';
import { getReferencesByTypeGroupedByCategory } from '../../../services/referenceService';

export default function OperatorReferencePage() {
  const grouped = getReferencesByTypeGroupedByCategory('operator');
  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
              MongoDB Query Language (MQL) Operators
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full mb-6"></div>
            <p className="text-gray-400 text-sm">
              MongoDB Query Language (MQL) operators enable powerful filtering, comparison, and data manipulation within queries. Mastering these operators helps you write expressive queries to efficiently retrieve and update documents in your collections.
            </p>
          </div>
        </div>
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
