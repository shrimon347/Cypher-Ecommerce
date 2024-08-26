import { useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { LuHeart, LuUser2 } from "react-icons/lu";
import { PiShoppingCart } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contextProvider/AuthProvider";
import { SidebarContext } from "../../contextProvider/SidebarContext";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [cart] = useCart();

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);

  // Apply the theme to the document on component mount and theme change
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? " "
            : isActive
            ? "text-blue-800 font-bold"
            : "block text-gray-600  hover:text-gray-800"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive, isPending }) =>
          isPending
            ? " "
            : isActive
            ? "text-blue-800 font-bold"
            : "block text-gray-600  hover:text-gray-800"
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? " "
            : isActive
            ? "text-blue-800 font-bold"
            : "block text-gray-600  hover:text-gray-800"
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isPending
            ? " "
            : isActive
            ? "text-blue-800 font-bold"
            : "block text-gray-600  hover:text-gray-800"
        }
      >
        Blog
      </NavLink>
    </>
  );

  return (
    <nav
      className={`bg-white shadow-lg ${
        isSticky ? "sticky top-0 z-[1000] shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-2xl font-bold text-gray-800">
              Cyper
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            {navlinks}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden md:block relative">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Search"
              />
              <button className="absolute right-0 top-0 mt-3 mr-3">
                <FiSearch />
              </button>
            </div>
            <Link
              href="#"
              className="text-gray-600 font-bold text-2xl hover:text-gray-800"
            >
              <LuHeart />
            </Link>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className=" text-gray-600 flex cursor-pointer font-bold text-2xl hover:text-gray-800"
            >
              <PiShoppingCart />{" "}
              <span className="text-sm">(+ {cart.length})</span>
            </div>

            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    {user?.photoURL ? (
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={user.photoURL}
                        />
                      </div>
                    ) : (
                      <LuUser2 className="text-2xl" />
                    )}
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <Link className="justify-between">
                        {user?.displayName}
                      </Link>
                    </li>
                    {/* {
                    isAdmin ?
                    <Link className="justify-between">
                    <li>
                        Dashboard
                    </li>
                  </Link>
                  : <></>
                } */}

                    <li>
                      <button onClick={handleLogOut}>Logout</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? " "
                      : isActive
                      ? "text-blue-800 font-bold"
                      : "block text-gray-600  hover:text-gray-800"
                  }
                >
                  Login
                </NavLink>
              </>
            )}

            <label className="swap swap-rotate md:ml-10">
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                onChange={handleToggle}
                checked={theme === "light" ? true : false}
              />
              {/* sun icon */}
              <svg
                className="swap-off  w-8 h-8 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              {/* moon icon */}
              <svg
                className="swap-on w-8 h-8 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          <div className="md:hidden flex items-center">
            <div className="flex justify-between items-center gap-5 mr-5">
              <Link
                href="#"
                className="text-gray-600 font-bold text-2xl hover:text-gray-800"
              >
                <LuHeart />
              </Link>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 cursor-pointer font-bold text-2xl hover:text-gray-800"
              >
                <PiShoppingCart />
              </div>

              {user ? (
                <>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      {user?.photoURL ? (
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src={user.photoURL}
                          />
                        </div>
                      ) : (
                        <LuUser2 className="text-2xl" />
                      )}
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                      <li>
                        <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li>
                        <a>Settings</a>
                      </li>
                      <li>
                        <button onClick={handleLogOut}>Logout</button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? " "
                        : isActive
                        ? "text-blue-800 font-bold"
                        : "block text-gray-600  hover:text-gray-800"
                    }
                  >
                    Login
                  </NavLink>
                </>
              )}
            </div>
            <button
              className="mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-[5000]`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-2xl font-bold text-gray-800">
              Cyper
            </a>
            <button
              className="text-gray-800"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="relative mt-10 mb-2">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Search"
            />
            <button className="absolute right-0 top-0 mt-2 mr-2">
              <FiSearch />
            </button>
          </div>
          {navlinks}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
