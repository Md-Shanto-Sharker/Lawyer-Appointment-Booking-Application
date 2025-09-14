import React from 'react';
import { Link } from 'react-router';

const Lawyer = ({lawyer}) => {
     const {id, name, image, speciality, experience, licenseNumber } = lawyer;
    return (
        <div className="border rounded-3xl shadow-xl border-[#ece2e2] flex gap-20 items-start mt-20 p-5 ">
        <div>
          <img
            className="w-[200px] h-[170px]  rounded-3xl"
            src={image}
            alt=""
          />
        </div>
        <div>
          <div className="flex gap-10 mb-3">
            <h1 className="text-[#09982F] bg-[#d3f1db] p-1 px-7 rounded-4xl ">
              Available
            </h1>
            <h1 className="text-[#176AE5] bg-[#ccdaec] p-1 px-7 rounded-4xl">
              {experience}+ Years Experience
            </h1>
          </div>

          <div>
            <h1 className="text-2xl font-extrabold mb-1">{name}</h1>
            <h1 className="text-[#757575]">{speciality}</h1>
            <div className="flex gap-2 items-center  mb-3">
              <img className="w-5 h-5" src="/public/photos/Group.png" alt="" />
              <h1 className="text-[#757575]"> License No:{licenseNumber}</h1>
            </div>
            <div>
              <Link to={`/lawyerDetails/${id}`}>
              <button className="btn hover:bg-blue-700 hover:text-white px-32 w-full rounded-3xl text-[#176AE5]">
                View Details
              </button>
              
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Lawyer;