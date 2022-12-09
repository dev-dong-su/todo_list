import { useEffect, useState } from 'react';
import { createTodo, deleteTodo, getTodo, updateTodo } from '../apis/auth';
import useLocalStorage from './useLocalStorage';
import useRequest from './useRequest';

const useTodo = () => {
  const [todos, setTodos] = useState([]);
  const { handleRequest } = useRequest();
  const { storedValue } = useLocalStorage('access_token');

  useEffect(() => {
    handleGetTodo();
  }, []);

  const handleGetTodo = () => {
    handleRequest({ submitFunction: getTodo, formData: storedValue }).then(response => {
      setTodos(response['data']);
    });
  };

  const handleCreateToDo = todo => {
    handleRequest({
      submitFunction: createTodo,
      formData: { todo: todo, accessToken: storedValue },
    }).then(handleGetTodo);
  };

  const handleUpdateTodo = todo => {
    handleRequest({
      submitFunction: updateTodo,
      formData: { ...todo, accessToken: storedValue },
    }).then(handleGetTodo);
  };

  const handleDeleteTodo = id => {
    handleRequest({ submitFunction: deleteTodo, formData: { id: id, accessToken: storedValue } }).then(handleGetTodo);
  };

  return {
    todos,
    handleCreateToDo,
    handleUpdateTodo,
    handleDeleteTodo,
  };
};

export default useTodo;
