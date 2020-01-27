import React from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"

export default props => {

    const {id, title, img, price, inCart} = props.product

    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
            <div className="card">
                <div className="img-container p-5" onClick={console.log("clicked")}>
                <Link to='/details'>
                    <img src={img} alt="product" className="card-img-top" />                </Link>
                </div>
            </div>
        </ProductWrapper>
    );
};


const ProductWrapper = styled.div`


`


