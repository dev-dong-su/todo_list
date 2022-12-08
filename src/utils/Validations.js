const Validations = (pattern) => {
  const patterns = {
    email: '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
    password: '^(?=.*[a-zA-Z])(?=.*).{8,25}$',
  };

  return patterns[pattern];
};

export default Validations;