import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">Logo</div>
        <div className="flex flex-row gap-4 ml-auto">
          <Link to="/" className="hover:text-gray-200 transition duration-300">
            Home
          </Link>
          <Link
            to="/counter"
            className="hover:text-gray-200 transition duration-300"
          >
            User List
          </Link>
          <Link
            to="/counter"
            className="hover:text-gray-200 transition duration-300"
          >
            Counter
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
