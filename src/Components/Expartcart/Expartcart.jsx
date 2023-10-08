const Expartcart = ({ expart }) => {
  const { name, url, description } = expart;
  return (
    <div className="flex justify-center items-center  bg-slate-200 rounded-md ">
      <div className="h-[350px] w-[239px] rounded-md flex flex-col gap-2 ">
        <img src={url} className="h-[200px] rounded-t-md"></img>
        <h3 className="text-center text-[#EAA334] text-xl font-semibold">
          {name}
        </h3>
        <p className="text-center px-1">{description}</p>
      </div>
    </div>
  );
};

export default Expartcart;
