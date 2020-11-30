import './App.css';
// import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';
import {Switch, Route} from 'react-router-dom';
import MainLayout from './Layouts/MainLayout'; 
import HomepageLayout from './Layouts/HomepageLayout';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';
import Sale from './pages/Sale/Sale';
import SignIn from './pages/SignIn/SignIn';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact  path="/" render={()=>(
            <HomepageLayout>
              <Homepage/>
            </HomepageLayout>
          )}/>
          <Route path="/registration" render={()=>(
            <MainLayout>
              <Registration/>
            </MainLayout>
          )}/>
          <Route path="/sign-in" render={()=>(
            <MainLayout>
              <SignIn/>
            </MainLayout>
          )}/>
          <Route path="/cart" render={()=>(
            <MainLayout>
              <Cart/>
            </MainLayout>
          )}/>
           <Route path="/women" render={()=>(
            <MainLayout>
              <Women/>
            </MainLayout>
          )}/>
           <Route path="/men" render={()=>(
            <MainLayout>
              <Men/>
            </MainLayout>
          )}/>
           <Route path="/sales" render={()=>(
            <MainLayout>
              <Sale/>
            </MainLayout>
          )}/>
        </Switch>
    </div>
  );
}

export default App;


