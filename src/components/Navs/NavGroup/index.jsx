import React, { useEffect, useState } from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
export default function NavItemGroup({
  icon,
  title,
  children,
  active = false,
  ...restProps
}) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(active);
  }, [active]);
  return (
    <ul className="nav-group" {...restProps} style={{ padding: "0 5px" }}>
      <li
        onClick={() => setToggle(!toggle)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <div>
          <span>{icon}</span>
          <span>{title}</span>
        </div>
        {!toggle ? <ArrowDownOutlined /> : <ArrowUpOutlined />}
      </li>
      {toggle && <ul className="sub-menu">{children}</ul>}
    </ul>
  );
}
