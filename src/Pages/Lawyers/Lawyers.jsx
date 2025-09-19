import React, { useEffect, useState } from "react";
import Lawyer from "../Lawyer/Lawyer";

const Lawyers = () => {
  const [lawyers, setLawyers] = useState([]);
  useEffect(() => {
    fetch("/lawyer.json").then((res) =>
      res.json().then((data) => setLawyers(data))
    );
  }, []);

  // console.log(lawyers);
  return (
    <div>
      <div className="my-10 text-center">
        <h1 className="text-2xl font-bold">Our Best Lawyers</h1>
        <p className="mb-2">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine{" "}
          <br />
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className="grid grid-cols-2 justify-between gap-20 w-10/12 mx-auto">
        {lawyers.map((lawyer) => (
          <Lawyer key={lawyer.id} lawyer={lawyer}></Lawyer>
        ))}
      </div>
    </div>
  );
};

export default Lawyers;
