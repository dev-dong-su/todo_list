import tw from 'tailwind-styled-components';
import useAuthMethod from '../../hooks/useAuthMethod';
import Container from '../common/Container';
import Radio from '../common/Radio';
import RadioGroup from '../RadioGroup';
import Join from './Join';
import Login from './Login';

const Header = tw.div`flex flex-col items-center gap-5 w-full shadow-md p-4 rounded-xl`;

const Title = tw.h2`text-7xl text-rose-400`;

const Account = () => {
  const { authMethod, onChange } = useAuthMethod('login');

  return (
    <Container>
      <Header>
        <Title>TODO</Title>
        <RadioGroup value={authMethod} onChange={onChange}>
          <Radio value="login">Login</Radio>
          <Radio value="join">Join</Radio>
        </RadioGroup>
      </Header>
      {authMethod === 'login' ? <Login /> : <Join />}
    </Container>
  );
};

export default Account;
