
import { Link, useLoaderData, useParams } from "react-router";
import { LawyerContext } from "../Lawyers/Lawyers";
import { useContext } from "react";

const LawyerDetails = () => {

  const [booked,setBooked] = useContext(LawyerContext)



  const lawyer = useLoaderData();
  const { id } = useParams();
  const lawyerId = parseInt(id);

  const singleLawyer = lawyer.find((law) => law.id === lawyerId);

  const {
    name,
    image,
    speciality,
    experience,
    licenseNumber,
    availability,
    consultationFee,
  } = singleLawyer;
  // console.log(lawyer);


  const handleClicked =(id) =>{
      setBooked([...booked,id])
  }
  console.log(handleClicked);

  return (
    <>
      <div className="mt-20 w-10/12 mx-auto">
        <div className="bg-[#e7e7e7] p-20 rounded-2xl border border-[#b8b2b2]">
          <h1 className="font-extrabold text-[32px] text-center mb-3">
            Lawyer’s Profile Details
          </h1>
          <p className=" text-center">
            Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
            amet ut. Suscipit sed est fermentum magna. Quis vitae tempus
            facilisis <br /> turpis imperdiet mattis donec dignissim volutpat.
          </p>
        </div>

        <div className="border rounded-3xl shadow-xl border-[#ece2e2] flex gap-20 items-center mt-20 p-5 ">
          <div>
            <img
              className="w-[600px] h-[300px]  rounded-3xl"
              src={image}
              alt=""
            />
          </div>
          <div>
            <div>
              <h1 className="text-[#176AE5] bg-[#ccdaec] text-2xl p-1 px-7 w-[300px] rounded-4xl">
                {experience}+ Years Experience
              </h1>
            </div>

            <div>
              <h1 className="text-4xl font-extrabold my-5">{name}</h1>

              <div className="flex gap-10">
                <h1 className="text-[#757575]">{speciality}</h1>

                <div className="flex  gap-2 items-center  mb-3">
                  <img
                    className="w-5 h-5"
                    src="/public/photos/Group.png"
                    alt=""
                  />
                  <h1 className="text-[#757575]">
                    {" "}
                    License No:{licenseNumber}
                  </h1>
                </div>
              </div>
              <div className="flex gap-7 items-center">
                <h1 className="text-2xl">Availability</h1>
                <div className="flex gap-10">
                  {availability.days.map((avail) => (
                    <p className="bg-[#ffe7be] border border-amber-300  px-5 rounded-4xl text-[#FFA000]">
                      {avail}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-5">
                <h1>Consultation Fee:</h1>
                <h1 className="text-emerald-600 font-bold">
                  Taka : {consultationFee}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto border rounded-2xl border-[#d3cfcf] p-10 mt-10">
        <h1 className="font-bold text-2xl text-center mb-5 border-b-2 border-dashed border-[#e2dada]">
          Book an Appointment
        </h1>

        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Availability</h1>
          <h1 className="bg-[#d6f3de] text-green-500  px-4 rounded-4xl p-1">
            Lawyer Available Today
          </h1>
        </div>

        <div
          role="alert"
          className="alert border-amber-300 alert-info bg-[#ffe8c0] mt-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current text-[#FFA000]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="text-[#FFA000]">
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </span>
        </div>

        <div className="text-center mt-5">
          <Link to={`/booking/${singleLawyer.id}`}>
            <button onClick={()=>handleClicked(singleLawyer.id)} className="bg-green-600 text-white rounded-4xl w-full p-3">
              Book Appointment Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LawyerDetails;
