import { lazy } from "react";
const EmployeesRecord = lazy(() => import("../../pages/employees/record"));
const AddEmployees = lazy(() => import("../../pages/employees/crud"));
const DepartmentsRecord = lazy(() => import("../../pages/departments/record"));
const AboutPage = lazy(() => import("../../pages/aboutPage"));

export const asyncRoutes = [
  {
    path: "/about",
    href: "/about",
    exact: true,
    element: <AboutPage />,
    handle: {
      breadCrumb: [
        {
          title: "sidebar.home",
          path: "/",
          href: "/",
        },
        {
          title: "sidebar.about_us",
        },
      ],
    },
  },

  {
    path: "/employees/record",
    href: "/employees/record",
    exact: true,
    handle: {
      breadCrumb: [
        {
          title: "sidebar.home",
          path: "/",
          href: "/",
        },
        {
          title: "sidebar.employees_record",
        },
      ],
    },
    element: <EmployeesRecord />,
  },
  {
    path: "/employees/add",
    href: "/employees/add",
    exact: true,
    handle: {
      breadCrumb: [
        {
          title: "sidebar.home",
          path: "/",
          href: "/",
        },
        {
          title: "sidebar.add",
        },
      ],
    },
    element: <AddEmployees />,
  },
  {
    path: "/departments/record",
    href: "/departments/record",
    exact: true,
    handle: {
      breadCrumb: [
        {
          title: "sidebar.home",
          path: "/",
          href: "/",
        },
        {
          title: "sidebar.departments_record",
        },
      ],
    },
    element: <DepartmentsRecord />,
  },
];
