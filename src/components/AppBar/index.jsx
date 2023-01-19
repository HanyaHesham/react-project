import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  InfoCircleOutlined,
  UserOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Outlet, useLocation, useMatches } from "react-router-dom";
import { useTranslation } from "react-i18next" ;
import NavItem from "../Navs/NavItem";
import NavItemGroup from "../Navs/NavGroup";
import CustomBreadCrumb from "../CustomBreadCrumb";

const { Header, Sider, Content, Footer } = Layout;

function AppBar({ expand, onChange, drawerWidth }) {
  const { t } = useTranslation();
  const location = useLocation();

  const headerStyle = {
    width: expand ? `calc(100% - ${drawerWidth}px)` : `calc(100% - 2rem)`,
  };

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: "/",
      icon: <DashboardOutlined />,
      title: t("sidebar.home"),
      path: "/",
    },
    {
      key: "/about",
      icon: <InfoCircleOutlined />,
      title: t("sidebar.about_us"),
      path: "/about",
    },
    {
      key: "/employees/record",
      icon: <UserOutlined />,
      title: t("sidebar.employees"),
      activeRoutes: ["/employees/record", "/employees/add"],
      children: [
        {
          key: "/employees/record",
          icon: <UserOutlined />,
          title: t("sidebar.employees_record"),
          path: "/employees/record",
        },
        {
          key: "/employees/add",
          icon: <PlusCircleOutlined />,
          title: t("sidebar.add"),
          path: "/employees/add",
        },
      ],
    },
    {
      key: "/departments/record",
      icon: <UserOutlined />,
      title: t("sidebar.departments"),
      activeRoutes: ["/departments/record"],
      children: [
        {
          key: "/departments/record",
          icon: <UserOutlined />,
          title: t("sidebar.departments_record"),
          path: "/departments/record",
        },
      ],
    },
  ];

  // const flatItems = [];
  // menuItems.forEach((item) => {
  //   if (item.children) {
  //     flatItems.push(...item.children);
  //   } else {
  //     flatItems.push(item);
  //   }
  // });
  // const activeRoute = flatItems.find((item) => item.path == location.pathname);
  return (
    <Layout className="app-bar">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {menuItems.map((item, index) => {
          if (!item.children) {
            return (
              <NavItem
                key={index}
                to={item.path}
                title={item.title}
                icon={item.icon}
              />
            );
          } else {
            return (
              <NavItemGroup
                active={item.activeRoutes.includes(location.pathname)}
                key={index}
                to={item.path}
                title={item.title}
                icon={item.icon}
              >
                <>
                  {item.children.map((child, childIndex) => {
                    return (
                      <NavItem
                        key={childIndex}
                        to={child.path}
                        title={child.title}
                        icon={child.icon}
                      />
                    );
                  })}
                </>
              </NavItemGroup>
            );
          }
        })}

        {/* <Menu
          className="sidebar"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={location.pathname}
          defaultOpenKeys={location.pathname}
          activeKey={location.pathname}
          items={menuItems}
        /> */}
      </Sider>
      <Layout className="site-layout">
        <Header style={{ headerStyle, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
              //   onClick: () => onChange(!expand),
            }
          )}
        </Header>
        <Layout>
          <div
            style={{
              margin: "24px 16px 0",
            }}
          >
            <CustomBreadCrumb />
          </div>

          <Content
            style={{
              padding: 24,
              background: colorBgContainer,
              margin: "24px 16px 0",
              overflow: "initial",
            }}
          >
            <Outlet />
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            {new Date().getFullYear()}©
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default AppBar;
