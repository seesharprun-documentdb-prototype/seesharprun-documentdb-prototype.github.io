import Link from 'next/link';
import Index from '../../components/Index';

export default function ReferenceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 right-20 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-16 w-28 h-28 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>
      <div className="relative flex min-h-screen">
        <div className="w-80 bg-neutral-800/50 backdrop-blur-sm border-r border-neutral-700/50 flex flex-col">
          <div className="p-6 border-b border-neutral-700/50">
            <Link href="/docs" className="text-blue-400 hover:text-blue-300 text-sm mb-4 flex items-center transition-colors">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Documentation
            </Link>
            <h1 className="text-2xl font-bold text-white">MQL Documentation</h1>
            <Index categories={[]} />
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <nav className="space-y-1">
            </nav>
          </div>
        </div>
        <article className="flex-1 p-8">
          <div className="max-w-4xl">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
