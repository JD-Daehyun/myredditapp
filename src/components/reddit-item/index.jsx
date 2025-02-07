import { useContext } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { addToLiked, removeFromLiked } from "../../store/slices/liked-slice";

export default function RedditItem({ reddit }) {
  const { selectedReddit, setSelectedReddit } = useContext(GlobalContext);

  const dispatch = useDispatch();
  const { liked } = useSelector((state) => state);

  function addToLikedReddits(event) {
    //this disables Link functionality and allow users to click on the arrow
    event.preventDefault();
    dispatch(addToLiked(reddit));
  }
  function removeFromLikedReddits(event) {
    event.preventDefault();
    dispatch(removeFromLiked(reddit.id));
  }

  return (
    <Link
      to={`${reddit.id}`}
      onClick={() => setSelectedReddit(reddit)}
      className="p-5 flex justify-between flex-col gap-2 border-b-4  border-r-4 border-black-500 hover:bg-gray-100 rounded-2xl"
    >
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

      <div className="flex flex-row gap-3">
        <div className="flex flex-row items-center gap-1 text-1xl font-semibold bg-gray-200 p-2 rounded-lg w-fit">
          <AiOutlineArrowUp
            className={
              liked.some((likedreddit) => likedreddit.id === reddit.id)
                ? "text-red-700"
                : "hover:text-red-700"
            }
            onClick={
              liked.some((likedreddit) => likedreddit.id === reddit.id)
                ? removeFromLikedReddits
                : addToLikedReddits
            }
          />
          {reddit.ups}
          <AiOutlineArrowDown className="hover:text-blue-700" />
        </div>
        <div className="flex flex-row items-center gap-1 text-1xl font-semibold bg-gray-200 p-2 rounded-lg w-fit hover:bg-gray-300">
          <FaComment />
          <p>{reddit.num_comments} Comments</p>
        </div>
      </div>
    </Link>
  );
}
