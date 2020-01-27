import React from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"

export default props => {

    const {id, title, img, price, inCart} = props.product

    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
            <div>Product</div>
        </ProductWrapper>
    );
};


const ProductWrapper = styled.div`


`


