import { useState } from 'react';

const useRequest = () => {
  const [error, setError] = useState(false);

  const handleRequest = ({ submitFunction, formData }) =>
    submitFunction(formData).catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
        setError(true);
      }
    });
  return {
    handleRequest,
    error,
  };
};

export default useRequest;
