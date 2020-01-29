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

    handleDetail = () => {
        console.log("hello from handleDetail")
    }

    addToCart = () => {
        console.log("hello from addToCart")
    }

    tester = () => {
        console.log('state products :', this.state.products[0].inCart);
        console.log('data products :', storeProducts[0].inCart);

        const tempProducts = [...this.state.products];
        tempProducts[0].inCart = true

        this.setState(() => {
            return {products: tempProducts}
        }, () => {
            console.log('state products :', this.state.products[0].inCart);
            console.log('data products :', storeProducts[0].inCart);

        })




    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
                
            }}>
                <button onClick={this.tester}>tester</button>
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