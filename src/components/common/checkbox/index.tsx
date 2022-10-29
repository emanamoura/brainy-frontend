import { XCircle } from 'phosphor-react';
import { ChangeEvent, FC } from 'react';

import Hobbie from '@/models/hobbie/hobbie';
/* eslint-disable jsx-a11y/label-has-associated-control */

interface Props {
  id?: string;
  name?: string;
  title?: string;
  options: Hobbie[];
  selectedOptions?: string[];
  errorMessage?: string;
  onChange?: (selectedOptions: string[]) => void;
}

const Checkbox: FC<Props> = ({ title, options, selectedOptions = [], id, onChange, errorMessage }) => {
  function handleOptions(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;

    if (isChecked) {
      const optionToCheck = event.target.value;
      const newSelectedOptions = [...selectedOptions, optionToCheck];
      onChange?.(newSelectedOptions);
    } else {
      const optionToUncheck = event.target.value;
      const newSelectedOptions = selectedOptions.filter((option) => option !== optionToUncheck);
      onChange?.(newSelectedOptions);
    }
  }

  return (
    <div className="row col-5">
      <div className="flex flex-col gap-y-4">
        {title && <p className="text-md font-bold">{title}</p>}
        {options.map((option) => {
          return (
            <div key={option.id()}>
              <label>
                <input
                  name={option.name()}
                  id={id}
                  type="checkbox"
                  value={option.id()}
                  checked={selectedOptions.includes(option.id())}
                  onChange={handleOptions}
                />
                {option.name()}
              </label>
            </div>
          );
        })}
        {errorMessage && (
          <div className="text-tertiary-medium mt-1 flex items-center justify-between sm:mt-2">
            <div className="flex items-center">
              <XCircle size={24} />
              <span className="ml-1 text-sm ">{errorMessage}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
