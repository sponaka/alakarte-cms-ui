import React from "react";
import {Menu} from "antd";
import './TopicMenu.scss';

const TopicMenu = ({ topics, selectedKey, changeSelectedKey }) => {
    const styledTopics = [];
    topics.forEach((topic, index) =>
        styledTopics.push(
            <Menu.Item key={index} onClick={changeSelectedKey} className='menu-items'>
                {topic}
            </Menu.Item>
        )
    );

    return (
        <Menu mode="inline" selectedKeys={[selectedKey]}>
            {styledTopics}
        </Menu>
    );
}
export default TopicMenu;