import { useState, useEffect } from "react";
import Expartcart from "../Expartcart/Expartcart";
import Aos from "aos";
import "aos/dist/aos.css";

const Expart = () => {
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
    <div data-aos="fade-left">
      <div className="container mx-auto my-20 flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-bold text-[#EAA334]">EXPERT AREA</h1>
        <h3 className="text-xl">Every Events will be Memorable</h3>
        <div className="w-3/12">
          <hr></hr>
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-center ">
          {expart.map((expart) => (
            <Expartcart expart={expart}></Expartcart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expart;
