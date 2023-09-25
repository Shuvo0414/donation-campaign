import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";

const NavBar = () => {
  return (
    <div>
      <nav className=" flex justify-between items-center container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10">
        <img className=" w-[115px] md:w-[230px]" src={logo} alt="logo" />
        <ul className=" text-lg flex gap-7">
          <li className=" text-sm md:text-lg lg:text-lg">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? " text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-sm md:text-lg lg:text-lg">
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li className="text-sm md:text-lg lg:text-lg">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
