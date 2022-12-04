import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Input from '../common/Input';


const Container = tw.div`flex flex-col w-10/12 h-full justify-center items-center rounded-xl`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const history = useNavigate();
  const submit = () => {
    history('/');
  };

  return (
    <Container>
      <Input type='text' label='Email' value={email} handleValue={e => setEmail(e.target.value)} />
      <Input type='password' label='Password' value={pwd} handleValue={e => setPwd(e.target.value)} />
      <Button type='submit' onClick={submit} className={'mt-2 bg-rose-400 text-white shadow-md mx-auto'}>Login</Button>
    </Container>
  );
};

export default Login;
