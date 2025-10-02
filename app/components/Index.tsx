"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReferencePage } from '../services/referenceService';
import { capitalCase } from 'change-case';

export default function Index({
  groupedReferences
}: {
  groupedReferences: Record<string, Record<string, ReferencePage[]>>;
}) {
  const pathname = usePathname();
  
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
                    currentPath={pathname}
                  />

                  {/* Category links */}
                  {categories.map((category) => (
                    <Option
                      key={`${type}-${category}`}
                      target={`/docs/reference/${type}/${category}`}
                      display={capitalCase(category)}
                      currentPath={pathname}
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
  target,
  display,
  className,
  currentPath
}: {
  target: string;
  display: string;
  className?: string;
  currentPath: string;
}) {
  // Determine if this option should be highlighted
  // Highlight if:
  // 1. Exact match (e.g., on /docs/reference/operator, highlight "Operators")
  // 2. Category match (e.g., on /docs/reference/operator/accumulator or /docs/reference/operator/accumulator/avg, highlight "Operators" and "Accumulator")
  const isExactMatch = currentPath === target;
  const isCategoryMatch = currentPath.startsWith(target + '/');
  const isActive = isExactMatch || isCategoryMatch;

  return (
    <Link
      href={target}
      className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
        isActive
          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
          : "text-gray-300 hover:text-white hover:bg-neutral-700/50"
      }${className ? ' ' + className : ''}`}
    >
      {display}
    </Link>
  );
}
