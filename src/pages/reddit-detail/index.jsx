import { useContext, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import Comment from "../../components/comment";
import { Circles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { addToLiked, removeFromLiked } from "../../store/slices/liked-slice";

export default function RedditDetailPage() {
  const { loading, comments, fetchComments } = useContext(GlobalContext);
  const dispatch = useDispatch();
  const { liked } = useSelector((state) => state);
  const { selectedReddit, setSelectedReddit } = useContext(GlobalContext);
  function addToLikedReddits(event) {
    //this disables Link functionality and allow users to click on the arrow
    event.preventDefault();
    dispatch(addToLiked(selectedReddit));
  }
  function removeFromLikedReddits(event) {
    event.preventDefault();
    dispatch(removeFromLiked(selectedReddit.id));
  }

  useEffect(() => {
    fetchComments(selectedReddit.id);
  }, []);

  // const { id } = useParams();
  // console.log(selectedReddit);
  return (
    <div className="gap-3 border-l-2">
      <button className="rounded-full bg-red-500 text-white w-fit p-3 ml-3 hover:bg-red-900 outline-offset-2 shadow-xl mt-3 mb-3">
        <Link to={'/liked'}>My Liked Reddits</Link>
      </button>
      <div className="p-5 flex justify-between flex-col gap-2 rounded-lg ">
        {loading ? (
          <div className="min-h-screen w-full flex justify-center items-center">
            <Circles
              height={"120"}
              width={"120"}
              color="rgb(127,29,29)"
              visible={true}
            />
          </div>
        ) : (
          <div className="p-5 flex justify-between flex-col gap-2 border-b-4  border-r-4 border-black-500  rounded-2xl">
            <div className="flex flex-row items-center mb-2">
              <img
                src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
                className="w-[30px] h-[30px] rounded-full mr-2"
              />
              <h3>u/{selectedReddit.author}</h3>
            </div>

            <div className="mb-2">
              <h2 className="text-2xl font-semibold">{selectedReddit.title}</h2>
            </div>

            <div>
              <img
                src={`${selectedReddit.thumbnail}`}
                className="w-[500px] h-auto rounded-2xl"
              />
            </div>

            <div className="flex flex-row gap-3 mt-2">
              <div className="flex flex-row items-center gap-1 text-1xl font-semibold bg-gray-200 p-2 rounded-lg w-fit">
                <AiOutlineArrowUp
                  className={
                    liked.some(
                      (likedreddit) => likedreddit.id === selectedReddit.id
                    )
                      ? "text-red-700"
                      : "hover:text-red-700"
                  }
                  onClick={
                    liked.some(
                      (likedreddit) => likedreddit.id === selectedReddit.id
                    )
                      ? removeFromLikedReddits
                      : addToLikedReddits
                  }
                />
                {selectedReddit.ups}
                <AiOutlineArrowDown className="hover:text-blue-700" />
              </div>
              <div className="flex flex-row items-center gap-1 text-1xl font-semibold bg-gray-200 p-2 rounded-lg w-fit">
                <FaComment />
                <p>{selectedReddit.num_comments} Comments</p>
              </div>
            </div>
          </div>
        )}
        <h2 className="text-2xl font-semibold mt-2 mb-2">Comments</h2>
        {comments && comments.length
          ? comments.map((comment) => <Comment comment={comment} />)
          : null}
      </div>
    </div>
  );
}
