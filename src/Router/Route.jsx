import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import DonationsDetails from "../pages/DonationDetails/DonationsDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donationsDetails/:id",
        element: <DonationsDetails></DonationsDetails>,
        loader: () => fetch("/donation.json"),
      },
    ],
  },
]);

export default Route;
