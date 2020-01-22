import React from 'react';
import Product from "./Product"
import Title from "./Title"

const ProductList = () => {
    const [products, setProducts] = React.useState([])


    return (
        <>
        <div className="py-5">
            <div className="container">
        
                    <Title name="our" title="title" />
            </div>
        </div>
        </>
    );
};

export default ProductList;