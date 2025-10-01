import Link from 'next/link';
import type { Page } from '../types/Page';

export default function Table({ items }: {
  items: Page[];
}) {
  if (!items.length) return null;
  return (
    <table className="min-w-full border border-gray-700 rounded overflow-hidden mb-8 text-sm">
      <thead className="bg-gray-800 text-gray-100">
        <tr>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Description</th>
          <th className="px-4 py-2 text-left">Link</th>
        </tr>
      </thead>
      <tbody>
        {items.map(page => (
          <tr key={page.slug} className="border-t border-gray-700 bg-gray-900 hover:bg-gray-800">
            <td className="px-4 py-2 font-semibold text-gray-100">{page.name}</td>
            <td className="px-4 py-2 text-gray-300">{page.description}</td>
            <td className="px-4 py-2 text-center">
              <Link className="text-blue-400 underline font-bold" href={`/reference/${page.slug}`}>
                <code>/reference/{page.slug}</code>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
