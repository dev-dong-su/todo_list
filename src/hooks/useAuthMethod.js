import { useState } from 'react';

const useAuthMethod = initialValue => {
  const [authMethod, setAuthMethod] = useState(initialValue);

  return {
    authMethod,
    onChange: setAuthMethod,
  };
};

export default useAuthMethod;
