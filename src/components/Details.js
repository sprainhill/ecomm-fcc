import React from 'react';
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import ButtonContainer from './Button'

const Details = () => {
    return (
        <ProductConsumer>
            {value => {
                const {id, company, title, price, img, info, inCart} = value.detailProduct
                return (
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>

                            </div>
                        </div>
                    </div>
                )
            
            }}
        </ProductConsumer>
    );
};

export default Details;