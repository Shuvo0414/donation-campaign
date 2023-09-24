import PropTypes from "prop-types";

const DonationsCard = ({ donations }) => {
  const {
    img,
    category,
    title,
    card_bg,
    category_bg,
    category_text_color,
    title_text_color,
  } = donations;

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
  return (
    <div
      className=" mt-0 md:mt-12 lg:mt-24 w-[312px] rounded-lg bg-white   shadow-md mx-auto md:mx-auto lg:mx-0"
      style={cardStyles}
    >
      <div>
        <img className="object-cover w-full rounded-lg" src={img} />
      </div>

      <div className="p-6">
        <a className=" text-sm font-medium p-1 rounded" style={categoryStyles}>
          {category}
        </a>
        <h2 className=" text-xl font-semibold mt-3" style={titleStyles}>
          {title}
        </h2>
      </div>
    </div>
  );
};

DonationsCard.propTypes = {
  donations: PropTypes.object.isRequired,
};
export default DonationsCard;
