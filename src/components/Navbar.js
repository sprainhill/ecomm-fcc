import React from 'react';
import { Link } from 'react-router-dom'
import ButtonContainer from './Button'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
            <Link to="/" >
            <i class="fas fa-book" style={{color: "fuchsia"}}></i>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link" >
                    Products
                    </Link>
                </li>
            </ul>
             <Link to="/cart" className="ml-auto" >
                <ButtonContainer>
                    <span className="mr-2" />
                    <i className="fas fa fa-cart-plus" />
                    <span className="ml-2" />
                    my cart
                </ButtonContainer>
            </Link>
        </nav>

    );
};






export default Navbar;
