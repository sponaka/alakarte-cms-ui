import React from "react";
import {Layout, Menu} from "antd";
import "./Sidebar.scss"
import {Link} from "react-router-dom";

const SideBar = ({menu}) => {
    return (
        <Layout.Sider
            className="sidebar"
            breakpoint={"lg"}
            theme="light"
            collapsedWidth={0}
            trigger={null}
        >
            {/*{menu}*/}
            <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline" className='menu-items'>
                <Menu.Item key="1">
                    <span>Home</span>
                    <Link to="/" />
                </Menu.Item>
                <Menu.Item key="2">
                    <span>Order</span>
                    <Link to="/order" />
                </Menu.Item>
                <Menu.Item key="3">
                    <span>Customer</span>
                    <Link to="/customer" />
                </Menu.Item>
                <Menu.Item key="4">
                    <span>Customer Feedback</span>
                    <Link to="/customer-feedback" />
                </Menu.Item>
                <Menu.Item key="5">
                    <span>Product</span>
                    <Link to="/product" />
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    );
};

export default SideBar;