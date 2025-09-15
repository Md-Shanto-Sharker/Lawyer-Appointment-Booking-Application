import React from "react";
import { useParams } from "react-router";
import { useLoaderData } from "react-router";

const Booking = () => {
  const data2 = useLoaderData();
  console.log(data2);

  const { id } = useParams();
  const newData = parseInt(id);
  console.log(newData);


  const singleLawyer = data2.find((law) => law.id === newData);
  console.log(singleLawyer);

  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center mt-10 mb-10">
        <h1 className="font-bold text-2xl">My Today Appointments</h1>
      <p>
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience.
      </p>
      </div>

      <div className="border-2 border-gray-200 rounded-2xl p-5">

        <div className="flex justify-between items-center border-b-2 border-dashed border-gray-200">

          <div>
            <h3 className="font-bold">Awlad Hossain</h3>
            <h3>Criminal Expert</h3>
          </div>

          <h3>Appointment:{}</h3>
        </div>
        <button className="btn w-full border border-red-500 rounded-3xl text-red-700 font-bold text-xl mt-5">
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default Booking;
