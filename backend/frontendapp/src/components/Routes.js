import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { logout, logoutUser } from '../actions/auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import './react.css'
//Components
import Login from './Login';
import PrivateRoute from './common/PrivateRoute'; 
import Dashboard from './Dashboard';
import { Grid, Header, Icon, Image, Menu, Segment, Sidebar, Divider, Button, Container } from 'semantic-ui-react';
import Landing from './Landing';
//Actions
import { loadUser } from '../actions/auth';
import { AnimatePresence} from 'framer-motion';

const Routes = (props) => {
  const [visibleSidebar, setVisibleSidebar] = useState(false)
   const dispatch = useDispatch()
   useEffect(()=>{
      dispatch(loadUser());
    })
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
      <Sidebar.Pushable as={Segment}>
          <Sidebar
            className='blueBackground'
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            vertical
            visible={visibleSidebar}
            direction='left'
            width='thin'
            >
              <Menu.Item as='a' href='/dashboard' active={location.pathname === '/dashboard' ? true : false}>
                Dashboard
              </Menu.Item>
              <Menu.Item as='a' onClick={handleLogout}>
                  Logout
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
                <Switch location={location} key={location.pathname}>
                    <Route exact path='/' component={Landing}></Route>
                    <PrivateRoute path='/dashboard' component={Dashboard}></PrivateRoute>
                    <Route path='/login' component={Login}></Route>
                </Switch>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
      </AnimatePresence>
    );
  
}

export default Routes;