import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import store from '../store';
import { motion } from "framer-motion"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./HomePage"


ReactDOM.render((
  <Provider store={store}>
      <Router>
       <HomePage/>
       </Router>
  </Provider>
), document.getElementById('react-app'));