import React from 'react';
import { Link } from 'react-router-dom'
import logo from "./logo.svg"

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
             <Link to="/cart" className="ml=auto" >
                <button>
                    <i className="fas fa fa-cart-plus" />
                    my cart
                </button>
            </Link>
        </nav>

    );
};

export default Navbar;
