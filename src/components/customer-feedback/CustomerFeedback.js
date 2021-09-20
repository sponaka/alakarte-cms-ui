import React, {useEffect, useState} from "react";

import './CustomerFeedback.scss';
import {Card, Spin} from "antd";
import { Rate } from 'antd';
import APIService from "../../api/service";

const CustomerFeedback = () => {

    const [loading, setLoading] = useState(false);

    const [customerFeedbackData, setCustomerFeedbackData] = useState([]);

    useEffect(() => {
        setLoading(true);
        APIService.getCustomersFeedback().then(response => {
           setCustomerFeedbackData(response);
           setLoading(false);
        }).catch((error) => {
            setLoading(false);
        });
    }, [])

    if (loading) {
        return <div className='fetching'><Spin size="large" /></div>
    }

    return (
        <div className='customer-feedback-page'>
            <h1 className='page-title'>Customer feedback</h1>
            <div className='customer-feedback'>
                {customerFeedbackData.map(feedback => {
                    return (
                        <Card style={{width: 400}} className='feedback-card' key={feedback.feedbackId}>
                            <div className='customer-name'>
                                {feedback.customer_name}
                            </div>
                            <Rate allowHalf value={feedback.rating} className='rating' disabled/>
                            <div className='order-details'>
                                <h4 className='feedback-title'>Order Number</h4>
                                <span className='order-no'>{feedback.order_no}</span>

                                <h4 className='feedback-title'>Feedback</h4>
                                <span className='remarks'>{feedback.remarks}</span>
                            </div>
                        </Card>
                    );
                })}

            </div>
        </div>
    );
}
export default CustomerFeedback;