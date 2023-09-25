import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetail from "./DonationDetail";

const DonationsDetails = () => {
  const [donation, setDonation] = useState({});
  const { id } = useParams();
  //   console.log(id);
  // console.log(typeof id);

  const donations = useLoaderData();
  //   console.log(donations);

  useEffect(() => {
    const donationId = parseInt(id);
    // console.log("doantain", donations);
    // console.log("id", id);

    const findDonation = donations.find(
      (donation) => donation?.id === donationId
    );
    setDonation(findDonation);
  }, [id, donations]);
  // console.log(donation);

  return (
    <div>
      <DonationDetail donation={donation}></DonationDetail>
    </div>
  );
};

export default DonationsDetails;
