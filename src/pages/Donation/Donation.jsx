import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noDataFound, setNoDataFound] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const getDonationDataFormLs = JSON.parse(localStorage.getItem("donations"));
    if (getDonationDataFormLs) {
      setDonation(getDonationDataFormLs);
    } else {
      setNoDataFound(
        "There are no donations at the moment. Your contribution can change that!"
      );
    }
  }, []);
  // console.log(noDataFound);
  // console.log(donation);

  const handleSeeAllClick = () => {
    setShowAll(true);
  };

  return (
    <div>
      {noDataFound ? (
        <p className=" text-center mt-60  text-lg font-semibold lg:text-xl p-1 lg:p-0 ">
          {noDataFound}
        </p>
      ) : (
        <div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10 gap-6">
            {donation
              .slice(0, showAll ? donation.length : 4)
              .map((donation, idx) => (
                <DonationCard key={idx} donation={donation} />
              ))}
          </div>
          {donation.length > 4 && !showAll && (
            <button
              onClick={handleSeeAllClick}
              className=" py-[14px] px-7 bg-[#FF444A] text-base font-semibold rounded-lg text-white flex mx-auto"
            >
              See All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
