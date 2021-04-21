type ContentPros = {
  content: string;
};

// change this if content is markdown
export default function ApiContent({ content }: ContentPros) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
