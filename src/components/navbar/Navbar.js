import React, {useState} from "react";
import {Avatar, Badge, Drawer, Menu, Button} from "antd";
import {BellOutlined, MenuOutlined} from "@ant-design/icons";
import "./Navbar.scss";
import logo from "./../../logo.svg";
import {Link, useLocation} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
      } = useAuth0();

    const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
 

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
                    <Menu.Item key="/products">
                        <span>Products</span>
                        <Link to="/products" />
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
                {/* <Avatar style={{backgroundColor: '#0058FF'}}>JD</Avatar>
                &nbsp; &nbsp;
                <span className='user-name'>Dileep Jami</span> */}
               <div>

                  {!isAuthenticated && (
                
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    className="btn-margin"
                    onClick={() => loginWithRedirect()}
                  >
                    Log in
                  </Button>
                
                 )}

                {isAuthenticated && (
                   <div> 

                     <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                    />

                    &nbsp;&nbsp;
                     <Button
                     id="qsLogoutBtn"
                     onClick={() => logoutWithRedirect()}
                   >
                     Log out
                   </Button>
                   

                    
                  </div>  

                )}
              </div>  
            </div>
        </nav>
    );
};

export default NavBar;