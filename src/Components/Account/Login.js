import React from 'react';
import tw from 'tailwind-styled-components';
import Button from '../common/Button';
import Input from '../common/Input';
import useInput from '../../hooks/useInput';


const Container = tw.div`flex flex-col w-10/12 h-full justify-center pb-10 items-center rounded-xl gap-4`;

const Login = () => {
  const form = {
    email : useInput(''),
    password : useInput('')
  }
  return (
    <Container>
      <Input type='text' label='Email' {...form.email} />
      <Input type='password' label='Password' {...form.password} />
      <Button type='submit' className={'mt-2 bg-rose-400 text-white shadow-md mx-auto'}>Login</Button>
    </Container>
  );
};

export default Login;
