import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { FaLandmark } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign out user!!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink className={({ isActive }) =>
            `relative pb-1 ${isActive ? 'nav-link-active' : 'nav-link-hover'}`
          } to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
            `relative pb-1 ${isActive ? 'nav-link-active' : 'nav-link-hover'}`
          } to="/allArtifacts">All Artifacts</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
            `relative pb-1 ${isActive ? 'nav-link-active' : 'nav-link-hover'}`
          } to="/addArtifacts">Add Artifacts</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#f7f1e2] md:container mx-auto pt-2 pb-5">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        {
          user ? (
            <div className="flex items-center gap-2 ">
          <FaLandmark className="md:w-[35px]" size={50} color="#A37854"/>
          <a className="text-xl font-bold">Heritage Vault</a>
        </div>
          ) : (
            <div className="flex items-center gap-2">
          <FaLandmark className="hidden md:block" size={35} color="#A37854"/>
          <a className="text-xl font-bold">Heritage Vault</a>
        </div>
          )
        }
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt={user.displayName} src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="font-bold">
                  {user.displayName ? user.displayName : "user"}
                </a>
              </li>
              <li>
                <NavLink className={({isActive}) => `${isActive ? 'font-bold text-[#A37854]' : 'none'}`} to={`/myArtifacts`}>My Artifacts</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => `${isActive ? 'font-bold text-[#A37854]' : 'none'}`} to={`/likedArtifatcs`}>Liked Artifacts</NavLink>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <NavLink to="/auth/login" className="btn">
              LogIn
            </NavLink>
            <NavLink to="/auth/register" className="btn">
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
