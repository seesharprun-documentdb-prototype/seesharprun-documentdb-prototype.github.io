import Link from 'next/link';
import { notFound } from 'next/navigation';
import Code from '../../../../../components/Code';
import Breadcrumb from '../../../../../components/Breadcrumb';
import { getAllReferenceParams, getReferenceByPath } from '../../../../../services/referenceService';
import { kebabCase } from 'change-case';

export async function generateMetadata({ params }: { params: Promise<{ type: string; category: string; name: string }> }) {
  const { type, category, name } = await params;
  const data = getReferenceByPath(type, category, name);
  return {
    title: `${data?.name || 'Reference'} - DocumentDB MQL Reference`,
    description: data?.description || data?.summary || undefined,
  };
}

export async function generateStaticParams(): Promise<{ type: string; category: string; name: string }[]> {
  return getAllReferenceParams();
}

export default async function ReferencePage({ params }: { params: Promise<{ type: string; category: string; name: string }> }) {
  const { type, category, name } = await params;
  const data = getReferenceByPath(type, category, name);

  if (!data) {
    notFound();
  }

  return (
    <article>
      <Breadcrumb type={type} category={category} name={data.name} />
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-white mb-4">
          {data.name}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full mb-6"></div>
        <p className="text-gray-300 text-lg leading-relaxed">
          {data.description}
        </p>
        {data.summary && (
          <div className="mt-4 p-4 bg-blue-900/20 border-l-4 border-blue-500 rounded">
            <p className="text-gray-300 text-sm">{data.summary}</p>
          </div>
        )}
      </div>

      {/* Syntax Section */}
      {data.syntax && data.syntax.length > 0 && (
        <section className="mb-8">
          <a className="invisible scroll-mt-24" id={'syntax'} />
          <h2 className="text-2xl font-bold text-white mb-4">Syntax</h2>
          <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-700/50 overflow-x-auto">
            <Code code={data.syntax} />
          </div>
        </section>
      )}

      {/* Parameters Section */}
      {data.parameters && data.parameters.length > 0 && (
        <section className="mb-8">
          <a className="invisible scroll-mt-24" id={'parameters'} />
          <h2 className="text-2xl font-bold text-white mb-4">Parameters</h2>
          <div className="space-y-4">
            {data.parameters.map((param, index) => (
              <div key={index} className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <code className="text-blue-300 font-mono font-semibold text-lg">{param.name}</code>
                  <span className="text-xs px-2 py-1 rounded bg-purple-900/40 text-purple-300 border border-purple-700/50">
                    {param.type}
                  </span>
                  {param.required && (
                    <span className="text-xs px-2 py-1 rounded bg-red-900/40 text-red-300 border border-red-700/50">
                      required
                    </span>
                  )}
                </div>
                {param.description && (
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">{param.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Examples Section */}
      {data.examples && (
        <section className="mb-8">
          <a className="invisible scroll-mt-24" id={'examples'} />
          <h2 className="text-2xl font-bold text-white mb-4">Examples</h2>

          {/* Sample Data */}
          {data.examples.sample && (
            <div className="mb-6">
              <a className="invisible scroll-mt-24" id={'sample-data'} />
              <h3 className="text-lg font-semibold text-gray-200 mb-3">Sample Data</h3>
              <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-700/50 overflow-x-auto">
                <Code code={typeof data.examples.sample === 'string' ? data.examples.sample : JSON.stringify(data.examples.sample, null, 2)} language='json' />
              </div>
            </div>
          )}

          {/* Example Items */}
          {data.examples.items && data.examples.items.length > 0 && (
            <div className="space-y-6">
              {data.examples.items.map((example, index) => (
                <div key={index} className="bg-neutral-800/30 rounded-lg border border-neutral-700/50 p-6">
                  <a className="invisible scroll-mt-24" id={kebabCase(example.title)} />
                  <h3 className="text-xl font-semibold text-white mb-3">{example.title}</h3>

                  {example.explanation && (
                    <div className="mb-4 p-4 bg-blue-900/20 border-l-4 border-blue-500 rounded">
                      <p className="text-gray-300 text-sm">{example.explanation}</p>
                    </div>
                  )}

                  {example.description && (
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{example.description}</p>
                  )}

                  {/* Query */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Query:</h4>
                    <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-700/50 overflow-x-auto">
                      <Code code={example.query} language='javascript' />
                    </div>
                  </div>

                  {/* Output */}
                  {example.output && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Output:</h4>
                      <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-700/50 overflow-x-auto">
                        <Code code={example.output.value} language='json' />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Related Section */}
      {data.related && data.related.length > 0 && (
        <section className="mb-8">
          <a className="invisible scroll-mt-24" id={'related'} />
          <h2 className="text-2xl font-bold text-white mb-4">Related</h2>
          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
            <ul className="space-y-2">
              {data.related.map((rel, index) => (
                <li key={index}>
                  <Link
                    href={`/docs/reference${rel.reference}`}
                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {rel.reference}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}
