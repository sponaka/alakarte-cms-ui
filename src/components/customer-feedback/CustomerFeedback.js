import React, {useEffect, useState} from "react";

import './CustomerFeedback.scss';
import {Button, Card, List, Modal, Select, Spin} from "antd";
import {Rate} from 'antd';
import APIService from "../../api/service";
import {Link} from "react-router-dom";
import {CloseCircleOutlined} from "@ant-design/icons";

const CustomerFeedback = () => {

    const {Option} = Select;

    const [loading, setLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedFeedback, setSelectedFeedback] = useState({});

    const [customerNameFilter, setCustomerNameFilter] = useState(null);
    const [orderNumberFilter, setOrderNumberFilter] = useState(null);
    const [ratingFilter, setRatingFilter] = useState(null);

    const [customers, setCustomers] = useState([]);
    const [orderNumbers, setOrderNumbers] = useState([]);
    const [ratings, setRatings] = useState([]);

    const [customerFeedbackData, setCustomerFeedbackData] = useState([]);
    const [selectedCustomerFeedbackData, setSelectedCustomerFeedbackData] = useState([]);

    useEffect(() => {
        setLoading(true);
        APIService.getCustomersFeedback().then(response => {
            setCustomerFeedbackData(response);
            updateFilterOptions(response);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
        });
    }, []);

    const isNotNullAndNotUndefined = (input) => input !== null && input !== undefined;

    const updateFilterOptions = (filteredData) => {
        setRatings([...new Set(filteredData.map(feedback => feedback.rating).sort())]);
        setCustomers([...new Set(filteredData.map(feedback => feedback.customer_name))]);
        setOrderNumbers(filteredData.map(order => order.order_no));
        setSelectedCustomerFeedbackData(filteredData);
    }

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

    const resetFilters = () => {
        setRatingFilter(null);
        setCustomerNameFilter(null);
        setOrderNumberFilter(null);
        updateFilterOptions(customerFeedbackData);
    }

    return (
        <div className='customer-feedback-page'>
            <h1 className='page-title'>Customer feedback</h1>
            <div className='filters-container'>
                <div className='order-number'>
                    <div className='filter-name'>SEARCH BY ORDER NUMBER</div>
                    <Select
                        showSearch
                        allowClear
                        style={{width: 200}}
                        placeholder="Search"
                        value={orderNumberFilter}
                        onChange={(orderNo) => {
                            setOrderNumberFilter(orderNo);
                            let filteredData;
                            if (orderNo !== undefined) {
                                filteredData = customerFeedbackData.filter(feedback => feedback.order_no === orderNo);
                            } else {
                                filteredData = customerFeedbackData;
                            }
                            if (isNotNullAndNotUndefined(customerNameFilter)) {
                                filteredData = filteredData.filter(feedback => feedback.customer_name.includes(customerNameFilter));
                            }
                            if (isNotNullAndNotUndefined(ratingFilter)) {
                                filteredData = filteredData.filter(feedback => feedback.rating === ratingFilter).sort();
                            }
                            updateFilterOptions(filteredData);
                        }}
                        optionFilterProp="children"
                    >
                        {orderNumbers.map(orderNumber => <Option key={orderNumber}
                                                                 value={orderNumber}>{orderNumber}</Option>)}
                    </Select>
                </div>
                <div className='order-status'>
                    <div className='filter-name'>SEARCH BY RATING</div>
                    <Select
                        allowClear
                        style={{width: 200}}
                        placeholder="Select"
                        optionFilterProp="children"
                        value={ratingFilter}
                        onChange={(rating) => {
                            setRatingFilter(rating);
                            let filteredData = (rating !== undefined) ? customerFeedbackData.filter(feedback => feedback.rating === rating) : customerFeedbackData;
                            if (isNotNullAndNotUndefined(customerNameFilter)) {
                                filteredData = filteredData.filter(order => order.customer_name.includes(customerNameFilter));
                            }
                            if (isNotNullAndNotUndefined(orderNumberFilter)) {
                                filteredData = filteredData.filter(order => order.order_no === orderNumberFilter);
                            }
                            updateFilterOptions(filteredData);
                        }}
                    >
                        {ratings.map((rating, index) => <Option key={index} value={rating}>{rating}</Option>)}
                    </Select>
                </div>
                <div className='order-customer'>
                    <div className='filter-name'>SEARCH BY CUSTOMER</div>
                    <Select
                        showSearch
                        allowClear
                        style={{width: 200}}
                        placeholder="Search"
                        optionFilterProp="children"
                        value={customerNameFilter}
                        onChange={(customerName) => {
                            setCustomerNameFilter(customerName);
                            let filteredData;
                            if (customerName !== undefined) {
                                filteredData = customerFeedbackData.filter(order => order.customer_name.includes(customerName));
                            } else {
                                filteredData = customerFeedbackData;
                            }
                            if (isNotNullAndNotUndefined(ratingFilter)) {
                                filteredData = filteredData.filter(order => order.rating === ratingFilter).sort();
                            }
                            if (isNotNullAndNotUndefined(orderNumberFilter)) {
                                filteredData = filteredData.filter(order => order.order_no === orderNumberFilter);
                            }
                            updateFilterOptions(filteredData);
                        }}
                    >
                        {customers.map((customerName, index) => <Option key={index}
                                                                        value={customerName}>{customerName}</Option>)}
                    </Select>
                </div>
                <div>
                    <Button onClick={resetFilters} className='ant-btn-default'>Reset filters</Button>
                </div>
            </div>
            <div className='customer-feedback'>
                <List
                    grid={{
                        gutter: 20,
                    }}
                    pagination={{
                        pageSize: 5,
                        hideOnSinglePage: true
                    }}
                    dataSource={selectedCustomerFeedbackData}
                    renderItem={feedback => (
                        <List.Item>
                            <Card className='feedback-card' key={feedback.feedbackId}>
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
                        </List.Item>)}/>

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