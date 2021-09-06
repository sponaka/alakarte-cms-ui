import React, {useState} from "react";
import {Avatar, Badge, Drawer, Menu} from "antd";
import {BellOutlined, MenuOutlined} from "@ant-design/icons";
import "./Navbar.scss";
import logo from "./../../logo.svg";
import {Link, useLocation} from "react-router-dom";

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    return (
        <nav className="navbar ak-header">
            <div>
                <MenuOutlined className="menu" onClick={() => setVisible(true)} />
            <Drawer
                title="Features"
                placement="left"
                onClick={() => setVisible(false)}
                onClose={() => setVisible(false)}
                visible={visible}
            >
                <Menu theme="light" defaultSelectedKeys={[location.pathname]} mode="inline" className='menu-items'>
                    <Menu.Item key="/">
                        <span>Home</span>
                        <Link to="/" />
                    </Menu.Item>
                    <Menu.Item key="/order">
                        <span>Order</span>
                        <Link to="/order" />
                    </Menu.Item>
                    <Menu.Item key="/customer">
                        <span>Customer</span>
                        <Link to="/customer" />
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
            </Drawer>
            <a href="/">
                <img src={logo} className="logo" alt="logo"/>
            </a>
            </div>
            <div className='user-details'>
                <div style={{marginRight: '25px', display: "flex"}}>
                    <Badge count={2} size="small">
                        <BellOutlined style={{fontSize: '22px'}}/>
                    </Badge>
                </div>
                <Avatar style={{backgroundColor: '#0058FF'}}>JD</Avatar>
                &nbsp; &nbsp;
                <span className='user-name'>Dileep Jami</span>
            </div>
        </nav>
    );
};

export default NavBar;