import React, {useEffect, useState} from 'react';
import './CustomerDetails.scss';
import { Row, Col } from 'antd';
import apiClient from "../../../api/api";

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
                "contact_name": "Dileep",
                "contact_email": "jami@horizons.ventures",
                "contact_phone_number": "8136889404",
                "active": true
            });
            setFetchingCustomerInfo(false);
        });
    }, [customerId]);

    if (fetchingCustomerInfo || customerInfo == null) {
        return <div>Fetching</div>
    }

    return (
        <div className='customer-detail-page'>
            <h1 className='page-title'>Customer</h1>
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
    )
}

export default CustomerDetails;