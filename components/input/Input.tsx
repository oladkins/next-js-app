import React, { ChangeEvent } from 'react';
import styles from './Input.module.css';

type InputType = {
  className?: string;
  placeholder?: string;
  type?: string;
  onChange?: (val: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  required?: boolean;
};
const Input = ({
  className,
  placeholder,
  type = 'text',
  onChange,
  value,
  required = false,
}: InputType) => (
  <input
    type={type}
    placeholder={placeholder}
    className={className || styles.input}
    value={value}
    onChange={onChange}
    required={required}
  />
);

export default Input;
