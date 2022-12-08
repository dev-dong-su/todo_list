import { client, handleError } from './index';

export const join = ({ email, password }) =>
  client.post('/auth/signup', { email: email, password: password }).catch(handleError);

export const login =  ({ email, password }) =>
  client.post('/auth/signin', { email: email, password: password });
