import { XCircle } from 'phosphor-react';
import { FC } from 'react';

import styles from '@/components/common/input/styles.module.css';

interface Props extends React.HTMLProps<HTMLInputElement> {
  errorMessage?: string;
  description?: string;
  isRequired?: boolean;
}

const Input: FC<Props> = ({ type, errorMessage, description, disabled, isRequired, id, ...rest }: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <input id={id} disabled={disabled} type={type} required={isRequired} className={styles.input} {...rest} />
      </div>
      {errorMessage && !disabled ? (
        <div>
          <div>
            <XCircle size={24} color="#e66860" />
            <span>{errorMessage}</span>
          </div>
          {description && <span>{description}</span>}
        </div>
      ) : (
        description && <span>{description}</span>
      )}
    </div>
  );
};

export default Input;
