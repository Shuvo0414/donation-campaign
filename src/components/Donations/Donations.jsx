import DonationsCard from "./DonationsCard";
import PropTypes from "prop-types";

const Donations = ({ donations }) => {
  //   console.log(donations);
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10 gap-6">
        {donations?.map((donations) => (
          <DonationsCard
            key={donations.id}
            donations={donations}
          ></DonationsCard>
        ))}
      </div>
    </div>
  );
};
Donations.propTypes = {
  donations: PropTypes.array.isRequired,
};
export default Donations;
