  import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-gray-700 shadow-xl h-20 px-4 lg:px-8">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown for Mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-600 rounded-box z-10 mt-3 w-52 p-2 shadow text-white"
            >
              <li>
                <NavLink to="/" className="hover:text-amber-600">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-amber-600">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/recipe" className="hover:text-amber-600">
                  Recipe
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="hover:text-amber-600">
                  Gallery
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Logo & Title */}
          <div className="flex items-center gap-2 ml-2">
            <img
              src="https://i.ibb.co/9mYQyQRV/Chef-s-removebg-preview.png"
              alt="Logo"
              className="h-12 w-12 sm:h-16 sm:w-16"
            />
            <a className="text-xl sm:text-2xl font-bold text-amber-600">
              Chef's Kitchen.
            </a>
          </div>
        </div>

        {/* Navbar Center for Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg text-white">
            <li>
              <NavLink to="/" className="hover:text-amber-600">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-amber-600">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/recipe" className="hover:text-amber-600">
                Recipe
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className="hover:text-amber-600">
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2">
          <NavLink
            to=""
            className="btn border-none bg-gray-600 hover:bg-amber-700 text-white rounded-3xl text-sm sm:text-base lg:text-xl px-4"
          >
            Sign In
          </NavLink>
          <NavLink
            to=""
            className="btn border-none bg-amber-700 text-white rounded-3xl text-sm sm:text-base lg:text-xl px-4"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
