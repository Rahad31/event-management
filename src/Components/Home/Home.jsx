import Slider from "../Slider/Slider";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import Welcome from "../Welcome/Welcome";
import Expart from "../Expart/Expart";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Welcome></Welcome>
      <Services></Services>
      <Expart></Expart>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
};

export default Home;
