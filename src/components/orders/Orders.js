import React from "react";
import './Orders.scss';
import {Space, Table, Tag} from "antd";

const Orders = () => {
    const columns = [
        {
            title: 'Order Status',
            dataIndex: 'orderStatus',
            key: 'orderStatus',
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
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
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
    const data = [
        {
            key: '1',
            orderStatus: 'Completed',
            orderNumber: 1,
            customerName: 'New York No. 1 Lake Park',
            item: 'Item 1',
            quantity: 20,
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            orderStatus: 'Delivered',
            orderNumber: 2,
            item: 'Item 2',
            quantity: 5,
            customerName: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            orderStatus: 'In progress',
            orderNumber: 3,
            item: 'Item 3',
            quantity: 10,
            customerName: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return (
        <div className='orders-list'>
            <h1 className='page-title'>Order list</h1>
            <div className='orders-table'>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}
export default Orders;