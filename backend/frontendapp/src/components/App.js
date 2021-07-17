import React, {useEffect, useState, useRef } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from "../Main";

ReactDOM.render((
  <Provider store={store}>
      <Main/>
  </Provider>
), document.getElementById('react-app'));