import React from 'react';
import tw from 'tailwind-styled-components';
import Button from '../common/Button';
import Input from '../common/Input';
import useInput from '../../hooks/useInput';
import useLogin from '../../hooks/useLogin';


const Container = tw.form`flex flex-col w-10/12 h-full justify-center pb-10 items-center rounded-xl gap-4`;

const Login = () => {
  const form = {
    email: useInput({
      initialValue: '',
      errorMessage: '이메일 형식이 올바르지 않습니다.',
      pattern: '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
      required: true,
    }),
    password: useInput({
      initialValue: '',
      pattern: '^(?=.*[a-zA-Z])(?=.*).{8,25}$',
      errorMessage: '비밀번호가 8자 이상인지 확인해 주세요.',
      required: true,
    }),
  };

  const { onSubmit } = useLogin({ email: form.email.value, password: form.password.value });

  return (
    <Container onSubmit={onSubmit}>
      <Input type='email' label='Email' {...form.email} />
      <Input type='password' label='Password' {...form.password} />
      <Button type='submit' className={'mt-2 bg-rose-400 text-white shadow-md mx-auto'}
              disabled={!form.email.valid || !form.password.valid}>Login</Button>
    </Container>
  );
};

export default Login;
