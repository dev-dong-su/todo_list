import { useEffect, useState } from 'react';
import { handleError } from '../apis';

const useSubmit = ({ submitFunction, formData }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    submitFunction(formData).then(response => {
      setData(response.data);
      setLoading(false);
    }).catch(handleError);
  };

  return {
    onSubmit: handleSubmit,
    data,
    loading: loading?.toString(),
  };
};

export default useSubmit;