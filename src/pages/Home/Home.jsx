import { useLoaderData } from "react-router-dom";
import Donations from "../../components/Donations/Donations";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
  const donations = useLoaderData();
  const [searchCategory, setSearchCategory] = useState("");
  const [filteredDonations, setFilteredDonations] = useState([]);

  const handleCategoryChange = (event) => {
    setSearchCategory(event.target.value);
  };
  const handleSearchClick = () => {
    const lowercaseCategory = searchCategory.toLowerCase();
    const newFilteredDonations = donations.filter((donation) =>
      donation.category.toLowerCase().includes(lowercaseCategory)
    );
    setFilteredDonations(newFilteredDonations);
    setSearchCategory("");
  };
  // console.log(donations);
  return (
    <div>
      <Banner
        searchCategory={searchCategory}
        handleCategoryChange={handleCategoryChange}
        handleSearchClick={handleSearchClick}
      ></Banner>
      <Donations
        donations={filteredDonations.length ? filteredDonations : donations}
      ></Donations>
    </div>
  );
};

export default Home;
