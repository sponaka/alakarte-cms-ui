import React, {useState} from "react";
import {Avatar, Badge, Drawer, Menu} from "antd";
import {BellOutlined, MenuOutlined} from "@ant-design/icons";
import "./Navbar.scss";
import logo from "./../../logo.svg";
import {Link} from "react-router-dom";

const NavBar = ({menu}) => {
    const [visible, setVisible] = useState(false);
    return (
        <nav className="navbar ak-header">
            <div>
                <MenuOutlined className="menu" onClick={() => setVisible(true)} />
            <Drawer
                title="Topics"
                placement="left"
                onClick={() => setVisible(false)}
                onClose={() => setVisible(false)}
                visible={visible}
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