import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { Container, Button, Checkbox, Form } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import logo from '../../static/img/logo.png'
import './react.css'
import Login from './Login';
import PrivateRoute from '../components/common/PrivateRoute'; 
import Dashboard from './Dashboard';
import { loadUser } from '../actions/auth';

const HomePage = (props) => {
   const dispatch = useDispatch()
   useEffect(()=>{
      dispatch(loadUser());
    })
    return (
      <div>
          <Router>
              <Switch>
                  <PrivateRoute exact path='/' component={Dashboard}></PrivateRoute>
                  <Route path='/login' component={Login}></Route>
              </Switch>
          </Router>
      </div>
    );
  
}

export default HomePage;