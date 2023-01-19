import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { asyncRoutes } from "./asyncRoutes";
const MainLayout = lazy(() => import("../components/AppBar"));
const HomePage = lazy(() => import("../pages/homePage"));

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
      ...asyncRoutes,
    ],
  },
]);
export default router;
