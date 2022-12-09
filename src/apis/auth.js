import { client } from './index';

export const join = formData => client.post('/auth/signup', { email: formData.email, password: formData.password });

export const login = formData => client.post('/auth/signin', { email: formData.email, password: formData.password });

export const createTodo = todo => client.post('/todos', { todo: todo });

export const getTodo = () => client.get('/todos', {});

export const updateTodo = ({ id, todo, isCompleted }) => client.put(`/todos/${id}`, {});

export const deleteTodo = ({ id, todo, isCompleted }) => client.put(`/todos/${id}`, {});
