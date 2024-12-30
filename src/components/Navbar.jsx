import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className=" bg-gray-100  w-full h-24 flex flex-row  items-center justify-evenly">
      <div>
        <Link
          to={"/"}
          target="_self"
          className={`${
            pathname === "/"
              ? ""
              : ""
          }`}
        >
          <h1 className=" font-bold text-4xl mr-96 uppercase tracking-widest cursor-pointer ">
            Soumya
          </h1>
        </Link>
      </div>
      {/* Nav Links */}
      <div>
        <ul className="flex flex-row ml-96 space-x-4 text- font-mono gap-8 items-center ">
        <Link
            to={"/"}
            target="_self"
            className={`${
              pathname === "/"
                ? "text-lime-500 p-2"
                : ""
            }`}
          >
            <li className="cursor-pointer text-2xl">Home</li>
          </Link>
          <Link
            to={"/about"}
            target="_self"
            className={`${
              pathname === "/about"
                ? "text-lime-500 p-2"
                : ""
            }`}
          >
            <li className="cursor-pointer text-2xl">About</li>
          </Link>
          <Link
            to={"/contact"}
            target="_self"
            className={`${
              pathname === "/contact"
                ? "text-lime-500  p-2"
                : "" 
            }`}
          >
            <li className="cursor-pointer text-2xl ">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
