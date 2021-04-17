import React, {useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { login } from "../actions/auth"
import { Container, Button, Checkbox, Form, Message } from 'semantic-ui-react'
import './react.css'

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({username:'',password:''})
  const formError = useSelector(state => state.errors)
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault();
    if(username === "" && password === ""){
      setErrors({username:'Please provide username', password:'Please provide password'})
      return;
    }else if( username === ""){
      setErrors({username:'Please provide username', password:''})
    }else if( password === ""){
      setErrors({username:'', password:'Please provide password'})
    }else{
      setErrors({username:'', password:''})
    }
    dispatch(login(username, password))
  }
    return (
      <div className="testBackground" >
        <div className="loginBox">
        
        <Form onSubmit={onSubmit}  inverted size='large' warning={true}>
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
          <Message
            style={formError === 400 ? null:{display:"none"}}
            warning
            header='Invalid Username or Password'
            content='Try again or click Forgot password to reset it.'
        
          />
          <div style={{textAlign:"center"}}>
            <Form.Button primary>Login</Form.Button>
          </div>
      </Form>
        </div>
      </div>
    );
  
}

export default Login;