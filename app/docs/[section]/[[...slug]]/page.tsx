import Link from "next/link";
import { notFound } from 'next/navigation';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllArticlePaths, getArticleByPath } from "../../../services/articleService";

export async function generateStaticParams() {
    const paths = getAllArticlePaths();

    return paths.map((path) => ({
        section: path.section,
        slug: path.slug,
    }));
}

interface PageProps {
    params: Promise<{
        section: string;
        slug?: string[];
    }>;
}

export default async function ArticlePage({ params }: PageProps) {
    const { section, slug = [] } = await params;
    const articleData = getArticleByPath(section, slug);

    if (!articleData) {
        return notFound();
    }

    const { content, frontmatter, navigation, file } = articleData;
    const selectedNavItem = navigation.find((item) =>
        item.link.includes(file)
    );

    // Use title from frontmatter if available, otherwise fall back to navigation title or section name
    const pageTitle = frontmatter.title || selectedNavItem?.title || section;

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
                {/* Left Sidebar */}
                <div className="w-80 bg-neutral-800/50 backdrop-blur-sm border-r border-neutral-700/50 flex flex-col">
                    {/* Header */}
                    <div className="p-6 border-b border-neutral-700/50">
                        <Link
                            href="/docs"
                            className="text-blue-400 hover:text-blue-300 text-sm mb-4 flex items-center transition-colors"
                        >
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
                        <h1 className="text-2xl font-bold text-white capitalize">
                            {section}
                        </h1>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 p-4 overflow-y-auto">
                        <nav className="space-y-1">
                            {navigation.map((item) => {
                                // Better matching logic for active state
                                // For index files, match both /section and /section/index
                                // For other files, match the specific file name
                                const itemPath = item.link.replace('/docs/', '');
                                const currentPath = file === 'index' ? section : `${section}/${file}`;
                                const isActive = itemPath === currentPath || 
                                                (file === 'index' && itemPath === `${section}/index`) ||
                                                (item.link.includes(file) && file !== 'index');
                                
                                return (
                                    <Link
                                        key={item.link}
                                        href={item.link}
                                        className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${isActive
                                                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                                : "text-gray-300 hover:text-white hover:bg-neutral-700/50"
                                            }`}
                                    >
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-4xl">
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
                                {pageTitle}
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full mb-6"></div>
                        </div>

                        {/* Markdown Content */}
                        <div className="prose prose-invert prose-blue max-w-none">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h1: ({ ...props }) => (
                                        <h1
                                            className="text-3xl font-bold text-white mt-8 mb-4"
                                            {...props}
                                        />
                                    ),
                                    h2: ({ ...props }) => (
                                        <h2
                                            className="text-2xl font-semibold text-white mt-6 mb-3"
                                            {...props}
                                        />
                                    ),
                                    h3: ({ ...props }) => (
                                        <h3
                                            className="text-xl font-semibold text-white mt-4 mb-2"
                                            {...props}
                                        />
                                    ),
                                    h4: ({ ...props }) => (
                                        <h4
                                            className="text-lg font-medium text-white mt-3 mb-2"
                                            {...props}
                                        />
                                    ),
                                    p: ({ ...props }) => (
                                        <p
                                            className="text-gray-300 leading-relaxed mb-4"
                                            {...props}
                                        />
                                    ),
                                    ul: ({ ...props }) => (
                                        <ul
                                            className="space-y-2 text-gray-300 mb-4 list-disc list-inside"
                                            {...props}
                                        />
                                    ),
                                    ol: ({ ...props }) => (
                                        <ol
                                            className="space-y-2 text-gray-300 mb-4 list-decimal list-inside"
                                            {...props}
                                        />
                                    ),
                                    li: ({ ...props }) => (
                                        <li className="text-gray-300" {...props} />
                                    ),
                                    code: ({ inline, ...props }: any) =>
                                        inline ? (
                                            <code
                                                className="bg-neutral-800 text-green-400 px-1.5 py-0.5 rounded text-sm font-mono"
                                                {...props}
                                            />
                                        ) : (
                                            <code
                                                className="block bg-neutral-900/50 text-green-400 p-4 rounded-lg border border-neutral-600/30 font-mono text-sm overflow-x-auto"
                                                {...props}
                                            />
                                        ),
                                    pre: ({ ...props }) => (
                                        <pre
                                            className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30 mb-4 overflow-x-auto"
                                            {...props}
                                        />
                                    ),
                                    blockquote: ({ ...props }) => (
                                        <blockquote
                                            className="border-l-4 border-blue-500 bg-blue-900/20 pl-4 py-2 my-4 text-blue-200"
                                            {...props}
                                        />
                                    ),
                                    strong: ({ ...props }) => (
                                        <strong className="font-semibold text-white" {...props} />
                                    ),
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
