import React from 'react';
<<<<<<< work/Account
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { login } from '../../apis/auth';
import useInput from '../../hooks/useInput';
import useLocalStorage from '../../hooks/useLocalStorage';
import useRequest from '../../hooks/useRequest';
import Button from '../common/Button';
import Input from '../common/Input';
=======
import tw from 'tailwind-styled-components';
import Button from '../common/Button';
import Input from '../common/Input';
import useInput from '../../hooks/useInput';
import useRequest from '../../hooks/useRequest';
import { login } from '../../apis/auth';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

>>>>>>> main

const Container = tw.form`flex flex-col w-10/12 h-full justify-center pb-10 items-center rounded-xl gap-4`;

const Login = () => {
  const navigate = useNavigate();

  const form = {
    email: useInput({
      initialValue: '',
      errorMessage: '이메일 형식이 올바르지 않습니다.',
      pattern: 'email',
      required: true,
    }),
    password: useInput({
      initialValue: '',
      pattern: 'password',
      errorMessage: '비밀번호가 8자 이상인지 확인해 주세요.',
      required: true,
    }),
  };

  const { setValue } = useLocalStorage('access_token');

<<<<<<< work/Account
  const action = response => {
=======
  const action = (response) => {
>>>>>>> main
    setValue(response.data['access_token']);
    navigate('/todo');
  };

  const { handleRequest } = useRequest();

<<<<<<< work/Account
  const handleOnSubmit = event => {
=======
  const handleOnSubmit = (event) => {
>>>>>>> main
    event.preventDefault();
    handleRequest({
      submitFunction: login,
      formData: { email: form.email.value, password: form.password.value },
      action,
    });
  };

  return (
    <Container onSubmit={handleOnSubmit}>
<<<<<<< work/Account
      <Input type="email" label="Email" {...form.email} />
      <Input type="password" label="Password" {...form.password} />
      <Button
        type="submit"
        className={'mt-2 bg-rose-400 text-white shadow-md mx-auto w-24 h-12'}
        disabled={!form.email.valid || !form.password.valid}
      >
        Login
      </Button>
=======
      <Input type='email' label='Email' {...form.email} />
      <Input type='password' label='Password' {...form.password} />
      <Button type='submit' className={'mt-2 bg-rose-400 text-white shadow-md mx-auto'}
              disabled={!form.email.valid || !form.password.valid}>Login</Button>
>>>>>>> main
    </Container>
  );
};

export default Login;
