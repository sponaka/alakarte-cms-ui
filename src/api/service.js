const APIService = {
    getCustomersFeedback: () => {
        return new Promise((resolve => {
            setTimeout(() => {
                resolve([
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
                ])
            }, 750);
        }));
    },

    getCustomers: () => {
        return new Promise( (resolve) => {
            setTimeout(function () {
                resolve([
                    {
                        key: '1',
                        orderStatus: 'Completed',
                        orderNumber: 1,
                        customerName: 'John Doe',
                        item: 'Frozen Chicken Wholewing',
                        quantity: 20,
                        attachment: true,
                        orderDate: '2021-08-17'
                    },
                    {
                        key: '2',
                        orderStatus: 'Delivered',
                        orderNumber: 2,
                        item: 'Frozen Chicken Breast Fillet Cutlet',
                        quantity: 5,
                        attachment: true,
                        customerName: 'Dileep Kumar Jami',
                        orderDate: '2021-09-11'
                    },
                    {
                        key: '3',
                        orderStatus: 'New Order',
                        orderNumber: 3,
                        item: 'Tiptop Chicken Whole Neck',
                        quantity: 10,
                        customerName: 'Shrey Baheti',
                        attachment: false,
                        orderDate: '2021-08-30'
                    },
                    {
                        key: '4',
                        orderStatus: 'Order Confirmed',
                        orderNumber: 4,
                        item: 'Frozen Chicken Wholewing',
                        quantity: 20,
                        customerName: 'John Wick',
                        attachment: false,
                        orderDate: '2021-09-10'
                    },
                    {
                        key: '5',
                        orderStatus: 'Image Uploaded',
                        orderNumber: 5,
                        item: 'Tiptop Chicken Whole Neck',
                        quantity: 15,
                        customerName: 'John Wick',
                        attachment: true,
                        orderDate: '2021-08-23'
                    },
                    {
                        key: '6',
                        orderStatus: 'Completed',
                        orderNumber: 6,
                        customerName: 'Jon Taylor',
                        item: 'Frozen Chicken Wholewing',
                        quantity: 25,
                        attachment: false,
                        orderDate: '2021-09-03'
                    },
                    {
                        key: '7',
                        orderStatus: 'Image Uploaded',
                        orderNumber: 7,
                        customerName: 'John Doe',
                        item: 'Frozen Chicken Wholewing',
                        quantity: 13,
                        attachment: true,
                        orderDate: '2021-09-12'
                    },
                ]);
            }, 2000);
        })
    }
}
export default APIService;