import React from "react";

import './CustomerFeedback.scss';
import {Card} from "antd";
import { Rate } from 'antd';

const CustomerFeedback = () => {

    const customerFeedbackData = [
        {
            "feedbackId": 1,
            "customer_id": 1,
            "customer_name": 'Ian Pisano',
            "rating": 5,
            "order_no": 13426,
            "remarks": "I have received the order right on time. It was such a fast and neat delivery.",
            "active": true
        },
        {
            "feedbackId": 2,
            "customer_id": 2,
            "customer_name": 'Akhil Mohan',
            "rating": 4,
            "order_no": 26252,
            "remarks": "The packaging is done quite nicely. Seems the stock is fresh",
            "active": true
        },
        {
            "feedbackId": 3,
            "customer_id": 3,
            "customer_name": 'Shrey Baheti',
            "rating": 4.5,
            "order_no": 13542,
            "remarks": "remarks",
            "active": false
        },
        {
            "feedbackId": 4,
            "customer_id": 4,
            "customer_name": 'Aakanshu Gupta',
            "rating": 3.5,
            "order_no": 20421,
            "remarks": "remarks",
            "active": false
        },
        {
            "feedbackId": 5,
            "customer_id": 5,
            "customer_name": 'Sambeet Sahu',
            "rating": 3,
            "order_no": 12311,
            "remarks": "remarks",
            "active": true
        }
    ]

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