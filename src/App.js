import React, { useState } from "react";
import {Layout} from "antd";
import TopicMenu from "./components/feature-menu/TopicMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
    const topics = ["Order", "Customer", "Customer Feedback", "Product"];
    const [contentIndex, setContentIndex] = useState(0);
    const [selectedKey, setSelectedKey] = useState("0");
    const changeSelectedKey = (event) => {
        const key = event.key;
        setSelectedKey(key);
        setContentIndex(+key);
    };
    const Menu = (
        <TopicMenu
            topics={topics}
            selectedKey={selectedKey}
            changeSelectedKey={changeSelectedKey}
        />
    );
    return (
        <div className="App">
            <Router>
                <NavBar menu={Menu} />
                <Layout>
                    <SideBar menu={Menu} />
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