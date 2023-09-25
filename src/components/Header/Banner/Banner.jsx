import bannerBg from "../../../assets/FB_IMG_1695618253156.jpg";

const bannerStyle = {
  backgroundImage: `url(${bannerBg})`,
  backgroundSize: "cover",
  backgroundBlendMode: "color-black",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
};

const Banner = () => {
  return (
    <div
      className=" bg-blend-overlay   w-full h-full md:w-[80%] md:h-[60vh] container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10 md:mt-36 "
      style={bannerStyle}
    >
      <div>
        <h1 className=" mt-40 text-xl md:text-5xl font-bold text-center">
          I Grow By Helping People In Need
        </h1>
        <div className=" mx-auto flex justify-center items-center mt-4 md:mt-10">
          <input
            className=" w-[230px] md:w-[470px] px-2 md:px-4 py-2 md:py-4 rounded-lg border border-red-200  text-[#0B0B0B66]"
            type="text"
            placeholder="Search here...."
          />
          <button className=" py-2 px-3 md:py-4 md:px-7 bg-[#FF444A] rounded-lg text-white ml-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
