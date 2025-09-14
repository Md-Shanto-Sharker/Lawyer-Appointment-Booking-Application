import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import LawyerDetails from "../Pages/LawyerDetails/LawyerDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/lawyerDetails/:id",
        loader:()=>fetch('/lawyer.json'),
        Component: LawyerDetails },
    ],
  },
]);
