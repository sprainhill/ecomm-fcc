import React from 'react';

const CartItem = ({item, value}) => {
    const { id, title, img, price, total, count } = item
    const {increment, decrement, removeItem} = value

    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2" >
                <img src={img} style={{width: '5rem', height:'5rem'}} className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2" >
                <span className="d-lg-none">product : </span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2" >
            <span className="d-lg-none">price : </span>${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0" >
                <div className="d-flex justify-content-center">
                    <span className="btn-black mx-1 px-2" onClick={() => decrement(id)} >-</span>
                    <span className="btn-black mx-1 px-2">{count}</span>
                    <span className="btn-black mx-1 px-2" onClick={() => increment(id)} >+</span>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2" >
            </div>
            <div className="col-10 mx-auto col-lg-2" >
            </div>
            
        </div>
    );
};

export default CartItem;