import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto my-24 flex flex-col gap-12 lg:flex-row">
      <div data-aos="fade-right" className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-[#EAA334]">WELCOME</h1>
        <h3 className="text-xl">Every Events will be Memorable</h3>
        <div className="w-3/12 ">
          <hr></hr>
        </div>
        <p>
          Mosaic Event & Wedding Planner was founded in 2012 with the belief
          that special moments should be celebrated with unforgettable style.
          Your celebration should feel like it could only have been hosted by or
          for you. Our job is to translate your personality, taste and style
          into an experience that will live in the memory of everyone who
          attended- including you! Our goal is to make each & every event a
          different Meaning, Identity and a Vision with true professionalism to
          chart the roads of informative & entertaining events. We take care of
          Wedding planning, Birthday party, Corporate events, Brand promotion,
          Stage decoration, Lighting decoration, Catering service and so on. Of
          course, achieving our clients’ satisfaction is what motivates us to
          bring out the best events. We believe in the strengths of each of our
          team members and we have proved to exceed our clients’ expectations
          and presenting them with successful events that raved fantastic
          reviews around the country. Sky born is an expression of our deep love
          for building a day of memorable experiences so that your guests and
          you are blown away. We have a team of experienced and highly skilled
          young professional people. It’s us. But it’s also you, it’s a
          celebration of the uniqueness that you’ve been wanting to share with
          your friends and families. Since, the time we have been established,
          we made it our mission to provide eye catching concepts, refreshing
          and satisfying experience with fruitful results to our clients. We
          ensure the best Event Management services with the reasonable cost.
        </p>
      </div>
      <div data-aos="fade-left" className="">
        <iframe
          className="rounded-md"
          width="760"
          height="460"
          src="https://www.youtube.com/embed/ipw1fQad5sg?si=VoKATQThHYw9zs6d"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Welcome;
