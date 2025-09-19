import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import LawyerDetails from "../Pages/LawyerDetails/LawyerDetails";
import Booking from "../Pages/Booking/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/lawyerDetails/:id",
        hydrateFallbackElement:<span className="loading loading-spinner loading-xl"></span>,
        loader: () => fetch("/lawyer.json"),
        Component: LawyerDetails,
      },

      {
        path: "/booking/:id",
        loader: () => fetch("/lawyer.json"),
        Component: Booking,
      },
    ],
  },
]);
