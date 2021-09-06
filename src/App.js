import React, { useState } from "react";
import { Layout } from "antd";
import TopicMenu from "./components/feature-menu/TopicMenu";

import "./App.scss";
import NavBar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/Sidebar";


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
            <NavBar menu={Menu} />
            <Layout>
                <SideBar menu={Menu} />
                <Layout.Content className="content">
                    {topics[contentIndex]}
                </Layout.Content>
            </Layout>
        </div>
    );
}

export default App;