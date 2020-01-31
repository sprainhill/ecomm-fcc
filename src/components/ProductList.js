import React from 'react';
import Product from "./Product"
import Title from "./Title"
import { ProductConsumer } from "../context"

const ProductList = () => {

    return (
        <>
        <div className="py-5">
            <div className="container">
                    <Title name="Rory's" title="Store" />
            </div>
            <div className="row ml-5" >
                <ProductConsumer>
                    {value=> {
                    return value.products.map(product => {
                        return <Product product={product} key={product.id} /> 
                    })

                    }}
                </ProductConsumer>
            </div>
        </div>
        </>
    );
};

export default ProductList;