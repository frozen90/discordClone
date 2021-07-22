import React, {useEffect, useState, useRef } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import MainWindow from './components/window/MainWindow';



const Main = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    return (
        <Router>
            <Switch>
                <Route path="">{ isAuthenticated ? <MainWindow/> : <Login/> }</Route>
            </Switch>
        </Router>
    )
}

export default Main;