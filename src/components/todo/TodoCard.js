import tw from 'tailwind-styled-components';

const Container = tw.div`flex flex-row`;

const Checkbox = tw.input`w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 peer`;

const Todo = tw.label`peer-checked:line-through`;

const TodoCard = ({ id, todo, isCompleted, userId }) => {
  return (
    <Container>
      <Checkbox type="checkbox"></Checkbox>
      <Todo>{todo}</Todo>
    </Container>
  );
};

export default TodoCard;
