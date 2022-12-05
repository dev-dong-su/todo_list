import Input from '../common/Input';
import Button from '../common/Button';
import tw from 'tailwind-styled-components';
import useInput from '../../hooks/useInput';

const Container = tw.form`flex flex-col w-10/12 h-full justify-center items-center rounded-xl`;

const Register = () => {
  const form = {
    email: useInput({
      initialValue: '',
      errorMessage: '이메일 형식이 올바르지 않습니다.',
    }),
    password: useInput({
      initialValue:'',
      pattern: '^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$',
      errorMessage: '비밀번호 형식이 올바르지 않습니다.',
    }),
    pwdCheck: useInput({
      initialValue:'',
      errorMessage: '비밀번호가 같지 않습니다.',
    }),
  };

  return (
    <Container>
      <Input type='email' label='Email' {...form.email} />
      <Input type='password' label='Password' {...form.password} />
      <Input type='password' label='Password Check' {...form.pwdCheck} pattern={form.password.value} />
      <Button to='/' className={'mt-1 bg-rose-400 text-white shadow-md mx-auto'}>Join</Button>
    </Container>);
};

export default Register;
