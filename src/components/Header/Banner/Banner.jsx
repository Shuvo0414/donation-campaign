import PropTypes from "prop-types";

import bannerBg from "../../../assets/FB_IMG_1695618253156.jpg";

const bannerStyle = {
  backgroundImage: `url(${bannerBg})`,
  backgroundSize: "cover",
  backgroundBlendMode: "color-black",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
};

const Banner = ({
  searchCategory,
  handleCategoryChange,
  handleSearchClick,
}) => {
  // console.log(handleSearchClick);
  // console.log(searchCategory);
  // console.log(handleCategoryChange);
  return (
    <div
      className=" bg-blend-overlay   w-full h-full  lg:h-[60vh]  mx-auto px-8 md:px-10 lg:px-24 p-5 my-10  object-cover "
      style={bannerStyle}
    >
      <div>
        <h1 className=" mt-5 md:mt-20 lg:mt-48 text-xl md:text-4xl lg:text-5xl font-bold text-center">
          I Grow By Helping People In Need
        </h1>
        <div className=" mx-auto flex justify-center items-center mt-4 md:mt-10">
          <input
            className=" w-[230px] md:w-[470px] px-2 md:px-4 py-2 md:py-4 rounded-lg border border-[#DEDEDE] text-[#0B0B0B66]"
            type="text"
            placeholder="Search here...."
            value={searchCategory}
            onChange={handleCategoryChange}
          />
          <button
            onClick={handleSearchClick}
            className=" py-2 px-3 md:py-4 md:px-7 bg-[#FF444A] rounded-lg text-white ml-2"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  searchCategory: PropTypes.string.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
};

export default Banner;
