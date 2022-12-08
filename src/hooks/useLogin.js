import { useState } from 'react';
import useSubmit from './useSubmit';
import { login } from '../apis/auth';

const useLogin = ({email, password}) => {
  const { data, onSubmit } = useSubmit({
    submitFunction: login,
    formData : { email: email, password: password }
  });

  return {
    onSubmit,
    data,
  };
};

export default useLogin;