import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { Container, Button, Checkbox, Form } from 'semantic-ui-react';
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
import PrivateRoute from '../components/common/PrivateRoute'; 
import Dashboard from './Dashboard';
import Landing from './Landing';
//Actions
import { loadUser } from '../actions/auth';
import { AnimatePresence} from 'framer-motion';

const HomePage = (props) => {
   const dispatch = useDispatch()
   useEffect(()=>{
      dispatch(loadUser());
    })
    return (  
              <Switch >
                  <Route exact path='/' component={Landing}></Route>
                  <PrivateRoute path='/dashboard' component={Dashboard}></PrivateRoute>
                  <Route path='/login' component={Login}></Route>
              </Switch>
    );
  
}

export default HomePage;