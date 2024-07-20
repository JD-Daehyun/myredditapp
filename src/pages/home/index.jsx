import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import RedditItem from "../../components/reddit-item";
import { Circles } from "react-loader-spinner";

export default function HomePage() {
  const { reddits, loading } = useContext(GlobalContext);

  return (
    <div className="flex flex-col w-full  gap-3 border-l-2">
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
        reddits.map((reddit) => (
          <div className="m-4">
            <RedditItem reddit={reddit?.data} />
          </div>
        ))
      )}
    </div>
  );
}
