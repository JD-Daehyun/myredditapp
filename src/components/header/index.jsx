import { FaReddit, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <Link to={'/'}>
      <div className="ml-5">
        <FaReddit />
        <h2 className="font-semibold text-3xl text-red-bold">Reddit</h2>
      </div>
      </Link>



    </nav>
  );
}
