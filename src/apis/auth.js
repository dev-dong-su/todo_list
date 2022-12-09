import { client } from './index';

export const join = formData => client.post('/auth/signup', { email: formData.email, password: formData.password });

export const login = formData => client.post('/auth/signin', { email: formData.email, password: formData.password });

export const createTodo = ({ todo, accessToken }) =>
  client.post('/todos', { todo: todo }, { headers: { Authorization: `Bearer ${accessToken}` } });

export const getTodo = accessToken => client.get('/todos', { headers: { Authorization: `Bearer ${accessToken}` } });

export const updateTodo = formData =>
  client.put(
    `/todos/${formData.id}`,
    { todo: formData.todo, isCompleted: formData.isCompleted },
    { headers: { Authorization: `Bearer ${formData.accessToken}` } },
  );

export const deleteTodo = formData =>
  client.delete(`/todos/${formData.id}`, { headers: { Authorization: `Bearer ${formData.accessToken}` } });
