import React from 'react';
import * as styles from './button.css';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button {...props} className={styles.buttonStyle}>
      {label}
    </button>
  );
};

export default Button;
