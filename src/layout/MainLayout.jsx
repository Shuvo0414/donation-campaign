import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/Navbar/NavBar";

const MainLayout = () => {
  return (
    <div>
      <section className="">
        <NavBar></NavBar>
      </section>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
