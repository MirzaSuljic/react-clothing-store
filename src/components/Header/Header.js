import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';

const Header = (props) => {
    return (
       <header className="header">
           <div className="wrap">
               <div className="logo">
                    <img src={Logo} alt="logo"></img>
               </div>

           </div>

       </header>
    );
}

export default Header;
