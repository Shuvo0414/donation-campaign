import { useLoaderData } from "react-router-dom";
import Donations from "../../components/Donations/Donations";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
  const donations = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Donations donations={donations}></Donations>
    </div>
  );
};

export default Home;
