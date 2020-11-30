import './App.css';
// import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';
import {Switch, Route} from 'react-router-dom';
import MainLayout from './Layouts/MainLayout'; 
import HomepageLayout from './Layouts/HomepageLayout';

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
        </Switch>
    </div>
  );
}

export default App;


