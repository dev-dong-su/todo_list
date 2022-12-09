import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { createTodo, getTodo } from '../../apis/auth';
import useInput from '../../hooks/useInput';
import useLocalStorage from '../../hooks/useLocalStorage';
import useRequest from '../../hooks/useRequest';
import Button from '../common/Button';
import Container from '../common/Container';
import Input from '../common/Input';
import TodoCard from './TodoCard';

const Header = tw.div`flex flex-row mt-1 w-11/12 justify-between items-end`;

const Title = tw.h2`font-extrabold text-4xl text-rose-400`;

const Content = tw.div`flex flex-col items-center rounded-xl`;

const InputContainer = tw.form`flex flex-row w-11/12 mt-2 mb-3 justify-center items-center rounded-xl gap-1`;

const Todo = () => {
  const [state, setState] = useState([]);
  const { handleRequest } = useRequest();
  const { storedValue } = useLocalStorage('access_token');
  const todoInput = useInput({
    initialValue: '',
    required: true,
  });

  useEffect(() => {
    const initTodo = response => {
      setState(response['data']);
    };
    handleRequest({ submitFunction: getTodo, formData: storedValue, action: initTodo });
  }, []);

  useEffect(() => {}, [state]);

  const handleOnSubmit = event => {
    const addTodo = response => {
      setState([...state, response['data']]);
    };
    event.preventDefault();
    handleRequest({
      submitFunction: createTodo,
      formData: { todo: todoInput.value, accessToken: storedValue },
      action: addTodo,
    });
  };

  return (
    <Container>
      <Header>
        <Title>Todo</Title>
        <Button className={'shadow-none text-rose-400 font-extrabold p-0 text-xl'}>Logout</Button>
      </Header>
      <Content className="w-11/12 h-full bg-slate-100">
        {state.map(todoData => (
          <TodoCard
            key={todoData.id}
            id={todoData.id}
            isCompleted={todoData.isCompleted}
            userId={todoData.userId}
            todo={todoData.todo}
          />
        ))}
      </Content>
      <InputContainer onSubmit={handleOnSubmit}>
        <Input type="text" {...todoInput} />
        <Button type="submit" className={'bg-rose-400 text-white shadow-md mx-auto w-24 h-12'}>
          Send
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Todo;
