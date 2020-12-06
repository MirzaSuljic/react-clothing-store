import React from 'react';

import Logo from '../../assets/logo.svg';
import NavigationItems from '../NavigationItems/NavigationsItems';
import classes from './SideDrawer.css';
import Backdrop from '../../components/Backdrop/Backdrop';
import Aux from '../../hoc/aAux';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <img src={Logo} alt="logo"></img>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
            </Aux>
    );
};

export default sideDrawer;