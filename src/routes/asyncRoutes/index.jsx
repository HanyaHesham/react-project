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
          to: "/",
        },
        {
          title: "sidebar.about_us",
          to: "",
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
          to: "/",
        },
        {
          title: "sidebar.employees_record",
          to: "",
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
          to: "/",
        },
        {
          title: "sidebar.add",
          to: "",
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
          to: "/",
        },
        {
          title: "sidebar.departments_record",
          to: "",
        },
      ],
    },
    element: <DepartmentsRecord />,
  },
];
