import { useContext, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import Comment from "../../components/comment";
import { Circles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { addToLiked, removeFromLiked } from "../../store/slices/liked-slice";

export default function LikedPage() {
  const { selectedReddit, setSelectedReddit } = useContext(GlobalContext);

  const dispatch = useDispatch();
  const { liked } = useSelector((state) => state);

  function addToLikedReddits(likedReddit) {
    dispatch(addToLiked(likedReddit));
  }
  function removeFromLikedReddits(likedReddit) {
    dispatch(removeFromLiked(likedReddit.id));
  }

  return (
    <div>
        {
            liked && liked.length ? 
      liked.map((likedReddit) => (
        <div className="mb-5 p-5 flex justify-between flex-col gap-2 border-2 border-red-500 rounded-2xl mt-5">
          <div className="flex flex-row items-center">
            <img
              src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
              className="w-[30px] h-[30px] rounded-full mr-2"
            />
            <h3>u/{likedReddit.author}</h3>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{likedReddit.title}</h2>
          </div>

          <div>
            <img
              src={`${likedReddit.thumbnail}`}
              className="w-[500px] h-auto rounded-2xl"
            />
          </div>

          <div className="flex flex-row gap-3">
            <div className="flex flex-row items-center gap-1 text-1xl font-semibold bg-gray-200 p-2 rounded-lg w-fit">
              <AiOutlineArrowUp
                className={
                  liked.some((likedreddit) => likedreddit.id === likedReddit.id)
                    ? "text-red-700"
                    : "hover:text-red-700"
                }
                onClick={
                  liked.some((likedreddit) => likedreddit.id === likedReddit.id)
                    ? () => removeFromLikedReddits(likedReddit)
                    : () => addToLikedReddits(likedReddit)
                }
              />
              {likedReddit.ups}
              <AiOutlineArrowDown className="hover:text-blue-700" />
            </div>
            <div className="flex flex-row items-center gap-1 text-1xl font-semibold bg-gray-200 p-2 rounded-lg w-fit hover:bg-gray-300">
              <FaComment />
              <p>{likedReddit.num_comments} Comments</p>
            </div>
          </div>
        </div>
      ))
      :
      <h1 className="text-3xl">Empty Liked Page</h1>
      }
    </div>
  );
}
