import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { asyncRoutes } from "./asyncRoutes";
const MainLayout = lazy(() => import("../components/AppBar"));
const HomePage = lazy(() => import("../pages/homePage"));
const AboutPage = lazy(() => import("../pages/aboutPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        href: "/",
        exact: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        href: "/about",
        exact: true,
        element: <AboutPage />,
      },
      ...asyncRoutes,
    ],
  },
]);
export default router;
