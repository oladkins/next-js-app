import React from 'react';
import Spinner from '@/components/spinner/Spinner';

type ButtonType = {
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  onClick?: () => void;
  className?: string;
  img?: JSX.Element;
  disabled?: boolean;
  isLoading?: boolean;
};

const Button = ({ type, text, onClick, className, img, disabled, isLoading }: ButtonType) => {
  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled || isLoading}>
      {isLoading ? <Spinner /> : text} {img ? isLoading ? null : img : null}
    </button>
  );
};

export default Button;
