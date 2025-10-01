import Link from 'next/link';
import ReferenceTable from '../../components/Table';
import { getReferencesGroupedByTypeAndCategory } from '../../services/referenceService';

export default function Home() {
  const grouped = getReferencesGroupedByTypeAndCategory();
  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
              MongoDB Query Language (MQL)
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full mb-6"></div>
            <p className="text-gray-400 text-lg">
              Explore the essential MongoDB Query Language (MQL) operators and commands available in this reference. Each entry includes a brief description and usage details to help you build effective queries and manage your database.
            </p>
          </div>
        </div>
      </div>
      {Object.entries(grouped).map(([type, categories]) => {
        const label = type === 'command' ? 'Commands' : 'Operators';
        const linkHref = type === 'command' ? '/docs/reference/commands' : '/docs/reference/operators';
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
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="mb-6">
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {category} {type}
                  </h3>
                  <ReferenceTable items={items} />
                </div>
              </div>
            ))}
          </section>
        );
      })}
    </main>
  );
}