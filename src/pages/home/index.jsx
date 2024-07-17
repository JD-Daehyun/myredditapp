import { useContext } from "react";
import { GlobalContext } from "../../context";
import RedditItem from "../../components/reddit-item";

export default function HomePage() {
  const { reddits, setReddits, loading, setLoading } =
    useContext(GlobalContext);
  return (
    <div className="flex flex-col w-auto gap-3 ">
      {
      loading ? (
        <h1>Loading...Please Wait</h1>
      ) : (
        reddits.map((reddit) => <RedditItem reddit={reddit?.data} />)
      )}
    </div>
  );
}
