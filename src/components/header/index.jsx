import { useContext, useEffect } from "react";
import { FaReddit, FaSearch, FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/index";

export default function Header() {
  const {
    search,
    setSearch,
    handleSubmit,
    fetchInitialData,
    subRedditUrl,
    subRedditData,
    windowWidth,
    setWindowWidth,
  } = useContext(GlobalContext);

  useEffect(() => {
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
    <nav className="flex justify-between items-center py-5 w-[95vw] mx-auto flex-row lg:flex-row gap-5 lg:gap-0 border-b border-black-4 ">
      <Link
        to={"/"}
        onClick={fetchInitialData}
        className="ml-5 flex justify-between items-center flex-row gap-3"
      >
        <FaReddit className="w-[40px] h-[40px] text-red-500" />
        {windowWidth >= 770 ? (
          <h1 className="font-semibold text-3xl text-red-bold">Reddit</h1>
        ) : null}
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="mr-3 flex justify-between items-center flex-row gap-1">
          {subRedditUrl ? (
            <div className="flex flex-row justify-center items-center p-1 mr-1 h-[40px] rounded-full border-solid border-2 border-red-700 outline-offset-2 shadow-xl">
              <img
                src={subRedditData.icon_img}
                className="w-[20px] h-[20px] rounded-full border-red-500 border-solid border-2 mr-1"
              />
              <h3 className="truncate w-[60px] text-center">
                {subRedditData.title}
              </h3>
              <FaTimes onClick={fetchInitialData}/>
            </div>
          ) : null}
          <input
            placeholder=" Search Reddit"
            name="search-reddit"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="mr-1 h-[40px] rounded-lg border-solid border-2 border-black-700 outline-offset-2 shadow-xl md:w-[400px]"
          />
          <FaSearch
            onClick={handleSubmit}
            className="w-[35px] h-[35px] hover:text-red-500"
          />
        </div>
      </form>
    </nav>
  );
}
