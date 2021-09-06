import React, {useState} from "react";
import {Avatar, Badge, Drawer} from "antd";
import {BellOutlined, MenuOutlined} from "@ant-design/icons";
import "./Navbar.scss";
import logo from "./../../logo.svg";

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
                {menu}
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