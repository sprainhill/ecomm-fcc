import React from 'react';
import Product from "./Product"
import Title from "./Title"
import { storeProducts } from "../data"
import { ProductConsumer } from "../context"

const ProductList = () => {
    const [products, setProducts] = React.useState([...storeProducts])
    console.log("products : ", products)


    return (
        <>
        <div className="py-5">
            <div className="container">
                    <Title name="our" title="title" />
            </div>
            <div className="row" >
                <ProductConsumer>
                    {value=> {
                    return <h3>{value}</h3>

                    }}
                </ProductConsumer>
            </div>
        </div>
        </>
    );
};

export default ProductList;