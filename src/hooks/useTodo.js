import { useEffect, useState } from 'react';
import { createTodo, getTodo } from '../apis/auth';
import useLocalStorage from './useLocalStorage';
import useRequest from './useRequest';

const useTodo = () => {
  const [state, setState] = useState([]);
  const { handleRequest } = useRequest();
  const { storedValue } = useLocalStorage('access_token');

  useEffect(() => {
    handleRequest({ submitFunction: getTodo, formData: storedValue }).then(response => {
      setState(response['data']);
    });
  }, []);

  const handleCreateToDo = todo => {
    handleRequest({
      submitFunction: createTodo,
      formData: { todo: todo, accessToken: storedValue },
    }).then(response => setState([...state, response['data']]));
  };

  return {
    state,
    handleCreateToDo,
  };
};

export default useTodo;
