import ReactMarkdown from "react-markdown";

export default function Comment({ comment }) {
  return (
    <div className="flex flex-col m-2">
        <p className="font-semibold mb-2">{comment?.data.author}</p>
      <ReactMarkdown className='p-2 bg-gray-200 rounded-lg max-w-[1000px]'>{comment?.data.body}</ReactMarkdown>
    </div>
  );
}
