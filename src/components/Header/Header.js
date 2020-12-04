import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import DrawerToggle from '../DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationsItems';

const Header = (props) => {

    return (
       <header className="header">

            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="logo"></img>
                </Link>
            </div>
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
         
       </header>
    );
}

export default Header;
