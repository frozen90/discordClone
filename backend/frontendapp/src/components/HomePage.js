import React, {useState } from 'react';
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
import Login from './login';

const HomePage = (props) => {
  
    return (
      <div>
          <Router>
              <Switch>
                  <Route exact path='/'><p>This is homepage</p></Route>
                  <Route path='/login' component={Login}></Route>
              </Switch>
          </Router>
      </div>
    );
  
}

export default HomePage;