import { handleError } from '../apis';

const useRequest = () => {
  const handleRequest = ({ submitFunction, formData, action }) =>
    submitFunction(formData).then(response => {
      action(response);
    }).catch(handleError);

  return {
    handleRequest,
  };
};

export default useRequest;