import { useContext } from 'react';
import tw from 'tailwind-styled-components';
import { RadioContext } from '../../contexts/RadioContext';

const Label = tw.div`text-slate-600 transition ease-in duration-100 w-32 text-center
peer-checked:border-b-2 peer-checked:border-b-rose-400 peer-checked:text-rose-400`;

function Radio({ children, value, name, defaultChecked, disabled }) {
  const radioGroup = useContext(RadioContext);

  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        className="appearance-none peer"
        disabled={disabled || radioGroup.disabled}
        checked={radioGroup.value !== undefined ? value === radioGroup.value : undefined}
        onChange={e => radioGroup.onChange && radioGroup.onChange(e.target.value)}
      />
      <Label>{children}</Label>
    </label>
  );
}

export default Radio;
