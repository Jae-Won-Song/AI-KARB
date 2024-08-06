import React from 'react';

type ButtonProps = {
  type: 'button';
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  onClick?: () => void;
};

const Button = ({ type = 'button', children, size, color = 'primary', onClick }: ButtonProps) => {
  return (
    <button type={type} className={['Button', size, color].join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
