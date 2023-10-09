import Slider from "../Slider/Slider";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import Welcome from "../Welcome/Welcome";
import Expart from "../Expart/Expart";
import Gallery from "../Gallery/Gallery";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="mx-4">
       <Slider></Slider>
      <Welcome></Welcome>
      <Services></Services>
      <Expart></Expart>
      <Gallery></Gallery></div>
     
      <Footer></Footer>
    </div>
  );
};

export default Home;
