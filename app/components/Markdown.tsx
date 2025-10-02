'use client';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMemo } from 'react';
import type { ReactElement } from 'react';
import Code from './Code';

export default function Markdown({ content }: { content: string }) {
  const processedContent = useMemo(() => {
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

    return elements;
  }, [content]);

  return <div className="space-y-8">{processedContent}</div>;
}

function getMarkdownComponents() {
  return {
    // Paragraphs
    p: ({ children, ...props }: any) => (
      <p className="text-gray-300 text-md leading-relaxed mb-4" {...props}>
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
      <ul
        className={depth > 0 ? "ml-6 space-y-2 text-gray-300 mb-4 list-disc list-inside" : "space-y-2 text-gray-300 mb-4 list-disc list-inside"}
        {...props}
      />
    ),

    // Ordered lists with blue numbers
    ol: ({ ...props }) => (
      <ol
        className="space-y-2 text-gray-300 mb-4 list-decimal list-inside"
        {...props}
      />
    ),

    // List items
    li: ({ ...props }) => (
      <li className="marker:text-blue-400 marker:mr-3 marker:flex-shrink-0 [&>p]:m-0 [&>p]:inline" {...props} />
    ),

    // Inline code
    code: ({ inline, children, ...props }: any) => {
      return (
        <code className="bg-neutral-900/50 px-2 py-1 rounded text-green-400 font-mono text-sm" {...props}>
          {children}
        </code>
      );
    },

    // Code blocks
    pre: ({ children, ...props }: any) => {
      // children is usually a single <code> element
      const codeElement = Array.isArray(children) ? children[0] : children;
      const codeString = codeElement?.props?.children
        ? String(codeElement.props.children).replace(/\n$/, '')
        : '';
      const lang =
        codeElement?.props?.className?.replace('language-', '') || 'javascript';

      return (
        <div
          className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30 mb-4"
          {...props}
        >
          <Code code={codeString} language={lang} />
        </div>
      );
    },

    // Blockquotes (notes with GitHub-style alerts)
    blockquote: ({ children, ...props }: any) => {
      // Try to extract text content to check for alert type
      let alertType: string | null = null;
      let modifiedChildren = children;

      // Get the text content from the first child
      const getTextContent = (node: any): string => {
        if (typeof node === 'string') return node;
        if (Array.isArray(node)) return node.map(getTextContent).join('');
        if (node?.props?.children) return getTextContent(node.props.children);
        return '';
      };

      const textContent = getTextContent(children);

      // Check for alert markers
      if (textContent.trim().startsWith('[!NOTE]')) {
        alertType = 'note';
      } else if (textContent.trim().startsWith('[!WARNING]')) {
        alertType = 'warning';
      } else if (textContent.trim().startsWith('[!IMPORTANT]')) {
        alertType = 'important';
      } else if (textContent.trim().startsWith('[!TIP]')) {
        alertType = 'tip';
      } else if (textContent.trim().startsWith('[!CAUTION]')) {
        alertType = 'caution';
      }

      // If we found an alert type, remove the marker from the content
      if (alertType) {
        const removeMarker = (node: any): any => {
          if (typeof node === 'string') {
            // Remove marker from any string node
            return node.replace(/^\[!(NOTE|WARNING|IMPORTANT|TIP|CAUTION)\]\s*/, '');
          }
          if (Array.isArray(node)) {
            // Recursively process all children
            return node.map(removeMarker);
          }
          if (node?.props?.children) {
            // Recursively process children of React elements
            return {
              ...node,
              props: {
                ...node.props,
                children: removeMarker(node.props.children)
              }
            };
          }
          return node;
        };

        modifiedChildren = removeMarker(children);
      }

      // Style based on alert type
      const styles = {
        note: {
          container: 'bg-blue-900/20 border-blue-500/30',
          text: 'text-blue-200',
          title: 'Note'
        },
        warning: {
          container: 'bg-yellow-900/20 border-yellow-500/30',
          text: 'text-yellow-200',
          title: 'Warning'
        },
        important: {
          container: 'bg-purple-900/20 border-purple-500/30',
          text: 'text-purple-200',
          title: 'Important'
        },
        tip: {
          container: 'bg-green-900/20 border-green-500/30',
          text: 'text-green-200',
          title: 'Tip'
        },
        caution: {
          container: 'bg-red-900/20 border-red-500/30',
          text: 'text-red-200',
          title: 'Caution'
        }
      };

      const style = alertType ? styles[alertType as keyof typeof styles] : null;

      if (style) {
        return (
          <div className={`${style.container} ${style.text} border rounded-lg p-4 mb-4 [&_p]:text-sm [&_p]:mb-0 [&_p]:leading-relaxed [&_code]:text-xs [&_code]:bg-opacity-30`} {...props}>
            <div className="font-semibold mb-2">{style.title}</div>
            {modifiedChildren}
          </div>
        );
      }

      // Default blockquote style (blue note)
      return (
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4 [&_p]:text-sm [&_p]:mb-0 [&_p]:leading-relaxed [&_code]:text-xs" {...props}>
          {children}
        </div>
      );
    },

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
      <strong className="font-medium text-white" {...props}>
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
