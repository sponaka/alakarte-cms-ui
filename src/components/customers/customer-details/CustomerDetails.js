import React from 'react';
import './CustomerDetails.scss';
import { Row, Col } from 'antd';

const CustomerDetails = ({match}) => {
    return (
        <div className='customer-detail-page'>
            <h1 className='page-title'>Customer</h1>
            <div className='customer-info'>
                <Row className='bg-white'>
                    <Col flex="300px" className='customer-info-label'>Restaurant Name</Col>
                    <Col flex="auto">Sky Deck View Bar</Col>
                </Row>
                <Row>
                    <Col flex="300px" className='customer-info-label'>Address</Col>
                    <Col flex="auto">The Bayleaf, Muralla St, Intramuros, Manila, 1002 Metro Manila, Philippines</Col>
                </Row>
                <Row className='bg-white'>
                    <Col flex="300px" className='customer-info-label'>Tax Identification Number</Col>
                    <Col flex="auto">7382942</Col>
                </Row>
                <Row>
                    <Col flex="300px" className='customer-info-label'>Phone Number</Col>
                    <Col flex="auto">+63 (0)2 318 5000</Col>
                </Row>
                <Row className='bg-white'>
                    <Col flex="300px" className='customer-info-label'>Contact Person Name</Col>
                    <Col flex="auto">Dileep Kumar Jami</Col>
                </Row>
                <Row>
                    <Col flex="300px" className='customer-info-label'>Contact Person Email</Col>
                    <Col flex="auto">jami@horizons.ventures</Col>
                </Row>
                <Row className='bg-white'>
                    <Col flex="300px" className='customer-info-label'>Contact Person Phone Number</Col>
                    <Col flex="auto">8136889404</Col>
                </Row>
            </div>
        </div>
    )
}

export default CustomerDetails;