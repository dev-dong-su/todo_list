import Input from '../common/Input';
import Button from '../common/Button';
import tw from 'tailwind-styled-components';
import useInput from '../../hooks/useInput';

const Container = tw.div`flex flex-col w-10/12 h-full justify-center items-center rounded-xl gap-4`;

const Register = () => {
  const form = {
    email: useInput(''),
    password: useInput(''),
    pwdCheck: useInput(''),
  };

  return (
    <Container>
      <Input type='text' label='Email' {...form.email} />
      <Input type='password' label='Password' {...form.password} />
      <Input type='password' label='Password Check' {...form.pwdCheck} />
      <Button to='/' className={'mt-1 bg-rose-400 text-white shadow-md mx-auto'}>Join</Button>
    </Container>);
};

export default Register;
