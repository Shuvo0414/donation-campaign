import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationsCard = ({ donations }) => {
  const {
    id,
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
    <div>
      <Link to={`/donationsDetails/${id}`}>
        <div
          className=" mt-0 md:mt-12 lg:mt-24 w-[312px] rounded-lg bg-white   shadow-md mx-auto md:mx-auto lg:mx-0"
          style={cardStyles}
        >
          <div>
            <img className=" rounded-lg" src={img} />
          </div>

          <div className="p-6">
            <span
              className=" text-sm font-medium p-1 rounded"
              style={categoryStyles}
            >
              {category}
            </span>
            <h2 className=" text-xl font-semibold mt-3" style={titleStyles}>
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

DonationsCard.propTypes = {
  donations: PropTypes.object.isRequired,
};
export default DonationsCard;
