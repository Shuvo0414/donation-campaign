import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noDataFound, setNoDataFound] = useState("");

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

  return (
    <div>
      {noDataFound ? (
        <p className=" text-center mt-60  text-lg font-semibold lg:text-xl p-1 lg:p-0 ">
          {noDataFound}
        </p>
      ) : (
        <div className=" grid grid-cols-1 lg:grid-cols-2 container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10 gap-6">
          {donation?.map((donation) => (
            <DonationCard key={donation.id} donation={donation}></DonationCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donation;
