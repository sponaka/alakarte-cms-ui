const APIService = {

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
                    },
                    {
                        key: '2',
                        orderStatus: 'Delivered',
                        orderNumber: 2,
                        item: 'Frozen Chicken Breast Fillet Cutlet',
                        quantity: 5,
                        attachment: true,
                        customerName: 'Dileep Kumar Jami',
                    },
                    {
                        key: '3',
                        orderStatus: 'New Order',
                        orderNumber: 3,
                        item: 'Tiptop Chicken Whole Neck',
                        quantity: 10,
                        customerName: 'Shrey Baheti',
                        attachment: false,
                    },
                    {
                        key: '4',
                        orderStatus: 'Order Confirmed',
                        orderNumber: 4,
                        item: 'Frozen Chicken Wholewing',
                        quantity: 20,
                        customerName: 'John Wick',
                        attachment: false,
                    },
                    {
                        key: '5',
                        orderStatus: 'Image Uploaded',
                        orderNumber: 5,
                        item: 'Tiptop Chicken Whole Neck',
                        quantity: 15,
                        customerName: 'John Wick',
                        attachment: true,
                    },
                    {
                        key: '6',
                        orderStatus: 'Completed',
                        orderNumber: 6,
                        customerName: 'Jon Taylor',
                        item: 'Frozen Chicken Wholewing',
                        quantity: 25,
                        attachment: false,
                    },
                ]);
            }, 2000);
        })
    }
}
export default APIService;