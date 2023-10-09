import { useState, useEffect } from "react";
import Expartcart from "../Expartcart/Expartcart";
import Aos from "aos";
import "aos/dist/aos.css";
import Providedcard from "../Providedcard/Providedcard";
const Serviceprovided = () => {
  const [expart, setexpart] = useState([]);
  useEffect(() => {
    fetch(".../../../../../public/expart.json")
      .then((res) => res.json())
      .then((data) => setexpart(data));
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div >
      <div className="container mx-auto my-20 flex flex-col justify-center items-center gap-2 px-2">
        <h1 className="text-4xl  text-center font-bold text-[#EAA334]">
          Our Service on The Event
        </h1>
        <h3 className="text-xl">Every Events will be Memorable</h3>
        <div className="w-3/12">
          <hr></hr>
        </div>
        <h1 className="container text-center">
          Mosaic Event & Wedding Planner was founded in the year of 2012 in
          Dhaka. We are a professional Event Management organization specialized
          in providing one stop solutions to all your needs. We take care of
          Wedding planning, Birthday party, Corporate events, Brand promotion,
          Stage decoration, Lighting decoration, Catering service and so on.
        </h1>
        <div className="flex flex-row flex-wrap gap-5 justify-center my-10 ">
          {expart.map((expart) => (
            <Providedcard expart={expart}></Providedcard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Serviceprovided;
