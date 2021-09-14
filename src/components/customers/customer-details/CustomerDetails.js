import React, {useEffect, useState} from 'react';
import './CustomerDetails.scss';
import {Row, Col, Button, Spin, Dropdown, Menu} from 'antd';
import apiClient from "../../../api/api";
import Constants from "../../../constants";
import ReactExport from "react-export-excel";
import {FileExcelOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const {ExcelFile} = ReactExport;
const {ExcelSheet} = ExcelFile;
const ExcelColumn = ExcelFile.ExcelColumn;
const CustomerDetails = ({match}) => {

    const customerId = match.params.id;
    const [customerInfo, setCustomerInfo] = useState(null);
    const [fetchingCustomerInfo, setFetchingCustomerInfo] = useState(false);

    useEffect(() => {
        setFetchingCustomerInfo(true);
        apiClient.get(`customer/${customerId}`).then(response => {
            setCustomerInfo(response);
            setFetchingCustomerInfo(false);
        }).catch((error) => {
            console.error(error);
            setCustomerInfo({
                "id": 1,
                "name": "Sky Deck View Bar",
                "description": "Sky Deck View Bar is a stylish lounge and restaurant on the rooftop of The Bayleaf Intramuros.",
                "tax_id": "12345",
                "phone_number": "8136889404",
                "contact_name": "Dileep Kumar Jami",
                "contact_email": "jami@horizons.ventures",
                "contact_phone_number": "8136889404",
                "active": true
            });
            setFetchingCustomerInfo(false);
        });
    }, [customerId]);

    if (fetchingCustomerInfo || !customerInfo) {
        return <div className='fetching'><Spin size="large" /></div>
    }

    const menu = () => (<Menu style={{fontFamily: 'Poppins-Medium'}}>
        <Menu.Item icon={<FileExcelOutlined />} key='1'>
            <ExcelFile element={<span>Download for finance</span>} filename={Constants.customerInfoFileName}>
                <ExcelSheet data={[customerInfo]} name="Orders">
                    <ExcelColumn label="Order Status" value="phone_number"/>
                    <ExcelColumn label="Order Number" value="contact_name"/>
                    <ExcelColumn label="Customer Name" value="name"/>
                    <ExcelColumn label="Product name" value="contact_phone_number"/>
                </ExcelSheet>
            </ExcelFile>
        </Menu.Item>
        <Menu.Item icon={<FileExcelOutlined />} key='2'>
            <ExcelFile element={<span>Download for havi</span>} filename={Constants.customerInfoFileName}>
                <ExcelSheet data={[customerInfo]} name="Orders">
                    <ExcelColumn label="Order Status" value="phone_number"/>
                    <ExcelColumn label="Order Number" value="contact_name"/>
                    <ExcelColumn label="Customer Name" value="name"/>
                    <ExcelColumn label="Product name" value="contact_phone_number"/>
                </ExcelSheet>
            </ExcelFile>
        </Menu.Item>
    </Menu>);

    return (
        <div className='customer-detail-page'>
            <h1 className='page-title'>Customer</h1>
            <div className='download-actions'>
                <Link
                    to={{
                        pathname: `/orders`,
                        props: {
                            customerFilterSearch: customerInfo.contact_name
                        }
                    }}

                >
                    <Button className='action'>
                        VIEW ORDER HISTORY
                    </Button>
                </Link>

                <Dropdown overlay={menu}>
                    <Button className='action'>
                        DOWNLOAD
                    </Button>
                </Dropdown>
            </div>
            <div className='customer-info'>
                <Row className='bg-white'>
                    <Col flex="300px" className='customer-info-label'>Restaurant Name</Col>
                    <Col flex="auto">{customerInfo.name}</Col>
                </Row>
                <Row>
                    <Col flex="300px" className='customer-info-label'>Address</Col>
                    <Col flex="auto">The Bayleaf, Muralla St, Intramuros, Manila, 1002 Metro Manila, Philippines</Col>
                </Row>
                <Row className='bg-white'>
                    <Col flex="300px" className='customer-info-label'>Tax Identification Number</Col>
                    <Col flex="auto">{customerInfo.tax_id}</Col>
                </Row>
                <Row>
                    <Col flex="300px" className='customer-info-label'>Phone Number</Col>
                    <Col flex="auto">{customerInfo.phone_number}</Col>
                </Row>
                <Row className='bg-white'>
                    <Col flex="300px" className='customer-info-label'>Contact Person Name</Col>
                    <Col flex="auto">{customerInfo.contact_name}</Col>
                </Row>
                <Row>
                    <Col flex="300px" className='customer-info-label'>Contact Person Email</Col>
                    <Col flex="auto">{customerInfo.contact_email}</Col>
                </Row>
                <Row className='bg-white'>
                    <Col flex="300px" className='customer-info-label'>Contact Person Phone Number</Col>
                    <Col flex="auto">{customerInfo.contact_phone_number}</Col>
                </Row>
            </div>
        </div>
    );
}

export default CustomerDetails;