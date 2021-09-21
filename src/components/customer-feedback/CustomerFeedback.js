import React, {useEffect, useState} from "react";

import './CustomerFeedback.scss';
import {Card, Modal, Spin} from "antd";
import {Rate} from 'antd';
import APIService from "../../api/service";
import {Link} from "react-router-dom";
import {CloseCircleOutlined} from "@ant-design/icons";

const CustomerFeedback = () => {

    const [loading, setLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedFeedback, setSelectedFeedback] = useState({
        "feedbackId": 5,
        "customer_id": 5,
        "customer_name": 'Sambeet Sahu',
        "rating": 3,
        "order_no": 5,
        "remarks": "remarks",
        "active": true
    });

    const [customerFeedbackData, setCustomerFeedbackData] = useState([]);

    useEffect(() => {
        setLoading(true);
        APIService.getCustomersFeedback().then(response => {
            setCustomerFeedbackData(response);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
        });
    }, []);

    const openFeedbackModal = (feedback) => {
        setIsModalVisible(true);
        setSelectedFeedback(feedback);
    }

    const closeFeedbackModal = () => {
        setIsModalVisible(false);
    }

    if (loading) {
        return <div className='fetching'><Spin size="large"/></div>
    }

    return (
        <div className='customer-feedback-page'>
            <h1 className='page-title'>Customer feedback</h1>
            <div className='customer-feedback'>
                {customerFeedbackData.map(feedback => {
                    return (
                        <Card style={{width: 400}} className='feedback-card' key={feedback.feedbackId}>
                            <div className='customer-name'>
                                <Link to={{
                                    pathname: `/customer/${feedback.customer_id}`
                                }}
                                >{feedback.customer_name}
                                </Link>
                            </div>
                            <Rate allowHalf value={feedback.rating} className='rating' disabled/>
                            <div className='order-details'>
                                <h4 className='feedback-title'>Order Number</h4>
                                <Link
                                    to={{
                                        pathname: `/orders`,
                                        props: {
                                            orderNoFilterSearch: feedback.order_no
                                        }
                                    }}
                                >
                                    <span className='order-no'>{feedback.order_no}</span>
                                </Link>
                                <h4 className='feedback-title'>Feedback</h4>
                                <p className='remarks overflow-text' onClick={() =>
                                    openFeedbackModal(feedback)
                                }>{feedback.remarks}</p>
                            </div>
                        </Card>
                    );
                })}

            </div>
            <Modal visible={isModalVisible} footer={null} centered closeIcon={<CloseCircleOutlined/>}
                   onCancel={closeFeedbackModal}>
                <div className='customer-name'>
                    {selectedFeedback.customer_name}
                </div>
                <Rate allowHalf value={selectedFeedback.rating} className='rating' disabled/>
                <div className='order-details'>
                    <h4 className='feedback-title'>Order Number</h4>
                    <span className='order-no'>{selectedFeedback.order_no}</span>
                    <h4 className='feedback-title'>Feedback</h4>
                    <span className='remarks'>{selectedFeedback.remarks}</span>
                </div>
            </Modal>
        </div>
    );
}
export default CustomerFeedback;