import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { loginRequest, selectToken, selectLoginRequestState } from '../reducers/user/userActions';

import { Button, Form, H1, Input, Label } from './UI/';

const LoginForm = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const request = useSelector(selectLoginRequestState);
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  return (
    <Form onSubmit={e => e.preventDefault()}>
      {token !== '' && <Redirect to="/" />}
      <H1>TaskManager</H1>
      <Label htmlFor="login">Login</Label>
      <Input type="text" id="login" value={loginValue} onChange={e => setLoginValue(e.target.value)} />
      <Label htmlFor="password">Hasło</Label>
      <Input type="password" id="password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} />
      <Button
        type="submit"
        onClick={() => dispatch(loginRequest({ login: loginValue, password: passwordValue }))}
        disabled={request}
      >Zaloguj się</Button>
    </Form>
  )
}

export default LoginForm;