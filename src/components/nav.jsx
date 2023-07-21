import { FaBroom, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
export default ({ cart, show, setAbout }) => {
  return (
    <nav
      className={`${
        show || null
      } w-full z-10 fixed top-0 bg-gray-700-a flex justify-center items-center text-white py-3 sm:p-3`}
    >
      <div className="sm:w-3/4 w-11/12 flex justify-between items-center">
        <div className="flex items-center justify-center">
          <FaBroom className="text-white text-sm sm:text-xl mx-2" />
          <h2 className="sm:text-sm text-xs opensans-b">Roomie</h2>
        </div>
        <div className="flex">
          <Link
            to={"/cart"}
            className="flex items-center hover:bg-black duration-100 justify-between rounded p-1 px-3"
          >
            <FaShoppingCart className="sm:text-base text-xs" />
            <sup className="text-sm opensans-b px-2">{cart}</sup>
          </Link>
          <p
            onClick={() => setAbout(true)}
            className="sm:text-sm border-2 border-transparent p-2 hover:cursor-pointer hover:border-black"
          >
            About us
          </p>
        </div>
      </div>
    </nav>
  );
};
