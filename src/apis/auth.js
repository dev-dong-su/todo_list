import { client, handleError } from './index';

export const join = (formData) =>
  client.post('/auth/signup', { email: formData.email, password: formData.password });

export const login =  ({ email, password }) =>
  client.post('/auth/signin', { email: email, password: password });
