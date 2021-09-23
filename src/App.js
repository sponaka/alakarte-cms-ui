import React from "react";
import {Layout} from "antd";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import "./App.scss";
import NavBar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/Sidebar";
import Orders from "./components/orders/Orders";
import Customers from "./components/customers/Customers";
import CustomerDetails from "./components/customers/customer-details/CustomerDetails";
import CustomerFeedback from "./components/customer-feedback/CustomerFeedback";
import Home from "./components/home/Home";
import Products from "./components/products/Products";


function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Layout>
                    <SideBar />
                    <Layout.Content className="content" style={{background: '#F4F7FC 0% 0% no-repeat padding-box'}}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/orders" component={Orders} />
                            <Route path="/customers" component={Customers} />
                            <Route path="/customer/:id" component={CustomerDetails} />
                            <Route path="/customer-feedback" component={CustomerFeedback} />
                            <Route path="/products" component={Products} />
                            <Redirect from='*' to='/' />
                        </Switch>
                    </Layout.Content>
                </Layout>
            </Router>
        </div>
    );
}

export default App;