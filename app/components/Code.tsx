import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Index({
  code,
  language = 'javascript'
}: {
  code: string;
  language?: string;
}) {
  return (
    <section className="text-sm">
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        customStyle={{
          margin: 0,
          padding: 0,
          background: 'transparent',
        }}>
        {code}
      </SyntaxHighlighter>
    </section>
  )
}
