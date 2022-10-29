import { FC } from 'react';

import { HTMLButtonProps } from '@/types/html';

import styles from './styles.module.css';

type ButtonVariant = 'primary' | 'secondary';

export interface Props extends HTMLButtonProps {
  variant?: ButtonVariant;
  loading?: boolean;
  RightIcon?: () => JSX.Element;
  LeftIcon?: () => JSX.Element;
}

const Button: FC<Props> = ({ children, variant = 'primary', loading: isLoading, ...rest }) => (
  <button className={styles[variant]} {...rest}>
    {!isLoading && children}
  </button>
);

export default Button;
