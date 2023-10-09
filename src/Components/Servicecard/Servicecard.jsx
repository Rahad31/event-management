import { Link } from "react-router-dom";
const Servicecard = ({ event }) => {
  const {
    id,
    event_name,
    price,
    short_description,
    long_description,
    image_url,
  } = event;

  return (
    <div className="flex flex-row gap-3 rounded-md bg-slate-200 h-[220px] md:h-[200px] hover:bg- md:mx-4 w-[380px] md:w-[758px] lg:mx-0 lg:w-[758px]  ">
      <img className="w-[220px] h-auto rounded-l-md" src={image_url}></img>
      <div className="flex flex-col gap-1 m-1  md:gap-3 md:mt-5">
        <div className="text-2xl font-bold text-[#EAA334]">{event_name}</div>

        <p className="">{short_description}</p>
        <p className="">${price}</p>
        <Link to={`/Servicecard/${id}`}>
          <button className="w-[100px] h-[40px] rounded-md bg-[#EAA334]  ">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Servicecard;
