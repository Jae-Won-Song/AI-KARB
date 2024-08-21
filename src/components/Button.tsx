import React from 'react';

type ButtonState = 'default' | 'disabled' | 'default_white' | 'default_gray';

type ButtonProps = {
  type: 'button';
  children: React.ReactNode;
  state?: ButtonState;
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
};

const Button = ({ type = 'button', children, state = 'default', onClick, width, height }: ButtonProps) => {
  const className = [
    'Button',
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

  const style = {
    width,
    height,
  };

  return (
    <button type={type} className={className} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
