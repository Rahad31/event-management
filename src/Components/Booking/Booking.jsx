import React from "react";
import { Link } from "react-router-dom";
const Booking = ({ event }) => {
  const {
    id,
    event_name,
    price,
    short_description,
    long_description,
    image_url,
  } = event;

  return (
    <div className="flex flex-row gap-3 rounded-md bg-slate-200 hover:bg- md:mx-4 w-[380px] md:w-[758px] lg:mx-0 lg:w-[758px] h-[200px] ">
      <img className="w-[220px] h-auto rounded-l-md" src={image_url}></img>
      <div className="flex flex-col gap-1 m-1  md:gap-3 md:mt-5">
        <div className="text-2xl font-bold text-[#EAA334]">{event_name}</div>

        <p className="">{short_description}</p>
        <p className="">${price}</p>
       
          <button className="w-[100px] h-[40px] rounded-md bg-[#EAA334]  ">
           Booked
          </button>
        
      </div>
    </div>
  );
};

export default Booking;
