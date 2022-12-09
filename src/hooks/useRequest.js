import { handleError } from '../apis';

const useRequest = () => {
  const handleRequest = ({ submitFunction, formData }) => submitFunction(formData).catch(handleError);
  return {
    handleRequest,
  };
};

export default useRequest;
