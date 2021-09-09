import React from 'react';
import './CustomerDetails.scss';
import { Row, Col } from 'antd';

const CustomerDetails = ({match}) => {
    return (
        <div className='customer-detail-page'>
            <h1 className='page-title'>Customer</h1>
            <div className='customer-info'>
                <Row className='bg-white'>
                    <Col span={6} className='customer-info-label'>Restaurant Name</Col>
                    <Col span={6}>Sky Deck View Bar</Col>
                </Row>
                <Row>
                    <Col span={6} className='customer-info-label'>Address</Col>
                    <Col span={6}>The Bayleaf, Muralla St, Intramuros, Manila, 1002 Metro Manila, Philippines</Col>
                </Row>
                <Row className='bg-white'>
                    <Col span={6} className='customer-info-label'>Tax Identification Number</Col>
                    <Col span={6}>7382942</Col>
                </Row>
                <Row>
                    <Col span={6} className='customer-info-label'>Phone Number</Col>
                    <Col span={6}>+63 (0)2 318 5000</Col>
                </Row>
                <Row className='bg-white'>
                    <Col span={6} className='customer-info-label'>Contact Person Name</Col>
                    <Col span={6}>Dileep Kumar Jami</Col>
                </Row>
                <Row>
                    <Col span={6} className='customer-info-label'>Contact Person Email</Col>
                    <Col span={6}>jami@horizons.ventures</Col>
                </Row>
                <Row className='bg-white'>
                    <Col span={6} className='customer-info-label'>Contact Person Phone Number</Col>
                    <Col span={6}>8136889404</Col>
                </Row>
            </div>
        </div>
    )
}

export default CustomerDetails;