interface HtmlRendererProps {
    content: string;
    className?: string;
}

const HtmlRenderer = ({ content, className = "" }: HtmlRendererProps) => {
    return (
      <div
       className={`prose prose-lg max-w-none text-justify font-sans text-slate-800
         prose-headings:font-serif prose-headings:font-semibold prose-headings:text-primary-9
         prose-h1:text-4xl prose-h1:mb-0 prose-h1:mt-0
         prose-h2:text-3xl prose-h2:mb-0 prose-h2:mt-0
         prose-h3:text-2xl prose-h3:mb-0 prose-h3:mt-0
         prose-h4:text-xl prose-h4:mb-0 prose-h4:mt-0
         prose-p:mb-0 prose-p:mt-0 prose-p:leading-6
         prose-a:text-primary-7 prose-a:no-underline hover:prose-a:text-primary-8
         prose-strong:font-semibold prose-strong:text-primary-9
         prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-0 prose-ul:mt-2
         prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-0 prose-ol:mt-2
         prose-li:mb-0 prose-li:mt-1 prose-li:leading-7
         prose-blockquote:border-l-4 prose-blockquote:border-primary-5 
         prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:my-0
         prose-img:rounded-lg prose-img:my-0 prose-img:mx-auto prose-img:block
         prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded
         prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:my-0
         [&>*]:mt-0 [&>*]:mb-0 ${className}`}
       dangerouslySetInnerHTML={{ __html: content }}
     />
  );
};
export default HtmlRenderer;
