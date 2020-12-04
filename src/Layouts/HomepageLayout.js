import React, { Component } from 'react';
import Header from './../components/Header/Header';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Aux from '../hoc/aAux';

class HomepageLayout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }
    render () {
        return (
            <div className="fullHeight">
                    <Header cartItemsLength={props.cartItemsLength}/>
                    <SideDrawer
                            open={this.state.showSideDrawer}
                            closed={this.sideDrawerClosedHandler} />
                    {props.children}
                
            </div>
        );
    }
}

export default HomepageLayout;



