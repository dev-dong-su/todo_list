import { useState } from 'react';

const useInput = ({initialValue, errorMessage, pattern}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue((pre) => pre = event.target.value);
  };

  return {
    value,
    errorMessage,
    pattern,
    onChange: handleChange,
  };
};

export default useInput;