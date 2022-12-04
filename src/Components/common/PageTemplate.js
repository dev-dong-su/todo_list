import tw from 'tailwind-styled-components';

const Container = tw.div`flex container mx-auto max-w-screen-md h-screen my-auto`;

const PageTemplate = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default PageTemplate;
