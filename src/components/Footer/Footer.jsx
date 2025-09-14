import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className="bg-black p-10 mt-10">
      <div className="mb-20 w-10/12 mx-auto">
        <div className="flex gap-4 justify-center">
          <img src="/public/logo-footer.png" alt="" />
          <h1 className="font-extrabold text-white text-[32px] plus-jakarta-sans">
            Law.BD
          </h1>
        </div>

        <div className="mt-5 flex gap-10 justify-center">
          <Link className="text-white">Home</Link>
          <br />
          <Link className="text-white">My-Bookings</Link>
          <br />
          <Link className="text-white">Blogs</Link>
          <br />
          <Link className="text-white">Contact Us</Link>
        
        </div>

        <div className="flex gap-7 justify-center mt-10 items-center">
          <FaFacebook size={25} color="blue"></FaFacebook>
          <BsTwitterX size={25} color="white"></BsTwitterX>
          <FaLinkedin size={25} color="blue"></FaLinkedin>
          <FaYoutube  size={25} color="red"></FaYoutube>
        </div>
      </div>
    </div>
    );
};

export default Footer;