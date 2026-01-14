import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import LandingPage from "../pages/LandingPage";
import MapPage from "../pages/MapPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/map",
        element: <MapPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
