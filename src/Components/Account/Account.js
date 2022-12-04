import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import Login from './Login';
import Register from './Join';

const Container = tw.div`flex flex-col shadow-md items-center w-11/12 h-5/6 mx-auto rounded-xl gap-2 bg-slate-50 my-auto`;

const Header = tw.div`flex flex-col items-center gap-5 w-full shadow-md p-4 rounded-xl`;

const AuthContainer = tw.div`flex flex-row w-full items-evenly`;

const UserAuth = tw.div`flex justify-center items-center border-b-2 border-b-rose-400 text-rose-400 w-32 mx-auto p-4 text-xl font-semibold`;

const Title = tw.h2`text-7xl text-rose-400`;

const Account = () => {
  const [authMethod, setMethod] = useState('login');

  const handleOnClick = (e) => {
    setMethod(e.target.id);
  };

  return (
    <Container>
      <Header>
        <Title>TODO</Title>
        <AuthContainer>
          <UserAuth id='login' onClick={handleOnClick}>Login</UserAuth>
          <UserAuth id='join' onClick={handleOnClick}>Join</UserAuth>
        </AuthContainer>
      </Header>
      {authMethod === 'login' ? <Login /> : <Register />}
    </Container>);
};

export default Account;
