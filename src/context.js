import React from 'react';
import {storeProducts, detailProduct} from "./data"

const ProductContext = React.createContext()

// Provider

// Consumer

class ProductProvider extends React.Component {
    state = {
        products: storeProducts,
        detailProduct
    }



    render() {
        return (
            <ProductContext.Provider value={{}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
};

const ProductConsumer = ProductContext.Consumer

export  {
    ProductProvider,
    ProductConsumer
}