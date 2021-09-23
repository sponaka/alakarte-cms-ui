import React, {useEffect, useState} from "react";

import './Products.scss';
import {Button, Select, Spin} from "antd";
import APIService from "../../api/service";

const Products = () => {

    const { Option } = Select;

    const [fetchingProducts, setFetchingProducts] = useState(false);
    const [productNameFilter, setProductNameFilter] = useState(null);

    const [allProducts, setAllProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [productTitles, setProductTitles] = useState([]);

    useEffect(() => {
        setFetchingProducts(true);
        APIService.getProducts().then((response) => {
            let allProducts = response;
            setAllProducts(allProducts);
            setSelectedProducts(allProducts);
            const productTitles = [...new Set(allProducts.map(product => product.title))];
            setProductTitles(productTitles);
            setFetchingProducts(false);

        })
            .catch((error) => console.error(error));
    }, []);

    if (fetchingProducts) {
        return <div className='fetching'><Spin size="large"/></div>
    }

    return (
        <div className='products-page'>
            <h1 className='page-title'>Products</h1>
            <div className='add-filter'>
                <div className='product-name'>
                    <div className='filter-name'>SEARCH BY PRODUCT</div>
                    <Select
                        allowClear
                        style={{width: 200}}
                        placeholder="Select"
                        optionFilterProp="children"
                        notFoundContent={'No products'}
                        value={productNameFilter}
                        onChange={(productName) => {
                            setProductNameFilter(productName);
                            let filteredData;
                            if (productName !== undefined) {
                                filteredData = allProducts.filter(order => order.orderStatus.includes(productName));
                            } else {
                                filteredData = allProducts;
                            }
                            setSelectedProducts(filteredData);
                        }}
                    >
                        {productTitles.map((title, index) => <Option key={index} value={title}>{title}</Option>)}
                    </Select>
                </div>
                <div>
                    <Button className='ant-btn-default add-new'>Add new</Button>
                </div>
            </div>
        </div>
    );

}

export default Products;