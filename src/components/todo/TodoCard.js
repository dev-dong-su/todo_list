import tw from 'tailwind-styled-components';
import { Delete, Edit } from '../../utils/Svg';
import Button from '../common/Button';

const Container = tw.div`grid rounded-xl px-3 py-6 shadow-md my-4 grid-flow-col h-24 w-11/12 bg-white justify-between gap-2 items-center`;

const ButtonContainer = tw.div`flex flex-row gap-1`;

const Checkbox = tw.input`w-6 h-6 accent-rose-500 peer`;

const CheckBoxLabel = tw.label`hidden`;

const Todo = tw.p`peer-checked:line-through overflow-hidden`;

const TodoCard = ({ id, todo, isCompleted, handleUpdateTodo, handleDeleteTodo }) => {
  const handleOnChange = () => {
    handleUpdateTodo({ id: id, isCompleted: !isCompleted, todo: todo });
  };

  const deleteOnClicke = () => {
    handleDeleteTodo(id);
  };

  const editOnClicke = () => {
    handleDeleteTodo(id);
  };

  return (
    <Container onClick={handleOnChange}>
      <Checkbox type="checkbox" checked={isCompleted} readOnly />
      <Todo>{todo}</Todo>
      <ButtonContainer>
        <Button onClick={editOnClicke} className={' bg-rose-50'}>
          <Edit color={'#fb7185'} props={'h-6 w-4'} />
        </Button>
        <Button onClick={deleteOnClicke} className={'text-white bg-rose-400'}>
          <Delete color={'white'} props={'h-6 w-4'} />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default TodoCard;
