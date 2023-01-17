import { lazy } from "react";
const EmployeesRecord = lazy(() => import("../../pages/employees/record"));
const AddEmployees = lazy(() => import("../../pages/employees/crud"));
const DepartmentsRecord = lazy(() => import("../../pages/departments/record"));

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
  {
    path: "/departments/record",
    href: "/departments/record",
    exact: true,
    element: <DepartmentsRecord />,
  },
];
