import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import SubRedditItem from "./subreddit-item";

export default function SubReddits() {
  const { loading, subReddits, setSubReddits, fetchSubReddits } =
    useContext(GlobalContext);

  useEffect(() => {
    fetchSubReddits();
  }, []);
  return (
    <div className="flex flex-row bg-gray-100  mb-5 rounded overflow-x-scroll items-center md:flex-col md:mr-5 md:overflow-hidden" >
        <h1 className="font-semibold text-3xl p-3">SubReddits</h1>
      {loading ? (
        <h1>Loading...Please Wait!</h1>
      ) : (
        subReddits.map((subReddit) => <SubRedditItem subReddit={subReddit?.data} />)
      )}
    </div>
  );
}
