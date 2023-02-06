import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ReadmeProps {
  children: string;
}

export default function Readme({ children }: ReadmeProps) {
  return (
    <div className='markdown mb-20'>
      <ReactMarkdown skipHtml remarkPlugins={[remarkGfm]}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
