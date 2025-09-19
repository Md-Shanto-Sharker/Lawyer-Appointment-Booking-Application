import React, { useEffect, useState } from "react";
import { getFavorites } from "../../ui";

const Booking = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const saved = getFavorites();
    setBooking(saved);
  }, []);

  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center mt-10 mb-10">
        <h1 className="font-bold text-2xl">My Today Appointments</h1>
        <p>
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
      </div>

      {booking.map(book => (
        <div
          key={book.id}
          className="border-2 border-gray-200 rounded-2xl p-5 mb-5"
        >
          <div className="flex justify-between items-center border-b-2 border-dashed border-gray-200">
            <div>
              <h3 className="font-bold">{book.name}</h3>
              <h3>Criminal Expert</h3>
            </div>
            <h3>Appointment: {book.appointmentDate || "N/A"}</h3>
          </div>
          <button className="btn w-full border border-red-500 rounded-3xl text-red-700 font-bold text-xl mt-5">
            Cancel Appointment
          </button>
        </div>
      ))}
    </div>
  );
};

export default Booking;
