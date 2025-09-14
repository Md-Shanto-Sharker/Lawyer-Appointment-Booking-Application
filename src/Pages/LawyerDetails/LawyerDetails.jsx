import React from "react";
import { useLoaderData } from "react-router";

const LawyerDetails = () => {
  const lawyer = useLoaderData();
  const {
    experience,
  } = lawyer;
  console.log(lawyer);
  return (
    <div className="mt-20 w-10/12 mx-auto">
      <div className="bg-[#e7e7e7] p-20 rounded-2xl border border-[#b8b2b2]">
        <h1 className="font-extrabold text-[32px] text-center mb-3">
          Lawyer’s Profile Details
        </h1>
        <p className=" text-center">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis{" "}
          <br /> turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>

      <div className="border rounded-3xl shadow-xl border-[#ece2e2] flex gap-20 items-center mt-20 p-5 ">
        <div>
          <img
            className="w-[600px] h-[300px]  rounded-3xl"
            src={lawyer.image}
            alt=""
          />

         
        </div>
        <div>
          <div>
            <h1 className="text-[#176AE5] bg-[#ccdaec] text-2xl p-1 px-7 w-[300px] rounded-4xl">
              {experience}+ Years Experience
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetails;
