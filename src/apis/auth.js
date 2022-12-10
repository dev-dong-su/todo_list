import { client } from './index';

export const join = formData => client.post('/auth/signup', { email: formData.email, password: formData.password });

export const login = formData => client.post('/auth/signin', { email: formData.email, password: formData.password });
