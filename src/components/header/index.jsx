import { useContext } from "react";
import { FaReddit, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/index";

export default function Header() {
  const { search, setSearch, handleSubmit } = useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-5 w-[95vw] mx-auto flex-row lg:flex-row gap-5 lg:gap-0 border-b border-black-4 ">
      <Link to={"/"}>
        <div className="ml-5 flex justify-between items-center flex-row gap-3">
          <FaReddit className="w-[40px] h-[40px] text-red-500" />
          <h1 className="font-semibold text-3xl text-red-bold">Reddit</h1>
        </div>
      </Link>
      <form>
        <div className="mr-5 flex justify-between items-center flex-row gap-3">
          <input
            placeholder="Search Reddit"
            name="search-reddit"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="mr-3 w-[400px] h-[40px] rounded-lg border-solid border-2 border-black-700 outline-offset-2 shadow-xl"
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
