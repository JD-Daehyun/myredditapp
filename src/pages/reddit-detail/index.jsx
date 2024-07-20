import { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import Comment from "../../components/comment";
import { Circles } from "react-loader-spinner";

export default function RedditDetailPage() {
  const { loading, comments, fetchComments } = useContext(GlobalContext);

  useEffect(() => {
    fetchComments(selectedReddit.id);
  }, []);

  const { selectedReddit, setSelectedReddit } = useContext(GlobalContext);
  // const { id } = useParams();
  console.log(selectedReddit);
  return (
    <div className="gap-3 border-l-2">
      <div className="p-5 flex justify-between flex-col gap-2 border-b-4  border-r-4 border-black-500 rounded-lg ml-3">
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
          <div className="w-fit h-auto">
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
                <AiOutlineArrowUp className="hover:text-red-700" />
                {selectedReddit.ups}
                <AiOutlineArrowDown className="hover:text-blue-700" />
              </div>
              <div className="flex flex-row items-center gap-1 text-1xl font-semibold bg-gray-200 p-2 rounded-lg w-fit hover:bg-gray-300">
                <FaComment />
                <p>{selectedReddit.num_comments} Comments</p>
              </div>
            </div>
          </div>
        )}
        {comments && comments.length
          ? comments.map((comment) => <Comment comment={comment} />)
          : null}
      </div>
    </div>
  );
}
