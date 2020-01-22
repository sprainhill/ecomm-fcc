import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import Details from "./components/Details"
import Default from "./components/Default"

function App() {
  return (
    <>
    <Navbar />
    <ProductList />
    <Cart />
    <Details />
    <Default />
    </>
  );
}

export default App;
