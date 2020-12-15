import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import Logo from '../../assets/logo.svg';

import styled from 'styled-components';


import './NavigationItems.css';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const navigationItems = ({ open, cartItemsLength}) => {
        return (
            <Ul open={open}>
                      <div className="left-items">
                        <ul>
                          <li>
                              <NavLink exact to="/women" activeClassName="active">
                                  Women
                              </NavLink>
                          </li>
                          <li>
                          <NavLink exact to="/men" activeClassName="active">
                                  Men
                              </NavLink>
                          </li>
                          <li>
                          <NavLink exact to="/sales" activeClassName="active">
                                  Sales
                              </NavLink>
                          </li>
                          </ul>
                      </div>
                  <div className="logo mr-10">
                      <Link to="/" >
                          <img src={Logo} alt="logo"></img>
                      </Link>
                  </div>
                  <div >
                      <div className="right-items">
                          <ul>
                              <li>
                              <NavLink exact to="/registration" activeClassName="active">
                                      Contact
                                  </NavLink>
                              </li>
                              <li>
                                  
                                  <NavLink exact to="/sign-in" activeClassName="active">
                                      Sign in
                                  </NavLink>
                              </li>
                              <li className="cart">
                                  <NavLink exact to="/checkout" activeClassName="active">
                                      Cart
                                  </NavLink>
                                  <span><span>{cartItemsLength}</span></span>
                              </li>
                          </ul>
                      </div>
                  </div>
            </Ul>
          )
    
  }


export default navigationItems;