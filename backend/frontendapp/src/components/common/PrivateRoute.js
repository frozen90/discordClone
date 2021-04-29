import React from 'react'
import { Route, Redirect} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({component: Component, pathname, ...rest}) => {
    const auth = useSelector(state => state.auth)
    console.log(auth)
    return(
        <Route 
        {...rest}
        render={props =>{
            if(!auth.isAuthenticated && auth.token === ''){
                return <Redirect to={{pathname:"/login", next:pathname}}  />;

            }else{
                return <Component {...props} />
            }
            
        }}/>
    )
}

export default PrivateRoute;