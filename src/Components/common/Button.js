import tw from 'tailwind-styled-components';

const StyledButton = tw.button`px-3 py-2 shadow-sm rounded-md text-md`;

const Button = ({onClick, to, children, className}) => {
  return (
    <StyledButton onClick={onClick} className={className}>{children}</StyledButton>
  );
};

export default Button;
