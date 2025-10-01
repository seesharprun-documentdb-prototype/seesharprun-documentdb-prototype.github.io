
import Link from 'next/link';
import type { ReferencePage } from '../services/referenceService';
import { capitalCase } from 'change-case';

export default function Index({
  groupedReferences
}: {
  groupedReferences: Record<string, Record<string, ReferencePage[]>>;
}) {
  // Get all types and sort them
  const types = Object.keys(groupedReferences).sort();

  return (
    <section className="flex-1 p-4 overflow-y-auto">
      <nav className="space-y-1">
        {types.map((type, index) => {
          const categories = Object.keys(groupedReferences[type]).sort();

          return (
            <div key={type}>
              {/* Add horizontal rule between sections (not before the first one) */}
              {index > 0 && (
                <div className="my-4 border-t border-neutral-700/50"></div>
              )}

              {/* Type header */}
              {categories.length > 0 && (
                <>
                  <Option
                    key={type}
                    target={`/docs/reference/${type}`}
                    display={capitalCase(type) + 's'}
                    className="uppercase"
                  />

                  {/* Category links */}
                  {categories.map((category) => (
                    <Option
                      key={`${type}-${category}`}
                      target={`/docs/reference/${type}/${category}`}
                      display={capitalCase(category)}
                    />
                  ))}
                </>
              )}
            </div>
          );
        })}
      </nav>
    </section>
  );
}

function Option({
  key,
  target,
  display,
  className
}: {
  key: string;
  target: string;
  display: string;
  className?: string;
}) {
  return (
    <Link
      key={key}
      href={target}
      className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 text-gray-300 hover:text-white hover:bg-neutral-700/50${className ? ' ' + className : ''}`}
    >
      {display}
    </Link>
  );
}
