import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="font-light">Home</li>
      </Link>
      <Link to="/booking/:id">
        <li className="font-light">My-Booking</li>
      </Link>
      <Link>
        <li className="font-light">Blogs</li>
      </Link>
      <Link>
        <li className="font-light">Contact Us</li>
      </Link>
    </>
  );
  return (
    <div className="flex justify-between items-center mt-4 w-10/12 mx-auto">
      <div className="flex gap-2 items-center">
        <img className="w-7 h-7" src="/public/logo.png" alt="" />
        <h1 className="font-black text-2xl">Law.BD</h1>
      </div>

      <ul className="flex gap-20">{links}</ul>
      <button className="btn btn-success">Contact Now</button>
    </div>
  );
};

export default Navbar;
