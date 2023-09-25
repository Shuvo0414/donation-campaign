import { useEffect, useState } from "react";

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
  console.log(noDataFound);
  console.log(donation);

  return (
    <div>
      {noDataFound ? (
        <p className=" text-center mt-60  text-lg font-semibold lg:text-xl p-1 lg:p-0 ">
          {noDataFound}
        </p>
      ) : (
        <div>
          <h1>thanks for donation</h1>
        </div>
      )}
    </div>
  );
};

export default Donation;
