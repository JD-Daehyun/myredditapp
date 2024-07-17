export default function RedditItem({ reddit }) {
  return (
    <div className="p-5 flex justify-between w-[95vw] mx-auto flex-col gap-2 border-b border-black-4 hover:bg-gray-100  rounded-2xl">
      <div className="flex flex-row items-center">
        <img
          src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
          className="w-[30px] h-[30px] rounded-full mr-2"
        />
        <h3>u/{reddit.author}</h3>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">{reddit.title}</h2>
      </div>
      <div>
        <img
          src={`${reddit.thumbnail}`}
          className="w-[500px] h-auto rounded-2xl"
        />
      </div>
    </div>
  );
}
