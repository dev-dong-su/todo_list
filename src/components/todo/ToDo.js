import tw from 'tailwind-styled-components';
import useInput from '../../hooks/useInput';
import useTodo from '../../hooks/useTodo';
import Button from '../common/Button';
import Container from '../common/Container';
import Input from '../common/Input';
import TodoCard from './TodoCard';

const Header = tw.div`flex flex-row mt-1 w-11/12 justify-between items-end`;

const Title = tw.h2`font-extrabold text-4xl text-rose-400`;

const Content = tw.div`flex flex-col items-center rounded-xl`;

const InputContainer = tw.form`flex flex-row w-11/12 mt-2 mb-3 justify-center items-center rounded-xl gap-1`;

const Todo = () => {
  const todoInput = useInput({
    initialValue: '',
    required: true,
  });

  const { state } = useTodo();

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
      <InputContainer>
        <Input type="text" {...todoInput} />
        <Button type="submit" className={'bg-rose-400 text-white shadow-md mx-auto w-24 h-12'}>
          Send
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Todo;
