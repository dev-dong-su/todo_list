import tw from 'tailwind-styled-components';

const Container = tw.div`relative pt-5 w-full`;

const StyledInput = tw.input`p-3 w-full text-gray-900 bg-slate-50 rounded-lg border-2 border-slate-600 
transition ease-in duration-400
focus:outline-none focus:border-rose-400 peer`;

const StyledLabel = tw.label`absolute text-slate-500 text-sm top-0 left-0 z-10 bg-transparent
peer-focus:text-rose-400`;

const ErrorMessage = tw.span`invisible peer-focus:peer-invalid:visible text-rose-400 text-sm ml-2`;

const Input = ({ type, label, errorMessage, ...rest}) => {
  return (
    <Container>
      <StyledInput type={type} placeholder='' {...rest} required/>
      <StyledLabel>{label}</StyledLabel>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};

export default Input;
