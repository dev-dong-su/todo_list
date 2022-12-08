import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import Login from './Login';
import Register from './Join';
import useAuthMethod from '../../hooks/useAuthMethod';
import RadioGroup from '../RadioGroup';
import Radio from '../common/Radio';

const Container = tw.div`flex flex-col shadow-md items-center w-11/12 h-5/6 mx-auto rounded-xl gap-2 bg-slate-50 my-auto`;

const Header = tw.div`flex flex-col items-center gap-5 w-full shadow-md p-4 rounded-xl`;

const Title = tw.h2`text-7xl text-rose-400`;

const Account = () => {
  const {authMethod, onChange} = useAuthMethod('login');

  return (
    <Container>
      <Header>
        <Title>TODO</Title>
          <RadioGroup value={authMethod} onChange={onChange}>
            <Radio value='login'>Login</Radio>
            <Radio value='join'>Join</Radio>
          </RadioGroup>
      </Header>
      {authMethod === 'login' ? <Login /> : <Register />}
    </Container>);
};

export default Account;