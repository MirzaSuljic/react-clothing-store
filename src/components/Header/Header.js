import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import DrawerToggle from '../DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationsItems';

import styled from 'styled-components';
// import DrawerToggle from '../DrawerToggle/DrawerToggle';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`

const Header = () => {
  return (
    <Nav>
      <div className="logo-desktop">
            <Link to="/">
                <img src={Logo} alt="logo"></img>
            </Link>
        </div>
      <DrawerToggle />
    </Nav>
  )
}

// const Header = (props) => {

//     return (
//        <header className="header">

//             <DrawerToggle clicked={props.drawerToggleClicked} />
            
//             <nav className="DesktopOnly">
//                 <NavigationItems />
//             </nav>
         
//        </header>
//     );
// }

export default Header;
