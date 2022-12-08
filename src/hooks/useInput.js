import { useState } from 'react';

const useInput = ({initialValue, errorMessage, required, pattern}) => {
  const [value, setValue] = useState(initialValue);
  const [valid, setValid] = useState(false);

  const handleChange = (event) => {
    event.target.value.match(pattern) ?
      setValid((pre) => pre = true) : setValid((pre) => pre = false);
    setValue((pre) => pre = event.target.value);
  };

  return {
    value,
    errorMessage,
    required,
    valid,
    onChange: handleChange,
  };
};

export default useInput;