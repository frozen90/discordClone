import React, {useEffect, useState, useRef } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Window from './components/window/Window'



const Main = () => {
    const isAuthenticated = true //useSelector(state => state.auth.isAuthenticated)
    return (
        <Router>
            <Switch>
                <Route path="">{ isAuthenticated ? <Window/> : <Login/> }</Route>
            </Switch>
        </Router>
    )
}

export default Main;