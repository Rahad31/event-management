import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveEvent } from "../Localstorage/Localstorage";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const Eventdetails = () => {
  const Eventcard = useLoaderData();
  const { id } = useParams();

  const idInt = parseInt(id);
  const eventdetail = Eventcard.find((eventdetail) => eventdetail.id === idInt);
  const { user } = useContext(AuthContext);
  let User = user.uid;
  console.log(User);
  console.log(User);
  const handleEvent = () => {
    saveEvent(idInt, User);
    toast("Successfully booked");
  };
  //   console.log(eventCard);
  return (
    <div>
      <div className="container mx-auto p-4 lg:p-0 ">
        <div>
          <img
            className=" h-[194px] w-screen mx-auto container md:h-auto lg:h-[700px] rounded-md "
            src={eventdetail.image_url}
          ></img>
        </div>
        <div className="flex justify-center items-center mt-[20px]  ">
          <Link to="/Service">
            <button onClick={handleEvent} className="btn btn-error">
              Book Now
            </button>
          </Link>
        </div>

        <h3 className="mt-20 md:mt-14 text-4xl font-bold">
          {eventdetail.event_name}
        </h3>
        <p className="my-6 text-base font-normal">
          {eventdetail.long_description}
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Eventdetails;
