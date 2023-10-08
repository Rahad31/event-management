import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-right"
      className=" container mx-auto flex flex-col justify-center items-center gap-2 my-20"
    >
      <h1 className="text-3xl font-bold text-[#EAA334]">PHOTO GALLERY</h1>
      <h3 className="text-xl">Every Events will be Memorable</h3>
      <div className="w-3/12">
        <hr></hr>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-2 rounded-md ">
        <img
          src="https://i.ibb.co/W3Vr4LF/service-u-Yot-F3-GHa-W846an06-QXrsr-QA6zpb-M30r51n-EAMEl.jpg"
          className="w-[300px] h-[400px] rounded-md"
        ></img>
        <img
          src="https://i.ibb.co/dLhZy6c/service-ed-Z9-Gvj-IUp8a4-BDQ2-Zgmno-Yr33q-C3-U1pbz7ym-IQK.jpg"
          className="w-[300px] h-[400px] rounded-md"
        ></img>
        <img
          src="https://i.ibb.co/mHDq1PT/service-f7-Ty-CTVCvl-SWo-OFT8-Qm-B420-FVk1-Bq-J9nl-Vza-KQTs.jpg"
          className="w-[300px] h-[400px] rounded-md"
        ></img>
        <img
          src="https://i.ibb.co/5FLwpmB/service-6-Ts-Ew-Qm-Iu-Nhb-HCSxfj-Wk-EMcoy-Urhbfl23-WARv-X2-R.jpg"
          className="w-[300px] h-[400px] rounded-md"
        ></img>
        <img
          src="https://i.ibb.co/mC7jwh3/service-2-DWXQ5zw6jzpx0-Hk-U5vx-FMOHSCa3-Kgtqj-K5-Es-TJk.jpg"
          className="w-[300px] h-[400px] rounded-md"
        ></img>
      </div>
    </div>
  );
};

export default Gallery;
