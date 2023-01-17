import { lazy } from "react";
const EmployeesRecord = lazy(() => import("../../pages/employees/record"));
const AddEmployees = lazy(() => import("../../pages/employees/crud"));

export const asyncRoutes = [
  {
    path: "/employees/record",
    href: "/employees/record",
    exact: true,
    element: <EmployeesRecord />,
  },
  {
    path: "/employees/add",
    href: "/employees/add",
    exact: true,
    element: <AddEmployees />,
  },
];
