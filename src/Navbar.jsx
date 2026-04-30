import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart2 } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm text-[#244d3f]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#244d3f] text-white font-semibold rounded-lg"
                      : ""
                  }
                  to="/"
                >
                  <Home className="w-5 h-5" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#244d3f] text-white font-semibold rounded-lg"
                      : ""
                  }
                  to="/timeline"
                >
                  <Clock className="w-5 h-5" />
                  Timeline
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#244d3f] text-white font-semibold rounded-lg"
                      : ""
                  }
                  to="/stats"
                >
                  <BarChart2 className="w-5 h-5" />
                  Stats
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="text-xl">
            <span className="font-bold text-[#1f2937] ">Keen</span>
            <span className="font-semibold text-[#244d3f]">Keeper</span>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#244d3f] text-white font-semibold rounded-lg"
                    : ""
                }
                to="/"
              >
                <Home className="w-5 h-5" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#244d3f] text-white font-semibold rounded-lg"
                    : ""
                }
                to="/timeline"
              >
                <Clock className="w-5 h-5" />
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#244d3f] text-white font-semibold rounded-lg"
                    : ""
                }
                to="/stats"
              >
                <BarChart2 className="w-5 h-5" />
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
