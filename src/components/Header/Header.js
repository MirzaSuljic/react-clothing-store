import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';

const Header = (props) => {

    return (
       <header className="header">
           <div className="ml-20">
                <ul className="left-items">
                    <li>
                        <Link to="/women">
                            Women
                        </Link>
                    </li>
                    <li>
                    <Link to="/men">
                            Men
                        </Link>
                    </li>
                    <li>
                    <Link to="/sales">
                            Sales
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="logo"></img>
                </Link>
            </div>
            <div className="mr-20">
                <div className="right-items">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/sign-in">
                                Sign in
                            </Link>
                        </li>
                        <li className="cart">
                            <Link to="/checkout">
                                Cart
                            </Link>
                            <span><span>{props.cartItemsLength}</span></span>
                        </li>
                    </ul>
                </div>
            </div>
       </header>
    );
}

export default Header;
