import React, {useEffect, useState} from "react";
import './Orders.scss';
import {Button, DatePicker, Select, Space, Table} from "antd";
import Icon from "@ant-design/icons";
import ReactExport from "react-export-excel";
import Constants from "../../constants";
import APIService from "../../api/service";
import moment from 'moment';

const {ExcelFile} = ReactExport;
const {ExcelSheet} = ExcelFile;
const ExcelColumn = ExcelFile.ExcelColumn;
const { RangePicker } = DatePicker;

const Orders = ({location}) => {

    const [loading, setLoading] = useState(false);

    const [orderStatusFilter, setOrderStatusFilter] = useState(null);
    const [customerNameFilter, setCustomerNameFilter] = useState(null);
    const [orderNumberFilter, setOrderNumberFilter] = useState(null);
    const [orderDateRangeFilter, setOrderDateRangeFilter] = useState([]);

    const [ordersData, setOrdersData] = useState([]);
    const [currentTableData, setCurrentTableData] = useState([]);

    const allOrderStatuses = ['New Order', 'Image Uploaded', 'Order Confirmed', 'Delivered', 'Completed', 'Issue'];
    const [orderStatuses, setOrderStatuses] = useState(allOrderStatuses);

    const [customers, setCustomers] = useState([]);
    const [orderNumbers, setOrderNumbers] = useState([]);
    const [dateRangePeriod, setDateRangePeriod] = useState([]);

    useEffect(() => {
        if (location.props && location.props.customerFilterSearch) {
            setCustomerNameFilter(location.props.customerFilterSearch);
        }
        if (location.props && location.props.orderNoFilterSearch) {
            setOrderNumberFilter(location.props.orderNoFilterSearch);
        }
        setLoading(true);
        APIService.getCustomers().then((response) => {
            let allOrders;
            allOrders = response;
            setOrdersData(allOrders);
            const customers = [...new Set(allOrders.map(order => order.customerName))];
            setCustomers(customers);
            setOrderNumbers(allOrders.map(order => order.orderNumber))
            if (location.props && location.props.customerFilterSearch) {
                allOrders = allOrders.filter(order => order.customerName.includes(location.props.customerFilterSearch));
            }
            if (location.props && location.props.orderNoFilterSearch) {
                allOrders = allOrders.filter(order => order.orderNumber === location.props.orderNoFilterSearch);
            }
            setCurrentTableData(allOrders);
            setLoading(false);
        });
        // eslint-disable-next-line
    }, []);

    const AttachmentIcon = () => {
        return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30.164" viewBox="0 0 24.422 30.164"><g transform="translate(-913.371 -244.919)"><g transform="translate(918.089 262.843)"><path d="M945.21,312.067H930.287v-2.874H945.21Zm-14.365-.558h13.808v-1.759H930.845Z" transform="translate(-930.287 -309.193)"/></g><g transform="translate(918.087 267.487)"><path d="M940.5,328.719H930.283v-2.873H940.5Zm-9.663-.558h9.105V326.4h-9.105Z" transform="translate(-930.283 -325.846)"/></g><g transform="translate(924.698 253.615)"><path d="M962.3,278.984h-8.315V276.1H962.3Zm-7.757-.558h7.2v-1.768h-7.2Z" transform="translate(-953.987 -276.101)"/></g><g transform="translate(918.194 258.26)"><path d="M945.482,295.629H930.665v-2.872h14.817Zm-14.259-.558h13.7v-1.757h-13.7Z" transform="translate(-930.665 -292.757)"/></g><path d="M930.782,249.342c0,1,0,2,0,2.993a1.948,1.948,0,0,0,.042.424,1,1,0,0,0,.688.754,2.444,2.444,0,0,0,1.452.062,1.075,1.075,0,0,0,.84-1.058c.014-.726.007-1.452.007-2.179q0-1.848,0-3.7a.315.315,0,0,1,.2-.33.283.283,0,0,1,.329.094.435.435,0,0,1,.071.225c0,1.157,0,2.315,0,3.472,0,.784.007,1.568,0,2.352a1.744,1.744,0,0,1-.607,1.35,1.834,1.834,0,0,1-1.047.427,3.211,3.211,0,0,1-1.454-.148,1.645,1.645,0,0,1-1.122-1.557c-.013-1.015-.006-2.03-.006-3.044q0-1.624.005-3.248a1.965,1.965,0,0,1,.049-.4,1.022,1.022,0,0,1,.836-.83,3.731,3.731,0,0,1,1.386-.035,1.226,1.226,0,0,1,1.044,1.185c.023.494.009.991.01,1.486,0,.855-.006,1.711,0,2.566a1.139,1.139,0,0,1-.883,1.1,1.1,1.1,0,0,1-1.378-.878.805.805,0,0,1-.01-.132q0-1.191,0-2.382a.3.3,0,0,1,.33-.326.305.305,0,0,1,.276.332c0,.353,0,.706,0,1.059q0,.626,0,1.252a.46.46,0,0,0,.47.5.542.542,0,0,0,.593-.508c0-1.157,0-2.315,0-3.472a5.264,5.264,0,0,0-.015-.559.642.642,0,0,0-.66-.641,6.291,6.291,0,0,0-.934.026.5.5,0,0,0-.5.552c-.011.723-.01,1.445-.012,2.168C930.781,248.643,930.782,248.992,930.782,249.342Z" transform="translate(-12.119)"/><g transform="translate(913.371 246.251)"><path d="M937.792,253.647a3.778,3.778,0,0,0-2.557-3.722,4.564,4.564,0,0,0-1.412-.218c-2.845-.018-5.737-.011-8.534,0h-3.829q.01.279.01.558l.224,0v-.175a.315.315,0,0,1,.2-.33.283.283,0,0,1,.329.094.436.436,0,0,1,.071.225c0,.062,0,.124,0,.186h2.993c2.8-.007,5.687-.013,8.53,0a4,4,0,0,1,1.236.188,3.2,3.2,0,0,1,2.178,3.194q0,8.558,0,17.115v3.833c0,.092,0,.183-.006.274a3.237,3.237,0,0,1-1.288,2.441,3.831,3.831,0,0,1-1.569.66H916.8l-.2-.05c-.166-.04-.323-.078-.473-.129a3.261,3.261,0,0,1-2.195-3.19q0-8.582,0-17.163v-3.814c0-.094,0-.188.005-.282a3.174,3.174,0,0,1,2.413-2.954,8.35,8.35,0,0,1,1.609-.115l.108,0c0-.186,0-.372,0-.558l-.114,0a8.9,8.9,0,0,0-1.716.127,3.7,3.7,0,0,0-2.857,3.477c0,.1-.006.2-.006.305v3.814q0,8.581,0,17.163a3.805,3.805,0,0,0,2.569,3.717c.176.061.354.1.526.145.076.018.152.037.228.056l17.737.009.03-.007a4.379,4.379,0,0,0,1.824-.773,3.816,3.816,0,0,0,1.5-2.841c.007-.1.007-.208.007-.313v-3.833Q937.793,262.2,937.792,253.647Z" transform="translate(-913.371 -249.696)"/><path d="M933.368,250.283h1.561v-.071c0-.162,0-.325-.011-.487h-1.545C933.37,249.912,933.369,250.1,933.368,250.283Z" transform="translate(-927.791 -249.717)"/></g></g></svg>
    }

    const columns = [
        {
            title: 'Order Status',
            dataIndex: 'orderStatus',
            key: 'orderStatus',
        },
        {
            title: 'Order Date',
            dataIndex: 'orderDate',
            key: 'orderDate',
            render: (date) => {
                return <span>{date}</span>;
            }
        },
        {
            title: 'Order Number',
            dataIndex: 'orderNumber',
            key: 'orderNumber',
        },
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Item',
            dataIndex: 'item',
            key: 'item',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Attachment',
            dataIndex: 'attachment',
            key: 'attachment',
            render: (isAttachmentPresent) => {
                return isAttachmentPresent ? <Icon component={AttachmentIcon}/> : null;
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <span>Approve {record.name}</span>
                    <span>Issue</span>
                </Space>
            ),
        },
    ];

    const { Option } = Select;

    const dateExistsBetweenRange = (orderDate, fromDate, toDate) => {
        const dateFrom = moment(fromDate, "YYYY-MM-DD");
        const dateTo = moment(toDate, "YYYY-MM-DD");
        const dateToCheck = moment(orderDate, "YYYY-MM-DD");
        return dateToCheck.isBetween(dateFrom, dateTo, 'days', '[]');
    }

    const DownloadExcel = () => {
        return <ExcelFile element={<Button style={{color: 'black', border: '1px solid #707070', fontFamily: 'Poppins-SemiBold'
        }}>DOWNLOAD</Button>} filename={Constants.ordersFileName}>
            <ExcelSheet data={currentTableData} name="Orders">
                <ExcelColumn label="Order Status" value="orderStatus"/>
                <ExcelColumn label="Order Number" value="orderNumber"/>
                <ExcelColumn label="Order Date" value="orderDate"/>
                <ExcelColumn label="Customer Name" value="customerName"/>
                <ExcelColumn label="Product name" value="item"/>
            </ExcelSheet>
        </ExcelFile>
    }

    const changeFilterOptions = (filteredData) => {
        setOrderStatuses([...new Set(filteredData.map(order => order.orderStatus))]);
        setCustomers([...new Set(filteredData.map(order => order.customerName))]);
        setOrderNumbers(filteredData.map(order => order.orderNumber));
        const momentDates = filteredData.map(order => moment(order.orderDate));
        setDateRangePeriod([moment.min(momentDates), moment.max(momentDates).add(1, 'days')]);
        setCurrentTableData(filteredData);
    }

    const isNotNullAndNotUndefined = (input) => input !== null && input !== undefined;

    return (
        <div className='orders-list'>
            <h1 className='page-title'>Order list</h1>
            <div className='filters-container'>
                <div className='order-status'>
                    <div className='filter-name'>SEARCH BY ORDER STATUS</div>
                    <Select
                        allowClear
                        style={{width: 200}}
                        placeholder="Select"
                        optionFilterProp="children"
                        value={orderStatusFilter}
                        onChange={(status) => {
                            setOrderStatusFilter(status);
                            let filteredData;
                            if (status !== undefined) {
                                filteredData = ordersData.filter(order => order.orderStatus.includes(status));
                            } else {
                                filteredData = ordersData;
                            }
                            if (isNotNullAndNotUndefined(customerNameFilter)) {
                                filteredData = filteredData.filter(order => order.customerName.includes(customerNameFilter));
                            }
                            if (isNotNullAndNotUndefined(orderNumberFilter)) {
                                filteredData = filteredData.filter(order => order.orderNumber === orderNumberFilter);
                            }
                            if (isNotNullAndNotUndefined(orderDateRangeFilter) && orderDateRangeFilter.length !== 0) {
                                filteredData = filteredData.filter(order => dateExistsBetweenRange(order.orderDate, orderDateRangeFilter[0].format('YYYY-MM-DD'), orderDateRangeFilter[1].format('YYYY-MM-DD')));
                            }
                            changeFilterOptions(filteredData);
                        }}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        {orderStatuses.map((status, index) => <Option key={index} value={status}>{status}</Option>)}
                    </Select>
                </div>
                <div className='order-date-range'>
                    <div className='filter-name'>SEARCH BY ORDER DATE RANGE</div>
                    <RangePicker style={{width: 250}} placeholder={['From', 'To']}
                                 value={orderDateRangeFilter}
                                 disabledDate={d => (dateRangePeriod[0] && dateRangePeriod[1]) && (!d || d.isSameOrAfter(dateRangePeriod[1] + 1) || d.isSameOrBefore(dateRangePeriod[0])) }
                                 format="YYYY-MM-DD"
                                 onChange={(range, dateStrings) => {
                                     setOrderDateRangeFilter(range);
                                     let filteredData;
                                     if (range !== null) {
                                         filteredData = ordersData.filter(order => dateExistsBetweenRange(order.orderDate, dateStrings[0], dateStrings[1]));
                                     } else {
                                         filteredData = ordersData;
                                     }
                                     if (isNotNullAndNotUndefined(customerNameFilter)) {
                                         filteredData = filteredData.filter(order => order.customerName.includes(customerNameFilter));
                                     }
                                     if (isNotNullAndNotUndefined(orderNumberFilter)) {
                                         filteredData = filteredData.filter(order => order.orderNumber === orderNumberFilter);
                                     }
                                     if (isNotNullAndNotUndefined(orderStatusFilter)) {
                                         filteredData = filteredData.filter(order => order.orderStatus.includes(orderStatusFilter))
                                     }
                                     changeFilterOptions(filteredData);
                                 }}/>
                </div>
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
                                filteredData = ordersData.filter(order => order.orderNumber === orderNo);
                            } else {
                                filteredData = ordersData;
                            }
                            if (isNotNullAndNotUndefined(customerNameFilter)) {
                                filteredData = filteredData.filter(order => order.customerName.includes(customerNameFilter));
                            }
                            if (isNotNullAndNotUndefined(orderStatusFilter)) {
                                filteredData = filteredData.filter(order => order.orderStatus.includes(orderStatusFilter))
                            }
                            if (isNotNullAndNotUndefined(orderDateRangeFilter) && orderDateRangeFilter.length !== 0) {
                                filteredData = filteredData.filter(order => dateExistsBetweenRange(order.orderDate, orderDateRangeFilter[0].format('YYYY-MM-DD'), orderDateRangeFilter[1].format('YYYY-MM-DD')));
                            }
                            changeFilterOptions(filteredData);
                        }}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        {orderNumbers.map(orderNumber => <Option key={orderNumber}
                                                                 value={orderNumber}>{orderNumber}</Option>)}
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
                                filteredData = ordersData.filter(order => order.customerName.includes(customerName));
                            } else {
                                filteredData = ordersData;
                            }
                            if (isNotNullAndNotUndefined(orderStatusFilter)) {
                                filteredData = filteredData.filter(order => order.orderStatus.includes(orderStatusFilter));
                            }
                            if (isNotNullAndNotUndefined(orderNumberFilter)) {
                                filteredData = filteredData.filter(order => order.orderNumber === orderNumberFilter);
                            }
                            if (isNotNullAndNotUndefined(orderDateRangeFilter) && orderDateRangeFilter.length !== 0) {
                                filteredData = filteredData.filter(order => dateExistsBetweenRange(order.orderDate, orderDateRangeFilter[0].format('YYYY-MM-DD'), orderDateRangeFilter[1].format('YYYY-MM-DD')));
                            }
                            changeFilterOptions(filteredData);
                        }}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        {customers.map((customerName, index) =>  <Option key={index} value={customerName}>{customerName}</Option>)}

                    </Select>
                </div>
                <div className='download-excel'>
                    <DownloadExcel />
                </div>
            </div>
            <div className='orders-table'>
                <Table columns={columns} dataSource={currentTableData} loading={loading} locale={{ emptyText: 'No orders found' }} pagination={{ pageSize: 3 }} />
            </div>
        </div>
    )
}
export default Orders;