import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function SubRedditItem({ subReddit }) {
  const { subredditName, setSubRedditName } = useContext(GlobalContext);

  console.log(subredditName, subReddit.url);
  return (
    <div>
      {subredditName === subReddit.url ? (
        <div className="flex flex-col items-center m-2 p-4 md:flex-row bg-red-900">
          <img
            src={subReddit.icon_img}
            className="w-[40px] h-[40px] rounded-full border-red-500 border-solid border-4 "
          />
          <h3 className="truncate w-[150px] font-semibold text-center md:text-left md:ml-2">
            {subReddit.title}
          </h3>
        </div>
      ) : (
        <div className="flex flex-col items-center m-2 p-4 md:flex-row">
          <img
            src={subReddit.icon_img}
            className="w-[40px] h-[40px] rounded-full border-red-500 border-solid border-4 "
          />
          <h3 className="truncate w-[150px] font-semibold text-center md:text-left md:ml-2">
            {subReddit.title}
          </h3>
        </div>
      )}
    </div>
  );
}
