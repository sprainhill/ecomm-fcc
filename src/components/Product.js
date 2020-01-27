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
    <button className="cart-btn" disabled={inCart ? true : false} onClick={()=>{console.log("added to cart")}}>{inCart ? (<p className="text-capitalize mb-0" >in cart</p>) : (<i className="fas fa-cart-plus " />)}</button>
            </div>
        </ProductWrapper>
    );
};


const ProductWrapper = styled.div`


`


