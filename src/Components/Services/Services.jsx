import { useState, useEffect } from "react";
import Servicecard from "../Servicecard/Servicecard";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(".../../../../../public/event.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  useEffect(() => {
    Aos.init();
  },[]);
  return (
    <div data-aos="fade-right">
      <div className="text-center flex flex-col justify-center items-center gap-4 mb-20">
        <h1 className="text-4xl font-bold text-[#EAA334]">SERVICES</h1>
        <h1 className="text-xl">Every Events will be Memorable</h1>
        <div
          className="w-1/12
       -bold"
        >
          <hr></hr>
        </div>
        <h1 className="container">
          Mosaic Event & Wedding Planner was founded in the year of 2012 in
          Dhaka. We are a professional Event Management organization specialized
          in providing one stop solutions to all your needs. We take care of
          Wedding planning, Birthday party, Corporate events, Brand promotion,
          Stage decoration, Lighting decoration, Catering service and so on.
        </h1>
      </div>

      <div>
        <div className=" container mx-auto flex flex-row flex-wrap gap-5 justify-center ">
          {events.map((event) => (
            <Servicecard key={event.id} event={event}></Servicecard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
