import PropTypes from "prop-types";
import swal from "sweetalert";

const DonationDetail = ({ donation }) => {
  const { id, img, title, description, price, btn_bg } = donation;
  //   console.log(donation);

  const btnStyle = {
    backgroundColor: btn_bg,
  };
  const handleDonateBtn = () => {
    const addedStoreDonationDataInArray = [];
    const storeDonationData = JSON.parse(localStorage.getItem("donations"));
    if (!storeDonationData) {
      addedStoreDonationDataInArray.push(donation);
      localStorage.setItem(
        "donations",
        JSON.stringify(addedStoreDonationDataInArray)
      );
    } else {
      addedStoreDonationDataInArray.push(...storeDonationData, donation);
      localStorage.setItem(
        "donations",
        JSON.stringify(addedStoreDonationDataInArray)
      );
    }
    swal("Thank you for your generous donation!");
  };

  return (
    <div className="container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10">
      <h1>donation : {id}</h1>
      <div>
        <div className="relative">
          <img className="w-[1320px]" src={img} alt="" />
          {/* <div className=" absolute  -mt-[60px] lg:-mt-32  bg-[#0B0B0B80] opacity-50 w-[300px]  h-[60px] lg:w-[1320px] lg:h-[130px]"></div> */}
          <div className=" absolute -mt-12  lg:-mt-24 ml-4 lg:ml-9 ">
            <button
              onClick={handleDonateBtn}
              className=" py-2  lg:py-4 px-2 lg:px-7 rounded  text-white font-semibold  text-xs lg:text-xl"
              style={btnStyle}
            >
              Donate {price}
            </button>
          </div>
        </div>
        <h1 className="text-[20px] md:text-[40px] font-bold mt-7 md:mt-14">
          {title}
        </h1>
        <p className=" text-base font-normal text-[#0B0B0B70] mt-3 md:mt-6">
          {description}
        </p>
      </div>
    </div>
  );
};

DonationDetail.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationDetail;
