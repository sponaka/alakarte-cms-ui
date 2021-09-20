import React from "react";

import './Home.scss';
import {Card} from "antd";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='home-page'>
            <h1 className='page-title'>Explore our features !!!</h1>
            <div className='feature-cards'>
                <Card className='card-item'>
                    <Link to={{
                        pathname: `/orders`
                    }}>
                        <span>Orders</span>
                    </Link>
                </Card>
                <Card className='card-item'>
                    <Link to={{
                        pathname: `/customer`
                    }}>
                        <span>Customers</span>
                    </Link>
                </Card>
                <Card className='card-item'>
                    <Link to={{
                        pathname: `/customer-feedback`
                    }}>
                        <span>Customer Feedback</span>
                    </Link>
                </Card>
                <Card className='card-item'>
                    <Link to={{
                        pathname: `/products`
                    }}>
                        <span>Products</span>
                    </Link>
                </Card>
            </div>
        </div>
    );
}

export default Home;