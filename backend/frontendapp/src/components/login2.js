import React, {useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { Container, Button, Checkbox, Form } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../../static/img/logo.png'
import './react.css'

const Login2 = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({username:'',password:''})
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    dispatch(login(username, password))
  }
    return (
      <div className="testBackground" >
        <div className="loginBox">
        <Form onSubmit={onSubmit}  inverted size='large' loading={false}>
          <Form.Input
            error={errors.username.length > 0 ? 'Please provide username' : null  }
            fluid
            label='Username'
            placeholder='Username'
            id='form-input-first-name'
            onChange={e => setUsername(e.target.value)}
          />
          <Form.Input
             error={errors.password.length > 0  ? 'Please provide password' : null  }
            fluid
            label='Password'
            placeholder='Password'
            id='form-input-password'
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
          <div style={{textAlign:"center"}}>
            <Form.Button primary>SJDJAJDSn</Form.Button>
          </div>
      </Form>
        </div>
      </div>
    );
  
}

export default Login2;