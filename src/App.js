import React from "react";
import {Layout} from "antd";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "./App.scss";
import NavBar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/Sidebar";

function Home() {
    return <div>Home</div>;
}
function Order() {
    return <div>Order</div>;
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
                        <Route path="/order" component={Order} />
                    </Layout.Content>
                </Layout>
            </Router>
        </div>
    );
}

export default App;