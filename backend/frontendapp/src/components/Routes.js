import React, {useEffect, useState,  } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { logout, logoutUser } from '../actions/auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import './react.css';
import { Menu } from 'semantic-ui-react';
//Components
import Login from './Login';
import PrivateRoute from './common/PrivateRoute'; 
import Dashboard from './Dashboard';
import ProductsDashboard from './products/ProductsDashboard';
import StockDashboard from './stock/StockDashboard';
import Landing from './Landing';
//Actions
import { loadUser } from '../actions/auth';
import { AnimatePresence} from 'framer-motion';

const Routes = () => {
  const [visibleSidebar, setVisibleSidebar] = useState(false)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
   const dispatch = useDispatch()
   useEffect(()=>{
      dispatch(loadUser());
     },[])
  const handleLogout = () =>{
      dispatch(logoutUser());
  }
   const location = useLocation();
   useEffect(()=>{
      if(location.pathname === '/login' || location.pathname === '/'){
        setVisibleSidebar(false)
      }else{
        setVisibleSidebar(true)
      }
   },[location.pathname])
    return (  
    <AnimatePresence exitBeforeEnter>
          <Menu
            className='blueBackground'
            as={Menu}
            inverted
            attached='top'
            width='thin'
            style={visibleSidebar ? null: {display:'none'}}
            >
              <Menu.Item as='a' href='/warehouse/dashboard' active={location.pathname === '/warehouse/dashboard' ? true : false}>
                Dashboard
              </Menu.Item>
              <Menu.Item as='a' href='/warehouse/products' active={location.pathname === '/warehouse/products' ? true : false}>
                Products
              </Menu.Item>
              <Menu.Item as='a' href='/warehouse/stock' active={location.pathname === '/warehouse/stock' ? true : false}>
                Stock
              </Menu.Item>
              <Menu.Item as='a' position='right' onClick={handleLogout}>
                  Logout
              </Menu.Item>
            </Menu>
                <Switch loaction={location} key={location.pathname}>
                    <Route exact path='/' component={Landing}></Route>
                    <PrivateRoute exact path='/warehouse/dashboard' component={Dashboard} pathname={location.pathname}></PrivateRoute>
                    <PrivateRoute exact path='/warehouse/products' component={ProductsDashboard} pathname={location.pathname}></PrivateRoute>
                    <PrivateRoute exact path='/warehouse/stock' component={StockDashboard} pathname={location.pathname}></PrivateRoute>
                    <Route path='/login' component={Login}></Route>
                </Switch>
      </AnimatePresence>
    );
  
}

export default Routes;