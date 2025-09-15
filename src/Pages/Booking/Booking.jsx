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
    <div>
      <h1>This is Booking section{singleLawyer.id}</h1>
    </div>
  );
};

export default Booking;
