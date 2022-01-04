import React from 'react';
import { darkTheme, lightTheme, vars } from './theme.css';
import * as styles from './button.css';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <div className={darkTheme}>
      <button {...props} className={styles.buttonStyle}>
        {label}
      </button>
    </div>
  );
};

export default Button;
