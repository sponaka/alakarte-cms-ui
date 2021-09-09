import React from "react";
import {Layout} from "antd";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "./App.scss";
import NavBar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/Sidebar";
import Orders from "./components/orders/Orders";
import Customers from "./components/customers/Customers";
import CustomerDetails from "./components/customers/customer-details/CustomerDetails";

function Home() {
    return <div>Home</div>;
}

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Layout>
                    <SideBar />
                    <Layout.Content className="content" style={{background: '#F4F7FC 0% 0% no-repeat padding-box'}}>
                        <Route exact path="/" component={Home} />
                        <Route path="/orders" component={Orders} />
                        <Route path="/customers" component={Customers} />
                        <Route path="/customer/:id" component={CustomerDetails} />
                    </Layout.Content>
                </Layout>
            </Router>
        </div>
    );
}

export default App;