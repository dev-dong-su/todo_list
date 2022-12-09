import { useMemo, useState } from 'react';
import Validations from '../utils/Validations';

const useInput = ({ initialValue, errorMessage, required, pattern }) => {
  const [value, setValue] = useState(initialValue);
  const [valid, setValid] = useState(false);
  const getPattern = useMemo(() => Validations(pattern), [pattern]);

  const handleChange = event => {
    event.target.value.match(getPattern) ? setValid(pre => true) : setValid(pre => false);
    setValue(pre => event.target.value);
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
