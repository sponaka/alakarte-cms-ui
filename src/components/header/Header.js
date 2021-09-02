import {Avatar, Badge, Layout} from 'antd';
import {Header as MainHeader} from "antd/es/layout/layout";
import {BellOutlined} from '@ant-design/icons';

import './Header.scss';

function Header() {
    return (
        <Layout>
            <MainHeader className='ak-header'>
                <div>
                    <span> LOGO </span>
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
            </MainHeader>
        </Layout>
    );
}

export default Header;