import React, {useEffect, useState} from "react";

import './CustomerFeedback.scss';
import {Card, Spin} from "antd";
import { Rate } from 'antd';
import APIService from "../../api/service";
import {Link} from "react-router-dom";

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