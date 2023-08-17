import React, { ChangeEvent } from 'react';
import styles from './Textarea.module.css';

type TextareaType = {
  className?: string;
  placeholder?: string;
  cols: number;
  rows: number;
  value?: string;
  onChange?: (val: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
};

const Textarea = ({
  onChange,
  className,
  placeholder,
  value,
  rows,
  cols,
  required,
}: TextareaType) => (
  <textarea
    className={className || styles.textarea}
    placeholder={placeholder}
    cols={cols}
    rows={rows}
    value={value}
    onChange={onChange}
    required={required}
  ></textarea>
);

export default Textarea;
