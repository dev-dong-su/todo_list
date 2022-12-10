import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodo, deleteTodo, getTodo, updateTodo } from '../apis/todo';
import useLocalStorage from './useLocalStorage';
import useRequest from './useRequest';

const useTodo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const { handleRequest } = useRequest();
  const { storedValue, deleteValue } = useLocalStorage('access_token');

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

  const handleLogOut = () => {
    deleteValue();
    navigate('/');
  };

  return {
    todos,
    handleCreateToDo,
    handleUpdateTodo,
    handleDeleteTodo,
    handleLogOut,
  };
};

export default useTodo;
