import React from "react";
import {Layout} from "antd";
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
            <ul className="ant-menu ant-menu-root ant-menu-inline ant-menu-light menu-items">
                <li key="/" className={location.pathname === '/' ? 'ant-menu-item ant-menu-item-selected': 'ant-menu-item'}>
                    <span>Home</span>
                    <Link to="/" />
                </li>
                <li key="/orders"  className={location.pathname === '/orders' ? 'ant-menu-item ant-menu-item-selected': 'ant-menu-item'}>
                    <span>Orders</span>
                    <Link to="/orders" />
                </li>
                <li key="/customers"  className={location.pathname === '/customers' ? 'ant-menu-item ant-menu-item-selected': 'ant-menu-item'}>
                    <span>Customers</span>
                    <Link to="/customers" />
                </li>
                <li key="/customer-feedback"  className={location.pathname === '/customer-feedback' ? 'ant-menu-item ant-menu-item-selected': 'ant-menu-item'}>
                    <span>Customer Feedback</span>
                    <Link to="/customer-feedback" />
                </li>
                <li key="/products"  className={location.pathname === '/products' ? 'ant-menu-item ant-menu-item-selected': 'ant-menu-item'}>
                    <span>Products</span>
                    <Link to="/products" />
                </li>
            </ul>
        </Layout.Sider>
    );
};

export default SideBar;