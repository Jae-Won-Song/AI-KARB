import React from 'react';

type ButtonState = 'default' | 'disabled' | 'default_white' | 'default_gray';

type ButtonProps = {
  type: 'button';
  children: React.ReactNode;
  // size?: 'small' | 'medium' | 'large';
  state?: ButtonState;
  onClick?: () => void;
};

const Button = ({ type = 'button', children, state = 'default', onClick }: ButtonProps) => {
  const className = [
    'Button',
    // size,
    state === 'default'
      ? 'Button__default'
      : state === 'disabled'
        ? 'Button__disabled'
        : state === 'default_white'
          ? 'Button__defaultWhite'
          : state === 'default_gray'
            ? 'Button__defaultGray'
            : '',
  ].join(' ');

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
