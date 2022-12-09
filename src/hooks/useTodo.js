import { useEffect, useState } from 'react';
import { Dummy } from '../utils/dummy';

const useTodo = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(pre => Dummy);
  }, []);

  return {
    state,
  };
};

export default useTodo;
