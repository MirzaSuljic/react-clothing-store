import React from 'react';
import {Link} from 'react-router-dom';
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
    background-color: #0D2538;
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

const navigationItems = ({ open }) => {
    return (
      <Ul open={open}>
          <div >
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
                            {/* <span><span>{props.cartItemsLength}</span></span> */}
                        </li>
                    </ul>
                </div>
            </div>
      </Ul>
    )
  }

// const navigationItems = (props) => (
//     // <ul className={classes.NavigationItems}>
//     <div>
//         <ul className="ml-20 NavigationItems">
            // <div >
            //     <ul className="left-items">
            //         <li>
            //             <Link to="/women">
            //                 Women
            //             </Link>
            //         </li>
            //         <li>
            //         <Link to="/men">
            //                 Men
            //             </Link>
            //         </li>
            //         <li>
            //         <Link to="/sales">
            //                 Sales
            //             </Link>
            //         </li>
            //     </ul>
            // </div>
            // <div className="logo">
            //     <Link to="/">
            //         <img src={Logo} alt="logo"></img>
            //     </Link>
            // </div>
            // <div className="mr-20">
            //     <div className="right-items">
            //         <ul>
            //             <li>
            //                 <Link to="/registration">
            //                     Contact
            //                 </Link>
            //             </li>
            //             <li>
            //                 <Link to="/sign-in">
            //                     Sign in
            //                 </Link>
            //             </li>
            //             <li className="cart">
            //                 <Link to="/checkout">
            //                     Cart
            //                 </Link>
            //                 <span><span>{props.cartItemsLength}</span></span>
            //             </li>
            //         </ul>
            //     </div>
            // </div>
//         </ul>
//         </div>
//     // </ul>
// );

export default navigationItems;