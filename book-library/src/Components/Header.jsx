import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-between">
      <p>Book Vibe</p>
      <ul className="flex gap-7 showActive">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/listedBooks"}>Listed Books</NavLink>
        </li>
        <li>
          <NavLink to={"/pagesToRead"}>Pages to Read</NavLink>
        </li>
      </ul>
      <div className="flex  gap-5">
        <button className="btn btn-primary">Sign In</button>
        <button className="btn btn-secondary ">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
