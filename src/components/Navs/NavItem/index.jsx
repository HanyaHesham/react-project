import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({ icon, title, ...restProps }) {
  return (
    <NavLink
      style={{
        display: "flex",
        alignItems: "center",
        height: "40px",
        marginBottom: "10px",
        border: "1px solid #ddd",
        padding: "0 10px",
        borderRadius: "10px",
      }}
      className="nav-item"
      {...restProps}
    >
      <span style={{ marginInlineEnd: "5px" }}>{icon}</span>
      <span>{title}</span>
    </NavLink>
  );
}
