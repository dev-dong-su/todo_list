import tw from 'tailwind-styled-components';

const ContainerStyle = tw.div`flex flex-col shadow-md items-center w-11/12 h-5/6 mx-auto rounded-xl gap-2 bg-slate-50 my-auto`;

const Container = ({ children, ...rest }) => {
  return <ContainerStyle {...rest}>{children}</ContainerStyle>;
};

export default Container;
