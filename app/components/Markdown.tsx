'use client';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';

export default function Markdown({ content }: {
  content: string;
}) {
  const [processedContent, setProcessedContent] = useState<ReactElement[]>([]);

  useEffect(() => {
    // Split content by H2 headings to group sections
    const sections = content.split(/^## /gm);
    const elements: ReactElement[] = [];

    sections.forEach((section, index) => {
      if (!section.trim()) return;

      // First section (before any H2) is intro text
      if (index === 0) {
        elements.push(
          <div key={`intro-${index}`} className="mb-8">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={getMarkdownComponents()}
            >
              {section}
            </ReactMarkdown>
          </div>
        );
      } else {
        // Extract H2 title (first line) and content (rest)
        const lines = section.split('\n');
        const title = lines[0];
        const sectionContent = lines.slice(1).join('\n');

        elements.push(
          <div key={`section-${index}`} className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {title}
            </h3>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={getMarkdownComponents()}
            >
              {sectionContent}
            </ReactMarkdown>
          </div>
        );
      }
    });

    setProcessedContent(elements);
  }, [content]);

  return <div className="space-y-8">{processedContent}</div>;
}

function getMarkdownComponents() {
  return {
    // Paragraphs
    p: ({ children, ...props }: any) => (
      <p className="text-gray-300 text-lg leading-relaxed mb-4" {...props}>
        {children}
      </p>
    ),

    // H3 sections (subsections within H2 cards)
    h3: ({ children, ...props }: any) => (
      <h4 className="text-lg font-medium text-white mb-3 mt-6">
        {children}
      </h4>
    ),

    // H4 subsections
    h4: ({ children, ...props }: any) => (
      <h5 className="text-base font-medium text-white mb-2 mt-4">
        {children}
      </h5>
    ),

    // Unordered lists with blue round bullets
    ul: ({ depth, ...props }: any) => (
      <ul className={depth > 0 ? "ml-6 space-y-2 text-gray-300 mb-4" : "space-y-2 text-gray-300 mb-4"} {...props} />
    ),

    // Ordered lists with blue numbers
    ol: ({ ...props }: any) => (
      <ol className="space-y-2 text-gray-300 mb-4" {...props} />
    ),

    // List items with custom styling
    li: ({ children, ordered, index, ...props }: any) => {
      if (ordered) {
        return (
          <li className="flex items-start" {...props}>
            <span className="text-blue-400 mr-3 flex-shrink-0">1.</span>
            <span>{children}</span>
          </li>
        );
      }

      return (
        <li className="flex items-start" {...props}>
          <span className="text-blue-400 mr-3 mt-1 flex-shrink-0">•</span>
          <span>{children}</span>
        </li>
      );
    },

    // Inline code
    code: ({ inline, children, ...props }: any) => {
      if (inline) {
        return (
          <code className="bg-neutral-900/50 px-2 py-1 rounded text-green-400 font-mono text-sm" {...props}>
            {children}
          </code>
        );
      }
      return (
        <code className="text-green-400 font-mono text-sm" {...props}>
          {children}
        </code>
      );
    },

    // Code blocks
    pre: ({ children, ...props }: any) => (
      <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30 mb-4">
        <pre className="text-green-400 font-mono text-sm overflow-x-auto" {...props}>
          {children}
        </pre>
      </div>
    ),

    // Blockquotes (notes)
    blockquote: ({ children, ...props }: any) => (
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
        <div className="text-blue-200 text-sm">
          {children}
        </div>
      </div>
    ),

    // Links
    a: ({ children, href, ...props }: any) => (
      <a
        href={href}
        className="text-blue-400 hover:text-blue-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),

    // Strong text
    strong: ({ children, ...props }: any) => (
      <strong className="font-medium" {...props}>
        {children}
      </strong>
    ),

    // Tables
    table: ({ children, ...props }: any) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }: any) => (
      <thead className="bg-neutral-800/50" {...props}>
        {children}
      </thead>
    ),
    th: ({ children, ...props }: any) => (
      <th className="border border-neutral-700/50 px-4 py-2 text-left text-white font-semibold" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }: any) => (
      <td className="border border-neutral-700/50 px-4 py-2 text-gray-300" {...props}>
        {children}
      </td>
    ),
  };
}
