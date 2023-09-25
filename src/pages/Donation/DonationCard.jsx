import PropTypes from "prop-types";

const DonationCard = ({ donation }) => {
  const {
    img,
    title,
    category,
    card_bg,
    category_bg,
    category_text_color,
    title_text_color,
    price,
    btn_bg,
  } = donation;

  const cardStyles = {
    backgroundColor: card_bg,
  };

  const categoryStyles = {
    backgroundColor: category_bg,
    color: category_text_color,
  };

  const titleStyles = {
    color: title_text_color,
  };
  const btnStyle = {
    backgroundColor: btn_bg,
  };

  return (
    <div>
      <div
        className="flex  items-center   bg-white  shadow-md rounded-lg"
        style={cardStyles}
      >
        <div>
          <img
            src={img}
            className=" rounded-lg w-[220px] h-[218px] object-cover"
          />
        </div>
        <div className="p-6">
          <span
            className=" text-sm font-normal p-1 rounded "
            style={categoryStyles}
          >
            {category}
          </span>
          <h4 className="mt-3 text-2xl font-semibold ">{title}</h4>
          <p className=" text-base font-semibold mt-2" style={titleStyles}>
            {price}
          </p>
          <button
            className=" px-4 py-2 text-lg font-semibold  text-white rounded mt-7 bg-red-400"
            style={btnStyle}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;
