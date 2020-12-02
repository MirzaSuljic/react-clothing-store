import './App.css';
import React, { useState } from 'react';
// import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';
import {Switch, Route} from 'react-router-dom';
import MainLayout from './Layouts/MainLayout'; 
import CartLayout from './Layouts/CartLayout'; 
import HomepageLayout from './Layouts/HomepageLayout';
import Women from './pages/Women/Women';
import WomenDetail from './pages/WomenDetail/WomenDetail';
import Men from './pages/Men/Men';
import Sale from './pages/Sale/Sale';
import SignIn from './pages/SignIn/SignIn';
import Checkout from './pages/Checkout/Checkout';

import apiData from './api.json';

function App() {
  const initialitems = JSON.parse(localStorage.getItem('cart')) || [];
  let [cartItemsLength] = useState(initialitems.length);

  function updateCartItemsLength(length) {
    cartItemsLength = length;
  }

  return (
    <div className="App">
        <Switch>
          <Route exact  path="/" render={()=>(
            <HomepageLayout cartItemsLength={cartItemsLength}>
              <Homepage/>
            </HomepageLayout>
          )}/>
          <Route path="/registration" render={()=>(
            <MainLayout cartItemsLength={cartItemsLength}>
              <Registration/>
            </MainLayout>
          )}/>
          <Route path="/sign-in" render={()=>(
            <MainLayout cartItemsLength={cartItemsLength}>
              <SignIn/>
            </MainLayout>
          )}/>
          <Route path="/checkout" render={()=>(
            <CartLayout cartItemsLength={cartItemsLength}>
              <Checkout/>
            </CartLayout>
          )}/>
           <Route path="/women" render={()=>(
            <MainLayout cartItemsLength={cartItemsLength}>
              <Women apiData={apiData} />
            </MainLayout>
          )}/>
           <Route path="/detail/:id" render={(match)=>(
            <MainLayout cartItemsLength={cartItemsLength}>
              <WomenDetail apiData={apiData} match={match} updateCartItemsLength={updateCartItemsLength}/>
            </MainLayout>
          )}/>
           <Route path="/men" render={()=>(
            <MainLayout cartItemsLength={cartItemsLength}>
              <Men/>
            </MainLayout>
          )}/>
           <Route path="/sales" render={()=>(
            <MainLayout cartItemsLength={cartItemsLength}>
              <Sale/>
            </MainLayout>
          )}/>
        </Switch>
    </div>
  );
}

export default App;


