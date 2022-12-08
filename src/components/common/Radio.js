import { useContext } from 'react';
<<<<<<< work/Account
import tw from 'tailwind-styled-components';
import { RadioContext } from '../../contexts/RadioContext';

const Label = tw.div`text-slate-600 transition ease-in duration-100 w-32 text-center
=======
import { RadioContext } from '../../contexts/RadioContext';
import tw from 'tailwind-styled-components';

const Label = tw.div`text-slate-600 transition ease-in duration-100
>>>>>>> main
peer-checked:border-b-2 peer-checked:border-b-rose-400 peer-checked:text-rose-400`;

function Radio({ children, value, name, defaultChecked, disabled }) {
  const radioGroup = useContext(RadioContext);

  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
<<<<<<< work/Account
        className="appearance-none peer"
        disabled={disabled || radioGroup.disabled}
        checked={radioGroup.value !== undefined ? value === radioGroup.value : undefined}
        onChange={e => radioGroup.onChange && radioGroup.onChange(e.target.value)}
=======
        className='appearance-none peer'
        disabled={disabled || radioGroup.disabled}
        checked={radioGroup.value !== undefined ? value === radioGroup.value : undefined}
        onChange={(e) => radioGroup.onChange && radioGroup.onChange(e.target.value)}
>>>>>>> main
      />
      <Label>{children}</Label>
    </label>
  );
}

<<<<<<< work/Account
export default Radio;
=======
export default Radio;
>>>>>>> main
