import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import SubRedditItem from "./subreddit-item";

export default function SubReddits() {
  const {
    loading,
    subReddits,
    setSubReddits,
    fetchSubReddits,
    windowWidth,
    setWindowWidth,
  } = useContext(GlobalContext);

  useEffect(() => {
    fetchSubReddits();
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-row bg-gray-100 rounded overflow-x-scroll items-left md:flex-col md:overflow-hidden md:h-fit md:w-4/12 md:mr-5 md:max-w-[300px]">
      {windowWidth >= 770 ? (
        <h1 className="flex font-semibold text-3xl p-3">SubReddits</h1>
      ) : null}
      {loading ? (
        <h1>Loading...Please Wait!</h1>
      ) : (
        subReddits.map((subReddit) => (
          <SubRedditItem key ={subReddit?.data?.id} subReddit={subReddit?.data} />
        ))
      )}
    </div>
  );
}
