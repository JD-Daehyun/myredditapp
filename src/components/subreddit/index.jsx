import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import SubRedditList from "./subreddit-list";

export default function SubReddits() {
  const { loading, subReddits, setSubReddits, fetchSubReddits } =
    useContext(GlobalContext);

  useEffect(() => {
    fetchSubReddits();
  }, []);
  return (
    <div className=" w-full h-[100px] md: w-[1000px] h-auto">
      {loading ? (
        <h1>Loading...Please Wait!</h1>
      ) : (
        subReddits.map((subReddit) => <SubRedditList subReddit={subReddit} />)
      )}
    </div>
  );
}
