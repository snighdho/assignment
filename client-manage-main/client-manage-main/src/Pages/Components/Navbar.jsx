import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../Components/Providers/AuthProviders";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Profile Details", to: "/ProfileDetailsPage" },
    { name: "Update Profile", to: "/UpdateProfilePage" },
    { name: "All Users", to: "/UserDetails" },
  ];

  const handleLogOut = async () => {
    try {
      await logOut();
      alert("Logged out successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white shadow-md sticky top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold">
          <span className="text-yellow-300">Pro</span>File
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {menuItems.map(({ name, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-yellow-300 border-b-2 border-yellow-300 pb-1"
                  : "hover:text-yellow-300 transition"
              }
              end
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* User Icon + Dropdown */}
        <div className="relative">
          {user ? (
            <>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-center bg-yellow-300 text-indigo-700 rounded-full w-10 h-10"
                aria-label="User menu"
              >
                <FiUser size={24} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      handleLogOut();
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-100"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link
              to="/LogIn"
              className="bg-yellow-300 text-indigo-700 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-200"
            >
              Log In
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {!isOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-indigo-800 md:hidden px-2 pt-2 pb-3 space-y-1">
          {menuItems.map(({ name, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-bold text-yellow-300 bg-indigo-900"
                  : "block px-3 py-2 rounded-md text-base hover:text-yellow-300 hover:bg-indigo-700 transition"
              }
              end
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
