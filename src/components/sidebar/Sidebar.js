import React from "react";
import {Layout, Menu} from "antd";
import "./Sidebar.scss"
import {Link, useLocation} from "react-router-dom";

const SideBar = () => {
    const location = useLocation();

    return (
        <Layout.Sider
            className="sidebar"
            breakpoint={"lg"}
            theme="light"
            collapsedWidth={0}
            trigger={null}
        >
            <Menu theme="light" defaultSelectedKeys={[location.pathname]} mode="inline" className='menu-items'>
                <Menu.Item key="/">
                    <span>Home</span>
                    <Link to="/" />
                </Menu.Item>
                <Menu.Item key="/orders">
                    <span>Orders</span>
                    <Link to="/orders" />
                </Menu.Item>
                <Menu.Item key="/customers">
                    <span>Customers</span>
                    <Link to="/customers" />
                </Menu.Item>
                <Menu.Item key="/customer-feedback">
                    <span>Customer Feedback</span>
                    <Link to="/customer-feedback" />
                </Menu.Item>
                <Menu.Item key="/product">
                    <span>Product</span>
                    <Link to="/product" />
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    );
};

export default SideBar;